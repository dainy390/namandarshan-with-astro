import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import Header from "@/components/layout/Header";
import RechargeModal from "@/components/astrologer/RechargeModal";
import SessionTimer from "@/components/session/sessionTimer";
import { useAuth } from "@/context/AuthContext";
import { useSocket } from "@/context/SocketContext";
import { useWallet } from "@/context/WalletContext";
import { getApiUrl, readJsonResponse } from "@/utils/api";
import { canStartConsultation } from "@/utils/consultationAccess";
import {
  finalizeWalletConsultationSession,
  startWalletConsultationSession,
  submitConsultationFeedback,
} from "@/utils/consultationSession";
import { toast } from "sonner";

interface ChatMessage {
  id: string | number;
  sender: "user" | "astro";
  text: string;
  time: string;
}

type BookingSessionResponse = {
  booking?: {
    customerName?: string;
    customerEmail?: string;
  };
};

const DEFAULT_SESSION_SECONDS = 300;
const DEFAULT_AVATAR = "/assets/pandit-assistant.png";

const AstroChat = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { socket, isConnected } = useSocket();
  const { user } = useAuth();
  const { balance, isLoading: isWalletLoading, refreshBalance } = useWallet();
  const hasWalletBalance = canStartConsultation(balance);
  const isPandit = ["pandit", "astrologer"].includes(user?.role || "");

  const astrologer = useMemo(() => {
    const stateAstrologer = location.state?.astrologer || {};
    return {
      id: String(stateAstrologer.id || stateAstrologer.userId || ""),
      name: stateAstrologer.name || stateAstrologer.displayName || "Pandit",
      avatar: stateAstrologer.avatar || stateAstrologer.image || DEFAULT_AVATAR,
      image: stateAstrologer.image || stateAstrologer.avatar || DEFAULT_AVATAR,
    };
  }, [location.state?.astrologer]);

  const devotee = useMemo(() => {
    const stateDevotee = location.state?.devotee || {};
    return {
      name: stateDevotee.name || stateDevotee.displayName || location.state?.customerName || "Devotee",
      avatar: stateDevotee.avatar || stateDevotee.image || DEFAULT_AVATAR,
      image: stateDevotee.image || stateDevotee.avatar || DEFAULT_AVATAR,
    };
  }, [location.state?.customerName, location.state?.devotee]);

  const routeBookingId = String(location.state?.bookingId || "");
  const initialSessionSeconds = Number(location.state?.durationSeconds || DEFAULT_SESSION_SECONDS);
  const [resolvedDevotee, setResolvedDevotee] = useState(devotee);
  const [activeBookingId, setActiveBookingId] = useState(routeBookingId);
  const [effectiveSessionSeconds, setEffectiveSessionSeconds] = useState(initialSessionSeconds);
  const [isStartingSession, setIsStartingSession] = useState(!routeBookingId && !isPandit);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "astro",
      text: "Namaste. Welcome to your Naman Darshan consultation.",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [message, setMessage] = useState("");
  const [sessionEnded, setSessionEnded] = useState(false);
  const [showRecharge, setShowRecharge] = useState(false);
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [feedbackComment, setFeedbackComment] = useState("");
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeBookingIdRef = useRef(routeBookingId);
  const hasFinalizedRef = useRef(false);

  const roomId =
    location.state?.roomId ||
    activeBookingId ||
    `room-${astrologer.id || "pandit"}-${user?._id || "guest"}`;
  const senderRole: "user" | "astro" = isPandit ? "astro" : "user";
  const chatHeaderPerson = isPandit ? resolvedDevotee : astrologer;

  useEffect(() => {
    setResolvedDevotee(devotee);
  }, [devotee]);

  useEffect(() => {
    activeBookingIdRef.current = activeBookingId;
  }, [activeBookingId]);

  useEffect(() => {
    if (!isPandit || !activeBookingId) return;

    const token = localStorage.getItem("userToken");
    if (!token) return;

    let cancelled = false;

    const loadBookingDevotee = async () => {
      try {
        const response = await fetch(getApiUrl(`/api/bookings/${encodeURIComponent(activeBookingId)}/session`), {
          headers: { Authorization: `Bearer ${token}` },
        });
        const payload = await readJsonResponse<BookingSessionResponse>(response);
        const customerName = payload.booking?.customerName?.trim();

        if (!cancelled && customerName) {
          setResolvedDevotee((prev) => ({
            ...prev,
            name: customerName,
          }));
        }
      } catch (error) {
        console.error("[AstroChat] Failed to load booking devotee:", error);
      }
    };

    loadBookingDevotee();

    return () => {
      cancelled = true;
    };
  }, [activeBookingId, isPandit]);

  const finalizeSession = useCallback(async () => {
    if (isPandit || hasFinalizedRef.current) return;

    const bookingId = activeBookingIdRef.current;
    if (!bookingId) return;

    hasFinalizedRef.current = true;

    try {
      await finalizeWalletConsultationSession(bookingId);
      await refreshBalance();
    } catch (error) {
      console.error("[AstroChat] Failed to finalize consultation:", error);
    }
  }, [isPandit, refreshBalance]);

  useEffect(() => {
    let cancelled = false;

    const startSession = async () => {
      if (isPandit || activeBookingIdRef.current) {
        setIsStartingSession(false);
        return;
      }

      if (isWalletLoading) return;

      if (!hasWalletBalance) {
        toast.error("Add money to your wallet to start this consultation.");
        navigate("/wallet", { replace: true });
        return;
      }

      if (!astrologer.id) {
        toast.error("Select a pandit to start a consultation.");
        navigate("/devotee-dashboard", { replace: true });
        return;
      }

      setIsStartingSession(true);

      try {
        const started = await startWalletConsultationSession({
          pandit: { id: astrologer.id, name: astrologer.name },
          mode: "chat",
          durationSeconds: initialSessionSeconds,
        });

        if (cancelled) {
          finalizeWalletConsultationSession(started.bookingId).catch((error) => {
            console.error("[AstroChat] Failed to clean up abandoned session:", error);
          });
          return;
        }

        activeBookingIdRef.current = started.bookingId;
        setActiveBookingId(started.bookingId);
        setEffectiveSessionSeconds(started.durationSeconds);
      } catch (error: any) {
        toast.error(error?.message || "Unable to start consultation.");
        navigate("/devotee-dashboard", { replace: true });
      } finally {
        if (!cancelled) setIsStartingSession(false);
      }
    };

    startSession();

    return () => {
      cancelled = true;
    };
  }, [
    astrologer.id,
    astrologer.name,
    activeBookingId,
    hasWalletBalance,
    initialSessionSeconds,
    isPandit,
    isWalletLoading,
    navigate,
  ]);

  useEffect(() => {
    if (isStartingSession) return;

    if (!isPandit && !hasWalletBalance) {
      toast.error("Add money to your wallet to start this consultation.");
      navigate("/wallet", { replace: true });
      return;
    }

    if (!socket || !isConnected) return;
    socket.emit("chat:join", { roomId, astrologerId: astrologer.id });

    return () => {
      socket.emit("chat:leave", { roomId });
    };
  }, [
    astrologer.id,
    hasWalletBalance,
    isConnected,
    isPandit,
    isStartingSession,
    navigate,
    roomId,
    socket,
  ]);

  useEffect(() => {
    if (!socket) return;

    const handleIncoming = (msg: ChatMessage) => {
      setMessages((prev) => [...prev, msg]);
    };

    socket.on("chat:message", handleIncoming);
    return () => {
      socket.off("chat:message", handleIncoming);
    };
  }, [socket]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    return () => {
      void finalizeSession();
    };
  }, [finalizeSession]);

  const sendMessage = () => {
    if (isStartingSession || !roomId) {
      toast.message("Starting your consultation...");
      return;
    }

    if (!isPandit && !hasWalletBalance) {
      setShowRecharge(true);
      return;
    }

    if (!message.trim() || sessionEnded) return;

    const outgoing: ChatMessage = {
      id: Date.now(),
      sender: senderRole,
      text: message.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, outgoing]);
    socket?.emit("chat:message", { roomId, text: outgoing.text, sender: senderRole });
    setMessage("");
  };

  const handleExpire = useCallback(() => {
    setSessionEnded(true);
    finalizeSession();
    toast.error("Your session has ended.");
  }, [finalizeSession]);

  const submitFeedback = async () => {
    const bookingId = activeBookingIdRef.current;
    if (!bookingId) {
      toast.error("Unable to find this booking for feedback.");
      return;
    }

    setIsSubmittingFeedback(true);

    try {
      await submitConsultationFeedback({
        bookingId,
        rating: feedbackRating,
        comment: feedbackComment,
      });
      socket?.emit("chat:feedback", {
        roomId,
        astrologerId: astrologer.id,
        rating: feedbackRating,
        comment: feedbackComment,
      });
      toast.success("Thanks for your feedback!");
      navigate("/devotee-dashboard");
    } catch (error: any) {
      toast.error(error?.message || "Unable to submit feedback.");
    } finally {
      setIsSubmittingFeedback(false);
    }
  };

  return (
    <div className="h-[100dvh] overflow-hidden bg-gray-100">
      <Header />

      <main className="container mx-auto flex h-full flex-col px-3 pb-3 pt-[calc(var(--header-height,176px)+0.75rem)] sm:px-5">
        <div className="mx-auto flex min-h-0 w-full max-w-5xl flex-1 flex-col">
          <div className="flex shrink-0 flex-col gap-3 rounded-t-xl border bg-white p-3 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-4">
            <div className="flex min-w-0 items-center gap-3">
              <img
                src={chatHeaderPerson.avatar}
                alt={chatHeaderPerson.name}
                className="h-10 w-10 shrink-0 rounded-full object-cover sm:h-12 sm:w-12"
              />
              <div className="min-w-0">
                <h2 className="truncate text-base font-bold sm:text-lg">{chatHeaderPerson.name}</h2>
                <p className={`text-sm ${isConnected ? "text-green-600" : "text-gray-400"}`}>
                  {isConnected ? "Online" : "Connecting..."}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {!isPandit && (
                <div
                  onClick={() => navigate("/wallet")}
                  className="min-w-[96px] cursor-pointer rounded-lg border bg-green-50 px-3 py-2 hover:bg-green-100 sm:min-w-[116px] sm:px-4"
                >
                  <p className="text-xs text-gray-500">Wallet</p>
                  <p className="font-bold text-green-600">Rs. {balance}</p>
                </div>
              )}

              {!sessionEnded && !isPandit && (
                isStartingSession ? (
                  <div className="rounded-lg border border-orange-200 bg-orange-50 px-4 py-2 text-orange-600">
                    <p className="text-xs text-gray-500">Session</p>
                    <p className="font-bold">Starting...</p>
                  </div>
                ) : (
                  <SessionTimer
                    astrologerId={astrologer.id}
                    initialSeconds={effectiveSessionSeconds}
                    onExpire={handleExpire}
                    onRequestContinue={() => setShowRecharge(true)}
                  />
                )
              )}
            </div>
          </div>

          <div ref={scrollRef} className="min-h-0 flex-1 space-y-4 overflow-y-auto border-x bg-white p-3 sm:p-5">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === senderRole ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                    msg.sender === "user" ? "bg-orange-500 text-white" : "bg-gray-100 text-slate-900"
                  }`}
                >
                  <p>{msg.text}</p>
                  <p className={`mt-1 text-xs ${msg.sender === "user" ? "text-orange-100" : "text-gray-500"}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {sessionEnded && !isPandit ? (
            <div className="shrink-0 space-y-3 rounded-b-xl border bg-white p-4 text-center sm:space-y-4 sm:p-5">
              <p className="font-semibold text-gray-700">Your session has ended.</p>
              <button
                type="button"
                onClick={() => setShowRecharge(true)}
                className="rounded-xl bg-orange-500 px-6 py-3 font-medium text-white hover:bg-orange-600"
              >
                Add Money
              </button>

              <div className="border-t pt-4">
                <p className="mb-2 font-medium">How was your consultation?</p>
                <div className="mb-3 flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFeedbackRating(star)}
                      className={star <= feedbackRating ? "text-orange-500" : "text-gray-300"}
                      aria-label={`${star} star`}
                    >
                      <Star className="h-7 w-7 fill-current" />
                    </button>
                  ))}
                </div>
                <textarea
                  value={feedbackComment}
                  onChange={(event) => setFeedbackComment(event.target.value)}
                  placeholder="Share your experience (optional)"
                  className="w-full rounded-lg border px-3 py-2 text-sm"
                  rows={1}
                />
                <button
                  type="button"
                  onClick={submitFeedback}
                  disabled={feedbackRating === 0 || isSubmittingFeedback}
                  className="mt-3 w-full rounded-lg bg-gray-800 py-2 font-medium text-white hover:bg-gray-900 disabled:opacity-40"
                >
                  {isSubmittingFeedback ? "Submitting..." : "Submit Feedback"}
                </button>
              </div>
            </div>
          ) : (
            <div className="shrink-0 rounded-b-xl border bg-white p-3 sm:p-4">
              <div className="flex gap-2 sm:gap-3">
                <input
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  onKeyDown={(event) => event.key === "Enter" && sendMessage()}
                  placeholder="Type your message..."
                  className="min-w-0 flex-1 rounded-xl border px-4 py-3 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={sendMessage}
                  className="rounded-xl bg-orange-500 px-4 font-medium text-white hover:bg-orange-600 sm:px-6"
                >
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {showRecharge && (
        <RechargeModal
          onClose={() => setShowRecharge(false)}
          reasonMessage="Add money to continue your consultation."
        />
      )}
    </div>
  );
};

export default AstroChat;
