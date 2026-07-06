import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
import blogImage from "@/assets/blogs/MathuraHurangaBlog.jpg"; 
import CommentSection from "@/components/common/CommentSection";

const MathuraHurangaBlog = () => {
    const tableOfContents = [
        { id: "intro", title: "Introduction" },
        { id: "what-is-huranga", title: "What is Janmabhoomi Huranga" },
        { id: "spiritual-significance", title: "Spiritual Significance" },
        { id: "what-happens", title: "What Happens on Huranga Day" },
        { id: "security-guidelines", title: "Temple Entry & Security" },
        { id: "darshan-guide", title: "Janmabhoomi Darshan Guide" },
        { id: "crowd-planning", title: "Crowd Planning & Tips" },
        { id: "travel-routes", title: "Travel Routes to Mathura" },
        { id: "completing-pilgrimage", title: "Completing the Pilgrimage" },
        { id: "faq", title: "Frequently Asked Questions" }
    ];

    const recentPosts = [
        { title: "Barsana Lathmar Holi: Complete Guide", link: "/blog/barsana-lathmar-holi-guide" },
        { title: "Ram Mandir Ayodhya: A Historic Victory", link: "/blog/ram-mandir-ayodhya-history-darshan-guide" },
        { title: "Vrindavan Phoolwali Holi Secrets", link: "/blog/vrindavan-phoolwali-holi" }
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
        "headline": "Mathura Janmabhoomi Huranga 2026 Darshan Travel Guide",
        "description": "Complete guide for Mathura Janmabhoomi Huranga including temple darshan tips, travel planning, entry rules, timing, and crowd advice for a smooth Braj Holi experience.",
        "keywords": [
            "Mathura Janmabhoomi Huranga",
            "Mathura Holi 2026",
            "Shri Krishna Janmabhoomi darshan",
            "Braj Holi festival",
            "Holi in Mathura",
            "Janmabhoomi Holi guide",
            "Krishna birthplace festival",
            "Braj pilgrimage planning"
        ],
        "datePublished": "2026-01-01",
        "eventDate": "2026-02-28",
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
            "name": "Mathura Janmabhoomi Huranga 2026",
            "startDate": "2026-02-28",
            "location": {
                "@type": "Place",
                "name": "Mathura, Uttar Pradesh, India"
            }
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "When is Mathura Janmabhoomi Huranga celebrated in 2026?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Mathura Janmabhoomi Huranga will be celebrated on 28 February 2026 during the Braj Holi festival week."
                }
            },
            {
                "@type": "Question",
                "name": "Where does Janmabhoomi Huranga take place?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The celebration takes place inside and around the Shri Krishna Janmabhoomi temple complex in Mathura, one of the most sacred sites in India."
                }
            },
            {
                "@type": "Question",
                "name": "Why is Janmabhoomi Huranga spiritually important?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is celebrated at Krishna’s birthplace, symbolising devotion, offering colours to the divine, and completing the Braj Holi pilgrimage circuit."
                }
            },
            {
                "@type": "Question",
                "name": "Is Shri Krishna Janmabhoomi crowded during Holi?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. The temple complex experiences extremely high footfall with strict security checks, controlled entry, and long waiting times for darshan."
                }
            },
            {
                "@type": "Question",
                "name": "How should devotees plan for Janmabhoomi Holi darshan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Arriving early, planning travel and stay in advance, and coordinating darshan timing beforehand helps ensure a smoother temple visit."
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            
            <SEO
                title="Mathura Janmabhoomi Huranga 2026 Darshan Travel Guide"
                keywords={[
                    "Mathura Janmabhoomi Huranga",
                    "Mathura Holi 2026",
                    "Shri Krishna Janmabhoomi darshan",
                    "Braj Holi festival",
                    "Holi in Mathura",
                    "Janmabhoomi Holi guide",
                    "Krishna birthplace festival",
                    "Braj pilgrimage planning"
                ]}
                description="Plan your visit to Mathura Janmabhoomi Huranga 2026 with this complete darshan and travel guide. Learn entry rules, temple tips, security checks, crowd planning, and timing insights to attend Shri Krishna Janmabhoomi Holi smoothly and experience the spiritual climax of Braj Holi celebrations."
            />
            <Header />
            <main className="pt-36 md:pt-48 lg:pt-52 pb-12">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb & Share */}
                    <BlogBreadcrumb pageTitle="Mathura Janmabhoomi Huranga" />

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
                                            <ChevronRight className="w-3 h-3 text-orange-500 shrink-0" />
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
                                        Shri Krishna Janmabhoomi Holi Celebration & Temple Darshan Booking Guide
                                    </h1>
                                    <div className="flex items-center gap-4 text-sm text-slate-600">
                                        <span>📅 01 January 2026</span>
                                        <span>•</span>
                                        <span>10 min read</span>
                                    </div>
                                </div>

                                {/* Hero Image */}
                                <div className="w-full h-64 md:h-96 bg-slate-200">
                                    <img src={blogImage} alt="Mathura Janmabhoomi Huranga Holi" className="w-full h-full object-cover" />
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-10 space-y-8 text-lg leading-relaxed text-slate-700">
                                    <p id="intro" className="text-xl font-medium text-slate-800 border-l-4 border-orange-500 pl-6 italic">
                                        After the grand Holi celebrations of Barsana, Nandgaon and Vrindavan, the final spiritual crescendo of Braj Holi arrives in Mathura — the birthplace of Krishna. On <strong>28 February</strong>, thousands of devotees gather at Shri Krishna Janmabhoomi for the much-awaited Mathura Janmabhoomi Huranga — one of the most powerful Holi celebrations in the entire Braj region.
                                    </p>
                                    
                                    <p>
                                        For pilgrims planning to attend, this is not just another Holi event. It is Holi at Krishna’s Janmasthan. And because of the scale of participation, Janmabhoomi Holi darshan planning becomes absolutely essential.
                                    </p>

                                    <section id="what-is-huranga" className="bg-slate-50 p-6 rounded-xl">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">What is Janmabhoomi Huranga Festival?</h2>
                                        <p className="mb-4">
                                            Mathura Janmabhoomi Huranga is a massive Holi celebration held within and around the Shri Krishna Janmabhoomi temple complex in Mathura, Uttar Pradesh. Unlike Lathmar Holi in Barsana and Nandgaon, Huranga focuses on:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 mb-4">
                                            <li>Grand gulal celebrations inside temple premises</li>
                                            <li>Devotional kirtans and chanting</li>
                                            <li>Temple-centered rituals before colours begin</li>
                                            <li>Large open courtyard participation</li>
                                            <li>Collective Holi played by devotees in a sacred setting</li>
                                        </ul>
                                        <p>
                                            The celebration begins with ritual offerings. Only after temple traditions are observed does the colour truly take over the atmosphere. The air gradually fills with pink, saffron and yellow gulal — but the setting remains spiritually grounded.
                                        </p>
                                    </section>

                                    <section id="spiritual-significance">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Spiritual Significance of Holi at Krishna Birthplace</h2>
                                        <p className="mb-4">
                                            Among all Braj Holi events, Huranga at Janmabhoomi carries unmatched emotional significance. Here, devotees are celebrating Holi:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 mb-4">
                                            <li>At Krishna’s birthplace</li>
                                            <li>Within one of the most sacred temple complexes in India</li>
                                            <li>In the heart of the Braj region</li>
                                        </ul>
                                        <p className="mb-4">
                                            For many pilgrims, Mathura Janmabhoomi Holi symbolises offering colours at the site of divine birth, completing the full Braj Holi pilgrimage circuit, and experiencing Holi not just as a festival, but as devotion.
                                        </p>
                                        <p>
                                            The energy is intense, but it is not chaotic in spirit. Beneath the colour and crowd, there is deep reverence.
                                        </p>
                                    </section>

                                    <section id="what-happens">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">What Happens on Huranga Day</h2>
                                        <p className="mb-4">
                                            If you are planning to attend Mathura Huranga 2026, here is what the ground reality looks like on 28 February:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 mb-4">
                                            <li>Devotees begin arriving early morning</li>
                                            <li>Temple entry queues form quickly</li>
                                            <li>Security screening is mandatory</li>
                                            <li>Courtyards reach full capacity before midday</li>
                                            <li>Gulal fills temple spaces after rituals conclude</li>
                                        </ul>
                                        <p>
                                            By afternoon, crowd density becomes very high. Entry and exit points are tightly controlled. Because Shri Krishna Janmabhoomi is a high-security religious site, arrangements are stricter than in village celebrations like Barsana or Nandgaon.
                                        </p>
                                    </section>

                                    <section id="security-guidelines" className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                                        <h2 className="text-3xl font-bold text-orange-900 mb-4 font-display">Temple Entry & Security Guidelines</h2>
                                        <p className="mb-4">Visitors should be well prepared for the following realities:</p>
                                        <ul className="list-disc pl-6 space-y-2 mb-4">
                                            <li>Strict security checks</li>
                                            <li>Limited carrying items allowed inside</li>
                                            <li>Restricted electronics</li>
                                            <li>Possible waiting hours for darshan</li>
                                            <li>Heavy police and crowd control presence</li>
                                        </ul>
                                        <p>
                                            Many devotees searching for Mathura Janmabhoomi Holi dates or event guides often underestimate the level of regulation at the temple complex. Planning ahead makes a major difference.
                                        </p>
                                    </section>

                                    <section id="darshan-guide">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Shri Krishna Janmabhoomi Darshan Guide</h2>
                                        <p className="mb-4">
                                            On 28 February, Mathura sees a massive surge of pilgrims from Delhi NCR, Gujarat, Maharashtra, Rajasthan, and international Krishna devotees.
                                        </p>
                                        <p className="mb-4">
                                            Without structured planning, darshan queues can take hours, movement inside the complex slows significantly, and access timing becomes unpredictable.
                                        </p>
                                        <p>
                                            For a spiritually meaningful experience, organised coordination is strongly recommended.
                                        </p>
                                    </section>

                                    <section id="crowd-planning">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Crowd Planning & Visitor Tips</h2>
                                        <p className="mb-4">
                                            At Naman Darshan, we assist devotees who wish to complete their Braj Holi journey at Shri Krishna Janmabhoomi in an organised way. Our support includes:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 mb-4">
                                            <li>Janmabhoomi temple darshan planning assistance</li>
                                            <li>Festival-day timing guidance</li>
                                            <li>Structured Holi visit coordination in Mathura</li>
                                            <li>Complete Braj Holi itinerary support (Barsana–Nandgaon–Vrindavan–Mathura)</li>
                                            <li>Devotional travel assistance within Mathura district</li>
                                        </ul>
                                        <p className="font-semibold text-primary">
                                            Our objective is simple: You focus on devotion at Krishna’s birthplace — we help you navigate the structure around it.
                                        </p>
                                    </section>
                                    
                                    <section id="travel-routes" className="bg-slate-50 p-6 rounded-xl">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Travel Routes to Reach Mathura</h2>
                                        <ul className="list-disc pl-6 space-y-2 mb-4">
                                            <li><strong>Location:</strong> Mathura district, Uttar Pradesh</li>
                                            <li><strong>Nearest Railway Station:</strong> Mathura Junction</li>
                                            <li><strong>By Road:</strong> 3–4 hours from Delhi NCR</li>
                                            <li><strong>Proximity:</strong> Close to Vrindavan, Govardhan, Barsana & Nandgaon</li>
                                        </ul>
                                        <p className="text-sm italic text-slate-600">
                                            *During Holi week, accommodation across Mathura fills rapidly. Advance arrangements are strongly advisable.
                                        </p>
                                    </section>

                                    <section id="completing-pilgrimage">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Completing the Braj Holi Pilgrimage</h2>
                                        <p className="mb-4">
                                            Mathura Janmabhoomi Huranga is not just a colourful gathering — it is the spiritual culmination of Braj Holi. After witnessing Lathmar Holi in Barsana and Nandgaon, and Rangbharni Ekadashi in Vrindavan, Huranga brings the journey back to its origin — Krishna’s birthplace.
                                        </p>
                                        <p className="mb-4">
                                            If you are planning to attend Mathura Janmabhoomi Holi on 28 February, consider arranging your temple darshan planning in advance for a smoother, more devotional experience.
                                        </p>
                                        <p className="font-bold text-orange-600 mb-4">
                                            Celebrate Holi where Krishna was born — with preparation, reverence, and clarity. Radhe Radhe 🌸
                                        </p>
                                    </section>

                                    <section id="faq">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Frequently Asked Questions (FAQ)</h2>
                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="font-bold text-lg text-slate-800">1. When is Mathura Janmabhoomi Huranga celebrated in 2026?</h3>
                                                <p className="text-slate-600 mt-1">Mathura Janmabhoomi Huranga will be celebrated on 28 February 2026 during the Braj Holi festival week.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg text-slate-800">2. Where does Janmabhoomi Huranga take place?</h3>
                                                <p className="text-slate-600 mt-1">The celebration takes place inside and around the Shri Krishna Janmabhoomi temple complex in Mathura, one of the most sacred sites in India.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg text-slate-800">3. Why is Janmabhoomi Huranga spiritually important?</h3>
                                                <p className="text-slate-600 mt-1">It is celebrated at Krishna’s birthplace, symbolising devotion, offering colours to the divine, and completing the Braj Holi pilgrimage circuit.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg text-slate-800">4. Is Shri Krishna Janmabhoomi crowded during Holi?</h3>
                                                <p className="text-slate-600 mt-1">Yes. The temple complex experiences extremely high footfall with strict security checks, controlled entry, and long waiting times for darshan.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg text-slate-800">5. How should devotees plan for Janmabhoomi Holi darshan?</h3>
                                                <p className="text-slate-600 mt-1">Arriving early, planning travel and stay in advance, and coordinating darshan timing beforehand helps ensure a smoother temple visit.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Call to Action Section */}
                                    <section className="bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl p-8 text-white shadow-lg transform hover:scale-[1.01] transition-transform">
                                        <h3 className="text-3xl font-bold mb-4 flex items-center gap-2">
                                            <span>🌸</span> Plan Your Braj Holi Journey
                                        </h3>
                                        <p className="text-lg mb-6 opacity-90">
                                            Don't let logistics hinder your devotion during the peak Holi rush. At Naman Darshan, we ensure your visit to Krishna's birthplace is spiritually fulfilling. We handle your planning and darshan coordination.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Link to="/mathura-vrindavan-packages">
                                                <Button size="lg" className="w-full sm:w-auto bg-white text-orange-700 hover:bg-orange-50 font-bold text-lg h-12">
                                                    View Braj Holi Packages
                                                </Button>
                                            </Link>
                                            <Link to="/darshan-booking">
                                                <Button size="lg" className="w-full sm:w-auto bg-stone-900 text-white hover:bg-stone-800 font-bold text-lg h-12">
                                                    Book Holi Darshan Help
                                                </Button>
                                            </Link>
                                        </div>
                                    </section>
                                </div>
                            </div>

                            <CommentSection />
                        </article>

                        {/* Right Sidebar - Recent Posts */}
                        <aside className="lg:col-span-3">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-slate-100">
                                <h3 className="font-bold text-lg mb-4 text-slate-900 bg-primary text-white px-4 py-3 -mx-6 -mt-6 rounded-t-xl">Recent Posts</h3>
                                <div className="space-y-4 mt-6">
                                    {recentPosts.map((post, index) => (
                                        <Link
                                            key={index}
                                            to={post.link}
                                            className="block p-3 hover:bg-slate-50 rounded-lg transition-colors border-b last:border-0 border-slate-100 group"
                                        >
                                            <p className="text-sm font-medium text-slate-800 group-hover:text-primary line-clamp-2 transition-colors">
                                                {post.title}
                                            </p>
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

export default MathuraHurangaBlog;