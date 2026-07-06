import { useState, useEffect, useRef } from "react";
import { useParams, Link, useSearchParams, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getApiUrl } from "@/utils/api";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar, ChevronRight, Star, HandHeart, Car, Landmark, BookOpen, Users, Heart, CheckCircle2, AlarmClock, Video, AlertTriangle } from "lucide-react";
import { testimonials } from "@/data/testimonialsData";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import BookingModal from "@/components/booking/BookingModal";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import LinkifiedText from "@/components/common/LinkifiedText";
import { ShareGuide } from "@/components/common/ShareGuide";
import { liveChannels } from "@/data/liveDarshanData";

import InternationalTemple from "../InternationalTemple";

const DarshanBookingPage = () => {
    const { slug } = useParams();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [temple, setTemple] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const hasScrolledRef = useRef(false);
    const scrollTimerRef = useRef<any>(null);

    // URL Tracking Logic
    const formId = `booking-darshan-${slug}`;
    const [isBookingOpen, setIsBookingOpen] = useState(searchParams.get("form") === formId);

    const [showBhimashankarNotice, setShowBhimashankarNotice] = useState(false);
    const isYatraTemple = slug === "dwarkadhish-darshan-vipdarshan" || slug === "somnath-jyotirlinga-darshan-vipdarshan";
    const hideGuidedDarshan = slug === "dwarkadhish-darshan-vipdarshan";
    useEffect(() => {
        if (slug === 'bhimashankar-temple-vipdarshan') {
            setShowBhimashankarNotice(true);
        } else {
            setShowBhimashankarNotice(false);
        }
    }, [slug]);

    useEffect(() => {
        setIsBookingOpen(searchParams.get("form") === formId);
    }, [searchParams, formId]);

    const handleOpen = () => {
        setSearchParams(prev => {
            const newParams = new URLSearchParams(prev);
            newParams.set("form", formId);
            return newParams;
        }, { replace: false });
    };

    const handleClose = () => {
        setSearchParams(prev => {
            const newParams = new URLSearchParams(prev);
            newParams.delete("form");
            return newParams;
        }, { replace: true });
    };

    const [activeTab, setActiveTab] = useState(() => {
        return new URLSearchParams(window.location.search).get("tab") || "About";
    });

    const scrollToSection = (sectionId: string) => {
        setActiveTab(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 140;
            const yOffset = -(headerHeight + 56); // Dynamic header height + tab nav height
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    // Smoothly scroll active tab into view in the tab navigation bar
    useEffect(() => {
        const activeTabElement = document.querySelector(`[data-tab="${activeTab}"]`);
        if (activeTabElement) {
            activeTabElement.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });
        }
    }, [activeTab]);

    // Scrollspy logic to update active tab based on scroll position
    useEffect(() => {
        if (loading || !temple) return;

        const sections = ["About", "Timings", "Types of Darshan", "Why Us", "What Naman Darshan Provides", "Reviews", "Info & FAQs"];
        const observerOptions = {
            root: null,
            rootMargin: "-200px 0px -40% 0px",
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const timeoutId = setTimeout(() => {
            sections.forEach((sectionId) => {
                const element = document.getElementById(sectionId);
                if (element) observer.observe(element);
            });
        }, 500);

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, [loading, temple]);

    useEffect(() => {
        if (!slug) return;
        fetch(getApiUrl(`/api/darshan/${slug}`))
            .then(res => res.json())
            .then(data => {
                if (data.message || !data.name) {
                    console.error("Temple not found:", data);
                    setTemple(null);
                    setLoading(false);
                    return;
                }
                setTemple(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch temple:", err);
                setLoading(false);
            });
    }, [slug]);

    useEffect(() => {
        if (loading || !temple || hasScrolledRef.current) return;
        const targetSection = searchParams.get("tab") || location.state?.scrollToSection || window.location.hash.replace('#', '');
        if (targetSection) {
            hasScrolledRef.current = true;
            scrollTimerRef.current = setTimeout(() => {
                scrollToSection(targetSection);
            }, 200);

            if (searchParams.has("tab")) {
                setSearchParams(prev => {
                    const newParams = new URLSearchParams(prev);
                    newParams.delete("tab");
                    return newParams;
                }, { replace: true });
            }
        }
    }, [loading, temple, searchParams, location.state, setSearchParams]);

    useEffect(() => {
        return () => {
            if (scrollTimerRef.current) {
                clearTimeout(scrollTimerRef.current);
            }
        };
    }, []);

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    if (!temple) return <div className="min-h-screen flex items-center justify-center">Temple not found</div>;

    // Check for International Temple
    const isInternational = temple.seoKeywords?.toLowerCase().includes("international") ||
        temple.category === "International"; // Check category if available in model

    if (isInternational) {
        return <InternationalTemple initialData={temple} />;
    }

    // Helper to enforce Jyotirlinga capitalization (Case-insensitive catch)
    const fixCase = (text: string) => text ? text.replace(/jyotirlinga/gi, 'Jyotirlinga') : text;

    // Dynamic Title Logic based on user request (Overrides DB seoTitle to maintain strict format)
    let pageTitle = `${temple?.name || "Temple"} Darshan Assistance`;
    if (slug?.includes('ram-mandir')) {
        pageTitle = "Ayodhya Ram Mandir Darshan Assistance";
    } else if (slug?.includes('somnath-jyotirlinga')) {
        pageTitle = "Somnath Temple Darshan Assistance Jyotirlinga";
    }

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <SEO
                title={pageTitle}
                description={fixCase(temple?.seoDescription) || `${(fixCase(temple?.description) || "").substring(0, 150)}...`}
                keywords={temple?.seoKeywords || ["Darshan Assistance", temple?.name || "Temple", temple?.location || "India", "Temple Darshan Guide", "Online Assistance"]}
                image={temple?.image || ""}
            />
            {temple?.structuredData && (
                <Helmet>
                    {(() => {
                        const strData = typeof temple.structuredData === 'string' ? temple.structuredData : '';
                        if (strData.includes('<script')) {
                            const regex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
                            const scripts = [];
                            let match;
                            while ((match = regex.exec(strData)) !== null) {
                                scripts.push(match[1]);
                            }
                            if (scripts.length > 0) {
                                return scripts.map((scriptContent, idx) => (
                                    <script key={idx} type="application/ld+json">
                                        {scriptContent}
                                    </script>
                                ));
                            }
                        }
                        return (
                            <script type="application/ld+json">
                                {typeof temple.structuredData === 'string'
                                    ? temple.structuredData
                                    : JSON.stringify(temple.structuredData)}
                            </script>
                        );
                    })()}
                </Helmet>
            )}
            <Header />
            <BookingModal
                isOpen={isBookingOpen}
                onClose={handleClose}
                type="darshan"
                serviceName={temple ? temple.name : ""}
                serviceId={slug}
            />

            {/* Bhimashankar Special Notice Popup */}
            <Dialog open={showBhimashankarNotice} onOpenChange={setShowBhimashankarNotice}>
                <DialogContent className="sm:max-w-[700px] max-h-[90vh] w-[95vw] p-0 border-0 rounded-2xl shadow-2xl bg-white flex flex-col overflow-hidden">
                    {/* Decorative Top header */}
                    <div className="bg-gradient-to-r from-red-600 to-orange-500 p-6 md:p-8 text-center relative flex-shrink-0">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="bg-white/20 p-4 rounded-full mb-4 backdrop-blur-sm border border-white/30 shadow-inner">
                                <AlertTriangle className="w-10 h-10 text-white" strokeWidth={2.5} />
                            </div>
                            <DialogTitle className="text-2xl md:text-3xl text-white font-bold font-display leading-tight">
                                Important Notice
                            </DialogTitle>
                            <p className="text-white/90 font-bold mt-2 text-lg tracking-wide uppercase">Bhimashankar Temple</p>
                        </div>
                    </div>

                    <div className="p-6 md:p-8 pt-6 overflow-y-auto flex-grow">
                        <DialogDescription asChild>
                            <div className="text-gray-700 text-sm md:text-base space-y-5 text-left leading-relaxed">

                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3 mb-2 flex items-center gap-2">
                                    Temple Closed Until <span className="text-red-500">31 May 2026</span>
                                </h3>

                                <p className="font-bold text-gray-800 border-l-4 border-orange-500 pl-4 py-2 italic bg-orange-50/50 rounded-r-lg shadow-sm">
                                    - Message from District Collector and District Magistrate Jitendra Dudi.
                                </p>

                                <p><strong className="text-orange-700 font-bold">Pune, dated 7 April</strong> – The construction of a grand assembly hall (Sabhamandap) and development works in the surroundings of Shri Kshetra Bhimashankar Temple are progressing at a rapid pace. To ensure the safety of devotees, it has been decided to keep the temple closed for daily darshan from <strong className="text-red-600 bg-red-50 border border-red-100 px-2 py-0.5 rounded shadow-sm">9 April 2026 to 31 May 2026</strong>.</p>

                                <p>In the backdrop of the Simhastha Kumbh Mela scheduled in Nashik (2027), a significant increase in devotees is anticipated. Consequently, infrastructure and facility development works are being undertaken to manage the anticipated footfall.</p>

                                <p>The existing assembly hall was found inadequate, and the construction of a new grand Sabhamandap is underway. The old main Sabhamandap has been completely dismantled. Due to the presence of heavy machinery, large stones, and construction materials within the temple surroundings, it is unsafe to keep the temple open for darshan during this period.</p>

                                <p>Approximately 75% of the Sabhamandap construction has been completed. The entry route has been completely closed to facilitate the stepped access pathway construction.</p>

                                <p>Shri Kshetra Bhimashankar is a high rainfall region. Considering the likelihood of rainfall beginning in the first week of June, it is essential to complete the works before that period.</p>

                                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-5 rounded-xl border border-orange-200 shadow-sm mt-6 flex gap-4 items-start">
                                    <span className="text-3xl mt-1 drop-shadow-sm">🙏</span>
                                    <p className="font-bold text-orange-950 leading-snug">
                                        The District Collector has appealed to devotees and local residents to cooperate with the temple trust, district administration, police authorities, and all concerned agencies during this period.
                                    </p>
                                </div>
                            </div>
                        </DialogDescription>
                    </div>

                    <DialogFooter className="px-6 md:px-8 pb-8 pt-2 sm:justify-center border-none flex-shrink-0 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)] z-10">
                        <Button
                            className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 focus:ring-4 focus:ring-red-500/20 text-white font-bold px-12 py-6 rounded-xl h-auto text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
                            onClick={() => setShowBhimashankarNotice(false)}
                        >
                            I Understand
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* New Hero Section */}
            <div
                className="container mx-auto px-6 md:px-16 pb-8"
                style={{ paddingTop: "calc(var(--header-height, 140px) + 24px)" }}
            >
                {/* Breadcrumb and Share */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link to="/darshan" className="hover:text-primary transition-colors">Darshan</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-foreground font-medium">{temple.name}</span>
                    </div>
                    <ShareGuide
                        pageTitle={temple.name}
                        description={fixCase(temple.seoDescription) || temple.description?.slice(0, 160)}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Column - Image */}
                    <div className="relative h-[300px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src={temple.image}
                            alt={temple.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Right Column - Details */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-orange-600 font-medium">
                            <MapPin className="w-5 h-5" />
                            <span>{temple.location}</span>
                        </div>

                        <div>
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                {temple.name}
                            </h1>
                        </div>

                        {temple.subtitle && (
                            <p className="text-xl text-orange-600 font-medium">{temple.subtitle}</p>
                        )}

                        <LinkifiedText
                            text={fixCase(temple.description)}
                            className="text-lg text-muted-foreground leading-relaxed"
                        />

                        {/* Social Proof */}
                        <div className="flex items-center gap-4 py-2">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                                        <img
                                            src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                            alt="Devotee sharing their darshan experience at the temple"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-1 text-orange-500 font-bold text-lg">
                                <Star className="w-5 h-5 fill-current" />
                                <span>4.7</span>
                                <span className="text-muted-foreground font-normal text-base ml-1">(10k+ Successful Temple Darshan)</span>
                            </div>
                        </div>

                        <p className="text-gray-600 italic">
                            Plan your darshan in advance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">

                        {!hideGuidedDarshan && (
                            <Button
                            className="w-full md:w-auto px-6 py-4 text-lg font-bold bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-xl transition-all rounded-xl h-auto whitespace-normal break-words"
                            onClick={handleOpen}
                            >
                            Book Guided Darshan
                            </Button>
                        )}

                        <div className="w-full md:w-auto">
                            <Button
                            className="w-full px-6 py-4 text-lg font-bold bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all rounded-xl h-auto whitespace-normal break-words"
                            onClick={handleOpen}
                            >
                            {isYatraTemple ? "Book Full Yatra Package" : "Book Full Package"}
                            </Button>
                        </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div
                className="sticky z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm mb-4"
                style={{ top: "var(--header-height, 140px)" }}
            >
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex justify-between items-center text-sm font-bold text-stone-500 overflow-x-auto whitespace-nowrap gap-6 no-scrollbar pt-3">
                        {["About", "Timings", "Types of Darshan", "Why Us", "What Naman Darshan Provides", "Reviews", "Info & FAQs"].map((tab) => (
                            <button
                                key={tab}
                                data-tab={tab}
                                className={`transition-all duration-200 flex-shrink-0 pb-3 border-b-2 cursor-pointer ${
                                    activeTab === tab
                                        ? "text-saffron border-saffron font-extrabold"
                                        : "text-stone-500 border-transparent hover:text-saffron"
                                }`}
                                onClick={() => scrollToSection(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <main className="flex-grow container mx-auto px-6 md:px-16 pt-2 md:pt-4 pb-8 md:pb-16 space-y-12 md:space-y-24">

                {/* About Section */}
                <section id="About" className="scroll-mt-32">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-orange-500 mb-6 flex items-center gap-3">
                        <span className="text-3xl">🕉</span>
                        About {temple.name} Darshan
                    </h2>
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                        {/* <p className="whitespace-pre-line">{temple.description}</p> */}
                        {temple.historyArchitectureDesc && (
                            <LinkifiedText text={temple.historyArchitectureDesc} className="whitespace-pre-line" />
                        )}

                      
                    </div>
                </section>

                {/* Timings Section */}
                <section id="Timings" className="scroll-mt-32">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-orange-500 mb-8 flex items-center gap-2">
                        <Clock className="w-8 h-8" />
                        Darshan & Seva Timings
                    </h2>

                    {temple.scheduleDescription && (
                        <LinkifiedText text={temple.scheduleDescription} className="text-lg text-gray-700 mb-8 max-w-4xl leading-relaxed" />
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column - Schedule */}
                        <div>
                            {/* Default Schedule - Only show if no seasonal schedule exists */}
                            {(!temple.scheduleSummer?.length && !temple.scheduleWinter?.length) && (
                                <>
                                    <h3 className="font-bold text-xl text-gray-805 mb-6">{temple.name} Darshan Timing</h3>
                                    <div className="space-y-4 text-gray-700">
                                        {temple.schedule && temple.schedule.length > 0 ? (
                                            temple.schedule.map((slot: any, index: number) => (
                                                <div key={index} className="flex justify-between py-2 border-b border-dashed border-gray-200">
                                                    <span className="font-medium">{slot.label ? `${slot.label.replace(/:+$/, '')}:` : ""}</span>
                                                    <span>{slot.time}</span>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="text-gray-500 italic py-4">
                                                Timings will be updated soon.
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}

                            {/* Summer Schedule */}
                            {temple.scheduleSummer && temple.scheduleSummer.length > 0 && (
                                <div className="mt-6 border-t pt-4">
                                    <h4 className="font-semibold text-gray-800 mb-3 text-lg">Summer Schedule</h4>
                                    <div className="space-y-4 text-gray-700">
                                        {temple.scheduleSummer.map((slot: any, index: number) => (
                                            <div key={index} className="flex justify-between py-2 border-b border-dashed border-gray-200">
                                                <span className="font-medium">{slot.label ? `${slot.label.replace(/:+$/, '')}:` : ""}</span>
                                                <span>{slot.time}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Winter Schedule */}
                            {temple.scheduleWinter && temple.scheduleWinter.length > 0 && (
                                <div className="mt-6 border-t pt-4">
                                    <h4 className="font-semibold text-gray-800 mb-3 text-lg">Winter Schedule</h4>
                                    <div className="space-y-4 text-gray-700">
                                        {temple.scheduleWinter.map((slot: any, index: number) => (
                                            <div key={index} className="flex justify-between py-2 border-b border-dashed border-gray-200">
                                                <span className="font-medium">{slot.label ? `${slot.label.replace(/:+$/, '')}:` : ""}</span>
                                                <span>{slot.time}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}


                            {temple.scheduleNote && (
                                <div className="flex items-start gap-2 mt-6 text-gray-700 text-lg italic">
                                    <AlarmClock className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                                    <p>{temple.scheduleNote}</p>
                                </div>
                            )}
                        </div>

                        {/* Right Column - Map/Image */}
                        <div className="flex flex-col items-center">
                            <div className="w-full aspect-video bg-amber-50/50 rounded-xl overflow-hidden flex items-center justify-center relative p-2">
                                <img
                                    src={slug?.includes('bhimashankar') ? "/images/bhimashankar_map.png" : (temple.mapImage || "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80")}
                                    alt={`${temple.name} Map Image`}
                                    onError={(e) => {
                                        if (slug?.includes('bhimashankar')) return; // Don't replace if it's our custom local image
                                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80";
                                    }}
                                    className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg border-4 border-double border-amber-200 shadow-md hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute top-2 right-2 pointer-events-none">
                                    <span className="bg-white/90 px-2 py-0.5 rounded text-[10px] font-bold text-amber-900 shadow-sm border border-amber-200">Map</span>
                                </div>
                            </div>
                            <a
                                href={temple.googleMapLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(temple.name + " " + temple.location)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 text-orange-500 font-bold hover:underline"
                            >
                                View on Google Maps
                            </a>
                        </div>
                    </div>
                </section>

                {/* Types of Darshan Section */}
                {temple.darshanOptions && temple.darshanOptions.length > 0 && (
                    <section id="Types of Darshan" className="scroll-mt-32">
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-orange-500 mb-8 flex items-center gap-3">
                            <Star className="w-8 h-8" />
                            Types of Darshan
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {temple.darshanOptions.map((option: any, idx: number) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-xl text-gray-900 mb-3">{option.title}</h3>
                                    <LinkifiedText text={option.description} className="text-gray-600 mb-4" />
                                    {option.price && (
                                        <div className="inline-block bg-orange-100/50 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                                            {option.price}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}


                {/* Trust Points Section (New) */}
                {temple.trustPoints && temple.trustPoints.length > 0 && (
                    <section className="mt-8 px-4 py-6 bg-orange-50/50 rounded-2xl border border-orange-100">
                        <ul className="space-y-3">
                            {temple.trustPoints.map((point: string, idx: number) => {
                                const isBookCta = point.toLowerCase().includes("book");
                                let icon = <CheckCircle2 className="w-5 h-5 text-gray-700" />;
                                let className = "text-gray-700 font-medium flex items-start gap-3 text-lg";

                                if (point.toLowerCase().includes("trusted")) {
                                    icon = <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />;
                                    className = "text-gray-800 font-bold flex items-start gap-3 text-xl";
                                } else if (isBookCta) {
                                    icon = <span className="text-2xl">👉</span>;
                                    className = "text-orange-600 font-bold flex items-center gap-3 text-xl mt-2 cursor-pointer hover:bg-orange-100 p-2 rounded-lg transition-colors -ml-2";
                                } else {
                                    icon = <span className="text-xl font-bold text-gray-700">✓</span>;
                                }

                                return (
                                    <li
                                        key={idx}
                                        className={className}
                                        onClick={isBookCta ? handleOpen : undefined}
                                    >
                                        <span className="mt-1 flex-shrink-0">{icon}</span>
                                        <span>{point}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                )}

                {/* Significance Section (New) */}
                {temple.significance && (temple.significance.title || temple.significance.description || (temple.significance.points && temple.significance.points.length > 0)) && (
                    <section>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-orange-500 mb-6 flex items-center gap-3">
                            <span className="text-3xl">✨</span>
                            {temple.significance.title || `Significance of ${temple.name}`}
                        </h2>
                        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                            {temple.significance.description && <LinkifiedText text={temple.significance.description} />}
                            {temple.significance.points && temple.significance.points.length > 0 && (
                                <ul className="list-disc pl-6 space-y-2">
                                    {temple.significance.points.map((point: string, idx: number) => (
                                        <li key={idx}><LinkifiedText text={point} /></li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </section>
                )}



                {/* Live Darshan Section */}
                {liveChannels.find(channel => slug?.includes(channel.slug)) && (
                    <section id="LiveDarshan" className="scroll-mt-32">
                        <div className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="space-y-2">
                                <h2 className="font-display text-2xl md:text-3xl font-bold text-orange-500 flex items-center gap-3">
                                    <Video className="w-8 h-8" />
                                    Watch Live Darshan
                                </h2>
                                <p className="text-lg text-gray-700">
                                    Can't visit in person? Experience the divine presence from anywhere.
                                </p>
                            </div>
                            <Link to={`/live-darshan/${liveChannels.find(channel => slug?.includes(channel.slug))?.slug}`}>
                                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all h-auto">
                                    Watch Now
                                </Button>
                            </Link>
                        </div>
                    </section>
                )}


                {/* Why Us Section */}
                <section id="Why Us" className="scroll-mt-32">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-orange-500 mb-8 flex items-center gap-3">
                        <Heart className="w-8 h-8 fill-current" />
                        Why Devotees Trust Naman Darshan?
                    </h2>
                    <ul className="space-y-4">
                        {[
                            "Guided entry assistance",
                            "Experienced spiritual coordinators",
                            "Senior & special care help",
                            "Devotee-first service approach",
                            "Complete yatra coordination"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-4 text-lg font-bold text-gray-800">
                                <CheckCircle2 className="w-6 h-6 text-green-600 fill-green-100" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* What We Provide Section */}
                <section id="What Naman Darshan Provides" className="scroll-mt-32">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-orange-500 mb-4 flex items-center gap-3">
                        <HandHeart className="w-8 h-8" />
                        What Naman Darshan Provides
                    </h2>
                    {temple.services?.description && (
                        <p className="text-lg text-gray-700 mb-8 w-full">
                            {temple.services.description}
                        </p>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Personal Pickup Assistance",
                                desc: "Pickup from nearby temple points or pre-decided locations."
                            },
                            {
                                title: "Crowd Management",
                                desc: "Guidance through the optimal entry gates to reduce waiting time."
                            },
                            {
                                title: "Logistical Support",
                                desc: "Help with locker facilities for belongings where items are restricted."
                            },
                            {
                                title: "Senior-Friendly Care",
                                desc: "Priority support ensuring elders reach comfortably with minimal strain."
                            },
                            {
                                title: "Holistic Itinerary Guidance",
                                desc: "Assistance planning visits to nearby sacred sites and temples."
                            },
                            {
                                title: "Dedicated Darshan Assistance",
                                desc: "End-to-end coordination from arrival to successful darshan."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-orange-50/50 p-8 rounded-xl border border-orange-100/50">
                                <div className="mb-4">
                                    <HandHeart className="w-8 h-8 text-orange-500" />
                                </div>
                                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <Button
                            size="lg"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-12 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                            onClick={handleOpen}
                        >
                            Book Guided Darshan
                        </Button>
                    </div>
                </section>

                {/* Booking Process Section */}
                {temple.bookingProcess && temple.bookingProcess.length > 0 && (
                    <section id="BookingProcess" className="scroll-mt-32">
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-orange-500 mb-8 flex items-center gap-3">
                            <BookOpen className="w-8 h-8" />
                            {temple.bookingProcessTitle || "How to Book"}
                        </h2>
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:-translate-x-px before:h-full before:bg-gradient-to-b before:from-transparent before:via-orange-200 before:to-transparent">
                                {temple.bookingProcess.map((step: any, idx: number) => (
                                    <div key={idx} className="relative flex items-start gap-6 group">
                                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-orange-100 group-hover:bg-orange-500 group-hover:text-white transition-colors z-10 shadow-sm font-bold text-orange-600 relative">
                                            {idx + 1}
                                        </div>
                                        <div className="pt-1">
                                            <h3 className="font-bold text-xl text-gray-900 mb-2">{step.step}</h3>
                                            <LinkifiedText text={step.description} className="text-gray-600" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}







                {/* Reviews Section */}
                <section id="Reviews" className="scroll-mt-32">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-orange-500 mb-8 flex items-center gap-2">
                        <span className="w-1.5 h-8 bg-orange-500 rounded-full"></span>
                        Pilgrim Reviews
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.slice(0, 3).map((testimonial) => (
                            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
                                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 italic flex-grow">
                                    "{testimonial.text}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                                        <img src={testimonial.image} alt={`${testimonial.name} sharing their darshan experience at the temple`} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-gray-900">{testimonial.name}</p>
                                        <p className="text-xs text-gray-500">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Info & FAQs Section */}
                <section id="Info & FAQs" className="scroll-mt-32">
                    <h2 className="font-display text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                        <span className="w-1.5 h-8 bg-orange-500 rounded-full"></span>
                        Info & FAQs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            {temple.faqs && temple.faqs.length > 0 ? (
                                <Accordion type="single" collapsible className="w-full">
                                    {temple.faqs.map((faq: any, index: number) => (
                                        <AccordionItem key={index} value={`item-${index}`} className="border-b-0 mb-4 rounded-xl bg-gray-50 px-4">
                                            <AccordionTrigger className="text-left font-semibold hover:text-orange-600 hover:no-underline">
                                                <span>{faq.question}</span>
                                            </AccordionTrigger>
                                            <AccordionContent forceMount={true} className="text-muted-foreground text-base leading-relaxed pb-4">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            ) : (
                                <p className="text-muted-foreground">No FAQs available.</p>
                            )}
                        </div>
                        <div className="space-y-6">
                            {/* Location Sidebar removed */}
                        </div>
                    </div>
                </section>

                {/* Crowd Free Experience Section */}
                {temple.crowdFreeExperience && (temple.crowdFreeExperience.title || temple.crowdFreeExperience.description) && (
                    <section id="CrowdFreeExperience" className="scroll-mt-32 mb-12">
                        <div className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100">
                            {temple.crowdFreeExperience.title && (
                                <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    {temple.crowdFreeExperience.title}
                                </h2>
                            )}
                            {temple.crowdFreeExperience.description && (
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    <LinkifiedText text={temple.crowdFreeExperience.description} />
                                </p>
                            )}

                            {temple.crowdFreeExperience.ctaText && (
                                <button
                                    onClick={handleOpen}
                                    className="mt-6 w-full md:w-auto px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-xl transition-all shadow-md flex items-center justify-center gap-2 h-auto whitespace-normal break-words"
                                >
                                    <span>🕉️</span>
                                    {temple.crowdFreeExperience.ctaText}
                                </button>
                            )}
                        </div>
                    </section>

                    
                )}
                {/* SEO "Smart Play" Strategy Section for VIP Darshan Search Intent */}
                <div className="mt-8 bg-amber-50/60 p-6 rounded-2xl border border-amber-100">
                    <h3 className="font-display text-2xl font-bold text-amber-900 mb-4">
                        Looking for VIP Darshan at {temple.name}?
                    </h3>
                    <p className="mb-4">
                        Many devotees search for VIP Darshan or Special Darshan at {temple.name}. Please note that queue management is strictly handled by temple authorities, and skip-the-line access is not permitted. Instead, we elevate your visit with our Guided Darshan Assistance, ensuring you have a Pandit Ji by your side to navigate the complex and explain its rich history.
                    </p>
                    <p>
                        <strong>Understanding the difference between a VIP Darshan and our Guided Assistance:</strong> While a VIP Darshan (which we do not offer) focuses solely on bypassing the crowd, our Guided Darshan Assistance focuses on spiritual enrichment. You will proceed through standard queues, but with the dedicated support of a local Pandit Ji who knows the temple's daily rituals intimately.
                    </p>
                </div>
            </main>
            <Footer />
        </div >
    );
};

export default DarshanBookingPage;
