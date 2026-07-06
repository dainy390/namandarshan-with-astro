import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SessionTimer from "@/components/session/SessionTimer";
import RechargeModal from "@/components/astrologer/RechargeModal";
import { useSocket } from "@/context/SocketContext";
import { useWallet } from "@/context/WalletContext";
import { useAuth } from "@/context/AuthContext";
import { canStartConsultation } from "@/utils/consultationAccess";
import { getApiUrl } from "@/utils/api";
import { toast } from "sonner";

/**
 * Backend socket contract expected by this page (rename here if Arnab's
 * event names differ - nothing else needs to change):
 *
 *  emit  "chat:join"     { roomId, astrologerId }
 *  emit  "chat:message"  { roomId, text }
 *  emit  "chat:leave"    { roomId }
 *  emit  "chat:feedback" { roomId, astrologerId, rating, comment }
 *
 *  on    "chat:message"  { id, sender: "user"|"astro", text, time }
 *  on    "chat:typing"   { sender }
 */

interface ChatMessage {
  id: string | number;
  sender: "user" | "astro";
  text: string;
  time: string;
}

const DEFAULT_SESSION_SECONDS = 300; // 5 min

const AstroChat = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { socket, isConnected } = useSocket();
  const { user } = useAuth();
  const { balance } = useWallet();
  const hasWalletBalance = canStartConsultation(balance);

  // Astrologer + room comes from navigation state (set by AstrologerCard / booking flow).
  // Falls back to a demo astrologer if the page is opened directly.
  const astrologer = location.state?.astrologer || {
    id: "demo-astrologer",
    name: "Pandit Rahul Sharma",
    avatar: "https://i.pravatar.cc/100?img=12",
  };
  const roomId = location.state?.roomId || `room-${astrologer.id}-${user?._id || "guest"}`;
  const sessionSeconds = location.state?.durationSeconds || DEFAULT_SESSION_SECONDS;

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "astro",
      text: "Namaste 🙏 Welcome to Namandarshan.",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [message, setMessage] = useState("");
  const [sessionEnded, setSessionEnded] = useState(false);
  const [showRecharge, setShowRecharge] = useState(false);
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [feedbackComment, setFeedbackComment] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasFinalizedRef = useRef(false);

  // Join the chat room on mount, leave it on unmount
  useEffect(() => {
    if (!hasWalletBalance) {
      toast.error("Add money to your wallet to start this consultation.");
      navigate("/wallet", { replace: true });
      return;
    }

    if (!socket || !isConnected) return;
    socket.emit("chat:join", { roomId, astrologerId: astrologer.id });

    return () => {
      socket.emit("chat:leave", { roomId });
    };
  }, [socket, isConnected, roomId, astrologer.id, hasWalletBalance, navigate]);

  // Listen for incoming messages from the astrologer
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

  // Auto scroll to latest message
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!hasWalletBalance) {
      toast.error("Add money to your wallet to continue this consultation.");
      setShowRecharge(true);
      return;
    }

    if (!message.trim() || sessionEnded) return;

    const outgoing: ChatMessage = {
      id: Date.now(),
      sender: "user",
      text: message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    // Optimistic UI update
    setMessages((prev) => [...prev, outgoing]);
    socket?.emit("chat:message", { roomId, text: message });
    setMessage("");
  };

  const finalizeSession = useCallback(async () => {
    if (hasFinalizedRef.current) return;
    hasFinalizedRef.current = true;

    const token = localStorage.getItem("userToken");
    if (!token) return;

    try {
      const response = await fetch(getApiUrl("/api/bookings/finalize"), {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        console.error("[AstroChat] Failed to finalize consultation:", data?.message || response.statusText);
      }
    } catch (error) {
      console.error("[AstroChat] Failed to finalize consultation:", error);
    }
  }, []);

  const handleExpire = useCallback(() => {
    setSessionEnded(true);
    finalizeSession();
    toast.error("Your session has ended.");
  }, [finalizeSession]);

  const handleRequestContinue = useCallback(() => {
    if (balance > 0) {
      // In a full implementation this would extend the session server-side
      // (e.g. socket.emit("chat:extend", { roomId })) and reset the timer.
      toast.success("Continuing session...");
    } else {
      setShowRecharge(true);
    }
  }, [balance]);

  const submitFeedback = () => {
    socket?.emit("chat:feedback", {
      roomId,
      astrologerId: astrologer.id,
      rating: feedbackRating,
      comment: feedbackComment,
    });
    toast.success("Thanks for your feedback!");
    navigate("/astro");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="container mx-auto px-5 pt-44 pb-10">
        <div className="max-w-5xl mx-auto">
          {/* Top Bar */}
          <div className="bg-white rounded-t-xl border shadow-sm p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src={astrologer.avatar}
                alt={astrologer.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h2 className="font-bold text-lg">{astrologer.name}</h2>
                <p className={`text-sm ${isConnected ? "text-green-600" : "text-gray-400"}`}>
                  ● {isConnected ? "Online" : "Connecting..."}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div
                onClick={() => navigate("/wallet")}
                className="bg-green-50 px-4 py-2 rounded-lg border cursor-pointer hover:bg-green-100"
              >
                <p className="text-xs text-gray-500">Wallet</p>
                <p className="font-bold text-green-600">₹{balance}</p>
              </div>

              {!sessionEnded && (
                <SessionTimer
                  astrologerId={astrologer.id}
                  initialSeconds={sessionSeconds}
                  onExpire={handleExpire}
                  onRequestContinue={handleRequestContinue}
                />
              )}
            </div>
          </div>

          {/* Chat Area */}
          <div ref={scrollRef} className="bg-white border-x h-[600px] overflow-y-auto p-5 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                    msg.sender === "user" ? "bg-orange-500 text-white" : "bg-gray-100"
                  }`}
                >
                  <p>{msg.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      msg.sender === "user" ? "text-orange-100" : "text-gray-500"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Input / Session Ended state */}
          {sessionEnded ? (
            <div className="bg-white rounded-b-xl border p-6 text-center space-y-4">
              <p className="font-semibold text-gray-700">
                Your session has ended. Add money to continue chatting.
              </p>
              <button
                onClick={() => setShowRecharge(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-medium"
              >
                Add Money
              </button>

              <div className="pt-4 border-t">
                <p className="font-medium mb-2">How was your consultation?</p>
                <div className="flex justify-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setFeedbackRating(star)}
                      className={`text-2xl ${
                        star <= feedbackRating ? "text-orange-500" : "text-gray-300"
                      }`}
                      aria-label={`${star} star`}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <textarea
                  value={feedbackComment}
                  onChange={(e) => setFeedbackComment(e.target.value)}
                  placeholder="Share your experience (optional)"
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                  rows={2}
                />
                <button
                  onClick={submitFeedback}
                  disabled={feedbackRating === 0}
                  className="mt-3 w-full bg-gray-800 hover:bg-gray-900 disabled:opacity-40 text-white py-2 rounded-lg font-medium"
                >
                  Submit Feedback
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-b-xl border p-4">
              <div className="flex gap-3">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 border rounded-xl px-4 py-3 focus:outline-none"
                />
                <button
                  onClick={sendMessage}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-xl font-medium"
                >
                  Send
                </button>
              </div>

              <div className="flex justify-between mt-3">
                <p className="text-xs text-gray-500">Messages are secure and private</p>
                <button
                  onClick={() => setShowRecharge(true)}
                  className="text-orange-500 text-sm font-medium hover:underline"
                >
                  Recharge Wallet
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {showRecharge && (
        <RechargeModal
          onClose={() => setShowRecharge(false)}
          reasonMessage={sessionEnded ? "Add money to continue your consultation." : undefined}
        />
      )}

      <Footer />
    </div>
  );
};

export default AstroChat;
