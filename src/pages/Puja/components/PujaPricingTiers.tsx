import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function PujaPricingTiers({ onBook }: { onBook: (mode: "online" | "offline", type: "Individual" | "Family") => void }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden">
            <div className="bg-orange-50/80 p-6 border-b border-orange-100 text-center">
                <h3 className="font-display text-2xl font-bold text-stone-900">Select Puja Package</h3>
                <p className="text-sm text-stone-600 mt-1">Book your puja in easy steps</p>
            </div>
            <div className="p-6 space-y-6">
                {/* Individual Tier */}
                <div className="p-5 rounded-xl border-2 border-orange-200 bg-orange-50/30 relative">
                    <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">Most Popular</div>
                    <h4 className="text-xl font-bold text-stone-900 mb-1">Individual Seva</h4>
                    <p className="text-sm text-stone-600 mb-4">Sankalp with 1 Name & Gotra</p>
                    <ul className="space-y-2 mb-6 text-sm text-stone-700">
                        <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Live WhatsApp Video Proof</li>
                        <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Personalized Sankalp</li>
                        <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Prasad Home Delivery</li>
                    </ul>
                    <Button onClick={() => onBook('online', 'Individual')} className="w-full bg-[#D77E1E] hover:bg-orange-600 text-white font-bold py-6 text-lg rounded-xl shadow-md transition-transform hover:-translate-y-1">
                        Book Puja
                    </Button>
                </div>

                {/* Family Tier */}
                <div className="p-5 rounded-xl border border-stone-200 bg-white">
                    <h4 className="text-xl font-bold text-stone-900 mb-1">Family Seva</h4>
                    <p className="text-sm text-stone-600 mb-4">Sankalp for up to 4 Members</p>
                    <ul className="space-y-2 mb-6 text-sm text-stone-700">
                        <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> All benefits of Individual</li>
                        <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Complete Family Protection</li>
                    </ul>
                    <Button onClick={() => onBook('online', 'Family')} className="w-full bg-[#D77E1E] hover:bg-orange-600 text-white font-bold py-6 text-lg rounded-xl shadow-md transition-transform hover:-translate-y-1">
                        Book Family Puja
                    </Button>
                </div>
            </div>

            <div className="bg-stone-50 p-4 flex items-center justify-center gap-4 text-xs font-medium text-stone-500 border-t border-stone-100">
                <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-green-600" /> 100% Secure</span>
                <span className="flex items-center gap-1"><Sparkles className="w-4 h-4 text-orange-500" /> Verified Pandits</span>
            </div>
        </div>
    );
}
