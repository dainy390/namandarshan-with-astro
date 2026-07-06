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
import kashiVishwanathImg from "@/assets/blogs/twelveJyotirling/KashiVishwanathJyotirlinga.jpeg";
import CommentSection from "@/components/common/CommentSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const KashiVishwanathJyotirlinga = () => {
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
    headline:
      "Kashi Vishwanath Jyotirlinga – History, Ganga Aarti & Travel Guide",

    description:
      "Complete spiritual and travel guide for Kashi Vishwanath Jyotirlinga in Varanasi including history, Ganga Aarti, rituals, spiritual significance, festivals, and nearby attractions.",

    keywords: [
      "Kashi Vishwanath",
      "Kashi Vishwanath Temple",
      "Kashi Vishwanath Jyotirlinga",
      "Varanasi Temple",
      "Ganga Aarti",
      "Kashi Darshan",
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
        title="Kashi Vishwanath Jyotirlinga – History, Darshan, Ganga Aarti & Travel Guide"
        keywords={[
          "Kashi Vishwanath",
          "Kashi Vishwanath Temple",
          "Kashi Vishwanath Jyotirlinga",
          "Varanasi Temple",
          "Ganga Aarti",
        ]}
        description="Explore Kashi Vishwanath Jyotirlinga in Varanasi, one of the sacred 12 Jyotirlingas of Lord Shiva. Discover temple history, Ganga Aarti, darshan timings, spiritual significance, and travel guide."
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
                    Kashi Vishwanath Jyotirlinga – The Eternal City of Lord
                    Shiva and Liberation
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
                    src={kashiVishwanathImg}
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
                          Kashi Vishwanath Jyotirlinga Temple in Varanasi
                        </span>
                      </div>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Content */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                        <p>
                          Kashi Vishwanath Jyotirlinga is one of the most sacred
                          and spiritually significant among the 12 Jyotirlingas
                          of Lord Shiva. Located in the ancient city of Varanasi
                          on the western banks of the holy River Ganga in Uttar
                          Pradesh, this divine temple is regarded as one of the
                          holiest pilgrimage destinations in Hinduism.
                        </p>

                        <p>
                          The name “Vishwanath” means “Lord of the Universe.” In
                          this form, Lord Shiva is worshipped as the supreme
                          ruler of creation, protector of devotees, and giver of
                          liberation.
                        </p>

                        <p>
                          Kashi, also known as Varanasi or Banaras, is believed
                          to be the oldest living city in the world and the
                          spiritual capital of India. According to Hindu belief,
                          Lord Shiva himself chose Kashi as his eternal abode.
                        </p>

                        <p>
                          For thousands of years, saints, sages, scholars,
                          yogis, and devotees have visited Kashi Vishwanath
                          Temple seeking spiritual wisdom, divine blessings, and
                          liberation from the cycle of birth and death.
                        </p>

                        <p>
                          The spiritual atmosphere of the temple, the sacred
                          energy of the Ganga, the sound of temple bells, and
                          the chants of “Har Har Mahadev” together create an
                          unforgettable spiritual experience.
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
                        Why Kashi Vishwanath Jyotirlinga is So Important
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Intro */}
                      <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-8">
                        Kashi Vishwanath Jyotirlinga holds immense significance
                        because it is believed to grant moksha, or liberation
                        from the cycle of rebirth.
                      </p>

                      {/* Second Intro */}
                      <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-8">
                        Devotees believe that worshipping Lord Vishwanath helps:
                      </p>

                      {/* Benefits List */}
                      <ul className="space-y-5 mb-10 sm:mb-12 max-w-4xl">
                        {[
                          "Remove sins from past lives",
                          "Grant spiritual awakening",
                          "Bring peace and divine blessings",
                          "Help attain liberation (moksha)",
                          "Strengthen devotion toward Lord Shiva",
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
                        According to Hindu scriptures, Lord Shiva personally
                        protects the city of Kashi and guides the souls of
                        devotees toward salvation.
                      </p>

                      {/* Closing Highlight */}
                      <div className="border-l-4 border-orange-500 bg-orange-50 rounded-r-2xl px-5 py-5 sm:px-7 sm:py-6">
                        <p className="text-[17px] sm:text-lg md:text-xl leading-8 sm:leading-9 text-slate-800 font-medium">
                          The temple is therefore regarded as one of the most
                          spiritually powerful places in India.
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
                        The Divine Story Behind Kashi Vishwanath Jyotirlinga
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Intro */}
                      <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-10">
                        Several sacred legends are associated with Kashi
                        Vishwanath.
                      </p>

                      {/* Story Timeline */}
                      <div className="space-y-10">
                        {/* Story 1 */}
                        <div className="border-l-2 border-orange-200 pl-5 sm:pl-7">
                          <div className="flex items-center gap-3 mb-4">
                            <Heart className="w-5 h-5 text-orange-500 shrink-0" />

                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                              Lord Shiva Chooses Kashi as His Eternal Home
                            </h3>
                          </div>

                          <div className="space-y-5 text-slate-700 text-[16px] sm:text-lg leading-8 sm:leading-9 max-w-4xl">
                            <p>
                              According to the Shiva Purana, Lord Shiva and
                              Goddess Parvati once decided to leave Mount
                              Kailash and reside permanently in Kashi to bless
                              humanity.
                            </p>

                            <p>
                              The city of Kashi became Lord Shiva’s sacred abode
                              and a center of divine wisdom, spirituality, and
                              liberation.
                            </p>

                            <p>
                              It is believed that Kashi rests upon the trident
                              (Trishul) of Lord Shiva, which protects the city
                              from destruction.
                            </p>
                            <p>
                              Even during cosmic dissolution, Kashi is believed
                              to remain spiritually protected.
                            </p>
                          </div>
                        </div>

                        {/* Story 2 */}
                        <div className="border-l-2 border-orange-200 pl-5 sm:pl-7">
                          <div className="flex items-center gap-3 mb-4">
                            <Flame className="w-5 h-5 text-orange-500 shrink-0" />

                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                              The Infinite Pillar of Light
                            </h3>
                          </div>

                          <div className="space-y-5 text-slate-700 text-[16px] sm:text-lg leading-8 sm:leading-9 max-w-4xl">
                            <p>
                              Another famous legend associated with Kashi
                              Vishwanath is the story of the infinite
                              Jyotirlinga.
                            </p>

                            <p>
                              Once, Lord Brahma and Lord Vishnu argued about who
                              was supreme.
                            </p>

                            <p>
                              At that moment, an endless pillar of divine light
                              appeared before them.
                            </p>
                            <p>
                              Neither Brahma nor Vishnu could find the beginning
                              or end of the pillar.
                            </p>
                            <p>This pillar of light was Lord Shiva himself.</p>
                            <p>
                              One of the sacred places where this divine energy
                              manifested is believed to be Kashi Vishwanath.
                            </p>
                            <p>
                              Thus, the temple symbolizes the infinite and
                              eternal nature of Lord Shiva.
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
                        Spiritual Meaning of Kashi Vishwanath Jyotirlinga
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Intro */}
                      <div className="space-y-6 max-w-4xl mb-10">
                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700">
                          Kashi Vishwanath represents divine knowledge,
                          liberation, and eternal consciousness.
                        </p>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700">
                          Spiritually, the temple symbolizes:
                        </p>
                      </div>

                      {/* Symbolism List */}
                      <ul className="space-y-5 max-w-4xl mb-10 sm:mb-12">
                        {[
                          "Liberation from worldly attachment",
                          "Divine wisdom and awareness",
                          "Eternal presence of Lord Shiva",
                          "Freedom from the cycle of rebirth",
                          "Spiritual awakening and enlightenment",
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
                          Devotees believe that dying in Kashi grants liberation
                          because Lord Shiva himself guides the soul toward
                          salvation.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* The Sacred Connection Between Kashi and Moksha*/}
                  <section
                    id="moksha-connection"
                    className="rounded-2xl md:rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
                      {/* Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-xs sm:text-sm font-semibold mb-5">
                        <Flame className="w-4 h-4" />
                        Liberation & Spirituality
                      </div>

                      {/* Heading */}
                      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6 max-w-5xl">
                        The Sacred Connection Between Kashi and Moksha
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Intro */}
                      <div className="space-y-6 max-w-4xl mb-10">
                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700">
                          Kashi holds a unique and deeply sacred place in Hindu
                          spirituality.
                        </p>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700">
                          According to sacred traditions, when a devotee takes
                          their last breath in Kashi, Lord Shiva whispers the
                          sacred Taraka Mantra into their ears.
                        </p>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700">
                          This divine blessing is believed to help the soul
                          attain liberation from the cycle of birth and death.
                        </p>
                      </div>

                      {/* Spiritual Points */}
                      <ul className="space-y-5 max-w-4xl mb-10 sm:mb-12">
                        {[
                          "Kashi is considered the gateway to moksha",
                          "Many devotees spend their final years in Varanasi in prayer and meditation",
                          "The city is deeply associated with spiritual liberation",
                          "Lord Shiva is believed to guide souls toward salvation",
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

                      {/* Manikarnika */}
                      <div className="border-t border-slate-200 pt-8 sm:pt-10">
                        <div className="flex items-center gap-3 mb-5">
                          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0" />

                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                            Manikarnika Ghat
                          </h3>
                        </div>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl">
                          The sacred cremation ghats of Kashi, especially
                          Manikarnika Ghat, are deeply connected with the
                          concept of liberation and eternal peace.
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
                        Historical Importance of Kashi Vishwanath Temple
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Intro */}
                      <div className="space-y-6 max-w-4xl mb-10">
                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700">
                          Kashi Vishwanath Temple has a long and remarkable
                          history.
                        </p>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700">
                          The temple is mentioned in:
                        </p>
                      </div>

                      {/* Mention List */}
                      <ul className="space-y-5 max-w-4xl mb-10 sm:mb-12">
                        {[
                          "Shiva Purana",
                          "Skanda Purana",
                          "Ancient Sanskrit texts",
                          "Hindu pilgrimage literature",
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
                            Destruction and Reconstruction
                          </h3>
                        </div>

                        <div className="space-y-5 text-slate-700 text-[16px] sm:text-lg leading-8 sm:leading-9 max-w-4xl">
                          <p>
                            Throughout history, the temple faced destruction
                            multiple times during invasions.
                          </p>

                          <p>
                            However, devotees rebuilt the temple repeatedly
                            because of its immense spiritual importance.
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
                            The present temple structure was rebuilt in 1780 by
                            Maharani Ahilyabai Holkar of Indore.
                          </p>

                          <p>
                            Her contribution helped restore the spiritual glory
                            of Kashi Vishwanath.
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-slate-200 pt-8 sm:pt-10 mt-10 sm:mt-12">
                        <div className="flex items-center gap-3 mb-5">
                          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0" />

                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                            Kashi Vishwanath Corridor
                          </h3>
                        </div>

                        <div className="space-y-5 text-slate-700 text-[16px] sm:text-lg leading-8 sm:leading-9 max-w-4xl">
                          <p>
                            In recent years, the Kashi Vishwanath Corridor
                            project transformed the temple surroundings and
                            improved access between the temple and the ghats of
                            the Ganga.
                          </p>

                          <p>
                            Today, the corridor has become one of the most
                            important spiritual infrastructure projects in
                            India.
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
                        Architecture of Kashi Vishwanath Temple
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Intro */}
                      <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-10">
                        Kashi Vishwanath Temple reflects traditional North
                        Indian temple architecture.
                      </p>

                      {/* Main Features */}
                      <div className="mb-10 sm:mb-12">
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-6">
                          The temple complex includes:
                        </h3>

                        <ul className="space-y-5 max-w-4xl">
                          {[
                            "Golden domes",
                            "Sacred sanctums",
                            "Beautiful carvings",
                            "Temple courtyards",
                            "Multiple shrines",
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
                          Golden Spire
                        </h3>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-8">
                          The temple’s gold-plated spire and domes are among its
                          most recognizable features.
                        </p>

                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-6">
                          Main Sanctum
                        </h3>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl mb-8">
                          The sanctum houses the sacred Jyotirlinga worshipped
                          daily by thousands of devotees.
                        </p>

                        {/* Bottom Highlight */}
                        <div className="border-l-4 border-orange-500 bg-orange-50 rounded-r-2xl px-5 py-5 sm:px-7 sm:py-6">
                          <p className="text-[17px] sm:text-lg md:text-xl leading-8 sm:leading-9 text-slate-800 font-medium">
                            The atmosphere inside the temple remains deeply
                            devotional throughout the day.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section
                    id="ganga--kashi-Vishwanath"
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
                        The Sacred Ganga and Kashi Vishwanath
                      </h2>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Intro */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl mb-12">
                        <p>
                          The River Ganga flowing beside Kashi greatly enhances
                          the spiritual significance of the temple.
                        </p>
                      </div>

                      {/* Ellora Features */}
                      <p>Devotees often:</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mb-16">
                        {[
                          "Take a holy dip in the Ganga",
                          "Perform ancestral rituals",
                          "Offer prayers at the ghats",
                          "Attend Ganga Aarti",
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

                      <div className="border-l-4 border-orange-500 bg-orange-50 rounded-r-2xl px-5 py-5 sm:px-7 sm:py-6">
                        <p className="text-[17px] sm:text-lg md:text-xl leading-8 sm:leading-9 text-slate-800 font-medium">
                          The connection between Lord Shiva and Mother Ganga is
                          deeply rooted in Hindu spirituality.
                        </p>
                      </div>

                      {/* Ganga Aarti */}
                      <div className="border-t border-slate-200 pt-10">
                        <div className="flex items-center gap-3 mb-7">
                          <Flame className="w-6 h-6 text-orange-500" />

                          <h3 className="text-3xl font-bold text-slate-900 font-display">
                            The Famous Ganga Aarti of Varanasi
                          </h3>
                        </div>

                        <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                          <p>
                            One of the most mesmerizing spiritual experiences
                            near Kashi Vishwanath Temple is the evening Ganga
                            Aarti.
                          </p>

                          <p>
                            Held at Dashashwamedh Ghat, the ceremony includes:
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mb-16">
                            {[
                              "Vedic chants",
                              "Fire lamps",
                              "Conch sounds",
                              "Devotional music",
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
                          <div className="border-l-4 border-orange-500 bg-orange-50 rounded-r-2xl px-5 py-5 sm:px-7 sm:py-6">
                            <p className="text-[17px] sm:text-lg md:text-xl leading-8 sm:leading-9 text-slate-800 font-medium">
                              Thousands of devotees and tourists gather every
                              evening to witness this grand spiritual ritual.
                            </p>
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
                        Important Rituals and Pujas at Kashi Vishwanath Temple
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Jalabhishek */}
                      <div className="border-t border-slate-200 pt-8 sm:pt-10">
                        <div className="flex items-center gap-3 mb-5">
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0" />

                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                            Mangala Aarti
                          </h3>
                        </div>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl">
                          Performed early in the morning in a deeply spiritual
                          atmosphere.
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
                          One of the most important rituals performed for Lord
                          Shiva.
                        </p>

                        {/* Offerings List */}
                        <ul className="space-y-4 max-w-4xl mb-8">
                          {[
                            "Water",
                            "Milk",
                            "Honey",
                            "Bilva leaves",
                            "Sandalwood",
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
                            Sapta Rishi Aarti
                          </h3>
                        </div>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl">
                          An important evening ritual dedicated to Lord
                          Vishwanath.
                        </p>
                      </div>

                      <div className="border-t border-slate-200 pt-8 sm:pt-10 mt-10 sm:mt-12">
                        <div className="flex items-center gap-3 mb-5">
                          <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0" />

                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                            Shringar Aarti
                          </h3>
                        </div>

                        <p className="text-[16px] sm:text-lg leading-8 sm:leading-9 text-slate-700 max-w-4xl">
                          Performed with elaborate decoration of the
                          Jyotirlinga.
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
                        Festivals Celebrated at Kashi Vishwanath Jyotirlinga
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Festivals List */}
                      <div className="space-y-8">
                        {[
                          {
                            title: "Mahashivratri",
                            description:
                              "Celebrated with grand processions, devotional singing, and night-long worship.",
                            icon: Flame,
                          },

                          {
                            title: "Shravan Month",
                            description:
                              "Special Shiva worship and spiritual activities are organized throughout the holy month.",
                            icon: Heart,
                          },

                          {
                            title: "Kartik Purnima",
                            description:
                              "Another major spiritual festival celebrated with devotion.",
                            icon: CheckCircle,
                          },
                          {
                            title: "Dev Deepawali",
                            description:
                              "A spectacular festival where the ghats of Varanasi are illuminated with thousands of lamps.",
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
                        Best Time to Visit Kashi Vishwanath Temple
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Highlight */}
                      <div className="border-l-4 border-orange-500 bg-white rounded-r-2xl px-5 py-5 sm:px-7 sm:py-6 mb-10 sm:mb-12 max-w-4xl">
                        <p className="text-[17px] sm:text-lg md:text-xl leading-8 sm:leading-9 text-slate-800 font-medium">
                          The best time to visit Kashi Vishwanath is from
                          October to March.
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
                            "Comfortable for Ganga Aarti experience",
                            "Ideal for sightseeing and temple visits",
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
                            Mahashivratri and Dev Deepawali are spiritually
                            vibrant but crowded.
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
                          <li>
                            Lal Bahadur Shastri International Airport, Varanasi
                          </li>
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
                          <li>Varanasi Junction</li>
                          <li>Kashi Railway Station</li>
                        </ul>
                      </div>

                      {/* By Road */}
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">
                          By Road
                        </h3>

                        <p className="text-slate-700 font-medium mb-3">
                          Varanasi is well connected by road with major cities
                          across India.
                        </p>

                        <p className="text-slate-700 font-medium mb-3">
                          Local transportation includes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                          <li>Auto-rickshaws</li>
                          <li>Taxis</li>
                          <li> E-rickshaws</li>
                          <li>Boats on the Ganga</li>
                        </ul>
                      </div>
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
                        Nearby Places to Visit Near Kashi Vishwanath
                      </h2>

                      {/* Divider */}
                      <div className="w-16 sm:w-20 h-1 bg-orange-500 rounded-full mb-8 sm:mb-10" />

                      {/* Places */}
                      <div className="space-y-8 max-w-4xl">
                        {[
                          {
                            title: "Dashashwamedh Ghat",
                            description: "Famous for the evening Ganga Aarti.",
                            icon: Mountain,
                          },

                          {
                            title: "Manikarnika Ghat",
                            description:
                              "One of the holiest cremation ghats in Hinduism.",
                            icon: Mountain,
                          },

                          {
                            title: "Assi Ghat",
                            description:
                              "Popular for spiritual activities and morning prayers.",
                            icon: Mountain,
                          },

                          {
                            title: "Sarnath",
                            description:
                              "A sacred Buddhist site where Lord Buddha gave his first sermon.",
                            icon: CheckCircle,
                          },

                          {
                            title: "Sankat Mochan Hanuman Temple",
                            description:
                              "A famous temple dedicated to Lord Hanuman.",
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
                        Spiritual Benefits of Visiting Kashi Vishwanath
                        Jyotirlinga
                      </h2>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Intro */}
                      <p className="text-lg leading-9 text-slate-700 max-w-4xl mb-8">
                        Devotees believe that visiting Kashi Vishwanath::
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
                            Brings spiritual wisdom and peace
                          </p>
                        </div>

                        <div className="flex items-start gap-4">
                          <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                          <p className="text-slate-700 text-lg leading-8">
                            Helps attain moksha
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
                            Creates inner transformation and awareness
                          </p>
                        </div>
                      </div>

                      {/* Closing Text */}
                      <p className="text-lg leading-9 text-slate-700 max-w-4xl">
                        For many pilgrims, visiting Kashi becomes a
                        life-changing spiritual experience.
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
                        Plan Your Kashi Vishwanath Jyotirlinga Yatra with Naman
                        Darshan
                      </h2>

                      {/* Intro */}
                      <p className="text-orange-50 text-[16px] sm:text-lg md:text-xl leading-8 sm:leading-9 max-w-4xl mb-10">
                        Experience a spiritually enriching pilgrimage to Kashi
                        Vishwanath Jyotirlinga with complete travel assistance
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
                          Naman Darshan helps devotees experience a peaceful and
                          memorable spiritual journey to Kashi.
                        </p>

                        <Link to="/darshan/kashi-vishwanath-temple-vipdarshan">
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
                        Kashi Vishwanath Jyotirlinga is one of the most sacred
                        and spiritually transformative shrines dedicated to Lord
                        Shiva.
                      </p>

                      <p className="text-slate-700 text-[16px] sm:text-lg md:text-xl leading-8 sm:leading-9 max-w-5xl mb-10">
                        The divine energy of Lord Vishwanath, the sacred
                        presence of Mother Ganga, and the eternal spirituality
                        of Kashi together create an experience unlike any other
                        pilgrimage destination in the world.
                      </p>
                      <p className="text-slate-700 text-[16px] sm:text-lg md:text-xl leading-8 sm:leading-9 max-w-5xl mb-10">
                        From ancient legends to modern spiritual devotion, Kashi
                        continues to guide millions of devotees toward wisdom,
                        peace, and liberation.
                      </p>
                      {/* Closing */}
                      <div className="border-t border-slate-200 pt-8 mt-10">
                        <p className="text-slate-800 text-[17px] sm:text-lg md:text-xl leading-8 sm:leading-9 font-medium max-w-5xl">
                          For devotees of Lord Shiva, visiting Kashi Vishwanath
                          is not just a pilgrimage but a sacred journey toward
                          eternal truth, inner awakening, and divine connection.
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
                          1. Where is Kashi Vishwanath Jyotirlinga located?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          Kashi Vishwanath Temple is located in{" "}
                          <strong>Varanasi</strong>,{" "}
                          <strong>Uttar Pradesh</strong>.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-2"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          2. Why is Kashi Vishwanath famous?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          It is one of the 12 Jyotirlingas and is associated
                          with liberation <strong>(moksha)</strong>.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-3"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          3. Which river flows near Kashi Vishwanath?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          The sacred River Ganga flows beside the temple.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-4"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          4. What is the best time to visit Kashi Vishwanath?
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
                          5. What is the significance of dying in Kashi?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          It is believed that Lord Shiva grants liberation to
                          souls who die in Kashi.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-6"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          6. Can devotees attend Ganga Aarti?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          Yes, devotees and tourists can attend the evening{" "}
                          <strong>Ganga Aarti</strong> daily.
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

export default KashiVishwanathJyotirlinga;
