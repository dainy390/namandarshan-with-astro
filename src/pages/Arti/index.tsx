import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { ShareGuide } from "@/components/common/ShareGuide";
import { Flame, Music2, Heart, BookOpen, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getApiUrl } from "@/utils/api";

const sampleAartis = [
  {
    id: 1,
    title: "जागो जागो शेरावाली",
    englishTitle: "Jaago Jaago Sherawali",
    deity: "माँ दुर्गा",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=1200&auto=format&fit=crop",
    description:
      "A powerful devotional bhajan dedicated to Maa Durga, sung during Navratri, Jagran and Mata Ki Chowki.",
  },
  {
    id: 2,
    title: "ॐ जय जगदीश हरे",
    englishTitle: "Om Jai Jagdish Hare",
    deity: "भगवान विष्णु",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
    description:
      "One of the most popular Hindu aartis dedicated to Lord Vishnu and sung in temples across India.",
  },
  {
    id: 3,
    title: "जय अम्बे गौरी",
    englishTitle: "Jai Ambe Gauri",
    deity: "माँ अम्बे",
    image:
      "https://images.unsplash.com/photo-1604608672516-f1b7b1b1b1b1?q=80&w=1200&auto=format&fit=crop",
    description:
      "Traditional Maa Durga aarti performed during Durga Puja and Navratri celebrations.",
  },
];

