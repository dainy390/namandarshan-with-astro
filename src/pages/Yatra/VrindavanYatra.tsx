import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Star, Check, ArrowRight, ShieldCheck, Phone, Clock, CheckCircle2, Home, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import BookingModal from "@/components/booking/BookingModal";
import { ShareGuide } from "@/components/common/ShareGuide";

const VrindavanYatra = () => {
    const packages = [
        {
            title: "The Divine Express",
            duration: "1 Night / 2 Days",
            highlights: [
                "Day 1: Banke Bihari, Radha Vallabh, and Prem Mandir.",
                "Day 2: ISKCON Aarti, Seva Kunj, and Loi Bazaar shopping."
            ]
        },
        {
            title: "The Soulful Escape",
            duration: "2 Nights / 3 Days",
            highlights: [
                "Day 1: Banke Bihari, Radha Raman, and Prem Mandir Light Show.",
                "Day 2: Nidhivan, ISKCON, and Keshi Ghat Boat Ride.",
                "Day 3: Mathura Janmabhoomi and Dwarkadhish Temple."
            ]
        }
    ];

    const [searchParams, setSearchParams] = useSearchParams();

    const formId = "yatra-booking";
    const isBookingOpen = searchParams.get("form") === formId;
    const selectedPackage = searchParams.get("package") || "";

    const handleBooking = (packageName: string) => {
        setSearchParams(prev => {
            const newParams = new URLSearchParams(prev);
            newParams.set("form", formId);
            newParams.set("package", packageName);
            return newParams;
        }, { replace: false });
    };

    const handleClose = () => {
        setSearchParams(prev => {
            const newParams = new URLSearchParams(prev);
            newParams.delete("form");
            newParams.delete("package");
            return newParams;
        }, { replace: true });
    };

    return (
        <div className="min-h-screen flex flex-col bg-stone-50">
            <BookingModal
                isOpen={isBookingOpen}
                onClose={handleClose}
                title={selectedPackage}
                type="yatra"
                serviceName={selectedPackage}
            />
            <SEO
                title="Vrindavan Mathura Yatra Packages - Krishna Janmabhoomi & Banke Bihari"
                description="Immerse yourself in the divine love of Radha Krishna with our Vrindavan Mathura Yatra. Visit Krishna Janmabhoomi, Banke Bihari Temple, Prem Mandir, and Nidhivan. Package includes guided parikrama of Govardhan and comfortable stay."
                keywords={[
                    "Mathura Vrindavan tour package from Delhi",
                    "Vrindavan 1 day tour package",
                    "Banke Bihari Guided Darshan Assistance",
                    "Prem Mandir light show timing",
                    "Govardhan Parikrama tour",
                    "Barsana Nandgaon tour"
                ]}
            />
            <Header />
            <main className="flex-grow pt-40 md:pt-48 lg:pt-52">
                {/* Hero Section */}
                <div className="relative h-[400px] md:h-[500px] w-full">
                    <img
                        src="/assets/vrindavan_4k.png"
                        alt="Vrindavan Yatra"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-4">
                        <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Vrindavan Yatra</h1>
                        <p className="text-xl md:text-2xl font-light max-w-2xl drop-shadow-md">
                            Experience the divine love of Radha and Krishna.
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-4 pt-8 max-w-5xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Link to="/" className="hover:text-orange-600 flex items-center gap-1">
                                <Home className="w-4 h-4" /> Home
                            </Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-orange-600 font-medium">Vrindavan Yatra</span>
                        </div>
                        <ShareGuide
                            pageTitle="Vrindavan Yatra"
                            description="Immerse yourself in the divine love of Radha Krishna with our Vrindavan Mathura Yatra. Visit Krishna Janmabhoomi, Banke Bihari Temple, Prem Mandir, and Nidhivan."
                        />
                    </div>
                </div>

                {/* Overview Section */}
                <div className="container mx-auto px-4 py-8 max-w-5xl">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-orange-100">
                        <h2 className="font-display text-3xl font-bold text-orange-900 mb-6">Overview</h2>
                        <p className="text-gray-700 leading-relaxed text-lg mb-6">
                            Vrindavan, located in the Mathura district of Uttar Pradesh, is one of the most sacred destinations in India. It is celebrated as the place where Lord Krishna spent his childhood and performed his divine Lilas (pastimes).
                        </p>
                        <p className="text-gray-700 leading-relaxed text-lg mb-6">
                            Vrindavan is not just a town but a center of Bhakti (Devotion). It is home to over 5,000 temples, ranging from ancient stone structures to grand modern marble complexes. The atmosphere is defined by the constant chanting of “Radhe Radhe,” the sound of temple bells, and the fragrance of incense.
                        </p>

                        <div className="bg-orange-50 p-6 rounded-xl mt-8">
                            <h3 className="font-bold text-xl text-orange-800 mb-3">Iconic Landmarks</h3>
                            <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                                <li className="flex gap-2">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0" />
                                    <span><strong>Banke Bihari Temple:</strong> The heart of Vrindavan.</span>
                                </li>
                                <li className="flex gap-2">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0" />
                                    <span><strong>Prem Mandir:</strong> Stunning white marble temple with light shows.</span>
                                </li>
                                <li className="flex gap-2">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0" />
                                    <span><strong>ISKCON:</strong> Known for its soul-stirring 24-hour Kirtans.</span>
                                </li>
                                <li className="flex gap-2">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0" />
                                    <span><strong>Nidhivan:</strong> Mystical forest of the Divine Raslila.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Packages Section */}
                <div className="bg-stone-100 py-16">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Available Packages</h2>
                            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {packages.map((pkg, index) => (
                                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
                                    <div className="bg-orange-600 p-4 text-white text-center">
                                        <h3 className="font-bold text-lg">{pkg.title}</h3>
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col">
                                        <div className="flex items-center gap-2 text-gray-500 mb-4 bg-stone-50 p-2 rounded-lg justify-center">
                                            <Clock className="w-4 h-4" />
                                            <span className="font-medium text-sm">{pkg.duration}</span>
                                        </div>

                                        <ul className="space-y-3 mb-8 flex-grow">
                                            {pkg.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex gap-3 text-sm text-gray-600">
                                                    <div className="flex-shrink-0 mt-0.5"><CheckCircle2 className="w-3 h-3 text-green-600" /></div>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <a
                                            href="tel:+919311973199"
                                            className="inline-flex items-center justify-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors mb-4"
                                        >
                                            <Phone className="w-5 h-5" />
                                            +9187969 73199
                                        </a>
                                        <Button onClick={() => handleBooking(pkg.title)} className="w-full bg-stone-900 hover:bg-stone-800 text-white font-bold py-4 mt-auto">
                                            Inquire Now
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* History Section */}
                <div className="container mx-auto px-4 py-16 max-w-4xl">
                    <h2 className="font-display text-3xl font-bold text-center text-gray-900 mb-8">History & Significance</h2>
                    <div className="space-y-6 text-gray-700 leading-relaxed bg-orange-50/30 p-8 rounded-2xl">
                        <p>
                            The history of Vrindavan is a fascinating journey from a forgotten, dense forest to the vibrant spiritual epicenter it is today. In the ancient Lila Era, this is where Lord Krishna performed his miracles.
                        </p>
                        <p>
                            Rediscovered in the 16th century by Sri Chaitanya Mahaprabhu and his disciples (the Six Goswamis), the lost sacred sites were identified and temples were established, laying the foundation for modern Vrindavan.
                        </p>
                    </div>

                    <div className="mt-12 text-center">
                        <h3 className="font-display text-2xl font-bold text-gray-800 mb-4">Experience divine ease with Guided Darshan Assistance</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                            A knowledgeable Pandit Ji will accompany you, guide you through the temple, and share insights about the temple's history and significance, prioritizing tranquility and reverence.
                        </p>
                        <Button onClick={() => handleBooking("Vrindavan General")} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-full shadow-lg">
                            Start Your Yatra
                        </Button>
                    </div>

                </div>

            </main>
            <Footer />
        </div>
    );
};

export default VrindavanYatra;
