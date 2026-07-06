import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import YatraPackageCard from "./Yatra/components/YatraPackageCard";
import FilterBar from "@/components/common/FilterBar";
import { ShareGuide } from "@/components/common/ShareGuide";
import SEO from "@/components/SEO";

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

const ExclusivePackages = () => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [selectedState, setSelectedState] = React.useState("all");

    // Extract unique states from packages
    const states = Array.from(new Set(yatraPackages.map(pkg => pkg.location.split(',')[0].trim()))); // Simple extraction assuming "City, State" or just "State"

    const filteredPackages = yatraPackages.filter(pkg => {
        const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pkg.location.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesState = selectedState === "all" || pkg.location.includes(selectedState);

        return matchesSearch && matchesState;
    });

    return (
        <div className="min-h-screen flex flex-col bg-stone-50">
            <Header />
            <SEO />
            <main className="flex-grow pt-40 md:pt-48 lg:pt-52 pb-16">
                <div className="container mx-auto px-4">
                    {/* Breadcrumbs and Share */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-stone-100 mb-8">
                        <nav className="flex items-center space-x-2 text-sm text-stone-500">
                            <a href="/" className="hover:text-primary transition-colors">Home</a>
                            <span>/</span>
                            <span className="text-primary font-medium">Exclusive Packages</span>
                        </nav>
                        <ShareGuide />
                    </div>
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                            Exclusive Yatra Packages
                        </h1>
                        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                            Experience the divine with our premium, all-inclusive spiritual journeys.
                            From Guided Darshan Assistance to premium accommodation, we handle every detail.
                        </p>
                        <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mt-8 rounded-full" />
                    </div>

                    {/* Filter Bar */}
                    <FilterBar
                        onSearch={setSearchQuery}
                        onStateChange={setSelectedState}
                        states={states}
                        placeholder="Search packages..."
                        selectedState={selectedState}
                    />

                    {/* Packages Grid */}
                    {filteredPackages.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPackages.map((pkg, index) => (
                                <div key={index} className="h-full">
                                    <YatraPackageCard {...pkg} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 text-stone-500">
                            No packages found matching your criteria.
                        </div>
                    )}

                    {/* CTA Section */}
                    <div className="mt-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10">
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                                need a Custom Itinerary?
                            </h2>
                            <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-8">
                                Our spiritual travel experts can help design a yatra that fits your schedule and preferences perfectly.
                            </p>
                            <a
                                href="tel:+919311973199"
                                className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-orange-50 transition-all transform hover:-translate-y-1"
                            >
                                <span className="text-xl">📞 +9187969 73199</span>
                            </a>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ExclusivePackages;
