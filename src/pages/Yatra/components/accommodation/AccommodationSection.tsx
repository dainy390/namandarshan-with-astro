import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, Moon, ShieldAlert, Sparkles, Building, RefreshCw, X } from 'lucide-react';
import { Stay, StayCategory } from './types';
import { mockStays } from './mockData';
import StayCard from './StayCard';
import StayDetailsModal from './StayDetailsModal';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';

interface AccommodationSectionProps {
    selectedDestination?: string;
    onSelectDestination?: (destination: string | undefined) => void;
}

export default function AccommodationSection({ selectedDestination, onSelectDestination }: AccommodationSectionProps) {
    // States
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<StayCategory | 'All'>('All');
    const [duration, setDuration] = useState<number>(1); // Nights count
    const [isPackageIncluded, setIsPackageIncluded] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);
    
    // Modal controls
    const [selectedStay, setSelectedStay] = useState<Stay | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Sync destination changes
    useEffect(() => {
        if (selectedDestination) {
            setSearchQuery('');
            setIsLoading(true);
            const timer = setTimeout(() => setIsLoading(false), 500);
            return () => clearTimeout(timer);
        }
    }, [selectedDestination]);

    // Handle search query change
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        if (selectedDestination && onSelectDestination) {
            onSelectDestination(undefined);
        }
    };

    // Filter stays based on location, query, and category
    const filteredStays = mockStays.filter(stay => {
        // Location filter (package integration)
        if (selectedDestination) {
            const destNorm = selectedDestination.toLowerCase();
            const stayLocNorm = stay.location.toLowerCase();
            const match = stayLocNorm.includes(destNorm) || destNorm.includes(stayLocNorm);
            if (!match) return false;
        }

        // Search query filter (search by city or temple name)
        if (searchQuery.trim() !== '') {
            const queryNorm = searchQuery.toLowerCase();
            const matchQuery = stay.location.toLowerCase().includes(queryNorm) ||
                               stay.name.toLowerCase().includes(queryNorm) ||
                               stay.templeDistance.toLowerCase().includes(queryNorm);
            if (!matchQuery) return false;
        }

        // Category filter
        if (selectedCategory !== 'All') {
            if (stay.category !== selectedCategory) return false;
        }

        return true;
    });

    const handleViewDetails = (stay: Stay) => {
        setSelectedStay(stay);
        setIsModalOpen(true);
    };

    const handleBookStay = (stay: Stay) => {
        toast.success(`Booking request received for ${stay.name}! Our Yatras manager will contact you with booking confirmation details.`, {
            duration: 5000,
            position: 'top-center'
        });
    };

    const handleCategoryClick = (category: StayCategory | 'All') => {
        setIsLoading(true);
        setSelectedCategory(category);
        setTimeout(() => setIsLoading(false), 400);
    };

    const handleSelectDestTag = (destName: string) => {
        setIsLoading(true);
        if (onSelectDestination) {
            if (selectedDestination?.toLowerCase() === destName.toLowerCase()) {
                onSelectDestination(undefined);
            } else {
                onSelectDestination(destName);
            }
        }
        setTimeout(() => setIsLoading(false), 400);
    };

    return (
        <div id="accommodation-stays" className="py-16 bg-gradient-to-b from-stone-50 via-[#fffbf4] to-stone-50 border-t border-orange-100 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-orange-600 font-bold uppercase tracking-wider text-xs md:text-sm flex items-center justify-center gap-1.5 mb-2">
                        <Building className="w-4 h-4 text-orange-500 animate-bounce" /> Stay & Resting Guidelines
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-stone-900 leading-tight">
                        Accommodation & Stay
                    </h2>
                    <p className="text-stone-600 text-base md:text-lg mt-3 leading-relaxed">
                        Comfortable and verified stays for your spiritual journey. Enjoy 100% Satvik atmosphere and proximity to holy temples.
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto mt-6 rounded-full" />
                </div>

                {/* Filters, Toggle, Search Grid */}
                <div className="bg-white/80 backdrop-blur-md border border-orange-100 rounded-3xl p-6 md:p-8 shadow-sm mb-10 space-y-6">
                    <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:items-center justify-between">
                        
                        {/* Search Bar */}
                        <div className="relative flex-grow max-w-xl">
                            <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <Search className="w-5 h-5 text-stone-400" />
                            </span>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Search by city (e.g. Ayodhya, Kedarnath) or temple..."
                                className="w-full pl-12 pr-4 py-3.5 bg-stone-50 border border-stone-200 rounded-2xl text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium text-sm md:text-base"
                            />
                        </div>

                        {/* Package stay suggestions banner */}
                        {selectedDestination && (
                            <div className="bg-orange-50 border border-orange-200 rounded-2xl px-4 py-2.5 flex items-center justify-between gap-3 text-sm text-orange-800 font-semibold shadow-inner shrink-0">
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-orange-600 fill-current animate-pulse" />
                                    <span>Showing Stays near {selectedDestination}</span>
                                </div>
                                <button
                                    onClick={() => onSelectDestination && onSelectDestination(undefined)}
                                    className="p-1 rounded-full hover:bg-orange-100 text-orange-600 transition-colors"
                                    title="Show all destinations"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        )}

                        {/* Duration Selector & Toggles */}
                        <div className="flex flex-wrap gap-4 items-center shrink-0">
                            
                            {/* Stay Duration Selector */}
                            <div className="bg-stone-100 p-1 rounded-2xl flex items-center gap-1 border border-stone-200">
                                {[
                                    { value: 1, label: '1 Night' },
                                    { value: 2, label: '2 Nights' },
                                    { value: 3, label: '3+ Nights' }
                                ].map((opt) => (
                                    <button
                                        key={opt.value}
                                        onClick={() => setDuration(opt.value)}
                                        className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${duration === opt.value ? 'bg-white text-orange-600 shadow-sm' : 'text-stone-600 hover:text-stone-800'}`}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>

                            {/* Dynamic booking packages toggle */}
                            <div className="flex items-center gap-3 bg-stone-50 border border-stone-200/80 px-4 py-2.5 rounded-2xl">
                                <span className="text-xs md:text-sm font-bold text-stone-700">Included in Package</span>
                                <Switch
                                    checked={isPackageIncluded}
                                    onCheckedChange={setIsPackageIncluded}
                                    className="data-[state=checked]:bg-orange-500"
                                />
                            </div>
                        </div>

                    </div>

                    {/* Quick Package Destination Tags */}
                    <div className="flex flex-wrap items-center gap-2 border-t border-stone-100 pt-5">
                        <span className="text-xs font-bold text-stone-500 uppercase tracking-wider mr-2 flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5 text-orange-500" /> Filter Stays by Yatra Destination:
                        </span>
                        {[
                            { name: 'Ayodhya', label: 'Ayodhya (Ram Mandir)' },
                            { name: 'Kedarnath', label: 'Kedarnath' },
                            { name: 'Puri', label: 'Puri (Jagannath)' },
                            { name: 'Vrindavan', label: 'Vrindavan' },
                            { name: 'Shirdi', label: 'Shirdi (Sai Mandir)' }
                        ].map((dest) => {
                            const isActive = selectedDestination?.toLowerCase() === dest.name.toLowerCase();
                            return (
                                <button
                                    key={dest.name}
                                    onClick={() => handleSelectDestTag(dest.name)}
                                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${isActive ? 'bg-orange-600 border-orange-600 text-white shadow-md' : 'bg-orange-50/50 border-orange-100 text-orange-700 hover:bg-orange-100/50'}`}
                                >
                                    {dest.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Category Filter buttons */}
                    <div className="border-t border-stone-100 pt-5 flex flex-wrap gap-2.5 items-center">
                        <span className="text-xs font-bold text-stone-500 uppercase tracking-wider mr-2 flex items-center gap-1">
                            <SlidersHorizontal className="w-3.5 h-3.5" /> Stay Categories:
                        </span>
                        {(['All', 'Budget', 'Standard', 'Premium', 'Dharamshala'] as const).map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryClick(cat)}
                                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all border ${selectedCategory === cat ? 'bg-orange-600 border-orange-600 text-white shadow-md' : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100 hover:text-stone-800'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                </div>

                {/* Stays Grid */}
                <div className="relative min-h-[400px]">
                    {isLoading ? (
                        // Loading Skeletons
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3].map((idx) => (
                                <div key={idx} className="bg-white rounded-3xl border border-stone-100 overflow-hidden shadow-sm h-[520px] flex flex-col animate-pulse">
                                    <div className="bg-stone-200 h-56 w-full" />
                                    <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                                        <div className="space-y-2">
                                            <div className="bg-stone-200 h-6 w-3/4 rounded" />
                                            <div className="bg-stone-200 h-4 w-1/2 rounded" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="bg-stone-200 h-4 w-full rounded" />
                                            <div className="bg-stone-200 h-4 w-5/6 rounded" />
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="bg-stone-200 h-10 w-1/2 rounded-xl" />
                                            <div className="bg-stone-200 h-10 w-1/2 rounded-xl" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <AnimatePresence mode="popLayout">
                            {filteredStays.length > 0 ? (
                                <motion.div
                                    layout
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                >
                                    {filteredStays.map((stay) => (
                                        <StayCard
                                            key={stay.id}
                                            stay={stay}
                                            onViewDetails={handleViewDetails}
                                            onBook={handleBookStay}
                                            duration={duration}
                                            isPackageIncluded={isPackageIncluded}
                                        />
                                    ))}
                                </motion.div>
                            ) : (
                                // Empty State
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center justify-center py-20 text-center max-w-md mx-auto"
                                >
                                    <div className="w-20 h-20 bg-orange-50 border border-orange-200 rounded-full flex items-center justify-center text-orange-600 mb-6 shadow-inner">
                                        <ShieldAlert className="w-10 h-10" />
                                    </div>
                                    <h4 className="font-display text-xl font-bold text-stone-900">No Stays Found</h4>
                                    <p className="text-stone-500 text-sm mt-2 leading-relaxed">
                                        We currently don't have matching stay listings for this filter or location. Try clearing your filters or changing your destination city!
                                    </p>
                                    <button
                                        onClick={() => {
                                            setSearchQuery('');
                                            setSelectedCategory('All');
                                            if (onSelectDestination) onSelectDestination(undefined);
                                        }}
                                        className="mt-6 font-bold text-sm text-orange-600 bg-orange-50 hover:bg-orange-100 px-5 py-2.5 rounded-full border border-orange-200 flex items-center gap-1.5 transition-colors"
                                    >
                                        <RefreshCw className="w-4 h-4" /> Clear All Filters
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    )}
                </div>

            </div>

            {/* Details Modal */}
            <StayDetailsModal
                stay={selectedStay}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                duration={duration}
                isPackageIncluded={isPackageIncluded}
                onConfirmBook={handleBookStay}
            />
        </div>
    );
}
