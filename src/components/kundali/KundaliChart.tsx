import { KundaliData, PLANET_SYMBOLS, RASHIS, RASHI_HINDI } from "@/lib/kundali/kundali";
import { Sparkles, MessageCircle, Info } from "lucide-react";
import { useState } from "react";
import AIPanditChat from "./AIPanditChat";

interface KundaliChartProps {
  data: KundaliData;
  onConsultPandit?: () => void;
}

export default function KundaliChart({ data, onConsultPandit }: KundaliChartProps) {
  const getHouseRashi = (houseIndex: number) => {
    return ((data.ascendant + houseIndex) % 12) + 1;
  };

  const getPlanetsInHouse = (houseIndex: number) => {
    return data.houses[houseIndex].map(pIdx => {
      const p = data.planets[pIdx];
      const sym = PLANET_SYMBOLS[p.planet];
      return p.isRetrograde ? `${sym}(R)` : sym;
    });
  };

  const size = 420;
  const padding = 10;
  const s = size - 2 * padding; // usable size
  const m = s / 2; // midpoint
  const q = s / 4; // quarter point

  // Traditional North Indian Houses Point Mapping
  const houses = [
    { id: 1, points: `${m},0 ${q},${q} ${m},${m} ${3 * q},${q}`, text: { x: m, y: m / 2 }, rashi: { x: m, y: 30 }, isDiamond: true },
    { id: 2, points: `0,0 ${m},0 ${q},${q}`, text: { x: m / 2, y: m / 4 }, rashi: { x: m / 3, y: 25 }, isDiamond: false },
    { id: 3, points: `0,0 ${q},${q} 0,${m}`, text: { x: m / 4, y: m / 2 }, rashi: { x: 25, y: m / 3 }, isDiamond: false },
    { id: 4, points: `0,${m} ${q},${q} ${m},${m} ${q},${3 * q}`, text: { x: m / 2, y: m }, rashi: { x: 30, y: m }, isDiamond: true },
    { id: 5, points: `0,${m} ${q},${3 * q} 0,${s}`, text: { x: m / 4, y: 1.5 * m }, rashi: { x: 25, y: s - m / 3 }, isDiamond: false },
    { id: 6, points: `0,${s} ${q},${3 * q} ${m},${s}`, text: { x: m / 2, y: 1.75 * m }, rashi: { x: m / 3, y: s - 25 }, isDiamond: false },
    { id: 7, points: `${m},${m} ${q},${3 * q} ${m},${s} ${3 * q},${3 * q}`, text: { x: m, y: 1.5 * m }, rashi: { x: m, y: s - 30 }, isDiamond: true },
    { id: 8, points: `${m},${s} ${3 * q},${3 * q} ${s},${s}`, text: { x: 1.5 * m, y: 1.75 * m }, rashi: { x: s - m / 3, y: s - 25 }, isDiamond: false },
    { id: 9, points: `${s},${s} ${3 * q},${3 * q} ${s},${m}`, text: { x: 1.75 * m, y: 1.5 * m }, rashi: { x: s - 25, y: s - m / 3 }, isDiamond: false },
    { id: 10, points: `${s},${m} ${3 * q},${3 * q} ${m},${m} ${3 * q},${q}`, text: { x: 1.5 * m, y: m }, rashi: { x: s - 30, y: m }, isDiamond: true },
    { id: 11, points: `${s},${m} ${3 * q},${q} ${s},0`, text: { x: 1.75 * m, y: m / 2 }, rashi: { x: s - 25, y: m / 3 }, isDiamond: false },
    { id: 12, points: `${s},0 ${3 * q},${q} ${m},0`, text: { x: 1.5 * m, y: m / 4 }, rashi: { x: s - m / 3, y: 25 }, isDiamond: false }
  ];

  return (
    <div className="flex flex-col items-center space-y-8 w-full max-w-full overflow-hidden px-4">
      <div className="text-center space-y-3">
        <h3 className="font-display text-3xl font-bold tracking-wide text-primary transition-all gold-text">
          ॥ जन्म कुण्डली ॥
        </h3>
        <p className="text-[10px] text-kumkum/60 font-hindi uppercase tracking-[0.2em] font-bold">
          Rashi Chakra · North Indian Janampatri
        </p>
      </div>

      <div className="relative p-8 bg-parchment rounded-3xl border-[4px] border-kumkum/30 shadow-[0_15px_40px_rgba(255,160,50,0.15)] group transform transition-transform hover:scale-[1.01] duration-500">
        {/* Ornaments */}
        <div className="absolute top-2 left-2 text-kumkum/20 text-3xl select-none">ॐ</div>
        <div className="absolute top-2 right-2 text-kumkum/20 text-3xl select-none">ॐ</div>
        <div className="absolute bottom-2 left-2 text-kumkum/20 text-3xl select-none">ॐ</div>
        <div className="absolute bottom-2 right-2 text-kumkum/20 text-3xl select-none">ॐ</div>

        <svg
          width={s}
          height={s}
          viewBox={`0 0 ${s} ${s}`}
          className="overflow-visible"
        >
          {/* Chart Grid Lines (Kumkum styling) */}
          <g className="chart-border">
            {/* Outer Square */}
            <rect x="0" y="0" width={s} height={s} fill="none" strokeWidth="3" />
            {/* Diagonals */}
            <line x1="0" y1="0" x2={s} y2={s} strokeWidth="2.5" />
            <line x1={s} y1="0" x2="0" y2={s} strokeWidth="2.5" />
            {/* Inner Diamond */}
            <polygon points={`${m},0 ${s},${m} ${m},${s} 0,${m}`} fill="none" strokeWidth="2.5" />
          </g>

          {/* Render Houses */}
          {houses.map((h, i) => {
            const rashiNum = getHouseRashi(i);
            const planets = getPlanetsInHouse(i);
            const isLagna = i === 0;

            return (
              <g key={h.id}>
                {/* House Fill (Subtle highlight for Lagna) */}
                {isLagna && (
                  <polygon points={h.points} className="fill-primary/5 animate-pulse" />
                )}

                {/* Rashi Number */}
                <text
                  x={h.rashi.x}
                  y={h.rashi.y}
                  textAnchor="middle"
                  className="font-hindi text-[16px] fill-vermillion font-black"
                >
                  {rashiNum}
                </text>

                {/* Lagna Marker */}
                {isLagna && (
                  <text
                    x={h.rashi.x}
                    y={h.rashi.y + 18}
                    textAnchor="middle"
                    className="font-hindi text-[8px] fill- kumkum uppercase tracking-tighter opacity-70"
                  >
                    Lagna
                  </text>
                )}

                {/* Planets */}
                <g transform={`translate(${h.text.x}, ${h.text.y})`}>
                  {planets.map((p, pIdx) => (
                    <text
                      key={pIdx}
                      y={pIdx * 15}
                      textAnchor="middle"
                      className={`font-hindi text-[13px] font-bold ${p.includes('(R)') ? 'fill-destructive' : 'fill-primary'}`}
                    >
                      {p}
                    </text>
                  ))}
                </g>
              </g>
            );
          })}

          {/* Ganesha Center Logo (Transparent watermark) */}
          <g transform={`translate(${m}, ${m})`} className="opacity-10 pointer-events-none">
            <text textAnchor="middle" className="text-8xl fill-kumkum">🔱</text>
          </g>
        </svg>
      </div>

      {/* Birth Meta Strip */}
      <div className="flex flex-wrap justify-center gap-4 text-[11px] font-hindi text-primary/60 uppercase tracking-widest bg-white/50 py-2 px-6 rounded-full border border-primary/10">
        <span>{data.birthDetails.name}</span>
        <span className="opacity-30">|</span>
        <span>{data.birthDetails.date}</span>
        <span className="opacity-30">|</span>
        <span>{data.birthDetails.time}</span>
        <span className="opacity-30">|</span>
        <span>{data.birthDetails.place}</span>
      </div>

      {/* CTA for AI Chat */}
      <div className="w-full max-w-lg bg-white/90 backdrop-blur-md border-[2px] border-primary/20 rounded-3xl p-8 shadow-lg text-center space-y-5 relative overflow-hidden card-glow">
        <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.03] -mr-6 -mt-6">
          <span className="text-8xl font-black">ॐ</span>
        </div>

        <div className="w-16 h-16 gold-gradient rounded-3xl flex items-center justify-center mx-auto shadow-lg rotate-3 group-hover:rotate-0 transition-transform">
          <MessageCircle className="text-white w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h4 className="font-display text-2xl text-primary font-bold">Seek Deep Guidance</h4>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
            Have questions about your Career, Relationships, or Doshas? Consult our AI Jyotishi for a personalized interpretation of your chart.
          </p>
        </div>

        <button
          onClick={onConsultPandit}
          className="gold-gradient text-white px-10 py-4 rounded-2xl text-sm font-display tracking-[0.15em] uppercase font-bold hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center mx-auto gap-3 btn-glow"
        >
          <Sparkles className="w-5 h-5" />
          Chat with AI Pandit
        </button>
      </div>
    </div>
  );
}
