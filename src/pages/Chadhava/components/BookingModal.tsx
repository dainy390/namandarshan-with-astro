import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Offering } from "../data";
import { X, Lock } from "lucide-react";
import { getApiUrl } from "@/utils/api";

import { useAuth } from "@/context/AuthContext";
import { useFormAbandonmentTracker } from "@/hooks/useFormAbandonmentTracker";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedOffering: Offering | null;
}

const BookingModal = ({
  isOpen,
  onClose,
  selectedOffering,
}: BookingModalProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    gotra: "",
    message: "",
  });

  const { markConverted } = useFormAbandonmentTracker({
    isOpen,
    formType: "chadhava",
    serviceName: selectedOffering?.name || "Chadhava Offering",
    formData,
  });

  const [loginPopUp, setLoginPopUp] = useState(false);

  useEffect(() => {
    if (isOpen && user) {
      setFormData((prev) => ({
        ...prev,
        name: user.name || "",
        email: user.email || "",
      }));
    }
  }, [isOpen, user]);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // if (!user) {
    //   setLoginPopUp(true);
    //   setIsLoading(false);
    //   return;
    // }

    const bookingData = {
      type: "chadhava",
      serviceId: selectedOffering?.slug || selectedOffering?.id,
      serviceName: selectedOffering?.name,
      userDetails: {
        name: formData.name,
        whatsapp: formData.whatsapp,
        email: formData.email,
      },
      bookingDetails: {
        gotra: formData.gotra,
        message: formData.message,
      },
    };

     localStorage.setItem("phoneNumber", formData.whatsapp);

    try {
      const res = await fetch(getApiUrl("/api/bookings"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (res.ok) {
        const chadhavaDetails = await res.json();
        const packageData = {
          name: chadhavaDetails.userDetails.name,
          email: chadhavaDetails.userDetails.email,
          phoneNumber: chadhavaDetails.userDetails.whatsapp,
          item: {
            serviceType: "chadhava",
            type: "booking",
            serviceId: chadhavaDetails._id,
            serviceName: chadhavaDetails.serviceName,
            templeName: chadhavaDetails.templeName,
            price: chadhavaDetails.price,
          },
        };

        const packageRes = await fetch(getApiUrl("/api/package"), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(packageData),
        });

        if (packageRes.ok) {
          const order = await packageRes.json();

          toast({
            title: "Offering Confirmed! 🙏",
            description: `Your chadhava request for ${selectedOffering?.name} has been received.`,
          });
          markConverted();
          onClose();
          navigate(`/booking`);
        }

        // const message = `Namaste 🙏\n\nI want to offer Chadhava.\n\n*Name:* ${formData.name}\n*Seva:* ${selectedOffering?.name}\n*Gotra:* ${formData.gotra}\n*Message:* ${formData.message}\n\nPlease confirm.`;
        // const whatsappLink = `https://api.whatsapp.com/send/?phone=918796973199&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

        setFormData({
          name: "",
          whatsapp: "",
          email: "",
          gotra: "",
          message: "",
        });
      } else {
        toast({
          title: "Booking Failed",
          description: "Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "Error",
        description: "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[450px] p-0 overflow-hidden bg-white border-none shadow-2xl sm:rounded-3xl [&>button]:hidden flex flex-col max-h-[95vh]">
          {/* Custom Header */}
          <div className="bg-[#B45309] p-6 text-center relative flex-shrink-0">
            <DialogTitle className="text-white text-2xl font-display font-bold flex items-center justify-center gap-2">
              Book Seva <span className="text-2xl">🙏</span>
            </DialogTitle>
            <DialogDescription className="text-orange-50 font-medium mt-1">
              Sankalp will be taken in your name.
            </DialogDescription>
            <DialogClose className="absolute right-4 top-4 text-white/80 hover:text-white transition-colors">
              <X className="w-6 h-6" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>

          <div className="p-8 space-y-6 overflow-y-auto custom-scrollbar">
            {/* Seva Display */}
            <div className="bg-[#FFF8F1] border border-dashed border-[#FDBA74] rounded-2xl p-4 text-center mx-1">
              <p className="text-[#9A3412] font-bold text-lg">
                Selected Seva: {selectedOffering?.name}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-4 px-1">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-[#9A3412] font-extrabold text-[12px] uppercase tracking-wide"
                  >
                    Yajman Name (Devotee Name)*
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Full Name / पूरा नाम"
                    className="h-12 text-base border-[#FED7AA] focus:ring-[#FB923C] focus:border-[#FB923C] rounded-xl bg-white placeholder:text-gray-400 font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="whatsapp"
                    className="text-[#9A3412] font-extrabold text-[12px] uppercase tracking-wide"
                  >
                    WhatsApp Number*
                  </Label>
                  <Input
                    id="whatsapp"
                    required
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsapp: e.target.value })
                    }
                    placeholder="91XXXXXXXXXX"
                    className="h-12 text-base border-[#FED7AA] focus:ring-[#FB923C] focus:border-[#FB923C] rounded-xl bg-white placeholder:text-gray-400 font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-[#9A3412] font-extrabold text-[12px] uppercase tracking-wide"
                  >
                    Email Address*
                  </Label>
                  <Input
                    id="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    className="h-12 text-base border-[#FED7AA] focus:ring-[#FB923C] focus:border-[#FB923C] rounded-xl bg-white placeholder:text-gray-400 font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="gotra"
                    className="text-[#9A3412] font-extrabold text-[12px] uppercase tracking-wide"
                  >
                    Gotra (Optional)
                  </Label>
                  <Input
                    id="gotra"
                    value={formData.gotra}
                    onChange={(e) =>
                      setFormData({ ...formData, gotra: e.target.value })
                    }
                    placeholder="Gotra / गोत्र (If known)"
                    className="h-12 text-base border-[#FED7AA] focus:ring-[#FB923C] focus:border-[#FB923C] rounded-xl bg-white placeholder:text-gray-400 font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-[#9A3412] font-extrabold text-[12px] uppercase tracking-wide"
                  >
                    Special Prayer / Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Any specific wish or family names..."
                    className="min-h-[80px] text-base border-[#FED7AA] focus:ring-[#FB923C] focus:border-[#FB923C] rounded-xl bg-white resize-none py-3 placeholder:text-gray-400 font-medium"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#B45309] hover:bg-[#92400e] text-white font-bold h-14 text-lg rounded-2xl shadow-xl shadow-orange-100 transform active:scale-95 transition-all hover:scale-[1.02]"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Confirming Seva...
                    </div>
                  ) : (
                    "CONFIRM SEVA BOOKING"
                  )}
                </Button>
              </div>
            </form>

            <div className="flex items-center justify-center gap-1.5 text-stone-400">
              <Lock className="w-4 h-4" />
              <span className="text-xs font-medium">
                Your information is kept sacred.
              </span>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={loginPopUp} onOpenChange={setLoginPopUp}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Login Required</DialogTitle>
            <DialogDescription>
              Please login to continue with your booking and order placement.
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setLoginPopUp(false)}>
              Cancel
            </Button>

            <Button
              onClick={() =>
                navigate(
                  `/login?redirect=${encodeURIComponent(
                    window.location.pathname,
                  )}`,
                )
              }
            >
              Login
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookingModal;
