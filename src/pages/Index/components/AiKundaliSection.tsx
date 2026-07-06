import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Zap, Gamepad2 } from "lucide-react";

const AiKundaliSection = () => {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden bg-[#0a0710]">
            {/* Dark cosmic background */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Glows */}
                <div className="absolute -top-[30%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-orange-500/10 blur-[120px]" />
                <div className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-indigo-500/10 blur-[130px]" />

                {/* Floating particles */}
                {[...Array(25)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white opacity-20 animate-pulse"
                        style={{
                            width: Math.random() * 3 + 'px',
                            height: Math.random() * 3 + 'px',
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${Math.random() * 4 + 2}s`,
                            animationDelay: `${Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4 max-w-6xl">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                        <Sparkles className="w-3.5 h-3.5" />
                        Next-Gen Vedic Tech
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.15] mb-4">
                        Modern Tools for an{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400">
                            Ancient Science
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Explore our interactive digital experiences blending deep Vedic traditions with cutting-edge AI.
                    </p>
                </div>

                {/* Two-Tile Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

                    {/* ─── TILE 1: AI KUNDALI ─── */}
                    <Link
                        to="/ai-kundali"
                        className="group relative flex flex-col justify-between h-[480px] rounded-[2rem] border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-500 hover:border-orange-500/30 hover:bg-white/[0.04] hover:-translate-y-1"
                    >
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/0 via-orange-500/0 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        {/* Top Content */}
                        <div className="relative z-10 p-8 md:p-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.4)] group-hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-shadow">
                                    <Zap className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white leading-tight">AI Kundali</h3>
                                    <p className="font-devanagari text-orange-400/80 text-sm">जन्म कुण्डली · Free AI Report</p>
                                </div>
                            </div>

                            <p className="text-gray-400 leading-relaxed mb-6">
                                Generate your complete Vedic birth chart instantly. Chat directly with our LLaMA-powered AI Jyotishi about your planetary dashas, career, and karmic remedies.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300 backdrop-blur-md">Vimshottari Dasha</span>
                                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300 backdrop-blur-md">Gemstone Remedies</span>
                                <span className="px-3 py-1.5 rounded-lg text-xs font-medium text-orange-300 border border-orange-400/20 bg-orange-500/10">🤖 Live AI Chat</span>
                            </div>
                        </div>

                        {/* Visual Mockup Area */}
                        <div className="relative h-48 mt-auto overflow-hidden">
                            {/* SVG fading fading out at top */}
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#0a0710]/50 to-[#0a0710] z-10" />

                            {/* Floating Kundali visualization */}
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-64 h-64 text-orange-400/20 group-hover:text-orange-400/40 transition-colors duration-700">
                                <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full drop-shadow-[0_0_15px_rgba(249,115,22,0.3)] transform group-hover:scale-105 group-hover:rotate-3 transition-transform duration-700 ease-out">
                                    <rect x="10" y="10" width="180" height="180" />
                                    <line x1="10" y1="10" x2="190" y2="190" />
                                    <line x1="190" y1="10" x2="10" y2="190" />
                                    <polygon points="100,10 190,100 100,190 10,100" />
                                    <circle cx="100" cy="100" r="40" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite]" />
                                    <text x="100" y="108" textAnchor="middle" fontSize="24" fontFamily="serif" fill="currentColor" stroke="none">ॐ</text>
                                </svg>
                            </div>

                            {/* Action Button */}
                            <div className="absolute bottom-6 right-6 z-20">
                                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white text-orange-600 font-bold text-sm shadow-[0_8px_20px_rgba(249,115,22,0.3)] transform transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                                    Generate
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* ─── TILE 2: SPIRITUAL GAME ─── */}
                    <Link
                        to="/game"
                        className="group relative flex flex-col justify-between h-[480px] rounded-[2rem] border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-500 hover:border-indigo-500/30 hover:bg-white/[0.04] hover:-translate-y-1"
                    >
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/0 via-indigo-500/0 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        {/* Top Content */}
                        <div className="relative z-10 p-8 md:p-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)] group-hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-shadow">
                                    <Gamepad2 className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white leading-tight">Spiritual Quest</h3>
                                    <p className="font-devanagari text-indigo-300/80 text-sm">धर्म यात्रा · Interactive Lore</p>
                                </div>
                            </div>

                            <p className="text-gray-400 leading-relaxed mb-6">
                                Test your knowledge of Vedic scriptures in an immersive interactive journey. Make complex moral choices, follow the path of Dharma, and unlock cosmological mysteries.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300 backdrop-blur-md">Vedic Lore</span>
                                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300 backdrop-blur-md">Dharmic Scenarios</span>
                                <span className="px-3 py-1.5 rounded-lg text-xs font-medium text-indigo-300 border border-indigo-400/20 bg-indigo-500/10">🎮 Play Now</span>
                            </div>
                        </div>

                        {/* Visual Mockup Area */}
                        <div className="relative h-48 mt-auto overflow-hidden">
                            {/* SVG fading fading out at top */}
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#0a0710]/50 to-[#0a0710] z-10" />

                            {/* Floating Game visualization */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-80 h-80 text-indigo-400/20 group-hover:text-indigo-400/40 transition-colors duration-700 flex justify-center">
                                <div className="relative w-full h-full transform group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-700 ease-out flex items-center justify-center">
                                    <div className="absolute inset-10 border border-dashed border-current rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                                    <div className="absolute inset-16 border border-current rounded-full" />
                                    <div className="absolute inset-24 border-2 border-current rounded-full flex items-center justify-center bg-indigo-500/5">
                                        <div className="w-16 h-16 bg-current rotate-45 transform group-hover:rotate-90 transition-transform duration-1000 ease-in-out" />
                                    </div>
                                    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-current opacity-50" stroke="currentColor" fill="none" strokeWidth="0.5">
                                        <path d="M 100 0 L 100 200 M 0 100 L 200 100" />
                                        <path d="M 30 30 L 170 170 M 30 170 L 170 30" />
                                    </svg>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="absolute bottom-6 right-6 z-20">
                                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white text-indigo-600 font-bold text-sm shadow-[0_8px_20px_rgba(99,102,241,0.3)] transform transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                                    Play Now
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default AiKundaliSection;
