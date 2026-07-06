import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, Clock, MapPin, BookOpen, CheckCircle2, HelpCircle, Sun, Info, Flower } from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";

const ChaitraNavratri2026Blog = () => {
    const tableOfContents = [
        { id: "introduction", title: "Introduction to Chaitra Navratri" },
        { id: "dates-muhurat", title: "2026 Dates & Muhurat Timings" },
        { id: "spiritual-significance", title: "Spiritual Significance" },
        { id: "ghatsthapana", title: "Ghatsthapana Ritual & Puja Vidhi" },
        { id: "nine-days-guide", title: "Navdurga: 9-Day Guide" },
        { id: "fasting-rules", title: "Navratri Fasting Rules & Diet" },
        { id: "mantra-meditation", title: "Power of Mantra & Meditation" },
        { id: "kanya-puja", title: "Kanya Puja & Parana" },
        { id: "faqs", title: "Frequently Asked Questions" }
    ];

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Chaitra Navratri 2026: Dates, Muhurat Timings & Fasting Rituals Guide",
            "description": "Complete guide to Chaitra Navratri 2026 including important dates, Ghatsthapana muhurat, daily rituals, fasting rules, and significance of the nine forms of Maa Durga.",
            "keywords": [
                "Chaitra Navratri 2026 dates",
                "Navratri 2026 muhurat",
                "Ghatsthapana 2026 timings",
                "Navratri fasting rules",
                "9 forms of Durga",
                "Rama Navami 2026"
            ],
            "datePublished": "2026-03-13",
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
            "articleSection": "Festival Travel Guide"
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "When is Chaitra Navratri in 2026?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Chaitra Navratri 2026 begins on 19 March 2026 and ends on 27 March 2026 with Rama Navami."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the Ghatsthapana Muhurat for 2026?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The Ghatsthapana Muhurat is from 06:52 AM to 10:10 AM on 19 March 2026."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What foods are allowed during Navratri fasting?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Allowed foods include sabudana, samak rice, kuttu flour, fruits, milk, nuts, and Sendha Namak (rock salt)."
                    }
                }
            ]
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
                title="Chaitra Navratri 2026: Dates, Muhurat Timings & Fasting Rituals"
                description="Plan your Chaitra Navratri 2026 with our complete guide. Find dates, auspicious muhurat, daily rituals, fasting guides, and explore powerful Shakti temples for darshan."
                keywords={[
                    "Chaitra Navratri 2026",
                    "Navratri 2026 dates",
                    "Ghatsthapana timings",
                    "Navratri fasting rules",
                    "Maa Durga 9 forms",
                    "Rama Navami 2026",
                    "Braj Navratri",
                    "Shakti Peethas darshan"
                ]}
                schemas={schemas}
            />
            <Header />
            <main className="pt-36 md:pt-48 lg:pt-52 pb-12">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb & Share */}
                    <BlogBreadcrumb pageTitle="Chaitra Navratri 2026 Guide" />

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
                                            className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:text-primary hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2"
                                        >
                                            <ChevronRight className="w-3 h-3 text-red-500" />
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
                                        Chaitra Navratri 2026: Dates, Muhurat Timings & Fasting Rituals
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-red-500" /> 19 — 27 March 2026</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-red-500" /> 15 min read</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><Flower className="w-4 h-4 text-red-500" /> Navdurga Guide</span>
                                    </div>
                                </div>

                                {/* Hero Image */}
                                <div className="relative">
                                    <img
                                        src="/assets/ChaitraNavratri2026.png"
                                        alt="Chaitra Navratri 2026 Celebration"
                                        className="w-full h-auto"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                            Spiritual Guide
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-10 space-y-8 text-lg leading-relaxed text-slate-700">
                                    <section id="introduction">
                                        <p className="lead text-xl font-medium text-slate-900 mb-6 italic border-l-4 border-red-500 pl-6">
                                            "A spiritually powerful period dedicated to the Divine Feminine — a journey of purification, renewal, and the victory of light."
                                        </p>
                                        <p>
                                            As winter slowly fades and the earth begins to bloom with the vibrant colors of spring, a spiritually powerful period arrives in the Hindu calendar. This sacred time is known as <strong>Chaitra Navratri</strong>, one of the most significant festivals dedicated to the worship of the Divine Feminine.
                                        </p>
                                        <p>
                                            Chaitra Navratri 2026 is not just a religious celebration; it represents a nine-day spiritual transformation that encourages devotees to purify their minds, reconnect with divine energy, and begin the Hindu New Year with positivity and strength.
                                        </p>
                                    </section>

                                    <hr className="my-8" />

                                    <section id="dates-muhurat">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <Calendar className="w-8 h-8 text-red-500" /> Chaitra Navratri 2026 Dates and Muhurat
                                        </h2>
                                        <p className="mb-6">
                                            Following the Hindu Luni-Solar calendar, Chaitra Navratri begins on the Pratipada Tithi of the Chaitra month and continues for nine days. Performing rituals during the correct muhurat is believed to align devotees with powerful cosmic energies.
                                        </p>

                                        <div className="bg-red-50 rounded-2xl p-6 border border-red-100 mb-8">
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-left">
                                                    <thead>
                                                        <tr className="border-b border-red-200">
                                                            <th className="py-3 font-bold text-red-700">Event</th>
                                                            <th className="py-3 font-bold text-red-700">Date / Timing</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-slate-900">
                                                        <tr className="border-b border-red-100/50">
                                                            <td className="py-3 font-medium">Chaitra Navratri Start</td>
                                                            <td className="py-3 text-sm">19 March 2026 (Thursday)</td>
                                                        </tr>
                                                        <tr className="border-b border-red-100/50">
                                                            <td className="py-3 font-medium">Chaitra Navratri End</td>
                                                            <td className="py-3 text-sm">27 March 2026 (Friday)</td>
                                                        </tr>
                                                        <tr className="border-b border-red-100/50">
                                                            <td className="py-3 font-medium">Ghatsthapana Muhurat</td>
                                                            <td className="py-3 text-sm">06:52 AM – 10:10 AM (19 March)</td>
                                                        </tr>
                                                        <tr className="border-b border-red-100/50">
                                                            <td className="py-3 font-medium">Abhijit Muhurat (Alternative)</td>
                                                            <td className="py-3 text-sm">11:47 AM – 12:36 PM</td>
                                                        </tr>
                                                        <tr className="border-b border-red-100/50">
                                                            <td className="py-3 font-medium">Rama Navami</td>
                                                            <td className="py-3 text-sm">27 March 2026</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 font-medium">Sandhi Puja</td>
                                                            <td className="py-3 text-sm">26 March – 11:24 AM to 12:12 PM</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="spiritual-significance">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Spiritual Significance</h2>
                                        <p>
                                            Chaitra Navratri is also known as <strong>Vasanta Navratri</strong>, as it occurs during the spring season when nature itself undergoes renewal. Spiritually, this period represents a cosmic transition, where the Sun enters Aries, marking the beginning of a new astrological cycle.
                                        </p>
                                        <ul className="space-y-4 my-6">
                                            <li className="flex gap-4 p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                                                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Clock className="w-6 h-6 text-red-500" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-slate-900">Hindu New Year</h3>
                                                    <p className="text-sm">Regarded as the start of the Hindu New Year in many regions (Gudi Padwa, Ugadi).</p>
                                                </div>
                                            </li>
                                            <li className="flex gap-4 p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                                                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Sun className="w-6 h-6 text-red-500" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-slate-900">Connection to Lord Rama</h3>
                                                    <p className="text-sm">Celebrates the birth of Lord Rama on the ninth day, emphasizing righteousness (Dharma).</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </section>

                                    <hr className="my-8" />

                                    <section id="ghatsthapana">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <Info className="w-8 h-8 text-red-500" /> Ghatsthapana 2026 – The Sacred Beginning
                                        </h2>
                                        <p className="mb-6">
                                            The first day of Navratri begins with the sacred ritual of <strong>Ghatsthapana</strong>. This symbolizes the invocation of Goddess Durga into the household, representing the universe and divine energy.
                                        </p>

                                        <div className="my-8">
                                            <img src="/assets/Ghatsthapana2026_v2.png" alt="Ghatsthapana Ritual" className="w-full h-auto rounded-2xl shadow-md border border-slate-100" />
                                            <p className="text-sm text-center text-slate-500 mt-2 font-medium italic">Kalash Sthapana — Invoking the Divine Feminine Energy</p>
                                        </div>

                                        <div className="bg-slate-50 p-8 rounded-2xl space-y-4">
                                            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                                <BookOpen className="w-6 h-6 text-red-500" /> Step-by-Step Puja Vidhi
                                            </h3>
                                            <ul className="space-y-4">
                                                <li className="flex items-start gap-3">
                                                    <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1">1</span>
                                                    <p className="text-sm"><span className="font-bold">Prepare Area</span>: Clean space facing North/East with red/yellow cloth.</p>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1">2</span>
                                                    <p className="text-sm"><span className="font-bold">Sow Sacred Grains</span>: Clay pot with soil and barley seeds (Jau) symbolizing growth.</p>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1">3</span>
                                                    <p className="text-sm"><span className="font-bold">Prepare Kalash</span>: Copper pot with water, betel nut, coin, and mango leaves.</p>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1">4</span>
                                                    <p className="text-sm"><span className="font-bold">Akhand Jyoti</span>: Light the sacred lamp that remains lit for 9 days.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <hr className="my-8" />

                                    <section id="nine-days-guide">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <Flower className="w-8 h-8 text-red-500" /> Navdurga: 9-Day Day-Wise Guide
                                        </h2>
                                        <div className="overflow-x-auto -mx-8 md:-mx-10 px-8 md:px-10 py-2">
                                            <table className="w-full text-left min-w-[600px]">
                                                <thead>
                                                    <tr className="bg-red-600 text-white">
                                                        <th className="p-3 rounded-tl-xl font-bold">Day</th>
                                                        <th className="p-3 font-bold">Goddess</th>
                                                        <th className="p-3 font-bold">Color</th>
                                                        <th className="p-3 font-bold">Bhog</th>
                                                        <th className="p-3 rounded-tr-xl font-bold">Significance</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-xs">
                                                    <tr className="bg-yellow-50/50 border-b border-slate-100">
                                                        <td className="p-3">Day 1</td>
                                                        <td className="p-3 font-bold">Maa Shailputri</td>
                                                        <td className="p-3">Yellow</td>
                                                        <td className="p-3 text-orange-600 font-medium">Pure Ghee</td>
                                                        <td className="p-3">Stability & Strength</td>
                                                    </tr>
                                                    <tr className="bg-green-50/50 border-b border-slate-100">
                                                        <td className="p-3">Day 2</td>
                                                        <td className="p-3 font-bold">Maa Brahmacharini</td>
                                                        <td className="p-3">Green</td>
                                                        <td className="p-3 text-orange-600 font-medium">Sugar</td>
                                                        <td className="p-3">Discipline & Meditation</td>
                                                    </tr>
                                                    <tr className="bg-slate-50/50 border-b border-slate-100">
                                                        <td className="p-3">Day 3</td>
                                                        <td className="p-3 font-bold">Maa Chandraghanta</td>
                                                        <td className="p-3">Grey</td>
                                                        <td className="p-3 text-orange-600 font-medium">Milk/Kheer</td>
                                                        <td className="p-3">Courage & Peace</td>
                                                    </tr>
                                                    <tr className="bg-orange-50/50 border-b border-slate-100">
                                                        <td className="p-3">Day 4</td>
                                                        <td className="p-3 font-bold">Maa Kushmanda</td>
                                                        <td className="p-3">Orange</td>
                                                        <td className="p-3 text-orange-600 font-medium">Malpua</td>
                                                        <td className="p-3">Energy & Health</td>
                                                    </tr>
                                                    <tr className="bg-slate-50 border-b border-slate-100">
                                                        <td className="p-3">Day 5</td>
                                                        <td className="p-3 font-bold">Maa Skandamata</td>
                                                        <td className="p-3">White</td>
                                                        <td className="p-3 text-orange-600 font-medium">Bananas</td>
                                                        <td className="p-3">Motherhood & Protection</td>
                                                    </tr>
                                                    <tr className="bg-red-50/50 border-b border-slate-100">
                                                        <td className="p-3">Day 6</td>
                                                        <td className="p-3 font-bold">Maa Katyayani</td>
                                                        <td className="p-3">Red</td>
                                                        <td className="p-3 text-orange-600 font-medium">Honey</td>
                                                        <td className="p-3">Destroyer of Evils</td>
                                                    </tr>
                                                    <tr className="bg-blue-50/50 border-b border-slate-100">
                                                        <td className="p-3">Day 7</td>
                                                        <td className="p-3 font-bold">Maa Kalaratri</td>
                                                        <td className="p-3">Royal Blue</td>
                                                        <td className="p-3 text-orange-600 font-medium">Jaggery</td>
                                                        <td className="p-3">Courage & Light</td>
                                                    </tr>
                                                    <tr className="bg-pink-50/50 border-b border-slate-100">
                                                        <td className="p-3">Day 8</td>
                                                        <td className="p-3 font-bold">Maa Mahagauri</td>
                                                        <td className="p-3">Pink</td>
                                                        <td className="p-3 text-orange-600 font-medium">Halwa</td>
                                                        <td className="p-3">Purity & Peace</td>
                                                    </tr>
                                                    <tr className="bg-purple-50/50">
                                                        <td className="p-3 font-bold">Day 9</td>
                                                        <td className="p-3 font-bold text-purple-700">Maa Siddhidatri</td>
                                                        <td className="p-3">Purple</td>
                                                        <td className="p-3 text-orange-600 font-medium">Fruits/Grains</td>
                                                        <td className="p-3">Fulfillment of Wishes</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    <hr className="my-8" />

                                    <section id="fasting-rules">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <Sun className="w-8 h-8 text-red-500" /> Fasting Rules and Diet Guide
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                                                <h3 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                                                    🚫 Foods to Avoid
                                                </h3>
                                                <ul className="text-sm space-y-2 text-red-800">
                                                    <li>• Wheat and rice</li>
                                                    <li>• Pulses and lentils</li>
                                                    <li>• Onion and garlic</li>
                                                    <li>• Alcohol and non-vegetarian food</li>
                                                </ul>
                                            </div>
                                            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                                <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                                                    ✅ Allowed Foods
                                                </h3>
                                                <ul className="text-sm space-y-2 text-green-800">
                                                    <li>• Sabudana & Samak rice</li>
                                                    <li>• Kuttu & Singhara flour</li>
                                                    <li>• Fruits & Dairy products</li>
                                                    <li>• Sendha Namak (rock salt)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="mantra-meditation">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Power of Mantra and Meditation</h2>
                                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                                            <p className="text-sm italic text-slate-600 mb-4">"Connect with divine consciousness through chanting."</p>
                                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 font-serif text-xl text-red-600 space-y-2">
                                                <p>Hare Krishna Hare Krishna</p>
                                                <p>Krishna Krishna Hare Hare</p>
                                                <p>Hare Rama Hare Rama</p>
                                                <p>Rama Rama Hare Hare</p>
                                            </div>
                                        </div>
                                    </section>

                                    <hr className="my-8" />

                                    <section id="kanya-puja">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <CheckCircle2 className="w-8 h-8 text-red-500" /> Kanya Puja and Navratri Parana
                                        </h2>
                                        <div className="space-y-6">
                                            <div className="p-6 bg-slate-50 rounded-2xl">
                                                <h3 className="font-bold text-slate-900 mb-3">Kanya Puja (Ashtami/Navami)</h3>
                                                <p className="text-sm mb-4">Nine young girls are worshipped as living forms of the Goddess. Devotees wash their feet, apply tilak, and offer food like Puri, Chana, and Halwa.</p>
                                            </div>
                                            <div className="p-6 bg-slate-50 rounded-2xl">
                                                <h3 className="font-bold text-slate-900 mb-3">Navratri Parana</h3>
                                                <p className="text-sm">The fast is broken on Navami morning after Rama Navami puja. Barley sprouts are returned to nature, symbolizing life and renewal.</p>
                                            </div>
                                        </div>
                                    </section>


                                    <section id="faqs">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <HelpCircle className="w-8 h-8 text-red-500" /> Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-6">
                                            {[
                                                { q: "When is Chaitra Navratri in 2026?", a: "Chaitra Navratri 2026 begins on 19 March 2026 and ends on 27 March 2026 with Rama Navami." },
                                                { q: "What is the Ghatsthapana Muhurat for 2026?", a: "The Muhurat is from 06:52 AM to 10:10 AM on 19 March 2026." },
                                                { q: "What is Sandhi Puja?", a: "A powerful ritual performed during the transition of Ashtami and Navami. In 2026, it occurs on 26 March from 11:24 AM to 12:12 PM." },
                                                { q: "Why is Rama Navami celebrated during Navratri?", a: "Rama Navami marks the birth of Lord Rama, the seventh incarnation of Lord Vishnu, on the ninth day of Navratri." }
                                            ].map((faq, i) => (
                                                <div key={i} className="border-b border-slate-100 pb-4">
                                                    <h3 className="font-bold text-slate-800 mb-2">{faq.q}</h3>
                                                    <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="bg-gradient-to-br from-red-600 to-orange-700 rounded-3xl p-8 text-white shadow-xl text-center">
                                        <h3 className="text-3xl font-bold mb-4 font-display">Shubh Chaitra Navratri!</h3>
                                        <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto italic">
                                            "May Maa Durga bless your home with health, prosperity, and divine protection as we welcome the Hindu New Year."
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <Link to="/darshan" className="inline-block bg-white text-red-600 font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-slate-100 transition-all transform hover:-translate-y-1">
                                                Plan Your Pilgrimage
                                            </Link>
                                            <a href="https://wa.me/919311973199" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:-translate-y-1">
                                                WhatsApp Support
                                            </a>
                                        </div>
                                    </section>

                                    <p className="text-center font-bold text-red-600 mt-8 mb-8 bg-red-50 py-4 rounded-xl border border-red-100 flex items-center justify-center gap-2 italic">
                                        Jay Maa Durga! 🙏❤️ शुभ चैत्र नवरात्रि!
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* Right Sidebar */}
                        <aside className="lg:col-span-3">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-slate-100 flex flex-col gap-8">
                                <div>
                                    <h3 className="font-bold text-lg mb-4 bg-red-600 text-white px-4 py-3 -mx-6 -mt-6 rounded-t-xl text-center">Important Dates</h3>
                                    <div className="space-y-4 mt-6 text-sm">
                                        <div className="p-3 bg-red-50 rounded-lg flex justify-between items-center font-medium">
                                            <span>Start Date</span>
                                            <span className="text-red-700">19 March</span>
                                        </div>
                                        <div className="p-3 bg-red-50 rounded-lg flex justify-between items-center font-medium">
                                            <span>Rama Navami</span>
                                            <span className="text-red-700">27 March</span>
                                        </div>
                                        <div className="p-3 bg-red-50 rounded-lg flex justify-between items-center font-medium">
                                            <span>Sandhi Puja</span>
                                            <span className="text-red-700">26 March</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white text-center shadow-lg">
                                    <h4 className="font-bold text-xl mb-2 italic">Secure Darshan?</h4>
                                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">Let us organize your Navratri temple visit with expertise and care.</p>
                                    <Link to="/darshan">
                                        <button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2 rounded-lg transition-all transform hover:scale-105 shadow-md">
                                            Request Darshan Assistasnce
                                        </button>
                                    </Link>
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg mb-4 border-b pb-2">Related Posts</h3>
                                    <div className="space-y-4 text-xs font-medium">
                                        <Link to="/blog/hanuman-jayanti-2026-date-puja-rituals" className="block hover:text-red-600 transition-colors">Hanuman Jayanti 2026 Guide</Link>
                                        <Link to="/blog/holi-2026-history-significance-rituals" className="block hover:text-red-600 transition-colors">Holi 2026 Complete Guide</Link>
                                        <Link to="/blog/shirdi-sai-baba-11-vachan-promises-meaning" className="block hover:text-red-600 transition-colors">Shirdi Sai Baba Promises</Link>
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

export default ChaitraNavratri2026Blog;
