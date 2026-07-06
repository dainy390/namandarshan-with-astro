import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getApiUrl } from "@/utils/api";

const Consultation = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        whatsappNumber: "",
        email: "",
        preferredDate: "",
        specialRequest: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const bookingData = {
            fullName: formData.fullName,
            whatsappNumber: formData.whatsappNumber,
            email: formData.email,
            preferredDate: formData.preferredDate,
            specialRequest: formData.specialRequest
        };

        // Log the properly formatted JSON as requested
        console.log("Submitting Consultation Data (Mock):", JSON.stringify(bookingData, null, 2));

        try {
            // Mocking the API response since no backend endpoint exists yet
            // This ensures the form works and provides feedback to the user
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Success handling
            toast.success("Consultation request submitted successfully!", {
                description: "Namaste! We will contact you shortly to confirm your session."
            });

            const message = `Namaste 🙏\n\nI just booked a Consultation using the form.\n\n*Name:* ${formData.fullName}\n*Date:* ${formData.preferredDate}\n*Email:* ${formData.email}\n*Request:* ${formData.specialRequest}\n\nPlease confirm my booking.`;
            const whatsappLink = `https://api.whatsapp.com/send/?phone=918796973199&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

            navigate("/thank-you", {
                state: { whatsappLink, returnUrl: "/blogs" },
                replace: true
            });
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Failed to submit consultation request.", {
                description: "Please check your connection and try again."
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Layout>
            <SEO
                title="Book Consultation | Naman Darshan"
                description="Connect with our experts for a detailed analysis of your spiritual journey."
            />
            <div className="container mx-auto px-4 py-8 md:py-12 flex justify-center items-center">
                <div className="w-full max-w-[500px] bg-white rounded-3xl overflow-hidden shadow-2xl relative">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 text-center relative text-white">
                        <h1 className="text-3xl md:text-4xl font-display font-bold mb-2 tracking-wide">
                            Namaste 🙏 नमस्ते
                        </h1>
                        <p className="text-orange-50 font-medium text-sm md:text-base tracking-wide">
                            Secure your visit • अपनी यात्रा सुरक्षित करें
                        </p>
                        <button
                            onClick={() => navigate(-1)}
                            className="absolute top-4 right-4 text-white hover:text-orange-100 transition-colors"
                        >
                            <X className="w-6 h-6" />
                            <span className="sr-only">Close</span>
                        </button>
                    </div>

                    {/* Form Content */}
                    <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <label htmlFor="name" className="text-sm font-semibold text-stone-600 ml-1">Full Name / पूरा नाम *</label>
                                <Input
                                    id="name"
                                    placeholder="Your Name"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    className="h-12 border-stone-200 rounded-xl focus:border-orange-500 focus:ring-orange-500 text-base"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="whatsapp" className="text-sm font-semibold text-stone-600 ml-1">Whatsapp Number / व्हाट्सएप नंबर *</label>
                                <Input
                                    id="whatsapp"
                                    type="tel"
                                    placeholder="Contact Number"
                                    value={formData.whatsappNumber}
                                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                                    className="h-12 border-stone-200 rounded-xl focus:border-orange-500 focus:ring-orange-500 text-base"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="email" className="text-sm font-semibold text-stone-600 ml-1">Email / ईमेल *</label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="h-12 border-stone-200 rounded-xl focus:border-orange-500 focus:ring-orange-500 text-base"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="date" className="text-sm font-semibold text-stone-600 ml-1">Preferred Date / तिथि चुनें *</label>
                                <Input
                                    id="date"
                                    type="date"
                                    value={formData.preferredDate}
                                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                                    className={`h-12 border-stone-200 rounded-xl focus:border-orange-500 focus:ring-orange-500 text-base ${!formData.preferredDate ? 'text-stone-400' : 'text-stone-900'}`}
                                    required
                                />
                                <p className="text-[10px] text-stone-400 ml-2 mt-1 italic">Format: dd-mm-yyyy</p>
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="request" className="text-sm font-semibold text-stone-600 ml-1">Special Request / विशेष अनुरोध (Optional)</label>
                                <Textarea
                                    id="request"
                                    placeholder="Any specific requirements?"
                                    value={formData.specialRequest}
                                    onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                                    className="min-h-[100px] border-stone-200 rounded-xl focus:border-orange-500 focus:ring-orange-500 text-base resize-none p-4"
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold text-sm sm:text-base md:text-lg h-auto min-h-[3.5rem] py-3 px-4 rounded-2xl mt-4 transition-all duration-300 shadow-xl shadow-orange-200/50 transform hover:-translate-y-0.5 whitespace-normal leading-tight"
                        >
                            {isLoading ? "Submitting..." : "Confirm Consultation/ परामर्श की पुष्टि करें"}
                        </Button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Consultation;
