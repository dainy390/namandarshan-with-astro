import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getApiUrl } from "@/utils/api";
import SEO from "@/components/SEO";
import TempleCard from "./components/TempleCard";
import { Sparkles, ArrowRight, PlusCircle, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewTemplesPage = () => {
    const [temples, setTemples] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(getApiUrl('/api/temples/new'))
            .then(res => {
                if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
                return res.json();
            })
            .then(data => {
                if (Array.isArray(data)) {
                    setTemples(data);
                } else {
                    setError("Unable to load the sacred wall at this time.");
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch new temples:", err);
                setError("Failed to load new temples. Please try again.");
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-[#FAFAFA] font-sans">
            <SEO
                title="New Sacred Spaces | Devotee Contributions"
                description="Explore the latest temples added by our global community of devotees. Every contribution helps millions find their path."
            />
            <Header />

            <main className="flex-grow pt-48 md:pt-56 pb-20">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    
                    {/* Hero Section */}
                    <div className="text-center mb-16 space-y-6">
                        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-orange-100/50 border border-orange-200 text-sacred-orange text-xs font-black uppercase tracking-[0.2em] animate-pulse">
                            <Sparkles className="w-4 h-4" />
                            Community Contributions
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold font-display text-gray-900 tracking-tight leading-none">
                            The Wall of <br/>
                            <span className="text-sacred-orange italic">New Beginnings</span>
                        </h1>
                        <p className="max-w-3xl mx-auto mt-8" style={{
                            fontFamily: "'Tangerine', sans-serif",
                            fontSize: '65px',
                            fontWeight: 800,
                            color: '#e0763f',
                            lineHeight: 1.1
                        }}>
                            Journey through the newest sacred spaces discovered and shared by our global parivaar.
                        </p>
                    </div>

                    {/* Stats / Ticker Row */}
                    <div className="bg-white rounded-[32px] border border-orange-100 shadow-sm p-8 mb-16 grid grid-cols-1 md:grid-cols-3 gap-10 divide-y md:divide-y-0 md:divide-x divide-orange-50">
                        <div className="flex flex-col items-center justify-center p-4">
                            <span className="text-4xl font-black text-sacred-orange">4M+</span>
                            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mt-1 text-center">Devoted Daily Visitors</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4">
                            <span className="text-4xl font-black text-gray-900">{temples.length}+</span>
                            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mt-1 text-center">Sacred Spaces Added Today</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4">
                            <Link to="/suggest-temple">
                                <Button className="bg-sacred-orange hover:bg-orange-600 text-white rounded-full px-8 h-12 font-bold shadow-lg shadow-orange-100 transition-all hover:scale-105 active:scale-95">
                                    <PlusCircle className="mr-2 w-5 h-5" />
                                    Suggest a Temple
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Temples Grid */}
                    {loading ? (
                        <div className="text-center py-32 space-y-4">
                            <div className="w-16 h-16 border-4 border-orange-200 border-t-sacred-orange rounded-full animate-spin mx-auto" />
                            <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em] font-sans">Connecting with Sacred Spaces...</p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-20 bg-red-50 rounded-[40px] border border-red-100 max-w-2xl mx-auto">
                            <p className="text-red-500 font-bold mb-4">{error}</p>
                            <Button onClick={() => window.location.reload()} variant="outline" className="rounded-full">Try Again</Button>
                        </div>
                    ) : temples.length === 0 ? (
                        <div className="text-center py-32 space-y-10">
                            <div className="w-32 h-32 bg-orange-50 rounded-full flex items-center justify-center mx-auto border-2 border-dashed border-orange-200">
                                <MapPin className="w-12 h-12 text-orange-200" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900">No New Temples Yet</h3>
                                <p className="text-muted-foreground max-w-sm mx-auto">Be the first to contribute a sacred space to the community and help fellow devotees.</p>
                            </div>
                            <Link to="/suggest-temple">
                                <Button className="h-16 px-12 bg-white border-2 border-sacred-orange text-sacred-orange text-xl font-black rounded-2xl hover:bg-orange-50 transition-all">
                                    🙏 Start Your Contribution
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {temples.map((temple: any) => (
                                <div key={temple.id} className="group relative">
                                    <TempleCard temple={temple} />
                                    {/* Contributor Badge */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-orange-50 flex items-center gap-2">
                                            <div className="w-5 h-5 rounded-full bg-sacred-orange flex items-center justify-center text-[10px] text-white font-bold">
                                                {temple.addedByName?.charAt(0) || "D"}
                                            </div>
                                            <span className="text-[10px] font-black text-gray-900 uppercase tracking-wider">
                                                {temple.addedByName || "Devotee"}
                                            </span>
                                        </div>
                                    </div>
                                    {/* Date Badge */}
                                    <div className="absolute top-4 right-4 z-20">
                                        <div className="bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full text-[9px] font-black text-white uppercase tracking-widest flex items-center gap-1.5 border border-white/20">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(temple.createdAt).toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Bottom CTA Section */}
                    {temples.length > 0 && (
                        <div className="mt-20 text-center py-20 bg-gradient-to-br from-sacred-orange to-[#F4A623] rounded-[64px] shadow-2xl shadow-orange-200 overflow-hidden relative">
                            <div className="absolute inset-0 opacity-10 pointer-events-none">
                                {[...Array(10)].map((_, i) => (
                                    <div key={i} className="absolute text-white text-8xl font-black animate-pulse" style={{ top: `${Math.random()*100}%`, left: `${Math.random()*100}%` }}>ॐ</div>
                                ))}
                            </div>
                            <div className="relative z-10 space-y-8">
                                <h2 className="text-4xl md:text-5xl font-bold text-white font-display">Expand the Sacred Map</h2>
                                <p className="text-orange-50 text-lg max-w-xl mx-auto font-medium">Every temple added guides a devotee to their destination. Join the mission of documenting every sacred corner.</p>
                                <Link to="/suggest-temple" className="inline-block px-12 py-5 bg-white text-sacred-orange rounded-full text-xl font-black shadow-xl hover:scale-110 active:scale-95 transition-all">
                                    Contribute a Temple Now
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default NewTemplesPage;
