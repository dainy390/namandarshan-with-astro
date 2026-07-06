import { useState, useEffect } from "react";
import { KundaliData } from "@/lib/kundali/kundali";
import { generateSummary } from "@/lib/kundali/interpretations";
import { getDeepSpiritualReading } from "@/lib/kundali/ai";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles } from "lucide-react";

interface KundaliSummaryProps {
  data: KundaliData;
}

export default function KundaliSummary({ data }: KundaliSummaryProps) {
  const summary = generateSummary(data);
  const [aiReading, setAiReading] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-trigger reading on mount for seamless "Same Page" experience
  useEffect(() => {
    if (data && !aiReading && !isLoading) {
      handleGetAIReading();
    }
  }, [data]);

  // Reset reading when birth details change (e.g. new Kundali generated)
  useEffect(() => {
    setAiReading(null);
  }, [data.birthDetails.name, data.birthDetails.date, data.birthDetails.time, data.birthDetails.place]);

  const handleGetAIReading = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const reading = await getDeepSpiritualReading(data);
      setAiReading(reading);
    } catch {
      setError("Could not connect to the divine source. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Parse the AI reading into sections for nicer rendering
  const renderAIReading = (text: string) => {
    return (
      <div
        className="prose prose-sm max-w-none text-secondary-foreground leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: text
            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary font-semibold">$1</strong>')
            .replace(/\*(.*?)\*/g, "<em>$1</em>")
            .replace(/#{1,3} (.*)/g, '<p class="text-primary font-display font-semibold mt-4 mb-2">$1</p>')
            .replace(/\n\n/g, "</p><p class='mb-2'>")
            .replace(/\n/g, "<br/>")
            .replace(/^- /gm, "• ")
        }}
      />
    );
  };

  return (
    <div className="space-y-8">
      <h3 className="font-display text-xl tracking-wide text-primary border-b-2 border-primary/20 pb-2">
        Kundali Summary <span className="font-devanagari text-base normal-case">· कुण्डली विवरण</span>
      </h3>

      {/* AI Deep Reading Section */}
      <section className="space-y-4 p-6 rounded-2xl bg-white border border-primary/20 card-glow relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] -mr-8 -mt-8">
          <span className="text-9xl font-black">ॐ</span>
        </div>
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shadow-sm">
            <span className="text-lg text-white">🔱</span>
          </div>
          <div>
            <h4 className="font-display text-lg tracking-wide text-primary">
              Divine AI Reading
            </h4>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Vedic Jyotishi · Gemini AI
            </p>
          </div>
          <div className="ml-auto">
            <Sparkles className="w-5 h-5 text-accent/60" />
          </div>
        </div>

        {!aiReading && !isLoading && (
          <div className="text-center py-4">
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              🕉 Receive a spiritually deep, personalized interpretation of your Kundali from our AI Jyotishi — covering your Dharma, relationships, career karma, and Vedic remedies.
            </p>
            <Button
              onClick={handleGetAIReading}
              className="gold-gradient text-primary-foreground font-display tracking-wider uppercase text-xs hover:opacity-90 px-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Reveal My Divine Reading
            </Button>
            {error && (
              <p className="text-red-400 text-xs mt-3">{error}</p>
            )}
          </div>
        )}

        {isLoading && (
          <div className="flex flex-col items-center py-8 gap-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-3xl animate-pulse">ॐ</span>
              </div>
              <Loader2 className="absolute -bottom-1 -right-1 w-6 h-6 animate-spin text-primary" />
            </div>
            <div className="text-center">
              <p className="text-sm text-primary font-display">Consulting the stars…</p>
              <p className="text-xs text-muted-foreground mt-1">The Grahas are being observed</p>
            </div>
          </div>
        )}

        {aiReading && (
          <div className="space-y-3">
            <div className="border-t border-primary/20 pt-4">
              {renderAIReading(aiReading)}
            </div>
            <p className="text-xs text-muted-foreground italic mt-4 pt-3 border-t border-border">
              🙏 Generated by Jyotishi Pandit AI — for guidance only. Consult a learned Jyotishi for life decisions.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => { setAiReading(null); setError(null); }}
              className="text-xs border-primary/30 text-muted-foreground hover:text-primary"
            >
              Regenerate Reading
            </Button>
          </div>
        )}
      </section>

      {/* Personality Overview */}
      <section className="space-y-3">
        <h4 className="font-display text-lg tracking-wide text-foreground border-b border-border/50 pb-2 flex items-center gap-2">
          <span className="text-primary/60 text-sm">❋</span> Personality Overview
        </h4>
        <p className="text-secondary-foreground leading-relaxed">{summary.personality}</p>
      </section>

      {/* Ascendant Analysis */}
      <section className="space-y-3">
        <h4 className="font-display text-base tracking-wide text-foreground border-b border-border pb-2">
          Ascendant (Lagna) Analysis
        </h4>
        <p className="text-secondary-foreground leading-relaxed">{summary.ascendantAnalysis}</p>
      </section>

      {/* Moon Sign */}
      <section className="space-y-3">
        <h4 className="font-display text-lg tracking-wide text-foreground border-b border-border/50 pb-2 flex items-center gap-2">
          <span className="text-primary/60 text-sm">❋</span> Moon Sign (Rashi) Analysis
        </h4>
        <p className="text-secondary-foreground leading-relaxed">{summary.moonSignAnalysis}</p>
      </section>

      {/* Sun Sign */}
      <section className="space-y-3">
        <h4 className="font-display text-base tracking-wide text-foreground border-b border-border pb-2">
          Sun Sign Analysis
        </h4>
        <p className="text-secondary-foreground leading-relaxed">{summary.sunSignAnalysis}</p>
      </section>

      {/* Nakshatra */}
      <section className="space-y-3">
        <h4 className="font-display text-lg tracking-wide text-foreground border-b border-border/50 pb-2 flex items-center gap-2">
          <span className="text-primary/60 text-sm">❋</span> Birth Nakshatra
        </h4>
        <p className="text-secondary-foreground leading-relaxed">{summary.nakshatraAnalysis}</p>
      </section>

      {/* Key Planetary Influences */}
      <section className="space-y-3">
        <h4 className="font-display text-base tracking-wide text-foreground border-b border-border pb-2">
          Key Planetary Influences
        </h4>
        <div className="space-y-3">
          {summary.keyPlanetaryInfluences.map((influence, i) => (
            <div key={i} className="pl-4 border-l-2 border-primary/30">
              <p className="text-secondary-foreground leading-relaxed text-sm"
                dangerouslySetInnerHTML={{
                  __html: influence
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary">$1</strong>')
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* General Prediction */}
      <section className="space-y-3 p-5 rounded-lg bg-secondary/30 border border-border card-glow">
        <h4 className="font-display text-base tracking-wide text-primary">
          Overall Reading
        </h4>
        <p className="text-secondary-foreground leading-relaxed">{summary.generalPrediction}</p>
        <p className="text-muted-foreground text-xs italic mt-3">
          Note: This is an approximate Kundali generated using simplified astronomical calculations.
          For precise readings, please consult a qualified Vedic astrologer (Jyotishi) with accurate ephemeris data.
        </p>
      </section>
    </div>
  );
}
