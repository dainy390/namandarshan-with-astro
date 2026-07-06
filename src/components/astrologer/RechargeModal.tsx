import { useState } from "react";
import { useWallet } from "@/context/WalletContext";
import { Loader2, X } from "lucide-react";

type Props = {
  onClose: () => void;
  onSuccess?: (newBalance: number) => void;
  /** Optional message shown at the top, e.g. "Session ended - add money to continue" */
  reasonMessage?: string;
};

export default function RechargeModal({ onClose, onSuccess, reasonMessage }: Props) {
  const { rechargeWallet } = useWallet();
  const amounts = [100, 200, 500, 1000];
  const [selected, setSelected] = useState<number | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRecharge = async () => {
    if (!selected) return;
    setIsProcessing(true);
    setError(null);

    // NOTE: In production this should first open the payment gateway (Razorpay/etc)
    // and only call rechargeWallet() after payment success webhook confirms it.
    const result = await rechargeWallet(selected);

    setIsProcessing(false);
    if (result.success) {
      onSuccess?.(selected);
      onClose();
    } else {
      setError(result.message || "Recharge failed. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-xl w-full max-w-sm relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold mb-1">Recharge Wallet</h2>
        {reasonMessage && (
          <p className="text-sm text-orange-600 mb-4">{reasonMessage}</p>
        )}

        <div className="grid grid-cols-2 gap-3 mt-4">
          {amounts.map((amt) => (
            <button
              key={amt}
              onClick={() => setSelected(amt)}
              className={`border rounded-lg p-3 font-medium transition-colors ${
                selected === amt
                  ? "bg-orange-500 text-white border-orange-500"
                  : "hover:bg-orange-50"
              }`}
            >
              ₹{amt}
            </button>
          ))}
        </div>

        {error && <p className="text-sm text-red-600 mt-3">{error}</p>}

        <button
          onClick={handleRecharge}
          disabled={!selected || isProcessing}
          className="w-full mt-5 bg-orange-500 text-white p-3 rounded-xl font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isProcessing && <Loader2 className="w-4 h-4 animate-spin" />}
          {isProcessing ? "Processing..." : selected ? `Pay ₹${selected}` : "Select an amount"}
        </button>
      </div>
    </div>
  );
}
