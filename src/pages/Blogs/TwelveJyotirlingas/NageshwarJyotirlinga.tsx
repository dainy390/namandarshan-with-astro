import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Calendar,
  ArrowBigRight,
  Clock,
  MapPin,
  Heart,
  ShieldCheck,
  Zap,
  History,
  ExternalLink,
  Phone,
  LayoutDashboard,
  Car,
  Home,
  CheckCircle2,
  Waves,
  Eye,
  BookOpen,
  HelpCircle,
  Star
} from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
import nageshwarImg from "@/assets/blogs/twelveJyotirling/NageshwarJyotirlinga.jpeg";
import CommentSection from "@/components/common/CommentSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const NageshwarJyotirlinga = () => {

  const tableOfContents = [
    { id: "intro", title: "Introduction" },
    { id: "importance", title: "Why Nageshwar Jyotirlinga is So Important" },
    { id: "legend", title: "The Divine Story & Legend" },
    { id: "spiritual-meaning", title: "Spiritual Meaning" },
    { id: "historical-importance", title: "Historical Importance" },
    { id: "architecture", title: "Temple Architecture" },
    { id: "shiva-statue", title: "Giant Statue of Lord Shiva" },
    { id: "serpent-symbolism", title: "Sacred Energy of Serpent Symbolism" },
    { id: "rituals", title: "Important Rituals & Pujas" },
    { id: "festivals", title: "Festivals Celebrated" },
    { id: "best-time", title: "Best Time to Visit" },
    { id: "how-to-reach", title: "How to Reach" },
    { id: "nearby-places", title: "Nearby Places to Visit" },
    { id: "spiritual-benefits", title: "Spiritual Benefits" },
    { id: "conclusion", title: "Conclusion" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const recentPosts = [
    {
      title: "Bhimashankar Jyotirlinga Guide",
      link: "/blog/bhimashankar-jyotirlinga-pune-guide",
    },
    {
      title: "Trimbakeshwar Jyotirlinga Guide",
      link: "/blog/trimbakeshwar-jyotirlinga-nashik-guide",
    },
    {
      title: "Vaidyanath Jyotirlinga Guide",
      link: "/blog/vaidyanath-jyotirlinga-guide",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Nageshwar Jyotirlinga – The Divine Protector and Lord of Serpents",
    description: "Complete guide to Nageshwar Jyotirlinga near Dwarka, Gujarat. Learn about the legend of Supriya, serpent symbolism, giant Shiva statue, and travel tips.",
    keywords: [
      "Nageshwar Jyotirlinga",
      "Nageshwar Temple",
      "Nageshwar Jyotirlinga Temple",
      "Nageshwar Mahadev",
      "Nageshwar Mandir",
      "Nageshwar Dwarka",
      "Dwarka Jyotirlinga",
      "Nageshwar Darshan",
      "Nageshwar Temple Gujarat",
      "Nageshwar Shiva Temple",
      "Nageshwar Yatra",
      "Nageshwar Tour",
      "Lord Shiva Temple",
      "12 Jyotirlingas",
      "Dwarka Temple Tour",
      "Nageshwar Temple Booking",
      "Nageshwar Tourism",
      "Nageshwar Mahadev Temple",
      "Gujarat Jyotirlinga",
      "Nageshwar Pilgrimage",
      "Nageshwar Jyotirlinga history",
      "Nageshwar story",
      "Nageshwar temple timings",
      "Nageshwar temple guide",
      "Nageshwar significance",
      "Nageshwar travel guide",
      "Nageshwar temple route",
      "Nageshwar temple photos",
      "Nageshwar temple rituals",
      "Nageshwar darshan booking",
      "Nageshwar spiritual significance",
      "Nageshwar temple information",
      "Nageshwar pilgrimage guide",
      "Dwarka Nageshwar Temple",
      "Nageshwar temple architecture",
      "Nageshwar temple nearby places",
      "Nageshwar temple aarti timing",
      "Nageshwar Mahadev story",
      "Nageshwar pooja booking",
      "Nageshwar temple Gujarat guide"
    ],
    datePublished: "2026-05-13",
    author: {
      "@type": "Organization",
      name: "Naman Darshan",
    },
    publisher: {
      "@type": "Organization",
      name: "Naman Darshan",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
    },
    articleSection: "Spiritual Travel Guide",
    inLanguage: "en",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is Nageshwar Jyotirlinga located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nageshwar Jyotirlinga is located near Dwarka in Gujarat.",
        },
      },
      {
        "@type": "Question",
        name: "Why is Nageshwar Jyotirlinga famous?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is famous as one of the 12 Jyotirlingas and for its spiritual protection symbolism.",
        },
      },
      {
        "@type": "Question",
        name: "What does Nageshwar mean?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nageshwar means 'Lord of Serpents'.",
        },
      },
      {
        "@type": "Question",
        name: "Which devotee is associated with Nageshwar Jyotirlinga?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The temple is associated with the devotee Supriya.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <SEO
        title="Nageshwar Jyotirlinga – History, Darshan, Dwarka Tour & Travel Guide"
        keywords={[
          "Nageshwar Jyotirlinga",
          "Nageshwar Temple",
          "Nageshwar Dwarka",
          "Nageshwar Mahadev",
          "Dwarka Jyotirlinga",
          "Nageshwar history",
          "Nageshwar Darshan",
          "Nageshwar Jyotirlinga Temple",
          "Nageshwar Mandir",
          "Nageshwar Temple Gujarat",
          "Nageshwar Shiva Temple",
          "Nageshwar Yatra",
          "Nageshwar Tour",
          "Lord Shiva Temple",
          "12 Jyotirlingas",
          "Dwarka Temple Tour",
          "Nageshwar Temple Booking",
          "Nageshwar Tourism",
          "Nageshwar Mahadev Temple",
          "Gujarat Jyotirlinga",
          "Nageshwar Pilgrimage"
        ]}
        description="Explore Nageshwar Jyotirlinga near Dwarka, one of the sacred 12 Jyotirlingas of Lord Shiva. Discover temple history, mythology, darshan timings, rituals, and travel guide."
      />

      <Header />

      <main className="pt-36 md:pt-48 lg:pt-52 pb-12">
        <div className="container mx-auto px-4">
          <BlogBreadcrumb pageTitle="Nageshwar Jyotirlinga Guide" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 border border-slate-100">
                <h3 className="font-bold text-lg mb-4 text-slate-900 border-b pb-3">
                  On This Page
                </h3>

                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:text-primary hover:bg-orange-50 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <ChevronRight className="w-3 h-3 text-orange-500 shrink-0" />
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="lg:col-span-6">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100">
                <div className="p-8 md:p-10">
                  <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 leading-tight">
                    Nageshwar Jyotirlinga – The Divine Protector and Lord of Serpents
                  </h1>

                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <Calendar className="w-4 h-4" />
                    <span>13 May 2026</span>
                    <span>•</span>
                    <span>12 min read</span>
                  </div>
                </div>

                <div className="w-full h-64 md:h-96 bg-slate-200">
                  <img
                    src={nageshwarImg}
                    alt="Nageshwar Jyotirlinga Temple"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 md:p-10 space-y-8 text-lg leading-relaxed text-slate-700">
                  <section
                    id="intro"
                    className="relative overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-white via-orange-50/40 to-white p-8 md:p-12 shadow-sm"
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-orange-200/20 blur-3xl rounded-full" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-100/30 blur-2xl rounded-full" />

                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-5">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        Sacred Jyotirlinga
                      </div>

                      <h2 className="text-4xl leading-tight font-bold text-slate-900 font-display mb-6">
                        Nageshwar Jyotirlinga in <span className="text-orange-600">Gujarat</span>
                      </h2>

                      <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mb-8" />

                      <div className="space-y-6 text-[17px] md:text-lg leading-8 text-slate-700">
                        <p>
                          Nageshwar Jyotirlinga is one of the most sacred among the 12 Jyotirlingas of Lord Shiva and is located near the holy city of Dwarka in Gujarat. Situated along the coast of the Arabian Sea between Dwarka and Beyt Dwarka, this spiritually powerful temple attracts devotees from across India seeking protection, peace, and divine blessings.
                        </p>

                        <div className="p-6 bg-white rounded-2xl border border-orange-100 shadow-sm">
                          <p className="font-bold text-slate-900 mb-2 italic">The name “Nageshwar” comes from two Sanskrit words:</p>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <span className="font-bold text-orange-600">• Nag</span> – meaning serpent
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="font-bold text-orange-600">• Ishwar</span> – meaning Lord
                            </li>
                          </ul>
                          <p className="mt-4 font-medium">Thus, Nageshwar means “Lord of Serpents.” In Hindu spirituality, serpents symbolize cosmic energy, protection, fearlessness, transformation, and spiritual awakening.</p>
                        </div>

                        <p>
                          Lord Shiva is often depicted with a serpent around his neck, representing his mastery over fear, death, and negative energies. Nageshwar Jyotirlinga is therefore worshipped as a powerful protector against evil forces, fear, negativity, and suffering.
                        </p>

                        <p>
                          The temple is also famous for its giant statue of Lord Shiva, peaceful spiritual atmosphere, and deep mythological significance.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section
                    id="importance"
                    className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm"
                  >
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-100/40 blur-3xl rounded-full" />
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                        <ShieldCheck className="w-4 h-4" />
                        Divine Protector
                      </div>

                      <h2 className="text-4xl font-bold text-slate-900 leading-tight font-display mb-6">
                        Why <span className="text-orange-600">Nageshwar Jyotirlinga</span> is So Important
                      </h2>

                      <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mb-8" />

                      <p className="text-[17px] md:text-lg leading-8 text-slate-700 mb-8">
                        Nageshwar Jyotirlinga is regarded as one of the most spiritually protective forms of Lord Shiva.
                      </p>

                      <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 p-6 md:p-8 mb-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display text-center">
                          Devotees believe that worshipping Lord Nageshwar helps:
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            "Remove fear and anxiety",
                            "Protect from negative energies",
                            "Destroy evil influences",
                            "Bring courage and confidence",
                            "Strengthen spiritual awareness",
                            "Grant peace and divine blessings"
                          ].map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-orange-100 shadow-sm">
                              <CheckCircle2 className="w-5 h-5 mt-1 text-orange-500 shrink-0" />
                              <p className="text-slate-700 font-medium">{benefit}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <p className="text-[17px] md:text-lg leading-8 text-slate-700">
                        The temple is especially important for devotees seeking emotional strength, spiritual protection, and inner stability.
                      </p>
                    </div>
                  </section>

                  <section
                    id="legend"
                    className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-gradient-to-br from-slate-50 via-white to-orange-50/40 p-8 md:p-12 shadow-sm"
                  >
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6">
                        <Zap className="w-4 h-4" />
                        Sacred Legend
                      </div>

                      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 font-display mb-6">
                        The Divine Story Behind <span className="text-orange-600">Nageshwar Jyotirlinga</span>
                      </h2>

                      <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mb-8" />

                      <p className="text-[17px] md:text-lg leading-8 text-slate-700 mb-10">
                        The legend of Nageshwar Jyotirlinga is described in the Shiva Purana.
                      </p>

                      <div className="space-y-8">
                        <div className="relative rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                          <div className="absolute -top-4 left-6">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-bold shadow-lg">
                              1
                            </div>
                          </div>
                          <div className="pt-4">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">The Devotee Supriya</h3>
                            <div className="space-y-4 text-[17px] md:text-lg leading-8 text-slate-700">
                              <p>Long ago, there lived a devoted follower of Lord Shiva named Supriya. Supriya constantly chanted the sacred mantra:</p>
                              <div className="text-center py-4 text-2xl font-bold text-orange-600 font-display">“Om Namah Shivaya”</div>
                              <p>She inspired many people to worship Lord Shiva and live a spiritual life. At that time, a powerful demon named Daruka ruled a forest kingdom. Daruka had received a boon from Goddess Parvati that made him extremely powerful.</p>
                              <p>Filled with arrogance, he began terrorizing saints, devotees, and innocent people.</p>
                            </div>
                          </div>
                        </div>

                        <div className="relative rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                          <div className="absolute -top-4 left-6">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-bold shadow-lg">
                              2
                            </div>
                          </div>
                          <div className="pt-4">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">Devotees Imprisoned by Daruka</h3>
                            <div className="space-y-4 text-[17px] md:text-lg leading-8 text-slate-700">
                              <p>Daruka captured Supriya and many other devotees and imprisoned them.</p>
                              <p className="font-semibold text-orange-700">Despite the difficult conditions, Supriya continued chanting the name of Lord Shiva and encouraged the other prisoners to remain devoted.</p>
                              <p>The prison gradually filled with spiritual energy because of the constant chanting of Shiva’s name.</p>
                            </div>
                          </div>
                        </div>

                        <div className="relative rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                          <div className="absolute -top-4 left-6">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-bold shadow-lg">
                              3
                            </div>
                          </div>
                          <div className="pt-4">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">Lord Shiva Appears as Nageshwar</h3>
                            <div className="space-y-4 text-[17px] md:text-lg leading-8 text-slate-700">
                              <p>Pleased by the unwavering devotion of Supriya and the other devotees, Lord Shiva appeared before them in a brilliant form of divine light.</p>
                              <p>Lord Shiva blessed Supriya with divine strength. Soon after, Lord Shiva destroyed the demon Daruka and protected his devotees from suffering.</p>
                              <div className="bg-slate-900 text-white p-6 rounded-2xl font-medium">
                                At the request of the devotees and sages, Lord Shiva agreed to remain there permanently in the form of Nageshwar Jyotirlinga. Thus, the temple became a sacred symbol of divine protection and victory over evil.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="spiritual-meaning" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-8">Spiritual Meaning of Nageshwar Jyotirlinga</h2>
                    <p className="text-lg leading-8 text-slate-700 mb-8">Nageshwar represents protection, transformation, fearlessness, and spiritual awakening. Spiritually, the temple symbolizes:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Protection from negativity",
                        "Power of devotion and faith",
                        "Victory of good over evil",
                        "Control over fear and suffering",
                        "Awakening of inner spiritual energy"
                      ].map((point, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-orange-50 rounded-2xl border border-orange-100">
                          <div className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                          <span className="font-medium text-slate-800">{point}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-8 text-lg leading-8 text-slate-700 italic">
                      The serpent symbolism associated with Lord Shiva also represents Kundalini energy, which is believed to awaken higher consciousness.
                    </p>
                  </section>

                  <section id="historical-importance" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
                    <div className="inline-flex items-center gap-2 text-primary font-semibold mb-5">
                      <History className="w-5 h-5" />
                      Ancient Heritage
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-6">Historical Importance of Nageshwar Temple</h2>
                    <div className="space-y-6 text-lg leading-8 text-slate-700">
                      <p>Nageshwar Temple has been an important pilgrimage destination for centuries. The temple is mentioned in:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {["Shiva Purana", "Ancient pilgrimage literature", "Regional devotional traditions"].map((text, i) => (
                          <li key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm font-semibold">
                            <ArrowBigRight className="w-4 h-4 text-orange-500" />
                            {text}
                          </li>
                        ))}
                      </ul>
                      <p className="bg-orange-50 p-6 rounded-2xl border border-orange-100 font-medium">The temple’s location near Dwarka also strengthens its spiritual importance because Dwarka is one of the Char Dham pilgrimage sites associated with Lord Krishna. Many pilgrims visiting Dwarka also visit Nageshwar Jyotirlinga as part of their spiritual journey.</p>
                    </div>
                  </section>

                  <section id="architecture" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-8">Architecture of Nageshwar Temple</h2>
                    <p className="text-lg leading-8 text-slate-700 mb-10">The temple reflects traditional Hindu temple architecture combined with modern structural elements.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-slate-900 font-display border-b-2 border-orange-500 pb-2 inline-block">Main Features</h3>
                        <ul className="space-y-4">
                          {[
                            "Large temple complex",
                            "Sacred sanctum housing the Jyotirlinga",
                            "Beautiful temple carvings",
                            "Spacious prayer halls",
                            "Peaceful surroundings"
                          ].map((feat, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 mt-1 text-green-600 shrink-0" />
                              <span className="font-medium text-slate-700">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div id="shiva-statue" className="bg-orange-50 p-6 rounded-3xl border border-orange-100">
                        <div className="flex items-center gap-3 mb-4">
                          <Eye className="w-6 h-6 text-orange-600" />
                          <h3 className="text-2xl font-bold text-slate-900 font-display">Giant Statue of Lord Shiva</h3>
                        </div>
                        <p className="text-[16px] leading-7 text-slate-700 mb-6">One of the most iconic attractions of the temple is the giant seated statue of Lord Shiva. The statue symbolizes divine calmness, strength, and spiritual power. It attracts devotees and tourists from across the country.</p>
                      </div>
                    </div>
                  </section>

                  <section id="serpent-symbolism" className="relative overflow-hidden p-8 md:p-12 rounded-[2rem] bg-slate-900 text-white shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px]" />
                    <div className="relative z-10">
                      <h2 className="text-3xl md:text-5xl font-bold font-display mb-8">Sacred Energy of Serpent Symbolism</h2>
                      <div className="space-y-6 text-lg md:text-xl leading-relaxed text-slate-300">
                        <p>Serpents hold deep spiritual significance in Hinduism. In the context of Nageshwar Jyotirlinga, serpents symbolize:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {[
                            "Divine protection",
                            "Transformation and rebirth",
                            "Control over fear",
                            "Spiritual awakening",
                            "Cosmic energy"
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-slate-100 bg-white/5 p-3 rounded-xl border border-white/10">
                              <Heart className="w-5 h-5 text-orange-400" />
                              <span className="text-sm font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                        <p className="bg-white/10 p-6 rounded-2xl border border-white/10 text-white font-medium">Lord Shiva wearing a serpent around his neck signifies mastery over death, ego, and worldly fear. This symbolism makes Nageshwar especially important for devotees seeking inner strength and spiritual growth.</p>
                      </div>
                    </div>
                  </section>

                  <section id="rituals" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-10">Important Rituals and Pujas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Jalabhishek</h3>
                        <p className="text-slate-700">Offering water to the sacred Jyotirlinga is considered highly auspicious.</p>
                      </div>
                      <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Rudrabhishek</h3>
                        <p className="text-slate-700 mb-4">The Jyotirlinga is worshipped with:</p>
                        <div className="flex flex-wrap gap-2">
                          {["Water", "Milk", "Honey", "Ghee", "Bilva leaves"].map(item => (
                            <span key={item} className="px-3 py-1 bg-white rounded-full text-xs font-bold text-orange-600">{item}</span>
                          ))}
                        </div>
                        <p className="mt-4 text-xs italic font-medium">Devotees believe this ritual removes negativity and brings peace.</p>
                      </div>
                      <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Maha Aarti</h3>
                        <p className="text-slate-700">The temple aarti creates a highly devotional atmosphere filled with Shiva chants and bells.</p>
                      </div>
                      <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Shravan Special Worship</h3>
                        <p className="text-slate-700">Special pujas and devotional programs are organized during the holy month of Shravan.</p>
                      </div>
                    </div>
                  </section>

                  <section id="festivals" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-10">Festivals Celebrated</h2>
                    <div className="space-y-6">
                      <div className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-slate-100">
                        <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center shrink-0">
                          <Zap className="w-8 h-8 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Mahashivratri</h3>
                          <p className="text-slate-700 font-medium">Celebrated with night-long worship, devotional singing, and temple festivities.</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-slate-100">
                        <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center shrink-0">
                          <Calendar className="w-8 h-8 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Shravan Month</h3>
                          <p className="text-slate-700 font-medium">Thousands of devotees visit the temple throughout Shravan.</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-slate-100">
                        <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-8 h-8 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Nag Panchami</h3>
                          <p className="text-slate-700 font-medium">A spiritually significant festival associated with serpent worship and Lord Shiva.</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="best-time" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-10 text-center">Best Time to Visit Nageshwar Temple</h2>
                    <p className="text-lg leading-8 text-slate-700 mb-10 text-center">The best time to visit Nageshwar Jyotirlinga is from <span className="font-bold text-orange-600 underline">October to March</span>.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 text-center">
                        <h3 className="text-2xl font-bold text-orange-900 mb-4 font-display">Winter Season</h3>
                        <ul className="space-y-3 font-medium text-orange-800">
                          <li>• Pleasant weather</li>
                          <li>• Comfortable pilgrimage experience</li>
                          <li>• Ideal for sightseeing and darshan</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-50 p-8 rounded-3xl border border-yellow-100 text-center">
                        <h3 className="text-2xl font-bold text-yellow-900 mb-4 font-display">Festival Periods</h3>
                        <p className="font-medium text-yellow-800 mb-4">Mahashivratri and Shravan month are spiritually vibrant but crowded.</p>
                        <p className="text-sm font-bold text-yellow-700 italic">Devotees seeking the full spiritual energy often visit during these times.</p>
                      </div>
                    </div>
                  </section>

                  <section id="how-to-reach" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-10">How to Reach Nageshwar Jyotirlinga</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                          <Zap className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">By Air</h3>
                        <p className="text-sm text-slate-600 font-medium">Nearest Airport:</p>
                        <p className="text-sm font-bold text-slate-900 mt-1">Jamnagar Airport</p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                          <Car className="w-6 h-6 text-red-600" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">By Train</h3>
                        <p className="text-sm text-slate-600 font-medium">Nearest Railway Station:</p>
                        <p className="text-sm font-bold text-slate-900 mt-1">Dwarka Railway Station</p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                          <MapPin className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">By Road</h3>
                        <p className="text-sm text-slate-600 font-medium">Well connected from:</p>
                        <p className="text-xs font-bold text-slate-900 mt-1 leading-relaxed">Dwarka, Jamnagar, Rajkot, Ahmedabad. Regular buses and taxis are available.</p>
                      </div>
                    </div>
                  </section>

                  <section id="nearby-places" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-10">Nearby Places to Visit Near Nageshwar Jyotirlinga</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { name: "Dwarkadhish Temple", desc: "One of the most sacred temples dedicated to Lord Krishna." },
                        { name: "Beyt Dwarka", desc: "An island pilgrimage destination associated with Lord Krishna." },
                        { name: "Rukmini Devi Temple", desc: "A spiritually important temple near Dwarka." },
                        { name: "Gomti Ghat", desc: "A sacred bathing and prayer site in Dwarka." },
                        { name: "Shivrajpur Beach", desc: "A peaceful and scenic coastal destination near the temple." }
                      ].map((place, i) => (
                        <div key={i} className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-orange-50 hover:border-orange-200 transition-all cursor-pointer">
                          <h3 className="font-bold text-slate-900 mb-2 group-hover:text-orange-600">{place.name}</h3>
                          <p className="text-xs font-medium text-slate-600 leading-relaxed">{place.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="spiritual-benefits" className="p-8 md:p-12 rounded-[2rem] border border-orange-200 bg-orange-50/30 shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-8">Spiritual Benefits of Visiting Nageshwar Jyotirlinga</h2>
                    <p className="text-lg leading-8 text-slate-700 mb-10">Devotees believe that visiting Nageshwar:</p>
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        "Removes fear and anxiety",
                        "Protects from negative energies",
                        "Brings spiritual peace",
                        "Strengthens devotion toward Lord Shiva",
                        "Improves inner confidence and courage"
                      ].map((benefit, i) => (
                        <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-orange-100 shadow-sm">
                          <ShieldCheck className="w-6 h-6 text-orange-500" />
                          <span className="font-bold text-slate-800 text-lg">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-10 text-center text-xl font-medium text-slate-900 leading-relaxed italic border-t-2 border-orange-200 pt-8">
                      For many pilgrims, the temple becomes a deeply calming and spiritually uplifting experience.
                    </p>
                  </section>

                  <section id="conclusion" className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-orange-50 via-white to-orange-50 border border-orange-100 mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 font-display mb-8 flex items-center gap-2">
                      <BookOpen className="w-8 h-8 text-orange-500" /> Conclusion
                    </h2>
                    <div className="space-y-6 text-lg leading-8 text-slate-700">
                      <p>Nageshwar Jyotirlinga is one of the most spiritually powerful shrines dedicated to Lord Shiva.</p>
                      <p>The sacred legend of Supriya’s devotion, the divine protection of Lord Shiva, and the deep symbolism of serpents together make Nageshwar a unique and spiritually uplifting pilgrimage destination.</p>
                      <p>From the peaceful coastal atmosphere near Dwarka to the powerful spiritual energy of the Jyotirlinga, every aspect of Nageshwar reflects devotion, protection, transformation, and divine grace.</p>
                      <p className="font-bold text-slate-900">For devotees of Lord Shiva, visiting Nageshwar Jyotirlinga is not just a pilgrimage but a sacred journey toward courage, spiritual awakening, peace, and divine blessings.</p>
                    </div>
                  </section>

                  <section id="faqs" className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 font-display mb-8 flex items-center gap-2">
                      <HelpCircle className="w-8 h-8 text-orange-500" /> Frequently Asked Questions
                    </h2>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      <AccordionItem value="item-1" className="border rounded-2xl px-6 bg-white shadow-sm overflow-hidden border-slate-100">
                        <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-orange-600">Where is Nageshwar Jyotirlinga located?</AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-[16px] leading-7 font-medium pb-6">Nageshwar Jyotirlinga is located near Dwarka in Gujarat.</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2" className="border rounded-2xl px-6 bg-white shadow-sm overflow-hidden border-slate-100">
                        <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-orange-600">Why is Nageshwar Jyotirlinga famous?</AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-[16px] leading-7 font-medium pb-6">It is famous as one of the 12 Jyotirlingas and for its spiritual protection symbolism.</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3" className="border rounded-2xl px-6 bg-white shadow-sm overflow-hidden border-slate-100">
                        <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-orange-600">What does Nageshwar mean?</AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-[16px] leading-7 font-medium pb-6">Nageshwar means “Lord of Serpents.”</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4" className="border rounded-2xl px-6 bg-white shadow-sm overflow-hidden border-slate-100">
                        <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-orange-600">Which devotee is associated with Nageshwar Jyotirlinga?</AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-[16px] leading-7 font-medium pb-6">The temple is associated with the devotee Supriya.</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5" className="border rounded-2xl px-6 bg-white shadow-sm overflow-hidden border-slate-100">
                        <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-orange-600">What is the best time to visit Nageshwar Temple?</AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-[16px] leading-7 font-medium pb-6">October to March is considered ideal for a comfortable pilgrimage experience.</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-6" className="border rounded-2xl px-6 bg-white shadow-sm overflow-hidden border-slate-100">
                        <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-orange-600">Can devotees perform Rudrabhishek at Nageshwar Temple?</AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-[16px] leading-7 font-medium pb-6">Yes, devotees can participate in Rudrabhishek and special Shiva pujas at the temple.</AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </section>

                  <section className="bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl p-8 text-white shadow-lg mb-8">
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-6 md:p-8 rounded-r-2xl shadow-sm">
                      <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-display mb-5 leading-tight">
                        Plan Your Nageshwar Jyotirlinga Yatra with Naman Darshan
                      </h2>

                      <p className="text-lg leading-8 text-stone-700 mb-6">
                        Experience a spiritually peaceful journey to Nageshwar with complete travel assistance and pilgrimage support.
                      </p>

                      <div className="mb-8">
                        <p className="font-semibold text-stone-900 mb-4 text-lg">
                          Our services include:
                        </p>

                        <ul className="space-y-3">
                          {[
                            "Request Darshan Assistance Assistance",
                            "Jyotirlinga Tour Packages",
                            "Hotel Booking",
                            "Transportation Services",
                            "Temple Pooja Assistance",
                            "Customized Pilgrimage Tours",
                          ].map((item) => (
                            <li key={item} className="flex items-start gap-3 text-stone-700 text-lg">
                              <span className="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/darshan/nageshwar-jyotirlinga-temple-vipdarshan">
                          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all text-sm md:text-base">
                            Request Darshan Assistance Online
                          </button>
                        </Link>
                        <a href="https://wa.me/919311973199" target="_blank" rel="noopener noreferrer">
                          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all text-sm md:text-base flex items-center gap-2">
                            WhatsApp Support
                          </button>
                        </a>
                      </div>
                    </div>
                  </section>

                  <p className="text-center font-bold text-orange-600 mt-8 mb-8 bg-orange-50 py-4 rounded-xl border border-orange-100 flex items-center justify-center gap-2 italic">
                    Jai Nageshwar! 🙏🕉️ हर हर महादेव!
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-white rounded-xl shadow-sm p-8 border border-slate-100">
                <CommentSection />
              </div>
            </article>

            <aside className="lg:col-span-3 space-y-8">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 sticky top-40">
                <h3 className="font-bold text-lg mb-6 border-b pb-3 text-slate-900">
                  Quick Links
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm font-medium p-3 bg-orange-50 rounded-lg text-orange-700">
                    <span>Location</span>
                    <span className="font-bold">Dwarka, GJ</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-medium p-3 bg-orange-50 rounded-lg text-orange-700">
                    <span>Primary Deity</span>
                    <span className="font-bold">Lord Shiva</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-medium p-3 bg-orange-50 rounded-lg text-orange-700">
                    <span>Best Season</span>
                    <span className="font-bold">Winter</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Recent Posts</h4>
                  <div className="space-y-4">
                    {recentPosts.map((post, idx) => (
                      <Link
                        key={idx}
                        to={post.link}
                        className="group flex gap-3 items-center text-slate-600 hover:text-orange-600 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-orange-500 shrink-0" />
                        <span className="text-sm font-bold leading-snug">{post.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-xs text-white/80 mb-4 leading-relaxed font-medium">Plan your divine journey to Nageshwar Jyotirlinga with our experts.</p>
                  <Button className="w-full bg-white text-orange-600 hover:bg-orange-50 font-bold rounded-xl text-xs h-10">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NageshwarJyotirlinga;
