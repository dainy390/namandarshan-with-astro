import React from 'react';
import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface FilterBarProps {
    onSearch: (query: string) => void;
    onStateChange: (state: string) => void;
    states: string[];
    onInternationalChange?: (location: string) => void;
    internationalLocations?: string[];
    className?: string;
    placeholder?: string;
    selectedState?: string;
    selectedInternational?: string;
}

const FilterBar: React.FC<FilterBarProps> = ({
    onSearch,
    onStateChange,
    onInternationalChange,
    states,
    internationalLocations = [],
    className = "",
    placeholder = "Search...",
    selectedState,
    selectedInternational
}) => {
    return (
        <div className={`bg-white p-4 rounded-xl shadow-sm border border-stone-100 mb-8 ${className}`}>
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-grow w-full md:w-auto">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                        placeholder={placeholder}
                        className="pl-10 bg-stone-50 border-stone-200"
                        onChange={(e) => onSearch(e.target.value)}
                    />
                </div>

                {/* Domestic State Filter */}
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <Filter className="text-orange-500 h-4 w-4" />
                    <Select value={selectedState === "all" ? "" : selectedState} onValueChange={onStateChange}>
                        <SelectTrigger className="w-full md:w-[180px] bg-stone-50 border-stone-200">
                            <SelectValue placeholder="Domestic (State)" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">
                                {onInternationalChange ? "All Temples (Reset)" : "All States"}
                            </SelectItem>
                            {onInternationalChange && (
                                <SelectItem value="all_states">All Domestic</SelectItem>
                            )}
                            {states.map((state) => (
                                <SelectItem key={state} value={state}>
                                    {state}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* International Filter */}
                {onInternationalChange && (
                    <div className="flex items-center gap-2 w-full md:w-auto border-l md:pl-4 border-stone-200">
                        <Filter className="text-blue-500 h-4 w-4" />
                        <Select value={selectedInternational === "all" ? "" : selectedInternational} onValueChange={onInternationalChange}>
                            <SelectTrigger className="w-full md:w-[180px] bg-stone-50 border-stone-200">
                                <SelectValue placeholder="International" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Temples (Reset)</SelectItem>
                                <SelectItem value="all_international">All International</SelectItem>
                                {internationalLocations.map((loc) => (
                                    <SelectItem key={loc} value={loc}>
                                        {loc}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FilterBar;
