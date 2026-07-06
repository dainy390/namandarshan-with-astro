import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, MapPin, HeartHandshake, Smile, CheckCircle, Flame } from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { Helmet } from "react-helmet-async";
import CommentSection from "@/components/common/CommentSection";
import BookingModal from "@/components/booking/BookingModal";
import { useState } from "react";

const LathmarHoliBlog = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const festivalSchema = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "Lathmar Holi Barsana 2026",
        "description": "Complete travel and darshan guide for Lathmar Holi 2026 in Barsana including date, temple visit tips, routes, and planning advice for Radha Rani Temple festival.",
        "startDate": "2026-02-25",
        "endDate": "2026-02-25",
        "location": {
            "@type": "Place",
            "name": "Barsana",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Barsana",
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "IN"
            }
        }
    };

    const tableOfContents = [
        { id: "intro", title: "Lathmar Holi Celebration" },
        { id: "story", title: "The Story Behind Lathmar Holi" },
        { id: "main-celebration", title: "Where the Main Celebration Happens" },
        { id: "what-makes-unique", title: "What Makes it Unique" },
        { id: "travel-darshan", title: "Important Travel & Darshan Info" },
        { id: "how-naman-helps", title: "How Naman Darshan Helps" },
        { id: "how-to-reach", title: "How to Reach Barsana" },
        { id: "faqs", title: "FAQs" }
    ];

    const recentPosts = [
        { title: "Laddu Mar Holi in Barsana", link: "/blog/laddu-mar-holi-barsana-guide" },
        { title: "Phag Nimantran in Barsana & Nandgaon", link: "/blog/phag-nimantran-barsana-holi-guide" },
        { title: "Holi 2026: History & Significance", link: "/blog/holi-2026-history-significance-rituals" }
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
                title="Lathmar Holi Barsana 2026 Darshan Travel Planning Guide"
                description="Discover what makes Lathmar Holi in Barsana unique with this complete guide. Learn temple darshan tips, crowd insights, travel routes, and planning advice to attend Radha Rani Temple celebrations smoothly and experience one of Braj’s most powerful spiritual Holi festivals."
                keywords="Lathmar Holi Barsana, Barsana Holi 2026, Radha Rani Temple darshan, Braj Holi festival, Barsana travel guide, Mathura Holi, Nandgaon Barsana Holi, Holi pilgrimage planning"
                image="/assets/blog4.jpg" // Using blog4 as asked
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
                    <BlogBreadcrumb pageTitle="Lathmar Holi" />

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
                                            <span>25 February 2026</span>
                                        </div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold">
                                            <MapPin className="w-4 h-4" />
                                            <span>Barsana, Mathura</span>
                                        </div>
                                    </div>
                                    <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                                        Lathmar Holi Celebration in Barsana
                                    </h1>
                                    <div className="flex items-center gap-4 text-sm text-slate-500">
                                        <span>By Naman Darshan</span>
                                        <span>•</span>
                                        <span>12 min read</span>
                                    </div>
                                </div>

                                <div className="w-full h-auto">
                                    <img
                                        src="/assets/blog4.jpg"
                                        alt="Lathmar Holi Celebration in Barsana"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>

                                <div className="p-8 md:p-10 text-lg leading-relaxed text-slate-700 space-y-8">
                                    <p id="intro" className="font-medium text-xl text-slate-800 border-l-4 border-orange-500 pl-6 italic bg-orange-50 py-4 rounded-r-xl">
                                        Experience the Most Iconic Braj Holi with Radha Rani Temple Darshan Support. When people think of <strong>Braj Holi</strong>, one celebration stands above all — <strong>Lathmar Holi in Barsana</strong>.
                                    </p>

                                    <p>
                                        Held on <strong>25 February 2026</strong> this legendary festival transforms the sacred town of Barsana, in Mathura district, Uttar Pradesh, into a vibrant stage of devotion, colour, tradition, and playful divine drama inspired by the leelas of <strong>Krishna</strong> and <strong>Radha</strong>.
                                    </p>
                                    <div className="mt-4 mb-8">
                                        <img
                                            src="/assets/blog5.jpg"
                                            alt="Lathmar Holi Festival Colors"
                                            className="w-full h-auto rounded-xl shadow-md object-cover"
                                        />
                                    </div>
                                    <p>
                                        For devotees planning to visit, this is also one of the most crowded days in the Braj calendar — making <strong>Radha Rani Temple darshan planning essential</strong>.
                                    </p>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="story">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">The Story Behind Lathmar Holi</h2>
                                        <p className="mb-4">
                                            According to Braj tradition, Krishna from Nandgaon would visit Barsana to meet Radha and teasingly play Holi with her and her sakhis. In response, the women of Barsana would chase him away with sticks.
                                        </p>
                                        <p className="mb-4">Today, that playful exchange is recreated in a symbolic and festive manner:</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                                            <li>Men from Nandgaon arrive in Barsana</li>
                                            <li>Women greet them with colourful <em>gulal</em></li>
                                            <li>Playful stick (lathi) rituals take place</li>
                                            <li>Traditional Braj songs echo through the streets</li>
                                        </ul>
                                        <p className="font-medium text-slate-800 italic">It is dramatic, joyful, and deeply rooted in local heritage.</p>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="main-celebration">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-3">
                                            <Flame className="w-8 h-8 text-orange-500" /> Where the Main Celebration Happens
                                        </h2>
                                        <p className="mb-4">
                                            The heart of Lathmar Holi beats near the sacred <strong>Radha Rani Temple</strong>, also known as Shriji Temple.
                                        </p>
                                        <p className="mb-4 font-bold text-slate-800">From early morning:</p>
                                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                <span>Devotees gather in large numbers</span>
                                            </div>
                                            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                <span>Temple lanes become densely packed</span>
                                            </div>
                                            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                <span>Colours fill the air</span>
                                            </div>
                                            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                <span>Folk musicians perform traditional Hori songs</span>
                                            </div>
                                        </div>
                                        <p>By midday, Barsana’s narrow streets and temple courtyards are overflowing with visitors from across India and abroad.</p>

                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="what-makes-unique">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">What Makes Lathmar Holi in Barsana Unique</h2>
                                        <p className="mb-4">Unlike commercial Holi celebrations, Barsana’s Lathmar Holi is:</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-6">
                                            <li><strong>Temple-centered:</strong> Revolving directly around Radha Rani Temple.</li>
                                            <li><strong>Community-driven:</strong> Maintained by the people of Nandgaon and Barsana.</li>
                                            <li><strong>Rooted in centuries-old Braj culture:</strong> Unchanged through the ages.</li>
                                            <li><strong>Spiritually symbolic:</strong> Rather than merely festive play.</li>
                                        </ul>
                                        <div className="bg-stone-100 rounded-lg p-6 border-l-4 border-stone-800 my-8 shadow-sm">
                                            <p className="m-0 font-medium text-stone-800">
                                                It is not just about sticks and colours — it is about reliving a sacred narrative of divine love.
                                            </p>
                                        </div>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="travel-darshan">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">Important Travel & Darshan Information</h2>
                                        <p className="mb-4">Because Lathmar Holi attracts massive crowds, visitors should be prepared for:</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-6">
                                            <li>Long waiting hours for Radha Rani Temple darshan</li>
                                            <li>Restricted entry during peak hours</li>
                                            <li>Heavy police regulation and crowd control</li>
                                            <li>Traffic congestion around Barsana and nearby Mathura/Vrindavan</li>
                                        </ul>
                                        <p className="mb-4">
                                            Many first-time visitors underestimate the scale of this celebration. That is why <strong>structured planning becomes extremely important.</strong>
                                        </p>
                                    </section>

                                    {/* Call to Action Section */}
                                    <section id="how-naman-helps" className="bg-stone-900 rounded-2xl p-8 text-white shadow-lg text-center transform hover:scale-[1.01] transition-transform my-10">
                                        <h3 className="text-3xl font-bold mb-4">How Naman Darshan Helps During Lathmar Holi</h3>
                                        <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto text-left">
                                            At Naman Darshan, we understand that devotees travel from far distances with deep faith and limited time. During Lathmar Holi in Barsana, we assist with:
                                        </p>
                                        <ul className="text-left max-w-xl mx-auto space-y-2 mb-8 text-slate-300">
                                            <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Coordinated <strong>Radha Rani Temple darshan booking support</strong></li>
                                            <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Proper festival-day timing guidance</li>
                                            <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Structured temple visit planning</li>
                                            <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Assistance for combined Nandgaon & Barsana Holi visits</li>
                                            <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Devotional travel coordination in Braj region</li>
                                        </ul>
                                        <p className="text-lg mb-8 opacity-90 font-medium">
                                            Our approach is simple — we help you navigate the intensity of the festival so your experience remains spiritually meaningful, not physically exhausting.
                                        </p>
                                        <BookingModal
                                            isOpen={isBookingOpen}
                                            onClose={() => setIsBookingOpen(false)}
                                            type="darshan"
                                            serviceName="Barsana Lathmar Holi 2026"
                                        />
                                        <button
                                            onClick={() => setIsBookingOpen(true)}
                                            className="w-full bg-white text-stone-900 font-bold py-3.5 rounded-xl hover:bg-rose-50 transition-colors shadow-lg mt-2 relative z-10 cursor-pointer max-w-sm"
                                        >
                                            Request Darshan Assistasnce / Request Callback
                                        </button>
                                    </section>


                                    <section id="how-to-reach">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">How to Reach Barsana for Lathmar Holi</h2>
                                        <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                                            <li><strong>State:</strong> Uttar Pradesh</li>
                                            <li><strong>District:</strong> Mathura</li>
                                            <li><strong>Nearest railway station:</strong> Mathura Junction</li>
                                            <li><strong>Nearby pilgrimage hubs:</strong> Vrindavan, Govardhan, Nandgaon</li>
                                            <li><strong>Road access:</strong> Accessible from Delhi NCR via Mathura</li>
                                        </ul>
                                        <p className="font-medium text-orange-600 bg-orange-50 p-4 rounded-lg">
                                            Due to peak footfall on 25 February, early arrival and pre-arranged darshan coordination are highly advisable.
                                        </p>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="why-plan-early">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">Why Devotees Should Plan Early</h2>
                                        <p className="mb-4">Search interest for:</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-6">
                                            <li>Lathmar Holi Barsana date</li>
                                            <li>Radha Rani Temple Holi darshan</li>
                                            <li>Barsana Holi travel guide</li>
                                            <li>Braj Holi temple visit booking</li>
                                        </ul>
                                        <p className="mb-4">...peaks weeks before the festival.</p>
                                        <p className="mb-4 text-slate-800 font-medium">Accommodation fills quickly. Temple areas become fully occupied. Movement slows down significantly.</p>
                                        <p className="mb-6">
                                            Advance planning ensures that instead of worrying about logistics, you immerse yourself in devotion.
                                        </p>
                                    </section>

                                    <section className="bg-orange-50 rounded-2xl p-8 border border-orange-100 text-center shadow-sm my-10">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-display">A Celebration of Strength, Devotion & Divine Play</h2>
                                        <p className="mb-6 text-slate-700">
                                            Lathmar Holi is powerful. It is loud. It is colourful. But at its core, it is sacred.
                                        </p>
                                        <p className="mb-6 text-slate-700">
                                            Standing in Barsana on this day, hearing "Radhe Radhe" echo through the temple hills, you realise this is not just a festival — it is living tradition.
                                        </p>
                                        <p className="font-bold text-slate-800">
                                            If you are planning to attend Lathmar Holi 25 February in Barsana, consider arranging your temple darshan support in advance for a smoother and more fulfilling experience.
                                        </p>
                                        <p className="font-bold text-xl text-orange-600 mt-6">Celebrate Braj Holi with faith, preparation, and proper guidance.<br />Radhe Radhe 🙏</p>
                                    </section>

                                    <hr className="my-8 border-slate-100" />

                                    <section id="faqs">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-3">
                                            <Smile className="w-8 h-8 text-orange-500" /> FAQs
                                        </h2>
                                        <Accordion type="single" collapsible className="w-full">
                                            <AccordionItem value="item-1" className="bg-white border text-slate-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    1. What makes Lathmar Holi in Barsana unique?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-lg pb-4 pt-2">
                                                    Barsana's Lathmar Holi is temple-centered, rooted in Braj tradition, and spiritually symbolic, recreating the divine playful leelas of Radha and Krishna rather than being just a colour festival.
                                                </AccordionContent>
                                            </AccordionItem>

                                            <AccordionItem value="item-2" className="bg-white border text-slate-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    2. When is Lathmar Holi celebrated in Barsana 2026?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-lg pb-4 pt-2">
                                                    Lathmar Holi in Barsana will be celebrated on <strong>25 February 2026</strong>, attracting thousands of devotees and visitors.
                                                </AccordionContent>
                                            </AccordionItem>

                                            <AccordionItem value="item-3" className="bg-white border text-slate-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    3. Is Barsana very crowded during Lathmar Holi?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-lg pb-4 pt-2">
                                                    Yes. It is one of the most crowded Braj festivals, with long darshan queues, regulated entry, traffic congestion, and heavy police presence.
                                                </AccordionContent>
                                            </AccordionItem>

                                            <AccordionItem value="item-4" className="bg-white border text-slate-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    4. How can devotees prepare for Barsana Holi darshan?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-lg pb-4 pt-2">
                                                    Arriving early, planning travel in advance, and arranging darshan coordination beforehand helps ensure smoother temple access during peak festival hours.
                                                </AccordionContent>
                                            </AccordionItem>

                                            <AccordionItem value="item-5" className="bg-white border text-slate-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow">
                                                <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                                                    5. What is the nearest railway station to Barsana?
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-lg pb-4 pt-2">
                                                    The nearest major railway station is <strong>Mathura Junction</strong>, from where Barsana is accessible by road along with nearby pilgrimage towns like Vrindavan and Nandgaon.
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

export default LathmarHoliBlog;
