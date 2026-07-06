import { useNavigate } from "react-router-dom";
import { getApiUrl } from "@/utils/api";
import BirthDetailsForm from "@/components/kundali/BirthDetailsForm";
import { generateKundali, BirthDetails } from "@/lib/kundali/kundali";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { ShareGuide } from "@/components/common/ShareGuide";

const features = [
  { sym: "🪐", title: "Planetary Positions", desc: "Full Graha analysis with Nakshatra & Pada" },
  { sym: "📜", title: "Vimshottari Dasha", desc: "Your life timeline mapped to planetary periods" },
  { sym: "💎", title: "Vedic Remedies", desc: "Personalised Gemstone & Mantra remedies" },
  { sym: "🤖", title: "AI Pandit Chat", desc: "Ask your chart anything — powered by Gemini and Groq" },
];

const AiKundali = () => {
  const navigate = useNavigate();

  const handleGenerate = async (details: BirthDetails) => {
    // 1. Generate Kundali data first
    const data = generateKundali(details);

    // 2. Save lead info and trigger email via backend
    try {
      fetch(getApiUrl("/api/crm/bookings/ai-kundali"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          details: details,
          report: data
        }),
      }).catch(err => console.error("Error saving Kundali lead:", err));
    } catch (e) {
      console.error("CRM save error:", e);
    }

    // 3. Navigate to results page
    navigate("/ai-kundali/report", { state: { kundaliData: data } });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free AI Kundali Generator – Vedic Birth Chart | NamanDarshan"
        description="Generate your free Vedic Janma Kundali powered by AI. Get planetary positions, Vimshottari Dasha, Yoga analysis, Dosha status and a personalised AI Jyotishi reading."
        keywords={["kundali", "janam kundali", "vedic astrology", "birth chart", "jyotish", "free kundali", "AI kundali"]}
      />

      <Header />

      {/* ─── Two-column hero + form ─── */}
      <section className="relative overflow-hidden pt-36 md:pt-48 lg:pt-52">
        {/* Subtle saffron gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/5 pointer-events-none" />
        {/* Faint ॐ watermark */}
        <div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none select-none opacity-[0.03]">
          <span className="text-[28rem] leading-none text-primary animate-spin-slow">ॐ</span>
        </div>

        <div className="relative z-10 container max-w-6xl mx-auto px-4 py-12 md:py-8">
          {/* Breadcrumbs and Share */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-primary/10 mb-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <span>/</span>
              <span className="text-primary font-medium">Ai Kundali</span>
            </nav>
            <ShareGuide />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* ── LEFT: Text content ── */}
            <div>
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-5">
                <span>🔱</span>
                AI-POWERED · FREE · INSTANT
              </div>

              {/* Sanskrit + Title */}
              <p className="font-devanagari text-primary/70 text-sm mb-2 tracking-wide">
                ॥ श्री गणेशाय नमः ॥
              </p>
              <h1 className="text-4xl md:text-5xl font-black text-foreground mb-1 leading-tight tracking-tight">
                जन्म{" "}
                <span className="text-primary">कुण्डली</span>
              </h1>
              <p className="text-lg font-semibold text-foreground/60 mb-4 tracking-wide">
                Vedic Birth Chart Generator
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                The ancient science of <em>Jyotish</em> — Light of the Vedas — reveals your cosmic
                dharma through precise positions of the nine Grahas at your moment of birth.
                Enter your details to receive a complete chart with AI-powered spiritual reading.
              </p>

              {/* Feature grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="flex gap-3 p-3 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                  >
                    <span className="text-xl shrink-0 mt-0.5">{f.sym}</span>
                    <div>
                      <p className="text-xs font-bold text-foreground">{f.title}</p>
                      <p className="text-xs text-muted-foreground leading-tight">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Panch Tattva */}
              <div className="flex items-center gap-4 flex-wrap">
                {[
                  { sym: "🔥", h: "अग्नि", e: "Fire" },
                  { sym: "🌊", h: "जल", e: "Water" },
                  { sym: "🌍", h: "पृथ्वी", e: "Earth" },
                  { sym: "💨", h: "वायु", e: "Air" },
                  { sym: "✨", h: "आकाश", e: "Ether" },
                ].map(t => (
                  <div key={t.e} className="flex flex-col items-center gap-0.5 group transition-transform hover:scale-110 duration-300">
                    <span className="text-xl filter drop-shadow-sm">{t.sym}</span>
                    <span className="font-devanagari text-xs font-black text-primary leading-none">{t.h}</span>
                    <span className="text-[9px] tracking-widest uppercase text-foreground/40 font-bold">{t.e}</span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 mt-6">
                <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                <span className="font-devanagari text-primary/50 text-xs">ॐ नमः शिवाय</span>
                <div className="h-px flex-1 bg-gradient-to-l from-primary/40 to-transparent" />
              </div>
            </div>

            {/* ── RIGHT: Birth Details Form ── */}
            <div>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 card-glow relative overflow-hidden">
                {/* Corner triangle decorations */}
                <div className="absolute top-0 left-0 w-10 h-10 opacity-10">
                  <svg viewBox="0 0 40 40" fill="hsl(var(--primary))">
                    <path d="M0 0 L40 0 L0 40 Z" />
                  </svg>
                </div>
                <div className="absolute top-0 right-0 w-10 h-10 opacity-10 rotate-90">
                  <svg viewBox="0 0 40 40" fill="hsl(var(--primary))">
                    <path d="M0 0 L40 0 L0 40 Z" />
                  </svg>
                </div>

                <div className="text-center mb-5">
                  <p className="font-devanagari text-primary/60 text-xs mb-1">॥ जन्म विवरण ॥</p>
                  <h2 className="font-display text-sm tracking-[0.25em] uppercase text-muted-foreground">
                    Enter Your Birth Details
                  </h2>
                </div>

                <BirthDetailsForm onGenerate={handleGenerate} />
              </div>

              <p className="text-center text-xs text-muted-foreground mt-3">
                🔒 No account needed · Your data stays on your device
              </p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiKundali;
