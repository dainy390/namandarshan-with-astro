import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, ArrowRight, Sparkles, Calendar } from "lucide-react";
import { getApiUrl, readJsonResponse } from "@/utils/api";

interface PanchangData {
  tithi?: { name: string; paksha: string; number: number } | null;
  nakshatra?: { name: string; number: number } | null;
  yoga?: any;
  sunrise?: string | null;
  sunset?: string | null;
  lunarMonth?: { lunar_month_name: string } | null;
  date?: string;
  festivals?: { date: string; name: string }[];
  mantra?: { deity: string; mantra: string; meaning: string };
  weekday?: number;
}

const hindiWeekdays = ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"];
const englishWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const hindiMonths = ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"];

const AajKiTithiWidget = () => {
  const [data, setData] = useState<PanchangData | null>(() => {
    // Try to load from localStorage for instant display
    try {
      const saved = localStorage.getItem("panchang_today");
      if (saved) {
        const parsed = JSON.parse(saved);
        const todayKey = new Date().toISOString().split('T')[0];
        // Only use if it's for today (simple check, backend does IST but this helps)
        if (parsed.date === todayKey) return parsed;
      }
    } catch (e) {
      console.error("Error loading panchang from localStorage", e);
    }
    return null;
  });
  const [loading, setLoading] = useState(!data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getApiUrl("/api/panchang/today"));
        const json = await readJsonResponse(res);
        if (json.success) {
          setData(json.data);
          // Save to localStorage for next time
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

  // Get current date info (always available locally)
  const now = new Date();
  const dayOfWeek = now.getDay();
  const dateNum = now.getDate();
  const monthIndex = now.getMonth();
  const year = now.getFullYear();

  // We are removing the blocking 'if (loading)' return to allow the widget container and date to appear instantly.
  // We handle loading states for individual data fields below.


  const tithiName = data?.tithi?.name;
  const paksha = data?.tithi?.paksha
    ? data.tithi.paksha.charAt(0).toUpperCase() + data.tithi.paksha.slice(1)
    : "";
  const nakshatraName = data?.nakshatra?.name;
  const yogaName = data?.yoga && typeof data.yoga === "object"
    ? ((data.yoga as any)["1"]?.name || (data.yoga as any)?.name)
    : undefined;
  const nextFestival = data?.festivals?.[0];

  const hasPanchangData = tithiName || nakshatraName || yogaName;

  return (
    <div 
      className="w-full relative z-40 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 dark:from-orange-950/30 dark:via-amber-950/20 dark:to-orange-950/30 border-y border-orange-200/50 dark:border-orange-800/30"
      style={{ marginTop: "var(--header-height, 140px)" }}
    >
      <div className="container mx-auto px-4 py-3 md:py-2.5">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-6">

          {/* Row 1 on mobile / Left section on desktop: Date & Label */}
          <div className="flex items-center justify-between md:justify-start gap-3 shrink-0">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-500 shrink-0" />
              <div className="flex flex-col leading-tight">
                <span className="text-[11px] font-bold uppercase tracking-widest text-orange-700 dark:text-orange-400">
                  आज का पंचांग
                </span>
                <span className="text-[10px] text-orange-600/70 dark:text-orange-500/60">
                  Today's Panchang
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-orange-100 dark:bg-orange-900/40 px-2.5 py-1 rounded-lg md:ml-2">
              <Calendar className="w-3 h-3 text-orange-600 dark:text-orange-400" />
              <span className="text-xs font-semibold text-orange-800 dark:text-orange-300">
                {dateNum} {hindiMonths[monthIndex]} · {hindiWeekdays[dayOfWeek]}
              </span>
            </div>
          </div>

          {/* Row 2 on mobile / Center on desktop: Key Data */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm">
            {hasPanchangData ? (
              <>
                {tithiName && (
                  <span className="flex items-center gap-1.5 text-gray-800 dark:text-gray-200">
                    <span className="text-orange-500">🔱</span>
                    <span className="text-[11px] text-gray-500 dark:text-gray-400">तिथि:</span>
                    <span className="font-semibold text-sm">{paksha} {tithiName}</span>
                  </span>
                )}
                {nakshatraName && (
                  <>
                    <span className="hidden md:inline text-orange-300">•</span>
                    <span className="flex items-center gap-1.5 text-gray-800 dark:text-gray-200">
                      <span className="text-orange-500">⭐</span>
                      <span className="text-[11px] text-gray-500 dark:text-gray-400">नक्षत्र:</span>
                      <span className="font-semibold text-sm">{nakshatraName}</span>
                    </span>
                  </>
                )}
                {yogaName && (
                  <>
                    <span className="hidden md:inline text-orange-300">•</span>
                    <span className="flex items-center gap-1.5 text-gray-800 dark:text-gray-200">
                      <span className="text-orange-500">🙏</span>
                      <span className="text-[11px] text-gray-500 dark:text-gray-400">योग:</span>
                      <span className="font-semibold text-sm">{yogaName}</span>
                    </span>
                  </>
                )}
                {data?.sunrise && (
                  <>
                    <span className="hidden md:inline text-orange-300">•</span>
                    <span className="flex items-center gap-1 text-gray-700 dark:text-gray-300 text-xs">
                      <Sun className="w-3.5 h-3.5 text-amber-500" />
                      {data.sunrise}
                    </span>
                  </>
                )}
                {data?.sunset && (
                  <>
                    <span className="hidden md:inline text-orange-300">•</span>
                    <span className="flex items-center gap-1 text-gray-700 dark:text-gray-300 text-xs">
                      <Moon className="w-3.5 h-3.5 text-indigo-400" />
                      {data.sunset}
                    </span>
                  </>
                )}
              </>
            ) : (
              /* Fallback when no API data: show mantra + next festival */
              <>
                {data?.mantra && (
                  <span className="flex items-center gap-1.5 text-gray-800 dark:text-gray-200">
                    <span className="text-orange-500">🙏</span>
                    <span className="text-[11px] text-gray-500 dark:text-gray-400">{englishWeekdays[dayOfWeek]}:</span>
                    <span className="font-semibold text-sm">{data.mantra.deity}</span>
                    <span className="hidden sm:inline text-xs text-gray-500">— {data.mantra.mantra}</span>
                  </span>
                )}
                {nextFestival && (
                  <>
                    <span className="hidden md:inline text-orange-300">•</span>
                    <span className="flex items-center gap-1.5 text-gray-800 dark:text-gray-200 text-xs">
                      <span className="text-orange-500">🪔</span>
                      <span className="text-[11px] text-gray-500 dark:text-gray-400">आगामी / Upcoming:</span>
                      <span className="font-semibold">{nextFestival.name}</span>
                    </span>
                  </>
                )}
              </>
            )}
          </div>

          {/* Right: Link */}
          <Link
            to="/aaj-ki-tithi"
            className="flex items-center justify-center md:justify-end gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 transition-colors shrink-0 group py-1"
          >
            पूरा पंचांग देखें / View Full Calendar
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AajKiTithiWidget;
