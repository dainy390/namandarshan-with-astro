import { Calendar } from "lucide-react";

export default function PujaMuhurat({ puja }: { puja: any }) {
    // Dynamic data from backend, fallback if empty
    const muhuratDays = puja.muhuratDays || "Every Monday & Amavasya";
    const muhuratTimes = puja.muhuratTimes || "Pratahkala (Morning) & Pradosh Kaal (Evening)";

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-stone-700" />
                <h3 className="font-display text-2xl font-bold text-stone-900">Best Days & Muhurat Dates</h3>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-100">
                <div 
                    className="text-lg font-semibold text-stone-900 prose prose-stone max-w-none"
                    dangerouslySetInnerHTML={{ __html: muhuratDays }}
                />
            </div>
        </div>
    );
}
