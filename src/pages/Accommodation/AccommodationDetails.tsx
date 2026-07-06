import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { getApiUrl } from "@/utils/api";
import {
  ChevronRight, Phone, ArrowRight, CheckCircle2, Footprints, MapPin,
  Utensils, Snowflake, Users, Accessibility, ArrowLeft, Calendar, Star,
  Compass, Info, ShieldCheck, Heart, Share2, Award, Wifi, ShieldAlert, Sparkles, X, ChevronLeft
} from "lucide-react";

// Robust static mock fallback data to keep existing Ujjain and other pages loaded
const staticMockLookup: Record<string, any> = {
  "mahakaleshwar-bhakt-niwas": {
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
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop"
    ],
    about: "<p>Mahakaleshwar Bhakt Niwas offers comfortable, clean, and safe lodging options close to the holy shrine. Highly recommended for senior citizens and family travelers.</p>",
    heroContent: "Safest and closest stay choice near Mahakaleshwar Temple gate.",
    whyChoose: "<ul><li>Unbeatable location</li><li>Clean and quiet environment</li><li>Excellent hospitality</li></ul>",
    roomTypes: [
      { typeName: "Standard Room", capacity: "2 Guests", priceRange: "₹1,200/night", bestSuitableFor: "Couples" },
      { typeName: "Family Suite", capacity: "4 Guests", priceRange: "₹2,200/night", bestSuitableFor: "Family groups" }
    ],
    attractions: [
      { name: "Mahakaleshwar Temple", distance: "200 m", time: "3 mins" },
      { name: "Harsiddhi Temple", distance: "800 m", time: "10 mins" }
    ]
  },
  "yadav-dharamshala": {
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
    slug: "yadav-dharamshala",
    temple: "Mahakaleshwar",
    rating: 4.2,
    reviewsCount: 148,
    images: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
    ],
    about: "<p>A traditional style Dharamshala keeping you right next to the temple gate. Features simple living blocks at unbeatable pocket-friendly rates.</p>",
    roomTypes: [
      { typeName: "Non-AC Standard", capacity: "2 Guests", priceRange: "₹800/night", bestSuitableFor: "Budget pilgrims" }
    ]
  }
};

