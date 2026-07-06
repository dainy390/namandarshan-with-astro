import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import namanLogo from "@/assets/naman.webp";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageSquare, ArrowLeft, Flame, ShoppingBag, Compass, Map, Sparkles, Gamepad2, Brain } from "lucide-react";

const recommendations = [
    { title: "Online Puja", path: "/puja", icon: Flame, color: "text-orange-500", bg: "bg-orange-50" },
    { title: "Divine Prasadam", path: "/prasadam", icon: ShoppingBag, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "AI Kundli", path: "/ai-kundali", icon: Sparkles, color: "text-amber-500", bg: "bg-amber-50" },
    { title: "Vedic Consultation", path: "/astro-naman", icon: Compass, color: "text-purple-500", bg: "bg-purple-50" },
    { title: "Yatra Packages", path: "/yatra", icon: Map, color: "text-green-500", bg: "bg-green-50" },
    { title: "Spiritual Quest", path: "/game", icon: Gamepad2, color: "text-red-500", bg: "bg-red-50" },
    { title: "AI Yatra Planner", path: "/ai-yatra-planner", icon: Brain, color: "text-indigo-500", bg: "bg-indigo-50" },
];

const ThankYou = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10);
    const { whatsappLink, returnUrl } = location.state || {};

    useEffect(() => {
        if (!whatsappLink) {
            navigate("/", { replace: true });
            return;
        }

        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    handleRedirect();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [whatsappLink, navigate]);

    const handleRedirect = () => {
        if (whatsappLink) {
            window.open(whatsappLink, "_blank");
        }
        // Use a small timeout to let the window.open finish before navigating the current tab
        setTimeout(() => {
            if (returnUrl) {
                navigate(returnUrl, { replace: true });
            } else {
                navigate(-1);
            }
        }, 100);
    };

    return (
        <div className="min-h-svh flex flex-col bg-stone-50">
            <SEO
                title="Thank You | Naman Darshan"
                description="Thank you for your submission. You will be redirected shortly."
            />
            {/* Minimal Header */}
            <header className="bg-white border-b border-stone-100 py-2 md:py-4 flex-shrink-0">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={namanLogo} alt="Naman" className="h-7 md:h-10 w-auto object-contain" />
                    </Link>
                    <div className="flex items-center gap-3">
                        <span className="text-stone-400 text-[10px] md:text-xs">Spiritual Excellence</span>
                    </div>
                </div>
            </header>

            <main className="flex-grow flex items-center justify-center p-3 md:p-6">
                <div className="w-full max-w-2xl bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-2xl border border-stone-100 overflow-hidden relative flex flex-col my-4">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-orange-50 rounded-full -mr-12 -mt-12 md:-mr-16 md:-mt-16 opacity-50 pointer-events-none" />

                    <div className="relative z-10 p-4 md:p-6 text-center flex flex-col">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 animate-bounce-slow">
                                <CheckCircle2 className="w-5 h-5 md:w-8 md:h-8 text-green-600" />
                            </div>

                            <h1 className="font-display text-xl md:text-3xl font-bold text-stone-900 mb-0.5 md:mb-1">
                                Dhanyawad! 🙏
                            </h1>
                            <p className="text-[10px] md:text-sm text-stone-600 mb-3 md:mb-4 leading-relaxed max-w-md mx-auto">
                                Your request has been received with devotion.
                            </p>
                        </div>

                        <div className="bg-orange-50 rounded-xl p-2.5 md:p-5 mb-4 md:mb-5 border border-orange-100 max-w-sm mx-auto w-full flex-shrink-0">
                            <p className="text-stone-700 text-[9px] md:text-xs font-medium mb-1 md:mb-1.5">
                                Redirecting you to WhatsApp in
                            </p>
                            <div className="text-2xl md:text-4xl font-black text-orange-600 mb-2 md:mb-3 font-display">
                                {countdown}
                            </div>
                            <div className="w-full bg-stone-200 h-1 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-orange-500 transition-all duration-1000 ease-linear"
                                    style={{ width: `${(countdown / 10) * 100}%` }}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center mb-4 md:mb-5 flex-shrink-0">
                            <Button
                                onClick={handleRedirect}
                                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-10 md:h-12 px-4 md:px-6 rounded-lg md:rounded-xl shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2 text-xs md:text-sm"
                            >
                                <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                                Chat Now
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => navigate(returnUrl || "/", { replace: true })}
                                className="border-stone-200 text-stone-600 hover:bg-stone-50 font-bold h-10 md:h-12 px-4 md:px-6 rounded-lg md:rounded-xl flex items-center justify-center gap-2 text-xs md:text-sm"
                            >
                                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                                Go Back
                            </Button>
                        </div>

                        {/* Recommendations Section */}
                        <div className="pt-3 md:pt-4 border-t border-stone-100 flex flex-col">
                            <h3 className="text-[9px] md:text-xs font-bold text-stone-900 mb-2 md:mb-4 font-display uppercase tracking-wider">
                                Explore Divine Services 🔱
                            </h3>
                            <div className="grid grid-cols-2 gap-2 md:gap-3 content-center pb-2">
                                {recommendations.map((item) => (
                                    <Link
                                        key={item.title}
                                        to={item.path}
                                        replace={true}
                                        className="group p-2 md:p-3 bg-white border border-stone-50 shadow-sm rounded-lg md:rounded-xl hover:border-orange-200 transition-all hover:shadow-md text-center flex flex-col items-center justify-center"
                                    >
                                        <div className={`w-7 h-7 md:w-10 md:h-10 ${item.bg} ${item.color} rounded-md md:rounded-lg flex items-center justify-center mb-1 md:mb-2 group-hover:scale-110 transition-transform`}>
                                            <item.icon className="w-3.5 h-3.5 md:w-5 md:h-5" />
                                        </div>
                                        <span className="text-[8px] md:text-[10px] font-bold text-stone-700 block whitespace-nowrap">
                                            {item.title}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <p className="mt-2 md:mt-4 text-stone-400 text-[7px] md:text-[10px] flex-shrink-0">
                            If the redirect doesn't happen automatically, please click the WhatsApp button.
                        </p>
                    </div>
                </div>
            </main>

            {/* Minimal Footer */}
            <footer className="bg-white border-t border-stone-100 py-2 md:py-4 flex-shrink-0">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-[9px] md:text-xs text-stone-400">
                        © 2026 NAMAN Request Darshan Assistance. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default ThankYou;
