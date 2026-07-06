import { Link } from "react-router-dom";
import { PlayCircle } from "lucide-react";

export const DailyAartiSection = () => {
    return (
        <section className="py-12 bg-[#f8fafc] dark:bg-[#0a0710]">
            <div className="container mx-auto px-4 max-w-6xl">
                <Link
                    to="/daily-aarti"
                    className="group relative block w-full overflow-hidden rounded-[2rem] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-[#111111] border border-white/5"
                >
                    <div className="flex flex-col lg:flex-row min-h-[460px]">

                        {/* Left Side: Content */}
                        <div className="flex-[1.2] p-8 md:p-14 flex flex-col justify-center relative z-20 bg-gradient-to-br from-[#ea580c] to-[#dc2626]">
                            {/* Background Glows and Texture for Text Side */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-overlay">
                                <div className="absolute -top-32 -left-32 w-80 h-80 bg-yellow-400/50 rounded-full blur-[100px]"></div>
                                <div className="absolute -bottom-32 left-10 w-64 h-64 bg-rose-600/40 rounded-full blur-[80px]"></div>
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.15]"></div>
                            </div>

                            <div className="relative z-10">
                                {/* Live Now Badge */}
                                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/20 border border-white/20 text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md shadow-sm w-fit">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400"></span>
                                    </span>
                                    Live Now
                                </div>

                                {/* Typography */}
                                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-[1.1] drop-shadow-md tracking-tight">
                                    Daily Live Aarti & Darshan
                                </h3>

                                <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-xl mb-10 font-medium">
                                    Join our virtual congregation. Experience the divine energy of evening aartis, rhythmic bhajans, and sacred rituals broadcasted live from prominent temples designed to captivate your soul.
                                </p>

                                {/* Action Button matching the screenshot style */}
                                <div className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-full font-bold text-base shadow-[0_8px_30px_rgba(220,38,38,0.4)] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_40px_rgba(220,38,38,0.5)]">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></div>
                                    Join Live Aarti
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Floating Iframe Window to the Real Page */}
                        <div className="relative flex-1 min-h-[350px] lg:min-h-full bg-black overflow-hidden flex items-center justify-center border-t lg:border-t-0 lg:border-l border-white/10">

                            {/* We use an iframe to show the real page, scaled up so it looks like a nice responsive preview */}
                            <div className="absolute inset-0 pointer-events-none">
                                <iframe
                                    src="https://cosmic-compass-drab.vercel.app/"
                                    className="w-[133.33%] h-[133.33%] transform scale-75 origin-top-left border-0"
                                    title="Live Aarti Preview"
                                    loading="lazy"
                                    tabIndex={-1}
                                />
                            </div>

                            {/* Gradient edge overlays to blend the iframe seamlessly into the card */}
                            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#dc2626] to-transparent z-10 pointer-events-none hidden lg:block opacity-60"></div>
                            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#dc2626]/80 lg:from-black/60 to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

                            {/* "Window to the Divine" Glass floating tag */}
                            <div className="absolute bottom-6 right-6 z-20 bg-black/40 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-xl text-white/90 text-sm font-medium flex items-center gap-2.5 shadow-xl transition-all duration-300 group-hover:bg-white/10">
                                <PlayCircle className="w-4 h-4 text-rose-400 group-hover:text-rose-300 group-hover:scale-110 transition-transform" />
                                Live Preview
                            </div>

                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default DailyAartiSection;
