import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ChevronRight, Flame, MapPin, Calendar, Clock, ArrowRight, Users, Droplet, Zap } from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
import { useState } from "react";
import BookingModal from "@/components/booking/BookingModal";


const DaujiHurangaBlog = () => {
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Dauji Huranga 2026 Baldeo Darshan Travel Guide",
            "description": "Complete guide for Dauji Huranga in Baldeo including temple darshan tips, travel planning, routes, timing, and crowd advice for a smooth Braj Holi experience.",
            "keywords": [
                "Dauji Huranga",
                "Baldeo Holi 2026",
                "Dauji Temple Holi",
                "Braj Holi festival",
                "Holi in Baldeo",
                "Mathura Holi events",
                "Dauji Huranga guide",
                "Braj pilgrimage planning"
            ],
            "datePublished": "2026-01-01",
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
                "name": "Dauji Huranga 2026",
                "location": {
                    "@type": "Place",
                    "name": "Baldeo, Mathura, Uttar Pradesh, India"
                }
            }
        }
    ];

    const [isBookingOpen, setIsBookingOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 120; // Increased offset for fixed header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-stone-50 font-sans selection:bg-rose-200 selection:text-rose-900">
            <SEO
                title="Dauji Huranga 2026 Baldeo Darshan Travel Guide Tips"
                description="Plan your visit to Dauji Huranga 2026 in Baldeo with this complete travel and darshan guide. Learn temple entry tips, crowd advice, timing, and routes to attend Dauji Temple Holi smoothly and experience one of Braj’s most energetic and immersive festival celebrations."
                image="/assets/blog14.jpg"
                keywords={[
                    "Dauji Huranga",
                    "Baldeo Holi 2026",
                    "Dauji Temple Holi",
                    "Braj Holi festival",
                    "Holi in Baldeo",
                    "Mathura Holi events",
                    "Dauji Huranga guide",
                    "Braj pilgrimage planning"
                ]}
                schemas={schemas}
            />

            <Header />

            {/* Hero Section */}
            <div className="relative pt-36 md:pt-48 lg:pt-52 pb-20 lg:pb-28 overflow-hidden bg-stone-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/blog14.jpg"
                        alt="Dauji Huranga in Baldeo, Uttar Pradesh"
                        className="w-full h-full object-cover opacity-40 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-transparent"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <BlogBreadcrumb 
                        pageTitle="Dauji Huranga 2026" 
                        description="Plan your visit to Dauji Huranga 2026 in Baldeo with this complete travel and darshan guide."
                    />

                    <div className="max-w-lg lg:max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-rose-500 to-orange-500 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                            <Flame className="w-4 h-4" /> Festival Travel Guide
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight font-serif">
                            Dauji Huranga in Baldeo
                        </h1>
                        <p className="text-xl sm:text-2xl text-rose-100/90 mb-10 max-w-3xl mx-auto font-light">
                            The Most Powerful Braj Holi at Dauji Temple – Complete Darshan & Travel Guide
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm font-medium">
                            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10 shadow-xl">
                                <Calendar className="w-4 h-4 text-rose-400" /> March 2026
                            </span>
                            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10 shadow-xl">
                                <Clock className="w-4 h-4 text-rose-400" /> 7 min read
                            </span>
                            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10 shadow-xl">
                                <MapPin className="w-4 h-4 text-rose-400" /> Baldeo, Mathura
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <main className="pb-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-7xl mx-auto">
                        {/* Main Content Area */}
                        <div className="lg:col-span-8 space-y-12">
                            {/* Featured Image */}
                            <div className="rounded-3xl overflow-hidden shadow-lg border border-stone-100">
                                <img src="/assets/blog14.jpg" alt="Dauji Huranga in Baldeo, Uttar Pradesh" className="w-full h-auto" />
                            </div>

                            {/* Intro Section */}
                            <div id="introduction" className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-stone-100">
                                <h2 className="text-3xl font-bold text-stone-900 mb-6 font-serif flex items-center gap-3">
                                    <span className="w-10 h-1 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full inline-block"></span>
                                    There is Holi... and then there is Dauji Huranga
                                </h2>
                                <p className="text-lg text-stone-600 mb-5 leading-relaxed">
                                    If you have experienced Barsana's Lathmar Holi, admired the grandeur of Mathura Janmabhoomi, or walked through the colours of Vrindavan — Dauji Huranga in Baldeo feels completely different.
                                </p>
                                <p className="text-lg text-stone-600 mb-5 leading-relaxed italic">
                                    It is louder. It is wilder. It is drenched — not just in colour — but in raw Braj energy.
                                </p>
                                <p className="text-lg text-stone-600 leading-relaxed">
                                    Held at the sacred Dauji Temple dedicated to <strong>Balarama</strong>, this celebration is considered one of the most intense and unforgettable events of Braj Holi.
                                </p>
                            </div>

                            {/* What is it Section */}
                            <div id="what-is-huranga" className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-stone-100">
                                <h2 className="text-3xl font-bold text-stone-900 mb-8 font-serif">What is Dauji Huranga?</h2>
                                <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                                    Dauji Huranga is a traditional Holi celebration that takes place inside the courtyard of Dauji Temple in Baldeo, Mathura.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                    {[
                                        { text: "Women playfully tear the men's upper garments", icon: Users },
                                        { text: "The cloth is soaked in coloured water", icon: Droplet },
                                        { text: "Buckets of coloured water are thrown from all sides", icon: Droplet },
                                        { text: "The temple turned into a sea of vibrant colours", icon: Zap }
                                    ].map((item, idx) => {
                                        const Icon = item.icon;
                                        return (
                                            <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-stone-50 border border-stone-100">
                                                <div className="p-2 bg-white rounded-lg shadow-sm text-rose-500 shrink-0">
                                                    <Icon size={20} />
                                                </div>
                                                <p className="text-stone-700 font-medium leading-snug">{item.text}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Practical Guide */}
                            <div id="travel-guide" className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-stone-100">
                                <h2 className="text-3xl font-bold text-stone-900 mb-8 font-serif">Planning Your Visit</h2>
                                <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-4 text-stone-700">
                                            <MapPin className="text-rose-500 shrink-0 mt-1" size={20} />
                                            <span><strong>Location:</strong> Baldeo town, Mathura district, Uttar Pradesh</span>
                                        </li>
                                        <li className="flex items-start gap-4 text-stone-700">
                                            <Clock className="text-amber-500 shrink-0 mt-1" size={20} />
                                            <span><strong>Timing:</strong> Starts around noon; arrive early (by 9 AM)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* FAQs */}
                            <div id="faqs" className="bg-stone-50 rounded-3xl p-8 sm:p-12 border border-stone-200">
                                <h2 className="text-3xl font-bold text-stone-900 mb-8 font-serif">Frequently Asked Questions</h2>
                                <div className="space-y-6">
                                    {[
                                        { q: "1. When is Dauji Huranga celebrated in 2026?", a: "Dauji Huranga will be celebrated during the Braj Holi period in March 2026 at Dauji Temple in Baldeo near Mathura." },
                                        { q: "2. Is it safe to attend?", a: "Yes, but be prepared for intense crowds and water. Keep your cameras protected." }
                                    ].map((faq, idx) => (
                                        <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
                                            <h3 className="font-bold text-lg text-stone-800 mb-3">{faq.q}</h3>
                                            <p className="text-stone-600 leading-relaxed">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="hidden lg:block lg:col-span-4">
                            <div className="sticky top-40 md:top-48 lg:top-52 space-y-8">
                                <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
                                    <h3 className="font-bold text-xl text-stone-900 mb-6 font-serif">Quick Navigation</h3>
                                    <ul className="space-y-2">
                                        {[
                                            { id: 'introduction', label: 'Introduction' },
                                            { id: 'what-is-huranga', label: 'About the Ritual' },
                                            { id: 'travel-guide', label: 'Planning' },
                                            { id: 'faqs', label: 'FAQs' }
                                        ].map(link => (
                                            <li key={link.id}>
                                                <button
                                                    onClick={() => scrollToSection(link.id)}
                                                    className="text-left w-full px-4 py-2 rounded-xl hover:bg-rose-50 hover:text-rose-700 transition-colors uppercase text-xs font-bold tracking-wider"
                                                >
                                                    {link.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-stone-900 rounded-3xl p-8 text-white">
                                    <h3 className="font-bold text-2xl mb-4 font-serif">Need Assistance?</h3>
                                    <p className="text-stone-400 mb-6 text-sm">Let our experts arrange your darshan and transport for a stress-free experience.</p>
                                    <button
                                        onClick={() => setIsBookingOpen(true)}
                                        className="w-full bg-white text-stone-900 font-bold py-3.5 rounded-xl hover:bg-rose-50 transition-colors"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <BookingModal
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
                type="darshan"
                serviceName="Dauji Huranga 2026"
            />
            <Footer />
        </div>
    );
};

export default DaujiHurangaBlog;
