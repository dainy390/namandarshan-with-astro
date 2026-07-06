import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Mic, MicOff, PhoneOff, RefreshCw, Video, VideoOff } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useSocket } from "@/context/SocketContext";
import { useWallet } from "@/context/WalletContext";
import { canStartConsultation } from "@/utils/consultationAccess";
import { finalizeWalletConsultationSession } from "@/utils/consultationSession";

interface WebRTCCallProps {
  bookingId?: string;
  roomId?: string;
  sessionSeconds?: number;
}

type SignalDescription = RTCSessionDescriptionInit;
type SignalCandidate = RTCIceCandidateInit;

const iceServers: RTCIceServer[] = [
  { urls: "stun:stun.l.google.com:19302" },
  { urls: "stun:stun1.l.google.com:19302" },
];

const WebRTCCall = ({
  bookingId: bookingIdProp,
  roomId: roomIdProp,
  sessionSeconds: sessionSecondsProp,
}: WebRTCCallProps = {}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { socket, isConnected } = useSocket();
  const { user } = useAuth();
  const { balance, refreshBalance } = useWallet();

  const isPandit = ["pandit", "astrologer"].includes(user?.role || "");
  const hasWalletBalance = canStartConsultation(balance);
  const bookingId = bookingIdProp || location.state?.bookingId || "";
  const roomId = roomIdProp || location.state?.roomId || bookingId || "astro-room";
  const initialSessionSeconds = Number(sessionSecondsProp || location.state?.durationSeconds || 300);
  const displayName = user?.name || (isPandit ? "Pandit" : "Devotee");
  const participantRole = isPandit ? "astro" : "user";

  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const localStreamRef = useRef<MediaStream | null>(null);
  const remoteStreamRef = useRef<MediaStream | null>(null);
  const pendingCandidatesRef = useRef<SignalCandidate[]>([]);
  const joinedRoomRef = useRef(false);
  const hasFinalizedRef = useRef(false);

  const [seconds, setSeconds] = useState(initialSessionSeconds);
  const [status, setStatus] = useState("Preparing camera and microphone...");
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [remoteName, setRemoteName] = useState("Waiting for participant");
  const [callEnded, setCallEnded] = useState(false);

  const finalizeSession = useCallback(async () => {
    if (isPandit || !bookingId || hasFinalizedRef.current) return;
    hasFinalizedRef.current = true;

    try {
      await finalizeWalletConsultationSession(bookingId);
      await refreshBalance();
    } catch (error) {
      console.error("[WebRTCCall] Failed to finalize consultation:", error);
    }
  }, [bookingId, isPandit, refreshBalance]);

  const stopLocalMedia = useCallback(() => {
    localStreamRef.current?.getTracks().forEach((track) => track.stop());
    localStreamRef.current = null;
    setLocalStream(null);
  }, []);

  const closePeerConnection = useCallback(() => {
    peerConnectionRef.current?.close();
    peerConnectionRef.current = null;
    remoteStreamRef.current = null;
    pendingCandidatesRef.current = [];
    setRemoteStream(null);
  }, []);

  const leaveSocketRoom = useCallback(
    (notifyEnd = false) => {
      if (!socket || !roomId || !joinedRoomRef.current) return;

      if (notifyEnd) {
        socket.emit("call:end", { roomId });
      }

      socket.emit("call:leave", {
        roomId,
        role: participantRole,
        name: displayName,
      });
      joinedRoomRef.current = false;
    },
    [displayName, participantRole, roomId, socket]
  );

  const setupPeerConnection = useCallback(() => {
    if (peerConnectionRef.current) return peerConnectionRef.current;

    const peerConnection = new RTCPeerConnection({ iceServers });
    const remoteMediaStream = new MediaStream();
    remoteStreamRef.current = remoteMediaStream;
    setRemoteStream(remoteMediaStream);

    localStreamRef.current?.getTracks().forEach((track) => {
      peerConnection.addTrack(track, localStreamRef.current!);
    });

    peerConnection.onicecandidate = (event) => {
      if (!event.candidate || !socket || !roomId) return;
      socket.emit("call:ice-candidate", {
        roomId,
        candidate: event.candidate.toJSON(),
      });
    };

    peerConnection.ontrack = (event) => {
      event.streams[0]?.getTracks().forEach((track) => {
        const alreadyAdded = remoteMediaStream.getTracks().some((item) => item.id === track.id);
        if (!alreadyAdded) remoteMediaStream.addTrack(track);
      });
      setRemoteStream(remoteMediaStream);
      setStatus("Connected");
    };

    peerConnection.onconnectionstatechange = () => {
      const state = peerConnection.connectionState;
      if (state === "connected") setStatus("Connected");
      if (state === "connecting") setStatus("Connecting media...");
      if (state === "failed") setStatus("Connection failed. Try reconnecting.");
      if (state === "disconnected") setStatus("Participant disconnected");
      if (state === "closed") setStatus("Call ended");
    };

    peerConnectionRef.current = peerConnection;
    return peerConnection;
  }, [roomId, socket]);

  const flushPendingCandidates = useCallback(async () => {
    const peerConnection = peerConnectionRef.current;
    if (!peerConnection?.remoteDescription) return;

    const candidates = pendingCandidatesRef.current.splice(0);
    for (const candidate of candidates) {
      await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
    }
  }, []);

  const createAndSendOffer = useCallback(async () => {
    if (!socket || !roomId || callEnded) return;

    const peerConnection = setupPeerConnection();
    if (peerConnection.signalingState !== "stable") return;

    try {
      setStatus("Calling participant...");
      const offer = await peerConnection.createOffer({
        offerToReceiveAudio: true,
        offerToReceiveVideo: true,
      });
      await peerConnection.setLocalDescription(offer);
      socket.emit("call:offer", {
        roomId,
        description: peerConnection.localDescription,
      });
    } catch (error) {
      console.error("[WebRTCCall] Failed to create offer:", error);
      setStatus("Unable to start media call");
    }
  }, [callEnded, roomId, setupPeerConnection, socket]);

  const endCall = useCallback(
    async (notifyPeer = true) => {
      setCallEnded(true);
      leaveSocketRoom(notifyPeer);
      closePeerConnection();
      stopLocalMedia();
      await finalizeSession();
      navigate(isPandit ? "/pandit-dashboard" : "/devotee-dashboard", { replace: true });
    },
    [closePeerConnection, finalizeSession, isPandit, leaveSocketRoom, navigate, stopLocalMedia]
  );

  useEffect(() => {
    if (!isPandit && !hasWalletBalance) {
      navigate("/wallet", { replace: true });
    }
  }, [hasWalletBalance, isPandit, navigate]);

  useEffect(() => {
    let cancelled = false;

    const startMedia = async () => {
      try {
        let stream: MediaStream;
        try {
          stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        } catch (videoError) {
          stream = await navigator.mediaDevices.getUserMedia({ video: false, audio: true });
          setIsCameraOff(true);
          toast.message("Camera unavailable. Continuing with audio.");
        }

        if (cancelled) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }

        localStreamRef.current = stream;
        setLocalStream(stream);
        setStatus("Waiting for participant...");
      } catch (error) {
        console.error("[WebRTCCall] Media permission error:", error);
        setStatus("Allow microphone and camera access to join the call.");
        toast.error("Microphone or camera access was blocked.");
      }
    };

    startMedia();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (localVideoRef.current && localStream) {
      localVideoRef.current.srcObject = localStream;
    }
  }, [localStream]);

  useEffect(() => {
    if (remoteVideoRef.current && remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream;
    }
  }, [remoteStream]);

  useEffect(() => {
    if (!socket || !isConnected || !roomId || !localStream || joinedRoomRef.current || callEnded) return;

    socket.emit("call:join", {
      roomId,
      bookingId,
      role: participantRole,
      name: displayName,
    });
    joinedRoomRef.current = true;
    setStatus("Waiting for participant...");
  }, [bookingId, callEnded, displayName, isConnected, localStream, participantRole, roomId, socket]);

  useEffect(() => {
    if (!socket) return;

    const handlePeerJoined = ({ name }: { from?: string; name?: string }) => {
      setRemoteName(name || "Participant");
      void createAndSendOffer();
    };

    const handleOffer = async ({ description, name }: { description: SignalDescription; name?: string }) => {
      if (!description || callEnded) return;
      setRemoteName(name || "Participant");

      try {
        const peerConnection = setupPeerConnection();
        await peerConnection.setRemoteDescription(new RTCSessionDescription(description));
        await flushPendingCandidates();

        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);
        socket.emit("call:answer", {
          roomId,
          description: peerConnection.localDescription,
        });
        setStatus("Connecting media...");
      } catch (error) {
        console.error("[WebRTCCall] Failed to handle offer:", error);
        setStatus("Unable to answer call");
      }
    };

    const handleAnswer = async ({ description }: { description: SignalDescription }) => {
      if (!description || callEnded) return;

      try {
        const peerConnection = setupPeerConnection();
        if (peerConnection.signalingState !== "closed") {
          await peerConnection.setRemoteDescription(new RTCSessionDescription(description));
          await flushPendingCandidates();
          setStatus("Connecting media...");
        }
      } catch (error) {
        console.error("[WebRTCCall] Failed to handle answer:", error);
      }
    };

    const handleCandidate = async ({ candidate }: { candidate: SignalCandidate }) => {
      if (!candidate || callEnded) return;

      try {
        const peerConnection = setupPeerConnection();
        if (peerConnection.remoteDescription) {
          await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
        } else {
          pendingCandidatesRef.current.push(candidate);
        }
      } catch (error) {
        console.error("[WebRTCCall] Failed to add ICE candidate:", error);
      }
    };

    const handlePeerLeft = () => {
      setStatus("Participant left the call");
      closePeerConnection();
    };

    const handleRemoteEnd = () => {
      toast.message("The call has ended.");
      void endCall(false);
    };

    socket.on("call:peer-joined", handlePeerJoined);
    socket.on("call:offer", handleOffer);
    socket.on("call:answer", handleAnswer);
    socket.on("call:ice-candidate", handleCandidate);
    socket.on("call:peer-left", handlePeerLeft);
    socket.on("call:end", handleRemoteEnd);

    return () => {
      socket.off("call:peer-joined", handlePeerJoined);
      socket.off("call:offer", handleOffer);
      socket.off("call:answer", handleAnswer);
      socket.off("call:ice-candidate", handleCandidate);
      socket.off("call:peer-left", handlePeerLeft);
      socket.off("call:end", handleRemoteEnd);
    };
  }, [
    callEnded,
    closePeerConnection,
    createAndSendOffer,
    endCall,
    flushPendingCandidates,
    roomId,
    setupPeerConnection,
    socket,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds !== 0 || isPandit || callEnded) return;
    toast.error("Your consultation session has ended.");
    void endCall(true);
  }, [callEnded, endCall, isPandit, seconds]);

  useEffect(() => {
    return () => {
      leaveSocketRoom(false);
      closePeerConnection();
      stopLocalMedia();
      void finalizeSession();
    };
  }, [closePeerConnection, finalizeSession, leaveSocketRoom, stopLocalMedia]);

  const toggleMute = () => {
    const nextMuted = !isMuted;
    localStreamRef.current?.getAudioTracks().forEach((track) => {
      track.enabled = !nextMuted;
    });
    setIsMuted(nextMuted);
  };

  const toggleCamera = () => {
    const nextCameraOff = !isCameraOff;
    localStreamRef.current?.getVideoTracks().forEach((track) => {
      track.enabled = !nextCameraOff;
    });
    setIsCameraOff(nextCameraOff);
  };

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const hasRemoteVideo = Boolean(remoteStream?.getVideoTracks().length);
  const hasLocalVideo = Boolean(localStream?.getVideoTracks().length) && !isCameraOff;

  return (
    <div className="flex h-[100dvh] flex-col bg-slate-950 text-white">
      <header className="flex flex-col gap-3 border-b border-white/10 bg-slate-900 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-300">Live Consultation</p>
          <h1 className="truncate text-lg font-bold sm:text-xl">{remoteName}</h1>
          <p className={`text-sm ${isConnected ? "text-emerald-300" : "text-amber-300"}`}>
            {isConnected ? status : "Connecting to call server..."}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {!isPandit && (
            <>
              <div className="rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm">
                Wallet: Rs. {balance}
              </div>
              <div className="rounded-lg border border-orange-300/30 bg-orange-400/10 px-3 py-2 text-sm font-semibold text-orange-100">
                {minutes}:{remainingSeconds.toString().padStart(2, "0")}
              </div>
            </>
          )}
        </div>
      </header>

      <main className="relative min-h-0 flex-1 overflow-hidden">
        <video
          ref={remoteVideoRef}
          autoPlay
          playsInline
          className={`h-full w-full bg-slate-950 object-cover ${hasRemoteVideo ? "block" : "hidden"}`}
        />

        {!hasRemoteVideo && (
          <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-500 text-3xl font-bold">
              {remoteName.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-xl font-semibold">{remoteName}</p>
              <p className="mt-1 text-sm text-slate-300">{status}</p>
            </div>
          </div>
        )}

        <div className="absolute bottom-24 right-4 h-36 w-28 overflow-hidden rounded-lg border border-white/20 bg-slate-900 shadow-2xl sm:h-48 sm:w-36">
          <video
            ref={localVideoRef}
            autoPlay
            muted
            playsInline
            className={`h-full w-full object-cover ${hasLocalVideo ? "block" : "hidden"}`}
          />
          {!hasLocalVideo && (
            <div className="flex h-full items-center justify-center bg-slate-800 text-center text-xs text-slate-300">
              Camera off
            </div>
          )}
        </div>
      </main>

      <footer className="flex shrink-0 items-center justify-center gap-3 border-t border-white/10 bg-slate-900 px-4 py-4">
        <Button
          type="button"
          variant="secondary"
          size="icon"
          onClick={toggleMute}
          className="h-12 w-12 rounded-full"
          aria-label={isMuted ? "Unmute microphone" : "Mute microphone"}
        >
          {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
        </Button>

        <Button
          type="button"
          variant="secondary"
          size="icon"
          onClick={toggleCamera}
          className="h-12 w-12 rounded-full"
          aria-label={isCameraOff ? "Turn camera on" : "Turn camera off"}
        >
          {isCameraOff ? <VideoOff className="h-5 w-5" /> : <Video className="h-5 w-5" />}
        </Button>

        <Button
          type="button"
          variant="secondary"
          size="icon"
          onClick={createAndSendOffer}
          className="h-12 w-12 rounded-full"
          aria-label="Reconnect call"
        >
          <RefreshCw className="h-5 w-5" />
        </Button>

        <Button
          type="button"
          size="icon"
          onClick={() => void endCall(true)}
          className="h-12 w-12 rounded-full bg-rose-600 hover:bg-rose-700"
          aria-label="End call"
        >
          <PhoneOff className="h-5 w-5" />
        </Button>
      </footer>
    </div>
  );
};

export default WebRTCCall;
