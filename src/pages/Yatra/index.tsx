import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import YatraPackageCard from "./components/YatraPackageCard";
import RegionTabs from "./components/RegionTabs";
import SpiritualReads from "./components/SpiritualReads";
import AstroBookingModal from "@/components/booking/AstroBookingModal";
import Autoplay from "embla-carousel-autoplay";
import { getApiUrl } from "@/utils/api";
import { MapPin, Calendar, Users, ArrowRight, ShieldCheck, Star, Car, Sparkles } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import TempleNetworkCard from "./components/TempleNetworkCard";
import TempleSearch from "./components/TempleSearch";
import StateDestinationMap from "./components/StateDestinationMap";

const yatraPackages = [
    {
        title: "Char Dham Yatra",
        image: "/images/chardham-yatra-banner.jpg",
        duration: "11 Days / 10 Nights",
        location: "Uttarakhand",
        description: "One of the most sacred Hindu pilgrimages covering four divine abodes.",
        slug: "/char-dham-yatra"
    },
    {
        title: "Char Dham Yatra (Helicopter Dehradun)",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop",
        duration: "6 Days / 5 Nights",
        location: "Dehradun",
        description: "Premium spiritual journey with helicopter transfers and Guided Darshan Assistance.",
        slug: "/char-dham-yatra-helicopter-dehradun"
    },
    {
        title: "Ayodhya Yatra",
        image: "/images/ayodhya-yatra-banner.jpg",
        duration: "3 Days / 2 Nights",
        location: "Ayodhya, UP",
        description: "The birthplace of Lord Ram and spiritual capital of devotion.",
        slug: "/ayodhya-yatra"
    },
    {
        title: "Kedarnath Yatra",
        image: "/images/kedarnath-yatra-banner.jpg",
        duration: "5 Days / 4 Nights",
        location: "Uttarakhand",
        description: "A holy journey to the abode of Lord Shiva in the Himalayas.",
        slug: "/kedarnath-yatra"
    },
    {
        title: "Jagannath Yatra",
        image: "/assets/jagannath_4k.png",
        duration: "4 Days / 3 Nights",
        location: "Puri, Odisha",
        description: "Visit the sacred land of Mahaprabhu Jagannath.",
        slug: "/jagannath-yatra"
    },
    {
        title: "Vrindavan Yatra",
        image: "/assets/vrindavan_4k.png",
        duration: "3 Days / 2 Nights",
        location: "Uttar Pradesh",
        description: "Experience the divine love of Radha and Krishna in Vrindavan.",
        slug: "/vrindavan-yatra"
    },
    {
        title: "Shirdi Yatra",
        image: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/WhatsApp_Image_2026-02-04_at_15.05.09_o78rkp.jpg",
        duration: "3 Days / 2 Nights",
        location: "Maharashtra",
        description: "Experience the divine presence of Sai Baba in Shirdi.",
        slug: "/shirdi-yatra"
    }
];

const features = [
    {
        icon: <ShieldCheck className="w-8 h-8 text-orange-600" />,
        title: "Guided Darshan Assistance",
        description: "Experience divine harmony with Guided Darshan Assistance from a local Pandit Ji."
    },
    {
        icon: <Star className="w-8 h-8 text-orange-600" />,
        title: "Premium Stays",
        description: "Comfortable 3-5 star accommodation with modern amenities."
    },
    {
        icon: <Car className="w-8 h-8 text-orange-600" />,
        title: "Luxury Transport",
        description: "Sanitized AC vehicles for a smooth and safe journey."
    },
    {
        icon: <Users className="w-8 h-8 text-orange-600" />,
        title: "Expert Guides",
        description: "Knowledgeable tour managers to assist you 24/7."
    }
];

