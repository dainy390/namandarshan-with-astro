import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, MapPin, CheckCircle, Smile, HeartHandshake, Navigation } from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";
import CommentSection from "@/components/common/CommentSection";
import BookingModal from "@/components/booking/BookingModal";
import { useState } from "react";


const NandgaonLathmarHoliBlog = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const festivalSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Nandgaon Lathmar Holi 2026 Darshan Travel Guide",
        "description": "Complete guide for Nandgaon Lathmar Holi 2026 including temple darshan tips, travel planning, routes, timing, and crowd advice for a smooth Braj Holi experience.",
        "keywords": [
            "Nandgaon Lathmar Holi",
            "Nandgaon Holi 2026",
            "Krishna Temple Nandgaon darshan",
            "Braj Holi festival",
            "Barsana Nandgaon Holi",
            "Mathura Holi celebration",
            "Holi pilgrimage planning",
            "Braj festival guide"
        ],
        "datePublished": "2026-01-01",
        "eventDate": "2026-02-26",
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
            "name": "Nandgaon Lathmar Holi 2026",
            "startDate": "2026-02-26",
            "location": {
                "@type": "Place",
                "name": "Nandgaon, Mathura, Uttar Pradesh, India"
            }
        }
    };

    const tableOfContents = [
        { id: "intro", title: "Nandgaon Lathmar Holi" },
        { id: "what-makes-different", title: "What Makes It Different?" },
        { id: "where-it-centers", title: "Where the Celebration Centers" },
        { id: "why-both-days", title: "Why Attend Both Days" },
        { id: "crowd-reality", title: "Crowd & Movement Reality" },
        { id: "how-naman-helps", title: "How We Help You Experience It" },
        { id: "travel-info", title: "Travel Information" },
        { id: "rooted-in-devotion", title: "Rooted in Devotion" },
        { id: "faqs", title: "FAQs" }
    ];

    const recentPosts = [
        { title: "Lathmar Holi in Barsana", link: "/blog/lathmar-holi-barsana-2026-darshan-guide" },
        { title: "Laddu Mar Holi in Barsana", link: "/blog/laddu-mar-holi-barsana-guide" },
        { title: "Phag Nimantran in Barsana & Nandgaon", link: "/blog/phag-nimantran-barsana-holi-guide" }
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
                title="Nandgaon Lathmar Holi 2026 Darshan Travel Guide Tips"
                description="Attend Nandgaon Lathmar Holi 2026 with a complete travel and darshan planning guide. Learn temple access tips, crowd advice, routes, timing, and how to experience Krishna's village Holi smoothly with proper preparation for a spiritual and organized Braj festival visit."
                keywords="Nandgaon Lathmar Holi, Nandgaon Holi 2026, Krishna Temple Nandgaon Holi darshan, Braj Holi full schedule, Barsana and Nandgaon combined Holi visit, Mathura Holi"
                image="/assets/blog7.jpg"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(festivalSchema)}
                </script>
            </Helmet>
            <Header />

            <main className="flex-grow pt-36 md:pt-48 lg:pt-52 pb-16">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb & Share */}
                    <BlogBreadcrumb pageTitle="Nandgaon Lathmar Holi" />

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
                                            <span>26 February 2026</span>
                                        </div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold">
                                            <MapPin className="w-4 h-4" />
                                            <span>Nandgaon, Mathura</span>
                                        </div>
                                    </div>
                                    <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                                        Nandgaon Lathmar Holi Celebration
                                    </h1>
                                    <div className="flex items-center gap-4 text-sm text-slate-500">
                                        <span>By Naman Darshan</span>
                                        <span>•</span>
                                        <span>12 min read</span>
                                    </div>
                                </div>

                                <div className="w-full h-auto">
                                    <img
                                        src="/assets/blog7.jpg"
                                        alt="Nandgaon Lathmar Holi Celebration"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>

                                <div className="p-8 md:p-10 text-lg leading-relaxed text-slate-700 space-y-8">
                                    <p id="intro" className="font-medium text-xl text-slate-800 border-l-4 border-orange-500 pl-6 italic bg-orange-50 py-4 rounded-r-xl">
                                        If 25 February in Barsana is dramatic, <strong>26 February in Nandgaon</strong> is deeply emotional.
                                    </p>

                                    <p>
                                        This is the day when the celebration shifts to Krishna's village. After facing playful resistance in Barsana, the men of <strong>Barsana</strong> arrive in <strong>Nandgaon</strong> — and the women of <strong>Nandgaon</strong> continue the Lathmar tradition with the same spirited energy.
                                    </p>
                                    <p className="font-medium text-slate-800">
                                        For devotees who truly wish to experience <strong>complete Braj Holi</strong>, this day is not optional — it is essential.
                                    </p>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="what-makes-different">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">What Makes Nandgaon's Lathmar Holi Different?</h2>
                                        <p className="mb-4">
                                            While the format remains similar — women playfully striking with lathis and men defending with shields — the atmosphere in <strong>Nandgaon</strong> feels distinct.
                                        </p>
                                        <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                                            <li>The setting is more temple-focused</li>
                                            <li>The devotional intensity is stronger</li>
                                            <li>The village lanes create a closer, immersive experience</li>
                                            <li>Krishna-centric rituals dominate the celebration</li>
                                        </ul>
                                        <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 mb-8">
                                            <p className="mb-4">Here, Holi feels less like spectacle and more like tradition being lived in real time.</p>
                                            <p className="mb-0 text-slate-800 font-medium italic">
                                                The chants of "Radhe Radhe" and "Krishna Kanhaiya Lal Ki Jai" echo through the hills surrounding Nandgaon.
                                            </p>
                                        </div>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="where-it-centers">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-3">
                                            <MapPin className="w-8 h-8 text-orange-500" /> Where the Celebration Centers
                                        </h2>
                                        <p className="mb-4">
                                            The heart of the festivities is near the Krishna temple complex in <strong>Nandgaon</strong>, associated with <strong>Krishna</strong>.
                                        </p>
                                        <p className="mb-4 font-bold text-slate-800">From early morning:</p>
                                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                <span>Devotees climb rooftops and balconies</span>
                                            </div>
                                            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                <span>Temple steps become gathering points</span>
                                            </div>
                                            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                <span>Colours begin filling the air</span>
                                            </div>
                                            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                <span>Folk singers perform traditional Braj Hori</span>
                                            </div>
                                        </div>
                                        <p className="bg-orange-50 p-4 rounded-lg text-orange-800 font-medium">By midday, entry points toward temple areas are tightly managed due to the heavy crowd presence.</p>
                                    </section>

                                    <div className="my-10">
                                        <img
                                            src="/assets/blog8.jpg"
                                            alt="Nandgaon Lathmar Holi Devotees"
                                            className="w-full h-auto rounded-xl shadow-md object-cover"
                                        />
                                    </div>

                                    <section id="why-both-days">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">Why Serious Pilgrims Attend Both Days</h2>
                                        <p className="mb-4">
                                            Many visitors attend only Barsana. However, experienced Braj yatris know that <strong>Nandgaon on 26 February completes the divine exchange</strong> inspired by <strong>Radha</strong> and Krishna's playful leelas.
                                        </p>
                                        <p className="mb-4">Attending both days allows devotees to:</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-6">
                                            <li>Witness the full Radha-Krishna village tradition</li>
                                            <li>Experience both feminine and masculine village responses</li>
                                            <li>Participate in temple-centered Holi rituals</li>
                                            <li>Understand authentic Braj culture beyond tourism</li>
                                        </ul>
                                        <p className="mb-4">If you are looking for:</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-6 font-medium text-slate-800">
                                            <li>Nandgaon Lathmar Holi 26 February</li>
                                            <li>Krishna Temple Nandgaon Holi darshan</li>
                                            <li>Braj Holi full schedule</li>
                                            <li>Barsana and Nandgaon combined Holi visit</li>
                                        </ul>
                                        <p className="text-orange-600 font-medium">...advance planning becomes very important.</p>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="crowd-reality">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">Crowd &amp; Movement Reality on 26 February</h2>
                                        <p className="mb-4"><strong>Nandgaon's</strong> streets are narrow and naturally congested.</p>
                                        <p className="mb-4">On Lathmar Holi day, expect:</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-6">
                                            <li>Heavy security presence</li>
                                            <li>Regulated temple access</li>
                                            <li>Limited vehicle movement</li>
                                            <li>Long waiting hours near temple zones</li>
                                        </ul>
                                        <div className="bg-stone-100 rounded-lg p-6 border-l-4 border-stone-800 my-8 shadow-sm">
                                            <p className="m-0 font-medium text-stone-800">
                                                Without planning, devotees often spend more time navigating crowds than experiencing darshan.
                                            </p>
                                        </div>
                                    </section>

                                    {/* Call to Action Section */}
                                    <section id="how-naman-helps" className="bg-stone-900 rounded-2xl p-8 text-white shadow-lg text-center transform hover:scale-[1.01] transition-transform my-10">
                                        <h3 className="text-3xl font-bold mb-4">How Naman Darshan Helps You Experience Both Days Properly</h3>
                                        <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto text-left">
                                            At Naman Darshan, we assist devotees who wish to attend:
                                        </p>
                                        <ul className="text-left max-w-sm mx-auto space-y-2 mb-6 font-medium bg-stone-800 p-4 rounded-lg">
                                            <li>• 25 February – Lathmar Holi in Barsana</li>
                                            <li>• 26 February – Lathmar Holi in <strong>Nandgaon</strong></li>
                                        </ul>
                                        <p className="text-lg mb-4 opacity-90 text-left max-w-2xl mx-auto">Our support includes:</p>
                                        <ul className="text-left max-w-xl mx-auto space-y-2 mb-8 text-slate-300">
                                            <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Temple darshan coordination in <strong>Nandgaon</strong></li>
                                            <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Structured visit timing guidance</li>
                                            <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Combined Barsana-<strong>Nandgaon</strong> Holi planning</li>
                                            <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Devotional travel assistance in the Mathura district</li>
                                            <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> On-ground coordination for smoother access</li>
                                        </ul>
                                        <p className="text-lg mb-8 opacity-90 font-medium italic text-orange-200">
                                            The goal is simple: you focus on devotion, we help manage the structure around it.
                                        </p>
                                        <BookingModal
                                            isOpen={isBookingOpen}
                                            onClose={() => setIsBookingOpen(false)}
                                            type="darshan"
                                            serviceName="Nandgaon Lathmar Holi 2026"
                                        />
                                        <button
                                            onClick={() => setIsBookingOpen(true)}
                                            className="w-full bg-white text-stone-900 font-bold py-3.5 rounded-xl hover:bg-rose-50 transition-colors shadow-lg mt-2 relative z-10 cursor-pointer max-w-sm"
                                        >
                                            Request Darshan Assistasnce / Request Callback
                                        </button>
                                    </section>

                                    <section id="travel-info">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display flex items-center gap-3"><Navigation className="w-8 h-8 text-orange-500" /> Travel Information for Nandgaon</h2>
                                        <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                                            <li><strong>District:</strong> Mathura, Uttar Pradesh</li>
                                            <li><strong>Nearest railway station:</strong> Mathura Junction</li>
                                            <li><strong>Close to:</strong> Barsana, Govardhan, Vrindavan</li>
                                            <li><strong>Accessible from:</strong> Delhi NCR by road</li>
                                        </ul>
                                        <p className="font-medium text-orange-600 bg-orange-50 p-4 rounded-lg">
                                            During Holi week, accommodation across the Braj region fills quickly, so early arrangements are advisable.
                                        </p>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="rooted-in-devotion" className="bg-orange-50 rounded-2xl p-8 border border-orange-100 text-center shadow-sm my-10 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full opacity-50"></div>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6 font-display relative z-10 flex items-center justify-center gap-2"><HeartHandshake className="w-6 h-6 text-orange-500" /> A Celebration Rooted in Devotion, Not Just Drama</h2>
                                        <div className="relative z-10 text-left max-w-3xl mx-auto space-y-4">
                                            <p className="text-slate-700">
                                                Lathmar Holi in <strong>Nandgaon</strong> is powerful, colourful, and intense — but at its core, it is sacred storytelling through tradition.
                                            </p>
                                            <p className="text-slate-700">
                                                Standing in <strong>Nandgaon</strong> on 26 February, surrounded by temple bells and clouds of <em>gulal</em>, you feel the continuity of a ritual that has survived centuries.
                                            </p>
                                            <p className="font-medium text-slate-800">
                                                If you are planning to attend <strong>Nandgaon</strong> Lathmar Holi this year, consider arranging your temple darshan coordination in advance for a smoother and spiritually fulfilling experience.
                                            </p>
                                            <p className="text-lg font-bold text-orange-600 mt-6 text-center">
                                                Complete your Braj Holi journey with preparation and devotion.<br /><span className="inline-block mt-2">Radhe Radhe 🙏</span>
                                            </p>
                                        </div>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="faqs">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-3">
                                            <Smile className="w-8 h-8 text-orange-500" /> FAQs
                                        </h2>
                                        <Accordion type="single" collapsible className="w-full">
                                            <AccordionItem value="item-1" className="bg-white border text-slate-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    1. When is Nandgaon Lathmar Holi celebrated in 2026?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-lg pb-4 pt-2">
                                                    <strong>Nandgaon</strong> Lathmar Holi will be celebrated on <strong>26 February 2026</strong>, the day after Barsana's Lathmar Holi, completing the traditional Braj celebration sequence.
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-2" className="bg-white border text-slate-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    2. What makes Nandgaon Lathmar Holi different from Barsana Holi?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-lg pb-4 pt-2">
                                                    <strong>Nandgaon</strong> Holi is more temple-focused and devotional in atmosphere, with stronger Krishna-centric rituals and a more immersive village experience compared to Barsana's dramatic celebration.
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-3" className="bg-white border text-slate-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    3. Where does the main celebration take place in Nandgaon?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-lg pb-4 pt-2">
                                                    The main festivities happen near the Krishna temple complex in <strong>Nandgaon</strong>, where devotees gather on temple steps, rooftops, and lanes to witness the rituals.
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-4" className="bg-white border text-slate-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    4. Is Nandgaon crowded during Lathmar Holi?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-lg pb-4 pt-2">
                                                    Yes. Due to narrow village lanes and high turnout, the area becomes heavily crowded with regulated entry, limited vehicle movement, and long waiting times near temple zones.
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-5" className="bg-white border text-slate-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    5. How should devotees plan for Nandgaon Holi darshan?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-lg pb-4 pt-2">
                                                    Visitors should arrive early, arrange travel and darshan planning in advance, and prepare for controlled entry and heavy security during peak festival hours.
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </section>
                                </div>
                            </div>

                            {/* Comment Section */}
                            <CommentSection />
                        </article>

                        {/* Right Sidebar - Popular Guides */}
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

export default NandgaonLathmarHoliBlog;
