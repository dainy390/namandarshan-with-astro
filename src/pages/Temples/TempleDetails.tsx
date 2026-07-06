import { useState, useEffect } from "react";

// ── Global booking kill-switch ──────────────────────────────────────────────
// Set to false to re-enable booking forms across all temple pages.
const BOOKING_GLOBALLY_DISABLED = true;
// ────────────────────────────────────────────────────────────────────────────
import { useParams, Link, useNavigate, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { newsData } from "@/data/newsData";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar, Ticket, ArrowRight, Home, Info, Heart, Share2, Star, ChevronRight, Flower, ShoppingBag } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BookingModal from "@/components/booking/BookingModal";
import RequestServiceModal from "@/components/booking/RequestServiceModal";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { getApiUrl } from "@/utils/api";
import { ShareGuide } from "@/components/common/ShareGuide";

const getNormalizedRoute = (url?: string) => {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    try {
      const parsed = new URL(url);
      return parsed.pathname + parsed.search + parsed.hash;
    } catch (e) {
      console.error("Failed to parse cta url:", e);
      const match = url.match(/^https?:\/\/[^\/]+(\/.*)/);
      if (match && match[1]) {
        return match[1];
      }
    }
  }
  return url;
};

const TEMPLE_TO_DARSHAN_SLUG_MAP: Record<string, string> = {
  "badrinath-temple": "badrinath-temple-darshan-vipdarshan",
  "mahakaleshwar-jyotirlinga-temple": "mahakaleshwar-jyotirlinga-ujjain-vipdarshan",
  "dwarkadhish-temple": "dwarkadhish-darshan-vipdarshan",
  "swaminarayan-akshardham-mandir-temple": "swaminarayan-akshardham-vipdarshan",
  "shree-somnath-jyotirling-temple": "somnath-jyotirlinga-darshan-vipdarshan",
  "jagannath-temple": "jagannath-temple-darshan-vipdarshan",
  "kalighat-kali-temple": "kalighat-kali-temple-darshan-vipdarshan",
  "kedarnath-temple": "kedarnath-dham-vipdarshan",
  "banke-bihari-temple": "banke-bihari-temple-vrindavan-vipdarshan",
  "vaishno-devi-temple": "mata-vaishno-devi-vipdarshan",
  "the-kamakhya-temple": "kamakhya-temple-vipdarshan",
  "sai-baba-mandir-temple": "shirdi-sai-baba-temple-vipdarshan",
  "meenakshi-temple": "meenakshi-amman-darshan-vipdarshan",
  "siddhivinayak-temple": "shri-siddhivinayak-ganapati-temple-vipdarshan",
  "omkareshwar-temple": "omkareshwar-jyotirlinga-darshan-vipdarshan",
  "sabarimala-temple": "sabarimala-sastha-temple-pathanamthitta-vipdarshan",
  "trinetra-ganesh-temple": "trinetra-ganesha-temple-vipdarshan",
  "iskcon-temple": "iskcon-temple-bangalore-vipdarshan",
  "bhimashankar-jyotirlinga-temple": "bhimashankar-temple-vipdarshan",
  "dakshineswar-kali-temple": "dakshineswar-kali-temple-darshan-vipdarshan",
  "sri-lakshmi-narasimha-swamy-temple": "sri-lakshmi-narasimha-swamy-devasthanam-vipdarshan",
  "salasar-dham-temple": "salasar-dham-mandir-vipdarshan",
  "besakih-great-temple-the-mother-temple-of-bali-temple": "besakih-great-temple-vipdarshan",
  "brihadeswara-temple-the-great-living-chola-marvel-temple": "brihadeswara-temple-vipdarshan",
  "khatu-shyam-ji-temple-rajasthan-complete-guide-for-devotees-temple": "khatu-shyam-ji-temple-vipdarshan",
  "sri-peddamma-thalli-temple": "divine-darshan-at-sri-peddamma-thalli-temple-vipdarshan",
  "chilkur-balaji-temple-visa-balaji-temple": "chilkur-balaji-temple-visa-balaji-vipdarshan",
  "nathdwara-shrinathji-temple": "divine-darshan-at-nathdwara-shrinathji-temple-vipdarshan",
  "shree-krishna-janmabhoomi-temple": "divine-darshan-at-shree-krishna-janmabhoomi-vipdarshan",
  "trimbakeshwar-jyotirlinga-temple": "trimbakeshwar-jyotirlinga-vipdarshan",
  "ram-janmabhoomi-temple": "ram-mandir-darshan-vipdarshan",
  "the-golden-temple": "golden-temple-amritsar-vipdarshan",
  "sri-sita-ramachandraswamy-temple": "sri-sita-ramachandraswamy-temple-vipdarshan",
  "sita-ramachandraswamy-temple-telangana-temple": "sri-sita-ramachandraswamy-temple-vipdarshan",
  "vontimitta-ram-mandir-a-sacred-abode-of-lord-rama-in-andhra-pradesh-temple": "vontimitta-kodandarama-swamy-temple-vipdarshan",
  "vontimitta-ram-mandir": "vontimitta-kodandarama-swamy-temple-vipdarshan",
  "sri-male-mahadeshwara-swamy-temple": "male-mahadeshwara-hills-vipdarshan",
  "male-mahadeshwara-hills-temple": "male-mahadeshwara-hills-vipdarshan",
  "naina-devi-temple": "shri-naina-devi-temple-vipdarshan",
  "sri-venkateswara-swami-temple": "tirupati-balaji-temple-vipdarshan"
};

const TempleDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [temple, setTemple] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [hasDarshanPage, setHasDarshanPage] = useState(true);

  // URL Tracking Logic
  const [searchParams, setSearchParams] = useSearchParams();
  const formId = `booking-temple-${slug}`;
  const [isBookingOpen, setIsBookingOpen] = useState(searchParams.get("form") === formId);

  useEffect(() => {
    setIsBookingOpen(searchParams.get("form") === formId);
  }, [searchParams, formId]);

  const handleOpen = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.set("form", formId);
      return newParams;
    }, { replace: false });
  };

  const handleClose = () => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.delete("form");
      return newParams;
    }, { replace: true });
  };

  // Request Modal State (Derived from URL)
  const requestFormId = searchParams.get("form");
  const isRequestModalOpen = !!requestFormId && (requestFormId.includes("book-chadhava") || requestFormId.includes("book-prasadam"));
  const requestServiceType = requestFormId?.includes("chadhava") ? "Chadhava" : "Prasadam";

  const handleRequestOpen = (type: "Chadhava" | "Prasadam") => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.set("form", `book-${type.toLowerCase()}-${slug}`);
      return newParams;
    }, { replace: true });
  };

  const handleRequestClose = () => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.delete("form");
      return newParams;
    }, { replace: true });
  };

  const handleChadhavaClick = (e: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!temple) return;
    handleRequestOpen("Chadhava");
  };

  const handlePrasadamClick = (e: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!temple) return;
    handleRequestOpen("Prasadam");
  };

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    fetch(getApiUrl(`/api/temples/${slug}`))
      .then(res => {
        if (!res.ok) {
          // Temple is hidden or doesn't exist — treat as not found
          setLoading(false);
          return null;
        }
        return res.json();
      })
      .then(async data => {
        if (!data) return; // 404 case handled above
        // Guard against error objects like { message: 'Temple not found' }
        if (data.message && !data.name) {
          setLoading(false);
          return;
        }
        setTemple(data);

        // Check if darshan page exists
        const mappedSlug = data.slug ? (TEMPLE_TO_DARSHAN_SLUG_MAP[data.slug] || data.slug) : slug;
        const ctaUrl = data.darshan_cta_url ? getNormalizedRoute(data.darshan_cta_url) : "";
        const baseRoute = ctaUrl
          ? ctaUrl
          : `/darshan/${mappedSlug}`;

        const match = baseRoute.match(/^\/darshan\/([^?#]+)/);
        const darshanSlug = match ? match[1] : null;

        if (darshanSlug) {
          try {
            const darshanRes = await fetch(getApiUrl(`/api/darshan/${darshanSlug}`));
            if (darshanRes.ok) {
              const darshanData = await darshanRes.json();
              if (darshanData && !darshanData.message && darshanData.name) {
                setHasDarshanPage(true);
              } else {
                setHasDarshanPage(false);
              }
            } else {
              setHasDarshanPage(false);
            }
          } catch (err) {
            console.error("Failed to verify darshan page:", err);
            setHasDarshanPage(false);
          }
        } else {
          setHasDarshanPage(true);
        }

        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch temple:", err);
        setLoading(false);
      });
  }, [slug]);

  const mappedSlug = temple?.slug ? (TEMPLE_TO_DARSHAN_SLUG_MAP[temple.slug] || temple.slug) : slug;
  const ctaUrl = temple?.darshan_cta_url ? getNormalizedRoute(temple.darshan_cta_url) : "";
  const baseRoute = ctaUrl
    ? ctaUrl
    : `/darshan/${mappedSlug}`;

  const [routeWithoutHash, hashPart] = baseRoute.split('#');
  const targetSection = hashPart || 'Timings';
  const cleanBookingRoute = routeWithoutHash.includes('?') 
    ? `${routeWithoutHash}&tab=${targetSection}`
    : `${routeWithoutHash}?tab=${targetSection}`;

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!temple) {
    // Redirect to temples listing — handles both hidden and genuinely missing temples
    navigate('/temples', { replace: true });
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title={temple.seoTitle || `${temple.name} | Namandarshan`}
        description={
          temple.seoDescription ||
          `Complete guide to ${temple.name}, ${temple.location}. Timings, History, and Online Darshan Booking.`
        }
        keywords={
          temple.seoKeywords || [
            temple.name,
            "Temple Darshan",
            "Online Booking",
            temple.location,
          ]
        }
        image={temple.image}
        structuredData={temple.structuredData}
      />
      <Header />
      {!BOOKING_GLOBALLY_DISABLED && temple.bookingEnabled !== false && (
        <>
          <BookingModal
            isOpen={isBookingOpen}
            onClose={handleClose}
            type="temple"
            serviceName={temple ? temple.name : ""}
          />
          <RequestServiceModal
            isOpen={isRequestModalOpen}
            onClose={handleRequestClose}
            templeName={temple ? temple.name : ""}
            serviceType={requestServiceType}
          />
        </>
      )}

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full mt-40 md:mt-44 lg:mt-48">
        <img
          src={temple.image}
          alt={temple.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white p-4 animate-fade-up">
            <div className="flex items-center justify-center gap-2 mb-4 text-sm md:text-base bg-white/20 backdrop-blur-sm w-fit mx-auto px-4 py-1 rounded-full border border-white/30">
              <MapPin className="w-4 h-4" />
              {temple.location}
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
              {temple.name}
            </h1>
            <p className="font-display text-xl md:text-2xl italic opacity-90">
              Experience the Divine
            </p>
            {/* Booking CTAs — only shown when bookingEnabled */}
            {!BOOKING_GLOBALLY_DISABLED && temple.bookingEnabled !== false && (
              <div
                className="flex flex-col items-center gap-6 mt-8 animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                {/* Primary CTA - Request Darshan Assistance */}
                <Button
                  onClick={handleOpen}
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-extrabold px-12 py-8 text-xl rounded-full shadow-[0_0_40px_-5px_var(--tw-shadow-color)] shadow-orange-500/50 transition-all hover:scale-105 flex items-center gap-3 border-2 border-white/30 animate-pulse-slow w-full md:w-auto min-w-[300px] justify-center"
                >
                  <Ticket className="w-7 h-7" />
                  Request Darshan Assistance
                </Button>

                {/* Secondary Services Divider/Text */}
                <div className="flex items-center gap-4 w-full max-w-md opacity-80">
                  <div className="h-px bg-white/30 flex-1"></div>
                  <span className="text-sm font-medium tracking-widest uppercase text-white/90">
                    Other Divine Services
                  </span>
                  <div className="h-px bg-white/30 flex-1"></div>
                </div>

                {/* Secondary CTAs */}
                <div className="flex flex-wrap justify-center gap-4 w-full">
                  <Button
                    onClick={handleChadhavaClick}
                    className="bg-black/40 hover:bg-orange-600/90 backdrop-blur-md text-white font-semibold px-6 py-6 rounded-2xl shadow-lg border border-white/20 hover:border-orange-400/50 transition-all hover:-translate-y-1 flex items-center gap-2 group flex-1 md:flex-none min-w-[200px] justify-center"
                  >
                    <Flower className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors" />
                    Book Chadhava
                  </Button>
                  <Button
                    onClick={handlePrasadamClick}
                    className="bg-black/40 hover:bg-amber-500/90 backdrop-blur-md text-white font-semibold px-6 py-6 rounded-2xl shadow-lg border border-white/20 hover:border-amber-300/50 transition-all hover:-translate-y-1 flex items-center gap-2 group flex-1 md:flex-none min-w-[200px] justify-center"
                  >
                    <ShoppingBag className="w-5 h-5 text-amber-400 group-hover:text-white transition-colors" />
                    Get Prasadam
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>


      {/* Breadcrumb and Share */}
      <div className="bg-muted py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link
                to="/temples"
                className="hover:text-primary transition-colors"
              >
                Temples
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-medium">
                {temple.name}
              </span>
            </div>
            <ShareGuide
              pageTitle={temple.name}
              description={
                temple.seoDescription || temple.description?.slice(0, 160)
              }
            />
          </div>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-3xl font-bold text-primary mb-6">
                About {temple.name}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                {temple.description}
              </p>

              {/* SEO "Smart Play" Strategy Section for VIP Darshan Search Intent */}
              <div className="mt-8 bg-amber-50/60 p-6 rounded-2xl border border-amber-100 not-prose">
                <h3 className="font-display text-2xl font-bold text-amber-900 mb-4">
                  Looking for VIP Darshan at {temple.name}?
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Many devotees search for VIP Darshan or Special Darshan at {temple.name}. Please note that queue management is strictly handled by temple authorities, and skip-the-line access is not permitted. Instead, we elevate your visit with our Guided Darshan Assistance, ensuring you have a Pandit Ji by your side to navigate the complex and explain its rich history.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Understanding the difference between a VIP Darshan and our Guided Assistance:</strong> While a VIP Darshan (which we do not offer) focuses solely on bypassing the crowd, our Guided Darshan Assistance focuses on spiritual enrichment. You will proceed through standard queues, but with the dedicated support of a local Pandit Ji who knows the temple's daily rituals intimately.
                </p>
              </div>

              {temple.historyArchitectureDesc && (
                <div className="mt-12 bg-orange-50/50 p-6 rounded-2xl border border-orange-100">
                  <h2 className="font-display text-3xl font-bold text-center mb-8 text-orange-600 italic">
                    The Story of {temple.name} and Its Notable Features
                  </h2>
                  <div className="clearfix">
                    {temple.historyArchitectureImage &&
                      temple.historyArchitectureImage.trim() !== "" && (
                        <div className="md:float-right md:w-1/3 w-full md:ml-8 mb-6">
                          <img
                            src={temple.historyArchitectureImage}
                            alt="Historical Architecture"
                            className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                    <div className="text-lg leading-relaxed text-muted-foreground">
                      {temple.historyArchitectureDesc}
                    </div>
                  </div>
                </div>
              )}

              {temple.religiousSignificanceDesc && (
                <div className="mt-12 bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                  <h2 className="font-display text-3xl font-bold text-center mb-8 text-orange-600 italic">
                    What Makes {temple.name} Sacred for Devotees
                  </h2>
                  <div className="clearfix">
                    {temple.religiousSignificanceImage &&
                      temple.religiousSignificanceImage.trim() !== "" && (
                        <div className="md:float-right md:w-1/3 w-full md:ml-8 mb-6">
                          <img
                            src={temple.religiousSignificanceImage}
                            alt={`What Makes ${temple.name} Sacred for Devotees`}
                            className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                    <div className="text-lg leading-relaxed text-muted-foreground">
                      {temple.religiousSignificanceDesc}
                    </div>
                  </div>
                </div>
              )}

              {temple.festivalCelebrationsDesc && (
                <div className="mt-12 bg-green-50/50 p-6 rounded-2xl border border-green-100">
                  <h2 className="font-display text-3xl font-bold text-center mb-8 text-orange-600 italic">
                    Festivals Celebrated at {temple.name}
                  </h2>
                  <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
                    <div className="flex-1 text-lg leading-relaxed text-muted-foreground space-y-6">
                      {temple.festivalCelebrationsDesc
                        .split("\n")
                        .map((line: string, index: number) => {
                          const parts = line.split(":");
                          if (parts.length > 1) {
                            const festivalName = parts[0].trim();
                            const festivalDesc = parts.slice(1).join(":").trim();
                            return (
                              <div key={index} className="mb-4">
                                <h3 className="text-xl font-bold text-black mb-2">
                                  {festivalName} Celebrations at the Temple
                                </h3>
                                <p>{festivalDesc}</p>
                              </div>
                            );
                          }
                          return <p key={index} className="mb-2">{line}</p>;
                        })}
                    </div>
                    {temple.festivalCelebrationsImage && (
                      <div className="md:w-1/3 w-full shrink-0">
                        <img
                          src={temple.festivalCelebrationsImage}
                          alt={`Festivals Celebrated at ${temple.name}`}
                          className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {temple.surroundingsDesc && (
                <div className="mt-12 mb-12">
                  <h2 className="font-display text-3xl font-bold text-left mb-8 text-orange-600 italic">
                    Sacred Places to Visit Near {temple.name}
                  </h2>
                  <div className="space-y-6">
                    {temple.surroundingsDesc
                      .split("\n")
                      .map((line: string, index: number) => {
                        const parts = line.split(":");
                        if (parts.length > 1) {
                          const title = parts[0];
                          const content = parts.slice(1).join(":");
                          return (
                            <p
                              key={index}
                              className="text-lg text-muted-foreground"
                            >
                              <span className="font-bold text-gray-900">
                                {title} :
                              </span>
                              {content}
                            </p>
                          );
                        }
                        return (
                          <p
                            key={index}
                            className="text-lg text-muted-foreground"
                          >
                            {line}
                          </p>
                        );
                      })}
                  </div>
                </div>
              )}

              {temple.faqs && temple.faqs.length > 0 && (
                <div className="mt-12 mb-12">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-1.5 h-10 bg-orange-500 rounded-full"></div>
                    <h2 className="font-display text-3xl font-bold uppercase text-gray-900">
                      Common Questions About Visiting {temple.name}
                    </h2>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {temple.faqs.map((faq: any, index: number) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border-b-0 mb-4 rounded-lg bg-blue-50/50 px-4"
                      >
                        <AccordionTrigger className="text-left font-semibold text-blue-600 hover:text-blue-700 hover:no-underline">
                          <span>
                            {index + 1}. {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent
                          forceMount={true}
                          className="text-muted-foreground text-base leading-relaxed pb-4"
                        >
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-card border rounded-xl p-6 shadow-sm sticky top-36">
              <div className="flex justify-between items-start gap-4 mb-6">
                <h3 className="font-display text-2xl font-bold">
                  Visitor Information
                </h3>
              </div>

              {temple.liveDarshanUrl && (
                <a
                  href={temple.liveDarshanUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mb-6"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full text-lg font-bold shadow-lg hover:shadow-xl transition-all border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600 animate-pulse"
                  >
                    OFFICIAL LIVE DARSHAN PORTAL - Watch Live
                  </Button>
                </a>
              )}

              <div className="space-y-4 mb-8">
                {temple.entryFee && (
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-orange-50 dark:bg-orange-950/20">
                    <div className="w-5 h-5 mt-1 text-primary font-bold text-center">
                      ₹
                    </div>
                    <div>
                      <p className="font-semibold">Entry Fee:</p>
                      <p className="text-sm text-muted-foreground">
                        {temple.entryFee}
                      </p>
                    </div>
                  </div>
                )}

                {((temple.darshanSchedule &&
                  temple.darshanSchedule.length > 0) ||
                  temple.darshanTimings) && (
                    <div className="flex items-start gap-4 p-3 rounded-lg bg-orange-50 dark:bg-orange-950/20">
                      <Clock className="w-5 h-5 text-primary mt-1" />
                      <div className="w-full">
                        <p className="font-semibold mb-1">Darshan Timings:</p>

                        {/* Structured Schedule */}
                        {temple.darshanSchedule &&
                          temple.darshanSchedule.length > 0 ? (
                          <div className="space-y-3 mt-1">
                            {temple.darshanSchedule.map(
                              (slot: any, index: number) => (
                                <div key={index} className="text-sm">
                                  <span className="font-medium text-gray-900 block">
                                    {slot.label}
                                  </span>
                                  <span className="text-muted-foreground">
                                    {slot.time}
                                  </span>
                                </div>
                              ),
                            )}
                          </div>
                        ) : (
                          /* Legacy Text Schedule */
                          <div className="text-sm text-muted-foreground space-y-1">
                            {temple.darshanTimings &&
                              temple.darshanTimings
                                .split("\n")
                                .map(
                                  (line: string, index: number) =>
                                    line.trim() && <p key={index}>{line}</p>,
                                )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                <div className="mt-4">
                  {hasDarshanPage ? (
                    <Link to={cleanBookingRoute} className="block w-full">
                      <Button
                        size="lg"
                        className="w-full bg-orange-600 text-white rounded-3xl py-4 font-semibold shadow-xl hover:bg-orange-700 transition-all"
                      >
                        View Detailed Darshan Timing
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      size="lg"
                      disabled
                      className="w-full bg-gray-300 text-gray-500 rounded-3xl py-4 font-semibold cursor-not-allowed border border-gray-200"
                    >
                      View Detailed Darshan Timing
                    </Button>
                  )}
                </div>

                {temple.address && (
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-orange-50 dark:bg-orange-950/20">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Address:</p>
                      <p className="text-sm text-muted-foreground">
                        {temple.address}
                      </p>
                    </div>
                  </div>
                )}

                {temple.notableEvents && (
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-orange-50 dark:bg-orange-950/20">
                    <Calendar className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">
                        Notable Events And Incidents:
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {temple.notableEvents}
                      </p>
                    </div>
                  </div>
                )}

                {temple.connectivity && (
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-orange-50 dark:bg-orange-950/20">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div className="w-full">
                      <h3 className="font-semibold mb-1">How to reach the temple</h3>
                      <div className="text-sm text-muted-foreground space-y-2">
                        {temple.connectivity
                          .split("\n")
                          .map(
                            (line: string, index: number) =>
                              line.trim() && <p key={index}>{line}</p>,
                          )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {!BOOKING_GLOBALLY_DISABLED && temple.bookingEnabled !== false && (
                <>
                  <Button
                    size="lg"
                    className="w-full text-lg font-bold shadow-lg hover:shadow-xl transition-all"
                    onClick={handleOpen}
                  >
                    Request Darshan Assistance
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    100% Secure Booking • Instant Confirmation
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TempleDetails;
