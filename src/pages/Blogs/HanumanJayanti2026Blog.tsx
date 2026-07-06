import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, Clock, MapPin, BookOpen, CheckCircle2, HelpCircle, Sun, Info } from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";

const HanumanJayanti2026Blog = () => {
    const tableOfContents = [
        { id: "introduction", title: "Introduction to Hanuman Jayanti" },
        { id: "date-and-month", title: "Hanuman Jayanti 2026 Date" },
        { id: "regional-variations", title: "Why Dates Vary Across India" },
        { id: "puja-timings", title: "2026 Puja Timings & Muhurat" },
        { id: "puja-vidhi", title: "Step-by-Step Puja Guide" },
        { id: "sindoor-importance", title: "Importance of Sindoor & Jasmine Oil" },
        { id: "fasting-rules", title: "Fasting Rules & Guidelines" },
        { id: "spiritual-benefits", title: "Spiritual & Astrological Benefits" },
        { id: "mathura-vrindavan", title: "Celebrations in Mathura & Vrindavan" },
        { id: "famous-temples", title: "Famous Temples to Visit" },
        { id: "dos-donts", title: "Important Do’s and Don’ts" },
        { id: "faqs", title: "Frequently Asked Questions" }
    ];

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Hanuman Jayanti 2026: Date, Puja Timings, Rituals & Temple Celebrations",
            "description": "Complete guide to Hanuman Jayanti 2026 including puja timings, rituals, fasting rules, significance, and famous temples in Mathura and Vrindavan.",
            "keywords": [
                "Hanuman Jayanti 2026 date",
                "Hanuman Jayanti puja timings",
                "Hanuman Jayanti rituals",
                "Hanuman Jayanti fasting rules",
                "Hanuman Chalisa benefits",
                "Hanuman temples Mathura Vrindavan"
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
            "articleSection": "Festival Travel Guide",
            "inLanguage": "en"
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "When is Hanuman Jayanti in 2026?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Hanuman Jayanti in North India will be celebrated on Thursday, 2 April 2026."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the fasting rules for Hanuman Jayanti?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Devotees may observe a full or partial fast and consume fruits, milk, and sattvic food while avoiding grains, onion, garlic, and non-vegetarian food."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can women visit Hanuman temples on Hanuman Jayanti?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, women can visit Hanuman temples and observe the fast with devotion. There is no restriction when the fast is observed with sincerity and faith."
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
                title="Hanuman Jayanti 2026: Date, Puja Timings, Rituals & Fasting Rules Guide"
                description="Discover Hanuman Jayanti 2026 date, auspicious puja timings, rituals, and fasting rules. Learn about celebrations in Mathura and Vrindavan with our comprehensive guide."
                keywords={[
                    "Hanuman Jayanti 2026",
                    "Hanuman Jayanti date",
                    "Hanuman puja timings",
                    "Hanuman Jayanti rituals",
                    "Hanuman Jayanti fasting",
                    "Hanuman Chalisa",
                    "Mathura Hanuman temples",
                    "Vrindavan Hanuman Jayanti"
                ]}
                schemas={schemas}
            />
            <Header />
            <main className="pt-36 md:pt-48 lg:pt-52 pb-12">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb & Share */}
                    <BlogBreadcrumb pageTitle="Hanuman Jayanti 2026 Guide" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Sidebar - Table of Contents */}
                        <aside className="lg:col-span-3">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-slate-100">
                                <h3 className="font-bold text-lg mb-4 text-slate-900 border-b pb-3">Table of Contents</h3>
                                <nav className="space-y-2">
                                    {tableOfContents.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:text-primary hover:bg-orange-50 rounded-lg transition-colors flex items-center gap-2"
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
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100">
                                {/* Title Section */}
                                <div className="p-8 md:p-10">
                                    <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 leading-tight">
                                        Hanuman Jayanti 2026: Date, Puja Timings & Rituals
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-orange-500" /> 2 April 2026</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-orange-500" /> 10 min read</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-orange-500" /> Pan-India</span>
                                    </div>
                                </div>

                                {/* Hero Image */}
                                <div className="relative">
                                    <img
                                        src="/assets/HanumanJayanti2026_v2.png"
                                        alt="Hanuman Jayanti 2026 Celebration"
                                        className="w-full h-auto"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                            Festival Guide
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-10 space-y-8 text-lg leading-relaxed text-slate-700">
                                    <section id="introduction">
                                        <p className="lead text-xl font-medium text-slate-900 mb-6 italic border-l-4 border-orange-500 pl-6">
                                            "Celebrating the divine birth of Lord Hanuman — the eternal symbol of unmatched strength, courage, and unwavering devotion."
                                        </p>
                                        <p>
                                            Hanuman Jayanti 2026 celebrates the divine birth of Lord Hanuman, one of the most powerful and beloved deities in Hinduism. Known as the eternal devotee of Lord Rama, Hanuman symbolizes unmatched strength, courage, devotion, loyalty, and selfless service.
                                        </p>
                                        <p>
                                            For millions of devotees across India, Hanuman Jayanti is not just a festival — it is a spiritual reminder of faith, discipline, and inner power. Celebrating this day with devotion is believed to attract divine blessings and positive energy in life.
                                        </p>
                                    </section>

                                    <hr className="my-8" />

                                    <section id="date-and-month">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <Calendar className="w-8 h-8 text-orange-500" /> Hanuman Jayanti 2026 Date
                                        </h2>
                                        <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-1">
                                                    <p className="text-sm font-bold text-orange-600 uppercase">English Date</p>
                                                    <p className="text-2xl font-bold text-slate-900">Thursday, 2 April 2026</p>
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-sm font-bold text-orange-600 uppercase">Hindu Month</p>
                                                    <p className="text-2xl font-bold text-slate-900">Chaitra</p>
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-sm font-bold text-orange-600 uppercase">Tithi</p>
                                                    <p className="text-2xl font-bold text-slate-900">Purnima (Full Moon)</p>
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-sm font-bold text-orange-600 uppercase">Tradition</p>
                                                    <p className="text-2xl font-bold text-slate-900">North India</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="regional-variations">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Hanuman Jayanti Dates Vary Across India</h2>
                                        <p>
                                            The celebration date may vary depending on regional traditions and calendar systems:
                                        </p>
                                        <ul className="space-y-4 my-6">
                                            <li className="flex gap-4 p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                                                <span className="font-bold text-orange-600 w-24 flex-shrink-0">North India</span>
                                                <p>Observed on Chaitra Purnima (March/April).</p>
                                            </li>
                                            <li className="flex gap-4 p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                                                <span className="font-bold text-orange-600 w-24 flex-shrink-0">South India</span>
                                                <p>Celebrated during Margashirsha, Vaishakha, or Pausha months, depending on regional customs.</p>
                                            </li>
                                        </ul>
                                    </section>

                                    <hr className="my-8" />

                                    <section id="puja-timings">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <Clock className="w-8 h-8 text-orange-500" /> Hanuman Jayanti 2026 Puja Timings
                                        </h2>
                                        <p>
                                            Performing Hanuman puja during auspicious timings is considered spiritually beneficial. Devotees usually begin their worship early in the morning and continue through the day.
                                        </p>
                                        <div className="bg-slate-50 border-l-4 border-orange-500 p-6 my-6 space-y-4">
                                            <div>
                                                <h3 className="font-bold text-slate-900">Recommended Puja Timings</h3>
                                                <p>After sunrise until afternoon (Morning to midday hours)</p>
                                            </div>
                                            <div className="bg-orange-100/50 p-4 rounded-xl border border-orange-200">
                                                <h3 className="font-bold text-orange-900 flex items-center gap-2">
                                                    <Sun className="w-5 h-5" /> Abhijit Muhurat (Highly Auspicious)
                                                </h3>
                                                <p className="text-2xl font-bold text-orange-600 mt-1">11:50 AM – 12:40 PM</p>
                                                <p className="text-sm text-slate-600 mt-1 italic">Note: Exact timings may vary depending on city and local panchang.</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-bold text-slate-900">Best Time to Chant Hanuman Chalisa</h3>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li>Early morning after sunrise</li>
                                                <li>During Abhijit Muhurat</li>
                                                <li>Evening after sunset</li>
                                            </ul>
                                            <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">💡 Many devotees recite 11, 21, or 108 times for special wishes.</p>
                                        </div>
                                    </section>

                                    <hr className="my-8" />

                                    <section id="puja-vidhi">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <BookOpen className="w-8 h-8 text-orange-500" /> Hanuman Jayanti Puja Vidhi
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                                                <h3 className="font-bold text-amber-900 mb-4 flex items-center gap-2">
                                                    <Info className="w-5 h-5 text-amber-600" /> Puja Samagri List
                                                </h3>
                                                <ul className="space-y-2 text-amber-800 text-sm">
                                                    <li>• Idol or image of Lord Hanuman</li>
                                                    <li>• Sindoor (vermilion) & Jasmine oil</li>
                                                    <li>• Red flowers or garland</li>
                                                    <li>• Incense sticks and Diya</li>
                                                    <li>• Camphor for aarti</li>
                                                    <li>• Bananas, jaggery, laddoos, or boondi</li>
                                                    <li>• Hanuman Chalisa book</li>
                                                </ul>
                                            </div>
                                            <div className="space-y-4">
                                                <h3 className="font-bold text-slate-900">How to Perform at Home</h3>
                                                <ol className="list-decimal pl-6 space-y-2 text-sm">
                                                    <li>Wake up early and take a bath.</li>
                                                    <li>Wear clean and preferably red/saffron clothing.</li>
                                                    <li>Place the idol facing east.</li>
                                                    <li>Light a diya and incense sticks.</li>
                                                    <li>Apply sindoor mixed with jasmine oil.</li>
                                                    <li>Offer flowers, fruits, and sweets.</li>
                                                    <li>Recite Hanuman Chalisa and Bajrang Baan.</li>
                                                    <li>Perform aarti and distribute prasad.</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="sindoor-importance">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Importance of Sindoor and Jasmine Oil</h2>
                                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                                            <p className="mb-4">Offering sindoor and jasmine oil to Lord Hanuman holds deep spiritual meaning:</p>
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-3">
                                                    <div className="mt-1 bg-orange-100 p-1 rounded-full"><div className="w-2 h-2 bg-orange-600 rounded-full"></div></div>
                                                    <p><span className="font-bold text-orange-600">Sindoor</span> represents Hanuman ji’s deep devotion and strength.</p>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <div className="mt-1 bg-orange-100 p-1 rounded-full"><div className="w-2 h-2 bg-orange-600 rounded-full"></div></div>
                                                    <p><span className="font-bold text-orange-600">Jasmine Oil</span> is believed to attract divine blessings and positive energy.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <hr className="my-8" />

                                    <section id="fasting-rules">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <HelpCircle className="w-8 h-8 text-orange-500" /> Fasting Rules & Guidelines
                                        </h2>
                                        <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 mb-6">
                                            <h3 className="font-bold text-blue-900 flex items-center gap-2 mb-2">
                                                Can Women Observe the Fast?
                                            </h3>
                                            <p className="text-blue-800">
                                                Yes. Women can observe Hanuman Jayanti fasting and worship with devotion. There is no restriction when the fast is observed with sincerity and faith.
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                                <h3 className="font-bold text-green-900 mb-3">Allowed Foods</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {["Fruits", "Milk", "Dry Fruits", "Jaggery", "Water"].map(food => (
                                                        <span key={food} className="bg-white px-3 py-1 rounded-full text-xs font-bold text-green-700 border border-green-100 shadow-sm">{food}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                                <h3 className="font-bold text-red-900 mb-3">Foods to Avoid</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {["Grains", "Onion & Garlic", "Non-Veg", "Alcohol"].map(food => (
                                                        <span key={food} className="bg-white px-3 py-1 rounded-full text-xs font-bold text-red-700 border border-red-100 shadow-sm">{food}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="spiritual-benefits">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Spiritual and Astrological Benefits</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                "Removes fear and negative energies",
                                                "Helps overcome obstacles in life",
                                                "Strengthens Mars (Mangal) in astrology",
                                                "Increases courage and confidence",
                                                "Promotes discipline and devotion",
                                                "Brings mental peace and success"
                                            ].map((benefit, i) => (
                                                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                                                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                                                    <span className="text-sm font-medium text-slate-800">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <hr className="my-8" />

                                    <section id="mathura-vrindavan">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <MapPin className="w-8 h-8 text-orange-500" /> Celebrations in Mathura & Vrindavan
                                        </h2>
                                        <p>
                                            The sacred Braj region becomes spiritually vibrant. Temples organize special abhishek ceremonies, continuous Hanuman Chalisa recitations, kirtans, and religious processions.
                                        </p>
                                        <div className="bg-slate-50 p-6 rounded-2xl my-6">
                                            <h3 className="font-bold text-slate-900 mb-4 underline decoration-orange-500 underline-offset-4">Local Traditions:</h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                                                <li className="flex items-center gap-2">• Special Abhishek Rituals</li>
                                                <li className="flex items-center gap-2">• Akhand Chalisa Recitation</li>
                                                <li className="flex items-center gap-2">• Large Aarti Gatherings</li>
                                                <li className="flex items-center gap-2">• Prasad Distribution</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="famous-temples">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Famous Hanuman Temples to Visit</h2>
                                        <div className="space-y-4">
                                            <div className="p-4 border border-slate-100 rounded-xl shadow-sm">
                                                <h3 className="font-bold text-orange-600 mb-2">In Mathura:</h3>
                                                <p className="text-sm">Bhooteshwar Mahadev Temple (Hanuman shrine), Dwarkadhish area worship sites.</p>
                                            </div>
                                            <div className="p-4 border border-slate-100 rounded-xl shadow-sm">
                                                <h3 className="font-bold text-orange-600 mb-2">In Vrindavan:</h3>
                                                <p className="text-sm">Rangji Temple Hanuman shrine, Madan Mohan Temple Hanuman worship.</p>
                                            </div>
                                            <div className="p-4 border border-slate-100 rounded-xl shadow-sm">
                                                <h3 className="font-bold text-orange-600 mb-2">All India:</h3>
                                                <p className="text-sm">Sankat Mochan (Varanasi), Salasar Balaji (Rajasthan).</p>
                                            </div>
                                        </div>
                                    </section>

                                    <hr className="my-8" />

                                    <section id="dos-donts">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            <Info className="w-8 h-8 text-orange-500" /> Important Do’s and Don’ts
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <h3 className="font-bold text-green-700 bg-green-50 px-4 py-2 rounded-lg">Do's ✅</h3>
                                                <ul className="text-sm space-y-2 pl-4 border-l-2 border-green-200">
                                                    <li>Observe fasting with devotion.</li>
                                                    <li>Chant Hanuman Chalisa or Bajrang Baan.</li>
                                                    <li>Visit temples during auspicious timings.</li>
                                                    <li>Maintain a positive, disciplined mindset.</li>
                                                </ul>
                                            </div>
                                            <div className="space-y-4">
                                                <h3 className="font-bold text-red-700 bg-red-50 px-4 py-2 rounded-lg">Don'ts ❌</h3>
                                                <ul className="text-sm space-y-2 pl-4 border-l-2 border-red-200">
                                                    <li>Avoid non-vegetarian food & alcohol.</li>
                                                    <li>Do not start puja during Rahu Kaal.</li>
                                                    <li>Avoid arguments or negative behavior.</li>
                                                    <li>Don't treat the day casually.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <hr className="my-8" />

                                    <section id="faqs">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="font-bold text-slate-800 mb-2">When is Hanuman Jayanti in 2026?</h3>
                                                <p className="text-sm">Hanuman Jayanti in North India will be celebrated on Thursday, 2 April 2026.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-800 mb-2">Is it a public holiday?</h3>
                                                <p className="text-sm">It's not a nationwide public holiday, but some states may observe a local holiday.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-800 mb-2">Can women visit temples on this day?</h3>
                                                <p className="text-sm">Yes, women can visit Hanuman temples and observe the fast with devotion.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-800 mb-2">What are the fasting foods?</h3>
                                                <p className="text-sm">Fruits, milk, dry fruits, and jaggery are allowed while avoiding grains and non-vegetarian food.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 text-white shadow-xl text-center">
                                        <h3 className="text-3xl font-bold mb-4 font-display italic">"Jay Bajrang Bali!"</h3>
                                        <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
                                            Hanuman Jayanti 2026 is a sacred opportunity for devotion and strength. Whether at home or in holy places like Mathura, may you feel spiritually uplifted.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <Link to="/darshan" className="inline-block bg-white text-orange-600 font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-orange-50 transition-all transform hover:-translate-y-1">
                                                Plan a Darshan
                                            </Link>
                                            <a href="https://wa.me/919311973199" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:-translate-y-1">
                                                WhatsApp Support
                                            </a>
                                        </div>
                                    </section>

                                    <p className="text-center font-bold text-orange-600 mt-8 mb-8 bg-orange-50 py-4 rounded-xl border border-orange-100 flex items-center justify-center gap-2 italic">
                                        Jay Shri Ram! 🙏🧡 जय हनुमान!
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* Right Sidebar */}
                        <aside className="lg:col-span-3">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-slate-100 flex flex-col gap-8">
                                <div>
                                    <h3 className="font-bold text-lg mb-4 bg-orange-600 text-white px-4 py-3 -mx-6 -mt-6 rounded-t-xl">Related Guides</h3>
                                    <div className="space-y-4 mt-6 text-sm">
                                        <Link to="/blog/mathura-janmabhoomi-huranga-2026-darshan-guide" className="block p-3 hover:bg-slate-50 rounded-lg transition-colors border-b border-slate-100 group">
                                            <p className="font-medium text-slate-800 group-hover:text-primary transition-colors">Mathura Janmabhoomi Guide</p>
                                        </Link>
                                        <Link to="/blog/rangbharni-ekadashi-vrindavan-2026-darshan-guide" className="block p-3 hover:bg-slate-50 rounded-lg transition-colors border-b border-slate-100 group">
                                            <p className="font-medium text-slate-800 group-hover:text-primary transition-colors">Vrindavan Holi Experience</p>
                                        </Link>
                                        <Link to="/blog/ram-mandir-ayodhya-history-darshan-guide" className="block p-3 hover:bg-slate-50 rounded-lg transition-colors border-b border-slate-100 group">
                                            <p className="font-medium text-slate-800 group-hover:text-primary transition-colors">Ayodhya Darshan Planning</p>
                                        </Link>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white text-center shadow-lg">
                                    <h4 className="font-bold text-xl mb-2 italic">Custom Yatra?</h4>
                                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">Let us plan your perfect spiritual journey customized to your needs.</p>
                                    <Link to="/darshan">
                                        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold py-2 rounded-lg transition-all transform hover:scale-105 shadow-md">
                                            Contact Now
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

export default HanumanJayanti2026Blog;
