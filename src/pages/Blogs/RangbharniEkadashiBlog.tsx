import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, MapPin, HeartHandshake, Smile, CheckCircle, Clock, Info, Flower } from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { Helmet } from "react-helmet-async";
import CommentSection from "@/components/common/CommentSection";
import BookingModal from "@/components/booking/BookingModal";
import { useState } from "react";

const RangbharniEkadashiBlog = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const festivalSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Rangbharni Ekadashi Vrindavan 2026 Darshan Travel Guide",
        "description": "Complete guide for Rangbharni Ekadashi in Vrindavan including temple darshan tips, travel planning, routes, timing, and crowd advice for a smooth Braj Holi experience.",
        "keywords": [
            "Rangbharni Ekadashi Vrindavan",
            "Vrindavan Holi 2026",
            "Banke Bihari Holi",
            "Vrindavan temple darshan",
            "Braj Holi festival",
            "Holi in Vrindavan",
            "Mathura Holi celebration",
            "Braj pilgrimage guide"
        ],
        "datePublished": "2026-01-01",
        "eventDate": "2026-02-27",
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
            "name": "Rangbharni Ekadashi Vrindavan 2026",
            "startDate": "2026-02-27",
            "location": {
                "@type": "Place",
                "name": "Vrindavan, Mathura, Uttar Pradesh, India"
            }
        }
    };

    const tableOfContents = [
        { id: "intro", title: "Rangbharni Ekadashi" },
        { id: "what-is-it", title: "What is Rangbharni Ekadashi?" },
        { id: "where-it-happens", title: "Where the Main Celebration Happens" },
        { id: "spiritually-special", title: "Why It is Spiritually Special" },
        { id: "crowd-reality", title: "The Crowd Reality in Vrindavan" },
        { id: "how-naman-assists", title: "How Naman Darshan Assists" },
        { id: "travel-info", title: "Travel Information" },
        { id: "completing-journey", title: "Completing Your Braj Holi Journey" },
        { id: "faqs", title: "FAQs" }
    ];

    const recentPosts = [
        { title: "Nandgaon Lathmar Holi 2026", link: "/blog/nandgaon-lathmar-holi-2026-darshan-guide" },
        { title: "Lathmar Holi in Barsana", link: "/blog/lathmar-holi-barsana-2026-darshan-guide" },
        { title: "Laddu Mar Holi in Barsana", link: "/blog/laddu-mar-holi-barsana-guide" }
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <SEO
                title="Rangbharni Ekadashi Vrindavan 2026 Darshan Travel Guide"
                description="Plan your visit to Rangbharni Ekadashi 2026 in Vrindavan with this complete darshan and travel guide. Know temple timings, crowd tips, routes, and festival insights to attend Banke Bihari Holi celebrations smoothly and experience Braj's most colourful devotional event with proper preparation."
                keywords="Rangbharni Ekadashi Vrindavan, Vrindavan Holi 2026, Banke Bihari Holi, Vrindavan temple darshan, Braj Holi festival, Holi in Vrindavan, Mathura Holi celebration, Braj pilgrimage guide"
                image="/assets/blog9.jpg"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(festivalSchema)}
                </script>
            </Helmet>
            <Header />

            <main className="flex-grow pt-36 md:pt-48 lg:pt-52 pb-16">
                <div className="container mx-auto px-4">
                    {/* Breadcrumbs & Share */}
                    <BlogBreadcrumb pageTitle="Rangbharni Ekadashi Vrindavan" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Sidebar - Table of Contents */}
                        <aside className="lg:col-span-3 hidden lg:block">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-slate-100">
                                <h3 className="font-bold text-lg mb-4 text-slate-900 border-b pb-3">Table of Contents</h3>
                                <nav className="space-y-2">
                                    {tableOfContents.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors flex items-center gap-2"
                                        >
                                            <ChevronRight className="w-3 h-3 text-stone-500" />
                                            {item.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <article className="lg:col-span-6">
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100 mb-8">
                                <div className="p-8 md:p-10">
                                    <div className="flex flex-wrap items-center gap-4 mb-6">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold">
                                            <Calendar className="w-4 h-4" />
                                            <span>27 February 2026</span>
                                        </div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold">
                                            <MapPin className="w-4 h-4" />
                                            <span>Vrindavan, Mathura</span>
                                        </div>
                                    </div>
                                    <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4 leading-tight">
                                        Rangbharni Ekadashi in Vrindavan
                                    </h1>
                                    <h2 className="text-xl md:text-2xl text-slate-600 mb-6 font-medium">
                                        The Day Krishna Steps Out to Play Holi – Temple Darshan & Festival Planning Guide
                                    </h2>
                                    <div className="flex items-center gap-4 text-sm text-slate-500">
                                        <span>By Naman Darshan</span>
                                        <span>•</span>
                                        <span>12 min read</span>
                                    </div>
                                </div>

                                <div className="w-full h-auto">
                                    <img
                                        src="/assets/blog9.jpg"
                                        alt="Rangbharni Ekadashi in Vrindavan"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>

                                <div className="p-8 md:p-10 text-lg leading-relaxed text-slate-700 space-y-8">
                                    <p id="intro" className="font-medium text-xl text-slate-800 border-l-4 border-orange-500 pl-6 italic bg-orange-50 py-4 rounded-r-xl">
                                        If Barsana and Nandgaon represent tradition, <strong>Rangbharni Ekadashi in Vrindavan on 27 February</strong> represents emotion.
                                    </p>

                                    <p>
                                        This is the day when, according to Braj belief, Lord Krishna symbolically comes out to play Holi with devotees. The streets of Vrindavan transform into a sea of colours, devotion, music, and movement.
                                    </p>
                                    <p className="font-bold text-slate-800">
                                        For pilgrims visiting during Braj Holi week, Rangbharni Ekadashi is one of the most visually powerful and spiritually charged days and proper temple darshan planning becomes essential due to overwhelming crowds.
                                    </p>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="what-is-it">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">What is Rangbharni Ekadashi?</h2>
                                        <p className="mb-4">
                                            Rangbharni Ekadashi falls during the Holi period in the sacred town of Vrindavan, associated with the childhood pastimes of <strong>Krishna</strong>.
                                        </p>
                                        <p className="mb-4 font-bold text-slate-800">On this day:</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                                            <li>Deities are brought out in special processions</li>
                                            <li>Dry gulal fills temple courtyards</li>
                                            <li>Devotees play Holi in a devotional manner</li>
                                            <li>Streets near temples overflow with pilgrims</li>
                                        </ul>
                                        <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 mb-8">
                                            <p className="mb-0 text-slate-800 font-medium">
                                                Unlike the stick-based Lathmar Holi, Rangbharni Ekadashi is about colour — clouds of pink, red, and yellow filling the air across Vrindavan.
                                            </p>
                                        </div>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="where-it-happens">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-3">
                                            <MapPin className="w-8 h-8 text-orange-500" /> Where the Main Celebration Happens
                                        </h2>

                                        <div className="my-8">
                                            <img
                                                src="/assets/blog10.jpg"
                                                alt="Banke Bihari Temple Celebration"
                                                className="w-full h-auto rounded-xl shadow-md object-cover"
                                            />
                                        </div>

                                        <p className="mb-4">
                                            The heart of Rangbharni Ekadashi in Vrindavan is around major Krishna temples, especially the famous <strong>Banke Bihari Temple</strong>.
                                        </p>
                                        <p className="mb-4 font-bold text-slate-800">From early morning:</p>
                                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                <span>Devotees gather outside temple gates</span>
                                            </div>
                                            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                <span>Temple bells ring continuously</span>
                                            </div>
                                            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                <span>Priests offer gulal to the deity</span>
                                            </div>
                                            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                <span>Colours are showered within temple premises</span>
                                            </div>
                                        </div>
                                        <p className="bg-orange-50 p-4 rounded-lg text-orange-800 font-medium mb-6">
                                            By afternoon, Vrindavan's narrow lanes become fully immersed in festive colour.
                                        </p>

                                        <p className="mb-4">If you are searching for:</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-6 font-medium text-slate-800">
                                            <li>Rangbharni Ekadashi Vrindavan date</li>
                                            <li>Banke Bihari Holi celebration</li>
                                            <li>Vrindavan Holi temple darshan</li>
                                            <li>Braj Holi 27 February schedule</li>
                                        </ul>
                                        <p className="text-orange-600 font-medium">this is the day you are looking for.</p>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="spiritually-special">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">Why Rangbharni Ekadashi is Spiritually Special</h2>
                                        <p className="mb-4">This day symbolises:</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-6">
                                            <li>Krishna joining devotees in celebration</li>
                                            <li>Devotional Holi within temple spaces</li>
                                            <li>The beginning of full-scale Holi in Vrindavan</li>
                                            <li>The union of bhakti and celebration</li>
                                        </ul>
                                        <div className="bg-stone-100 rounded-lg p-6 border-l-4 border-stone-800 my-8 shadow-sm">
                                            <p className="m-0 font-medium text-stone-800">
                                                For many pilgrims, playing Holi in Vrindavan on Rangbharni Ekadashi feels like participating in living tradition rather than simply observing a festival.
                                            </p>
                                        </div>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="crowd-reality">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">The Crowd Reality in Vrindavan on 27 February</h2>
                                        <p className="mb-4">Rangbharni Ekadashi draws:</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-6">
                                            <li>Devotees from across India</li>
                                            <li>International visitors</li>
                                            <li>Photographers and media</li>
                                            <li>Large religious groups</li>
                                        </ul>
                                        <p className="mb-4 font-bold text-slate-800">Expect:</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-6">
                                            <li>Extremely long darshan queues</li>
                                            <li>Controlled temple entry</li>
                                            <li>Heavy police and security presence</li>
                                            <li>Limited movement inside temple lanes</li>
                                            <li>High demand for accommodation</li>
                                        </ul>
                                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 text-red-800 font-medium">
                                            Without preparation, it becomes difficult to access temple premises smoothly.
                                        </div>
                                    </section>

                                    {/* Call to Action Section */}
                                    <section id="how-naman-assists" className="bg-stone-900 rounded-2xl p-8 text-white shadow-lg text-center transform hover:scale-[1.01] transition-transform my-10">
                                        <h3 className="text-3xl font-bold mb-4">How Naman Darshan Assists During Rangbharni Ekadashi</h3>
                                        <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto text-left">
                                            At Naman Darshan, we help devotees navigate the intensity of Vrindavan during Holi week.
                                        </p>
                                        <p className="text-lg mb-4 opacity-90 text-left max-w-2xl mx-auto">Our assistance includes:</p>
                                        <ul className="text-left max-w-xl mx-auto space-y-2 mb-8 text-slate-300">
                                            <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Coordinated temple darshan planning in Vrindavan</li>
                                            <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Guidance for visiting Banke Bihari Temple during Holi</li>
                                            <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Structured festival-day visit support</li>
                                            <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Assistance for combined Barsana–Nandgaon–Vrindavan Holi itinerary</li>
                                            <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Devotional travel coordination in the Braj region</li>
                                        </ul>
                                        <p className="text-lg mb-8 opacity-90 font-medium italic text-orange-200">
                                            Our purpose is not just travel arrangement — it is to help you experience Rangbharni Ekadashi with clarity, comfort, and spiritual focus.
                                        </p>
                                        <BookingModal
                                            isOpen={isBookingOpen}
                                            onClose={() => setIsBookingOpen(false)}
                                            type="darshan"
                                            serviceName="Rangbharni Ekadashi Vrindavan 2026"
                                        />
                                        <button
                                            onClick={() => setIsBookingOpen(true)}
                                            className="w-full bg-white text-stone-900 font-bold py-3.5 rounded-xl hover:bg-rose-50 transition-colors shadow-lg mt-2 relative z-10 cursor-pointer max-w-sm"
                                        >
                                            Request Darshan Assistasnce / Request Callback
                                        </button>
                                    </section>


                                    <section id="travel-info">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display flex items-center gap-3"><MapPin className="w-8 h-8 text-orange-500" /> Travel Information for Vrindavan</h2>
                                        <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                                            <li><strong>Location:</strong> Vrindavan, Mathura district, Uttar Pradesh</li>
                                            <li><strong>Nearest railway station:</strong> Mathura Junction</li>
                                            <li><strong>Well connected by road from:</strong> Delhi NCR</li>
                                            <li><strong>Close to:</strong> Barsana, Nandgaon, Govardhan</li>
                                        </ul>
                                        <p className="font-medium text-orange-600 bg-orange-50 p-4 rounded-lg">
                                            Due to peak footfall on 27 February, early arrival and prior temple planning are strongly recommended.
                                        </p>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="completing-journey" className="bg-orange-50 rounded-2xl p-8 border border-orange-100 text-center shadow-sm my-10 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full opacity-50"></div>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6 font-display relative z-10 flex items-center justify-center gap-2">Completing Your Braj Holi Journey</h2>
                                        <div className="relative z-10 text-left max-w-3xl mx-auto space-y-4">
                                            <p className="text-slate-700">
                                                If 25 February (Barsana) and 26 February (Nandgaon) celebrate divine play between villages, <strong>27 February in Vrindavan celebrates Krishna with the world.</strong>
                                            </p>
                                            <p className="text-slate-700">
                                                Standing in Vrindavan as gulal fills the air and temple chants rise above the colour clouds is an experience that stays with devotees for years.
                                            </p>
                                            <p className="font-bold text-slate-800">
                                                If you are planning to attend Rangbharni Ekadashi in Vrindavan, arranging your temple darshan support in advance ensures that your focus remains on devotion — not crowd management.
                                            </p>
                                            <p className="text-lg font-bold text-orange-600 mt-6 text-center">
                                                Celebrate Holi in Vrindavan with preparation, reverence, and proper guidance.<br /><span className="inline-block mt-2">Radhe Radhe 🌸</span>
                                            </p>
                                        </div>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="faqs">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-3">
                                            <Smile className="w-8 h-8 text-orange-500" /> FAQs:
                                        </h2>
                                        <Accordion type="single" collapsible className="w-full">
                                            <AccordionItem value="item-1" className="bg-white border text-slate-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    1. When is Rangbharni Ekadashi celebrated in Vrindavan 2026?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-lg pb-4 pt-2">
                                                    Rangbharni Ekadashi will be celebrated on <strong>27 February 2026</strong> in Vrindavan during the Braj Holi festival week.
                                                </AccordionContent>
                                            </AccordionItem>

                                            <AccordionItem value="item-2" className="bg-white border text-slate-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    2. What happens on Rangbharni Ekadashi in Vrindavan?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-lg pb-4 pt-2">
                                                    On this day, deities are taken out in processions, gulal is offered in temples, and devotees celebrate Holi in a devotional way, especially around major temples like Banke Bihari Temple.
                                                </AccordionContent>
                                            </AccordionItem>

                                            <AccordionItem value="item-3" className="bg-white border text-slate-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    3. Why is Rangbharni Ekadashi important in Braj Holi?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-lg pb-4 pt-2">
                                                    It symbolizes Krishna joining devotees in celebration and marks the beginning of full-scale Holi festivities in Vrindavan with temple-centered rituals.
                                                </AccordionContent>
                                            </AccordionItem>

                                            <AccordionItem value="item-4" className="bg-white border text-slate-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    4. Is Vrindavan crowded on Rangbharni Ekadashi?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-lg pb-4 pt-2">
                                                    Yes. The town experiences extremely heavy crowds, long darshan queues, controlled temple entry, and high accommodation demand.
                                                </AccordionContent>
                                            </AccordionItem>

                                            <AccordionItem value="item-5" className="bg-white border text-slate-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    5. What is the best way to plan Vrindavan Holi darshan?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-lg pb-4 pt-2">
                                                    Arriving early, booking travel and stay in advance, and planning temple visits beforehand helps ensure smoother darshan during peak festival hours.
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </section>
                                </div>
                            </div>

                            {/* Comment Section */}
                            <CommentSection />
                        </article>

                        {/* Right Sidebar - Recent Posts */}
                        <aside className="lg:col-span-3 hidden lg:block">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-slate-100 flex flex-col gap-8">
                                <div>
                                    <h3 className="font-bold text-lg mb-4 bg-orange-500 text-white px-4 py-3 -mx-6 -mt-6 rounded-t-xl">Popular Guides</h3>
                                    <div className="space-y-4 mt-6">
                                        {recentPosts.map((post, index) => (
                                            <Link
                                                key={index}
                                                to={post.link}
                                                className="block p-3 hover:bg-slate-50 rounded-lg transition-colors border-b last:border-0 border-slate-100 group"
                                            >
                                                <p className="text-sm font-medium text-slate-800 group-hover:text-orange-600 line-clamp-2 transition-colors">
                                                    {post.title}
                                                </p>
                                            </Link>
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

export default RangbharniEkadashiBlog;
