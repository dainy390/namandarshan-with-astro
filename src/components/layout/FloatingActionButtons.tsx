import { MessageCircle, Gift, Quote, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import Pandit Avatar
import panditAvatar from "@/assets/avatars/cute_pandit_avatar.png";

const SPIRITUAL_QUOTES = [
    "Karmanye vadhikaraste ma phaleshu kadachana. 🙏",
    "Why fear when I am here? - Shirdi Sai Baba ✨",
    "The soul is neither born, nor does it ever die. 🕉️",
    "Change is the law of the universe. 🔱",
    "Om Namah Shivaya - The divine is within you. 🔱",
    "Shraddha and Saburi - Faith and Patience. 🙏",
    "Dharmo rakshati rakshitah. 🚩",
    "Ishwara parama Krishna. 🦚",
    "Aham Brahmasmi - I am the Absolute. ✨",
    "Satyam Shivam Sundaram. 🔱",
    "Trust the timing of the universe ✨",
    "What is meant for you will always find you 🌙",
    "Stars guide you, but your actions define you ⭐",
    "Positive thoughts create powerful destinies 💫",
    "The universe is always working in your favor 🌌",
    "Align your energy, and the stars will align for you ✨",
    "Your destiny is written in the stars, but shaped by your choices ⭐",
    "Good karma attracts good fortune 🌿"
];

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

const FloatingActionButtons = () => {
    const location = useLocation();
    const [showQuote, setShowQuote] = useState(false);
    const [showPrompt, setShowPrompt] = useState(false);
    const [currentQuote, setCurrentQuote] = useState("");
    const whatsappUrl = "https://api.whatsapp.com/send/?phone=918796973199&text=Namaste+%EF%BF%BD++%0D%0AI+want+to+know+more+about+your+NamanDarshan+service.+Please+guide+me.&type=phone_number&app_absent=0";

    // Only visible on the main Astro page
    const isAstroPage = location.pathname === '/astro-naman';

    // Hide on CRM and Ops pages
    const isHidden = location.pathname.startsWith('/crm') || location.pathname.startsWith('/ops') || location.pathname.startsWith('/admin');

    // Show prompt after a short delay
    useEffect(() => {
        if (isAstroPage && !showQuote) {
            const timer = setTimeout(() => {
                setShowPrompt(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isAstroPage, showQuote]);

    const handlePanditClick = () => {
        const randomIndex = Math.floor(Math.random() * SPIRITUAL_QUOTES.length);
        setCurrentQuote(SPIRITUAL_QUOTES[randomIndex]);
        setShowQuote(true);
        setShowPrompt(false);
    };

    // Auto-rotate quotes every 3 seconds when open
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (showQuote) {
            interval = setInterval(() => {
                const randomIndex = Math.floor(Math.random() * SPIRITUAL_QUOTES.length);
                setCurrentQuote(SPIRITUAL_QUOTES[randomIndex]);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [showQuote]);

    if (isHidden) return null;

    return (
        <>
            <AnimatePresence>
                {/* Prompt Bubble */}
                {isAstroPage && showPrompt && !showQuote && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{
                            opacity: 1,
                            y: [0, -5, 0],
                            scale: 1,
                        }}
                        transition={{
                            y: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="fixed bottom-[265px] right-6 z-[60] cursor-pointer"
                        onClick={handlePanditClick}
                    >
                        <div className="relative">
                            {/* Cloud Shape Wrapper */}
                            <div className="bg-orange-600 text-white px-5 py-3 rounded-full shadow-2xl border-2 border-white relative z-10 max-w-[200px] text-center">
                                <p className="text-xs font-bold leading-tight">
                                    Discover today's inspiring quote 🌼
                                </p>
                            </div>

                            {/* Cloud "Puffs" */}
                            <div className="absolute -bottom-1 right-8 w-4 h-4 bg-orange-600 border-2 border-white rounded-full z-0" />
                            <div className="absolute -bottom-3 right-5 w-3 h-3 bg-orange-600 border-2 border-white rounded-full z-0" />
                        </div>
                    </motion.div>
                )}

                {isAstroPage && showQuote && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8, x: 20 }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8, x: 20 }}
                        className="fixed bottom-[280px] right-6 z-[60] max-w-[280px]"
                    >
                        <div className="relative bg-white rounded-2xl p-5 shadow-2xl border border-orange-100 flex flex-col gap-2">
                            {/* Close Button */}
                            <button
                                onClick={() => setShowQuote(false)}
                                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors shadow-lg"
                            >
                                <X size={14} />
                            </button>

                            <div className="flex items-start gap-3 min-h-[60px]">
                                <Quote className="w-8 h-8 text-orange-200 shrink-0 rotate-180" />
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={currentQuote}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-gray-800 font-medium text-[15px] leading-relaxed italic"
                                    >
                                        "{currentQuote}"
                                    </motion.p>
                                </AnimatePresence>
                            </div>

                            <div className="flex items-center justify-end gap-2 mt-1">
                                <span className="text-[10px] uppercase tracking-widest text-orange-400 font-bold">- Pandit Ji</span>
                                <div className="w-6 h-6 rounded-full overflow-hidden border border-orange-100">
                                    <img src={panditAvatar} alt="Pandit" className="w-full h-full object-cover" />
                                </div>
                            </div>

                            {/* Triangle Arrow */}
                            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-orange-100 rotate-45" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-center md:items-center">

                {/* Pandit Button (Top of stack) - Only visible on Astro pages */}
                {isAstroPage && (
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                onClick={handlePanditClick}
                                size="icon"
                                className="h-14 w-14 rounded-full bg-white border-2 border-orange-100 p-0 overflow-hidden shadow-xl hover:shadow-glow hover:scale-110 transition-all duration-300 group"
                            >
                                <div className="relative w-full h-full">
                                    <img src={panditAvatar} alt="Pandit" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                    <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {/* Online Status indicator */}
                                    <div className="absolute top-1 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-pulse" />
                                </div>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="left" className="bg-white text-orange-600 border-orange-200">
                            <p className="font-semibold">Blessings from Pandit Ji 🙏</p>
                        </TooltipContent>
                    </Tooltip>
                )}

                {/* Referral Button */}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link to="/referral">
                            <Button
                                size="icon"
                                className="h-14 w-14 rounded-full bg-gradient-sacred hover:shadow-glow hover:scale-110 transition-all duration-300 shadow-xl"
                            >
                                <Gift className="h-7 w-7 text-white animate-pulse" />
                            </Button>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="bg-white text-primary border-primary/20">
                        <p className="font-semibold">Spread Sanatan Dharma 🕉️</p>
                    </TooltipContent>
                </Tooltip>


                {/* WhatsApp Button */}
                <div className="relative flex items-center justify-end">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    size="icon"
                                    className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] hover:shadow-xl hover:scale-110 transition-all duration-300 shadow-xl"
                                >
                                    <WhatsAppIcon className="h-7 w-7 text-white" />
                                </Button>
                            </a>
                        </TooltipTrigger>
                        <TooltipContent side="left" className="bg-white text-[#25D366] border-[#25D366]/20">
                            <p className="font-semibold">Chat with us</p>
                        </TooltipContent>
                    </Tooltip>
                </div>

            </div>
        </>
    );
};

export default FloatingActionButtons;
