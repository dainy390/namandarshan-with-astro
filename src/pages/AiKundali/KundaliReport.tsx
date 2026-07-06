import React, { useRef, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Download,
    ChevronLeft,
    MapPin,
    Calendar,
    Clock,
    Sparkles,
    Moon,
    Sun,
    Star,
    Shield,
    Gem,
    Grid3X3,
    List,
    Info,
    ChevronDown,
    ChevronUp,
    Briefcase,
    Heart,
    Activity,
    User,
    Quote
} from 'lucide-react';
import {
    KundaliData,
    calcPanchang,
    calcAvakhada,
    calcVimshottariDasha,
    detectYogas,
    checkManglik,
    checkSadesati,
    getGemstoneRecommendations,
    getRudrakshaRecommendation,
    getAscendantReport,
    getPlanetaryReports,
    RASHI_HINDI,
    PLANET_HINDI,
    PLANET_SYMBOLS,
    RASHIS,
    RASHI_LORDS
} from '@/lib/kundali/kundali';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { toast } from 'sonner';
import AIPanditChat from '@/components/kundali/AIPanditChat';
import KundaliChart from '@/components/kundali/KundaliChart';
import PlanetaryTable from '@/components/kundali/PlanetaryTable';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SEO from '@/components/SEO';
import { getApiUrl } from '@/utils/api';

// ─── Components ───

const SectionWrapper = ({ title, children, icon: Icon, id }: { title: string; children: React.ReactNode; icon: any; id: string }) => (
    <motion.section
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 scroll-mt-24"
    >
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Icon size={24} />
            </div>
            <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        </div>
        {children}
    </motion.section>
);

const DetailRow = ({ label, value, icon: Icon }: { label: string; value: string | number; icon?: any }) => (
    <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
        <div className="flex items-center gap-2 text-muted-foreground">
            {Icon && <Icon size={16} />}
            <span>{label}</span>
        </div>
        <span className="font-medium text-foreground">{value}</span>
    </div>
);

const CollapsibleCard = ({ title, icon: Icon, children, defaultOpen = true, id }: { title: string; icon: any; children: React.ReactNode; defaultOpen?: boolean; id?: string }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    useEffect(() => {
        const handleOpen = (e: any) => {
            if (e.detail?.id === id || e.detail?.expandAll) setIsOpen(true);
        };
        window.addEventListener('open-section', handleOpen);
        window.addEventListener('expand-all-sections', handleOpen);
        return () => {
            window.removeEventListener('open-section', handleOpen);
            window.removeEventListener('expand-all-sections', handleOpen);
        };
    }, [id]);

    return (
        <Card className="overflow-hidden border-border/50 shadow-sm transition-all hover:shadow-md">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CardHeader className="p-4 bg-muted/30">
                    <CollapsibleTrigger asChild>
                        <div className="flex items-center justify-between cursor-pointer group">
                            <div className="flex items-center gap-3">
                                <div className="p-1.5 bg-primary/10 rounded text-primary">
                                    <Icon size={18} />
                                </div>
                                <CardTitle className="text-lg">{title}</CardTitle>
                            </div>
                            {isOpen ? <ChevronUp size={20} className="text-muted-foreground group-hover:text-primary transition-colors" /> : <ChevronDown size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />}
                        </div>
                    </CollapsibleTrigger>
                </CardHeader>
                <CollapsibleContent>
                    <CardContent className="p-4">
                        {children}
                    </CardContent>
                </CollapsibleContent>
            </Collapsible>
        </Card>
    );
};

// ─── Main Page ───

const sections = [
    { id: "birth-details", title: "Birth Details", icon: User },
    { id: "panchang", title: "Panchang", icon: Sun },
    { id: "avakhada", title: "Avakhada Chakra", icon: Star },
    { id: "horoscope", title: "Lagna Chart", icon: Grid3X3 },
    { id: "planetary", title: "Planetary Positions", icon: Moon },
    { id: "vimsottari", title: "Vimshottari Dasha", icon: Clock },
    { id: "yogas", title: "Astrological Yogas", icon: Sparkles },
    { id: "manglik", title: "Dosha Analysis", icon: Shield },
    { id: "gemstones", title: "Remedies", icon: Gem },
    { id: "ascendant", title: "Ascendant Report", icon: Info },
    { id: "predictions", title: "House Interpretations", icon: List },
];

