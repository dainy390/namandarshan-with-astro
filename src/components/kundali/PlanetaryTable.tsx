import { KundaliData, PLANET_HINDI, PLANET_SYMBOLS, RASHI_HINDI } from "@/lib/kundali/kundali";

interface PlanetaryTableProps {
  data: KundaliData;
}

export default function PlanetaryTable({ data }: PlanetaryTableProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-display text-xl tracking-wide text-primary border-b-2 border-primary/20 pb-2 mb-2">
        Planetary Positions <span className="font-devanagari text-base normal-case">· ग्रह स्थिति</span>
      </h3>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-secondary/50 border-b border-border">
              <th className="px-4 py-3 text-left font-display text-xs tracking-wider uppercase text-muted-foreground">Planet</th>
              <th className="px-4 py-3 text-left font-display text-xs tracking-wider uppercase text-muted-foreground">Sign</th>
              <th className="px-4 py-3 text-left font-display text-xs tracking-wider uppercase text-muted-foreground">Degree</th>
              <th className="px-4 py-3 text-left font-display text-xs tracking-wider uppercase text-muted-foreground">Nakshatra</th>
              <th className="px-4 py-3 text-left font-display text-xs tracking-wider uppercase text-muted-foreground">Pada</th>
              <th className="px-4 py-3 text-left font-display text-xs tracking-wider uppercase text-muted-foreground">Nak Lord</th>
              <th className="px-4 py-3 text-center font-display text-xs tracking-wider uppercase text-muted-foreground">R</th>
            </tr>
          </thead>
          <tbody>
            {data.planets.map((p, i) => (
              <tr key={p.planet} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-card" : "bg-secondary/20"}`}>
                <td className="px-4 py-2.5">
                  <span className="text-primary font-semibold">{PLANET_SYMBOLS[p.planet]}</span>
                  <span className="ml-2 text-foreground">{p.planet}</span>
                  <span className="ml-1 text-muted-foreground text-xs">({PLANET_HINDI[p.planet]})</span>
                </td>
                <td className="px-4 py-2.5">
                  <span className="text-foreground">{p.rashiName}</span>
                  <span className="ml-1 text-muted-foreground text-xs">({RASHI_HINDI[p.rashi]})</span>
                </td>
                <td className="px-4 py-2.5 text-foreground font-mono text-xs">
                  {p.degree.toFixed(2)}°
                </td>
                <td className="px-4 py-2.5 text-foreground">{p.nakshatra}</td>
                <td className="px-4 py-2.5 text-foreground">{p.nakshatraPada}</td>
                <td className="px-4 py-2.5 text-muted-foreground">{p.nakshatraLord}</td>
                <td className="px-4 py-2.5 text-center">
                  {p.isRetrograde && <span className="text-accent font-bold">R</span>}
                </td>
              </tr>
            ))}
            {/* Ascendant row */}
            <tr className="border-b border-border/50 bg-primary/5">
              <td className="px-4 py-2.5">
                <span className="text-primary font-semibold">Asc</span>
                <span className="ml-2 text-foreground">Ascendant</span>
                <span className="ml-1 text-muted-foreground text-xs">(लग्न)</span>
              </td>
              <td className="px-4 py-2.5 text-foreground">
                {data.planets[0] && RASHI_HINDI[data.ascendant] ? (
                  <>
                    {["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"][data.ascendant]}
                    <span className="ml-1 text-muted-foreground text-xs">({RASHI_HINDI[data.ascendant]})</span>
                  </>
                ) : null}
              </td>
              <td className="px-4 py-2.5 text-foreground font-mono text-xs">{data.ascendantDegree.toFixed(2)}°</td>
              <td className="px-4 py-2.5 text-foreground">{data.ascendantNakshatra}</td>
              <td className="px-4 py-2.5" colSpan={3}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
