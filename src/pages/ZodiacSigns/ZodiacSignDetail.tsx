import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { zodiacSigns, ZodiacSign } from "@/data/zodiacData";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { ShareGuide } from "@/components/common/ShareGuide";
import { 
    ChevronRight, 
    Star, 
    Heart, 
    Briefcase, 
    Activity, 
    Zap, 
    ShieldCheck, 
    Info,
    ArrowLeft,
    Calendar,
    Compass,
    Sun,
    Gem,
    User,
    Moon,
    Flame,
    Users,
    CheckCircle2,
    AlertCircle,
    Utensils,
    Dumbbell,
    Eye,
    Palette,
    HelpCircle,
    Lightbulb,
    Target,
    Quote,
    Scale,
    Link2,
    Share2,
    Linkedin,
    Instagram,
    X,
    XCircle,
    AlertTriangle
} from "lucide-react";

type TabType = 'overview' | 'nature' | 'love' | 'career' | 'health' | 'profiles' | 'facts';

const containerVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
            duration: 0.5, 
            staggerChildren: 0.1,
            ease: "easeOut"
        }
    }
};

const itemVariants: any = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.3 }
    }
};

const cardHoverVariants = {
    hover: { 
        y: -5,
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        transition: { duration: 0.2 }
    }
};

const ZodiacSignDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const [sign, setSign] = useState<ZodiacSign | null>(null);
    const [activeTab, setActiveTab] = useState<TabType>('overview');

    useEffect(() => {
        const foundSign = zodiacSigns.find(s => s.id === slug);
        setSign(foundSign || null);
        window.scrollTo(0, 0);
    }, [slug]);

    if (!sign) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50">
                <Header />
                <div className="flex-grow flex flex-col items-center justify-center p-4">
                    <h1 className="text-2xl font-bold text-stone-800 mb-4">Zodiac Sign Not Found</h1>
                    <Link to="/zodiac-signs" className="text-[#ce2127] font-semibold hover:underline">
                        Back to Zodiac Signs
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const quickFacts = [
        { label: "Sanskrit Name", value: sign.sanskritName },
        { label: "Meaning", value: sign.meaning },
        { label: "Date Range", value: sign.dates },
        { label: "Element", value: sign.element },
        { label: "Ruling Planet", value: sign.rulingPlanet },
        { label: "Ruling House", value: sign.rulingHouse },
        { label: "Nature", value: sign.nature },
        { label: "Lucky Number", value: sign.luckyNumber },
        { label: "Lucky Color", value: sign.luckyColor },
        { label: "Lucky Stone", value: sign.luckyStone },
    ];

    const tabs: { id: TabType; label: string; icon: any }[] = [
        { id: 'overview', label: 'Overview', icon: Info },
        { id: 'nature', label: 'Nature', icon: Flame },
        { id: 'love', label: 'Love', icon: Heart },
        { id: 'career', label: 'Career', icon: Briefcase },
        { id: 'health', label: 'Health', icon: Activity },
        { id: 'profiles', label: 'Profiles', icon: Users },
        { id: 'facts', label: 'Facts & FAQ', icon: HelpCircle },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEO
                title={`${sign.name} Zodiac Sign - Traits, Nature & Compatibility`}
                description={`Everything you need to know about ${sign.name} (${sign.sanskritName}). Discover traits, love life, career prospects, and health insights.`}
                keywords={[`${sign.name} zodiac`, `${sign.sanskritName} rashi`, "astrology", "horoscope"]}
            />
            <Header />
            
            <main className="flex-grow pt-48 md:pt-56 lg:pt-64 pb-20 bg-stone-50/30">
                <div className="container mx-auto px-4">
                    {/* Breadcrumbs & Share Section */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-primary/10 mb-12">
                        <nav className="flex items-center space-x-2 text-sm text-muted-foreground ml-4">
                            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                            <span>/</span>
                            <Link to="/astro-naman" className="hover:text-primary transition-colors">Astro</Link>
                            <span>/</span>
                            <Link to="/zodiac-signs" className="hover:text-primary transition-colors">Zodiac Signs</Link>
                            <span>/</span>
                            <span className="text-primary font-medium">{sign.name}</span>
                        </nav>
                        <ShareGuide 
                            pageTitle={`${sign.name} Zodiac Sign Insights`}
                            description={`Discover traits, compatibility, and life insights for ${sign.name} zodiac sign.`}
                        />
                    </div>

                    {/* Hero Header */}
                    <div className="mb-16">
                        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start bg-white rounded-[3.5rem] p-10 md:p-16 border border-stone-100 shadow-3xl relative overflow-hidden group">
                            {/* Animated Background Gradients */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#ce2127]/10 to-transparent rounded-full -mr-64 -mt-64 blur-[120px] transition-all duration-1000 group-hover:scale-110" />
                            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full -ml-48 -mb-48 blur-[100px]" />
                            
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                className="w-72 h-72 bg-gradient-to-br from-white to-stone-50 rounded-[3rem] p-6 shadow-2xl border border-stone-100 flex items-center justify-center shrink-0 relative z-10"
                            >
                                <img src={sign.image} alt={sign.name} className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(206,33,39,0.2)]" />
                                <div className="absolute -bottom-4 bg-white px-6 py-2 rounded-2xl shadow-xl border border-stone-50 text-[#ce2127] font-black text-xs uppercase tracking-[0.3em]">
                                    {sign.element} Sign
                                </div>
                            </motion.div>

                            <div className="text-center md:text-left space-y-8 relative z-10">
                                <div className="space-y-2">
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="flex items-center justify-center md:justify-start gap-4"
                                    >
                                        <h1 className="text-5xl md:text-8xl font-black text-[#4a1c1d] tracking-tighter leading-none">{sign.name}</h1>
                                        <div className="bg-[#ce2127] text-white px-6 py-2 rounded-2xl font-black text-2xl md:text-3xl shadow-lg shadow-[#ce2127]/30 transform -rotate-2">
                                            {sign.sanskritName}
                                        </div>
                                    </motion.div>
                                    <p className="text-2xl md:text-3xl text-stone-400 font-serif italic">{sign.meaning}</p>
                                </div>

                                <p className="text-xl md:text-2xl text-stone-500 font-light max-w-3xl leading-relaxed">
                                    {sign.fullGuide?.split('.')[0]}. {sign.fullGuide?.split('.')[1]}.
                                </p>

                                <div className="flex flex-wrap justify-center md:justify-start gap-5 pt-4">
                                    <div className="flex items-center gap-3 text-sm font-black bg-white text-[#ce2127] px-8 py-4 rounded-3xl shadow-lg border border-stone-100 uppercase tracking-widest hover:scale-105 transition-all cursor-default">
                                        <div className="w-8 h-8 rounded-xl bg-[#ce2127]/10 flex items-center justify-center">
                                            <Calendar className="w-4 h-4" />
                                        </div>
                                        {sign.dates}
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-black bg-white text-blue-600 px-8 py-4 rounded-3xl shadow-lg border border-stone-100 uppercase tracking-widest hover:scale-105 transition-all cursor-default">
                                        <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center">
                                            <Sun className="w-4 h-4" />
                                        </div>
                                        {sign.rulingPlanet}
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-black bg-white text-emerald-600 px-8 py-4 rounded-3xl shadow-lg border border-stone-100 uppercase tracking-widest hover:scale-105 transition-all cursor-default">
                                        <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center">
                                            <ShieldCheck className="w-4 h-4" />
                                        </div>
                                        {sign.nature}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="sticky top-24 z-20 bg-white/80 backdrop-blur-md border-b border-stone-100 mb-12 -mx-4 px-4 overflow-x-auto no-scrollbar">
                        <div className="container mx-auto">
                            <div className="flex gap-8 min-w-max">
                                {tabs.map((tab) => {
                                    const Icon = tab.icon;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`flex items-center gap-2 py-4 border-b-2 transition-all font-bold text-sm uppercase tracking-wider ${
                                                activeTab === tab.id 
                                                ? "border-[#ce2127] text-[#ce2127]" 
                                                : "border-transparent text-stone-400 hover:text-stone-600"
                                            }`}
                                        >
                                            <Icon className="w-4 h-4" />
                                            {tab.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Tab Content Area */}
                        <div className="lg:col-span-8">
                            <AnimatePresence mode="wait">
                                {activeTab === 'overview' && (
                                    <motion.div 
                                        key="overview"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={containerVariants}
                                        className="space-y-16"
                                    >
                                        <motion.section variants={itemVariants} className="space-y-8 relative">
                                            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#ce2127]/5 rounded-full blur-[100px] pointer-events-none" />
                                            <h2 className="text-5xl md:text-6xl font-bold text-[#4a1c1d] tracking-tighter">About {sign.name}</h2>
                                            <p className="text-stone-600 text-2xl md:text-3xl leading-[1.6] font-light italic border-l-8 border-[#ce2127] pl-10 py-6 bg-gradient-to-r from-[#ce2127]/10 to-transparent rounded-r-[3rem] shadow-sm">
                                                {sign.fullGuide || sign.traits}
                                            </p>
                                        </motion.section>

                                        <motion.div variants={itemVariants} className="bg-white rounded-[3.5rem] p-12 shadow-3xl shadow-stone-200/50 border border-stone-100 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-80 h-80 bg-[#ce2127]/5 rounded-full -mr-40 -mt-40 blur-[100px]" />
                                            <h3 className="text-3xl font-black font-serif text-[#4a1c1d] mb-12 flex items-center gap-4 relative z-10">
                                                <div className="w-14 h-14 rounded-2xl bg-yellow-50 flex items-center justify-center border border-yellow-100 shadow-sm">
                                                    <Star className="w-8 h-8 text-yellow-600 fill-yellow-600" />
                                                </div>
                                                Lucky Factors & Quick Facts
                                            </h3>
                                            
                                            <div className="relative z-10">
                                                {sign.luckyFactors ? (
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                                        {[
                                                            { label: "Lucky Day", value: sign.luckyFactors.day, icon: Calendar, color: "from-blue-600 to-indigo-700" },
                                                            { label: "Lucky Numbers", value: sign.luckyFactors.numbers, icon: Zap, color: "from-purple-600 to-fuchsia-700" },
                                                            { label: "Lucky Colors", value: sign.luckyFactors.colors, icon: Palette, color: "from-pink-500 to-rose-600" },
                                                            { label: "Birthstones", value: sign.luckyFactors.birthstones.join(", "), icon: Gem, color: "from-emerald-600 to-teal-700" },
                                                            { label: "Lucky Stones", value: sign.luckyFactors.stones.join(", "), icon: Star, color: "from-orange-500 to-amber-600" },
                                                            { label: "Lucky Metals", value: sign.luckyFactors.metals.join(", "), icon: ShieldCheck, color: "from-indigo-600 to-blue-800" },
                                                            ...(sign.luckyFactors.exaltation ? [{ label: "Exaltation", value: sign.luckyFactors.exaltation, icon: Sun, color: "from-yellow-500 to-amber-600" }] : []),
                                                            ...(sign.luckyFactors.debilitation ? [{ label: "Debilitation", value: sign.luckyFactors.debilitation, icon: Moon, color: "from-blue-400 to-indigo-500" }] : []),
                                                        ].map((item, idx) => (
                                                            <motion.div 
                                                                key={idx}
                                                                whileHover={{ y: -10, scale: 1.02 }}
                                                                className={`flex flex-col gap-6 p-10 rounded-[3rem] bg-gradient-to-br ${item.color} text-white shadow-2xl transition-all relative overflow-hidden group min-h-[220px]`}
                                                            >
                                                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-all duration-700" />
                                                                <div className="w-16 h-16 rounded-[1.5rem] bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 shadow-xl border border-white/30 relative z-10">
                                                                    <item.icon className="w-8 h-8" />
                                                                </div>
                                                                <div className="relative z-10 flex flex-col gap-2">
                                                                    <span className="text-[11px] font-black uppercase tracking-[0.3em] block opacity-80 leading-none">{item.label}</span>
                                                                    <span className="font-black text-2xl md:text-2xl leading-tight break-words">{item.value}</span>
                                                                </div>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                        {quickFacts.map((fact, idx) => (
                                                            <motion.div 
                                                                key={idx}
                                                                variants={itemVariants}
                                                                className="flex justify-between items-center py-6 border-b border-stone-100 last:border-0"
                                                            >
                                                                <span className="font-black text-stone-400 text-xs uppercase tracking-widest">{fact.label}</span>
                                                                <span className="font-black text-stone-800 text-2xl">{fact.value}</span>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>

                                        {sign.howToIdentify && (
                                            <motion.section variants={itemVariants} className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-[3.5rem] p-16 text-white shadow-3xl relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
                                                <h3 className="text-4xl font-black mb-12 flex items-center gap-4">
                                                    <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shadow-xl shadow-blue-500/10">
                                                        <Eye className="w-8 h-8 text-blue-400" />
                                                    </div>
                                                    How to Identify {sign.name}?
                                                </h3>
                                                <p className="text-stone-300 text-2xl leading-[1.8] font-light italic border-l-4 border-blue-500/30 pl-12 py-2">
                                                    {sign.howToIdentify}
                                                </p>
                                            </motion.section>
                                        )}

                                        {sign.lifeInsights && (
                                            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
                                                {[
                                                    { label: "Inner Need", value: sign.lifeInsights.need, color: "from-purple-600 to-purple-800 text-white", icon: Zap },
                                                    { label: "Life Goal", value: sign.lifeInsights.goal, color: "from-blue-600 to-blue-800 text-white", icon: Target },
                                                    { label: "Motto", value: sign.lifeInsights.motto, color: "from-emerald-600 to-emerald-800 text-white", icon: Quote },
                                                    { label: "Balance", value: sign.lifeInsights.balance, color: "from-orange-500 to-orange-700 text-white", icon: Scale },
                                                ].map((insight, idx) => {
                                                    const Icon = insight.icon;
                                                    return (
                                                        <motion.div 
                                                            key={idx} 
                                                            whileHover={{ y: -12, scale: 1.05 }}
                                                            className={`bg-gradient-to-br ${insight.color} p-10 rounded-[3rem] shadow-2xl flex flex-col items-center text-center relative overflow-hidden group`}
                                                        >
                                                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-all duration-700" />
                                                            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8 shadow-xl border border-white/30">
                                                                <Icon className="w-8 h-8" />
                                                            </div>
                                                            <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-70">{insight.label}</span>
                                                            <span className="font-black text-xl leading-tight">"{insight.value}"</span>
                                                        </motion.div>
                                                    );
                                                })}
                                            </motion.div>
                                        )}

                                        {sign.preferences && (
                                            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 pt-12">
                                                <div className="bg-gradient-to-br from-emerald-50 to-white p-12 rounded-[4rem] border border-emerald-100 shadow-2xl relative overflow-hidden">
                                                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px]" />
                                                    <h3 className="text-3xl font-black text-emerald-900 mb-10 flex items-center gap-4">
                                                        <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                                                            <Heart className="w-7 h-7 fill-emerald-500 text-emerald-500" />
                                                        </div>
                                                        {sign.name} Loves
                                                    </h3>
                                                    <ul className="grid gap-6">
                                                        {sign.preferences.loves.map((item, i) => (
                                                            <motion.li 
                                                                key={i} 
                                                                whileHover={{ x: 10 }}
                                                                className="flex items-center gap-5 text-emerald-800 text-xl font-black"
                                                            >
                                                                <div className="w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.6)]" /> {item}
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="bg-gradient-to-br from-stone-50 to-white p-12 rounded-[4rem] border border-stone-200 shadow-2xl relative overflow-hidden">
                                                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-stone-500/5 rounded-full blur-[80px]" />
                                                    <h3 className="text-3xl font-black text-stone-700 mb-10 flex items-center gap-4">
                                                        <div className="w-12 h-12 rounded-2xl bg-stone-200 flex items-center justify-center">
                                                            <XCircle className="w-7 h-7 text-stone-500" />
                                                        </div>
                                                        {sign.name} Dislikes
                                                    </h3>
                                                    <ul className="grid gap-6">
                                                        {sign.preferences.dislikes.map((item, i) => (
                                                            <motion.li 
                                                                key={i} 
                                                                whileHover={{ x: 10 }}
                                                                className="flex items-center gap-5 text-stone-600 text-xl font-black"
                                                            >
                                                                <div className="w-4 h-4 rounded-full bg-stone-400 shadow-[0_0_15px_rgba(120,113,108,0.3)]" /> {item}
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        )}

                                        {sign.traitsDetails && (
                                            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 pt-12">
                                                <div className="bg-gradient-to-b from-emerald-50 to-white p-12 rounded-[4rem] border border-emerald-100 shadow-3xl">
                                                    <h3 className="text-3xl font-black text-emerald-900 mb-10 flex items-center gap-4">
                                                        <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center shadow-lg">
                                                            <Zap className="w-8 h-8 text-emerald-600 fill-emerald-600" />
                                                        </div>
                                                        Positive Traits
                                                    </h3>
                                                    <div className="grid gap-8">
                                                        {sign.traitsDetails.positive.map((t, i) => (
                                                            <motion.div 
                                                                key={i} 
                                                                whileHover={{ y: -5, scale: 1.02 }}
                                                                className="bg-white p-8 rounded-[2.5rem] border border-emerald-50 shadow-xl shadow-emerald-900/5 relative overflow-hidden group"
                                                            >
                                                                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-all duration-500" />
                                                                <span className="block font-black text-emerald-900 text-2xl mb-4 relative z-10">{t.title}</span>
                                                                <p className="text-emerald-800/70 text-lg leading-relaxed font-medium relative z-10">{t.text}</p>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="bg-gradient-to-b from-rose-50 to-white p-12 rounded-[4rem] border border-rose-100 shadow-3xl">
                                                    <h3 className="text-3xl font-black text-rose-900 mb-10 flex items-center gap-4">
                                                        <div className="w-14 h-14 rounded-2xl bg-rose-100 flex items-center justify-center shadow-lg">
                                                            <AlertCircle className="w-8 h-8 text-rose-600" />
                                                        </div>
                                                        Negative Traits
                                                    </h3>
                                                    <div className="grid gap-8">
                                                        {sign.traitsDetails.negative.map((t, i) => (
                                                            <motion.div 
                                                                key={i} 
                                                                whileHover={{ y: -5, scale: 1.02 }}
                                                                className="bg-white p-8 rounded-[2.5rem] border border-rose-50 shadow-xl shadow-rose-900/5 relative overflow-hidden group"
                                                            >
                                                                <div className="absolute top-0 right-0 w-24 h-24 bg-rose-50 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-all duration-500" />
                                                                <span className="block font-black text-rose-900 text-2xl mb-4 relative z-10">{t.title}</span>
                                                                <p className="text-rose-800/70 text-lg leading-relaxed font-medium relative z-10">{t.text}</p>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                )}

                                {activeTab === 'nature' && sign.natureDetails && (
                                    <motion.div 
                                        key="nature"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={containerVariants}
                                        className="space-y-12"
                                    >
                                        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-[#4a1c1d] tracking-tight">{sign.natureDetails.title}</motion.h2>
                                        
                                        {sign.natureDetails.image && sign.natureDetails.image !== sign.image && (
                                            <motion.div 
                                                variants={itemVariants}
                                                className="max-w-2xl mx-auto h-auto rounded-[2.5rem] overflow-hidden border border-stone-100 shadow-2xl mb-12"
                                            >
                                                <img src={sign.natureDetails.image} alt="Nature of Sign" className="w-full h-full object-cover" />
                                            </motion.div>
                                        )}

                                        <motion.div variants={itemVariants} className="prose prose-stone max-w-none">
                                            <p className="text-2xl text-stone-600 leading-relaxed font-light italic border-l-4 border-orange-200 pl-8">
                                                {sign.natureDetails.introduction}
                                            </p>
                                            
                                                <div className="grid gap-12 mt-16">
                                                    <div className="grid md:grid-cols-2 gap-8">
                                                        <motion.div 
                                                            variants={itemVariants}
                                                            whileHover={{ y: -10, scale: 1.02 }}
                                                            className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-[3rem] p-10 text-white shadow-3xl relative overflow-hidden group"
                                                        >
                                                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-all duration-700" />
                                                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-md">
                                                                    <Target className="w-7 h-7 text-rose-100" />
                                                                </div>
                                                                Drive & Ambition
                                                            </h3>
                                                            <p className="text-rose-50 leading-relaxed text-lg font-medium relative z-10">{sign.natureDetails.drive}</p>
                                                        </motion.div>
                                                        <motion.div 
                                                            variants={itemVariants}
                                                            whileHover={{ y: -10, scale: 1.02 }}
                                                            className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-[3rem] p-10 text-white shadow-3xl relative overflow-hidden group"
                                                        >
                                                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-all duration-700" />
                                                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-md">
                                                                    <Zap className="w-7 h-7 text-amber-100" />
                                                                </div>
                                                                Impulsive Nature
                                                            </h3>
                                                            <p className="text-amber-50 leading-relaxed text-lg font-medium relative z-10">{sign.natureDetails.impulsive}</p>
                                                        </motion.div>
                                                    </div>

                                                    <div className="grid md:grid-cols-2 gap-8">
                                                        <motion.div 
                                                            variants={itemVariants}
                                                            className="bg-gradient-to-br from-orange-50 to-white rounded-[3rem] p-10 border border-orange-100 shadow-xl"
                                                        >
                                                            <h3 className="text-2xl font-bold text-orange-900 mb-6 flex items-center gap-4">
                                                                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                                                                    <Sun className="w-7 h-7 text-orange-600" />
                                                                </div>
                                                                Ruling Planet: {sign.rulingPlanet}
                                                            </h3>
                                                            <p className="text-orange-800/80 text-lg leading-relaxed font-bold italic">"{sign.natureDetails.planetImpact}"</p>
                                                        </motion.div>
                                                        <motion.div 
                                                            variants={itemVariants}
                                                            className="bg-gradient-to-br from-blue-50 to-white rounded-[3rem] p-10 border border-blue-100 shadow-xl"
                                                        >
                                                            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-4">
                                                                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                                                                    <Compass className="w-7 h-7 text-blue-600" />
                                                                </div>
                                                                Ruling House: {sign.rulingHouse}
                                                            </h3>
                                                            <p className="text-blue-800/80 text-lg leading-relaxed font-bold italic">"{sign.natureDetails.houseImpact}"</p>
                                                        </motion.div>
                                                    </div>

                                                    {sign.natureDetails.elementImpact && (
                                                        <motion.div 
                                                            variants={itemVariants}
                                                            className="bg-gradient-to-br from-red-600 to-red-800 rounded-[3.5rem] p-12 text-white shadow-3xl relative overflow-hidden group"
                                                        >
                                                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
                                                            <h3 className="text-3xl font-black mb-8 flex items-center gap-4">
                                                                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                                                                    <Flame className="w-8 h-8 text-red-200" />
                                                                </div>
                                                                Element Impact: {sign.element}
                                                            </h3>
                                                            <p className="text-red-50 text-3xl font-serif leading-relaxed italic max-w-4xl">"{sign.natureDetails.elementImpact}"</p>
                                                        </motion.div>
                                                    )}

                                                    <motion.div 
                                                        variants={itemVariants}
                                                        className="bg-stone-50 rounded-[3.5rem] p-12 border border-stone-200/50 shadow-inner"
                                                    >
                                                        <h3 className="text-3xl font-bold text-[#4a1c1d] mb-8 flex items-center gap-4">
                                                            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center border border-emerald-100">
                                                                <Activity className="w-7 h-7 text-emerald-600" />
                                                            </div>
                                                            Habits & Lifestyle
                                                        </h3>
                                                        <p className="text-stone-600 leading-relaxed text-2xl font-light italic border-l-4 border-emerald-200 pl-10 py-2">{sign.natureDetails.lifestyle}</p>
                                                    </motion.div>

                                                    {sign.natureDetails.famousPersonalities && (
                                                        <motion.div 
                                                            variants={itemVariants}
                                                            className="bg-stone-900 rounded-[4rem] p-16 text-white shadow-3xl relative overflow-hidden"
                                                        >
                                                            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
                                                            <h3 className="text-4xl font-black mb-12 flex items-center gap-6">
                                                                <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center border border-white/20">
                                                                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                                                                </div>
                                                                Famous {sign.name} Personalities
                                                            </h3>
                                                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
                                                                {sign.natureDetails.famousPersonalities.map((person, i) => (
                                                                    <motion.div 
                                                                        key={i} 
                                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                                        transition={{ delay: i * 0.05 }}
                                                                        whileHover={{ y: -8, backgroundColor: "rgba(255,255,255,0.15)", scale: 1.05 }}
                                                                        className="bg-white/10 px-8 py-5 rounded-[2rem] border border-white/10 text-lg font-black text-white backdrop-blur-md transition-all text-center shadow-lg cursor-default"
                                                                    >
                                                                        {person}
                                                                    </motion.div>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </div>
                                        </motion.div>
                                    </motion.div>
                                )}

                                {activeTab === 'love' && (
                                    <motion.div 
                                        key="love"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={containerVariants}
                                        className="space-y-12"
                                    >
                                        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-[#4a1c1d] tracking-tight">{sign.name} in Love & Relationships</motion.h2>
                                        
                                        {sign.loveDetails?.image && sign.loveDetails.image !== sign.image && (
                                            <motion.div variants={itemVariants} className="max-w-2xl mx-auto h-auto rounded-[2.5rem] overflow-hidden border border-stone-100 shadow-2xl mb-12">
                                                <img src={sign.loveDetails.image} alt="Love & Relationships" className="w-full h-full object-cover" />
                                            </motion.div>
                                        )}

                                        {sign.loveDetails ? (
                                            <div className="space-y-16">
                                                <motion.div 
                                                    variants={itemVariants}
                                                    className="bg-gradient-to-br from-red-50 to-white rounded-[3rem] p-12 border border-red-100 shadow-xl relative overflow-hidden text-center"
                                                >
                                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-200 to-transparent" />
                                                    <Quote className="w-12 h-12 text-red-200 mx-auto mb-8 opacity-50" />
                                                    <h3 className="text-sm font-black text-red-800 uppercase tracking-[0.3em] mb-6">Love Philosophy</h3>
                                                    <p className="text-3xl md:text-4xl font-serif text-stone-800 italic leading-relaxed max-w-3xl mx-auto">"{sign.loveDetails.philosophy}"</p>
                                                    <div className="grid md:grid-cols-2 gap-8 mt-16 text-left">
                                                        <div className="bg-white/60 backdrop-blur-sm p-8 rounded-[2rem] border border-white">
                                                            <h4 className="font-black text-xs uppercase tracking-widest text-emerald-700 mb-6 flex items-center gap-2">
                                                                <CheckCircle2 className="w-4 h-4" /> Lessons Given
                                                            </h4>
                                                            <ul className="space-y-3">
                                                                {sign.loveDetails.lessonsGiven.map((l, i) => (
                                                                    <li key={i} className="flex items-center gap-3 text-stone-600 text-base font-medium">
                                                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {l}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="bg-white/60 backdrop-blur-sm p-8 rounded-[2rem] border border-white">
                                                            <h4 className="font-black text-xs uppercase tracking-widest text-red-700 mb-6 flex items-center gap-2">
                                                                <AlertCircle className="w-4 h-4" /> Lessons Needed
                                                            </h4>
                                                            <ul className="space-y-3">
                                                                {sign.loveDetails.lessonsNeeded.map((l, i) => (
                                                                    <li key={i} className="flex items-center gap-3 text-stone-600 text-base font-medium">
                                                                        <div className="w-1.5 h-1.5 rounded-full bg-red-300" /> {l}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </motion.div>

                                                <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12">
                                                    <div className="space-y-6">
                                                        <h3 className="text-2xl font-bold text-[#4a1c1d] flex items-center gap-3">
                                                            <Heart className="w-6 h-6 text-red-500 fill-red-500" /> Love Personality
                                                        </h3>
                                                        <p className="text-xl text-stone-600 leading-relaxed font-light">{sign.loveDetails.personality}</p>
                                                    </div>
                                                    <div className="space-y-6">
                                                        <h3 className="text-2xl font-bold text-[#4a1c1d] flex items-center gap-3">
                                                            <ShieldCheck className="w-6 h-6 text-blue-500" /> Trust & Expectations
                                                        </h3>
                                                        <p className="text-xl text-stone-600 leading-relaxed font-light">{sign.loveDetails.trust}</p>
                                                    </div>
                                                </motion.div>

                                                {(sign.loveDetails.turnOffs || sign.loveDetails.whenInLove) && (
                                                    <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
                                                        {sign.loveDetails.turnOffs && (
                                                            <div className="bg-red-50/30 p-10 rounded-[2.5rem] border border-red-100/50">
                                                                <h4 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
                                                                    <AlertTriangle className="w-5 h-5 text-red-500" /> Turn-offs
                                                                </h4>
                                                                <ul className="space-y-4">
                                                                    {sign.loveDetails.turnOffs.map((item, i) => (
                                                                        <li key={i} className="flex items-center gap-3 text-red-800/70 font-medium">
                                                                            <div className="w-1.5 h-1.5 rounded-full bg-red-400" /> {item}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                        {sign.loveDetails.whenInLove && (
                                                            <div className="bg-emerald-50/30 p-10 rounded-[2.5rem] border border-emerald-100/50">
                                                                <h4 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                                                                    <Heart className="w-5 h-5 text-emerald-500 fill-emerald-500" /> When they Fall in Love
                                                                </h4>
                                                                <ul className="space-y-4">
                                                                    {sign.loveDetails.whenInLove.map((item, i) => (
                                                                        <li key={i} className="flex items-center gap-3 text-emerald-800/70 font-medium">
                                                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {item}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </motion.div>
                                                )}

                                                {(sign.loveDetails.partnerExpectations || sign.loveDetails.challenges) && (
                                                    <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
                                                        {sign.loveDetails.partnerExpectations && (
                                                            <div className="bg-stone-50 p-10 rounded-[2.5rem] border border-stone-100">
                                                                <h4 className="text-xl font-bold text-[#4a1c1d] mb-6 flex items-center gap-2">
                                                                    <Users className="w-5 h-5 text-indigo-500" /> Partner Expectations
                                                                </h4>
                                                                <ul className="space-y-4">
                                                                    {sign.loveDetails.partnerExpectations.map((item, i) => (
                                                                        <li key={i} className="flex items-center gap-3 text-stone-600 font-medium">
                                                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> {item}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                        {sign.loveDetails.challenges && (
                                                            <div className="bg-stone-50 p-10 rounded-[2.5rem] border border-stone-100">
                                                                <h4 className="text-xl font-bold text-[#4a1c1d] mb-6 flex items-center gap-2">
                                                                    <Target className="w-5 h-5 text-orange-500" /> Love Challenges
                                                                </h4>
                                                                <ul className="space-y-4">
                                                                    {sign.loveDetails.challenges.map((item, i) => (
                                                                        <li key={i} className="flex items-center gap-3 text-stone-600 font-medium">
                                                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-400" /> {item}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </motion.div>
                                                )}

                                                {sign.faqs && sign.faqs.some(f => f.q.toLowerCase().includes('love') || f.q.toLowerCase().includes('relationship')) && (
                                                    <motion.div variants={itemVariants} className="space-y-10 pt-12 border-t border-stone-100">
                                                        <h4 className="text-3xl font-bold text-[#4a1c1d] flex items-center gap-3">
                                                            <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center border border-red-100">
                                                                <HelpCircle className="w-7 h-7 text-red-500" />
                                                            </div>
                                                            FAQs About {sign.name} Romance
                                                        </h4>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                            {sign.faqs.filter(f => f.q.toLowerCase().includes('love') || f.q.toLowerCase().includes('relationship')).map((faq, i) => {
                                                                const colors = [
                                                                    "from-rose-50 to-rose-100/30 border-rose-100 text-rose-900",
                                                                    "from-sky-50 to-sky-100/30 border-sky-100 text-sky-900",
                                                                    "from-amber-50 to-amber-100/30 border-amber-100 text-amber-900",
                                                                    "from-indigo-50 to-indigo-100/30 border-indigo-100 text-indigo-900",
                                                                    "from-emerald-50 to-emerald-100/30 border-emerald-100 text-emerald-900"
                                                                ];
                                                                const colorClass = colors[i % colors.length];
                                                                return (
                                                                    <motion.div 
                                                                        key={i} 
                                                                        whileHover={{ y: -8, scale: 1.02 }}
                                                                        className={`bg-gradient-to-br ${colorClass} p-8 rounded-[2.5rem] border shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
                                                                    >
                                                                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/40 rounded-full blur-2xl group-hover:bg-white/60 transition-all" />
                                                                        <h5 className="font-black text-lg mb-4 relative z-10 leading-tight">{faq.q}</h5>
                                                                        <p className="opacity-80 text-base leading-relaxed relative z-10 font-medium">{faq.a}</p>
                                                                    </motion.div>
                                                                );
                                                            })}
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {sign.relationshipDetails && (
                                                    <motion.div variants={itemVariants} className="space-y-12">
                                                        <div className="bg-gradient-to-br from-indigo-50 to-white rounded-[3.5rem] p-12 border border-indigo-100 shadow-xl relative overflow-hidden">
                                                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                                                            <h4 className="text-3xl font-bold text-[#4a1c1d] mb-8 flex items-center gap-3">
                                                                <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center border border-indigo-200">
                                                                    <Users className="w-7 h-7 text-indigo-500" />
                                                                </div>
                                                                Relationship Overview
                                                            </h4>
                                                            <p className="text-stone-600 leading-relaxed text-xl font-light italic border-l-4 border-indigo-200 pl-8 py-2">{sign.relationshipDetails.overview}</p>
                                                        </div>
                                                        
                                                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                                            {[
                                                                { label: "As a Lover", value: sign.relationshipDetails.lover, icon: Heart, color: "from-rose-50 to-rose-100 border-rose-200 text-rose-600" },
                                                                { label: "As a Friend", value: sign.relationshipDetails.friend, icon: Users, color: "from-blue-50 to-blue-100 border-blue-200 text-blue-600" },
                                                                { label: "As a Colleague", value: sign.relationshipDetails.colleague, icon: Briefcase, color: "from-emerald-50 to-emerald-100 border-emerald-200 text-emerald-600" },
                                                                { label: "As a Boss", value: sign.relationshipDetails.boss, icon: Target, color: "from-amber-50 to-amber-100 border-amber-200 text-amber-600" },
                                                            ].map((role, i) => (
                                                                <motion.div 
                                                                    key={i}
                                                                    whileHover={{ y: -10, scale: 1.02 }}
                                                                    className={`bg-gradient-to-br ${role.color} p-8 rounded-[2.5rem] border shadow-md hover:shadow-2xl transition-all duration-300 group relative overflow-hidden`}
                                                                >
                                                                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-all duration-700" />
                                                                    <div className="w-12 h-12 rounded-2xl bg-white/50 backdrop-blur-md flex items-center justify-center mb-6 shadow-sm border border-white/20">
                                                                        <role.icon className="w-6 h-6" />
                                                                    </div>
                                                                    <h4 className="font-black text-[#4a1c1d] mb-4 text-xl leading-tight">{role.label}</h4>
                                                                    <p className="opacity-80 text-sm leading-relaxed line-clamp-5 font-medium">{role.value}</p>
                                                                </motion.div>
                                                            ))}
                                                        </div>

                                                        <div className="bg-stone-900 rounded-[3rem] p-12 text-white shadow-3xl relative overflow-hidden">
                                                            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full -mr-48 -mt-48 blur-3xl" />
                                                            <h4 className="text-3xl font-bold mb-10">Family Dynamics</h4>
                                                            <div className="grid md:grid-cols-2 gap-12 relative z-10">
                                                                <div className="space-y-8">
                                                                    <h5 className="text-xl font-bold text-indigo-400 border-b border-white/10 pb-4">Parenting Style</h5>
                                                                    <div className="grid gap-8">
                                                                        <div>
                                                                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest block mb-2">The Father</span>
                                                                            <p className="text-stone-300 text-base leading-relaxed">{sign.relationshipDetails.parent.father}</p>
                                                                        </div>
                                                                        <div>
                                                                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest block mb-2">The Mother</span>
                                                                            <p className="text-stone-300 text-base leading-relaxed">{sign.relationshipDetails.parent.mother}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="space-y-8">
                                                                    <h5 className="text-xl font-bold text-emerald-400 border-b border-white/10 pb-4">As a Child</h5>
                                                                    <p className="text-stone-300 text-base leading-relaxed">{sign.relationshipDetails.child}</p>
                                                                    <div className="grid grid-cols-2 gap-6 pt-4">
                                                                        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                                                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest block mb-2">As a Husband</span>
                                                                            <p className="text-xs text-stone-400 line-clamp-3">{sign.relationshipDetails.husband}</p>
                                                                        </div>
                                                                        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                                                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest block mb-2">As a Wife</span>
                                                                            <p className="text-xs text-stone-400 line-clamp-3">{sign.relationshipDetails.wife}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </div>
                                        ) : (
                                            <motion.p variants={itemVariants} className="text-stone-600 text-xl leading-relaxed font-light">{sign.love}</motion.p>
                                        )}
                                    </motion.div>
                                )}

                                {activeTab === 'career' && (
                                    <motion.div 
                                        key="career"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={containerVariants}
                                        className="space-y-12"
                                    >
                                        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-[#4a1c1d] tracking-tight">Career & Money Insights</motion.h2>
                                        
                                        {sign.careerDetails ? (
                                            <div className="space-y-16">
                                                <motion.div 
                                                    variants={itemVariants}
                                                    className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[3.5rem] p-20 text-white text-center shadow-3xl relative overflow-hidden"
                                                >
                                                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl" />
                                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-2xl" />
                                                    <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mx-auto mb-10 border border-white/20 backdrop-blur-md shadow-2xl">
                                                        <Briefcase className="w-10 h-10 text-blue-200" />
                                                    </div>
                                                    <h3 className="text-sm font-black text-blue-300 uppercase tracking-[0.5em] mb-8">Professional Mantra</h3>
                                                    <p className="text-5xl md:text-6xl font-serif italic leading-tight max-w-4xl mx-auto">"{sign.careerDetails.mantra}"</p>
                                                </motion.div>
 
                                                <div className="grid md:grid-cols-2 gap-12">
                                                    <motion.div variants={itemVariants} className="space-y-12">
                                                        <div className="space-y-8">
                                                            <h3 className="text-3xl font-bold text-[#4a1c1d] flex items-center gap-4">
                                                                <div className="w-12 h-12 rounded-2xl bg-yellow-50 flex items-center justify-center border border-yellow-100">
                                                                    <Zap className="w-7 h-7 text-yellow-600 fill-yellow-600" />
                                                                </div>
                                                                Core Strengths
                                                            </h3>
                                                            <div className="flex flex-wrap gap-4">
                                                                {sign.careerDetails.strengths.map((s, i) => (
                                                                    <motion.span 
                                                                        key={i} 
                                                                        whileHover={{ scale: 1.1, backgroundColor: "rgb(30 58 138)", color: "white" }}
                                                                        className="px-8 py-4 bg-white rounded-2xl text-blue-900 text-lg font-black shadow-xl border border-blue-50 transition-all cursor-default"
                                                                    >
                                                                        {s}
                                                                    </motion.span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className="space-y-8">
                                                            <h3 className="text-3xl font-bold text-[#4a1c1d] flex items-center gap-4">
                                                                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
                                                                    <Compass className="w-7 h-7 text-blue-600" />
                                                                </div>
                                                                Top Career Fields
                                                            </h3>
                                                            <div className="grid grid-cols-1 gap-5">
                                                                {sign.careerDetails.bestOptions.map((o, i) => (
                                                                    <motion.div 
                                                                        key={i} 
                                                                        whileHover={{ x: 15, backgroundColor: "rgb(239 246 255)" }}
                                                                        className="flex items-center gap-5 p-6 bg-white rounded-3xl border border-stone-100 shadow-xl shadow-stone-200/20 transition-all group"
                                                                    >
                                                                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                                                            <CheckCircle2 className="w-6 h-6 text-blue-500 group-hover:text-white" />
                                                                        </div>
                                                                        <span className="text-stone-800 font-black text-xl">{o}</span>
                                                                    </motion.div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </motion.div>
 
                                                    <motion.div 
                                                        variants={itemVariants}
                                                        className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-[3.5rem] p-12 text-white shadow-3xl relative overflow-hidden group"
                                                    >
                                                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl group-hover:scale-110 transition-all duration-700" />
                                                        <h3 className="text-3xl font-bold mb-12 flex items-center gap-4">
                                                            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center border border-white/30 shadow-lg">
                                                                <Gem className="w-8 h-8 text-orange-100" />
                                                            </div>
                                                            Financial Outlook
                                                        </h3>
                                                        <ul className="space-y-10 relative z-10">
                                                            {sign.careerDetails.finance.map((f, i) => (
                                                                <li key={i} className="text-orange-50 text-xl leading-relaxed flex items-start gap-6">
                                                                    <div className="w-3 h-3 rounded-full bg-orange-300 mt-2.5 shrink-0 shadow-[0_0_15px_rgba(253,186,116,0.8)]" />
                                                                    <span className="font-medium">"{f}"</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </motion.div>
                                                </div>
 
                                                <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 bg-stone-900 rounded-[4rem] p-16 text-white shadow-3xl relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-emerald-500/10 pointer-events-none" />
                                                    <div className="space-y-8 relative z-10">
                                                        <h3 className="text-3xl font-bold flex items-center gap-4">
                                                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
                                                                <Target className="w-7 h-7 text-blue-400" />
                                                            </div>
                                                            Work Environment
                                                        </h3>
                                                        <p className="text-stone-300 leading-relaxed text-2xl font-light italic border-l-4 border-blue-400/50 pl-10 py-2">
                                                            {sign.careerDetails.path}
                                                        </p>
                                                    </div>
                                                    <div className="space-y-8 relative z-10">
                                                        <h3 className="text-3xl font-bold flex items-center gap-4">
                                                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
                                                                <ShieldCheck className="w-7 h-7 text-emerald-400" />
                                                            </div>
                                                            Professional Style
                                                        </h3>
                                                        <p className="text-stone-300 leading-relaxed text-2xl font-light italic border-l-4 border-emerald-400/50 pl-10 py-2">
                                                            {sign.careerDetails.style}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        ) : (
                                            <motion.p variants={itemVariants} className="text-stone-600 text-xl leading-relaxed font-light">{sign.career}</motion.p>
                                        )}
                                    </motion.div>
                                )}

                                {activeTab === 'health' && (
                                    <motion.div 
                                        key="health"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={containerVariants}
                                        className="space-y-12"
                                    >
                                        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-[#4a1c1d] tracking-tight">Health & Wellness</motion.h2>
                                        
                                        {sign.healthDetails?.image && sign.healthDetails.image !== sign.image && (
                                            <motion.div variants={itemVariants} className="max-w-2xl mx-auto h-auto rounded-[2.5rem] overflow-hidden border border-stone-100 shadow-2xl mb-12">
                                                <img src={sign.healthDetails.image} alt="Health & Wellness" className="w-full h-full object-cover" />
                                            </motion.div>
                                        )}

                                        {sign.healthDetails ? (
                                            <div className="space-y-16">
                                                <motion.div variants={itemVariants} className="bg-gradient-to-r from-emerald-50 to-white p-12 rounded-[3.5rem] border border-emerald-100 shadow-xl relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                                                    <p className="text-3xl text-stone-700 leading-relaxed font-light italic border-l-8 border-emerald-400 pl-10 py-4">{sign.healthDetails.overview}</p>
                                                </motion.div>
                                                
                                                <div className="grid md:grid-cols-2 gap-12">
                                                    <motion.div 
                                                        variants={itemVariants}
                                                        className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-[3.5rem] p-12 text-white shadow-3xl relative overflow-hidden group"
                                                    >
                                                        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-all duration-700" />
                                                        <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
                                                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                                                                <Utensils className="w-7 h-7 text-emerald-200" />
                                                            </div>
                                                            Diet & Nutrition
                                                        </h3>
                                                        <ul className="grid grid-cols-1 gap-5 relative z-10">
                                                            {sign.healthDetails.diet.map((item, i) => (
                                                                <li key={i} className="flex items-center gap-4 text-emerald-50 font-bold text-xl">
                                                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" /> {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <div className="mt-16 pt-12 border-t border-white/10 relative z-10">
                                                            <h4 className="font-black text-xs text-emerald-300 uppercase tracking-[0.3em] mb-10">Foods to Avoid</h4>
                                                            <div className="grid grid-cols-2 gap-4">
                                                                {sign.healthDetails.avoid.map((item, i) => (
                                                                    <div key={i} className="bg-white/10 p-5 rounded-2xl border border-white/10 flex items-center gap-4 text-white font-bold text-base backdrop-blur-sm">
                                                                        <AlertCircle className="w-5 h-5 text-emerald-300" /> {item}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </motion.div>

                                                    <div className="space-y-12">
                                                        <motion.div 
                                                            variants={itemVariants}
                                                            whileHover={{ y: -8 }}
                                                            className="bg-white rounded-[3rem] p-10 border border-stone-100 shadow-2xl relative overflow-hidden group"
                                                        >
                                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-all duration-500" />
                                                            <h3 className="text-2xl font-bold text-[#4a1c1d] mb-10 flex items-center gap-4 relative z-10">
                                                                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
                                                                    <Dumbbell className="w-6 h-6 text-blue-500" />
                                                                </div>
                                                                Fitness Tips
                                                            </h3>
                                                            <ul className="space-y-6 relative z-10">
                                                                {sign.healthDetails.fitness.map((item, i) => (
                                                                    <li key={i} className="text-stone-600 text-lg flex items-start gap-4">
                                                                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2.5 shrink-0" />
                                                                        <span className="font-bold">{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </motion.div>

                                                        <motion.div 
                                                            variants={itemVariants}
                                                            whileHover={{ y: -8 }}
                                                            className="bg-white rounded-[3rem] p-10 border border-stone-100 shadow-2xl relative overflow-hidden group"
                                                        >
                                                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-all duration-500" />
                                                            <h3 className="text-2xl font-bold text-[#4a1c1d] mb-10 flex items-center gap-4 relative z-10">
                                                                <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center border border-purple-100">
                                                                    <Eye className="w-6 h-6 text-purple-500" />
                                                                </div>
                                                                Physical Traits
                                                            </h3>
                                                            <div className="flex flex-wrap gap-3 relative z-10">
                                                                {sign.healthDetails.appearance.map((item, i) => (
                                                                    <span key={i} className="px-6 py-3 bg-stone-50 border border-stone-100 rounded-2xl text-stone-700 font-black text-sm shadow-sm transition-all hover:bg-purple-50 hover:border-purple-200">
                                                                        {item}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <motion.p variants={itemVariants} className="text-stone-600 text-xl leading-relaxed font-light">{sign.health}</motion.p>
                                        )}
                                    </motion.div>
                                )}

                                {activeTab === 'profiles' && (
                                    <motion.div 
                                        key="profiles"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={containerVariants}
                                        className="space-y-16"
                                    >
                                        <motion.h2 variants={itemVariants} className="text-5xl font-bold text-[#4a1c1d] tracking-tighter">Male, Female & Moon Profiles</motion.h2>
                                        
                                        <div className="grid gap-16">
                                            {sign.manDetails && (
                                                <motion.div variants={itemVariants} className="bg-white rounded-[3.5rem] border border-stone-100 shadow-3xl overflow-hidden group">
                                                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-12 py-10 text-white flex items-center gap-6 relative overflow-hidden">
                                                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                                                        <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/30 shadow-lg relative z-10">
                                                            <User className="w-8 h-8" />
                                                        </div>
                                                        <h3 className="text-4xl font-black tracking-tighter relative z-10">{sign.name} Man</h3>
                                                    </div>
                                                    <div className="p-12 text-stone-600 leading-[1.6] text-2xl font-light italic bg-gradient-to-b from-blue-50/20 to-white relative">
                                                        <div className="absolute top-0 left-0 w-2 h-full bg-blue-400/20" />
                                                        <p className="relative z-10">"{sign.manDetails}"</p>
                                                    </div>
                                                </motion.div>
                                            )}
                                            
                                            {sign.womanDetails && (
                                                <motion.div variants={itemVariants} className="bg-white rounded-[3.5rem] border border-stone-100 shadow-3xl overflow-hidden group">
                                                    <div className="bg-gradient-to-r from-pink-500 to-rose-600 px-12 py-10 text-white flex items-center gap-6 relative overflow-hidden">
                                                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                                                        <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/30 shadow-lg relative z-10">
                                                            <Palette className="w-8 h-8" />
                                                        </div>
                                                        <h3 className="text-4xl font-black tracking-tighter relative z-10">{sign.name} Woman</h3>
                                                    </div>
                                                    <div className="p-12 text-stone-600 leading-[1.6] text-2xl font-light italic bg-gradient-to-b from-pink-50/20 to-white relative">
                                                        <div className="absolute top-0 left-0 w-2 h-full bg-pink-400/20" />
                                                        <p className="relative z-10">"{sign.womanDetails}"</p>
                                                    </div>
                                                </motion.div>
                                            )}

                                            {sign.moonDetails && (
                                                <motion.div variants={itemVariants} className="bg-white rounded-[3.5rem] border border-stone-100 shadow-3xl overflow-hidden group">
                                                    <div className="bg-gradient-to-r from-stone-800 to-stone-900 px-12 py-10 text-white flex items-center gap-6 relative overflow-hidden">
                                                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                                                        <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/30 shadow-lg relative z-10">
                                                            <Moon className="w-8 h-8" />
                                                        </div>
                                                        <h3 className="text-4xl font-black tracking-tighter relative z-10">Moon in {sign.name}</h3>
                                                    </div>
                                                    <div className="p-12 text-stone-600 leading-[1.6] text-2xl font-light italic bg-gradient-to-b from-stone-100 to-white relative">
                                                        <div className="absolute top-0 left-0 w-2 h-full bg-stone-400/20" />
                                                        <p className="relative z-10">"{sign.moonDetails}"</p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 'facts' && (
                                    <motion.div 
                                        key="facts"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={containerVariants}
                                        className="space-y-16"
                                    >
                                        <motion.h2 variants={itemVariants} className="text-5xl font-bold text-[#4a1c1d] tracking-tighter">Interesting Facts & FAQ</motion.h2>
                                        
                                        <div className="flex flex-col gap-20">
                                            <motion.div variants={itemVariants} className="space-y-10">
                                                <h3 className="text-3xl font-bold text-[#4a1c1d] flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-2xl bg-yellow-50 flex items-center justify-center border border-yellow-200">
                                                        <Lightbulb className="w-7 h-7 text-yellow-600 fill-yellow-600" />
                                                    </div>
                                                    Fun Facts
                                                </h3>
                                                <div className="grid gap-6">
                                                    {(sign.funFacts || []).map((fact, i) => (
                                                        <motion.div 
                                                            key={i} 
                                                            whileHover={{ x: 15, scale: 1.01 }}
                                                            className="flex gap-8 p-8 bg-white rounded-[2.5rem] border border-stone-100 transition-all shadow-xl shadow-stone-200/30 group relative overflow-hidden"
                                                        >
                                                            <div className="absolute top-0 right-0 w-32 h-32 bg-stone-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-all duration-500" />
                                                            <div className="w-16 h-16 rounded-[2rem] bg-gradient-to-br from-stone-900 to-stone-800 flex items-center justify-center shrink-0 text-white font-black text-2xl shadow-xl relative z-10">
                                                                {i + 1}
                                                            </div>
                                                            <p className="text-stone-700 text-2xl leading-relaxed font-light italic relative z-10 flex-1 py-2">"{fact}"</p>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>

                                            <motion.div variants={itemVariants} className="space-y-10">
                                                <h3 className="text-3xl font-bold text-[#4a1c1d] flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center border border-red-200">
                                                        <HelpCircle className="w-7 h-7 text-[#ce2127]" />
                                                    </div>
                                                    Frequently Asked Questions
                                                </h3>
                                                <div className="grid gap-8">
                                                    {(sign.faqs || []).map((faq, i) => (
                                                        <motion.div 
                                                            key={i} 
                                                            whileHover={{ y: -5 }}
                                                            className="space-y-6 bg-gradient-to-br from-stone-50 to-white p-10 rounded-[3rem] border border-stone-200/60 shadow-2xl shadow-stone-900/5 transition-all"
                                                        >
                                                            <h4 className="font-black text-[#4a1c1d] text-2xl leading-tight border-b border-stone-200/60 pb-6">{faq.q}</h4>
                                                            <p className="text-stone-600 text-xl leading-relaxed font-light">{faq.a}</p>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="sticky top-40 space-y-8">
                                {/* Related Signs */}
                                <div className="bg-white rounded-[2.5rem] p-10 border border-stone-100 shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-stone-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-all duration-500" />
                                    <h3 className="text-2xl font-black text-[#4a1c1d] mb-10 flex items-center gap-3 relative z-10">
                                        <div className="w-10 h-10 rounded-xl bg-[#ce2127]/10 flex items-center justify-center">
                                            <Compass className="w-6 h-6 text-[#ce2127]" />
                                        </div>
                                        Other Signs
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4 relative z-10">
                                        {zodiacSigns.filter(s => s.id !== sign.id).slice(0, 10).map(s => (
                                            <Link 
                                                key={s.id} 
                                                to={`/zodiac-signs/${s.id}`}
                                                className="px-4 py-4 bg-stone-50 rounded-2xl border border-stone-100 text-[10px] font-black text-stone-500 hover:bg-[#ce2127] hover:text-white hover:border-[#ce2127] hover:shadow-lg hover:shadow-[#ce2127]/20 transition-all text-center uppercase tracking-[0.2em]"
                                            >
                                                {s.name}
                                            </Link>
                                        ))}
                                    </div>
                                    <Link to="/zodiac-signs" className="mt-10 block text-center text-sm font-black text-[#ce2127] hover:underline uppercase tracking-widest">
                                        View All 12 Signs
                                    </Link>
                                </div>

                                {/* Service Card */}
                                <div className="bg-gradient-to-br from-[#ce2127] to-[#8b161a] rounded-[3rem] p-12 text-white text-center shadow-3xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent)] pointer-events-none" />
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-xl border border-white/30 group-hover:rotate-12 transition-all">
                                        <Sun className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-black mb-6 tracking-tight">Detailed Birth Chart</h3>
                                    <p className="text-white/70 text-lg mb-10 leading-relaxed font-light">
                                        Get your personalized Vedic horoscope with detailed planetary positions and life predictions.
                                    </p>
                                    <Link 
                                        to="/ai-kundli"
                                        className="inline-block bg-white text-[#ce2127] px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all"
                                    >
                                        Get Kundli Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ZodiacSignDetail;
