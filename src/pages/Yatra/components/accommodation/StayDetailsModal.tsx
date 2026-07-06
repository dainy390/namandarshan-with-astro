import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, MapPin, Wifi, Wind, Utensils, Car, ShieldAlert, BadgeCheck, CheckCircle2 } from 'lucide-react';
import { Stay } from './types';
import { Button } from '@/components/ui/button';

interface StayDetailsModalProps {
    stay: Stay | null;
    isOpen: boolean;
    onClose: () => void;
    duration: number;
    isPackageIncluded: boolean;
    onConfirmBook: (stay: Stay) => void;
}

export default function StayDetailsModal({ stay, isOpen, onClose, duration, isPackageIncluded, onConfirmBook }: StayDetailsModalProps) {
    if (!stay) return null;

    const totalPrice = stay.pricePerNight * duration;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 w-full max-w-3xl relative z-10 max-h-[90vh] flex flex-col"
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 bg-stone-900/40 hover:bg-stone-900/60 text-white p-2 rounded-full z-20 transition-all"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="overflow-y-auto flex-grow">
                            {/* Hero Image */}
                            <div className="relative h-64 md:h-80 w-full">
                                <img src={stay.imageUrl} alt={stay.name} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
                                
                                <div className="absolute bottom-6 left-6 text-white">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-orange-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                                            {stay.category}
                                        </span>
                                        <div className="flex items-center gap-1 text-xs text-yellow-400">
                                            <Star className="w-3.5 h-3.5 fill-current" />
                                            <span className="font-bold text-white">{stay.rating} ({stay.reviewCount} reviews)</span>
                                        </div>
                                    </div>
                                    <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">{stay.name}</h3>
                                    <p className="flex items-center gap-1.5 text-stone-200 text-sm mt-1.5">
                                        <MapPin className="w-4 h-4 text-orange-400" />
                                        {stay.templeDistance} • {stay.location}
                                    </p>
                                </div>
                            </div>

                            {/* Details Body */}
                            <div className="p-6 md:p-8 space-y-6">
                                {/* Description */}
                                <div className="space-y-2">
                                    <h4 className="font-display text-lg font-bold text-stone-900">About this Stay</h4>
                                    <p className="text-stone-600 leading-relaxed text-sm md:text-base">{stay.description}</p>
                                </div>

                                {/* Room Type */}
                                <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100/70 flex justify-between items-center gap-4">
                                    <div>
                                        <span className="text-xs text-stone-500 block">Room Accommodation Type</span>
                                        <span className="font-bold text-stone-800 text-base">{stay.roomType}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs font-bold text-orange-700 bg-orange-100/50 px-3 py-1.5 rounded-full shrink-0">
                                        <BadgeCheck className="w-4 h-4 fill-current text-orange-500" />
                                        Vedic Approved
                                    </div>
                                </div>

                                {/* Amenities */}
                                <div className="space-y-3">
                                    <h4 className="font-display text-lg font-bold text-stone-900">Facilities & Services</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        <div className={`p-3.5 rounded-2xl border flex flex-col items-center gap-2 text-center transition-all ${stay.hasWifi ? 'border-orange-200 bg-orange-50/20 text-stone-800' : 'border-stone-100 bg-stone-50/50 text-stone-400'}`}>
                                            <Wifi className="w-6 h-6 text-orange-600 shrink-0" />
                                            <span className="text-xs font-semibold">Free Wi-Fi</span>
                                        </div>
                                        <div className={`p-3.5 rounded-2xl border flex flex-col items-center gap-2 text-center transition-all ${stay.hasAc ? 'border-orange-200 bg-orange-50/20 text-stone-800' : 'border-stone-100 bg-stone-50/50 text-stone-400'}`}>
                                            <Wind className="w-6 h-6 text-orange-600 shrink-0" />
                                            <span className="text-xs font-semibold">Air Conditioning</span>
                                        </div>
                                        <div className={`p-3.5 rounded-2xl border flex flex-col items-center gap-2 text-center transition-all ${stay.hasFood ? 'border-orange-200 bg-orange-50/20 text-stone-800' : 'border-stone-100 bg-stone-50/50 text-stone-400'}`}>
                                            <Utensils className="w-6 h-6 text-orange-600 shrink-0" />
                                            <span className="text-xs font-semibold">Pure Satvik Meals</span>
                                        </div>
                                        <div className={`p-3.5 rounded-2xl border flex flex-col items-center gap-2 text-center transition-all ${stay.hasParking ? 'border-orange-200 bg-orange-50/20 text-stone-800' : 'border-stone-100 bg-stone-50/50 text-stone-400'}`}>
                                            <Car className="w-6 h-6 text-orange-600 shrink-0" />
                                            <span className="text-xs font-semibold">Private Parking</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Spiritual Policies */}
                                <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-5 space-y-3">
                                    <h5 className="font-display text-sm font-extrabold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                                        <ShieldAlert className="w-4 h-4" /> Spiritual Staying Guidelines
                                    </h5>
                                    <ul className="space-y-2">
                                        {stay.policies.map((policy, index) => (
                                            <li key={index} className="flex gap-2 items-start text-xs md:text-sm text-stone-700 leading-relaxed">
                                                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                                                <span>{policy}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Footer Checkout */}
                        <div className="bg-stone-50 p-6 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="text-center sm:text-left">
                                <span className="text-xs text-stone-500">Duration: {duration} {duration === 1 ? 'Night' : 'Nights'}</span>
                                <div className="text-2xl font-black text-stone-900 font-display mt-0.5">
                                    {isPackageIncluded ? (
                                        <span className="text-orange-600 text-lg font-bold">Included in Package</span>
                                    ) : (
                                        `₹${totalPrice}`
                                    )}
                                </div>
                            </div>
                            <div className="flex gap-3 w-full sm:w-auto">
                                <Button
                                    onClick={onClose}
                                    variant="ghost"
                                    className="rounded-xl border border-stone-200 bg-white hover:bg-stone-50 font-semibold px-6 flex-grow sm:flex-grow-0"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    onClick={() => onConfirmBook(stay)}
                                    className="rounded-xl bg-[#D77E1E] hover:bg-orange-600 text-white font-bold px-8 flex-grow sm:flex-grow-0 shadow-md"
                                >
                                    Book Stay Now
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
