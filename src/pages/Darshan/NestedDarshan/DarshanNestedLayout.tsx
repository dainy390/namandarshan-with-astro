import { useState, useEffect } from "react";
import { useParams, useSearchParams, Outlet, NavLink, Link } from "react-router-dom";
import { getApiUrl } from "@/utils/api";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import BookingModal from "@/components/booking/BookingModal";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import LinkifiedText from "@/components/common/LinkifiedText";
import { ShareGuide } from "@/components/common/ShareGuide";
import InternationalTemple from "../../InternationalTemple";

const DarshanNestedLayout = () => {
    const { slug: urlSlug } = useParams();
    const slug = urlSlug || "somnath-jyotirlinga-vipdarshan";
    const [searchParams, setSearchParams] = useSearchParams();
    const [temple, setTemple] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const formId = `booking-darshan-${slug}`;
    const [isBookingOpen, setIsBookingOpen] = useState(searchParams.get("form") === formId);

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

    useEffect(() => {
        if (!slug) return;
        fetch(getApiUrl(`/api/darshan/${slug}`))
            .then(res => res.json())
            .then(data => {
                if (data.message || !data.name) {
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

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    if (!temple) return <div className="min-h-screen flex items-center justify-center">Temple not found</div>;

    const isInternational = temple.seoKeywords?.toLowerCase().includes("international") ||
        temple.category === "International";

    if (isInternational) {
        return <InternationalTemple initialData={temple} />;
    }

    const fixCase = (text: string) => text ? text.replace(/jyotirlinga/gi, 'Jyotirlinga') : text;

    let pageTitle = `${temple?.name || "Temple"} Darshan Assistance`;
    if (slug?.includes('ram-mandir')) {
        pageTitle = "Ayodhya Ram Mandir Darshan Assistance";
    } else if (slug?.includes('somnath-jyotirlinga')) {
        pageTitle = "Somnath Temple Darshan Assistance Jyotirlinga";
    }

    const tabs = [
        { name: "Temple", path: "temple" },
        { name: "Darshan", path: "darshan" },
        { name: "Puja", path: "puja" },
        { name: "Chadwa", path: "chadwa" },
        { name: "Prasadam", path: "prasadam" },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <SEO
                title={pageTitle}
                description={fixCase(temple?.seoDescription) || `${(fixCase(temple?.description) || "").substring(0, 150)}...`}
                keywords={temple?.seoKeywords || ["Darshan Assistance", temple?.name || "Temple", temple?.location || "India", "Temple Darshan Guide", "Online Assistance"]}
                image={temple?.image || ""}
            />
            <Header />

            <div
                className="container mx-auto px-6 md:px-16 pb-12"
                style={{ paddingTop: "calc(var(--header-height, 140px) + 24px)" }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative group">
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                            <img
                                src={temple.image || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"}
                                alt={`${temple.name} - ${temple.location}. View from the front Entrance.`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl hidden md:block">
                            <div className="flex items-center gap-3 text-orange-600 font-bold">
                                <MapPin className="w-5 h-5" />
                                <span>{temple.location || "India"}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 md:space-y-8">
                        <div className="bg-orange-100/50 text-orange-700 px-4 py-1 rounded-full text-sm font-bold inline-flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {temple.location || "India"}
                        </div>

                        <div>
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                {pageTitle}
                            </h1>
                        </div>

                        <LinkifiedText
                            text={fixCase(temple.description)}
                            className="text-lg text-muted-foreground leading-relaxed"
                        />

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

                        <p className="text-gray-600 italic">Plan your darshan in advance.</p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                className="w-full md:w-auto px-6 py-4 text-lg font-bold bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-xl transition-all rounded-xl h-auto whitespace-normal break-words"
                                onClick={handleOpen}
                            >
                                Request Darshan Assistance
                            </Button>
                            <Link to="/yatra" className="w-full md:w-auto">
                                <Button
                                    className="w-full px-6 py-4 text-lg font-bold bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all rounded-xl h-auto whitespace-normal break-words"
                                >
                                    Book Full Package
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <ShareGuide className="md:sticky md:top-36" />
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm mb-12">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex justify-between items-center text-sm font-bold text-stone-500 overflow-x-auto whitespace-nowrap gap-6 no-scrollbar pt-3">
                        {tabs.map((tab) => (
                            <NavLink
                                key={tab.name}
                                to={tab.path}
                                className={({ isActive }) =>
                                    `transition-all duration-200 flex-shrink-0 pb-3 border-b-2 cursor-pointer ${isActive
                                        ? "text-saffron border-saffron font-extrabold"
                                        : "text-stone-500 border-transparent hover:text-saffron"
                                    }`
                                }
                            >
                                {tab.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>

            <main className="flex-grow container mx-auto px-6 md:px-16 py-8 md:py-16">
                <Outlet context={{ temple, fixCase }} />
            </main>

            <Footer />

            <BookingModal
                isOpen={isBookingOpen}
                onClose={handleClose}
                title={temple?.name}
                type="darshan"
            />
        </div>
    );
};

export default DarshanNestedLayout;
