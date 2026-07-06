import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { 
    ChevronRight, Calendar, Clock, BookOpen, HelpCircle, Sun, 
    Info, Flower2, Moon, Stars, CheckCircle2, Heart, Sparkles, 
    Home, ShieldCheck, MapPin, Search, ClipboardList, Flame, 
    Gift, Palette, Layout, Zap, ArrowRight, Compass
} from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
import { motion } from "framer-motion";

// Import Vastu Shastra images
import vs1 from "@/assets/VS1.png";
import vs2 from "@/assets/VS2.png";
import vs3 from "@/assets/VS3.png";
import vs4 from "@/assets/VS4.png";
import vs5 from "@/assets/VS5.png";
import vs6 from "@/assets/VS6.png";
import vs7 from "@/assets/VS7.png";

const VastuShastraBlog = () => {
    const tableOfContents = [
        { id: "what-is-it", title: "What is Vastu Shastra?" },
        { id: "modern-living", title: "Importance in Modern Living" },
        { id: "home-design", title: "Principles for Home Design" },
        { id: "architecture", title: "Architecture & Construction" },
        { id: "colours", title: "Best Vastu Colours" },
        { id: "astrology", title: "Astrology Connection" },
        { id: "items", title: "Vastu Items for Energy" },
        { id: "doshas", title: "Doshas & Remedies" },
        { id: "why-matters", title: "Why Vastu Matters" },
        { id: "faqs", title: "Frequently Asked Questions" }
    ];

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Vastu Shastra: Complete Guide to Balance, Energy & Prosperity",
            "description": "Comprehensive guide to Vastu Shastra for home. Learn tips, directions, colours, and remedies to improve prosperity and harmony.",
            "keywords": [
                "Vastu Shastra guide",
                "Vastu tips for home",
                "Vastu directions chart",
                "Vastu colours for living room",
                "Vastu dosha remedies"
            ],
            "datePublished": "2026-05-16",
            "author": {
                "@type": "Organization",
                "name": "Naman Darshan"
            }
        }
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 180;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="min-h-screen bg-stone-50">
            <SEO
                title="Vastu Shastra Guide for Home | Tips, Directions & Remedies"
                description="Explore Vastu Shastra for home with directions, tips, colours & remedies. Improve energy, prosperity, and harmony with simple Vastu principles."
                keywords={[
                    "Vastu Shastra guide",
                    "Vastu tips for home",
                    "Vastu directions chart",
                    "Vastu colours for living room",
                    "Vastu dosha remedies",
                    "spiritual home design"
                ]}
                schemas={schemas}
            />
            <Header />
            <main className="pt-36 md:pt-48 lg:pt-52 pb-12 font-display">
                <div className="container mx-auto px-4">
                    <BlogBreadcrumb pageTitle="Vastu Shastra Guide" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Sidebar */}
                        <aside className="lg:col-span-3">
                            <div className="bg-white rounded-3xl shadow-sm p-8 sticky top-40 md:top-48 lg:top-52 border border-stone-100">
                                <h3 className="font-bold text-xl mb-6 text-stone-900 border-b pb-4 text-center tracking-tight">Table of Contents</h3>
                                <nav className="space-y-1.5">
                                    {tableOfContents.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className="w-full text-left px-4 py-3 text-sm text-stone-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all flex items-center gap-2.5 font-medium group"
                                        >
                                            <ChevronRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-1 transition-transform" />
                                            {item.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Content */}
                        <article className="lg:col-span-6">
                            <div className="bg-white rounded-[2.5rem] shadow-sm overflow-hidden border border-stone-100">
                                <div className="h-2 w-full bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-400" />
                                
                                <div className="p-8 md:p-14 lg:p-16">
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-8 leading-[1.1] tracking-tight">
                                        Vastu Shastra: Complete Guide to Balance, Energy & Prosperity
                                    </h1>
                                    
                                    <div className="flex flex-wrap items-center gap-4 mb-10 pb-8 border-b border-stone-100">
                                        <div className="flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                                            <Compass className="w-4 h-4" /> Architectural Wisdom
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm text-stone-500 font-medium">
                                            <Clock className="w-4 h-4 text-orange-500" /> 10 min read
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm text-stone-500 font-medium ml-auto">
                                            <Home className="w-4 h-4 text-orange-500" /> Vastu Guide
                                        </div>
                                    </div>

                                    {/* Main Hero Image Placeholder */}
                                    <div className="relative group overflow-hidden mb-12 rounded-[2rem] shadow-2xl aspect-video bg-stone-100">
                                        <img 
                                            src={vs1} 
                                            alt="vastu shastra directions chart for home" 
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" 
                                        />
                                        <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0 pointer-events-none" />
                                    </div>

                                    <div className="space-y-12 text-lg leading-relaxed text-stone-700">
                                        <section id="what-is-it">
                                            <h2 className="text-3xl font-bold text-stone-900 mb-8 flex items-center gap-4">
                                                <Info className="w-8 h-8 text-orange-500" /> What is Vastu Shastra?
                                            </h2>
                                            <p className="mb-6">
                                                Vastu Shastra is an ancient Indian science of architecture that focuses on designing spaces in harmony with nature and universal energies. Rooted in traditional knowledge, it combines elements of design, direction, astronomy, and environmental balance to create positive living and working environments.
                                            </p>
                                            <p className="mb-6">
                                                The core principle of Vastu is to align buildings with the five natural elements—earth, water, fire, air, and space to ensure a balanced flow of energy. When properly applied, Vastu helps enhance health, wealth, peace, and overall well-being.
                                            </p>
                                        </section>

                                        <section id="modern-living" className="bg-orange-50 p-10 rounded-[2rem] border border-orange-200/50">
                                            <h2 className="text-3xl font-bold text-stone-900 mb-8 flex items-center gap-4">
                                                <Zap className="w-8 h-8 text-orange-500" /> Importance of Vastu Shastra in Modern Living
                                            </h2>
                                            <p className="mb-8">
                                                In today’s fast-paced lifestyle, Vastu Shastra plays a crucial role in creating stress-free and productive environments. A Vastu-compliant home or workplace can:
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {[
                                                    "Improve mental and physical health",
                                                    "Attract financial stability and growth",
                                                    "Enhance relationships and harmony",
                                                    "Reduce negativity and stress",
                                                    "Increase productivity and focus"
                                                ].map((point, idx) => (
                                                    <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-orange-100 font-bold text-sm">
                                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                        {point}
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="mt-8 italic text-stone-600 font-medium text-center">
                                                "Even small Vastu corrections can bring noticeable improvements in daily life."
                                            </p>
                                        </section>

                                        {/* Image Space After Modern Living */}
                                        <div className="rounded-3xl overflow-hidden shadow-lg aspect-video bg-stone-100">
                                            <img 
                                                src={vs2} 
                                                alt="vastu tips for positive energy house" 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <section id="home-design">
                                            <h2 className="text-3xl font-bold text-stone-900 mb-8 flex items-center gap-4">
                                                <Layout className="w-8 h-8 text-orange-500" /> Vastu Shastra Principles for Home Design
                                            </h2>
                                            <p className="mb-6">Following proper Vastu directions (Disha) is essential for energy balance:</p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="p-6 bg-white border border-stone-100 rounded-2xl shadow-sm">
                                                    <h4 className="font-bold text-orange-700 mb-2">North-East (Ishanya)</h4>
                                                    <p className="text-sm">Ideal for entrance and prayer room. Represents the water element.</p>
                                                </div>
                                                <div className="p-6 bg-white border border-stone-100 rounded-2xl shadow-sm">
                                                    <h4 className="font-bold text-orange-700 mb-2">South-East (Agneya)</h4>
                                                    <p className="text-sm">Best location for kitchen (fire element). Promotes health and vitality.</p>
                                                </div>
                                                <div className="p-6 bg-white border border-stone-100 rounded-2xl shadow-sm">
                                                    <h4 className="font-bold text-orange-700 mb-2">South-West (Nairutya)</h4>
                                                    <p className="text-sm">Suitable for master bedroom. Represents stability and authority.</p>
                                                </div>
                                                <div className="p-6 bg-white border border-stone-100 rounded-2xl shadow-sm">
                                                    <h4 className="font-bold text-orange-700 mb-2">North-West (Vayavya)</h4>
                                                    <p className="text-sm">Good for guest rooms and movement. Represents the air element.</p>
                                                </div>
                                            </div>
                                            <p className="mt-8 font-medium">Proper room placement ensures smooth energy flow and promotes positivity throughout the house. For example, the staircase should always rise clockwise.</p>
                                        </section>

                                        {/* Image Space After Home Design */}
                                        <div className="rounded-3xl overflow-hidden shadow-lg aspect-[21/9] bg-stone-100">
                                            <img 
                                                src={vs3} 
                                                alt="modern architecture with vastu principles" 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <section id="architecture">
                                            <h2 className="text-3xl font-bold text-stone-900 mb-8 flex items-center gap-4">
                                                <ShieldCheck className="w-8 h-8 text-orange-500" /> Vastu Shastra for Architecture & Construction
                                            </h2>
                                            <p className="mb-6">
                                                Vastu-based architecture focuses on creating structures that are aligned with natural forces. Key architectural guidelines include:
                                            </p>
                                            <ul className="space-y-4 font-bold text-stone-800">
                                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /> Proper sunlight and cross ventilation</li>
                                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /> Balanced open and closed spaces</li>
                                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /> Use of natural materials</li>
                                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /> Integration with surroundings</li>
                                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /> Avoidance of structural imbalances</li>
                                            </ul>
                                            <p className="mt-8">A Vastu-friendly structure enhances peace, prosperity, and long-term stability.</p>
                                        </section>

                                        {/* Image Space After Architecture */}
                                        <div className="rounded-3xl overflow-hidden shadow-lg aspect-video bg-stone-100">
                                            <img 
                                                src={vs4} 
                                                alt="balanced living space with natural materials" 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <section id="colours">
                                            <h2 className="text-3xl font-bold text-stone-900 mb-8 flex items-center gap-4">
                                                <Palette className="w-8 h-8 text-orange-500" /> Best Vastu Colours for Home
                                            </h2>
                                            <p className="mb-10">Colours play a powerful role in influencing mood and energy. According to Vastu Shastra:</p>
                                            <div className="space-y-6">
                                                {[
                                                    { room: "Living Room", colours: "Blue, green, beige, yellow (add a hint of red for energy)" },
                                                    { room: "Hall", colours: "Pink, green, brown, grey, violet" },
                                                    { room: "Dining Room", colours: "Light shades of pink, blue, orange, purple" },
                                                    { room: "Study Room", colours: "Green, lavender, light purple (improves focus)" },
                                                    { room: "Children’s Room", colours: "Cheerful tones like orange, pink, lavender" }
                                                ].map((item, i) => (
                                                    <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-white border-l-4 border-orange-500 rounded-r-2xl shadow-sm">
                                                        <span className="font-bold text-stone-900 w-40">{item.room}:</span>
                                                        <span className="text-stone-600">{item.colours}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="mt-8 italic font-medium">Choosing the right colours helps create a calm and positive environment.</p>
                                        </section>

                                        <section id="astrology">
                                            <h2 className="text-3xl font-bold text-stone-900 mb-8 flex items-center gap-4">
                                                <Stars className="w-8 h-8 text-orange-500" /> Vastu Shastra and Astrology Connection
                                            </h2>
                                            <p className="mb-6">
                                                Vastu Shastra and astrology are closely connected. When both are aligned, they amplify positive results in life.
                                            </p>
                                            <div className="bg-stone-900 text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                                                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-orange-500 opacity-20 rounded-full blur-2xl" />
                                                <ul className="space-y-4 relative z-10">
                                                    <li className="flex gap-3">
                                                        <Sun className="w-6 h-6 text-orange-400 shrink-0" />
                                                        <span><strong>North-East (Solar Zone):</strong> Should be lower to invite solar energy.</span>
                                                    </li>
                                                    <li className="flex gap-3">
                                                        <Moon className="w-6 h-6 text-orange-400 shrink-0" />
                                                        <span><strong>South-West (Lunar Zone):</strong> Should be higher for stability.</span>
                                                    </li>
                                                </ul>
                                                <p className="mt-6 text-stone-300 text-sm leading-relaxed">Proper alignment ensures flow of sunlight, energy, and water. Incorrect land structure or imbalance can lead to negative effects, while proper alignment brings prosperity and happiness.</p>
                                            </div>
                                        </section>

                                        {/* Image Space After Astrology Connection */}
                                        <div className="rounded-3xl overflow-hidden shadow-lg aspect-video bg-stone-100">
                                            <img 
                                                src={vs5} 
                                                alt="astrological chart and vastu directions" 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <section id="items">
                                            <h2 className="text-3xl font-bold text-stone-900 mb-8 flex items-center gap-4">
                                                <Sparkles className="w-8 h-8 text-orange-500" /> Vastu Shastra Items for Positive Energy
                                            </h2>
                                            <p className="mb-8">Certain Vastu items are believed to attract positivity and remove negative energy:</p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {[
                                                    { title: "Laughing Buddha", desc: "Symbol of happiness, wealth, and peace." },
                                                    { title: "Tortoise Yantra", desc: "Helps balance Vastu doshas." },
                                                    { title: "Gomati Chakra", desc: "Attracts prosperity and luck." },
                                                    { title: "Horseshoe", desc: "Protects from evil eye and negative forces." }
                                                ].map((item, i) => (
                                                    <div key={i} className="p-6 bg-white border border-stone-100 rounded-2xl shadow-sm hover:border-orange-300 transition-colors">
                                                        <h4 className="font-bold text-stone-900 mb-2">{item.title}</h4>
                                                        <p className="text-sm text-stone-600">{item.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="mt-8 italic text-stone-600 font-medium">Placing these items correctly can enhance the energy of your home or workplace.</p>
                                        </section>

                                        {/* Image Space After Vastu Items */}
                                        <div className="rounded-3xl overflow-hidden shadow-lg aspect-video bg-stone-100">
                                            <img 
                                                src={vs6} 
                                                alt="spiritual decorative items for home vastu" 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <section id="doshas">
                                            <h2 className="text-3xl font-bold text-stone-900 mb-8 flex items-center gap-4">
                                                <Heart className="w-8 h-8 text-orange-500" /> Common Vastu Doshas and Remedies
                                            </h2>
                                            <p className="mb-8">Vastu doshas (defects) can disrupt energy flow. Simple remedies include:</p>
                                            <div className="space-y-4">
                                                {[
                                                    "Using mirrors to correct directional imbalance",
                                                    "Keeping indoor plants for positivity",
                                                    "Placing rock salt to absorb negative energy",
                                                    "Maintaining cleanliness and clutter-free spaces"
                                                ].map((remedy, i) => (
                                                    <div key={i} className="flex gap-4 p-6 bg-white border border-stone-100 rounded-2xl shadow-sm group">
                                                        <div className="bg-stone-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 group-hover:bg-orange-600 transition-colors">{i+1}</div>
                                                        <p className="font-bold text-stone-800">{remedy}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="mt-8 font-medium">These easy solutions can help restore balance without major structural changes.</p>
                                        </section>

                                        {/* Image Space After Doshas & Remedies (VS7) */}
                                        <div className="rounded-3xl overflow-hidden shadow-lg aspect-video bg-stone-100">
                                            <img 
                                                src={vs7} 
                                                alt="vastu dosha remedies home" 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <section id="why-matters" className="text-center pt-8 border-t border-stone-100">
                                            <h2 className="text-4xl font-bold text-stone-900 mb-8 tracking-tight">Why Vastu Shastra Matters</h2>
                                            <p className="text-xl leading-relaxed text-stone-600 max-w-2xl mx-auto font-medium mb-10">
                                                Vastu Shastra is not just an ancient tradition but a practical guide to creating balanced and harmonious living spaces. By aligning your home with natural elements and directions, you can invite positivity, success, and peace into your life.
                                            </p>
                                            <p className="text-lg text-stone-700 leading-relaxed max-w-3xl mx-auto mb-10">
                                                Following Vastu principles allows you to transform your environment—and ultimately your life—into one filled with stability, prosperity, and happiness. It provides a foundation upon which a successful and peaceful life can be built, bridging the gap between material structure and spiritual well-being.
                                            </p>
                                            <div className="inline-block bg-orange-600 text-white font-bold px-12 py-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                                "Transform your space, transform your life. 🙏✨"
                                            </div>
                                        </section>

                                        <section id="cta" className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative group overflow-hidden mt-20">
                                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-orange-500 opacity-20 rounded-full transform rotate-12 transition-transform group-hover:scale-125 duration-1000" />
                                            <h2 className="text-3xl font-bold mb-6 relative z-10">Ready for a Spiritual Upgrade?</h2>
                                            <p className="text-stone-300 mb-10 relative z-10 max-w-lg">
                                                Combine Vastu principles with authentic Vedic rituals. Book your Vastu Shanti Puja or consult with our experts today.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-5 relative z-10">
                                                <Link to="/puja" className="inline-block bg-orange-600 text-white font-bold text-lg px-12 py-4 rounded-full shadow-2xl hover:bg-orange-700 transform transition-all duration-300 text-center">
                                                    Explore Puja Services
                                                </Link>
                                                <Link to="/referral" className="inline-block bg-white text-stone-900 font-bold text-lg px-12 py-4 rounded-full shadow-2xl hover:bg-stone-50 transform transition-all duration-300 text-center">
                                                    Spread Sanatan Dharma
                                                </Link>
                                            </div>
                                        </section>

                                        <section id="faqs" className="pt-20">
                                            <h2 className="text-3xl font-bold text-stone-900 mb-12 flex items-center gap-4">
                                                <HelpCircle className="w-8 h-8 text-orange-500" /> Frequently Asked Questions
                                            </h2>
                                            <div className="space-y-6">
                                                {[
                                                    { q: "What is Vastu Shastra?", a: "Vastu Shastra is an ancient Indian science that guides home design based on energy flow and natural elements." },
                                                    { q: "Does Vastu really work?", a: "Yes, when applied correctly, Vastu principles help improve harmony, health, and financial stability by aligning your space with natural forces." },
                                                    { q: "What are the best Vastu directions for home?", a: "North-East for prayer, South-East for kitchen, and South-West for bedroom are considered ideal for optimal energy flow." },
                                                    { q: "How to remove Vastu dosha?", a: "Simple remedies include using mirrors, adding indoor plants, placing rock salt, and maintaining a clutter-free environment." },
                                                    { q: "Which colours are best as per Vastu?", a: "Light, natural shades like green, blue, yellow, and beige are considered most positive as they promote calm and growth." }
                                                ].map((faq, i) => (
                                                    <div key={i} className="p-8 bg-white border border-stone-100 rounded-[2rem] shadow-sm hover:shadow-lg transition-all group">
                                                        <h3 className="text-lg font-bold mb-4 flex items-start gap-2.5 group-hover:text-orange-600 transition-colors"><Sparkles className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" /> {faq.q}</h3>
                                                        <p className="text-sm text-stone-500 leading-relaxed font-medium">{faq.a}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Right Sidebar - Selection & Facts */}
                        <aside className="lg:col-span-3">
                            <div className="space-y-8 sticky top-40 md:top-48 lg:top-52">
                                <div className="bg-white rounded-3xl shadow-sm p-8 border border-stone-100">
                                    <h3 className="font-bold text-sm text-stone-400 uppercase tracking-widest mb-6 border-b pb-4">Internal Links</h3>
                                    <div className="flex flex-wrap gap-2 text-xs font-bold">
                                        <Link to="/temples" className="px-3 py-2 bg-stone-50 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors">Sacred Temples</Link>
                                        <Link to="/puja" className="px-3 py-2 bg-stone-50 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors">Book a Puja</Link>
                                        <Link to="/referral" className="px-3 py-2 bg-stone-50 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors">Spread Sanatan Dharma</Link>
                                        <Link to="/prasadam" className="px-3 py-2 bg-stone-50 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors">Get Prasadam</Link>
                                    </div>
                                </div>

                                <div className="bg-orange-600 rounded-3xl shadow-lg p-8 text-white relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-20 transform group-hover:scale-110 transition-transform">
                                        <Stars className="w-16 h-16" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-4 relative z-10">Vastu Remedies</h3>
                                    <p className="text-sm mb-6 opacity-90 relative z-10">Discover how simple changes can bring massive shifts in your life's energy.</p>
                                    <Link to="/puja/vastu-shanti" className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all">
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default VastuShastraBlog;
