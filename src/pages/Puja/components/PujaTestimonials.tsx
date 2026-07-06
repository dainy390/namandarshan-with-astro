import { Star, MessageSquare } from "lucide-react";

export default function PujaTestimonials({ puja }: { puja: any }) {
    const reviews = puja.reviews && puja.reviews.length > 0 ? puja.reviews : [
        { name: "Rahul Sharma", rating: 5, text: "The pandits were very knowledgeable. Everything was arranged perfectly, and we received the video proof on time." },
        { name: "Priya Desai", rating: 5, text: "Highly recommend! The process was so transparent and I felt truly blessed after the sankalp." }
    ];

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-stone-700" />
                <h3 className="font-display text-2xl font-bold text-stone-900">Devotee Experiences</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
                {reviews.map((rev, idx) => (
                    <div key={idx} className="bg-stone-50 p-5 rounded-xl border border-stone-100">
                        <div className="flex gap-1 mb-2">
                            {[...Array(rev.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-[#D77E1E] text-[#D77E1E]" />
                            ))}
                        </div>
                        <p className="text-stone-700 text-sm mb-3 italic">"{rev.text}"</p>
                        <p className="text-stone-900 font-bold text-sm">- {rev.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
