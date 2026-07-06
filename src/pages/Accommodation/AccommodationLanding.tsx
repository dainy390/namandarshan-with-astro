import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { getApiUrl } from "@/utils/api";

// Mock Data for Popular Temples
const popularTemples = [
  {
    id: 1,
    name: "Tirupati Balaji",
    location: "Andhra Pradesh",
    count: "12 Dharamshalas",
    image: "https://images.unsplash.com/photo-1600080644346-6084534a66fc?q=80&w=2070&auto=format&fit=crop",
    slug: "tirupati-balaji",
  },
  {
    id: 2,
    name: "Kashi Vishwanath",
    location: "Varanasi",
    count: "18 Dharamshalas",
    image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=2072&auto=format&fit=crop",
    slug: "kashi-vishwanath",
  },
  {
    id: 3,
    name: "Ram Mandir",
    location: "Ayodhya",
    count: "9 Dharamshalas",
    image: "https://images.unsplash.com/photo-1705663738096-b6329c542111?q=80&w=2070&auto=format&fit=crop",
    slug: "ram-mandir",
  },
  {
    id: 4,
    name: "Mahakaleshwar",
    location: "Ujjain",
    count: "15 Dharamshalas",
    image: "https://images.unsplash.com/photo-1643905090432-8df21b0b4119?q=80&w=2070&auto=format&fit=crop",
    slug: "mahakaleshwar",
  },
  {
    id: 5,
    name: "Kedarnath",
    location: "Uttarakhand",
    count: "8 Dharamshalas",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop",
    slug: "kedarnath",
  },
  {
    id: 6,
    name: "Golden Temple",
    location: "Amritsar",
    count: "10 Dharamshalas",
    image: "https://images.unsplash.com/photo-1604108848777-6a1005a5a1f6?q=80&w=2070&auto=format&fit=crop",
    slug: "golden-temple",
  },
];

const featuredDharamshalas = [
  {
    id: 1,
    name: "Shri Ram Dharamshala",
    location: "Ayodhya • 200m from Ram Mandir",
    price: "₹300/night",
    amenities: ["Meals", "Parking", "Senior Friendly", "Verified"],
    buttonLabel: "Book Dharamshala near Ram Mandir",
    slug: "shri-ram-dharamshala"
  },
  {
    id: 2,
    name: "Kashi Seva Niwas",
    location: "Varanasi • 150m from Kashi Vishwanath",
    price: "₹250/night",
    amenities: ["AC Rooms", "Request Darshan Assistance Available", "Meals", "Verified"],
    buttonLabel: "Book Dharamshala near Kashi Vishwanath",
    slug: "kashi-seva-niwas"
  },
  {
    id: 3,
    name: "Mahakal Bhakta Niwas",
    location: "Ujjain • 100m from Mahakaleshwar",
    price: "₹350/night",
    amenities: ["Bhasma Aarti Booking", "Parking", "Family Rooms", "Verified"],
    buttonLabel: "Book Dharamshala near Mahakaleshwar",
    slug: "mahakal-bhakta-niwas"
  }
];

const faqs = [
  {
    question: "What is a dharamshala and how is it different from a hotel?",
    answer: "A dharamshala is a spiritual guest house typically located near temples or pilgrimage sites. Unlike standard hotels, they offer a more serene, community-focused environment aligned with spiritual practices, often providing simple, clean accommodations at affordable rates."
  },
  {
    question: "How is the distance from temple measured and verified?",
    answer: "We physically verify the walking distance from the dharamshala's main gate to the temple's main entrance. All distances listed on our platform are accurate and checked by our local teams."
  },
  {
    question: "Can I book dharamshalas for senior citizens and families?",
    answer: "Yes, many of our listed properties are senior-friendly and offer family rooms. You can use our 'Senior Friendly' and 'Family Rooms' filters to find accommodations with ground-floor access, elevators, and larger living spaces."
  },
  {
    question: "Are meals and other amenities included?",
    answer: "Many dharamshalas provide pure vegetarian meals (Satvik Bhojan) either included in the booking or at a nominal extra cost. You can check the specific amenities listed on each property's details page."
  },
  {
    question: "How does Request Darshan Assistance booking integration work?",
    answer: "For select temples, we offer bundled packages where you can book your stay and Request Darshan Assistance tickets together. Our team handles the coordination to ensure a seamless spiritual experience."
  },
  {
    question: "What is your cancellation and refund policy?",
    answer: "Cancellation policies vary by property. Most allow free cancellation up to 48 hours before check-in. The specific policy for your chosen dharamshala will be clearly displayed during the booking process."
  }
];

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden mb-3 transition-all duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between font-bold text-stone-900 text-left focus:outline-none hover:bg-stone-50"
      >
        <span className="pr-4">{question}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 text-stone-900 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-stone-600 text-sm leading-relaxed pt-1">
          {answer}
        </div>
      )}
    </div>
  );
};

