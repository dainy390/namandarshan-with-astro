import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, Clock, BookOpen, HelpCircle, Sun, Info, Flower2, Moon, Stars, CheckCircle2, Heart, Sparkles, MapPin } from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";

// Image Imports
import buddhaMainImg from "@/assets/blogs/buddha-purnima-front-new.jpg";
import buddhaJourneyImg from "@/assets/blogs/buddha-journey-new.jpg";
import buddhaRitualsImg from "@/assets/blogs/buddha-rituals-new.jpg";
import buddhaBodhgayaImg from "@/assets/blogs/buddha-bodhgaya.jpg";

const BuddhaPurnima2026Blog = () => {
    const tableOfContents = [
        { id: "introduction", title: "Introduction" },
        { id: "date-time", title: "Date & Lunar Timing" },
        { id: "spiritual-unique", title: "Spiritual Uniqueness" },
        { id: "siddhartha-journey", title: "Prince Siddhartha’s Path" },
        { id: "astrological-importance", title: "Astrological Importance" },
        { id: "spiritual-benefits", title: "Spiritual Benefits" },
        { id: "eightfold-path", title: "The Noble Eightfold Path" },
        { id: "sacred-rituals", title: "Sacred Rituals" },
        { id: "powerful-mantras", title: "Powerful Mantras" },
        { id: "bodhgaya-celebrations", title: "Celebrations at Bodhgaya" }
    ];

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Buddha Purnima 2026: Date, Spiritual Meaning, Rituals & Powerful Observances",
            "description": "Complete guide to Buddha Purnima 2026 including exact date, lunar timing, spiritual significance, rituals, and the life journey of Lord Buddha.",
            "keywords": [
                "Buddha Purnima 2026 date",
                "Vesak 2026 rituals",
                "Lord Buddha birth anniversary 2588",
                "spiritual meaning of Buddha Purnima",
                "Noble Eightfold Path explained",
                "Bodh Gaya celebrations Buddha Purnima",
                "Buddham Sharanam Gacchami mantra"
            ],
            "datePublished": "2026-04-22",
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
        <div className="min-h-screen bg-slate-50">
            <SEO
                title="Buddha Purnima 2026: Date, Spiritual Meaning, Rituals & Observances"
                description="Explore Buddha Purnima 2026 date, timings, deeper spiritual significance, traditional rituals, and meditation tips for inner peace."
                keywords={[
                    "Buddha Purnima 2026",
                    "Vesak 2026 date India",
                    "Buddha birth anniversary 2026",
                    "spiritual benefits of Buddha Purnima",
                    "Om Mani Padme Hum meaning",
                    "Bodh Gaya Buddha Purnima",
                    "Noble Eightfold Path",
                    "Prince Siddhartha story",
                    "Full moon meditation 2026"
                ]}
                schemas={schemas}
            />
            <Header />
            <main className="pt-36 md:pt-48 lg:pt-52 pb-12">
                <div className="container mx-auto px-4">
                    <BlogBreadcrumb pageTitle="Buddha Purnima 2026 Guide" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Sidebar - Table of Contents */}
                        <aside className="lg:col-span-3">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-slate-100">
                                <h3 className="font-bold text-lg mb-4 text-slate-900 border-b pb-3 text-center tracking-tight">Guidance Menu</h3>
                                <nav className="space-y-1">
                                    {tableOfContents.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className="w-full text-left px-3 py-2 text-sm text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors flex items-center gap-2 font-medium"
                                        >
                                            <ChevronRight className="w-3 h-3 text-orange-500" />
                                            {item.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <article className="lg:col-span-6">
                            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
                                {/* Title Section */}
                                <div className="p-8 md:p-10">
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                                        Buddha Purnima 2026: Date, Spiritual Meaning, Rituals & Powerful Observances
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                                        <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-orange-500" /> May 12, 2026</span>
                                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-orange-500" /> 10 min read</span>
                                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                        <span className="flex items-center gap-1.5"><Sun className="w-4 h-4 text-orange-500" /> Spiritual Path</span>
                                    </div>
                                </div>

                                {/* Main Heading Image */}
                                <div className="relative group overflow-hidden">
                                    <img 
                                        src={buddhaMainImg} 
                                        alt="Buddha Purnima 2026 Celebration" 
                                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" 
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-xl">
                                            Sacred Festivals
                                        </span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 md:p-10 space-y-10 text-lg leading-relaxed text-slate-700">
                                    <section id="introduction">
                                        <p className="text-xl font-medium text-slate-800 italic border-l-4 border-orange-500 pl-6 py-1">
                                            "Happiness does not depend on what you have or who you are. It solely relies on what you think." — Lord Buddha
                                        </p>
                                        <div className="space-y-4 pt-6">
                                            <p>
                                                Buddha Purnima is one of the most sacred and spiritually uplifting festivals celebrated by Buddhists around the world. The festival honors the life and divine journey of Gautama Buddha — commemorating his birth, enlightenment, and Mahaparinirvana.
                                            </p>
                                            <p>
                                                In 2026, devotees will once again gather under the luminous Vaishakh Full Moon to reflect upon his timeless teachings of wisdom, compassion, and inner awakening.
                                            </p>
                                        </div>
                                    </section>

                                    <hr className="border-slate-100" />

                                    <section id="date-time">
                                        <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                                            <Calendar className="w-8 h-8 text-orange-500" /> Buddha Purnima 2026: Dates & Timing
                                        </h2>
                                        <div className="bg-orange-50/50 rounded-2xl p-6 border border-orange-100/50 shadow-sm">
                                            <p className="mb-4">Buddha Purnima falls every year on the Full Moon day (Purnima) of Vaishakh month as per the Hindu lunar calendar.</p>
                                            <ul className="space-y-3 font-semibold text-slate-800">
                                                <li className="flex items-center gap-3">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    Buddha Purnima 2026: May 12, 2026 (Tuesday)
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    Purnima Tithi Begins: 05:48 PM on May 11, 2026
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    Purnima Tithi Ends: 07:22 PM on May 12, 2026
                                                </li>
                                            </ul>
                                            <p className="mt-4 text-slate-600 text-sm italic">
                                                Marking the 2588th birth anniversary of Lord Buddha, this day is celebrated globally as <strong>Vesak</strong>.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="spiritual-unique">
                                        <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                                            <Sparkles className="w-8 h-8 text-orange-500" /> What Makes Buddha Purnima Spiritually Unique?
                                        </h2>
                                        <p className="mb-6">Buddha Purnima is often called the “Thrice Sacred Day” because it marks three life-changing milestones of Buddha:</p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                                            {["Birth in Lumbini", "Enlightenment at Bodhgaya", "Mahaparinirvana at Kushinagar"].map((item, idx) => (
                                                <div key={idx} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm text-center">
                                                    <p className="text-sm font-bold text-orange-600">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <p>
                                            It is believed that all three events occurred on the same Vaishakh Full Moon day in different years — a rare spiritual coincidence. The Full Moon symbolizes illumination of the mind. Just as the moon shines fully on this night, it represents the awakening of consciousness that Buddha attained.
                                        </p>
                                    </section>

                                    <section id="siddhartha-journey">
                                        <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                                            <Heart className="w-8 h-8 text-orange-500" /> From Prince Siddhartha to the Enlightened Buddha
                                        </h2>
                                        <div className="space-y-6">
                                            <p>
                                                Born as Prince Siddhartha Gautama in the Shakya clan, he was raised in luxury and shielded from worldly suffering. However, destiny led him to witness old age, illness, and death — experiences that awakened deep questions about life.
                                            </p>
                                            
                                            {/* Journey Image */}
                                            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                                                <img src={buddhaJourneyImg} alt="The Journey of Lord Buddha" className="w-full h-auto" />
                                            </div>

                                            <p>
                                                At 29, he renounced royal comforts and embarked on a spiritual quest. After years of meditation and austerity, he attained enlightenment under the sacred Bodhi Tree at Mahabodhi Temple. From that moment, he became known as “The Buddha” — the Awakened One — and dedicated his life to teaching Dharma (the path of truth).
                                            </p>
                                        </div>
                                    </section>

                                    <section id="astrological-importance">
                                        <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                                            <Stars className="w-8 h-8 text-orange-500" /> Astrological and Cosmic Importance
                                        </h2>
                                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                                            <ul className="space-y-4">
                                                <li className="flex items-start gap-4">
                                                    <Info className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                                                    <p>The Moon governs emotions and mental clarity; the Full Moon enhances spiritual vibrations.</p>
                                                </li>
                                                <li className="flex items-start gap-4">
                                                    <Info className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                                                    <p>Meditation performed on this day is believed to be significantly more impactful.</p>
                                                </li>
                                                <li className="flex items-start gap-4">
                                                    <Info className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                                                    <p>Charity and selfless acts multiply positive karmic results on this sacred day.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="spiritual-benefits">
                                        <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                                            <Sun className="w-8 h-8 text-orange-500" /> Spiritual Benefits
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                            {[
                                                "Mental peace and emotional balance",
                                                "Reduction in ego and anger",
                                                "Strengthening compassion",
                                                "Greater clarity in decisions",
                                                "Spiritual upliftment"
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                    <span className="text-sm font-medium">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="eightfold-path">
                                        <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 flex items-center gap-3">
                                            <BookOpen className="w-8 h-8 text-orange-500" /> The Noble Eightfold Path
                                        </h2>
                                        <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
                                            <table className="w-full text-left bg-white">
                                                <thead className="bg-orange-50">
                                                    <tr>
                                                        <th className="p-4 font-bold text-slate-900 border-b border-slate-100">Path</th>
                                                        <th className="p-4 font-bold text-slate-900 border-b border-slate-100">Essence</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-sm">
                                                    {[
                                                        { path: "Right View", essence: "Understanding reality clearly" },
                                                        { path: "Right Intention", essence: "Positive and pure thoughts" },
                                                        { path: "Right Speech", essence: "Truthful and kind words" },
                                                        { path: "Right Action", essence: "Ethical behavior" },
                                                        { path: "Right Livelihood", essence: "Honest means of earning" },
                                                        { path: "Right Effort", essence: "Avoiding harmful actions" },
                                                        { path: "Right Mindfulness", essence: "Awareness in every moment" },
                                                        { path: "Right Concentration", essence: "Deep meditation" }
                                                    ].map((item, i) => (
                                                        <tr key={i} className="border-b border-slate-100 hover:bg-orange-50/30 transition-colors">
                                                            <td className="p-4 font-bold text-orange-600">{item.path}</td>
                                                            <td className="p-4 text-slate-700 font-medium">{item.essence}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    <section id="sacred-rituals">
                                        <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                                            <Flower2 className="w-8 h-8 text-orange-500" /> Sacred Rituals for Buddha Purnima
                                        </h2>
                                        <div className="space-y-6">
                                            <p className="font-medium text-slate-900 italic">"Pure action leading to pure thought is the essence of Vesak rituals."</p>
                                            
                                            {/* Rituals Image */}
                                            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                                                <img src={buddhaRitualsImg} alt="Buddhist Rituals and Offerings" className="w-full h-auto" />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {[
                                                    "Offer flowers and light lamps near the Bodhi Tree",
                                                    "Visit monasteries for prayers and chanting",
                                                    "Wear white attire symbolizing purity",
                                                    "Practice meditation and silence",
                                                    "Donate food and clothes to the needy",
                                                    "Follow vegetarianism for the day"
                                                ].map((ritual, idx) => (
                                                    <div key={idx} className="flex gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                                                        <div className="bg-orange-50 p-2 rounded-full h-fit mt-1">
                                                            <CheckCircle2 className="w-5 h-5 text-orange-600" />
                                                        </div>
                                                        <p className="text-sm font-medium text-slate-800">{ritual}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </section>

                                    <section id="powerful-mantras" className="bg-slate-900 text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full transform rotate-12 transition-transform group-hover:scale-125 duration-1000" />
                                        <h2 className="text-3xl font-display font-bold mb-8 relative z-10 flex items-center gap-3">
                                            <BookOpen className="w-8 h-8 text-orange-400" /> Powerful Mantras to Chant
                                        </h2>
                                        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 mb-8">
                                            <p className="text-2xl font-display text-center italic mb-4">Om Mani Padme Hum</p>
                                            <p className="text-sm text-center opacity-80 leading-relaxed">This mantra represents compassion and wisdom. Reciting it between 4 AM and 7 AM is considered especially beneficial.</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 text-xs font-bold text-center">
                                            {["Buddham Sharanam Gacchami", "Dhammam Sharanam Gacchami", "Sangham Sharanam Gacchami"].map((mantra, idx) => (
                                                <div key={idx} className="p-3 bg-white/5 rounded-lg border border-white/10">
                                                    {mantra}
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="bodhgaya-celebrations">
                                        <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                                            <MapPin className="w-8 h-8 text-orange-500" /> Celebrations at Bodhgaya
                                        </h2>
                                        <div className="space-y-6">
                                            <p>
                                                During Buddha Purnima, the Mahabodhi Temple complex is beautifully decorated with flowers and lights. Devotees meditate under the sacred Bodhi tree and listen to sermons on compassion and Ahimsa (non-violence).
                                            </p>

                                            {/* Bodhgaya Image */}
                                            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white my-8">
                                                <img src={buddhaBodhgayaImg} alt="Celebrations at Bodhgaya" className="w-full h-auto" />
                                            </div>

                                            <p>
                                                The true celebration of Buddha Purnima lies not just in rituals, but in living the principles of kindness, mindfulness, and simplicity.
                                            </p>
                                        </div>
                                        <div className="bg-orange-600 text-white p-8 rounded-3xl text-center mt-8 shadow-xl">
                                            <p className="text-xl font-display italic">"May this Vaishakh Full Moon illuminate your mind with clarity, peace, and spiritual growth."</p>
                                            <p className="mt-4 font-bold uppercase tracking-[0.2em] text-sm">Happy Buddha Purnima 2026! 🌕🙏</p>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </article>

                        {/* Right Sidebar - Services & Quick Facts */}
                        <aside className="lg:col-span-3">
                            <div className="space-y-8 sticky top-40 md:top-48 lg:top-52">
                                <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 overflow-hidden relative group">
                                    <h3 className="font-bold text-lg mb-6 bg-slate-900 text-white px-4 py-3 -mx-6 -mt-6 rounded-t-2xl text-center">Vesak 2026 Key Dates</h3>
                                    <div className="space-y-5 text-sm font-semibold">
                                        <div className="p-4 bg-orange-50 rounded-xl flex flex-col gap-1 border border-orange-100">
                                            <span className="text-xs text-orange-600 uppercase tracking-widest font-bold">Sacred Day</span>
                                            <span className="text-slate-900 text-base">May 12, 2026</span>
                                        </div>
                                        <div className="p-4 bg-orange-50 rounded-xl flex flex-col gap-1 border border-orange-100">
                                            <span className="text-xs text-orange-600 uppercase tracking-widest font-bold">Purnima Start</span>
                                            <span className="text-slate-900 text-base">May 11, 05:48 PM</span>
                                        </div>
                                        <div className="p-4 bg-orange-50 rounded-xl flex flex-col gap-1 border border-orange-100">
                                            <span className="text-xs text-orange-600 uppercase tracking-widest font-bold">Purnima End</span>
                                            <span className="text-slate-900 text-base">May 12, 07:22 PM</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-900 rounded-2xl p-8 text-white text-center shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 -mr-12 -mt-12 w-32 h-32 bg-orange-500 opacity-20 rounded-full transform rotate-12 transition-transform group-hover:scale-150 duration-700" />
                                    <h4 className="font-display font-bold text-xl mb-4 italic tracking-tight">Need Spiritual Guidance?</h4>
                                    <p className="text-xs text-slate-400 mb-8 leading-relaxed font-medium">Connect with our Vedic consultants to understand the impact of Purnima on your zodiac sign.</p>
                                    <Link to="/astro">
                                        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold py-4 rounded-xl transition-all transform hover:scale-105 hover:shadow-xl shadow-orange-500/20 active:scale-95 duration-200 uppercase tracking-widest">
                                            Astro Guidance
                                        </button>
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

export default BuddhaPurnima2026Blog;
