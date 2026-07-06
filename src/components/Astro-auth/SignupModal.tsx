import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Loader2 } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onBackToLogin: () => void;
  onSignupSuccess?: () => void;
}

export default function SignupModal({ isOpen, onClose, onBackToLogin, onSignupSuccess }: Props) {
  const { signupUser } = useAuth();

  const [name, setName] = useState("");
  const [identifier, setIdentifier] = useState(""); // email or mobile number
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSignup = async () => {
    if (!name.trim() || !identifier.trim() || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError(null);
    setIsSubmitting(true);

    const res = await signupUser(identifier.trim(), password, name.trim());

    setIsSubmitting(false);
    if (res.success) {
      onSignupSuccess?.();
      onClose();
    } else {
      setError(res.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md">
        <div className="flex justify-between items-center border-b p-5">
          <h2 className="text-2xl font-bold">Sign Up</h2>
          <button onClick={onClose} className="text-2xl leading-none">
            ×
          </button>
        </div>

        <div className="p-6">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full border rounded-lg p-3 mb-4"
          />

          <input
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder="Email or Mobile Number"
            className="w-full border rounded-lg p-3 mb-4"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border rounded-lg p-3 mb-4"
          />

          {error && <p className="text-sm text-red-600 mb-3">{error}</p>}

          <button
            onClick={handleSignup}
            disabled={isSubmitting}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
            Create Account
          </button>

          <button onClick={onBackToLogin} className="w-full mt-4 text-orange-500">
            Already have an account? Login
          </button>
        </div>
      </div>
    </div>
  );
}