const FilterPill = ({ label, slug }: { label: string, slug: string }) => {
  const activeType = window.location.pathname.includes("/hotel")
    ? "hotel"
    : window.location.pathname.includes("/ashram")
      ? "ashram"
      : "dharamshala";

  const targetPath = activeType === "hotel"
    ? `/yatra/hotels/${slug}`
    : activeType === "ashram"
      ? `/yatra/ashrams/${slug}`
      : `/yatra/dharamshalas/${slug}`;

  return (
    <Link
      to={targetPath}
      className="px-6 py-2 rounded-full font-medium text-sm transition-all shadow-sm bg-white text-[#D77E1E] border border-[#D77E1E] hover:bg-[#D77E1E] hover:text-white"
    >
      {label}
    </Link>
  );
};

// Robust temple-matching utility to prevent cross-temple mismatches (e.g. Jain Dharamshala / Shankar Shree showing in other temples)
const matchTemple = (item: any, targetSlug: string): boolean => {
  const itemTemple = (item.temple || "").toLowerCase();
  const pageSlug = (targetSlug || "").toLowerCase();

  // 1. Strict substring check on normalized temple name/slug
  const dbTempleNorm = itemTemple.replace(/[^a-z0-9]/g, "");
  const slugNorm = pageSlug.replace(/[^a-z0-9]/g, "");

  if (dbTempleNorm && slugNorm) {
    if (dbTempleNorm.includes(slugNorm) || slugNorm.includes(dbTempleNorm)) {
      return true;
    }
  }

  // 2. Prevent mismatch of known primary temples
  const getPrimaryKeyword = (str: string): string | null => {
    const lower = str.toLowerCase();
    if (lower.includes("badrinath")) return "badrinath";
    if (lower.includes("kedarnath")) return "kedarnath";
    if (lower.includes("somnath")) return "somnath";
    if (lower.includes("mahakaleshwar") || lower.includes("ujjain")) return "mahakaleshwar";
    if (lower.includes("kashi") || lower.includes("vishwanath") || lower.includes("varanasi")) return "kashi";
    if (lower.includes("tirupati") || lower.includes("balaji")) return "tirupati";
    if (lower.includes("ram-mandir") || lower.includes("ayodhya") || lower.includes("janmabhoomi")) {
      if (lower.includes("krishna")) return "krishna-janmabhoomi";
      return "ayodhya";
    }
    if (lower.includes("krishna-janmabhoomi")) return "krishna-janmabhoomi";
    if (lower.includes("parasnath")) return "parasnath";
    if (lower.includes("golden-temple") || lower.includes("amritsar")) return "golden-temple";
    if (lower.includes("vaishno")) return "vaishno-devi";
    if (lower.includes("salasar")) return "salasar";
    if (lower.includes("sabarimala")) return "sabarimala";
    return null;
  };

  const itemPrimary = getPrimaryKeyword(itemTemple);
  const pagePrimary = getPrimaryKeyword(pageSlug);

  if (itemPrimary && pagePrimary && itemPrimary !== pagePrimary) {
    return false; // Confirmed mismatch between two known distinct temples
  }

  // 3. Fallback: Fuzzy word-based keyword matching with a solid stopWords set
  const stopWords = new Set([
    "the", "temple", "mandir", "near", "jyotirlinga", "jyotirling", "accommodation", 
    "hotel", "ashram", "dharamshala", "devi", "dham", "sri", "shri", "shree", "yatra", 
    "gate", "road", "bhawan", "niwas", "jain", "digambar", "shankar", "opp", "opposite", 
    "hall", "street", "nagar", "chowk", "palace", "inn", "grand", "residency", "regency", 
    "international", "house", "guest", "stay", "stays", "lounge", "villa", "resort", 
    "resorts", "suites", "suite", "plaza", "castle", "lake", "view", "house", "mata", "ma"
  ]);

  const slugWords = pageSlug
    .split("-")
    .filter(word => word.length > 2 && !stopWords.has(word));

  if (slugWords.length > 0) {
    const getWords = (str: string) =>
      (str || "").toLowerCase().split(/[^a-z0-9]+/).filter(w => w.length > 0);

    const templeWords = getWords(itemTemple);

    const hasKeywordMatch = slugWords.some(word => 
      templeWords.includes(word)
    );
    if (hasKeywordMatch) return true;
  }

  return false;
};

