import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, Clock, BookOpen, HelpCircle, Sun, Info, Flower2, Moon, Stars, CheckCircle2, Heart, Sparkles, Home, ShieldCheck, MapPin, Search, ClipboardList, Flame, Gift } from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";

const VastuShantiPujaBlog = () => {
    const tableOfContents = [
        { id: "introduction", title: "Introduction" },
        { id: "what-is-it", title: "What is Vastu Shanti Puja?" },
        { id: "when-to-perform", title: "When Should You Perform It?" },
        { id: "benefits", title: "Why is it Important?" },
        { id: "vidhi", title: "Vastu Shanti Puja Vidhi" },
        { id: "combine-darshan", title: "Why Combine with Temple Darshan?" },
        { id: "book-online", title: "Book Vastu Shanti Puja Online" },
        { id: "naman-darshan", title: "Benefits of Naman Darshan" },
        { id: "final-thoughts", title: "A New Spiritual Beginning" },
        { id: "faqs", title: "Frequently Asked Questions" }
    ];

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Vastu Shanti Puja: Why It’s Essential Before Entering a New Home & How to Book It Online",
            "description": "Complete guide to Vastu Shanti Puja. Learn about the benefits, timing, vidhi, and how to book online Vastu Shanti puja for home energy correction.",
            "keywords": [
                "vastu shanti puja",
                "vastu shanti puja benefits",
                "vastu shanti puja vidhi",
                "vastu pooja for new house",
                "online vastu shanti puja booking"
            ],
            "datePublished": "2026-03-30",
            "author": {
                "@type": "Organization",
                "name": "Naman Darshan"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Naman Darshan"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the importance of Vastu Shanti Puja?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It corrects Vastu dosh and purifies the home, bringing peace and harmony to the occupants."
                    }
                },
                {
                    "@type": "Question",
                    "name": "When should we do Vastu Shanti Puja?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It should be done before shifting to a new house, after major renovations, or if facing constant problems at home."
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
                title="Vastu Shanti Puja Guide: Essential for New Homes"
                description="Complete guide to Vastu Shanti Puja. Learn about its benefits, timing, ritual steps (vidhi), and how to book online puja for your new home."
                keywords={[
                    "vastu shanti puja",
                    "vastu shanti puja benefits",
                    "vastu shanti puja vidhi",
                    "vastu pooja for new house",
                    "online vastu shanti puja booking",
                    "griha pravesh vastu puja",
                    "online pooja services india"
                ]}
                schemas={schemas}
            />
            <Header />
            <main className="pt-36 md:pt-48 lg:pt-52 pb-12 font-display">
                <div className="container mx-auto px-4">
                    <BlogBreadcrumb pageTitle="Vastu Shanti Puja Guide" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Sidebar */}
                        <aside className="lg:col-span-3">
                            <div className="bg-white rounded-3xl shadow-sm p-8 sticky top-40 md:top-48 lg:top-52 border border-slate-100">
                                <h3 className="font-bold text-xl mb-6 text-slate-900 border-b pb-4 text-center tracking-tight">Table of Contents</h3>
                                <nav className="space-y-1.5">
                                    {tableOfContents.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className="w-full text-left px-4 py-3 text-sm text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all flex items-center gap-2.5 font-medium group"
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
                            <div className="bg-white rounded-[2.5rem] shadow-sm overflow-hidden border border-slate-100">
                                {/* Top Decoration */}
                                <div className="h-2 w-full bg-gradient-to-r from-orange-400 via-red-500 to-orange-400" />

                                <div className="p-8 md:p-14 lg:p-16">
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                                        Vastu Shanti Puja: Why It’s Essential Before Entering a New Home & How to Book It Online
                                    </h1>

                                    <div className="flex flex-wrap items-center gap-4 mb-10 pb-8 border-b border-slate-100">
                                        <div className="flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                                            <ShieldCheck className="w-4 h-4" /> HouSevarming Guide
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm text-slate-500 font-medium">
                                            <Clock className="w-4 h-4 text-orange-500" /> 8 min read
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm text-slate-500 font-medium ml-auto">
                                            <Home className="w-4 h-4 text-orange-500" /> Vastu Shastra
                                        </div>
                                    </div>

                                    {/* Main Image */}
                                    <div className="relative group overflow-hidden mb-12 rounded-[2rem] shadow-2xl">
                                        <img
                                            src="/assets/VastuShantiPujaBlog.jpg"
                                            alt="Vastu Shanti Puja Havan Ritual"
                                            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0 pointer-events-none" />
                                    </div>

                                    <div className="space-y-12 text-lg leading-relaxed text-slate-700">
                                        <section id="introduction">
                                            <p className="text-xl font-medium text-slate-800 italic border-l-4 border-orange-500 pl-8 py-3 bg-orange-50/30 rounded-r-3xl">
                                                "Starting life in a new home is one of the most exciting milestones. But in Indian tradition, it’s not just about moving in—it’s about entering with the right energy and blessings."
                                            </p>
                                            <div className="space-y-6 pt-10">
                                                <p>
                                                    That’s why <strong>Vastu Shanti Puja</strong> is considered a must before shifting into a new house. It helps remove negative influences, balance energies, and invite peace, prosperity, and happiness into your home.
                                                </p>
                                                <p>
                                                    Today, with platforms like <strong>Naman Darshan</strong>, you can even book Vastu Shanti Puja online along with temple darshan services, making the entire process simple and hassle-free.
                                                </p>
                                            </div>
                                        </section>

                                        <section id="what-is-it" className="bg-slate-50 p-10 rounded-[2rem] border border-slate-200/50">
                                            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-4">
                                                <Sparkles className="w-8 h-8 text-orange-500" /> What is Vastu Shanti Puja?
                                            </h2>
                                            <div className="space-y-6">
                                                <p>
                                                    Vastu Shanti Puja is a sacred Hindu ritual performed to correct <strong>Vastu dosh</strong> and purify a home before living in it. According to Vastu Shastra, every space carries energy, and imbalances can affect overall well-being.
                                                </p>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                                    {[
                                                        "Cleanse negative vibrations",
                                                        "Balance the Pan Tatva",
                                                        "Restore harmonic energy",
                                                        "Seek Vastu Devta's blessings"
                                                    ].map((point, idx) => (
                                                        <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 font-bold text-sm">
                                                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                            {point}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </section>

                                        <section id="when-to-perform">
                                            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-4">
                                                <Calendar className="w-8 h-8 text-orange-500 bg-orange-100 p-2 rounded-xl" /> When Should You Perform Vastu Shanti Puja?
                                            </h2>
                                            <div className="bg-white border-2 border-orange-100 p-10 rounded-3xl shadow-inner relative group transition-all hover:bg-orange-50/10">
                                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                                    <Sun className="w-16 h-16 text-orange-500" />
                                                </div>
                                                <p className="mb-8 font-medium italic">"Performing Vastu Shanti at the right time ensures your home starts with positive energy and divine protection."</p>
                                                <ul className="space-y-4 font-bold text-slate-800">
                                                    <li className="flex items-center gap-3 text-lg"><MapPin className="w-5 h-5 text-orange-500" /> Griha Pravesh (HouSevarming)</li>
                                                    <li className="flex items-center gap-3 text-lg"><MapPin className="w-5 h-5 text-orange-500" /> Buying a new flat or house</li>
                                                    <li className="flex items-center gap-3 text-lg"><MapPin className="w-5 h-5 text-orange-500" /> After reconstruction</li>
                                                    <li className="flex items-center gap-3 text-lg"><MapPin className="w-5 h-5 text-orange-500" /> Addressing constant problems</li>
                                                </ul>
                                            </div>
                                        </section>

                                        <section id="benefits">
                                            <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-4">
                                                <ShieldCheck className="w-8 h-8 text-orange-500 bg-orange-100 p-2 rounded-xl" /> Why is Vastu Shanti Puja Important?
                                            </h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {[
                                                    { title: "Energy Cleansing", desc: "Removing negative energy from the house." },
                                                    { title: "Harmony", desc: "Bringing peace and harmony in relationships." },
                                                    { title: "Wellness", desc: "Improving health and mental well-being." },
                                                    { title: "Prosperity", desc: "Attracting financial growth and stability." }
                                                ].map((item, i) => (
                                                    <div key={i} className="p-8 bg-slate-900 text-white rounded-3xl transition-transform hover:-translate-y-2 duration-300 group shadow-xl overflow-hidden relative">
                                                        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-orange-500 opacity-20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                                                        <h4 className="font-bold text-xl mb-3 text-orange-400 relative z-10">{item.title}</h4>
                                                        <p className="text-sm opacity-80 leading-relaxed font-medium relative z-10">{item.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="text-center italic mt-10 text-slate-500 font-bold border-stone-200 border-t pt-8 bg-white p-6 rounded-2xl shadow-inner">
                                                "It’s not just a ritual—it’s about setting the right foundation for your life ahead."
                                            </p>
                                        </section>

                                        <section id="vidhi">
                                            <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-4">
                                                <BookOpen className="w-8 h-8 text-orange-500 bg-orange-100 p-2 rounded-xl" /> Vastu Shanti Puja Vidhi
                                            </h2>
                                            <div className="space-y-4">
                                                {[
                                                    "Ganesh Puja (for removing obstacles)",
                                                    "Vastu Devta invocation",
                                                    "Navagraha Shanti for astrological balance",
                                                    "Havan (sacred fire ritual)",
                                                    "Chanting of Vedic mantras",
                                                    "Offering fruits, grains, flowers, and prasad"
                                                ].map((step, i) => (
                                                    <div key={i} className="flex gap-4 p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
                                                        <div className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-lg group-hover:bg-orange-600 transition-colors">{i + 1}</div>
                                                        <p className="font-bold text-slate-800">{step}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="bg-orange-50 p-8 rounded-3xl border border-orange-100 text-slate-700 italic font-medium leading-relaxed mt-10">
                                                "The havan plays a key role—it purifies the environment and spreads positive vibrations throughout the home."
                                            </p>
                                        </section>

                                        <section id="combine-darshan" className="bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden shadow-2xl group">
                                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-orange-500 opacity-20 rounded-full blur-3xl transform group-hover:scale-125 transition-transform duration-700" />
                                            <h2 className="text-3xl font-bold mb-10 relative z-10 flex items-center gap-4">
                                                <Sun className="w-10 h-10 text-orange-400" /> Why Combine with Temple Darshan?
                                            </h2>
                                            <div className="space-y-8 relative z-10">
                                                <p className="text-lg opacity-90 italic font-light leading-relaxed mb-10">
                                                    Performing Vastu Shanti at home is powerful—but combining it with temple darshan makes it even more spiritually complete.
                                                </p>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {[
                                                        "Offering special temple darshan",
                                                        "Authentic chadhava in your name",
                                                        "Video proof of your pooja",
                                                        "Prasad delivery straight to home"
                                                    ].map((item, idx) => (
                                                        <div key={idx} className="flex gap-3 items-center bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm group-hover:bg-white/15 transition-colors">
                                                            <ChevronRight className="w-5 h-5 text-orange-400" />
                                                            <span className="text-sm font-bold opacity-90">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </section>

                                        <section id="book-online">
                                            <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-4">
                                                <ShieldCheck className="w-8 h-8 text-orange-500 bg-orange-100 p-2 rounded-xl" /> Online Booking Experience
                                            </h2>
                                            <p className="mb-10 text-slate-600 font-medium leading-relaxed">Arranging a traditional pooja can be difficult. That’s why online services like Naman Darshan are becoming a popular, stress-free choice.</p>
                                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 relative z-10 mb-14 text-center transition-all">
                                                {[
                                                    { step: "Selection", desc: "Choose your pooja", icon: Search },
                                                    { step: "Details", desc: "Enter Name & Gotra", icon: ClipboardList },
                                                    { step: "Ritual", desc: "Pandits perform vidhi", icon: Flame },
                                                    { step: "Blessings", desc: "Get Video + Prasad", icon: Gift }
                                                ].map((s, i) => (
                                                    <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-[2rem] border border-white/10 shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group/card relative overflow-hidden">
                                                        <div className="absolute -top-2 -right-2 p-4 opacity-10 group-hover/card:opacity-30 transition-all transform group-hover/card:scale-110 group-hover/card:rotate-12">
                                                            <s.icon className="w-16 h-16 text-white" />
                                                        </div>
                                                        <div className="relative z-10">
                                                            <div className="text-orange-200 font-sans font-black text-3xl mb-4 opacity-40">{i + 1}</div>
                                                            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-2">{s.step}</h4>
                                                            <p className="text-white/70 text-[10px] font-medium tracking-tight leading-relaxed">{s.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        <section id="naman-darshan" className="bg-gradient-to-br from-orange-600 to-red-600 rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative group overflow-hidden">
                                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full transform rotate-12 transition-transform group-hover:scale-125 duration-1000" />
                                            <h2 className="text-3xl font-bold mb-10 relative z-10 flex items-center gap-4">
                                                <ShieldCheck className="w-8 h-8 lg:w-10 lg:h-10" /> Benefits of Naman Darshan
                                            </h2>
                                            <div className="space-y-6 mb-12 relative z-10">
                                                {[
                                                    "Trusted pandits and authentic rituals",
                                                    "Temple-level pooja experience",
                                                    "Live/recorded video of pooja",
                                                    "Doorstep prasad delivery"
                                                ].map((benefit, i) => (
                                                    <div key={i} className="flex items-center gap-4 bg-white/20 p-5 rounded-2xl backdrop-blur-xs border border-white/10 hover:bg-white/30 transition-all cursor-default">
                                                        <CheckCircle2 className="w-6 h-6 text-orange-200" />
                                                        <p className="font-bold tracking-tight">{benefit}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex flex-col sm:flex-row gap-5 relative z-10 justify-center">
                                                <Link to="/puja" className="inline-block bg-white text-orange-700 font-bold text-lg px-12 py-4 rounded-full shadow-2xl hover:scale-105 transform transition-all duration-300 text-center active:scale-95">
                                                    Book Puja Online
                                                </Link>
                                                <a href="https://wa.me/919311973199" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-bold text-lg px-12 py-4 rounded-full shadow-2xl hover:scale-105 transform transition-all duration-300 text-center active:scale-95">
                                                    Contact via WhatsApp
                                                </a>
                                            </div>
                                        </section>

                                        <section id="final-thoughts" className="text-center pt-8">
                                            <h2 className="text-4xl font-bold text-slate-900 mb-8 italic tracking-tight">Start with the Right Energy</h2>
                                            <p className="text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto font-medium opacity-80 mb-10">
                                                A home is not just built with bricks—it is built with energy, emotions, and blessings. Ensure your future is filled with growth and success.
                                            </p>
                                            <div className="inline-block bg-stone-900 text-white font-bold px-12 py-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 italic">
                                                "Your complete spiritual beginning starts here. 🙏✨"
                                            </div>
                                        </section>

                                        <section id="faqs" className="pt-20">
                                            <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-4">
                                                <HelpCircle className="w-8 h-8 text-orange-500 bg-orange-100 p-2 rounded-xl" /> Frequently Asked Questions
                                            </h2>
                                            <div className="space-y-6 font-bold text-slate-800">
                                                {[
                                                    { q: "What is Vastu Shanti Puja?", a: "It is a Vedic ritual performed to balance the energies of a house and seek blessings for the occupants." },
                                                    { q: "Can Vastu Shanti be done online?", a: "Yes, platforms like Naman Darshan allow you to book and view the puja remotely while the ritual is conducted by verified pandits." },
                                                    { q: "Is Prasad delivered after the online puja?", a: "Yes, prasad from the ritual is delivered to your doorstep as part of the service." },
                                                    { q: "When is the best time for Griha Pravesh Puja?", a: "It is usually determined by an auspicious 'Muhurat' based on the Hindu calendar and the owner's birth details." }
                                                ].map((faq, i) => (
                                                    <div key={i} className="group p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all hover:bg-orange-50/5 cursor-default group">
                                                        <h3 className="text-lg mb-4 flex items-start gap-2.5 transition-colors group-hover:text-orange-600"><Sparkles className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" /> {faq.q}</h3>
                                                        <p className="text-sm text-slate-500 leading-relaxed font-medium opacity-90">{faq.a}</p>
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
                                <div className="bg-white rounded-3xl shadow-sm p-8 border border-slate-100 group transition-all hover:border-orange-200">
                                    <h3 className="font-bold text-sm text-slate-400 uppercase tracking-[0.2em] mb-6 border-b border-light pb-4">Volume Keywords</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["vastu shanti puja", "griha pravesh", "houSevarming", "online pooja", "vastu vidhi", "vastu devta"].map((k, i) => (
                                            <span key={i} className="text-[10px] px-3 py-1 bg-slate-50 rounded-lg border border-slate-100 font-bold hover:bg-orange-100 hover:text-orange-600 transition-colors cursor-default tracking-tighter">#{k}</span>
                                        ))}
                                    </div>
                                </div>


                                <div className="bg-white rounded-3xl shadow-sm p-8 border border-slate-100 overflow-hidden relative group">
                                    <h3 className="font-bold text-lg mb-8 text-slate-800 border-b pb-4 italic tracking-tight">Recent Insights</h3>
                                    <div className="space-y-5 text-sm font-bold text-slate-500">
                                        <Link to="/blog/satyanarayan-pooja-peace-positivity-guide" className="block hover:text-orange-600 transition-colors border-l-2 border-transparent hover:border-orange-500 pl-3">Satyanarayan Pooja Guide</Link>
                                        <Link to="/blog/april-full-moon-2026-pink-moon-guide" className="block hover:text-orange-600 transition-colors border-l-2 border-transparent hover:border-orange-500 pl-3">April Pink Moon 2026</Link>
                                        <Link to="/blog/chaitra-navratri-2026-dates-muhurat-rituals" className="block hover:text-orange-600 transition-colors border-l-2 border-transparent hover:border-orange-500 pl-3">Chaitra Navratri 2026</Link>
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

export default VastuShantiPujaBlog;
