import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ChevronRight, Flame, MapPin, Calendar, Clock, ArrowRight, ShieldCheck, Map, Users, Info } from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";


const PhalenGaonHoliBlog = () => {
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Phalen Gaon Holi 2026 Fire Ritual Travel Guide",
            "description": "Complete guide for Phalen Gaon Holi including fire ritual details, travel planning, routes, timing, and crowd tips to witness the Holika Dahan tradition safely.",
            "keywords": [
                "Phalen Gaon Holi",
                "Phalen Holika Dahan",
                "Fire walking Holi",
                "Kosi Kalan Holi ritual",
                "Braj Holi festival",
                "Holika Dahan ceremony",
                "Mathura Holi events",
                "Braj pilgrimage guide"
            ],
            "datePublished": "2026-01-01",
            "eventDate": "2026-03-04",
            "author": {
                "@type": "Organization",
                "name": "Naman Darshan"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Naman Darshan"
            },
            "mainEntityOfPage": {
                "@type": "WebPage"
            },
            "articleSection": "Festival Travel Guide",
            "inLanguage": "en",
            "about": {
                "@type": "Event",
                "name": "Phalen Gaon Holi 2026",
                "startDate": "2026-03-04",
                "location": {
                    "@type": "Place",
                    "name": "Phalen Village, Mathura, Uttar Pradesh, India"
                }
            }
        }
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // offset for fixed header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-stone-50 font-sans selection:bg-orange-200 selection:text-orange-900">
            <SEO
                title="Phalen Gaon Holi 2026 Fire Ritual Travel Guide Tips"
                description="Plan your visit to Phalen Gaon Holi 2026 with this complete travel guide. Learn fire ritual timings, crowd tips, routes, and planning advice to witness the famous Holika Dahan priest fire walk near Kosi Kalan and experience one of Braj’s most intense spiritual Holi traditions safely."
                keywords={[
                    "Phalen Gaon Holi",
                    "Phalen Holika Dahan",
                    "Fire walking Holi",
                    "Kosi Kalan Holi ritual",
                    "Braj Holi festival",
                    "Holika Dahan ceremony",
                    "Mathura Holi events",
                    "Braj pilgrimage guide"
                ]}
                schemas={schemas}
            />

            <Header />

            {/* Hero Section with Parallax Effect and Gradient Overlay */}
            <div className="relative pt-36 pb-20 lg:pt-52 lg:pb-28 overflow-hidden bg-stone-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/blog13.jpg"
                        alt="Phalen Gaon Ki Holi 2026 Fire Ritual"
                        className="w-full h-full object-cover opacity-40 scale-105 transform hover:scale-100 transition-transform duration-10000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-900/50 to-red-900/50 mix-blend-multiply"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb & Share */}
                    <BlogBreadcrumb pageTitle="Phalen Gaon Ki Holi 2026" />

                    <div className="max-w-lg lg:max-w-4xl mx-auto text-center animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6 shadow-lg shadow-orange-500/30">
                            <Flame className="w-4 h-4" /> Festival Travel Guide
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl font-serif">
                            Phalen Gaon Ki Holi
                        </h1>
                        <p className="text-xl sm:text-2xl text-orange-100/90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                            The Extraordinary Fire Walking Ritual of Holika Dahan in Braj
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm font-medium">
                            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10 shadow-xl">
                                <Calendar className="w-4 h-4 text-orange-400" /> March 4, 2026
                            </span>
                            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10 shadow-xl">
                                <Clock className="w-4 h-4 text-orange-400" /> 6 min read
                            </span>
                            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10 shadow-xl">
                                <MapPin className="w-4 h-4 text-orange-400" /> Near Kosi Kalan
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-7xl mx-auto">

                    {/* Main Content Area */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Featured Image */}
                        <div className="rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-stone-100 group relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                            <img src="/assets/blog13.jpg" alt="Phalen Gaon Ki Holi 2026 Fire Ritual" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                        </div>

                        {/* Intro Card */}
                        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-500">
                            <div className="absolute top-0 right-0 p-8 opacity-5 text-orange-500 transform group-hover:scale-110 transition-transform duration-700">
                                <Flame size={120} />
                            </div>

                            <div id="introduction" className="relative z-10">
                                <h2 className="text-3xl font-bold text-stone-900 mb-6 flex items-center gap-3 font-serif">
                                    <span className="w-10 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full inline-block"></span>
                                    Where Devotion Meets Fire
                                </h2>
                                <p className="text-lg text-stone-600 mb-5 leading-relaxed">
                                    When most people think of Holi, they imagine vivid celebrations of colour and joyful play. But in the secluded <strong>Phalen village</strong>, near Kosi Kalan in the Mathura district, Holi reveals a profoundly different, fiercer spiritual face.
                                </p>
                                <p className="text-lg text-stone-600 mb-5 leading-relaxed">
                                    On the night of <strong>4 March 2026</strong>, thousands will gather for the extraordinary and ancient ritual known as <strong>Phalen Gaon Ki Holi</strong>. The defining moment occurs when a designated village priest walks barefoot through a blazing, massive Holika bonfire, emerging completely unharmed.
                                </p>
                                <div className="bg-orange-50/50 border-l-4 border-orange-500 p-6 rounded-r-xl my-8">
                                    <p className="text-lg text-stone-800 font-medium italic m-0">
                                        "This is not symbolic theatre — it is a deeply rooted Braj tradition witnessed year after year. For devotees completing the full Braj Holi journey, witnessing the Phalen Holika Dahan is considered one of the most intense and spiritually powerful experiences of their lifetime."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* What is it Section */}
                        <div id="what-is-phalen" className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100">
                            <h2 className="text-3xl font-bold text-stone-900 mb-8 font-serif">What is Phalen Gaon Ki Holi?</h2>
                            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                                Phalen Gaon Ki Holi is an unparalleled Holika Dahan tradition held annually. The core of this ritual demands immense spiritual rigor and unbroken faith.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    { text: "Weeks of strict fasting & spiritual discipline by a designated priest", icon: Timer },
                                    { text: "Preparation of a massive Holika bonfire in the village square", icon: Flame },
                                    { text: "Thousands of devotees gathering on Holika Dahan night", icon: Users },
                                    { text: "The priest walking barefoot through blazing fire", icon: Footprints },
                                    { text: "Emerging without visible injury, symbolising divine protection", icon: ShieldCheck }
                                ].map((item, idx) => {
                                    const Icon = item.icon || ShieldCheck;
                                    return (
                                        <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-stone-50 border border-stone-100 hover:border-orange-200 hover:bg-orange-50/30 transition-colors">
                                            <div className="p-2 bg-white rounded-lg shadow-sm text-orange-500 shrink-0">
                                                <Icon size={20} />
                                            </div>
                                            <p className="text-stone-700 font-medium leading-snug">{item.text}</p>
                                        </div>
                                    )
                                })}
                            </div>

                            <p className="text-stone-600 leading-relaxed bg-stone-50 p-6 rounded-2xl border border-stone-100 text-sm italic">
                                <strong>High Search Interest:</strong> Every year before Holi, searches for "Phalen Gaon Holi date", "Phalen Holika Dahan fire walk", "Kosikalan miracle Holi", and "Phalen village fire ritual" spike dramatically as pilgrims seek to witness this miracle.
                            </p>
                        </div>

                        {/* Significance Grid */}
                        <div id="significance" className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 transform group-hover:scale-150 transition-transform duration-1000"></div>
                                <ShieldCheck className="w-10 h-10 text-indigo-300 mb-6" />
                                <h3 className="text-2xl font-bold mb-4 font-serif">Triumph of Faith</h3>
                                <p className="text-indigo-100 leading-relaxed text-sm">
                                    Unlike the playful Lathmar Holi of Barsana, Phalen represents the triumph of faith over fear and devotion overcoming physical elements.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -ml-10 -mb-10 transform group-hover:scale-150 transition-transform duration-1000"></div>
                                <Flame className="w-10 h-10 text-orange-200 mb-6" />
                                <h3 className="text-2xl font-bold mb-4 font-serif">Ancient Tradition</h3>
                                <p className="text-orange-100 leading-relaxed text-sm">
                                    It highlights the deeper spiritual side of Holika Dahan, preserving an ancient Braj village tradition that symbolises complete devotion and divine protection.
                                </p>
                            </div>
                        </div>

                        {/* Practical Guide Section */}
                        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100">
                            <h2 className="text-3xl font-bold text-stone-900 mb-8 font-serif">Practical Guide: Visiting Phalen</h2>

                            <div id="travel-guide" className="mt-12">
                                    <h3 className="text-xl font-bold text-stone-800 flex items-center gap-3 mb-5">
                                        <Map className="text-orange-500" /> Reaching Phalen Village
                                    </h3>
                                    <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-4 text-stone-700">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
                                                <span><strong>Location:</strong> Near Kosi Kalan, Mathura district, UP</span>
                                            </li>
                                            <li className="flex items-start gap-4 text-stone-700">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
                                                <span><strong>Access:</strong> Nearest railway is Kosi Kalan; ~90-120 mins drive from Mathura. easily accessible via NCR highways.</span>
                                            </li>
                                            <li className="flex items-start gap-4 text-stone-700">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
                                                <span><strong>Accommodation:</strong> Very limited in Phalen. Pilgrims generally stay in Mathura/Vrindavan and make the evening trip.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div id="what-to-expect" className="grid sm:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-stone-800 flex items-center gap-3 mb-5">
                                            <Info className="text-red-500" /> What to Expect
                                        </h3>
                                        <ul className="space-y-3 text-stone-600">
                                            <li className="flex items-center gap-2 px-3 py-2 bg-red-50/50 rounded-lg text-sm border border-red-100"><ArrowRight size={14} className="text-red-400 shrink-0" /> Heavy traffic near village entry</li>
                                            <li className="flex items-center gap-2 px-3 py-2 bg-red-50/50 rounded-lg text-sm border border-red-100"><ArrowRight size={14} className="text-red-400 shrink-0" /> Large crowds gathering hours early</li>
                                            <li className="flex items-center gap-2 px-3 py-2 bg-red-50/50 rounded-lg text-sm border border-red-100"><ArrowRight size={14} className="text-red-400 shrink-0" /> Strong security and late-night dispersal</li>
                                        </ul>
                                    </div>
                                    <div id="crowd">
                                        <h3 className="text-xl font-bold text-stone-800 flex items-center gap-3 mb-5">
                                            <Users className="text-amber-500" /> Crowd Reality
                                        </h3>
                                        <ul className="space-y-3 text-stone-600">
                                            <li className="flex items-center gap-2 px-3 py-2 bg-amber-50/50 rounded-lg text-sm border border-amber-100"><ArrowRight size={14} className="text-amber-400 shrink-0" /> Long walks from parking areas</li>
                                            <li className="flex items-center gap-2 px-3 py-2 bg-amber-50/50 rounded-lg text-sm border border-amber-100"><ArrowRight size={14} className="text-amber-400 shrink-0" /> Entry delays to ritual grounds</li>
                                            <li className="flex items-center gap-2 px-3 py-2 bg-amber-50/50 rounded-lg text-sm border border-amber-100"><ArrowRight size={14} className="text-amber-400 shrink-0" /> Limited food and restroom facilities</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        {/* Naman Darshan Promo */}
                        <div id="naman-darshan" className="bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgb(0,0,0,0.2)] text-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 mix-blend-overlay"></div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl transform group-hover:translate-x-10 group-hover:-translate-y-10 transition-transform duration-1000"></div>

                            <h2 className="relative z-10 text-3xl font-bold mb-6 font-serif">Complete the Braj Circuit with Us</h2>
                            <p className="relative z-10 text-stone-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                                While Phalen Gaon Ki Holi is a fire ritual, most devotees integrate it into a larger pilgrimage encompassing Mathura Janmabhoomi, Vrindavan temples, Gokul, and Barsana. We ensure your itinerary is seamlessly planned across high-footfall dates.
                            </p>

                            <div className="relative z-10 flex flex-wrap justify-center gap-4 mb-10">
                                {["Itinerary Planning", "Darshan Coordination", "Event Scheduling", "Devotional Support"].map(tag => (
                                    <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-stone-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Link to="/darshan/banke-bihari" className="relative z-10 inline-block">
                                <button className="group flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6)] transform hover:-translate-y-1 transition-all duration-300">
                                    Plan Your Braj Holi Yatra
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </Link>
                        </div>

                        {/* FAQs */}
                        <div id="faqs" className="bg-stone-50 rounded-3xl p-8 sm:p-12 border border-stone-200">
                            <h2 className="text-3xl font-bold text-stone-900 mb-8 font-serif">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {[
                                    { q: "When is Phalen Gaon Ki Holi celebrated in 2026?", a: "Phalen Gaon Ki Holi will be celebrated on 4 March 2026, on the night of Holika Dahan during the Holi festival." },
                                    { q: "What exactly happens during the Phalen Holika Dahan ritual?", a: "A designated priest who observes weeks of rigorous fasting and discipline walks entirely barefoot through a massive flaming bonfire as part of an ancient test of faith and devotion." },
                                    { q: "Is Phalen Holi extremely crowded for visitors?", a: "Yes. Given its national attention and the small village infrastructure, thousands gather, making crowd density, traffic, and waiting times very high. Early arrival is essential." },
                                    { q: "Can Phalen Holi be combined with other Braj visits?", a: "Absolutely. Many pilgrims smartly combine this visit with Mathura Janmabhoomi, Vrindavan, Barsana, and Gokul darshan for a comprehensive Braj Holi spiritual itinerary." }
                                ].map((faq, idx) => (
                                    <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:border-stone-200 transition-colors">
                                        <h3 className="font-bold text-lg text-stone-800 mb-3">{faq.q}</h3>
                                        <p className="text-stone-600 leading-relaxed">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer Outro */}
                        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 sm:p-12 text-center border border-orange-100/50">
                            <Flame className="w-12 h-12 text-orange-400 mx-auto mb-6 opacity-80" />
                            <h2 className="text-2xl font-bold text-stone-900 mb-4 font-serif">The Final Chapter of Braj Holi</h2>
                            <p className="text-stone-700 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                                Phalen Gaon Ki Holi is not about play—it is faith tested against fire. After days of celebration across the Braj region, the journey concludes where devotion meets flame.
                            </p>
                            <p className="text-stone-700 text-lg mb-8 italic">
                                "Braj Holi begins with colour — and ends with belief."
                            </p>
                            <p className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                                Radhe Radhe 🙏🔥
                            </p>
                        </div>
                    </div>

                    {/* Sidebar / Sticky Menu */}
                    <div className="hidden lg:block lg:col-span-4">
                        <div className="sticky top-40 md:top-48 lg:top-52 space-y-8">
                            {/* Article Navigation */}
                            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100">
                                <h3 className="font-bold text-xl text-stone-900 mb-6 font-serif flex items-center gap-2">
                                    <MapPin className="text-orange-500 w-5 h-5" /> Quick Navigation
                                </h3>
                                <ul className="space-y-1 font-medium text-stone-600">
                                    {[
                                        { id: 'introduction', label: 'Introduction' },
                                        { id: 'what-is-phalen', label: 'About the Ritual' },
                                        { id: 'significance', label: 'Spiritual Significance' },
                                        { id: 'travel-guide', label: 'Reaching Phalen' },
                                        { id: 'what-to-expect', label: 'Expectations & Crowds' },
                                        { id: 'naman-darshan', label: 'Pilgrimage Assistance' },
                                        { id: 'faqs', label: 'FAQs' }
                                    ].map(link => (
                                        <li key={link.id}>
                                            <button
                                                onClick={() => scrollToSection(link.id)}
                                                className="text-left w-full px-4 py-2.5 rounded-xl hover:bg-orange-50 hover:text-orange-700 transition-colors flex items-center justify-between group"
                                            >
                                                {link.label}
                                                <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-400" />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

// SVG Icons that aren't in lucide-react standard
const Footprints = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4 16v-2.38C4 11.5 5.97 10.5 7 10c1.03-.5 3-1.5 3-3.62V4"></path>
        <path d="M20 16v-2.38c0-2.12-1.97-3.12-3-3.62-1.03-.5-3-1.5-3-3.62V4"></path>
        <circle cx="7" cy="4" r="2"></circle>
        <circle cx="17" cy="4" r="2"></circle>
        <path d="M4 20h0"></path>
        <path d="M10 20h0"></path>
        <path d="M14 20h0"></path>
        <path d="M20 20h0"></path>
    </svg>
)

const Timer = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="10" y1="2" x2="14" y2="2"></line>
        <line x1="12" y1="14" x2="15" y2="11"></line>
        <circle cx="12" cy="14" r="8"></circle>
    </svg>
)

export default PhalenGaonHoliBlog;
