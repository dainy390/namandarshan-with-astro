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
import OmkareshwarJyotirlingImg from "@/assets/blogs/twelveJyotirling/OmkareshwarJyotirlinga.jpeg";
import CommentSection from "@/components/common/CommentSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OmkareshwarJyotirlinga = () => {
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

    headline: "Omkareshwar Jyotirlinga – History, Parikrama & Travel Guide",

    description:
      "Complete spiritual and travel guide for Omkareshwar Jyotirlinga in Madhya Pradesh including temple history, Om-shaped island, Narmada River, parikrama, rituals, festivals, and nearby attractions.",

    keywords: [
      "Omkareshwar Jyotirlinga",
      "Omkareshwar Temple",
      "Omkareshwar Mandir",
      "Omkareshwar",
      "Omkareshwar Madhya Pradesh",
      "Narmada River",
      "Omkareshwar Parikrama",
    ],

    datePublished: "2026-05-14",

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
        name: "Where is Omkareshwar Jyotirlinga located?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Omkareshwar Jyotirlinga is located on Mandhata Island in Madhya Pradesh.",
        },
      },

      {
        "@type": "Question",
        name: "Why is Omkareshwar famous?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Omkareshwar is famous for its connection with the sacred sound Om and the naturally Om-shaped island.",
        },
      },

      {
        "@type": "Question",
        name: "Which river flows near Omkareshwar?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "The sacred Narmada River flows around Omkareshwar Temple.",
        },
      },

      {
        "@type": "Question",
        name: "What is the best time to visit Omkareshwar?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "October to March is considered the best time to visit Omkareshwar.",
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
        title="Omkareshwar Jyotirlinga – History, Parikrama & Travel Guide"
        keywords={[
          "Omkareshwar Jyotirlinga",
          "Omkareshwar Temple",
          "Omkareshwar Mandir",
          "Omkareshwar",
          "Narmada River",
          "Omkareshwar Parikrama",
        ]}
        description="Discover Omkareshwar Jyotirlinga in Madhya Pradesh, one of the sacred 12 Jyotirlingas of Lord Shiva. Explore temple history, Om-shaped island, parikrama, darshan timings, rituals, and travel guide."
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
                    Omkareshwar Jyotirlinga – The Sacred Sound of Divine
                    Creation
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
                    src={OmkareshwarJyotirlingImg}
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
                          Omkareshwar Jyotirlinga Temple in Madhya Pradesh
                        </span>
                      </div>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Content */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                        <p>
                          Omkareshwar Jyotirlinga is one of the most sacred
                          among the 12 Jyotirlingas of Lord Shiva and is located
                          on the holy Mandhata Island in Madhya Pradesh.
                          Surrounded by the divine waters of the Narmada River,
                          this spiritually powerful temple is deeply associated
                          with the sacred sound “Om,” which is considered the
                          primordial vibration of the universe in Hindu
                          philosophy.
                        </p>

                        <p>
                          One of the most unique features of Omkareshwar is that
                          the island itself is naturally shaped like the sacred
                          Hindu symbol ॐ (Om) when viewed from above. This makes
                          the temple not only spiritually significant but also
                          symbolically connected with cosmic creation and divine
                          consciousness.
                        </p>

                        <p>
                          For centuries, saints, sages, yogis, and devotees have
                          visited Omkareshwar to meditate, worship Lord Shiva,
                          and experience spiritual peace.
                        </p>

                        <p>
                          The serene atmosphere of the Narmada River, the sacred
                          chants echoing through the temple complex, and the
                          mystical energy of the island together create a deeply
                          transformative spiritual experience.
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
                        Why Omkareshwar Jyotirlinga is So Important
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Intro */}
                      <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-8">
                        Omkareshwar Jyotirlinga is believed to represent the
                        cosmic sound from which the universe originated.
                      </p>

                      {/* Second Intro */}
                      <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-8">
                        According to Hindu spiritual traditions, “Om” is the
                        first vibration of creation and symbolizes:
                      </p>

                      {/* Benefits List */}
                      <ul className="space-y-5 mb-10 sm:mb-12 max-w-4xl">
                        {[
                          "Creation",
                          "Preservation",
                          "Destruction",
                          "Divine consciousness",
                          "Universal energy",
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

                      <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-8">
                        Devotees believe that worshipping at Omkareshwar helps:
                      </p>

                      {/* Benefits List */}
                      <ul className="space-y-5 mb-10 sm:mb-12 max-w-4xl">
                        {[
                          "Bring mental peace",
                          "Remove negativity",
                          "Improve spiritual awareness",
                          "Grant inner balance",
                          "Strengthen meditation and concentration",
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
                          The temple is especially important for seekers
                          interested in meditation, yoga, and spiritual growth.
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
                        The Divine Story Behind Kashi Omkareshwar Jyotirlinga
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Intro */}
                      <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-10">
                        Several sacred legends are associated with Omkareshwar
                        Jyotirlinga.
                      </p>

                      {/* Story Timeline */}
                      <div className="space-y-10">
                        {/* Story 1 */}
                        <div className="border-l-2 border-orange-200 pl-5 sm:pl-7">
                          <div className="flex items-center gap-3 mb-4">
                            <Heart className="w-5 h-5 text-orange-500 shrink-0" />

                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                              The Penance of King Mandhata
                            </h3>
                          </div>

                          <div className="space-y-5 text-slate-700 text-[16px] sm:text-lg leading-8 sm:leading-9 max-w-4xl">
                            <p>
                              According to ancient scriptures, there once lived
                              a great king named Mandhata from the Ikshvaku
                              dynasty.
                            </p>

                            <p>
                              King Mandhata was known for his devotion, wisdom,
                              and righteousness.
                            </p>

                            <p>
                              He performed severe penance and deep meditation on
                              the banks of the Narmada River to seek the
                              blessings of Lord Shiva.
                            </p>
                            <p>
                              Pleased with his devotion, Lord Shiva appeared
                              before him in divine form and manifested himself
                              as Omkareshwar Jyotirlinga.
                            </p>
                            <p>
                              The island where the temple stands later became
                              known as Mandhata Island.
                            </p>
                          </div>
                        </div>

                        {/* Story 2 */}
                        <div className="border-l-2 border-orange-200 pl-5 sm:pl-7">
                          <div className="flex items-center gap-3 mb-4">
                            <Flame className="w-5 h-5 text-orange-500 shrink-0" />

                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                              The Story of Vindhya Mountain
                            </h3>
                          </div>

                          <div className="space-y-5 text-slate-700 text-[16px] sm:text-lg leading-8 sm:leading-9 max-w-4xl">
                            <p>
                              Another popular legend is associated with the
                              Vindhya Mountain.
                            </p>

                            <p>
                              According to the Shiva Purana, the Vindhya
                              Mountain once felt inferior to the mighty
                              Himalayas.
                            </p>

                            <p>
                              Filled with a desire to become greater and more
                              powerful, Vindhya began intense penance and
                              worshipped Lord Shiva.
                            </p>
                            <p>
                              Moved by his devotion, Lord Shiva appeared and
                              blessed the mountain.
                            </p>
                            <p>
                              At the request of the gods and sages, Lord Shiva
                              remained there permanently in the form of
                              Omkareshwar Jyotirlinga.
                            </p>
                            <p>
                              This legend symbolizes the power of humility,
                              devotion, and surrender.
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
                        Spiritual Meaning of Omkareshwar Jyotirlinga
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Intro */}
                      <div className="space-y-6 max-w-4xl mb-10">
                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700">
                          Omkareshwar represents the sacred vibration of “Om,”
                          which is believed to be the sound of the universe
                          itself.
                        </p>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700">
                          Spiritually, the temple symbolizes:
                        </p>
                      </div>

                      {/* Symbolism List */}
                      <ul className="space-y-5 max-w-4xl mb-10 sm:mb-12">
                        {[
                          "Infinite cosmic energy",
                          "Unity of all existence",
                          "Inner awakening",
                          "Divine consciousness",
                          "Harmony between mind and soul",
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
                          Meditating at Omkareshwar is believed to help devotees
                          connect deeply with their inner self and experience
                          spiritual calmness.
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
                        Historical Importance of Omkareshwar Temple
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Intro */}
                      <div className="space-y-6 max-w-4xl mb-10">
                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700">
                          Omkareshwar Temple has been an important spiritual
                          center for thousands of years.
                        </p>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700">
                          The temple finds mention in:
                        </p>
                      </div>

                      {/* Mention List */}
                      <ul className="space-y-5 max-w-4xl mb-10 sm:mb-12">
                        {[
                          "Shiva Purana",
                          "Skanda Purana",
                          "Ancient pilgrimage texts",
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
                        Several rulers and dynasties contributed to the
                        development of the temple complex over time.
                      </p>
                      <p>
                        The region around Omkareshwar also became an important
                        center for spiritual learning, meditation, and Shaivism.
                      </p>

                      {/* Reconstruction */}
                      <div className="border-t border-slate-200 pt-8 sm:pt-10">
                        <div className="flex items-center gap-3 mb-5">
                          <Mountain className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0" />

                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                            Adi Shankaracharya Connection
                          </h3>
                        </div>

                        <div className="space-y-5 text-slate-700 text-[16px] sm:text-lg leading-8 sm:leading-9 max-w-4xl">
                          <p>
                            Omkareshwar is closely associated with Adi
                            Shankaracharya, one of the greatest Hindu
                            philosophers and spiritual reformers.
                          </p>

                          <p>
                            It is believed that Adi Shankaracharya met his guru
                            Govinda Bhagavatpada at Omkareshwar.
                          </p>
                          <p>
                            This makes the temple highly important for followers
                            of Advaita Vedanta philosophy.
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
                        Architecture of Omkareshwar Temple
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Intro */}
                      <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-10">
                        The architecture of Omkareshwar Temple reflects
                        traditional North Indian temple design.
                      </p>

                      {/* Main Features */}
                      <div className="mb-10 sm:mb-12">
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-6">
                          The temple complex features:
                        </h3>

                        <ul className="space-y-5 max-w-4xl">
                          {[
                            "Beautiful stone carvings",
                            "Ancient pillars",
                            "Intricate sculptures",
                            "Sacred sanctums",
                            "River-facing ghats",
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
                          Main Sanctum
                        </h3>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-8">
                          The sacred Jyotirlinga is installed in the inner
                          sanctum where devotees offer prayers, milk, water, and
                          Bilva leaves.
                        </p>

                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-6">
                          Temple Location
                        </h3>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-8">
                          The temple’s location amidst flowing river waters and
                          hills creates an extraordinary spiritual atmosphere.
                        </p>

                        {/* Bottom Highlight */}
                        <div className="border-l-4 border-orange-500 bg-orange-50 rounded-r-2xl px-5 py-5 sm:px-7 sm:py-6">
                          <p className="text-[17px] sm:text-lg md:text-xl leading-8 sm:leading-9 text-slate-800 font-medium">
                            Pilgrims often describe the experience as peaceful,
                            mystical, and spiritually energizing.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section
                    id="narmada--omkareshwar"
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
                        The Sacred Narmada River
                      </h2>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Intro */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl mb-12">
                        <p>
                          The Narmada River is considered one of the holiest
                          rivers in India.
                        </p>
                        <p>
                          Many devotees believe that taking a holy dip in the
                          Narmada before visiting Omkareshwar purifies the soul.
                        </p>
                      </div>

                      <div className="border-l-4 border-orange-500 bg-orange-50 rounded-r-2xl px-5 py-5 sm:px-7 sm:py-6">
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-6">
                          Narmada Parikrama
                        </h3>

                        <p className="text-[17px] sm:text-lg md:text-xl leading-8 sm:leading-9 text-slate-800 font-medium">
                          Omkareshwar is also an important stop for devotees
                          performing the sacred Narmada Parikrama — a spiritual
                          journey around the entire Narmada River.
                        </p>
                        <p className="text-[17px] sm:text-lg md:text-xl leading-8 sm:leading-9 text-slate-800 font-medium">
                          This pilgrimage is considered one of the most
                          spiritually rewarding journeys in Hinduism.
                        </p>
                      </div>

                      <div className="border-t border-slate-200 pt-10">
                        <div className="flex items-center gap-3 mb-7">
                          <Flame className="w-6 h-6 text-orange-500" />

                          <h3 className="text-3xl font-bold text-slate-900 font-display">
                            The Om-Shaped Island of Omkareshwar
                          </h3>
                        </div>

                        <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                          <p>
                            One of the most fascinating aspects of Omkareshwar
                            is the natural shape of the island.
                          </p>

                          <p>
                            When viewed from above, Mandhata Island resembles
                            the sacred symbol ॐ.
                          </p>
                          <p>
                            This unique geographical formation strengthens the
                            temple’s spiritual significance.
                          </p>

                          <p>
                            The island itself is considered sacred and devotees
                            often perform parikrama (circumambulation) around
                            it.
                          </p>

                          <p>The Omkareshwar Parikrama route passes through:</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mb-16">
                            {[
                              "Ancient temples",
                              "River ghats",
                              "Ashrams",
                              "Meditation spots",
                              "Sacred caves",
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
                        Important Rituals and Pujas at Omkareshwar Temple
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      <div className="border-t border-slate-200 pt-8 sm:pt-10 mt-10 sm:mt-12">
                        <div className="flex items-center gap-3 mb-5">
                          <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0" />

                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                            Abhishekam
                          </h3>
                        </div>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-6">
                          Devotees offer:
                        </p>

                        <ul className="space-y-4 max-w-4xl mb-8">
                          {[
                            "Water",
                            "Milk",
                            "Honey",
                            "Bilva leaves",
                            "Ghee",
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

                      <div className="border-t border-slate-200 pt-8 sm:pt-10 mt-10 sm:mt-12">
                        <div className="flex items-center gap-3 mb-5">
                          <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0" />

                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                            Rudrabhishek
                          </h3>
                        </div>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-6">
                          Rudrabhishek is considered highly auspicious at
                          Omkareshwar.
                        </p>
                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-6">
                          Devotees believe it helps:
                        </p>
                        {/* Offerings List */}
                        <ul className="space-y-4 max-w-4xl mb-8">
                          {[
                            "Remove obstacles",
                            "Bring spiritual peace",
                            "Fulfill wishes",
                            "Improve mental clarity",
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

                      <div className="border-t border-slate-200 pt-8 sm:pt-10 mt-10 sm:mt-12">
                        <div className="flex items-center gap-3 mb-5">
                          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0" />

                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                            Narmada Aarti
                          </h3>
                        </div>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl">
                          Evening aarti performed on the banks of the Narmada
                          River creates a deeply devotional atmosphere.
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
                        Festivals Celebrated at Omkareshwar Jyotirlinga
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Festivals List */}
                      <div className="space-y-8">
                        {[
                          {
                            title: "Mahashivratri",
                            description:
                              "Mahashivratri is celebrated with immense devotion and attracts thousands of devotees.",
                            icon: Flame,
                          },

                          {
                            title: "Shravan Month",
                            description:
                              "Special Shiva worship and devotional activities take place throughout Shravan.",
                            icon: Heart,
                          },

                          {
                            title: "Kartik Purnima",
                            description:
                              "Pilgrims gather in large numbers for holy river rituals and temple worship.",
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
                        Best Time to Visit Omkareshwar Temple
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Highlight */}
                      <div className="border-l-4 border-orange-500 bg-white rounded-r-2xl px-5 py-5 sm:px-7 sm:py-6 mb-10 sm:mb-12 max-w-4xl">
                        <p className="text-[17px] sm:text-lg md:text-xl leading-8 sm:leading-9 text-slate-800 font-medium">
                          he best time to visit Omkareshwar is between October
                          and March.
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
                            "Comfortable for sightseeing",
                            "Ideal for parikrama and temple visits",
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
                            The Narmada River and surrounding hills become
                            especially beautiful during monsoon.
                          </p>
                        </div>

                        <div className="border-l-4 border-orange-500 bg-orange-50 rounded-r-2xl px-5 py-5">
                          <p className="text-slate-800 text-[16px] sm:text-lg leading-8 font-medium">
                            However, heavy rains may sometimes affect travel.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section
                    id="how-to-reach"
                    className="bg-slate-50 p-6 rounded-xl"
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
                      How to Kashi Vishwanath Jyotirlinga
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
                          <li>Devi Ahilyabai Holkar Airport, Indore</li>
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
                          <li>Omkareshwar Road Railway Station</li>
                        </ul>
                      </div>

                      {/* By Road */}
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">
                          By Road
                        </h3>

                        <p className="text-slate-700 font-medium mb-3">
                          Omkareshwar is well connected by road from:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                          <li>Indore</li>
                          <li>Ujjain</li>
                          <li> Khandwa</li>
                          <li>Bhopal</li>
                        </ul>
                      </div>

                      <p className="text-slate-700 font-medium mb-3">
                        Omkareshwar is well connected by road from:
                      </p>
                    </div>
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
                        Nearby Places to Visit Near Omkareshwar
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Places */}
                      <div className="space-y-8 max-w-4xl">
                        {[
                          {
                            title: "Mamleshwar Temple",
                            description:
                              "Located across the river and considered spiritually connected to Omkareshwar Jyotirlinga.",
                            icon: Mountain,
                          },

                          {
                            title: "Siddhanath Temple",
                            description:
                              "An ancient temple known for its beautiful architecture.",
                            icon: CheckCircle,
                          },

                          {
                            title: "Narmada Ghats",
                            description:
                              "Popular for meditation, evening aarti, and spiritual relaxation.",
                            icon: Mountain,
                          },

                          {
                            title: "Govinda Bhagavatpada Cave",
                            description:
                              "Associated with Adi Shankaracharya’s spiritual journey.",
                            icon: Mountain,
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
                        Spiritual Benefits of Visiting Omkareshwar Jyotirlinga
                      </h2>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Intro */}
                      <p className="text-lg leading-9 text-slate-700 max-w-4xl mb-8">
                        Devotees believe that visiting Omkareshwar:
                      </p>

                      {/* Benefits List */}
                      <div className="space-y-5 max-w-4xl mb-12">
                        <div className="flex items-start gap-4">
                          <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                          <p className="text-slate-700 text-lg leading-8">
                            Brings inner peace
                          </p>
                        </div>

                        <div className="flex items-start gap-4">
                          <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                          <p className="text-slate-700 text-lg leading-8">
                            Removes negative energies
                          </p>
                        </div>

                        <div className="flex items-start gap-4">
                          <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                          <p className="text-slate-700 text-lg leading-8">
                            Enhances spiritual awareness
                          </p>
                        </div>

                        <div className="flex items-start gap-4">
                          <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                          <p className="text-slate-700 text-lg leading-8">
                            Improves meditation and concentration
                          </p>
                        </div>

                        <div className="flex items-start gap-4">
                          <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                          <p className="text-slate-700 text-lg leading-8">
                            Strengthens devotion to Lord Shiva
                          </p>
                        </div>
                      </div>

                      {/* Closing Text */}
                      <p className="text-lg leading-9 text-slate-700 max-w-4xl">
                        The sacred vibration of Omkareshwar is believed to
                        deeply calm the mind and soul.
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
                        Plan Your Omkareshwar Jyotirlinga Yatra with Naman
                        Darshan
                      </h2>

                      {/* Intro */}
                      <p className="text-orange-50 text-[16px] sm:text-lg md:text-xl leading-8 sm:leading-9 max-w-4xl mb-10">
                        Experience a spiritually peaceful pilgrimage to
                        Omkareshwar Jyotirlinga with complete travel assistance
                        and darshan support.
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
                          spiritually enriching journey to Omkareshwar.
                        </p>

                        <Link to="/darshan/omkareshwar-jyotirlinga-vipdarshan">
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
                        Omkareshwar Jyotirlinga is one of the most spiritually
                        calming and symbolically powerful shrines dedicated to
                        Lord Shiva.
                      </p>

                      <p className="text-slate-700 text-[16px] sm:text-lg md:text-xl leading-8 sm:leading-9 max-w-5xl mb-10">
                        The sacred Om-shaped island, the divine energy of the
                        Narmada River, and the cosmic significance of the sound
                        “Om” together create an extraordinary spiritual
                        atmosphere.
                      </p>
                      <p className="text-slate-700 text-[16px] sm:text-lg md:text-xl leading-8 sm:leading-9 max-w-5xl mb-10">
                        For devotees and spiritual seekers alike, visiting
                        Omkareshwar is not just a pilgrimage but a journey
                        toward inner peace, meditation, and divine
                        consciousness.
                      </p>
                      {/* Closing */}
                      <div className="border-t border-slate-200 pt-8 mt-10">
                        <p className="text-slate-800 text-[17px] sm:text-lg md:text-xl leading-8 sm:leading-9 font-medium max-w-5xl">
                          The sacred vibrations of Lord Shiva continue to bless
                          millions of pilgrims who visit this holy Jyotirlinga
                          every year.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="faqs">
                    <h2 className="text-3xl font-display font-bold text-stone-900 mb-6">
                      Frequently Asked Questions About Kashi Vishwanath
                      Jyotirlinga
                    </h2>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem
                        value="item-1"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          1. Where is Omkareshwar Jyotirlinga located?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          Kashi Vishwanath Temple is located in{" "}
                          <strong>Varanasi</strong>,{" "}
                          <strong>Uttar Pradesh</strong>. Omkareshwar is located
                          in <strong>Madhya Pradesh</strong> on{" "}
                          <strong>Mandhata Island</strong> in the{" "}
                          <strong>Narmada River</strong>.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-2"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          2. Why is Omkareshwar famous?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          It is famous for its connection with the sacred sound{" "}
                          <strong>“Om”</strong> and the{" "}
                          <strong>Om-shaped island</strong>.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-3"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          3. Which river flows near Omkareshwar?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          The sacred Narmada River flows around the temple
                          island.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-4"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          4. What is the best time to visit Omkareshwar?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          October to March is considered ideal.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-5"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          5. Is Omkareshwar associated with Adi Shankaracharya?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          Yes, Omkareshwar is closely connected with{" "}
                          <strong>Adi Shankaracharya</strong> and{" "}
                          <strong>Advaita philosophy</strong>.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-6"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          6. Can devotees perform parikrama at Omkareshwar?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          Yes, devotees perform sacred island parikrama
                          regularly.
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

export default OmkareshwarJyotirlinga;
