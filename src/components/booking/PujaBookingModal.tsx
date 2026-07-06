import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { pujas } from "@/pages/Puja/data";
import { Loader2 } from "lucide-react";
import { getApiUrl } from "@/utils/api";
import { useAuth } from "@/context/AuthContext";
import { useFormAbandonmentTracker } from "@/hooks/useFormAbandonmentTracker";

interface PujaBookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    mode: "online" | "offline";
    bookingType?: "Individual" | "Family";
    pujaTitle?: string;
    serviceId?: string;
}

const PujaBookingModal = ({ isOpen, onClose, mode, bookingType = "Individual", pujaTitle, serviceId }: PujaBookingModalProps) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        date: "",
        persons: 1,
        message: ""
    });

    const { markConverted } = useFormAbandonmentTracker({
        isOpen,
        formType: "puja",
        serviceName: pujaTitle || `${bookingType} Puja (${mode})`,
        formData,
    });

    useEffect(() => {
        if (isOpen && user) {
            setFormData(prev => ({
                ...prev,
                name: user.name || "",
                email: user.email || ""
            }));
        }
    }, [isOpen, user]);

    // Define allowed pujas for each mode
    const onlinePujas = [
        "shodashopachar-puja-kedarnath",
        "bhimashankar-rudrabhishek-puja",
        "panchamrut-abhishek-bhimashankar",
        "mahapuja-bhimashankar"
    ];

    const offlinePujas = [
        "haridwar-navgrah-dosh-nivaran",
        "haridwar-maha-rudrabhishek",
        "mahapuja-bhimashankar"
    ];

    const allowedPujas = mode === "online" ? onlinePujas : offlinePujas;
    const filteredPujas = pujas.filter(p => allowedPujas.includes(p.id));



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const bookingData = {
            type: "puja",
            serviceId,
            serviceName: pujaTitle || "Puja Booking",
            userDetails: {
                name: formData.name,
                email: formData.email,
                whatsapp: formData.mobile,
            },
            bookingDetails: {
                darshanType: `${bookingType} Puja (${mode})`,
                date: formData.date,
                persons: formData.persons,
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
                toast.success("Puja Booking Submitted Successfully!");
                const message = `Namaste 🙏\n\nI want to book a Puja.\n\n*Name:* ${bookingData.userDetails.name}\n*Puja:* ${bookingData.serviceName}\n*Date:* ${bookingData.bookingDetails.date}\n*Persons:* ${bookingData.bookingDetails.persons}\n*Email:* ${bookingData.userDetails.email}\n*Purpose:* ${bookingData.bookingDetails.message}\n\nPlease guide me further.`;
                const whatsappLink = `https://api.whatsapp.com/send/?phone=918796973199&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

                onClose();
                navigate("/thank-you", {
                    state: { whatsappLink, returnUrl: window.location.pathname },
                    replace: true
                });
                setFormData({ name: "", email: "", mobile: "", date: "", persons: 1, message: "" });
            } else {
                toast.error("Failed to submit booking.");
            }
        } catch (error) {
            console.error("Booking error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Generate time slots (e.g., 6:00 AM to 8:00 PM)
    const timeSlots = Array.from({ length: 15 }, (_, i) => {
        const hour = i + 6;
        return `${hour < 10 ? '0' + hour : hour}:00`;
    });

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[600px] bg-white text-stone-900 border-none shadow-xl p-0 sm:rounded-3xl max-h-[95vh] flex flex-col overflow-hidden">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-stone-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-stone-100 data-[state=open]:text-stone-500 z-50"
                >
                    <span className="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-4 w-4"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
                <DialogHeader className="mb-0 p-6 pb-2 flex-shrink-0">
                    <DialogTitle className="font-display text-2xl md:text-3xl font-bold text-center text-[#991b1b]">
                        Book {bookingType} Puja
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="p-6 pt-2 space-y-6 overflow-y-auto flex-grow custom-scrollbar">
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Full Name */}
                            <div className="space-y-1.5">
                                <Label htmlFor="name" className="text-orange-800 font-bold uppercase text-[11px] tracking-wider ml-1">Full Name * / पूरा नाम</Label>
                                <Input
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="h-12 border-orange-200 focus:ring-orange-500 rounded-xl bg-orange-50/30"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-1.5">
                                <Label htmlFor="email" className="text-orange-800 font-bold uppercase text-[11px] tracking-wider ml-1">Email Address * / ईमेल</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="h-12 border-orange-200 focus:ring-orange-500 rounded-xl bg-orange-50/30"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* WhatsApp Number */}
                            <div className="space-y-1.5">
                                <Label htmlFor="mobile" className="text-orange-800 font-bold uppercase text-[11px] tracking-wider ml-1">WhatsApp Number * / व्हाट्सएप नंबर</Label>
                                <Input
                                    id="mobile"
                                    type="tel"
                                    required
                                    placeholder="91XXXXXXXXXX"
                                    value={formData.mobile}
                                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                    className="h-12 border-orange-200 focus:ring-orange-500 rounded-xl bg-orange-50/30"
                                />
                            </div>

                            {/* Preferred Date */}
                            <div className="space-y-1.5">
                                <Label htmlFor="date" className="text-orange-800 font-bold uppercase text-[11px] tracking-wider ml-1">Preferred Date * / तिथि चुनें</Label>
                                <Input
                                    id="date"
                                    type="date"
                                    required
                                    value={formData.date}
                                    onPointerDown={(e) => e.stopPropagation()}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    className="h-12 border-orange-200 focus:ring-orange-500 rounded-xl bg-orange-50/30"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* No. of Persons */}
                            <div className="space-y-1.5">
                                <Label htmlFor="persons" className="text-orange-800 font-bold uppercase text-[11px] tracking-wider ml-1">No. of Persons</Label>
                                <Input
                                    id="persons"
                                    type="number"
                                    min="1"
                                    value={formData.persons}
                                    onChange={(e) => setFormData({ ...formData, persons: parseInt(e.target.value) })}
                                    className="h-12 border-orange-200 focus:ring-orange-500 rounded-xl bg-orange-50/30"
                                />
                            </div>

                            {/* Mode (Readonly for info) */}
                            <div className="space-y-1.5 md:col-span-2">
                                <Label className="text-orange-800 font-bold uppercase text-[11px] tracking-wider ml-1">Puja Mode & Type</Label>
                                <div className="h-12 flex items-center px-4 bg-orange-100/50 border border-orange-200 rounded-xl text-orange-900 font-semibold text-sm">
                                    {mode.toUpperCase()} MODE • {bookingType.toUpperCase()}
                                </div>
                            </div>
                        </div>

                        {/* Gotra / Specific Prayer Purpose */}
                        <div className="space-y-1.5">
                            <Label htmlFor="purpose" className="text-orange-800 font-bold uppercase text-[11px] tracking-wider ml-1">Gotra / Specific Prayer Purpose / विशेष अनुरोध</Label>
                            <textarea
                                id="purpose"
                                className="flex min-h-[100px] w-full rounded-xl border border-orange-200 bg-orange-50/30 px-3 py-2 text-sm ring-offset-white placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                                placeholder="Mention Gotra, Sankalp or any special wish..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#991b1b] to-red-700 hover:from-red-800 hover:to-red-900 text-white font-bold py-7 text-xl rounded-2xl shadow-xl shadow-red-100 mt-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="flex items-center gap-2">
                                <Loader2 className="h-6 w-6 animate-spin" />
                                Processing Request...
                            </div>
                        ) : (
                            "Confirm Puja Booking"
                        )}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default PujaBookingModal;
