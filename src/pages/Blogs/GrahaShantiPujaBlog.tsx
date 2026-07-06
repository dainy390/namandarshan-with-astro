import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, Clock, BookOpen, HelpCircle, Sun, Info, Flower2, Moon, Stars, CheckCircle2, Heart, Sparkles, Home, ShieldCheck, MapPin, Zap, Search, ClipboardList, Flame, Gift } from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";

const GrahaShantiPujaBlog = () => {
    const tableOfContents = [
        { id: "introduction", title: "Introduction" },
        { id: "what-is-it", title: "What is Graha Shanti Puja?" },
        { id: "when-to-perform", title: "When Should You Perform It?" },
        { id: "vidhi", title: "Graha Shanti Puja Vidhi" },
        { id: "benefits", title: "Benefits of the Puja" },
        { id: "combine-darshan", title: "Combine with Temple Darshan" },
        { id: "book-online", title: "Book Graha Shanti Puja Online" },
        { id: "final-thoughts", title: "Align Your Life with Positive Energy" },
        { id: "faqs", title: "Frequently Asked Questions" }
    ];

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Graha Shanti Puja: Balance Planetary Energies & Bring Peace, Prosperity into Your Life",
            "description": "Complete guide to Graha Shanti Puja. Learn about the rituals, timing, benefits, and how to book online Graha Shanti puja for planetary balance.",
            "keywords": [
                "graha shanti puja",
                "navagraha puja",
                "graha shanti puja benefits",
                "graha dosh puja",
                "online graha shanti puja booking"
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
                    "name": "What is Graha Shanti Puja?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Graha Shanti Puja is a Vedic ritual performed to balance the influence of the nine planets (Navagraha) in an individual's horoscope."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why is Graha Shanti Puja important?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It helps in neutralizing negative planetary influences and strengthening positive energies, leading to peace, success, and harmony."
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
        <div className="min-h-screen bg-stone-50">
            <SEO
                title="Graha Shanti Puja Guide: Balance Your Planetary Energies"
                description="Complete guide to Graha Shanti Puja (Navagraha Puja). Learn about its benefits, ritual steps (vidhi), and how to book online planetary balance rituals."
                keywords={[
                    "graha shanti puja",
                    "navagraha puja",
                    "graha shanti puja benefits",
                    "graha dosh puja",
                    "online graha shanti puja booking",
                    "navagraha shanti puja vidhi",
                    "astrological remedies india"
                ]}
                schemas={schemas}
            />
            <Header />
            <main className="pt-36 md:pt-48 lg:pt-52 pb-12 font-display">
                <div className="container mx-auto px-4">
                    <BlogBreadcrumb pageTitle="Graha Shanti Puja Guide" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Sidebar - Navigation */}
                        <aside className="lg:col-span-3">
                            <div className="bg-white rounded-3xl shadow-sm p-8 sticky top-40 md:top-48 lg:top-52 border border-stone-200/50">
                                <h3 className="font-bold text-xl mb-6 text-stone-900 border-b pb-4 text-center tracking-tight">Puja Sections</h3>
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

                        {/* Main Content */}
                        <article className="lg:col-span-6">
                            <div className="bg-white rounded-[2.5rem] shadow-sm overflow-hidden border border-stone-100">
                                {/* Title Section */}
                                <div className="p-8 md:p-14 lg:p-16 border-b border-stone-50">
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-8 leading-[1.1] tracking-tight">
                                        Graha Shanti Puja: Balance Planetary Energies & Bring Peace, Prosperity into Your Life
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-stone-500 uppercase tracking-widest">
                                        <div className="flex items-center gap-2 bg-stone-900 text-white px-4 py-2 rounded-full">
                                            <Stars className="w-4 h-4 text-orange-400" /> Astrological Rituals
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-4 h-4 text-orange-500" /> 9 min read
                                        </div>
                                    </div>
                                </div>

                                {/* Main Banner Image */}
                                <div className="mx-8 md:mx-14 lg:mx-16 mb-12 rounded-[2rem] overflow-hidden shadow-2xl group relative">
                                    <img 
                                        src="/assets/GrahaShantiPujaBlog.png" 
                                        alt="Navagraha Shanti Puja Ritual" 
                                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="p-8 md:p-14 lg:p-16 pt-0 space-y-12 text-lg leading-relaxed text-stone-700">
                                    <section id="introduction">
                                        <p className="text-xl font-medium text-stone-800 italic border-l-4 border-orange-500 pl-8 py-3 bg-stone-50 rounded-r-3xl">
                                            "There are times in life when things just don’t go as planned... obstacles keep coming back. In many such situations, people turn towards Graha Shanti Puja to restore balance."
                                        </p>
                                        <div className="space-y-6 pt-10">
                                            <p>
                                                This sacred ritual is performed to reduce the negative effects of planets (grahas) and invite peace, success, and harmony into life.
                                            </p>
                                            <p>
                                                Today, with platforms like <strong>Naman Darshan</strong>, you can even book Graha Shanti Puja online along with temple darshan, making it easier than ever to stay spiritually connected.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="what-is-it" className="bg-stone-50 p-10 rounded-[2.5rem] border border-stone-200/50">
                                        <h2 className="text-3xl font-bold text-stone-900 mb-8 flex items-center gap-4">
                                            <Zap className="w-8 h-8 text-orange-600" /> What is Graha Shanti Puja?
                                        </h2>
                                        <p className="mb-8">
                                            Graha Shanti Puja is a powerful Vedic ritual performed to calm and balance the influence of the nine planets (Navagraha) in your horoscope.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 font-bold text-stone-800">
                                            {[
                                                "Sun (Surya)", "Moon (Chandra)", "Mars (Mangal)", "Mercury (Budh)",
                                                "Jupiter (Guru)", "Venus (Shukra)", "Saturn (Shani)", "Rahu & Ketu"
                                            ].map((planet, i) => (
                                                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-stone-100 shadow-sm">
                                                    <div className="w-2 h-2 bg-orange-400 rounded-full" />
                                                    {planet}
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-sm text-stone-500 italic px-6 border-l-2 border-stone-300">
                                            When planetary positions are unfavorable, it can lead to financial struggles, health issues, and relationship problems. This puja helps in neutralizing these negative effects.
                                        </p>
                                    </section>

                                    <section id="when-to-perform">
                                        <h2 className="text-3xl font-bold text-stone-900 mb-8 flex items-center gap-4">
                                            <Calendar className="w-8 h-8 text-orange-500 bg-orange-100 p-2 rounded-xl" /> When Should You Perform It?
                                        </h2>
                                        <div className="space-y-4">
                                            {[
                                                "During difficult planetary periods (Dasha/Antardasha)",
                                                "When facing repeated failures or obstacles",
                                                "Before marriage or important life decisions",
                                                "During Griha Pravesh or new beginnings",
                                                "When advised by an astrologer"
                                            ].map((reason, idx) => (
                                                <div key={idx} className="flex items-center gap-4 bg-white border border-stone-100 p-5 rounded-3xl group hover:border-orange-200 transition-colors cursor-default">
                                                    <CheckCircle2 className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" />
                                                    <span className="font-bold text-stone-800">{reason}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="vidhi" className="bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden group shadow-2xl">
                                        <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-80 h-80 bg-orange-500 opacity-20 rounded-full blur-3xl transform group-hover:scale-125 transition-transform duration-700" />
                                        <h2 className="text-3xl font-bold mb-10 relative z-10 flex items-center gap-4 border-b border-slate-800 pb-6">
                                            <BookOpen className="w-8 h-8 text-orange-400" /> Graha Shanti Puja Vidhi
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                                            {[
                                                "Ganesh Puja (Removal of Obstacles)",
                                                "Navagraha Invocation",
                                                "Vedic Mantra Chanting",
                                                "Offerings of Sacred Items",
                                                "Sacred Havan Ritual",
                                                "Aarti & Prasad Distribution"
                                            ].map((step, i) => (
                                                <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                                    <div className="text-orange-400 font-black text-xs">0{i+1}</div>
                                                    <p className="text-xs font-bold tracking-wider uppercase">{step}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="mt-10 font-bold text-orange-200 text-sm italic py-4 border-t border-slate-800">
                                            "The Navagraha mantra chanting is the most important part, as it directly influences planetary energies."
                                        </p>
                                    </section>

                                    <section id="benefits">
                                        <h2 className="text-3xl font-bold text-stone-900 mb-10 flex items-center gap-4">
                                            <Heart className="w-8 h-8 text-red-500 bg-red-50 p-2 rounded-xl" /> Benefits of the Puja
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {[
                                                { title: "Obstacle Removal", desc: "Significant reduction in life obstacles and repeated failures." },
                                                { title: "Career Growth", desc: "Noticeable improvement in career trajectory and financial stability." },
                                                { title: "Mental Clarity", desc: "Enhanced mental peace, clarity, and reduced stress levels." },
                                                { title: "Relationship Harmony", desc: "Stronger bonds and improved understanding in relationships." }
                                            ].map((item, i) => (
                                                <div key={i} className="p-8 bg-stone-50 border border-stone-200 rounded-3xl hover:bg-white hover:shadow-xl transition-all group">
                                                    <h4 className="font-bold text-lg mb-2 text-stone-900 group-hover:text-orange-600 transition-colors">{item.title}</h4>
                                                    <p className="text-sm text-stone-600 font-medium leading-relaxed">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="combine-darshan" className="bg-gradient-to-br from-orange-100 to-amber-50 rounded-[2.5rem] p-10 border border-orange-200/50 shadow-inner group">
                                        <h2 className="text-3xl font-bold text-stone-900 mb-8 flex items-center gap-4 group-hover:scale-105 transition-transform origin-left">
                                            <Flower2 className="w-8 h-8 text-orange-600" /> Combine with Temple Darshan
                                        </h2>
                                        <div className="space-y-6 text-stone-800 font-medium">
                                            <p>Combining Graha Shanti Puja with temple darshan and chadhava enhances its impact. With Naman Darshan, this becomes a complete spiritual solution.</p>
                                            <div className="bg-white/60 p-6 rounded-3xl border border-white shadow-sm space-y-4">
                                                {[
                                                    "Book Puja Online from home",
                                                    "Get Darshan at sacred temples",
                                                    "Offer Chadhava in your name & gotra",
                                                    "Receive Video Proof & Prasad Delivery"
                                                ].map((text, i) => (
                                                    <div key={i} className="flex items-center gap-3 font-bold text-sm">
                                                        <ChevronRight className="w-4 h-4 text-orange-500" />
                                                        {text}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </section>

                                    <section id="book-online" className="bg-gradient-to-br from-orange-600 to-red-700 rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full blur-2xl transform group-hover:scale-150 duration-1000" />
                                        <h2 className="text-3xl font-bold mb-10 relative z-10 flex items-center gap-4">
                                            <ShieldCheck className="w-8 h-8" /> Book Graha Shanti Online
                                        </h2>
                                        <p className="mb-12 text-lg relative z-10 font-bold opacity-90 leading-relaxed max-w-lg italic">
                                            "Align your life with positive cosmic energy from anywhere in India or abroad."
                                        </p>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 relative z-10 mb-14 text-center transition-all">
                                            {[
                                                { step: "Selection", desc: "Choose Puja", icon: Search },
                                                { step: "Details", desc: "Name & Gotra", icon: ClipboardList },
                                                { step: "Ritual", desc: "Vedic Chanting", icon: Flame },
                                                { step: "Delivery", desc: "Video + Prasad", icon: Gift }
                                            ].map((s, i) => (
                                                <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-[2rem] border border-white/10 shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group/card relative overflow-hidden">
                                                    <div className="absolute -top-2 -right-2 p-4 opacity-10 group-hover/card:opacity-30 transition-all transform group-hover/card:scale-110 group-hover/card:rotate-12">
                                                        <s.icon className="w-16 h-16 text-white" />
                                                    </div>
                                                    <div className="relative z-10">
                                                        <div className="text-orange-200 font-display font-black text-3xl mb-4 opacity-40">{i+1}</div>
                                                        <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-2">{s.step}</h4>
                                                        <p className="text-white/70 text-[10px] font-medium tracking-tight leading-relaxed">{s.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-5 relative z-10 justify-center">
                                            <Link to="/puja" className="inline-block bg-white text-orange-700 font-bold text-lg px-12 py-5 rounded-full shadow-2xl hover:scale-105 transform transition-all duration-300 text-center active:scale-95">
                                                Select Your Puja
                                            </Link>
                                            <a href="https://wa.me/919311973199" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-bold text-lg px-12 py-5 rounded-full shadow-2xl hover:scale-105 transform transition-all duration-300 text-center active:scale-95">
                                                Consult on WhatsApp
                                            </a>
                                        </div>
                                    </section>

                                    <section id="final-thoughts" className="text-center space-y-8 py-10">
                                        <h2 className="text-4xl font-bold text-stone-900 tracking-tight italic border-b border-stone-100 pb-10 max-w-xl mx-auto">Align Your Life with Positive Energy</h2>
                                        <p className="text-xl leading-relaxed text-stone-600 max-w-2xl mx-auto font-medium opacity-80 italic">
                                            Graha Shanti Puja is not just about rituals—it’s about restoring balance, finding peace, and inviting positivity into your unique spiritual journey.
                                        </p>
                                        <div className="inline-block bg-orange-50 text-orange-700 font-bold px-12 py-6 rounded-[2rem] border-2 border-orange-100 shadow-inner transform hover:scale-105 transition-transform duration-500">
                                            "Inviting complete well-being through Vedic connection. 🙏✨"
                                        </div>
                                    </section>

                                    <section id="faqs" className="pt-20">
                                        <h2 className="text-3xl font-bold text-stone-900 mb-12 flex items-center gap-4">
                                            <HelpCircle className="w-8 h-8 text-orange-500 bg-orange-100 p-2 rounded-xl" /> Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-6 font-bold text-stone-800">
                                            {[
                                                { q: "What are the common signs I need Graha Shanti Puja?", a: "Constant obstacles, repeated failures in career, sudden financial loss, or chronic health issues are often interpreted as signs of planetary imbalance." },
                                                { q: "How long does a Graha Shanti Puja ritual take?", a: "A standard Vedic ritual usually takes between 3 to 5 hours, depending on the number of planets being addressed." },
                                                { q: "Is it mandatory to be physically present?", a: "No, through Naman Darshan, you can perform it remotely. Verified pandits conduct the ritual while you join via video." },
                                                { q: "What is Navagraha Shanti?", a: "It is a specialized ritual targeting all nine planets to ensure none of their influences are purely negative." }
                                            ].map((faq, i) => (
                                                <div key={i} className="group p-10 bg-white border border-stone-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all hover:bg-orange-50/5 cursor-default">
                                                    <h3 className="text-lg mb-4 flex items-start gap-4 transition-colors group-hover:text-orange-600 uppercase tracking-tight italic"><Sparkles className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" /> {faq.q}</h3>
                                                    <p className="text-sm text-stone-500 leading-relaxed font-bold opacity-80 pl-9">{faq.a}</p>
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
                                <div className="bg-stone-900 rounded-[2.5rem] shadow-2xl p-10 text-white relative group border-4 border-white">
                                    <h3 className="font-bold text-sm text-orange-400 uppercase tracking-[0.3em] mb-8 border-b border-stone-800 pb-4 italic">High Volume</h3>
                                    <div className="flex flex-wrap gap-2.5">
                                        {["navagraha puja", "graha shanti", "puja online", "planetary balance", "vedic mantra", "dosh nivaran"].map((k, i) => (
                                            <span key={i} className="text-[10px] px-4 py-2 bg-white/5 border border-white/10 rounded-xl font-bold uppercase tracking-wider hover:bg-white/10 transition-colors cursor-default">#{k}</span>
                                        ))}
                                    </div>
                                </div>


                                <div className="bg-white rounded-3xl shadow-sm p-8 border border-stone-100 relative group overflow-hidden">
                                    <h3 className="font-bold text-lg mb-8 text-stone-900 border-b pb-4 italic tracking-tight relative z-10">Popular Guides</h3>
                                    <div className="space-y-5 text-sm font-bold text-stone-500 relative z-10">
                                        <Link to="/blog/vastu-shanti-puja-new-home-guide" className="block hover:text-orange-600 transition-colors border-l-2 border-transparent hover:border-orange-500 pl-3">Vastu Shanti Puja Guide</Link>
                                        <Link to="/blog/satyanarayan-pooja-peace-positivity-guide" className="block hover:text-orange-600 transition-colors border-l-2 border-transparent hover:border-orange-500 pl-3">Satyanarayan Pooja Tips</Link>
                                        <Link to="/blog/april-full-moon-2026-pink-moon-guide" className="block hover:text-orange-600 transition-colors border-l-2 border-transparent hover:border-orange-500 pl-3">April Pink Moon 2026</Link>
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

export default GrahaShantiPujaBlog;
