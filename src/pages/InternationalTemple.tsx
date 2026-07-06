import React, { useState, useEffect } from "react";

// ── Global booking kill-switch ──────────────────────────────────────────────
// Set to false to re-enable booking forms across all temple pages.
const BOOKING_GLOBALLY_DISABLED = true;
// ────────────────────────────────────────────────────────────────────────────
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    MapPin,
    CheckCircle2,
    Calendar,
    Clock,
    Info,
    Heart,
    Music,
    Users,
    Star,
    ArrowRight,
} from "lucide-react";
import BookingModal from "@/components/booking/BookingModal";
import { ShareGuide } from "@/components/common/ShareGuide";
import { Darshan } from "../types/darshan";
import { getApiUrl } from "@/utils/api";

interface InternationalTempleProps {
    initialData?: Darshan | null;
}

const InternationalTemple = ({ initialData }: InternationalTempleProps) => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [temple, setTemple] = useState<Darshan | null>(initialData || null);
    const [loading, setLoading] = useState(!initialData);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    useEffect(() => {
        if (initialData) {
            setTemple(initialData);
            setLoading(false);
            return;
        }

        const fetchTemple = async () => {
            try {
                let data;
                if (slug) {
                    // Try fetch from Darshan API first
                    const res = await fetch(getApiUrl(`/api/darshan/${slug}`));
                    if (res.ok) {
                        data = await res.json();
                    } else {
                        // Fallback purely for backward compatibility if mixed data exists
                        const res2 = await fetch(getApiUrl(`/api/temples/${slug}`));
                        if (res2.ok) data = await res2.json();
                    }
                }

                // Fallback: fetch all Darshan entries and find International
                if (!data) {
                    const res = await fetch(getApiUrl("/api/darshan"));
                    if (res.ok) {
                        const allDarshans = await res.json();
                        data = allDarshans.find((t: any) => t.seoKeywords?.toLowerCase().includes("international"));

                        // If still not found, try to find by specific name as backup for hardcoded demo
                        if (!data) {
                            data = allDarshans.find((t: any) => t.name.includes("Haveli") || t.location.includes("Dubai"));
                        }
                    }
                }

                if (data) {
                    setTemple(data);
                }
            } catch (error) {
                console.error("Failed to fetch temple", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTemple();
    }, [slug]);

    if (loading) return <div className="min-h-screen flex items-center justify-center bg-stone-50">Loading...</div>;
    if (!temple) return <div className="min-h-screen flex items-center justify-center bg-stone-50">International Temple not found.</div>;

    // --- Data Mapping to preserve specific design structure ---

    // Helper: Split by newlines and filter empty
    const parseList = (text: string) => text ? text.split('\n').filter(l => l.trim()) : [];

    // Helper: Parse "Title : Description" format for Experience section
    const parseKeyVal = (text: string) => {
        const lines = parseList(text);
        if (lines.length === 0) return [];

        // Check if lines are in "Key : Value" format
        const hasKeyVal = lines.some(line => line.includes(':'));

        if (hasKeyVal) {
            return lines.map(line => {
                const [title, ...desc] = line.split(':');
                return {
                    title: title?.trim(),
                    text: desc.join(':')?.trim() || ""
                };
            });
        } else {
            // Fallback for plain list
            return lines.map((line, i) => ({
                title: `Point ${i + 1}`,
                text: line
            }));
        }
    };

    const content = {
        hero: {
            title: temple.name,
            subtitle: temple.subTitle || "A Spiritual Home for Devotees",
            location: temple.location,
            image: temple.image || "/IMG_3561.PNG"
        },
        intro: {
            text: parseList(temple.description), // Treating description as paragraphs
            highlights: Array.isArray(temple.introHighlights)
                ? temple.introHighlights
                : (temple.introHighlights
                    ? temple.introHighlights.split(',').map((h: string) => h.trim()).filter(Boolean)
                    : ["Peaceful darshan atmosphere", "Cultural & devotional gatherings", "Family-friendly spiritual space"]),
        },
        essence: {
            title: temple.structureTitle || "Spiritual Essence",
            desc: temple.structureDesc || "Discover the unique spiritual significance and architecture.",
            points: (temple.structurePoints && temple.structurePoints.length > 0
                ? temple.structurePoints
                : parseList(temple.historyArchitectureDesc)
            ).map((text: string, i: number) => ({
                text,
                icon: [
                    <Heart className="w-5 h-5 text-red-500" />,
                    <Users className="w-5 h-5 text-orange-500" />,
                    <Star className="w-5 h-5 text-yellow-500" />,
                    <MapPin className="w-5 h-5 text-blue-500" />,
                    <Music className="w-5 h-5 text-green-500" />
                ][i % 5] // Cycle through icons
            })),
            footer: temple.structureFooter || "Devotees feel not like visitors — but like guests in the divine home.",
        },
        experience: {
            title: temple.experienceTitle || "Darshan Experience",
            desc: temple.experienceDesc || "A personal and soulful darshan experience.",
            sections: (temple.experienceSections && temple.experienceSections.length > 0)
                ? temple.experienceSections
                : (parseKeyVal(temple.religiousSignificanceDesc).length > 0
                    ? parseKeyVal(temple.religiousSignificanceDesc)
                    : [{ title: "Experience", text: temple.religiousSignificanceDesc || "Experience divine peace." }])
        },
        whyVisit: {
            title: temple.whyVisitTitle || `Why Visit ${temple.name}?`,
            points: parseList(temple.surroundingsDesc),
            footer: temple.whyVisitFooter || `${temple.name} stands as a bridge between devotion and modern life.`,
        },
        visitorInfo: {
            title: "Visiting Information",
            points: [
                ...(temple.darshanTimings || (temple.schedule && temple.schedule.length > 0) ? [{
                    label: "Darshan Timings",
                    text: temple.darshanTimings || temple.schedule.map((s: any) => `${s.label ? s.label.replace(/:+$/, '') : ''}: ${s.time}`).join(", "),
                    icon: <Clock className="w-5 h-5 text-gray-400" />,
                }] : []),
                ...(temple.entryFee ? [{
                    label: "Entry Fee",
                    text: temple.entryFee,
                    icon: <Info className="w-5 h-5 text-gray-400" />,
                }] : []),
                ...(temple.connectivity ? [{
                    label: "How to reach the temple",
                    text: temple.connectivity,
                    icon: <MapPin className="w-5 h-5 text-gray-400" />,
                }] : []),
                ...(temple.notableEvents ? [{
                    label: "Events",
                    text: temple.notableEvents,
                    icon: <Calendar className="w-5 h-5 text-gray-400" />,
                }] : []),
            ],
            note: "Timings and events may vary during festivals.",
        },
        faqs: temple.faqs && temple.faqs.length > 0 ? temple.faqs.map((f: any) => ({ q: f.question, a: f.answer })) : [
            { q: "Is this temple open to all?", a: "Yes, devotees from all backgrounds are welcome." }
        ],
    };

    // Helper to enforce Jyotirlinga capitalization (Case-insensitive catch)
    const fixCase = (text: string) => text ? text.replace(/jyotirlinga/gi, 'Jyotirlinga') : text;

    // Dynamic Title Logic based on user request
    let pageTitle = `${temple?.name || "Temple"} Request Darshan Assistance Booking`;
    if (slug?.includes('ram-mandir')) {
        pageTitle = "Ayodhya Ram Mandir Request Darshan Assistance Booking";
    } else if (slug?.includes('somnath-jyotirlinga')) {
        pageTitle = "Somnath Temple Request Darshan Assistance Booking Jyotirlinga";
    } else if (temple?.seoTitle && temple.seoTitle.includes("Booking")) {
        pageTitle = temple.seoTitle.replace(" | Guided Darshan Assistance", "");
    }

    return (
        <div className="min-h-screen bg-stone-50 pt-36 md:pt-48 lg:pt-52">
            <SEO
                title={pageTitle}
                description={fixCase(temple.seoDescription || temple.description)}
                keywords={temple.seoKeywords ? temple.seoKeywords.split(',') : [temple.name, "International Temple"]}
                image={content.hero.image}
            />
            <Header />

            <main>
                {/* Breadcrumbs and Share */}
                <div className="container mx-auto px-4 mb-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-stone-100">
                        <nav className="flex items-center space-x-2 text-sm text-stone-500">
                            <a href="/" className="hover:text-primary transition-colors">Home</a>
                            <span>/</span>
                            <span className="text-primary font-medium">International Temple</span>
                        </nav>
                        <ShareGuide
                            pageTitle={temple.name}
                            description={fixCase(temple.seoDescription) || temple.description?.slice(0, 160)}
                        />
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">
                    <div className="absolute inset-0">
                        <img
                            src={content.hero.image}
                            alt={content.hero.title}
                            className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                    </div>
                    <div className="relative z-10 container mx-auto px-4 text-center mt-28 md:mt-32">
                        <RevealOnScroll>
                            <div className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white/90 text-sm mb-6 border border-white/20">
                                <MapPin className="w-4 h-4" />
                                {content.hero.location}
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 md:mb-6 leading-tight">
                                {temple.name}
                            </h1>
                            <p className="text-lg md:text-2xl text-stone-200 font-light max-w-3xl mx-auto mb-6 md:mb-8 px-4">
                                {fixCase(content.hero.subtitle)}
                            </p>
                            {!BOOKING_GLOBALLY_DISABLED && (
                                <Button
                                    onClick={() => setIsBookingModalOpen(true)}
                                    className="bg-[#d68c45] hover:bg-[#b56b2a] text-white text-base md:text-lg px-6 py-4 md:px-8 md:py-6 rounded-full shadow-lg transition-all hover:scale-105"
                                >
                                    Plan Your Visit
                                </Button>
                            )}
                        </RevealOnScroll>
                    </div>
                </section>

                {/* Intro Section */}
                <section className="py-12 md:py-24 container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <RevealOnScroll>
                            <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
                                {content.intro.text.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>

                            <div className="mt-10 grid md:grid-cols-3 gap-6">
                                {content.intro.highlights.map((highlight, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                                        <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
                                        <span className="font-medium text-stone-800">{highlight}</span>
                                    </div>
                                ))}
                            </div>

                            {!BOOKING_GLOBALLY_DISABLED && (
                                <div className="mt-12 text-center">
                                    <Button
                                        onClick={() => setIsBookingModalOpen(true)}
                                        className="bg-[#d68c45] hover:bg-[#b56b2a] text-white text-base md:text-lg px-6 py-4 md:px-8 md:py-6 h-auto whitespace-normal break-words max-w-full rounded-full shadow-lg transition-all hover:-translate-y-1"
                                    >
                                        Plan Your Visit to {temple.name}
                                    </Button>
                                </div>
                            )}
                        </RevealOnScroll>
                    </div>
                </section>

                {/* Spiritual Essence */}
                <section className="py-12 md:py-20 bg-[#fff8f0] px-4">
                    <div className="container mx-auto px-4">
                        <RevealOnScroll>
                            <div className="text-center max-w-3xl mx-auto mb-16">
                                <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#8B4513] mb-4 md:mb-6">
                                    {content.essence.title}
                                </h2>
                                <p className="text-lg text-stone-600">
                                    {content.essence.desc}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                {content.essence.points.map((point, idx) => (
                                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-amber-500 hover:shadow-xl transition-shadow">
                                        <div className="bg-amber-50 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                                            {point.icon}
                                        </div>
                                        <p className="text-stone-700 font-medium leading-relaxed">
                                            {point.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-center mt-12 text-xl font-serif italic text-amber-700">
                                "{content.essence.footer}"
                            </p>
                        </RevealOnScroll>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="py-12 md:py-20 container mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-2xl md:text-4xl font-serif font-bold text-stone-900 mb-4 md:mb-6">
                                {content.experience.title}
                            </h2>
                            <p className="text-lg text-stone-600">
                                {content.experience.desc}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {content.experience.sections.map((section, idx) => (
                                <div key={idx} className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors">
                                        <span className="text-xl font-serif font-bold text-stone-400 group-hover:text-amber-600">
                                            {idx + 1}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors">
                                            {section.title}
                                        </h3>
                                        <p className="text-stone-600 leading-relaxed">
                                            {section.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </section>

                {/* Why Visit & Visitor Info */}
                <section className="py-12 md:py-20 bg-stone-900 text-stone-200 px-4">
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto">
                            {/* Why Visit */}
                            <RevealOnScroll>
                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-amber-500 mb-8">
                                    {content.whyVisit.title}
                                </h3>
                                <ul className="space-y-6">
                                    {content.whyVisit.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className="w-2 h-2 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                                            <span className="text-lg text-stone-300">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-8 text-amber-500/80 italic font-serif text-lg border-l-2 border-amber-500/30 pl-4">
                                    {content.whyVisit.footer}
                                </p>
                            </RevealOnScroll>

                            {/* Visitor Info */}
                            <RevealOnScroll delay={200}>
                                <div className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700">
                                    <h3 className="text-2xl font-serif font-bold text-white mb-8">
                                        {temple.visitorGuide && temple.visitorGuide.length > 0
                                            ? `Visiting ${temple.name} – What to Know`
                                            : content.visitorInfo.title}
                                    </h3>

                                    {temple.visitorGuide && temple.visitorGuide.length > 0 ? (
                                        // Dynamic Visitor Guide
                                        <>
                                            <ul className="space-y-4">
                                                {temple.visitorGuide.map((item: any, idx: number) => (
                                                    <li key={idx} className="flex gap-3 items-start text-stone-300">
                                                        <div className="w-2 h-2 rounded-full bg-stone-500 mt-2 shrink-0" />
                                                        <span>
                                                            <strong className="text-stone-100">{item.title}:</strong> {item.text}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                            {temple.visitorGuideFooter && (
                                                <p className="mt-8 text-sm text-stone-500 italic border-t border-stone-700 pt-4">
                                                    {temple.visitorGuideFooter}
                                                </p>
                                            )}
                                        </>
                                    ) : (
                                        // Fixed Fallback
                                        <>
                                            <div className="space-y-6">
                                                {content.visitorInfo.points.map((item, idx) => (
                                                    <div key={idx} className="flex items-start gap-4">
                                                        <div className="mt-1">{item.icon}</div>
                                                        <div>
                                                            <span className="block font-bold text-stone-200 text-sm uppercase tracking-wide mb-1">
                                                                {item.label}
                                                            </span>
                                                            <span className="text-stone-400">
                                                                {item.text}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="mt-8 text-sm text-stone-500 italic border-t border-stone-700 pt-4">
                                                * {content.visitorInfo.note}
                                            </p>
                                        </>
                                    )}
                                </div>
                            </RevealOnScroll>
                        </div>
                    </div>
                </section>



                {/* Reviews Section */}
                {temple.reviews && temple.reviews.length > 0 && (
                    <section className="py-12 md:py-20 bg-stone-50">
                        <div className="container mx-auto px-4 max-w-5xl">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
                                    Devotee Experiences
                                </h2>
                                <div className="flex justify-center items-center gap-2">
                                    <div className="flex text-amber-500">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-current" />
                                        ))}
                                    </div>
                                    <span className="text-stone-600 font-medium">
                                        {((temple.reviews.reduce((acc: any, r: any) => acc + Number(r.rating), 0) / temple.reviews.length) || 5).toFixed(1)}/5
                                    </span>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {temple.reviews.map((review: any, idx: number) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h4 className="font-bold text-stone-900">{review.name}</h4>
                                                <p className="text-xs text-stone-500">{review.date}</p>
                                            </div>
                                            <div className="flex text-amber-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-4 h-4 ${i < review.rating ? "fill-current" : "text-stone-200"}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-stone-600 text-sm leading-relaxed italic">
                                            "{review.comment}"
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* FAQ Section */}
                <section className="py-12 md:py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-serif text-center text-stone-900 mb-12">
                            Common Questions
                        </h2>
                        <Accordion type="single" collapsible className="w-full">
                            {content.faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border-b-stone-200"
                                >
                                    <AccordionTrigger className="text-left text-lg font-medium text-stone-800 hover:text-amber-600">
                                        <span>{faq.q}</span>
                                    </AccordionTrigger>
                                    <AccordionContent forceMount={true} className="text-stone-600 text-base leading-relaxed">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* Final CTA — hidden while BOOKING_GLOBALLY_DISABLED */}
                {!BOOKING_GLOBALLY_DISABLED && (
                    <section className="py-16 md:py-24 bg-amber-50 border-t border-amber-100 text-center">
                        <div className="container mx-auto px-4 relative z-10">
                            <RevealOnScroll>
                                <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#8B4513] mb-6">
                                    {temple.crowdFreeExperience?.title || "Experience Divine Grace"}
                                </h2>
                                <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                                    {temple.crowdFreeExperience?.description || `Let ${temple.name} become your spiritual refuge.`}
                                </p>
                                <Button
                                    onClick={() => setIsBookingModalOpen(true)}
                                    size="lg"
                                    className="bg-[#d68c45] hover:bg-[#b56b2a] text-white font-bold text-lg md:text-xl px-6 py-4 md:px-12 md:py-8 h-auto whitespace-normal break-words max-w-full rounded-full shadow-2xl transition-all hover:scale-105"
                                >
                                    {temple.crowdFreeExperience?.ctaText || "Plan Your Visit Now"}
                                </Button>
                            </RevealOnScroll>
                        </div>
                    </section>
                )}


            </main>

            {!BOOKING_GLOBALLY_DISABLED && (
                <BookingModal
                    isOpen={isBookingModalOpen}
                    onClose={() => setIsBookingModalOpen(false)}
                    title="International Temple Enquiry"
                    type="international_inquiry"
                    serviceName={temple.name}
                />
            )}

            <Footer />
        </div >
    );
};

export default InternationalTemple;
