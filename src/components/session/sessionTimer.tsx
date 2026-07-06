import { useEffect, useRef, useState, useCallback } from "react";
import { toast } from "sonner";
import { useWallet } from "@/context/WalletContext";
import { useSocket } from "@/context/SocketContext";

/**
 * SessionTimer
 * ------------
 * Drives the countdown + color/blink rules for a live paid chat/call session,
 * and locks the astrologer for other users during the final stretch.
 *
 * COLOR RULES (as specified):
 *  1. >= 5 min left AND wallet has money      -> GREEN
 *  2. >= 5 min left AND wallet balance is low
 *     ("fixed"/limited money)                 -> ORANGE
 *  3. < 1 min left:
 *        - wallet has NO money                -> RED (and blinking dark red)
 *        - wallet still HAS money             -> GREEN + "continue?" prompt
 *  4. Critical (no money, <1 min)              -> blinking dark red
 *  5. Timer hits 0                             -> ask user to recharge + leave feedback
 *  6. Last <= 2 minutes                        -> astrologer window locked for other users
 *
 * NOTIFICATIONS:
 *  - a reminder toast every 3 minutes (180s) of elapsed time
 *  - a reminder toast every 50 seconds of elapsed time
 *
 * Backend socket events used (rename in one place if Arnab's names differ):
 *   emit  "astrologer:lock"    { astrologerId }
 *   emit  "astrologer:unlock"  { astrologerId }
 */

export type TimerColor = "green" | "orange" | "red" | "red-blink";

interface SessionTimerProps {
  astrologerId: string;
  initialSeconds: number;
  onExpire: () => void;
  onRequestContinue?: () => void;
  className?: string;
}

const LOCK_THRESHOLD_SECONDS = 120; // last 2 minutes
const CRITICAL_THRESHOLD_SECONDS = 60; // last 1 minute
const NOTIFY_EVERY_LONG = 180; // 3 minutes
const NOTIFY_EVERY_SHORT = 50; // 50 seconds

export default function SessionTimer({
  astrologerId,
  initialSeconds,
  onExpire,
  onRequestContinue,
  className = "",
}: SessionTimerProps) {
  const { balance, isLowBalance } = useWallet();
  const { socket } = useSocket();

  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const hasLockedRef = useRef(false);
  const hasExpiredRef = useRef(false);
  const hasAskedContinueRef = useRef(false);
  const elapsedRef = useRef(0);
  const lastLongNotifyRef = useRef(0);
  const lastShortNotifyRef = useRef(0);

  const lockAstrologer = useCallback(() => {
    if (hasLockedRef.current) return;
    hasLockedRef.current = true;
    socket?.emit("astrologer:lock", { astrologerId });
  }, [astrologerId, socket]);

  const unlockAstrologer = useCallback(() => {
    if (!hasLockedRef.current) return;
    hasLockedRef.current = false;
    socket?.emit("astrologer:unlock", { astrologerId });
  }, [astrologerId, socket]);

  // Main countdown tick
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
      elapsedRef.current += 1;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Notifications every 3 min / every 50 sec of elapsed time
  useEffect(() => {
    const elapsed = elapsedRef.current;

    if (elapsed - lastLongNotifyRef.current >= NOTIFY_EVERY_LONG) {
      lastLongNotifyRef.current = elapsed;
      toast.info(`Session running — ${Math.ceil(timeLeft / 60)} min left.`);
    }
    if (elapsed - lastShortNotifyRef.current >= NOTIFY_EVERY_SHORT) {
      lastShortNotifyRef.current = elapsed;
      toast.message(`${timeLeft}s remaining in this session.`);
    }
  }, [timeLeft]);

  // Lock astrologer window during the final 2 minutes
  useEffect(() => {
    if (timeLeft <= LOCK_THRESHOLD_SECONDS && timeLeft > 0) {
      lockAstrologer();
    }
  }, [timeLeft, lockAstrologer]);

  // Last-minute "continue?" prompt when balance is still available
  useEffect(() => {
    if (
      timeLeft > 0 &&
      timeLeft <= CRITICAL_THRESHOLD_SECONDS &&
      balance > 0 &&
      !hasAskedContinueRef.current
    ) {
      hasAskedContinueRef.current = true;
      toast("Session ending soon", {
        description: "Would you like to continue this consultation?",
        action: {
          label: "Continue",
          onClick: () => onRequestContinue?.(),
        },
      });
    }
  }, [timeLeft, balance, onRequestContinue]);

  // Expiry - recharge + feedback flow, and unlock astrologer
  useEffect(() => {
    if (timeLeft === 0 && !hasExpiredRef.current) {
      hasExpiredRef.current = true;
      unlockAstrologer();
      onExpire();
    }
  }, [timeLeft, unlockAstrologer, onExpire]);

  // Always unlock if component unmounts mid-session (user navigates away)
  useEffect(() => {
    return () => unlockAstrologer();
  }, [unlockAstrologer]);

  const getColor = (): TimerColor => {
    const noMoney = balance <= 0;

    if (timeLeft <= CRITICAL_THRESHOLD_SECONDS) {
      return noMoney ? "red-blink" : "green";
    }
    if (timeLeft <= LOCK_THRESHOLD_SECONDS && noMoney) {
      return "red";
    }
    return isLowBalance ? "orange" : "green";
  };

  const color = getColor();

  const colorClasses: Record<TimerColor, string> = {
    green: "bg-green-50 text-green-600 border-green-200",
    orange: "bg-orange-50 text-orange-500 border-orange-200",
    red: "bg-red-50 text-red-600 border-red-200",
    "red-blink": "bg-red-100 text-red-700 border-red-300 animate-pulse",
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={`px-4 py-2 rounded-lg border ${colorClasses[color]} ${className}`}>
      <p className="text-xs text-gray-500">Time Left</p>
      <p className="font-bold">
        {minutes}:{seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
}
