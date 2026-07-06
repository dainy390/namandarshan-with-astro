import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { getApiUrl } from "@/utils/api";

const pujaImageMap: Record<string, string> = {
    "shiv-rudrabhishek-puja": "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/Gemini_Generated_Image_y6utrty6utrty6ut_x8hlhj.png",
    "shiv-rudrabhishek": "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/Gemini_Generated_Image_y6utrty6utrty6ut_x8hlhj.png",
    "maha-laxmi-mata-puja": "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/Gemini_Generated_Image_vtrtn1vtrtn1vtrt_scwv8g.png",
    "panchamrut-abhishek-puja": "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/panc-main_t40eog.jpg",
    "shodashopachar-puja": "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/sodh-main_zg2dc3.jpg",
    "maha-shakti-tridevi-puja": "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/Gemini_Generated_Image_2kqx2p2kqx2p2kqx_mz29pb.png",
    "sunderkand-paath-ayodhya-booking": "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/Gemini_Generated_Image_obzwdrobzwdrobzw_xff0xs.png",
    "sunderkand-path-puja": "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/Gemini_Generated_Image_obzwdrobzwdrobzw_xff0xs.png"
};

function calculateSimilarity(p1: any, p2: any) {
    if (!p1 || !p2) return 0;
    
    let score = 0;
    
    // 1. Category match
    if (p1.category && p2.category && p1.category === p2.category) {
        score += 3;
    }
    
    // 2. problemAddressed matching (split by space/comma)
    const getProblemWords = (p: any) => {
        return (p.problemAddressed || "")
            .toLowerCase()
            .split(/[\s,]+/)
            .filter((w: string) => w.length > 2);
    };
    const words1 = getProblemWords(p1);
    const words2 = getProblemWords(p2);
    const commonProblems = words1.filter((w: string) => words2.includes(w));
    score += commonProblems.length * 5;
    
    // 3. Title & benefits keyword match
    const getKeywordText = (p: any) => {
        const titleText = p.title || "";
        const benefitsText = (p.benefits || "").replace(/<[^>]*>/g, " ");
        const descriptionText = p.description || "";
        return `${titleText} ${benefitsText} ${descriptionText}`.toLowerCase();
    };
    
    const text1 = getKeywordText(p1);
    const text2 = getKeywordText(p2);
    
    const themes = [
        "protection", "family", "shield", "suraksha", "raksha", "nazar", "evil",
        "wealth", "financial", "laxmi", "money", "abundance", "prosperity", "business",
        "health", "healing", "disease", "illness", "recovery", "peace", "calm",
        "enemy", "enemies", "rival", "lawsuit", "legal", "court",
        "marriage", "relationship", "love", "family peace"
    ];
    
    themes.forEach(theme => {
        if (text1.includes(theme) && text2.includes(theme)) {
            score += 8;
        }
    });
    
    return score;
}

export default function RelatedPujas({ currentSlug, variant = "grid" }: { currentSlug?: string; variant?: "grid" | "sidebar" }) {
    const [related, setRelated] = useState<any[]>([]);

    useEffect(() => {
        fetch(getApiUrl("/api/pujas"))
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data) && data.length > 1) {
                    const currentPuja = data.find(p => p.slug === currentSlug);
                    
                    // Filter out the current puja
                    let otherPujas = data.filter(p => p.slug !== currentSlug);
                    
                    // Sort by similarity
                    if (currentPuja) {
                        otherPujas.sort((a, b) => {
                            return calculateSimilarity(b, currentPuja) - calculateSimilarity(a, currentPuja);
                        });
                    }
                    
                    const mapped = otherPujas.map(p => ({
                        id: p.id || p._id,
                        title: p.title,
                        slug: p.slug,
                        image: pujaImageMap[p.slug] || (p.image && !p.image.startsWith("/assets") ? p.image : "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/Gemini_Generated_Image_y6utrty6utrty6ut_x8hlhj.png")
                    }));
                    setRelated(mapped.slice(0, 3));
                    return;
                }
                throw new Error("No other pujas found");
            })
            .catch(err => {
                console.error("Error fetching related pujas, using fallbacks:", err);
                const staticPujas = [
                    { id: "shiv-rudrabhishek-puja", title: "Shiv Rudrabhishek", image: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/Gemini_Generated_Image_y6utrty6utrty6ut_x8hlhj.png", slug: "shiv-rudrabhishek-puja", category: "Popular Pujas", benefits: "health healing peace" },
                    { id: "maha-laxmi-mata-puja", title: "Maha Laxmi Mata Puja", image: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/Gemini_Generated_Image_vtrtn1vtrtn1vtrt_scwv8g.png", slug: "maha-laxmi-mata-puja", category: "Popular Pujas", benefits: "wealth financial abundance prosperity" },
                    { id: "panchamrut-abhishek-puja", title: "Panchamrut Abhishek", image: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/panc-main_t40eog.jpg", slug: "panchamrut-abhishek-puja", category: "Popular Pujas", benefits: "health recovery" },
                    { id: "shodashopachar-puja", title: "Shodashopachar Puja", image: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/sodh-main_zg2dc3.jpg", slug: "shodashopachar-puja", category: "Popular Pujas", benefits: "peace blessing" },
                    { id: "maha-shakti-tridevi-puja", title: "Maha Shakti Tridevi Puja", image: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/Gemini_Generated_Image_2kqx2p2kqx2p2kqx_mz29pb.png", slug: "maha-shakti-tridevi-puja", category: "Popular Pujas", benefits: "protection family shield raksha" }
                ];
                
                const currentPuja = staticPujas.find(p => p.slug === currentSlug) || { slug: currentSlug, title: "", benefits: "" };
                let otherPujas = staticPujas.filter(p => p.slug !== currentSlug);
                
                otherPujas.sort((a, b) => {
                    return calculateSimilarity(b, currentPuja) - calculateSimilarity(a, currentPuja);
                });
                
                setRelated(otherPujas.slice(0, 3));
            });
    }, [currentSlug]);

    if (variant === "sidebar") {
        return (
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-6">
                <h3 className="font-display text-xl font-bold text-stone-900 flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-saffron shrink-0" />
                    Explore Other Pujas
                </h3>
                <div className="space-y-4">
                    {related.map(p => (
                        <Link to={`/puja/${p.slug}`} key={p.id} className="group flex gap-4 items-center p-3 rounded-xl hover:bg-stone-50 transition-colors border border-stone-100 bg-white">
                            <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-50 shrink-0">
                                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h4 className="font-bold text-stone-900 text-sm group-hover:text-orange-600 transition-colors leading-snug truncate">{p.title}</h4>
                                <span className="text-xs text-orange-600 font-semibold flex items-center gap-1 mt-1">Book Now →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <section className="py-12 border-t border-stone-200 mt-12">
            <h2 className="font-display text-3xl font-bold text-stone-900 mb-8 text-center">Related Pujas</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {related.map(p => (
                    <Link to={`/puja/${p.slug}`} key={p.id} className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-all">
                        <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-5 text-center">
                            <h3 className="font-bold text-lg text-stone-900 group-hover:text-orange-600 transition-colors">{p.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
