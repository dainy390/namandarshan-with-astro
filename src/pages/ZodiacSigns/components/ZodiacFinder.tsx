import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Sparkles, ArrowRight, ChevronRight, Moon, Star, Sun as SunIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { zodiacSigns } from '@/data/zodiacData';

const ZodiacFinder = () => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [foundSign, setFoundSign] = useState<any>(null);

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    const findSign = () => {
        if (!day || !month) return;

        const d = parseInt(day);
        const m = parseInt(month);

        let signId = "";

        // Standard Sun Sign Date Ranges based on zodiacData.ts
        if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) signId = "aries";
        else if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) signId = "taurus";
        else if ((m === 5 && d >= 21) || (m === 6 && d <= 21)) signId = "gemini";
        else if ((m === 6 && d >= 22) || (m === 7 && d <= 22)) signId = "cancer";
        else if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) signId = "leo";
        else if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) signId = "virgo";
        else if ((m === 9 && d >= 23) || (m === 10 && d <= 22)) signId = "libra";
        else if ((m === 10 && d >= 23) || (m === 11 && d <= 21)) signId = "scorpio";
        else if ((m === 11 && d >= 22) || (m === 12 && d <= 21)) signId = "sagittarius";
        else if ((m === 12 && d >= 22) || (m === 1 && d <= 19)) signId = "capricorn";
        else if ((m === 1 && d >= 20) || (m === 2 && d <= 18)) signId = "aquarius";
        else if ((m === 2 && d >= 19) || (m === 3 && d <= 20)) signId = "pisces";

        const sign = zodiacSigns.find(s => s.id === signId);
        setFoundSign(sign);
    };

    return (
        <section className="container mx-auto px-4 mb-24">
            <div className="bg-gradient-to-br from-[#4a1c1d] via-[#2a0a0b] to-[#1a0506] rounded-[4rem] p-8 md:p-20 text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ce2127]/20 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] -ml-48 -mb-48" />

                {/* Subtle Star Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-xs font-black uppercase tracking-[0.3em] text-orange-300 mb-4 shadow-2xl">
                            <Sparkles className="w-4 h-4 animate-spin-slow" />
                            Rashi Calculator
                            <Sparkles className="w-4 h-4 animate-spin-slow" />
                        </div>

                        <div className="relative inline-block">
                            <h2 className="text-5xl md:text-8xl font-black leading-none tracking-tighter text-white">
                                Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-[#ce2127]">Zodiac Sign</span>
                            </h2>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-12 -right-12 text-orange-400/20"
                            >
                                <SunIcon className="w-24 h-24" />
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-10 -left-10 text-white/10"
                            >
                                <Moon className="w-16 h-16" />
                            </motion.div>
                        </div>

                        <p className="text-lg md:text-2xl text-stone-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Discover your celestial identity. Enter your birth date and let the stars reveal your <span className="text-white font-medium italic underline decoration-orange-500/50 underline-offset-8">true personality</span>.
                        </p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-6 items-center justify-center bg-white/[0.03] p-6 md:p-8 rounded-[3rem] border border-white/10 backdrop-blur-2xl shadow-2xl">
                        <div className="flex flex-col sm:flex-row flex-1 gap-4 md:gap-6 w-full">
                            <div className="flex-1 relative group">
                                <div className="absolute inset-0 bg-orange-400/5 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                                <select
                                    value={month}
                                    onChange={(e) => setMonth(e.target.value)}
                                    className="w-full bg-white/[0.07] border border-white/10 rounded-[1.5rem] px-6 md:px-8 py-4 md:py-5 text-lg md:text-xl font-black focus:outline-none focus:ring-2 focus:ring-orange-400/50 transition-all appearance-none cursor-pointer group-hover:bg-white/[0.12] text-white relative z-10"
                                >
                                    <option value="" className="bg-[#1a0506]">Select Month</option>
                                    {months.map((m, idx) => (
                                        <option key={m} value={idx + 1} className="bg-[#1a0506]">{m}</option>
                                    ))}
                                </select>
                                <Calendar className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 text-white/30 pointer-events-none group-hover:text-orange-400 transition-colors" />
                            </div>
                            <div className="flex-1 relative group">
                                <div className="absolute inset-0 bg-orange-400/5 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                                <select
                                    value={day}
                                    onChange={(e) => setDay(e.target.value)}
                                    className="w-full bg-white/[0.07] border border-white/10 rounded-[1.5rem] px-6 md:px-8 py-4 md:py-5 text-lg md:text-xl font-black focus:outline-none focus:ring-2 focus:ring-orange-400/50 transition-all appearance-none cursor-pointer group-hover:bg-white/[0.12] text-white relative z-10"
                                >
                                    <option value="" className="bg-[#1a0506]">Day</option>
                                    {days.map(d => (
                                        <option key={d} value={d} className="bg-[#1a0506]">{d}</option>
                                    ))}
                                </select>
                                <ChevronRight className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 text-white/30 rotate-90 pointer-events-none group-hover:text-orange-400 transition-colors" />
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={findSign}
                            disabled={!day || !month}
                            className="w-full md:w-auto px-8 md:px-16 py-4 md:py-5 bg-gradient-to-r from-orange-400 via-[#ce2127] to-[#8b161a] hover:shadow-[0_20px_40px_-10px_rgba(206,33,39,0.5)] text-white rounded-[1.5rem] font-black text-lg md:text-xl shadow-2xl transition-all disabled:opacity-30 disabled:hover:scale-100 flex items-center justify-center gap-3 md:gap-4 group relative overflow-hidden"
                        >
                            <span className="relative z-10">Reveal My Rashi</span>
                            <Search className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:rotate-12 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:animate-shimmer" />
                        </motion.button>
                    </div>

                    <AnimatePresence>
                        {foundSign && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                transition={{ type: "spring", damping: 20 }}
                                className="mt-16 bg-white/[0.05] rounded-[4rem] p-10 md:p-14 border border-white/10 backdrop-blur-[40px] relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-orange-500/5" />
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-400/20 rounded-full blur-[80px]" />

                                <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 text-left">
                                    <div className="relative shrink-0">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0 border-2 border-dashed border-orange-400/30 rounded-full scale-125"
                                        />
                                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-[3.5rem] overflow-hidden border-4 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative z-10 group">
                                            <img
                                                src={foundSign.image}
                                                alt={foundSign.name}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0506]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>

                                    <div className="flex-grow space-y-8 text-center md:text-left">
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-center md:justify-start gap-3">
                                                <div className="h-[1px] w-8 bg-orange-400/50" />
                                                <span className="text-orange-400 font-black uppercase tracking-[0.4em] text-xs">Destined Rashi</span>
                                                <div className="h-[1px] w-8 bg-orange-400/50 md:hidden" />
                                            </div>
                                            <h3 className="text-5xl md:text-8xl font-black tracking-tighter text-white flex flex-wrap items-baseline justify-center md:justify-start gap-4">
                                                {foundSign.name}
                                                <span className="text-2xl md:text-4xl font-light text-stone-400 italic">({foundSign.sanskritName})</span>
                                            </h3>
                                        </div>

                                        <p className="text-xl md:text-2xl text-stone-300 leading-relaxed italic max-w-2xl font-light">
                                            "{foundSign.traits}"
                                        </p>

                                        <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                                            <Link
                                                to={`/zodiac-signs/${foundSign.id}`}
                                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-[#4a1c1d] rounded-[1.5rem] font-black text-lg hover:bg-orange-400 hover:text-white transition-all shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] group"
                                            >
                                                Full Profile
                                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                            </Link>
                                            <div className="flex items-center gap-4 text-stone-400">
                                                <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
                                                <span className="text-sm font-bold uppercase tracking-widest">Luck Factor: {foundSign.luckyNumber}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ZodiacFinder;
