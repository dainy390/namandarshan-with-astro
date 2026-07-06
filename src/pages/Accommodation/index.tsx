import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { getApiUrl } from "@/utils/api";
import { 
  ChevronRight, Phone, ArrowRight, CheckCircle2, Footprints, MapPin, 
  Utensils, Snowflake, Users, Accessibility, Info, Star, SlidersHorizontal, 
  Sparkles, X, Search, ShieldAlert, AlignJustify
} from "lucide-react";

// Robust static mock fallback data to keep existing Ujjain and other pages loaded
const staticMockData = [
  {
    _id: "mock1",
    name: "Mahakaleshwar Bhakt Niwas",
    price: 1250,
    verified: true,
    walkingTime: "3 min",
    distance: "200 m",
    subtitle: "Safest 3 AM walk",
    food: "Prasadam",
    ac: "AC Available",
    occupancy: "Open to all",
    accessibility: "Lift + wheelchair",
    phoneNumber: "+91 92532 81189",
    slug: "mahakaleshwar-bhakt-niwas",
    temple: "Mahakaleshwar",
    rating: 4.8,
    reviewsCount: 312,
    images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"]
  },
  {
    _id: "mock2",
    name: "Yadav Dharamshala",
    price: 900,
    verified: true,
    walkingTime: "2 min",
    distance: "200 m",
    subtitle: "Closest to gate",
    food: "None",
    ac: "No AC",
    occupancy: "Families Only",
    accessibility: "Stairs only",
    phoneNumber: null,
    slug: "yadav-dharamshala",
    temple: "Mahakaleshwar",
    rating: 4.2,
    reviewsCount: 148,
    images: ["https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop"]
  },
  {
    _id: "mock3",
    name: "Balmukund Aashram",
    price: 800,
    verified: true,
    walkingTime: "5 min",
    distance: "400 m",
    subtitle: "Top solo pick",
    food: "None",
    ac: "AC Available",
    occupancy: "Open to all",
    accessibility: "Ground floor rooms",
    phoneNumber: "+91 734 255 0563",
    slug: "balmukund-aashram",
    temple: "Mahakaleshwar",
    rating: 4.5,
    reviewsCount: 224,
    images: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"]
  }
];

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

