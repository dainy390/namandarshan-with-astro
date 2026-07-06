import React, { useEffect } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Share2, Facebook, Twitter, Linkedin, Flame, Droplets, Music, Heart, Sun, Clock, BookOpen, AlertCircle, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";

const Holi2026Blog = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const title = "Holi Festival 2026 Guide – History, Rituals, Holika Dahan & Holi Puja Significance";

    // Schema JSON-LD
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Holi Festival 2026: History, Significance, Rituals & Celebration Guide",
        "description": "Complete guide to Holi Festival 2026 including holika dahan items, holi ka dahan meaning, holi puja rituals, history, significance, and traditions.",
        "keywords": ["holika dahan items", "holi ka dahan", "holi puja", "holi festival 2026", "holi rituals", "holi significance", "holi history"],
        "author": {
            "@type": "Organization",
            "name": "Editorial Team"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Namandarshan",
            "logo": {
                "@type": "ImageObject",
                "url": "https://namandarshan.com/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://namandarshan.com/blog/holi-2026-history-significance-rituals"
        },
        "articleSection": "Festival Guide",
        "inLanguage": "en",
        "datePublished": "2026-02-19",
        "dateModified": "2026-02-19"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is Holika Dahan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Holika Dahan is a sacred bonfire ritual performed one night before Holi symbolizing the victory of good over evil and the removal of negativity."
                }
            },
            {
                "@type": "Question",
                "name": "Which holika dahan items are required?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Common holika dahan items include wood, cow dung cakes, coconut, grains, roli, moli thread, flowers, and offerings used for prayer rituals."
                }
            },
            {
                "@type": "Question",
                "name": "What is the meaning of holi ka dahan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Holi ka dahan represents the destruction of evil forces symbolized by Holika’s burning and Prahlad’s protection through divine grace."
                }
            },
            {
                "@type": "Question",
                "name": "How to perform holi puja properly?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Holi puja is performed by offering prayers to the sacred bonfire, circling it, offering grains, and seeking blessings for prosperity, protection, and happiness."
                }
            },
            {
                "@type": "Question",
                "name": "Why should Bhadra be avoided during Holika Dahan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Bhadra period is considered inauspicious in Hindu Panchang, therefore Holika Dahan should be performed only after it ends for proper ritual significance."
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
                "name": "Holi Festival Guide",
                "item": "https://namandarshan.com/blog/holi-2026-history-significance-rituals"
            }
        ]
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <SEO
                title="Holi Festival 2026 Guide – History, Rituals, Holika Dahan & Holi Puja Significance"
                description="Discover Holi Festival 2026 history, rituals, Holika Dahan rules, holika dahan items, holi ka dahan meaning, and holi puja significance. Complete spiritual and cultural guide."
                image="/assets/Holibanner.png"
                keywords={[
                    "holika dahan", "holi puja", "holi festival 2026", "holi rituals", "holi significance", "holi history", "holi celebration india",
                    "holika dahan items list", "holi ka dahan meaning and rules", "holi puja vidhi step by step", "holika dahan timing 2026",
                    "why holi is celebrated", "holi spiritual significance", "holi festival history india", "holi rituals and traditions",
                    "holika dahan story prahlad", "holi celebration traditions india"
                ]}
            />
            {/* Inject Schema JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(articleSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>

            <Header />

            <main className="pt-36 md:pt-48 lg:pt-52 pb-12">
                <div className="container mx-auto px-4 mb-6">
                    <BlogBreadcrumb
                        pageTitle="Holi Festival 2026 Guide"
                        description="Discover Holi Festival 2026 history, rituals, Holika Dahan rules, and spiritual significance in this complete guide."
                    />
                </div>
                {/* Hero Section */}
                <div className="relative h-[60vh] min-h-[400px] w-full bg-orange-100 overflow-hidden">
                    <img
                        src="/assets/Holibanner.png"
                        alt="Holi Celebration"
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                        <div className="w-full px-6 md:px-12 pb-12 text-white">
                            <div className="max-w-4xl">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <span className="inline-block w-fit px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                        Festivals of India
                                    </span>

                                </div>
                                <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                                    Holi Festival 2026: History, Significance, Rituals & Celebration Guide
                                </h1>
                                <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-gray-200">
                                    <span className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-orange-400" />
                                        March 3, 2026 (Provisional)
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-orange-400" />
                                        8 min read
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-orange-400" />
                                        Pan-India
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-8 bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100/50">
                        {/* Intro */}
                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p className="lead text-xl md:text-2xl font-medium text-gray-800 leading-relaxed mb-8 border-l-4 border-orange-500 pl-6 italic">
                                "Holi, the vibrant Festival of Colors, is one of the most loved and widely celebrated Hindu festivals in India. Marking the arrival of spring and the victory of good over evil, Holi brings together devotion, tradition, culture, and pure joy."
                            </p>

                            <p>
                                Celebrated on the full moon day (Purnima) of the month of Phalguna as per the Hindu calendar, Holi 2026 will once again fill homes and hearts with color, warmth, and positivity.
                                From the sacred fire of <strong>Holika Dahan</strong> to the playful splashing of <em>gulal</em> on <strong>Rangwali Holi</strong>, every ritual carries a deeper spiritual meaning rooted in ancient Hindu mythology.
                            </p>

                            <hr className="my-8 border-gray-100" />

                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-orange-500">✨</span> Why Holi Is Celebrated: Spiritual Meaning & Importance
                            </h2>
                            <p>
                                Holi is not just about colors and celebration. At its core, it represents profound spiritual truths that have guided devotees for centuries:
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Symbolism of Holika Dahan</h3>
                            <p>
                                The festival begins with <strong>Holika Dahan</strong>, observed on the evening before the main day of color celebrations. Families gather around a sacred bonfire to pray for protection, prosperity, and the removal of negative energies. It symbolizes the burning of ego, evil, and negativity in the fire of devotion.
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Cultural Importance of Holi</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 list-none pl-0">
                                {[
                                    { icon: Heart, text: "The triumph of devotion over ego" },
                                    { icon: Flame, text: "The victory of good over evil" },
                                    { icon: Sun, text: "The arrival of spring and new beginnings" },
                                    { icon: History, text: "Social unity beyond caste, class, or status" }
                                ].map((item, idx) => (
                                    <li key={idx} className="bg-orange-50 p-4 rounded-xl flex items-center gap-3">
                                        <item.icon className="w-6 h-6 text-orange-600 flex-shrink-0" />
                                        <span className="font-semibold text-gray-800">{item.text}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Holika Dahan Story */}
                            <div className="bg-orange-50/50 rounded-2xl p-8 my-10 border border-orange-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    🔥 Holika Dahan Story from Hindu Mythology
                                </h2>

                                <h3 className="text-xl font-bold text-gray-900 mb-2">Prahlad and Hiranyakashipu Legend</h3>
                                <p className="mb-4">
                                    The origin of Holika Dahan comes from the legendary tale of Prahlad and his father, Hiranyakashipu. Hiranyakashipu was a powerful demon king who demanded that everyone in his kingdom worship him as a god. However, his own son, Prahlad, remained an ardent devotee of Lord Vishnu.
                                </p>
                                <p className="mb-4">
                                    Enraged by his son's defiance, Hiranyakashipu conspired with his sister, <strong>Holika</strong>, who had a divine boon that protected her from fire. She sat in a blazing fire with young Prahlad in her lap, intending to burn him alive while she remained unscathed.
                                </p>
                                <p className="font-medium text-gray-900">
                                    But divine justice prevailed. The grace of Lord Vishnu saved Prahlad, while Holika—despite her boon—was reduced to ashes for her evil intent.
                                </p>

                                <h4 className="text-lg font-bold text-gray-800 mt-4 mb-2">Moral Behind Holi Ka Dahan</h4>
                                <p className="text-sm text-gray-700 italic">
                                    This powerful story gives the Holika Dahan bonfire its symbolism: the burning destruction of evil and the eternal protection of faith. It reminds us that no matter how powerful evil may seem, truth and devotion always triumph.
                                </p>
                            </div>

                            {/* Holika Dahan Rules */}
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                                📜 Holika Dahan Rules & Ritual Guidelines
                            </h2>
                            <p className="mb-6">
                                While Holika Dahan is widely celebrated with devotion, scriptures mention specific rules and timings (Muhurat) that must be followed for the ritual to be spiritually beneficial.
                            </p>

                            <div className="space-y-6">
                                <div className="border-l-4 border-red-500 pl-6 py-2">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Holashtak Period Significance</h3>
                                    <p className="text-gray-700">
                                        The period known as <strong>Holashtak</strong> begins on the eighth day (Ashtami) of the bright half of Phalguna and continues until Purnima. During these eight days, auspicious activities like weddings or houSevarmings are generally avoided as it is considered a spiritually sensitive time.
                                    </p>
                                </div>
                                <div className="border-l-4 border-red-500 pl-6 py-2">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Why Bhadra Kaal Is Avoided</h3>
                                    <p className="text-gray-700">
                                        One of the most critical rules is that Holika Dahan <strong>must not</strong> be performed during <em>Bhadra</em>. Bhadra is associated with Vishti Karan and is considered inauspicious. Devotees carefully check the Panchang to ensure the bonfire is lit only after Bhadra Mukha has passed.
                                    </p>
                                </div>
                                <div className="border-l-4 border-green-500 pl-6 py-2">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Purnima Timing Importance</h3>
                                    <p className="text-gray-700">
                                        For the ritual to be strictly valid, the Full Moon (Purnima Tithi) must prevail during <em>Pradosh Kaal</em> (the period shortly after sunset). It is best if Purnima continues for at least three Muhurats after sunset.
                                    </p>
                                </div>
                            </div>

                            {/* Historical References */}
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                                🏛️ Historical Evidence of Holi Celebration
                            </h2>
                            <p>
                                Holi is an ancient festival with deep roots in Indian history, evidenced by various archaeological finds and texts:
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Ancient Temple Records</h3>
                            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                                <li><strong>Hampi (Vijayanagara Empire):</strong> A 16th-century panel depicts Holi celebrations, showing the festival's grandeur in royal courts.</li>
                                <li><strong>Ramgarh Inscription (300 BCE):</strong> found near the Vindhya mountains, this inscription describes Holi celebrations, confirming the festival has been part of Indian culture for thousands of years.</li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Mythological References</h3>
                            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                                <h4 className="font-bold text-purple-900 mb-2">The Legend of Putana</h4>
                                <p className="text-purple-800 text-sm">
                                    Some traditions associate Holi with Lord Krishna's victory over the demoness Putana. It is believed that after baby Krishna defeated her, the Gopis of Braj celebrated with joy, a tradition that evolved into the festive color play we see today.
                                </p>
                            </div>

                            {/* Rangwali Holi */}
                            <div className="mt-12 mb-10">
                                <div className="rounded-2xl overflow-hidden h-[500px] md:h-[600px] w-full mb-6 relative">
                                    <img
                                        src="/assets/Picture 1.png"
                                        alt="Radha Krishna Holi"
                                        className="w-full h-full object-cover object-top"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                        <p className="text-white text-lg font-bold">Divine Love: The Colors of Radha & Krishna</p>
                                    </div>
                                </div>

                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Rangwali Holi: The Colors of Divine Love
                                </h2>
                                <p>
                                    The playful, colorful celebration of Holi is deeply connected to the divine love story of <strong>Radha and Krishna</strong>. Legend has it that young Krishna, conscious of his dark blue complexion, asked his mother Yashoda why Radha was so fair. Yashoda playfully suggested he color Radha's face in any color he wanted.
                                </p>
                                <p>
                                    That innocent, playful moment established the tradition of <em>Rangwali Holi</em>. Today, millions recreate that divine playfulness in Vrindavan, Barsana, and across the world, celebrating love, unity, and equality through colors.
                                </p>
                            </div>

                            {/* Regional Celebrations */}
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                🇮🇳 Regional Holi Celebrations in India
                            </h2>

                            <h3 className="text-xl font-bold text-gray-800 mt-4 mb-3">Braj Holi Traditions</h3>
                            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm mb-4">
                                <p className="text-gray-700">
                                    Home to the famous <strong>Lathmar Holi</strong> in Barsana and Nandgaon, celebrated with matchless enthusiasm days before the main festival. It involves a playful battle where women beat men with sticks (lathis) while men protect themselves with shields.
                                </p>
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mt-4 mb-3">Rang Panchami Celebrations</h3>
                            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm mb-4">
                                <p className="text-gray-700">
                                    In Maharashtra and Madhya Pradesh (Malwa region), Holi is celebrated as <strong>Rang Panchami</strong> five days after the main festival. It involves massive processions, community water games, and breaking of buttermilk pots (Matki Phod).
                                </p>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
                                📅 Holi 2026 Date and Muhurat
                            </h2>
                            <p className="mb-4">
                                <strong>Holika Dahan:</strong> March 3, 2026 (Provisional)<br />
                                <strong>Rangwali Holi:</strong> March 4, 2026 (Provisional)<br />
                                <em>Note: Dates may vary based on exact Purnima tithi timings closer to the event.</em>
                            </p>

                            {/* Conclusion */}
                            <div className="bg-gradient-to-br from-orange-500 to-pink-600 rounded-3xl p-8 md:p-12 text-center text-white my-12 relative overflow-hidden">
                                <div className="relative z-10">
                                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">True Essence of Holi Festival</h2>
                                    <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
                                        Beyond the music, sweets, and colors, Holi teaches us to let go of past negativity. Forgive. Reconnect. In today's fast-paced world, it reminds us to pause and embrace joy in its purest form.
                                    </p>
                                    <p className="text-2xl font-bold text-white mb-2">Wishing you a joyful & colorful Holi 2026! 🌸</p>
                                    <div className="mt-8">
                                        <Link to="/darshan">
                                            <Button className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-full shadow-lg border-0">
                                                Plan a Temple Visit This Spring
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                                {/* Decorative Circles */}
                                <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
                            </div>

                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Share */}
                        <div className="sticky top-40 md:top-48 lg:top-52">
                            <div className="space-y-8">
                                {/* Quick Facts */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                    <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                                        <BookOpen className="w-5 h-5 text-orange-500" />
                                        Holi 2026 At A Glance
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center py-2 border-b border-gray-50">
                                            <span className="text-gray-600 text-sm">Festival Name</span>
                                            <span className="font-medium text-gray-900 text-sm">Holi / Dhulandi</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-gray-50">
                                            <span className="text-gray-600 text-sm">Date</span>
                                            <span className="font-medium text-gray-900 text-sm">March 3-4, 2026</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-gray-50">
                                            <span className="text-gray-600 text-sm">Hindu Month</span>
                                            <span className="font-medium text-gray-900 text-sm">Phalguna Purnima</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-gray-50">
                                            <span className="text-gray-600 text-sm">Preceding Ritual</span>
                                            <span className="font-medium text-gray-900 text-sm">Holika Dahan</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Popular Yatras */}
                                <div className="bg-orange-50 rounded-2xl p-6">
                                    <h3 className="font-bold text-xl text-gray-900 mb-4">Plan Your Spiritual Yatra</h3>
                                    <p className="text-sm text-gray-600 mb-6">Experience the divine energy of India's most sacred temples this spring.</p>
                                    <div className="space-y-3">
                                        <Link to="/vrindavan-yatra" className="bg-white hover:bg-orange-100 transition-colors p-3 rounded-lg border border-orange-100 flex items-center justify-between group">
                                            <span className="font-medium text-gray-800 group-hover:text-orange-700">Vrindavan Holi Tour</span>
                                            <ArrowLeft className="w-4 h-4 rotate-180 text-orange-400" />
                                        </Link>
                                        <Link to="/char-dham-yatra" className="bg-white hover:bg-orange-100 transition-colors p-3 rounded-lg border border-orange-100 flex items-center justify-between group">
                                            <span className="font-medium text-gray-800 group-hover:text-orange-700">Char Dham Yatra</span>
                                            <ArrowLeft className="w-4 h-4 rotate-180 text-orange-400" />
                                        </Link>
                                        <Link to="/kedarnath-yatra" className="bg-white hover:bg-orange-100 transition-colors p-3 rounded-lg border border-orange-100 flex items-center justify-between group">
                                            <span className="font-medium text-gray-800 group-hover:text-orange-700">Kedarnath Yatra</span>
                                            <ArrowLeft className="w-4 h-4 rotate-180 text-orange-400" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Holi2026Blog;
