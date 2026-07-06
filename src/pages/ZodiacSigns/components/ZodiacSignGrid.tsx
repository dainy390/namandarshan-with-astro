import { Link } from "react-router-dom";
import { zodiacSigns } from "@/data/zodiacData";
import { 
  Flame, 
  Mountain, 
  Wind, 
  Droplets,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

const elementThemes: Record<string, {
    icon: any,
    color: string,
    gradient: string,
    light: string,
    border: string,
    accent: string
}> = {
    Fire: {
        icon: <Flame className="w-5 h-5" />,
        color: "text-orange-600",
        gradient: "from-orange-500 to-red-600",
        light: "bg-orange-50",
        border: "border-orange-100",
        accent: "bg-orange-500"
    },
    Earth: {
        icon: <Mountain className="w-5 h-5" />,
        color: "text-emerald-700",
        gradient: "from-emerald-600 to-teal-800",
        light: "bg-emerald-50",
        border: "border-emerald-100",
        accent: "bg-emerald-600"
    },
    Air: {
        icon: <Wind className="w-5 h-5" />,
        color: "text-sky-600",
        gradient: "from-sky-400 to-indigo-600",
        light: "bg-sky-50",
        border: "border-sky-100",
        accent: "bg-sky-400"
    },
    Water: {
        icon: <Droplets className="w-5 h-5" />,
        color: "text-blue-600",
        gradient: "from-blue-400 to-cyan-600",
        light: "bg-blue-50",
        border: "border-blue-100",
        accent: "bg-blue-500"
    }
};

const ZodiacSignGrid = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section className="py-20 bg-stone-50/50">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-bold mb-6 uppercase tracking-widest">
                        <Sparkles className="w-4 h-4" />
                        Astro Guidance
                    </div>
                    <h2 className="font-display text-4xl md:text-6xl font-black text-[#4a1c1d] mb-8 tracking-tight">
                        Explore Your <span className="text-[#ce2127]">Celestial Identity</span>
                    </h2>
                    <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed text-lg font-medium">
                        Your zodiac sign is more than just a birth date—it's a map of your soul's journey. 
                        Discover the unique traits that make you who you are.
                    </p>
                </motion.div>

                {/* Element Badges */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {Object.entries(elementThemes).map(([element, theme]) => (
                        <motion.div 
                            key={element} 
                            whileHover={{ scale: 1.05 }}
                            className={`flex items-center gap-3 px-6 py-3 bg-white rounded-2xl border ${theme.border} shadow-sm text-base font-bold ${theme.color} transition-all cursor-default`}
                        >
                            <span className={`p-2 rounded-xl ${theme.light}`}>
                                {theme.icon}
                            </span>
                            {element} Signs
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                    {zodiacSigns.map((sign) => {
                        const theme = elementThemes[sign.element as keyof typeof elementThemes] || elementThemes.Fire;
                        return (
                            <motion.div key={sign.id} variants={itemVariants}>
                                <Link 
                                    to={`/zodiac-signs/${sign.id}`}
                                    className="group bg-white rounded-[2.5rem] p-8 border border-stone-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden h-full"
                                >
                                    {/* Background Accent */}
                                    <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full -z-0 opacity-10 group-hover:opacity-20 transition-opacity bg-gradient-to-br ${theme.gradient}`} />
                                    
                                    <div className="w-24 h-24 mb-6 relative z-10">
                                        <div className={`absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity bg-gradient-to-br ${theme.gradient}`} />
                                        {sign.image ? (
                                            <img 
                                                src={sign.image} 
                                                alt={sign.name} 
                                                className="w-full h-full object-contain transform group-hover:scale-125 group-hover:rotate-6 transition-transform duration-700 relative z-10"
                                            />
                                        ) : (
                                            <div className={`w-full h-full rounded-full ${theme.light} border ${theme.border} flex items-center justify-center text-4xl font-black ${theme.color} relative z-10`}>
                                                {sign.name.charAt(0)}
                                            </div>
                                        )}
                                    </div>

                                    <div className="relative z-10">
                                        <h3 className="text-xl font-black text-[#4a1c1d] group-hover:text-[#ce2127] transition-colors tracking-tight mb-2">
                                            {sign.name}
                                        </h3>
                                        <div className={`text-[10px] font-black ${theme.color} bg-white px-3 py-1 rounded-full border ${theme.border} shadow-sm inline-block uppercase tracking-widest mb-3`}>
                                            {sign.dates}
                                        </div>
                                        
                                        {/* Lucky Color Dot */}
                                        <div className="flex items-center justify-center gap-2 mt-1">
                                            <div 
                                                className="w-2 h-2 rounded-full shadow-inner border border-stone-100" 
                                                style={{ backgroundColor: sign.luckyColor.split('(')[1]?.split(')')[0]?.split(',')[0] || sign.luckyColor.split(',')[0] }}
                                            />
                                            <span className="text-[8px] font-bold text-stone-400 uppercase tracking-tighter">Lucky Color</span>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] font-black text-stone-400 group-hover:text-[#ce2127] transition-colors uppercase tracking-widest">
                                        Explore <ChevronRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Grouped Sections by Element */}
                {Object.entries(elementThemes).map(([element, theme]) => {
                    const descriptions: Record<string, string> = {
                        Fire: "Passion, Energy, and Initiative",
                        Earth: "Stability, Practicality, and Growth",
                        Air: "Intellect, Communication, and Versatility",
                        Water: "Intuition, Emotion, and Connection"
                    };
                    
                    return (
                        <div key={element} className="mt-32">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-6 mb-12"
                            >
                                <div className={`p-4 rounded-2xl ${theme.light} ${theme.color} shadow-sm border ${theme.border}`}>
                                    {theme.icon}
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black text-[#4a1c1d] tracking-tight">
                                        The <span className={`${theme.color}`}>{element} Signs</span>
                                    </h2>
                                    <p className="text-stone-500 font-medium">{descriptions[element]}</p>
                                </div>
                                <div className="h-px flex-grow bg-gradient-to-r from-stone-200 to-transparent" />
                            </motion.div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {zodiacSigns.filter(s => s.element === element).map(sign => (
                                    <motion.div
                                        key={sign.id}
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Link 
                                            to={`/zodiac-signs/${sign.id}`} 
                                            className="group block bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden"
                                        >
                                            <div className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full opacity-5 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${theme.gradient}`} />
                                            
                                            <div className="flex items-start justify-between mb-6">
                                                <h4 className="font-black text-2xl text-[#4a1c1d] group-hover:text-[#ce2127] transition-colors">{sign.name}</h4>
                                                <div className={`w-12 h-12 rounded-xl ${theme.light} p-2 flex items-center justify-center`}>
                                                    {sign.image ? (
                                                        <img src={sign.image} alt="" className="w-full h-full object-contain" />
                                                    ) : theme.icon}
                                                </div>
                                            </div>
                                            
                                            <p className="text-stone-600 font-medium line-clamp-3 leading-relaxed mb-6">
                                                {sign.traits}
                                            </p>
                                            
                                            <div className="flex items-center gap-2 text-xs font-bold text-[#ce2127] group-hover:gap-3 transition-all uppercase tracking-widest">
                                                View Full Guide <ChevronRight className="w-4 h-4" />
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ZodiacSignGrid;