const AccommodationDetails = () => {
  const { temple_name, dharamshala_name } = useParams();
  const navigate = useNavigate();
  const [stay, setStay] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  // Image Viewer State
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openViewer = (index: number) => {
    setCurrentImageIndex(index);
    setViewerOpen(true);
  };

  const activePathType = window.location.pathname.includes("/hotels")
    ? "Hotel"
    : window.location.pathname.includes("/ashrams")
      ? "Ashram"
      : "Dharamshala";

  useEffect(() => {
    if (!dharamshala_name) return;
    setLoading(true);

    // Fetch from backend slug endpoint
    fetch(getApiUrl(`/api/accommodations/slug/${dharamshala_name}`))
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setStay(data.data);
        } else {
          // Check static lookup fallbacks
          const localMatch = staticMockLookup[dharamshala_name.toLowerCase()];
          if (localMatch) {
            setStay(localMatch);
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching stay detail:", err);
        // Fall back to local mock lookup
        const localMatch = staticMockLookup[dharamshala_name.toLowerCase()];
        if (localMatch) {
          setStay(localMatch);
        }
        setLoading(false);
      });
  }, [dharamshala_name]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F5F5F9] text-stone-850">
        <Header />
        <main className="flex-grow flex items-center justify-center pt-48">
          <div className="text-center">
            <div className="w-10 h-10 border-4 border-[#D77E1E] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="font-bold text-stone-600 text-sm md:text-base">Retrieving premium stay details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!stay) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F5F5F9] text-stone-850">
        <Header />
        <main className="flex-grow pt-48 max-w-3xl mx-auto px-4 text-center">
          <div className="bg-white p-10 rounded-2xl border border-stone-200 shadow-md">
            <ShieldAlert className="w-16 h-16 text-[#D77E1E] mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold font-display text-stone-900 mb-2">Property Details Not Found</h2>
            <p className="text-stone-500 mb-6 text-sm md:text-base">The accommodation details could not be retrieved. It might have been updated, or check your URL.</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#D77E1E] text-white font-extrabold px-6 py-3.5 rounded-xl shadow-md hover:bg-[#c2711b] transition-all text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const defaultGallery = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop"
  ];

  const stayImages = stay.images && stay.images.length > 0
    ? stay.images
    : defaultGallery;

  const originalPrice = Math.round(Number(stay.price || 1000) * 1.35);
  const ratingScore = stay.rating || (stay.verified ? 4.7 : 4.1);
  const reviewsCount = stay.reviewsCount || (stay.verified ? 280 : 96);
  const ratingText = ratingScore >= 4.5 ? "Excellent" : "Very Good";

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F9] font-sans text-stone-800">
      <SEO
        title={`${stay.name} Stays Near ${stay.temple || temple_name?.replace(/-/g, ' ')} | Naman Darshan`}
        description={stay.metaDescription || `Reserve your room at ${stay.name} close to ${stay.temple} with Naman Darshan.`}
      />
      <Header />

      {/* Dynamic Style block to strictly normalize Quill rich-text outputs and maintain perfect size consistency */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .rich-text-content * {
          font-size: inherit !important;
          font-family: inherit !important;
          line-height: 1.625 !important;
        }
        .rich-text-content p {
          margin-bottom: 0.85rem;
        }
        .rich-text-content p:last-child {
          margin-bottom: 0;
        }
        .rich-text-content ul, .rich-text-content ol {
          margin-left: 1.5rem;
          margin-bottom: 0.85rem;
          list-style-type: disc;
        }
        .rich-text-content li {
          margin-bottom: 0.35rem;
        }
      `}} />

      <main className="flex-grow pt-48 md:pt-52 lg:pt-56 pb-32 lg:pb-24 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        {/* Breadcrumbs */}
        <div className="flex items-center text-xs md:text-sm text-stone-500 mb-6 font-semibold flex-wrap gap-y-1">
          <Link to="/" className="hover:text-[#D77E1E] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-1.5 shrink-0" />
          <Link to={activePathType === "Hotel" ? "/yatra/hotels" : activePathType === "Ashram" ? "/yatra/ashrams" : "/yatra/dharamshalas"} className="hover:text-[#D77E1E] transition-colors">{stay.type || activePathType}</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-1.5 shrink-0" />
          <Link to={activePathType === "Hotel" ? `/yatra/hotels/${temple_name}` : activePathType === "Ashram" ? `/yatra/ashrams/${temple_name}` : `/yatra/dharamshalas/${temple_name}`} className="hover:text-[#D77E1E] transition-colors capitalize">{temple_name?.replace(/-/g, ' ')}</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-1.5 shrink-0" />
          <span className="text-stone-700 capitalize font-bold">{stay.name}</span>
        </div>

        {/* 1. MakeMyTrip Title & Rating Bar */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm mb-6 relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              {/* Stars & Verification Tag */}
              <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="bg-[#D77E1E]/10 text-[#D77E1E] text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md">
                  {stay.type || "Hotel"}
                </span>
                {stay.verified && (
                  <span className="bg-emerald-50 text-emerald-700 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md flex items-center gap-1 border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5" /> Naman Verified
                  </span>
                )}
              </div>

              {/* Hotel Title Heading */}
              <h1 className="text-2xl md:text-3.5xl font-extrabold font-display text-stone-900 tracking-tight leading-tight">
                {stay.h1 || stay.name}
              </h1>

              {/* Location pin details */}
              {stay.address && (
                <p className="text-stone-500 text-xs md:text-sm font-semibold flex items-center gap-1.5 mt-2.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0" /> {stay.address}
                  {stay.distance && (
                    <span className="text-[#D77E1E] border-l border-stone-200 pl-2.5">
                      📍 Just {stay.distance} to temple gate
                    </span>
                  )}
                </p>
              )}

              {/* Catchphrase / Subtitle */}
              {stay.subtitle && (
                <p className="text-stone-600 text-sm md:text-base font-semibold italic mt-3.5 pl-3 border-l-2 border-[#D77E1E]/40 max-w-2xl">
                  "{stay.subtitle}"
                </p>
              )}
            </div>

            {/* Premium Ratings Bubble */}
            <div className="flex items-center gap-3 bg-stone-50 p-3 rounded-xl border border-stone-200 shrink-0 self-start md:self-center">
              <div className="bg-[#D77E1E] text-white font-black text-lg w-11 h-11 rounded-xl flex items-center justify-center shadow-sm font-display">
                {ratingScore}
              </div>
              <div>
                <p className="font-extrabold text-stone-900 text-xs md:text-sm leading-none mb-1">{ratingText}</p>
                <p className="text-stone-400 text-[11px] md:text-xs font-semibold">({reviewsCount} Reviews)</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Adaptive Mosaic Image Grid */}
        <div className={`grid grid-cols-1 ${stayImages.length > 1 ? "md:grid-cols-5" : "md:grid-cols-1"} gap-3 h-[260px] md:h-[400px] rounded-2xl overflow-hidden mb-8 shadow-sm`}>
          {/* Main Large Image */}
          <div
            className={`${stayImages.length > 1 ? "md:col-span-3" : "w-full"} h-full overflow-hidden relative group cursor-pointer`}
            onClick={() => openViewer(0)}
          >
            <img
              src={stayImages[0]}
              alt={stay.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right side Grid of Smaller Images */}
          {stayImages.length > 1 && (
            <div className={`hidden md:grid md:col-span-2 gap-3 h-full ${stayImages.length === 2 ? 'grid-cols-1 grid-rows-1' : stayImages.length === 3 ? 'grid-cols-1 grid-rows-2' : stayImages.length === 4 ? 'grid-cols-2 grid-rows-2 [&>*:first-child]:col-span-2' : 'grid-cols-2 grid-rows-2'}`}>
              {stayImages.slice(1, 5).map((imgUrl, idx) => (
                <div
                  key={idx}
                  className="h-full overflow-hidden relative group cursor-pointer"
                  onClick={() => openViewer(idx + 1)}
                >
                  <img
                    src={imgUrl}
                    alt={`${stay.name} gallery ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* + More Photos Overlay on the 5th image if there are more than 5 images */}
                  {idx === 3 && stayImages.length > 5 && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-[1px] cursor-pointer">
                      <span className="text-white font-extrabold text-xs md:text-sm tracking-wide uppercase flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-[#D77E1E]" /> + {stayImages.length - 5} More Photos
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 3. Main Detail Layout (Double Column) */}
        <div className="flex flex-col lg:flex-row gap-8 items-start relative">

          {/* LEFT COLUMN: Property info, Room details, amenities, landmarks */}
          <div className="flex-grow w-full lg:max-w-[70%] space-y-8">

            {/* Highlights Bar */}
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-5 grid grid-cols-2 md:grid-cols-4 gap-4 divide-y-0 divide-x divide-stone-100">
              <div className="flex items-center gap-3">
                <div className="bg-stone-50 p-2 rounded-xl border border-stone-200 text-stone-500 shrink-0">
                  <Snowflake className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Cooling</p>
                  <p className="text-xs md:text-sm font-extrabold text-stone-850 mt-0.5">{stay.ac || "AC Available"}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pl-4">
                <div className="bg-stone-50 p-2 rounded-xl border border-stone-200 text-stone-500 shrink-0">
                  <Utensils className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Dining</p>
                  <p className="text-xs md:text-sm font-extrabold text-stone-850 mt-0.5">{stay.food || "Prasadam Served"}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pl-4">
                <div className="bg-stone-50 p-2 rounded-xl border border-stone-200 text-stone-500 shrink-0">
                  <Users className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Ideal For</p>
                  <p className="text-xs md:text-sm font-extrabold text-stone-850 mt-0.5">{stay.occupancy || "Families & Groups"}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pl-4">
                <div className="bg-stone-50 p-2 rounded-xl border border-stone-200 text-stone-500 shrink-0">
                  <Accessibility className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Access</p>
                  <p className="text-xs md:text-sm font-extrabold text-stone-850 mt-0.5">{stay.accessibility || "Elderly Friendly"}</p>
                </div>
              </div>
            </div>

            {/* About Property */}
            {stay.about && (
              <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 md:p-8 space-y-4">
                <h3 className="font-extrabold text-stone-900 text-lg border-b border-stone-100 pb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-[#D77E1E]" /> About the Property
                </h3>
                <div
                  dangerouslySetInnerHTML={{ __html: stay.about }}
                  className="rich-text-content text-stone-600 text-sm md:text-base leading-relaxed"
                />
              </div>
            )}

            {/* Why Choose stay */}
            {stay.whyChoose && (
              <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 md:p-8 space-y-4">
                <h3 className="font-extrabold text-stone-900 text-lg border-b border-stone-100 pb-3 flex items-center gap-2">
                  <Star className="w-4.5 h-4.5 text-[#D77E1E] fill-current" /> Why Choose {stay.name}
                </h3>
                <div
                  dangerouslySetInnerHTML={{ __html: stay.whyChoose }}
                  className="rich-text-content text-stone-600 text-sm md:text-base leading-relaxed"
                />
              </div>
            )}

            {/* Room Rates & Categories Table */}
            {stay.roomTypes && stay.roomTypes.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-extrabold text-stone-900 text-lg flex items-center gap-2">
                  🏠 Room Categories & Standard Rates
                </h3>
                <div className="bg-white border border-stone-200 overflow-hidden rounded-2xl shadow-sm">
                  <table className="w-full border-collapse text-left text-xs md:text-sm">
                    <thead>
                      <tr className="bg-stone-50 border-b border-stone-200 text-stone-500 font-bold uppercase tracking-wider text-[10px] md:text-xs">
                        <th className="p-4 border-r border-stone-200">Room Tier</th>
                        <th className="p-4 border-r border-stone-200">Capacity</th>
                        <th className="p-4 border-r border-stone-200">Price Range</th>
                        <th className="p-4">Best Suited For</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 font-semibold text-stone-700">
                      {stay.roomTypes.map((room: any, rIdx: number) => (
                        <tr key={rIdx} className="hover:bg-stone-50/50 transition-colors">
                          <td className="p-4 border-r border-stone-200 font-extrabold text-stone-900 text-sm">{room.typeName}</td>
                          <td className="p-4 border-r border-stone-200 text-sm">{room.capacity}</td>
                          <td className="p-4 border-r border-stone-200 text-[#D77E1E] font-black text-sm">{room.priceRange}</td>
                          <td className="p-4">
                            <span className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                              {room.bestSuitableFor}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[11px] md:text-xs text-stone-500 font-medium italic mt-2 px-2">
                  *Note: Room rates may change depending on seasonal demand, festivals, and weekend rushes.
                </p>
              </div>
            )}

            {/* Amenities Details list */}
            {(stay.amenities || stay.facilities) && (
              <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 md:p-8 space-y-6">
                {stay.amenities && (
                  <div className="space-y-3">
                    <h4 className="font-extrabold text-stone-900 text-sm md:text-base uppercase tracking-wider flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-emerald-600" /> In-Room Amenities
                    </h4>
                    <div
                      dangerouslySetInnerHTML={{ __html: stay.amenities }}
                      className="rich-text-content text-stone-600 text-sm md:text-base leading-relaxed"
                    />
                  </div>
                )}
                {/* Why Book Through Naman Darshan? */}
                <div className="space-y-4 pt-5 border-t border-stone-100">
                  <h4 className="font-extrabold text-stone-900 text-lg md:text-xl font-display flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-[#D77E1E]" /> Why Book Through Naman Darshan?
                  </h4>

                  {stay.whyBookNaman ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: stay.whyBookNaman }}
                      className="rich-text-content text-stone-600 text-sm md:text-base leading-relaxed"
                    />
                  ) : (
                    <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                      At Naman Darshan, we focus on making spiritual journeys smoother for families and pilgrims. We handpick and verify accommodations near India's most revered shrines so you can travel with absolute peace of mind.
                    </p>
                  )}

                  <div className="pt-2 bg-stone-50 rounded-xl p-5 border border-stone-100">
                    <h5 className="font-extrabold text-stone-900 mb-4 text-sm md:text-base uppercase tracking-wider">
                      Benefits of Booking Through Naman Darshan
                    </h5>
                    {stay.benefitsNaman ? (
                      <div
                        dangerouslySetInnerHTML={{ __html: stay.benefitsNaman }}
                        className="rich-text-content text-stone-700 text-sm md:text-base leading-relaxed font-medium ul-list-styled"
                      />
                    ) : (
                      <ul className="space-y-3">
                        {[
                          "Thoroughly checked and verified hotel options",
                          "Completely transparent pricing with zero hidden fees",
                          "Direct assistance via WhatsApp and phone calls",
                          "Special support tailored for families and senior citizens",
                          "Reliable, local guidance for your stay layout",
                          "A simplified, stress-free booking process close to the temples"
                        ].map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm md:text-base text-stone-700 font-medium">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Landmarks Table */}
            {stay.attractions && stay.attractions.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-extrabold text-stone-900 text-lg flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#D77E1E]" /> Landmarks Proximity & Distance
                </h3>
                <div className="bg-white border border-stone-200 overflow-hidden rounded-2xl shadow-sm">
                  <table className="w-full border-collapse text-left text-xs md:text-sm">
                    <thead>
                      <tr className="bg-stone-50 border-b border-stone-200 text-stone-500 font-bold uppercase tracking-wider text-[10px] md:text-xs">
                        <th className="p-4 border-r border-stone-200">Famous Spot</th>
                        <th className="p-4 border-r border-stone-200">Distance</th>
                        <th className="p-4">Travel Time / Walk</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 font-semibold text-stone-700">
                      {stay.attractions.map((attr: any, aIdx: number) => (
                        <tr key={aIdx} className="hover:bg-stone-50/50 transition-colors">
                          <td className="p-4 border-r border-stone-200 font-extrabold text-stone-900 text-sm">{attr.name}</td>
                          <td className="p-4 border-r border-stone-200 text-emerald-600 font-bold text-sm">{attr.distance}</td>
                          <td className="p-4 font-extrabold text-stone-850 text-sm">
                            🚶 {attr.time}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* House Rules & Guidelines */}
            {stay.rules && (
              <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 md:p-8 space-y-4">
                <h3 className="font-extrabold text-stone-900 text-lg flex items-center gap-2">
                  📋 House Guidelines & Standard Rules
                </h3>
                <div
                  dangerouslySetInnerHTML={{ __html: stay.rules }}
                  className="rich-text-content text-stone-600 text-sm md:text-base leading-relaxed"
                />
              </div>
            )}

            {/* FAQS Accordion */}
            {stay.faqs && stay.faqs.length > 0 && (
              <div className="space-y-4 pt-6 border-t border-stone-200">
                <h3 className="font-extrabold text-stone-900 text-lg md:text-xl font-display">Frequently Asked Questions</h3>
                <div className="space-y-3">
                  {stay.faqs.map((faq: any, fIdx: number) => (
                    <div key={fIdx} className="p-5 bg-white border border-stone-200 rounded-2xl shadow-sm">
                      <p className="font-extrabold text-stone-900 text-sm md:text-base">Q. {faq.question}</p>
                      <p className="text-stone-500 text-xs md:text-sm font-semibold mt-2 pl-4 border-l-2 border-[#D77E1E] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Guest Reviews */}
            {stay.reviews && stay.reviews.length > 0 && (
              <div className="space-y-4 pt-6 border-t border-stone-200">
                <h3 className="font-extrabold text-stone-900 text-lg md:text-xl font-display">Guest Reviews & Feedback</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {stay.reviews.map((rev: any, rIdx: number) => (
                    <div key={rIdx} className="p-5 bg-white border border-stone-200 rounded-2xl flex flex-col gap-3 shadow-sm">
                      <div className="flex justify-between items-center">
                        <span className="font-extrabold text-stone-900 text-sm md:text-base">{rev.name}</span>
                        <div className="flex items-center gap-0.5 text-amber-400">
                          {Array.from({ length: rev.rating || 5 }).map((_, sI) => (
                            <Star key={sI} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-stone-500 text-xs md:text-sm italic font-semibold leading-relaxed">
                        "{rev.text}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* RIGHT COLUMN: Sticky Booking Panel (MakeMyTrip Style) */}
          <aside className="w-full lg:w-[28%] shrink-0 lg:sticky lg:top-40">
            <div className="bg-white border border-stone-200 rounded-2xl shadow-md p-6 space-y-6">
              {/* Naman Partner Seal */}
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <span className="bg-[#D77E1E]/10 text-[#D77E1E] text-xs font-extrabold px-3 py-1 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Direct Partner
                </span>
                <span className="text-[10px] text-stone-400 font-bold">Updated Just Now</span>
              </div>

              {/* Price section */}
              <div>
                <div className="flex items-center gap-2 text-stone-400 text-xs font-bold line-through">
                  ₹{originalPrice}
                </div>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-[#D77E1E] text-3xl md:text-4xl font-black font-display">
                    ₹{stay.price || "900"}
                  </span>
                  <span className="text-stone-500 text-xs font-bold">/ room / night</span>
                </div>
                <span className="text-[10px] text-stone-400 font-semibold block mt-1">
                  + ₹{Math.round(Number(stay.price || 900) * 0.12)} taxes & service fees
                </span>
              </div>

              {/* Timings summary */}
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs font-bold text-stone-600 space-y-2">
                <div className="flex justify-between items-center text-xs md:text-sm">
                  <span>Standard Check-In:</span>
                  <span className="text-stone-900">{stay.checkInTime || "12:00 PM"}</span>
                </div>
                <div className="flex justify-between items-center text-xs md:text-sm">
                  <span>Standard Check-Out:</span>
                  <span className="text-stone-900">{stay.checkOutTime || "11:00 AM"}</span>
                </div>
              </div>

              {/* Desktop Booking Actions */}
              <div className="hidden lg:block space-y-2">
                {stay.phoneNumber ? (
                  <a
                    href={`tel:${stay.phoneNumber.replace(/\s+/g, '')}`}
                    className="bg-[#D77E1E] text-white hover:bg-[#c2711b] py-3.5 px-6 rounded-xl font-extrabold text-sm flex items-center justify-center gap-1.5 shadow-sm transition-all text-center w-full"
                  >
                    <Phone className="w-4 h-4 shrink-0" /> Call to Book Room
                  </a>
                ) : (
                  <a
                    href="tel:+918591222999"
                    className="bg-emerald-600 text-white hover:bg-emerald-700 py-3.5 px-6 rounded-xl font-extrabold text-sm flex items-center justify-center gap-1.5 shadow-sm transition-all text-center w-full"
                  >
                    <Phone className="w-4 h-4 shrink-0" /> Contact Support
                  </a>
                )}

                {/* Back button */}
                <button
                  onClick={() => navigate(-1)}
                  className="bg-white text-stone-800 border border-stone-300 hover:bg-stone-50 py-3 px-6 rounded-xl font-extrabold text-sm flex items-center justify-center gap-1 shadow-sm transition-all text-center w-full"
                >
                  <ArrowLeft className="w-4 h-4 shrink-0" /> Go Back to Listings
                </button>
              </div>

              {/* Mobile Go Back Button */}
              <div className="lg:hidden">
                <button
                  onClick={() => navigate(-1)}
                  className="bg-white text-stone-800 border border-stone-300 hover:bg-stone-50 py-3 px-6 rounded-xl font-extrabold text-sm flex items-center justify-center gap-1 shadow-sm transition-all text-center w-full"
                >
                  <ArrowLeft className="w-4 h-4 shrink-0" /> Go Back to Listings
                </button>
              </div>

              {/* Secure Booking Assurance */}
              <div className="text-[10px] text-stone-400 font-bold text-center flex items-center justify-center gap-1">
                🛡 No Booking Charges • Best Price Guarantee
              </div>
            </div>
          </aside>

        </div>

      </main>
      <Footer />

      {/* Mobile Sticky Booking Bar (Puja Style) */}
      <div className="fixed bottom-0 left-0 right-0 bg-stone-900 border-t border-stone-800 p-4 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] animate-in slide-in-from-bottom duration-500 lg:hidden">
        <div className="container mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-white min-w-0">
              <p className="text-[10px] sm:text-xs text-stone-400 uppercase tracking-wider font-bold mb-0.5">Secure Your Room</p>
              <p className="font-bold text-sm sm:text-base truncate">{stay.name}</p>
            </div>
          </div>
          {stay.phoneNumber ? (
            <a
              href={`tel:${stay.phoneNumber.replace(/\s+/g, '')}`}
              className="bg-[#D77E1E] hover:bg-orange-600 text-white font-bold px-5 sm:px-6 py-3 rounded-xl shadow-lg shrink-0 text-sm sm:text-base transition-transform hover:scale-105 whitespace-nowrap"
            >
              Book Now
            </a>
          ) : (
            <a
              href="tel:+918591222999"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 sm:px-6 py-3 rounded-xl shadow-lg shrink-0 text-sm sm:text-base transition-transform hover:scale-105 whitespace-nowrap"
            >
              Support
            </a>
          )}
        </div>
      </div>

      {/* Fullscreen Image Viewer Modal */}
      {viewerOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm">
          {/* Close Button */}
          <button
            onClick={() => setViewerOpen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 p-2 rounded-full transition-all z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          {stayImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex((prev) => (prev === 0 ? stayImages.length - 1 : prev - 1));
              }}
              className="absolute left-4 md:left-10 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 p-3 rounded-full transition-all z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

          {/* Next Button */}
          {stayImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex((prev) => (prev === stayImages.length - 1 ? 0 : prev + 1));
              }}
              className="absolute right-4 md:right-10 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 p-3 rounded-full transition-all z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          {/* Current Image */}
          <div className="w-full max-w-6xl max-h-[90vh] px-4 md:px-20 flex flex-col items-center justify-center" onClick={() => setViewerOpen(false)}>
            <img
              src={stayImages[currentImageIndex]}
              alt={`${stay.name} fullscreen`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Image Counter */}
            <div className="text-white/60 font-bold mt-4 tracking-widest text-sm">
              {currentImageIndex + 1} / {stayImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccommodationDetails;
