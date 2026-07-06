import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ChevronRight, Waves, Clock, MapPin, Calendar, Info, HelpCircle, BookOpen, CheckCircle2, Star, Mountain } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
import CommentSection from "@/components/common/CommentSection";
import TrimbakeshwarJyotirlingaImg from '@/assets/blogs/twelveJyotirling/TrimbakeshwarJyotirlinga.jpeg';

const TrimbakeshwarJyotirlinga = () => {
    const tableOfContents = [
        { id: "intro", title: "Introduction" },
        { id: "importance", title: "Why it is Important" },
        { id: "mythology", title: "Mythological Story" },
        { id: "spiritual-meaning", title: "Spiritual Meaning" },
        { id: "history", title: "Historical Importance" },
        { id: "architecture", title: "Temple Architecture" },
        { id: "godavari", title: "The Sacred Godavari River" },
        { id: "kumbh-mela", title: "Kumbh Mela" },
        { id: "rituals", title: "Famous Rituals & Dosha Pujas" },
        { id: "festivals", title: "Festivals Celebrated" },
        { id: "travel-guide", title: "Travel Guide" },
        { id: "nearby-places", title: "Nearby Places" },
        { id: "spiritual-benefits", title: "Spiritual Benefits" },
        { id: "conclusion", title: "Conclusion" },
        { id: "faq", title: "Frequently Asked Questions" }
    ];

    const recentPosts = [
        { title: "Somnath Jyotirlinga Guide", link: "/blog/somnath-jyotirlinga-gujarat-guide" },
        { title: "Mahakaleshwar Jyotirlinga Guide", link: "/blog/mahakaleshwar-jyotirlinga-ujjain-guide" },
        { title: "Kashi Vishwanath Guide", link: "/blog/kashi-vishwanath-moksha-ganga-aarti-guide" }
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
        <div className="min-h-screen bg-slate-50">
            <SEO
                title="Trimbakeshwar Jyotirlinga – History, Dosha Puja, Darshan & Travel Guide"
                description="Explore Trimbakeshwar Jyotirlinga near Nashik, one of the sacred 12 Jyotirlingas of Lord Shiva. Discover temple history, Godavari River origin, Kaal Sarp Dosha Puja, and travel guide."
                keywords="Trimbakeshwar Jyotirlinga, Trimbakeshwar Temple, Kaal Sarp Dosha Puja, Narayan Nagbali Puja, Trimbakeshwar Darshan, Godavari River Origin, Trimbakeshwar history"
            />
            <Header />

            <main className="pt-36 md:pt-48 lg:pt-52 pb-12">
                <div className="container mx-auto px-4">
                    <BlogBreadcrumb
                        pageTitle="Trimbakeshwar Jyotirlinga Guide"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Sidebar - Table of Contents */}
                        <aside className="lg:col-span-3">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-slate-100">
                                <h3 className="font-bold text-lg mb-4 text-slate-900 border-b pb-3 text-center">Table of Contents</h3>
                                <nav className="space-y-2">
                                    {tableOfContents.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:text-primary hover:bg-amber-50 rounded-lg transition-colors flex items-center gap-2"
                                        >
                                            <ChevronRight className="w-3 h-3 text-amber-500" />
                                            {item.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <article className="lg:col-span-6">
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100">
                                {/* Title Section */}
                                <div className="p-8 md:p-10">
                                    <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 leading-tight">
                                        Trimbakeshwar Jyotirlinga – The Sacred Origin of the Godavari River
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-amber-500" /> 13 May 2026</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-amber-500" /> 15 min read</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-amber-500" /> Nashik, Maharashtra</span>
                                    </div>
                                </div>

                                {/* Hero Image */}
                                <div className="relative">
                                    <div className="aspect-[16/9] bg-slate-100 flex items-center justify-center overflow-hidden border-b border-slate-100 group">
                                        <img
                                            src={TrimbakeshwarJyotirlingaImg}
                                            alt="Trimbakeshwar Jyotirlinga Temple Maharashtra"
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                            Unique Trinity Jyotirlinga
                                        </span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 md:p-10 space-y-8 text-lg leading-relaxed text-slate-700">
                                    <section id="intro">
                                        <p className="lead text-xl font-medium text-slate-900 mb-6 italic border-l-4 border-amber-500 pl-6">
                                            "Trimbakeshwar Jyotirlinga is one of the most sacred among the 12 Jyotirlingas of Lord Shiva and is located near the Brahmagiri Hills in the town of Trimbak, close to Nashik in Maharashtra."
                                        </p>
                                        <p>
                                            Surrounded by green hills, ancient temples, sacred water bodies, and spiritual energy, Trimbakeshwar is regarded as one of the holiest pilgrimage destinations in India. The temple is especially important because it is believed to be the origin of the sacred Godavari River, often referred to as the “Ganga of the South.”
                                        </p>
                                        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 my-6">
                                            <p className="font-bold text-amber-900 mb-2">Unique Feature:</p>
                                            <p className="text-sm italic text-slate-700">
                                                Unlike most Jyotirlingas, the Trimbakeshwar Jyotirlinga is unique because it symbolizes the Hindu Trinity — Brahma, Vishnu, and Mahesh (Shiva). The Jyotirlinga contains three small symbolic forms representing creation, preservation, and destruction.
                                            </p>
                                        </div>
                                        <p>
                                            For centuries, saints, sages, pilgrims, and spiritual seekers have visited Trimbakeshwar to seek blessings, remove karmic obstacles, and attain spiritual peace.
                                        </p>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="importance">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <Info className="w-8 h-8 text-amber-500" /> Why Trimbakeshwar Jyotirlinga is So Important
                                        </h2>
                                        <p>
                                            Trimbakeshwar Jyotirlinga holds immense spiritual importance because it is associated with:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                            {[
                                                "The origin of the Godavari River",
                                                "Removal of karmic and ancestral doshas",
                                                "Worship of the Hindu Trinity",
                                                "Powerful Vedic rituals and pujas",
                                                "Spiritual purification and peace"
                                            ].map((item, index) => (
                                                <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                                                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                                    <span className="text-sm font-medium text-slate-800">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="mt-6">Devotees believe that worshipping Lord Shiva at Trimbakeshwar helps:</p>
                                        <ul className="space-y-2 mt-4">
                                            {[
                                                "Remove negative karmas",
                                                "Resolve Pitru Dosha and Kaal Sarp Dosha",
                                                "Bring peace and prosperity",
                                                "Improve spiritual awareness",
                                                "Fulfill sincere wishes"
                                            ].map((benefit, i) => (
                                                <li key={i} className="flex gap-3 text-sm">
                                                    <span className="text-amber-500 font-bold">•</span> {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="mt-6 text-slate-700 italic border-l-4 border-amber-400 pl-4">
                                            The temple is considered especially powerful for performing rituals related to ancestors and planetary influences.
                                        </p>
                                    </section>

                                    <section id="mythology">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">The Divine Story Behind Trimbakeshwar</h2>
                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-800 mb-3">Gautam Rishi and the Great Drought</h3>
                                                <p>
                                                    Long ago, Sage Gautam Rishi lived near the Brahmagiri Hills with his wife Ahilya. He was known for his wisdom, kindness, and devotion. At one time, the region suffered from a severe drought that caused immense suffering to humans and animals. Seeing the pain around him, Gautam Rishi performed intense penance and prayed to Lord Varuna, the god of rain. Lord Varuna blessed him with a divine water source that never dried up, allowing the sage to grow crops and provide food to everyone.
                                                </p>
                                            </div>
                                            <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-2xl">
                                                <h4 className="text-amber-400 font-bold mb-4 uppercase tracking-widest text-xs">Jealous Sages and the False Sin</h4>
                                                <p className="text-sm text-slate-300 mb-4">
                                                    Over time, some sages became jealous of Gautam Rishi's growing respect and prosperity. They devised a plan to falsely accuse him of a grave sin by sending a sacred cow into his fields. While trying to gently move the cow away, it accidentally died. The sages accused him of killing the cow.
                                                </p>
                                                <p className="text-sm text-slate-300">
                                                    Deeply saddened, Gautam Rishi prayed to Lord Shiva and requested him to bring the holy River Ganga to the region so that he could purify himself.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-800 mb-3">Descent of the Godavari River</h3>
                                                <p>
                                                    Moved by the sage's sincerity, Lord Shiva requested Goddess Ganga to descend to Earth. Ganga appeared in the form of the Godavari River near the Brahmagiri Hills. At the request of Gautam Rishi and the sages, Lord Shiva agreed to remain there permanently as Trimbakeshwar Jyotirlinga.
                                                </p>
                                                <p className="mt-4 font-medium text-slate-800 italic">
                                                    Thus, Trimbakeshwar became one of the holiest pilgrimage sites dedicated to Lord Shiva.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="spiritual-meaning">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <Info className="w-8 h-8 text-amber-500" /> Spiritual Meaning of Trimbakeshwar
                                        </h2>
                                        <p className="mb-4">Trimbakeshwar symbolizes spiritual purification, divine balance, and liberation from karmic burdens. Spiritually, the temple represents:</p>
                                        <ul className="space-y-3">
                                            <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span> <strong>Unity of Brahma, Vishnu, and Shiva:</strong> Represents the cycle of creation, preservation, and destruction.</li>
                                            <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span> <strong>Cleansing of sins and negative karma:</strong> The divine presence helps wash away spiritual burdens.</li>
                                            <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span> <strong>Importance of truth and devotion:</strong> Inspired by the story of Gautam Rishi's unwavering faith.</li>
                                            <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span> <strong>Spiritual rebirth and purification:</strong> Attaining a new level of spiritual awareness.</li>
                                            <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span> <strong>Harmony between cosmic forces:</strong> Balancing the energies within and around us.</li>
                                        </ul>
                                        <p className="mt-4 italic text-slate-600">
                                            The sacred Godavari River further symbolizes purity, compassion, and divine grace.
                                        </p>
                                    </section>

                                    <section id="history">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Historical Importance of Trimbakeshwar</h2>
                                        <p>
                                            Trimbakeshwar Temple has been an important spiritual center for centuries. The temple is mentioned in ancient scriptures like the <strong>Shiva Purana</strong>, <strong>Skanda Purana</strong>, ancient pilgrimage texts, and regional devotional literature.
                                        </p>
                                        <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl my-6">
                                            <h4 className="font-bold text-amber-900 mb-3 text-center uppercase tracking-wider text-xs">Maratha Influence</h4>
                                            <p className="text-sm text-slate-700">
                                                The present temple structure was built during the 18th century by <strong>Peshwa Balaji Baji Rao</strong>. The temple became an important center of Vedic rituals, Sanskrit learning, and Shaivism during the Maratha period.
                                            </p>
                                        </div>
                                        <p>
                                            Even today, Trimbakeshwar remains one of the most important religious destinations in Maharashtra.
                                        </p>
                                    </section>

                                    <section id="architecture">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Architecture of Trimbakeshwar Temple</h2>
                                        <p>
                                            The temple reflects traditional black stone architecture and showcases remarkable craftsmanship. Built in the <strong>Nagara-style</strong>, it features:
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
                                            {["Black stone construction", "Intricate carvings", "Large temple courtyards", "Traditional Nagara-style design", "Sacred sanctum housing the Jyotirlinga"].map((f, i) => (
                                                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                                                    <Star className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                                    <span className="text-sm font-medium text-slate-800">{f}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="bg-slate-900 p-8 rounded-3xl text-white my-8 shadow-2xl">
                                            <h4 className="text-amber-400 font-bold mb-4 uppercase tracking-widest text-xs">The Unique Jyotirlinga</h4>
                                            <p className="text-sm text-slate-300">
                                                Unlike other Jyotirlingas, the Trimbakeshwar Jyotirlinga consists of three small symbolic forms representing <strong>Brahma, Vishnu, and Mahesh (Shiva)</strong>. This makes the temple spiritually unique among all Jyotirlingas.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="godavari">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <Waves className="w-8 h-8 text-amber-500" /> The Sacred Godavari River
                                        </h2>
                                        <p>The Godavari River originates near Trimbakeshwar from the Brahmagiri Hills. The river is considered highly sacred and spiritually purifying. Pilgrims often take holy baths in sacred kunds and water bodies before entering the temple.</p>
                                        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 my-6">
                                            <h4 className="font-bold text-amber-900 mb-2">Kushavarta Kund</h4>
                                            <p className="text-sm text-slate-700">Kushavarta Kund is considered the symbolic origin point of the Godavari River. It is one of the holiest places in Trimbakeshwar where devotees perform rituals and take holy dips.</p>
                                        </div>
                                    </section>

                                    <section id="kumbh-mela">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <Waves className="w-8 h-8 text-amber-500" /> Kumbh Mela at Trimbakeshwar
                                        </h2>
                                        <p>Trimbakeshwar and Nashik host the famous Kumbh Mela every 12 years. Millions of pilgrims, saints, and spiritual seekers gather to take holy dips, perform rituals, participate in spiritual discourses, and seek divine blessings.</p>
                                        <p className="mt-4 text-sm font-semibold text-amber-700">The Kumbh Mela is one of the largest religious gatherings in the world.</p>
                                    </section>

                                    <section id="rituals">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <Clock className="w-8 h-8 text-amber-500" /> Famous Rituals and Dosha Pujas
                                        </h2>
                                        <p className="mb-6">Trimbakeshwar is especially famous for rituals related to karmic and ancestral doshas:</p>
                                        <div className="space-y-4">
                                            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                                <h4 className="font-bold text-slate-900 mb-2">Kaal Sarp Dosha Puja</h4>
                                                <p className="text-sm text-slate-600">Performed to reduce the negative effects of planetary positions in one's horoscope.</p>
                                            </div>
                                            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                                <h4 className="font-bold text-slate-900 mb-2">Narayan Nagbali Puja</h4>
                                                <p className="text-sm text-slate-600">A highly important ritual believed to help remove ancestral karmic burdens and bring peace.</p>
                                            </div>
                                            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                                <h4 className="font-bold text-slate-900 mb-2">Pitru Dosha Nivaran</h4>
                                                <p className="text-sm text-slate-600">Performed for the peace and blessings of ancestors.</p>
                                            </div>
                                            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                                <h4 className="font-bold text-slate-900 mb-2">Rudrabhishek</h4>
                                                <p className="text-sm text-slate-600 mb-2">The Jyotirlinga is worshipped with milk, water, ghee, honey, bilva leaves, and sacred chants.</p>
                                            </div>
                                        </div>
                                        <p className="mt-6 text-sm italic text-slate-700 border-l-2 border-amber-300 pl-4">
                                            These rituals attract devotees from across India.
                                        </p>
                                    </section>

                                    <section id="festivals">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <Star className="w-8 h-8 text-amber-500" /> Festivals Celebrated
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
                                                <h5 className="font-bold text-slate-900 mb-1">Mahashivratri</h5>
                                                <p className="text-xs text-slate-600">Celebrated with great devotion and grand temple festivities.</p>
                                            </div>
                                            <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
                                                <h5 className="font-bold text-slate-900 mb-1">Shravan Month</h5>
                                                <p className="text-xs text-slate-600">Special Shiva worship and spiritual programs conducted throughout the month.</p>
                                            </div>
                                            <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
                                                <h5 className="font-bold text-slate-900 mb-1">Kumbh Mela</h5>
                                                <p className="text-xs text-slate-600">The largest spiritual gathering associated with Trimbakeshwar every 12 years.</p>
                                            </div>
                                            <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
                                                <h5 className="font-bold text-slate-900 mb-1">Kartik Purnima</h5>
                                                <p className="text-xs text-slate-600">Another important spiritual festival celebrated with lights and devotion.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="travel-guide">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <MapPin className="w-8 h-8 text-amber-500" /> Travel Guide
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                                <h3 className="font-bold text-slate-900 mb-4">Best Time to Visit</h3>
                                                <p className="text-sm"><strong>October to March:</strong> Ideal for darshan and sightseeing. Pleasant winter weather. Comfortable pilgrimage experience.</p>
                                                <p className="text-sm mt-2"><strong>Monsoon Season:</strong> Brahmagiri Hills become lush green and scenic, though heavy rains may affect travel.</p>
                                            </div>
                                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                                <h3 className="font-bold text-slate-900 mb-4">How to Reach</h3>
                                                <ul className="text-sm space-y-2">
                                                    <li><strong>Air:</strong> Nashik Airport or Mumbai International Airport</li>
                                                    <li><strong>Train:</strong> Nashik Road Railway Station</li>
                                                    <li><strong>Road:</strong> Well connected to Nashik, Mumbai, Pune, and Aurangabad.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="nearby-places">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <Mountain className="w-8 h-8 text-amber-500" /> Nearby Places to Visit
                                        </h2>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {[
                                                { name: "Brahmagiri Hills", desc: "Sacred hills associated with the origin of the Godavari River." },
                                                { name: "Kushavarta Kund", desc: "A holy water tank considered the symbolic origin of Godavari." },
                                                { name: "Anjaneri Hills", desc: "Believed to be the birthplace of Lord Hanuman." },
                                                { name: "Sula Vineyards", desc: "A popular tourist destination near Nashik." },
                                                { name: "Panchavati", desc: "A spiritually important Ramayana site located in Nashik." }
                                            ].map((place, i) => (
                                                <div key={i} className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100">
                                                    <h4 className="font-bold text-amber-900 mb-1">{place.name}</h4>
                                                    <p className="text-sm text-slate-600">{place.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="spiritual-benefits">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <Star className="w-8 h-8 text-amber-500" /> Spiritual Benefits
                                        </h2>
                                        <ul className="space-y-3 mb-4">
                                            {[
                                                "Removes karmic obstacles",
                                                "Brings peace and prosperity",
                                                "Resolves ancestral doshas",
                                                "Improves spiritual growth",
                                                "Strengthens devotion toward Lord Shiva"
                                            ].map((b, i) => (
                                                <li key={i} className="flex gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-slate-700">{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="mt-4 text-sm italic text-slate-600 border-l-2 border-amber-300 pl-4">
                                            The temple is especially important for devotees seeking relief from planetary and ancestral challenges.
                                        </p>
                                    </section>

                                    <section id="conclusion">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <BookOpen className="w-8 h-8 text-amber-500" /> Conclusion
                                        </h2>
                                        <p className="mb-4">Trimbakeshwar Jyotirlinga is one of the most spiritually important shrines dedicated to Lord Shiva. The sacred origin of the Godavari River, the powerful dosha-related rituals, and the divine energy of the temple together create a deeply transformative spiritual experience.</p>
                                        <p className="mb-4">From the inspiring legend of Gautam Rishi to the spiritual atmosphere of the Brahmagiri Hills, Trimbakeshwar continues to attract millions of devotees seeking peace, purification, and divine blessings.</p>
                                        <p className="italic text-slate-600 border-l-4 border-amber-400 pl-4">For devotees of Lord Shiva, visiting Trimbakeshwar Jyotirlinga is not just a pilgrimage but a sacred journey toward inner cleansing, spiritual awakening, and divine connection.</p>
                                    </section>

                                    <section id="faq">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <HelpCircle className="w-8 h-8 text-amber-500" /> Frequently Asked Questions
                                        </h2>
                                        <Accordion type="single" collapsible className="w-full">
                                            {[
                                                { q: "Where is Trimbakeshwar Jyotirlinga located?", a: "Trimbakeshwar is located near Nashik in Maharashtra." },
                                                { q: "Why is Trimbakeshwar famous?", a: "It is famous for the Godavari River origin and dosha-related rituals." },
                                                { q: "Which river originates near Trimbakeshwar?", a: "The sacred Godavari River originates near the temple from Brahmagiri Hills." },
                                                { q: "What is unique about the Trimbakeshwar Jyotirlinga?", a: "It represents Brahma, Vishnu, and Shiva (Mahesh) together." },
                                                { q: "What is the best time to visit Trimbakeshwar?", a: "October to March is considered ideal for a comfortable pilgrimage." },
                                                { q: "Which pujas are famous at Trimbakeshwar?", a: "Kaal Sarp Dosha Puja, Narayan Nagbali, and Rudrabhishek are highly popular." }
                                            ].map((faq, i) => (
                                                <AccordionItem
                                                    key={i}
                                                    value={`item-${i}`}
                                                    className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                                                >
                                                    <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                        {i + 1}. {faq.q}
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                                                        {faq.a}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </section>

                                    <section className="bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl p-8 text-white shadow-lg">
                                        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 md:p-8 rounded-r-2xl shadow-sm">
                                            {/* Heading */}
                                            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-display mb-5 leading-tight">
                                                Plan Your Trimbakeshwar Jyotirlinga Yatra with Naman Darshan
                                            </h2>

                                            {/* Intro */}
                                            <p className="text-lg leading-8 text-stone-700 mb-6">
                                                Experience a peaceful and spiritually enriching pilgrimage to Trimbakeshwar Jyotirlinga with complete travel assistance.
                                            </p>

                                            {/* Services */}
                                            <div className="mb-8">
                                                <p className="font-semibold text-stone-900 mb-4 text-lg">
                                                    Our services include:
                                                </p>

                                                <ul className="space-y-3">
                                                    {[
                                                        "Request Darshan Assistance Assistance",
                                                        "Kaal Sarp Dosha Puja Arrangements",
                                                        "Narayan Nagbali Puja Assistance",
                                                        "Hotel Booking near Temple",
                                                        "Nashik & Trimbakeshwar Tour Packages",
                                                        "Customized Spiritual Packages"
                                                    ].map((item) => (
                                                        <li
                                                            key={item}
                                                            className="flex items-start gap-3 text-stone-700 text-lg"
                                                        >
                                                            <span className="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Closing */}
                                            <p className="text-lg leading-8 text-stone-700 mb-6">
                                                Naman Darshan helps devotees experience a smooth and memorable spiritual journey to Trimbakeshwar.
                                            </p>

                                            {/* CTA Button */}
                                            <div className="flex flex-col sm:flex-row gap-4">
                                                <Link to="/darshan/trimbakeshwar-jyotirlinga-vipdarshan">
                                                    <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all text-sm md:text-base">
                                                        Request Darshan Assistance Online
                                                    </button>
                                                </Link>
                                                <a href="https://wa.me/919311973199" target="_blank" rel="noopener noreferrer">
                                                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all text-sm md:text-base flex items-center gap-2">
                                                        WhatsApp Support
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </section>

                                    <p className="text-center font-bold text-amber-600 mt-8 mb-8 bg-amber-50 py-4 rounded-xl border border-amber-100 flex items-center justify-center gap-2 italic">
                                        Om Namah Shivaya! 🙏🕉️ हर हर महादेव!
                                    </p>
                                </div>
                            </div>
                            <CommentSection />
                        </article>

                        {/* Right Sidebar */}
                        <aside className="lg:col-span-3">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-slate-100 flex flex-col gap-8">
                                <div>
                                    <h3 className="font-bold text-lg mb-4 bg-amber-600 text-white px-4 py-3 -mx-6 -mt-6 rounded-t-xl text-center">Temple Info</h3>
                                    <div className="space-y-4 mt-6 text-sm">
                                        <div className="p-3 bg-amber-50 rounded-lg flex justify-between items-center font-medium">
                                            <span>Deity</span>
                                            <span className="text-amber-700">Shiva (Trinity)</span>
                                        </div>
                                        <div className="p-3 bg-amber-50 rounded-lg flex justify-between items-center font-medium">
                                            <span>Location</span>
                                            <span className="text-amber-700">Nashik, Maharashtra</span>
                                        </div>
                                        <div className="p-3 bg-amber-50 rounded-lg flex justify-between items-center font-medium">
                                            <span>River</span>
                                            <span className="text-amber-700">Godavari Origin</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h3 className="font-bold text-lg mb-4 text-slate-800 border-b pb-2">Our Services</h3>
                                    <ul className="space-y-2 text-xs font-medium text-slate-600">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-500" /> Request Darshan Assistance Assistance</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-500" /> Temple Pooja Booking</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-500" /> Dosha Puja Arrangements</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-500" /> Hotel Booking</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-500" /> Transportation Services</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-500" /> Jyotirlinga Tour Packages</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-500" /> Customized Spiritual Tours</li>
                                    </ul>
                                    <p className="mt-4 text-[10px] leading-relaxed text-slate-500 italic border-t pt-4">
                                        Naman Darshan helps devotees experience a smooth and memorable pilgrimage to Trimbakeshwar.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg mb-4 border-b pb-2 text-slate-800">Explore More</h3>
                                    <div className="space-y-4 text-xs font-medium">
                                        {recentPosts.map((post, i) => (
                                            <Link key={i} to={post.link} className="block hover:text-amber-600 transition-colors">{post.title}</Link>
                                        ))}
                                    </div>
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

export default TrimbakeshwarJyotirlinga;
