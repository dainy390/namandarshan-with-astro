import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getApiUrl } from "@/utils/api";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Filter } from "lucide-react";
import BookingModal from "@/components/booking/BookingModal";
import TempleCard from "./components/TempleCard";
import SEO from "@/components/SEO";
import FilterBar from "@/components/common/FilterBar";
import FeedbackFloating from "@/components/temples/FeedbackFloating";


const Temples = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [temples, setTemples] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const formId = "temple-booking";
    const isBookingOpen = searchParams.get("form") === formId;

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

    useEffect(() => {
        fetch(getApiUrl('/api/temples'))
            .then(res => {
                if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
                return res.json();
            })
            .then(data => {
                if (Array.isArray(data)) {
                    setTemples(data);
                } else {
                    console.error("API returned non-array:", data);
                    setError("Invalid data received from server");
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch temples:", err);
                setError(err.message || "Failed to load temples");
                setLoading(false);
            });
    }, []);



    const [searchQuery, setSearchQuery] = useState("");
    const [selectedState, setSelectedState] = useState("all");
    // Initialize from URL query param if present
    const [selectedInternational, setSelectedInternational] = useState(() => {
        const params = new URLSearchParams(window.location.search);
        return params.get("category") === "international" ? "all_international" : "all";
    });

    // Partition temples into Domestic and International
    const internationalTemples = temples.filter((t: any) => t.seoKeywords?.toLowerCase().includes("international"));
    const domesticTemples = temples.filter((t: any) => !t.seoKeywords?.toLowerCase().includes("international"));

    // Extract unique states (last part of location string) for domestic
    const states = Array.from(new Set(domesticTemples.map((temple: any) => temple.location?.split(',').pop()?.trim() || "Unknown")))
        .filter(s => s !== "Unknown").sort();

    // Extract unique locations for international (e.g. "Dubai, UAE" -> "Dubai")
    // Assuming location format might be "City, Country" or just "City"
    const internationalLocations = Array.from(new Set(internationalTemples.map((temple: any) => {
        const parts = temple.location?.split(',');
        // If "City, Country", maybe just take City? Or keep full? 
        // Let's keep the main identifier. If user says "Dubai", let's try to extract City.
        return parts[0]?.trim();
    }))).filter(Boolean).sort();

    const filteredTemples = temples.filter((temple: any) => {
        const isInternational = temple.seoKeywords?.toLowerCase().includes("international");

        // Search Filter
        const matchesSearch = temple.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            temple.location?.toLowerCase().includes(searchQuery.toLowerCase());

        // 1. All International selected
        if (selectedInternational === "all_international") {
            return matchesSearch && isInternational;
        }

        // 2. A specific International location selected
        if (selectedInternational !== "all") {
            return matchesSearch && isInternational && temple.location?.includes(selectedInternational);
        }

        // If "All Domestic" is selected, show all domestic temples
        if (selectedState === "all_states") {
            return matchesSearch && !isInternational;
        }

        // If a Domestic State is selected, ONLY show domestic temples matching that state
        if (selectedState !== "all") {
            return matchesSearch && !isInternational && temple.location?.includes(selectedState);
        }

        // 5. No filter active — show everything
        return matchesSearch;
    });

    const handleStateChange = (val: string) => {
        setSelectedState(val);
        if (val !== "all") setSelectedInternational("all"); // Reset international if state selected
    };

    const handleInternationalChange = (val: string) => {
        setSelectedInternational(val);
        if (val !== "all") setSelectedState("all"); // Reset state if international selected
    };


    return (
        <div className="min-h-screen flex flex-col bg-background">
            <SEO
                title="All Temples"
                keywords={["Temples in India", "Hindu Temples", "Pilgrimage Sites", "Temple List", "Sacred Sites"]}
                description="Explore temples, darshan guides, puja services, prasad offerings, and spiritual blogs in one place."
            />
            <Header />
            <main className="flex-grow pt-52 md:pt-56 lg:pt-60 pb-16">
                <BookingModal
                    isOpen={isBookingOpen}
                    onClose={handleClose}
                    type="temple"
                />
                <div className="container mx-auto px-4">
                    {/* Page Title */}
                    <div className="text-center mb-12">
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4 italic">
                            Sacred Temples Worldwide
                        </h1>
                        <p className="max-w-4xl mx-auto mt-6" style={{
                            fontFamily: "'Tangerine', sans-serif",
                            fontSize: '75px',
                            fontWeight: 800,
                            color: '#e0763f',
                            lineHeight: 1.2
                        } as React.CSSProperties}>
                            Explore sacred places, seek blessings, and plan your spiritual visits to temples across the world.
                        </p>
                    </div>



                    <FilterBar
                        onSearch={setSearchQuery}
                        onStateChange={handleStateChange}
                        onInternationalChange={handleInternationalChange}
                        states={states}
                        internationalLocations={internationalLocations}
                        placeholder="Search temples..."
                        selectedState={selectedState}
                        selectedInternational={selectedInternational}
                        className="max-w-4xl mx-auto mb-12"
                    />

                    {/* Temples Grid */}
                    {loading && <div className="text-center py-12">Loading temples...</div>}

                    {error && (
                        <div className="text-center py-12 text-red-500 bg-red-50 rounded-lg max-w-2xl mx-auto mb-8">
                            <h3 className="text-lg font-bold mb-2">Something went wrong</h3>
                            <p>{error}</p>
                            <p className="text-sm mt-2 text-muted-foreground">Check console for details.</p>
                        </div>
                    )}

                    {!loading && !error && filteredTemples.length === 0 && (
                        <div className="text-center py-12 text-muted-foreground">
                            No temples found matching your criteria.
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredTemples.map((temple: any) => (
                            <div key={temple.id}>
                                <TempleCard temple={temple} />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
            <FeedbackFloating />
        </div>
    );
};

export default Temples;
