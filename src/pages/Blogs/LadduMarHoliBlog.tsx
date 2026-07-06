import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, MapPin, HeartHandshake, Smile, CheckCircle } from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";
import CommentSection from "@/components/common/CommentSection";
import BookingModal from "@/components/booking/BookingModal";
import { useState } from "react";


const LadduMarHoliBlog = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const festivalSchema = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "Laddu Mar Holi Barsana",
        "description": "Laddu Mar Holi is a sacred temple celebration at Shriji Temple Barsana where laddus are offered and showered among devotees to mark the beginning of Braj Holi.",
        "startDate": "2026-02-24",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "eventStatus": "https://schema.org/EventScheduled",
        "location": {
            "@type": "Place",
            "name": "Shriji Temple Barsana",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Barsana",
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "IN"
            }
        }
    };

    const tableOfContents = [
        { id: "intro", title: "The Joyful Shower" },
        { id: "why-advance", title: "Why Advance Booking?" },
        { id: "spiritually-special", title: "Spiritual Significance" },
        { id: "plan-darshan", title: "Plan Your Darshan" },
        { id: "how-to-reach", title: "How to Reach Barsana" },
        { id: "faqs", title: "FAQs" }
    ];

    const recentPosts = [
        { title: "Phag Nimantran in Barsana & Nandgaon", link: "/blog/phag-nimantran-barsana-holi-guide" },
        { title: "Holi 2026: History & Significance", link: "/blog/holi-2026-history-significance-rituals" },
        { title: "Mahakaleshwar Ujjain Guide", link: "/blog/mahakaleshwar-ujjain-jyotirlinga-bhasma-aarti" }
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
                title="Laddu Mar Holi Barsana Darshan Guide & Booking Tips"
                description="Experience Laddu Mar Holi at Shriji Temple Barsana with darshan planning tips, travel info, crowd guide, and Phag Nimantran festival details."
                keywords="Laddu Mar Holi, Barsana Holi, Shriji Temple Barsana, Barsana darshan, Braj Holi, Laddu Mar Holi Barsana 2026 date, Shriji Temple Barsana Holi darshan guide, how to attend Laddu Mar Holi Barsana, Barsana Holi travel planning tips, Shriji Temple entry rules Holi, Barsana Holi crowd guide, best time to visit Barsana Holi, Braj Holi temple rituals"
                image="/assets/blog3.jpg"
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
                    <BlogBreadcrumb pageTitle="Laddu Mar Holi" />

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
                                            <span>24 February 2026</span>
                                        </div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold">
                                            <MapPin className="w-4 h-4" />
                                            <span>Shriji Temple, Barsana</span>
                                        </div>
                                    </div>
                                    <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                                        Laddu Mar Holi at Shriji Temple, Barsana
                                    </h1>
                                    <div className="flex items-center gap-4 text-sm text-slate-500">
                                        <span>By Naman Darshan</span>
                                        <span>•</span>
                                        <span>10 min read</span>
                                    </div>
                                </div>

                                <div className="w-full h-auto">
                                    <img
                                        src="/assets/blog3.jpg"
                                        alt="Laddu Mar Holi celebrations at Shriji Temple Barsana"
                                        className="w-full h-auto"
                                    />
                                </div>

                                <div className="p-8 md:p-10 text-lg leading-relaxed text-slate-700 space-y-8">
                                    <p id="intro" className="font-medium text-xl text-slate-800 border-l-4 border-orange-500 pl-6 italic bg-orange-50 py-4 rounded-r-xl">
                                        Once the Phag Nimantran invitation is accepted, Barsana celebrates in its own joyful way with Laddu Mar Holi. The joyful shower of Laddus marks the start of Holi festivities.
                                    </p>

                                    <p>
                                        Inside the courtyard of <strong>Shriji Temple (Radha Rani Temple)</strong>, laddus are first offered as prasad and then playfully showered among devotees. This ritual fills the temple with devotion, laughter, and chants of "Radhe Radhe."
                                    </p>
                                    <p>
                                        Instead of colours, sweetness fills the air. <br />
                                        Since this celebration happens inside the temple complex, entry becomes highly regulated due to the large number of visitors.
                                    </p>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="why-advance">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">1. Why Advance Darshan Booking is Important</h2>
                                        <p className="mb-4">During Laddu Mar Holi:</p>
                                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                <span>Temple queues become extremely long</span>
                                            </div>
                                            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                <span>Entry timing is strictly managed</span>
                                            </div>
                                            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                <span>Movement inside Barsana slows down</span>
                                            </div>
                                            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                <span>Crowd density increases significantly</span>
                                            </div>
                                        </div>

                                        <p>
                                            For devotees travelling from outside Braj — especially from Delhi, Mumbai, Gujarat, or abroad — navigating this without prior planning can be challenging.
                                        </p>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="spiritually-special">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-3">
                                            <HeartHandshake className="w-8 h-8 text-orange-500" /> 2. Spiritual Significance
                                        </h2>
                                        <p className="mb-4">Laddu Mar Holi is not just an event; it is a living tradition of Braj culture. It represents:</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-6">
                                            <li>The sweet bond of Radha and Krishna</li>
                                            <li>The sacred beginning of Holi in Barsana</li>
                                            <li>The playful leela of Radha Krishna</li>
                                            <li>A temple-centered celebration preserved for generations</li>
                                        </ul>
                                        <p>
                                            Witnessing Laddu Mar Holi at Shriji Temple is considered deeply auspicious and spiritually uplifting.
                                        </p>
                                    </section>

                                    {/* Call to Action Section */}
                                    <section id="plan-darshan" className="bg-stone-900 rounded-2xl p-8 text-white shadow-lg text-center transform hover:scale-[1.01] transition-transform my-10">
                                        <h3 className="text-3xl font-bold mb-4">Plan Your Shriji Temple Holi Darshan</h3>
                                        <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
                                            Celebrate this Holi in the divine land of Radha Krishna with devotion, tradition, and well-planned darshan. Due to massive crowds, advance booking is strictly recommended.
                                        </p>
                                        <BookingModal
                                            isOpen={isBookingOpen}
                                            onClose={() => setIsBookingOpen(false)}
                                            type="darshan"
                                            serviceName="Laddu Mar Holi Barsana"
                                        />
                                        <button
                                            onClick={() => setIsBookingOpen(true)}
                                            className="w-full bg-white text-stone-900 font-bold py-3.5 rounded-xl hover:bg-rose-50 transition-colors shadow-lg mt-2 relative z-10 cursor-pointer max-w-sm"
                                        >
                                            Request Darshan Assistasnce / Request Callback
                                        </button>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="how-to-reach">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">3. How to Reach Barsana for Holi</h2>
                                        <p className="mb-4">Due to festival crowds, early arrival and pre-planned temple visit arrangements are advisable.</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li><strong>Nearest major city:</strong> Mathura, Uttar Pradesh</li>
                                            <li><strong>Closest railway station:</strong> Mathura Junction</li>
                                            <li><strong>Nearby pilgrimage hubs:</strong> Vrindavan, Govardhan</li>
                                            <li><strong>Road connectivity:</strong> Easily available from Delhi NCR</li>
                                        </ul>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="faqs">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-3">
                                            <Smile className="w-8 h-8 text-orange-500" /> FAQs
                                        </h2>
                                        <Accordion type="single" collapsible className="w-full">
                                            <AccordionItem value="item-1" className="bg-white border text-slate-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    1. When is Laddu Mar Holi celebrated in Barsana in 2026?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-lg pb-4 pt-2">
                                                    Laddu Mar Holi is celebrated on <strong>24 February 2026</strong>, following the Phag Nimantran ritual.
                                                </AccordionContent>
                                            </AccordionItem>

                                            <AccordionItem value="item-2" className="bg-white border text-slate-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    2. Where does Laddu Mar Holi take place?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-lg pb-4 pt-2">
                                                    The celebration happens inside <strong>Shriji Temple (Radha Rani Temple) in Barsana</strong>, where laddus are offered as prasad and joyfully showered among devotees.
                                                </AccordionContent>
                                            </AccordionItem>

                                            <AccordionItem value="item-3" className="bg-white border text-slate-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    3. Is advance darshan planning needed for Shriji Temple Holi?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-lg pb-4 pt-2">
                                                    Yes. Because this festival takes place inside temple premises with heavy crowds, advance darshan planning helps ensure smoother entry and reduced waiting time.
                                                </AccordionContent>
                                            </AccordionItem>

                                            <AccordionItem value="item-4" className="bg-white border text-slate-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    4. What makes Laddu Mar Holi different from other Holi celebrations?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-lg pb-4 pt-2">
                                                    Unlike colour-based Holi events, Laddu Mar Holi is a devotional ritual where sweets are used instead of colours, symbolising the sweetness of Radha-Krishna's divine bond.
                                                </AccordionContent>
                                            </AccordionItem>

                                            <AccordionItem value="item-5" className="bg-white border text-slate-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    5. What is the best time to reach Barsana for this festival?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-lg pb-4 pt-2">
                                                    Early morning arrival is recommended, as temple queues grow quickly and entry becomes regulated once crowd capacity is reached.
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

export default LadduMarHoliBlog;
