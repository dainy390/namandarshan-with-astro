import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export default function StickyBookingCTA({ onBook, title }: { onBook: () => void, title: string }) {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-stone-900 border-t border-stone-800 p-4 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] animate-in slide-in-from-bottom duration-500">
            <div className="container mx-auto max-w-5xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 hidden sm:flex">
                        <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    </div>
                    <div className="text-white min-w-0">
                        <p className="text-xs sm:text-sm text-stone-400 uppercase tracking-wider font-bold mb-0.5 sm:mb-1">Secure Your Slot</p>
                        <p className="font-bold text-sm sm:text-lg truncate">{title}</p>
                    </div>
                </div>
                <Button 
                    onClick={onBook}
                    className="bg-[#D77E1E] hover:bg-orange-600 text-white font-bold px-8 py-6 rounded-xl shadow-lg shrink-0 text-base sm:text-lg transition-transform hover:scale-105"
                >
                    Book Now
                </Button>
            </div>
        </div>
    );
}
