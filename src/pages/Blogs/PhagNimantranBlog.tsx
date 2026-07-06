import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Users, Music, Flame, CheckCircle, ChevronRight } from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

import CommentSection from "@/components/common/CommentSection";

const PhagNimantranBlog = () => {
    const tableOfContents = [
        { id: "intro", title: "Introduction" },
        { id: "nimantran", title: "What is Phag Nimantran?" },
        { id: "rituals", title: "Key Rituals" },
        { id: "laddu-mar", title: "Laddu Mar Holi" },
        { id: "faqs", title: "FAQs" }
    ];

    const recentPosts = [
        { title: "Holi 2026: History & Significance", link: "/blog/holi-2026-history-significance-rituals" },
        { title: "Lathmar Holi Barsana Guide", link: "/blog/lathmar-holi-barsana-2026-darshan-guide" },
        { title: "Nandgaon Lathmar Holi Guide", link: "/blog/nandgaon-lathmar-holi-2026-darshan-guide" }
    ];

    const festivalSchema = {
        "@context": "https://schema.org",
        "@type": "Festival",
        "name": "Phag Nimantran & Laddu Mar Holi",
        "description": "Phag Nimantran and Laddu Mar Holi are sacred Braj Holi traditions celebrated in Nandgaon and Barsana marking the beginning of Holi festivities.",
        "startDate": "2026-02-24",
        "location": {
            "@type": "Place",
            "name": "Shriji Temple Barsana",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Barsana",
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "IN"
            }
        },
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "eventStatus": "https://schema.org/EventScheduled"
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-stone-50">
            <SEO
                title="Barsana Holi Darshan Booking Guide – Phag Nimantran 2026"
                description="Plan Shriji Temple Barsana Holi darshan for Phag Nimantran and Laddu Mar Holi 2026 with travel tips, crowd guide, timings and booking advice."
                keywords="Barsana Holi, Phag Nimantran, Laddu Mar Holi, Shriji Temple Barsana, Barsana darshan, Braj Holi festival, Phag Nimantran date 2026, Laddu Mar Holi Barsana details, Shriji Temple Barsana Holi darshan booking, Barsana Holi travel guide, when is Barsana Holi festival, how to attend Phag Nimantran Nandgaon, Barsana temple Holi entry rules, Braj Holi festival schedule, best time to visit Barsana during Holi, Shriji Temple festival crowd tips"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(festivalSchema)}
                </script>
            </Helmet>
            <Header />

            <main className="pt-36 md:pt-48 lg:pt-52 pb-16">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb & Share */}
                    <BlogBreadcrumb pageTitle="Phag Nimantran & Laddu Mar Holi" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Sidebar - Table of Contents */}
                        <aside className="lg:col-span-3">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-stone-100">
                                <h3 className="font-bold text-lg mb-4 text-stone-900 border-b pb-3">Table of Contents</h3>
                                <nav className="space-y-2">
                                    {tableOfContents.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className="w-full text-left px-3 py-2 text-sm text-stone-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors flex items-center gap-2"
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
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-stone-100">
                                {/* Header */}
                                <div className="p-8 md:p-10 text-center border-b border-stone-50">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6">
                                        <Calendar className="w-4 h-4" />
                                        <span>24 February 2026</span>
                                        <span className="mx-2">•</span>
                                        <MapPin className="w-4 h-4" />
                                        <span>Barsana & Nandgaon</span>
                                    </div>
                                    <h1 className="font-display text-3xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                                        Phag Nimantran in Nandgaon & Laddu Mar Holi in Barsana
                                    </h1>
                                    <p className="text-xl text-orange-600 font-medium italic">
                                        Shriji Temple Barsana Holi Darshan Booking Guide
                                    </p>
                                </div>

                                {/* Main Image */}
                                <div className="w-full">
                                    <img
                                        src="/assets/blog1.jpg"
                                        alt="Massive crowd gathered for Phag Nimantran and Laddu Mar Holi in Braj"
                                        className="w-full h-auto"
                                    />
                                    <div className="bg-white p-4 text-center text-sm text-stone-500 border-b border-stone-100 italic">
                                        Devotees celebrating Laddu Mar Holi at Shriji Temple, Barsana
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-10 space-y-8 text-lg leading-relaxed text-stone-700">
                                    <p id="intro" className="text-xl font-medium text-stone-800 border-l-4 border-orange-500 pl-6 italic">
                                        Holi in Braj begins not with colours, but with a sacred invitation.
                                    </p>

                                    <p>
                                        On <strong>24 February 2026</strong>, <strong>Phag Nimantran</strong> takes place in Nandgaon, followed by the beautiful and unique <strong>Laddu Mar Holi</strong> inside Shriji Temple, Barsana. Thousands of devotees travel to witness this divine tradition that marks the beginning of Braj Holi celebrations.
                                    </p>

                                    <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl shadow-sm">
                                        <p className="m-0 font-medium text-stone-800">
                                            Because this festival takes place within temple premises and draws heavy crowds, many devotees now prefer arranging their <strong>Shriji Temple Barsana Holi darshan booking in advance</strong> to ensure a smoother experience.
                                        </p>
                                        <div className="mt-4">
                                            <Link to="/darshan">
                                                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 px-6 rounded-lg shadow-md transition-all text-sm md:text-base">
                                                    Request Darshan Assistance Online
                                                </button>
                                            </Link>
                                        </div>
                                    </div>

                                    <section id="nimantran">
                                        <h2 className="text-3xl font-display font-bold text-stone-900 mb-6 border-b border-orange-200 pb-3">
                                            What is Phag Nimantran?
                                        </h2>
                                        <div className="bg-white rounded-xl shadow-md border border-orange-100 p-6 md:p-8 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-0 opacity-80 transition-transform"></div>
                                            <p className="relative z-10 text-xl font-medium text-stone-800 leading-relaxed mb-0">
                                                <strong className="text-orange-600">Phag Nimantran</strong> is the ceremonial Holi invitation sent from <span className="text-stone-900 border-b-2 border-orange-200 pb-0.5">Nandgaon</span> — the village associated with <strong>Krishna</strong> — to <span className="text-stone-900 border-b-2 border-orange-200 pb-0.5">Barsana</span>, the village of <strong>Radha</strong>.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="rituals">
                                        <h3 className="text-2xl font-bold text-stone-800 mb-6">Key Rituals of the Invitation</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                { icon: Users, title: "Devotional Processions", desc: "Devotees travel together in joyous celebration towards Barsana." },
                                                { icon: Music, title: "Traditional Braj Hori", desc: "Soulful folk singing echoing the eternal tales of Krishna and Radha." },
                                                { icon: Flame, title: "Temple Ceremonies", desc: "Sacred rituals performed gracefully within the historic Shriji Temple." },
                                                { icon: CheckCircle, title: "Formal Acceptance", desc: "The invitation is officially embraced, triggering the colorful festivities." }
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex items-start bg-orange-50 p-5 rounded-xl border border-orange-100 shadow-xs">
                                                    <div className="bg-white p-3 rounded-full mr-4 text-orange-600 shadow-sm shrink-0">
                                                        <item.icon className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-stone-800 text-lg m-0 mb-1 leading-tight">{item.title}</h4>
                                                        <p className="text-stone-600 text-sm m-0 leading-tight">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <div className="bg-stone-100 rounded-lg p-6 border-l-4 border-stone-800 shadow-xs">
                                        <p className="m-0 text-lg italic text-stone-700 font-medium">
                                            "This sacred exchange symbolises Krishna inviting Radha to celebrate Holi, and it officially begins the Holi festivities in the Braj region."
                                        </p>
                                    </div>

                                    <section id="laddu-mar">
                                        <h2 className="text-3xl font-display font-bold text-stone-900 mb-6">Laddu Mar Holi at Shriji Temple</h2>
                                        <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200 mb-8">
                                            <img
                                                src="/assets/blog2.jpg"
                                                alt="Devotees thronging the Shriji Temple in Barsana during Holi"
                                                className="w-full h-auto"
                                            />
                                            <div className="bg-white p-4 text-center text-sm text-stone-500 italic">
                                                The historic Shriji Temple complex filled with devotees
                                            </div>
                                        </div>
                                        <p>
                                            Laddu Mar Holi is celebrated inside <strong>Shriji Temple, Barsana</strong>, where devotees play Holi with laddus as part of a sacred temple ritual.
                                        </p>
                                    </section>

                                    <section id="faqs">
                                        <h2 className="text-3xl font-display font-bold text-stone-900 mb-6">Frequently Asked Questions</h2>
                                        <Accordion type="single" collapsible className="w-full">
                                            <AccordionItem value="item-1" className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    1. When is Phag Nimantran in 2026?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                                                    Phag Nimantran and Laddu Mar Holi will be celebrated on <strong>24 February 2026</strong>.
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-2" className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    2. Where does it take place?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                                                    The rituals begin in Nandgaon and conclude at the <strong>Shriji Temple in Barsana</strong>.
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-3" className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    3. Is advance booking needed for darshan?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                                                    Yes. Due to extremely heavy crowds, advance planning helps improve chances of smooth temple entry.
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </section>
                                </div>
                            </div>
                            <CommentSection />
                        </article>

                        {/* Right Sidebar - Recent Posts */}
                        <aside className="lg:col-span-3">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-stone-100 flex flex-col gap-8">
                                <div>
                                    <h3 className="font-bold text-lg mb-4 bg-orange-500 text-white px-4 py-3 -mx-6 -mt-6 rounded-t-xl">Recent Posts</h3>
                                    <div className="space-y-4 mt-6">
                                        {recentPosts.map((post, idx) => (
                                            <Link
                                                key={idx}
                                                to={post.link}
                                                className="block p-3 hover:bg-stone-50 rounded-lg transition-colors border-b last:border-0 border-stone-100 group"
                                            >
                                                <p className="text-sm font-medium text-stone-800 group-hover:text-orange-600 line-clamp-2 transition-colors">
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

export default PhagNimantranBlog;
