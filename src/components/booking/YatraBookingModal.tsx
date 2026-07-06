import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Phone, Mail, Users, Calendar, MessageSquare } from "lucide-react";
import { getApiUrl } from "@/utils/api";
import { useAuth } from "@/context/AuthContext";
import { useFormAbandonmentTracker } from "@/hooks/useFormAbandonmentTracker";

interface YatraBookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    serviceName: string;
}

const YatraBookingModal = ({ isOpen, onClose, serviceName }: YatraBookingModalProps) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        people: "",
        travelDate: "",
        message: ""
    });

    const { markConverted } = useFormAbandonmentTracker({
        isOpen,
        formType: "yatra",
        serviceName,
        formData,
    });

    // Sync form data with user context
    useEffect(() => {
        if (isOpen && user) {
            setFormData(prev => ({
                ...prev,
                name: user.name || "",
                email: user.email || ""
            }));
        }
    }, [isOpen, user]);

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const bookingData = {
            type: "yatra",
            serviceName: serviceName,
            userDetails: {
                name: formData.name,
                mobile: formData.phone,
                email: formData.email
            },
            bookingDetails: {
                people: formData.people,
                travelDate: formData.travelDate,
                message: formData.message
            }
        };

        try {
            const res = await fetch(getApiUrl("/api/bookings"), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bookingData)
            });

            if (res.ok) {
                markConverted();
                toast.success("Yatra inquiry submitted!", { description: "Our travel expert will contact you shortly." });
                const message = `Namaste 🙏\n\nI am interested in *${serviceName}*.\n\n*Name:* ${formData.name}\n*People:* ${formData.people}\n*Date:* ${formData.travelDate}\n*Email:* ${formData.email}\n*Request:* ${formData.message}\n\nPlease provide more details.`;
                const whatsappLink = `https://api.whatsapp.com/send/?phone=918796973199&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

                onClose();
                navigate("/thank-you", {
                    state: { whatsappLink, returnUrl: window.location.pathname },
                    replace: true
                });
                setFormData({ name: "", phone: "", email: "", people: "", travelDate: "", message: "" });
            } else {
                toast.error("Failed to submit inquiry.", { description: "Please try again." });
            }
        } catch (error) {
            console.error("Booking error:", error);
            toast.error("An error occurred.", { description: "Please try again." });
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] p-0 border-none bg-transparent shadow-none [&>button]:hidden">
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                    {/* Header */}
                    <div className="bg-[#F0601A] p-6 text-center relative">
                        <DialogTitle className="text-2xl font-bold text-white mb-1">
                            Plan Your Sacred Journey
                        </DialogTitle>
                        <DialogDescription className="text-white/90 font-medium">
                            {serviceName}
                        </DialogDescription>
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                        >
                            <span className="sr-only">Close</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        <div className="relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500">
                                <User className="w-5 h-5" />
                            </div>
                            <Input
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                className="pl-10 h-11 border-orange-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <Input
                                    type="tel"
                                    placeholder="WhatsApp Number"
                                    value={formData.phone}
                                    onChange={(e) => handleChange("phone", e.target.value)}
                                    className="pl-10 h-11 border-orange-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <Input
                                    type="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={(e) => handleChange("email", e.target.value)}
                                    className="pl-10 h-11 border-orange-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500">
                                    <Users className="w-5 h-5" />
                                </div>
                                <Input
                                    type="number"
                                    placeholder="No. of People"
                                    min="1"
                                    value={formData.people}
                                    onChange={(e) => handleChange("people", e.target.value)}
                                    className="pl-10 h-11 border-orange-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg"
                                    required
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Travel Date</label>
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <Input
                                        type="date"
                                        value={formData.travelDate}
                                        onPointerDown={(e) => e.stopPropagation()}
                                        onChange={(e) => handleChange("travelDate", e.target.value)}
                                        className="pl-10 h-11 border-orange-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute left-3 top-3 text-orange-500">
                                <MessageSquare className="w-5 h-5" />
                            </div>
                            <Textarea
                                placeholder="Any special requirements or questions?"
                                value={formData.message}
                                onChange={(e) => handleChange("message", e.target.value)}
                                className="pl-10 min-h-[80px] border-orange-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg resize-none"
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#F0601A] hover:bg-[#d05015] text-white font-bold text-lg h-12 rounded-lg shadow-md hover:shadow-lg transition-all"
                        >
                            {isLoading ? "Submitting..." : "Send Inquiry"}
                        </Button>
                        <p className="text-xs text-center text-gray-500 mt-2">
                            Our team will customize the package for you.
                        </p>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default YatraBookingModal;
