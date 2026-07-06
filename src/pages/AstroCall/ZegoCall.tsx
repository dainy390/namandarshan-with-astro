
import { useEffect, useRef, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useWallet } from "@/context/WalletContext";
import { canStartConsultation } from "@/utils/consultationAccess";
import { getApiUrl } from "@/utils/api";
import { toast } from "sonner";

const ZegoCall = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const meetingRef = useRef<HTMLDivElement | null>(null);
  const { balance } = useWallet();
  const hasWalletBalance = canStartConsultation(balance);
  const bookingId = location.state?.bookingId;
  const sessionSeconds = location.state?.durationSeconds || 300;

  const [seconds, setSeconds] = useState(sessionSeconds);
  const [showRecharge, setShowRecharge] = useState(false);
  const hasFinalizedRef = useRef(false);

  // Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 31) {
          setShowRecharge(true);
        }

        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const finalizeSession = useCallback(async () => {
    if (!bookingId || hasFinalizedRef.current) return;
    hasFinalizedRef.current = true;

    const token = localStorage.getItem("userToken");
    if (!token) return;

    try {
      const response = await fetch(getApiUrl(`/api/bookings/${encodeURIComponent(bookingId)}/finalize`), {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        console.error("[ZegoCall] Failed to finalize consultation:", data?.message || response.statusText);
      }
    } catch (error) {
      console.error("[ZegoCall] Failed to finalize consultation:", error);
    }
  }, [bookingId]);

  useEffect(() => {
    if (!hasWalletBalance) {
      navigate("/wallet", { replace: true });
      return;
    }
  }, [hasWalletBalance, navigate]);

  useEffect(() => {
    if (seconds <= 0 && bookingId && !hasFinalizedRef.current) {
      finalizeSession();
      toast.error("Your consultation session has ended.");
    }
  }, [seconds, bookingId, finalizeSession]);

  // Zego Init
  useEffect(() => {
    if (!hasWalletBalance) return;

    const initMeeting = async () => {
      try {
        const appID = Number(import.meta.env.VITE_ZEGO_APP_ID);
        const serverSecret = import.meta.env.VITE_ZEGO_APP_SIGN;

        const roomID = "astro-room-1";

        const userID =
          "user_" + Math.floor(Math.random() * 1000000);

        const userName =
          "User_" + Math.floor(Math.random() * 1000);

        const kitToken =
          ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomID,
            userID,
            userName
          );

        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
          container: meetingRef.current!,
          sharedLinks: [],
          showPreJoinView: false,

          scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
          },

          showScreenSharingButton: false,
          showTextChat: true,
          showUserList: true,
          showLeavingView: true,
          maxUsers: 2,
          layout: "Auto",
        });
      } catch (error) {
        console.error("Zego Initialization Error:", error);
      }
    };

    initMeeting();
  }, []);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <>
      {/* Timer */}
      <div
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 9999,
          background: "#fff",
          padding: "12px 20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          fontWeight: "bold",
        }}
      >
        Free Time Left : {minutes}:
        {remainingSeconds.toString().padStart(2, "0")}
      </div>

      {/* Recharge Popup */}
      {showRecharge && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "16px",
              width: "400px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Free Session Ending
            </h2>

            <p style={{ marginBottom: "20px" }}>
              Recharge ₹399 and continue for
              another 30 minutes.
            </p>

            <button
              onClick={() => {
                alert(
                  "Razorpay Integration will be added here"
                );
              }}
              style={{
                background: "#f97316",
                color: "#fff",
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Recharge Now
            </button>
          </div>
        </div>
      )}

      {/* Zego Container */}
      <div
        ref={meetingRef}
        style={{
          width: "100%",
          height: "100vh",
        }}
      />
    </>
  );
};

export default ZegoCall;