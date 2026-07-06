import { lazy, Suspense } from "react";
import Header from "@/components/layout/Header";
import SEO from "@/components/SEO";
import Footer from "@/components/layout/Footer";
import HeroSection from "./components/HeroSection";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import AiYatraBanner from "./components/AiYatraBanner";
import AajKiTithiWidget from "./components/AajKiTithiWidget";

const MissionSection = lazy(() => import("./components/MissionSection"));
const PopularYatras = lazy(() => import("./components/PopularYatras"));
const PremiumTemples = lazy(() => import("./components/PremiumTemples"));
const DailyAartiSection = lazy(() => import("./components/DailyAartiSection"));
const LiveDarshan = lazy(() => import("./components/LiveDarshan"));
const PujaServices = lazy(() => import("./components/PujaServices"));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const CTASection = lazy(() => import("./components/CTASection"));
const SpiritualReads = lazy(() => import("./components/SpiritualReads"));
const FAQSection = lazy(() => import("./components/FAQSection"));
const AiKundaliSection = lazy(() => import("./components/AiKundaliSection"));

const schemas = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Naman Darshan",
        "url": "https://namandarshan.com/",
        "logo": "https://namandarshan.com/assets/naman-3UcdtI2V.webp",
        "description": "Naman Darshan is India's trusted platform for Guided Darshan Assistance, online puja services, prasadam delivery, and spiritual travel packages.",
        "telephone": "+9187969 73199",
        "email": "sales_naman@namandarshan.com",
        "sameAs": [
          "https://www.facebook.com/people/Naman-Darshan/61562897897801/",
          "https://www.instagram.com/namandarshanofficial/",
          "https://www.youtube.com/@Naman.Darshan?themeRefresh=1",
          "https://www.linkedin.com/company/naman-darshan/"
        ]
      },
      {
        "@type": "WebSite",
        "name": "Naman Darshan",
        "url": "https://namandarshan.com/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://namandarshan.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Service",
        "name": "Guided Darshan Assistance",
        "provider": {
          "@type": "Organization",
          "name": "Naman Darshan",
          "url": "https://namandarshan.com/"
        },
        "description": "Experience Guided Darshan Assistance at India's most sacred temples including Kashi Vishwanath, Ram Mandir Ayodhya, Tirupati Balaji, Somnath and Mahakaleshwar with Guided Darshan Assistance services.",
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "serviceType": [
          "Guided Darshan Assistance",
          "Online Puja Booking",
          "Prasadam Delivery",
          "Pilgrimage Travel Packages"
        ]
      },
      {
        "@type": "AggregateRating",
        "itemReviewed": {
          "@type": "Organization",
          "name": "Naman Darshan"
        },
        "ratingValue": "4.8",
        "reviewCount": "5000"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Guided Darshan Assistance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Guided Darshan Assistance allows devotees to experience Guided Darshan Assistance at major temples across India with a seamless, personalized, and guided spiritual experience led by a knowledgeable Pandit Ji."
        }
      },
      {
        "@type": "Question",
        "name": "Why should I choose Namandarshan for my temple visit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Namandarshan provides verified services, Guided Darshan Assistance, online puja services, prasadam delivery, and dedicated support to make your spiritual journey smooth and comfortable."
        }
      },
      {
        "@type": "Question",
        "name": "Is the Guided Darshan Assistance service suitable for senior citizens?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Guided Darshan Assistance services are especially helpful for senior citizens as they provide personalized guidance from a Pandit Ji and ensure comfortable access during temple visits."
        }
      },
      {
        "@type": "Question",
        "name": "How do I request Guided Darshan Assistance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can easily request Guided Darshan Assistance through the Namandarshan website by selecting the temple, choosing a suitable date, and completing the online request process."
        }
      },
      {
        "@type": "Question",
        "name": "Can I receive Prasadam if I cannot visit the temple?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Namandarshan offers prasadam delivery services where sacred offerings from temples can be delivered directly to your home."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://namandarshan.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Temples",
        "item": "https://namandarshan.com/temples"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Ayodhya Ram Mandir",
        "item": "https://namandarshan.com/temples/ayodhya"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Ram Mandir Guided Darshan Assistance",
    "image": "https://namandarshan.com/images/ram-mandir-darshan.jpg",
    "description": "Experience Guided Darshan Assistance at Ayodhya Ram Mandir with a dedicated local Pandit Ji through Naman Darshan.",
    "brand": {
      "@type": "Brand",
      "name": "Naman Darshan"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://namandarshan.com/darshan/ram-mandir-vip-darshan",
      "priceCurrency": "INR",
      "price": "2500",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "120"
    }
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">

      <SEO
        title="Guided Darshan Assistance in India | Naman Darshan"
        description="Experience Guided Darshan Assistance and online puja for Kashi Vishwanath, Tirupati Balaji, Mahakaleshwar and Ram Mandir with Naman Darshan. Connect with a knowledgeable Pandit Ji."
        keywords={[
          "darshan",
          "Guided Darshan Assistance",
          "Pandit Ji guidance",
          "temple booking",
          "online puja",
          "Guided Darshan",
          "temple entry pass"
        ]}
        schemas={schemas}
      />

      <Header />

      <main>
        {/* User Requested Sequence:
           Panchang Widget -> Hero -> Bridging Gap (Mission) -> AI Yatra Banner -> Premium Darshan ->
           AI Kundli + Game -> Popular Packages (Yatras) -> Live Darshan -> Puja Services -> Rest 
        */}
        <AajKiTithiWidget />

        <HeroSection />

        <Suspense fallback={<div className="min-h-[200px]" />}>
          <RevealOnScroll>
            <MissionSection />
          </RevealOnScroll>
        </Suspense>

        <Suspense fallback={<div className="min-h-[200px]" />}>
          <RevealOnScroll>
            <AiYatraBanner />
          </RevealOnScroll>
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
          <RevealOnScroll>
            <PremiumTemples />
          </RevealOnScroll>
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
          <RevealOnScroll>
            <AiKundaliSection />
          </RevealOnScroll>
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
          <RevealOnScroll>
            <PopularYatras />
          </RevealOnScroll>
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
          <RevealOnScroll>
            <LiveDarshan />
          </RevealOnScroll>
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
          <RevealOnScroll>
            <PujaServices />
          </RevealOnScroll>
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
          <RevealOnScroll>
            <WhyChooseUs />
          </RevealOnScroll>
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
          <RevealOnScroll>
            <Testimonials />
          </RevealOnScroll>
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
          <RevealOnScroll>
            <SpiritualReads />
          </RevealOnScroll>
        </Suspense>

        <Suspense fallback={<div className="min-h-[200px]" />}>
          <RevealOnScroll>
            <CTASection />
          </RevealOnScroll>
        </Suspense>

        <Suspense fallback={<div className="min-h-[200px]" />}>
          <RevealOnScroll>
            <FAQSection />
          </RevealOnScroll>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default Index;