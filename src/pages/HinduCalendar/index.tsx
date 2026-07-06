import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import {
  Sun,
  Moon,
  Sunrise,
  Sunset,
  Star,
  Calendar,
  BookOpen,
  Clock,
  AlertTriangle,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { getApiUrl, readJsonResponse } from "@/utils/api";
const GROQ_API_KEY = import.meta.env.VITE_PANCHANG_AI_API_KEY;

interface PanchangData {
  tithi?: any;
  nakshatra?: any;
  yoga?: any;
  karana?: any;
  sunrise?: string | null;
  sunset?: string | null;
  lunarMonth?: any;
  ritu?: any;
  samvat?: any;
  rahuKalam?: any;
  date?: string;
  location?: string;
  festivals?: { date: string; name: string }[];
  mantra?: { deity: string; mantra: string; meaning: string };
  weekday?: number;
}

const hindiWeekdays = [
  "रविवार",
  "सोमवार",
  "मंगलवार",
  "बुधवार",
  "गुरुवार",
  "शुक्रवार",
  "शनिवार",
];
const englishWeekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const hindiMonths = [
  "जनवरी",
  "फ़रवरी",
  "मार्च",
  "अप्रैल",
  "मई",
  "जून",
  "जुलाई",
  "अगस्त",
  "सितम्बर",
  "अक्टूबर",
  "नवम्बर",
  "दिसम्बर",
];

const HinduCalendar = () => {
  const [data, setData] = useState<PanchangData | null>(() => {
    try {
      const saved = localStorage.getItem("panchang_today");
      if (saved) {
        const parsed = JSON.parse(saved);
        const todayKey = new Date().toISOString().split("T")[0];
        if (parsed.date === todayKey) return parsed;
      }
    } catch (e) {
      console.error("Error loading panchang from localStorage", e);
    }
    return null;
  });
  const [loading, setLoading] = useState(!data);
  const [recommendedPuja, setRecommendedPuja] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getApiUrl("/api/panchang/today"));
        const json = await readJsonResponse(res);
        if (json.success) {
          setData(json.data);
          localStorage.setItem("panchang_today", JSON.stringify(json.data));
        }
      } catch (err) {
        console.error("Panchang fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

    useEffect(() => {
      const fetchPujaRecommendation = async () => {
        try {
          const res = await fetch(getApiUrl("/api/pujas"));
          const json = await readJsonResponse(res);

          const pujas = json?.data || json || [];

         const prompt = `
                Today's Panchang:

                Tithi: ${data?.tithi?.name}
                Paksha: ${data?.tithi?.paksha}
                Nakshatra: ${data?.nakshatra?.name}

                Available Pujas:

                ${JSON.stringify(
                  pujas.map((p: any) => ({
                    title: p.title,
                    description: p.description,
                    deity: p.deity,
                    slug: p.slug,
                  })),
                  null,
                  2
                )}

                Select the SINGLE most relevant puja for today's Panchang.

                Return ONLY valid JSON.

                {
                  "pujaName": "",
                  "deityNameHindi": "",
                  "slug": ""
                }

                Rules:
                1. pujaName MUST be the selected puja title followed by the word " Puja" if it does not already end with "Puja".
                2. deityNameHindi must be the deity name in Hindi (e.g. "भगवान शिव", "भगवान विष्णु", "श्री गणेश", "माता दुर्गा").
                3. slug MUST be selected from the provided puja list.
                4. Do not invent slugs.
                5. Return JSON only. No explanations.
                `;
          const response = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${GROQ_API_KEY}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                temperature: 0.3,
                max_tokens: 300,
                response_format: {
                  type: "json_object",
                },
                messages: [
                  {
                    role: "system",
                    content:
                      "You are a Hindu Panchang and Puja recommendation expert. Return only JSON.",
                  },
                  {
                    role: "user",
                    content: prompt,
                  },
                ],
              }),
            }
          );

          const groqData = await response.json();

          const recommendation = JSON.parse(
            groqData.choices[0].message.content
          );

          setRecommendedPuja(recommendation);
        } catch (err) {
          console.error("Puja recommendation error:", err);
        }
      };

      if (data?.tithi?.name) {
        fetchPujaRecommendation();
      }
    }, [data]);


  console.log("Panchang data:", recommendedPuja);

  const now = new Date();
  const dayOfWeek = data?.weekday ?? now.getDay();
  const dateNum = now.getDate();
  const monthIndex = now.getMonth();
  const year = now.getFullYear();

  const englishDate = now.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const hindiDate = `${dateNum} ${hindiMonths[monthIndex]} ${year}, ${hindiWeekdays[dayOfWeek]}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <SEO
        title="Naman Calendar — Hindu Panchang Today | Aaj Ki Tithi"
        description="Naman Calendar — Your daily Hindu Panchang with Tithi, Nakshatra, Yoga, Karana, Sunrise/Sunset, Rahu Kalam, Shubh Muhurat and upcoming festivals. Powered by Namandarshan."
        keywords={[
          "naman calendar",
          "aaj ki tithi",
          "hindu panchang today",
          "tithi today",
          "nakshatra today",
          "shubh muhurat",
          "hindu calendar",
        ]}
      />
      <Header />

      <main className="pt-40 md:pt-48 pb-16">
        {/* Page Hero - Renders immediately with local date */}

        <section className="bg-gradient-to-b from-[#FFF8EC] to-[#FAF6EE] py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
              {/* Left Section */}
              <div>
                <div className="inline-flex items-center gap-2 bg-white border border-[#F2E9D8] rounded-full px-4 py-2 text-sm text-[#6B5A4D] mb-5">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {hindiDate} ·{" "}
                    {data?.weekday !== undefined
                      ? hindiWeekdays[data.weekday]
                      : "-"}{" "}
                    · {data?.location || "—"}
                  </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#4A1018] mb-4">
                  आज है {data?.tithi?.paksha} {data?.tithi?.name} —
                  <br />
                  {recommendedPuja?.pujaName || "किसी भी देवता"} के लिए अत्यंत शुभ दिन
                </h1>

                <p className="text-[#6B5A4D] text-base md:text-lg leading-relaxed max-w-xl mb-6">
                  पंचांग के अनुसार आज का दिन {recommendedPuja?.deityNameHindi} की आराधना के लिए विशेष
                  फलदायी है। आज ही अपने घर या मंदिर में पूजा बुक करें, हमारे
                  सत्यापित पंडितों द्वारा।
                </p>

                <div className="inline-flex items-center gap-2 bg-[#E3EFE9] text-[#2F5D50] font-semibold text-sm px-4 py-2 rounded-lg mb-6">
                  ✓ आज शुभ मुहूर्त उपलब्ध — सीमित स्लॉट
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to={`/puja/${recommendedPuja?.slug || ""}`}
                    className="bg-[#E8821B] hover:bg-[#D5740F] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    आज की पूजा बुक करें →
                  </Link>

                  <Link
                    to="/darshan"
                    className="border border-[#7A1F2B] text-[#7A1F2B] hover:bg-[#7A1F2B] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    🛕 मंदिर दर्शन बुक करें
                  </Link>
                </div>
              </div>

              {/* Right Card */}
              <div className="bg-white border border-[#F2E9D8] rounded-2xl p-6 shadow-[0_8px_24px_rgba(122,31,43,0.06)]">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-[#7A1F2B] font-bold text-lg">
                    आज का पंचांग — एक नज़र में
                  </h3>

                  <span className="text-sm text-[#6B5A4D]">{hindiDate}</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#FAF6EE] rounded-xl p-3">
                    <p className="text-xs uppercase tracking-wide text-[#6B5A4D]">
                      तिथि
                    </p>
                    <p className="font-semibold text-[#4A1018] mt-1">
                      {data?.tithi?.name || "-"}
                    </p>
                  </div>

                  <div className="bg-[#FAF6EE] rounded-xl p-3">
                    <p className="text-xs uppercase tracking-wide text-[#6B5A4D]">
                      नक्षत्र
                    </p>
                    <p className="font-semibold text-[#4A1018] mt-1">
                      {data?.nakshatra?.name || "-"}
                    </p>
                  </div>

                  <div className="bg-[#FAF6EE] rounded-xl p-3">
                    <p className="text-xs uppercase tracking-wide text-[#6B5A4D]">
                      योग
                    </p>
                    <p className="font-semibold text-[#4A1018] mt-1">
                      {data?.yoga?.name || "-"}
                    </p>
                  </div>

                  <div className="bg-[#FAF6EE] rounded-xl p-3">
                    <p className="text-xs uppercase tracking-wide text-[#6B5A4D]">
                      करण
                    </p>
                    <p className="font-semibold text-[#4A1018] mt-1">
                      {data?.karana?.name || "-"}
                    </p>
                  </div>
                </div>

                <button className="w-full mt-5 text-center text-[#E8821B] font-semibold hover:text-[#D5740F] transition-colors">
                  संपूर्ण पंचांग देखें ↓
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-5">
              {/* Darshan */}
              <div className="bg-white border border-[#F2E9D8] rounded-2xl p-6 hover:shadow-[0_10px_26px_rgba(122,31,43,0.08)] transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-[#FBE7CC] text-[#E8821B] flex items-center justify-center text-2xl mb-4">
                  🛕
                </div>

                <h3 className="text-lg font-bold text-[#4A1018] mb-2">
                  मंदिर दर्शन बुक करें
                </h3>

                <p className="text-[#6B5A4D] text-sm leading-relaxed mb-5">
                  प्रमुख मंदिरों में दर्शन स्लॉट बुक करें और अपनी सुविधा अनुसार
                  समय चुनें।
                </p>

                <Link
                  to="/darshan"
                  className="block w-full text-center border border-[#F2E9D8] text-[#7A1F2B] font-semibold py-3 rounded-lg hover:bg-[#7A1F2B] hover:text-white transition-colors"
                >
                  दर्शन स्लॉट बुक करें
                </Link>
              </div>

              {/* Prasadam */}
              <div className="bg-white border border-[#F2E9D8] rounded-2xl p-6 hover:shadow-[0_10px_26px_rgba(122,31,43,0.08)] transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-[#E3EFE9] text-[#2F5D50] flex items-center justify-center text-2xl mb-4">
                  🌿
                </div>

                <h3 className="text-lg font-bold text-[#4A1018] mb-2">
                  प्रसाद ऑर्डर करें
                </h3>

                <p className="text-[#6B5A4D] text-sm leading-relaxed mb-5">
                  मंदिर से सीधे भेजा गया शुद्ध प्रसाद पूरे भारत में घर बैठे
                  प्राप्त करें।
                </p>

                <Link
                  to="/prasadam"
                  className="block w-full text-center border border-[#F2E9D8] text-[#7A1F2B] font-semibold py-3 rounded-lg hover:bg-[#7A1F2B] hover:text-white transition-colors"
                >
                  प्रसाद ऑर्डर करें
                </Link>
              </div>

              {/* Puja */}
              <div className="bg-white border border-[#F2E9D8] rounded-2xl p-6 hover:shadow-[0_10px_26px_rgba(122,31,43,0.08)] transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-[#F3E3D4] text-[#7A1F2B] flex items-center justify-center text-2xl mb-4">
                  🪔
                </div>

                <h3 className="text-lg font-bold text-[#4A1018] mb-2">
                  पूजा बुक करें
                </h3>

                <p className="text-[#6B5A4D] text-sm leading-relaxed mb-5">
                  सत्यापित पंडितों द्वारा आपके नाम और गोत्र से विशेष पूजा संपन्न
                  करवाई जाती है।
                </p>

                <Link
                  to="/puja"
                  className="block w-full text-center bg-[#E8821B] hover:bg-[#D5740F] text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  पूजा बुक करें
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 md:px-6 mb-12">
          <div className="bg-[#7A1F2B] rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="text-4xl flex-shrink-0">🔥</div>

            <div className="flex-1">
              <div className="text-xs uppercase tracking-wider text-[#FBE7CC] font-semibold mb-2">
                आज का शुभ संकल्प
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                कृष्ण चतुर्दशी पर शिव पूजा अत्यंत फलदायी मानी जाती है
              </h3>

              <p className="text-[#EBD9C9] text-sm md:text-base leading-relaxed">
                हमारे पंडित आज ही आपके लिए विशेष रुद्राभिषेक पूजा करवा सकते हैं
                — पूर्ण विधि-विधान के साथ।
              </p>
            </div>

            <Link
              to="/puja"
              className="bg-[#E8821B] hover:bg-[#D5740F] text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
            >
              शिव पूजा बुक करें
            </Link>
          </div>
        </section>

        {loading && !data ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin" />
          </div>
        ) : (
          <section className="max-w-6xl mx-auto px-4 md:px-6 mb-12">
            <div className="mb-6">
              <div className="text-xs uppercase tracking-wider text-[#E8821B] font-bold mb-2">
                हिन्दू पंचांग · Hindu Panchang
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#4A1018]">
                आज का संपूर्ण पंचांग — {hindiDate}
              </h2>
            </div>

            <div className="container mx-auto px-4 max-w-6xl space-y-6 md:space-y-8">
              {/* Main Panchang Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <PanchangCard
                  icon={<span className="text-xl md:text-2xl">🔱</span>}
                  labelHi="तिथि"
                  labelEn="Tithi"
                  value={data?.tithi?.name}
                  sub={
                    data?.tithi?.paksha
                      ? `${
                          data.tithi.paksha.charAt(0).toUpperCase() +
                          data.tithi.paksha.slice(1)
                        } पक्ष`
                      : undefined
                  }
                />
                <PanchangCard
                  icon={
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
                  }
                  labelHi="नक्षत्र"
                  labelEn="Nakshatra"
                  value={data?.nakshatra?.name}
                />
                <PanchangCard
                  icon={<span className="text-xl md:text-2xl">🙏</span>}
                  labelHi="योग"
                  labelEn="Yoga"
                  value={
                    typeof data?.yoga === "object"
                      ? (data?.yoga as any)?.["1"]?.name ||
                        (data?.yoga as any)?.name
                      : undefined
                  }
                />
                <PanchangCard
                  icon={<span className="text-xl md:text-2xl">🪔</span>}
                  labelHi="करण"
                  labelEn="Karana"
                  value={
                    typeof data?.karana === "object"
                      ? (data?.karana as any)?.["1"]?.name ||
                        (data?.karana as any)?.name
                      : undefined
                  }
                />
                <PanchangCard
                  icon={
                    <Sunrise className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                  }
                  labelHi="सूर्योदय"
                  labelEn="Sunrise"
                  value={data?.sunrise || undefined}
                />
                <PanchangCard
                  icon={
                    <Sunset className="w-5 h-5 md:w-6 md:h-6 text-indigo-500" />
                  }
                  labelHi="सूर्यास्त"
                  labelEn="Sunset"
                  value={data?.sunset || undefined}
                />
                <PanchangCard
                  icon={
                    <Moon className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                  }
                  labelHi="चन्द्र मास"
                  labelEn="Lunar Month"
                  value={data?.lunarMonth?.lunar_month_name}
                />
                <PanchangCard
                  icon={<span className="text-xl md:text-2xl">🍃</span>}
                  labelHi="ऋतु"
                  labelEn="Season"
                  value={data?.ritu?.name}
                />
              </div>

              {/* Rahu Kalam */}
              {data?.rahuKalam && (
                <div className="mt-6 bg-[#FBEFE0] border border-[#D98A2B] rounded-2xl p-5 md:p-6 flex flex-col lg:flex-row items-start lg:items-center gap-4">
                  <div className="text-2xl flex-shrink-0">⏰</div>

                  <div className="flex-1">
                    <p className="font-semibold text-[#4A1018] text-base md:text-lg">
                      राहु काल आज:{" "}
                      {typeof data.rahuKalam === "string"
                        ? data.rahuKalam
                        : `${data.rahuKalam.start} – ${data.rahuKalam.end}`}
                    </p>

                    <p className="text-sm text-[#6B5A4D] mt-1">
                      इस समय में नया कार्य आरंभ न करें। शुभ कार्यों का सही समय
                      जानने के लिए पंडित जी से सलाह लें।
                    </p>
                  </div>

                  <Link
                    to="/astro-naman"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-[#7A1F2B] text-[#7A1F2B] font-semibold hover:bg-[#7A1F2B] hover:text-white transition-colors"
                  >
                    मुफ्त मुहूर्त सलाह लें
                  </Link>
                </div>
              )}

              {/* Weekday & Samvat (always show weekday since we compute it locally)  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="bg-white dark:bg-gray-800/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-orange-100 dark:border-orange-900/30 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Sun className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                    <span className="text-[10px] md:text-xs font-semibold text-orange-700 dark:text-orange-400 uppercase tracking-wide">
                      वार | Weekday
                    </span>
                  </div>
                  <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                    {hindiWeekdays[dayOfWeek]} ({englishWeekdays[dayOfWeek]})
                  </p>
                </div>
                {data?.samvat ? (
                  <div className="bg-white dark:bg-gray-800/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-orange-100 dark:border-orange-900/30 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                      <span className="text-[10px] md:text-xs font-semibold text-orange-700 dark:text-orange-400 uppercase tracking-wide">
                        संवत | Samvat Year
                      </span>
                    </div>
                    <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                      {data.samvat?.vikram_chaitradi_year_name ||
                        data.samvat?.saka_salivahana_year_name ||
                        "—"}
                      {data.samvat?.vikram_chaitradi_number
                        ? ` (${data.samvat.vikram_chaitradi_number})`
                        : ""}
                    </p>
                  </div>
                ) : (
                  <div className="bg-white dark:bg-gray-800/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-orange-100 dark:border-orange-900/30 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                      <span className="text-[10px] md:text-xs font-semibold text-orange-700 dark:text-orange-400 uppercase tracking-wide">
                        तारीख | Date
                      </span>
                    </div>
                    <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                      {dateNum} {hindiMonths[monthIndex]} {year}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{englishDate}</p>
                  </div>
                )}
              </div>

              <section className="bg-[#F2E9D8] py-10 md:py-12">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-3xl md:text-4xl font-bold text-[#7A1F2B]">
                        10L+
                      </div>
                      <div className="text-sm text-[#6B5A4D] mt-1">
                        संतुष्ट भक्त
                      </div>
                    </div>

                    <div>
                      <div className="text-3xl md:text-4xl font-bold text-[#7A1F2B]">
                        250+
                      </div>
                      <div className="text-sm text-[#6B5A4D] mt-1">
                        साझेदार मंदिर
                      </div>
                    </div>

                    <div>
                      <div className="text-3xl md:text-4xl font-bold text-[#7A1F2B]">
                        500+
                      </div>
                      <div className="text-sm text-[#6B5A4D] mt-1">
                        सत्यापित पंडित
                      </div>
                    </div>

                    <div>
                      <div className="text-3xl md:text-4xl font-bold text-[#7A1F2B]">
                        4.8 ★
                      </div>
                      <div className="text-sm text-[#6B5A4D] mt-1">
                        औसत रेटिंग
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Interactive Calendar */}
              <InteractiveCalendarGrid festivals={allFestivals2026} />

              {/* Mantra of the Day (always shown — uses local weekday) */}
              {data?.mantra && (
                <div className="bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 dark:from-orange-950/40 dark:via-amber-950/20 dark:to-yellow-950/30 rounded-xl md:rounded-2xl p-6 md:p-8 border border-orange-200 dark:border-orange-800/30 shadow-sm text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                    <span className="text-[10px] md:text-sm font-semibold text-orange-700 dark:text-orange-400 uppercase tracking-wide">
                      आज का मंत्र | Today's Mantra — {data.mantra.deity}
                    </span>
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                  </div>
                  <p className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 font-serif">
                    {data.mantra.mantra}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm max-w-lg mx-auto italic">
                    "{data.mantra.meaning}"
                  </p>
                </div>
              )}

              {/* Upcoming Festivals */}
              <section className="py-12">
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-wider text-[#E8821B] font-bold mb-2">
                    आगामी पर्व
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-[#4A1018]">
                    जल्द आने वाले त्योहार
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {data.festivals.map((f, i) => {
                    const fDate = new Date(f.date + "T00:00:00+05:30");
                    const daysLeft = Math.ceil(
                      (fDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
                    );

                    return (
                      <div
                        key={i}
                        className="bg-white border border-[#F2E9D8] rounded-2xl overflow-hidden"
                      >
                        <div className="bg-[#FBE7CC] p-4 flex justify-between items-center">
                          <span className="text-sm font-bold text-[#7A1F2B]">
                            {f.name}
                          </span>

                          <span className="bg-white text-[#7A1F2B] text-xs font-semibold px-2 py-1 rounded-md">
                            {daysLeft === 0 ? "आज" : `${daysLeft} दिन शेष`}
                          </span>
                        </div>

                        <div className="p-5">
                          <h3 className="text-lg font-bold text-[#4A1018] mb-2">
                            {f.name}
                          </h3>

                          <p className="text-sm text-[#6B5A4D] mb-4">
                            {fDate.toLocaleDateString("hi-IN", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </section>
        )}
      </main>

      <section className="bg-[#4A1018] py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            आज ही ईश्वर से जुड़ें
          </h2>

          <p className="text-[#E3CFC0] text-base md:text-lg max-w-2xl mx-auto mb-8">
            दर्शन देखें, प्रसाद मंगवाएं या पूजा बुक करें — सब कुछ एक ही जगह पर
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/puja"
              className="bg-[#E8821B] hover:bg-[#D5740F] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              पूजा बुक करें
            </Link>

            <Link
              to="/prasadam"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#4A1018] transition-colors"
            >
              प्रसाद ऑर्डर करें
            </Link>

            <Link
              to="/darshan"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#4A1018] transition-colors"
            >
              मंदिर दर्शन बुक करें
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

// Reusable bilingual Panchang card
const PanchangCard = ({
  icon,
  labelHi,
  labelEn,
  value,
  sub,
}: {
  icon: React.ReactNode;
  labelHi: string;
  labelEn: string;
  value?: string;
  sub?: string;
}) => (
  <div className="bg-white dark:bg-gray-800/50 rounded-xl md:rounded-2xl p-4 md:p-5 border border-orange-100 dark:border-orange-900/30 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center gap-1.5 mb-2 md:mb-3">
      {icon}
      <div className="leading-tight">
        <span className="text-[10px] md:text-xs font-semibold text-orange-700 dark:text-orange-400 uppercase tracking-wide block">
          {labelHi}
        </span>
        <span className="text-[9px] md:text-[10px] text-orange-600/60 dark:text-orange-500/50 block">
          {labelEn}
        </span>
      </div>
    </div>
    <p className="text-base md:text-xl font-bold text-gray-900 dark:text-white">
      {value || (
        <span className="text-gray-300 dark:text-gray-600 text-sm font-normal italic">
          Updating...
        </span>
      )}
    </p>
    {sub && (
      <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 mt-1">
        {sub}
      </p>
    )}
  </div>
);

// --- Full festivals list for 2026 ---
const allFestivals2026: { date: string; name: string }[] = [
  { date: '2026-01-13', name: 'Lohri' },
  { date: '2026-01-14', name: 'Makar Sankranti / Pongal' },
  { date: '2026-01-23', name: 'Vasant Panchami' },
  { date: '2026-01-26', name: 'Republic Day' },
  { date: '2026-02-01', name: 'Guru Ravidas Jayanti' },
  { date: '2026-02-15', name: 'Maha Shivaratri' },
  { date: '2026-03-03', name: 'Holika Dahan' },
  { date: '2026-03-03', name: 'Chhoti Holi' },
  { date: '2026-03-04', name: 'Holi' },
  { date: '2026-03-08', name: 'Rangpanchami' },
  { date: '2026-03-19', name: 'Ugadi / Gudi Padwa' },
  { date: '2026-03-19', name: 'Chaitra Navratri Begins' },
  { date: '2026-03-26', name: 'Ram Navami' },
  { date: '2026-04-02', name: 'Hanuman Jayanti / Chaitra Purnima' },
  { date: '2026-04-14', name: 'Baisakhi' },
  { date: '2026-04-19', name: 'Akshaya Tritiya' },
  { date: '2026-05-01', name: 'Buddha Purnima' },
  { date: '2026-07-16', name: 'Jagannath Rath Yatra' },
  { date: '2026-07-29', name: 'Guru Purnima' },
  { date: '2026-08-15', name: 'Hariyali Teej' },
  { date: '2026-08-15', name: 'Independence Day' },
  { date: '2026-08-17', name: 'Nag Panchami' },
  { date: '2026-08-28', name: 'Raksha Bandhan' },
  { date: '2026-09-04', name: 'Krishna Janmashtami' },
  { date: '2026-09-14', name: 'Ganesh Chaturthi' },
  { date: '2026-09-17', name: 'Vishwakarma Puja' },
  { date: '2026-10-11', name: 'Sharad Navratri Begins' },
  { date: '2026-10-16', name: 'Durga Puja Begins' },
  { date: '2026-10-20', name: 'Dussehra / Vijayadashami' },
  { date: '2026-10-29', name: 'Karwa Chauth' },
  { date: '2026-11-06', name: 'Dhanteras' },
  { date: '2026-11-08', name: 'Diwali / Lakshmi Puja' },
  { date: '2026-11-09', name: 'Govardhan Puja' },
  { date: '2026-11-11', name: 'Bhai Dooj' },
  { date: '2026-11-15', name: 'Chhath Puja' },
  { date: '2026-11-20', name: 'Dev Uthani Ekadashi' },
  { date: '2026-11-21', name: 'Tulsi Vivah' },
];

// --- Interactive Calendar Grid ---
const calendarMonthsHi = [
  "जनवरी",
  "फ़रवरी",
  "मार्च",
  "अप्रैल",
  "मई",
  "जून",
  "जुलाई",
  "अगस्त",
  "सितम्बर",
  "अक्टूबर",
  "नवम्बर",
  "दिसम्बर",
];
const calendarMonthsEn = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const dayHeadersHi = ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"];
const dayHeadersEn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const InteractiveCalendarGrid = ({
  festivals,
}: {
  festivals: { date: string; name: string }[];
}) => {
  const today = new Date();
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Build festival lookup map: "YYYY-MM-DD" -> name[]
  const festivalMap: Record<string, string[]> = {};
  for (const f of festivals) {
    if (!festivalMap[f.date]) festivalMap[f.date] = [];
    festivalMap[f.date].push(f.name);
  }

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay(); // 0=Sun
  const todayKey = `${today.getFullYear()}-${String(
    today.getMonth() + 1,
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else setViewMonth((m) => m - 1);
    setSelectedDate(null);
  };
  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else setViewMonth((m) => m + 1);
    setSelectedDate(null);
  };
  const goToToday = () => {
    setViewMonth(today.getMonth());
    setViewYear(today.getFullYear());
    setSelectedDate(todayKey);
  };

  // Build day cells
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDayOfWeek; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  // Festivals this month for the list below the grid
  const festivalsThisMonth = festivals.filter((f) => {
    const [fy, fm] = f.date.split("-").map(Number);
    return fy === viewYear && fm === viewMonth + 1;
  });

  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-orange-100 dark:border-orange-900/30 shadow-sm">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
          <span className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
            हिन्दू कैलेंडर | Hindu Calendar
          </span>
        </div>
        <button
          onClick={goToToday}
          className="text-[10px] md:text-xs font-semibold text-orange-600 hover:text-orange-700 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30 px-2 py-1 rounded-md hover:bg-orange-100 dark:hover:bg-orange-950/50 transition-colors"
        >
          आज | Today
        </button>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-950/50 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <div className="text-center">
          <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
            {calendarMonthsHi[viewMonth]} {viewYear}
          </p>
          <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400">
            {calendarMonthsEn[viewMonth]} {viewYear}
          </p>
        </div>
        <button
          onClick={nextMonth}
          className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-950/50 transition-colors"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 mb-1">
        {dayHeadersHi.map((dh, i) => (
          <div key={i} className="text-center py-1.5">
            <span className="text-[10px] md:text-xs font-semibold text-orange-700 dark:text-orange-400 block">
              {dh}
            </span>
            <span className="text-[8px] md:text-[10px] text-gray-400 dark:text-gray-500 block">
              {dayHeadersEn[i]}
            </span>
          </div>
        ))}
      </div>

      {/* Day Cells */}
      <div className="grid grid-cols-7 gap-0.5 md:gap-1">
        {cells.map((day, idx) => {
          if (day === null)
            return (
              <div
                key={`empty-${idx}`}
                className="min-h-[52px] md:min-h-[80px]"
              />
            );

          const dateKey = `${viewYear}-${String(viewMonth + 1).padStart(
            2,
            "0",
          )}-${String(day).padStart(2, "0")}`;
          const isToday = dateKey === todayKey;
          const festivalNames = festivalMap[dateKey];
          const isFestival = !!festivalNames;
          const isSelected = dateKey === selectedDate;
          const isSunday = idx % 7 === 0;

          return (
            <button
              key={dateKey}
              onClick={() => setSelectedDate(isSelected ? null : dateKey)}
              className={`
                min-h-[52px] md:min-h-[80px] rounded-lg md:rounded-xl flex flex-col items-center pt-1.5 md:pt-2 px-0.5 relative transition-all text-sm md:text-base font-medium overflow-hidden
                ${
                  isToday
                    ? "bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30 scale-[1.02]"
                    : isSelected
                    ? "bg-orange-100 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 ring-2 ring-orange-400"
                    : isFestival
                    ? "bg-orange-50 dark:bg-orange-950/20 text-gray-900 dark:text-white hover:bg-orange-100 dark:hover:bg-orange-950/40 border border-orange-200/50 dark:border-orange-800/30"
                    : isSunday
                    ? "text-red-500 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                    : "text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                }
              `}
            >
              <span className="font-semibold">{day}</span>
              {isFestival &&
                festivalNames.map((name, fi) => (
                  <span
                    key={fi}
                    className={`text-[7px] md:text-[9px] leading-tight mt-0.5 text-center w-full px-0.5 truncate ${
                      isToday
                        ? "text-white/90"
                        : "text-orange-600 dark:text-orange-400 font-semibold"
                    }`}
                  >
                    {name}
                  </span>
                ))}
            </button>
          );
        })}
      </div>

      {/* Selected Date Detail */}
      {selectedDate && festivalMap[selectedDate] && (
        <div className="mt-4 p-3 md:p-4 bg-orange-50 dark:bg-orange-950/20 rounded-xl border border-orange-200 dark:border-orange-800/30 animate-in fade-in slide-in-from-top-2 duration-200">
          <p className="text-xs font-semibold text-orange-700 dark:text-orange-400 mb-2">
            {new Date(selectedDate + "T00:00:00+05:30").toLocaleDateString(
              "hi-IN",
              { day: "numeric", month: "long" },
            )}{" "}
            —{" "}
            {new Date(selectedDate + "T00:00:00+05:30").toLocaleDateString(
              "en-IN",
              { day: "numeric", month: "long", weekday: "long" },
            )}
          </p>
          {festivalMap[selectedDate].map((name, i) => (
            <div key={i} className="flex items-center gap-2 py-1">
              <span className="text-orange-500">🪔</span>
              <span className="font-semibold text-gray-900 dark:text-white text-sm">
                {name}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* This Month's Festivals list */}
      {festivalsThisMonth.length > 0 && !selectedDate && (
        <div className="mt-4 pt-4 border-t border-orange-100 dark:border-orange-800/30">
          <p className="text-xs font-semibold text-orange-700 dark:text-orange-400 mb-2">
            {calendarMonthsHi[viewMonth]} के त्योहार | Festivals in{" "}
            {calendarMonthsEn[viewMonth]}
          </p>
          <div className="flex flex-wrap gap-2">
            {festivalsThisMonth.map((f, i) => (
              <button
                key={i}
                onClick={() => setSelectedDate(f.date)}
                className="text-xs bg-orange-50 dark:bg-orange-950/20 text-gray-800 dark:text-gray-200 px-2.5 py-1 rounded-full border border-orange-200 dark:border-orange-800/30 hover:bg-orange-100 dark:hover:bg-orange-950/40 transition-colors"
              >
                <span className="mr-1">🪔</span>{" "}
                {new Date(f.date + "T00:00:00+05:30").getDate()} — {f.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HinduCalendar;
