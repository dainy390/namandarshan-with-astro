import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
import CommentSection from "@/components/common/CommentSection";
import { Helmet } from "react-helmet-async";


const heroImage = "/assets/sunSignvsMoonSign.jpg";

const SunMoonSignBlog = () => {
    const tableOfContents = [
        { id: "intro", title: "Introduction" },
        { id: "what-is-sun-sign", title: "What Is a Sun Sign?" },
        { id: "what-is-moon-sign", title: "What Is a Moon Sign?" },
        { id: "key-differences", title: "Key Differences" },
        { id: "why-both-matter", title: "Why Both Signs Matter" },
        { id: "zodiac-traits", title: "Zodiac Signs Personality Traits" },
        { id: "combination-chart", title: "Sun & Moon Sign Combination" },
        { id: "element-combinations", title: "Element Combination Chart" }
    ];

    const recentPosts = [
        { title: "Vedic Astrology & Temple Remedies", link: "/blog/vedic-astrology-temple-remedies" },
        { title: "Kedarnath: The Abode of Shiva", link: "/blog/kedarnath-temple-yatra-history-legend" },
        { title: "Tirupati Balaji: Complete Darshan Guide", link: "/blog/tirupati-balaji-darshan-booking-laddu-mystery" }
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Sun Sign vs Moon Sign and Their Powerful Combination",
        "description": "Understand the difference between Sun Sign and Moon Sign, zodiac personality traits, and how their combination shapes your complete personality blueprint.",
        "author": {
            "@type": "Person",
            "name": "Admin"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Naman Darshan" // Fixed from arbitrary "Website Name" to match project name
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://namandarshan.com/blog/sun-sign-vs-moon-sign-difference"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the difference between Sun sign and Moon sign?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sun sign represents your outer personality and identity, while Moon sign reflects your emotions and inner world."
                }
            },
            {
                "@type": "Question",
                "name": "Why is Moon sign important in astrology?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Moon sign reveals emotional reactions, comfort zones, and subconscious behavior patterns."
                }
            },
            {
                "@type": "Question",
                "name": "Can two people have the same Sun sign but different personalities?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, because Moon sign and other planetary placements influence emotional and behavioral differences."
                }
            }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://namandarshan.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blogs",
                "item": "https://namandarshan.com/blogs"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Sun Sign vs Moon Sign"
            }
        ]
    };

    return (
        <div className="min-h-screen bg-stone-50">
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            </Helmet>
            <SEO
                title="Sun Sign vs Moon Sign Explained — Powerful Personality Combination Guide"
                keywords={[
                    "Sun sign vs Moon sign",
                    "zodiac personality traits",
                    "Moon sign meaning",
                    "Sun Moon combination chart",
                    "astrology basics",
                    "Difference between Sun and Moon sign",
                    "Sun sign and Moon sign meaning",
                    "Sun Moon combination astrology",
                    "Zodiac personality traits chart"
                ]}
                description="Learn the real difference between Sun Sign and Moon Sign, how they shape your personality, and explore zodiac traits and powerful element combinations."
            />
            <Header />
            <main className="pt-36 md:pt-48 lg:pt-52 pb-16">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb & Share */}
                    <BlogBreadcrumb pageTitle="Sun Sign vs Moon Sign" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Sidebar - Table of Contents */}
                        <aside className="lg:col-span-3 hidden lg:block">
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
                                {/* Hero Image */}
                                <div className="w-full">
                                    <img src={heroImage} alt="Sun Sign vs Moon Sign" className="w-full h-auto object-cover" />
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-10 space-y-8 text-lg leading-relaxed text-stone-800">
                                    <div id="intro">
                                        <h1 className="text-3xl md:text-5xl font-display font-bold text-stone-900 mb-6 leading-tight">
                                            Sun Sign vs Moon Sign and Their Powerful Combination
                                        </h1>
                                        <p>
                                            Understanding astrology becomes simple when you first learn the difference between your <strong>Sun Sign</strong> and your <strong>Moon Sign</strong>. These two together form the foundation of your personality — one shows the world who you are, and the other reveals who you are inside.
                                        </p>
                                    </div>

                                    <hr className="border-stone-200" />

                                    <section id="what-is-sun-sign">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">What Is a Sun Sign?</h2>
                                        <p className="mb-4">
                                            Your <strong>Sun Sign</strong> is determined by your date of birth.<br />
                                            It represents your:
                                        </p>
                                        <ul className="list-disc pl-5 mb-4 space-y-1">
                                            <li>Core personality</li>
                                            <li>Confidence and identity</li>
                                            <li>Goals and ambitions</li>
                                            <li>Natural strengths</li>
                                        </ul>
                                        <p>
                                            Think of the Sun as your <strong>outer light</strong> — the part of you that people notice first. It defines how you express yourself and how you move forward in life.
                                        </p>
                                    </section>

                                    <hr className="border-stone-200" />

                                    <section id="what-is-moon-sign">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">What Is a Moon Sign?</h2>
                                        <p className="mb-4">
                                            Your <strong>Moon Sign</strong> is calculated using your birth date, exact time, and place.<br />
                                            It represents your:
                                        </p>
                                        <ul className="list-disc pl-5 mb-4 space-y-1">
                                            <li>Emotions and feelings</li>
                                            <li>Inner thoughts</li>
                                            <li>Comfort zone</li>
                                            <li>Emotional reactions</li>
                                        </ul>
                                        <p>
                                            Think of the Moon as your <strong>inner world</strong> — the side of you that only close people truly understand.
                                        </p>
                                    </section>

                                    <hr className="border-stone-200" />

                                    <section id="key-differences">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Sun Sign vs Moon Sign – What's the Difference?</h2>
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-sm border border-stone-200">
                                                <thead>
                                                    <tr className="bg-stone-800 text-white">
                                                        <th className="p-4 border-b border-stone-700">#</th>
                                                        <th className="p-4 border-b border-stone-700">Sun Sign</th>
                                                        <th className="p-4 border-b border-stone-700">Moon Sign</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-stone-50 text-base">
                                                    <tr>
                                                        <td className="p-4 border-b border-stone-200 font-semibold">1</td>
                                                        <td className="p-4 border-b border-stone-200">Based on birth date</td>
                                                        <td className="p-4 border-b border-stone-200">Based on birth date, time & place</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4 border-b border-stone-200 font-semibold">2</td>
                                                        <td className="p-4 border-b border-stone-200">Shows outer personality</td>
                                                        <td className="p-4 border-b border-stone-200">Shows inner emotions</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4 border-b border-stone-200 font-semibold">3</td>
                                                        <td className="p-4 border-b border-stone-200">Represents confidence & ego</td>
                                                        <td className="p-4 border-b border-stone-200">Represents feelings & instincts</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4 border-b border-stone-200 font-semibold">4</td>
                                                        <td className="p-4 border-b border-stone-200">How you shine publicly</td>
                                                        <td className="p-4 border-b border-stone-200">How you feel privately</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    <section id="why-both-matter">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Why Both Signs Matter</h2>
                                        <p className="mb-4">
                                            If you only know your Sun sign, you know <strong>half the story</strong>.<br />
                                            When you know your Moon sign too, you understand:
                                        </p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Why you react the way you do</li>
                                            <li>Why your emotions sometimes don't match your personality</li>
                                            <li>Why two people of the same Sun sign can be very different</li>
                                        </ul>
                                    </section>

                                    <section id="zodiac-traits">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Complete Zodiac Signs Personality Traits Guide</h2>
                                        <p className="mb-4">
                                            Understanding zodiac signs becomes easy when you look at their core personality traits. Each sign carries unique qualities that influence how a person thinks, behaves, communicates, and responds to life situations.
                                        </p>
                                        <p className="mb-6">
                                            Below is a simple and easy-to-understand chart that explains the main personality traits of all 12 zodiac signs — perfect for beginners who are just starting their astrology journey.
                                        </p>

                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Zodiac Signs Personality Traits Chart</h3>
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-sm border border-stone-200">
                                                <thead>
                                                    <tr className="bg-stone-800 text-white">
                                                        <th className="p-4 border-b border-stone-700">Zodiac Sign</th>
                                                        <th className="p-4 border-b border-stone-700">Element</th>
                                                        <th className="p-4 border-b border-stone-700">Core Personality Traits</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-stone-50 text-base">
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">♈ Aries</td><td className="p-3 border-b border-stone-200">Fire</td><td className="p-3 border-b border-stone-200">Bold, energetic, competitive, confident, impulsive</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">♉ Taurus</td><td className="p-3 border-b border-stone-200">Earth</td><td className="p-3 border-b border-stone-200">Stable, loyal, practical, patient, stubborn</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">♊ Gemini</td><td className="p-3 border-b border-stone-200">Air</td><td className="p-3 border-b border-stone-200">Curious, talkative, adaptable, intelligent, restless</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">♋ Cancer</td><td className="p-3 border-b border-stone-200">Water</td><td className="p-3 border-b border-stone-200">Emotional, nurturing, protective, intuitive, sensitive</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">♌ Leo</td><td className="p-3 border-b border-stone-200">Fire</td><td className="p-3 border-b border-stone-200">Charismatic, confident, creative, dramatic, generous</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">♍ Virgo</td><td className="p-3 border-b border-stone-200">Earth</td><td className="p-3 border-b border-stone-200">Analytical, practical, detail-oriented, perfectionist, organized</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">♎ Libra</td><td className="p-3 border-b border-stone-200">Air</td><td className="p-3 border-b border-stone-200">Diplomatic, charming, balanced, social, indecisive</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">♏ Scorpio</td><td className="p-3 border-b border-stone-200">Water</td><td className="p-3 border-b border-stone-200">Intense, passionate, mysterious, loyal, determined</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">♐ Sagittarius</td><td className="p-3 border-b border-stone-200">Fire</td><td className="p-3 border-b border-stone-200">Adventurous, optimistic, independent, honest, philosophical</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">♑ Capricorn</td><td className="p-3 border-b border-stone-200">Earth</td><td className="p-3 border-b border-stone-200">Ambitious, disciplined, responsible, practical, reserved</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">♒ Aquarius</td><td className="p-3 border-b border-stone-200">Air</td><td className="p-3 border-b border-stone-200">Independent, innovative, intellectual, humanitarian, unconventional</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">♓ Pisces</td><td className="p-3 border-b border-stone-200">Water</td><td className="p-3 border-b border-stone-200">Compassionate, intuitive, creative, emotional, dreamy</td></tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    <section id="combination-chart">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Sun Sign & Moon Sign Combination Chart – Discover Your Complete Personality Blueprint</h2>
                                        <p className="mb-4">
                                            Your personality is not defined by just one zodiac sign. While your <strong>Sun sign</strong> shows your outer nature — how you behave, lead, and express yourself — your <strong>Moon sign</strong> reveals your emotional world, instincts, and inner reactions.
                                        </p>
                                        <p className="mb-4">
                                            When these two powerful energies combine, they create your <strong>complete personality blueprint</strong>. This combination explains why two people with the same Sun sign can think, feel, and react very differently.
                                        </p>
                                        <p className="mb-6">
                                            Explore the chart below to understand how different Sun and Moon sign pairings shape behavior, emotions, strengths, and life approach.
                                        </p>
                                    </section>

                                    <section id="element-combinations">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Different Element Combination Chart</h3>
                                        <div className="overflow-x-auto mb-8">
                                            <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-sm border border-stone-200">
                                                <thead>
                                                    <tr className="bg-stone-800 text-white">
                                                        <th className="p-4 border-b border-stone-700 w-1/4">Sun Element</th>
                                                        <th className="p-4 border-b border-stone-700 w-1/4">Moon Element</th>
                                                        <th className="p-4 border-b border-stone-700 w-1/2">Personality Dynamics</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-stone-50 text-base">
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">Fire</td><td className="p-3 border-b border-stone-200">Fire</td><td className="p-3 border-b border-stone-200">Highly passionate, strong personality, action-oriented</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">Fire</td><td className="p-3 border-b border-stone-200">Earth</td><td className="p-3 border-b border-stone-200">Driven but practical, ambitious and grounded</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">Fire</td><td className="p-3 border-b border-stone-200">Air</td><td className="p-3 border-b border-stone-200">Energetic thinker, expressive, socially dynamic</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">Fire</td><td className="p-3 border-b border-stone-200">Water</td><td className="p-3 border-b border-stone-200">Bold outside, sensitive inside, emotionally reactive</td></tr>

                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">Earth</td><td className="p-3 border-b border-stone-200">Fire</td><td className="p-3 border-b border-stone-200">Practical yet passionate, hardworking achiever</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">Earth</td><td className="p-3 border-b border-stone-200">Earth</td><td className="p-3 border-b border-stone-200">Stable, reliable, security-focused</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">Earth</td><td className="p-3 border-b border-stone-200">Air</td><td className="p-3 border-b border-stone-200">Logical planner, mentally active, balanced thinker</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">Earth</td><td className="p-3 border-b border-stone-200">Water</td><td className="p-3 border-b border-stone-200">Emotionally steady, caring but cautious</td></tr>

                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">Air</td><td className="p-3 border-b border-stone-200">Fire</td><td className="p-3 border-b border-stone-200">Creative, energetic communicator</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">Air</td><td className="p-3 border-b border-stone-200">Earth</td><td className="p-3 border-b border-stone-200">Rational, structured, strategic</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">Air</td><td className="p-3 border-b border-stone-200">Air</td><td className="p-3 border-b border-stone-200">Highly intellectual, social, mentally restless</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">Air</td><td className="p-3 border-b border-stone-200">Water</td><td className="p-3 border-b border-stone-200">Emotionally thoughtful, sensitive communicator</td></tr>

                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">Water</td><td className="p-3 border-b border-stone-200">Fire</td><td className="p-3 border-b border-stone-200">Deeply emotional but expressive and intense</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">Water</td><td className="p-3 border-b border-stone-200">Earth</td><td className="p-3 border-b border-stone-200">Protective, nurturing, dependable</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">Water</td><td className="p-3 border-b border-stone-200">Air</td><td className="p-3 border-b border-stone-200">Intuitive yet analytical, emotionally aware thinker</td></tr>
                                                    <tr><td className="p-3 border-b border-stone-200 font-semibold">Water</td><td className="p-3 border-b border-stone-200">Water</td><td className="p-3 border-b border-stone-200">Highly sensitive, intuitive, deeply emotional</td></tr>
                                                </tbody>
                                            </table>
                                        </div>
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
                                    {recentPosts.map((post, index) => (
                                        <Link
                                            key={index}
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

export default SunMoonSignBlog;