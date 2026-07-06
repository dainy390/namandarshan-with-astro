import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Sparkles, Moon, Sun } from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
import blogImage from "@/assets/blogs/vedic-vs-western-astrology.jpg";
import CommentSection from "@/components/common/CommentSection";


const AstrologyComparisonBlog = () => {
    const tableOfContents = [
        { id: "intro", title: "Introduction" },
        { id: "what-is-vedic", title: "What Is Vedic Astrology?" },
        { id: "what-is-western", title: "What Is Western Astrology?" },
        { id: "zodiac-difference", title: "Sidereal vs Tropical Zodiac" },
        { id: "prediction-methods", title: "Prediction Methods Compared" },
        { id: "destiny-vs-psychology", title: "Destiny vs Psychology" },
        { id: "accuracy", title: "Which System Is More Accurate?" },
        { id: "sign-change", title: "Why Your Zodiac Sign Changes" },
        { id: "faq", title: "Frequently Asked Questions" }
    ];

    const recentPosts = [
        { title: "Dauji Huranga 2026 Guide", link: "/blog/dauji-huranga-baldeo-guide" },
        { title: "Phalen Gaon Fire Holi", link: "/blog/phalen-gaon-fire-holi-guide" },
        { title: "Gokul Chhadimar Holi", link: "/blog/chhadimar-holi-gokul-guide" }
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
        "headline": "Vedic vs Western Astrology — Understanding the Real Difference",
        "description": "Learn the real difference between Vedic and Western astrology including zodiac systems, prediction techniques, and accuracy comparison.",
        "author": { "@type": "Person", "name": "Naman Darshan" },
        "publisher": { "@type": "Organization", "name": "Naman Darshan" },
        "datePublished": "2026-02-27",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://namandarshan.com/blog/vedic-vs-western-astrology-difference" }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the difference between Vedic and Western astrology?",
                "acceptedAnswer": { "@type": "Answer", "text": "Vedic astrology uses the Sidereal zodiac based on actual constellations, while Western astrology uses the Tropical zodiac based on seasonal positions." }
            },
            {
                "@type": "Question",
                "name": "Which astrology is more accurate?",
                "acceptedAnswer": { "@type": "Answer", "text": "Accuracy depends more on the astrologer's skill than the system. Vedic astrology is often preferred for predictions, while Western astrology is popular for personality analysis." }
            },
            {
                "@type": "Question",
                "name": "Why does my zodiac sign change in Vedic astrology?",
                "acceptedAnswer": { "@type": "Answer", "text": "This happens because Vedic astrology uses the Sidereal zodiac, which differs by about 23–24 degrees from the Tropical zodiac used in Western astrology." }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <SEO
                title="Vedic vs Western Astrology — Real Difference Explained Simply"
                keywords={["Vedic vs Western astrology", "sidereal vs tropical zodiac", "Jyotish vs Western", "astrology accuracy"]}
                description="Discover the real difference between Vedic and Western astrology, including zodiac systems, prediction methods, and accuracy comparison explained clearly."
            />
            <Header />
            <main className="pt-36 md:pt-48 lg:pt-52 pb-12">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb & Share */}
                    <BlogBreadcrumb pageTitle="Vedic vs Western Astrology" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <aside className="lg:col-span-3">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-slate-100">
                                <h3 className="font-bold text-lg mb-4 text-slate-900 border-b pb-3 text-primary">Guide Content</h3>
                                <nav className="space-y-2">
                                    {tableOfContents.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:text-primary hover:bg-orange-50 rounded-lg transition-colors flex items-center gap-2"
                                        >
                                            <Sparkles className="w-3 h-3 text-orange-500 shrink-0" />
                                            {item.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        <article className="lg:col-span-6">
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100">
                                <div className="p-8 md:p-10">
                                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                                        Astrology Guide
                                    </div>
                                    <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                                        Vedic vs Western Astrology: Understanding the Real Difference
                                    </h1>

                                    <div className="flex items-center gap-4 text-sm text-slate-600 mb-8">
                                        <span>📅 27 February 2026</span>
                                        <span>•</span>
                                        <span>12 min read</span>
                                    </div>

                                    <div className="bg-slate-50 border-l-4 border-primary p-4 mb-8">
                                        <p className="text-slate-700 font-medium italic">
                                            <strong>Key Takeaway:</strong> The core distinction lies in the zodiac systems. Western astrology follows the Tropical zodiac (seasonal), while Vedic astrology uses the Sidereal zodiac (fixed stars), creating a 23–24 degree difference.
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full h-64 md:h-96 bg-slate-200">
                                    <img src={blogImage} alt="Vedic and Western Astrology Systems" className="w-full h-full object-cover" />
                                </div>

                                <div className="p-8 md:p-10 space-y-8 text-lg leading-relaxed text-slate-700">
                                    <section id="intro">
                                        <p>
                                            Astrology is much more than just a morning newspaper column. It is an ancient map of human potential...
                                        </p>
                                    </section>

                                    <section id="zodiac-difference" className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                                        <h2 className="text-3xl font-bold text-orange-900 mb-4 font-display">Sidereal vs Tropical Zodiac</h2>
                                        <p className="mb-4">
                                            This is the "technical rift." Because of the Earth's axial precession (a slow wobble), the positions of the stars shift slightly relative to our seasons over thousands of years.
                                        </p>
                                        <ul className="space-y-4">
                                            <li className="flex gap-3">
                                                <div className="shrink-0 w-6 h-6 rounded-full bg-orange-200 text-orange-700 flex items-center justify-center font-bold text-sm mt-1">1</div>
                                                <p><strong>Western (Tropical):</strong> Fixed to the Spring Equinox. 0° Aries always starts on March 21st.</p>
                                            </li>
                                            <li className="flex gap-3">
                                                <div className="shrink-0 w-6 h-6 rounded-full bg-orange-200 text-orange-700 flex items-center justify-center font-bold text-sm mt-1">2</div>
                                                <p><strong>Vedic (Sidereal):</strong> Fixed to the actual constellations.</p>
                                            </li>
                                        </ul>
                                    </section>

                                    <section id="faq" className="space-y-6">
                                        <h2 className="text-3xl font-bold text-gray-900 font-display">Frequently Asked Questions</h2>
                                        <div className="divide-y divide-slate-100">
                                            <div className="py-4">
                                                <h3 className="font-bold text-lg text-slate-900">1. Why is my Vedic sign different?</h3>
                                                <p className="text-slate-600 mt-2 text-base">Vedic astrology accounts for the precession of the equinoxes.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="bg-gradient-to-br from-primary to-orange-600 rounded-2xl p-8 text-white shadow-xl text-center">
                                        <h3 className="text-3xl font-bold mb-4">Uncover Your Divine Map</h3>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <Link to="/contact">
                                                <Button size="lg" className="bg-white text-primary hover:bg-orange-50 font-bold px-8 py-6 text-lg rounded-xl">
                                                    Book a Consultation
                                                </Button>
                                            </Link>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            <CommentSection />
                        </article>

                        <aside className="lg:col-span-3">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-slate-100">
                                <h3 className="font-bold text-lg mb-4 text-slate-900 bg-primary text-white px-4 py-3 -mx-6 -mt-6 rounded-t-xl">Latest Insights</h3>
                                <div className="space-y-4 mt-6">
                                    {recentPosts.map((post, index) => (
                                        <Link key={index} to={post.link} className="block p-3 hover:bg-orange-50 rounded-lg border-b last:border-0 border-slate-100 group transition-all">
                                            <p className="text-sm font-medium text-slate-800 group-hover:text-primary transition-colors">{post.title}</p>
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

export default AstrologyComparisonBlog;