const AccommodationLanding = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [temples, setTemples] = useState<any[]>([]);
  const [accommodations, setAccommodations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAllTemples, setShowAllTemples] = useState(false);
  const navigate = useNavigate();

  const typeParam = window.location.pathname.includes("/hotel")
    ? "Hotel"
    : window.location.pathname.includes("/ashram")
      ? "Ashram"
      : "Dharamshala";

  useEffect(() => {
    // Fetch Temples
    fetch(getApiUrl("/api/temples"))
      .then((res) => {
        if (!res.ok) throw new Error("HTTP error");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          // Filter to only visible temples to match public view requirements
          setTemples(data.filter((t: any) => t.isVisible !== false));
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch temples for accommodation:", err);
        setLoading(false);
      });

    // Fetch Accommodations to show actual database counts
    fetch(getApiUrl("/api/accommodations"))
      .then((res) => res.json())
      .then((data) => {
        if (data && data.success && Array.isArray(data.data)) {
          setAccommodations(data.data);
        } else if (Array.isArray(data)) {
          setAccommodations(data);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch accommodations for counts:", err);
      });
  }, []);

  const getAccommodationCount = (templeName: string, templeSlug: string) => {
    const matches = accommodations.filter((item) => matchTemple(item, templeSlug || templeName || ""));
    return matches.length;
  };

  const templesList = temples.length > 0 ? temples : popularTemples;

  // Filter temples list based on search query in real-time
  const filteredTemplesList = templesList.filter((temple) => {
    const name = (temple?.name || "").toLowerCase();
    const location = (temple?.location || "").toLowerCase();
    const query = (searchQuery || "").toLowerCase().trim();
    return name.includes(query) || location.includes(query);
  });

  const visibleTemples = showAllTemples ? filteredTemplesList : filteredTemplesList.slice(0, 6);

  const filteredTemples = filteredTemplesList;

  // Helper to map database temple names to temple slugs
  const getTempleSlug = (templeName: string) => {
    if (!templeName) return "badrinath-temple";
    const normDbTemple = templeName.toLowerCase().replace(/[^a-z0-9]/g, "");

    const match = templesList.find(t => {
      const normName = (t.name || "").toLowerCase().replace(/[^a-z0-9]/g, "");
      const normSlug = (t.slug || "").toLowerCase().replace(/[^a-z0-9]/g, "");
      return normName.includes(normDbTemple) || normDbTemple.includes(normName) || normSlug.includes(normDbTemple) || normDbTemple.includes(normSlug);
    });

    if (match) return match.slug;

    const stopWords = new Set([
      "the", "temple", "mandir", "near", "jyotirlinga", "jyotirling", "accommodation", 
      "hotel", "ashram", "dharamshala", "devi", "dham", "sri", "shri", "shree", "yatra", 
      "gate", "road", "bhawan", "niwas", "jain", "digambar", "shankar", "opp", "opposite", 
      "hall", "street", "nagar", "chowk", "palace", "inn", "grand", "residency", "regency", 
      "international", "house", "guest", "stay", "stays", "lounge", "villa", "resort", 
      "resorts", "suites", "suite", "plaza", "castle", "lake", "view", "house", "mata", "ma"
    ]);
    const dbWords = templeName
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .split(/[\s-]+/)
      .filter(word => word.length > 2 && !stopWords.has(word));

    if (dbWords.length > 0) {
      const fuzzyMatch = templesList.find(t => {
        const normName = (t.name || "").toLowerCase().replace(/[^a-z0-9]/g, "");
        const normSlug = (t.slug || "").toLowerCase().replace(/[^a-z0-9]/g, "");
        return dbWords.some(word => normName.includes(word) || normSlug.includes(word));
      });
      if (fuzzyMatch) return fuzzyMatch.slug;
    }

    if (normDbTemple.includes("badrinath")) return "badrinath-temple";
    if (normDbTemple.includes("kedarnath")) return "kedarnath-temple";
    if (normDbTemple.includes("golden")) return "the-golden-temple";
    if (normDbTemple.includes("vaishno")) return "vaishno-devi-temple";
    if (normDbTemple.includes("kashi") || normDbTemple.includes("vishwanath")) return "kashi-vishwanath-temple";
    if (normDbTemple.includes("somnath")) return "somnath-temple";
    if (normDbTemple.includes("mahakaleshwar") || normDbTemple.includes("ujjain")) return "mahakaleshwar-temple";

    return templeName.toLowerCase().trim().replace(/[\s_]+/g, "-").replace(/[^a-z0-9-]/g, "");
  };

  // Filter accommodations to show actual hotels added in the temples up to 4 featured hotels
  const dbFeatured = accommodations
    .filter((item) => {
      const itemType = (item.type || "").toLowerCase();
      const targetType = typeParam.toLowerCase();
      return itemType.includes(targetType) || targetType.includes(itemType);
    })
    .slice(0, 4);

  const displayedFeatured = dbFeatured.length > 0 ? dbFeatured.map((item, idx) => {
    const amenities = [];
    if (item.ac && !item.ac.toLowerCase().includes("no ac")) amenities.push("AC Rooms");
    if (item.food && !item.food.toLowerCase().includes("none")) amenities.push("Meals");
    if (item.accessibility && !item.accessibility.toLowerCase().includes("stairs only")) amenities.push("Senior Friendly");
    if (item.verified) amenities.push("Verified");
    if (amenities.length < 3 && item.occupancy) amenities.push(item.occupancy);

    const tSlug = getTempleSlug(item.temple);

    return {
      id: item._id || idx,
      name: item.name,
      location: `${item.temple} • ${item.distance || ''} from temple`,
      price: `₹${item.price}/night`,
      amenities,
      buttonLabel: `Book ${typeParam} near ${item.temple}`,
      slug: item.slug,
      templeSlug: tSlug,
      image: item.images && item.images[0] ? item.images[0] : null
    };
  }) : featuredDharamshalas;

  const totalCount = accommodations.filter((item) => {
    const itemType = (item.type || "").toLowerCase();
    const targetType = typeParam.toLowerCase();
    return itemType.includes(targetType) || targetType.includes(itemType);
  }).length;

  const getCountText = (templeName: string, templeSlug: string) => {
    // Filter accommodations matching this temple and typeParam
    const matches = accommodations.filter((item) => {
      const itemType = (item.type || "").toLowerCase();
      const targetType = typeParam.toLowerCase();
      const isTypeMatch = itemType.includes(targetType) || targetType.includes(itemType);
      if (!isTypeMatch) return false;

      return matchTemple(item, templeSlug || templeName || "");
    });

    const count = matches.length;
    const typeLabel = typeParam === "Hotel" ? "Hotels" : typeParam === "Ashram" ? "Ashrams" : "Dharamshalas";
    return `${count} ${typeLabel}`;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(false);

    // Smoothly scroll down to the filtered popular temples section
    const target = document.getElementById("popular-temples-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFCF6] font-sans text-stone-800">
      <SEO title={`Find ${typeParam === "Hotel" ? "Hotels" : typeParam === "Ashram" ? "Ashrams" : "Dharamshalas"} Near Your Temple | Naman Darshan`} />
      <Header />

      <main className="flex-grow pt-52 md:pt-60 lg:pt-64 pb-24 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        {/* Hero Section */}
        <div className="relative text-center mb-16 py-24 md:py-32 px-4 rounded-[2.5rem] overflow-hidden shadow-2xl mt-4">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/assets/Home_page_banner/temples_banner_hq.webp" 
              alt="Temple Accommodation Background" 
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          </div>

          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6 tracking-tight">
              Find <span className="text-[#D77E1E] drop-shadow-md">{typeParam === "Hotel" ? "Hotels" : typeParam === "Ashram" ? "Ashrams" : "Dharamshalas"}</span> Near Your Temple
            </h1>
            <p className="text-stone-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10 font-medium drop-shadow-sm">
              Book trusted, verified {typeParam === "Hotel" ? "hotels" : typeParam === "Ashram" ? "ashrams" : "dharamshalas"} at pilgrimage destinations across India
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-3xl mx-auto text-sm md:text-base font-semibold text-white/90">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
                <svg className="w-5 h-5 text-[#D77E1E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span>Verified Properties</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
                <svg className="w-5 h-5 text-[#D77E1E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <span>50k+ Trusted Users</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
                <svg className="w-5 h-5 text-[#D77E1E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Accommodation Type Tabs */}
        <div className="max-w-4xl mx-auto flex justify-center mb-6 px-4">
          <div className="bg-stone-100 p-1.5 rounded-2xl inline-flex shadow-sm">
            {[
              { id: "hotel", label: "Hotels", path: "/yatra/hotels" },
              { id: "ashram", label: "Ashrams", path: "/yatra/ashrams" },
              { id: "dharamshala", label: "Dharamshalas", path: "/yatra/dharamshalas" },
            ].map((tab) => {
              const isActive = window.location.pathname.includes(`/${tab.id}`);
              return (
                <Link
                  key={tab.id}
                  to={tab.path}
                  className={`px-6 py-2.5 rounded-xl font-bold text-sm md:text-base transition-all duration-300 flex-1 text-center ${
                    isActive
                      ? "bg-white text-[#D77E1E] shadow-sm"
                      : "text-stone-500 hover:text-stone-700 hover:bg-stone-200/50"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-3.5 mb-10 relative z-20 px-4">
          <div className="relative flex-grow">
            {/* Left Magnifying Glass Icon */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>

            <input
              type="text"
              placeholder="Search temple name or location..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 300)}
              className="w-full pl-12 pr-12 py-4 rounded-2xl border border-stone-200 bg-white focus:outline-none focus:ring-4 focus:ring-[#D77E1E]/10 focus:border-[#D77E1E] text-lg shadow-xl transition-all duration-300 placeholder:text-stone-400 text-stone-900 font-medium"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setShowSuggestions(false);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors p-1.5 rounded-full hover:bg-stone-100 focus:outline-none"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}

            {/* Autocomplete Dropdown */}
            {showSuggestions && searchQuery.trim() !== "" && filteredTemples.length > 0 && (
              <div className="absolute z-50 w-full mt-3 bg-white/95 backdrop-blur-md rounded-2xl border border-stone-100 shadow-2xl max-h-64 overflow-y-auto text-left py-2 transition-all duration-300">
                {filteredTemples.map((temple) => (
                  <div
                    key={temple.id}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                      setSearchQuery(temple.name);
                      setShowSuggestions(false);
                      const targetPath = typeParam === "Hotel"
                        ? `/yatra/hotels/${temple.slug}`
                        : typeParam === "Ashram"
                          ? `/yatra/ashrams/${temple.slug}`
                          : `/yatra/dharamshalas/${temple.slug}`;
                      navigate(targetPath);
                    }}
                    className="px-6 py-3.5 hover:bg-[#D77E1E]/5 transition-colors cursor-pointer flex items-center gap-4 border-b border-stone-50 last:border-0"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#D77E1E]/10 flex items-center justify-center text-[#D77E1E] text-sm">
                      📍
                    </div>
                    <div>
                      <div className="font-bold text-stone-900">{temple.name}</div>
                      <div className="text-sm text-stone-500">{temple.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-[#D77E1E] to-[#F2994A] text-white font-extrabold rounded-2xl hover:shadow-lg hover:shadow-orange-600/20 active:scale-[0.98] transition-all duration-300 text-lg flex items-center justify-center gap-2 shadow-md sm:w-auto w-full whitespace-nowrap"
          >
            <span>Search Stays</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </form>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto mb-16">
          <FilterPill label="Tirupati Balaji" slug="tirupati-balaji" />
          <FilterPill label="Kashi Vishwanath" slug="kashi-vishwanath" />
          <FilterPill label="Ram Mandir Ayodhya" slug="ram-mandir" />
          <FilterPill label="Mahakaleshwar" slug="mahakaleshwar" />
          <FilterPill label="Kedarnath" slug="kedarnath" />
          <FilterPill label="Golden Temple" slug="golden-temple" />
        </div>

        {/* Popular Temples Section */}
        <div id="popular-temples-section" className="mb-8 text-center scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-stone-900 mb-10 tracking-tight">
            Popular Temples
          </h2>

          {visibleTemples.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {visibleTemples.map((temple) => (
                <Link
                  to={typeParam === "Hotel" ? `/yatra/hotels/${temple.slug}` : typeParam === "Ashram" ? `/yatra/ashrams/${temple.slug}` : `/yatra/dharamshalas/${temple.slug}`}
                  key={temple.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-all flex flex-col h-full"
                >
                  <div className="h-64 overflow-hidden relative bg-[#ded7cc] flex items-center justify-center group-hover:bg-[#d4cdce] transition-colors duration-500">
                    {temple.image ? (
                      <img
                        src={temple.image}
                        alt={temple.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600080644346-6084534a66fc?q=80&w=2070&auto=format&fit=crop";
                        }}
                      />
                    ) : (
                      <span className="text-stone-500 font-medium">[Image]</span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow justify-start">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-stone-900 mb-1">{temple.name}</h3>
                      <p className="text-stone-500 text-sm mb-4">{temple.location}</p>
                      <p className="text-[#D77E1E] font-medium font-sans">
                        {getCountText(temple.name, temple.slug)}
                      </p>
                    </div>
                    <div className="w-full mt-auto py-3 px-4 rounded-xl bg-[#D77E1E] border border-[#D77E1E] text-center text-sm sm:text-base text-white font-bold group-hover:bg-[#c2711b] group-hover:border-[#c2711b] transition-colors flex items-center justify-center gap-2 shadow-sm whitespace-nowrap">
                      Book {typeParam === "Hotel" ? "Hotel" : typeParam === "Ashram" ? "Ashram" : "Dharamshala"}
                      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 px-6 bg-white rounded-2xl border border-stone-200 max-w-xl mx-auto shadow-sm my-8">
              <span className="text-4xl mb-4 block">🕉</span>
              <h3 className="text-xl font-bold text-stone-900 mb-2">No Temples Found</h3>
              <p className="text-stone-500 leading-relaxed">
                We couldn't find any temples matching "{searchQuery}". Try searching for popular destinations like "Kedarnath", "Kashi", or "Tirupati".
              </p>
            </div>
          )}

          {templesList.length > 6 && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setShowAllTemples(!showAllTemples)}
                className="px-8 py-3 rounded-full font-bold text-[#D77E1E] border-2 border-[#D77E1E] hover:bg-[#D77E1E] hover:text-white transition-all shadow-sm flex items-center gap-2 bg-white"
              >
                {showAllTemples ? "Show Less" : "View More Temples"}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${showAllTemples ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Featured Section */}
        <div className="mt-16 mb-8 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-stone-900 mb-2 tracking-tight">
              Featured {typeParam === "Hotel" ? "Hotels" : typeParam === "Ashram" ? "Ashrams" : "Dharamshalas"}
            </h2>
          </div>

          <div className="text-sm text-stone-500 font-medium mb-4 text-center md:text-left">
            Showing {totalCount > 0 ? totalCount : 24} {typeParam === "Hotel" ? "hotels" : typeParam === "Ashram" ? "ashrams" : "dharamshalas"} · Sorted by: Closest to Temple
          </div>

          <div className="flex flex-col gap-4">
            {displayedFeatured.map((dharamshala) => (
              <div key={dharamshala.id} className="bg-white rounded-2xl border border-stone-200 shadow-sm p-4 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
                {/* Photo Placeholder */}
                <div className="w-full md:w-56 h-48 md:h-44 rounded-xl overflow-hidden relative bg-[#ded7cc] flex items-center justify-center flex-shrink-0">
                  {dharamshala.image ? (
                    <img 
                      src={dharamshala.image} 
                      alt={dharamshala.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-stone-500 font-medium">[Photo]</span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col py-2">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-stone-900 mb-1">
                      {dharamshala.name}
                    </h3>
                    <p className="text-stone-600 text-sm font-medium">
                      {dharamshala.location} <span className="mx-1">•</span> {dharamshala.price}
                    </p>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#D77E1E] font-medium mb-6">
                    {dharamshala.amenities.map((amenity, idx) => (
                      <React.Fragment key={idx}>
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          {amenity}
                        </span>
                        {idx < dharamshala.amenities.length - 1 && <span className="text-stone-300">•</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    <Link to={typeParam === "Hotel" ? `/yatra/hotels/detail/${dharamshala.slug}` : typeParam === "Ashram" ? `/yatra/ashrams/detail/${dharamshala.slug}` : `/yatra/dharamshalas/detail/${dharamshala.slug}`} className="px-6 py-2.5 rounded-xl border border-stone-300 text-stone-800 font-bold text-center hover:bg-stone-50 transition-colors">
                      View Details
                    </Link>
                    <Link to={typeParam === "Hotel" ? `/yatra/hotels/${dharamshala.templeSlug || dharamshala.slug}` : typeParam === "Ashram" ? `/yatra/ashrams/${dharamshala.templeSlug || dharamshala.slug}` : `/yatra/dharamshalas/${dharamshala.templeSlug || dharamshala.slug}`} className="px-6 py-2.5 rounded-xl bg-[#D77E1E] border border-[#D77E1E] text-white font-bold text-center hover:bg-[#c2711b] hover:border-[#c2711b] transition-colors shadow-sm">
                      {dharamshala.buttonLabel}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Collections Section */}
        <div className="mt-16 mb-8 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-stone-900 mb-8 tracking-tight">
            Featured Collections
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "📍", title: "Within 500m" },
              { icon: "💰", title: "Budget Stays" },
              { icon: "👨‍👩‍👧‍👦", title: "Family Rooms" },
              { icon: "👴", title: "Senior Friendly" },
              { icon: "🍛", title: "Meals Included" },
              { icon: "☑️", title: "Verified Only" },
            ].map((collection, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-stone-200 shadow-sm p-6 flex flex-col items-center justify-center hover:shadow-md transition-shadow cursor-pointer hover:border-stone-300">
                <span className="text-3xl mb-3">{collection.icon}</span>
                <span className="text-stone-900 font-bold text-sm md:text-base">{collection.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Book With Naman Darshan Section */}
        <div className="mt-16 mb-12 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-stone-900 mb-8 tracking-tight">
            Why Book With Naman Darshan
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "✓", title: "Verified Properties", isSvg: true },
              { icon: "📍", title: "Distance Verified" },
              { icon: "🙏", title: "Pilgrim Friendly" },
              { icon: "🔒", title: "Secure Booking" },
              { icon: "📞", title: "24/7 Support" },
              { icon: "🎫", title: "Darshan Linked" },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-stone-200 shadow-sm p-6 flex flex-col items-center justify-center">
                {feature.isSvg ? (
                  <svg className="w-8 h-8 mb-3 text-stone-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ) : (
                  <span className="text-3xl mb-3">{feature.icon}</span>
                )}
                <span className="text-stone-900 font-bold text-sm md:text-base">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 mb-16 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-stone-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col">
            {faqs.map((faq, idx) => (
              <FaqItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default AccommodationLanding;
