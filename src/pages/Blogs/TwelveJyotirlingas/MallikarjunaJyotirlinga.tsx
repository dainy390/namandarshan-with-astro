import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, ArrowBigRight } from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
import malikaArjunImg from "@/assets/blogs/twelveJyotirling/Mallikarjuna_Jyotirlinga.jpeg";
import CommentSection from "@/components/common/CommentSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MallikarjunaJyotirlingaBlog = () => {

  const tableOfContents = [
    {
      id: "intro",
      title: "Introduction",
    },

    {
      id: "importance",
      title: "Importance of Mallikarjuna Jyotirlinga",
    },

    {
      id: "legend",
      title: "Divine Story & Legend",
    },

    {
      id: "meaning-of-Mallikaarjuna",
      title: "Meaning of Mallikarjuna",
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
      id: "krishna-river-srisailam-hills",
      title: "Krishna River & Srisailam Hills",
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
      title: "How to Reach Srisailam",
    },

    {
      id: "places-to-visit",
      title: "Nearby Places to Visit",
    },

    {
      id: "spiritual-benefits",
      title: "Spiritual Benefits",
    },

    {
      id: "conclusion",
      title: "Conclusion",
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
        title="Mallikarjuna Jyotirlinga Srisailam Darshan Guide"
        keywords={[
          "Mallikarjuna Jyotirlinga",
          "Srisailam Temple",
          "Srisailam Darshan",
          "Jyotirlinga Yatra",
        ]}
        description="Explore the spiritual significance, rituals, history, darshan guide, and travel information for Mallikarjuna Jyotirlinga in Srisailam."
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
                    Mallikarjuna Jyotirlinga – The Sacred Abode of Shiva and
                    Parvati
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
                    src={malikaArjunImg}
                    alt="Mallikarjuna Jyotirlinga Temple"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 md:p-10 space-y-8 text-lg leading-relaxed text-slate-700">
                  <section
                    id="Introduction"
                    className="relative overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-white via-orange-50/40 to-white p-8 md:p-12 shadow-sm"
                  >
                    {/* Decorative Blur Effects */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-orange-200/20 blur-3xl rounded-full" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-100/30 blur-2xl rounded-full" />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Small Tag */}
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-5">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        Sacred Jyotirlinga
                      </div>

                      {/* Heading */}
                      <h2
                        id="intro"
                        className="text-4xl md:text-5xl leading-tight font-bold text-slate-900 font-display mb-6"
                      >
                        Mallikarjuna Jyotirlinga in{" "}
                        <span className="text-orange-600">Srisailam</span>
                      </h2>

                      {/* Decorative Divider */}
                      <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mb-8" />

                      {/* Paragraph */}
                      <div className="space-y-6 text-[17px] md:text-lg leading-8 text-slate-700">
                        <p>
                          Mallikarjuna Jyotirlinga is one of the most sacred and
                          spiritually significant among the 12 Jyotirlingas of
                          Lord Shiva. Located in the holy town of Srisailam in
                          Andhra Pradesh, this divine temple is beautifully
                          situated amidst the Nallamala Hills on the banks of
                          the Krishna River.
                        </p>

                        <p>
                          Mallikarjuna is unique because it is one of the few
                          sacred places where both Lord Shiva and Goddess
                          Parvati are worshipped together in their divine forms.
                          Lord Shiva is worshipped here as Mallikarjuna, while
                          Goddess Parvati is worshipped as Goddess Bhramaramba.
                        </p>

                        <p>
                          The temple is not only a Jyotirlinga but also one of
                          the 18 Shakti Peethas, making it an exceptionally
                          powerful spiritual destination for devotees.
                        </p>

                        <p>
                          For centuries, saints, sages, pilgrims, and spiritual
                          seekers have visited Srisailam to experience the
                          divine blessings, sacred vibrations, and spiritual
                          peace associated with Mallikarjuna Jyotirlinga.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section
                    id="importance"
                    className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm"
                  >
                    {/* Background Glow */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-100/40 blur-3xl rounded-full" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-100/30 blur-2xl rounded-full" />

                    <div className="relative z-10">
                      {/* Top Label */}
                      <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        Spiritual Importance
                      </div>

                      {/* Heading */}
                      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6">
                        Why{" "}
                        <span className="text-orange-600">
                          Mallikarjuna Jyotirlinga
                        </span>{" "}
                        is Important
                      </h2>

                      {/* Divider */}
                      <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mb-8" />

                      {/* Intro Paragraph */}
                      <p className="text-[17px] md:text-lg leading-8 text-slate-700 mb-8">
                        Mallikarjuna Jyotirlinga holds immense significance in
                        Hinduism because it represents the combined divine
                        energies of Shiva and Shakti.
                      </p>

                      {/* Highlight Box */}
                      <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 p-6 md:p-8 mb-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">
                          Devotees believe that worshipping at Mallikarjuna
                          Temple helps:
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-orange-100">
                            <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 shrink-0" />
                            <p className="text-slate-700 font-medium">
                              Remove negative karmas
                            </p>
                          </div>

                          <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-orange-100">
                            <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 shrink-0" />
                            <p className="text-slate-700 font-medium">
                              Bring harmony in relationships
                            </p>
                          </div>

                          <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-orange-100">
                            <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 shrink-0" />
                            <p className="text-slate-700 font-medium">
                              Grant spiritual growth
                            </p>
                          </div>

                          <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-orange-100">
                            <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 shrink-0" />
                            <p className="text-slate-700 font-medium">
                              Fulfill sincere desires
                            </p>
                          </div>

                          <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-orange-100 md:col-span-2">
                            <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 shrink-0" />
                            <p className="text-slate-700 font-medium">
                              Bless devotees with peace and prosperity
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Paragraphs */}
                      <div className="space-y-6 text-[17px] md:text-lg leading-8 text-slate-700">
                        <p>
                          The temple is deeply associated with parental love,
                          compassion, forgiveness, and divine protection.
                        </p>

                        <p>
                          It is believed that Lord Shiva and Goddess Parvati
                          chose to remain at Srisailam forever to stay close to
                          their son Kartikeya.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section
                    id="legend"
                    className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-gradient-to-br from-slate-50 via-white to-orange-50/40 p-8 md:p-12 shadow-sm"
                  >
                    {/* Background Decorative Effects */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/30 blur-3xl rounded-full" />
                    <div className="absolute bottom-0 left-0 w-52 h-52 bg-yellow-100/20 blur-3xl rounded-full" />

                    <div className="relative z-10">
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        Sacred Legend
                      </div>

                      {/* Heading */}
                      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 font-display mb-6">
                        The Divine Story Behind{" "}
                        <span className="text-orange-600">
                          Mallikarjuna Jyotirlinga
                        </span>
                      </h2>

                      {/* Divider */}
                      <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mb-8" />

                      {/* Intro */}
                      <p className="text-[17px] md:text-lg leading-8 text-slate-700 mb-10">
                        The legend of Mallikarjuna Jyotirlinga is described in
                        ancient scriptures such as the Shiva Purana and Skanda
                        Purana.
                      </p>

                      {/* =========================
        Story Card 1
    ========================= */}

                      <div className="relative rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm mb-8">
                        {/* Story Number */}
                        <div className="absolute -top-4 left-6">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-bold shadow-lg">
                            1
                          </div>
                        </div>

                        <div className="pt-4">
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 font-display leading-tight">
                            The Marriage Challenge Between Kartikeya and Ganesha
                          </h3>

                          <div className="space-y-5 text-[17px] md:text-lg leading-8 text-slate-700">
                            <p>
                              According to the legend, Lord Shiva and Goddess
                              Parvati once decided it was time for their sons,
                              Lord Ganesha and Lord Kartikeya, to get married.
                            </p>

                            <p>
                              A friendly competition was announced between the
                              two brothers.
                            </p>

                            <p>
                              Lord Shiva declared that whoever circled the
                              entire universe first would be married before the
                              other. Hearing this challenge, Lord Kartikeya
                              immediately mounted his peacock and began
                              traveling across the universe at great speed.
                            </p>

                            <p>
                              However, Lord Ganesha calmly walked around his
                              parents, Lord Shiva and Goddess Parvati, and
                              declared:
                            </p>

                            {/* Quote Box */}
                            <div className="relative overflow-hidden rounded-2xl border border-orange-100 bg-gradient-to-r from-orange-50 to-red-50 p-6">
                              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-orange-500 to-red-500" />

                              <p className="text-xl md:text-2xl italic font-semibold text-slate-900 leading-relaxed pl-4">
                                “For me, my parents are the entire universe.”
                              </p>
                            </div>

                            <p>
                              Impressed by Ganesha’s wisdom and devotion, Shiva
                              and Parvati declared him the winner.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* =========================
        Story Card 2
    ========================= */}

                      <div className="relative rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                        {/* Story Number */}
                        <div className="absolute -top-4 left-6">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-bold shadow-lg">
                            2
                          </div>
                        </div>

                        <div className="pt-4">
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 font-display leading-tight">
                            Kartikeya Leaves Mount Kailash
                          </h3>

                          <div className="space-y-5 text-[17px] md:text-lg leading-8 text-slate-700">
                            <p>
                              When Kartikeya returned after traveling the
                              universe and learned about the decision, he became
                              deeply disappointed.
                            </p>

                            <p>
                              Feeling hurt and misunderstood, Kartikeya left
                              Mount Kailash and traveled to the forests and
                              mountains of Srisailam.
                            </p>

                            <p>
                              Concerned for their son, Lord Shiva and Goddess
                              Parvati came to Srisailam to console him and
                              remain close to him forever.
                            </p>

                            <p>
                              Lord Shiva manifested there as Mallikarjuna
                              Jyotirlinga, while Goddess Parvati appeared as
                              Goddess Bhramaramba.
                            </p>

                            {/* Highlight Box */}
                            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 md:p-8 text-white">
                              <p className="text-lg md:text-xl leading-8 font-medium">
                                Thus, the sacred land of Srisailam became one of
                                the holiest pilgrimage sites dedicated to Shiva
                                and Shakti.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section
                    id="meaning-of-Mallikaarjuna"
                    className="relative overflow-hidden rounded-[2rem] border border-violet-100 bg-gradient-to-br from-white via-violet-50/40 to-orange-50/30 p-8 md:p-12 shadow-sm"
                  >
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-violet-100/30 blur-3xl rounded-full" />
                    <div className="absolute bottom-0 left-0 w-52 h-52 bg-orange-100/20 blur-3xl rounded-full" />

                    <div className="relative z-10">
                      {/* Heading */}
                      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 font-display mb-6">
                        Meaning of the Name{" "}
                        <span className="text-orange-500">Mallikarjuna</span>
                      </h2>

                      {/* Divider */}
                      <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-orange-500 mb-8" />

                      {/* Intro Paragraph */}
                      <p className="text-[17px] md:text-lg leading-8 text-slate-700 mb-10">
                        The word “Mallikarjuna” has deep spiritual symbolism.
                      </p>

                      {/* Meaning Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        {/* Mallika */}
                        <div className="relative overflow-hidden rounded-3xl border border-violet-100 bg-white p-6 md:p-8 shadow-sm">
                          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-violet-500 to-violet-300" />

                          <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-100 text-violet-700 text-2xl font-bold">
                            M
                          </div>

                          <h3 className="text-2xl font-bold text-slate-900 mb-3 font-display">
                            Mallika
                          </h3>

                          <p className="text-[17px] leading-8 text-slate-700">
                            “Mallika” refers to Goddess Parvati.
                          </p>
                        </div>

                        {/* Arjuna */}
                        <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-white p-6 md:p-8 shadow-sm">
                          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-500 to-red-400" />

                          <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-100 text-orange-700 text-2xl font-bold">
                            A
                          </div>

                          <h3 className="text-2xl font-bold text-slate-900 mb-3 font-display">
                            Arjuna
                          </h3>

                          <p className="text-[17px] leading-8 text-slate-700">
                            “Arjuna” refers to Lord Shiva.
                          </p>
                        </div>
                      </div>

                      {/* Main Explanation */}
                      <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-10 text-white mb-10">
                        <p className="text-lg md:text-xl leading-9 font-medium">
                          Together, the name symbolizes the eternal union of
                          Shiva and Shakti — the cosmic energies responsible for
                          creation, balance, and transformation.
                        </p>
                      </div>

                      {/* Symbolism Points */}
                      <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 font-display">
                          The temple therefore represents:
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="flex items-start gap-4 rounded-2xl bg-violet-50 p-5 border border-violet-100">
                            <div className="w-3 h-3 rounded-full bg-violet-500 mt-2 shrink-0" />
                            <p className="text-slate-800 font-medium text-lg">
                              Divine love
                            </p>
                          </div>

                          <div className="flex items-start gap-4 rounded-2xl bg-orange-50 p-5 border border-orange-100">
                            <div className="w-3 h-3 rounded-full bg-orange-500 mt-2 shrink-0" />
                            <p className="text-slate-800 font-medium text-lg">
                              Unity of masculine and feminine energies
                            </p>
                          </div>

                          <div className="flex items-start gap-4 rounded-2xl bg-violet-50 p-5 border border-violet-100">
                            <div className="w-3 h-3 rounded-full bg-violet-500 mt-2 shrink-0" />
                            <p className="text-slate-800 font-medium text-lg">
                              Family harmony
                            </p>
                          </div>

                          <div className="flex items-start gap-4 rounded-2xl bg-orange-50 p-5 border border-orange-100">
                            <div className="w-3 h-3 rounded-full bg-orange-500 mt-2 shrink-0" />
                            <p className="text-slate-800 font-medium text-lg">
                              Spiritual completeness
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section
                    id="spiritual-significance"
                    className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12"
                  >
                    {/* Small Label */}
                    <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-5">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      Spiritual Importance
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6">
                      Spiritual Significance of Mallikarjuna Jyotirlinga
                    </h2>

                    {/* Divider */}
                    <div className="w-20 h-1 bg-orange-500 rounded-full mb-8" />

                    {/* Intro */}
                    <p className="text-lg leading-8 text-slate-700 mb-8">
                      Mallikarjuna Jyotirlinga is considered one of the most
                      spiritually powerful temples in India.
                    </p>

                    {/* Points */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-semibold text-slate-900 mb-5 font-display">
                        Devotees believe that worshipping here helps:
                      </h3>

                      <ul className="space-y-4">
                        {[
                          "Remove suffering and fear",
                          "Strengthen family bonds",
                          "Bring mental peace",
                          "Grant spiritual wisdom",
                          "Remove obstacles in life",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-slate-700 text-lg leading-7"
                          >
                            <span className="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0" />

                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Paragraphs */}
                    <div className="space-y-6 text-lg leading-8 text-slate-700">
                      <p>
                        The sacred energy of the forests, mountains, and Krishna
                        River creates a peaceful and deeply meditative
                        atmosphere around the temple.
                      </p>

                      <p>
                        Many pilgrims believe that merely visiting Srisailam
                        helps cleanse the mind and soul.
                      </p>
                    </div>
                  </section>

                  <section
                    id="historical-importance"
                    className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12"
                  >
                    {/* Small Label */}
                    <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-5">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      Historical Legacy
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6">
                      Historical Importance of Srisailam Temple
                    </h2>

                    {/* Divider */}
                    <div className="w-20 h-1 bg-orange-500 rounded-full mb-8" />

                    {/* Intro */}
                    <p className="text-lg leading-8 text-slate-700 mb-10">
                      Mallikarjuna Temple has a rich historical and cultural
                      legacy.
                    </p>

                    {/* Scriptures Section */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-semibold text-slate-900 mb-5 font-display">
                        The temple has been mentioned in:
                      </h3>

                      <ul className="space-y-4">
                        {[
                          "Shiva Purana",
                          "Skanda Purana",
                          "Mahabharata",
                          "Ancient Tamil devotional literature",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-slate-700 text-lg leading-7"
                          >
                            <span className="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0" />

                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Dynasties Section */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-semibold text-slate-900 mb-5 font-display">
                        Several dynasties contributed to the temple’s
                        development, including:
                      </h3>

                      <ul className="space-y-4">
                        {[
                          "Satavahanas",
                          "Chalukyas",
                          "Kakatiyas",
                          "Vijayanagara rulers",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-slate-700 text-lg leading-7"
                          >
                            <span className="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0" />

                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Paragraphs */}
                    <div className="space-y-6 text-lg leading-8 text-slate-700">
                      <p>
                        The Vijayanagara kings especially played a major role in
                        expanding and beautifying the temple complex.
                      </p>

                      <p>
                        For centuries, Srisailam remained an important center of
                        Shaivism and spiritual learning.
                      </p>
                    </div>
                  </section>

                  <section
                    id="architecture"
                    className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12"
                  >
                    {/* Small Label */}
                    <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-5">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      Temple Architecture
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6">
                      Architecture of Mallikarjuna Temple
                    </h2>

                    {/* Divider */}
                    <div className="w-20 h-1 bg-orange-500 rounded-full mb-8" />

                    {/* Intro */}
                    <p className="text-lg leading-8 text-slate-700 mb-10">
                      The architecture of Mallikarjuna Temple reflects
                      traditional South Indian temple design.
                    </p>

                    {/* Architecture Features */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-semibold text-slate-900 mb-5 font-display">
                        The temple complex is massive and beautifully decorated
                        with:
                      </h3>

                      <ul className="space-y-4">
                        {[
                          "Intricate carvings",
                          "Towering gopurams",
                          "Stone pillars",
                          "Sculptures of gods and goddesses",
                          "Ancient mandapas",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-slate-700 text-lg leading-7"
                          >
                            <span className="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0" />

                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Main Sanctum */}
                    <div className="border-t border-slate-200 pt-10 mb-10">
                      <h3 className="text-3xl font-bold text-slate-900 mb-5 font-display">
                        Main Sanctum
                      </h3>

                      <div className="space-y-6 text-lg leading-8 text-slate-700">
                        <p>
                          The sanctum houses the sacred Mallikarjuna Jyotirlinga
                          worshipped by millions of devotees.
                        </p>

                        <p>
                          Nearby is the shrine of Goddess Bhramaramba, making
                          the temple spiritually unique.
                        </p>
                      </div>
                    </div>

                    {/* Temple Walls */}
                    <div className="border-t border-slate-200 pt-10 mb-10">
                      <h3 className="text-3xl font-bold text-slate-900 mb-5 font-display">
                        Temple Walls and Sculptures
                      </h3>

                      <p className="text-lg leading-8 text-slate-700 mb-6">
                        The walls of the temple contain detailed carvings
                        depicting:
                      </p>

                      <ul className="space-y-4 mb-8">
                        {[
                          "Stories from Hindu scriptures",
                          "Forms of Lord Shiva",
                          "Divine dances",
                          "Celestial beings",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-slate-700 text-lg leading-7"
                          >
                            <span className="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0" />

                            {item}
                          </li>
                        ))}
                      </ul>

                      <p className="text-lg leading-8 text-slate-700">
                        The temple architecture reflects both spiritual grandeur
                        and ancient craftsmanship.
                      </p>
                    </div>
                  </section>

                  <section
                    id="krishna-river-srisailam-hills"
                    className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12"
                  >
                    {/* Small Label */}
                    <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-5">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      Sacred Nature & Spiritual Atmosphere
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6">
                      The Sacred Krishna River and Srisailam Hills
                    </h2>

                    {/* Divider */}
                    <div className="w-20 h-1 bg-orange-500 rounded-full mb-8" />

                    {/* Main Content */}
                    <div className="space-y-6 text-lg leading-8 text-slate-700">
                      <p>
                        Mallikarjuna Temple is surrounded by the beautiful
                        Nallamala forest region.
                      </p>

                      <p>
                        The nearby Krishna River adds immense spiritual
                        significance to the temple.
                      </p>

                      <p>
                        Pilgrims often take holy baths in sacred water bodies
                        before entering the temple.
                      </p>

                      <p>
                        The dense forests and hills around Srisailam create a
                        mystical atmosphere that has attracted sages and yogis
                        for centuries.
                      </p>

                      <p>
                        Meditation and spiritual practices performed in this
                        region are believed to be highly powerful.
                      </p>
                    </div>
                  </section>

                  <section
                    id="rituals"
                    className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12"
                  >
                    {/* Small Label */}
                    <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-5">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      Daily Worship & Sacred Rituals
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6">
                      Important Rituals and Pujas at Mallikarjuna Temple
                    </h2>

                    {/* Divider */}
                    <div className="w-20 h-1 bg-orange-500 rounded-full mb-8" />

                    {/* Intro */}
                    <p className="text-lg leading-8 text-slate-700 mb-10">
                      The temple follows traditional Shiva worship rituals every
                      day.
                    </p>

                    {/* Abhishekam */}
                    <div className="border-t border-slate-200 pt-10 mb-10">
                      <h3 className="text-3xl font-bold text-slate-900 mb-5 font-display">
                        Abhishekam
                      </h3>

                      <p className="text-lg leading-8 text-slate-700 mb-6">
                        The Jyotirlinga is worshipped with sacred offerings such
                        as:
                      </p>

                      <ul className="space-y-4">
                        {[
                          "Water",
                          "Milk",
                          "Honey",
                          "Sandalwood",
                          "Bilva leaves",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-slate-700 text-lg leading-7"
                          >
                            <span className="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0" />

                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Rudrabhishekam */}
                    <div className="border-t border-slate-200 pt-10 mb-10">
                      <h3 className="text-3xl font-bold text-slate-900 mb-5 font-display">
                        Rudrabhishekam
                      </h3>

                      <p className="text-lg leading-8 text-slate-700 mb-6">
                        Rudrabhishekam is one of the most important rituals
                        performed at the temple.
                      </p>

                      <p className="text-lg leading-8 text-slate-700 mb-6">
                        Devotees believe this ritual helps:
                      </p>

                      <ul className="space-y-4">
                        {[
                          "Remove obstacles",
                          "Bring peace and prosperity",
                          "Fulfill wishes",
                          "Strengthen spiritual energy",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-slate-700 text-lg leading-7"
                          >
                            <span className="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0" />

                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Kumkum Archana */}
                    <div className="border-t border-slate-200 pt-10">
                      <h3 className="text-3xl font-bold text-slate-900 mb-5 font-display">
                        Kumkum Archana
                      </h3>

                      <p className="text-lg leading-8 text-slate-700">
                        Special worship dedicated to Goddess Bhramaramba is also
                        highly popular among devotees.
                      </p>
                    </div>
                  </section>

                  <section
                    id="festivals"
                    className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12"
                  >
                    {/* Small Label */}
                    <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-5">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      Sacred Celebrations
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6">
                      Festivals Celebrated at Mallikarjuna Jyotirlinga
                    </h2>

                    {/* Divider */}
                    <div className="w-20 h-1 bg-orange-500 rounded-full mb-8" />

                    {/* Mahashivratri */}
                    <div className="border-t border-slate-200 pt-10 mb-10">
                      <h3 className="text-3xl font-bold text-slate-900 mb-5 font-display">
                        Mahashivratri
                      </h3>

                      <div className="space-y-6 text-lg leading-8 text-slate-700">
                        <p>
                          Mahashivratri is celebrated with grand devotion and
                          attracts lakhs of pilgrims.
                        </p>

                        <p>
                          The temple remains beautifully decorated with flowers
                          and lights.
                        </p>
                      </div>
                    </div>

                    {/* Karthika Masam */}
                    <div className="border-t border-slate-200 pt-10 mb-10">
                      <h3 className="text-3xl font-bold text-slate-900 mb-5 font-display">
                        Karthika Masam
                      </h3>

                      <div className="space-y-6 text-lg leading-8 text-slate-700">
                        <p>
                          The holy month of Karthika is considered extremely
                          auspicious for Shiva worship.
                        </p>

                        <p>
                          Special rituals, lamp offerings, and devotional
                          programs are organized.
                        </p>
                      </div>
                    </div>

                    {/* Navratri */}
                    <div className="border-t border-slate-200 pt-10">
                      <h3 className="text-3xl font-bold text-slate-900 mb-5 font-display">
                        Navratri
                      </h3>

                      <p className="text-lg leading-8 text-slate-700">
                        Navratri celebrations dedicated to Goddess Bhramaramba
                        are also conducted with great enthusiasm.
                      </p>
                    </div>
                  </section>

                  <section
                    id="best-time-to-visit"
                    className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12"
                  >
                    {/* Small Label */}
                    <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-5">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      Travel & Pilgrimage Guide
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6">
                      Best Time to Visit Mallikarjuna Jyotirlinga
                    </h2>

                    {/* Divider */}
                    <div className="w-20 h-1 bg-orange-500 rounded-full mb-8" />

                    {/* Intro */}
                    <p className="text-lg leading-8 text-slate-700 mb-10">
                      The best time to visit Srisailam is from October to March.
                    </p>

                    {/* Winter Season */}
                    <div className="border-t border-slate-200 pt-10 mb-10">
                      <h3 className="text-3xl font-bold text-slate-900 mb-6 font-display">
                        Winter Season
                      </h3>

                      <ul className="space-y-4">
                        {[
                          "Pleasant weather",
                          "Ideal for temple visits",
                          "Comfortable for sightseeing",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-slate-700 text-lg leading-7"
                          >
                            <span className="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0" />

                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Monsoon Season */}
                    <div className="border-t border-slate-200 pt-10 mb-10">
                      <h3 className="text-3xl font-bold text-slate-900 mb-5 font-display">
                        Monsoon Season
                      </h3>

                      <p className="text-lg leading-8 text-slate-700">
                        The surrounding forests and hills become lush green and
                        beautiful during monsoon.
                      </p>
                    </div>

                    {/* Festival Periods */}
                    <div className="border-t border-slate-200 pt-10">
                      <h3 className="text-3xl font-bold text-slate-900 mb-5 font-display">
                        Festival Periods
                      </h3>

                      <p className="text-lg leading-8 text-slate-700">
                        Mahashivratri and Karthika Masam attract large numbers
                        of devotees.
                      </p>
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
                    id="places-to-visit"
                    className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12"
                  >
                    {/* Small Label */}
                    <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-5">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      Nearby Attractions
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6">
                      Nearby Places to Visit in Srisailam
                    </h2>

                    {/* Divider */}
                    <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                    {/* Places List */}
                    <div className="space-y-10">
                      {/* Bhramaramba Devi Temple */}
                      <div className="border-t border-slate-200 pt-8">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4 font-display">
                          Bhramaramba Devi Temple
                        </h3>

                        <p className="text-lg leading-8 text-slate-700">
                          One of the 18 sacred Shakti Peethas.
                        </p>
                      </div>

                      {/* Srisailam Dam */}
                      <div className="border-t border-slate-200 pt-8">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4 font-display">
                          Srisailam Dam
                        </h3>

                        <p className="text-lg leading-8 text-slate-700">
                          A beautiful and popular tourist attraction on the
                          Krishna River.
                        </p>
                      </div>

                      {/* Akkamahadevi Caves */}
                      <div className="border-t border-slate-200 pt-8">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4 font-display">
                          Akkamahadevi Caves
                        </h3>

                        <p className="text-lg leading-8 text-slate-700">
                          Ancient caves associated with spiritual meditation and
                          devotion.
                        </p>
                      </div>

                      {/* Pathala Ganga */}
                      <div className="border-t border-slate-200 pt-8">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4 font-display">
                          Pathala Ganga
                        </h3>

                        <p className="text-lg leading-8 text-slate-700">
                          A sacred bathing spot connected with the Krishna
                          River.
                        </p>
                      </div>

                      {/* Sikharam */}
                      <div className="border-t border-slate-200 pt-8">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4 font-display">
                          Sikharam
                        </h3>

                        <p className="text-lg leading-8 text-slate-700">
                          The highest point in Srisailam believed to offer
                          divine blessings upon viewing the temple.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section
                    id="spiritual-benefits"
                    className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12"
                  >
                    {/* Small Label */}
                    <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-5">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      Divine Blessings
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6">
                      Spiritual Benefits of Visiting Mallikarjuna Jyotirlinga
                    </h2>

                    {/* Divider */}
                    <div className="w-20 h-1 bg-orange-500 rounded-full mb-8" />

                    {/* Intro */}
                    <p className="text-lg leading-8 text-slate-700 mb-8">
                      Devotees believe that visiting Mallikarjuna Temple:
                    </p>

                    {/* Benefits List */}
                    <ul className="space-y-4 mb-10">
                      {[
                        "Brings peace and happiness",
                        "Removes negative karma",
                        "Improves family harmony",
                        "Strengthens devotion",
                        "Grants blessings of Shiva and Shakti",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-slate-700 text-lg leading-7"
                        >
                          <span className="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0" />

                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Closing Paragraph */}
                    <p className="text-lg leading-8 text-slate-700">
                      For spiritual seekers, Srisailam is considered a highly
                      transformative pilgrimage destination.
                    </p>
                  </section>

                  <section
                    id="conclusion"
                    className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12"
                  >
                    {/* Small Label */}
                    <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-5">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      Final Thoughts
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6">
                      Conclusion
                    </h2>

                    {/* Divider */}
                    <div className="w-20 h-1 bg-orange-500 rounded-full mb-8" />

                    {/* Content */}
                    <div className="space-y-6 text-lg leading-8 text-slate-700">
                      <p>
                        Mallikarjuna Jyotirlinga is one of the most sacred
                        manifestations of Lord Shiva and symbolizes the eternal
                        love and unity of Shiva and Shakti.
                      </p>

                      <p>
                        The divine legend of Kartikeya, the spiritual atmosphere
                        of the Nallamala forests, and the sacred presence of the
                        Krishna River together make Srisailam a truly
                        extraordinary pilgrimage destination.
                      </p>

                      <p>
                        For devotees of Lord Shiva and Goddess Parvati, visiting
                        Mallikarjuna Jyotirlinga is not just a religious journey
                        but a deeply transformative spiritual experience filled
                        with devotion, peace, and divine blessings.
                      </p>
                    </div>
                  </section>

                  <section id="faqs">
                    <h2 className="text-3xl font-display font-bold text-stone-900 mb-6">
                      Frequently Asked Questions About Mallikarjuna Jyotirlinga
                    </h2>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem
                        value="item-1"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          1. Where is Mallikarjuna Jyotirlinga located?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          Mallikarjuna Jyotirlinga is located in{" "}
                          <strong>Srisailam, Andhra Pradesh</strong>.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-2"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          2. Why is Mallikarjuna Temple special?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          It is both a <strong>Jyotirlinga</strong> and a{" "}
                          <strong>Shakti Peetha</strong>.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-3"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          3. Which goddess is worshipped at Srisailam?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          <strong>Goddess Bhramaramba</strong> is worshipped
                          alongside Lord Shiva.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-4"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          4. What is the best time to visit Srisailam?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          <strong>October to March</strong> is considered ideal.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-5"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          5. Is Srisailam part of the Jyotirlinga Yatra?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          Yes, it is one of the{" "}
                          <strong>12 sacred Jyotirlingas</strong>.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-6"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm hover:shadow transition-shadow"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          6. Can devotees perform special pujas at the temple?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          Yes, devotees can participate in{" "}
                          <strong>Abhishekam</strong> and{" "}
                          <strong>Rudrabhishekam</strong>.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </section>

                  <section className="bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl p-8 text-white shadow-lg">
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-6 md:p-8 rounded-r-2xl shadow-sm">
                      {/* Heading */}
                      <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-display mb-5 leading-tight">
                        Plan Your Mallikarjuna Jyotirlinga Yatra with Naman
                        Darshan
                      </h2>

                      {/* Intro */}
                      <p className="text-lg leading-8 text-stone-700 mb-6">
                        Experience a peaceful and spiritually enriching
                        pilgrimage to Mallikarjuna Jyotirlinga with complete
                        travel assistance.
                      </p>

                      {/* Services */}
                      <div className="mb-8">
                        <p className="font-semibold text-stone-900 mb-4 text-lg">
                          Our services include:
                        </p>

                        <ul className="space-y-3">
                          {[
                            "Request Darshan Assistance Assistance",
                            "Jyotirlinga Tour Packages",
                            "Hotel Booking",
                            "Temple Pooja Assistance",
                            "Family Pilgrimage Tours",
                            "Customized Spiritual Packages",
                          ].map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-stone-700 text-lg"
                            >
                              <span className="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0" />

                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Closing */}
                      <p className="text-lg leading-8 text-stone-700 mb-6">
                        Naman Darshan helps devotees experience a smooth and
                        memorable spiritual journey to Srisailam.
                      </p>

                      {/* CTA Button */}
                      <div>
                        <Link to="/darshan">
                          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all text-sm md:text-base">
                            Request Darshan Assistance Online
                          </button>
                        </Link>
                      </div>
                    </div>
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

export default MallikarjunaJyotirlingaBlog;
