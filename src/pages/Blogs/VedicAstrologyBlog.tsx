import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Star, Sun, Moon, Briefcase, Heart, Shield } from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
import CommentSection from "@/components/common/CommentSection";

// Placeholder image since uploads were not found
const heroImage = "/assets/ChatGPT Image Feb 16, 2026 at 04_25_40 PM.png";

const VedicAstrologyBlog = () => {
    const tableOfContents = [
        { id: "intro", title: "Introduction" },
        { id: "planetary-impact", title: "Planetary Influence" },
        { id: "sun-remedies", title: "Sun Remedies" },
        { id: "moon-healing", title: "Moon & Emotions" },
        { id: "saturn-karma", title: "Saturn & Karma" },
        { id: "marriage-delay", title: "Marriage Remedies" },
        { id: "career-finance", title: "Career Stability" },
        { id: "why-temples", title: "Why Temple Remedies?" },
        { id: "zodiac-signs", title: "Understand Your Rashi" }
    ];

    const recentPosts = [
        { title: "Kedarnath: The Abode of Shiva", link: "/blog/kedarnath-temple-yatra-history-legend" },
        { title: "Tirupati Balaji: Complete Darshan Guide", link: "/blog/tirupati-balaji-darshan-booking-laddu-mystery" },
        { title: "Mysteries of Jagannath Puri", link: "/blogs/mysteries-of-jagannath-puri" }
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-stone-50">
            <SEO
                title="Vedic Astrology & Temple Remedies - Divine Guidance"
                keywords={[
                    "Vedic Astrology India",
                    "Temple Remedies for Marriage Delay",
                    "Planetary Dosha Remedies",
                    "Karmic Healing Temples",
                    "Astrology and Temples",
                    "Jyotish Remedies",
                    "Rashi and Temple Darshan"
                ]}
                description="Connect with divine energies through Vedic astrology and sacred temple remedies. Discover how temple darshan, rituals, and mantras can balance planetary influences for marriage, career, and health."
            />
            <Header />
            <main className="pt-36 md:pt-48 lg:pt-52 pb-16">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb & Share */}
                    <BlogBreadcrumb 
                        pageTitle="Vedic Astrology & Temple Remedies" 
                        description="Connect with divine energies through Vedic astrology and sacred temple remedies for marriage, career, and health."
                    />

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
                                {/* Title Section */}
                                <div className="p-8 md:p-10">
                                    <h1 className="text-3xl md:text-5xl font-display font-bold text-stone-900 mb-4 leading-tight">
                                        Vedic Astrology & Temple Remedies – Divine Guidance for Your Life
                                    </h1>
                                    <div className="flex items-center gap-4 text-sm text-stone-600">
                                        <span>📅 17 February 2026</span>
                                        <span>•</span>
                                        <span>15 min read</span>
                                    </div>
                                </div>

                                {/* Hero Image */}
                                <div className="w-full mb-8">
                                    <img src={heroImage} alt="Vedic Astrology" className="w-full h-auto" />
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-10 space-y-8 text-lg leading-relaxed text-stone-700">
                                    <p id="intro" className="text-xl font-medium text-stone-800 border-l-4 border-orange-500 pl-6 italic">
                                        Astrology is not only about predicting the future — it is about connecting with divine energies through sacred temples and rituals. At our platform, we combine Vedic astrology wisdom with powerful temple remedies, helping devotees receive blessings directly from sacred temples across India.
                                    </p>
                                    <p>
                                        In Vedic tradition, astrology (Jyotish) is not only about predicting events. It is about understanding karma, planetary influence, and divine remedies.
                                    </p>
                                    <p>
                                        Every planet represents a divine energy. When that energy becomes weak or afflicted in your horoscope, life may show obstacles — delay in marriage, career struggles, health disturbances, financial instability, or emotional stress.
                                    </p>

                                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                                        <h3 className="font-bold text-orange-900 mb-3">Powerful ways to balance planetary energies:</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-stone-800">
                                            <li>Temple Darshan</li>
                                            <li>Archana & Abhishek</li>
                                            <li>Sankalp Pooja</li>
                                            <li>Mantra Jaap</li>
                                            <li>Divine Blessings from Sacred Kshetras</li>
                                        </ul>
                                    </div>
                                    <p>
                                        Whether it is marriage delay, career blockage, health issues, or planetary dosha — we guide you with authentic astrological analysis and temple-based solutions.
                                    </p>

                                    <section id="planetary-impact">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">How Planetary Imbalance Affects Your Life</h2>
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-sm">
                                                <thead>
                                                    <tr className="bg-stone-800 text-white">
                                                        <th className="p-4 border-b border-stone-700">Planet</th>
                                                        <th className="p-4 border-b border-stone-700">Controls</th>
                                                        <th className="p-4 border-b border-stone-700">When Weak or Afflicted</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-stone-50 text-sm md:text-base">
                                                    <tr>
                                                        <td className="p-3 border-b border-stone-200 font-semibold">Sun</td>
                                                        <td className="p-3 border-b border-stone-200">Authority, Father, Confidence</td>
                                                        <td className="p-3 border-b border-stone-200">Lack of respect, career instability</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-3 border-b border-stone-200 font-semibold">Moon</td>
                                                        <td className="p-3 border-b border-stone-200">Mind, Emotions, Mother</td>
                                                        <td className="p-3 border-b border-stone-200">Stress, anxiety, mood swings</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-3 border-b border-stone-200 font-semibold">Mars</td>
                                                        <td className="p-3 border-b border-stone-200">Energy, Marriage, Property</td>
                                                        <td className="p-3 border-b border-stone-200">Anger, delay in marriage</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-3 border-b border-stone-200 font-semibold">Mercury</td>
                                                        <td className="p-3 border-b border-stone-200">Communication, Business</td>
                                                        <td className="p-3 border-b border-stone-200">Financial confusion</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-3 border-b border-stone-200 font-semibold">Jupiter</td>
                                                        <td className="p-3 border-b border-stone-200">Wisdom, Marriage, Growth</td>
                                                        <td className="p-3 border-b border-stone-200">Delay in marriage, lack of blessings</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-3 border-b border-stone-200 font-semibold">Venus</td>
                                                        <td className="p-3 border-b border-stone-200">Love, Luxury</td>
                                                        <td className="p-3 border-b border-stone-200">Relationship issues</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-3 border-b border-stone-200 font-semibold">Saturn</td>
                                                        <td className="p-3 border-b border-stone-200">Karma, Discipline</td>
                                                        <td className="p-3 border-b border-stone-200">Delays, struggle, obstacles</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-3 border-b border-stone-200 font-semibold">Rahu</td>
                                                        <td className="p-3 border-b border-stone-200">Sudden events</td>
                                                        <td className="p-3 border-b border-stone-200">Confusion, instability</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-3 border-b border-stone-200 font-semibold">Ketu</td>
                                                        <td className="p-3 border-b border-stone-200">Spiritual detachment</td>
                                                        <td className="p-3 border-b border-stone-200">Isolation, uncertainty</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p className="mt-4 italic text-stone-600">
                                            Instead of fear, Vedic wisdom recommends <strong>divine temple remedies</strong> to balance these energies.
                                        </p>
                                    </section>

                                    <section id="sun-remedies" className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                                        <div className="flex items-start gap-4">
                                            <Sun className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h2 className="text-2xl font-bold text-stone-900 mb-3 font-display">Sun Related Problems & Temple Remedy</h2>
                                                <p className="mb-2"><strong>If your Sun is weak in horoscope:</strong></p>
                                                <ul className="list-disc pl-5 mb-4 text-sm text-stone-700">
                                                    <li>Lack of recognition</li>
                                                    <li>Weak leadership</li>
                                                    <li>Issues with father</li>
                                                    <li>Career stagnation</li>
                                                </ul>
                                                <div className="mb-4">
                                                    <h4 className="font-bold text-yellow-800">Recommended Temple Darshan</h4>
                                                    <p>Konark Sun Temple, Suryanar Kovil</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-yellow-800">Spiritual Practice</h4>
                                                    <ul className="list-disc pl-5 text-sm text-stone-700">
                                                        <li>Offer water (Arghya) to rising Sun daily</li>
                                                        <li>Chant “Om Suryaya Namah”</li>
                                                        <li>Perform Surya Abhishek</li>
                                                    </ul>
                                                </div>
                                                <p className="mt-3 text-sm font-medium text-yellow-700">Visiting these temples strengthens authority, confidence, and career growth.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="moon-healing" className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                        <div className="flex items-start gap-4">
                                            <Moon className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h2 className="text-2xl font-bold text-stone-900 mb-3 font-display">Moon Affliction & Emotional Healing</h2>
                                                <p className="mb-2"><strong>When Moon is afflicted:</strong></p>
                                                <ul className="list-disc pl-5 mb-4 text-sm text-stone-700">
                                                    <li>Mental stress</li>
                                                    <li>Sleep disturbance</li>
                                                    <li>Emotional instability</li>
                                                    <li>Family tension</li>
                                                </ul>
                                                <div className="mb-4">
                                                    <h4 className="font-bold text-blue-800">Recommended Temples</h4>
                                                    <p>Somnath Temple, Chandra Graha Temple Thingalur</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-blue-800">Remedy</h4>
                                                    <ul className="list-disc pl-5 text-sm text-stone-700">
                                                        <li>Rudrabhishek</li>
                                                        <li>Milk Abhishek</li>
                                                        <li>Monday fast</li>
                                                    </ul>
                                                </div>
                                                <p className="mt-3 text-sm font-medium text-blue-700">Moon represents mind. Shiva temples are especially powerful for calming mental disturbances.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="saturn-karma">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Saturn (Shani) – Understanding Delay & Karma</h2>
                                        <p className="mb-4">Saturn does not punish — he teaches discipline and maturity.</p>
                                        <p className="mb-4"><strong>When Saturn influences 7th, 10th, or Moon:</strong> Marriage delay, Career struggle, Legal problems, Financial pressure.</p>

                                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                                            <div className="bg-stone-100 p-4 rounded-lg">
                                                <h4 className="font-bold text-stone-800 mb-2">Powerful Shani Temples</h4>
                                                <ul className="list-disc pl-5 text-sm text-stone-600">
                                                    <li>Shani Shingnapur</li>
                                                    <li>Tirunallar Saniswaran Temple</li>
                                                </ul>
                                            </div>
                                            <div className="bg-stone-100 p-4 rounded-lg">
                                                <h4 className="font-bold text-stone-800 mb-2">Recommended Ritual</h4>
                                                <ul className="list-disc pl-5 text-sm text-stone-600">
                                                    <li>Sesame oil offering</li>
                                                    <li>Shani Tail Abhishek</li>
                                                    <li>Lighting diya on Saturday</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-center font-medium text-stone-700">Shani blessings bring long-term stability and success.</p>
                                    </section>

                                    <section id="marriage-delay" className="bg-red-50 p-6 rounded-xl border border-red-100">
                                        <div className="flex items-start gap-4">
                                            <Heart className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h2 className="text-2xl font-bold text-stone-900 mb-3 font-display">Marriage Delay in Horoscope</h2>
                                                <p className="mb-2"><strong>Common causes:</strong> Saturn aspect on 7th house, Mangal Dosha, Weak Jupiter (females) or Venus (males), Rahu influence.</p>

                                                <div className="mt-4 space-y-4">
                                                    <div>
                                                        <h4 className="font-bold text-red-800">Temple Remedies for Marriage Blessings</h4>
                                                        <p className="text-sm">Meenakshi Amman Temple, Katyayani Temple Vrindavan, Triyuginarayan Temple</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-red-800">Special Poojas Available</h4>
                                                        <p className="text-sm">Kumbh Vivah, Mangal Dosha Nivaran, Katyayani Jaap, Shiva Parvati Vivah Sankalp</p>
                                                    </div>
                                                </div>
                                                <p className="mt-3 text-sm font-medium text-red-700">These temples are associated with divine marriage energy and blessings.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="career-finance" className="bg-green-50 p-6 rounded-xl border border-green-100">
                                        <div className="flex items-start gap-4">
                                            <Briefcase className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h2 className="text-2xl font-bold text-stone-900 mb-3 font-display">Career & Financial Stability</h2>
                                                <p className="mb-4">If career growth is slow, Jupiter or Saturn may need strengthening.</p>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h4 className="font-bold text-green-800">Recommended Darshan</h4>
                                                        <ul className="list-disc pl-5 text-sm text-stone-700">
                                                            <li>Tirupati Balaji Temple</li>
                                                            <li>Mahakaleshwar Jyotirlinga</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-green-800">Rituals</h4>
                                                        <ul className="list-disc pl-5 text-sm text-stone-700">
                                                            <li>Vishnu Sahasranama Path</li>
                                                            <li>Bhasma Aarti Darshan</li>
                                                            <li>Guru Pooja on Thursday</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p className="mt-3 text-sm font-medium text-green-700">Divine blessings remove unseen karmic obstacles in profession and finance.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="why-temples">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Why Temple-Based Astrology Works Better</h2>
                                        <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-3">
                                                    <span className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                                                    <span>Unlike general horoscope reading, it connects you to sacred energy centers.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                                                    <span>Pooja is performed in your name (Sankalp).</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                                                    <span>Mantra vibrations are amplified in temples.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                                                    <span>Devotees receive spiritual and emotional peace.</span>
                                                </li>
                                            </ul>
                                            <p className="mt-4 text-center font-display text-xl text-orange-700 font-bold">
                                                "Astrology shows the direction. Temple darshan activates divine grace."
                                            </p>
                                        </div>
                                    </section>

                                    <section id="zodiac-signs">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Zodiac Signs in Vedic Astrology</h2>
                                        <p className="mb-6 text-stone-600">
                                            In Vedic astrology, your Rashi (Moon Sign) reflects your emotional nature, karmic tendencies, and how you experience life. Understanding your Rashi helps you understand yourself better.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {[
                                                {
                                                    name: "Mesh (Aries)",
                                                    desc: [
                                                        "People born under Mesh Rashi carry strong fire energy. They are action-oriented, bold, and not afraid to take initiative. Leadership comes naturally to them.",
                                                        "However, their biggest lesson in life is patience. Anger, impulsive decisions, or reacting too quickly can create unnecessary challenges — especially in marriage and career.",
                                                        "When Mars is balanced, Mesh natives rise very fast in life."
                                                    ],
                                                    image: "/assets/zodiac-mesh-aries.png"
                                                },
                                                {
                                                    name: "Vrishabh (Taurus)",
                                                    desc: [
                                                        "Vrishabh individuals are stable and dependable. They value comfort, security, and long-term commitment. Once they decide something, they stay loyal to it.",
                                                        "Their challenge lies in attachment — whether to people, habits, or material comforts. Learning flexibility helps them grow emotionally and financially.",
                                                        "A strong Venus blesses them with prosperity and harmonious relationships."
                                                    ],
                                                    image: "/assets/zodiac-vrishabh-taurus.png"
                                                },
                                                {
                                                    name: "Mithun (Gemini)",
                                                    desc: [
                                                        "Mithun Rashi people are naturally intelligent and expressive. Communication is their biggest strength. They adapt easily and usually do well in business, media, or networking fields.",
                                                        "Their mind, however, rarely stays still. Overthinking and confusion in decision-making can slow them down.",
                                                        "Mental discipline and clarity are key for them."
                                                    ],
                                                    image: "/assets/zodiac-mithun-gemini.png"
                                                },
                                                {
                                                    name: "Karka (Cancer)",
                                                    desc: [
                                                        "Karka natives are deeply emotional and family-oriented. They feel everything strongly and are naturally protective of loved ones.",
                                                        "Because the Moon rules this sign, mood fluctuations can affect their confidence and decision-making. Emotional stability is their life lesson.",
                                                        "When mentally balanced, they create beautiful homes and strong family bonds."
                                                    ],
                                                    image: "/assets/zodiac-karka-cancer.png"
                                                },
                                                {
                                                    name: "Simha (Leo)",
                                                    desc: [
                                                        "Simha Rashi carries royal energy. These individuals like respect, recognition, and leadership roles. They shine when they are appreciated.",
                                                        "Their growth comes when they learn humility. Ego clashes or dominance can create relationship imbalance.",
                                                        "A strong Sun gives them authority and long-term career success"
                                                    ],
                                                    image: "/assets/zodiac-simha-leo.png"
                                                },
                                                {
                                                    name: "Kanya (Virgo)",
                                                    desc: [
                                                        "Kanya natives are practical thinkers. They notice small details others miss. They prefer planning over impulsive action.",
                                                        "Sometimes they become too critical — of themselves and others. Anxiety can also trouble them if Mercury is weak.",
                                                        "When balanced, they excel in analytical and service-oriented professions."
                                                    ],
                                                    image: "/assets/zodiac-kanya-virgo.png"
                                                },
                                                {
                                                    name: "Tula (Libra)",
                                                    desc: [
                                                        "Tula represents balance and relationships. These individuals value harmony and fairness. They often act as peacemakers.",
                                                        "Indecisiveness can become a challenge, especially in marriage matters. They may struggle to choose between heart and logic.",
                                                        "A strong Venus supports them in partnerships and financial growth."
                                                    ],
                                                    image: "/assets/zodiac-tula-libra.png"
                                                },
                                                {
                                                    name: "Vrishchik (Scorpio)",
                                                    desc: [
                                                        "Vrishchik natives are intense and emotionally deep. They do not reveal everything easily and prefer privacy.",
                                                        "They have strong inner power but may experience emotional extremes — either complete trust or complete withdrawal. ",
                                                        "Spiritual practices help them channel their powerful energy in the right direction."
                                                    ],
                                                    image: "/assets/zodiac-vrishchik-scorpio.png"
                                                },
                                                {
                                                    name: "Dhanu (Sagittarius)",
                                                    desc: [
                                                        "Dhanu Rashi individuals are naturally optimistic and philosophical. They seek meaning in life and often have spiritual interest.",
                                                        "Sometimes they promise more than they deliver. Restlessness and desire for freedom can delay commitment.",
                                                        "A strong Jupiter blesses them with wisdom, growth, and good fortune."
                                                    ],
                                                    image: "/assets/zodiac-dhanu-sagittarius.png"
                                                },
                                                {
                                                    name: "Makar (Capricorn)",
                                                    desc: [
                                                        "Makar natives understand responsibility from a young age. They are disciplined and patient, even during long struggles.",
                                                        "Life may not give them quick results, but it gives them lasting success.",
                                                        "Saturn teaches them maturity through experience. When they stay consistent, success becomes stable and permanent."
                                                    ],
                                                    image: "/assets/zodiac-makar-capricorn.png"
                                                },
                                                {
                                                    name: "Kumbh (Aquarius)",
                                                    desc: [
                                                        "Kumbh Rashi people think differently from others. They are innovative and often ahead of their time.",
                                                        "Emotionally, they may appear detached, but internally they think deeply.",
                                                        "Their journey is about balancing independence with emotional connection."
                                                    ],
                                                    image: "/assets/zodiac-kumbh-aquarius.png"
                                                },
                                                {
                                                    name: "Meen (Pisces)",
                                                    desc: [
                                                        "Meen natives are compassionate and intuitive. They often feel spiritually connected and naturally empathize with others.",
                                                        "Their challenge is avoiding escapism or confusion. Clear direction and discipline strengthen their potential.",
                                                        "When Jupiter is strong, they experience both spiritual and material growth."
                                                    ],
                                                    image: "/assets/zodiac-meen-pisces.png"
                                                }
                                            ].map((sign, i) => (
                                                <div key={i} className="bg-white border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                                                    <div className="h-48 overflow-hidden bg-white flex items-center justify-center p-2">
                                                        <img
                                                            src={sign.image}
                                                            alt={sign.name}
                                                            className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
                                                        />
                                                    </div>
                                                    <div className="p-5">
                                                        <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                                                            <Star className="w-5 h-5 text-orange-400" />
                                                            {sign.name}
                                                        </h3>
                                                        <div className="space-y-4">
                                                            {sign.desc.map((paragraph, idx) => (
                                                                <p key={idx} className="text-sm text-stone-600 leading-relaxed">
                                                                    {paragraph}
                                                                </p>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-8 bg-stone-900 text-white p-8 rounded-xl text-center">
                                            <h3 className="text-2xl font-bold mb-6 font-display">Why Understanding Your Rashi Matters</h3>
                                            <div className="max-w-2xl mx-auto space-y-6">
                                                <div className="bg-stone-800/50 p-6 rounded-lg border border-stone-700">
                                                    <p className="font-semibold text-lg mb-4 text-orange-200">Your Rashi influences:</p>
                                                    <ul className="space-y-3 text-stone-300 text-left md:text-center">
                                                        <li className="flex items-center justify-center gap-2">
                                                            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                                                            How you respond emotionally
                                                        </li>
                                                        <li className="flex items-center justify-center gap-2">
                                                            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                                                            Your natural compatibility in marriage
                                                        </li>
                                                        <li className="flex items-center justify-center gap-2">
                                                            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                                                            Your career inclination
                                                        </li>
                                                        <li className="flex items-center justify-center gap-2">
                                                            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                                                            Financial patterns
                                                        </li>
                                                        <li className="flex items-center justify-center gap-2">
                                                            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                                                            Spiritual growth
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="space-y-2 pt-2">
                                                    <p className="text-lg leading-relaxed text-stone-200">
                                                        "When astrology is understood correctly, it does not create fear. It creates awareness."
                                                    </p>
                                                    <p className="text-lg font-medium text-orange-200">
                                                        And awareness, combined with right spiritual guidance, brings balance in life.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="cta" className="bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl p-8 text-white shadow-lg transform hover:scale-[1.01] transition-transform text-center">
                                        <h3 className="text-3xl font-bold mb-4">
                                            Seek Divine Guidance
                                        </h3>
                                        <p className="text-lg mb-6 opacity-90 text-stone-900 font-medium max-w-2xl mx-auto">
                                            Let us help you connect with the right temples and rituals based on your astrological needs.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <Link to="/astro-naman">
                                                <Button size="lg" className="w-full sm:w-auto bg-stone-900 text-white hover:bg-stone-800 font-bold text-lg h-12">
                                                    Consult Astro Services
                                                </Button>
                                            </Link>
                                            <Link to="/darshan">
                                                <Button size="lg" variant="outline" className="w-full sm:w-auto border-stone-900 text-stone-900 hover:bg-white/20 font-bold text-lg h-12">
                                                    Book Temple Darshan
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

export default VedicAstrologyBlog;