const AartiPage = () => {
  const [aarties, setAarties] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "aarti" | "bhajan">("all");

  useEffect(() => {
    const fetchAarti = async () => {
      let result = await fetch(getApiUrl("/api/aarti"), {
        method: "GET",
      });

      let aarti = await result.json();

      console.log(aarti.data);
      setAarties(aarti.data);
    };

    fetchAarti();
  }, []);

  const filteredAarties = aarties.filter((aarti: any) => {
    // 1. Search Query
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      (aarti.title?.english || "").toLowerCase().includes(searchLower) ||
      (aarti.title?.hindi || "").toLowerCase().includes(searchLower) ||
      (aarti.deity?.english || "").toLowerCase().includes(searchLower) ||
      (aarti.deity?.hindi || "").toLowerCase().includes(searchLower) ||
      (aarti.tags || []).some((tag: string) => tag.toLowerCase().includes(searchLower));

    if (!matchesSearch) return false;

    // 2. Type Filter
    const englishTitle = (aarti.title?.english || "").toLowerCase();
    const hindiTitle = (aarti.title?.hindi || "").toLowerCase();
    const tags = (aarti.tags || []).map((t: string) => t.toLowerCase());
    
    const isAarti = aarti.type
      ? aarti.type === "aarti"
      : (englishTitle.includes("aarti") || 
         hindiTitle.includes("आरती") || 
         tags.includes("aarti") || 
         tags.includes("आरती"));

    if (filterType === "aarti") return isAarti;
    if (filterType === "bhajan") return !isAarti;
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <SEO
        title="Aarti & Bhajan Collection"
        description="Explore devotional Aartis, Bhajans, lyrics, meanings, and spiritual significance."
        keywords={[
          "Aarti",
          "Bhajan",
          "Durga Aarti",
          "Hindi Bhajan",
          "Devotional Songs",
          "Spiritual Lyrics",
        ]}
      />

      <Header />

      <main className="flex-grow pt-40 md:pt-48 lg:pt-52 pb-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-orange-100">
            <nav className="flex items-center space-x-2 text-sm text-stone-500">
              <a href="/" className="hover:text-primary transition-colors">
                Home
              </a>

              <span>/</span>

              <span className="text-primary font-medium">Aarti</span>
            </nav>

            <ShareGuide />
          </div>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 rounded-[40px] overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10">
                <Flame className="w-40 h-40 text-white" />
              </div>
            </div>

            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/20 px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-6">
                <Music2 className="w-4 h-4" />
                Divine Collection
              </div>

              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6">
                Aarti & Bhajan Collection
              </h1>

              <p className="max-w-3xl mx-auto text-orange-50 text-lg leading-relaxed">
                Explore sacred Aartis, Bhajans, devotional lyrics, meanings, and
                spiritual significance in both Hindi and English.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-orange-100">
              <BookOpen className="w-12 h-12 text-orange-600 mb-5" />

              <h3 className="text-3xl font-black text-stone-900">100+</h3>

              <p className="text-stone-600 font-medium mt-2">
                Devotional Aartis
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-orange-100">
              <Heart className="w-12 h-12 text-orange-600 mb-5" />

              <h3 className="text-3xl font-black text-stone-900">
                Hindi + English
              </h3>

              <p className="text-stone-600 font-medium mt-2">
                Multilingual Lyrics
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-orange-100">
              <Flame className="w-12 h-12 text-orange-600 mb-5" />

              <h3 className="text-3xl font-black text-stone-900">
                Spiritual Meaning
              </h3>

              <p className="text-stone-600 font-medium mt-2">
                Significance & Benefits
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="container mx-auto px-4 mb-12">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-orange-100/80 flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full lg:max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="search arti , bhajans"
                className="w-full pl-12 pr-4 py-4 bg-stone-50 border border-stone-200 rounded-2xl text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-base font-medium"
              />
            </div>

            {/* Filter Options */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
              <div className="flex flex-wrap items-center gap-3">
                {[
                  { id: "all", label: "All", count: aarties.length },
                  { 
                    id: "aarti", 
                    label: "Aarti", 
                    count: aarties.filter((a: any) => {
                      const et = (a.title?.english || "").toLowerCase();
                      const ht = (a.title?.hindi || "").toLowerCase();
                      const tg = (a.tags || []).map((t: string) => t.toLowerCase());
                      return et.includes("aarti") || ht.includes("आरती") || tg.includes("aarti") || tg.includes("आरती");
                    }).length 
                  },
                  { 
                    id: "bhajan", 
                    label: "Bhajan", 
                    count: aarties.filter((a: any) => {
                      const et = (a.title?.english || "").toLowerCase();
                      const ht = (a.title?.hindi || "").toLowerCase();
                      const tg = (a.tags || []).map((t: string) => t.toLowerCase());
                      return !(et.includes("aarti") || ht.includes("आरती") || tg.includes("aarti") || tg.includes("आरती"));
                    }).length 
                  }
                ].map((option) => (
                  <label
                    key={option.id}
                    className={`flex items-center gap-3 px-5 py-2.5 rounded-xl border text-sm font-black cursor-pointer transition-all duration-300 select-none ${
                      filterType === option.id
                        ? "bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-100/50"
                        : "bg-white border-stone-200 text-stone-600 hover:bg-stone-50 hover:border-stone-300"
                    }`}
                  >
                    <div className="relative flex items-center justify-center">
                      <input
                        type="radio"
                        name="filterType"
                        value={option.id}
                        checked={filterType === option.id}
                        onChange={() => setFilterType(option.id as any)}
                        className="sr-only"
                      />
                      <div className={`w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center transition-all ${
                        filterType === option.id
                          ? "border-white bg-white"
                          : "border-stone-300 bg-stone-50"
                      }`}>
                        {filterType === option.id && (
                          <div className="w-2 h-2 rounded-full bg-orange-600" />
                        )}
                      </div>
                    </div>
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Aarti Cards */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredAarties.length > 0 ? (
              filteredAarties.map((aarti: any) => {
                const et = (aarti.title?.english || "").toLowerCase();
                const ht = (aarti.title?.hindi || "").toLowerCase();
                const tg = (aarti.tags || []).map((t: string) => t.toLowerCase());
                const isAarti = aarti.type
                  ? aarti.type === "aarti"
                  : (et.includes("aarti") || ht.includes("आरती") || tg.includes("aarti") || tg.includes("आरती"));

                return (
                  <div
                    key={aarti.slug}
                    className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-orange-100"
                  >
                    {/* Image */}
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={aarti.thumbnail}
                        alt={aarti.title.hindi}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="inline-flex items-center gap-2 bg-orange-500/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white mb-3">
                          <Flame className="w-3 h-3" />
                          {aarti.deity.hindi}
                        </div>

                        <h2 className="text-2xl font-black text-white leading-tight">
                          {aarti.title.hindi}
                        </h2>

                        <p className="text-orange-100 text-sm mt-1">
                          {aarti.title.english && /[\u0900-\u097F]/.test(aarti.title.english) && aarti.slug === "शिव-जी-की-आरती–ॐ-जय-शिव-ओंकारा-Lyrics"
                            ? "Shiv Ji Ki Aarti - Om Jai Shiv Omkara"
                            : aarti.title.english}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <Link
                        to={`/bhajan-aarti/${aarti.slug}`}
                        className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors"
                      >
                        {isAarti ? "Read Full Aarti" : "Read Full Bhajan"}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full bg-white rounded-[32px] p-16 text-center border border-orange-100 shadow-sm max-w-lg mx-auto">
                <Flame className="w-12 h-12 text-stone-300 mx-auto mb-4" />
                <h3 className="text-xl font-black text-stone-800">No hymns found</h3>
                <p className="text-stone-500 text-sm mt-1">Try adjusting your search query or filter selection.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AartiPage;
