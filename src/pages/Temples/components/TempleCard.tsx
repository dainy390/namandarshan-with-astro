import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import BookingModal from "@/components/booking/BookingModal";
import { useNavigate } from "react-router-dom";
import { generateSlug } from "@/utils/slugUtils";

interface TempleCardProps {
  temple: {
    id: number | string;
    slug?: string;
    name: string;
    location: string;
    image: string;
    description: string;
    seoKeywords?: string;
  };
}

const TempleCard = ({ temple }: TempleCardProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const slug = temple.slug || generateSlug(temple.name, "temple");
  const isInternational = temple.seoKeywords
    ?.toLowerCase()
    .includes("international");
  const linkPath = isInternational
    ? `/international-temples/${slug}`
    : `/temples/${slug}`;

  const formId = `booking-temple-${slug}`;
  const isBookingOpen = searchParams.get("form") === formId;
  const isYatraTemple = slug === "dwarkadhish-temple" || slug === "shree-somnath-jyotirling-temple";

  const handleOpen = () => {
    setSearchParams(
      (prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set("form", formId);
        return newParams;
      },
      { replace: false }
    );
  };

  const handleClose = () => {
    setSearchParams(
      (prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.delete("form");
        return newParams;
      },
      { replace: true }
    );
  };

  return (
    <>
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleClose}
        type="temple"
        serviceName={temple.name}
        serviceId={slug}
      />
      <div className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 flex flex-col h-full">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={temple.image}
            alt={temple.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-6 pt-8 flex-grow flex flex-col">
          <div className="mb-4">
            <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2 uppercase tracking-wide">
              <MapPin className="w-4 h-4" />
              {temple.location}
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {temple.name}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
              {temple.description}
            </p>
          </div>

          <div className="mt-auto pt-4 border-t border-border/50 flex flex-col gap-2">
            <Link to={linkPath} className="w-full">
              <Button variant="outline" className="w-full font-medium">
                View More
              </Button>
            </Link>

            <Button
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-md font-semibold text-lg py-6"
              onClick={() => handleOpen()}
            >
              {isYatraTemple
                ? "Book full Yatra Package"
                : "Book Guided Darshan"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TempleCard;
