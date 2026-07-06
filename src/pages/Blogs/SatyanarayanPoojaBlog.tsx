import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, Clock, BookOpen, HelpCircle, Sun, Info, Flower2, Moon, Stars, CheckCircle2, Heart, Sparkles, Home, Search, ClipboardList, Flame, Gift } from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";

const SatyanarayanPoojaBlog = () => {
    const tableOfContents = [
        { id: "introduction", title: "Introduction" },
        { id: "what-is-it", title: "What is Satyanarayan Pooja really about?" },
        { id: "belief", title: "Why do people believe in this pooja?" },
        { id: "katha", title: "The Satyanarayan Katha" },
        { id: "how-to-do", title: "How the Pooja is usually done" },
        { id: "prasad", title: "Prasad – The sweetest part" },
        { id: "best-time", title: "Best time to do the Pooja" },
        { id: "naman-darshan", title: "Satyanarayan Pooja in today's busy life" },
        { id: "final-thoughts", title: "A small thought" },
        { id: "faqs", title: "Frequently Asked Questions" }
    ];

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Satyanarayan Pooja: A Simple Ritual That Brings Peace, Positivity & Blessings",
            "description": "Complete guide to Satyanarayan Pooja. Learn about the katha, puja vidhi at home, and benefits of Lord Vishnu pooja.",
            "keywords": [
                "satyanarayan pooja",
                "satyanarayan katha",
                "satyanarayan puja online",
                "satyanarayan pooja booking",
                "Satyanarayan puja at home"
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
                    "name": "When is the best time for Satyanarayan Pooja?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Purnima (Full Moon) is considered most auspicious, though it can be done for any new beginning."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I do Satyanarayan Pooja at home?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, it is designed to be a simple and accessible ritual that any family can perform with devotion."
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
        <div className="min-h-screen bg-neutral-50">
            <SEO
                title="Satyanarayan Pooja: A Simple Ritual for Peace & Blessings"
                description="Complete guide to Satyanarayan Pooja. Learn about the katha, puja vidhi at home, benefits, and how to book online Satyanarayan puja for peace."
                keywords={[
                    "satyanarayan pooja",
                    "satyanarayan katha",
                    "satyanarayan puja online",
                    "satyanarayan pooja booking",
                    "satyanarayan puja at home",
                    "Hindu rituals for peace",
                    "Lord Vishnu pooja benefits",
                    "Purnima vrat katha"
                ]}
                schemas={schemas}
            />
            <Header />
            <main className="pt-36 md:pt-48 lg:pt-52 pb-12">
                <div className="container mx-auto px-4">
                    <BlogBreadcrumb pageTitle="Satyanarayan Pooja Guide" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Sidebar */}
                        <aside className="lg:col-span-3">
                            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-stone-100">
                                <h3 className="font-bold text-lg mb-4 text-stone-900 border-b pb-3 text-center">In This Guide</h3>
                                <nav className="space-y-1">
                                    {tableOfContents.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className="w-full text-left px-3 py-2 text-sm text-stone-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all flex items-center gap-2"
                                        >
                                            <ChevronRight className="w-3 h-3 text-orange-400" />
                                            {item.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <article className="lg:col-span-6">
                            <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-stone-100">
                                {/* Title */}
                                <div className="p-8 md:p-12 text-center md:text-left">
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-6 leading-tight">
                                        Satyanarayan Pooja: A Simple Ritual That Brings Peace, Positivity & Blessings
                                    </h1>
                                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-5 text-sm text-stone-500 font-medium">
                                        <span className="flex items-center gap-1.5 bg-stone-50 px-3 py-1 rounded-full border border-stone-100 shadow-sm"><Sparkles className="w-4 h-4 text-orange-500" /> Spiritual Guide</span>
                                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-orange-500" /> 7 min read</span>
                                        <span className="flex items-center gap-1.5"><Heart className="w-4 h-4 text-red-500" /> Family Tradition</span>
                                    </div>
                                </div>

                                {/* Banner */}
                                <div className="relative group overflow-hidden mx-8 mb-8 rounded-2xl shadow-2xl">
                                    <img 
                                        src="/assets/SatyanarayanPoojaBlog.png" 
                                        alt="Satyanarayan Pooja Ritual" 
                                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000" 
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-orange-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
                                            Vedic Rituals
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 md:p-12 space-y-12 text-lg leading-relaxed text-stone-700">
                                    <section id="introduction">
                                        <p className="text-xl font-medium text-stone-800 italic border-l-4 border-orange-500 pl-8 py-2 bg-stone-50 rounded-r-2xl shadow-sm">
                                            "It’s not just a ritual, it’s more like a moment where the whole family sits together, prays together, and feels connected."
                                        </p>
                                        <div className="space-y-6 pt-10">
                                            <p>
                                                In many Indian homes, there’s one pooja that almost every family has performed at least once — <strong>Satyanarayan Pooja</strong>. Dedicated to Lord Satyanarayan (a form of Lord Vishnu), this pooja is known for bringing peace, prosperity, and a sense of calm into life.
                                            </p>
                                            <p>
                                                People usually perform it when something new is starting or when they simply want to thank God for what they have.
                                            </p>
                                        </div>
                                    </section>

                                    <hr className="border-stone-100" />

                                    <section id="what-is-it" className="space-y-6">
                                        <h2 className="text-3xl font-display font-bold text-stone-900 mb-8 flex items-center gap-4">
                                            <Heart className="w-8 h-8 text-orange-500 bg-orange-100 p-2 rounded-xl" /> What is Satyanarayan Pooja really about?
                                        </h2>
                                        <p className="font-semibold text-lg text-stone-900 italic">"At its core, this pooja is about truth (satya), faith, and gratitude."</p>
                                        <p>
                                            It’s not complicated or restricted to priests or big ceremonies. Even a simple setup at home with genuine devotion is enough. That’s the beauty of it — it’s accessible to everyone.
                                        </p>
                                        <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100/50 shadow-inner">
                                            <h4 className="font-bold text-orange-900 mb-4 tracking-tight">Common occasions for this pooja:</h4>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {[
                                                    "After shifting to a new house (Griha Pravesh)",
                                                    "During weddings or anniversaries",
                                                    "Before starting a new business or job",
                                                    "On Purnima (full moon day)",
                                                    "When you feel like you need divine blessings"
                                                ].map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-stone-700 bg-white/50 p-2 rounded-lg text-sm border border-orange-200/20">
                                                        <CheckCircle2 className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="belief" className="space-y-6">
                                        <h2 className="text-3xl font-display font-bold text-stone-900 mb-8 flex items-center gap-4">
                                            <Sparkles className="w-8 h-8 text-orange-500 bg-orange-100 p-2 rounded-xl" /> Why do people believe in this pooja?
                                        </h2>
                                        <p>
                                            If you ask someone who has done this pooja, they’ll rarely talk about rules or rituals first. They’ll say something like: <strong>“After the pooja, things just felt better.”</strong> And that’s what makes it special.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                            {[
                                                { title: "Obstacle Removal", desc: "Removes obstacles slowly but surely." },
                                                { title: "Domestic Peace", desc: "Brings peace into the home." },
                                                { title: "Improved Relations", desc: "Enhances family relationships." },
                                                { title: "Life Alignment", desc: "Helps things fall into place." }
                                            ].map((benefit, i) => (
                                                <div key={i} className="p-6 bg-stone-50 border border-stone-200 rounded-2xl transition-all hover:shadow-lg hover:border-orange-200 hover:bg-white group cursor-default">
                                                    <span className="block font-bold text-stone-900 mb-2 group-hover:text-orange-600 transition-colors">{benefit.title}</span>
                                                    <p className="text-sm text-stone-600 leading-relaxed font-medium">{benefit.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-center font-bold text-stone-400 italic mt-6 uppercase tracking-wider text-xs">
                                            "It’s less about 'instant miracles' and more about creating a positive environment."
                                        </p>
                                    </section>

                                    <section id="katha" className="bg-stone-900 text-white rounded-3xl p-10 relative overflow-hidden shadow-2xl group">
                                        <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-80 h-80 bg-orange-500 opacity-20 rounded-full blur-3xl transform group-hover:scale-125 transition-transform duration-700" />
                                        <h2 className="text-3xl font-display font-bold mb-8 relative z-10 flex items-center gap-4 border-b border-stone-800 pb-6">
                                            <BookOpen className="w-8 h-8 text-orange-400" /> The Satyanarayan Katha – More than just a story
                                        </h2>
                                        <div className="space-y-6 relative z-10 font-medium opacity-90 leading-relaxed">
                                            <p>
                                                One of the most meaningful parts of the pooja is listening to the Satyanarayan Katha. It’s not just a religious story — it’s full of simple life lessons:
                                            </p>
                                            <ul className="space-y-4 text-orange-100 font-bold italic">
                                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full" /> Keep your promises</li>
                                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full" /> Stay honest</li>
                                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full" /> Don’t forget gratitude when things go well</li>
                                            </ul>
                                            <p className="text-sm border-t border-stone-800 pt-6">Many people relate to the stories because they feel very real and practical.</p>
                                        </div>
                                    </section>

                                    <section id="how-to-do">
                                        <h2 className="text-3xl font-display font-bold text-stone-900 mb-10 flex items-center gap-4">
                                            <Home className="w-8 h-8 text-orange-500 bg-orange-100 p-2 rounded-xl" /> How the Pooja is usually done
                                        </h2>
                                        <div className="space-y-4">
                                            {[
                                                "Clean a small space and set up Lord Satyanarayan’s image",
                                                "Light a diya and agarbatti",
                                                "Offer fruits, flowers, and tulsi",
                                                "Prepare prasad (usually sheera/halwa)",
                                                "Listen to the katha",
                                                "Do aarti",
                                                "Distribute prasad"
                                            ].map((step, i) => (
                                                <div key={i} className="flex gap-4 items-center p-4 bg-white border border-stone-100 rounded-2xl shadow-sm hover:translate-x-2 transition-transform cursor-default">
                                                    <div className="bg-stone-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-md">{i + 1}</div>
                                                    <p className="text-stone-800 font-bold">{step}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-center italic mt-10 text-stone-500 font-medium">Simple, peaceful, and meaningful.</p>
                                    </section>

                                    <section id="prasad" className="bg-gradient-to-br from-orange-100 to-yellow-50 rounded-3xl p-10 border border-orange-200/50 shadow-inner group">
                                        <h2 className="text-3xl font-display font-bold text-stone-900 mb-8 flex items-center gap-4 group-hover:scale-105 transition-transform origin-left">
                                            <Flower2 className="w-8 h-8 text-orange-600" /> Prasad – The sweetest part
                                        </h2>
                                        <div className="space-y-6 text-stone-800 font-medium">
                                            <p>Let’s be honest — everyone waits for the prasad! The traditional prasad is <strong>suji halwa (sheera)</strong>, and somehow it always tastes different when it’s part of a pooja.</p>
                                            <div className="bg-white/60 p-6 rounded-2xl border border-white shadow-sm italic leading-relaxed">
                                                "But beyond taste, it represents something important — sharing blessings with everyone around you."
                                            </div>
                                        </div>
                                    </section>

                                    <section id="best-time">
                                        <h2 className="text-3xl font-display font-bold text-stone-900 mb-10 flex items-center gap-4">
                                            <Calendar className="w-8 h-8 text-orange-500 bg-orange-100 p-2 rounded-xl" /> Best time to do Satyanarayan Pooja?
                                        </h2>
                                        <p className="mb-8">There’s no strict rule, but many people prefer:</p>
                                        <div className="flex flex-wrap gap-4 justify-center font-bold text-stone-800">
                                            <span className="px-6 py-3 bg-stone-100 rounded-2xl border-stone-200 border shadow-sm">Purnima (Full Moon day)</span>
                                            <span className="px-6 py-3 bg-stone-100 rounded-2xl border-stone-200 border shadow-sm">Special family occasions</span>
                                            <span className="px-6 py-3 bg-stone-100 rounded-2xl border-stone-200 border shadow-sm">Any new beginning</span>
                                        </div>
                                        <p className="text-center text-sm text-stone-500 mt-10 bg-white p-4 rounded-xl shadow-inner italic">Evening time is usually chosen because everyone is available and the environment feels calmer.</p>
                                    </section>

                                    <section id="naman-darshan" className="bg-gradient-to-br from-orange-600 to-red-700 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full blur-2xl transform group-hover:scale-150 duration-1000" />
                                        <h2 className="text-3xl font-display font-bold mb-10 relative z-10 flex items-center gap-4">
                                            <Sparkles className="w-8 h-8" /> Satyanarayan Pooja Today
                                        </h2>
                                        <p className="mb-10 text-lg relative z-10 italic leading-relaxed font-light opacity-90">
                                            "Let’s be practical — not everyone has the time to arrange everything. That’s where platforms like Naman Darshan come in."
                                        </p>
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
                                                        <div className="text-orange-200 font-sans font-black text-3xl mb-4 opacity-40">{i+1}</div>
                                                        <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-2">{s.step}</h4>
                                                        <p className="text-white/70 text-[10px] font-medium tracking-tight leading-relaxed">{s.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-5 relative z-10 justify-center">
                                            <Link to="/puja" className="inline-block bg-white text-orange-700 font-bold text-lg px-12 py-4 rounded-full shadow-2xl hover:bg-orange-50 transform hover:-translate-y-2 transition-all duration-300 text-center">
                                                Book Your Pooja
                                            </Link>
                                            <a href="https://wa.me/919311973199" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-bold text-lg px-12 py-4 rounded-full shadow-2xl hover:bg-green-600 transform hover:-translate-y-2 transition-all duration-300 text-center">
                                                Connect on WhatsApp
                                            </a>
                                        </div>
                                    </section>

                                    <section id="final-thoughts" className="text-center space-y-8">
                                        <h2 className="text-4xl font-display font-medium italic text-stone-900 border-b border-stone-100 pb-8">A Time for Gratitude & Connection</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-bold text-stone-700 italic">
                                            <p className="p-6 bg-stone-50 rounded-2xl shadow-sm border border-stone-100">“घर में शांति लग रही है”</p>
                                            <p className="p-6 bg-stone-50 rounded-2xl shadow-sm border border-stone-100">“मन हल्का लग रहा है”</p>
                                            <p className="p-6 bg-stone-50 rounded-2xl shadow-sm border border-stone-100">“कुछ अच्छा होने वाला है”</p>
                                        </div>
                                        <p className="text-xl leading-relaxed text-stone-700 max-w-2xl mx-auto font-light">
                                            Satyanarayan Pooja isn’t about perfection. It’s about intention, faith, and being present. Even if you do it in the simplest way, it still holds value.
                                        </p>
                                        <div className="inline-block bg-orange-50 text-orange-700 font-bold px-10 py-5 rounded-3xl border border-orange-200 shadow-inner transform hover:scale-105 transition-transform duration-500 italic">
                                            "What matters is your devotion, not how grand the setup is. 🙏✨"
                                        </div>
                                    </section>

                                    <section id="faqs" className="pt-10">
                                        <h2 className="text-3xl font-display font-bold text-stone-900 mb-10 flex items-center gap-4">
                                            <HelpCircle className="w-8 h-8 text-orange-500 bg-orange-100 p-2 rounded-xl" /> Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-6 font-bold text-stone-800">
                                            {[
                                                { q: "What is the importance of Satyanarayan Pooja?", a: "It is a ritual dedicated to truth and gratitude, believed to bring peace and harmony to a household." },
                                                { q: "Is the Satyanarayan Katha necessary?", a: "Yes, the Katha contains essential life lessons and is considered the core spiritual component of the pooja." },
                                                { q: "What should be offered as Prasad?", a: "Traditional 'sheera' or suji halwa is usually prepared and shared among everyone present." },
                                                { q: "Can we do Satyanarayan Pooja online?", a: "Yes, modern platforms like Naman Darshan provide online booking with specialized pandits conducting the ritual for you." }
                                            ].map((faq, i) => (
                                                <div key={i} className="group p-8 bg-white border border-stone-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-orange-100 transition-all hover:bg-orange-50/20">
                                                    <h3 className="text-lg mb-3 flex items-start gap-2"><Sparkles className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" /> {faq.q}</h3>
                                                    <p className="text-sm text-stone-600 leading-relaxed font-medium">{faq.a}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </article>

                        {/* Right Sidebar */}
                        <aside className="lg:col-span-3">
                            <div className="space-y-8 sticky top-40 md:top-48 lg:top-52 ">
                                <div className="bg-stone-900 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden group border border-stone-800">
                                    <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-orange-500 opacity-20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                    <h3 className="font-bold text-lg mb-6 tracking-tight relative z-10 border-b border-stone-800 pb-4">Key Keywords</h3>
                                    <div className="flex flex-wrap gap-2 relative z-10">
                                        {["satyanarayan pooja", "satyanarayan katha", "puja online", "puja at home", "vrat katha", "sheera prasad"].map((kw, i) => (
                                            <span key={i} className="text-[10px] px-3 py-1 bg-stone-800 border border-stone-700 rounded-full font-bold uppercase tracking-wider group-hover:text-orange-400 transition-colors">{kw}</span>
                                        ))}
                                    </div>
                                </div>


                                <div className="bg-white rounded-2xl shadow-sm p-8 border border-stone-100">
                                    <h3 className="font-bold text-lg mb-6 border-b pb-4 text-stone-900 tracking-tight italic">Popular Reads</h3>
                                    <div className="space-y-4 text-sm font-bold text-stone-600 leading-snug">
                                        <Link to="/blog/april-full-moon-2026-pink-moon-guide" className="block hover:text-orange-600 transition-colors border-l-2 border-transparent hover:border-orange-500 pl-3">April Pink Moon 2026 Guide</Link>
                                        <Link to="/blog/chaitra-navratri-2026-dates-muhurat-rituals" className="block hover:text-orange-600 transition-colors border-l-2 border-transparent hover:border-orange-500 pl-3">Chaitra Navratri 2026</Link>
                                        <Link to="/blog/hanuman-jayanti-2026-date-puja-rituals" className="block hover:text-orange-600 transition-colors border-l-2 border-transparent hover:border-orange-500 pl-3">Hanuman Jayanti 2026</Link>
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

export default SatyanarayanPoojaBlog;
