import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

export const AiYatraBanner = () => {
    return (
        <section className="py-4 bg-[#f8fafc] dark:bg-[#0a0710]">
            <div className="container mx-auto px-4 max-w-6xl">
                <Link
                    to="/ai-yatra-planner"
                    className="group relative block w-full overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}
                >
                    {/* Background Pattern SVG */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="sacred-geo" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                                    <path d="M 20 0 L 40 20 L 20 40 L 0 20 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#sacred-geo)" />
                        </svg>
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:px-10 md:py-8 gap-6">

                        {/* Left Side: Text Details */}
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-[10px] font-bold tracking-wider uppercase mb-3 backdrop-blur-sm shadow-sm">
                                <Sparkles className="w-3 h-3" />
                                New Feature
                            </div>

                            <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">
                                Plan Your Custom Yatra with AI
                            </h3>

                            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-2xl">
                                Chat with our intelligent assistant to design a personalized spiritual itinerary tailored to your schedule and preferences.
                            </p>
                        </div>

                        {/* Right Side: CTA Button */}
                        <div className="flex-shrink-0 w-full md:w-auto mt-2 md:mt-0">
                            <div className="flex items-center justify-center gap-2 w-full md:w-auto bg-white text-violet-600 px-6 py-3 rounded-xl font-bold text-sm shadow-[0_4px_15px_rgba(0,0,0,0.1)] group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] transform transition-transform duration-300 group-hover:-translate-y-1">
                                Try AI Planner
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>

                    </div>
                </Link>
            </div>
        </section>
    );
};

export default AiYatraBanner;