const KundaliReport = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const reportRef = useRef<HTMLDivElement>(null);
    const data = location.state?.kundaliData as KundaliData;
    const [activeSection, setActiveSection] = useState("");
    const [isGeneratingEmailPDF, setIsGeneratingEmailPDF] = useState(
        false
    );

    useEffect(() => {
        if (!data) {
            toast.error("No data found. Please fill the form again.");
            navigate("/");
            return;
        }

        // Initialize PDF generation specifically if it hasn't been done yet for this session email
        const shouldGenerateEmail = !!data.birthDetails?.email && !sessionStorage.getItem(`pdf_sent_${data.birthDetails.email}`);
        if (shouldGenerateEmail) {
            setIsGeneratingEmailPDF(true);
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "-10% 0px -70% 0px" }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [data, navigate]);

    // Secondary effect independently for generating the email PDF
    useEffect(() => {
        if (!isGeneratingEmailPDF || !data?.birthDetails?.email) return;

        let isMounted = true;

        const generateAndSendEmail = async () => {
            try {
                // Wait for initial render and fonts
                await new Promise(resolve => setTimeout(resolve, 800));
                if (!reportRef.current || !isMounted) return;

                // Fire event to expand sections invisibly
                window.dispatchEvent(new CustomEvent('expand-all-sections', { detail: { expandAll: true } }));
                await new Promise(resolve => setTimeout(resolve, 2000));
                if (!reportRef.current || !isMounted) return;

                const element = reportRef.current;
                const canvas = await html2canvas(element, {
                    scale: 2,
                    useCORS: true,
                    allowTaint: true,
                    backgroundColor: "#ffffff",
                    logging: false,
                    windowWidth: element.scrollWidth,
                    windowHeight: element.scrollHeight,
                    scrollX: 0,
                    scrollY: 0,
                    foreignObjectRendering: false,
                    onclone: (clonedDoc) => {
                        clonedDoc.querySelectorAll('svg').forEach((svg) => {
                            const bbox = svg.getBoundingClientRect();
                            if (bbox.width > 0) {
                                svg.setAttribute('width', String(bbox.width));
                                svg.setAttribute('height', String(bbox.height));
                            }
                        });
                        clonedDoc.querySelectorAll('[data-state="closed"]').forEach((el) => {
                            (el as HTMLElement).setAttribute('data-state', 'open');
                            (el as HTMLElement).style.display = 'block';
                            (el as HTMLElement).style.height = 'auto';
                            (el as HTMLElement).style.overflow = 'visible';
                        });
                        clonedDoc.querySelectorAll('*').forEach((el) => {
                            const style = (el as HTMLElement).style;
                            if (style.overflow === 'hidden' || style.overflow === 'scroll' || style.overflow === 'auto') {
                                style.overflow = 'visible';
                            }
                            if (style.maxHeight && style.maxHeight !== 'none') {
                                style.maxHeight = 'none';
                            }
                        });
                    }
                });

                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
                const pageWidth = pdf.internal.pageSize.getWidth();
                const pageHeight = pdf.internal.pageSize.getHeight();
                const totalImgHeightMM = (canvas.height * pageWidth) / canvas.width;

                let remainingHeight = totalImgHeightMM;
                let yOffset = 0;
                let isFirstPage = true;

                while (remainingHeight > 0) {
                    if (!isFirstPage) pdf.addPage();
                    pdf.addImage(imgData, 'PNG', 0, -yOffset, pageWidth, totalImgHeightMM);
                    yOffset += pageHeight;
                    remainingHeight -= pageHeight;
                    isFirstPage = false;
                }

                const pdfBase64 = pdf.output('datauristring');

                // Dispatch to the backend
                await fetch(getApiUrl("/api/crm/bookings/ai-kundali/email"), {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: data.birthDetails.email,
                        name: data.birthDetails.name,
                        report: data,
                        pdfBase64
                    })
                });

                sessionStorage.setItem(`pdf_sent_${data.birthDetails.email}`, 'true');
            } catch (err) {
                console.error("Failed to autogenerate PDF for email:", err);
            } finally {
                if (isMounted) {
                    window.dispatchEvent(new CustomEvent('expand-all-sections', { detail: { expandAll: false } }));
                    setIsGeneratingEmailPDF(false);
                }
            }
        };

        generateAndSendEmail();

        return () => {
            isMounted = false;
            window.dispatchEvent(new CustomEvent('expand-all-sections', { detail: { expandAll: false } }));
        };
    }, [isGeneratingEmailPDF, data]);

    if (!data) return null;

    const panchang = calcPanchang(data);
    const avakhada = calcAvakhada(data);
    const dashas = calcVimshottariDasha(data);
    const yogas = detectYogas(data);
    const manglik = checkManglik(data);
    const sadesati = checkSadesati(data);
    const gemstones = getGemstoneRecommendations(data);
    const rudraksha = getRudrakshaRecommendation(data);
    const ascendantReport = getAscendantReport(data);
    const planetaryReports = getPlanetaryReports(data);


    const handleExportPDF = async () => {
        if (!reportRef.current) return;

        toast.loading("Generating your PDF report… please wait", { id: "pdf-export" });

        // 1. Expand ALL collapsible sections
        window.dispatchEvent(new CustomEvent('expand-all-sections', { detail: { expandAll: true } }));

        // 2. Give React time to re-render expanded content + chart SVGs
        await new Promise(resolve => setTimeout(resolve, 1500));

        try {
            const element = reportRef.current;

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                allowTaint: true,
                backgroundColor: "#ffffff",
                logging: false,
                // Capture the full scrollable height, not just the viewport
                windowWidth: element.scrollWidth,
                windowHeight: element.scrollHeight,
                scrollX: 0,
                scrollY: 0,
                // Ensure SVG charts are rendered correctly
                foreignObjectRendering: false,
                onclone: (clonedDoc) => {
                    // Force all cloned SVGs to have explicit dimensions
                    clonedDoc.querySelectorAll('svg').forEach((svg) => {
                        const bbox = svg.getBoundingClientRect();
                        if (bbox.width > 0) {
                            svg.setAttribute('width', String(bbox.width));
                            svg.setAttribute('height', String(bbox.height));
                        }
                    });
                    // Force all collapsible sections open in clone
                    clonedDoc.querySelectorAll('[data-state="closed"]').forEach((el) => {
                        (el as HTMLElement).setAttribute('data-state', 'open');
                        (el as HTMLElement).style.display = 'block';
                        (el as HTMLElement).style.height = 'auto';
                        (el as HTMLElement).style.overflow = 'visible';
                    });
                    // Remove scroll constraints so full content is captured
                    clonedDoc.querySelectorAll('*').forEach((el) => {
                        const style = (el as HTMLElement).style;
                        if (style.overflow === 'hidden' || style.overflow === 'scroll' || style.overflow === 'auto') {
                            style.overflow = 'visible';
                        }
                        if (style.maxHeight && style.maxHeight !== 'none') {
                            style.maxHeight = 'none';
                        }
                    });
                }
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

            const pageWidth = pdf.internal.pageSize.getWidth();   // 210 mm
            const pageHeight = pdf.internal.pageSize.getHeight();  // 297 mm

            // Total rendered image height in mm
            const totalImgHeightMM = (canvas.height * pageWidth) / canvas.width;

            let remainingHeight = totalImgHeightMM;
            let yOffset = 0;      // mm offset into the image already printed
            let isFirstPage = true;

            while (remainingHeight > 0) {
                if (!isFirstPage) pdf.addPage();

                pdf.addImage(
                    imgData,
                    'PNG',
                    0,                    // x
                    -yOffset,             // y — negative scrolls image up each page
                    pageWidth,            // width fills page
                    totalImgHeightMM      // full image height (clipped by page boundary)
                );

                yOffset += pageHeight;
                remainingHeight -= pageHeight;
                isFirstPage = false;
            }

            pdf.save(`Kundali_Report_${data.birthDetails.name.replace(/\s+/g, '_')}.pdf`);
            toast.success("Report downloaded successfully!", { id: "pdf-export" });
        } catch (error) {
            console.error("PDF Export error:", error);
            toast.error("Failed to generate PDF. Please try again.", { id: "pdf-export" });
        }
    };

    return (
        <>
            {/* Full-screen loader while PDF is being generated for email */}
            {isGeneratingEmailPDF && (
                <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm pointer-events-none">
                    <div className="w-20 h-20 mb-8 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                    <h2 className="text-3xl font-bold font-display tracking-wider mb-2 text-primary">Analyzing Planetary Positions</h2>
                    <div className="flex items-center gap-2 text-muted-foreground animate-pulse">
                        <Star size={18} className="text-secondary" />
                        <p className="font-medium text-lg">Preparing your personalized Vedic Kundali & PDF...</p>
                        <Sparkles size={18} className="text-secondary" />
                    </div>
                </div>
            )}

            <div className={`min-h-screen bg-background pb-24 relative ${isGeneratingEmailPDF ? 'opacity-0 pointer-events-none' : 'opacity-100 transition-opacity duration-1000'}`}>
                <SEO 
                    title={`Personalized Kundali Report for ${data.birthDetails.name} | Naman Darshan`}
                    description={`Detailed Vedic Astrology Kundali report for ${data.birthDetails.name}. Insights into personality, career, health, and remedies based on planetary positions.`}
                    keywords={["Vedic Kundali", "Astrology Report", "Birth Chart Analysis", "Naman Darshan"]}
                />
                {/* Main site Header */}
                <Header />

                <div className="container pt-24 lg:pt-32 mt-8 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
                    {/* Navigation Sidebar */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-24 space-y-4">
                            <Card className="border-border/50 overflow-hidden">
                                <CardHeader className="p-4 pb-2">
                                    <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Sections</CardTitle>
                                </CardHeader>
                                <CardContent className="p-2">
                                    <nav className="space-y-1">
                                        {sections.map((section) => (
                                            <button
                                                key={section.id}
                                                onClick={() => {
                                                    const el = document.getElementById(section.id);
                                                    if (el) {
                                                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                                        window.dispatchEvent(new CustomEvent('open-section', { detail: { id: section.id } }));
                                                        setActiveSection(section.id);
                                                    }
                                                }}
                                                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 text-sm font-medium ${activeSection === section.id
                                                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20 scale-[1.02]"
                                                    : "text-muted-foreground hover:text-primary hover:bg-muted"
                                                    }`}
                                            >
                                                <section.icon size={16} />
                                                {section.title}
                                            </button>
                                        ))}
                                    </nav>
                                </CardContent>
                            </Card>

                            <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                                <div className="flex items-center gap-2 text-primary font-bold mb-2">
                                    <Sparkles size={16} />
                                    <span>Premium Analysis</span>
                                </div>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    This report includes advanced Vedic calculations based on the Lahiri Ayanamsha system.
                                </p>
                            </div>
                        </div>
                    </aside>

                    {/* Report Content */}
                    <main ref={reportRef} className="space-y-12">
                        {/* Header Card */}
                        <div className="text-center mb-12 py-16 relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-primary/20">
                            <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none">
                                <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-primary/20 blur-3xl animate-pulse" />
                                <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-accent/20 blur-3xl animate-pulse delay-1000" />
                            </div>

                            <Badge variant="outline" className="mb-4 px-3 py-1 border-primary/20 text-primary/70 font-bold tracking-wider uppercase text-[10px]">
                                Personalized Vedic Horoscope
                            </Badge>
                            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-foreground">
                                {data.birthDetails.name}
                            </h1>
                            <div className="flex flex-wrap justify-center gap-4 text-muted-foreground text-sm font-medium">
                                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-background/50 rounded-full border border-border/50">
                                    <Calendar size={14} className="text-primary" />
                                    <span>{new Date(data.birthDetails.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-background/50 rounded-full border border-border/50">
                                    <Clock size={14} className="text-primary" />
                                    <span>{data.birthDetails.time}</span>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-background/50 rounded-full border border-border/50">
                                    <MapPin size={14} className="text-primary" />
                                    <span>{data.birthDetails.place}</span>
                                </div>
                            </div>
                        </div>

                        {/* Section 1: Birth Details */}
                        <SectionWrapper id="birth-details" title="Birth Details" icon={User}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <CollapsibleCard title="Full Profile" icon={User}>
                                    <div className="space-y-1">
                                        <DetailRow label="Name" value={data.birthDetails.name} />
                                        <DetailRow label="Date" value={data.birthDetails.date} />
                                        <DetailRow label="Time" value={data.birthDetails.time} />
                                        <DetailRow label="Latitude" value={`${data.birthDetails.latitude}° N`} />
                                        <DetailRow label="Longitude" value={`${data.birthDetails.longitude}° E`} />
                                        <DetailRow label="Timezone" value={`GMT ${data.birthDetails.timezone > 0 ? '+' : ''}${data.birthDetails.timezone}`} />
                                    </div>
                                </CollapsibleCard>
                                <CollapsibleCard title="Life Statistics" icon={Star}>
                                    <div className="space-y-1">
                                        <DetailRow label="Ascendant (Lagna)" value={RASHIS[data.ascendant]} />
                                        <DetailRow label="Moon Sign (Rashi)" value={RASHIS[data.moonSign]} />
                                        <DetailRow label="Sun Sign" value={RASHIS[data.sunSign]} />
                                        <DetailRow label="Nakshatra" value={`${data.nakshatra} (${data.nakshatraPada} Pada)`} />
                                        <DetailRow label="Nakshatra Lord" value={data.dashaLord} />
                                        <DetailRow label="Current Maha Dasha" value={dashas.find(d => new Date() >= d.startDate && new Date() <= d.endDate)?.planet || "Unknown"} />
                                    </div>
                                </CollapsibleCard>
                            </div>
                        </SectionWrapper>

                        {/* Section 2: Panchang */}
                        <SectionWrapper id="panchang" title="Panchang Details" icon={Sun}>
                            <Card className="border-border/50">
                                <CardContent className="p-6">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                                        <div className="space-y-1">
                                            <p className="text-xs text-muted-foreground uppercase tracking-wider">Tithi</p>
                                            <p className="text-xl font-bold text-primary">{panchang.tithi}</p>
                                            <Badge variant="secondary" className="text-[10px]">{panchang.tithiType}</Badge>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-xs text-muted-foreground uppercase tracking-wider">Nakshatra</p>
                                            <p className="text-xl font-bold text-primary">{panchang.nakshatra}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-xs text-muted-foreground uppercase tracking-wider">Yoga</p>
                                            <p className="text-xl font-bold text-primary">{panchang.yoga}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-xs text-muted-foreground uppercase tracking-wider">Karan</p>
                                            <p className="text-xl font-bold text-primary">{panchang.karan}</p>
                                        </div>
                                    </div>
                                    <Separator className="my-6 bg-border/50" />
                                    <div className="flex justify-around items-center text-sm md:text-base">
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 bg-primary/10 text-primary rounded-full"><Sun size={18} /></div>
                                            <div>
                                                <span className="text-muted-foreground">Sunrise:</span>
                                                <span className="ml-2 font-bold">{panchang.sunrise}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 bg-indigo-100 text-indigo-600 rounded-full"><Moon size={18} /></div>
                                            <div>
                                                <span className="text-muted-foreground">Sunset:</span>
                                                <span className="ml-2 font-bold">{panchang.sunset}</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </SectionWrapper>

                        {/* Section 3: Avakhada Chakra */}
                        <SectionWrapper id="avakhada" title="Avakhada Chakra" icon={Star}>
                            <CollapsibleCard title="Vedic Attributes" icon={Shield}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-1 gap-x-8">
                                    <DetailRow label="Varna" value={avakhada.varna} />
                                    <DetailRow label="Vashya" value={avakhada.vashya} />
                                    <DetailRow label="Yoni" value={avakhada.yoni} />
                                    <DetailRow label="Gan" value={avakhada.gan} />
                                    <DetailRow label="Nadi" value={avakhada.nadi} />
                                    <DetailRow label="Tatva (Element)" value={avakhada.tatva} />
                                    <DetailRow label="Sign Lord" value={avakhada.signLord} />
                                    <DetailRow label="Name Alphabet" value={avakhada.nameAlphabet} />
                                    <DetailRow label="Paya" value={avakhada.paya} />
                                </div>
                            </CollapsibleCard>
                        </SectionWrapper>

                        {/* Section 4: Lagna & Divisional Charts */}
                        <SectionWrapper id="horoscope" title="Lagna & Divisional Charts" icon={Grid3X3}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <CollapsibleCard id="horoscope" title="Lagna Chart (D1)" icon={Grid3X3}>
                                    <KundaliChart
                                        data={data}
                                        onConsultPandit={() => window.dispatchEvent(new CustomEvent('open-ai-chat'))}
                                    />
                                </CollapsibleCard>
                                <div className="p-6 bg-muted/20 border rounded-2xl flex flex-col items-center justify-center text-center">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                                        <Sparkles size={24} />
                                    </div>
                                    <h4 className="font-bold mb-2">Divisional Charts</h4>
                                    <p className="text-xs text-muted-foreground">Additional charts like Navamsa (D9) and Dasamsa (D10) are available in our premium analysis module.</p>
                                </div>
                            </div>
                        </SectionWrapper>

                        {/* Section 5: Planetary Strengths & Positions */}
                        <SectionWrapper id="planetary" title="Planetary Strengths & Positions" icon={Moon}>
                            <div className="space-y-6">
                                <CollapsibleCard id="planetary" title="Graha Awastha & Positions" icon={List}>
                                    <PlanetaryTable data={data} />
                                </CollapsibleCard>
                            </div>
                        </SectionWrapper>

                        {/* Section 6: Vimshottari Dasha Periods */}
                        <SectionWrapper id="vimsottari" title="Vimshottari Dasha Periods" icon={Clock}>
                            <CollapsibleCard id="vimsottari" title="Current Maha Dasha & Antardasha" icon={Clock} defaultOpen={false}>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {dashas.slice(0, 3).map((dasha, i) => (
                                            <div key={i} className="p-4 rounded-xl border-2 border-primary/10 bg-primary/5 flex flex-col items-center">
                                                <span className="text-xs uppercase font-bold text-muted-foreground mb-1">Maha Dasha</span>
                                                <span className="text-xl font-black text-primary">{dasha.planet}</span>
                                                <span className="text-[10px] mt-2 text-muted-foreground">{dasha.startDate.getFullYear()} - {dasha.endDate.getFullYear()}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm text-muted-foreground p-3 bg-muted/30 rounded-lg">
                                        Vimshottari Dasha is the most reliable timing system in Vedic Jyotish. It indicates the periods when certain Grahas will be most influential in your life journey.
                                    </div>
                                </div>
                            </CollapsibleCard>
                        </SectionWrapper>

                        {/* Section 7: Auspicious Yogas */}
                        <SectionWrapper id="yogas" title="Auspicious Yogas" icon={Sparkles}>
                            <CollapsibleCard id="yogas" title="Major Yogas in your Chart" icon={Sparkles}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {yogas.map((yoga, i) => (
                                        <div key={i} className="p-4 rounded-xl border border-border bg-background hover:border-primary/30 transition-colors">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                                <h4 className="font-bold text-sm tracking-tight">{yoga.name}</h4>
                                            </div>
                                            <p className="text-xs text-muted-foreground leading-relaxed">{yoga.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </CollapsibleCard>
                        </SectionWrapper>

                        {/* Section 8: Significant Dosha Analysis */}
                        <SectionWrapper id="manglik" title="Significant Dosha Analysis" icon={Shield}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <CollapsibleCard id="manglik" title="Manglik Dosha Status" icon={Shield}>
                                    <div className="flex flex-col items-center text-center">
                                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${manglik.isManglik ? 'bg-destructive/10 text-destructive' : 'bg-green-500/10 text-green-600'}`}>
                                            <Shield size={32} />
                                        </div>
                                        <h4 className={`text-xl font-bold mb-1 ${manglik.isManglik ? 'text-destructive' : 'text-green-600'}`}>
                                            {manglik.isManglik ? 'Manglik Dosha Present' : 'No Manglik Dosha'}
                                        </h4>
                                        <p className="text-xs text-muted-foreground px-4 italic">{manglik.description}</p>
                                    </div>
                                </CollapsibleCard>

                                <CollapsibleCard id="manglik" title="Shani Sadesati Status" icon={Moon}>
                                    <div className="flex flex-col items-center text-center">
                                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${sadesati.isActive ? 'bg-primary/20 text-primary' : 'bg-green-500/10 text-green-600'}`}>
                                            <Moon size={32} />
                                        </div>
                                        <h4 className={`text-xl font-bold mb-1 ${sadesati.isActive ? 'text-primary' : 'text-green-600'}`}>
                                            {sadesati.isActive ? 'Shani Sadesati Active' : 'No Sadesati Active'}
                                        </h4>
                                        <p className="text-xs text-muted-foreground px-4 italic">{sadesati.description}</p>
                                    </div>
                                </CollapsibleCard>
                            </div>
                        </SectionWrapper>

                        {/* Section 9: Remedies */}
                        <SectionWrapper id="gemstones" title="Vedic Remedies" icon={Gem}>
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {gemstones.map((gem, i) => (
                                        <div key={i} className="p-4 rounded-xl border bg-gradient-to-br from-background to-muted hover:shadow-md transition-all">
                                            <div className="flex justify-between items-start mb-3">
                                                <div>
                                                    <p className="text-xs text-muted-foreground uppercase">{gem.type}</p>
                                                    <h3 className="font-bold text-xl">{gem.stone}</h3>
                                                    <p className="text-sm font-medium text-primary">({gem.stoneHindi})</p>
                                                </div>
                                                <Gem className="text-primary/40" size={32} />
                                            </div>
                                            <Separator className="my-3" />
                                            <div className="space-y-2 text-xs">
                                                <p className="flex justify-between"><span>Planet:</span> <span className="font-bold">{gem.planet}</span></p>
                                                <p className="flex justify-between"><span>Wear on:</span> <span className="font-bold">{gem.day}</span></p>
                                                <p className="flex justify-between"><span>Finger:</span> <span className="font-bold">{gem.finger}</span></p>
                                                <p className="flex flex-col mt-2">
                                                    <span className="text-muted-foreground">Mantra:</span>
                                                    <span className="font-medium text-primary italic mt-0.5">"{gem.mantra}"</span>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Card className="bg-primary/5 border-primary/20">
                                    <CardHeader className="p-4">
                                        <CardTitle className="text-lg flex items-center gap-2">
                                            <Shield size={18} className="text-primary" />
                                            Rudraksha Recommendation
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-4 pt-0">
                                        <div className="flex flex-col md:flex-row gap-6 items-center">
                                            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary border-dashed">
                                                <div className="text-center">
                                                    <p className="text-2xl font-bold">{rudraksha.mukhi}</p>
                                                    <p className="text-[10px] uppercase font-bold">Mukhi</p>
                                                </div>
                                            </div>
                                            <div className="flex-1 space-y-2">
                                                <div className="flex flex-wrap gap-2">
                                                    <Badge variant="outline">Ruling: {rudraksha.rulingPlanet}</Badge>
                                                    <Badge variant="outline">Deity: {rudraksha.deity}</Badge>
                                                    <Badge variant="outline">Day: {rudraksha.wearingDay}</Badge>
                                                </div>
                                                <p className="text-sm font-bold text-foreground">Benefits:</p>
                                                <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                                                    {rudraksha.benefits.map((benefit, i) => (
                                                        <li key={i} className="text-xs text-muted-foreground flex items-center gap-1.5">
                                                            <span className="w-1 h-1 bg-primary rounded-full" />
                                                            {benefit}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <p className="text-xs italic bg-background/50 p-2 rounded mt-2">
                                                    <strong>Mantra:</strong> {rudraksha.mantra}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </SectionWrapper>

                        {/* Section 10: Ascendant Report */}
                        <SectionWrapper id="ascendant" title="Life & Personality Report" icon={Info}>
                            <div className="space-y-6">
                                <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
                                    <div className="flex items-start gap-4 p-6 bg-muted/20 rounded-2xl border mb-6">
                                        <Quote size={40} className="text-primary opacity-20 rotate-180" />
                                        <p className="italic text-lg text-foreground font-medium">
                                            {ascendantReport.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-foreground font-bold">
                                                <User size={18} className="text-primary" />
                                                Personality Traits
                                            </div>
                                            <p>{ascendantReport.personality}</p>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-foreground font-bold">
                                                <Activity size={18} className="text-primary" />
                                                Physical Appearance
                                            </div>
                                            <p>{ascendantReport.physical}</p>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-foreground font-bold">
                                                <Heart size={18} className="text-primary" />
                                                Health & Vitality
                                            </div>
                                            <p>{ascendantReport.health}</p>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-foreground font-bold">
                                                <Briefcase size={18} className="text-primary" />
                                                Career & Profession
                                            </div>
                                            <p>{ascendantReport.career}</p>
                                        </div>
                                    </div>

                                    <div className="mt-6 p-4 border rounded-xl bg-background shadow-sm">
                                        <div className="flex items-center gap-2 text-foreground font-bold mb-2">
                                            <Sparkles size={18} className="text-primary" />
                                            Relationship Dynamics
                                        </div>
                                        <p>{ascendantReport.relationship}</p>
                                    </div>
                                </div>
                            </div>
                        </SectionWrapper>

                        {/* Section 11: House Interpretations */}
                        <SectionWrapper id="predictions" title="House-wise Interpretations" icon={List}>
                            <div className="space-y-4">
                                {/* NOTE: ScrollArea removed intentionally for PDF export — full list renders without height cap */}
                                <div className="space-y-4">
                                    {planetaryReports.map((report, i) => (
                                        <Card key={i} className="border-border/50 hover:bg-muted/10 transition-colors">
                                            <CardHeader className="p-4 pb-2">
                                                <div className="flex justify-between items-center">
                                                    <CardTitle className="text-base flex items-center gap-2">
                                                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                                                            {PLANET_SYMBOLS[report.planet]}
                                                        </span>
                                                        {report.planet} in {report.house}{report.house === 1 ? 'st' : report.house === 2 ? 'nd' : report.house === 3 ? 'rd' : 'th'} House
                                                    </CardTitle>
                                                    <Badge variant="outline">{report.sign}</Badge>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="p-4 pt-0">
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {report.report}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                                <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 flex items-start gap-3">
                                    <Info size={20} className="text-primary mt-1 shrink-0" />
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        Note: These interpretations are general astrological indications based on planetary placements. For specific life situations, consult with an experienced astrologer.
                                    </p>
                                </div>
                            </div>
                        </SectionWrapper>

                        {/* Footer Branding */}
                        <footer className="mt-24 pt-16 border-t border-border text-center pb-12">
                            <h2 className="text-2xl font-black text-foreground mb-3 tracking-tight">NAMAN<span className="text-primary">DARSHAN</span></h2>
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em]">Premium Vedic Jyotish · Built with Devotion 🙏</p>
                            <p className="text-[10px] text-muted-foreground/40 mt-12 font-medium">© 2026 NamanDarshan Dynamics. All Rights Reserved.</p>
                        </footer>
                    </main>
                </div>

                {/* AI Consultation */}
                <AIPanditChat kundali={data} />

                {/* Floating Export PDF bar */}
                <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur-md px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" onClick={() => navigate('/ai-kundali')} className="gap-1.5 text-muted-foreground">
                            <ChevronLeft size={16} />
                            New Kundali
                        </Button>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-3">
                        <Button
                            variant="outline"
                            className="h-9 sm:h-10 px-3 sm:px-4 gap-1.5 sm:gap-2 shadow-sm border-green-500/20 text-green-600 hover:bg-green-500/10 hover:text-green-700 bg-green-50/50"
                            onClick={() => {
                                const lagna = RASHIS[data.ascendant] || 'Unknown';
                                const rashi = RASHIS[data.moonSign] || 'Unknown';
                                const nakshatra = data.nakshatra || 'Unknown';
// ... rest of logic stays same
                                let msg = `Om Namah Shivaya 🙏\n\nHere is the free Vedic Kundali reading for *${data.birthDetails.name}* generated via NamanDarshan:\n\n`;
                                msg += `*Birth Details:*\n📅 ${new Date(data.birthDetails.date).toLocaleDateString('en-IN')} at ${data.birthDetails.time}\n📍 ${data.birthDetails.place}\n\n`;
                                msg += `*Key Astrological Details:*\n✨ Ascendant (Lagna): ${lagna}\n🌙 Moon Sign (Rashi): ${rashi}\n⭐ Nakshatra: ${nakshatra}\n\n`;
                                msg += `Generate your own AI-powered Kundali and instantly receive a personalized reading: `;

                                const text = encodeURIComponent(msg);
                                const url = encodeURIComponent('https://namandarshan.com/ai-kundali');
                                window.open(`https://wa.me/?text=${text}${url}`, '_blank');
                            }}
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            <span className="text-xs sm:text-sm font-bold tracking-tight">SHARE</span>
                        </Button>
                        <Button onClick={handleExportPDF} className="h-9 sm:h-10 px-3 sm:px-4 gap-1.5 sm:gap-2 shadow-md bg-primary hover:bg-primary/90 transition-all border-none">
                            <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
                            <span className="text-xs sm:text-sm font-bold tracking-tight uppercase">PDF REPORT</span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default KundaliReport;