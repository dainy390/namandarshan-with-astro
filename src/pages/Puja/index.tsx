import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import PujaCard from "./components/PujaCard";
import { useEffect, useState, useRef, useMemo } from "react";
import { getApiUrl } from "@/utils/api";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Video, Gift, Users, MessageCircle, Phone, Search, Filter, Check, X, ChevronDown, Moon, ShieldAlert, Crown, BookOpen, Eclipse, Scale, Coins, Sun, Flame, Sparkles, Heart, Star, MapPin } from "lucide-react";
import { openWhatsApp } from "@/services/native";

// Reusable Premium Custom Select Component to prevent native browser select alignments and overflows
const CustomSelect = ({
    label,
    value,
    options,
    onChange,
    align = "left"
}: {
    label: string;
    value: string;
    options: { value: string; label: string }[];
    onChange: (val: string) => void;
    align?: "left" | "right";
}) => {
    const [isOpen, setIsOpen] = useState(false);

    // Find active label
    const activeOption = options.find(opt => opt.value === value);
    const displayLabel = activeOption ? activeOption.label : label;

    return (
        <div className="relative w-full min-w-0">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full h-11 px-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-700 font-semibold text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-[#D77E1E] cursor-pointer flex items-center justify-between gap-1 transition-all hover:bg-stone-100"
            >
                <span className="truncate">{displayLabel}</span>
                <ChevronDown className={`h-4 w-4 text-stone-500 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div className="fixed inset-0 z-[80]" onClick={() => setIsOpen(false)} />

                    {/* Popover List */}
                    <div className={`absolute top-full ${align === "left" ? "left-0" : "right-0"} mt-2 w-[220px] bg-white rounded-2xl shadow-2xl border border-stone-150 py-1.5 z-[90] max-h-[250px] overflow-y-auto animate-in fade-in zoom-in-95 duration-100 scrollbar-thin`}>
                        {options.map((opt) => (
                            <button
                                key={opt.value}
                                type="button"
                                onClick={() => {
                                    onChange(opt.value);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-4 py-2 text-xs md:text-sm font-semibold transition-colors flex items-center justify-between ${opt.value === value
                                        ? "bg-orange-50 text-[#D77E1E]"
                                        : "text-stone-750 hover:bg-stone-50"
                                    }`}
                            >
                                <span className="truncate">{opt.label}</span>
                                {opt.value === value && <Check className="h-3.5 w-3.5 text-[#D77E1E]" />}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

// Deity Data with Premium Assets/Fallbacks for the Dropdown Filter
interface DeityFilterItem {
    name: string;
    image?: string;
    icon?: string;
    gradient?: string;
}

const deitiesList: DeityFilterItem[] = [
    { name: "Chandra Dev", icon: "Moon", gradient: "from-indigo-950 via-slate-900 to-indigo-900 text-indigo-300" },
    { name: "Hanumanji", image: "/assets/BAJRANG BALI_Adobe illustrator (1).png" },
    { name: "Kaal Bhairav", icon: "ShieldAlert", gradient: "from-neutral-950 via-zinc-900 to-red-950 text-red-500" },
    { name: "Maa Lalita", image: "/assets/Maha Shakti Tridevi Puja_ Adobe illustrator (1).png" },
    { name: "Maa Bagalamukhi", image: "/assets/Maha Shakti Tridevi Puja_ Adobe illustrator (1).png" },
    { name: "Ganeshji", icon: "Crown", gradient: "from-amber-500 via-orange-500 to-amber-600 text-amber-100" },
    { name: "Buddh", icon: "BookOpen", gradient: "from-emerald-700 via-teal-800 to-emerald-950 text-emerald-300" },
    { name: "Rahu", icon: "Eclipse", gradient: "from-purple-950 via-slate-950 to-indigo-950 text-indigo-300" },
    { name: "Shani Dev", icon: "Scale", gradient: "from-slate-900 via-slate-950 to-neutral-800 text-slate-400" },
    { name: "Maa Laxmi", image: "/assets/Maha Laxmi Mata Puja_ Adobe illustrator uhd (2).png" },
    { name: "Swarnakarshana Bhairav", icon: "Coins", gradient: "from-yellow-600 via-amber-500 to-yellow-800 text-yellow-100" },
    { name: "Maa Tara", image: "/assets/Maha Shakti Tridevi Puja_ Adobe illustrator (1).png" },
    { name: "Shivji", image: "/assets/shiv Rudrabhishek_Adobe illustrator (1).png" },
    { name: "Maa Kali", image: "/assets/Maha Shakti Tridevi Puja_ Adobe illustrator (1).png" },
    { name: "Surya Dev", icon: "Sun", gradient: "from-amber-500 via-orange-500 to-red-600 text-amber-100" },
    { name: "Batuk Bhairav", icon: "Flame", gradient: "from-orange-600 via-red-600 to-red-700 text-orange-200" },
    { name: "Lord Brihaspati", icon: "Sparkles", gradient: "from-yellow-400 via-amber-400 to-amber-600 text-yellow-100" },
    { name: "Mangalnath Mahadev", icon: "Flame", gradient: "from-red-600 via-orange-600 to-red-800 text-red-200" },
    { name: "Maa Durga", image: "/assets/Maha Shakti Tridevi Puja_ Adobe illustrator (1).png" },
    { name: "Lord Vishnu", icon: "Crown", gradient: "from-blue-700 via-indigo-800 to-indigo-950 text-blue-100" }
];

const pujaMetadataLookup: Record<string, { deity: string; category: string; temple: string; state: string }> = {
    "sunderkand-path-puja": { deity: "Hanumanji", category: "Popular Pujas", temple: "Ayodhya Ram Mandir", state: "Uttar Pradesh" },
    "sunderkand-path": { deity: "Hanumanji", category: "Popular Pujas", temple: "Ayodhya Ram Mandir", state: "Uttar Pradesh" },
    "sunderkand-paath-ayodhya-booking": { deity: "Hanumanji", category: "Popular Pujas", temple: "Ayodhya Ram Mandir", state: "Uttar Pradesh" },
    "1": { deity: "Hanumanji", category: "Popular Pujas", temple: "Ayodhya Ram Mandir", state: "Uttar Pradesh" },
    "shiv-rudrabhishek-puja": { deity: "Shivji", category: "Popular Pujas", temple: "Kashi Vishwanath", state: "Uttar Pradesh" },
    "shiv-rudrabhishek": { deity: "Shivji", category: "Popular Pujas", temple: "Kashi Vishwanath", state: "Uttar Pradesh" },
    "2": { deity: "Shivji", category: "Popular Pujas", temple: "Kashi Vishwanath", state: "Uttar Pradesh" },
    "maha-laxmi-mata-puja": { deity: "Maa Laxmi", category: "Popular Pujas", temple: "Home", state: "All" },
    "3": { deity: "Maa Laxmi", category: "Popular Pujas", temple: "Home", state: "All" },
    "panchamrut-abhishek-puja": { deity: "Shivji", category: "Temple Wise Pujas", temple: "Any Temple", state: "All" },
    "panchamrut-abhishek": { deity: "Shivji", category: "Temple Wise Pujas", temple: "Any Temple", state: "All" },
    "4": { deity: "Shivji", category: "Temple Wise Pujas", temple: "Any Temple", state: "All" },
    "shodashopachar-puja": { deity: "Ganeshji", category: "Problem Based Pujas", temple: "Any Temple", state: "All" },
    "shodashopachar": { deity: "Ganeshji", category: "Problem Based Pujas", temple: "Any Temple", state: "All" },
    "5": { deity: "Ganeshji", category: "Problem Based Pujas", temple: "Any Temple", state: "All" },
    "maha-shakti-tridevi-puja": { deity: "Maa Durga", category: "Festival Pujas", temple: "Shakti Peeth", state: "All" },
    "maha-shakti-tridevi": { deity: "Maa Durga", category: "Festival Pujas", temple: "Shakti Peeth", state: "All" },
    "6": { deity: "Maa Durga", category: "Festival Pujas", temple: "Shakti Peeth", state: "All" },
    "khatu-shyam-ji-puja": { deity: "Lord Vishnu", category: "Temple Wise Pujas", temple: "Khatu Shyam Mandir", state: "Rajasthan" },
    "7": { deity: "Lord Vishnu", category: "Temple Wise Pujas", temple: "Khatu Shyam Mandir", state: "Rajasthan" },
    "shri-krishna-janmabhoomi-puja": { deity: "Lord Vishnu", category: "Temple Wise Pujas", temple: "Krishna Janmabhoomi", state: "Uttar Pradesh" },
    "8": { deity: "Lord Vishnu", category: "Temple Wise Pujas", temple: "Krishna Janmabhoomi", state: "Uttar Pradesh" },
    "prem-mandir-puja": { deity: "Lord Vishnu", category: "Temple Wise Pujas", temple: "Prem Mandir", state: "Uttar Pradesh" },
    "9": { deity: "Lord Vishnu", category: "Temple Wise Pujas", temple: "Prem Mandir", state: "Uttar Pradesh" },
    "swarnakarshana-bhairavar-maha-homam-puja": { deity: "Swarnakarshana Bhairav", category: "Problem Based Pujas", temple: "Bhairavar Temple", state: "Tamil Nadu" },
    "swarnakarshana-bhairavar-maha-homam": { deity: "Swarnakarshana Bhairav", category: "Problem Based Pujas", temple: "Bhairavar Temple", state: "Tamil Nadu" },
    "10": { deity: "Swarnakarshana Bhairav", category: "Problem Based Pujas", temple: "Bhairavar Temple", state: "Tamil Nadu" },
    "sri-jogulamba-chandi-homam": { deity: "Maa Durga", category: "Temple Wise Pujas", temple: "Jogulamba Devi Temple", state: "Telangana" },
    "11": { deity: "Maa Durga", category: "Temple Wise Pujas", temple: "Jogulamba Devi Temple", state: "Telangana" },
    "penchalakona-lakshmi-narasimha-swamy-nithyakalyanotsavam": { deity: "Lord Vishnu", category: "Temple Wise Pujas", temple: "Penchalakona Temple", state: "Andhra Pradesh" },
    "12": { deity: "Lord Vishnu", category: "Temple Wise Pujas", temple: "Penchalakona Temple", state: "Andhra Pradesh" },
    "santhanaprapthi-and-jwala-narasimha-shanti-puja-malakonda": { deity: "Lord Vishnu", category: "Problem Based Pujas", temple: "Malakonda Temple", state: "Andhra Pradesh" },
    "13": { deity: "Lord Vishnu", category: "Problem Based Pujas", temple: "Malakonda Temple", state: "Andhra Pradesh" },
    "sathya-pranamam-oath-of-truth": { deity: "Shivji", category: "Problem Based Pujas", temple: "Sathya Pramanam Temple", state: "Tamil Nadu" },
    "14": { deity: "Shivji", category: "Problem Based Pujas", temple: "Sathya Pramanam Temple", state: "Tamil Nadu" },
    "shri-naina-devi-ji-temple-bilaspur-himachal-pradesh": { deity: "Maa Durga", category: "Temple Wise Pujas", temple: "Naina Devi Temple", state: "Himachal Pradesh" },
    "15": { deity: "Maa Durga", category: "Temple Wise Pujas", temple: "Naina Devi Temple", state: "Himachal Pradesh" },
    "shoroshi-tripura-sundari-shringar--akhanda-deep-puja": { deity: "Maa Lalita", category: "Temple Wise Pujas", temple: "Tripura Sundari Temple", state: "Tripura" },
    "16": { deity: "Maa Lalita", category: "Temple Wise Pujas", temple: "Tripura Sundari Temple", state: "Tripura" },
    "rudrabhishek-puja": { deity: "Shivji", category: "Popular Pujas", temple: "Any Temple", state: "All" },
    "17": { deity: "Shivji", category: "Popular Pujas", temple: "Any Temple", state: "All" },
    "kalkaji-mandir-puja": { deity: "Maa Kali", category: "Temple Wise Pujas", temple: "Kalkaji Mandir", state: "Delhi" },
    "18": { deity: "Maa Kali", category: "Temple Wise Pujas", temple: "Kalkaji Mandir", state: "Delhi" },
    "dharmasthala-shata-rudrabhisheka-vip-darshan": { deity: "Shivji", category: "Temple Wise Pujas", temple: "Dharmasthala Temple", state: "Karnataka" },
    "19": { deity: "Shivji", category: "Temple Wise Pujas", temple: "Dharmasthala Temple", state: "Karnataka" },
    "kotilingala-koteswara-swamy-abhisheka-vip-darshan": { deity: "Shivji", category: "Temple Wise Pujas", temple: "Kotilingala Temple", state: "Andhra Pradesh" },
    "20": { deity: "Shivji", category: "Temple Wise Pujas", temple: "Kotilingala Temple", state: "Andhra Pradesh" },
    "dwadasa-jyotirlinga-abhishekam--vip-darshan": { deity: "Shivji", category: "Temple Wise Pujas", temple: "Jyotirlinga Temple", state: "All" },
    "21": { deity: "Shivji", category: "Temple Wise Pujas", temple: "Jyotirlinga Temple", state: "All" },
    "kotappakonda-trikoteswara-swamy-rudrabhishekam-puja": { deity: "Shivji", category: "Temple Wise Pujas", temple: "Kotappakonda Temple", state: "Andhra Pradesh" },
    "22": { deity: "Shivji", category: "Temple Wise Pujas", temple: "Kotappakonda Temple", state: "Andhra Pradesh" },
    "jhandewalan-temple-puja": { deity: "Maa Durga", category: "Temple Wise Pujas", temple: "Jhandewalan Mandir", state: "Delhi" },
    "23": { deity: "Maa Durga", category: "Temple Wise Pujas", temple: "Jhandewalan Mandir", state: "Delhi" },
    "eka-rudrabhishekam--vip-special-darshan": { deity: "Shivji", category: "Popular Pujas", temple: "Any Temple", state: "All" },
    "24": { deity: "Shivji", category: "Popular Pujas", temple: "Any Temple", state: "All" },
    "panakala-lakshmi-narasimha-swamy-temple-puja": { deity: "Lord Vishnu", category: "Temple Wise Pujas", temple: "Simhachalam", state: "Andhra Pradesh" },
    "25": { deity: "Lord Vishnu", category: "Temple Wise Pujas", temple: "Simhachalam", state: "Andhra Pradesh" },
    "ekambareswarar-temple-puja-kanchipuram": { deity: "Shivji", category: "Temple Wise Pujas", temple: "Ekambareswarar Temple", state: "Tamil Nadu" },
    "26": { deity: "Shivji", category: "Temple Wise Pujas", temple: "Ekambareswarar Temple", state: "Tamil Nadu" },
    "badrinath-maha-abhishek-puja-vip-darshan-booking": { deity: "Lord Vishnu", category: "Temple Wise Pujas", temple: "Badrinath Temple", state: "Uttarakhand" },
    "27": { deity: "Lord Vishnu", category: "Temple Wise Pujas", temple: "Badrinath Temple", state: "Uttarakhand" },
    "sri-jogulamba-chandi-homam--vip-darshan": { deity: "Maa Durga", category: "Temple Wise Pujas", temple: "Jogulamba Temple", state: "Telangana" },
    "29": { deity: "Maa Durga", category: "Temple Wise Pujas", temple: "Jogulamba Temple", state: "Telangana" },
    "yadadri-sudarshana-narasimha-homam": { deity: "Lord Vishnu", category: "Problem Based Pujas", temple: "Yadadri Temple", state: "Telangana" },
    "30": { deity: "Lord Vishnu", category: "Problem Based Pujas", temple: "Yadadri Temple", state: "Telangana" },
    "ganga-pujan-and-bhagirathi-shila-abhishek": { deity: "Chandra Dev", category: "Temple Wise Pujas", temple: "Gangotri", state: "Uttarakhand" },
    "31": { deity: "Chandra Dev", category: "Temple Wise Pujas", temple: "Gangotri", state: "Uttarakhand" },
    "mm-hills-maharudrabhisheka-seva": { deity: "Shivji", category: "Temple Wise Pujas", temple: "MM Hills Temple", state: "Karnataka" },
    "32": { deity: "Shivji", category: "Temple Wise Pujas", temple: "MM Hills Temple", state: "Karnataka" },
    "simhachalam-nijaroopa-darshan-chandanotsavam": { deity: "Lord Vishnu", category: "Temple Wise Pujas", temple: "Simhachalam Temple", state: "Andhra Pradesh" },
    "33": { deity: "Lord Vishnu", category: "Temple Wise Pujas", temple: "Simhachalam Temple", state: "Andhra Pradesh" },
    "linga-bhairavi-devi-abhishekam-puja": { deity: "Maa Durga", category: "Temple Wise Pujas", temple: "Isha Yoga Center", state: "Tamil Nadu" },
    "34": { deity: "Maa Durga", category: "Temple Wise Pujas", temple: "Isha Yoga Center", state: "Tamil Nadu" },
    "neelkanth-mahadev-maha-rudrabhishek-puja-vip-darshan": { deity: "Shivji", category: "Temple Wise Pujas", temple: "Neelkanth Mahadev", state: "Uttarakhand" },
    "35": { deity: "Shivji", category: "Temple Wise Pujas", temple: "Neelkanth Mahadev", state: "Uttarakhand" }
};

const Puja = () => {
    const navigate = useNavigate();
    const [pujas, setPujas] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedTemple, setSelectedTemple] = useState("all");
    const [selectedProblem, setSelectedProblem] = useState("all");
    const [selectedFestival, setSelectedFestival] = useState("all");

    // Custom Deity & Puja Dropdown States
    const [isDeityModalOpen, setIsDeityModalOpen] = useState(false);
    const [tempSelectedDeities, setTempSelectedDeities] = useState<string[]>([]);
    const [appliedDeities, setAppliedDeities] = useState<string[]>([]);
    const [modalSearchQuery, setModalSearchQuery] = useState("");
    const [selectedPujaMode, setSelectedPujaMode] = useState("all");


    useEffect(() => {
        setLoading(true);
        fetch(getApiUrl("/api/pujas"))
            .then(res => res.json())
            .then(data => {
                setPujas(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const dynamicFilterOptions = useMemo(() => {
        const categories = new Set<string>(["Popular Pujas", "Problem Based Pujas", "Festival Pujas", "Temple Wise Pujas"]);
        const problems = new Set<string>([
            "Debt, financial stagnancy", "Marriage obstacles", "Progeny / childlessness",
            "Justice, disputes", "Beauty, marital bliss, career", "Negative energies, evil eye",
            "Health, abundance", "Health, negative energies"
        ]);
        const festivals = new Set<string>([
            "Phalguna Mela / Shyam Utsav", "Janmashtami", "Radhashtami / Krishna festivals",
            "Navratri", "Akshaya Tritiya (once a year)"
        ]);
        const temples = new Set<string>([
            "Dharmasthala", "Kotilingala", "Punyalingeswara Swamy Kshetram", "Kotappakonda",
            "Amaralingeswara Swamy Temple", "Mangalagiri", "Ekambareswarar Temple, Kanchipuram",
            "Gangotri Temple", "MM Hills", "Ayodhya Ram Mandir", "Kashi Vishwanath",
            "Kedarnath", "Shakti Peeth"
        ]);

        pujas.forEach(puja => {
            // Meta fallback logic exists further down, but for dynamic dropdowns we just pull what's strictly defined on the object or rely on defaults.
            if (puja.category) categories.add(puja.category);
            if (puja.problemAddressed) problems.add(puja.problemAddressed);
            if (puja.festival) festivals.add(puja.festival);
            if (puja.temple) temples.add(puja.temple);
        });

        return {
            categories: Array.from(categories),
            problems: Array.from(problems).sort(),
            festivals: Array.from(festivals).sort(),
            temples: Array.from(temples).sort()
        };
    }, [pujas]);

    const getPujaMetadata = (id: string | number, slug?: string) => {
        const key = (slug || String(id)).toLowerCase().trim();
        const matched = pujaMetadataLookup[key];
        if (matched) return matched;

        // Smart fallback logic for any new dynamic database-seeded pujas:
        const lowerSlug = key.toLowerCase();
        let matchedDeity = "All Deities";
        if (lowerSlug.includes("hanuman") || lowerSlug.includes("sunderkand")) matchedDeity = "Hanumanji";
        else if (lowerSlug.includes("shiv") || lowerSlug.includes("rudra") || lowerSlug.includes("mahadev") || lowerSlug.includes("lingam") || lowerSlug.includes("abhisheka")) matchedDeity = "Shivji";
        else if (lowerSlug.includes("laxmi") || lowerSlug.includes("narasimha")) matchedDeity = "Maa Laxmi";
        else if (lowerSlug.includes("ganesh")) matchedDeity = "Ganeshji";
        else if (lowerSlug.includes("durga") || lowerSlug.includes("chandi") || lowerSlug.includes("shakti") || lowerSlug.includes("devi") || lowerSlug.includes("bhairavi")) matchedDeity = "Maa Durga";
        else if (lowerSlug.includes("kali")) matchedDeity = "Maa Kali";
        else if (lowerSlug.includes("bhairav")) matchedDeity = "Kaal Bhairav";
        else if (lowerSlug.includes("krishna") || lowerSlug.includes("vishnu") || lowerSlug.includes("shyam") || lowerSlug.includes("badrinath")) matchedDeity = "Lord Vishnu";
        else if (lowerSlug.includes("shani")) matchedDeity = "Shani Dev";
        else if (lowerSlug.includes("surya")) matchedDeity = "Surya Dev";

        return {
            deity: matchedDeity,
            category: "Popular Pujas",
            temple: "Temple"
        };
    };

    const filteredPujas = pujas.filter(puja => {
        const meta = getPujaMetadata(puja.id, puja.slug);

        // Exact title match gets priority and bypasses deity filters for superior search UX!
        const isExactTitleSearchMatch = searchQuery.trim() !== "" &&
            puja.title.toLowerCase().includes(searchQuery.toLowerCase().trim());

        const matchesSearch = puja.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            puja.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            puja.about.toLowerCase().includes(searchQuery.toLowerCase());

        // Check if there are any applied filters
        const matchesDeity = isExactTitleSearchMatch || appliedDeities.length === 0 ||
            appliedDeities.some(filterName => {
                const isExactPuja = pujas.some(p => p.title.toLowerCase() === filterName.toLowerCase());

                if (isExactPuja) {
                    return puja.title.toLowerCase() === filterName.toLowerCase();
                } else {
                    return meta.deity.toLowerCase() === filterName.toLowerCase() ||
                        meta.deity === "All Deities" ||
                        puja.title.toLowerCase().includes(filterName.toLowerCase()) ||
                        puja.description.toLowerCase().includes(filterName.toLowerCase()) ||
                        (filterName === "Hanumanji" && (puja.title.toLowerCase().includes("hanuman") || puja.description.toLowerCase().includes("hanuman"))) ||
                        (filterName === "Shivji" && (puja.title.toLowerCase().includes("shiv") || puja.description.toLowerCase().includes("shiv"))) ||
                        (filterName === "Maa Laxmi" && (puja.title.toLowerCase().includes("laxmi") || puja.description.toLowerCase().includes("laxmi"))) ||
                        (filterName === "Kaal Bhairav" && (puja.title.toLowerCase().includes("bhairav") || puja.description.toLowerCase().includes("bhairav"))) ||
                        (filterName === "Batuk Bhairav" && (puja.title.toLowerCase().includes("bhairav") || puja.description.toLowerCase().includes("bhairav"))) ||
                        (filterName === "Swarnakarshana Bhairav" && (puja.title.toLowerCase().includes("bhairav") || puja.description.toLowerCase().includes("bhairav"))) ||
                        (filterName === "Maa Kali" && (puja.title.toLowerCase().includes("kali") || puja.description.toLowerCase().includes("kali"))) ||
                        (filterName === "Maa Durga" && (puja.title.toLowerCase().includes("durga") || puja.description.toLowerCase().includes("durga")));
                }
            });

        const pujaCategory = puja.category || meta.category;
        const pujaTemple = puja.temple || meta.temple;

        const matchesCategory = selectedCategory === "all" || pujaCategory === selectedCategory;
        const matchesTemple = selectedCategory !== "Temple Wise Pujas" || selectedTemple === "all" || pujaTemple.toLowerCase().includes(selectedTemple.toLowerCase());

        const matchesProblem = selectedCategory !== "Problem Based Pujas" ||
            selectedProblem === "all" ||
            (puja.problemAddressed && puja.problemAddressed === selectedProblem);

        const matchesFestival = selectedCategory !== "Festival Pujas" ||
            selectedFestival === "all" ||
            (puja.festival && puja.festival === selectedFestival);

        // Mode filter strictly based on database checkbox fields from CRM
        const matchesMode = selectedPujaMode === "all" ||
            (selectedPujaMode === "Live Online Puja" && !!puja.isOnline) ||
            (selectedPujaMode === "Temple Visit Puja" && !!puja.isTemple) ||
            (selectedPujaMode === "At-Home Puja Service" && !!puja.isHome);

        return matchesSearch && matchesDeity && matchesCategory && matchesTemple && matchesProblem && matchesFestival && matchesMode;
    });

    const heroSlides = [
        {
            id: "shiv-rudrabhishek-puja",
            image: "/assets/shiv Rudrabhishek_Adobe illustrator (1).png",
            mobileImage: "/assets/1.png",
            subtitle: "MAHADEV ARADHANA",
            title: "Shiv Rudrabhishek",
            buttonText: "SEEK DIVINE BLESSINGS"
        },
        {
            id: "sunderkand-path-puja",
            image: "/assets/BAJRANG BALI_Adobe illustrator (1).png",
            mobileImage: "/assets/2.png",
            subtitle: "BAJRANG BALI KRIPA",
            title: "Shri Sunderkand Path",
            buttonText: "ENTER FOR SHUBH SANKALP"
        },
        {
            id: "maha-shakti-tridevi-puja",
            image: "/assets/Maha Shakti Tridevi Puja_ Adobe illustrator (1).png",
            mobileImage: "/assets/file_00000000530c71fd8af971b9a3f87ddb.png",
            subtitle: "SHAKTI INVOCATION",
            title: "Maha Shakti Tridevi Puja",
            buttonText: "RECEIVE DIVINE PROTECTION"
        },
        {
            id: "maha-laxmi-mata-puja",
            image: "/assets/Maha Laxmi Mata Puja_ Adobe illustrator uhd (2).png",
            mobileImage: "/assets/3.png",
            subtitle: "SHRI-ABUNDANCE",
            title: "Maha Laxmi Mata Puja",
            buttonText: "INVOKE PROSPERITY"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-stone-50">
            <SEO
                title="Online Puja Booking"
                keywords={["Online Puja", "Vedic Rituals", "E-Puja", "Rudrabhishek Online", "Hindu Ceremonies"]}
                description="Explore temples, darshan guides, puja services, prasad offerings, and spiritual blogs in one place."
            />
            <Header />
            <main className="flex-grow pt-40 md:pt-48 lg:pt-52 pb-16"> {/* Adjusted padding to match fixed header height */}

                {/* Hero Carousel Section */}
                <div className="w-full mb-2 md:mb-8">
                    <div className="relative w-full overflow-hidden shadow-lg border-y border-gray-100 mb-2 md:mb-10 bg-gray-50">
                        <Carousel
                            opts={{ loop: true, align: "start" }}
                            plugins={[Autoplay({ delay: 4000 })]}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-0">
                                {heroSlides.map((slide, index) => (
                                    <CarouselItem key={index} className="pl-0 basis-full relative group">
                                        <div className="w-full overflow-hidden relative">
                                            <picture>
                                                <source media="(max-width: 768px)" srcSet={slide.mobileImage || slide.image} />
                                                <img
                                                    src={slide.image}
                                                    alt={slide.title}
                                                    className="w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-auto md:h-[500px] lg:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                                                />
                                            </picture>
                                            {/* Text Overlay matching Recommendation */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10 md:bg-gradient-to-r md:from-black/90 md:via-black/60 md:to-transparent flex flex-col justify-end pb-20 pt-12 md:justify-center p-5 md:p-12 lg:p-20 items-start">

                                                {/* Pre-title Badge */}
                                                <span className="text-[#D77E1E] font-extrabold tracking-widest text-xs md:text-sm uppercase mb-2 md:mb-4 bg-[#FFF9F2] px-3 py-1 rounded-full border border-orange-100 shadow-sm animate-pulse">
                                                    {slide.subtitle} • {slide.title}
                                                </span>

                                                {/* Keyword-Rich H1 Headline */}
                                                <h1 className="font-display text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight drop-shadow-md select-none max-w-2xl">
                                                    Sacred Puja Bookings at India's Holiest Temples
                                                </h1>

                                                {/* Sub-headline / Trust Ticker */}
                                                <p className="text-gray-300 text-xs md:text-sm lg:text-base max-w-xl mb-6 md:mb-8 font-medium leading-relaxed">
                                                    Performed by verified pandits · Video proof guaranteed · Prasad delivered
                                                </p>

                                                {/* Trust Ticker */}
                                                <div className="inline-flex items-center gap-x-4 gap-y-1.5 flex-wrap bg-amber-900/70 backdrop-blur-sm border border-amber-500/30 px-5 py-2.5 rounded-full text-xs md:text-sm font-bold text-white shadow-lg mb-6 md:mb-8">
                                                    <span className="text-amber-400">4,200+ Pujas</span>
                                                    <span className="text-white/30 hidden sm:inline">•</span>
                                                    <span className="text-amber-400">500+ Pandits</span>
                                                    <span className="text-white/30 hidden sm:inline">•</span>
                                                    <span className="text-white">Video Proof Guaranteed</span>
                                                </div>

                                                {/* Double CTA Buttons */}
                                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                                                    {/* Primary CTA (Saffron) */}
                                                    <button
                                                        onClick={() => {
                                                            const gridElement = document.getElementById("puja-grid");
                                                            if (gridElement) {
                                                                gridElement.scrollIntoView({ behavior: "smooth" });
                                                            } else {
                                                                window.scrollTo({ top: 700, behavior: "smooth" });
                                                            }
                                                        }}
                                                        className="bg-[#D77E1E] hover:bg-orange-600 text-white text-xs md:text-sm lg:text-base font-bold py-3 px-6 md:py-3.5 md:px-8 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 tracking-widest uppercase text-center shrink-0"
                                                    >
                                                        Book a Puja Now
                                                    </button>

                                                    {/* Call Us CTA (Green) */}
                                                    <a
                                                        href="tel:+919311973199"
                                                        className="bg-[#107050] hover:bg-[#0c5940] text-white text-xs md:text-sm lg:text-base font-bold py-3 px-6 md:py-3.5 md:px-8 rounded-xl shadow-lg hover:shadow-green-800/30 transition-all transform hover:-translate-y-0.5 tracking-widest uppercase text-center flex items-center justify-center gap-2 shrink-0"
                                                    >
                                                        <Phone className="w-4 h-4 md:w-5 md:h-5" />
                                                        Call Us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>

                        {/* Bottom Trust Badges Bar */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-orange-950/95 via-amber-950/95 to-orange-950/95 backdrop-blur-md border-t border-orange-500/20 py-2 px-3 md:py-3.5 md:px-6 z-20">
                            <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-12 gap-y-1 text-[10px] md:text-sm font-bold text-white/90 tracking-wide">
                                <div className="flex items-center gap-1.5 md:gap-3">
                                    <ShieldCheck className="w-3.5 h-3.5 md:w-4 h-4 text-orange-400 shrink-0" />
                                    <span>Secure Payment</span>
                                </div>
                                <span className="text-white/30 font-light hidden md:block text-base select-none">•</span>
                                <div className="flex items-center gap-1.5 md:gap-3">
                                    <Video className="w-3.5 h-3.5 md:w-4 h-4 text-orange-400 shrink-0" />
                                    <span>Video Proof</span>
                                </div>
                                <span className="text-white/30 font-light hidden md:block text-base select-none">•</span>
                                <div className="flex items-center gap-1.5 md:gap-3">
                                    <Gift className="w-3.5 h-3.5 md:w-4 h-4 text-orange-400 shrink-0" />
                                    <span>Prasad Delivery</span>
                                </div>
                                <span className="text-white/30 font-light hidden md:block text-base select-none">•</span>
                                <div className="flex items-center gap-1.5 md:gap-3">
                                    <Users className="w-3.5 h-3.5 md:w-4 h-4 text-orange-400 shrink-0" />
                                    <span>Seva Team</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Puja Grid */}
                <div id="puja-grid" className="container mx-auto px-4 mb-24 scroll-mt-40">
                    <div className="flex items-center justify-between mb-8">
                        <div className="h-1 flex-grow mr-6 bg-gradient-to-l from-orange-200 to-transparent rounded-full hidden md:block" />
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary whitespace-nowrap flex items-center gap-2 shrink-0 justify-center w-full md:w-auto">
                            <span>🕉️</span>
                            <span>Sacred Offerings</span>
                            <span>🕉️</span>
                        </h2>
                        <div className="h-1 flex-grow ml-6 bg-gradient-to-r from-orange-200 to-transparent rounded-full hidden md:block" />
                    </div>

                    {/* One-Line Search and Filters Container */}
                    <div className="mb-10 w-full max-w-6xl mx-auto bg-white p-4 rounded-2xl shadow-md border border-stone-100">
                        <div className="flex flex-col lg:flex-row items-stretch gap-3 w-full min-w-0">
                            {/* Search Input */}
                            <div className="relative flex-grow lg:flex-grow-[1.5] min-w-0">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400 h-4.5 w-4.5" />
                                <input
                                    type="text"
                                    placeholder="Search pujas by name, deity or benefits..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-11 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-[#D77E1E] transition-all font-medium text-sm md:text-base h-11"
                                />
                            </div>

                            {/* Dropdowns Grid Wrapper for Mobile, Flex for Desktop */}
                            <div className="grid grid-cols-2 lg:flex lg:flex-row lg:items-stretch lg:flex-grow gap-2.5 lg:gap-3 w-full lg:w-auto min-w-0">
                                {/* Deity Custom Dropdown Button */}
                                <div className="col-span-1 w-full lg:flex-1 lg:min-w-[140px] relative min-w-0">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setTempSelectedDeities(appliedDeities);
                                            setIsDeityModalOpen(!isDeityModalOpen);
                                        }}
                                        className="w-full h-11 px-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-700 font-semibold text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-[#D77E1E] cursor-pointer flex items-center justify-between gap-1 transition-all hover:bg-stone-100"
                                    >
                                        <span className="truncate">
                                            {appliedDeities.length === 0
                                                ? "Deity: All"
                                                : appliedDeities.length === 1
                                                    ? `${appliedDeities[0]}`
                                                    : `${appliedDeities.length} Selected`}
                                        </span>
                                        <ChevronDown className={`h-4 w-4 text-stone-500 shrink-0 transition-transform duration-200 ${isDeityModalOpen ? "rotate-180" : ""}`} />
                                    </button>

                                    {/* Dropdown popover catch-outside invisible catcher */}
                                    {isDeityModalOpen && (
                                        <div
                                            className="fixed inset-0 z-[80]"
                                            onClick={() => setIsDeityModalOpen(false)}
                                        />
                                    )}

                                    {/* Premium custom deities select modal/popover */}
                                    {isDeityModalOpen && (
                                        <>
                                            {/* Mobile-only backdrop blurry overlay */}
                                            <div
                                                className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-[90] md:hidden"
                                                onClick={() => setIsDeityModalOpen(false)}
                                            />

                                            {/* Floating Dropdown Card container */}
                                            <div className="fixed md:absolute md:top-full md:right-0 md:mt-2 w-[92vw] sm:w-[480px] md:w-[600px] bg-white rounded-3xl shadow-2xl border border-stone-150 p-4 md:p-5 z-[100] left-1/2 md:left-auto transform -translate-x-1/2 md:translate-x-0 top-1/2 md:top-auto -translate-y-1/2 md:translate-y-0 max-h-[85vh] md:max-h-[500px] flex flex-col animate-in fade-in zoom-in duration-200">
                                                {/* Header */}
                                                <div className="flex items-center justify-between mb-3 border-b border-stone-100 pb-2.5">
                                                    <h3 className="text-base md:text-lg font-bold text-stone-900 flex items-center gap-2">
                                                        <span>Puja Filters</span>
                                                        <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-semibold">
                                                            {tempSelectedDeities.length} Selected
                                                        </span>
                                                    </h3>
                                                    <button
                                                        type="button"
                                                        onClick={() => setIsDeityModalOpen(false)}
                                                        className="p-1 rounded-full hover:bg-stone-100 transition-colors text-stone-400 hover:text-stone-700"
                                                    >
                                                        <X className="h-5 w-5" />
                                                    </button>
                                                </div>



                                                {/* Modal Search Bar */}
                                                <div className="relative mb-3.5">
                                                    <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-stone-400 h-4 w-4" />
                                                    <input
                                                        type="text"
                                                        placeholder="Search specific pujas..."
                                                        value={modalSearchQuery}
                                                        onChange={(e) => setModalSearchQuery(e.target.value)}
                                                        className="w-full pl-9.5 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-stone-850 placeholder-stone-450 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-[#D77E1E] transition-all font-semibold text-xs h-9"
                                                    />
                                                </div>

                                                {/* Grid */}
                                                <div className="overflow-y-auto pr-1 flex-grow scrollbar-thin scrollbar-thumb-stone-200">
                                                    <div className="grid gap-3 p-1 grid-cols-2 sm:grid-cols-3">
                                                        {pujas
                                                            .filter(p => p.title.toLowerCase().includes(modalSearchQuery.toLowerCase()))
                                                            .map((pujaItem) => {
                                                                const isSelected = tempSelectedDeities.includes(pujaItem.title);
                                                                return (
                                                                    <div
                                                                        key={pujaItem.id}
                                                                        onClick={() => {
                                                                            if (isSelected) {
                                                                                setTempSelectedDeities(tempSelectedDeities.filter(d => d !== pujaItem.title));
                                                                            } else {
                                                                                setTempSelectedDeities([...tempSelectedDeities, pujaItem.title]);
                                                                            }
                                                                        }}
                                                                        className="group cursor-pointer flex flex-col items-center select-none"
                                                                    >
                                                                        {/* Image Card Container */}
                                                                        <div className="relative w-full aspect-[4/3] bg-stone-50 border border-stone-100 rounded-2xl overflow-hidden shadow-sm transition-all group-hover:scale-[1.03] duration-250">
                                                                            <img
                                                                                src={pujaItem.image}
                                                                                alt={pujaItem.title}
                                                                                className="w-full h-full object-cover"
                                                                                onError={(e) => {
                                                                                    (e.target as HTMLImageElement).src = "/assets/naman.webp";
                                                                                }}
                                                                            />

                                                                            {/* Checkbox Overlay */}
                                                                            <div
                                                                                className={`absolute top-1.5 right-1.5 h-5 w-5 rounded-md flex items-center justify-center border shadow transition-all ${isSelected
                                                                                        ? 'bg-[#2563EB] border-[#2563EB] text-white'
                                                                                        : 'bg-white/80 backdrop-blur-xs border-stone-300 text-transparent'
                                                                                    }`}
                                                                            >
                                                                                <Check className="h-3 w-3 stroke-[3]" />
                                                                            </div>
                                                                        </div>

                                                                        {/* Title */}
                                                                        <span className="mt-1.5 text-stone-750 font-bold text-[10px] sm:text-xs text-center leading-snug line-clamp-2 w-full group-hover:text-orange-600 transition-colors">
                                                                            {pujaItem.title}
                                                                        </span>
                                                                    </div>
                                                                );
                                                            })}
                                                    </div>
                                                </div>

                                                {/* Action Buttons */}
                                                <div className="flex items-center gap-3 border-t border-stone-100 pt-3 mt-3">
                                                    <button
                                                        type="button"
                                                        onClick={() => setTempSelectedDeities([])}
                                                        className="flex-1 py-2 px-4 bg-white hover:bg-stone-50 border border-stone-200 rounded-xl text-stone-700 font-bold text-xs md:text-sm transition-all"
                                                    >
                                                        Clear Filter
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setAppliedDeities(tempSelectedDeities);
                                                            setIsDeityModalOpen(false);
                                                        }}
                                                        className="flex-1 py-2 px-4 bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl text-white font-bold text-xs md:text-sm transition-all shadow-md shadow-blue-500/20"
                                                    >
                                                        Apply Filter
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Puja Mode Dropdown */}
                                <div className="col-span-1 w-full lg:flex-1 lg:min-w-[140px] min-w-0">
                                    <CustomSelect
                                        label="Service: All"
                                        value={selectedPujaMode}
                                        onChange={setSelectedPujaMode}
                                        align="right"
                                        options={[
                                            { value: "all", label: "Service: All" },
                                            { value: "Live Online Puja", label: "Online Puja" },
                                            { value: "Temple Visit Puja", label: "Temple Visit" },
                                            { value: "At-Home Puja Service", label: "At-Home" }
                                        ]}
                                    />
                                </div>

                                {/* Category Dropdown */}
                                <div className="col-span-1 w-full lg:flex-1 lg:min-w-[140px] min-w-0">
                                    <CustomSelect
                                        label="Category: All"
                                        value={selectedCategory}
                                        onChange={setSelectedCategory}
                                        align="left"
                                        options={[
                                            { value: "all", label: "Category: All" },
                                            ...dynamicFilterOptions.categories.map(c => ({ value: c, label: c }))
                                        ]}
                                    />
                                </div>

                                {/* Temple Dropdown (Conditional) */}
                                {selectedCategory === "Temple Wise Pujas" && (
                                    <div className="col-span-1 w-full lg:flex-1 lg:min-w-[140px] min-w-0 animate-in fade-in zoom-in duration-200">
                                        <CustomSelect
                                            label="Temple: All"
                                            value={selectedTemple}
                                            onChange={setSelectedTemple}
                                            align="right"
                                            options={[
                                                { value: "all", label: "Temple: All" },
                                                ...dynamicFilterOptions.temples.map(t => ({ value: t, label: t }))
                                            ]}
                                        />
                                    </div>
                                )}

                                {/* Problem Addressed Dropdown (Conditional) */}
                                {selectedCategory === "Problem Based Pujas" && (
                                    <div className="col-span-1 w-full lg:flex-1 lg:min-w-[150px] min-w-0 animate-in fade-in zoom-in duration-200">
                                        <CustomSelect
                                            label="Problem: All"
                                            value={selectedProblem}
                                            onChange={setSelectedProblem}
                                            align="right"
                                            options={[
                                                { value: "all", label: "Problem: All" },
                                                ...dynamicFilterOptions.problems.map(p => ({ value: p, label: p }))
                                            ]}
                                        />
                                    </div>
                                )}

                                {/* Festival Dropdown (Conditional) */}
                                {selectedCategory === "Festival Pujas" && (
                                    <div className="col-span-1 w-full lg:flex-1 lg:min-w-[150px] min-w-0 animate-in fade-in zoom-in duration-200">
                                        <CustomSelect
                                            label="Festival: All"
                                            value={selectedFestival}
                                            onChange={setSelectedFestival}
                                            align="right"
                                            options={[
                                                { value: "all", label: "Festival: All" },
                                                ...dynamicFilterOptions.festivals.map(f => ({ value: f, label: f }))
                                            ]}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Active Filter Badges */}
                        {(appliedDeities.length > 0 || selectedCategory !== "all" || selectedTemple !== "all" || searchQuery !== "" || selectedPujaMode !== "all") && (
                            <div className="flex flex-wrap items-center gap-2 mt-3.5 pt-3 border-t border-stone-100">
                                <span className="text-xs font-bold text-stone-400">Active Filters:</span>

                                {searchQuery && (
                                    <span className="flex items-center gap-1 text-[11px] font-bold bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full">
                                        Query: "{searchQuery}"
                                        <button onClick={() => setSearchQuery("")} className="hover:text-red-500 font-bold ml-1 text-sm leading-none">×</button>
                                    </span>
                                )}

                                {appliedDeities.map(deity => (
                                    <span key={deity} className="flex items-center gap-1 text-[11px] font-bold bg-orange-50 text-[#D77E1E] px-2.5 py-1 rounded-full border border-orange-100">
                                        Deity: {deity}
                                        <button
                                            onClick={() => {
                                                const updated = appliedDeities.filter(d => d !== deity);
                                                setAppliedDeities(updated);
                                                setTempSelectedDeities(updated);
                                            }}
                                            className="hover:text-red-500 font-bold ml-1 text-sm leading-none"
                                        >
                                            ×
                                        </button>
                                    </span>
                                ))}

                                {selectedCategory !== "all" && (
                                    <span className="flex items-center gap-1 text-[11px] font-bold bg-orange-50 text-[#D77E1E] px-2.5 py-1 rounded-full border border-orange-100">
                                        Category: {selectedCategory}
                                        <button onClick={() => setSelectedCategory("all")} className="hover:text-red-500 font-bold ml-1 text-sm leading-none">×</button>
                                    </span>
                                )}
                                {selectedCategory === "Temple Wise Pujas" && selectedTemple !== "all" && (
                                    <span className="flex items-center gap-1 text-[11px] font-bold bg-amber-50 text-amber-600 px-2.5 py-1 rounded-full border border-amber-100">
                                        Temple: {selectedTemple}
                                        <button onClick={() => setSelectedTemple("all")} className="hover:text-red-500 font-bold ml-1 text-sm leading-none">×</button>
                                    </span>
                                )}
                                {selectedCategory === "Problem Based Pujas" && selectedProblem !== "all" && (
                                    <span className="flex items-center gap-1 text-[11px] font-bold bg-orange-50 text-[#D77E1E] px-2.5 py-1 rounded-full border border-orange-100">
                                        Problem: {selectedProblem}
                                        <button onClick={() => setSelectedProblem("all")} className="hover:text-red-500 font-bold ml-1 text-sm leading-none">×</button>
                                    </span>
                                )}
                                {selectedCategory === "Festival Pujas" && selectedFestival !== "all" && (
                                    <span className="flex items-center gap-1 text-[11px] font-bold bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full border border-indigo-100">
                                        Festival: {selectedFestival}
                                        <button onClick={() => setSelectedFestival("all")} className="hover:text-red-500 font-bold ml-1 text-sm leading-none">×</button>
                                    </span>
                                )}
                                {selectedPujaMode !== "all" && (
                                    <span className="flex items-center gap-1 text-[11px] font-bold bg-orange-50 text-[#D77E1E] px-2.5 py-1 rounded-full border border-orange-100">
                                        Mode: {selectedPujaMode}
                                        <button onClick={() => setSelectedPujaMode("all")} className="hover:text-red-500 font-bold ml-1 text-sm leading-none">×</button>
                                    </span>
                                )}

                                <button
                                    onClick={() => {
                                        setSearchQuery("");
                                        setAppliedDeities([]);
                                        setTempSelectedDeities([]);
                                        setSelectedCategory("all");
                                        setSelectedTemple("all");
                                        setSelectedProblem("all");
                                        setSelectedFestival("all");
                                        setSelectedPujaMode("all");
                                    }}
                                    className="text-xs font-extrabold text-red-500 hover:text-red-700 ml-auto hover:underline"
                                >
                                    Clear All
                                </button>
                            </div>
                        )}

                    </div>

                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-md border border-stone-100 p-5 animate-pulse">
                                    <div className="w-full aspect-[4/3] bg-stone-200 rounded-2xl mb-4" />
                                    <div className="h-4 bg-stone-200 rounded w-1/3 mb-3" />
                                    <div className="h-6 bg-stone-200 rounded w-3/4 mb-4" />
                                    <div className="space-y-2 mb-6">
                                        <div className="h-3.5 bg-stone-200 rounded w-full" />
                                        <div className="h-3.5 bg-stone-200 rounded w-5/6" />
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                                        <div className="h-4 bg-stone-200 rounded w-1/4" />
                                        <div className="h-9 bg-stone-200 rounded-xl w-1/3" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : filteredPujas.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPujas.map((puja, index) => (
                                <PujaCard key={index} {...puja} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 text-stone-500">
                            No pujas found matching your criteria.
                        </div>
                    )}
                </div>

                {/* How Booking Works */}
                <div className="bg-orange-50/50 py-16 mb-16">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h2 className="font-display text-3xl font-bold text-primary mb-10">How Booking Works</h2>

                        <div className="space-y-6 text-gray-700">
                            <p className="leading-relaxed"><span className="font-bold text-gray-900">1. Choose a Puja — </span> Click Details & Sankalp on the puja card and fill the Sankalp form (devotee name, gotra, names to be chanted, date preference, and any special requests).</p>

                            <p className="leading-relaxed"><span className="font-bold text-gray-900">2. Submit Request — </span> Submit the form to create a provisional booking request. You will receive an automated acknowledgement email or SMS with a reference number.</p>

                            <p className="leading-relaxed"><span className="font-bold text-gray-900">3. Seva Team Contact — </span> Our Seva team contacts you to confirm Sankalp details, clarify gotra and name pronunciations, confirm the puja date/time, and explain payment options. They also confirm whether you want a real-time video, recorded video, or both.</p>

                            <p className="leading-relaxed"><span className="font-bold text-gray-900">4. Order Booking — </span> After confirmation and payment, your booking is finalized. You receive a booking confirmation with a unique order ID and expected puja schedule.</p>

                            <p className="leading-relaxed"><span className="font-bold text-gray-900">5. Real Video and Gotra Names — </span> On completion, we provide a high-quality recorded video of the puja. The recording includes the priest chanting the Sankalp and the gotra/names you provided. For live-streamed pujas, a link or private viewing window is shared at the scheduled time.</p>

                            <p className="leading-relaxed"><span className="font-bold text-gray-900">6. Ticket Bookings — </span> For special temple events or limited darshan slots, we issue digital tickets linked to your booking ID. Tickets are delivered via email and can be shown on arrival or used for guided entry where applicable.</p>

                            <p className="leading-relaxed"><span className="font-bold text-gray-900">7. Shraddha Box Delivery — </span> If you opt for a Shraddha Box, it is prepared with prasad and ritual items blessed during the puja and dispatched to the address you provided. Tracking details are shared after dispatch.</p>

                            <p className="leading-relaxed"><span className="font-bold text-gray-900">8. Follow-up — </span> After the puja, our Seva team confirms delivery of the video and Shraddha Box, and records any feedback or additional requests for future services.</p>

                            <div className="leading-relaxed mt-8">
                                <h1 className="text-3xl font-bold text-gray-900 mb-3">Seva Team Contact</h1>
                                Our Seva team will reach out from an official NAMANDARSHAN number or email. Typical contact steps: confirmation call or WhatsApp message, payment guidance, and final puja schedule confirmation. If you prefer a specific contact method, mention it in the Sankalp form.
                            </div>

                            <div className="leading-relaxed mt-8">
                                <h1 className="text-3xl font-bold text-gray-900 mb-3">Notes on Gotra and Names</h1>
                                Please provide correct spellings and, if possible, phonetic hints for names and gotra to ensure accurate chanting. If you have a family priest or specific tradition, mention it in the Sankalp form and we will accommodate where possible.
                            </div>

                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="container mx-auto px-4 mb-24 max-w-4xl">
                    <h2 className="font-display text-4xl font-bold text-center text-amber-900 mb-12">
                        Frequently Asked Questions <span className="text-red-600 ml-2">?</span>
                    </h2>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-left font-semibold text-lg hover:text-orange-600"><span>How do I book a Puja?</span></AccordionTrigger>
                            <AccordionContent forceMount={true} className="text-gray-600 leading-relaxed bg-[#FFFBEB] p-4 rounded-md">
                                Choose the puja, click Details & Sankalp, fill the Sankalp form with names, gotra, date preference and submit. Our Seva team will confirm and guide payment.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-left font-semibold text-lg hover:text-orange-600"><span>What happens after I submit the Sankalp form?</span></AccordionTrigger>
                            <AccordionContent forceMount={true} className="text-gray-600 leading-relaxed bg-[#FFFBEB] p-4 rounded-md">
                                You receive an acknowledgement. The Seva team calls or messages to confirm details, finalize the date/time, and provide payment instructions.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-left font-semibold text-lg hover:text-orange-600"><span>Will I receive a real video of the puja?</span></AccordionTrigger>
                            <AccordionContent forceMount={true} className="text-gray-600 leading-relaxed bg-[#FFFBEB] p-4 rounded-md">
                                Yes. We provide a recorded video of the puja that includes the Sankalp and chanting of the names and gotra. Live-stream options are available for select pujas.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-left font-semibold text-lg hover:text-orange-600"><span>What is included in the Shraddha Box?</span></AccordionTrigger>
                            <AccordionContent forceMount={true} className="text-gray-600 leading-relaxed bg-[#FFFBEB] p-4 rounded-md">
                                The Shraddha Box contains prasad, blessed items used in the puja, and a small guide on how to complete any home rituals. Contents vary by puja and are listed on the puja details page.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-left font-semibold text-lg hover:text-orange-600"><span>How are Gotra names handled in chanting?</span></AccordionTrigger>
                            <AccordionContent forceMount={true} className="text-gray-600 leading-relaxed bg-[#FFFBEB] p-4 rounded-md">
                                Priests chant the gotra and names exactly as provided. For clarity, include phonetic spelling if the name is uncommon. We confirm pronunciations during the Seva team call.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger className="text-left font-semibold text-lg hover:text-orange-600"><span>How do ticket bookings work for special events?</span></AccordionTrigger>
                            <AccordionContent forceMount={true} className="text-gray-600 leading-relaxed bg-[#FFFBEB] p-4 rounded-md">
                                For special events, digital tickets are issued after payment. Tickets include event time, entry instructions, and your booking ID. Present the ticket on arrival or use it for guided entry.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>


            </main>
            <Footer />
        </div>
    );
};

export default Puja;
