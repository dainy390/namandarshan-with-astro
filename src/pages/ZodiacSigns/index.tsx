import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import ZodiacSignGrid from "./components/ZodiacSignGrid";
import ZodiacFinder from "./components/ZodiacFinder";
import { Link } from "react-router-dom";
import { 
    ChevronRight, 
    Link2, 
    Share2,
    Sparkles 
} from "lucide-react";
import { ShareGuide } from "@/components/common/ShareGuide";
import { motion } from "framer-motion";

const ZodiacSignsList = () => {
    return (
        <div className="min-h-screen flex flex-col bg-stone-50">
            <SEO
                title="Zodiac Signs (Rashis) - Traits, Compatibility & Horoscope"
                description="Explore all 12 Zodiac signs (Rashis). Learn about their traits, personality, love compatibility, career guidance, and more from Vedic perspective."
                keywords={["Zodiac Signs", "Rashis", "Horoscope", "Vedic Astrology", "Aries", "Taurus", "Gemini"]}
            />
            <Header />
            <main className="flex-grow pt-48 md:pt-56 lg:pt-64 pb-16 bg-stone-50/30">
                {/* Breadcrumbs & Share Section */}
                <div className="container mx-auto px-4 mb-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-primary/10">
                        <nav className="flex items-center space-x-2 text-sm text-muted-foreground ml-4">
                            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                            <span>/</span>
                            <Link to="/astro-naman" className="hover:text-primary transition-colors">Astro</Link>
                            <span>/</span>
                            <span className="text-primary font-medium">Zodiac Signs</span>
                        </nav>
                        <ShareGuide 
                            pageTitle="Zodiac Signs (Rashis) - NamanDarshan"
                            description="Explore all 12 Zodiac signs (Rashis). Learn about their traits, personality, and more."
                        />
                    </div>
                </div>

                {/* Hero Section with Content */}
                <section className="container mx-auto px-4 mb-24">
                    <div className="flex flex-col lg:flex-row gap-12 items-center bg-white rounded-[3.5rem] p-8 md:p-16 border border-stone-100 shadow-xl overflow-hidden relative group">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-60 group-hover:bg-orange-100 transition-colors duration-700" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 opacity-40 group-hover:bg-blue-100 transition-colors duration-700" />
                        
                        <div className="lg:w-1/2 space-y-8 relative z-10">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ce2127]/5 text-[#ce2127] rounded-full text-xs font-black mb-4 uppercase tracking-widest border border-[#ce2127]/10">
                                    <Sparkles className="w-3 h-3" />
                                    Vedic Wisdom
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black text-[#4a1c1d] leading-[1.1] tracking-tight">
                                    Zodiac Signs: <span className="text-[#ce2127] block md:inline">Your Celestial Blueprint</span>
                                </h1>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="space-y-6 text-stone-600 leading-relaxed text-lg font-medium"
                            >
                                <p>
                                    Unlock the secrets of the cosmos hidden within your birth chart. Every zodiac sign is a unique constellation of traits, energies, and potentials that influence your path through life.
                                </p>
                                <p>
                                    Whether you're an ambitious Fire sign, a grounded Earth sign, an intellectual Air sign, or an intuitive Water sign, understanding your celestial identity offers profound insights into your personality, relationships, and destiny.
                                </p>
                            </motion.div>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform lg:rotate-3 group-hover:rotate-0 transition-transform duration-700">
                                <img 
                                    src="/assets/WhatsApp Image 2026-04-24 at 2.40.57 PM.jpeg" 
                                    alt="Zodiac Signs Guidance" 
                                    className="w-full h-auto object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#ce2127] rounded-3xl -z-10 animate-pulse opacity-20 blur-xl" />
                            <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-orange-200 rounded-full -z-10" />
                        </motion.div>
                    </div>
                </section>

                <ZodiacFinder />

                <ZodiacSignGrid />
                
                {/* Additional Info Section */}
                <section className="container mx-auto px-4 mt-12">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
                        <h2 className="text-2xl font-bold text-stone-900 mb-6">Understanding Your Rashi</h2>
                        <div className="grid md:grid-cols-2 gap-8 text-stone-600 leading-relaxed">
                            <p>
                                In Vedic Astrology, your "Rashi" or Moon Sign is considered one of the most important aspects of your birth chart. While Western astrology often focuses on the Sun Sign, Vedic astrology places significant emphasis on the position of the Moon at the time of your birth.
                            </p>
                            <p>
                                Each Rashi is ruled by a planet and associated with an element (Fire, Earth, Air, Water). These influences shape your personality, emotions, and life path. Exploring your sign helps you understand your natural inclinations and navigate life's challenges more effectively.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ZodiacSignsList;
