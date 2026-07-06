import { useState, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Gift, ArrowRight, Heart, ShieldCheck, Flame, MapPin, Users, Check, Copy, Linkedin, Facebook, User, Mail, Sparkles, Star, Calendar, Video, Map as LucideMap, Shield, BadgeCheck, Clock, Quote } from "lucide-react";
import { ShareGuide } from "@/components/common/ShareGuide";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { getApiUrl } from "@/utils/api";
import { Loader2 } from "lucide-react";
import SEO from "@/components/SEO";
import namanLogo from "@/assets/naman.webp";
import DevotionSlider from "@/components/referral/DevotionSlider";

const Referral = () => {

    const [copied, setCopied] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);
    const [userEmail, setUserEmail] = useState("");
    const [referrerName, setReferrerName] = useState("");
    const [generatedCode, setGeneratedCode] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const baseUrl = window.location.origin;
    const referralLink = generatedCode
        ? `${baseUrl}?ref=${generatedCode}`
        : baseUrl;
    const namasteChar = String.fromCharCode(0xD83D, 0xDE4F);
    const flagChar = String.fromCharCode(0xD83D, 0xDEA9);

    // For Clipboard (needs real characters)
    const clipboardMessage = `Namaste! ${namasteChar} I am sharing a divine opportunity with you. Join Namandarshan to experience Guided Darshan Assistance and Puja services. Let's spread the light of Sanatan Dharma together. ${flagChar} Join here: ${referralLink}`;
    const shareMessage = clipboardMessage; // Alias for UI display

    // For WhatsApp/Facebook (percent-encoded bytes for maximum safety)
    const getSafeEncodedMessage = () => {
        const base = `Namaste! [[NAMASTE]] I am sharing a divine opportunity with you. Join Namandarshan to experience Guided Darshan Assistance and Puja services. Let's spread the light of Sanatan Dharma together. [[FLAG]] Join here: ${referralLink}`;
        let encoded = encodeURIComponent(base);
        // Manually inject the UTF-8 percent-encoded bytes for the emojis
        encoded = encoded.replace("%5B%5BNAMASTE%5D%5D", "%F0%9F%99%8F");
        encoded = encoded.replace("%5B%5BFLAG%5D%5D", "%F0%9F%9A%A9");
        return encoded;
    };

    const XIcon = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
        </svg>
    );

    const WhatsAppIcon = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    );

    const shareOnWhatsApp = () => {
        const base = `Namaste! [[NAMASTE]] I am sharing a divine opportunity with you. Join Namandarshan to experience Guided Darshan Assistance and Puja services. Let's spread the light of Sanatan Dharma together. [[FLAG]] Join here: ${referralLink}`;
        let encoded = encodeURIComponent(base);
        encoded = encoded.replace("%5B%5BNAMASTE%5D%5D", "%F0%9F%99%8F");
        encoded = encoded.replace("%5B%5BFLAG%5D%5D", "%F0%9F%9A%A9");
        window.open(`https://wa.me/?text=${encoded}`, "_blank");
    };

    const shareOnFacebook = () => {
        navigator.clipboard.writeText(shareMessage);
        toast.info("Message copied! You can now paste it on Facebook.");
        const link = encodeURIComponent(referralLink);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${link}`, "_blank");
    };

    const handleGenerateCode = async () => {
        if (!referrerName.trim()) {
            toast.error("Please enter your name");
            return null;
        }

        if (!userEmail || !userEmail.includes('@')) {
            toast.error("Please enter a valid email address");
            return null;
        }

        setIsGenerating(true);
        try {
            const response = await fetch(getApiUrl("/api/referrals/generate"), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: userEmail, name: referrerName }),
            }).catch(() => {
                // If fetch fails (server down), throw to catch block for local fallback
                throw new Error("Server unreachable");
            });

            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    setGeneratedCode(data.referralCode);
                    toast.success("Success! Your code has been generated.");
                    return data.referralCode;
                } else {
                    toast.error(data.error || "Failed to generate referral code");
                    return null;
                }
            } else {
                throw new Error("API responded with error");
            }
        } catch (error) {
            console.warn("Backend API unavailable, generating deterministic local referral code for demo purposes.", error);
            
            // Fallback: Generate a deterministic referral code based on the email address
            // This ensures the same email gets the same code even in local/demo mode
            const emailHash = userEmail.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            const seed = (emailHash % 10000).toString().padStart(4, '0');
            const deterministicCode = `NAMAN-${referrerName.substring(0, 3).toUpperCase()}${seed}`;
            
            setGeneratedCode(deterministicCode);
            toast.success("Success! Your referral code has been generated locally.");
            return deterministicCode;
        } finally {
            setIsGenerating(false);
        }
    };

    const copyToClipboard = () => {
        if (!generatedCode) {
            toast.info("Please generate your referral code first.");
            formRef.current?.scrollIntoView({ behavior: 'smooth' });
            return;
        }
        const currentClipboardMessage = `Namaste! ${namasteChar} I am sharing a divine opportunity with you. Join Namandarshan to experience Guided Darshan Assistance and Puja services. Let's spread the light of Sanatan Dharma together. ${flagChar} Join here: ${referralLink}`;
        navigator.clipboard.writeText(currentClipboardMessage);
        setCopied(true);
        toast.success("Full message copied to clipboard!");
        setTimeout(() => setCopied(false), 3000);
    };

    const copyLinkOnly = () => {
        if (!generatedCode) {
            toast.info("Please generate your referral code first.");
            formRef.current?.scrollIntoView({ behavior: 'smooth' });
            return;
        }
        const linkToCopy = `${referralLink}`;
        navigator.clipboard.writeText(linkToCopy);
        toast.success("Referral link copied!");
    };


    const values = [
        {
            icon: Heart,
            title: "Devotion First",
            desc: "Every referral helps someone connect more deeply with their faith through seamless divine experiences."
        },
        {
            icon: ShieldCheck,
            title: "Authenticity",
            desc: "We ensure genuine temple experiences, verified pujas, and sacred prasadam delivered with complete trust."
        },
        {
            icon: Flame,
            title: "Spreading Dharma",
            desc: "Sharing Namandarshan is a way to spread the values and traditions of Sanatan Dharma across communities."
        },
        {
            icon: MapPin,
            title: "Accessibility",
            desc: "Making it easy for everyone, especially the elderly, to access sacred sites without physical or financial hurdles."
        },
        {
            icon: Users,
            title: "Community",
            desc: "Growing the Naman Parivar together, building a community united by faith and spiritual purpose."
        }
    ];

    const rewards = [
        {
            icon: Gift,
            title: "Prasadam Seva",
            desc: "Opt to receive sacred Prasadam from a temple of your choice as a divine blessing for your referral."
        },
        {
            icon: Heart,
            title: "Chadhava Seva",
            desc: "Perform a Chadhava Seva in your name at a major temple, earning spiritual merit and blessings."
        }
    ];
    const advantagePoints = [
        {
            icon: Clock,
            title: "Guided Darshan Assistance",
            desc: "A knowledgeable Pandit Ji will accompany you, guide you through the temple, and share insights about the temple's history and significance."
        },
        {
            icon: ShieldCheck,
            title: "Verified Pujas",
            desc: "Authentic Vedic rituals performed by experienced priests at sacred Tirthas, with complete transparency."
        },
        {
            icon: Heart,
            title: "Elderly Support",
            desc: "Dedicated assistance for senior citizens, making their dream pilgrimages comfortable and hassle-free."
        },
        {
            icon: Gift,
            title: "Sacred Prasadam",
            desc: "Fresh, pure, and authentic prasadam from famous temples delivered directly to your doorstep."
        }
    ];

    const featureHighlights = [
        {
            icon: Sparkles,
            title: "AI Kundali",
            desc: "Get personalized astrological insights and spiritual guidance powered by advanced AI.",
            path: "/ai-kundali"
        },
        {
            icon: LucideMap,
            title: "AI Yatra Planner",
            desc: "Customized pilgrimage itineraries that respect your time, budget, and spiritual needs.",
            path: "/ai-yatra-planner"
        },
        {
            icon: Video,
            title: "Live Darshan",
            desc: "Stay connected with your deity through high-quality live streaming of Aarti and Darshan.",
            path: "/live-darshan"
        },
        {
            icon: Calendar,
            title: "Hindu Calendar",
            desc: "A comprehensive guide to Tithis, Muhurats, and festivals to keep your spiritual life on track.",
            path: "/hindu-calendar"
        }
    ];


    return (
        <div className="min-h-screen bg-background flex flex-col">
            <SEO />
            <Header />

            <main className="flex-grow pt-40 md:pt-48 lg:pt-52 pb-16">
                {/* Breadcrumbs and Share */}
                <div className="container mx-auto px-4 mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-primary/10">
                        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <a href="/" className="hover:text-primary transition-colors">Home</a>
                            <span>/</span>
                            <span className="text-primary font-medium">Referral</span>
                        </nav>
                        <ShareGuide />
                    </div>
                </div>
                {/* Hero Section */}
                <div className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-orange-50/30 to-saffron-light/10 py-16 md:py-24">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 animate-pulse delay-1000"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
                            <div className="flex-1">
                                <RevealOnScroll>
                                    <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-[#E8530A] font-bold text-xs uppercase tracking-widest mb-8 border border-orange-200">
                                        Becoming Part of a Divine Movement
                                    </span>
                                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-10 tracking-tight leading-none">
                                        Spread <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#E8530A] to-gold">Sanatan Dharma</span>
                                        <img src={namanLogo} alt="🕉️" className="h-16 md:h-24 inline-block ml-6 animate-divine-bob" />
                                    </h1>
                                    <p className="text-stone-700 text-lg md:text-2xl max-w-4xl mx-auto lg:mx-0 leading-relaxed mb-12 font-medium">
                                        Welcome to Naman Parivar. Our vision goes beyond just a platform; it is a spiritual movement. By the grace of the Almighty, we provide free Darshan to devotees, especially our respected elderly.
                                    </p>
                                    <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                                        <Button
                                            size="lg"
                                            className="bg-gradient-to-r from-[#FF7A45] to-[#FF9D6C] hover:scale-105 px-12 py-8 text-2xl h-auto rounded-[32px] shadow-[0_20px_50px_rgba(232,83,10,0.3)] transition-all duration-500 group font-bold border-none text-white relative overflow-hidden btn-glow"
                                            onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                                        >
                                            <span className="relative z-10 flex items-center">
                                                Invite & Share Dharma
                                                <ArrowRight className="ml-3 w-8 h-8 transition-transform duration-300 group-hover:translate-x-3 stroke-[3]" />
                                            </span>
                                        </Button>
                                    </div>
                                </RevealOnScroll>
                            </div>
                            <div className="flex-1 w-full max-w-xl hidden lg:block">
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white animate-fade-in-up">
                                    <img 
                                        src="/assets/referral/family_puja.png" 
                                        alt="Family performing Puja" 
                                        className="w-full h-auto object-cover transform transition-transform duration-1000 hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <DevotionSlider />
                {/* Advantage Section (New) */}
                <div className="py-24 bg-gradient-to-br from-orange-50 via-white to-gold/10 relative">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'url("/pattern.svg")' }}></div>
                    <div className="container mx-auto px-4 relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
                            <RevealOnScroll className="space-y-10">
                                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-saffron/10 text-saffron-dark text-sm font-black border-2 border-saffron/20 uppercase tracking-widest">
                                    <Star className="w-5 h-5 fill-saffron animate-star-twinkle" />
                                    The Namandarshan Advantage
                                </div>
                                <h2 className="font-display text-5xl md:text-6xl font-bold text-primary leading-[1.1]">
                                    Experience the <span className="text-gradient-sacred bg-[length:200%_200%] animate-gradient-xy">Divine Difference</span>
                                </h2>
                                <p className="text-stone-600 text-xl leading-relaxed italic border-l-8 border-saffron pl-8 py-2 bg-saffron/5 rounded-r-2xl shadow-sm shadow-saffron/10">
                                    "Our mission is to simplify devotion, making it accessible, authentic, and deeply meaningful for every devotee."
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                                    {advantagePoints.map((point, idx) => (
                                        <div key={idx} className="flex gap-5 p-6 rounded-[24px] bg-white shadow-sm border border-stone-100 hover:border-saffron hover:shadow-xl hover:shadow-saffron/10 transition-all duration-500 group animate-divine-bob relative overflow-hidden" style={{ animationDelay: `${idx * 150}ms` }}>
                                            {point.title === "Elderly Support" && (
                                                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                                                    <img src="/assets/referral/elderly_couple.png" alt="" className="w-full h-full object-cover" />
                                                </div>
                                            )}
                                            <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-saffron to-gold shadow-lg shadow-saffron/30 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 relative z-10">
                                                <point.icon className="w-7 h-7" />
                                            </div>
                                            <div className="relative z-10">
                                                <h4 className="font-bold text-primary text-lg mb-2 group-hover:text-saffron-dark transition-colors">{point.title}</h4>
                                                <p className="text-stone-500 text-sm leading-relaxed">{point.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </RevealOnScroll>

                            <RevealOnScroll className="relative order-first lg:order-last">
                                <div className="aspect-square bg-gradient-to-br from-saffron/5 via-gold/10 to-saffron/5 rounded-[40px] md:rounded-[80px] overflow-hidden shadow-inner flex items-center justify-center p-8 md:p-16 border-2 border-white/50 backdrop-blur-sm">
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        {/* Pure Clear Image */}
                                        <div className="absolute inset-0 overflow-hidden">
                                            <img src="/assets/referral/young_devotee.png" alt="Devotees" className="w-full h-full object-cover" />
                                        </div>

                                    </div>
                                </div>
                                {/* Floating Stat card */}
                                <div className="absolute -bottom-16 -left-4 md:-bottom-20 md:-left-10 bg-white p-5 md:p-8 rounded-[24px] md:rounded-[32px] shadow-2xl border-4 border-gold/20 max-w-[180px] md:max-w-[240px] animate-divine-bob group">
                                    <p className="text-[10px] md:text-xs text-stone-400 font-black uppercase tracking-tighter mb-2">Helping Devotees</p>
                                    <p className="text-3xl md:text-5xl font-display font-black text-saffron mb-2 group-hover:scale-110 transition-transform duration-500">50,000+</p>
                                    <div className="h-1.5 w-12 bg-saffron rounded-full mb-3"></div>
                                    <p className="text-[10px] md:text-xs text-stone-500 font-medium leading-relaxed">Smiles brought through divine experiences.</p>
                                </div>
                            </RevealOnScroll>
                        </div>
                    </div>
                </div>

                {/* Features Showcase Section (New) */}
                <div className="py-24 bg-gradient-to-b from-white via-orange-50/20 to-stone-50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gold/5 to-transparent"></div>
                    <div className="container mx-auto px-4 relative">
                        <RevealOnScroll className="text-center mb-20 px-4">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-sacred-orange/10 text-sacred-orange font-black text-xs tracking-widest uppercase mb-6 border border-sacred-orange/20">
                                Digital Spiritual Oasis
                            </div>
                            <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">Divine Technology for <span className="text-gradient-sacred">Spiritual Ease</span></h2>
                            <p className="text-stone-500 max-w-3xl mx-auto text-xl leading-relaxed">
                                We bridge ancient traditions with future tech, creating a comprehensive spiritual ecosystem for modern devotees.
                            </p>
                        </RevealOnScroll>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
                            {featureHighlights.map((feature, idx) => (
                                <RevealOnScroll key={idx} className="group relative">
                                    <Link to={feature.path} className="block h-full group">
                                        <div className="h-full p-10 rounded-[40px] bg-white border-2 border-stone-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:border-saffron hover:shadow-2xl hover:shadow-saffron/20 transition-all duration-700 flex flex-col items-center text-center relative overflow-hidden group">
                                            {/* Shimmer Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-saffron/0 via-saffron/[0.03] to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                            
                                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100/50 shadow-inner flex items-center justify-center text-saffron group-hover:scale-110 group-hover:bg-saffron group-hover:text-white transition-all duration-700 mb-10 border border-orange-100 relative z-10">
                                                <feature.icon className="w-10 h-10" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary mb-5 group-hover:text-saffron-dark transition-colors relative z-10">{feature.title}</h3>
                                            <p className="text-stone-500 text-base leading-relaxed mb-8 line-clamp-3 relative z-10">{feature.desc}</p>
                                            
                                            <div className="mt-auto pt-6 relative z-10">
                                                <span className="text-sm font-black text-saffron flex items-center gap-2 group-hover:translate-x-2 transition-all duration-500 opacity-80 group-hover:opacity-100">
                                                    EXPLORE FEATURE <ArrowRight className="w-5 h-5" />
                                                </span>
                                            </div>
                                            
                                            {/* Corner Decoration */}
                                            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-saffron/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                                        </div>
                                    </Link>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mission Quote Section (New) */}
                <div className="py-32 bg-gradient-to-br from-primary via-saffron-dark to-orange-950 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: 'url("/pattern.svg")' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <RevealOnScroll className="max-w-5xl mx-auto">
                            <Quote className="w-24 h-24 text-gold/30 mx-auto mb-10 animate-pulse" />
                            <h2 className="text-4xl md:text-6xl font-display font-medium leading-[1.2] mb-12 italic">
                                "Our vision is to see a world where every devotee can experience the divine without barriers, where <span className="text-gold font-bold">traditions</span> are preserved through <span className="text-gold font-bold">technology</span>, and where every pilgrimage is a journey of <span className="text-gold font-black underline decoration-gold/50 underline-offset-8">pure joy.</span>"
                            </h2>
                            <div className="flex items-center justify-center gap-6">
                                <div className="w-16 h-1 bg-gold/50 rounded-full"></div>
                                <p className="text-gold text-lg font-black tracking-[0.3em] uppercase">Grow the Naman Parivar</p>
                                <div className="w-16 h-1 bg-gold/50 rounded-full"></div>
                            </div>
                        </RevealOnScroll>
                    </div>
                    {/* Glowing Orbs */}
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-gold/20 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-saffron/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
                </div>

                {/* Our Values Section */}
                <div className="py-24 bg-sacred-yellow-light">
                    <div className="container mx-auto px-4">
                        <RevealOnScroll className="text-center mb-20">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-saffron/10 text-saffron-dark font-black text-xs tracking-widest uppercase mb-4 border border-saffron/20">
                                Guided by Faith
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">Why Share Namandarshan?</h2>
                            <p className="text-stone-500 max-w-2xl mx-auto text-lg">By inviting your loved ones, you are helping us grow a community dedicated to faith, authenticity, and spiritual growth.</p>
                        </RevealOnScroll>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {values.map((value, idx) => (
                                <RevealOnScroll key={idx} className="group p-8 rounded-[32px] bg-white border-2 border-stone-100 hover:bg-white hover:border-saffron hover:shadow-[0_20px_50px_rgba(232,83,10,0.12)] hover:-translate-y-3 transition-all duration-500 transform-gpu cursor-default relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-saffron/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                                    <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-8 group-hover:bg-saffron group-hover:text-white transition-all duration-500 border border-orange-100 group-hover:rotate-12">
                                        <value.icon className="w-8 h-8 text-saffron group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="font-bold text-xl text-primary mb-4 group-hover:text-saffron transition-colors">{value.title}</h3>
                                    <p className="text-stone-500 text-base leading-relaxed">{value.desc}</p>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Rewards Items Section (New) */}
                <div className="py-24 bg-gradient-to-b from-sacred-yellow-light to-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/10 rounded-full blur-[80px] animate-pulse"></div>
                    <div className="container mx-auto px-4 relative">
                        <div className="max-w-7xl mx-auto">
                            <RevealOnScroll className="text-center mb-20">
                                <div className="inline-block px-4 py-1.5 rounded-full bg-vermillion/10 text-vermillion font-black text-xs tracking-widest uppercase mb-4 border border-vermillion/20">
                                    Divine Gratitude
                                </div>
                                <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">Earn Rewards & <span className="text-gradient-sacred">Blessings</span></h2>
                                <p className="text-stone-500 text-lg max-w-2xl mx-auto">Every successful referral brings both material benefits and spiritual merit to your life.</p>
                            </RevealOnScroll>
                            <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
                                {rewards.map((reward, idx) => (
                                    <RevealOnScroll key={idx} className="flex-1 min-w-[320px] max-w-[450px] bg-white rounded-[48px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border-2 border-stone-100 hover:border-saffron hover:shadow-2xl hover:shadow-saffron/15 hover:-translate-y-4 transition-all duration-700 transform-gpu group relative overflow-hidden">
                                        <div className="h-48 overflow-hidden relative">
                                            <img 
                                                src={reward.title === "Prasadam Seva" ? "/assets/referral/prasadam_joy.png" : "/assets/referral/chadhava_seva.png"} 
                                                alt={reward.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-saffron group-hover:bg-saffron group-hover:text-white transition-all duration-500 border border-orange-50">
                                                <reward.icon className="w-8 h-8" />
                                            </div>
                                        </div>
                                        <div className="p-10 pt-4 text-center">
                                            <h3 className="text-3xl font-bold text-primary mb-5 font-display group-hover:text-saffron-dark transition-colors">{reward.title}</h3>
                                            <p className="text-stone-600 leading-relaxed text-lg mb-8">{reward.desc}</p>
                                            <div className="w-16 h-1 bg-saffron/20 mx-auto group-hover:w-32 group-hover:bg-saffron transition-all duration-700"></div>
                                        </div>
                                    </RevealOnScroll>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* How it Works Section */}
                <div className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <RevealOnScroll className="text-center mb-20">
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">Simple Steps to Share Dharma</h2>
                            <p className="text-stone-500 text-lg">Joining the movement is easier than you think.</p>
                        </RevealOnScroll>
                        <div className="max-w-5xl mx-auto relative">
                            {/* Connector Line */}
                            <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-saffron/40 to-transparent -translate-y-1/2 z-0"></div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                {[
                                    { step: "01", title: "Generate Code", desc: "Share your email and name to get your unique spiritual referral code." },
                                    { step: "02", title: "Spread the Word", desc: "Share your link via WhatsApp, Social Media, or Email with your loved ones." },
                                    { step: "03", title: "Earn Merits", desc: "Watch the community grow and receive sacred Prasadam & Seva rewards." }
                                ].map((item, idx) => (
                                    <RevealOnScroll key={idx} className="relative z-10">
                                        <div className="flex flex-col items-center text-center group">
                                            <div className="w-20 h-20 rounded-full bg-saffron text-white flex items-center justify-center text-2xl font-black mb-8 shadow-xl shadow-saffron/30 group-hover:scale-125 group-hover:bg-primary transition-all duration-500 relative">
                                                {item.step}
                                                <div className="absolute inset-0 rounded-full bg-saffron animate-ping opacity-20"></div>
                                            </div>
                                            <h4 className="font-bold text-2xl text-primary mb-4 group-hover:text-saffron transition-colors">{item.title}</h4>
                                            <p className="text-stone-500 text-base leading-relaxed">{item.desc}</p>
                                        </div>
                                    </RevealOnScroll>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Referral Details Section (New) */}
                <div ref={formRef} className="py-24 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-saffron/5 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="container mx-auto px-4 relative">
                        <div className="max-w-4xl mx-auto">
                            <RevealOnScroll className="bg-white p-10 md:p-16 rounded-[60px] shadow-[0_30px_100px_rgba(232,83,10,0.1)] border-2 border-orange-50 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-saffron via-gold to-saffron"></div>
                                
                                <div className="text-center mb-16 px-4">
                                    <div className="inline-block p-4 rounded-full bg-saffron/10 mb-8 border border-saffron/20 shadow-inner">
                                        <User className="w-10 h-10 text-saffron" />
                                    </div>
                                    <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">Join the Naman Parivar</h2>
                                    <p className="text-stone-500 text-xl font-medium">Generate your unique code and start spreading the light of Dharma.</p>
                                </div>

                                <div className="space-y-10 max-w-2xl mx-auto">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <Label htmlFor="referrerName" className="text-stone-700 font-black text-sm uppercase tracking-widest pl-2">Full Name</Label>
                                            <div className="relative group">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-stone-300 group-focus-within:text-saffron transition-colors" />
                                                <Input
                                                    id="referrerName"
                                                    placeholder="Enter your name"
                                                    value={referrerName}
                                                    onChange={(e) => setReferrerName(e.target.value)}
                                                    className="pl-14 h-16 rounded-2xl border-2 border-stone-100 focus:border-saffron focus:ring-4 focus:ring-saffron/10 text-lg font-medium transition-all shadow-sm"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <Label htmlFor="userEmail" className="text-stone-700 font-black text-sm uppercase tracking-widest pl-2">Email Address</Label>
                                            <div className="relative group">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-stone-300 group-focus-within:text-saffron transition-colors" />
                                                <Input
                                                    id="userEmail"
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    value={userEmail}
                                                    onChange={(e) => setUserEmail(e.target.value)}
                                                    className="pl-14 h-16 rounded-2xl border-2 border-stone-100 focus:border-saffron focus:ring-4 focus:ring-saffron/10 text-lg font-medium transition-all shadow-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        onClick={handleGenerateCode}
                                        disabled={isGenerating}
                                        className="w-full h-auto py-5 md:h-20 bg-gradient-to-r from-saffron via-sacred-orange to-saffron bg-[length:200%_200%] animate-gradient-xy text-white text-lg md:text-2xl font-black rounded-3xl shadow-[0_20px_50px_rgba(232,83,10,0.25)] hover:shadow-[0_25px_60px_rgba(232,83,10,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 disabled:opacity-70 group"
                                    >
                                        {isGenerating ? (
                                            <>
                                                <Loader2 className="mr-3 h-6 w-6 md:h-8 md:w-8 animate-spin" />
                                                GENERATING...
                                            </>
                                        ) : (
                                            <>
                                                GENERATE CODE
                                                <ArrowRight className="ml-3 w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" />
                                            </>
                                        )}
                                    </Button>

                                    {generatedCode && (
                                        <RevealOnScroll className="pt-10 animate-fade-in-up">
                                            <div className="p-10 rounded-[40px] bg-gradient-to-br from-green-50 to-emerald-50 border-4 border-white shadow-2xl relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                                    <Check className="w-20 h-20 text-emerald-600" />
                                                </div>
                                                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                                    <div className="text-center md:text-left flex-1">
                                                        <p className="text-emerald-700 font-black text-sm uppercase tracking-[0.2em] mb-3">Your Divine Code is Ready!</p>
                                                        <div className="text-4xl md:text-6xl font-black text-emerald-900 font-display tracking-widest">{generatedCode}</div>
                                                    </div>
                                                    <Button
                                                        variant="ghost"
                                                        onClick={() => {
                                                            navigator.clipboard.writeText(generatedCode);
                                                            toast.success("Code copied to clipboard!");
                                                        }}
                                                        className="h-20 px-10 rounded-2xl bg-white border-2 border-emerald-100 hover:bg-emerald-600 hover:text-white transition-all shadow-md group flex-col"
                                                    >
                                                        <Copy className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                                                        <span className="text-xs font-black uppercase">Copy Code</span>
                                                    </Button>
                                                </div>
                                            </div>
                                        </RevealOnScroll>
                                    )}
                                </div>
                            </RevealOnScroll>
                        </div>
                    </div>
                </div>

                {/* Share Section (New) */}
                <div className="py-24 bg-gradient-to-b from-white to-stone-50 relative overflow-hidden">
                    <div className="container mx-auto px-4 relative">
                        <RevealOnScroll className="max-w-4xl mx-auto text-center">
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-12">Invite the Dharma Parivar</h2>
                                                    <div className="bg-white p-6 md:p-16 rounded-[40px] md:rounded-[60px] shadow-[0_35px_80px_rgba(0,0,0,0.06)] border border-stone-100 relative mb-16">
                                <div className="max-w-2xl mx-auto">
                                    <div className="text-left p-6 md:p-10 rounded-[24px] md:rounded-[32px] bg-stone-50/50 border-2 border-dashed border-stone-200 mb-12 relative group hover:border-saffron transition-colors duration-500">
                                        <Quote className="absolute top-4 left-4 w-6 h-6 md:w-10 md:h-10 text-stone-200" />
                                        <p className="text-stone-700 italic text-base md:text-2xl leading-relaxed font-medium break-words">
                                            {shareMessage}
                                        </p>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
                                        <Button
                                            onClick={copyToClipboard}
                                            variant="outline"
                                            className="h-auto py-5 md:h-20 text-base md:text-xl font-black rounded-2xl border-2 border-stone-200 hover:border-saffron hover:bg-saffron hover:text-white transition-all shadow-md flex items-center justify-center gap-4 group"
                                        >
                                            {copied ? (
                                                <span className="flex items-center gap-3"><Check className="w-6 h-6 md:w-8 md:h-8" /> COPIED!</span>
                                            ) : (
                                                <span className="flex items-center gap-3"><Copy className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" /> COPY MESSAGE</span>
                                            )}
                                        </Button>
                                        <Button
                                            onClick={copyLinkOnly}
                                            variant="outline"
                                            className="h-auto py-5 md:h-20 text-base md:text-xl font-black rounded-2xl border-2 border-stone-200 hover:border-gold hover:bg-gold hover:text-white transition-all shadow-md flex items-center justify-center gap-4 group"
                                        >
                                            <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" /> COPY LINK
                                        </Button>
                                    </div>

                                    <div className="flex flex-wrap justify-center gap-6">
                                        <Button variant="outline" size="icon" className="w-16 h-16 rounded-2xl border-primary/10 hover:border-[#25D366] hover:bg-[#25D366] group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" onClick={shareOnWhatsApp}>
                                            <WhatsAppIcon className="w-7 h-7 text-[#25D366] group-hover:text-white transition-colors duration-300" />
                                        </Button>
                                        <Button variant="outline" size="icon" className="w-16 h-16 rounded-2xl border-primary/10 hover:border-[#1877F2] hover:bg-[#1877F2] group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" onClick={shareOnFacebook}>
                                            <Facebook className="w-7 h-7 text-[#1877F2] group-hover:text-white transition-colors duration-300" />
                                        </Button>
                                        <Button variant="outline" size="icon" className="w-16 h-16 rounded-2xl border-primary/10 hover:border-black hover:bg-black group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" onClick={() => {
                                            const referralLinkWithCode = `${referralLink}`;
                                            const base = `Namaste! [[NAMASTE]] I am sharing a divine opportunity with you. Join Namandarshan to experience Guided Darshan Assistance and Puja services. Let's spread the light of Sanatan Dharma together. [[FLAG]] Join here: ${referralLinkWithCode}`;
                                            let encoded = encodeURIComponent(base);
                                            encoded = encoded.replace("%5B%5BNAMASTE%5D%5D", "%F0%9F%99%8F");
                                            encoded = encoded.replace("%5B%5BFLAG%5D%5D", "%F0%9F%9A%A9");
                                            window.open(`https://twitter.com/intent/tweet?text=${encoded}`, '_blank');
                                        }}>
                                            <XIcon className="w-7 h-7 text-black group-hover:text-white transition-colors duration-300" />
                                        </Button>
                                        <Button variant="outline" size="icon" className="w-16 h-16 rounded-2xl border-primary/10 hover:border-[#0A66C2] hover:bg-[#0A66C2] group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" onClick={() => {
                                            const shareUrl = encodeURIComponent(`${referralLink}`);
                                            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank');
                                        }}>
                                            <Linkedin className="w-7 h-7 text-[#0A66C2] group-hover:text-white transition-colors duration-300" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default Referral;
