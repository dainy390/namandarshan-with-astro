import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import Volunteerimg from "../../assets/Volunteerimg.png";
import { Heart, Users, Sparkles, HelpingHand, Globe, Search, MessageSquare, Send, MapPin, Mail, User, Phone, Map, Flag, Calendar as CalendarIcon, ChevronRight, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

const countries = [
    "India", "United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates", "Singapore", "Other"
];

const VolunteerPage = () => {
    const { isUserAuthenticated, user } = useAuth();
    const [selectedCountry, setSelectedCountry] = React.useState("India");
    const [selectedState, setSelectedState] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [formData, setFormData] = React.useState({
        fullName: user?.name || "",
        email: user?.email || "",
        mobile: "",
        birthDate: "",
        gender: "",
        // address: "",
        // city: "",
        // pincode: ""
    });

    // Update formData when user context changes
    React.useEffect(() => {
        if (user) {
            setFormData(prev => ({
                ...prev,
                fullName: user.name || prev.fullName,
                email: user.email || prev.email
            }));
        }
    }, [user]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
        if (name === "country") {
            setSelectedCountry(value);
            if (value !== "India") setSelectedState("");
        }
        if (name === "state") setSelectedState(value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.fullName || !formData.email || !formData.mobile) {
            import("sonner").then(({ toast }) => toast.error("Please fill in all required fields"));
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5001'}/api/form-dumps`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sessionId: `vol-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                    formType: 'volunteer_registration',
                    serviceName: 'Volunteer Program',
                    pageUrl: window.location.href,
                    status: 'converted',
                    formData: {
                        ...formData,
                        country: selectedCountry,
                        state: selectedState
                    },
                    userAgent: navigator.userAgent
                }),
            });

            if (response.ok) {
                import("sonner").then(({ toast }) => {
                    toast.success("Application Submitted!", {
                        description: "Thank you for joining our divine mission. We will contact you soon."
                    });
                });
                // Reset form or redirect
                setFormData({
                    fullName: user?.name || "",
                    email: user?.email || "",
                    mobile: "",
                    birthDate: "",
                    gender: "",
                    // address: "",
                    // city: "",
                    // pincode: ""
                });
            } else {
                throw new Error("Failed to submit");
            }
        } catch (error) {
            console.error("Submission error:", error);
            import("sonner").then(({ toast }) => toast.error("Submission Failed. Please try again later."));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans overflow-x-hidden">
            <SEO
                title="Volunteer | Serve, Support & Spread Seva"
                description="Join the spiritual mission of NamanDarshan. Step into the spirit of selfless service, support communities with compassion, and spread kindness through meaningful acts of seva."
            />
            <Header />

            <main className="flex-grow relative flex flex-col">
                {/* Divine Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-sacred-orange/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/5 rounded-full blur-[100px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] md:text-[35rem] opacity-[0.015] font-black select-none pointer-events-none">
                        ॐ
                    </div>
                </div>

                <section className="relative z-10 pt-40 md:pt-56 pb-24 max-w-7xl mx-auto px-6 text-center">
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
                        <div className="flex items-center gap-3 justify-center mb-8">
                            <div className="h-px w-10 bg-gradient-to-r from-transparent to-sacred-orange" />
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-sacred-orange">Sacred Service</span>
                            <div className="h-px w-10 bg-gradient-to-r from-sacred-orange to-transparent" />
                        </div>

                        <h1 className="joinhand font-display text-[clamp(2.5rem,8vw,4rem)] font-black text-gray-900 mb-8 tracking-tighter leading-[1.1]">
                            Serve, Support <br className="hidden md:block" /> & <span className="text-gradient-sacred">Spread Seva</span>
                        </h1>

                        <p className="max-w-4xl mx-auto mt-6 transition-all duration-700" style={{
                            fontFamily: "'Tangerine', sans-serif",
                            fontSize: 'clamp(28px, 5vw, 48px)',
                            fontWeight: 800,
                            color: '#e0763f',
                            lineHeight: 1.2,
                        } as React.CSSProperties}>
                            Step into the spirit of selfless service, support communities with compassion, and spread kindness through meaningful acts of seva.
                        </p>

                        <div className="mt-20 flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-4 delay-500 duration-1000">
                            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-sacred-orange to-transparent rounded-full opacity-30" />
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Naman Parivaar Mission</p>
                        </div>
                    </div>
                </section>
                <section className="pb-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-white rounded-[3rem] shadow-2xl shadow-sacred-orange/5 p-8 md:p-16 border border-sacred-orange/10 relative overflow-hidden group">
                            {/* Decorative background pattern */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-sacred-orange/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-sacred-orange/10 transition-colors duration-700" />

                            <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                                {/* Left Content */}
                                <div className="flex-1 space-y-10 text-left">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-sacred-orange/5 rounded-full border border-sacred-orange/10">
                                        <Heart className="w-4 h-4 text-sacred-orange fill-sacred-orange/20" />
                                        <span className="text-xs font-bold uppercase tracking-wider text-sacred-orange">Community Seva</span>
                                    </div>

                                    <h2 className="font-display text-[clamp(2rem,6vw,3.5rem)] font-black text-gray-900 leading-[1.1]">
                                        Volunteer for a <span className="text-sacred-orange">Divine Cause</span>
                                    </h2>

                                    <div className="space-y-6">
                                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                            Our volunteers are the heart of our seva mission, helping us create a meaningful spiritual experience for devotees across temples.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                                                    <Users className="w-6 h-6 text-gold" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900">Support Community</h3>
                                                    <p className="text-sm text-gray-500">Join a network of dedicated sevaks.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-sacred-orange/10 flex items-center justify-center flex-shrink-0">
                                                    <Sparkles className="w-6 h-6 text-sacred-orange" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900">Spiritual Growth</h3>
                                                    <p className="text-sm text-gray-500">Experience peace through service.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-gray-500 leading-relaxed border-l-2 border-sacred-orange/20 pl-6 italic">
                                            "Every small effort contributes to bringing faith, blessings, and peace to countless lives. Volunteering is not just about helping others; it is also a journey of personal growth, devotion, and spiritual fulfillment through true seva."
                                        </p>
                                    </div>
                                </div>

                                {/* Right Image */}
                                <div className="flex-1 w-full relative">
                                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group/img">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                                        <img
                                            src={Volunteerimg}
                                            alt="Temple Volunteer Seva"
                                            className="w-full h-[500px] object-cover transform group-hover/img:scale-110 transition-transform duration-1000 ease-out"
                                        />
                                        <div
                                            onClick={() => document.getElementById('Controlscroll')?.scrollIntoView({ behavior: 'smooth' })}
                                            className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 translate-y-20 group-hover/img:translate-y-0 transition-transform duration-500 cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-sacred-orange flex items-center justify-center">
                                                    <HelpingHand className="w-5 h-5 text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-white font-bold text-sm">Divine Service</p>
                                                    <p className="text-white/80 text-xs">Join our mission today</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Accent elements */}
                                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gold rounded-3xl -z-10 animate-pulse opacity-20" />
                                    <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-sacred-orange/20 rounded-full -z-10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 px-6 bg-gradient-to-b from-white to-[#FAFAFA] relative overflow-hidden">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sacred-orange/20 to-transparent" />

                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {/* Serve/Spread SD Card */}
                            <Link
                                to="/referral"
                                className="group relative bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-sacred-orange/30 transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-sacred-orange/5 rounded-full -mr-12 -mt-12 group-hover:bg-sacred-orange/10 transition-colors duration-500" />
                                <div className="w-16 h-16 rounded-2xl bg-sacred-orange/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <Send className="w-8 h-8 text-sacred-orange" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Serve / Spread SD</h3>
                                <p className="text-gray-500 leading-relaxed mb-6">
                                    Join our mission to spread the eternal wisdom of Sanatan Dharma to every corner of the world.
                                </p>
                                <div className="flex items-center text-sacred-orange font-bold text-sm uppercase tracking-wider gap-2">
                                    Spread Seva <Sparkles className="w-4 h-4" />
                                </div>
                            </Link>

                            {/* Explore Temples Card */}
                            <Link
                                to="/temples"
                                className="group relative bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full -mr-12 -mt-12 group-hover:bg-gold/10 transition-colors duration-500" />
                                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <MapPin className="w-8 h-8 text-gold" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Explore Temples</h3>
                                <p className="text-gray-500 leading-relaxed mb-6">
                                    Discover sacred temples and divine destinations across the country and connect with your roots.
                                </p>
                                <div className="flex items-center text-gold font-bold text-sm uppercase tracking-wider gap-2">
                                    Start Exploring <Search className="w-4 h-4" />
                                </div>
                            </Link>

                            {/* Connect-Form Card */}
                            <div
                                onClick={() => document.getElementById('Controlscroll')?.scrollIntoView({ behavior: 'smooth' })}
                                className="group relative bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-divine-blue/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-divine-blue/5 rounded-full -mr-12 -mt-12 group-hover:bg-divine-blue/10 transition-colors duration-500" />
                                <div className="w-16 h-16 rounded-2xl bg-divine-blue/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <Mail className="w-8 h-8 text-divine-blue" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Connect-Form</h3>
                                <p className="text-gray-500 leading-relaxed mb-6">
                                    Get in touch with our community and find ways to contribute to the divine cause of seva.
                                </p>
                                <div className="flex items-center text-divine-blue font-bold text-sm uppercase tracking-wider gap-2">
                                    Stay Connected <MessageSquare className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Portal Heading Section */}
                <section id="volunteer-form" className="pt-24 pb-12 px-6 relative">
                    <div className="max-w-7xl mx-auto text-center space-y-6">
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <div className="h-px w-8 bg-sacred-orange/20" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-sacred-orange/60">Seva Registration</span>
                            <div className="h-px w-8 bg-sacred-orange/20" />
                        </div>
                        <h2 className="font-display text-[clamp(2rem,7vw,3.75rem)] font-black text-gray-900 tracking-tight">
                            Namandarshan <span className="text-gradient-sacred">Sevak Portal</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
                            Join our global community of dedicated volunteers and contribute to the divine mission of preserving and promoting our sacred heritage.
                        </p>
                        <div className="flex justify-center pt-4">
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sacred-orange/20 to-transparent rounded-full" />
                        </div>
                    </div>
                </section>

                {/* Volunteer Registration Section */}
                <section className="pb-32 px-6 relative overflow-hidden">
                    {/* Background decorations */}
                    <div className="absolute top-1/2 left-0 w-96 h-96 bg-sacred-orange/5 rounded-full blur-[100px] -translate-x-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] translate-x-1/2" />

                    <div className="max-w-7xl mx-auto relative z-10">
                        {!isUserAuthenticated ? (
                            /* Unauthenticated State - Keeping it centered and focused */
                            <div className="max-w-3xl mx-auto bg-white/40 backdrop-blur-xl rounded-[4rem] p-12 md:p-20 shadow-2xl shadow-sacred-orange/5 border border-white/50 text-center group">
                                <div className="w-24 h-24 bg-sacred-orange/10 rounded-[2rem] flex items-center justify-center mx-auto mb-10 group-hover:rotate-12 transition-transform duration-500">
                                    <Lock className="w-12 h-12 text-sacred-orange" />
                                </div>
                                <h2 className="font-display text-[clamp(1.75rem,5vw,3rem)] font-black text-gray-900 mb-6">
                                    Begin Your <span className="text-sacred-orange">Seva Journey</span>
                                </h2>
                                <p className="text-gray-600 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                                    To maintain the sanctity of our divine mission, volunteer registrations are exclusive to our community members. Please sign in to continue.
                                </p>
                                <Link to="/login">
                                    <Button className="bg-sacred-orange hover:bg-sacred-orange/90 text-white px-12 py-8 rounded-2xl text-sm sm:text-xl font-black shadow-xl shadow-sacred-orange/30 transition-all hover:-translate-y-1 active:scale-95">
                                        Sign In to Volunteer <ChevronRight className="ml-2 w-6 h-6" />
                                    </Button>
                                </Link>
                                <p className="mt-10 text-gray-400 font-medium">
                                    Not a member yet? <Link to="/login" className="text-sacred-orange hover:underline font-bold">Join the Parivaar</Link>
                                </p>
                            </div>
                        ) : (
                            /* Authenticated Split Layout */
                            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                                {/* Left Content: Inspiration & Info */}
                                <div className="lg:w-2/5 space-y-12 lg:sticky lg:top-32">
                                    <div className="space-y-6">
                                        <div className="inline-flex items-center gap-3 px-5 py-2 bg-sacred-orange/10 rounded-full border border-sacred-orange/20">
                                            <Sparkles className="w-5 h-5 text-sacred-orange" />
                                            <span className="text-sm font-black uppercase tracking-widest text-sacred-orange">Divine Opportunity</span>
                                        </div>
                                        <h2 className="font-display text-[clamp(2rem,7vw,3.5rem)] font-black text-gray-900 leading-[1.1]">
                                            Become a <span className="text-gradient-sacred">Sevak</span>
                                        </h2>
                                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                                            Step into the spirit of selfless service. Your contribution helps us preserve our sacred heritage and serve the global devotee community.
                                        </p>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="flex gap-6 items-start group">
                                            <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sacred-orange transition-colors duration-300">
                                                <Heart className="w-7 h-7 text-sacred-orange group-hover:text-white transition-colors" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-2">Spiritual Growth</h4>
                                                <p className="text-gray-500">Experience the profound peace that comes from serving the divine cause.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 items-start group">
                                            <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                                                <Users className="w-7 h-7 text-gold group-hover:text-white transition-colors" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-2">Community Bond</h4>
                                                <p className="text-gray-500">Connect with like-minded sevaks and build meaningful relationships.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 bg-gold/5 rounded-[2.5rem] border border-gold/10 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 opacity-5 text-4xl">ॐ</div>
                                        <p className="text-gray-600 italic leading-relaxed relative z-10">
                                            "Service to humanity is service to God. Join us in making a difference in the lives of millions of devotees."
                                        </p>
                                    </div>
                                </div>

                                {/* Right Content: The Form */}
                                <div className="lg:w-3/5 w-full" id="Controlscroll">
                                    <div className="bg-white rounded-[3.5rem] shadow-2xl shadow-gray-200/60 border border-gray-50 overflow-hidden relative">
                                        {/* Top Accent Strip */}
                                        <div className="h-3 bg-gradient-to-r from-sacred-orange via-gold to-sacred-orange" />

                                        <form className="p-8 md:p-14 space-y-12" onSubmit={handleSubmit}>
                                            {/* Section 1: Identity */}
                                            <div className="space-y-8" >
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-sacred-orange/10 flex items-center justify-center">
                                                        <User className="w-5 h-5 text-sacred-orange" />
                                                    </div>
                                                    <h3 className="text-xl font-black text-gray-900 tracking-tight" >Identity Details</h3>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <div className="space-y-3">
                                                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</Label>
                                                        <Input
                                                            name="fullName"
                                                            placeholder="Your Name"
                                                            value={formData.fullName}
                                                            onChange={handleInputChange}
                                                            className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 px-6 focus:bg-white transition-all text-gray-900 font-medium"
                                                        />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</Label>
                                                        <Input
                                                            name="email"
                                                            type="email"
                                                            placeholder="email@domain.com"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 px-6 focus:bg-white transition-all text-gray-900 font-medium"
                                                        />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Mobile Number</Label>
                                                        <div className="relative">
                                                            <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                            <Input
                                                                name="mobile"
                                                                type="tel"
                                                                placeholder="Phone Number"
                                                                value={formData.mobile}
                                                                onChange={handleInputChange}
                                                                className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 pl-14 pr-6 focus:bg-white transition-all text-gray-900 font-medium"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="space-y-3">
                                                            <Label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Birth Date</Label>
                                                            <Input
                                                                name="birthDate"
                                                                type="date"
                                                                value={formData.birthDate}
                                                                onChange={handleInputChange}
                                                                className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 px-6 focus:bg-white transition-all text-gray-900 font-medium"
                                                            />
                                                        </div>
                                                        <div className="space-y-3">
                                                            <Label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Gender</Label>
                                                            <Select onValueChange={(v) => handleSelectChange("gender", v)}>
                                                                <SelectTrigger className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 px-6 focus:bg-white transition-all">
                                                                    <SelectValue placeholder="Select" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="male">Male</SelectItem>
                                                                    <SelectItem value="female">Female</SelectItem>
                                                                    <SelectItem value="other">Other</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Section 2: Location */}
                                            {/* <div className="space-y-8">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                                                        <Map className="w-5 h-5 text-gold" />
                                                    </div>
                                                    <h3 className="text-xl font-black text-gray-900 tracking-tight">Location Details</h3>
                                                </div>

                                                <div className="space-y-3">
                                                    <Label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Permanent Address</Label>
                                                    <Textarea 
                                                        name="address"
                                                        placeholder="Complete Address" 
                                                        value={formData.address}
                                                        onChange={handleInputChange}
                                                        className="rounded-2xl border-gray-100 bg-gray-50/50 p-6 min-h-[120px] focus:bg-white transition-all text-gray-900 font-medium" 
                                                    />
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <div className="space-y-3">
                                                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Country</Label>
                                                        <div className="relative">
                                                            <Flag className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
                                                            <Select value={selectedCountry} onValueChange={(v) => handleSelectChange("country", v)}>
                                                                <SelectTrigger className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 pl-14 pr-6 focus:bg-white transition-all">
                                                                    <SelectValue placeholder="Country" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    {countries.map((c) => (
                                                                        <SelectItem key={c} value={c}>{c}</SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">State</Label>
                                                        <Select
                                                            value={selectedState}
                                                            onValueChange={(v) => handleSelectChange("state", v)}
                                                            disabled={selectedCountry !== "India"}
                                                        >
                                                            <SelectTrigger className={`h-14 rounded-2xl border-gray-100 bg-gray-50/50 px-6 focus:bg-white transition-all ${selectedCountry !== "India" ? "opacity-50" : ""}`}>
                                                                <SelectValue placeholder="Select State" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                {indianStates.map((s) => (
                                                                    <SelectItem key={s} value={s}>{s}</SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">City / Town</Label>
                                                        <Input 
                                                            name="city"
                                                            placeholder="Your City" 
                                                            value={formData.city}
                                                            onChange={handleInputChange}
                                                            className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 px-6 focus:bg-white transition-all text-gray-900 font-medium" 
                                                        />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Pincode / Zip</Label>
                                                        <Input 
                                                            name="pincode"
                                                            placeholder="6-digit code" 
                                                            value={formData.pincode}
                                                            onChange={handleInputChange}
                                                            className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 px-6 focus:bg-white transition-all text-gray-900 font-medium" 
                                                        />
                                                    </div>
                                                </div>
                                            </div> */}

                                            <div className="pt-10">
                                                <Button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full bg-sacred-orange hover:bg-sacred-orange/90 text-white py-10 rounded-[2rem] text-sm font-black shadow-2xl shadow-sacred-orange/20 transition-all hover:scale-[1.02] active:scale-95 group disabled:opacity-70 disabled:cursor-not-allowed sm:text-2xl"
                                                >
                                                    {isSubmitting ? "Submitting..." : "Submit Seva Application"}
                                                    {!isSubmitting && <Sparkles className="ml-3 w-8 h-8 group-hover:rotate-12 transition-transform " />}
                                                </Button>
                                                <div className="mt-8 flex items-center justify-center gap-6 text-xs font-bold uppercase tracking-widest text-gray-400">
                                                    <Link to="/terms-conditions" className="hover:text-sacred-orange transition-colors">Terms</Link>
                                                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                                                    <Link to="/privacy-policy" className="hover:text-sacred-orange transition-colors">Privacy</Link>
                                                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                                                    <span className="flex items-center gap-2">
                                                        <Lock className="w-3 h-3" /> Secure Seva
                                                    </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>


            </main>

            <Footer />
        </div>
    );
};

export default VolunteerPage;