const Accommodation = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const typeParam = window.location.pathname.includes("/hotel")
    ? "Hotel"
    : window.location.pathname.includes("/ashram")
      ? "Ashram"
      : "Dharamshala";
  
  const categoryPrefix = typeParam.toLowerCase();
  
  const [dbStays, setDbStays] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters State (Inspired by MakeMyTrip)
  const [budgetUnder1000, setBudgetUnder1000] = useState(false);
  const [budget1000to2000, setBudget1000to2000] = useState(false);
  const [budgetOver2000, setBudgetOver2000] = useState(false);
  
  const [distanceUnder200, setDistanceUnder200] = useState(false);
  const [distance200to500, setDistance200to500] = useState(false);
  const [distanceOver500, setDistanceOver500] = useState(false);
  
  const [filterAC, setFilterAC] = useState(false);
  const [filterMeals, setFilterMeals] = useState(false);
  const [filterVerified, setFilterVerified] = useState(false);
  
  const [sortBy, setSortBy] = useState("popularity"); // popularity, priceLow, priceHigh, distance
  const [textSearch, setTextSearch] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Fetch stays from Database dynamically
  useEffect(() => {
    setLoading(true);
    fetch(getApiUrl("/api/accommodations"))
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setDbStays(data.data);
        } else if (Array.isArray(data)) {
          setDbStays(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load accommodations from API:", err);
        setLoading(false);
      });
  }, []);

  // Filter & combine static fallbacks with active database entries cleanly
  const currentStays = useMemo(() => {
    const slugNorm = (slug || "").toLowerCase().replace(/[^a-z0-9]/g, "");

    // 1. Filter Database entries that match this slug using our robust matcher
    const matchingDb = dbStays.filter(item => matchTemple(item, slug || ""));

    if (matchingDb.length > 0) {
      return matchingDb;
    }

    // 2. Otherwise fall back to local mock data matching this slug
    return staticMockData.filter(item => item.slug === slugNorm || (item.temple && item.temple.toLowerCase() === slugNorm));
  }, [dbStays, slug]);

  // Apply MakeMyTrip style filtering logic
  const filteredData = useMemo(() => {
    let result = currentStays.filter((item) => {
      // 1. URL Path Type Filter (Hotel / Ashram / Dharamshala)
      if (typeParam) {
        const itemType = (item.type || "").toLowerCase();
        const targetType = typeParam.toLowerCase();
        const matchesType = itemType.includes(targetType) || targetType.includes(itemType);
        if (!matchesType) return false;
      }

      // 2. Search box text filter within results
      if (textSearch.trim()) {
        const query = textSearch.toLowerCase();
        const nameMatch = item.name.toLowerCase().includes(query);
        const subMatch = (item.subtitle || "").toLowerCase().includes(query);
        if (!nameMatch && !subMatch) return false;
      }

      // 3. Budget Filters
      const priceVal = Number(item.price || 0);
      const isBudgetSelected = budgetUnder1000 || budget1000to2000 || budgetOver2000;
      if (isBudgetSelected) {
        let matchesBudget = false;
        if (budgetUnder1000 && priceVal <= 1000) matchesBudget = true;
        if (budget1000to2000 && priceVal > 1000 && priceVal <= 2000) matchesBudget = true;
        if (budgetOver2000 && priceVal > 2000) matchesBudget = true;
        if (!matchesBudget) return false;
      }

      // 4. Distance / Proximity Filters
      let parsedDist = 300; // default intermediate distance if not specified
      if (item.distance) {
        const parsed = parseInt(item.distance.replace(/[^0-9]/g, ""), 10);
        if (!isNaN(parsed)) parsedDist = parsed;
      }
      const isDistanceSelected = distanceUnder200 || distance200to500 || distanceOver500;
      if (isDistanceSelected) {
        let matchesDistance = false;
        if (distanceUnder200 && parsedDist <= 200) matchesDistance = true;
        if (distance200to500 && parsedDist > 200 && parsedDist <= 500) matchesDistance = true;
        if (distanceOver500 && parsedDist > 500) matchesDistance = true;
        if (!matchesDistance) return false;
      }

      // 5. AC Room Filter
      if (filterAC) {
        const acStr = (item.ac || "").toLowerCase();
        const hasNoAC = acStr.includes("no ac") || acStr.includes("non-ac") || acStr.includes("non ac") || acStr.includes("no-ac") || acStr.includes("without ac");
        const hasAC = acStr.includes("ac") || acStr.includes("air condition") || acStr.includes("air-condition");
        const matchesAC = hasAC && !hasNoAC;
        if (!matchesAC) return false;
      }

      // 6. Food / Prasadam Filter
      if (filterMeals) {
        const foodStr = (item.food || "").toLowerCase();
        const hasNoFood = foodStr.includes("none") || foodStr.includes("no food") || foodStr.includes("no meal") || foodStr.includes("no prasadam") || foodStr.includes("not available");
        const matchesFood = foodStr.trim() !== "" && !hasNoFood;
        if (!matchesFood) return false;
      }

      // 7. Verified Badge Filter
      if (filterVerified && !item.verified) {
        return false;
      }

      return true;
    });

    // Apply MakeMyTrip Sort Options
    return [...result].sort((a, b) => {
      if (sortBy === "priceLow") {
        return Number(a.price || 0) - Number(b.price || 0);
      }
      if (sortBy === "priceHigh") {
        return Number(b.price || 0) - Number(a.price || 0);
      }
      if (sortBy === "distance") {
        const distA = parseInt((a.distance || "500").replace(/[^0-9]/g, ""), 10);
        const distB = parseInt((b.distance || "500").replace(/[^0-9]/g, ""), 10);
        return distA - distB;
      }
      // Popularity (default - sorted by rating or verified first)
      const ratingA = a.rating || (a.verified ? 4.5 : 4.0);
      const ratingB = b.rating || (b.verified ? 4.5 : 4.0);
      return ratingB - ratingA;
    });
  }, [
    currentStays, typeParam, textSearch,
    budgetUnder1000, budget1000to2000, budgetOver2000,
    distanceUnder200, distance200to500, distanceOver500,
    filterAC, filterMeals, filterVerified, sortBy
  ]);

  const clearAllFilters = () => {
    setBudgetUnder1000(false);
    setBudget1000to2000(false);
    setBudgetOver2000(false);
    setDistanceUnder200(false);
    setDistance200to500(false);
    setDistanceOver500(false);
    setFilterAC(false);
    setFilterMeals(false);
    setFilterVerified(false);
    setTextSearch("");
    setSortBy("popularity");
  };

  const activeFiltersCount = [
    budgetUnder1000, budget1000to2000, budgetOver2000,
    distanceUnder200, distance200to500, distanceOver500,
    filterAC, filterMeals, filterVerified
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F9] font-sans text-stone-800">
      <SEO title={`Compare & Book ${typeParam === "Hotel" ? "Hotels" : typeParam === "Ashram" ? "Ashrams" : "Dharamshalas"} Near ${slug?.replace(/-/g, ' ')} | Naman Darshan`} />
      <Header />

      <main className="flex-grow pt-52 md:pt-60 lg:pt-64 pb-24 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        {/* Breadcrumbs */}
        <div className="flex items-center text-xs md:text-sm text-stone-500 mb-6 font-medium">
          <Link to="/" className="hover:text-[#D77E1E] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-1.5" />
          <Link to={typeParam === "Hotel" ? "/yatra/hotels" : typeParam === "Ashram" ? "/yatra/ashrams" : "/yatra/dharamshalas"} className="hover:text-[#D77E1E] transition-colors capitalize">{typeParam === "Hotel" ? "Hotels" : typeParam === "Ashram" ? "Ashrams" : "Dharamshalas"}</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-1.5" />
          <span className="text-stone-800 font-bold capitalize">Near {slug?.replace(/-/g, ' ')}</span>
        </div>

        {/* Dynamic MakeMyTrip Banner Heading */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 shadow-sm mb-8 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#D77E1E]/10 text-[#D77E1E] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Verified Stays
              </span>
              <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                Closest First
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-display text-stone-900 mb-2 tracking-tight capitalize leading-tight">
              {typeParam === "Hotel" ? "Hotels" : typeParam === "Ashram" ? "Ashrams" : "Dharamshalas"} Near {slug?.replace(/-/g, ' ')}
            </h1>
            <p className="text-stone-500 text-sm md:text-base leading-relaxed font-medium">
              Check in with complete peace of mind. All listings feature walking proximity to temple gates.
            </p>
          </div>
          <div className="flex items-center gap-2 md:self-center shrink-0">
            <span className="text-3xl font-extrabold text-stone-900 font-display">{filteredData.length}</span>
            <span className="text-stone-500 text-sm font-semibold text-left leading-tight">
              Verified Properties<br />Available
            </span>
          </div>
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#D77E1E]/5 rounded-full translate-x-20 -translate-y-20 pointer-events-none" />
        </div>

        {/* Sort Controls Bar */}
        <div className="bg-white rounded-xl p-4 border border-stone-200 shadow-sm mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 w-full sm:w-auto relative">
            <Search className="w-4.5 h-4.5 text-stone-400 absolute left-3" />
            <input 
              type="text"
              placeholder="Search by hotel / property name..."
              value={textSearch}
              onChange={(e) => setTextSearch(e.target.value)}
              className="pl-10 pr-4 py-2 w-full sm:w-72 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D77E1E] focus:border-transparent font-medium"
            />
          </div>
          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
            {/* Mobile Filters Toggler */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-1.5 px-4 py-2 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-lg text-xs font-bold text-stone-700 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </button>

            <div className="flex items-center gap-2">
              <span className="text-stone-500 text-xs md:text-sm font-bold whitespace-nowrap">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-stone-200 rounded-lg px-3 py-2 text-xs md:text-sm font-bold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#D77E1E]"
              >
                <option value="popularity">Popularity (Best Rated)</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="distance">Distance: Closest First</option>
              </select>
            </div>
          </div>
        </div>

        {/* Desktop Layout grid */}
        <div className="flex gap-8 items-start">
          
          {/* 1. MakeMyTrip Left Sidebar Filters Panel */}
          <aside className="hidden lg:block w-72 bg-white rounded-2xl border border-stone-200 shadow-sm p-6 shrink-0 sticky top-48">
            <div className="flex justify-between items-center border-b border-stone-100 pb-4 mb-5">
              <h2 className="font-extrabold text-stone-900 text-lg flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-[#D77E1E]" /> Filters
              </h2>
              {activeFiltersCount > 0 && (
                <button 
                  onClick={clearAllFilters}
                  className="text-xs text-[#D77E1E] hover:underline font-bold"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Filter Section: Naman Verified */}
            <div className="mb-6">
              <h3 className="font-extrabold text-stone-850 text-sm uppercase tracking-wider mb-3">Verification</h3>
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <input 
                  type="checkbox"
                  checked={filterVerified}
                  onChange={(e) => setFilterVerified(e.target.checked)}
                  className="w-4.5 h-4.5 rounded border-stone-300 text-[#D77E1E] focus:ring-[#D77E1E] cursor-pointer"
                />
                <span className="text-sm text-stone-700 font-semibold group-hover:text-stone-900 transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Naman Verified Only
                </span>
              </label>
            </div>

            {/* Filter Section: Price Range */}
            <div className="mb-6 border-t border-stone-100 pt-5">
              <h3 className="font-extrabold text-stone-850 text-sm uppercase tracking-wider mb-3">Price Per Night</h3>
              <div className="flex flex-col gap-2.5">
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input 
                    type="checkbox"
                    checked={budgetUnder1000}
                    onChange={(e) => setBudgetUnder1000(e.target.checked)}
                    className="w-4.5 h-4.5 rounded border-stone-300 text-[#D77E1E] focus:ring-[#D77E1E] cursor-pointer"
                  />
                  <span className="text-sm text-stone-700 font-semibold group-hover:text-stone-900 transition-colors">
                    Under ₹1,000
                  </span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input 
                    type="checkbox"
                    checked={budget1000to2000}
                    onChange={(e) => setBudget1000to2000(e.target.checked)}
                    className="w-4.5 h-4.5 rounded border-stone-300 text-[#D77E1E] focus:ring-[#D77E1E] cursor-pointer"
                  />
                  <span className="text-sm text-stone-700 font-semibold group-hover:text-stone-900 transition-colors">
                    ₹1,000 - ₹2,000
                  </span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input 
                    type="checkbox"
                    checked={budgetOver2000}
                    onChange={(e) => setBudgetOver2000(e.target.checked)}
                    className="w-4.5 h-4.5 rounded border-stone-300 text-[#D77E1E] focus:ring-[#D77E1E] cursor-pointer"
                  />
                  <span className="text-sm text-stone-700 font-semibold group-hover:text-stone-900 transition-colors">
                    Over ₹2,000
                  </span>
                </label>
              </div>
            </div>

            {/* Filter Section: Distance from Temple */}
            <div className="mb-6 border-t border-stone-100 pt-5">
              <h3 className="font-extrabold text-stone-850 text-sm uppercase tracking-wider mb-3">Distance to Temple</h3>
              <div className="flex flex-col gap-2.5">
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input 
                    type="checkbox"
                    checked={distanceUnder200}
                    onChange={(e) => setDistanceUnder200(e.target.checked)}
                    className="w-4.5 h-4.5 rounded border-stone-300 text-[#D77E1E] focus:ring-[#D77E1E] cursor-pointer"
                  />
                  <span className="text-sm text-stone-700 font-semibold group-hover:text-stone-900 transition-colors">
                    Under 200 meters
                  </span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input 
                    type="checkbox"
                    checked={distance200to500}
                    onChange={(e) => setDistance200to500(e.target.checked)}
                    className="w-4.5 h-4.5 rounded border-stone-300 text-[#D77E1E] focus:ring-[#D77E1E] cursor-pointer"
                  />
                  <span className="text-sm text-stone-700 font-semibold group-hover:text-stone-900 transition-colors">
                    200m - 500 meters
                  </span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input 
                    type="checkbox"
                    checked={distanceOver500}
                    onChange={(e) => setDistanceOver500(e.target.checked)}
                    className="w-4.5 h-4.5 rounded border-stone-300 text-[#D77E1E] focus:ring-[#D77E1E] cursor-pointer"
                  />
                  <span className="text-sm text-stone-700 font-semibold group-hover:text-stone-900 transition-colors">
                    Over 500 meters
                  </span>
                </label>
              </div>
            </div>

            {/* Filter Section: Amenities */}
            <div className="mb-2 border-t border-stone-100 pt-5">
              <h3 className="font-extrabold text-stone-850 text-sm uppercase tracking-wider mb-3">Amenities</h3>
              <div className="flex flex-col gap-2.5">
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input 
                    type="checkbox"
                    checked={filterAC}
                    onChange={(e) => setFilterAC(e.target.checked)}
                    className="w-4.5 h-4.5 rounded border-stone-300 text-[#D77E1E] focus:ring-[#D77E1E] cursor-pointer"
                  />
                  <span className="text-sm text-stone-700 font-semibold group-hover:text-stone-900 transition-colors flex items-center gap-2">
                    <Snowflake className="w-4 h-4 text-stone-400 shrink-0" /> Air Conditioned (AC)
                  </span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input 
                    type="checkbox"
                    checked={filterMeals}
                    onChange={(e) => setFilterMeals(e.target.checked)}
                    className="w-4.5 h-4.5 rounded border-stone-300 text-[#D77E1E] focus:ring-[#D77E1E] cursor-pointer"
                  />
                  <span className="text-sm text-stone-700 font-semibold group-hover:text-stone-900 transition-colors flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-stone-400 shrink-0" /> Prasadam/Meals Available
                  </span>
                </label>
              </div>
            </div>
          </aside>

          {/* 2. Main Content Listing Cards Area (MakeMyTrip Style) */}
          <div className="flex-grow flex flex-col gap-6">
            {loading ? (
              <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-24 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-10 h-10 border-4 border-[#D77E1E] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                  <p className="text-stone-500 text-base font-bold">Scanning verified properties...</p>
                </div>
              </div>
            ) : filteredData.length > 0 ? (
              filteredData.map((item) => {
                const displayImage = item.images && item.images[0] ? item.images[0] : "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop";
                const ratingScore = item.rating || (item.verified ? 4.7 : 4.2);
                const reviews = item.reviewsCount || (item.verified ? 280 : 96);
                const ratingBadge = ratingScore >= 4.5 ? "Excellent" : "Very Good";
                
                // Slashed dummy booking original price
                const originalPrice = Math.round(Number(item.price || 1000) * 1.35);

                return (
                  <div 
                    key={item._id} 
                    className="bg-white rounded-2xl border border-stone-200 hover:border-[#D77E1E]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row overflow-hidden w-full relative md:h-[195px]"
                  >
                    {/* Left: Image Blocks */}
                    <div className="w-full md:w-72 h-48 md:h-full shrink-0 relative bg-[#FAF9F5]">
                      <img 
                        src={displayImage} 
                        alt={item.name} 
                        className="w-full h-full object-cover" 
                      />
                      {item.verified && (
                        <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] sm:text-[11px] font-extrabold uppercase px-3 py-1 rounded-md shadow-md flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Naman Verified
                        </div>
                      )}
                      {/* Rating Overlay on Image for Mobile */}
                      <div className="absolute bottom-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 border border-white/10 md:hidden">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" /> {ratingScore} ({reviews} Reviews)
                      </div>
                    </div>

                    {/* Middle: Rich Details Area */}
                    <div className="p-5 flex-grow flex flex-col justify-center border-b md:border-b-0 md:border-r border-stone-100 md:h-full overflow-hidden">
                      {/* Rating block (Desktop only) */}
                      <div className="hidden md:flex items-center gap-2 mb-1.5">
                        <div className="bg-[#D77E1E]/10 px-2 py-0.5 rounded text-[10px] sm:text-xs font-extrabold text-[#D77E1E] flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-[#D77E1E] text-transparent" /> {ratingScore}
                        </div>
                        <span className="text-stone-850 text-xs font-extrabold">{ratingBadge}</span>
                        <span className="text-stone-400 text-xs font-bold">({reviews} ratings)</span>
                      </div>

                      <h3 className="font-bold font-display text-lg sm:text-xl text-stone-900 tracking-tight leading-snug hover:text-[#D77E1E] transition-colors mb-2">
                        {item.name}
                      </h3>

                      {/* Location Sub-line */}
                      <div className="flex flex-wrap items-center gap-y-1.5 gap-x-2.5 text-xs sm:text-sm text-stone-500 font-semibold">
                        <span className="flex items-center gap-1 font-bold text-stone-600">
                          <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" /> {item.temple}
                        </span>
                        {item.distance && (
                          <span className="flex items-center gap-1 bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full text-xs font-bold">
                            <Footprints className="w-3.5 h-3.5 text-stone-400" /> {item.distance} from gate
                          </span>
                        )}
                        {item.walkingTime && (
                          <span className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full text-xs font-bold">
                            🚶 {item.walkingTime.toLowerCase().includes("walk") ? item.walkingTime : `${item.walkingTime} walk`}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right: OTA Booking Panel */}
                    <div className="p-5 md:w-60 shrink-0 flex flex-row md:flex-col justify-between items-center md:items-end gap-3 bg-stone-50/50 md:bg-white text-right md:h-full">
                      {/* Price Section */}
                      <div className="text-left md:text-right">
                        <div className="flex items-center gap-1.5 md:justify-end text-stone-400 text-[11px] font-bold line-through">
                          ₹{originalPrice}
                        </div>
                        <div className="flex items-baseline gap-0.5 md:justify-end">
                          <span className="text-stone-900 text-xl sm:text-2xl font-black font-display text-[#D77E1E]">
                            ₹{item.price || "800"}
                          </span>
                          <span className="text-stone-500 text-[10px] font-bold">/ night</span>
                        </div>
                        <span className="text-[9px] text-stone-400 font-semibold block mt-0.5">
                          + ₹{Math.round(Number(item.price || 800) * 0.12)} taxes & fees
                        </span>
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-row md:flex-col gap-2 w-auto md:w-full">
                        {item.phoneNumber ? (
                          <a 
                            href={`tel:${item.phoneNumber.replace(/\s+/g, '')}`} 
                            className="bg-[#D77E1E] text-white hover:bg-[#c2711b] px-3.5 py-2 rounded-xl font-extrabold text-[11px] sm:text-xs flex items-center justify-center gap-1 shadow-sm transition-colors cursor-pointer text-center whitespace-nowrap"
                          >
                            <Phone className="w-3.5 h-3.5 shrink-0" /> Call to Book
                          </a>
                        ) : (
                          <button 
                            disabled 
                            className="bg-stone-200 text-stone-400 px-3.5 py-2 rounded-xl font-bold text-[11px] sm:text-xs cursor-not-allowed text-center whitespace-nowrap"
                          >
                            Booking Full
                          </button>
                        )}
                        <Link 
                          to={typeParam === "Hotel" ? `/yatra/hotels/${slug || "temple"}/${item.slug}` : typeParam === "Ashram" ? `/yatra/ashrams/${slug || "temple"}/${item.slug}` : `/yatra/dharamshalas/${slug || "temple"}/${item.slug}`}
                          className="bg-white text-stone-800 border border-stone-300 hover:bg-stone-50 px-3.5 py-2 rounded-xl font-extrabold text-[11px] sm:text-xs flex items-center justify-center gap-1 shadow-sm transition-colors text-center whitespace-nowrap"
                        >
                          View Details <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="py-20 text-center bg-white border border-stone-200 rounded-2xl shadow-sm max-w-2xl mx-auto w-full px-6">
                <ShieldAlert className="w-12 h-12 text-[#D77E1E] mx-auto mb-4" />
                <p className="text-stone-900 font-extrabold text-xl mb-2">No Matching Accommodations Found</p>
                <p className="text-stone-500 text-sm font-semibold max-w-md mx-auto mb-6">
                  We couldn't find any listings matching your active filters. Try clearing some selections or searching a different term!
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-2.5 bg-[#D77E1E] text-white font-extrabold text-sm rounded-xl hover:bg-[#c2711b] transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>

        </div>

        {/* 3. Mobile Filters Slide-over Menu (MMT Inspired) */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden lg:hidden flex">
            {/* Backdrop overlay */}
            <div 
              onClick={() => setMobileFiltersOpen(false)}
              className="absolute inset-0 bg-stone-950/60 transition-opacity backdrop-blur-sm" 
            />

            {/* Panel */}
            <div className="relative w-full max-w-sm ml-auto bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-250">
              
              {/* Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-stone-100">
                <h2 className="font-extrabold text-stone-950 text-lg flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-[#D77E1E]" /> Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                </h2>
                <button 
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-1 text-stone-400 hover:text-stone-700 bg-stone-100 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Filters Block */}
              <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-6">
                
                {/* Verification */}
                <div>
                  <h3 className="font-extrabold text-stone-900 text-xs uppercase tracking-wider mb-3">Verification</h3>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox"
                      checked={filterVerified}
                      onChange={(e) => setFilterVerified(e.target.checked)}
                      className="w-5 h-5 rounded border-stone-300 text-[#D77E1E] focus:ring-[#D77E1E]"
                    />
                    <span className="text-sm text-stone-700 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Naman Verified Only
                    </span>
                  </label>
                </div>

                {/* Price */}
                <div className="border-t border-stone-100 pt-5">
                  <h3 className="font-extrabold text-stone-900 text-xs uppercase tracking-wider mb-3">Price Per Night</h3>
                  <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={budgetUnder1000}
                        onChange={(e) => setBudgetUnder1000(e.target.checked)}
                        className="w-5 h-5 rounded border-stone-300 text-[#D77E1E] focus:ring-[#D77E1E]"
                      />
                      <span className="text-sm text-stone-700 font-semibold">Under ₹1,000</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={budget1000to2000}
                        onChange={(e) => setBudget1000to2000(e.target.checked)}
                        className="w-5 h-5 rounded border-stone-300 text-[#D77E1E] focus:ring-[#D77E1E]"
                      />
                      <span className="text-sm text-stone-700 font-semibold">₹1,000 - ₹2,000</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={budgetOver2000}
                        onChange={(e) => setBudgetOver2000(e.target.checked)}
                        className="w-5 h-5 rounded border-stone-300 text-[#D77E1E] focus:ring-[#D77E1E]"
                      />
                      <span className="text-sm text-stone-700 font-semibold">Over ₹2,000</span>
                    </label>
                  </div>
                </div>

                {/* Distance */}
                <div className="border-t border-stone-100 pt-5">
                  <h3 className="font-extrabold text-stone-900 text-xs uppercase tracking-wider mb-3">Distance to Temple</h3>
                  <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={distanceUnder200}
                        onChange={(e) => setDistanceUnder200(e.target.checked)}
                        className="w-5 h-5 rounded border-stone-300 text-[#D77E1E] focus:ring-[#D77E1E]"
                      />
                      <span className="text-sm text-stone-700 font-semibold">Under 200m</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={distance200to500}
                        onChange={(e) => setDistance200to500(e.target.checked)}
                        className="w-5 h-5 rounded border-stone-300 text-[#D77E1E] focus:ring-[#D77E1E]"
                      />
                      <span className="text-sm text-stone-700 font-semibold">200m - 500m</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={distanceOver500}
                        onChange={(e) => setDistanceOver500(e.target.checked)}
                        className="w-5 h-5 rounded border-stone-300 text-[#D77E1E] focus:ring-[#D77E1E]"
                      />
                      <span className="text-sm text-stone-700 font-semibold">Over 500m</span>
                    </label>
                  </div>
                </div>

                {/* Amenities */}
                <div className="border-t border-stone-100 pt-5">
                  <h3 className="font-extrabold text-stone-900 text-xs uppercase tracking-wider mb-3">Amenities</h3>
                  <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={filterAC}
                        onChange={(e) => setFilterAC(e.target.checked)}
                        className="w-5 h-5 rounded border-stone-300 text-[#D77E1E] focus:ring-[#D77E1E]"
                      />
                      <span className="text-sm text-stone-700 font-semibold flex items-center gap-2">
                        <Snowflake className="w-4 h-4 text-stone-400 shrink-0" /> AC Rooms
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={filterMeals}
                        onChange={(e) => setFilterMeals(e.target.checked)}
                        className="w-5 h-5 rounded border-stone-300 text-[#D77E1E] focus:ring-[#D77E1E]"
                      />
                      <span className="text-sm text-stone-700 font-semibold flex items-center gap-2">
                        <Utensils className="w-4 h-4 text-stone-400 shrink-0" /> Prasadam / Meals
                      </span>
                    </label>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="p-6 border-t border-stone-100 flex gap-4">
                <button
                  onClick={clearAllFilters}
                  className="flex-1 py-3 border border-stone-300 rounded-xl text-stone-600 font-bold text-xs hover:bg-stone-50 transition-colors"
                >
                  Reset All
                </button>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="flex-1 py-3 bg-[#D77E1E] text-white rounded-xl font-bold text-xs hover:bg-[#c2711b] transition-colors"
                >
                  Apply Filters
                </button>
              </div>

            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default Accommodation;
