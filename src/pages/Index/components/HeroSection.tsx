import {
  Search,
  Users,
  Video,
  Star,
  MapPin,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import kedarnathImage from "@/assets/kedarnath.jpg";
import puja from "@/assets/puja image.jpg";
import chadhava from "@/assets/chadhava image.jpg";
import astrology from "@/assets/astrology.avif";
import DharamSath from "@/assets/DharamSath.png";
import { openWhatsApp } from "@/services/native";
import { Helmet } from "react-helmet-async";

import { useNavigate } from "react-router-dom";

interface HeroSlide {
  image: string;
  tagline: string | React.ReactNode;
  heading: string | React.ReactNode;
  cta: string;
  path: string;
  style?: React.CSSProperties;
  hideOverlay?: boolean;
  isExternal?: boolean;
  customButtonStyle?: React.CSSProperties;
  className?: string;
  imageClassName?: string;
  mobileImage?: string;
}

const heroSlides: HeroSlide[] = [
  // New: International Temple Darshan Banner 
  // {
  //   image: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/9bc5ace563c3889cc2fac0d9b8a2acb2c769ef8a7896b3dfa03d0bcbad30adb4_v2svcw.png",
  //   mobileImage: "/assets/international-temples-mobile.png",
  //   tagline: "",
  //   heading: "",
  //   cta: "Explore Temples",
  //   path: "/international-temples",
  //   style: { objectPosition: "center 10%" },
  // },
  // New: Prasadam Banner
  {
    image: "/assets/Home_page_banner/prasadam_banner_hq.webp",
    tagline: "Authentic Prasadam from India's sacred shrines at your doorstep",
    heading: "Divine Blessings , Delivered",
    cta: "Order Now",
    path: "/prasadam",
  },
  {
    image: DharamSath,
    tagline: "Share the gift of divine experiences with your family and friends.",
    heading: "Spread the Light of Dharma",
    cta: "Spread Sanatan",
    path: "/referral",
  },
  // New: Yatra Packages Banner
  {
    image: "/assets/Home_page_banner/yatra_banner_hq.webp",
    tagline:
      "Don't just travel pilgrimage. Walk the sacred paths that millions have walked before you",
    heading: "Answer the Divine Call",
    cta: "Start your Journey",
    path: "/yatra",
  },
  // New: Temples Banner
  {
    image: "/assets/Home_page_banner/temples_banner_hq.webp",
    tagline:
      "Explore the rich history, sacred legends, and architectural marvels of India’s timeless temples.",
    heading: "Unveil the Stories of Divine",
    cta: "Explore Temples",
    path: "/temples",
  },
  // Modified: Soulful Escapes (Replaces old Darshan/Travel slot)
  {
    image: kedarnathImage, // Using imported Kedarnath image for Travel
    tagline:
      "We handle the logistics; you focus on the devotion. Seamless travel packages for the modern seeker.",
    heading: "Soulful Escapes",
    cta: "Plan Your Trip",
    path: "/yatra",
  },
  // Modified: Unlock Your Destiny (Replaces old Astro slot)
  {
    image: astrology,
    tagline:
      "The stars have a plan for you. Illuminate your life path with precise ancient Vedic wisdom.",
    heading: "Unlock Your Destiny",
    cta: "Reveal Your Path",
    path: "/astro-naman",
  },
  // Modified: Invite Blessings (Replaces old Puja slot)
  {
    image: puja,
    tagline:
      "Bridge the gap between you and the divine. Authentic rituals for your family's prosperity.",
    heading: "Invite Blessings",
    cta: "Schedule a Puja",
    path: "/puja",
  },
  // Existing: Chadhava
  {
    image: chadhava,
    tagline: "Support Temple Development",
    heading: "Make a Donation",
    cta: "Book Chadhava",
    path: "/puja",
  },
];

const useCountUp = (
  end: number,
  duration: number = 2000,
  suffix: string = "",
) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      {
        threshold: 0.3,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [hasStarted]);
  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);
  return {
    count,
    ref,
    suffix,
  };
};

