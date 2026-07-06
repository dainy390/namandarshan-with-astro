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
  Tent,
  BookOpen,
  HelpCircle,
  Star,
  Mountain,
  Snowflake
} from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
import kedarnathImg from "@/assets/blogs/twelveJyotirling/KedarnathJyotirlinga.jpeg";
import CommentSection from "@/components/common/CommentSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const KedarnathJyotirlinga = () => {

  const tableOfContents = [
    { id: "intro", title: "Introduction" },
    { id: "importance", title: "Why Kedarnath Jyotirlinga is So Important" },
    { id: "legend", title: "The Divine Story & Legend" },
    { id: "panch-kedar", title: "The Panch Kedar Connection" },
    { id: "spiritual-meaning", title: "Spiritual Meaning" },
    { id: "historical-importance", title: "Historical Importance" },
    { id: "shankaracharya", title: "Adi Shankaracharya Connection" },
    { id: "flood-miracle", title: "Survival During the 2013 Floods" },
    { id: "architecture", title: "Temple Architecture" },
    { id: "himalayan-energy", title: "Spiritual Energy of the Himalayas" },
    { id: "opening-closing", title: "Temple Opening and Closing" },
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
      title: "Nageshwar Jyotirlinga Guide",
      link: "/blog/nageshwar-jyotirlinga-dwarka-guide",
    },
    {
      title: "Bhimashankar Jyotirlinga Guide",
      link: "/blog/bhimashankar-jyotirlinga-pune-guide",
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
    headline: "Kedarnath Jyotirlinga – The Divine Himalayan Abode of Lord Shiva",
    description: "Complete guide to Kedarnath Jyotirlinga in Uttarakhand. Learn about the legend of the Pandavas, Adi Shankaracharya's connection, Panch Kedar, and travel tips.",
    keywords: [
      "Kedarnath Jyotirlinga",
      "Kedarnath Temple",
      "Panch Kedar",
      "Char Dham Yatra",
      "Kedarnath History",
      "Uttarakhand Jyotirlinga",
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
        name: "Where is Kedarnath Jyotirlinga located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kedarnath is located in Rudraprayag district of Uttarakhand.",
        },
      },
      {
        "@type": "Question",
        name: "Why is Kedarnath famous?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is one of the 12 Jyotirlingas and part of Char Dham Yatra.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best time to visit Kedarnath?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "May to June and September to October are considered ideal.",
        },
      },
      {
        "@type": "Question",
        name: "How can devotees reach Kedarnath Temple?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pilgrims can trek from Gaurikund or use helicopter services.",
        },
      },
      {
        "@type": "Question",
        name: "Is Kedarnath open throughout the year?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, the temple remains open only for six months.",
        },
      },
      {
        "@type": "Question",
        name: "Which river flows near Kedarnath?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Mandakini River flows near the temple.",
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
        title="Kedarnath Jyotirlinga – History, Panch Kedar, Yatra & Travel Guide"
        keywords={[
          "Kedarnath Jyotirlinga",
          "Kedarnath Temple",
          "Char Dham Yatra",
          "Panch Kedar",
          "Kedarnath History",
          "Kedarnath Travel Guide",
        ]}
        description="Discover Kedarnath Jyotirlinga in the Himalayas, one of the sacred 12 Jyotirlingas. Explore temple history, Pandava legend, Panch Kedar, opening timings, and travel tips."
      />

      <Header />

      <main className="pt-36 md:pt-48 lg:pt-52 pb-12">
        <div className="container mx-auto px-4">
          <BlogBreadcrumb pageTitle="Kedarnath Jyotirlinga Guide" />

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
                      className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:text-primary hover:bg-sky-50 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <ChevronRight className="w-3 h-3 text-sky-500 shrink-0" />
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
                    Kedarnath Jyotirlinga – The Divine Himalayan Abode of Lord Shiva
                  </h1>

                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <Calendar className="w-4 h-4" />
                    <span>13 May 2026</span>
                    <span>•</span>
                    <span>15 min read</span>
                  </div>
                </div>

                <div className="w-full h-64 md:h-96 bg-slate-200">
                  <img
                    src={kedarnathImg}
                    alt="Kedarnath Jyotirlinga Temple in Himalayas"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 md:p-10 space-y-8 text-lg leading-relaxed text-slate-700">
                  <section
                    id="intro"
                    className="relative overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50/40 to-white p-8 md:p-12 shadow-sm"
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-sky-200/20 blur-3xl rounded-full" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100/30 blur-2xl rounded-full" />

                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold mb-5">
                        <Mountain className="w-4 h-4" />
                        Sacred Himalayan Shrines
                      </div>

                      <h2 className="text-4xl leading-tight font-bold text-slate-900 font-display mb-6">
                        Kedarnath Jyotirlinga in <span className="text-sky-600">Uttarakhand</span>
                      </h2>

                      <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 mb-8" />

                      <div className="space-y-6 text-[17px] md:text-lg leading-8 text-slate-700">
                        <p>
                          Kedarnath Jyotirlinga is one of the most sacred and spiritually powerful among the 12 Jyotirlingas of Lord Shiva. Nestled amidst the majestic Himalayan mountains of Uttarakhand near the Mandakini River, Kedarnath Temple stands at an altitude of more than 11,000 feet above sea level.
                        </p>

                        <p>
                          Surrounded by snow-covered peaks, glaciers, waterfalls, and breathtaking natural beauty, Kedarnath is considered one of the holiest pilgrimage destinations in India.
                        </p>

                        <p>
                          The temple is not only one of the 12 Jyotirlingas but also an important part of the sacred Char Dham Yatra and Panch Kedar pilgrimage.
                        </p>

                        <p>
                          For centuries, devotees, saints, yogis, and spiritual seekers have traveled through the difficult Himalayan terrain to seek blessings from Lord Shiva at Kedarnath.
                        </p>

                        <p>
                          The challenging journey itself is considered a spiritual path of devotion, surrender, faith, and inner transformation.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section
                    id="importance"
                    className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm"
                  >
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-100/40 blur-3xl rounded-full" />
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                        <ShieldCheck className="w-4 h-4" />
                        Spiritual Liberation
                      </div>

                      <h2 className="text-4xl font-bold text-slate-900 leading-tight font-display mb-6">
                        Why <span className="text-sky-600">Kedarnath Jyotirlinga</span> is So Important
                      </h2>

                      <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 mb-8" />

                      <p className="text-[17px] md:text-lg leading-8 text-slate-700 mb-8">
                        Kedarnath Jyotirlinga holds immense significance in Hinduism because it is believed to be a place where devotees can attain spiritual purification and liberation.
                      </p>

                      <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-100 p-6 md:p-8 mb-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display text-center">
                          Devotees believe that visiting Kedarnath helps:
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            "Remove sins and past karmas",
                            "Bring inner peace and spiritual awakening",
                            "Strengthen devotion toward Lord Shiva",
                            "Grant divine protection",
                            "Help attain moksha (liberation)"
                          ].map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-sky-100 shadow-sm">
                              <CheckCircle2 className="w-5 h-5 mt-1 text-sky-500 shrink-0" />
                              <p className="text-slate-700 font-medium">{benefit}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <p className="text-[17px] md:text-lg leading-8 text-slate-700">
                        The powerful spiritual vibrations of the Himalayas combined with the divine presence of Lord Shiva make Kedarnath one of the most transformative pilgrimage experiences in India.
                      </p>
                    </div>
                  </section>

                  <section
                    id="legend"
                    className="relative overflow-hidden rounded-[2rem] border border-sky-100 bg-gradient-to-br from-slate-50 via-white to-sky-50/40 p-8 md:p-12 shadow-sm"
                  >
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold mb-6">
                        <Zap className="w-4 h-4" />
                        Sacred Legend
                      </div>

                      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 font-display mb-6">
                        The Divine Story Behind <span className="text-sky-600">Kedarnath Jyotirlinga</span>
                      </h2>

                      <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 mb-8" />

                      <p className="text-[17px] md:text-lg leading-8 text-slate-700 mb-10">
                        The legend of Kedarnath is deeply connected with the Mahabharata and the Pandavas.
                      </p>

                      <div className="space-y-8">
                        <div className="relative rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                          <div className="absolute -top-4 left-6">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 text-white flex items-center justify-center font-bold shadow-lg">
                              1
                            </div>
                          </div>
                          <div className="pt-4">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">The Pandavas Seek Forgiveness</h3>
                            <div className="space-y-4 text-[17px] md:text-lg leading-8 text-slate-700">
                              <p>After the Kurukshetra war, the Pandavas were filled with guilt and sorrow because of the destruction and loss of life caused during the battle.</p>
                              <p>Seeking forgiveness for their sins, the Pandavas decided to worship Lord Shiva. However, Lord Shiva was unhappy with the bloodshed of the war and did not wish to meet them.</p>
                              <p>To avoid the Pandavas, Lord Shiva disguised himself as a bull and hid in the Himalayan region of Kedarnath.</p>
                            </div>
                          </div>
                        </div>

                        <div className="relative rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                          <div className="absolute -top-4 left-6">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 text-white flex items-center justify-center font-bold shadow-lg">
                              2
                            </div>
                          </div>
                          <div className="pt-4">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">Bhima Recognizes Lord Shiva</h3>
                            <div className="space-y-4 text-[17px] md:text-lg leading-8 text-slate-700">
                              <p>While searching for Lord Shiva, Bhima noticed a strange bull behaving unusually among the cattle.</p>
                              <p>Suspecting the bull to be Shiva himself, Bhima attempted to catch it.</p>
                              <p>At that moment, the bull began disappearing into the ground.</p>
                              <p className="font-semibold text-sky-700">Bhima managed to hold the hump portion of the bull.</p>
                              <p>The hump remained visible at Kedarnath and became the sacred Jyotirlinga worshipped today.</p>
                            </div>
                          </div>
                        </div>

                        <div className="relative rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                          <div className="pt-4">
                            <div className="space-y-4 text-[17px] md:text-lg leading-8 text-slate-700">
                              <p>According to tradition, the remaining parts of Lord Shiva appeared at different locations in the Himalayas, which later became the famous Panch Kedar temples.</p>
                              <div className="bg-slate-900 text-white p-6 rounded-2xl font-medium">
                                Moved by the devotion and repentance of the Pandavas, Lord Shiva forgave them and blessed the region forever.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="panch-kedar" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-8">The Panch Kedar Connection</h2>
                    <p className="text-lg leading-8 text-slate-700 mb-8">Kedarnath is the most important among the Panch Kedar temples. The five sacred temples associated with Lord Shiva are:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { part: "Hump of the bull", name: "Kedarnath" },
                        { part: "Arms", name: "Tungnath" },
                        { part: "Face", name: "Rudranath" },
                        { part: "Navel", name: "Madhyamaheshwar" },
                        { part: "Hair", name: "Kalpeshwar" }
                      ].map((kedar, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-sky-50 rounded-2xl border border-sky-100">
                          <span className="font-bold text-slate-900">{kedar.name}</span>
                          <span className="text-sm font-medium text-sky-700 bg-white px-3 py-1 rounded-full border border-sky-100">{kedar.part}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-8 text-lg leading-8 text-slate-700 italic">
                      Pilgrims often undertake the Panch Kedar Yatra to seek complete blessings of Lord Shiva.
                    </p>
                  </section>

                  <section id="spiritual-meaning" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-8">Spiritual Meaning of Kedarnath</h2>
                    <p className="text-lg leading-8 text-slate-700 mb-8">Kedarnath symbolizes surrender, purification, and spiritual awakening. The Himalayas are considered the divine abode of Lord Shiva, representing silence, meditation, and higher consciousness.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {[
                        "Detachment from worldly life",
                        "Divine forgiveness",
                        "Power of repentance",
                        "Inner transformation",
                        "Eternal consciousness"
                      ].map((point, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200">
                          <div className="w-2 h-2 rounded-full bg-sky-500 shrink-0" />
                          <span className="font-medium text-slate-800">{point}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-lg leading-8 text-slate-700 font-medium border-t-2 border-slate-200 pt-6">
                      The difficult pilgrimage journey teaches devotees patience, faith, endurance, and devotion.
                    </p>
                  </section>

                  <section id="historical-importance" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                    <div className="inline-flex items-center gap-2 text-primary font-semibold mb-5">
                      <History className="w-5 h-5" />
                      Ancient Heritage
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-6">Historical Importance of Kedarnath Temple</h2>
                    <div className="space-y-6 text-lg leading-8 text-slate-700">
                      <p>Kedarnath Temple is believed to be more than a thousand years old. According to tradition, the original temple was built by the Pandavas.</p>
                      <p>Later, the temple was revived and reconstructed by Adi Shankaracharya in the 8th century.</p>

                      <div id="shankaracharya" className="bg-sky-50 p-6 rounded-2xl border border-sky-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Adi Shankaracharya Connection</h3>
                        <p>Adi Shankaracharya played a major role in reviving Hindu pilgrimage traditions across India. It is believed that he attained samadhi near Kedarnath Temple. A memorial dedicated to Adi Shankaracharya stands behind the temple.</p>
                      </div>

                      <div id="flood-miracle" className="bg-blue-900 text-white p-8 rounded-3xl shadow-xl">
                        <h3 className="text-2xl font-bold mb-4 font-display">Survival During the 2013 Floods</h3>
                        <p className="opacity-90 leading-relaxed mb-6">One of the most remarkable chapters in Kedarnath’s history occurred during the devastating Uttarakhand floods of 2013.</p>
                        <p className="bg-white/10 p-6 rounded-2xl border border-white/10 font-medium">Despite massive destruction around the region, the main Kedarnath Temple remained largely unharmed. Many devotees considered this a divine miracle and a symbol of Lord Shiva’s protection.</p>
                      </div>
                    </div>
                  </section>

                  <section id="architecture" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-8">Architecture of Kedarnath Temple</h2>
                    <p className="text-lg leading-8 text-slate-700 mb-10">Kedarnath Temple is built using massive stone slabs and reflects ancient Himalayan temple architecture. The temple structure is designed to withstand extreme weather conditions and heavy snowfall.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-slate-900 font-display border-b-2 border-sky-500 pb-2 inline-block">Main Features</h3>
                        <ul className="space-y-4">
                          {[
                            "Large stone construction",
                            "Pyramid-shaped tower",
                            "Intricately carved walls",
                            "Ancient sanctum housing the Jyotirlinga",
                            "Spiritual mountain backdrop"
                          ].map((feat, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 mt-1 text-sky-600 shrink-0" />
                              <span className="font-medium text-slate-700">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-sky-50 p-6 rounded-3xl border border-sky-100">
                        <h3 className="text-2xl font-bold text-slate-900 font-display mb-4">The Sacred Jyotirlinga</h3>
                        <p className="text-[16px] leading-7 text-slate-700">Unlike most Shiva lingas, the Kedarnath Jyotirlinga has an irregular natural shape resembling the hump of a bull. This unique form further strengthens the connection with the Pandava legend.</p>
                      </div>
                    </div>
                  </section>

                  <section id="himalayan-energy" className="relative overflow-hidden p-8 md:p-12 rounded-[2rem] bg-slate-900 text-white shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 blur-[100px]" />
                    <div className="relative z-10">
                      <h2 className="text-3xl md:text-5xl font-bold font-display mb-8">Spiritual Energy of the Himalayas</h2>
                      <div className="space-y-6 text-lg md:text-xl leading-relaxed text-slate-300">
                        <p>The Himalayan region surrounding Kedarnath is considered highly sacred. The silence of the mountains, flowing rivers, and fresh mountain air create a deeply meditative atmosphere.</p>
                        <p>Many saints and yogis meditate in this region seeking spiritual enlightenment. Pilgrims often describe their visit to Kedarnath as emotionally powerful and spiritually life-changing.</p>
                      </div>
                    </div>
                  </section>

                  <section id="opening-closing" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-8">Temple Opening and Closing</h2>
                    <p className="text-lg leading-8 text-slate-700 mb-8">Due to extreme winter conditions, Kedarnath Temple remains open only for about six months every year.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 rounded-3xl bg-sky-50 border border-sky-100">
                        <div className="flex items-center gap-3 mb-4">
                          <Zap className="w-6 h-6 text-sky-600" />
                          <h3 className="text-xl font-bold text-slate-900 font-display">Temple Opening</h3>
                        </div>
                        <p className="text-slate-700 font-medium">The temple usually opens during April or May around Akshaya Tritiya.</p>
                      </div>
                      <div className="p-6 rounded-3xl bg-sky-50 border border-sky-100">
                        <div className="flex items-center gap-3 mb-4">
                          <Snowflake className="w-6 h-6 text-sky-600" />
                          <h3 className="text-xl font-bold text-slate-900 font-display">Temple Closing</h3>
                        </div>
                        <p className="text-slate-700 font-medium">The temple closes around Bhai Dooj after Diwali.</p>
                      </div>
                    </div>
                    <p className="mt-8 p-6 bg-slate-900 text-white rounded-2xl font-bold text-center italic">During winter, the idol of Lord Kedarnath is shifted to Omkareshwar Temple in Ukhimath for worship.</p>
                  </section>

                  <section id="rituals" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-10">Important Rituals and Pujas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 rounded-2xl bg-sky-50 border border-sky-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Rudrabhishek</h3>
                        <p className="text-slate-700 mb-4">Devotees offer:</p>
                        <div className="flex flex-wrap gap-2">
                          {["Water", "Milk", "Honey", "Ghee", "Bilva leaves"].map(item => (
                            <span key={item} className="px-3 py-1 bg-white rounded-full text-xs font-bold text-sky-600">{item}</span>
                          ))}
                        </div>
                        <p className="mt-4 text-[17px]">to the sacred Jyotirlinga.</p>
                      </div>
                      <div className="p-6 rounded-2xl bg-sky-50 border border-sky-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Maha Abhishek</h3>
                        <p className="text-slate-700">One of the most important rituals performed in the temple.</p>
                      </div>
                      <div className="p-6 rounded-2xl bg-sky-50 border border-sky-100 md:col-span-2">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Evening Aarti</h3>
                        <p className="text-slate-700">The evening aarti amidst the Himalayan atmosphere creates a deeply spiritual experience.</p>
                      </div>
                      <div className="p-6 rounded-2xl bg-sky-50 border border-sky-100 md:col-span-2">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Special Shravan Worship</h3>
                        <p className="text-slate-700">Special pujas and devotional rituals are performed during the holy month of Shravan.</p>
                      </div>
                    </div>
                  </section>

                  <section id="festivals" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-10">Festivals Celebrated</h2>
                    <div className="space-y-6">
                      <div className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-slate-100">
                        <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center shrink-0">
                          <Zap className="w-8 h-8 text-sky-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Mahashivratri</h3>
                          <p className="text-slate-700 font-medium">Celebrated with great devotion across the Kedarnath region.</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-slate-100">
                        <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center shrink-0">
                          <Heart className="w-8 h-8 text-sky-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Badri-Kedar Festival</h3>
                          <p className="text-slate-700 font-medium">A major cultural and spiritual festival dedicated to Lord Shiva and Lord Vishnu.</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-slate-100">
                        <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center shrink-0">
                          <Calendar className="w-8 h-8 text-sky-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Temple Opening Ceremony</h3>
                          <p className="text-slate-700 font-medium">The annual opening ceremony attracts thousands of pilgrims.</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="best-time" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-10 text-center">Best Time to Visit Kedarnath Temple</h2>
                    <p className="text-lg leading-8 text-slate-700 mb-10 text-center">The best time to visit Kedarnath is from <span className="font-bold text-sky-600 underline">May to June</span> and <span className="font-bold text-sky-600 underline">September to October</span>.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100 text-center">
                        <h3 className="text-2xl font-bold text-sky-900 mb-4 font-display">Summer Season</h3>
                        <ul className="space-y-3 font-medium text-sky-800">
                          <li>• Pleasant weather</li>
                          <li>• Suitable for trekking and pilgrimage</li>
                          <li>• Clear mountain views</li>
                        </ul>
                      </div>
                      <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100 text-center">
                        <h3 className="text-2xl font-bold text-sky-900 mb-4 font-display">Post-Monsoon</h3>
                        <ul className="space-y-3 font-medium text-sky-800">
                          <li>• Beautiful natural scenery</li>
                          <li>• Fewer crowds</li>
                          <li>• Comfortable travel conditions</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-red-50 border border-red-100 p-6 rounded-2xl">
                      <p className="text-red-800 font-bold text-center">Avoid Monsoon: Heavy rains and landslides may affect travel during July and August.</p>
                    </div>
                  </section>

                  <section id="how-to-reach" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-10">How to Reach Kedarnath Jyotirlinga</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                          <Zap className="w-6 h-6 text-sky-600" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">By Air</h3>
                        <p className="text-sm text-slate-600 font-medium">Nearest Airport:</p>
                        <p className="text-sm font-bold text-slate-900 mt-1">Jolly Grant Airport, Dehradun</p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                          <Car className="w-6 h-6 text-indigo-600" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">By Train</h3>
                        <p className="text-sm text-slate-600 font-medium mb-1">Nearest Railway Stations:</p>
                        <ul className="text-sm font-bold text-slate-900 space-y-1">
                          <li>• Haridwar</li>
                          <li>• Rishikesh</li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                          <MapPin className="w-6 h-6 text-emerald-600" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">By Road</h3>
                        <p className="text-xs font-medium text-slate-600 mb-2">Travel up to Gaurikund. Then choose:</p>
                        <ul className="text-[10px] font-bold text-slate-900 space-y-1">
                          <li>• Trekking</li>
                          <li>• Pony services</li>
                          <li>• Palki services</li>
                          <li>• Helicopter services</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-6">
                        <Tent className="w-8 h-8 text-sky-600" />
                        <h3 className="text-2xl font-bold text-slate-900 font-display">Kedarnath Helicopter Services</h3>
                      </div>
                      <p className="text-slate-700 font-medium mb-6">Helicopter services are available from:</p>
                      <div className="flex flex-wrap gap-3">
                        {["Phata", "Guptkashi", "Sirsi"].map(spot => (
                          <div key={spot} className="px-6 py-3 bg-sky-50 rounded-xl border border-sky-100 text-sky-900 font-bold text-sm">
                            {spot}
                          </div>
                        ))}
                      </div>
                      <p className="mt-6 text-slate-600 text-sm font-bold italic">These services are popular among elderly pilgrims and families.</p>
                    </div>
                  </section>

                  <section id="nearby-places" className="p-8 md:p-12 rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-10">Nearby Places to Visit Near Kedarnath</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { name: "Bhairavnath Temple", desc: "Dedicated to Lord Bhairav, believed to protect Kedarnath during winters." },
                        { name: "Vasuki Tal", desc: "A beautiful high-altitude lake near Kedarnath." },
                        { name: "Gaurikund", desc: "The starting point of the Kedarnath trek." },
                        { name: "Triyuginarayan Temple", desc: "Believed to be the divine wedding place of Lord Shiva and Goddess Parvati." },
                        { name: "Rudraprayag", desc: "Sacred confluence of Alaknanda and Mandakini rivers." }
                      ].map((place, i) => (
                        <div key={i} className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-sky-50 hover:border-sky-200 transition-all cursor-pointer">
                          <h3 className="font-bold text-slate-900 mb-2 group-hover:text-sky-600">{place.name}</h3>
                          <p className="text-xs font-medium text-slate-600 leading-relaxed">{place.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="spiritual-benefits" className="p-8 md:p-12 rounded-[2rem] border border-sky-200 bg-sky-50/30 shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-8">Spiritual Benefits of Visiting Kedarnath Jyotirlinga</h2>
                    <p className="text-lg leading-8 text-slate-700 mb-10">Devotees believe that visiting Kedarnath:</p>
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        "Removes sins and karmic burdens",
                        "Grants spiritual peace",
                        "Strengthens faith and devotion",
                        "Brings divine blessings of Lord Shiva",
                        "Helps attain liberation"
                      ].map((benefit, i) => (
                        <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-sky-100 shadow-sm">
                          <ShieldCheck className="w-6 h-6 text-sky-500" />
                          <span className="font-bold text-slate-800 text-lg">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-10 text-center text-xl font-medium text-slate-900 leading-relaxed italic border-t-2 border-sky-200 pt-8">
                      For many pilgrims, the Kedarnath Yatra becomes a deeply emotional and transformative spiritual journey.
                    </p>
                  </section>

                  <section id="conclusion" className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-sky-50 via-white to-sky-50 border border-sky-100 mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 font-display mb-8 flex items-center gap-2">
                      <BookOpen className="w-8 h-8 text-sky-500" /> Conclusion
                    </h2>
                    <div className="space-y-6 text-lg leading-8 text-slate-700">
                      <p>Kedarnath Jyotirlinga is one of the most spiritually powerful shrines dedicated to Lord Shiva.</p>
                      <p>Surrounded by the majestic Himalayas and filled with divine energy, Kedarnath represents devotion, surrender, forgiveness, and spiritual awakening.</p>
                      <p>From the sacred legend of the Pandavas to the miraculous survival of the temple during natural disasters, Kedarnath continues to inspire millions of devotees with faith and divine strength.</p>
                      <p className="font-bold text-slate-900">For devotees of Lord Shiva, visiting Kedarnath is not just a pilgrimage but a profound spiritual journey toward inner peace, devotion, and liberation.</p>
                    </div>
                  </section>

                  <section id="faqs" className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 font-display mb-8 flex items-center gap-2">
                      <HelpCircle className="w-8 h-8 text-sky-500" /> Frequently Asked Questions
                    </h2>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      <AccordionItem value="item-1" className="border rounded-2xl px-6 bg-white shadow-sm overflow-hidden border-slate-100">
                        <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-sky-600">Where is Kedarnath Jyotirlinga located?</AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-[16px] leading-7 font-medium pb-6">Kedarnath is located in Rudraprayag district of Uttarakhand.</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2" className="border rounded-2xl px-6 bg-white shadow-sm overflow-hidden border-slate-100">
                        <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-sky-600">Why is Kedarnath famous?</AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-[16px] leading-7 font-medium pb-6">It is one of the 12 Jyotirlingas and part of Char Dham Yatra.</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3" className="border rounded-2xl px-6 bg-white shadow-sm overflow-hidden border-slate-100">
                        <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-sky-600">What is the best time to visit Kedarnath?</AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-[16px] leading-7 font-medium pb-6">May to June and September to October are considered ideal.</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4" className="border rounded-2xl px-6 bg-white shadow-sm overflow-hidden border-slate-100">
                        <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-sky-600">How can devotees reach Kedarnath Temple?</AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-[16px] leading-7 font-medium pb-6">Pilgrims can trek from Gaurikund or use helicopter services.</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5" className="border rounded-2xl px-6 bg-white shadow-sm overflow-hidden border-slate-100">
                        <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-sky-600">Is Kedarnath open throughout the year?</AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-[16px] leading-7 font-medium pb-6">No, the temple remains open only for six months.</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-6" className="border rounded-2xl px-6 bg-white shadow-sm overflow-hidden border-slate-100">
                        <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-sky-600">Which river flows near Kedarnath?</AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-[16px] leading-7 font-medium pb-6">The Mandakini River flows near the temple.</AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </section>

                  <section className="bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl p-8 text-white shadow-lg mb-8">
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-6 md:p-8 rounded-r-2xl shadow-sm">
                      <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-display mb-5 leading-tight">
                        Plan Your Kedarnath Jyotirlinga Yatra with Naman Darshan
                      </h2>

                      <p className="text-lg leading-8 text-stone-700 mb-6">
                        Experience a spiritually enriching journey to Kedarnath with complete travel assistance and pilgrimage support.
                      </p>

                      <div className="mb-8">
                        <p className="font-semibold text-stone-900 mb-4 text-lg">
                          Our services include:
                        </p>

                        <ul className="space-y-3">
                          {[
                            "Kedarnath Helicopter Booking",
                            "Request Darshan Assistance Assistance",
                            "Char Dham Yatra Packages",
                            "Hotel Booking",
                            "Transportation Services",
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
                        <Link to="/darshan/kedarnath-dham-vipdarshan">
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

                  <p className="text-center font-bold text-sky-600 mt-8 mb-8 bg-sky-50 py-4 rounded-xl border border-sky-100 flex items-center justify-center gap-2 italic">
                    Jai Kedarnath! 🙏🕉️ हर हर महादेव!
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
                  <div className="flex items-center justify-between text-sm font-medium p-3 bg-sky-50 rounded-lg text-sky-700">
                    <span>Location</span>
                    <span className="font-bold">Uttarakhand</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-medium p-3 bg-sky-50 rounded-lg text-sky-700">
                    <span>Altitude</span>
                    <span className="font-bold">11,000+ ft</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-medium p-3 bg-sky-50 rounded-lg text-sky-700">
                    <span>Best Season</span>
                    <span className="font-bold">May - Oct</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Recent Posts</h4>
                  <div className="space-y-4">
                    {recentPosts.map((post, idx) => (
                      <Link
                        key={idx}
                        to={post.link}
                        className="group flex gap-3 items-center text-slate-600 hover:text-sky-600 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-sky-500 shrink-0" />
                        <span className="text-sm font-bold leading-snug">{post.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-2xl text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-xs text-white/80 mb-4 leading-relaxed font-medium">Plan your divine journey to Kedarnath Jyotirlinga with our experts.</p>
                  <Button className="w-full bg-white text-sky-600 hover:bg-sky-50 font-bold rounded-xl text-xs h-10">
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

export default KedarnathJyotirlinga;