const Yatra = () => {
    const [temples, setTemples] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();

    const formId = "yatra-astro-booking";
    const isAstroBookingOpen = searchParams.get("form") === formId;

    const handleAstroOpen = () => {
        setSearchParams(prev => {
            const newParams = new URLSearchParams(prev);
            newParams.set("form", formId);
            return newParams;
        }, { replace: false });
    };

    const handleAstroClose = () => {
        setSearchParams(prev => {
            const newParams = new URLSearchParams(prev);
            newParams.delete("form");
            return newParams;
        }, { replace: true });
    };

    useEffect(() => {
        fetch(getApiUrl('/api/temples'))
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setTemples(data);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch temples:", err);
                setLoading(false);
            });
    }, []);
    return (
        <div className="min-h-screen flex flex-col bg-stone-50">
            <SEO
                title="Pilgrimage Yatra Packages - Char Dham, Ayodhya, Shirdi & More"
                keywords={[
                    "Hindu pilgrimage tour packages India",
                    "Char Dham Yatra packages from Delhi",
                    "Char Dham Yatra by helicopter price 2026",
                    "Ayodhya Ram Mandir tour package",
                    "Shirdi Sai Baba darshan package from Mumbai",
                    "Varanasi Ayodhya Prayagraj tour",
                    "Kedarnath Badrinath helicopter booking",
                    "South India temple tour packages",
                    "Senior citizen pilgrimage tours India",
                    "Luxury Hindu pilgrimage tours",
                    "Jagannath Puri Rath Yatra package",
                    "Vrindavan Mathura tour package 3 days"
                ]}
                description="Request comprehensive Hindu pilgrimage Yatra packages for Char Dham, Ayodhya Ram Mandir, Shirdi Sai Baba, Jagannath Puri, and Vrindavan. Our all-inclusive spiritual tours include Guided Darshan Assistance, comfortable accommodation, luxury transport, and guided assistance. Whether you are looking for a Kedarnath helicopter coordination or a senior-citizen-friendly tour, Naman Darshan ensures a seamless and divine journey. Explore our verified packages and start your spiritual odyssey today."
            />
            <Header />
            <AstroBookingModal
                isOpen={isAstroBookingOpen}
                onClose={handleAstroClose}
            />
            <main className="flex-grow pt-40 md:pt-48 lg:pt-52 pb-16">

                {/* New Hero Section */}
                <div className="relative h-[450px] w-full mt-0 md:mt-0 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="/assets/hero-aarti.jpg"
                            alt="Yatra Specials"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>

                    <div className="relative z-10 text-center text-white px-4">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <span className="text-yellow-400 text-xl">✨</span>
                            <span className="font-medium tracking-wide uppercase text-sm md:text-base">Spiritual Journeys Await</span>
                        </div>
                        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide drop-shadow-lg leading-tight">
                            Simplify Your <br /> <span className="text-orange-400">Guided Darshan</span> With Naman
                        </h1>
                        <p className="text-base md:text-lg text-white/90 mb-8 max-w-xl mx-auto font-light leading-relaxed">
                            Personalized tours, comfortable transportation, and sacred rituals tailored for your peace of mind.
                        </p>
                        <button
                            onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
                        >
                            Explore Packages
                        </button>
                    </div>
                </div>

                {/* Search Section */}
                <TempleSearch temples={temples} />

                {/* Packages Grid */}
                <div id="packages" className="container mx-auto px-4 mt-16">
                    <div className="text-center mb-10">
                        <h2 className="font-display text-3xl font-bold text-primary">Trending Yatra Packages</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mt-4 rounded-full mb-6" />
                        <Link to="/exclusive-temple-darshan-packeges">
                            <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                                View All Packages <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 3000,
                            }),
                        ]}
                        className="w-full max-w-6xl mx-auto relative"
                    >
                        <CarouselContent>
                            {yatraPackages.map((pkg, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="h-full py-2">
                                        <YatraPackageCard {...pkg} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:block">
                            <CarouselPrevious className="-left-4 lg:-left-12" />
                            <CarouselNext className="-right-4 lg:-right-12" />
                        </div>
                    </Carousel>
                </div>

                {/* Accommodation Banners Section */}
                <div className="container mx-auto px-4 mt-16 mb-8 text-left">
                    <div className="text-center mb-10">
                        <span className="bg-[#D77E1E]/10 text-[#D77E1E] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                            Sacred Accommodation
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-stone-900 mt-2 tracking-tight">
                            Complete Your Spiritual Journey
                        </h2>
                        <p className="text-stone-500 text-sm md:text-base max-w-xl mx-auto mt-2 font-medium">
                            Choose and compare verified stays located directly adjacent to temple holy steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        {/* Banner 1: Hotels */}
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] text-white p-8 flex flex-col justify-between min-h-[280px] shadow-md border border-slate-800 group hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
                            <div className="z-10">
                                <span className="bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                                    Premium & Comfort
                                </span>
                                <h3 className="text-2xl font-black font-display mt-4 mb-2 tracking-tight">
                                    Divine Hotels
                                </h3>
                                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                                    Enjoy handpicked premium hotels near major holy shrines with AC, free Wi-Fi, and top-tier family facilities.
                                </p>
                            </div>
                            <div className="z-10 mt-6 flex justify-between items-center">
                                <Link
                                    to="/yatra/hotels"
                                    className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-extrabold rounded-xl transition-all shadow-sm flex items-center gap-1.5 hover:scale-[1.02] cursor-pointer"
                                >
                                    Explore Hotels <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                                <span className="text-4xl opacity-20">🏨</span>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full translate-x-12 -translate-y-12 pointer-events-none group-hover:scale-110 transition-transform" />
                        </div>

                        {/* Banner 2: Dharamshalas */}
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#7C2D12] to-[#451A03] text-white p-8 flex flex-col justify-between min-h-[280px] shadow-md border border-orange-950 group hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
                            <div className="z-10">
                                <span className="bg-[#D77E1E]/20 border border-[#D77E1E]/30 text-orange-300 text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                                    Traditional & Close
                                </span>
                                <h3 className="text-2xl font-black font-display mt-4 mb-2 tracking-tight">
                                    Holy Dharamshalas
                                </h3>
                                <p className="text-orange-100/80 text-xs sm:text-sm leading-relaxed font-medium">
                                    Stay close to the divine steps. Verified family-friendly rooms, group halls, and clean facilities starting at just ₹300.
                                </p>
                            </div>
                            <div className="z-10 mt-6 flex justify-between items-center">
                                <Link
                                    to="/yatra/dharamshalas"
                                    className="px-5 py-2.5 bg-[#D77E1E] hover:bg-[#b86a16] text-white text-xs font-extrabold rounded-xl transition-all shadow-sm flex items-center gap-1.5 hover:scale-[1.02] cursor-pointer"
                                >
                                    Explore Dharamshalas <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                                <span className="text-4xl opacity-20">🛕</span>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D77E1E]/15 rounded-full translate-x-12 -translate-y-12 pointer-events-none group-hover:scale-110 transition-transform" />
                        </div>

                        {/* Banner 3: Ashrams */}
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#115E59] to-[#042F2E] text-white p-8 flex flex-col justify-between min-h-[280px] shadow-md border border-teal-900 group hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
                            <div className="z-10">
                                <span className="bg-teal-400/10 border border-teal-400/20 text-teal-300 text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                                    Peace & Prasadam
                                </span>
                                <h3 className="text-2xl font-black font-display mt-4 mb-2 tracking-tight">
                                    Spiritual Ashrams
                                </h3>
                                <p className="text-teal-100/85 text-xs sm:text-sm leading-relaxed font-medium">
                                    Experience peace, simple pure vegetarian meals (Prasadam), and daily spiritual discourses near holy temples.
                                </p>
                            </div>
                            <div className="z-10 mt-6 flex justify-between items-center">
                                <Link
                                    to="/yatra/ashrams"
                                    className="px-5 py-2.5 bg-teal-500 hover:bg-teal-600 text-slate-950 text-xs font-extrabold rounded-xl transition-all shadow-sm flex items-center gap-1.5 hover:scale-[1.02] cursor-pointer"
                                >
                                    Explore Ashrams <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                                <span className="text-4xl opacity-20">🧘</span>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full translate-x-12 -translate-y-12 pointer-events-none group-hover:scale-110 transition-transform" />
                        </div>

                    </div>
                </div>

                {/* AI Planner CTA */}
                <div className="container mx-auto px-4 mt-12 mb-12">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white border-2 border-white/20">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-sm border border-white/10 flex items-center gap-1">
                                    <Sparkles className="w-3 h-3" /> New Feature
                                </span>
                            </div>
                            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">Plan Your Custom Yatra with AI</h3>
                            <p className="text-indigo-100 max-w-xl">
                                Chat with our intelligent assistant to design a personalized spiritual itinerary tailored to your schedule and preferences.
                            </p>
                        </div>
                        <Link to="/ai-yatra-planner">
                            <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 font-bold shadow-lg border-0 gap-2 h-12 px-8">
                                Try AI Planner <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* State Destination Map */}
                <StateDestinationMap temples={temples} />

                {/* Explore by Region */}
                <div className="bg-stone-100 mt-20 pb-20">
                    <RegionTabs temples={temples} />
                </div>

                {/* Sacred Temple Network */}
                <div className="container mx-auto px-4 mt-20 mb-20 relative">
                    <div className="text-center mb-10">
                        <h2 className="font-display text-3xl font-bold text-primary">Sacred Temple Network</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mt-4 rounded-full" />
                    </div>

                    {loading ? (
                        <div className="text-center py-12">Loading sacred network...</div>
                    ) : (
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 3000,
                                }),
                            ]}
                            className="w-full max-w-6xl mx-auto"
                        >
                            <CarouselContent>
                                {temples.map((temple: any, index) => (
                                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                        <div className="h-full py-2">
                                            <TempleNetworkCard {...temple} />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="hidden md:block">
                                <CarouselPrevious className="-left-4 lg:-left-12" />
                                <CarouselNext className="-right-4 lg:-right-12" />
                            </div>
                        </Carousel>
                    )}
                </div>

                {/* Masked Text Naman Darshan */}
                <div className="container mx-auto px-4 mb-32 flex justify-center w-full overflow-hidden">
                    <h1
                        className="text-[12vw] sm:text-[10vw] md:text-[120px] lg:text-[150px] font-black tracking-tighter uppercase leading-none bg-center bg-cover bg-clip-text text-transparent select-none drop-shadow-sm whitespace-nowrap"
                        style={{ backgroundImage: "url('/assets/kedarnath.jpg')" }}
                    >
                        नमन<span className="font-sans">DARSHAN</span>
                    </h1>
                </div>

                {/* Spiritual Reads */}
                <div className="bg-stone-50 border-t border-stone-100 py-10">
                    <SpiritualReads />
                </div>

                {/* Mantra Banner */}
                <div className="container mx-auto px-4 mb-12">
                    <div className="bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50 py-4 px-4 sm:py-6 rounded-3xl sm:rounded-full border border-orange-200 shadow-sm mx-auto max-w-4xl flex items-center justify-center">
                        <h2 className="text-orange-600 flex flex-wrap items-center justify-center gap-2 sm:gap-4 drop-shadow-sm leading-tight pt-2 text-center w-full" style={{ fontFamily: '"Tangerine", cursive', fontWeight: 'bold' }}>
                            <span className="text-yellow-500 text-3xl sm:text-4xl">✨</span>
                            <span className="text-4xl sm:text-5xl md:text-[56px] px-2">"Dharam Ki Yatra, Naman Ke Saath"</span>
                            <span className="text-yellow-500 text-3xl sm:text-4xl hidden sm:inline">✨</span>
                        </h2>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default Yatra;
