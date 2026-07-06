import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ChevronRight, Waves, Clock, MapPin, Calendar, Info, HelpCircle, BookOpen, CheckCircle2, Star } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
import CommentSection from "@/components/common/CommentSection";
import SomnathJyotirlingaImg from '@/assets/blogs/twelveJyotirling/SomnathJyotirlinga.png';
import ChandraDev from '@/assets/ChandraDev.jpg';
import BaanStambh from '@/assets/BaanStambh.jpg';

const SomnathJyotrilinga = () => {
    const tableOfContents = [
        { id: "intro", title: "Introduction" },
        { id: "importance", title: "Why it is Important" },
        { id: "mythology", title: "Mythological Story" },
        { id: "spiritual-meaning", title: "Spiritual Meaning" },
        { id: "history", title: "Historical Importance" },
        { id: "architecture", title: "Architecture" },
        { id: "spiritual-energy", title: "Spiritual Energy" },
        { id: "rituals", title: "Rituals & Aartis" },
        { id: "travel-guide", title: "Travel Guide" },
        { id: "nearby-places", title: "Nearby Places" },
        { id: "spiritual-benefits", title: "Spiritual Benefits" },
        { id: "conclusion", title: "Conclusion" },
        { id: "faq", title: "Frequently Asked Questions" }
    ];

    const recentPosts = [
        { title: "Trimbakeshwar Jyotirlinga Guide", link: "/blog/trimbakeshwar-jyotirlinga-nashik-guide" },
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
                title="Somnath Jyotirlinga – The Eternal Shrine of Lord Shiva | History & Guide"
                description="Explore Somnath Jyotirlinga in Gujarat, the first of the 12 sacred Jyotirlingas. Learn about its legendary history, architecture, darshan timings, and spiritual significance."
            />
            <Header />

            <main className="pt-36 md:pt-48 lg:pt-52 pb-12">
                <div className="container mx-auto px-4">
                    <BlogBreadcrumb
                        pageTitle="Somnath Jyotirlinga Guide"
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
                                        Somnath Jyotirlinga – The Eternal Shrine of Lord Shiva
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-amber-500" /> 12 May 2026</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-amber-500" /> 18 min read</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><Waves className="w-4 h-4 text-amber-500" /> Gujarat Guide</span>
                                    </div>
                                </div>

                                {/* Hero Image */}
                                <div className="relative">
                                    <div className="aspect-[16/9] bg-slate-100 flex items-center justify-center overflow-hidden border-b border-slate-100 group">
                                        <img
                                            src={SomnathJyotirlingaImg}
                                            alt="Somnath Jyotirlinga Temple Gujarat"
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                            First Jyotirlinga
                                        </span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 md:p-10 space-y-8 text-lg leading-relaxed text-slate-700">
                                    <section id="intro">
                                        <p className="lead text-xl font-medium text-slate-900 mb-6 italic border-l-4 border-amber-500 pl-6">
                                            "Somnath Jyotirlinga is considered the first and one of the most sacred among the 12 Jyotirlingas of Lord Shiva. It stands gracefully on the shores of the Arabian Sea, symbolizing eternal faith and resilience."
                                        </p>
                                        <p>
                                            Somnath Jyotirlinga is considered the first and one of the most sacred among the 12 Jyotirlingas of Lord Shiva. Located in Prabhas Patan near Veraval in Gujarat, this divine temple stands gracefully on the shores of the Arabian Sea and symbolizes eternal faith, devotion, and spiritual strength.
                                        </p>
                                        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 my-6">
                                            <p className="font-bold text-amber-900 mb-2">Meaning of "Somnath":</p>
                                            <p className="text-sm italic text-slate-700">
                                                The word “Somnath” means “Lord of the Moon.” According to Hindu scriptures, the Moon God Chandra worshipped Lord Shiva here to free himself from a powerful curse.
                                            </p>
                                        </div>
                                        <p>
                                            For centuries, Somnath Temple has remained one of the most important pilgrimage destinations for devotees of Lord Shiva. Despite repeated invasions and destruction throughout history, the temple was rebuilt again and again, making it a timeless symbol of resilience.
                                        </p>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="importance">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <Info className="w-8 h-8 text-amber-500" /> Why Somnath Jyotirlinga is So Important
                                        </h2>
                                        <p>
                                            Somnath holds immense spiritual significance as the foremost and most ancient shrine. Devotees believe that visiting Somnath Temple helps:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                            {[
                                                "Remove negative energies",
                                                "Bring peace and prosperity",
                                                "Strengthen spiritual awareness",
                                                "Fulfill sincere wishes",
                                                "Grant divine blessings of Lord Shiva",
                                                "Liberation from negative karmas"
                                            ].map((item, index) => (
                                                <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                                                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                                    <span className="text-sm font-medium text-slate-800">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="mt-6 text-slate-700 italic border-l-4 border-amber-400 pl-4">
                                            The temple is also associated with the Moon and cosmic balance, making it spiritually connected with astrology, emotions, and mental peace.
                                        </p>
                                    </section>

                                    <section id="mythology">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">The Mythological Story of Somnath</h2>
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-bold text-slate-800">The Curse of Daksha Prajapati</h3>
                                            <p>
                                                According to the Shiva Purana, Chandra Dev (the Moon God) was married to the 27 daughters of King Daksha Prajapati. However, Chandra loved only one wife, Rohini, more than the others. Angered by this favoritism, Daksha cursed him to gradually lose his brightness.
                                            </p>
                                            <div className="my-8 aspect-video bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-lg group relative">
                                                <img
                                                    src={ChandraDev}
                                                    alt="Chandra Dev Moon God Penance"
                                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                                    <p className="text-white text-sm font-medium italic">Chandra Dev (the Moon God) performing intense penance to worship Lord Shiva.</p>
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-800">Lord Shiva Blesses Chandra</h3>
                                            <p>
                                                Chandra came to Prabhas Kshetra and began intense penance. Pleased with his devotion, Lord Shiva appeared as a radiant Jyotirlinga. He partially removed the curse, declaring that the moon would wax and wane every month—the origin of the lunar cycle. Out of gratitude, Chandra established this grand temple.
                                            </p>
                                        </div>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="spiritual-meaning">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <Info className="w-8 h-8 text-amber-500" /> Spiritual Meaning Behind Somnath Jyotirlinga
                                        </h2>
                                        <p className="mb-4">Somnath Jyotirlinga represents the eternal nature of divine consciousness and cosmic balance. Spiritually, the temple symbolizes:</p>
                                        <ul className="space-y-3">
                                            <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span> <strong>Victory of devotion over suffering:</strong> Chandra's penance shows the power of faith.</li>
                                            <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span> <strong>Restoration of balance in life:</strong> The waxing and waning moon teaches humility.</li>
                                            <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span> <strong>Power of repentance and faith:</strong> Even the Moon God found liberation through sincere devotion.</li>
                                            <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span> <strong>Eternal presence of Lord Shiva:</strong> Somnath represents the infinite light of consciousness.</li>
                                            <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span> <strong>The cycle of creation and renewal:</strong> Every waning moon reminds us that darkness is followed by light.</li>
                                        </ul>
                                        <p className="mt-4 italic text-slate-600">
                                            The waxing and waning moon associated with Somnath also symbolizes life's ups and downs, teaching devotees that darkness is temporary and light always returns.
                                        </p>
                                    </section>

                                    <section id="history">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Historical Importance & Resilience</h2>
                                        <p>
                                            Somnath Temple is not only spiritually important but also historically significant. The temple has been destroyed and rebuilt multiple times throughout Indian history.
                                        </p>

                                        <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl my-6">
                                            <h4 className="font-bold text-amber-900 mb-3">Ancient References</h4>
                                            <p className="text-sm text-slate-700 mb-3">Somnath Temple is mentioned in:</p>
                                            <ul className="space-y-1 text-sm text-slate-700">
                                                {["Shiva Purana", "Skanda Purana", "Bhagavata Purana", "Ancient Sanskrit literature"].map((s, i) => (
                                                    <li key={i} className="flex gap-2"><span className="text-amber-500 font-bold">•</span>{s}</li>
                                                ))}
                                            </ul>
                                            <p className="mt-3 text-sm italic text-slate-600">Many historians believe that Somnath was one of the richest and most magnificent temples in ancient India.</p>
                                        </div>
                                        <div className="bg-slate-900 p-8 rounded-3xl text-white my-8 shadow-2xl">
                                            <h4 className="text-amber-400 font-bold mb-4 uppercase tracking-widest text-xs">Invasions and Reconstruction</h4>
                                            <p className="text-sm text-slate-300 mb-4">
                                                The most famous invasion took place in 1025 CE by Mahmud of Ghazni. Despite repeated destruction, the temple was rebuilt multiple times by Hindu kings and devotees.
                                            </p>
                                            <p className="text-sm text-slate-300">
                                                The present-day Somnath Temple was reconstructed after India’s independence under the leadership of <strong>Sardar Vallabhbhai Patel</strong>. The temple today stands as a powerful symbol of India’s spiritual and cultural resilience.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="architecture">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Architecture of Somnath Temple</h2>
                                        <p>
                                            Built in the <strong>Chalukya style</strong>, the architecture of Somnath Temple is breathtaking and reflects traditional Hindu temple design. The temple features:
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
                                            {["Beautiful stone carvings", "Intricately designed pillars", "Magnificent shikhara (spire)", "Large prayer halls", "Sacred sanctum housing the Jyotirlinga"].map((f, i) => (
                                                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                                                    <Star className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                                    <span className="text-sm font-medium text-slate-800">{f}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100 mb-6">
                                            <h4 className="font-bold text-amber-900 mb-2">The Temple Shikhara</h4>
                                            <p className="text-sm">The main temple spire rises to a height of approximately <strong>155 feet</strong> and carries a large sacred flag that changes multiple times every day.</p>
                                        </div>
                                        <div className="my-8 aspect-video bg-slate-100 rounded-3xl overflow-hidden border border-slate-100 shadow-xl group relative">
                                            <img
                                                src={BaanStambh}
                                                alt="Baan Stambh (Arrow Pillar) at Somnath Temple"
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                                <p className="text-white text-sm font-medium italic">The legendary Baan Stambh (Arrow Pillar) pointing directly to Antarctica without any landmass in between.</p>
                                            </div>
                                        </div>
                                        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                                            <h4 className="font-bold text-amber-900 mb-2">Arrow Pillar (Baan Stambh)</h4>
                                            <p className="text-sm">An inscription on this pillar states that there is no landmass between Somnath seashore and Antarctica in a straight line — symbolizing the temple's location at the edge of the Indian subcontinent.</p>
                                        </div>
                                    </section>

                                    <section id="spiritual-energy">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <Waves className="w-8 h-8 text-amber-500" /> The Spiritual Energy of Somnath Temple
                                        </h2>
                                        <p>Devotees believe that Somnath Temple radiates powerful spiritual vibrations. The sound of ocean waves combined with Vedic chants creates a deeply meditative atmosphere.</p>
                                        <p className="mt-4">Pilgrims visiting Somnath often experience:</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
                                            {["Mental peace", "Emotional healing", "Spiritual awakening", "Divine connection with Lord Shiva"].map((e, i) => (
                                                <div key={i} className="flex items-center gap-3 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                                                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                                    <span className="text-sm font-medium text-slate-800">{e}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="italic text-slate-600 border-l-4 border-amber-400 pl-4">Many devotees meditate near the temple during sunrise and sunset to experience the sacred energy of the Arabian Sea and Lord Shiva together.</p>
                                    </section>

                                    <section id="rituals">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <Clock className="w-8 h-8 text-amber-500" /> Important Rituals and Aartis
                                        </h2>
                                        <h3 className="text-xl font-bold text-slate-800 mb-2">Daily Aartis</h3>
                                        <p className="mb-2">The main aartis performed at the temple include: <strong>Mangala Aarti, Noon Aarti,</strong> and <strong>Evening Aarti</strong>.</p>
                                        <p className="italic text-slate-600 mb-6">The atmosphere during aarti becomes highly spiritual with the sound of bells, conch shells, and Shiva chants.</p>
                                        <h3 className="text-xl font-bold text-slate-800 mb-2">Rudrabhishek</h3>
                                        <p className="mb-3">One of the most important rituals performed at Somnath Temple. During this ritual, the Jyotirlinga is bathed with:</p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {["Water", "Milk", "Honey", "Ghee", "Bilva leaves"].map((item, i) => (
                                                <span key={i} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">{item}</span>
                                            ))}
                                        </div>
                                        <p className="text-sm text-slate-600 mb-6">Devotees believe Rudrabhishek helps remove obstacles, purify the mind, and bring divine blessings.</p>
                                        <h3 className="text-xl font-bold text-slate-800 mb-4">Festivals Celebrated at Somnath</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                                <h5 className="font-bold text-slate-900 mb-1">Mahashivratri</h5>
                                                <p className="text-xs text-slate-600">Lakhs of devotees visit to offer prayers and perform night-long worship of Lord Shiva.</p>
                                            </div>
                                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                                <h5 className="font-bold text-slate-900 mb-1">Shravan Month</h5>
                                                <p className="text-xs text-slate-600">Special pujas, abhisheks, and devotional programs are organized throughout the holy month.</p>
                                            </div>
                                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                                <h5 className="font-bold text-slate-900 mb-1">Kartik Purnima</h5>
                                                <p className="text-xs text-slate-600">A major festival celebrated with spiritual gatherings and temple decorations.</p>
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
                                                <p className="text-sm"><strong>October to March:</strong> Ideal for sightseeing and temple visits. Comfortable weather. Suitable for family pilgrimage.</p>
                                                <p className="text-sm mt-2"><strong>Shravan &amp; Mahashivratri:</strong> Spiritually significant but usually crowded. Grand celebrations for festival devotees.</p>
                                            </div>
                                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                                <h3 className="font-bold text-slate-900 mb-4">How to Reach</h3>
                                                <ul className="text-sm space-y-2">
                                                    <li><strong>Air:</strong> Diu Airport or Rajkot Airport</li>
                                                    <li><strong>Train:</strong> Veraval Railway Station</li>
                                                    <li><strong>Road:</strong> Well connected to Rajkot, Ahmedabad, Dwarka &amp; Junagadh. Regular buses and taxis available.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="nearby-places">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <MapPin className="w-8 h-8 text-amber-500" /> Nearby Places to Visit
                                        </h2>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {[
                                                { name: "Triveni Sangam", desc: "The sacred confluence of three rivers where devotees take holy baths." },
                                                { name: "Bhalka Tirth", desc: "Believed to be the place where Lord Krishna was struck by an arrow." },
                                                { name: "Dwarka", desc: "One of the Char Dham pilgrimage destinations associated with Lord Krishna." },
                                                { name: "Somnath Beach", desc: "A peaceful location near the temple ideal for spiritual reflection." }
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
                                            <Star className="w-8 h-8 text-amber-500" /> Spiritual Benefits of Visiting Somnath
                                        </h2>
                                        <p className="mb-4">Devotees believe that visiting Somnath Temple:</p>
                                        <ul className="space-y-3 mb-4">
                                            {[
                                                "Removes sins from past lives",
                                                "Brings peace and prosperity",
                                                "Reduces fear and negativity",
                                                "Helps attain spiritual growth",
                                                "Strengthens devotion toward Lord Shiva"
                                            ].map((b, i) => (
                                                <li key={i} className="flex gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-slate-700">{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="italic text-slate-600">For many devotees, Somnath is not just a temple but a transformative spiritual experience.</p>
                                    </section>

                                    <section id="conclusion">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <BookOpen className="w-8 h-8 text-amber-500" /> Conclusion
                                        </h2>
                                        <p className="mb-4">Somnath Jyotirlinga is far more than a temple — it is a timeless symbol of devotion, cosmic balance, and the eternal presence of Lord Shiva.</p>
                                        <p className="mb-4">From the legendary story of Chandra Dev to the temple's incredible history of destruction and reconstruction, Somnath continues to inspire millions of devotees with faith and spiritual strength.</p>
                                        <p className="mb-4">The sacred vibrations of the Arabian Sea, the powerful energy of the Jyotirlinga, and the deep spiritual atmosphere together create a divine experience that remains unforgettable for every pilgrim.</p>
                                        <p className="italic text-slate-600 border-l-4 border-amber-400 pl-4">For devotees of Lord Shiva, visiting Somnath Jyotirlinga is not just a religious journey but a path toward inner peace, spiritual awakening, and divine connection.</p>
                                    </section>

                                    <section id="faq">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <HelpCircle className="w-8 h-8 text-amber-500" /> Frequently Asked Questions
                                        </h2>
                                        <Accordion type="single" collapsible className="w-full">
                                            {[
                                                { q: "Where is Somnath Jyotirlinga located?", a: "Somnath Jyotirlinga is located in Prabhas Patan near Veraval in Gujarat." },
                                                { q: "Why is Somnath called the first Jyotirlinga?", a: "It is believed to be the first place where Lord Shiva manifested as a Jyotirlinga." },
                                                { q: "What is the meaning of Somnath?", a: "Somnath means 'Lord of the Moon'." },
                                                { q: "Which river or sea is near Somnath Temple?", a: "The temple is located near the Arabian Sea." },
                                                { q: "What is the best time to visit Somnath?", a: "October to March is considered the best time to visit Somnath Jyotirlinga." },
                                                { q: "Can devotees perform Rudrabhishek at Somnath Temple?", a: "Yes, devotees can participate in Rudrabhishek and other pujas at Somnath Temple." }
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

                                    <section className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-3xl p-8 text-white shadow-xl text-center">
                                        <h3 className="text-3xl font-bold mb-4 font-display">Plan Your Somnath Yatra</h3>
                                        <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto italic">
                                            "Experience the divine energy of the First Jyotirlinga with complete pilgrimage support from Naman Darshan."
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <Link
                                                to="/darshan/somnath-jyotirlinga-vipdarshan"
                                                className="inline-block bg-white text-amber-600 font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-slate-100 transition-all transform hover:-translate-y-1"
                                            >
                                                Plan Your Pilgrimage
                                            </Link>
                                            <a href="https://wa.me/919311973199" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:-translate-y-1">
                                                WhatsApp Support
                                            </a>
                                        </div>
                                    </section>

                                    <p className="text-center font-bold text-amber-600 mt-8 mb-8 bg-amber-50 py-4 rounded-xl border border-amber-100 flex items-center justify-center gap-2 italic">
                                        Jai Somnath! 🙏🕉️ हर हर महादेव!
                                    </p>
                                </div>
                            </div>
                            <CommentSection />
                        </article>

                        {/* Right Sidebar */}
                        <aside className="lg:col-span-3">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-slate-100 flex flex-col gap-8">
                                <div>
                                    <h3 className="font-bold text-lg mb-4 bg-amber-600 text-white px-4 py-3 -mx-6 -mt-6 rounded-t-xl text-center">Important Info</h3>
                                    <div className="space-y-4 mt-6 text-sm">
                                        <div className="p-3 bg-amber-50 rounded-lg flex justify-between items-center font-medium">
                                            <span>First Jyotirlinga</span>
                                            <span className="text-amber-700">Somnath</span>
                                        </div>
                                        <div className="p-3 bg-amber-50 rounded-lg flex justify-between items-center font-medium">
                                            <span>Location</span>
                                            <span className="text-amber-700">Veraval, Gujarat</span>
                                        </div>
                                        <div className="p-3 bg-amber-50 rounded-lg flex justify-between items-center font-medium">
                                            <span>Sea</span>
                                            <span className="text-amber-700">Arabian Sea</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg mb-4 border-b pb-2 text-slate-800">Recent Blogs</h3>
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

export default SomnathJyotrilinga;
