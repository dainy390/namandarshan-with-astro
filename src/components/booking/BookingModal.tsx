import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";


import { getApiUrl } from "@/utils/api";
import { useAuth } from "@/context/AuthContext";
import { useFormAbandonmentTracker } from "@/hooks/useFormAbandonmentTracker";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    type?: string; // 'general', 'yatra', 'darshan', 'temple', etc.
    serviceName?: string;
    serviceId?: string; // Slug for redirection
    initialRequest?: string;
}

const BookingModal = ({ isOpen, onClose, title, type = "general", serviceName, serviceId, initialRequest }: BookingModalProps) => {
    const { user } = useAuth();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        whatsapp: "",
        email: "",
        date: "",
        request: "",
        termsAccepted: true
    });


    const { markConverted } = useFormAbandonmentTracker({
        isOpen,
        formType: type,
        serviceName: serviceName || title,
        formData,
    });

    useEffect(() => {
        if (isOpen) {
            setFormData(prev => ({
                ...prev,
                name: user?.name || "",
                email: user?.email || "",
                // Pre-fill the specific request:
                // 1. Priority to initialRequest (from AI Yatra Planner)
                // 2. Default for Vedic Consultants
                request: initialRequest
                    ? initialRequest
                    : (serviceName && serviceName.startsWith("Consultation with")
                        ? `I would like to book a ${serviceName}.`
                        : "")
            }));
        }
    }, [isOpen, user, initialRequest]);

    const [legalDialog, setLegalDialog] = useState<"tc" | "privacy" | "disclaimer" | null>(null);
    const [hasReadTC, setHasReadTC] = useState(true);
    const [hasReadPrivacy, setHasReadPrivacy] = useState(true);

    useEffect(() => {
        if (legalDialog === "tc") setHasReadTC(true);
        if (legalDialog === "privacy") setHasReadPrivacy(true);
    }, [legalDialog]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const bookingData = {
            type,
            serviceId,
            serviceName: serviceName || title || "General Inquiry",
            userDetails: {
                name: formData.name,
                whatsapp: formData.whatsapp,
                email: formData.email
            },
            bookingDetails: {
                date: formData.date,
                message: formData.request
            },
            referredBy: localStorage.getItem("naman_referral_code") || undefined,
            source: localStorage.getItem("naman_referral_code") ? "referral" : "website"
        };

        console.log("[Referral Debug] Sending booking with data:", bookingData);

        try {
            const res = await fetch(getApiUrl("/api/bookings"), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bookingData)
            });

            if (res.ok) {
                markConverted();
                toast.success("Booking submitted successfully!", { description: "We will contact you shortly." });
                const message = `Namaste 🙏\n\nI just booked a service using the form.\n\n*Name:* ${formData.name}\n*Service:* ${serviceName || title || "General Inquiry"}\n*Date:* ${formData.date}\n*Email:* ${formData.email}\n*Request:* ${formData.request}\n\nPlease confirm my booking.`;
                const whatsappLink = `https://api.whatsapp.com/send/?phone=918796973199&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

                onClose();
                navigate("/thank-you", {
                    state: { whatsappLink, returnUrl: window.location.pathname },
                    replace: true
                });
                setFormData({ name: "", whatsapp: "", email: "", date: "", request: "", termsAccepted: true });

            } else {
                toast.error("Failed to submit booking.", { description: "Please try again." });
            }
        } catch (error) {
            console.error("Booking error:", error);
            toast.error("An error occurred.", { description: "Please try again." });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent className="sm:max-w-[500px] p-0 border-none bg-transparent shadow-none [&>button]:hidden">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[95vh] flex flex-col">
                        {/* Header */}
                        <div className="bg-[#FF8C00] p-6 text-center relative flex-shrink-0">
                            <DialogTitle className="text-3xl font-display font-bold text-white mb-1 tracking-wide">
                                Namaste 🙏 नमस्ते
                            </DialogTitle>
                            <DialogDescription className="text-white/90 font-medium text-sm tracking-wide">
                                Secure your visit • अपनी यात्रा सुरक्षित करें
                            </DialogDescription>
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                            >
                                <span className="sr-only">Close</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-8 space-y-6 overflow-y-auto flex-grow custom-scrollbar">
                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <Label htmlFor="name" className="text-[11px] font-bold text-orange-800 uppercase tracking-wider ml-1">Full Name / पूरा नाम*</Label>
                                    <Input
                                        id="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="h-12 border-orange-200 rounded-xl focus:border-orange-500 focus:ring-orange-500 text-base bg-orange-50/30"
                                        required
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <Label htmlFor="whatsapp" className="text-[11px] font-bold text-orange-800 uppercase tracking-wider ml-1">Whatsapp Number / व्हाट्सएप नंबर*</Label>
                                    <Input
                                        id="whatsapp"
                                        type="tel"
                                        placeholder="91XXXXXXXXXX"
                                        value={formData.whatsapp}
                                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                        className="h-12 border-orange-200 rounded-xl focus:border-orange-500 focus:ring-orange-500 text-base bg-orange-50/30"
                                        required
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <Label htmlFor="email" className="text-[11px] font-bold text-orange-800 uppercase tracking-wider ml-1">Email / ईमेल*</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="h-12 border-orange-200 rounded-xl focus:border-orange-500 focus:ring-orange-500 text-base bg-orange-50/30"
                                        required
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <Label htmlFor="date" className="text-[11px] font-bold text-orange-800 uppercase tracking-wider ml-1">Preferred Date / तिथि चुनें *</Label>
                                    <Input
                                        id="date"
                                        type="date"
                                        value={formData.date}
                                        onPointerDown={(e) => e.stopPropagation()}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        className={`h-12 border-orange-200 rounded-xl focus:border-orange-500 focus:ring-orange-500 text-base bg-orange-50/30 ${!formData.date ? 'text-gray-400' : 'text-gray-900'}`}
                                        required
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <Label htmlFor="request" className="text-[11px] font-bold text-orange-800 uppercase tracking-wider ml-1">Special Request / विशेष अनुरोध</Label>
                                    <Textarea
                                        id="request"
                                        placeholder="Any specific requirements?"
                                        value={formData.request}
                                        onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                                        className="min-h-[80px] border-orange-200 rounded-xl focus:border-orange-500 focus:ring-orange-500 text-base resize-none bg-orange-50/30"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-start space-x-3 group">
                                    <Checkbox
                                        id="terms"
                                        checked={formData.termsAccepted}
                                        onCheckedChange={(checked) =>
                                            setFormData({ ...formData, termsAccepted: checked === true })
                                        }
                                        className="mt-0.5 border-orange-300 data-[state=checked]:bg-[#B45309] data-[state=checked]:border-[#B45309]"
                                    />
                                    <Label
                                        htmlFor="terms"
                                        className="text-sm text-gray-600 cursor-pointer leading-tight font-medium"
                                    >
                                        I agree to the <span
                                            className="text-[#B45309] font-bold hover:underline"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setLegalDialog("tc");
                                            }}
                                        >Terms & Conditions</span>{type === "darshan" || type === "temple" ? ", " : " and "}<span
                                            className="text-[#B45309] font-bold hover:underline"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setLegalDialog("privacy");
                                            }}
                                        >Privacy Policy</span>{type === "darshan" || type === "temple" && (
                                            <>
                                                {" "}and <span
                                                    className="text-[#B45309] font-bold hover:underline"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        setLegalDialog("disclaimer");
                                                    }}
                                                >Disclaimer</span>
                                            </>
                                        )}.
                                    </Label>
                                </div>


                            </div>

                            <Button
                                type="submit"
                                disabled={isLoading || !formData.termsAccepted}
                                className={`w-full font-bold text-lg h-14 rounded-2xl transition-all duration-300 shadow-lg ${(!formData.termsAccepted)
                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    : "bg-[#B45309] hover:bg-[#92400e] text-white hover:scale-[1.02] active:scale-[0.98]"
                                    }`}
                            >
                                {isLoading ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Submitting...
                                    </div>
                                ) : (
                                    "Confirm Booking / बुकिंग की पुष्टि"
                                )}
                            </Button>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Legal Popup */}
            <Dialog open={!!legalDialog} onOpenChange={() => setLegalDialog(null)}>
                <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-hidden flex flex-col p-0 rounded-3xl border-none shadow-2xl [&>button]:hidden">
                    <div className="bg-[#B45309] p-6 text-white relative shrink-0">
                        <DialogTitle className="text-2xl font-display font-bold">
                            {legalDialog === "tc" ? "Terms & Conditions" : legalDialog === "privacy" ? "Privacy Policy" : "Disclaimer"}
                        </DialogTitle>
                        <button
                            onClick={() => setLegalDialog(null)}
                            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                    </div>
                    <div className="p-8 overflow-y-auto prose prose-stone prose-sm max-w-none">
                        {legalDialog === "tc" ? (
                            <div className="space-y-4">
                                <p>The travel site Naman Darshan, is offering pilgrimages packages for hassle free Sulabh Darshan. By accessing or using this site or using any of its services, you are agreed on the terms and conditions mentioned below.</p>
                                <h4 className="font-bold text-stone-900">1. Agreement</h4>
                                <p>While accessing, using, browsing or making a booking through Naman Darshan, users have to accept that they have agreed to the terms and conditions of our portal.</p>
                                <h4 className="font-bold text-stone-900">2. Booking Policy</h4>
                                <p>The total price displayed on the site includes all applicable government taxes. You are required to pay the entire amount prior to the confirmation of your booking.</p>
                                <h4 className="font-bold text-stone-900">3. Cancellation Policy</h4>
                                <p>For cancellations done prior to 30 days or more of the date of departure, 25% of the tour cost will be charged. Within 8 days, 100% cancellation charges apply.</p>
                                <h4 className="font-bold text-stone-900">4. Responsibility</h4>
                                <p>Namandarshan is responsible to complete your darshan but any loss of property or life during the travel or darshan is not the responsibility of Namandarshan.</p>
                            </div>
                        ) : legalDialog === "privacy" ? (
                            <div className="space-y-4">
                                <p>Naman Darshan understands your concern for privacy and makes sure of protecting the personal information of the customers.</p>
                                <h4 className="font-bold text-stone-900">Information We Collect:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Name and Contact Number</li>
                                    <li>Address and Email ID</li>
                                    <li>Age and Booking preferences</li>
                                </ul>
                                <h4 className="font-bold text-stone-900">How We Use Your Data:</h4>
                                <p>Information is shared with related service providers, including hotels, or bus services to provide reservation and booking to the customers.</p>
                                <h4 className="font-bold text-stone-900">Security:</h4>
                                <p>Sensitive information like Credit/Debit Card Details are mainly collected by the payment gateways and banks and not by Naman Darshan.</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <p>
                                    NamanDarshan provides professional pilgrimage assistance, ritual coordination, and darshan guidance services. Please be advised that NamanDarshan is an independent facilitator and is not affiliated with, nor a representative of, any temple trust or government authority.
                                    <br /><br />
                                    We do not offer, sell, or guarantee "VIP Darshan" tickets, priority access, or special entry passes. All darshan access, queue management, and ritual protocols are determined exclusively by the respective temple authorities and are subject to their rules, daily schedules, and real-time availability.
                                    <br /><br />
                                    Our services are limited to the professional facilitation, logistics, and guidance of your visit. By booking with us, you acknowledge that you are engaging a private service provider for assistance and coordination, not a direct provider of temple entry.
                                    <br /><br />
                                    NamanDarshan operates solely as a technology-enabled platform that facilitates connections between pilgrims and independent third-party service providers. We do not directly deliver, supervise, or control the services rendered by such individuals, and accordingly, NamanDarshan shall not be held responsible or liable for any act, omission, conduct, or outcome attributable to any third-party provider engaged through our platform.
                                </p>
                            </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};


export default BookingModal;
