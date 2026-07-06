import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Video, Landmark, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PujaCardProps {
    id: string;
    slug?: string;
    title: string;
    image: string;
    description: string;
    imageFit?: "contain" | "cover";
    location?: string;
    category?: string; // e.g. "Popular Pujas"
    problemAddressed?: string;
    festival?: string;
    temple?: string;
    isOnline?: boolean;
    isTemple?: boolean;
    isHome?: boolean;
}

const PujaCard = ({ id, slug, title, image, description, imageFit = "cover", location = "Kashi, Uttar Pradesh", category = "Popular Pujas", problemAddressed, festival, temple, isOnline: propIsOnline, isTemple: propIsTemple, isHome: propIsHome }: PujaCardProps) => {
    const navigate = useNavigate();

    const isOnline = !!propIsOnline;
    const isTemple = !!propIsTemple;
    const isHome = !!propIsHome;

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-orange-200 flex flex-col h-full group">
            {/* Image Banner */}
            <div className="relative h-48 w-full overflow-hidden bg-gray-50">
                <img
                    src={image}
                    alt={title}
                    className={`w-full h-full object-${imageFit} transition-transform duration-700 group-hover:scale-105`}
                />
                
                {/* Badges in the left side upper corner */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                    {isOnline && (
                        <span className="bg-emerald-600/90 backdrop-blur-xs text-white font-extrabold text-[10px] tracking-wide uppercase px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
                            <Video className="w-3 h-3" />
                            Live Online Puja
                        </span>
                    )}
                    {isTemple && (
                        <span className="bg-amber-600/90 backdrop-blur-xs text-white font-extrabold text-[10px] tracking-wide uppercase px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                            <Landmark className="w-3 h-3" />
                            Temple Visit Puja
                        </span>
                    )}
                    {isHome && (
                        <span className="bg-blue-600/90 backdrop-blur-xs text-white font-extrabold text-[10px] tracking-wide uppercase px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                            <Home className="w-3 h-3" />
                            At-Home Service
                        </span>
                    )}
                </div>
            </div>

            {/* Content Body */}
            <div className="p-5 flex flex-col flex-grow">
                {/* Category Tag moved to Info Rows below */}

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-5 line-clamp-2 leading-relaxed flex-grow">
                    {description}
                </p>

                {/* Info Rows */}
                <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-500 text-xs font-medium">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="truncate">{location}</span>
                    </div>
                    {category && (
                        <div className="flex items-center text-gray-500 text-xs font-medium">
                            <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                            <span className="truncate">Category: {category}</span>
                        </div>
                    )}
                    {category === "Problem Based Pujas" && problemAddressed && (
                        <div className="flex items-center text-gray-500 text-xs font-medium">
                            <svg className="w-4 h-4 mr-2 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span className="truncate text-red-600 font-semibold">{problemAddressed}</span>
                        </div>
                    )}
                    {category === "Festival Pujas" && festival && (
                        <div className="flex items-center text-gray-500 text-xs font-medium">
                            <svg className="w-4 h-4 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                            <span className="truncate text-indigo-600 font-semibold">{festival}</span>
                        </div>
                    )}
                    {category === "Temple Wise Pujas" && temple && (
                        <div className="flex items-center text-gray-500 text-xs font-medium">
                            <svg className="w-4 h-4 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                            </svg>
                            <span className="truncate text-amber-600 font-semibold">{temple}</span>
                        </div>
                    )}
                </div>

                {/* Action CTA */}
                <Button
                    onClick={() => navigate(`/puja/${slug}`)}
                    className="w-full bg-[#D77E1E] hover:bg-orange-600 text-white font-bold text-sm py-6 rounded-lg uppercase tracking-wide flex items-center justify-center gap-2 transition-colors"
                >
                    VIEW DETAILS 
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Button>
            </div>
        </div>
    );
};

export default PujaCard;
