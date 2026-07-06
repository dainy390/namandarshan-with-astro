import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Calendar,
  ArrowBigRight,
  Flame,
  MapPin,
  CheckCircle,
  Heart,
  Mountain,
  Train,
  ArrowRight,
} from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
import rameshwaramImg from "@/assets/blogs/twelveJyotirling/RameshwaramJyotirlinga.jpeg";
import CommentSection from "@/components/common/CommentSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RameshwaramJyotirlinga = () => {
  const tableOfContents = [
    {
      id: "intro",
      title: "Introduction",
    },

    {
      id: "importance",
      title: "Importance of Grishneshwar Jyotirlinga",
    },

    {
      id: "legend",
      title: "Divine Story & Legend",
    },

    {
      id: "spiritual-significance",
      title: "Spiritual Significance",
    },

    {
      id: "historical-importance",
      title: "Historical Importance",
    },

    {
      id: "architecture",
      title: "Temple Architecture",
    },

    {
      id: "ellora-connection",
      title: "Connection with Ellora Caves",
    },

    {
      id: "rituals",
      title: "Important Rituals & Pujas",
    },

    {
      id: "festivals",
      title: "Festivals Celebrated",
    },

    {
      id: "best-time-to-visit",
      title: "Best Time to Visit",
    },

    {
      id: "how-to-reach",
      title: "How to Reach",
    },

    {
      id: "nearby-places",
      title: "Nearby Places to Visit",
    },

    {
      id: "spiritual-benefits",
      title: "Spiritual Benefits",
    },

    {
      id: "faqs",
      title: "Frequently Asked Questions",
    },
  ];

  const recentPosts = [
    {
      title: "Holi 2026: History & Significance",
      link: "/blog/holi-2026-history-significance-rituals",
    },
    {
      title: "Lathmar Holi Barsana Guide",
      link: "/blog/lathmar-holi-barsana-2026-darshan-guide",
    },
    {
      title: "Nandgaon Lathmar Holi Guide",
      link: "/blog/nandgaon-lathmar-holi-2026-darshan-guide",
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
    headline: "Rameshwaram Jyotirlinga – History, Ram Setu, Darshan & Travel Guide",
    description:
      "Explore Rameshwaram Jyotirlinga in Tamil Nadu, one of the sacred 12 Jyotirlingas of Lord Shiva. Discover Ram Setu, Ramanathaswamy Temple history, darshan timings, rituals, and travel guide.",
    keywords: [
      "Rameshwaram Jyotirlinga",
      "Char Dham Rameshwaram package",
      "Rameshwaram Temple",
      "Jyotirlinga Yatra",
      "Rameshwaram Darshan",
      "Srisailam Darshan",
    ],
    datePublished: "2026-05-12",
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
        name: "Where is Mallikarjuna Jyotirlinga located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mallikarjuna Jyotirlinga is located in Srisailam, Andhra Pradesh.",
        },
      },
      {
        "@type": "Question",
        name: "Why is Mallikarjuna Temple special?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is both a Jyotirlinga and a Shakti Peetha.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best time to visit Srisailam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "October to March is considered the best time to visit Srisailam.",
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
        title="Rameshwaram Jyotirlinga – History, Ram Setu, Darshan & Travel Guide"
        keywords={[
          "Ramanathaswamy Temple",
          "Rameshwaram Temple",
          "Ram Setu",
          "Rameshwaram Darshan",
          "Char Dham Yatra",
          "Rameshwaram history"
        ]}
        description="Explore Rameshwaram Jyotirlinga in Tamil Nadu, one of the sacred 12 Jyotirlingas of Lord
Shiva. Discover Ram Setu, Ramanathaswamy Temple history, darshan timings, rituals, and
travel guide."
      />

      <Header />

      <main className="pt-36 md:pt-48 lg:pt-52 pb-12">
        <div className="container mx-auto px-4">
          <BlogBreadcrumb pageTitle="Mallikarjuna Jyotirlinga Guide" />

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
                    Rameshwaram Jyotirlinga – The Sacred Bridge Between Devotion
                    and Liberation
                  </h1>

                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <Calendar className="w-4 h-4" />
                    <span>12 May 2026</span>
                    <span>•</span>
                    <span>10 min read</span>
                  </div>
                </div>

                <div className="w-full h-64 md:h-96 bg-slate-200">
                  <img
                    src={rameshwaramImg}
                    alt="Mallikarjuna Jyotirlinga Temple"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 md:p-10 space-y-8 text-lg leading-relaxed text-slate-700">
                  <section
                    id="intro"
                    className="relative overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-white via-orange-50/40 to-white"
                  >
                    <div className="p-8 md:p-12">
                      <div className="flex items-center gap-3 text-orange-600 font-semibold text-lg mb-8">
                        <MapPin className="w-5 h-5" />

                        <span>
                          Rameshwaram Jyotirlinga Temple in Tamil Nadu
                        </span>
                      </div>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Content */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                        <p>
                          Rameshwaram Jyotirlinga, also known as Ramanathaswamy
                          Temple, is one of the most sacred among the 12
                          Jyotirlingas of Lord Shiva and is located on the holy
                          island of Rameshwaram in Tamil Nadu. Surrounded by the
                          waters of the Indian Ocean and deeply connected with
                          the Ramayana, this divine temple is one of the most
                          important pilgrimage destinations in India.
                        </p>

                        <p>
                          Rameshwaram holds a unique place in Hindu spirituality
                          because it is associated with both Lord Shiva and Lord
                          Rama. According to ancient legends, Lord Rama
                          worshipped Lord Shiva here before crossing the ocean
                          to Lanka in search of Goddess Sita.
                        </p>

                        <p>
                          The temple is also one of the four sacred Char Dham
                          pilgrimage sites established in Hindu tradition.
                        </p>

                        <p>
                          The spiritual atmosphere of the sea, the sacred
                          corridors of the temple, ancient rituals, and
                          devotional chants together create an unforgettable
                          pilgrimage experience.
                        </p>

                        <p>
                          Millions of devotees visit Rameshwaram every year
                          seeking spiritual purification, peace, blessings, and
                          liberation.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section
                    id="importance"
                    className="rounded-2xl md:rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
                      {/* Small Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-xs sm:text-sm font-semibold mb-5">
                        <Heart className="w-4 h-4" />
                        Spiritual Importance
                      </div>

                      {/* Heading */}
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6 max-w-4xl">
                        Why Rameshwaram Jyotirlinga is So Important
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Intro */}
                      <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-8">
                        Rameshwaram Jyotirlinga is regarded as one of the
                        holiest pilgrimage destinations in Hinduism because it
                        combines:
                      </p>

                      {/* Symbolism List */}
                      <ul className="space-y-5 mb-10 sm:mb-14 max-w-4xl">
                        {[
                          "The divine blessings of Lord Shiva",
                          "The devotion of Lord Rama",
                          "Sacred ocean rituals",
                          "Spiritual purification and liberation",
                          "Importance in Char Dham Yatra",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-4 border-b border-slate-100 pb-5"
                          >
                            <div className="mt-1 shrink-0">
                              <CheckCircle className="w-5 h-5 text-orange-500" />
                            </div>

                            <p className="text-slate-700 text-[16px] sm:text-lg leading-8 font-medium">
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>

                      {/* Second Intro */}
                      <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-8">
                        Devotees believe that worshipping Lord Ramanathaswamy
                        helps:
                      </p>

                      {/* Benefits List */}
                      <ul className="space-y-5 mb-10 sm:mb-12 max-w-4xl">
                        {[
                          "Remove sins and karmic burdens",
                          "Bring spiritual peace",
                          "Fulfill wishes and prayers",
                          "Strengthen devotion and faith",
                          "Help attain moksha (liberation)",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-4 border-b border-slate-100 pb-5"
                          >
                            <div className="mt-1 shrink-0">
                              <CheckCircle className="w-5 h-5 text-orange-500" />
                            </div>

                            <p className="text-slate-700 text-[16px] sm:text-lg leading-8 font-medium">
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>

                      {/* Closing Highlight */}
                      <div className="border-l-4 border-orange-500 bg-orange-50 rounded-r-2xl px-5 py-5 sm:px-7 sm:py-6">
                        <p className="text-[17px] sm:text-lg md:text-xl leading-8 sm:leading-9 text-slate-800 font-medium">
                          The temple is especially important for devotees
                          seeking spiritual cleansing and ancestral blessings.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section
                    id="legend"
                    className="rounded-2xl md:rounded-3xl border border-orange-100 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 overflow-hidden"
                  >
                    <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
                      {/* Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-xs sm:text-sm font-semibold mb-5">
                        <Flame className="w-4 h-4" />
                        Sacred Shiva Legend
                      </div>

                      {/* Heading */}
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6 max-w-5xl">
                        The Divine Story Behind Rameshwaram Jyotirlinga
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Intro */}
                      <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-10">
                        The legend of Rameshwaram is deeply connected with the
                        Ramayana.
                      </p>

                      {/* Story Timeline */}
                      <div className="space-y-10">
                        {/* Story 1 */}
                        <div className="border-l-2 border-orange-200 pl-5 sm:pl-7">
                          <div className="flex items-center gap-3 mb-4">
                            <Heart className="w-5 h-5 text-orange-500 shrink-0" />

                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                              Lord Rama’s Journey to Lanka
                            </h3>
                          </div>

                          <div className="space-y-5 text-slate-700 text-[16px] sm:text-lg leading-8 sm:leading-9 max-w-4xl">
                            <p>
                              After Goddess Sita was abducted by Ravana, Lord
                              Rama traveled south with Lord Hanuman and his army
                              to rescue her.
                            </p>

                            <p>
                              When they reached the shores of Rameshwaram, Lord
                              Rama decided to worship Lord Shiva before
                              beginning the battle against Ravana.
                            </p>

                            <p>
                              Lord Rama wanted blessings for victory,
                              protection, and removal of any sins associated
                              with war.
                            </p>
                          </div>
                        </div>

                        {/* Story 2 */}
                        <div className="border-l-2 border-orange-200 pl-5 sm:pl-7">
                          <div className="flex items-center gap-3 mb-4">
                            <Flame className="w-5 h-5 text-orange-500 shrink-0" />

                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                              Establishment of the Shivalinga
                            </h3>
                          </div>

                          <div className="space-y-5 text-slate-700 text-[16px] sm:text-lg leading-8 sm:leading-9 max-w-4xl">
                            <p>
                              Lord Rama asked Lord Hanuman to bring a sacred
                              Shivalinga from the Himalayas.
                            </p>

                            <p>However, Hanuman was delayed.</p>

                            <p>
                              As the auspicious time for worship approached,
                              Goddess Sita created a Shivalinga from sand.
                            </p>
                            <p>
                              Lord Rama worshipped this linga with great
                              devotion.
                            </p>
                            <p>
                              Later, Hanuman returned with another Shivalinga.
                            </p>
                            <p>
                              According to tradition, both lingas are worshipped
                              at Rameshwaram.
                            </p>
                            <p>
                              The main Jyotirlinga became known as
                              Ramanathaswamy, meaning “Lord of Rama.”
                            </p>
                            <p>
                              This sacred story symbolizes the deep unity
                              between Lord Rama and Lord Shiva.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section
                    id="spiritual-significance"
                    className="rounded-2xl md:rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
                      {/* Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-xs sm:text-sm font-semibold mb-5">
                        <Heart className="w-4 h-4" />
                        Spiritual Significance
                      </div>

                      {/* Heading */}
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6 max-w-5xl">
                        Spiritual Meaning of Grishneshwar Jyotirlinga
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Intro */}
                      <div className="space-y-6 max-w-4xl mb-10">
                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700">
                          Rameshwaram represents devotion, purification,
                          surrender, and divine unity.
                        </p>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700">
                          Spiritually, the temple symbolizes:
                        </p>
                      </div>

                      {/* Symbolism List */}
                      <ul className="space-y-5 max-w-4xl mb-10 sm:mb-12">
                        {[
                          "Harmony between Shaivism and Vaishnavism",
                          "Purification from sins and karma",
                          "Divine grace and blessings",
                          "Victory of righteousness over evil",
                          "Spiritual liberation and inner peace",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-4 border-b border-slate-100 pb-5"
                          >
                            <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                            <p className="text-slate-700 text-[16px] sm:text-lg leading-8 font-medium">
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>

                      {/* Closing Highlight */}
                      <div className="border-l-4 border-orange-500 bg-orange-50 rounded-r-2xl px-5 py-5 sm:px-7 sm:py-6">
                        <p className="text-[17px] sm:text-lg md:text-xl leading-8 sm:leading-9 text-slate-800 font-medium">
                          The sacred sea and temple rituals are believed to
                          purify both mind and soul.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section
                    id="historical-importance"
                    className="rounded-2xl md:rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
                      {/* Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-xs sm:text-sm font-semibold mb-5">
                        <Calendar className="w-4 h-4" />
                        Historical Legacy
                      </div>

                      {/* Heading */}
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6 max-w-5xl">
                        Historical Importance of Ramanathaswamy Temple
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Intro */}
                      <div className="space-y-6 max-w-4xl mb-10">
                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700">
                          Rameshwaram Temple has been an important pilgrimage
                          destination for centuries.
                        </p>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700">
                          The temple is mentioned in:
                        </p>
                      </div>

                      {/* Mention List */}
                      <ul className="space-y-5 max-w-4xl mb-10 sm:mb-12">
                        {[
                          "Ramayana",
                          "Shiva Purana",
                          "Skanda Purana",
                          "Ancient pilgrimage literature",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-4 border-b border-slate-100 pb-5"
                          >
                            <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                            <p className="text-slate-700 text-[16px] sm:text-lg leading-8 font-medium">
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>

                      {/* Contribution */}

                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-6">
                        Contributions by Kings and Dynasties
                      </h3>

                      <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 mb-6">
                        The temple received support from:
                      </p>
                      <ul className="space-y-5 max-w-4xl mb-10 sm:mb-12">
                        {[
                          "Pandya rulers",
                          "Chola kings",
                          "Sethupathi rulers",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-4 border-b border-slate-100 pb-5"
                          >
                            <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                            <p className="text-slate-700 text-[16px] sm:text-lg leading-8 font-medium">
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>

                      <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700">
                        Over centuries, the temple developed into one of the
                        grandest and most architecturally significant Shiva
                        temples in India.
                      </p>
                    </div>
                  </section>

                  <section
                    id="architecture"
                    className="rounded-2xl md:rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
                      {/* Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-xs sm:text-sm font-semibold mb-5">
                        <Mountain className="w-4 h-4" />
                        Temple Architecture
                      </div>

                      {/* Heading */}
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6 max-w-5xl">
                        Architecture of Rameshwaram Temple
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Intro */}
                      <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-10">
                        Ramanathaswamy Temple is famous worldwide for its
                        magnificent Dravidian architecture.
                      </p>

                      {/* Main Features */}
                      <div className="mb-10 sm:mb-12">
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-6">
                          Main Features
                        </h3>

                        <ul className="space-y-5 max-w-4xl">
                          {[
                            "Massive temple corridors",
                            "Giant stone pillars",
                            "Beautiful carvings",
                            "Tall temple towers (Gopurams)",
                            "Sacred sanctum housing the Jyotirlinga",
                          ].map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-4 border-b border-slate-100 pb-5"
                            >
                              <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                              <p className="text-slate-700 text-[16px] sm:text-lg leading-8 font-medium">
                                {item}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Temple Sculptures */}
                      <div className="border-t border-slate-200 pt-8 sm:pt-10">
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-6">
                          Longest Temple Corridor in India
                        </h3>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-8">
                          One of the most remarkable features of the temple is
                          its massive corridor system.
                        </p>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-8">
                          The temple is known for having one of the longest
                          temple corridors in the world.
                        </p>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-8">
                          The beautifully carved pillars create an extraordinary
                          visual and spiritual experience.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section
                    id="Heritage & Spirituality"
                    className="rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    <div className="p-8 md:p-12">
                      {/* Small Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-6">
                        <Mountain className="w-4 h-4" />
                        Heritage & Spirituality
                      </div>

                      {/* Heading */}
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-8 max-w-5xl">
                        The Sacred 22 Theerthams
                      </h2>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Intro */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl mb-12">
                        <p>
                          One of the most important rituals in Rameshwaram
                          involves bathing in the 22 sacred wells known as
                          “Theerthams.”
                        </p>

                        <p>
                          Each well is believed to possess unique spiritual and
                          healing significance.
                        </p>

                        <p>Pilgrims traditionally:</p>
                      </div>

                      {/* Ellora Features */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mb-16">
                        {[
                          "Take a sea bath at Agni Theertham",
                          "Bathe in the 22 temple wells",
                          "Then proceed for temple darshan",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                          >
                            <div className="flex flex-col gap-4">
                              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                <CheckCircle className="w-5 h-5 text-orange-600" />
                              </div>

                              <p className="text-slate-800 text-lg leading-7 font-semibold">
                                {item}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-slate-200 pt-10">
                        <div className="flex items-center gap-3 mb-7">
                          <Flame className="w-6 h-6 text-orange-500" />

                          <h3 className="text-3xl font-bold text-slate-900 font-display">
                            The Sacred Ram Setu Connection
                          </h3>
                        </div>

                        <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                          <p>
                            Rameshwaram is closely associated with the legendary
                            Ram Setu, also known as Adam’s Bridge
                          </p>

                          <p>
                            According to the Ramayana, Lord Rama’s army built a
                            bridge across the ocean from Rameshwaram to Lanka.
                          </p>
                          <p>
                            This bridge was constructed with the help of the
                            Vanara Sena led by Lord Hanuman.
                          </p>
                          <p>
                            The story of Ram Setu makes Rameshwaram one of the
                            most spiritually important places connected with
                            Lord Rama.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section
                    id="rituals"
                    className="rounded-2xl md:rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
                      {/* Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-xs sm:text-sm font-semibold mb-5">
                        <Flame className="w-4 h-4" />
                        Sacred Worship Rituals
                      </div>

                      {/* Heading */}
                      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6 max-w-5xl">
                        Important Rituals and Pujas at Rameshwaram Temple
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Jalabhishek */}
                      <div className="border-t border-slate-200 pt-8 sm:pt-10">
                        <div className="flex items-center gap-3 mb-5">
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0" />

                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                            Abhishekam
                          </h3>
                        </div>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-6">
                          The Jyotirlinga is worshipped with:
                        </p>

                        {/* Offerings List */}
                        <ul className="space-y-4 max-w-4xl mb-8">
                          {[
                            "Water",
                            "Milk",
                            "Honey",
                            "Ghee",
                            "Bilva leaves",
                          ].map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-4 border-b border-slate-100 pb-4"
                            >
                              <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                              <p className="text-slate-700 text-[16px] sm:text-lg leading-8 font-medium">
                                {item}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Rudrabhishek */}
                      <div className="border-t border-slate-200 pt-8 sm:pt-10 mt-10 sm:mt-12">
                        <div className="flex items-center gap-3 mb-5">
                          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0" />
                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                            Rudrabhishek
                          </h3>
                        </div>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl">
                          One of the most important rituals dedicated to Lord
                          Shiva.
                        </p>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl">
                          Devotees believe this ritual brings peace, prosperity,
                          and divine blessings.
                        </p>
                      </div>

                      {/* Maha Aarti */}
                      <div className="border-t border-slate-200 pt-8 sm:pt-10 mt-10 sm:mt-12">
                        <div className="flex items-center gap-3 mb-5">
                          <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0" />

                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                            Maha Aarti
                          </h3>
                        </div>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl">
                          The temple aarti creates a deeply devotional
                          atmosphere filled with Shiva chants, bells, and
                          spiritual energy.
                        </p>
                      </div>

                      {/* Shravan Worship */}
                      <div className="border-t border-slate-200 pt-8 sm:pt-10 mt-10 sm:mt-12">
                        <div className="flex items-center gap-3 mb-5">
                          <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0" />
                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                            Pitru Tarpan Rituals
                          </h3>
                        </div>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl">
                          Many devotees perform ancestral rituals at Rameshwaram
                          for peace and blessings of departed souls.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section
                    id="festivals"
                    className="rounded-2xl md:rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
                      {/* Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-xs sm:text-sm font-semibold mb-5">
                        <Calendar className="w-4 h-4" />
                        Sacred Celebrations
                      </div>

                      {/* Heading */}
                      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6 max-w-5xl">
                        Festivals Celebrated at Rameshwaram Jyotirlinga
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Festivals List */}
                      <div className="space-y-8">
                        {[
                          {
                            title: "Mahashivratri",
                            description:
                              "Celebrated with great devotion and temple festivities.",
                            icon: Flame,
                          },

                          {
                            title: "Ram Navami",
                            description:
                              "A major festival associated with Lord Rama.",
                            icon: Heart,
                          },

                          {
                            title: "Arudra Darshan",
                            description:
                              "An important Shaivite festival celebrated with devotion.",
                            icon: CheckCircle,
                          },

                          {
                            title: "Navratri",
                            description:
                              "Special rituals and cultural programs are organized.",
                            icon: Flame,
                          },
                        ].map((festival, index) => {
                          const Icon = festival.icon;

                          return (
                            <div
                              key={index}
                              className="border-b border-slate-100 pb-8"
                            >
                              <div className="flex items-start gap-4">
                                <div className="mt-1 shrink-0">
                                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                                </div>

                                <div>
                                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-3">
                                    {festival.title}
                                  </h3>

                                  <p className="text-slate-700 text-[16px] sm:text-lg leading-8 sm:leading-9 max-w-4xl">
                                    {festival.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </section>

                  <section
                    id="best-time-to-visit"
                    className="rounded-2xl md:rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-orange-50/30 overflow-hidden"
                  >
                    <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
                      {/* Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-xs sm:text-sm font-semibold mb-5">
                        <Calendar className="w-4 h-4" />
                        Travel Information
                      </div>

                      {/* Heading */}
                      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6 max-w-5xl">
                        The best time to visit Rameshwaram is from October to
                        March.
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Highlight */}
                      <div className="border-l-4 border-orange-500 bg-white rounded-r-2xl px-5 py-5 sm:px-7 sm:py-6 mb-10 sm:mb-12 max-w-4xl">
                        <p className="text-[17px] sm:text-lg md:text-xl leading-8 sm:leading-9 text-slate-800 font-medium">
                          The best time to visit Grishneshwar Jyotirlinga is
                          from October to March.
                        </p>
                      </div>

                      {/* Winter Season */}
                      <div className="border-t border-orange-100 pt-8 sm:pt-10">
                        <div className="flex items-center gap-3 mb-5">
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0" />

                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                            Winter Season
                          </h3>
                        </div>
                        {/* Winter Benefits */}
                        <ul className="space-y-4 max-w-4xl">
                          {[
                            "Pleasant weather",
                            "Comfortable pilgrimage experience",
                            "Ideal for darshan and sightseeing",
                          ].map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-4 border-b border-orange-100 pb-4"
                            >
                              <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                              <p className="text-slate-700 text-[16px] sm:text-lg leading-8 font-medium">
                                {item}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Monsoon Season */}
                      <div className="border-t border-orange-100 pt-8 sm:pt-10 mt-10 sm:mt-12">
                        <div className="flex items-center gap-3 mb-5">
                          <Mountain className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0" />

                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                            Festival Seasons
                          </h3>
                        </div>

                        <div className="space-y-5 max-w-4xl">
                          <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700">
                            Mahashivratri and Ram Navami are spiritually vibrant
                            but crowded.
                          </p>

                          <div className="border-l-4 border-orange-500 bg-orange-50 rounded-r-2xl px-5 py-5">
                            <p className="text-slate-800 text-[16px] sm:text-lg leading-8 font-medium">
                              However, occasional rainfall may affect travel
                              plans and temple visits.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section
                    id="how-to-reach"
                    className="bg-slate-50 p-6 rounded-xl"
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
                      How to Reach Rameshwaram Jyotirlinga
                    </h2>

                    <div className="space-y-8">
                      {/* By Air */}
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">
                          By Air
                        </h3>

                        <p className="text-slate-700 font-medium mb-3">
                          Nearest Airports:
                        </p>

                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                          <li>Madurai Airport</li>
                        </ul>
                      </div>

                      {/* By Train */}
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">
                          By Train
                        </h3>

                        <p className="text-slate-700 font-medium mb-3">
                          Nearest Railway Stations:
                        </p>

                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                          <li>Rameswaram Railway Station</li>
                        </ul>
                      </div>

                      {/* By Road */}
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">
                          By Road
                        </h3>

                        <p className="text-slate-700 font-medium mb-3">
                          Rameshwaram is well connected by road from:
                        </p>

                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                          <li>Madurai</li>
                          <li>Chennai</li>
                          <li>Tiruchirappalli</li>
                          <li>Coimbatore</li>
                        </ul>
                      </div>
                    </div>

                    <p className="text-lg leading-8 text-slate-700 mt-8">
                      The famous Pamban Bridge connects the island to mainland
                      India.
                    </p>
                  </section>

                  <section
                    id="nearby-places"
                    className="rounded-2xl md:rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
                      {/* Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-xs sm:text-sm font-semibold mb-5">
                        <MapPin className="w-4 h-4" />
                        Nearby Attractions
                      </div>

                      {/* Heading */}
                      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 font-display leading-tight mb-6 max-w-5xl">
                        Nearby Places to Visit Near Rameshwaram
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Places */}
                      <div className="space-y-8 max-w-4xl">
                        {[
                          {
                            title: "Agni Theertham",
                            description:
                              "A sacred sea bathing spot near the temple.",
                            icon: Mountain,
                          },

                          {
                            title: "Ram Setu View Point",
                            description:
                              "Associated with the legendary bridge built by Lord Rama.",
                            icon: Flame,
                          },

                          {
                            title: "Dhanushkodi",
                            description:
                              "A spiritually and historically significant coastal town.",
                            icon: Mountain,
                          },

                          {
                            title: "Panchmukhi Hanuman Temple",
                            description:
                              "A famous temple associated with Lord Hanuman.",
                            icon: CheckCircle,
                          },

                          {
                            title: "Pamban Bridge",
                            description:
                              "An iconic railway and road bridge offering breathtaking sea views.",
                            icon: Heart,
                          },
                        ].map((place, index) => {
                          const Icon = place.icon;

                          return (
                            <div
                              key={index}
                              className="border-b border-slate-100 pb-8"
                            >
                              <div className="flex items-start gap-4">
                                <div className="mt-1 shrink-0">
                                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                                </div>

                                <div>
                                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-3">
                                    {place.title}
                                  </h3>

                                  <p className="text-slate-700 text-[16px] sm:text-lg leading-8 sm:leading-9 max-w-4xl">
                                    {place.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </section>

                  <section
                    id="spiritual-benefits"
                    className="rounded-3xl border border-slate-200 bg-white"
                  >
                    <div className="p-8 md:p-12">
                      {/* Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-6">
                        <Heart className="w-4 h-4" />
                        Divine Blessings
                      </div>

                      {/* Heading */}
                      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 font-display leading-tight mb-8 max-w-5xl">
                        Spiritual Benefits of Visiting Rameshwaram Jyotirlinga
                      </h2>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Intro */}
                      <p className="text-lg leading-9 text-slate-700 max-w-4xl mb-8">
                        Devotees believe that visiting Rameshwaram:
                      </p>

                      {/* Benefits List */}
                      <div className="space-y-5 max-w-4xl mb-12">
                        <div className="flex items-start gap-4">
                          <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                          <p className="text-slate-700 text-lg leading-8">
                            Removes sins and karmic burdens
                          </p>
                        </div>

                        <div className="flex items-start gap-4">
                          <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                          <p className="text-slate-700 text-lg leading-8">
                            Brings spiritual peace and purification
                          </p>
                        </div>

                        <div className="flex items-start gap-4">
                          <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                          <p className="text-slate-700 text-lg leading-8">
                            Strengthens devotion toward Lord Shiva and Lord Rama
                          </p>
                        </div>

                        <div className="flex items-start gap-4">
                          <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                          <p className="text-slate-700 text-lg leading-8">
                            Helps attain ancestral blessings
                          </p>
                        </div>

                        <div className="flex items-start gap-4">
                          <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                          <p className="text-slate-700 text-lg leading-8">
                            Grants inner peace and liberation
                          </p>
                        </div>
                      </div>

                      {/* Closing Text */}
                      <p className="text-lg leading-9 text-slate-700 max-w-4xl">
                        For many pilgrims, Rameshwaram becomes a deeply
                        emotional and spiritually transformative experience.
                      </p>
                    </div>
                  </section>

                  <section className="bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
                    <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14">
                      {/* Label */}
                      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-5 backdrop-blur-sm">
                        <Flame className="w-4 h-4 text-orange-200" />
                        Spiritual Travel Assistance
                      </div>

                      {/* Heading */}
                      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white font-display leading-tight mb-6 max-w-5xl">
                        Plan Your Rameshwaram Jyotirlinga Yatra with Naman
                        Darshan
                      </h2>

                      {/* Intro */}
                      <p className="text-orange-50 text-[16px] sm:text-lg md:text-xl leading-8 sm:leading-9 max-w-4xl mb-10">
                        Experience a spiritually enriching journey to
                        Rameshwaram Jyotirlinga with complete travel assistance
                        and pilgrimage support.
                      </p>

                      <p className="text-orange-50 text-[16px] sm:text-lg md:text-xl leading-8 sm:leading-9 max-w-4xl mb-10">
                        {" "}
                        Our services include:
                      </p>
                      {/* Services */}
                      <ul className="space-y-5 max-w-4xl mb-10 sm:mb-12">
                        {[
                          "Request Darshan Assistance Assistance",
                          "Hotel Booking",
                          "Transportation Services",
                          "Temple Pooja Assistance",
                          "Maharashtra Jyotirlinga Tour Packages",
                          "Ellora Spiritual Tours",
                          "Customized Pilgrimage Packages",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-4 border-b border-white/10 pb-5"
                          >
                            <CheckCircle className="w-5 h-5 text-orange-200 mt-1 shrink-0" />

                            <p className="text-white text-[16px] sm:text-lg leading-8">
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>

                      {/* Bottom Highlight */}
                      <div className="bg-white/10 border border-white/10 rounded-2xl px-5 py-6 sm:px-7 sm:py-7 backdrop-blur-sm">
                        <p className="text-white text-[16px] sm:text-lg md:text-xl leading-8 sm:leading-9 font-medium mb-6">
                          Naman Darshan helps devotees experience a smooth and
                          memorable spiritual journey to Rameshwaram.
                        </p>

                        <Link to="/darshan">
                          <button className="w-full sm:w-auto bg-white hover:bg-orange-50 text-orange-700 font-bold py-3 px-7 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3">
                            Request Darshan Assistance
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </section>

                  <section className="rounded-2xl md:rounded-3xl border border-slate-200 bg-white overflow-hidden">
                    <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
                      {/* Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-xs sm:text-sm font-semibold mb-5">
                        <Flame className="w-4 h-4" />
                        Sacred Conclusion
                      </div>

                      {/* Heading */}
                      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 font-display leading-tight mb-6 max-w-5xl">
                        Conclusion
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Intro */}

                      <p className="text-slate-700 text-[16px] sm:text-lg md:text-xl leading-8 sm:leading-9 max-w-5xl mb-10">
                        Rameshwaram Jyotirlinga is one of the most spiritually
                        important shrines dedicated to Lord Shiva.
                      </p>
                      <p className="text-slate-700 text-[16px] sm:text-lg md:text-xl leading-8 sm:leading-9 max-w-5xl mb-10">
                        The sacred connection between Lord Rama and Lord Shiva,
                        the holy ocean rituals, and the divine energy of the
                        temple together create a truly extraordinary pilgrimage
                        experience.
                      </p>
                      <p className="text-slate-700 text-[16px] sm:text-lg md:text-xl leading-8 sm:leading-9 max-w-5xl mb-10">
                        From the sacred Theerthams to the legendary Ram Setu,
                        every aspect of Rameshwaram reflects devotion, purity,
                        faith, and divine grace.
                      </p>
                      <p className="text-slate-700 text-[16px] sm:text-lg md:text-xl leading-8 sm:leading-9 max-w-5xl mb-10">
                        For devotees of Lord Shiva and Lord Rama, visiting
                        Rameshwaram Jyotirlinga is not just a pilgrimage but a
                        sacred journey toward spiritual cleansing, peace,
                        devotion, and liberation.
                      </p>
                    </div>
                  </section>

                  <section id="faqs">
                    <h2 className="text-3xl font-display font-bold text-stone-900 mb-6">
                      Frequently Asked Questions About Grishneshwar Jyotirlinga
                    </h2>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem
                        value="item-1"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          1. Where is Rameshwaram Jyotirlinga located?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          Rameshwaram Jyotirlinga is located in{" "}
                          <strong> Rameshwaram</strong>,{" "}
                          <strong>Tamil Nadu</strong>.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-2"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          2. Why is Rameshwaram Jyotirlinga famous?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          It is famous as the{" "}
                          <strong>twelfth Jyotirlinga</strong> and for the
                          legend of devotee <strong>Ghushma.</strong>
                          It is famous for its connection with{" "}
                          <strong>Lord Rama</strong> and as one of the{" "}
                          <strong>12 Jyotirlingas</strong>.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-3"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          3. What is unique about Rameshwaram Temple?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          The temple is known for its massive corridors and 22
                          sacred Theerthams.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-4"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          4. What is the significance of Ram Setu?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          According to the Ramayana, Ram Setu was built by Lord
                          Rama’s army to reach Lanka.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-5"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          5. What is the best time to visit Rameshwaram?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          October to March is considered ideal.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-6"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          6. Can devotees perform ancestral rituals at
                          Rameshwaram?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          Yes, devotees can participate in{" "}
                          <strong>Abhishekam</strong> and{" "}
                          <strong>Rudrabhishekam</strong>. Yes, devotees can
                          participate in <strong>Rudrabhishek</strong> and{" "}
                          <strong>special Shiva pujas</strong>. Yes, many
                          devotees perform <strong>Pitru Tarpan</strong> and{" "}
                          <strong>ancestral rituals</strong> at{" "}
                          <strong>Rameshwaram.</strong>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </section>
                </div>
              </div>

              <CommentSection />
            </article>

            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-stone-100 flex flex-col gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-4 bg-orange-500 text-white px-4 py-3 -mx-6 -mt-6 rounded-t-xl">
                    Recent Posts
                  </h3>
                  <div className="space-y-4 mt-6">
                    {recentPosts.map((post, idx) => (
                      <Link
                        key={idx}
                        to={post.link}
                        className="block p-3 hover:bg-stone-50 rounded-lg transition-colors border-b last:border-0 border-stone-100 group"
                      >
                        <p className="text-sm font-medium text-stone-800 group-hover:text-orange-600 line-clamp-2 transition-colors">
                          {post.title}
                        </p>
                      </Link>
                    ))}
                  </div>
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

export default RameshwaramJyotirlinga;
