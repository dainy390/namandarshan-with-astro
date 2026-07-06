import { MapPin, Building } from "lucide-react";

export default function PujaTempleDetails({ puja }: { puja: any }) {
    // Dynamic data from backend, fallback if empty
    const templeDesc = puja.templeDetails || "This sacred temple is renowned for its powerful deity manifestations and strict adherence to Vedic rituals. Pujas performed here are believed to yield 100x results compared to regular shrines.";
    
    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <Building className="w-6 h-6 text-stone-700" />
                <h3 className="font-display text-2xl font-bold text-stone-900">
                    {puja.templeDetailsTitle || "Temple Details"}
                </h3>
            </div>
            
            <div className="flex flex-col gap-4">
                <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-sm font-semibold mb-3">
                        <MapPin className="w-4 h-4" /> {puja.location || "Famous Temple, India"}
                    </div>
                    <div 
                        className="text-stone-600 leading-relaxed text-lg prose prose-stone max-w-none"
                        dangerouslySetInnerHTML={{ __html: templeDesc }}
                    />
                </div>
            </div>
        </div>
    );
}
