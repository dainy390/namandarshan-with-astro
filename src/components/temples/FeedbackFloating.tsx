import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { getApiUrl } from "@/utils/api";
import { toast } from "sonner";
import { SendHorizontal, CheckCircle2, Plus, Minus, HelpCircle, X } from "lucide-react";

/**
 * A floating feedback component that allows users to submit missing temple names.
 * It appears after scrolling 300px and can be minimized into a small circle.
 */
const FeedbackFloating = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [templeName, setTempleName] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // Initialize minimized state from localStorage, defaulting to false (expanded)
    const [isMinimized, setIsMinimized] = useState(() => {
        const saved = localStorage.getItem("feedbackBoxMinimized");
        // Default to expanded (false) if not set
        return saved === "true";
    });

    const navigate = useNavigate();

    // Persist minimized state to localStorage
    useEffect(() => {
        localStorage.setItem("feedbackBoxMinimized", String(isMinimized));
    }, [isMinimized]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!templeName.trim()) return;
        
        // Auto-minimize after submission
        setIsMinimized(true);
        navigate(`/suggest-temple?name=${encodeURIComponent(templeName.trim())}`);
    };

    const toggleMinimize = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMinimized(!isMinimized);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed right-6 bottom-[170px] z-40 flex flex-col items-end pointer-events-none">
            {/* Minimized Floating Button (Pill shape) */}
            <div 
                className={`transition-all duration-300 ease-in-out transform pointer-events-auto ${
                    isMinimized 
                    ? 'scale-100 opacity-100 rotate-0' 
                    : 'scale-0 opacity-0 -rotate-90 pointer-events-none absolute'
                }`}
            >
                <Button
                    onClick={() => setIsMinimized(false)}
                    className="group h-auto py-2.5 px-4 rounded-full bg-orange-600 hover:bg-orange-700 text-white shadow-2xl flex items-center justify-center gap-2 border-2 border-white transition-all hover:scale-105 active:scale-95"
                    aria-label="Need Help?"
                >
                    <HelpCircle className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="font-bold text-sm md:text-base whitespace-nowrap hidden sm:inline">
                        Need Help?
                    </span>
                    {/* Tooltip-like text for mobile if space is tight */}
                    <span className="sr-only">Need Help?</span>
                </Button>
            </div>

            {/* Expanded Card UI */}
            <Card 
                className={`w-[260px] md:w-[280px] bg-orange-50 border-orange-200 shadow-2xl transition-all duration-300 ease-in-out transform pointer-events-auto rounded-xl overflow-hidden ${
                    !isMinimized 
                    ? 'scale-100 opacity-100 translate-y-0' 
                    : 'scale-90 opacity-0 translate-y-10 pointer-events-none absolute'
                }`}
            >
                {/* Header section */}
                <div className="p-4 flex items-center justify-between border-b border-orange-100 bg-orange-100/30">
                    <h3 className="font-semibold text-orange-900 flex items-center gap-2 text-sm md:text-base">
                        ❓ Can't find your temple?
                    </h3>
                    <button 
                        onClick={toggleMinimize}
                        className="p-1 rounded-md hover:bg-orange-200 transition-colors text-orange-800"
                        aria-label="Minimize"
                    >
                        <Minus className="w-4 h-4" />
                    </button>
                </div>

                <div className="p-4">
                    {isSubmitted ? (
                        <div className="flex flex-col items-center justify-center py-4 text-center animate-in fade-in zoom-in duration-300">
                            <CheckCircle2 className="w-10 h-10 text-green-600 mb-2" />
                            <h3 className="font-semibold text-orange-900">🙏 Thanks!</h3>
                            <p className="text-sm text-orange-700">We'll add it soon</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                                <Input
                                    type="text"
                                    placeholder="Enter temple name..."
                                    value={templeName}
                                    onChange={(e) => setTempleName(e.target.value)}
                                    className="bg-white border-orange-200 focus-visible:ring-orange-500 placeholder:text-orange-300 h-9"
                                    disabled={isSubmitting}
                                />
                                <Button 
                                    type="submit" 
                                    disabled={isSubmitting || !templeName.trim()}
                                    className="bg-orange-600 hover:bg-orange-700 text-white w-full flex items-center justify-center gap-2 h-9"
                                >
                                    {isSubmitting ? "Submitting..." : (
                                        <>
                                            <span>Submit</span>
                                            <SendHorizontal className="w-4 h-4" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
};

export default FeedbackFloating;