const bookingNotifications = [
  {
    name: "Mayank",
    service: "Darshan",
    temple: "Kedarnath",
  },
  {
    name: "Priya",
    service: "Puja",
    temple: "Vaishno Devi",
  },

  {
    name: "Anita",
    service: "Live Darshan",
    temple: "Tirupati",
  },
  {
    name: "Vikram",
    service: "Special Aarti",
    temple: "Kashi Vishwanath",
  },
  {
    name: "Sneha",
    service: "Request Darshan Assistance",
    temple: "Badrinath",
  },
  {
    name: "Amit",
    service: "Puja Booking",
    temple: "Somnath",
  },
  {
    name: "Kavita",
    service: "Darshan",
    temple: "Dwarka",
  },
];
const HeroSection = () => {
  const navigate = useNavigate();
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const [renderedSlides, setRenderedSlides] = useState<Set<number>>(
    new Set([0]),
  );

  // Ensure current and next slide are always rendered
  useEffect(() => {
    setRenderedSlides((prev) => {
      const next = new Set(prev);
      next.add(currentSlide);
      next.add((currentSlide + 1) % heroSlides.length);
      return next;
    });
  }, [currentSlide]);

  // Background image rotation
  // Background image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const changeSlide = (newIndex: number) => {
    setTextVisible(false);
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setTextVisible(true);
    }, 500);
  };

  const handleNext = () => {
    const next = (currentSlide + 1) % heroSlides.length;
    changeSlide(next);
  };

  const handlePrev = () => {
    const prev = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    changeSlide(prev);
  };

  // Notification rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentNotification(
          (prev) => (prev + 1) % bookingNotifications.length,
        );
        setIsVisible(true);
      }, 500);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: Users,
      value: "2,45,000+",
      numValue: 245000,
      suffix: "+",
      label: "DARSHANS",
    },
    {
      icon: Video,
      value: "538",
      numValue: 538,
      suffix: "",
      label: "WATCHING LIVE",
    },
    {
      icon: Star,
      value: "5,12,000+",
      numValue: 512000,
      suffix: "+",
      label: "DEVOTEES",
    },
    {
      icon: MapPin,
      value: "1,85,000+",
      numValue: 185000,
      suffix: "+",
      label: "PUJA DONE",
    },
  ];

  const isInternational =
    heroSlides[currentSlide].path === "/international-temples";

  return (
    <section className="relative flex flex-col items-center overflow-hidden min-h-[calc(100svh-6rem)] md:min-h-[calc(100svh-7rem)]">
      <Helmet>
        {/* Preload first slide image (International Temples) */}
        <link
          rel="preload"
          as="image"
          href="https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/9bc5ace563c3889cc2fac0d9b8a2acb2c769ef8a7896b3dfa03d0bcbad30adb4_v2svcw.png"
          fetchPriority="high"
        />
        {/* Preload second slide image to ensure smooth transition */}
        <link
          rel="preload"
          as="image"
          href="/assets/Home_page_banner/prasadam_banner_hq.webp"
        />
      </Helmet>

      {/* Background Images with Rotation */}
      {heroSlides.map((slide, index) => {
        if (!renderedSlides.has(index)) return null;

        return (
          <div
            key={`slide-bg-${index}`}
            className={`absolute top-0 left-0 w-full h-full hero-bg-custom transition-opacity duration-1000 -z-10 ${index === currentSlide ? "opacity-100" : "opacity-0"
              } ${slide.className || ""}`}
          >
            <picture>
              {slide.mobileImage && (
                <source
                  media="(max-width: 767px)"
                  srcSet={slide.mobileImage}
                />
              )}
              <img
                src={slide.image}
                alt={
                  typeof slide.heading === "string"
                    ? slide.heading
                    : "Hero Section Background"
                }
                decoding={index === 0 ? "sync" : "async"}
                className={`absolute inset-0 w-full h-full ${slide.imageClassName || "object-cover object-[center_35%]"}`}
                style={slide.style || {}}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
                width={1920}
                height={1080}
              />
            </picture>
            <div
              className={`absolute inset-0 ${slide.heading === "International Temple Darshan"
                ? "bg-black/10"
                : "bg-gradient-to-b from-black/50 via-black/30 to-black/60"
                }`}
            />
          </div>
        );
      })}

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 z-30 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all hover:scale-110 group top-[55%] -translate-y-1/2"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 z-30 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all hover:scale-110 group top-[55%] -translate-y-1/2"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 flex-grow flex flex-col">
        {/* Custom Button for generic placement if defined */}
        {heroSlides[currentSlide].customButtonStyle && (
          <button
            onClick={() => {
              // Special case for International Temple Darshan: Dual Action
              // Special case for International Temple Darshan: Manual WhatsApp Redirect
              if (
                heroSlides[currentSlide].path === "/international-temples"
              ) {
                navigate("/darshan?category=international#available-darshans");
              } else if (heroSlides[currentSlide].isExternal) {
                window.open(heroSlides[currentSlide].path, "_blank");
              } else {
                navigate(heroSlides[currentSlide].path);
              }
            }}
            style={
              heroSlides[currentSlide].customButtonStyle as React.CSSProperties
            }
            aria-label={heroSlides[currentSlide].cta}
            className="absolute z-20"
          />
        )}

        {/* Top spacer to lower the text slightly closer to center */}
        <div className="flex-[1.2] min-h-[4rem]" />

        {!heroSlides[currentSlide].hideOverlay && (
          <div className="w-full max-w-[90%] md:max-w-7xl mx-auto text-center text-white px-4 shrink-0">
            {/* Official Partner Badge
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 animate-fade-in-up">
              <span className="text-xs font-bold tracking-widest uppercase text-white">Official Partner</span>
              <div className="h-4 w-px bg-white/30"></div>
              <div className="bg-black/80 rounded-sm p-1">
                <img src="https://promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png" alt="MakeMyTrip" className="h-6 w-auto object-contain" />
              </div>
            </div> */}

            {/* Text Content Wrapper with Min Height to prevent CTA jumps */}
            <div
              className={`min-h-[160px] md:min-h-[200px] flex flex-col justify-center items-center ${heroSlides[currentSlide].path === "/darshan/banke-bihari"
                ? "relative top-8 md:top-14"
                : ""
                }`}
            >
              {/* Tagline */}
              <p
                key={`tagline-${currentSlide}`}
                className={`text-sm md:text-xl font-medium text-white/90 mb-2 md:mb-4 transition-all duration-500 whitespace-normal ${heroSlides[currentSlide].path === "/darshan/banke-bihari"
                  ? "md:whitespace-normal order-last"
                  : "md:whitespace-nowrap"
                  } px-4 ${textVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                  }`}
              >
                {heroSlides[currentSlide].tagline}
              </p>

              {/* Main Heading */}
              <h1
                key={`heading-${currentSlide}`}
                className={`font-display text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-8 transition-all duration-500 delay-100 whitespace-normal ${heroSlides[currentSlide].path === "/darshan/banke-bihari"
                  ? "md:whitespace-normal"
                  : "md:whitespace-nowrap"
                  } leading-tight px-2 ${textVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                  }`}
              >
                {heroSlides[currentSlide].heading}
                {!isInternational &&
                  heroSlides[currentSlide].path !== "/darshan/banke-bihari" && (
                    <span className="text-gradient-sacred"> by Naman</span>
                  )}
              </h1>
            </div>


          </div>
        )}

        {/* Bottom spacer to provide minimum separation */}
        <div className="flex-[0.5] min-h-[2rem]" />

        {/* Bottom Bar: CTA Button + Stats Cards */}
        <div className="w-full px-4 md:px-0 z-30 flex flex-col items-center justify-center gap-4 md:gap-6 animate-fade-in-up delay-400 shrink-0">

          {/* Unified CTA Button */}
          {heroSlides[currentSlide].cta && (
            <Button
              key={`cta-${currentSlide}`}
              variant="hero"
              size="lg"
              className="w-full md:w-auto min-w-[180px] h-[60px] md:h-auto shadow-xl hover:scale-105 transition-transform"
              onClick={() => {
                const slidedata = heroSlides[currentSlide];
                if (slidedata.path === "/international-temples") {
                  navigate("/darshan?category=international#available-darshans");
                } else if (slidedata.isExternal) {
                  window.open(slidedata.path, "_blank");
                } else {
                  navigate(slidedata.path);
                }
              }}
            >
              <span className="text-lg font-bold">{heroSlides[currentSlide].cta}</span>
            </Button>
          )}

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-2 md:flex md:gap-8 w-full md:w-auto">
            {stats.map((stat, index) => {
              const { count, ref, suffix } = useCountUp(
                stat.numValue,
                2000,
                stat.suffix,
              );
              return (
                <div
                  key={stat.label}
                  ref={ref}
                  className="stat-card bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl flex items-center gap-2 md:gap-3 shadow-xl hover:scale-105 transition-transform cursor-pointer p-2 md:p-4 min-h-[60px]"
                  style={{
                    animationDelay: `${400 + index * 100}ms`,
                  }}
                >
                  <div className="rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 flex-shrink-0">
                    <stat.icon className="text-primary w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-primary text-sm md:text-lg leading-tight truncate whitespace-nowrap">
                      <span className="notranslate">
                        {count.toLocaleString("en-IN")}
                      </span>
                      {stat.suffix}
                    </p>
                    <p className="text-muted-foreground font-medium uppercase tracking-wide text-[9px] md:text-[11px] leading-tight truncate">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Booking Notification */}
        <div
          className={`fixed bottom-4 left-4 md:left-8 z-50 transition-all duration-500 max-w-[85vw] md:max-w-none ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-full px-3 py-1.5 md:px-4 md:py-2 shadow-lg flex items-center gap-2">
            <span className="text-base md:text-xl">🚩</span>
            <span className="text-[10px] md:text-sm font-medium text-foreground whitespace-normal leading-tight">
              <strong>{bookingNotifications[currentNotification].name}</strong>{" "}
              just booked {bookingNotifications[currentNotification].service} at{" "}
              {bookingNotifications[currentNotification].temple}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
