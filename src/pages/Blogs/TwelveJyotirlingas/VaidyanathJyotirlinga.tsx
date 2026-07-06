import React, { Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    ChevronRight,
    Calendar,
    ArrowBigRight,
    Clock,
    MapPin,
    Heart,
    ShieldCheck,
    Zap,
    History,
    ExternalLink,
    Phone,
    LayoutDashboard,
    Car,
    Home,
    CheckCircle2,
    Stethoscope,
    BookOpen,
    HelpCircle,
    Star
} from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
import vaidyanathImg from "@/assets/blogs/twelveJyotirling/VaidyanathJyotirlinga.jpeg";
import CommentSection from "@/components/common/CommentSection";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const VaidyanathJyotirlinga = () => {

    const tableOfContents = [
        { id: "intro", title: "Introduction" },
        { id: "importance", title: "Why Vaidyanath Jyotirlinga is So Important" },
        { id: "legend", title: "The Divine Story & Legend" },
        { id: "spiritual-meaning", title: "Spiritual Meaning" },
        { id: "historical-importance", title: "Historical Importance" },
        { id: "architecture", title: "Temple Architecture" },
        { id: "kanwar-yatra", title: "The Sacred Kanwar Yatra" },
        { id: "rituals", title: "Important Rituals & Pujas" },
        { id: "festivals", title: "Festivals Celebrated" },
        { id: "best-time", title: "Best Time to Visit" },
        { id: "how-to-reach", title: "How to Reach" },
        { id: "nearby-places", title: "Nearby Places to Visit" },
        { id: "spiritual-benefits", title: "Spiritual Benefits" },
        { id: "conclusion", title: "Conclusion" },
        { id: "faqs", title: "Frequently Asked Questions" },
    ];

    const recentPosts = [
        {
            title: "Trimbakeshwar Jyotirlinga Guide",
            link: "/blog/trimbakeshwar-jyotirlinga-nashik-guide",
        },
        {
            title: "Mahakaleshwar Jyotirlinga Guide",
            link: "/blog/mahakaleshwar-jyotirlinga-ujjain-guide",
        },
        {
            title: "Somnath Jyotirlinga Guide",
            link: "/blog/somnath-jyotirlinga-gujarat-guide",
        },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Vaidyanath Jyotirlinga – The Divine Healer of Lord Shiva",
        description: "Complete spiritual and travel guide for Vaidyanath Jyotirlinga (Baidyanath Dham) in Deoghar including history, Ravana's legend, Kanwar Yatra, and darshan tips.",
        keywords: [
            "Vaidyanath Jyotirlinga",
            "Baidyanath Dham",
            "Deoghar Temple",
            "Kanwar Yatra",
            "Ravana Shiva Story",
            "Healing Jyotirlinga",
        ],
        datePublished: "2026-05-13",
        author: {
            "@type": "Organization",
            name: "Naman Darshan",
        },
        publisher: {
            "@type": "Organization",
            name: "Naman Darshan",
        },
        mainEntityOfPage: {
            "@type": "WebPage",
        },
        articleSection: "Spiritual Travel Guide",
        inLanguage: "en",
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Where is Vaidyanath Jyotirlinga located?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Vaidyanath Jyotirlinga is located in Deoghar, Jharkhand.",
                },
            },
            {
                "@type": "Question",
                name: "Why is Vaidyanath Jyotirlinga famous?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "It is famous as one of the 12 Jyotirlingas and for its healing spiritual significance.",
                },
            },
            {
                "@type": "Question",
                name: "Which devotee is associated with Vaidyanath Jyotirlinga?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The temple is closely associated with Ravana’s devotion to Lord Shiva.",
                },
            },
            {
                "@type": "Question",
                name: "What is the Kanwar Yatra?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Kanwar Yatra is a sacred pilgrimage where devotees carry Ganga water to offer at Baidyanath Dham.",
                },
            },
        ],
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(blogSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />

            <SEO
                title="Vaidyanath Jyotirlinga – Baidyanath Dham Deoghar Darshan Guide"
                keywords={[
                    "Vaidyanath Jyotirlinga",
                    "Baidyanath Dham",
                    "Deoghar Temple",
                    "Kanwar Yatra",
                    "Ravana Shiva Legend",
                ]}
                description="Complete guide to Vaidyanath Jyotirlinga in Deoghar. Learn about the legend of Ravana, healing power of Baba Baidyanath, Kanwar Yatra, and travel tips."
            />

            <Header />

            <main className="pt-36 md:pt-48 lg:pt-52 pb-12">
                <div className="container mx-auto px-4">
                    <BlogBreadcrumb pageTitle="Vaidyanath Jyotirlinga Guide" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <aside className="lg:col-span-3">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 border border-slate-100">
                                <h3 className="font-bold text-lg mb-4 text-slate-900 border-b pb-3">
                                    On This Page
                                </h3>

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

                        <article className="lg:col-span-6">
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100">
                                <div className="p-8 md:p-10">
                                    <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 leading-tight">
                                        Vaidyanath Jyotirlinga – The Divine Healer of Lord Shiva
                                    </h1>

                                    <div className="flex items-center gap-4 text-sm text-slate-600">
                                        <Calendar className="w-4 h-4" />
                                        <span>13 May 2026</span>
                                        <span>•</span>
                                        <span>12 min read</span>
                                    </div>
                                </div>

                                <div className="w-full h-64 md:h-96 bg-slate-200">
                                    <img
                                        src={vaidyanathImg}
                                        alt="Vaidyanath Jyotirlinga Temple"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-8 md:p-10 space-y-8 text-lg leading-relaxed text-slate-700">
                                    <section
                                        id="intro"
                                        className="relative overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-white via-orange-50/40 to-white p-8 md:p-12 shadow-sm"
                                    >
                                        <div className="absolute top-0 right-0 w-40 h-40 bg-orange-200/20 blur-3xl rounded-full" />
                                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-100/30 blur-2xl rounded-full" />

                                        <div className="relative z-10">
                                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-5">
                                                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                                                Sacred Jyotirlinga
                                            </div>

                                            <h2 className="text-4xl leading-tight font-bold text-slate-900 font-display mb-6">
                                                Vaidyanath Jyotirlinga in <span className="text-orange-600">Deoghar</span>
                                            </h2>

                                            <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mb-8" />

                                            <div className="space-y-6 text-[17px] md:text-lg leading-8 text-slate-700">
                                                <p>
                                                    Vaidyanath Jyotirlinga, also known as Baidyanath Dham, is one of the most sacred among the 12 Jyotirlingas of Lord Shiva. Located in Deoghar in Jharkhand, this spiritually powerful temple attracts millions of devotees every year who come seeking healing, peace, and divine blessings.
                                                </p>

                                                <p>
                                                    The name “Vaidyanath” comes from the Sanskrit word “Vaidya,” meaning physician or healer. In this form, Lord Shiva is worshipped as the divine healer who removes suffering and cures physical, emotional, and spiritual pain.
                                                </p>

                                                <p>
                                                    The temple complex is one of the most important pilgrimage destinations in eastern India and is especially famous during the holy month of Shravan, when millions of Kanwariyas undertake the sacred Kanwar Yatra.
                                                </p>

                                                <p>
                                                    The spiritual atmosphere of Baidyanath Dham, the constant chants of “Bol Bam,” and the deep devotion of pilgrims create a powerful and emotional spiritual experience.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    <section
                                        id="importance"
                                        className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm"
                                    >
                                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-100/40 blur-3xl rounded-full" />
                                        <div className="relative z-10">
                                            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                                                <Stethoscope className="w-4 h-4" />
                                                The Divine Healer
                                            </div>

                                            <h2 className="text-4xl font-bold text-slate-900 leading-tight font-display mb-6">
                                                Why <span className="text-orange-600">Vaidyanath Jyotirlinga</span> is So Important
                                            </h2>

                                            <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mb-8" />

                                            <p className="text-[17px] md:text-lg leading-8 text-slate-700 mb-8">
                                                Vaidyanath Jyotirlinga is regarded as one of the most spiritually significant healing shrines dedicated to Lord Shiva.
                                            </p>

                                            <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 p-6 md:p-8 mb-8">
                                                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display text-center">
                                                    Devotees believe that worshipping Lord Vaidyanath helps:
                                                </h3>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {[
                                                        "Remove diseases and suffering",
                                                        "Heal emotional and spiritual pain",
                                                        "Bring peace and prosperity",
                                                        "Fulfill sincere wishes",
                                                        "Remove negative karmas",
                                                        "Strengthen devotion and faith"
                                                    ].map((benefit, idx) => (
                                                        <div key={idx} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-orange-100 shadow-sm">
                                                            <CheckCircle2 className="w-5 h-5 mt-1 text-orange-500 shrink-0" />
                                                            <p className="text-slate-700 font-medium">{benefit}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <p className="text-[17px] md:text-lg leading-8 text-slate-700">
                                                The temple is especially important for devotees praying for health, healing, family wellbeing, and spiritual protection.
                                            </p>
                                        </div>
                                    </section>

                                    <section
                                        id="legend"
                                        className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-gradient-to-br from-slate-50 via-white to-orange-50/40 p-8 md:p-12 shadow-sm"
                                    >
                                        <div className="relative z-10">
                                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6">
                                                <Zap className="w-4 h-4" />
                                                Sacred Legend
                                            </div>

                                            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 font-display mb-6">
                                                The Divine Story Behind <span className="text-orange-600">Vaidyanath Jyotirlinga</span>
                                            </h2>

                                            <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mb-8" />

                                            <p className="text-[17px] md:text-lg leading-8 text-slate-700 mb-10">
                                                The legend of Vaidyanath Jyotirlinga is deeply connected with Ravana, the powerful king of Lanka.
                                            </p>

                                            <div className="space-y-8">
                                                <div className="relative rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                                                    <div className="absolute -top-4 left-6">
                                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-bold shadow-lg">
                                                            1
                                                        </div>
                                                    </div>
                                                    <div className="pt-4">
                                                        <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">Ravana’s Intense Devotion to Lord Shiva</h3>
                                                        <div className="space-y-4 text-[17px] md:text-lg leading-8 text-slate-700">
                                                            <p>According to the Shiva Purana, Ravana was one of the greatest devotees of Lord Shiva. He performed severe penance for many years to please Lord Shiva and gain divine blessings.</p>
                                                            <p>As part of his devotion, Ravana began offering his own heads one by one to Lord Shiva. When he was about to sacrifice his tenth head, Lord Shiva appeared before him.</p>
                                                            <p>Impressed by Ravana’s devotion and determination, Lord Shiva restored all his heads and granted him immense power.</p>
                                                            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-xl italic font-medium">
                                                                Because Lord Shiva healed Ravana’s injuries like a divine physician, he became known as Vaidyanath.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="relative rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                                                    <div className="absolute -top-4 left-6">
                                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-bold shadow-lg">
                                                            2
                                                        </div>
                                                    </div>
                                                    <div className="pt-4">
                                                        <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">Ravana Requests Shiva to Come to Lanka</h3>
                                                        <div className="space-y-4 text-[17px] md:text-lg leading-8 text-slate-700">
                                                            <p>Ravana then requested Lord Shiva to come and reside permanently in Lanka. Lord Shiva agreed and gave him a sacred Shivalinga.</p>
                                                            <p className="font-semibold text-orange-700">However, Shiva warned Ravana that the linga should never be placed on the ground during the journey. If it touched the ground, it would become permanently fixed there.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="relative rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                                                    <div className="absolute -top-4 left-6">
                                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-bold shadow-lg">
                                                            3
                                                        </div>
                                                    </div>
                                                    <div className="pt-4">
                                                        <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">Lord Ganesha’s Divine Trick</h3>
                                                        <div className="space-y-4 text-[17px] md:text-lg leading-8 text-slate-700">
                                                            <p>While traveling to Lanka, Ravana needed to perform his evening prayers. He requested a young cowherd boy nearby to hold the Shivalinga temporarily.</p>
                                                            <p>The boy was actually Lord Ganesha in disguise. After waiting for some time, Ganesha placed the Shivalinga on the ground.</p>
                                                            <p>When Ravana returned, he tried with all his strength to lift the linga, but it would not move.</p>
                                                            <div className="bg-slate-900 text-white p-6 rounded-2xl font-medium">
                                                                The Shivalinga became permanently established at that sacred place, which later became known as Vaidyanath Jyotirlinga.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="spiritual-meaning" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-8">Spiritual Meaning of Vaidyanath Jyotirlinga</h2>
                                        <p className="text-lg leading-8 text-slate-700 mb-8">Vaidyanath represents healing, compassion, devotion, and divine grace. Spiritually, the temple symbolizes:</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                "Healing from suffering",
                                                "Power of devotion and surrender",
                                                "Divine compassion of Lord Shiva",
                                                "Purification of mind and soul",
                                                "Spiritual protection and peace"
                                            ].map((point, i) => (
                                                <div key={i} className="flex items-center gap-3 p-4 bg-orange-50 rounded-2xl border border-orange-100">
                                                    <div className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                                                    <span className="font-medium text-slate-800">{point}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="mt-8 text-lg leading-8 text-slate-700 italic">
                                            The temple teaches devotees that sincere devotion can overcome pain, negativity, and obstacles in life.
                                        </p>
                                    </section>

                                    <section id="historical-importance" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
                                        <div className="inline-flex items-center gap-2 text-primary font-semibold mb-5">
                                            <History className="w-5 h-5" />
                                            Ancient Heritage
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-6">Historical Importance of Baidyanath Dham</h2>
                                        <div className="space-y-6 text-lg leading-8 text-slate-700">
                                            <p>Vaidyanath Temple has been an important center of Shiva worship for centuries. The temple is mentioned in:</p>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                                {["Shiva Purana", "Skanda Purana", "Ancient pilgrimage literature", "Regional devotional traditions"].map((text, i) => (
                                                    <li key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm font-semibold">
                                                        <ArrowBigRight className="w-4 h-4 text-orange-500" />
                                                        {text}
                                                    </li>
                                                ))}
                                            </ul>
                                            <p>Over time, Baidyanath Dham developed into one of the most important pilgrimage destinations in eastern India.</p>
                                            <p>The temple complex today consists of the main Jyotirlinga shrine along with several smaller temples dedicated to various Hindu deities.</p>
                                        </div>
                                    </section>

                                    <section id="architecture" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-8">Architecture of Vaidyanath Temple</h2>
                                        <p className="text-lg leading-8 text-slate-700 mb-10">The temple reflects traditional North Indian temple architecture.</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                            <div className="space-y-6">
                                                <h3 className="text-2xl font-bold text-slate-900 font-display border-b-2 border-orange-500 pb-2 inline-block">Main Features</h3>
                                                <ul className="space-y-4">
                                                    {[
                                                        "Tall temple spire",
                                                        "White and red temple structure",
                                                        "Sacred sanctum housing the Jyotirlinga",
                                                        "Ancient stone construction",
                                                        "Multiple surrounding shrines"
                                                    ].map((feat, i) => (
                                                        <li key={i} className="flex items-start gap-3">
                                                            <CheckCircle2 className="w-5 h-5 mt-1 text-green-600 shrink-0" />
                                                            <span className="font-medium text-slate-700">{feat}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100">
                                                <h3 className="text-2xl font-bold text-slate-900 font-display mb-4">The Temple Complex</h3>
                                                <p className="text-[16px] leading-7 text-slate-700 mb-6">The Baidyanath temple complex contains more than twenty temples dedicated to:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {["Goddess Parvati", "Lord Ganesha", "Kal Bhairav", "Hanuman", "Various forms of Shiva"].map((deity, i) => (
                                                        <span key={i} className="px-3 py-1 bg-white rounded-full border border-orange-200 text-sm font-bold text-orange-700">{deity}</span>
                                                    ))}
                                                </div>
                                                <p className="mt-6 text-sm italic font-medium text-slate-600">The spiritual energy of the entire complex attracts devotees throughout the year.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="kanwar-yatra" className="relative overflow-hidden p-8 md:p-12 rounded-[2rem] bg-slate-900 text-white shadow-xl">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px]" />
                                        <div className="relative z-10">
                                            <h2 className="text-3xl md:text-5xl font-bold font-display mb-8">The Sacred Kanwar Yatra</h2>
                                            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-slate-300">
                                                <p>One of the most important spiritual events associated with Vaidyanath Jyotirlinga is the Kanwar Yatra.</p>
                                                <p>During the holy month of Shravan, millions of devotees known as Kanwariyas carry holy Ganga water from Sultanganj in Bihar and walk barefoot to Deoghar.</p>
                                                <p className="bg-white/10 p-6 rounded-2xl border border-white/10 text-white font-medium">The journey covers more than 100 kilometers. Pilgrims continuously chant:</p>
                                                <div className="text-center py-4 text-3xl md:text-5xl font-bold text-orange-400 font-display">
                                                    “BOL BAM”
                                                </div>
                                                <p className="text-slate-300">while carrying sacred water to offer to Lord Shiva.</p>
                                                <p>The Kanwar Yatra is considered one of the largest annual religious pilgrimages in India.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="rituals" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-10">Important Rituals and Pujas</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
                                                <h3 className="text-xl font-bold text-slate-900 mb-3">Jalabhishek</h3>
                                                <p className="text-slate-700">Offering holy water to Lord Shiva is considered highly auspicious.</p>
                                            </div>
                                            <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
                                                <h3 className="text-xl font-bold text-slate-900 mb-3">Rudrabhishek</h3>
                                                <p className="text-slate-700 mb-4">The Jyotirlinga is worshipped with:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {["Water", "Milk", "Honey", "Ghee", "Bilva leaves"].map(item => (
                                                        <span key={item} className="px-3 py-1 bg-white rounded-full text-xs font-bold text-orange-600">{item}</span>
                                                    ))}
                                                </div>
                                                <p className="mt-4 text-xs italic font-medium">Devotees believe this ritual brings healing and spiritual peace.</p>
                                            </div>
                                            <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
                                                <h3 className="text-xl font-bold text-slate-900 mb-3">Shravan Special Pujas</h3>
                                                <p className="text-slate-700">Special rituals and devotional programs are organized during Shravan month.</p>
                                            </div>
                                            <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
                                                <h3 className="text-xl font-bold text-slate-900 mb-3">Maha Aarti</h3>
                                                <p className="text-slate-700">The temple aarti creates a highly devotional and spiritually uplifting atmosphere.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="festivals" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
                                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-10">Festivals Celebrated</h2>
                                        <div className="space-y-6">
                                            <div className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-slate-100">
                                                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center shrink-0">
                                                    <Calendar className="w-8 h-8 text-orange-600" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Shravan Mela</h3>
                                                    <p className="text-slate-700 font-medium">The most important festival associated with Baidyanath Dham. Millions of Kanwariyas visit the temple during this period.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-slate-100">
                                                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center shrink-0">
                                                    <Zap className="w-8 h-8 text-orange-600" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Mahashivratri</h3>
                                                    <p className="text-slate-700 font-medium">Celebrated with night-long prayers and devotional worship.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-slate-100">
                                                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center shrink-0">
                                                    <Heart className="w-8 h-8 text-orange-600" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Kartik Purnima</h3>
                                                    <p className="text-slate-700 font-medium">Another important spiritual occasion celebrated by devotees.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="best-time" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-10 text-center">Best Time to Visit Vaidyanath Temple</h2>
                                        <p className="text-lg leading-8 text-slate-700 mb-10 text-center">The best time to visit Baidyanath Dham is from <span className="font-bold text-orange-600 underline">October to March</span>.</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 text-center">
                                                <h3 className="text-2xl font-bold text-blue-900 mb-4 font-display">Winter Season</h3>
                                                <ul className="space-y-3 font-medium text-blue-800">
                                                    <li>• Pleasant weather</li>
                                                    <li>• Comfortable pilgrimage experience</li>
                                                    <li>• Ideal for darshan and sightseeing</li>
                                                </ul>
                                            </div>
                                            <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 text-center">
                                                <h3 className="text-2xl font-bold text-orange-900 mb-4 font-display">Shravan Month</h3>
                                                <p className="font-medium text-orange-800 mb-4">Spiritually significant but extremely crowded.</p>
                                                <p className="text-sm font-bold text-orange-700 italic">Devotees seeking the full spiritual experience often prefer visiting during Shravan.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="how-to-reach" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
                                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-10">How to Reach Vaidyanath Jyotirlinga</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                                    <Zap className="w-6 h-6 text-blue-600" />
                                                </div>
                                                <h3 className="font-bold text-slate-900 mb-2">By Air</h3>
                                                <p className="text-sm text-slate-600 font-medium">Nearest Airport:</p>
                                                <p className="text-sm font-bold text-slate-900 mt-1">Deoghar Airport</p>
                                            </div>
                                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                                                    <Car className="w-6 h-6 text-red-600" />
                                                </div>
                                                <h3 className="font-bold text-slate-900 mb-2">By Train</h3>
                                                <p className="text-sm text-slate-600 font-medium">Nearest Railway Station:</p>
                                                <p className="text-sm font-bold text-slate-900 mt-1">Jasidih Junction</p>
                                            </div>
                                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                                                    <MapPin className="w-6 h-6 text-green-600" />
                                                </div>
                                                <h3 className="font-bold text-slate-900 mb-2">By Road</h3>
                                                <p className="text-sm text-slate-600 font-medium">Well connected from:</p>
                                                <p className="text-xs font-bold text-slate-900 mt-1 leading-relaxed">Patna, Ranchi, Kolkata, Bhagalpur. Regular buses and taxis are available.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="nearby-places" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-10">Nearby Places to Visit Near Baidyanath Dham</h2>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {[
                                                { name: "Basukinath Temple", desc: "A highly sacred Shiva temple often visited along with Baidyanath Dham." },
                                                { name: "Naulakha Temple", desc: "A beautiful temple known for its architecture and spiritual atmosphere." },
                                                { name: "Tapovan Hills", desc: "Associated with meditation and ancient sages." },
                                                { name: "Satsang Ashram", desc: "A major spiritual center in Deoghar." },
                                                { name: "Trikut Hills", desc: "A scenic and spiritually important tourist destination." }
                                            ].map((place, i) => (
                                                <div key={i} className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-orange-50 hover:border-orange-200 transition-all cursor-pointer">
                                                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-orange-600">{place.name}</h3>
                                                    <p className="text-xs font-medium text-slate-600 leading-relaxed">{place.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="spiritual-benefits" className="p-8 md:p-12 rounded-[2rem] border border-orange-200 bg-orange-50/30 shadow-sm">
                                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-8">Spiritual Benefits of Visiting Vaidyanath Jyotirlinga</h2>
                                        <p className="text-lg leading-8 text-slate-700 mb-10">Devotees believe that visiting Vaidyanath:</p>
                                        <div className="grid grid-cols-1 gap-4">
                                            {[
                                                "Removes suffering and negativity",
                                                "Brings healing and peace",
                                                "Improves mental and spiritual wellbeing",
                                                "Strengthens devotion toward Lord Shiva",
                                                "Helps fulfill sincere wishes"
                                            ].map((benefit, i) => (
                                                <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-orange-100 shadow-sm">
                                                    <ShieldCheck className="w-6 h-6 text-orange-500" />
                                                    <span className="font-bold text-slate-800 text-lg">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="mt-10 text-center text-xl font-medium text-slate-900 leading-relaxed italic border-t-2 border-orange-200 pt-8">
                                            For many pilgrims, Baidyanath Dham becomes a deeply emotional and spiritually transformative experience.
                                        </p>
                                    </section>

                                    <section id="conclusion" className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-orange-50 via-white to-orange-50 border border-orange-100 mb-8">
                                        <h2 className="text-3xl font-bold text-slate-900 font-display mb-8 flex items-center gap-2">
                                            <BookOpen className="w-8 h-8 text-orange-500" /> Conclusion
                                        </h2>
                                        <div className="space-y-6 text-lg leading-8 text-slate-700">
                                            <p>Vaidyanath Jyotirlinga is one of the most spiritually powerful healing shrines dedicated to Lord Shiva.</p>
                                            <p>The sacred legend of Ravana’s devotion, the divine healing energy of Lord Vaidyanath, and the emotional devotion of millions of pilgrims together make Baidyanath Dham a truly extraordinary pilgrimage destination.</p>
                                            <p>From the sacred Kanwar Yatra to the powerful spiritual atmosphere of the temple, every aspect of Vaidyanath reflects devotion, faith, healing, and divine grace.</p>
                                            <p className="font-bold text-slate-900">For devotees of Lord Shiva, visiting Vaidyanath Jyotirlinga is not just a pilgrimage but a sacred journey toward peace, healing, spiritual awakening, and divine blessings.</p>
                                        </div>
                                    </section>

                                    <section id="faqs" className="mb-8">
                                        <h2 className="text-3xl font-bold text-slate-900 font-display mb-8 flex items-center gap-2">
                                            <HelpCircle className="w-8 h-8 text-orange-500" /> Frequently Asked Questions
                                        </h2>
                                        <Accordion type="single" collapsible className="w-full space-y-4">
                                            <AccordionItem value="item-1" className="border rounded-2xl px-6 bg-white shadow-sm overflow-hidden border-slate-100">
                                                <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-orange-600">Where is Vaidyanath Jyotirlinga located?</AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-[16px] leading-7 font-medium pb-6">Vaidyanath Jyotirlinga is located in Deoghar, Jharkhand.</AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-2" className="border rounded-2xl px-6 bg-white shadow-sm overflow-hidden border-slate-100">
                                                <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-orange-600">Why is Vaidyanath Jyotirlinga famous?</AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-[16px] leading-7 font-medium pb-6">It is famous as one of the 12 Jyotirlingas and for its healing spiritual significance.</AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-3" className="border rounded-2xl px-6 bg-white shadow-sm overflow-hidden border-slate-100">
                                                <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-orange-600">Which devotee is associated with Vaidyanath Jyotirlinga?</AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-[16px] leading-7 font-medium pb-6">The temple is closely associated with Ravana’s devotion to Lord Shiva.</AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-4" className="border rounded-2xl px-6 bg-white shadow-sm overflow-hidden border-slate-100">
                                                <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-orange-600">What is the Kanwar Yatra?</AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-[16px] leading-7 font-medium pb-6">The Kanwar Yatra is a sacred pilgrimage where devotees carry Ganga water to offer at Baidyanath Dham.</AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-5" className="border rounded-2xl px-6 bg-white shadow-sm overflow-hidden border-slate-100">
                                                <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-orange-600">What is the best time to visit Vaidyanath Temple?</AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-[16px] leading-7 font-medium pb-6">October to March is ideal, while Shravan month is spiritually most significant.</AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-6" className="border rounded-2xl px-6 bg-white shadow-sm overflow-hidden border-slate-100">
                                                <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-orange-600">Can devotees perform Rudrabhishek at Baidyanath Dham?</AccordionTrigger>
                                                <AccordionContent className="text-slate-600 text-[16px] leading-7 font-medium pb-6">Yes, devotees can participate in Rudrabhishek and special Shiva pujas.</AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </section>

                                    <section className="bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl p-8 text-white shadow-lg mb-8">
                                        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 md:p-8 rounded-r-2xl shadow-sm">
                                            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-display mb-5 leading-tight">
                                                Plan Your Vaidyanath Jyotirlinga Yatra with Naman Darshan
                                            </h2>

                                            <p className="text-lg leading-8 text-stone-700 mb-6">
                                                Experience a spiritually enriching journey to Vaidyanath with complete travel assistance and pilgrimage support.
                                            </p>

                                            <div className="mb-8">
                                                <p className="font-semibold text-stone-900 mb-4 text-lg">
                                                    Our services include:
                                                </p>

                                                <ul className="space-y-3">
                                                    {[
                                                        "Request Darshan Assistance Assistance",
                                                        "Jyotirlinga Tour Packages",
                                                        "Hotel Booking",
                                                        "Transportation Services",
                                                        "Temple Pooja Assistance",
                                                        "Customized Pilgrimage Tours",
                                                    ].map((item) => (
                                                        <li key={item} className="flex items-start gap-3 text-stone-700 text-lg">
                                                            <span className="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-4">
                                                <Link to="/darshan">
                                                    <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all text-sm md:text-base">
                                                        Request Darshan Assistance Online
                                                    </button>
                                                </Link>
                                                <a href="https://wa.me/919311973199" target="_blank" rel="noopener noreferrer">
                                                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all text-sm md:text-base flex items-center gap-2">
                                                        WhatsApp Support
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </section>

                                    <p className="text-center font-bold text-orange-600 mt-8 mb-8 bg-orange-50 py-4 rounded-xl border border-orange-100 flex items-center justify-center gap-2 italic">
                                        Jai Vaidyanath! 🙏🕉️ हर हर महादेव!
                                    </p>
                                </div>
                            </div>

                            <div className="mt-12 bg-white rounded-xl shadow-sm p-8 border border-slate-100">
                                <CommentSection />
                            </div>
                        </article>

                        <aside className="lg:col-span-3 space-y-8">
                            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 sticky top-40">
                                <h3 className="font-bold text-lg mb-6 border-b pb-3 text-slate-900">
                                    Quick Links
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between text-sm font-medium p-3 bg-orange-50 rounded-lg text-orange-700">
                                        <span>Location</span>
                                        <span className="font-bold">Deoghar, JH</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm font-medium p-3 bg-orange-50 rounded-lg text-orange-700">
                                        <span>Primary Deity</span>
                                        <span className="font-bold">Lord Shiva</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm font-medium p-3 bg-orange-50 rounded-lg text-orange-700">
                                        <span>Best Season</span>
                                        <span className="font-bold">Winter / Shravan</span>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Recent Posts</h4>
                                    <div className="space-y-4">
                                        {recentPosts.map((post, idx) => (
                                            <Link
                                                key={idx}
                                                to={post.link}
                                                className="group flex gap-3 items-center text-slate-600 hover:text-orange-600 transition-colors"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-orange-500 shrink-0" />
                                                <span className="text-sm font-bold leading-snug">{post.title}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl text-white">
                                    <h4 className="font-bold mb-2">Need Help?</h4>
                                    <p className="text-xs text-white/80 mb-4 leading-relaxed font-medium">Plan your divine journey to Vaidyanath Jyotirlinga with our experts.</p>
                                    <Button className="w-full bg-white text-orange-600 hover:bg-orange-50 font-bold rounded-xl text-xs h-10">
                                        Get Free Consultation
                                    </Button>
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

export default VaidyanathJyotirlinga;
