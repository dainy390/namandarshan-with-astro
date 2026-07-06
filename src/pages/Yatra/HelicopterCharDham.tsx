import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { 
    Calendar, MapPin, Clock, CheckCircle2, Home, ChevronRight, 
    Wind, ShieldCheck, Star, Coffee, Hotel, Plane,
    Info, Thermometer, Briefcase, Sun, Phone, Heart, Zap, ArrowRight, Users
} from "lucide-react";
import { useSearchParams, Link } from "react-router-dom";
import BookingModal from "@/components/booking/BookingModal";
import { ShareGuide } from "@/components/common/ShareGuide";
import { motion } from "framer-motion";

const HelicopterCharDham = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const formId = "helicopter-yatra-booking";
    const isBookingOpen = searchParams.get("form") === formId;
    const selectedPackage = "Char Dham Yatra (Helicopter Dehradun)";

    const handleBooking = () => {
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

    const itinerary = [
        {
            day: "Day 1",
            title: "Arrival in Dehradun – Relaxation & Orientation",
            description: "Your spiritual journey begins with a warm welcome in Dehradun. After check-in at a luxury hotel, you can relax and acclimatize. In the evening, a comprehensive briefing session covers flight schedules, safety guidelines, and weather considerations.",
            highlights: ["Briefing session on flight schedules", "Safety guidelines and weather orientation", "Complimentary duffel bag provided (5kg limit)"],
            icon: <Home className="w-6 h-6" />,
            link: "/temples"
        },
        {
            day: "Day 2",
            title: "Yamunotri Dham – The Beginning of Divinity",
            description: "Fly to Kharsali and proceed to Yamunotri Temple via palki/pony services. Visit hot water springs (Surya Kund) and experience the peaceful temple environment at the spiritual beginning of your yatra.",
            highlights: ["5 km route covered via palki/pony", "Visit hot water springs (Surya Kund)", "Experience peaceful temple environment"],
            icon: <Wind className="w-6 h-6" />,
            link: "/temples/yamunotri-temple"
        },
        {
            day: "Day 3",
            title: "Gangotri Dham – Origin of the Sacred Ganga",
            description: "Travel to Harsil and then to Gangotri Temple. Enjoy a scenic drive through forests and rivers before reaching the origin of Maa Ganga for a deep spiritual connection.",
            highlights: ["Darshan at the origin of Maa Ganga", "Relaxation in serene Harsil Valley", "Scenic drive through forests and rivers"],
            icon: <Wind className="w-6 h-6" />,
            link: "/temples/gangotri-temple"
        },
        {
            day: "Day 4",
            title: "Kedarnath Dham – The Spiritual Peak",
            description: "Fly to Sersi and take a shuttle to Kedarnath Temple, one of the 12 Jyotirlingas of Lord Shiva. Enjoy Guided Darshan Assistance for an uninterrupted spiritual experience surrounded by dramatic Himalayan peaks.",
            highlights: ["Guided Darshan Assistance for uninterrupted experience", "One of the 12 Jyotirlingas of Lord Shiva", "Surrounded by dramatic Himalayan peaks"],
            icon: <Wind className="w-6 h-6" />,
            link: "/temples/kedarnath-temple"
        },
        {
            day: "Day 5",
            title: "Badrinath Dham – Completion of the Yatra",
            description: "Visit Badrinath Temple, dedicated to Lord Vishnu and located along the Alaknanda River. This marks the completion of the Char Dham Yatra, bringing a sense of fulfillment and gratitude.",
            highlights: ["Dedicated to Lord Vishnu", "Located along the Alaknanda River", "Fulfillment and gratitude"],
            icon: <Wind className="w-6 h-6" />,
            link: "/temples/badrinath-temple"
        },
        {
            day: "Day 6",
            title: "Departure – Return with Blessings",
            description: "After breakfast, depart from Dehradun. Though the journey ends physically, the spiritual impact stays with you forever. Return with a heart full of divine blessings.",
            highlights: ["Return flight to Dehradun", "Departure with spiritual blessings", "Seamless drop-off"],
            icon: <Plane className="w-6 h-6" />,
            link: "/yatra"
        }
    ];

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
                title="Char Dham Yatra by Helicopter from Dehradun | Premium Tour 2026"
                description="Request Char Dham Yatra by Helicopter from Dehradun. Guided Darshan Assistance, premium stays & seamless travel to Yamunotri, Gangotri, Kedarnath & Badrinath with Naman Darshan."
                keywords={[
                    "Char Dham Yatra by Helicopter",
                    "Kedarnath Helicopter Booking",
                    "Char Dham Tour Package 2026",
                    "Char Dham Luxury Tour",
                    "Badrinath Helicopter Package",
                    "Uttarakhand Char Dham Yatra",
                    "Guided Darshan Assistance Char Dham"
                ]}
            />
            <Header />

            <main className="flex-grow pt-40 md:pt-48 lg:pt-52">
                {/* Hero Section */}
                <div className="relative h-[400px] md:h-[500px] w-full">
                    <img
                        src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop"
                        alt="char dham helicopter tour aerial view himalayas"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-4">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-display text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
                        >
                            Char Dham Yatra by Helicopter from Dehradun
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl font-light max-w-2xl drop-shadow-md"
                        >
                            Experience a Premium Spiritual Journey 2026.
                        </motion.p>
                    </div>
                </div>

                <div className="container mx-auto px-4 pt-8 max-w-5xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Link to="/" className="hover:text-orange-600 flex items-center gap-1">
                                <Home className="w-4 h-4" /> Home
                            </Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link to="/yatra" className="hover:text-orange-600">Yatra</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-orange-600 font-medium">Helicopter Char Dham</span>
                        </div>
                        <ShareGuide />
                    </div>
                </div>

                {/* Tour Overview Section */}
                <section id="tour-overview" className="container mx-auto px-4 py-8 max-w-5xl">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-orange-100">
                        <h2 className="font-display text-3xl font-bold text-orange-900 mb-6">Tour Overview</h2>
                        <p className="text-gray-700 leading-relaxed text-lg mb-6">
                            The Char Dham Yatra by Helicopter is one of the most sought-after spiritual journeys in India, offering a perfect blend of devotion, comfort, and efficiency. Covering the four sacred shrines—Yamunotri Temple, Gangotri Temple, Kedarnath Temple, and Badrinath Temple—this luxury pilgrimage allows you to experience divine bliss without the physical challenges of traditional travel.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-lg mb-6">
                            Unlike rushed itineraries, this journey is designed to be peaceful and immersive, allowing you to absorb the divine energy at every destination effortlesly over six days.
                        </p>

                        <div className="bg-orange-50 p-6 rounded-xl mt-8">
                            <h2 className="font-bold text-xl text-orange-800 mb-4">Why Choose Char Dham Yatra by Helicopter?</h2>
                            <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                                <li className="flex gap-2">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0" />
                                    <span><strong>Save Time:</strong> Quick helicopter transfers between dhams.</span>
                                </li>
                                <li className="flex gap-2">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0" />
                                    <span><strong>Aerial Views:</strong> Enjoy breathtaking aerial views of the Himalayas.</span>
                                </li>
                                <li className="flex gap-2">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0" />
                                    <span><strong>Guided Darshan Assistance:</strong> Experience Guided Darshan Assistance with a knowledgeable Pandit Ji.</span>
                                </li>
                                <li className="flex gap-2">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0" />
                                    <span><strong>Senior Citizen Friendly:</strong> Travel comfortably, especially ideal for senior citizens.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Day-Wise Itinerary Section */}
                <section id="day-wise-itinerary" className="bg-stone-100 py-16">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Day-Wise Itinerary</h2>
                            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full" />
                        </div>

                        <div className="space-y-8">
                            {itinerary.map((day, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl overflow-hidden shadow-md border border-stone-200 flex flex-col md:flex-row"
                                >
                                    <div className="bg-orange-600 md:w-24 flex flex-col items-center justify-center text-white p-4">
                                        <span className="text-sm font-bold uppercase">{day.day.split(' ')[0]}</span>
                                        <span className="text-3xl font-bold">{day.day.split(' ')[1]}</span>
                                    </div>
                                    <div className="p-6 flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{day.title}</h3>
                                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{day.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {day.highlights.map((h, i) => (
                                                <span key={i} className="flex items-center gap-1 text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded-md border border-orange-100">
                                                    <CheckCircle2 className="w-3 h-3" /> {h}
                                                </span>
                                            ))}
                                        </div>
                                        <Link to={day.link} className="text-sm text-orange-600 hover:underline font-semibold flex items-center gap-1">
                                            Learn more about this destination <ChevronRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Inclusions Section */}
                <section id="inclusions" className="container mx-auto px-4 py-16 max-w-5xl">
                    <h2 className="font-display text-3xl font-bold text-gray-900 mb-8 text-center">What’s Included in Char Dham Helicopter Package</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Helicopter transfers", desc: "Covering all four dhams from Dehradun", icon: <Plane className="w-6 h-6 text-orange-600" /> },
                            { title: "Guided Darshan Assistance", desc: "Pandit Ji accompaniment at all temples", icon: <Star className="w-6 h-6 text-orange-600" /> },
                            { title: "Luxury hotel stay", desc: "Premium accommodations", icon: <Hotel className="w-6 h-6 text-orange-600" /> },
                            { title: "Vegetarian meals", desc: "Breakfast, lunch, and dinner included", icon: <Coffee className="w-6 h-6 text-orange-600" /> },
                            { title: "Ground support", desc: "Dedicated staff assistance", icon: <Users className="w-6 h-6 text-orange-600" /> },
                            { title: "Comfortable arrangements", desc: "Ideal for senior citizens", icon: <CheckCircle2 className="w-6 h-6 text-orange-600" /> }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Travel Guidelines Section */}
                <section id="travel-guidelines" className="bg-orange-50 py-16 border-y border-orange-100">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h2 className="font-display text-3xl font-bold text-orange-900 mb-8 text-center">Travel Guidelines</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
                                <div className="flex gap-4">
                                    <Thermometer className="text-orange-600 w-6 h-6 shrink-0" />
                                    <div>
                                        <p className="font-bold text-gray-900">Medical Fitness</p>
                                        <p className="text-gray-600 text-sm">Medical fitness is recommended due to high altitude travel.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Briefcase className="text-orange-600 w-6 h-6 shrink-0" />
                                    <div>
                                        <p className="font-bold text-gray-900">Baggage Limit</p>
                                        <p className="text-gray-600 text-sm">Strict baggage limit of 5 kg per person.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
                                <div className="flex gap-4">
                                    <Wind className="text-orange-600 w-6 h-6 shrink-0" />
                                    <div>
                                        <p className="font-bold text-gray-900">Weather Conditions</p>
                                        <p className="text-gray-600 text-sm">Weather conditions may affect helicopter schedules.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <ShieldCheck className="text-orange-600 w-6 h-6 shrink-0" />
                                    <div>
                                        <p className="font-bold text-gray-900">Safety Guidelines</p>
                                        <p className="text-gray-600 text-sm">Follow all aviation and safety guidelines strictly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Best Time Section - Standalone Block */}
                <section id="best-time" className="container mx-auto px-4 py-20 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-4xl font-bold text-gray-900">Best Time for Char Dham Yatra 2026</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">The ideal time for Uttarakhand Char Dham Yatra depends on weather clarity and scenic beauty.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 rounded-3xl shadow-xl border border-orange-50 text-center group hover:border-orange-500 transition-colors">
                            <Sun className="w-12 h-12 text-orange-500 mx-auto mb-6" />
                            <h3 className="font-bold text-2xl text-gray-900 mb-4">May to June</h3>
                            <p className="text-gray-600">Peak season with pleasant weather and clear skies, ideal for early darshan.</p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-xl border border-orange-50 text-center group hover:border-orange-500 transition-colors">
                            <Calendar className="w-12 h-12 text-orange-500 mx-auto mb-6" />
                            <h3 className="font-bold text-2xl text-gray-900 mb-4">September to October</h3>
                            <p className="text-gray-600">Post-monsoon season offering stunning Himalayan clarity and lush scenic beauty.</p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Naman Darshan Section - Standalone Block */}
                <section id="why-choose-us" className="bg-stone-900 text-white py-24">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl font-bold">Why Choose Naman Darshan for Char Dham Yatra?</h2>
                            <p className="text-stone-400 mt-4 max-w-2xl mx-auto">Experience devotion without limits with India's most trusted spiritual travel partner.</p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { title: "Reliability & Trust", text: "Years of expertise in spiritual logistics.", icon: <ShieldCheck className="w-8 h-8 text-orange-500" /> },
                                { title: "Luxury & Comfort", text: "Premium stays and seamless transport.", icon: <Hotel className="w-8 h-8 text-orange-500" /> },
                                { title: "Seamless Travel", text: "End-to-end support for senior citizens.", icon: <Zap className="w-8 h-8 text-orange-500" /> },
                                { title: "Deep Fulfillment", text: "Focus entirely on your divine connection.", icon: <Heart className="w-8 h-8 text-orange-500" /> }
                            ].map((item, i) => (
                                <div key={i} className="text-center p-6 bg-stone-800/50 rounded-2xl border border-stone-700">
                                    <div className="flex justify-center mb-4">{item.icon}</div>
                                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-stone-400 text-sm">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQs Section */}
                <section id="faqs" className="container mx-auto px-4 py-20 max-w-4xl">
                    <h2 className="font-display text-3xl font-bold text-center text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "What is the duration of Char Dham Yatra by Helicopter?", a: "The Char Dham Helicopter Tour usually takes 5–6 days starting from Dehradun." },
                            { q: "Is Guided Darshan Assistance included in the helicopter package?", a: "Yes, Guided Darshan Assistance is included at all four dhams as part of our premium spiritual package." },
                            { q: "What is the baggage limit for helicopter यात्रा?", a: "Each passenger is allowed up to 5 kg of luggage in the provided duffel bags." },
                            { q: "Is this yatra suitable for senior citizens?", a: "Yes, it is ideal for senior citizens as it avoids long road journeys and steep, physically demanding treks." },
                            { q: "What is the best time for Char Dham Yatra?", a: "May–June and September–October are the best months for pleasant weather and Himalayan clarity." }
                        ].map((faq, i) => (
                            <details key={i} className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-gray-900">
                                    {faq.q}
                                    <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                                </summary>
                                <div className="p-6 pt-0 text-gray-600 border-t border-stone-50">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </section>

                {/* Booking CTA Section - Standalone named block */}
                <section id="booking-cta" className="bg-orange-600 py-24 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <img src="https://www.transparenttextures.com/patterns/mandala.png" alt="pattern" className="w-full h-full" />
                    </div>
                    <div className="container mx-auto px-4 text-center relative z-10 text-white">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 uppercase tracking-wide">Request Your Char Dham Helicopter Tour Today</h2>
                        <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
                            Experience devotion without limits in 2026. Travel in the most comfortable, efficient, and spiritually enriching way possible.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Button 
                                onClick={handleBooking}
                                className="bg-white text-orange-600 hover:bg-stone-100 px-12 py-8 text-xl font-bold rounded-full shadow-2xl transition-all transform hover:scale-105"
                            >
                                Start Your Divine Journey
                            </Button>
                            <Link to="/puja" className="text-white hover:underline font-bold flex items-center gap-2">
                                Browse Puja Packages <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Internal Linking Footer */}
                <div className="container mx-auto px-4 py-12 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
                    <Link to="/temples/kedarnath-temple" className="hover:text-orange-600 font-medium">Kedarnath Temple</Link>
                    <Link to="/temples/badrinath-temple" className="hover:text-orange-600 font-medium">Badrinath Temple</Link>
                    <Link to="/temples/gangotri-temple" className="hover:text-orange-600 font-medium">Gangotri Temple</Link>
                    <Link to="/temples/yamunotri-temple" className="hover:text-orange-600 font-medium">Yamunotri Temple</Link>
                    <Link to="/yatra" className="hover:text-orange-600 font-medium">More Yatra Packages</Link>
                    <Link to="/puja" className="hover:text-orange-600 font-medium">Special Puja Services</Link>
                </div>
                
                <div className="container mx-auto px-4 py-8 flex justify-center">
                    <ShareGuide />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default HelicopterCharDham;
