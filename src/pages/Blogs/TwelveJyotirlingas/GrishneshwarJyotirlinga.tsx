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
import grishneswarJyotirlingImg from "@/assets/blogs/twelveJyotirling/GrishneshwarJyotirlinga.jpeg";
import CommentSection from "@/components/common/CommentSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GrishneshwarJyotirlinga = () => {
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
    headline: "Mallikarjuna Jyotirlinga Srisailam Darshan Guide",
    description:
      "Complete spiritual and travel guide for Mallikarjuna Jyotirlinga in Srisailam including history, darshan tips, rituals, significance, festivals, and nearby attractions.",
    keywords: [
      "Mallikarjuna Jyotirlinga",
      "Srisailam Temple",
      "Mallikarjuna Temple Guide",
      "Jyotirlinga Yatra",
      "Bhramaramba Temple",
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
        title="Grishneshwar Jyotirlinga – History, Ellora Caves, Darshan & Travel Guide"
        keywords={[
          "Grishneshwar Temple",
          "Ghushmeshwar Jyotirlinga",
          "Ellora Caves",
          "Grishneshwar Darshan",
        ]}
        description="Explore Grishneshwar Jyotirlinga near Ellora Caves in Maharashtra, one of the sacred 12
Jyotirlingas of Lord Shiva. Discover temple history, mythology, darshan timings, rituals, and
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
                    Grishneshwar Jyotirlinga – The Last and Sacred Jyotirlinga
                    of Lord Shiva
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
                    src={grishneswarJyotirlingImg}
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
                          Grishneshwar Jyotirlinga Temple in Maharashtra
                        </span>
                      </div>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Content */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                        <p>
                          Grishneshwar Jyotirlinga, also known as Ghushmeshwar
                          Jyotirlinga, is one of the most sacred among the 12
                          Jyotirlingas of Lord Shiva and is located near the
                          world-famous Ellora Caves in Maharashtra.
                        </p>

                        <p>
                          Situated in the Aurangabad district close to Verul
                          village, this divine temple is regarded as the twelfth
                          and final Jyotirlinga mentioned in the Shiva Purana.
                        </p>

                        <p>
                          Surrounded by ancient heritage, spiritual energy, and
                          remarkable temple architecture, Grishneshwar attracts
                          devotees from across India who come seeking peace,
                          devotion, prosperity, and divine blessings.
                        </p>

                        <p>
                          The temple is deeply associated with the power of
                          unwavering devotion and forgiveness.
                        </p>

                        <p>
                          The peaceful atmosphere of the temple, the sound of
                          Shiva chants, and the spiritual vibrations of the
                          region create a deeply calming and devotional
                          experience for pilgrims.
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
                        Why Grishneshwar Jyotirlinga is So Important
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Intro */}
                      <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-8">
                        Grishneshwar Jyotirlinga holds immense spiritual
                        significance because it symbolizes:
                      </p>

                      {/* Symbolism List */}
                      <ul className="space-y-5 mb-10 sm:mb-14 max-w-4xl">
                        {[
                          "The power of devotion",
                          "Forgiveness and compassion",
                          "Divine protection of devotees",
                          "Spiritual purification",
                          "Blessings of Lord Shiva",
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
                        Devotees believe that worshipping Lord Grishneshwar
                        helps:
                      </p>

                      {/* Benefits List */}
                      <ul className="space-y-5 mb-10 sm:mb-12 max-w-4xl">
                        {[
                          "Remove negativity and suffering",
                          "Bring peace and prosperity",
                          "Fulfill sincere wishes",
                          "Improve spiritual awareness",
                          "Strengthen devotion and faith",
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
                          seeking family harmony, inner peace, and divine grace.
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
                        The Divine Story Behind Grishneshwar Jyotirlinga
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Intro */}
                      <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-10">
                        The legend of Grishneshwar Jyotirlinga is described in
                        the Shiva Purana and represents devotion, patience,
                        forgiveness, and divine grace.
                      </p>

                      {/* Story Timeline */}
                      <div className="space-y-10">
                        {/* Story 1 */}
                        <div className="border-l-2 border-orange-200 pl-5 sm:pl-7">
                          <div className="flex items-center gap-3 mb-4">
                            <Heart className="w-5 h-5 text-orange-500 shrink-0" />

                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                              The Devoted Woman Ghushma
                            </h3>
                          </div>

                          <div className="space-y-5 text-slate-700 text-[16px] sm:text-lg leading-8 sm:leading-9 max-w-4xl">
                            <p>
                              Long ago, there lived a deeply devoted woman named
                              Ghushma who worshipped Lord Shiva with complete
                              faith every day.
                            </p>

                            <p>
                              She created 101 clay Shivalingas daily, worshipped
                              them sincerely, and immersed them in a nearby
                              lake.
                            </p>

                            <p>
                              Pleased with her devotion, Lord Shiva blessed
                              Ghushma with a son.
                            </p>
                          </div>
                        </div>

                        {/* Story 2 */}
                        <div className="border-l-2 border-orange-200 pl-5 sm:pl-7">
                          <div className="flex items-center gap-3 mb-4">
                            <Flame className="w-5 h-5 text-orange-500 shrink-0" />

                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                              Jealousy and Tragedy
                            </h3>
                          </div>

                          <div className="space-y-5 text-slate-700 text-[16px] sm:text-lg leading-8 sm:leading-9 max-w-4xl">
                            <p>
                              Over time, jealousy grew in the mind of Ghushma’s
                              sister.
                            </p>

                            <p>
                              Consumed by anger and envy, she killed Ghushma’s
                              son and threw his body into the same lake.
                            </p>

                            <p>
                              Despite the tragedy, Ghushma remained calm and
                              continued her worship with complete surrender and
                              faith in Lord Shiva.
                            </p>
                          </div>
                        </div>

                        {/* Story 3 */}
                        <div className="border-l-2 border-orange-200 pl-5 sm:pl-7">
                          <div className="flex items-center gap-3 mb-4">
                            <Mountain className="w-5 h-5 text-orange-500 shrink-0" />

                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                              Lord Shiva Appears
                            </h3>
                          </div>

                          <div className="space-y-5 text-slate-700 text-[16px] sm:text-lg leading-8 sm:leading-9 max-w-4xl">
                            <p>
                              Moved by her devotion and patience, Lord Shiva
                              appeared before Ghushma and restored her son to
                              life.
                            </p>

                            <p>
                              Instead of seeking punishment, Ghushma asked Lord
                              Shiva to forgive her sister.
                            </p>

                            <p>
                              Impressed by her compassion and devotion, Lord
                              Shiva agreed to stay there permanently as
                              Grishneshwar Jyotirlinga.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Conclusion */}
                      <div className="mt-10 sm:mt-12 border-l-4 border-orange-500 bg-orange-50 rounded-r-2xl px-5 py-5 sm:px-7 sm:py-6">
                        <p className="text-[17px] sm:text-lg md:text-xl leading-8 sm:leading-9 text-slate-800 font-medium">
                          The temple became a sacred symbol of devotion,
                          forgiveness, faith, and divine grace.
                        </p>
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
                          Grishneshwar represents devotion, patience,
                          compassion, and spiritual strength.
                        </p>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700">
                          Spiritually, the temple symbolizes:
                        </p>
                      </div>

                      {/* Symbolism List */}
                      <ul className="space-y-5 max-w-4xl mb-10 sm:mb-12">
                        {[
                          "Power of unwavering faith",
                          "Victory over negativity and jealousy",
                          "Compassion and forgiveness",
                          "Divine protection of devotees",
                          "Spiritual peace and inner stability",
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
                          The story of Ghushma teaches devotees the importance
                          of surrender, patience, faith, and trust in divine
                          grace.
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
                        Historical Importance of Grishneshwar Temple
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Intro */}
                      <div className="space-y-6 max-w-4xl mb-10">
                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700">
                          Grishneshwar Temple has remained an important
                          spiritual destination for centuries and holds deep
                          historical significance in Hindu tradition.
                        </p>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700">
                          The temple is mentioned in:
                        </p>
                      </div>

                      {/* Mention List */}
                      <ul className="space-y-5 max-w-4xl mb-10 sm:mb-12">
                        {[
                          "Shiva Purana",
                          "Ancient pilgrimage literature",
                          "Regional devotional traditions",
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

                      {/* Reconstruction */}
                      <div className="border-t border-slate-200 pt-8 sm:pt-10">
                        <div className="flex items-center gap-3 mb-5">
                          <Mountain className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0" />

                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                            Reconstruction of the Temple
                          </h3>
                        </div>

                        <div className="space-y-5 text-slate-700 text-[16px] sm:text-lg leading-8 sm:leading-9 max-w-4xl">
                          <p>
                            The temple faced destruction during medieval
                            invasions.
                          </p>

                          <p>
                            Later, it was rebuilt and restored by several Hindu
                            rulers and devotees who helped preserve its
                            spiritual importance.
                          </p>
                        </div>
                      </div>

                      {/* Ahilyabai */}
                      <div className="border-t border-slate-200 pt-8 sm:pt-10 mt-10 sm:mt-12">
                        <div className="flex items-center gap-3 mb-5">
                          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0" />

                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                            Maharani Ahilyabai Holkar
                          </h3>
                        </div>

                        <div className="space-y-5 text-slate-700 text-[16px] sm:text-lg leading-8 sm:leading-9 max-w-4xl">
                          <p>
                            The present temple structure was rebuilt in the 18th
                            century by Maharani Ahilyabai Holkar, who also
                            restored several important Hindu temples across
                            India.
                          </p>

                          <p>
                            Her contribution helped revive the spiritual and
                            cultural importance of Grishneshwar Jyotirlinga.
                          </p>
                        </div>
                      </div>
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
                        Architecture of Grishneshwar Temple
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Intro */}
                      <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-10">
                        Grishneshwar Temple reflects traditional South Indian
                        and Maratha architectural influences with beautiful
                        carvings, ancient stone structures, and a peaceful
                        spiritual atmosphere.
                      </p>

                      {/* Main Features */}
                      <div className="mb-10 sm:mb-12">
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-6">
                          Main Features
                        </h3>

                        <ul className="space-y-5 max-w-4xl">
                          {[
                            "Beautiful red stone construction",
                            "Intricate carvings and sculptures",
                            "Large temple pillars",
                            "Ancient sanctum housing the Jyotirlinga",
                            "Peaceful spiritual surroundings",
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
                          Temple Sculptures
                        </h3>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-8">
                          The temple walls contain beautiful carvings depicting:
                        </p>

                        <ul className="space-y-5 max-w-4xl mb-10">
                          {[
                            "Hindu deities",
                            "Mythological scenes",
                            "Floral patterns",
                            "Traditional artistic designs",
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

                        {/* Bottom Highlight */}
                        <div className="border-l-4 border-orange-500 bg-orange-50 rounded-r-2xl px-5 py-5 sm:px-7 sm:py-6">
                          <p className="text-[17px] sm:text-lg md:text-xl leading-8 sm:leading-9 text-slate-800 font-medium">
                            The architecture of Grishneshwar Temple creates a
                            deeply spiritual and visually impressive experience
                            for devotees and visitors.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section
                    id="ellora-connection"
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
                        Connection with Ellora Caves
                      </h2>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Intro */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl mb-12">
                        <p>
                          One of the unique aspects of Grishneshwar Jyotirlinga
                          is its proximity to the world-famous Ellora Caves.
                        </p>

                        <p>
                          The Ellora Caves are a UNESCO World Heritage Site and
                          contain:
                        </p>
                      </div>

                      {/* Ellora Features */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mb-16">
                        {[
                          "Hindu cave temples",
                          "Buddhist monasteries",
                          "Jain caves",
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

                      {/* Kailasa Temple */}
                      <div className="border-t border-slate-200 pt-10">
                        <div className="flex items-center gap-3 mb-7">
                          <Flame className="w-6 h-6 text-orange-500" />

                          <h3 className="text-3xl font-bold text-slate-900 font-display">
                            Kailasa Temple
                          </h3>
                        </div>

                        <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                          <p>
                            The nearby Kailasa Temple at Ellora is one of the
                            greatest rock-cut temples in the world and is
                            dedicated to Lord Shiva.
                          </p>

                          <p>
                            Many pilgrims visiting Grishneshwar also explore the
                            Ellora Caves as part of their spiritual and cultural
                            journey.
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
                        Important Rituals and Pujas at Grishneshwar Temple
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Jalabhishek */}
                      <div className="border-t border-slate-200 pt-8 sm:pt-10">
                        <div className="flex items-center gap-3 mb-5">
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0" />

                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                            Jalabhishek
                          </h3>
                        </div>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl">
                          Offering water to the sacred Jyotirlinga is considered
                          highly auspicious and spiritually beneficial.
                        </p>
                      </div>

                      {/* Rudrabhishek */}
                      <div className="border-t border-slate-200 pt-8 sm:pt-10 mt-10 sm:mt-12">
                        <div className="flex items-center gap-3 mb-5">
                          <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0" />

                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                            Rudrabhishek
                          </h3>
                        </div>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-6">
                          During Rudrabhishek, the Jyotirlinga is worshipped
                          with:
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

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl">
                          Devotees believe this ritual brings peace, prosperity,
                          and divine blessings.
                        </p>
                      </div>

                      {/* Maha Aarti */}
                      <div className="border-t border-slate-200 pt-8 sm:pt-10 mt-10 sm:mt-12">
                        <div className="flex items-center gap-3 mb-5">
                          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0" />

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
                          <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0" />

                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                            Shravan Special Worship
                          </h3>
                        </div>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl">
                          Special pujas and devotional programs are organized
                          during the holy month of Shravan, attracting thousands
                          of Shiva devotees.
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
                        Festivals Celebrated at Grishneshwar Jyotirlinga
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Festivals List */}
                      <div className="space-y-8">
                        {[
                          {
                            title: "Mahashivratri",
                            description:
                              "Celebrated with great devotion, Shiva worship, temple rituals, and spiritual festivities.",
                            icon: Flame,
                          },

                          {
                            title: "Shravan Month",
                            description:
                              "Thousands of devotees visit the temple during the holy month of Shravan for Shiva worship and special pujas.",
                            icon: Heart,
                          },

                          {
                            title: "Kartik Purnima",
                            description:
                              "A spiritually important festival celebrated with traditional rituals and devotional activities.",
                            icon: CheckCircle,
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
                        Best Time to Visit Grishneshwar Temple
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

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-6">
                          Winter offers pleasant weather and a comfortable
                          pilgrimage experience for devotees visiting the
                          temple.
                        </p>

                        {/* Winter Benefits */}
                        <ul className="space-y-4 max-w-4xl">
                          {[
                            "Pleasant weather",
                            "Comfortable pilgrimage experience",
                            "Ideal for sightseeing and darshan",
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
                            Monsoon Season
                          </h3>
                        </div>

                        <div className="space-y-5 max-w-4xl">
                          <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700">
                            The surrounding region becomes green and scenic
                            during monsoon, creating a beautiful spiritual
                            atmosphere.
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
                      How to Reach Mallikarjuna Jyotirlinga
                    </h2>

                    <p className="text-lg leading-8 text-slate-700 mb-6">
                      Mallikarjuna Temple is well connected by road and
                      accessible from major cities.
                    </p>

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
                          <li>Hyderabad Airport</li>
                          <li>Vijayawada Airport</li>
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
                          <li>Markapur Road</li>
                          <li>Nandyal</li>
                        </ul>
                      </div>

                      {/* By Road */}
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">
                          By Road
                        </h3>

                        <p className="text-slate-700 font-medium mb-3">
                          Regular buses and taxis are available from:
                        </p>

                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                          <li>Hyderabad</li>
                          <li>Vijayawada</li>
                          <li>Kurnool</li>
                          <li>Tirupati</li>
                        </ul>
                      </div>
                    </div>

                    <p className="text-lg leading-8 text-slate-700 mt-8">
                      The drive through the Nallamala forests is scenic and
                      spiritually calming.
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
                        Nearby Places to Visit Near Grishneshwar Jyotirlinga
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Places */}
                      <div className="space-y-8 max-w-4xl">
                        {[
                          {
                            title: "Ellora Caves",
                            description:
                              "A UNESCO World Heritage Site famous for ancient cave temples.",
                            icon: Mountain,
                          },

                          {
                            title: "Kailasa Temple",
                            description:
                              "A magnificent rock-cut temple dedicated to Lord Shiva.",
                            icon: Flame,
                          },

                          {
                            title: "Daulatabad Fort",
                            description:
                              "A historic fort known for its architecture and rich history.",
                            icon: Mountain,
                          },

                          {
                            title: "Bibi Ka Maqbara",
                            description:
                              "A famous Mughal-era monument located in Aurangabad.",
                            icon: CheckCircle,
                          },

                          {
                            title: "Panchakki",
                            description:
                              "A historic water mill and important spiritual site.",
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
                        Spiritual Benefits of Visiting Grishneshwar Jyotirlinga
                      </h2>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Intro */}
                      <p className="text-lg leading-9 text-slate-700 max-w-4xl mb-8">
                        Devotees believe that visiting Grishneshwar:
                      </p>

                      {/* Benefits List */}
                      <div className="space-y-5 max-w-4xl mb-12">
                        <div className="flex items-start gap-4">
                          <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                          <p className="text-slate-700 text-lg leading-8">
                            Brings peace and prosperity
                          </p>
                        </div>

                        <div className="flex items-start gap-4">
                          <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                          <p className="text-slate-700 text-lg leading-8">
                            Removes negativity and suffering
                          </p>
                        </div>

                        <div className="flex items-start gap-4">
                          <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                          <p className="text-slate-700 text-lg leading-8">
                            Strengthens devotion toward Lord Shiva
                          </p>
                        </div>

                        <div className="flex items-start gap-4">
                          <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                          <p className="text-slate-700 text-lg leading-8">
                            Improves spiritual awareness
                          </p>
                        </div>

                        <div className="flex items-start gap-4">
                          <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                          <p className="text-slate-700 text-lg leading-8">
                            Brings harmony and positivity in life
                          </p>
                        </div>
                      </div>

                      {/* Closing Text */}
                      <p className="text-lg leading-9 text-slate-700 max-w-4xl">
                        For many pilgrims, the temple becomes a deeply peaceful
                        and spiritually uplifting experience.
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
                        Plan Your Grishneshwar Jyotirlinga Yatra with Naman
                        Darshan
                      </h2>

                      {/* Intro */}
                      <p className="text-orange-50 text-[16px] sm:text-lg md:text-xl leading-8 sm:leading-9 max-w-4xl mb-10">
                        Experience a spiritually enriching journey to
                        Grishneshwar Jyotirlinga with complete travel assistance
                        and pilgrimage support.
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
                          memorable spiritual journey to Grishneshwar
                          Jyotirlinga.
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
                        Spiritual Significance of Grishneshwar Jyotirlinga
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Intro */}
                      <p className="text-slate-700 text-[16px] sm:text-lg md:text-xl leading-8 sm:leading-9 max-w-5xl mb-10">
                        Grishneshwar Jyotirlinga is one of the most spiritually
                        significant shrines dedicated to Lord Shiva.
                      </p>

                      {/* Content */}
                      <div className="space-y-10 max-w-5xl">
                        {/* Sacred Legend */}
                        <div className="border-b border-slate-100 pb-8">
                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-4">
                            Sacred Legend
                          </h3>

                          <p className="text-slate-700 text-[16px] sm:text-lg leading-8 sm:leading-9">
                            The sacred legend of Ghushma’s devotion and the
                            divine blessings of Lord Shiva make Grishneshwar a
                            deeply revered pilgrimage destination.
                          </p>
                        </div>

                        {/* Spiritual Atmosphere */}
                        <div className="border-b border-slate-100 pb-8">
                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-4">
                            Spiritual Atmosphere
                          </h3>

                          <p className="text-slate-700 text-[16px] sm:text-lg leading-8 sm:leading-9">
                            Located near the historic Ellora caves, the temple
                            offers a peaceful and spiritually uplifting
                            atmosphere for devotees.
                          </p>
                        </div>

                        {/* Message of Faith */}
                        <div className="border-b border-slate-100 pb-8">
                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-4">
                            Message of Faith
                          </h3>

                          <p className="text-slate-700 text-[16px] sm:text-lg leading-8 sm:leading-9">
                            Every aspect of Grishneshwar reflects devotion,
                            compassion, patience, forgiveness, and divine grace.
                          </p>
                        </div>

                        {/* Sacred Journey */}
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-4">
                            Sacred Journey
                          </h3>

                          <p className="text-slate-700 text-[16px] sm:text-lg leading-8 sm:leading-9">
                            Visiting Grishneshwar Jyotirlinga is not just a
                            pilgrimage but a sacred journey toward spiritual
                            peace, faith, and divine blessings.
                          </p>
                        </div>
                      </div>

                      {/* Closing */}
                      <div className="border-t border-slate-200 pt-8 mt-10">
                        <p className="text-slate-800 text-[17px] sm:text-lg md:text-xl leading-8 sm:leading-9 font-medium max-w-5xl">
                          For devotees of Lord Shiva, Grishneshwar Jyotirlinga
                          remains a timeless symbol of unwavering devotion and
                          spiritual enlightenment.
                        </p>
                      </div>
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
                          1. Where is Grishneshwar Jyotirlinga located?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          Grishneshwar Jyotirlinga is located near Ellora Caves
                          in <strong>Maharashtra</strong>.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-2"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          2. Why is Grishneshwar Jyotirlinga famous?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          It is famous as the{" "}
                          <strong>twelfth Jyotirlinga</strong> and for the
                          legend of devotee <strong>Ghushma.</strong>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-3"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          3. Which UNESCO site is located near Grishneshwar
                          Temple?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          The famous Ellora Caves are located nearby.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-4"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          4. What is the spiritual significance of Grishneshwar?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          The temple symbolizes <strong>devotion,</strong>{" "}
                          <strong>forgiveness,</strong> and{" "}
                          <strong>divine grace.</strong>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-5"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          5. What is the best time to visit Grishneshwar Temple?
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
                          6. Can devotees perform Rudrabhishek at Grishneshwar
                          Temple?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          Yes, devotees can participate in{" "}
                          <strong>Abhishekam</strong> and{" "}
                          <strong>Rudrabhishekam</strong>. Yes, devotees can
                          participate in <strong>Rudrabhishek</strong> and{" "}
                          <strong>special Shiva pujas</strong>.
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

export default GrishneshwarJyotirlinga;
