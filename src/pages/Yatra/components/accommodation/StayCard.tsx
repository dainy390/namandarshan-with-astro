import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Wifi, Wind, Utensils, Car, Sparkles } from 'lucide-react';
import { Stay } from './types';
import { Button } from '@/components/ui/button';

interface StayCardProps {
    stay: Stay;
    onViewDetails: (stay: Stay) => void;
    onBook: (stay: Stay) => void;
    duration: number;
    isPackageIncluded: boolean;
}

export default function StayCard({ stay, onViewDetails, onBook, duration, isPackageIncluded }: StayCardProps) {
    const totalPrice = stay.pricePerNight * duration;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white/70 backdrop-blur-md border border-orange-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
        >
            {/* Image & Badges */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={stay.imageUrl}
                    alt={stay.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Recommendation Tag */}
                {stay.recommended && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                        <Sparkles className="w-3.5 h-3.5 fill-current animate-spin" />
                        Recommended for Pilgrims
                    </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-stone-800 text-[10px] font-extrabold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider border border-orange-100">
                    {stay.category}
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white text-xs font-semibold backdrop-blur-sm bg-black/35 px-3 py-1.5 rounded-full">
                    <MapPin className="w-3.5 h-3.5 text-orange-400" />
                    <span>{stay.location}</span>
                </div>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Title & Rating */}
                <div className="flex justify-between items-start gap-2 mb-2">
                    <h4 className="font-display text-lg font-bold text-stone-900 leading-snug hover:text-orange-600 transition-colors">
                        {stay.name}
                    </h4>
                    <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2.5 py-1 rounded-lg text-xs font-bold shrink-0 border border-amber-200">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{stay.rating}</span>
                    </div>
                </div>

                {/* Distance to temple */}
                <p className="text-xs text-orange-600 font-semibold mb-4 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {stay.templeDistance}
                </p>

                {/* Description */}
                <p className="text-sm text-stone-600 line-clamp-2 leading-relaxed mb-5">
                    {stay.description}
                </p>

                {/* Amenities Icons */}
                <div className="flex flex-wrap gap-2.5 mb-6 mt-auto">
                    {stay.hasWifi && (
                        <div className="p-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-600 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 transition-all shadow-sm" title="Free High-speed WiFi">
                            <Wifi className="w-4 h-4" />
                        </div>
                    )}
                    {stay.hasAc && (
                        <div className="p-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-600 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 transition-all shadow-sm" title="Air Conditioned Rooms">
                            <Wind className="w-4 h-4" />
                        </div>
                    )}
                    {stay.hasFood && (
                        <div className="p-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-600 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 transition-all shadow-sm" title="Strictly Vegetarian Satvik Dining">
                            <Utensils className="w-4 h-4" />
                        </div>
                    )}
                    {stay.hasParking && (
                        <div className="p-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-600 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 transition-all shadow-sm" title="Spacious Private Parking">
                            <Car className="w-4 h-4" />
                        </div>
                    )}
                </div>

                {/* Pricing Block */}
                <div className="border-t border-stone-100 pt-4 flex justify-between items-center mb-6">
                    <div>
                        <span className="text-xs text-stone-500 block">Price per night</span>
                        <span className="text-2xl font-black text-stone-900 font-display">₹{stay.pricePerNight}</span>
                    </div>
                    <div className="text-right">
                        <span className="text-xs text-stone-500 block">Total for {duration} {duration === 1 ? 'Night' : 'Nights'}</span>
                        <span className="text-base font-bold text-orange-600">
                            {isPackageIncluded ? 'Included in Package' : `₹${totalPrice}`}
                        </span>
                    </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                    <Button
                        onClick={() => onViewDetails(stay)}
                        variant="outline"
                        className="rounded-xl border-orange-200 text-stone-800 hover:bg-orange-50/50 hover:border-orange-300 font-semibold"
                    >
                        View Details
                    </Button>
                    <Button
                        onClick={() => onBook(stay)}
                        className="rounded-xl bg-[#D77E1E] hover:bg-orange-600 text-white font-bold shadow-sm"
                    >
                        Book Stay
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
