import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
  onSignup: () => void;
}

export default function LoginModal({ isOpen, onClose, onLoginSuccess, onSignup }: Props) {
  const { loginUser, sendOtp, verifyOtp, socialLogin } = useAuth();

  const [loginMethod, setLoginMethod] = useState<"password" | "otp">("password");
  const [identifier, setIdentifier] = useState(""); // email or mobile number
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetAndClose = () => {
    setIdentifier("");
    setPassword("");
    setOtp("");
    setOtpSent(false);
    setError(null);
    onClose();
  };

  const handleLogin = async () => {
    if (!identifier.trim()) {
      setError("Please enter your email or mobile number.");
      return;
    }
    setError(null);
    setIsSubmitting(true);

    try {
      if (loginMethod === "password") {
        const res = await loginUser(identifier.trim(), password);
        if (res.success) {
          onLoginSuccess();
          resetAndClose();
        } else {
          setError(res.message || "Invalid credentials.");
        }
      } else {
        if (!otpSent) {
          const res = await sendOtp(identifier.trim());
          if (res.success) {
            setOtpSent(true);
            toast.success("OTP sent!");
          } else {
            setError(res.message || "Failed to send OTP.");
          }
        } else {
          const res = await verifyOtp(identifier.trim(), otp.trim());
          if (res.success) {
            onLoginSuccess();
            resetAndClose();
          } else {
            setError(res.message || "Invalid OTP.");
          }
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setIsSubmitting(true);
      try {
        const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
        const profile = await res.json();
        const socialRes = await socialLogin("google", profile.email, profile.name, profile.sub);
        if (socialRes.success) {
          onLoginSuccess();
          resetAndClose();
        } else {
          setError(socialRes.message || "Google login failed on server.");
        }
      } catch {
        setError("Failed to fetch Google profile.");
      } finally {
        setIsSubmitting(false);
      }
    },
    onError: () => setError("Google login failed."),
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md">
        <div className="flex justify-between items-center border-b p-5">
          <h2 className="text-2xl font-bold">Login</h2>
          <button onClick={resetAndClose} className="text-2xl leading-none">
            ×
          </button>
        </div>

        <div className="p-6">
          <div className="flex mb-5">
            <button
              onClick={() => {
                setLoginMethod("password");
                setError(null);
              }}
              className={`flex-1 py-2 rounded-l ${
                loginMethod === "password" ? "bg-orange-500 text-white" : "bg-gray-100"
              }`}
            >
              Password
            </button>
            <button
              onClick={() => {
                setLoginMethod("otp");
                setOtpSent(false);
                setError(null);
              }}
              className={`flex-1 py-2 rounded-r ${
                loginMethod === "otp" ? "bg-orange-500 text-white" : "bg-gray-100"
              }`}
            >
              OTP
            </button>
          </div>

          <input
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder="Email or Mobile Number"
            disabled={otpSent}
            className="w-full border rounded-lg p-3 mb-4 disabled:bg-gray-50"
          />

          {loginMethod === "password" ? (
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border rounded-lg p-3 mb-4"
            />
          ) : (
            otpSent && (
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full border rounded-lg p-3 mb-4"
              />
            )
          )}

          {error && <p className="text-sm text-red-600 mb-3">{error}</p>}

          <button
            onClick={handleLogin}
            disabled={isSubmitting}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
            {loginMethod === "otp"
              ? otpSent
                ? "Verify OTP"
                : "Send OTP"
              : "Login"}
          </button>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <button
            onClick={() => googleLogin()}
            disabled={isSubmitting}
            className="w-full border rounded-lg py-3 font-medium hover:bg-gray-50 disabled:opacity-50"
          >
            Continue with Google
          </button>

          <button onClick={onSignup} className="w-full mt-4 text-orange-500">
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
}
