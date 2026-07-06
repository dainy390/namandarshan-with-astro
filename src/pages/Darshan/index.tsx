import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import DarshanCard from "./components/DarshanCard";
import { getApiUrl } from "@/utils/api";
import { MousePointerClick, CalendarCheck, Ticket, ArrowRight } from "lucide-react";
import FilterBar from "@/components/common/FilterBar";

interface DarshanTemple {
    id: number;
    name: string;
    image: string;
    location: string;
    seoKeywords?: string;
}


const steps = [
    {
        icon: <MousePointerClick className="w-10 h-10 text-orange-600" />,
        title: "Select Temple",
        description: "Choose your desired deity and temple location."
    },
    {
        icon: <CalendarCheck className="w-10 h-10 text-orange-600" />,
        title: "Choose Date",
        description: "Pick a convenient date and time slot for darshan."
    },
    {
        icon: <Ticket className="w-10 h-10 text-orange-600" />,
        title: "Get Darshan Assistance",
        description: "Get confirmation and guided assistance for your scheduled temple visit."
    }
];

const Darshan = () => {
    const [darshanTemples, setDarshanTemples] = useState<DarshanTemple[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedState, setSelectedState] = useState("all");
    // Initialize from URL query param if present
    const [selectedInternational, setSelectedInternational] = useState(() => {
        const params = new URLSearchParams(window.location.search);
        return params.get("category") === "international" ? "all_international" : "all";
    });

    useEffect(() => {
        fetch(getApiUrl('/api/darshan'))
            .then(res => res.json())
            .then(data => {
                setDarshanTemples(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch darshan temples:", err);
                setLoading(false);
            });
    }, []);

    // Partition darshans into Domestic and International
    // Assuming backend returns seoKeywords. If not, we might need another way, but model has it.
    // If seoKeywords is missing, assume domestic.
    const isInternationalDarshan = (d: any) => d.seoKeywords?.toLowerCase().includes("international");

    const internationalDarshans = darshanTemples.filter(isInternationalDarshan);
    const domesticDarshans = darshanTemples.filter(d => !isInternationalDarshan(d));

    // Extract unique states for domestic
    const states = Array.from(new Set(domesticDarshans.map(t => t.location?.split(',').pop()?.trim() || "Unknown"))).filter(s => s !== "Unknown").sort();

    // Extract unique locations for international
    const internationalLocations = Array.from(new Set(internationalDarshans.map((d: any) => {
        const parts = d.location?.split(',');
        return parts[0]?.trim(); // Use City/First part as location
    }))).filter(Boolean).sort();

    const filteredTemples = darshanTemples.filter(temple => {
        const isInternational = isInternationalDarshan(temple);

        // Search Filter
        const matchesSearch = temple.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            temple.location.toLowerCase().includes(searchQuery.toLowerCase());

        // Category Filter Logic
        if (selectedInternational === "all_international") {
            return matchesSearch && isInternational;
        }

        if (selectedInternational !== "all") {
            return matchesSearch && isInternational && temple.location.includes(selectedInternational);
        }

        if (selectedState === "all_states") {
            return matchesSearch && !isInternational;
        }

        if (selectedState !== "all") {
            return matchesSearch && !isInternational && temple.location.includes(selectedState);
        }

        return matchesSearch;
    });

    const handleStateChange = (val: string) => {
        setSelectedState(val);
        if (val !== "all") setSelectedInternational("all");
    };

    const handleInternationalChange = (val: string) => {
        setSelectedInternational(val);
        if (val !== "all") setSelectedState("all");
    };

    // Scroll to #available-darshans if hash is present
    useEffect(() => {
        if (window.location.hash === "#available-darshans") {
            const element = document.getElementById("available-darshans");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [loading]); // Scroll after loading

    return (
        <div className="min-h-screen flex flex-col bg-stone-50">
            <SEO
                title="Temple Darshan Assistance in India | Naman Darshan"
                keywords={["Get Assisted Darshan", "Skip the Queue", "Temple Entry Pass", "Darshan Booking India", "Special Darshan"]}
                description="Get temple-specific darshan assistance for leading temples across India including Kashi Vishwanath Temple, Tirumala Venkateswara Temple, Mahakaleshwar Jyotirlinga and Ram Mandir. Get guidance for temple visits, darshan timings, local coordination, special darshan assistance and temple procedures for a smooth devotional experience. "
            />
            <Header />
            <main className="flex-grow pt-40 md:pt-48 lg:pt-52 pb-16">

                {/* Cover Image Section
                <div className="container mx-auto px-4 mb-12">
                    <div className="relative w-full h-[180px] md:h-[250px] rounded-3xl overflow-hidden shadow-lg border border-orange-100 group">
                        <img
                             src="https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/WhatsApp_Image_2026-02-05_at_14.55.39_goqshj.jpg"
                             alt="Darshan Cover"
                             className="w-full h-full object-fill object-center transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:bg-black/10 transition-colors" />

                        <div className="absolute bottom-4 left-[75%] -translate-x-1/2 md:bottom-6 z-20">
                            <Link to="/mahashivratari">
                                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-1.5 px-6 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center gap-2 text-xs md:text-sm backdrop-blur-md border border-white/20">
                                     View Details
                                     <ArrowRight className="w-4 h-4" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div> */}

                {/* Text Hero Section (Below Banner) */}
                <div className="container mx-auto px-4 text-center mb-16 space-y-4">
                    <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold tracking-wide uppercase mb-2">
                        Guided Darshan Assistance
                    </span>
                    <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-4 drop-shadow-sm">
                        Guided Darshan Assistance
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
                        A knowledgeable Pandit Ji will accompany you, guide you through the temple, and share insights about the temple's history and significance.
                    </p>

                </div>

                {/* How it Works */}
                <div className="container mx-auto px-4 mb-20">
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-orange-100">
                        <div className="text-center mb-10">
                            <h2 className="font-display text-3xl font-bold text-foreground">How It Works</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                            {/* Connector Line (Desktop) */}
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-200 to-transparent -translate-y-1/2 z-0" />

                            {steps.map((step, index) => (
                                <div key={index} className="relative z-10 flex flex-col items-center text-center bg-white p-4">
                                    <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center mb-4 shadow-sm border border-orange-100">
                                        {step.icon}
                                    </div>
                                    <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Darshan Grid */}
                <div id="available-darshans" className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="font-display text-3xl font-bold text-primary">Available Temples</h2>
                        <div className="h-1 flex-grow mx-6 bg-gradient-to-r from-orange-200 to-transparent rounded-full" />
                    </div>

                    <FilterBar
                        onSearch={setSearchQuery}
                        onStateChange={handleStateChange}
                        onInternationalChange={handleInternationalChange}
                        states={states}
                        internationalLocations={internationalLocations}
                        placeholder="Search Guided Darshan Assistance..."
                        selectedState={selectedState}
                        selectedInternational={selectedInternational}
                        className="mb-10"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {loading ? (
                            <div className="col-span-full text-center py-20 text-gray-500">Loading available darshans...</div>
                        ) : filteredTemples.length > 0 ? (
                            filteredTemples.map((temple, index) => (
                                <DarshanCard key={index} {...temple} />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12 text-muted-foreground">
                                No darshans found matching your criteria.
                            </div>
                        )}
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default Darshan;
