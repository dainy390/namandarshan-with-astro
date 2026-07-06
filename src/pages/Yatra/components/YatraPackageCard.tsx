import { Button } from "@/components/ui/button";
import { Check, Calendar, MapPin } from "lucide-react";

import BookingModal from "@/components/booking/BookingModal";
import { Link, useSearchParams } from "react-router-dom";

interface YatraPackageProps {
    title: string;
    image: string;
    duration: string;
    location: string;
    description: string;
    slug?: string;
}

const YatraPackageCard = ({ title, image, duration, location, description, slug }: YatraPackageProps) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const uniqueId = slug || title.toLowerCase().replace(/\s+/g, '-');
    const formId = `booking-yatra-${uniqueId}`;

    const isBookingOpen = searchParams.get("form") === formId;

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

    return (
        <>
            <BookingModal
                isOpen={isBookingOpen}
                onClose={handleClose}
                type="yatra"
                serviceName={title}
                serviceId={uniqueId.startsWith('/') ? uniqueId.substring(1) : uniqueId}
            />
            {/* Naman Darshan Style Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
                {/* Image - Rounded Rect */}
                <div className="relative h-64 overflow-hidden m-3 rounded-xl">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="px-6 pb-6 pt-2 flex flex-col flex-grow text-center">
                    <h3 className="font-display text-xl font-bold text-gray-900 mb-2 truncate">
                        {title}
                    </h3>

                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                        {description}
                    </p>

                    <div className="mt-auto">
                        {slug ? (
                            <Link to={slug}>
                                <Button className="bg-[#F0601A] hover:bg-[#d05015] text-white rounded-full px-8 font-bold shadow-md w-full">
                                    Explore Now
                                </Button>
                            </Link>
                        ) : (
                            <Button
                                className="bg-[#F0601A] hover:bg-[#d05015] text-white rounded-full px-8 font-bold shadow-md"
                                onClick={handleOpen}
                            >
                                Explore Now
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default YatraPackageCard;
