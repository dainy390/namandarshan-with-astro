import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Flame } from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
// Import your asset here
import blogImage from "@/assets/blogs/phalen-fire-holi.jpg";
import CommentSection from "@/components/common/CommentSection";

const PhalenHoliBlog = () => {
    const tableOfContents = [
        { id: "intro", title: "Introduction" },
        { id: "what-is-phalen", title: "What is Phalen Gaon Holi" },
        { id: "spiritual-meaning", title: "Meaning of Fire Walking" },
        { id: "what-happens", title: "Holika Dahan Night" },
        { id: "safety-guide", title: "Crowd & Safety Planning" },
        { id: "travel-route", title: "Travel Route to Phalen" },
        { id: "visitor-expectations", title: "What to Expect" },
        { id: "braj-darshan", title: "Combining with Braj Darshan" },
        { id: "faq", title: "Frequently Asked Questions" }
    ];

    const recentPosts = [
        { title: "Gokul Chhadimar Holi Guide", link: "/blog/chhadimar-holi-gokul-guide" },
        { title: "Mathura Janmabhoomi Huranga", link: "/blog/mathura-janmabhoomi-huranga" },
        { title: "Vrindavan Phoolwali Holi", link: "/blog/vrindavan-phoolwali-holi" }
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Phalen Gaon Holi 2026 Fire Ritual Travel Guide",
        "description": "Complete guide for Phalen Gaon Holi including fire ritual details, travel planning, routes, timing, and crowd tips to witness the Holika Dahan tradition safely.",
        "keywords": [
            "Phalen Gaon Holi", "Phalen Holika Dahan", "Fire walking Holi",
            "Kosi Kalan Holi ritual", "Braj Holi festival", "Holika Dahan ceremony",
            "Mathura Holi events", "Braj pilgrimage guide"
        ],
        "datePublished": "2026-01-01",
        "eventDate": "2026-03-04",
        "author": { "@type": "Organization", "name": "Naman Darshan" },
        "publisher": { "@type": "Organization", "name": "Naman Darshan" },
        "mainEntityOfPage": { "@type": "WebPage" },
        "articleSection": "Festival Travel Guide",
        "inLanguage": "en",
        "about": {
            "@type": "Event",
            "name": "Phalen Gaon Holi 2026",
            "startDate": "2026-03-04",
            "location": { "@type": "Place", "name": "Phalen Village, Mathura, Uttar Pradesh, India" }
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "When is Phalen Gaon Ki Holi celebrated in 2026?",
                "acceptedAnswer": { "@type": "Answer", "text": "Phalen Gaon Ki Holi will be celebrated on 4 March 2026 on the night of Holika Dahan during the Holi festival." }
            },
            {
                "@type": "Question",
                "name": "What happens during the Phalen Holika Dahan ritual?",
                "acceptedAnswer": { "@type": "Answer", "text": "A priest who has observed weeks of fasting walks barefoot through a massive bonfire as part of an ancient ritual symbolizing faith and devotion." }
            },
            {
                "@type": "Question",
                "name": "Where is Phalen village located?",
                "acceptedAnswer": { "@type": "Answer", "text": "Phalen village is located near Kosi Kalan in Mathura district, Uttar Pradesh." }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <SEO
                title="Phalen Gaon Holi 2026 Fire Ritual Travel Guide Tips"
                keywords={["Phalen Gaon Holi", "Phalen Fire Walk", "Holika Dahan 2026", "Braj Fire Ritual"]}
                description="Plan your visit to Phalen Gaon Holi 2026 with this complete travel guide. witness the famous Holika Dahan priest fire walk near Kosi Kalan safely."
            />
            <Header />
            <main className="pt-36 md:pt-48 lg:pt-52 pb-12">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb & Share */}
                    <BlogBreadcrumb pageTitle="Phalen Gaon Ki Holi" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <aside className="lg:col-span-3">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-slate-100">
                                <h3 className="font-bold text-lg mb-4 text-slate-900 border-b pb-3">Guide Chapters</h3>
                                <nav className="space-y-2">
                                    {tableOfContents.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:text-primary hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2"
                                        >
                                            <Flame className="w-3 h-3 text-red-500 shrink-0" />
                                            {item.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        <article className="lg:col-span-6">
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100">
                                <div className="p-8 md:p-10">
                                    <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 leading-tight">
                                        Phalen Gaon Ki Holi: The Extraordinary Fire Walking Ritual of Braj
                                    </h1>
                                    <div className="flex items-center gap-4 text-sm text-slate-600">
                                        <span>📅 01 January 2026</span>
                                        <span>•</span>
                                        <span>12 min read</span>
                                    </div>
                                </div>

                                <div className="w-full h-64 md:h-96 bg-slate-200">
                                    <img src={blogImage} alt="Phalen Gaon Fire Ritual" className="w-full h-full object-cover" />
                                </div>

                                <div className="p-8 md:p-10 space-y-8 text-lg leading-relaxed text-slate-700">
                                    <p id="intro" className="text-xl font-medium text-slate-800 border-l-4 border-red-600 pl-6 italic">
                                        When most people think of Holi, they imagine colours. But in Phalen village, near Kosi Kalan, Holi is about fire. On <strong>4 March 2026</strong>, a priest will walk barefoot through a massive bonfire, emerging unharmed in a tradition observed for generations.
                                    </p>

                                    <section id="what-is-phalen" className="bg-slate-50 p-6 rounded-xl">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">What is Phalen Gaon Holi Ritual?</h2>
                                        <p className="mb-4">
                                            Phalen Gaon Ki Holi is a unique Holika Dahan tradition held annually in Phalen village. The ritual includes:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Weeks of strict fasting and spiritual discipline by a designated priest.</li>
                                            <li>The preparation of a massive Holika bonfire in the village.</li>
                                            <li>The priest walking barefoot through blazing fire and emerging without injury.</li>
                                        </ul>
                                    </section>

                                    <section id="spiritual-meaning">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Spiritual Meaning of Fire Walking Tradition</h2>
                                        <p>
                                            Unlike the playful Lathmar Holi, Phalen represents the triumph of faith over fear and devotion overcoming physical elements. It symbolises the story of Prahlad, where protection is granted through total surrender to the divine.
                                        </p>
                                    </section>

                                    <section id="what-happens">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">What Happens on Holika Dahan Night</h2>
                                        <p>
                                            Thousands gathering for the fire ritual on 4 March. The bonfire is lit late at night, and the priest, after performing ritual prayers, steps into the flames as the village echoes with devotional chants.
                                        </p>
                                    </section>

                                    <section id="safety-guide" className="bg-red-50 p-6 rounded-xl border border-red-100">
                                        <h2 className="text-3xl font-bold text-red-900 mb-4 font-display">Crowd & Safety Planning Guide</h2>
                                        <p className="mb-4">The village infrastructure is limited, so visitors must be prepared for:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Heavy traffic near village entry roads.</li>
                                            <li>Strong security and mandatory crowd control measures.</li>
                                            <li>Limited food and restroom facilities in the immediate area.</li>
                                        </ul>
                                    </section>

                                    <section id="travel-route">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Travel Route to Phalen Village</h2>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li><strong>Nearest Town:</strong> Kosi Kalan (Mathura district).</li>
                                            <li><strong>From Mathura:</strong> Approximately 90–120 minutes by road.</li>
                                            <li><strong>From Delhi:</strong> Easily accessible via the Taj Expressway/NH19.</li>
                                        </ul>
                                    </section>

                                    <section id="visitor-expectations">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">What Visitors Should Expect</h2>
                                        <p>
                                            Expect long walking distances from parking areas and significant delays in entry. Because the ritual happens at night, movement becomes more challenging as the village becomes packed.
                                        </p>
                                    </section>

                                    <section id="braj-darshan" className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Combining Phalen with Braj Darshan</h2>
                                        <p className="mb-4">
                                            Most pilgrims combine Phalen Holi with Mathura Janmabhoomi, Vrindavan temples, and Gokul pilgrimage stops. At Naman Darshan, we assist with:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Structured Braj Holi itinerary planning.</li>
                                            <li>Temple darshan coordination in Mathura & Vrindavan.</li>
                                            <li>Scheduling between colour events and fire rituals.</li>
                                        </ul>
                                    </section>

                                    <section id="faq">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Frequently Asked Questions</h2>
                                        <div className="space-y-6">
                                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:border-stone-200 transition-colors">
                                                <h3 className="font-bold text-lg text-stone-800 mb-3">Can Phalen Holi be combined with other Braj visits?</h3>
                                                <p className="text-slate-600">Yes, it is often combined with visits to Mathura, Vrindavan, and Barsana for a complete Braj Holi spiritual itinerary.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="bg-gradient-to-br from-red-600 to-orange-700 rounded-2xl p-8 text-white shadow-lg">
                                        <h3 className="text-3xl font-bold mb-4 flex items-center gap-2"><span>🔥</span> Plan Your Sacred Fire Journey</h3>
                                        <p className="text-lg mb-6 opacity-90">
                                            Phalen is intense and infrastructure is tight. Let Naman Darshan handle your travel and darshan coordination across Braj for a safe experience.
                                        </p>
                                        <Link to="/contact">
                                            <Button size="lg" className="bg-white text-red-700 hover:bg-red-50 font-bold">
                                                Coordinate My Visit
                                            </Button>
                                        </Link>
                                    </section>
                                </div>
                            </div>
                            <CommentSection />
                        </article>

                        <aside className="lg:col-span-3">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-slate-100">
                                <h3 className="font-bold text-lg mb-4 text-slate-900 bg-red-600 text-white px-4 py-3 -mx-6 -mt-6 rounded-t-xl">Related Rituals</h3>
                                <div className="space-y-4 mt-6">
                                    {recentPosts.map((post, index) => (
                                        <Link key={index} to={post.link} className="block p-3 hover:bg-slate-50 rounded-lg border-b last:border-0 border-slate-100 group transition-colors">
                                            <p className="text-sm font-medium text-slate-800 group-hover:text-red-600 line-clamp-2">{post.title}</p>
                                        </Link>
                                    ))}
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

export default PhalenHoliBlog;