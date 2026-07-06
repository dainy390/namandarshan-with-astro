import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  CheckCircle,
  ChevronRight,
  Flame,
  Mountain,
  Heart,
  ArrowRight,
} from "lucide-react";
import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";
import CommentSection from "@/components/common/CommentSection";
import theTwelveJyotirlingImg from "@/assets/blogs/The12Jyotirling.jpeg";
import somnathJyotirlingImg from "@/assets/blogs/twelveJyotirling/SomnathJyotirlinga.png";
import malikaArjunJyotirlingImg from "@/assets/blogs/twelveJyotirling/Mallikarjuna_Jyotirlinga.jpeg";
import mahakaleshwarJyotirlingImg from "@/assets/blogs/twelveJyotirling/MahakaleshwarJyotirlinga.png";
import omkareshwarJyotirlingImg from "@/assets/blogs/twelveJyotirling/OmkareshwarJyotirlinga.jpeg";
import bhimashankarJyotirlingImg from "@/assets/blogs/twelveJyotirling/BhimashankarJyotirlinga.jpeg";
import kedarnathJyotirlingImg from "@/assets/blogs/twelveJyotirling/KedarnathJyotirlinga.jpeg";
import kashiVishwanathJyotirlingImg from "@/assets/blogs/twelveJyotirling/KashiVishwanathJyotirlinga.jpeg";
import trimbakeshwarJyotirlingImg from "@/assets/blogs/twelveJyotirling/TrimbakeshwarJyotirlinga.jpeg";
import vaidyanathJyotirlingImg from "@/assets/blogs/twelveJyotirling/VaidyanathJyotirlinga.jpeg";
import nageshwarJyotirlingImg from "@/assets/blogs/twelveJyotirling/NageshwarJyotirlinga.jpeg";
import rameshwaramJyotirlingImg from "@/assets/blogs/twelveJyotirling/RameshwaramJyotirlinga.jpeg";
import grishneshwarJyotirlingImg from "@/assets/blogs/twelveJyotirling/GrishneshwarJyotirlinga.jpeg";

const JyotirlingaBlog = () => {
  const tableOfContents = [
    { id: "intro", title: "Introduction" },

    {
      id: "meaning-of-shivalinga",
      title: "Meaning of Shivalinga",
    },

    {
      id: "what-shivalinga-represents",
      title: "What Does the Shivalinga Represent?",
    },

    {
      id: "why-worship-shivalinga",
      title: "Why Do Devotees Worship the Shivalinga?",
    },

    {
      id: "what-are-jyotirlingas",
      title: "What Are Jyotirlingas?",
    },

    {
      id: "12-jyotirlingas",
      title: "The 12 Jyotirlingas of Lord Shiva",
    },

    {
      id: "jyotirlinga-shloka",
      title: "Sanskrit Shloka of the 12 Jyotirlingas",
    },

    {
      id: "stories-behind-jyotirlingas",
      title: "Stories Behind the 12 Jyotirlingas",
    },

    {
      id: "somnath-jyotirlinga",
      title: "Somnath Jyotirlinga",
    },

    {
      id: "mallikarjuna-jyotirlinga",
      title: "Mallikarjuna Jyotirlinga",
    },

    {
      id: "mahakaleshwar-jyotirlinga",
      title: "Mahakaleshwar Jyotirlinga",
    },

    {
      id: "omkareshwar-jyotirlinga",
      title: "Omkareshwar Jyotirlinga",
    },

    {
      id: "bhimashankar-jyotirlinga",
      title: "Bhimashankar Jyotirlinga",
    },

    {
      id: "kedarnath-jyotirlinga",
      title: "Kedarnath Jyotirlinga",
    },

    {
      id: "kashi-vishwanath-jyotirlinga",
      title: "Kashi Vishwanath Jyotirlinga",
    },

    {
      id: "trimbakeshwar-jyotirlinga",
      title: "Trimbakeshwar Jyotirlinga",
    },

    {
      id: "vaidyanath-jyotirlinga",
      title: "Vaidyanath Jyotirlinga",
    },

    {
      id: "nageshwar-jyotirlinga",
      title: "Nageshwar Jyotirlinga",
    },

    {
      id: "rameshwaram-jyotirlinga",
      title: "Rameshwaram Jyotirlinga",
    },

    {
      id: "grishneshwar-jyotirlinga",
      title: "Grishneshwar Jyotirlinga",
    },

    {
      id: "jyotirlinga-conclusion",
      title: "In Short",
    },

    {
      id: "spiritual-importance-jyotirlinga-yatra",
      title: "Spiritual Importance of Visiting the 12 Jyotirlingas",
    },

    {
      id: "jyotirlinga-final-conclusion",
      title: "Conclusion",
    },

    {
      id: "faqs",
      title: "Frequently Asked Questions",
    },
  ];

  const recentPosts = [
    {
      title: "Mallikarjuna Jyotirlinga Complete Guide",
      link: "/blog/mallikarjuna-jyotirlinga-guide",
    },
    {
      title: "Kashi Vishwanath Temple Darshan Guide",
      link: "/blog/kashi-vishwanath-guide",
    },
    {
      title: "Mahakaleshwar Bhasma Aarti Guide",
      link: "/blog/mahakaleshwar-bhasma-aarti",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Everything You Should Know About the 12 Jyotirlingas of Lord Shiva",
    description:
      "Complete guide to the 12 Jyotirlingas of Lord Shiva including history, legends, spiritual significance, and pilgrimage importance.",
    author: {
      "@type": "Organization",
      name: "Naman Darshan",
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <SEO
        title="12 Jyotirlingas of Lord Shiva – Complete Guide"
        description="Discover the spiritual significance, legends, and stories behind the 12 Jyotirlingas of Lord Shiva across India."
        keywords="12 Jyotirlingas, Lord Shiva temples, Jyotirlinga guide, Shiva pilgrimage, Somnath, Kedarnath, Kashi Vishwanath"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      <main className="pt-36 md:pt-48 lg:pt-52 pb-16">
        <div className="container mx-auto px-4">
          <BlogBreadcrumb pageTitle="12 Jyotirlingas of Lord Shiva" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT SIDEBAR */}
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 border border-stone-100">
                <h3 className="font-bold text-lg mb-4 text-stone-900 border-b pb-3">
                  Table of Contents
                </h3>

                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left px-3 py-2 text-sm text-stone-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <ChevronRight className="w-3 h-3 text-orange-500" />
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* MAIN CONTENT */}
            <article className="lg:col-span-6">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-stone-100">
                {/* HEADER */}
                <div className="p-8 md:p-10 text-center border-b border-stone-50">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6">
                    <Calendar className="w-4 h-4" />
                    <span>Updated 2026</span>
                    <span className="mx-2">•</span>
                    <MapPin className="w-4 h-4" />
                    <span>India</span>
                  </div>

                  <h1 className="font-display text-3xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                    Everything You Should Know About the 12 Jyotirlingas of Lord
                    Shiv
                  </h1>

                  <p className="text-xl text-orange-600 font-medium italic">
                    and Their Spiritual Significance
                  </p>
                </div>

                {/* HERO IMAGE */}
                <div className="w-full">
                  <img
                    src={theTwelveJyotirlingImg}
                    alt="12 Jyotirlingas of Lord Shiva"
                    className="w-full h-auto"
                  />

                  <div className="bg-white p-4 text-center text-sm text-stone-500 italic border-b border-stone-100">
                    Sacred Jyotirlinga temples dedicated to Lord Shiva across
                    India
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8 md:p-10 space-y-10 text-lg leading-relaxed text-stone-700">
                  {/* INTRO */}
                  <section
                    id="intro"
                    className="rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                  
                    {/* Article Content */}
                    <div className="p-8 md:p-12">
                      <div className="space-y-6 text-lg leading-8 text-slate-700">
                        <p>
                          In Hinduism, Lord Shiva is revered as the supreme
                          cosmic force responsible for creation, preservation,
                          and transformation.
                        </p>

                        <p>
                          Among the countless sacred symbols associated with
                          Shiva, the Shivalinga holds the deepest spiritual
                          meaning. It represents the eternal and infinite nature
                          of the universe and the divine power that governs all
                          existence.
                        </p>

                        <p>
                          The Jyotirlingas of Lord Shiva are considered the most
                          sacred manifestations of this divine energy. According
                          to ancient Hindu scriptures such as the Shiva Purana,
                          Linga Purana, and Skanda Purana, Lord Shiva appeared
                          as a pillar of light at twelve sacred places across
                          India.
                        </p>

                        <p>
                          These sacred shrines later became known as the 12
                          Jyotirlingas, attracting millions of devotees every
                          year.
                        </p>

                        <p>
                          For followers of Shaivism, visiting these twelve holy
                          temples is believed to bring spiritual purification,
                          divine blessings, and liberation from past karmas.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* SHIVALINGA */}
                  <section
                    id="meaning-of-shivalinga"
                    className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12"
                  >
                    {/* Small Label */}
                    <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-5">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      Spiritual Symbolism
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6">
                      The Meaning of Shivalinga – Symbol of the Cosmic Universe
                    </h2>

                    {/* Divider */}
                    <div className="w-20 h-1 bg-orange-500 rounded-full mb-8" />

                    {/* Intro Content */}
                    <div className="space-y-6 text-lg leading-8 text-slate-700 mb-10">
                      <p>
                        The word “Linga” in Sanskrit means symbol or mark that
                        represents the unseen reality.
                      </p>

                      <p>
                        The Shivalinga therefore represents the formless nature
                        of Lord Shiva, who exists beyond physical boundaries.
                      </p>

                      <p>
                        In many Hindu philosophical interpretations, the
                        Shivalinga and Yoni together symbolize the union of
                        masculine and feminine cosmic energies.
                      </p>

                      <p>
                        This union represents the eternal cycle of creation,
                        balance, and transformation that sustains the universe.
                      </p>
                    </div>

                    {/* Linga Purana Section */}
                    <div className="border-t border-slate-200 pt-10 mb-10">
                      <h3 className="text-3xl font-bold text-slate-900 mb-6 font-display">
                        According to the Linga Purana
                      </h3>

                      <p className="text-lg leading-8 text-slate-700 mb-6">
                        The Shivalinga is a symbolic representation of the
                        entire universe:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                          <div className="flex items-start gap-3">
                            <span className="mt-2 w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0" />

                            <p className="text-slate-700 text-lg leading-7">
                              The oval-shaped stone represents the cosmic egg or
                              the infinite universe.
                            </p>
                          </div>
                        </div>

                        <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                          <div className="flex items-start gap-3">
                            <span className="mt-2 w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0" />

                            <p className="text-slate-700 text-lg leading-7">
                              The base (Yoni) represents Shakti, the divine
                              feminine energy that sustains creation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Skanda Purana Section */}
                    <div className="border-t border-slate-200 pt-10">
                      <h3 className="text-3xl font-bold text-slate-900 mb-6 font-display">
                        According to the Skanda Purana
                      </h3>

                      <p className="text-lg leading-8 text-slate-700">
                        The Skanda Purana explains that the sky itself is the
                        Linga and the Earth is its base, meaning the entire
                        universe is contained within this sacred symbol.
                      </p>
                    </div>
                  </section>

                  <section
                    id="what-shivalinga-represents"
                    className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12"
                  >
                    {/* Small Label */}
                    <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-5">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      Spiritual Understanding
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6">
                      What Does the Shivalinga Represent?
                    </h2>

                    {/* Divider */}
                    <div className="w-20 h-1 bg-orange-500 rounded-full mb-8" />

                    {/* Intro Content */}
                    <div className="space-y-6 text-lg leading-8 text-slate-700 mb-10">
                      <p>
                        The Shivalinga represents something that cannot be fully
                        seen but can be realized through devotion and spiritual
                        awareness.
                      </p>

                      <p>
                        Just as a person is identified through certain physical
                        attributes, the Shivalinga is a symbol through which
                        devotees recognize the divine presence of Lord Shiva.
                      </p>
                    </div>

                    {/* Spiritual Meaning */}
                    <div className="border-t border-slate-200 pt-10 mb-10">
                      <h3 className="text-3xl font-bold text-slate-900 mb-6 font-display">
                        Spiritually, it represents:
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                          "The source of creation",
                          "The infinite cosmic energy",
                          "The balance of male and female energies",
                          "The ultimate truth beyond form",
                        ].map((item) => (
                          <div
                            key={item}
                            className="border border-slate-200 rounded-2xl p-6 bg-slate-50"
                          >
                            <div className="flex items-start gap-3">
                              <span className="mt-2 w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0" />

                              <p className="text-slate-700 text-lg leading-7">
                                {item}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Closing */}
                    <p className="text-lg leading-8 text-slate-700">
                      This is why Shivalinga worship has been practiced for
                      thousands of years across India.
                    </p>
                  </section>

                  <section
                    id="why-worship-shivalinga"
                    className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12"
                  >
                    {/* Small Label */}
                    <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-5">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      Devotion & Spiritual Practice
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6">
                      Why Do Devotees Worship the Shivalinga?
                    </h2>

                    {/* Divider */}
                    <div className="w-20 h-1 bg-orange-500 rounded-full mb-8" />

                    {/* Intro Content */}
                    <div className="space-y-6 text-lg leading-8 text-slate-700 mb-10">
                      <p>
                        For followers of Lord Shiva, worshipping the Shivalinga
                        is considered one of the highest forms of devotion.
                      </p>

                      <p>
                        The Shivalinga represents the purest and most powerful
                        form of divine consciousness.
                      </p>

                      <p>
                        Devotees believe that praying before a Shivalinga helps
                        them:
                      </p>
                    </div>

                    {/* Benefits List */}
                    <ul className="space-y-4 mb-10">
                      {[
                        "Focus their mind and thoughts",
                        "Connect with higher spiritual awareness",
                        "Remove negative energies",
                        "Attain peace and inner balance",
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

                    {/* Closing Content */}
                    <div className="space-y-6 text-lg leading-8 text-slate-700">
                      <p>
                        In many temples across India, the Shivalinga is
                        worshipped with offerings such as water, milk, honey,
                        bilva leaves, and sacred chants of “Om Namah Shivaya.”
                      </p>

                      <p>
                        Among all Shivalingas, the 12 Jyotirlingas are
                        considered the most powerful and sacred manifestations
                        of Lord Shiva.
                      </p>
                    </div>
                  </section>

                  {/* JYOTIRLINGA */}
                  <section
                    id="what-are-jyotirlingas"
                    className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12"
                  >
                    {/* Small Label */}
                    <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-5">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      Meaning of Jyotirlinga
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6">
                      What Are Jyotirlingas?
                    </h2>

                    {/* Divider */}
                    <div className="w-20 h-1 bg-orange-500 rounded-full mb-8" />

                    {/* Intro */}
                    <p className="text-lg leading-8 text-slate-700 mb-8">
                      The word “Jyotirlinga” comes from two Sanskrit words:
                    </p>

                    {/* Meaning Box */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
                        <div className="flex items-start gap-3">
                          <span className="mt-2 w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0" />

                          <div>
                            <p className="text-xl font-bold text-slate-900 mb-1">
                              Jyoti
                            </p>

                            <p className="text-slate-700 text-lg leading-7">
                              Meaning divine light
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
                        <div className="flex items-start gap-3">
                          <span className="mt-2 w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0" />

                          <div>
                            <p className="text-xl font-bold text-slate-900 mb-1">
                              Linga
                            </p>

                            <p className="text-slate-700 text-lg leading-7">
                              Meaning symbol or mark of the divine
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Main Explanation */}
                    <div className="space-y-6 text-lg leading-8 text-slate-700">
                      <p>
                        Thus, Jyotirlinga means “The radiant or self-manifested
                        light of Lord Shiva.”
                      </p>

                      <p>
                        According to the Shiva Purana, Lord Shiva once appeared
                        as an infinite pillar of light, symbolizing his
                        boundless form.
                      </p>

                      <p>
                        The twelve locations where this divine light manifested
                        are today known as the 12 Jyotirlinga temples of India.
                      </p>
                    </div>
                  </section>

                  {/* LIST */}
                  <section
                    id="12-jyotirlingas"
                    className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12"
                  >
                    {/* Small Label */}
                    <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-5">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      Sacred Shiva Temples
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6">
                      The 12 Jyotirlingas of Lord Shiva
                    </h2>

                    {/* Divider */}
                    <div className="w-20 h-1 bg-orange-500 rounded-full mb-8" />

                    {/* Intro */}
                    <p className="text-lg leading-8 text-slate-700 mb-10">
                      Below are the twelve sacred Jyotirlinga temples along with
                      their locations:
                    </p>

                    {/* Jyotirlinga Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {[
                        {
                          number: "01",
                          name: "Somnath Jyotirlinga",
                          location: "Prabhas Patan, Gujarat",
                        },

                        {
                          number: "02",
                          name: "Mallikarjuna Jyotirlinga",
                          location: "Srisailam, Andhra Pradesh",
                        },

                        {
                          number: "03",
                          name: "Mahakaleshwar Jyotirlinga",
                          location: "Ujjain, Madhya Pradesh",
                        },

                        {
                          number: "04",
                          name: "Omkareshwar Jyotirlinga",
                          location: "Mandhata Island, Madhya Pradesh",
                        },

                        {
                          number: "05",
                          name: "Kedarnath Jyotirlinga",
                          location: "Uttarakhand (Himalayas)",
                        },

                        {
                          number: "06",
                          name: "Bhimashankar Jyotirlinga",
                          location: "Pune District, Maharashtra",
                        },

                        {
                          number: "07",
                          name: "Kashi Vishwanath Jyotirlinga",
                          location: "Varanasi, Uttar Pradesh",
                        },

                        {
                          number: "08",
                          name: "Trimbakeshwar Jyotirlinga",
                          location: "Nashik, Maharashtra",
                        },

                        {
                          number: "09",
                          name: "Vaidyanath Jyotirlinga",
                          location: "Deoghar, Jharkhand / Parli, Maharashtra",
                        },

                        {
                          number: "10",
                          name: "Nageshwar Jyotirlinga",
                          location: "Near Dwarka, Gujarat",
                        },

                        {
                          number: "11",
                          name: "Rameshwaram Jyotirlinga",
                          location: "Tamil Nadu",
                        },

                        {
                          number: "12",
                          name: "Grishneshwar Jyotirlinga",
                          location: "Aurangabad, Maharashtra",
                        },
                      ].map((jyotirlinga) => (
                        <div
                          key={jyotirlinga.number}
                          className="border border-slate-200 rounded-2xl p-6 hover:border-orange-200 transition-colors"
                        >
                          <div className="flex items-start gap-5">
                            {/* Number */}
                            <div className="w-12 h-12 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                              <span className="text-orange-600 font-bold">
                                {jyotirlinga.number}
                              </span>
                            </div>

                            {/* Content */}
                            <div>
                              <h3 className="text-xl font-bold text-slate-900 mb-2 font-display leading-snug">
                                {jyotirlinga.name}
                              </h3>

                              <p className="text-slate-600 text-lg leading-7">
                                {jyotirlinga.location}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section
                    id="jyotirlinga-shloka"
                    className="rounded-3xl border border-orange-200 bg-orange-50/40 p-8 md:p-12"
                  >
                    {/* Small Label */}
                    <div className="inline-flex items-center gap-2 text-orange-700 text-sm font-semibold mb-5">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      Sacred Sanskrit Verse
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6">
                      Sanskrit Shloka Describing the 12 Jyotirlingas
                    </h2>

                    {/* Divider */}
                    <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                    {/* Shloka Box */}
                    <div className="bg-white border border-orange-100 rounded-3xl p-8 md:p-10 mb-10 shadow-sm">
                      <div className="space-y-5 text-xl md:text-2xl leading-[2.5rem] text-slate-900 font-medium">
                        <p>
                          सौराष्ट्रे सोमनाथं च श्रीशैले मल्लिकार्जुनम्।
                          <br />
                          उज्जयिन्यां महाकालमोङ्कारममलेश्वरम्॥
                        </p>

                        <p>
                          परल्यां वैद्यनाथं च डाकिन्यां भीमशङ्करम्।
                          <br />
                          सेतुबन्धे तु रामेशं नागेशं दारुकावने॥
                        </p>

                        <p>
                          वाराणस्यां तु विश्वेशं त्र्यम्बकं गौतमीतटे।
                          <br />
                          हिमालये तु केदारं घुश्मेशं च शिवालये॥
                        </p>

                        <p>
                          एतानि ज्योतिर्लिङ्गानि सायं प्रातः पठेन्नरः।
                          <br />
                          सप्तजन्मकृतं पापं स्मरणेन विनश्यति॥
                        </p>
                      </div>
                    </div>

                    {/* Meaning Section */}
                    <div className="border-l-4 border-orange-500 bg-white rounded-r-2xl p-6 md:p-8 shadow-sm">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">
                        Meaning of the Shloka
                      </h3>

                      <p className="text-lg leading-8 text-slate-700">
                        Whoever remembers or recites the names of these twelve
                        Jyotirlingas every morning and evening is freed from the
                        sins of seven lifetimes.
                      </p>
                    </div>
                  </section>

                  <section
                    id="stories-behind-jyotirlingas"
                    className="rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    {/* Content Wrapper */}
                    <div className="px-8 py-10 md:px-12 md:py-14">
                      {/* Small Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-6">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        Sacred Legends of Shiva
                      </div>

                      {/* Heading */}
                      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-8 max-w-5xl">
                        The Sacred Stories Behind the 12 Jyotirlingas of Lord
                        Shiva
                      </h2>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Main Content */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                        <p>
                          The 12 Jyotirlingas of Lord Shiva are not just temples
                          but sacred energy centers believed to radiate the
                          divine presence of Shiva himself.
                        </p>

                        <p>
                          Each Jyotirlinga has a unique mythological story,
                          historical background, and spiritual significance that
                          has been passed down through scriptures like the Shiva
                          Purana, Skanda Purana, and Linga Purana.
                        </p>

                        <p>
                          Millions of devotees undertake the Jyotirlinga
                          pilgrimage every year to seek blessings, remove past
                          karmas, and experience the powerful spiritual energy
                          associated with Lord Shiva.
                        </p>

                        <p>
                          Below is a detailed story and significance of each of
                          the twelve sacred Jyotirlingas.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* SOMNATH */}
                  <section
                    id="somnath-jyotirlinga"
                    className="rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    {/* Content Wrapper */}
                    <div className="px-8 py-10 md:px-12 md:py-14">
                      {/* Small Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-6">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        1st Jyotirlinga
                      </div>

                      {/* Heading */}
                      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-5 max-w-5xl">
                        1. Somnath Jyotirlinga – The Eternal Shrine of the Moon
                        God
                      </h2>

                      {/* Location */}
                      <p className="text-lg text-slate-600 font-medium mb-8">
                        Location: Prabhas Patan, Gujarat
                      </p>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Image Space */}
                      <div className="w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-12">
                        <img
                          src={somnathJyotirlingImg}
                          alt="Somnath Jyotirlinga Temple"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Main Content */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                        <p>
                          Somnath Jyotirlinga is considered the first and most
                          ancient among the twelve Jyotirlingas of Lord Shiva.
                          Located on the western coast of Gujarat near the
                          Arabian Sea, this temple has stood as a symbol of
                          devotion and resilience for centuries.
                        </p>

                        {/* Legend */}
                        <div className="pt-6">
                          <h3 className="text-3xl font-bold text-slate-900 mb-6 font-display">
                            The Legend of Somnath
                          </h3>

                          <div className="space-y-7">
                            <p>
                              According to the Shiva Purana, the Moon God
                              (Chandra) was married to the 27 daughters of King
                              Daksha, who represent the 27 constellations in
                              Hindu astrology.
                            </p>

                            <p>
                              However, Chandra loved only one wife, Rohini, and
                              ignored the others. This angered Daksha, who
                              cursed Chandra to gradually lose his brightness
                              and power.
                            </p>

                            <p>
                              As the Moon began fading, the universe was
                              affected because tides, seasons, and natural
                              balance were disturbed.
                            </p>

                            <p>
                              Realizing his mistake, Chandra began intense
                              penance and prayed to Lord Shiva at the sacred
                              place of Prabhas Kshetra.
                            </p>

                            <p>
                              Pleased with his devotion, Lord Shiva partially
                              lifted the curse and allowed Chandra to regain his
                              brightness every month. This cycle became the
                              waxing and waning phases of the moon.
                            </p>

                            <p>
                              In gratitude, Chandra built a temple in honor of
                              Lord Shiva and installed the Somnath Jyotirlinga,
                              meaning “Lord of the Moon.”
                            </p>
                          </div>
                        </div>

                        {/* Historical Importance */}
                        <div className="pt-6 border-t border-slate-200">
                          <h3 className="text-3xl font-bold text-slate-900 mb-6 font-display">
                            Historical Importance
                          </h3>

                          <div className="space-y-7">
                            <p>
                              Somnath temple has been destroyed and rebuilt
                              multiple times throughout history.
                            </p>

                            <p>
                              Despite invasions and destruction, the temple has
                              always been reconstructed, symbolizing the eternal
                              power of faith and devotion.
                            </p>

                            <p>
                              Today, Somnath stands as one of the most sacred
                              pilgrimage sites for devotees of Lord Shiva.
                            </p>
                          </div>
                        </div>

                        {/* Read More */}
                        <div className="pt-4">
                          <Link
                            to="/blog/somnath-jyotirlinga-gujarat-guide"
                            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-lg transition-colors"
                          >
                            Read More About Somnath Jyotirlinga
                            <ArrowRight></ArrowRight>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* MALLIKARJUNA */}
                  <section
                    id="mallikarjuna-jyotirlinga"
                    className="rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    {/* Content Wrapper */}
                    <div className="px-8 py-10 md:px-12 md:py-14">
                      {/* Small Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-6">
                        <Flame className="w-4 h-4" />
                        2nd Jyotirlinga
                      </div>

                      {/* Heading */}
                      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6 max-w-5xl">
                        2. Mallikarjuna Jyotirlinga – The Sacred Mountain of
                        Srisailam
                      </h2>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-6 mb-8">
                        <div className="flex items-center gap-2 text-slate-600">
                          <MapPin className="w-5 h-5 text-orange-500" />

                          <span className="text-lg font-medium">
                            Srisailam, Andhra Pradesh
                          </span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Image Space */}
                      <div className="w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-12">
                        <img
                          src={malikaArjunJyotirlingImg}
                          alt="Mallikarjuna Jyotirlinga Temple"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Main Content */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                        <p>
                          Mallikarjuna Jyotirlinga is located on the Srisailam
                          mountain range near the banks of the Krishna River.
                        </p>

                        <p>
                          It is one of the few temples where both Shiva and
                          Parvati are worshipped together.
                        </p>

                        {/* Legend Section */}
                        <div className="pt-6">
                          <div className="flex items-center gap-3 mb-6">
                            <Mountain className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              The Legend of Kartikeya and Ganesha
                            </h3>
                          </div>

                          <div className="space-y-7">
                            <p>
                              According to the Skanda Purana, Lord Shiva and
                              Goddess Parvati once decided to find out which of
                              their sons, Lord Ganesha or Lord Kartikeya, was
                              more deserving to be married first.
                            </p>

                            <p>
                              They announced a challenge: whoever circled the
                              entire universe and returned first would be
                              declared the winner.
                            </p>

                            <p>
                              Lord Kartikeya immediately set off on his peacock
                              to travel across the universe.
                            </p>

                            <p>
                              However, Lord Ganesha simply walked around his
                              parents and declared that his parents were the
                              entire universe for him.
                            </p>

                            <p>
                              Impressed by his wisdom, Shiva and Parvati
                              declared Ganesha the winner.
                            </p>

                            <p>
                              When Kartikeya returned and learned about this
                              decision, he felt disappointed and left Mount
                              Kailash to live alone on Mount Srisailam.
                            </p>

                            <p>
                              Concerned about their son, Shiva and Parvati came
                              to Srisailam and stayed there as Mallikarjuna
                              Jyotirlinga, so that Kartikeya would not feel
                              lonely.
                            </p>
                          </div>
                        </div>

                        {/* Spiritual Significance */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Heart className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              Spiritual Significance
                            </h3>
                          </div>

                          <p>
                            Mallikarjuna temple is considered one of the most
                            powerful places where devotees can receive both
                            Shiva’s blessings and Parvati’s maternal grace.
                          </p>
                        </div>

                        {/* Read More */}
                        <div className="pt-4">
                          <Link
                            to="/blog/mallikarjuna-jyotirlinga"
                            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-lg transition-colors"
                          >
                            Read More About Mallikarjuna Jyotirlinga
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* MAHAKALESHWAR */}
                  <section
                    id="mahakaleshwar-jyotirlinga"
                    className="rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    {/* Content Wrapper */}
                    <div className="px-8 py-10 md:px-12 md:py-14">
                      {/* Small Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-6">
                        <Flame className="w-4 h-4" />
                        3rd Jyotirlinga
                      </div>

                      {/* Heading */}
                      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6 max-w-5xl">
                        3. Mahakaleshwar Jyotirlinga – The Lord Who Controls
                        Time and Death
                      </h2>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-6 mb-8">
                        <div className="flex items-center gap-2 text-slate-600">
                          <MapPin className="w-5 h-5 text-orange-500" />

                          <span className="text-lg font-medium">
                            Ujjain, Madhya Pradesh
                          </span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Image Space */}
                      <div className="w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-12">
                        <img
                          src={mahakaleshwarJyotirlingImg}
                          alt="Mahakaleshwar Jyotirlinga Temple"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Main Content */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                        <p>
                          Mahakaleshwar Jyotirlinga is one of the most revered
                          and powerful temples dedicated to Lord Shiva.
                        </p>

                        <p>
                          Located in the ancient city of Ujjain, on the banks of
                          the sacred Kshipra River, this temple is considered
                          one of the holiest pilgrimage destinations in India.
                        </p>

                        <p>
                          The name Mahakaleshwar comes from two Sanskrit words:
                        </p>

                        {/* Meaning Box */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
                            <div className="flex items-start gap-3">
                              <span className="mt-2 w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0" />

                              <div>
                                <p className="text-xl font-bold text-slate-900 mb-1">
                                  Maha
                                </p>

                                <p className="text-slate-700 text-lg leading-7">
                                  Meaning great
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
                            <div className="flex items-start gap-3">
                              <span className="mt-2 w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0" />

                              <div>
                                <p className="text-xl font-bold text-slate-900 mb-1">
                                  Kala
                                </p>

                                <p className="text-slate-700 text-lg leading-7">
                                  Meaning time or death
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p>
                          Thus, Mahakaleshwar represents the great Lord who
                          governs time, destiny, and death itself.
                        </p>

                        <p>
                          Unlike most Shiva temples, the Mahakaleshwar
                          Jyotirlinga is south-facing, which holds special
                          tantric significance and is believed to protect
                          devotees from negative energies and untimely death.
                        </p>

                        {/* Legend Section */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Mountain className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              The Legend Behind Mahakaleshwar Jyotirlinga
                            </h3>
                          </div>

                          <div className="space-y-7">
                            <p>
                              According to the Shiva Purana, there once lived a
                              devoted Brahmin named Shiv Bhakta Ved in the city
                              of Ujjain.
                            </p>

                            <p>
                              He had four sons who were deeply devoted to Lord
                              Shiva and performed regular prayers and rituals in
                              his honor.
                            </p>

                            <p>
                              At the same time, a powerful demon named Dushan
                              began terrorizing the region.
                            </p>

                            <p>
                              Dushan hated religious practices and ordered
                              people to stop worshipping Lord Shiva.
                            </p>

                            <p>
                              When the Brahmin family refused to obey his
                              command and continued their prayers, the demon
                              attacked them.
                            </p>

                            <p>
                              As the demon tried to harm the devotees, the earth
                              suddenly trembled and a brilliant pillar of divine
                              light emerged from the ground.
                            </p>

                            <p>
                              From this light appeared Lord Shiva in his fierce
                              form.
                            </p>

                            <p>
                              With a powerful roar, Lord Shiva destroyed the
                              demon instantly and protected his devotees.
                            </p>

                            <p>
                              After witnessing this divine miracle, the devotees
                              of Ujjain requested Lord Shiva to remain there
                              permanently to protect them from evil forces.
                            </p>

                            <p>
                              Lord Shiva agreed and manifested himself as
                              Mahakaleshwar Jyotirlinga, becoming the eternal
                              guardian of Ujjain.
                            </p>
                          </div>
                        </div>

                        {/* Bhasma Aarti */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Flame className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              Unique Ritual: The Famous Bhasma Aarti
                            </h3>
                          </div>

                          <div className="space-y-7">
                            <p>
                              Mahakaleshwar Temple is famous for its Bhasma
                              Aarti, one of the most unique rituals in Hindu
                              temple traditions.
                            </p>

                            <p>
                              In this ritual, Lord Shiva is worshipped with
                              Bhasma (sacred ash) early in the morning before
                              sunrise.
                            </p>

                            <p>
                              The ash symbolizes the ultimate truth that
                              everything in the universe eventually turns to
                              ashes.
                            </p>

                            <p>
                              It reminds devotees of the temporary nature of
                              worldly life and the eternal nature of the soul.
                            </p>

                            <p>
                              Witnessing the Bhasma Aarti is considered an
                              extremely auspicious spiritual experience.
                            </p>
                          </div>
                        </div>

                        {/* Spiritual Importance */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Heart className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              Spiritual Importance of Mahakaleshwar
                            </h3>
                          </div>

                          <p className="mb-6">
                            Devotees believe that praying at Mahakaleshwar
                            Jyotirlinga can:
                          </p>

                          <ul className="space-y-4 mb-8">
                            {[
                              "Protect from untimely death",
                              "Remove fear and negative energy",
                              "Grant liberation from past karmas",
                              "Bring spiritual strength and inner peace",
                            ].map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-slate-700 text-lg leading-7"
                              >
                                <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                                {item}
                              </li>
                            ))}
                          </ul>

                          <p>
                            For centuries, saints, yogis, and spiritual seekers
                            have visited Mahakaleshwar to experience the
                            powerful spiritual vibrations of Lord Shiva.
                          </p>
                        </div>

                        {/* Read More */}
                        <div className="pt-4">
                          <Link
                            to="/blog/mahakaleshwar-jyotirlinga-ujjain-guide"
                            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-lg transition-colors"
                          >
                            Read More About Mahakaleshwar Jyotirlinga
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Omkareshwar Jyotirlinga */}
                  <section
                    id="omkareshwar-jyotirlinga"
                    className="rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    {/* Content Wrapper */}
                    <div className="px-8 py-10 md:px-12 md:py-14">
                      {/* Small Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-6">
                        <Flame className="w-4 h-4" />
                        4th Jyotirlinga
                      </div>

                      {/* Heading */}
                      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6 max-w-5xl">
                        4. Omkareshwar Jyotirlinga – The Sacred Sound of
                        Creation
                      </h2>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-6 mb-8">
                        <div className="flex items-center gap-2 text-slate-600">
                          <MapPin className="w-5 h-5 text-orange-500" />

                          <span className="text-lg font-medium">
                            Mandhata Island, Madhya Pradesh
                          </span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Image Space */}
                      <div className="w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-12">
                        <img
                          src={omkareshwarJyotirlingImg}
                          alt="Omkareshwar Jyotirlinga Temple"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Main Content */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                        <p>
                          Omkareshwar Jyotirlinga is located on a small island
                          called Mandhata in the middle of the Narmada River.
                        </p>

                        <p>
                          One of the most fascinating aspects of this sacred
                          place is that the island itself is naturally shaped
                          like the sacred symbol ॐ (Om) when viewed from above.
                        </p>

                        <p>
                          In Hindu philosophy, the sound Om is considered the
                          primordial vibration of the universe, from which all
                          creation emerged.
                        </p>

                        <p>
                          Thus, Omkareshwar Jyotirlinga symbolizes the cosmic
                          sound and energy of creation.
                        </p>

                        {/* Legend Section */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Mountain className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              The Legend of Omkareshwar Jyotirlinga
                            </h3>
                          </div>

                          <div className="space-y-7">
                            <p>
                              According to ancient scriptures, there was once a
                              powerful king named Mandhata who belonged to the
                              Ikshvaku dynasty.
                            </p>

                            <p>
                              King Mandhata was a great devotee of Lord Shiva
                              and performed severe penance on the banks of the
                              Narmada River.
                            </p>

                            <p>
                              Pleased with his devotion, Lord Shiva appeared
                              before him and granted his wish by manifesting
                              himself as Omkareshwar Jyotirlinga.
                            </p>

                            <p>
                              Another legend says that the Vindhya Mountain once
                              felt inferior to the mighty Himalayas.
                            </p>

                            <p>
                              In order to gain greater power and recognition,
                              Vindhya began performing intense penance to please
                              Lord Shiva.
                            </p>

                            <p>
                              Moved by his devotion, Lord Shiva appeared and
                              blessed the mountain.
                            </p>

                            <p>
                              The place where Shiva manifested became known as
                              Omkareshwar Jyotirlinga.
                            </p>
                          </div>
                        </div>

                        {/* Spiritual Significance */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Heart className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              Spiritual Significance of Omkareshwar
                            </h3>
                          </div>

                          <p className="mb-6">
                            The temple is believed to radiate the cosmic
                            vibration of Om, which represents:
                          </p>

                          {/* Meaning Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                            {["Creation", "Preservation", "Destruction"].map(
                              (item) => (
                                <div
                                  key={item}
                                  className="bg-orange-50 border border-orange-100 rounded-2xl p-6"
                                >
                                  <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                                    <p className="text-slate-700 text-lg leading-7 font-medium">
                                      {item}
                                    </p>
                                  </div>
                                </div>
                              ),
                            )}
                          </div>

                          <p>
                            Meditating or praying at Omkareshwar is believed to
                            bring mental peace, spiritual clarity, and divine
                            blessings.
                          </p>

                          <p>
                            Pilgrims often perform parikrama (circumambulation)
                            of the entire island, which is considered a highly
                            sacred act.
                          </p>
                        </div>

                        {/* Read More */}
                        <div className="pt-4">
                          <Link
                            to="/blog/omkareshwar-jyotirlinga"
                            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-lg transition-colors"
                          >
                            Read More About Omkareshwar Jyotirlinga
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Bhimashankar Jyotirlinga */}
                  <section
                    id="bhimashankar-jyotirlinga"
                    className="rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    {/* Content Wrapper */}
                    <div className="px-8 py-10 md:px-12 md:py-14">
                      {/* Small Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-6">
                        <Flame className="w-4 h-4" />
                        5th Jyotirlinga
                      </div>

                      {/* Heading */}
                      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6 max-w-5xl">
                        5. Bhimashankar Jyotirlinga – The Divine Slayer of Evil
                      </h2>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-6 mb-8">
                        <div className="flex items-center gap-2 text-slate-600">
                          <MapPin className="w-5 h-5 text-orange-500" />

                          <span className="text-lg font-medium">
                            Pune District, Maharashtra
                          </span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Image Space */}
                      <div className="w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-12">
                        <img
                          src={bhimashankarJyotirlingImg}
                          alt="Bhimashankar Jyotirlinga Temple"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Main Content */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                        <p>
                          Bhimashankar Jyotirlinga is located deep within the
                          dense forests of the Sahyadri Hills in Maharashtra.
                        </p>

                        <p>
                          Surrounded by natural beauty, rivers, and wildlife,
                          this sacred temple is considered one of the most
                          spiritually powerful manifestations of Lord Shiva.
                        </p>

                        <p>
                          The temple is also closely associated with the origin
                          of the Bhima River, which is believed to have emerged
                          due to Lord Shiva’s divine energy after a fierce
                          battle against evil forces.
                        </p>

                        <p>
                          The peaceful yet mystical atmosphere of Bhimashankar
                          makes it a major destination for devotees, sages, and
                          seekers of spiritual peace.
                        </p>

                        {/* Legend Section */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Mountain className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              The Legend Behind Bhimashankar Jyotirlinga
                            </h3>
                          </div>

                          <div className="space-y-7">
                            <p>
                              According to the Shiva Purana, there once lived a
                              powerful demon named Bhimasura.
                            </p>

                            <p>
                              He was the son of Kumbhakarna, the brother of
                              Ravana from the Ramayana.
                            </p>

                            <p>
                              After learning about the death of his father at
                              the hands of Lord Rama, Bhimasura became furious
                              and developed hatred toward the gods and devotees
                              of Lord Shiva.
                            </p>

                            <p>
                              Through severe penance, Bhimasura gained immense
                              strength and began spreading terror across heaven
                              and earth.
                            </p>

                            <p>
                              He defeated kings, troubled saints, and imprisoned
                              many devotees.
                            </p>

                            <p>
                              Among those imprisoned was a great devotee of Lord
                              Shiva named King Sudakshin.
                            </p>

                            <p>
                              Despite suffering in captivity, the king continued
                              worshipping Lord Shiva with complete devotion.
                            </p>

                            <p>
                              Enraged by this devotion, Bhimasura attempted to
                              kill the king.
                            </p>

                            <p>
                              At that very moment, Lord Shiva appeared in a
                              brilliant form of divine light to protect his
                              devotee.
                            </p>

                            <p>
                              A fierce battle took place between Lord Shiva and
                              Bhimasura.
                            </p>

                            <p>
                              Finally, Lord Shiva destroyed the demon and
                              restored peace to the world.
                            </p>

                            <p>
                              After the victory, the gods and sages requested
                              Lord Shiva to remain at that sacred place forever
                              for the protection of humanity.
                            </p>

                            <p>
                              Lord Shiva accepted their prayers and manifested
                              himself as Bhimashankar Jyotirlinga.
                            </p>
                          </div>
                        </div>

                        {/* Spiritual Importance */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Heart className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              Spiritual Importance of Bhimashankar
                            </h3>
                          </div>

                          <p className="mb-6">
                            Devotees believe that worshipping at Bhimashankar
                            Jyotirlinga helps:
                          </p>

                          <ul className="space-y-4 mb-8">
                            {[
                              "Remove negative energies and obstacles",
                              "Protect devotees from evil influences",
                              "Bring courage, strength, and spiritual awakening",
                              "Grant peace of mind and inner stability",
                            ].map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-slate-700 text-lg leading-7"
                              >
                                <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                                {item}
                              </li>
                            ))}
                          </ul>

                          <p>
                            The temple’s location amidst forests and mountains
                            creates a deeply meditative atmosphere, making it an
                            ideal place for prayer and spiritual reflection.
                          </p>
                        </div>

                        {/* Read More */}
                        <div className="pt-4">
                          <Link
                            to="/blog/bhimashankar-jyotirlinga-guide"
                            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-lg transition-colors"
                          >
                            Read More About Bhimashankar Jyotirlinga
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Kedarnath Jyotirlinga */}
                  <section
                    id="kedarnath-jyotirlinga"
                    className="rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    {/* Content Wrapper */}
                    <div className="px-8 py-10 md:px-12 md:py-14">
                      {/* Small Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-6">
                        <Flame className="w-4 h-4" />
                        6th Jyotirlinga
                      </div>

                      {/* Heading */}
                      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6 max-w-5xl">
                        6. Kedarnath Jyotirlinga – The Divine Temple of the
                        Himalayas
                      </h2>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-6 mb-8">
                        <div className="flex items-center gap-2 text-slate-600">
                          <MapPin className="w-5 h-5 text-orange-500" />

                          <span className="text-lg font-medium">
                            Uttarakhand (Himalayas)
                          </span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Image Space */}
                      <div className="w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-12">
                        <img
                          src={kedarnathJyotirlingImg}
                          alt="Kedarnath Jyotirlinga Temple"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Main Content */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                        <p>
                          Kedarnath Jyotirlinga is one of the most sacred and
                          spiritually powerful temples dedicated to Lord Shiva.
                        </p>

                        <p>
                          Nestled amidst the majestic Himalayan mountains of
                          Uttarakhand near the Mandakini River, Kedarnath stands
                          at an altitude of more than 11,000 feet above sea
                          level.
                        </p>

                        <p>
                          Surrounded by snow-covered peaks and breathtaking
                          natural beauty, the temple is considered a gateway to
                          spiritual liberation and divine consciousness.
                        </p>

                        <p>
                          Kedarnath is also one of the four sacred sites of the
                          Char Dham Yatra and holds immense importance among
                          devotees of Lord Shiva.
                        </p>

                        <p>
                          The harsh weather conditions and difficult mountain
                          journey symbolize the spiritual path of devotion,
                          faith, and surrender to the divine.
                        </p>

                        {/* Legend Section */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Mountain className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              The Legend Behind Kedarnath Jyotirlinga
                            </h3>
                          </div>

                          <div className="space-y-7">
                            <p>
                              According to the Mahabharata and Shiva Purana,
                              after the great Kurukshetra war, the Pandavas felt
                              deep guilt for the destruction and loss of life
                              caused during the battle.
                            </p>

                            <p>
                              Seeking forgiveness for their sins, the Pandavas
                              went in search of Lord Shiva.
                            </p>

                            <p>
                              However, Lord Shiva was unhappy with the bloodshed
                              of the war and did not wish to meet them.
                            </p>

                            <p>
                              To avoid the Pandavas, Lord Shiva disguised
                              himself as a bull and hid in the Himalayan region
                              of Kedarnath.
                            </p>

                            <p>
                              When the Pandavas finally discovered him, Lord
                              Shiva attempted to disappear into the earth.
                            </p>

                            <p>
                              During this moment, Bhima tried to hold the bull
                              by its tail and hind portion.
                            </p>

                            <p>
                              The body of the bull vanished into the ground, but
                              the hump remained visible at Kedarnath.
                            </p>

                            <p>
                              This hump is worshipped today as the sacred
                              Kedarnath Jyotirlinga.
                            </p>

                            <p>
                              According to tradition, the other body parts of
                              Lord Shiva appeared at different places in the
                              Himalayas, which later became the famous Panch
                              Kedar temples.
                            </p>

                            <p>
                              Moved by the devotion and repentance of the
                              Pandavas, Lord Shiva forgave them and blessed the
                              region forever with his divine presence.
                            </p>
                          </div>
                        </div>

                        {/* Spiritual Importance */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Heart className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              Spiritual Importance of Kedarnath
                            </h3>
                          </div>

                          <p className="mb-6">
                            Kedarnath Jyotirlinga is believed to be a place
                            where devotees can experience deep spiritual
                            purification and divine energy.
                          </p>

                          <p className="mb-6">
                            Devotees believe that visiting Kedarnath helps:
                          </p>

                          <ul className="space-y-4 mb-8">
                            {[
                              "Cleanse past karmas and sins",
                              "Bring spiritual strength and inner peace",
                              "Grant blessings for liberation (moksha)",
                              "Deepen devotion and surrender to Lord Shiva",
                            ].map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-slate-700 text-lg leading-7"
                              >
                                <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                                {item}
                              </li>
                            ))}
                          </ul>

                          <p>
                            The powerful silence of the Himalayas and the sacred
                            atmosphere of Kedarnath create a truly
                            transformative spiritual experience for pilgrims
                            from around the world.
                          </p>
                        </div>

                        {/* Read More */}
                        <div className="pt-4">
                          <Link
                            to="/blog/kedarnath-jyotirlinga-guide"
                            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-lg transition-colors"
                          >
                            Read More About Kedarnath Jyotirlinga
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Kashi Vishwanath Jyotirlinga */}
                  <section
                    id="kashi-vishwanath-jyotirlinga"
                    className="rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    {/* Content Wrapper */}
                    <div className="px-8 py-10 md:px-12 md:py-14">
                      {/* Small Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-6">
                        <Flame className="w-4 h-4" />
                        7th Jyotirlinga
                      </div>

                      {/* Heading */}
                      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6 max-w-5xl">
                        7. Kashi Vishwanath Jyotirlinga – The Eternal Light of
                        Lord Shiva in the City of Liberation
                      </h2>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-6 mb-8">
                        <div className="flex items-center gap-2 text-slate-600">
                          <MapPin className="w-5 h-5 text-orange-500" />

                          <span className="text-lg font-medium">
                            Varanasi, Uttar Pradesh
                          </span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Image Space */}
                      <div className="w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-12">
                        <img
                          src={kashiVishwanathJyotirlingImg}
                          alt="Kashi Vishwanath Jyotirlinga Temple"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Main Content */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                        <p>
                          Kashi Vishwanath Jyotirlinga is one of the most sacred
                          temples dedicated to Lord Shiva and is located in the
                          ancient city of Varanasi, also known as Kashi or
                          Banaras.
                        </p>

                        <p>
                          The temple stands on the western bank of the holy
                          River Ganga, and for thousands of years it has been
                          one of the most revered pilgrimage sites in Hinduism.
                        </p>

                        <p>The name Vishwanath means “Lord of the Universe.”</p>

                        <p>
                          Lord Shiva, in this form, is believed to be the
                          supreme ruler of all creation.
                        </p>

                        <p>
                          Kashi itself holds immense spiritual significance.
                        </p>

                        <p>
                          According to Hindu belief, it is one of the oldest
                          living cities in the world and is considered the
                          spiritual capital of India.
                        </p>

                        <p>
                          It is believed that Lord Shiva himself chose Kashi as
                          his permanent abode, making it one of the holiest
                          places on Earth.
                        </p>

                        {/* Legend Section */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Mountain className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              The Legend Behind Kashi Vishwanath Jyotirlinga
                            </h3>
                          </div>

                          <div className="space-y-7">
                            <p>
                              According to the Shiva Purana, Lord Shiva and
                              Goddess Parvati once decided to reside in Kashi to
                              bless humanity and guide devotees toward spiritual
                              liberation.
                            </p>

                            <p>
                              The city of Kashi is believed to rest on the
                              trident (Trishul) of Lord Shiva, which protects it
                              from destruction even during cosmic dissolution.
                            </p>

                            <p>
                              Another legend says that once there was a dispute
                              between Lord Brahma and Lord Vishnu about who was
                              the supreme deity.
                            </p>

                            <p>
                              At that moment, an infinite pillar of light
                              appeared before them. This pillar was Lord Shiva
                              himself.
                            </p>

                            <p>
                              Both gods tried to find the beginning and end of
                              the pillar but failed, realizing that Shiva was
                              the ultimate reality beyond creation.
                            </p>

                            <p>
                              It is believed that one of the places where this
                              divine pillar of light appeared was in Kashi,
                              where Shiva manifested as Vishwanath Jyotirlinga.
                            </p>
                          </div>
                        </div>

                        {/* Spiritual Importance */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Heart className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              Spiritual Importance of Kashi Vishwanath
                            </h3>
                          </div>

                          <div className="space-y-7">
                            <p>
                              Kashi Vishwanath Temple holds a unique place in
                              Hindu spirituality because it is believed that
                              dying in Kashi grants liberation (moksha).
                            </p>

                            <p>
                              According to sacred texts, when a devotee takes
                              their last breath in Kashi, Lord Shiva himself
                              whispers the Taraka Mantra into their ears,
                              helping the soul break free from the cycle of
                              birth and death.
                            </p>

                            <p>
                              This belief has drawn pilgrims, saints, and
                              spiritual seekers to Kashi for centuries.
                            </p>

                            <p>
                              Devotees also perform sacred rituals on the banks
                              of the Ganga, including:
                            </p>
                          </div>

                          {/* Rituals List */}
                          <ul className="space-y-4 my-8">
                            {[
                              "Pind Daan for ancestors",
                              "Ganga Snan (holy bath)",
                              "Rudrabhishek of the Jyotirlinga",
                            ].map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-slate-700 text-lg leading-7"
                              >
                                <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Historical Significance */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Calendar className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              Historical Significance
                            </h3>
                          </div>

                          <div className="space-y-7">
                            <p>
                              The Kashi Vishwanath Temple has faced destruction
                              several times during history but has always been
                              rebuilt due to the deep devotion of the people.
                            </p>

                            <p>
                              The current temple structure was rebuilt in 1780
                              by Maharani Ahilyabai Holkar of Indore.
                            </p>

                            <p>
                              Later, the temple complex was further expanded and
                              renovated.
                            </p>

                            <p>
                              Today, the temple is part of the grand Kashi
                              Vishwanath Corridor, which connects the temple
                              directly to the ghats of the Ganga.
                            </p>
                          </div>
                        </div>

                        {/* Why Devotees Visit */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Heart className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              Why Devotees Visit Kashi Vishwanath
                            </h3>
                          </div>

                          <p className="mb-6">
                            Devotees believe that visiting Kashi Vishwanath
                            Jyotirlinga:
                          </p>

                          <ul className="space-y-4 mb-8">
                            {[
                              "Removes sins from many lifetimes",
                              "Grants spiritual liberation",
                              "Brings peace and divine blessings",
                              "Helps devotees attain moksha",
                            ].map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-slate-700 text-lg leading-7"
                              >
                                <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                                {item}
                              </li>
                            ))}
                          </ul>

                          <p>
                            For millions of pilgrims, a journey to Kashi is
                            considered the ultimate spiritual experience.
                          </p>
                        </div>

                        {/* Read More */}
                        <div className="pt-4">
                          <Link
                            to="/blog/kashiVishwanath-jyotirlinga"
                            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-lg transition-colors"
                          >
                            Read More About Kashi Vishwanath Jyotirlinga
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Trimbakeshwar Jyotirlinga */}
                  <section
                    id="trimbakeshwar-jyotirlinga"
                    className="rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    {/* Content Wrapper */}
                    <div className="px-8 py-10 md:px-12 md:py-14">
                      {/* Small Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-6">
                        <Flame className="w-4 h-4" />
                        8th Jyotirlinga
                      </div>

                      {/* Heading */}
                      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6 max-w-5xl">
                        8. Trimbakeshwar Jyotirlinga – The Sacred Origin of the
                        Godavari River
                      </h2>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-6 mb-8">
                        <div className="flex items-center gap-2 text-slate-600">
                          <MapPin className="w-5 h-5 text-orange-500" />

                          <span className="text-lg font-medium">
                            Nashik District, Maharashtra
                          </span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Image Space */}
                      <div className="w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-12">
                        <img
                          src={trimbakeshwarJyotirlingImg}
                          alt="Trimbakeshwar Jyotirlinga Temple"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Main Content */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                        <p>
                          Trimbakeshwar Jyotirlinga is one of the most revered
                          shrines of Lord Shiva and is located near the
                          Brahmagiri Hills in the town of Trimbak, about 28
                          kilometers from Nashik in Maharashtra.
                        </p>

                        <p>
                          This temple holds immense spiritual importance because
                          it is believed to be the origin of the sacred Godavari
                          River, often referred to as the “Ganga of the South.”
                        </p>

                        <p>
                          The name Trimbakeshwar comes from the Sanskrit word
                          “Tri” meaning three and “Ambaka” meaning eyes,
                          referring to the three-eyed form of Lord Shiva.
                        </p>

                        <p>
                          These three eyes symbolize the Sun, Moon, and Fire,
                          representing the cosmic forces that sustain life and
                          balance in the universe.
                        </p>

                        {/* Meaning Box */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                              <div>
                                <p className="text-xl font-bold text-slate-900 mb-1">
                                  Tri
                                </p>

                                <p className="text-slate-700 text-lg leading-7">
                                  Meaning three
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                              <div>
                                <p className="text-xl font-bold text-slate-900 mb-1">
                                  Ambaka
                                </p>

                                <p className="text-slate-700 text-lg leading-7">
                                  Meaning eyes
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p>
                          One of the unique aspects of the Trimbakeshwar
                          Jyotirlinga is that it represents the Hindu Trinity —
                          Brahma, Vishnu, and Shiva together.
                        </p>

                        <p>
                          Inside the sanctum, the linga is represented by three
                          small faces, symbolizing the unity of creation,
                          preservation, and destruction.
                        </p>

                        {/* Legend Section */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Mountain className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              The Legend of Trimbakeshwar Jyotirlinga
                            </h3>
                          </div>

                          <div className="space-y-7">
                            <p>
                              The story of Trimbakeshwar is deeply connected
                              with the sage Gautam Rishi, one of the most
                              respected sages in Hindu mythology.
                            </p>

                            <p>
                              Gautam Rishi lived near the Brahmagiri Hills with
                              his wife Ahilya.
                            </p>

                            <p>
                              He was known for his devotion, kindness, and
                              dedication to helping others.
                            </p>

                            <p>
                              The region once faced a terrible drought that
                              caused immense suffering among people and animals.
                            </p>

                            <p>
                              Seeing the suffering around him, Gautam Rishi
                              prayed intensely to Lord Varuna, the god of rain,
                              asking for relief from the drought.
                            </p>

                            <p>
                              Pleased with his prayers, Varuna blessed him with
                              a divine water source that never dried up.
                            </p>

                            <p>
                              This allowed Gautam Rishi to grow crops and
                              provide food to the entire community.
                            </p>

                            <p>
                              However, some sages became jealous of Gautam
                              Rishi’s growing reputation and prosperity.
                            </p>

                            <p>
                              They devised a plan to falsely accuse him of
                              committing a grave sin.
                            </p>

                            <p>
                              According to the legend, the sages sent a sacred
                              cow into Gautam Rishi’s fields.
                            </p>

                            <p>
                              When Gautam tried to drive the cow away gently, it
                              accidentally died.
                            </p>

                            <p>
                              The jealous sages accused him of killing the cow,
                              which was considered a serious sin.
                            </p>

                            <p>
                              Deeply saddened and wanting to cleanse himself of
                              this accusation, Gautam Rishi prayed to Lord Shiva
                              and requested him to bring the holy River Ganga to
                              the region so that he could purify himself.
                            </p>

                            <p>
                              Moved by his devotion and sincerity, Lord Shiva
                              asked Goddess Ganga to descend to the Brahmagiri
                              Hills.
                            </p>

                            <p>
                              Ganga appeared in the form of the Godavari River,
                              which began flowing through the region.
                            </p>

                            <p>
                              At the request of Gautam Rishi and other sages,
                              Lord Shiva decided to remain there permanently as
                              Trimbakeshwar Jyotirlinga.
                            </p>
                          </div>
                        </div>

                        {/* Spiritual Importance */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Heart className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              Spiritual Importance of Trimbakeshwar
                            </h3>
                          </div>

                          <p className="mb-6">
                            Trimbakeshwar temple is considered a powerful
                            spiritual center where devotees come to seek relief
                            from karmic problems and ancestral issues.
                          </p>

                          <p className="mb-6">
                            Many important rituals are performed here,
                            including:
                          </p>

                          {/* Ritual List */}
                          <ul className="space-y-4 mb-8">
                            {[
                              "Narayan Nagbali Puja",
                              "Pitru Dosha Nivaran",
                              "Kaal Sarp Dosha Puja",
                            ].map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-slate-700 text-lg leading-7"
                              >
                                <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                                {item}
                              </li>
                            ))}
                          </ul>

                          <p>
                            These rituals are believed to remove ancestral
                            curses, karmic debts, and obstacles in life.
                          </p>

                          <p>
                            The temple is also closely associated with the Kumbh
                            Mela, which is held in Nashik every 12 years.
                          </p>

                          <p>
                            During this event, millions of pilgrims gather to
                            take a holy dip in the Godavari River.
                          </p>
                        </div>

                        {/* Read More */}
                        <div className="pt-4">
                          <Link
                            to="/blog/trimbakeshwar-jyotirlinga-nashik-guide"
                            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-lg transition-colors"
                          >
                            Read More About Trimbakeshwar Jyotirlinga
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Vaidyanath Jyotirlinga */}
                  <section
                    id="vaidyanath-jyotirlinga"
                    className="rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    {/* Content Wrapper */}
                    <div className="px-8 py-10 md:px-12 md:py-14">
                      {/* Small Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-6">
                        <Flame className="w-4 h-4" />
                        9th Jyotirlinga
                      </div>

                      {/* Heading */}
                      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6 max-w-5xl">
                        9. Vaidyanath Jyotirlinga – The Divine Healer of
                        Devotees
                      </h2>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-6 mb-8">
                        <div className="flex items-center gap-2 text-slate-600">
                          <MapPin className="w-5 h-5 text-orange-500" />

                          <span className="text-lg font-medium">
                            Deoghar, Jharkhand
                          </span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Image Space */}
                      <div className="w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-12">
                        <img
                          src={vaidyanathJyotirlingImg}
                          alt="Vaidyanath Jyotirlinga Temple"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Main Content */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                        <p>
                          Vaidyanath Jyotirlinga, also known as Baidyanath Dham,
                          is one of the most sacred shrines dedicated to Lord
                          Shiva.
                        </p>

                        <p>
                          The temple is located in the town of Deoghar in
                          Jharkhand and is visited by millions of devotees every
                          year.
                        </p>

                        <p>
                          The name Vaidyanath comes from the Sanskrit word
                          “Vaidya,” meaning physician or healer.
                        </p>

                        <p>
                          Lord Shiva in this form is believed to cure diseases
                          and relieve suffering.
                        </p>

                        <p>
                          Because of this, devotees often visit this temple
                          seeking healing from physical and spiritual ailments.
                        </p>

                        {/* Legend Section */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Mountain className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              The Legend of Vaidyanath Jyotirlinga
                            </h3>
                          </div>

                          <div className="space-y-7">
                            <p>
                              The story of this Jyotirlinga is closely connected
                              with Ravana, the powerful king of Lanka.
                            </p>

                            <p>
                              Ravana was an extremely devoted follower of Lord
                              Shiva.
                            </p>

                            <p>
                              Determined to gain Shiva’s blessings, he performed
                              intense penance for many years.
                            </p>

                            <p>
                              According to legend, Ravana offered his own heads
                              one by one as a sacrifice to please Shiva.
                            </p>

                            <p>
                              Just as he was about to sacrifice his tenth head,
                              Lord Shiva appeared before him and stopped him.
                            </p>

                            <p>
                              Impressed by Ravana’s devotion, Shiva restored all
                              his heads and granted him a boon.
                            </p>

                            <p>
                              Ravana then requested Lord Shiva to come and
                              reside in Lanka so that his kingdom would become
                              invincible.
                            </p>

                            <p>
                              Lord Shiva agreed and gave him a sacred
                              Shivalinga, but warned him that the linga should
                              never be placed on the ground until he reached
                              Lanka.
                            </p>

                            <p>
                              If it touched the ground, it would become
                              permanently fixed there.
                            </p>

                            <p>
                              While traveling back to Lanka, Ravana needed to
                              perform his evening prayers.
                            </p>

                            <p>
                              He asked a young boy nearby to hold the Shivalinga
                              for a short time.
                            </p>

                            <p>
                              The boy was actually Lord Ganesha disguised as a
                              cowherd.
                            </p>

                            <p>
                              After waiting for some time, Ganesha placed the
                              Shivalinga on the ground and disappeared.
                            </p>

                            <p>
                              When Ravana returned, he tried to lift the
                              Shivalinga but was unable to move it.
                            </p>

                            <p>
                              The linga had become permanently established at
                              that place, which is now known as Vaidyanath
                              Jyotirlinga.
                            </p>
                          </div>
                        </div>

                        {/* Spiritual Importance */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Heart className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              Spiritual Importance of Vaidyanath Jyotirlinga
                            </h3>
                          </div>

                          <p className="mb-6">
                            Vaidyanath temple is believed to possess powerful
                            healing energy.
                          </p>

                          <p className="mb-6">
                            Devotees believe that praying here can:
                          </p>

                          <ul className="space-y-4 mb-8">
                            {[
                              "Cure diseases",
                              "Remove suffering",
                              "Bring peace and prosperity",
                              "Fulfill wishes of devotees",
                            ].map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-slate-700 text-lg leading-7"
                              >
                                <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                                {item}
                              </li>
                            ))}
                          </ul>

                          <p>
                            During the Shravan month, millions of devotees
                            undertake the Kanwar Yatra, carrying holy water from
                            the Ganga River to offer to Lord Shiva at Baidyanath
                            Dham.
                          </p>
                        </div>

                        {/* Read More */}
                        <div className="pt-4">
                          <Link
                            to="/blog/vaidyanath-jyotirlinga-guide"
                            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-lg transition-colors"
                          >
                            Read More About Vaidyanath Jyotirlinga
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Nageshwar Jyotirlinga */}
                  <section
                    id="nageshwar-jyotirlinga"
                    className="rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    {/* Content Wrapper */}
                    <div className="px-8 py-10 md:px-12 md:py-14">
                      {/* Small Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-6">
                        <Flame className="w-4 h-4" />
                        10th Jyotirlinga
                      </div>

                      {/* Heading */}
                      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6 max-w-5xl">
                        10. Nageshwar Jyotirlinga – The Protector from Evil and
                        the Lord of Serpents
                      </h2>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-6 mb-8">
                        <div className="flex items-center gap-2 text-slate-600">
                          <MapPin className="w-5 h-5 text-orange-500" />

                          <span className="text-lg font-medium">
                            Near Dwarka, Gujarat
                          </span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Image Space */}
                      <div className="w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-12">
                        <img
                          src={nageshwarJyotirlingImg}
                          alt="Nageshwar Jyotirlinga Temple"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Main Content */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                        <p>
                          Nageshwar Jyotirlinga is one of the most sacred
                          shrines of Lord Shiva and is located near the holy
                          city of Dwarka in Gujarat, along the coast of the
                          Arabian Sea.
                        </p>

                        <p>
                          The temple lies between Dwarka and Beyt Dwarka and is
                          considered an important pilgrimage site for devotees
                          of Lord Shiva.
                        </p>

                        <p>
                          The name Nageshwar comes from the Sanskrit words “Nag”
                          meaning serpent and “Ishwar” meaning Lord.
                        </p>

                        <p>
                          Thus, Nageshwar refers to Lord Shiva as the Lord of
                          Serpents.
                        </p>

                        <p>
                          In Hindu symbolism, serpents represent power,
                          protection, transformation, and cosmic energy.
                        </p>

                        <p>
                          Lord Shiva is often depicted with a serpent around his
                          neck, symbolizing his control over fear, death, and
                          destructive forces.
                        </p>

                        {/* Legend Section */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Mountain className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              The Legend Behind Nageshwar Jyotirlinga
                            </h3>
                          </div>

                          <div className="space-y-7">
                            <p>
                              The story of Nageshwar Jyotirlinga is mentioned in
                              the Shiva Purana and revolves around a devoted
                              follower of Lord Shiva named Supriya.
                            </p>

                            <p>
                              Supriya was a noble and pious devotee who
                              constantly chanted the sacred mantra “Om Namah
                              Shivaya.”
                            </p>

                            <p>
                              She lived with other devotees who regularly
                              worshipped Lord Shiva.
                            </p>

                            <p>
                              At that time, a powerful demon named Daruka ruled
                              a kingdom in the forest.
                            </p>

                            <p>
                              He had received a boon from Goddess Parvati that
                              gave him immense power.
                            </p>

                            <p>
                              Filled with arrogance, Daruka began terrorizing
                              sages and devotees.
                            </p>

                            <p>
                              He captured Supriya and many other devotees and
                              imprisoned them in his kingdom.
                            </p>

                            <p>
                              Despite being imprisoned, Supriya continued
                              chanting the name of Lord Shiva and encouraged the
                              other prisoners to do the same.
                            </p>

                            <p>
                              The constant chanting of Shiva’s name created a
                              powerful spiritual energy.
                            </p>

                            <p>
                              Pleased by their devotion, Lord Shiva appeared
                              before Supriya and blessed her with divine
                              strength.
                            </p>

                            <p>
                              With the power granted by Lord Shiva, Supriya
                              defeated the demon’s forces.
                            </p>

                            <p>
                              Soon after, Lord Shiva himself appeared and
                              destroyed the demon Daruka.
                            </p>

                            <p>
                              To protect his devotees forever, Lord Shiva
                              manifested himself at that place as Nageshwar
                              Jyotirlinga.
                            </p>
                          </div>
                        </div>

                        {/* Spiritual Significance */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Heart className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              Spiritual Significance of Nageshwar Jyotirlinga
                            </h3>
                          </div>

                          <p className="mb-6">
                            Nageshwar Jyotirlinga is believed to protect
                            devotees from:
                          </p>

                          <ul className="space-y-4 mb-8">
                            {[
                              "Evil forces",
                              "Negative energy",
                              "Fear and anxiety",
                              "Enemies and hidden dangers",
                            ].map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-slate-700 text-lg leading-7"
                              >
                                <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                                {item}
                              </li>
                            ))}
                          </ul>

                          <p>
                            Devotees also believe that praying at Nageshwar
                            brings inner strength, courage, and protection from
                            life’s challenges.
                          </p>

                          <p>
                            The temple complex also houses a giant statue of
                            Lord Shiva, which attracts pilgrims and tourists
                            from across the world.
                          </p>
                        </div>

                        {/* Read More */}
                        <div className="pt-4">
                          <Link
                            to="/blog/nageshwar-jyotirlinga-guide"
                            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-lg transition-colors"
                          >
                            Read More About Nageshwar Jyotirlinga
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Rameshwaram Jyotirlinga */}
                  <section
                    id="rameshwaram-jyotirlinga"
                    className="rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    {/* Content Wrapper */}
                    <div className="px-8 py-10 md:px-12 md:py-14">
                      {/* Small Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-6">
                        <Flame className="w-4 h-4" />
                        11th Jyotirlinga
                      </div>

                      {/* Heading */}
                      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6 max-w-5xl">
                        11. Rameshwaram Jyotirlinga – The Sacred Shrine
                        Established by Lord Rama
                      </h2>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-6 mb-8">
                        <div className="flex items-center gap-2 text-slate-600">
                          <MapPin className="w-5 h-5 text-orange-500" />

                          <span className="text-lg font-medium">
                            Ramanathapuram District, Tamil Nadu
                          </span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Image Space */}
                      <div className="w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-12">
                        <img
                          src={rameshwaramJyotirlingImg}
                          alt="Rameshwaram Jyotirlinga Temple"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Main Content */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                        <p>
                          Rameshwaram Jyotirlinga is one of the most sacred
                          temples dedicated to Lord Shiva and is located on
                          Rameshwaram Island in Tamil Nadu.
                        </p>

                        <p>
                          The temple stands near the shores of the Indian Ocean
                          and holds immense religious significance in Hinduism.
                        </p>

                        <p>
                          Rameshwaram is also one of the Char Dham pilgrimage
                          sites, making it an extremely important destination
                          for devotees across India.
                        </p>

                        <p>The name Rameshwaram means “The Lord of Rama.”</p>

                        <p>
                          It refers to the story of Lord Rama worshipping Lord
                          Shiva before beginning his journey to Lanka.
                        </p>

                        {/* Legend Section */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Mountain className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              The Legend of Rameshwaram Jyotirlinga
                            </h3>
                          </div>

                          <div className="space-y-7">
                            <p>
                              The story of Rameshwaram Jyotirlinga is described
                              in the Ramayana.
                            </p>

                            <p>
                              When Lord Rama was preparing to cross the ocean to
                              rescue Goddess Sita from Ravana, he wanted to seek
                              the blessings of Lord Shiva before the battle.
                            </p>

                            <p>
                              Lord Rama instructed Hanuman to travel to Mount
                              Kailash and bring a sacred Shivalinga for worship.
                            </p>

                            <p>
                              While Hanuman was away, the auspicious time for
                              the ritual was approaching.
                            </p>

                            <p>
                              To ensure the ceremony was performed on time,
                              Goddess Sita created a Shivalinga from sand.
                            </p>

                            <p>
                              Lord Rama worshipped this sand linga and prayed to
                              Lord Shiva for victory.
                            </p>

                            <p>
                              Soon after, Hanuman returned with a Shivalinga
                              from Kailash.
                            </p>

                            <p>
                              Lord Rama also installed this linga near the first
                              one.
                            </p>

                            <p>
                              According to tradition, the linga brought by
                              Hanuman is worshipped first, followed by the sand
                              linga created by Sita.
                            </p>

                            <p>
                              Thus, Lord Shiva manifested here as Rameshwaram
                              Jyotirlinga, blessing Lord Rama with victory in
                              the battle against Ravana.
                            </p>
                          </div>
                        </div>

                        {/* Architectural Significance */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Calendar className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              Architectural Significance of Rameshwaram Temple
                            </h3>
                          </div>

                          <div className="space-y-7">
                            <p>
                              Rameshwaram Temple is famous for its magnificent
                              architecture and is known for having the longest
                              temple corridor in the world, with more than 1,000
                              intricately carved pillars.
                            </p>

                            <p>
                              The temple also contains 22 sacred wells, known as
                              Tirthas, where pilgrims take ritual baths before
                              entering the temple.
                            </p>

                            <p>
                              Each of these wells is believed to have unique
                              spiritual and healing properties.
                            </p>
                          </div>
                        </div>

                        {/* Spiritual Importance */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Heart className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              Spiritual Importance of Rameshwaram Jyotirlinga
                            </h3>
                          </div>

                          <p className="mb-6">
                            Devotees believe that visiting Rameshwaram
                            Jyotirlinga:
                          </p>

                          <ul className="space-y-4 mb-8">
                            {[
                              "Removes sins from past lives",
                              "Grants spiritual purification",
                              "Brings peace and divine blessings",
                              "Completes the Char Dham pilgrimage",
                            ].map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-slate-700 text-lg leading-7"
                              >
                                <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                                {item}
                              </li>
                            ))}
                          </ul>

                          <p>
                            For many Hindus, visiting Rameshwaram is considered
                            a once-in-a-lifetime spiritual journey.
                          </p>
                        </div>

                        {/* Read More */}
                        <div className="pt-4">
                          <Link
                            to="/blog/rameshwaram-jyotirlinga"
                            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-lg transition-colors"
                          >
                            Read More About Rameshwaram Jyotirlinga
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Grishneshwar Jyotirlinga */}
                  <section
                    id="grishneshwar-jyotirlinga"
                    className="rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    {/* Content Wrapper */}
                    <div className="px-8 py-10 md:px-12 md:py-14">
                      {/* Small Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-6">
                        <Flame className="w-4 h-4" />
                        12th Jyotirlinga
                      </div>

                      {/* Heading */}
                      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-6 max-w-5xl">
                        12. Grishneshwar Jyotirlinga – The Final Jyotirlinga of
                        Lord Shiva
                      </h2>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-6 mb-8">
                        <div className="flex items-center gap-2 text-slate-600">
                          <MapPin className="w-5 h-5 text-orange-500" />

                          <span className="text-lg font-medium">
                            Aurangabad District, Maharashtra
                          </span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Image Space */}
                      <div className="w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-12">
                        <img
                          src={grishneshwarJyotirlingImg}
                          alt="Grishneshwar Jyotirlinga Temple"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Main Content */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                        <p>
                          Grishneshwar Jyotirlinga, also known as Ghushmeshwar,
                          is the twelfth and final Jyotirlinga among the sacred
                          shrines of Lord Shiva.
                        </p>

                        <p>
                          It is located near the famous Ellora Caves in
                          Aurangabad, Maharashtra.
                        </p>

                        <p>
                          Although it is the smallest of the twelve Jyotirlinga
                          temples, its spiritual significance is immense.
                        </p>

                        {/* Legend Section */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Mountain className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              The Legend of Grishneshwar Jyotirlinga
                            </h3>
                          </div>

                          <div className="space-y-7">
                            <p>
                              The story of this Jyotirlinga is connected with a
                              deeply devoted woman named Kusuma.
                            </p>

                            <p>
                              Kusuma was a great devotee of Lord Shiva and
                              performed daily worship by immersing a Shivalinga
                              in a nearby pond before offering prayers.
                            </p>

                            <p>
                              Her devotion and spiritual wisdom made her
                              respected among the local community.
                            </p>

                            <p>
                              However, the other wives of her husband became
                              jealous of her popularity and happiness.
                            </p>

                            <p>
                              Out of jealousy, they killed her young son and
                              threw his body into the pond.
                            </p>

                            <p>
                              When Kusuma learned about the tragedy, she did not
                              lose faith in Lord Shiva.
                            </p>

                            <p>
                              Instead, she continued her daily prayers with even
                              greater devotion.
                            </p>

                            <p>
                              Moved by her unwavering faith, Lord Shiva appeared
                              before her and restored her son back to life.
                            </p>

                            <p>
                              The people witnessing this miracle were amazed.
                            </p>

                            <p>
                              Lord Shiva then manifested himself there as
                              Grishneshwar Jyotirlinga to bless devotees and
                              honor Kusuma’s devotion.
                            </p>
                          </div>
                        </div>

                        {/* Spiritual Significance */}
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Heart className="w-7 h-7 text-orange-500" />

                            <h3 className="text-3xl font-bold text-slate-900 font-display">
                              Spiritual Significance of Grishneshwar
                            </h3>
                          </div>

                          <p className="mb-6">
                            Grishneshwar Jyotirlinga symbolizes the power of
                            faith, devotion, and divine grace.
                          </p>

                          <p className="mb-6">
                            Devotees believe that praying here:
                          </p>

                          <ul className="space-y-4 mb-8">
                            {[
                              "Removes sorrow and suffering",
                              "Brings happiness and prosperity",
                              "Strengthens faith in God",
                              "Fulfills sincere wishes",
                            ].map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-slate-700 text-lg leading-7"
                              >
                                <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                                {item}
                              </li>
                            ))}
                          </ul>

                          <p>
                            The temple is also famous for its beautiful
                            architecture built with red volcanic stone and
                            intricate carvings.
                          </p>
                        </div>

                        {/* Read More */}
                        <div className="pt-4">
                          <Link
                            to="/blog/grishneshwar-jyotirlinga"
                            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-lg transition-colors"
                          >
                            Read More About Grishneshwar Jyotirlinga
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* IMPORTANCE */}
                  <section
                    id="jyotirlinga-conclusion"
                    className="rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-orange-50/40 overflow-hidden"
                  >
                    <div className="px-8 py-10 md:px-12 md:py-14">
                      {/* Small Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-6">
                        <Flame className="w-4 h-4" />
                        Final Reflection
                      </div>

                      {/* Heading */}
                      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-8">
                        In Short
                      </h2>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Main Content */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                        <p>
                          The 12 Jyotirlingas of Lord Shiva represent the twelve
                          sacred manifestations of Shiva’s infinite cosmic
                          light.
                        </p>

                        <p>
                          Each Jyotirlinga carries a unique story that reflects
                          devotion, faith, and divine protection.
                        </p>

                        <p>
                          These temples are spread across different regions of
                          India, forming one of the most sacred pilgrimage
                          circuits in Hinduism.
                        </p>

                        <p>
                          For devotees, visiting the Jyotirlingas is not just a
                          journey across the country but a spiritual journey
                          toward inner awakening and divine connection with Lord
                          Shiva.
                        </p>
                      </div>

                      {/* Highlight Quote */}
                      <div className="mt-12 border-l-4 border-orange-500 bg-white/80 backdrop-blur-sm rounded-r-2xl p-6 md:p-8 shadow-sm">
                        <p className="text-xl md:text-2xl leading-10 text-slate-800 font-medium">
                          Through these sacred shrines, Lord Shiva continues to
                          bless humanity with wisdom, protection, and liberation
                          from the cycle of birth and death.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section
                    id="spiritual-importance-jyotirlinga-yatra"
                    className="rounded-3xl border border-slate-200 bg-white overflow-hidden"
                  >
                    <div className="px-8 py-10 md:px-12 md:py-14">
                      {/* Small Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-6">
                        <Heart className="w-4 h-4" />
                        Sacred Pilgrimage
                      </div>

                      {/* Heading */}
                      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-8 max-w-5xl">
                        Spiritual Importance of Visiting the 12 Jyotirlingas
                      </h2>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Intro */}
                      <p className="text-lg leading-9 text-slate-700 max-w-4xl mb-10">
                        Visiting the twelve Jyotirlinga temples is considered
                        one of the most sacred pilgrimages in Hinduism.
                      </p>

                      <p className="text-lg leading-9 text-slate-700 max-w-4xl mb-8">
                        Devotees believe that completing the Jyotirlinga Yatra
                        helps them:
                      </p>

                      {/* Benefits Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl">
                        {[
                          "Remove sins of past lives",
                          "Gain spiritual knowledge",
                          "Receive blessings of Lord Shiva",
                          "Achieve inner peace and liberation",
                        ].map((item) => (
                          <div
                            key={item}
                            className="bg-orange-50 border border-orange-100 rounded-2xl p-6"
                          >
                            <div className="flex items-start gap-4">
                              <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

                              <p className="text-slate-700 text-lg leading-7 font-medium">
                                {item}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  <section
                    id="jyotirlinga-final-conclusion"
                    className="rounded-3xl border border-orange-200 bg-gradient-to-br from-white via-orange-50/40 to-orange-100/30 overflow-hidden"
                  >
                    <div className="px-8 py-10 md:px-12 md:py-16">
                      {/* Small Label */}
                      <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold mb-6">
                        <Flame className="w-4 h-4" />
                        Sacred Conclusion
                      </div>

                      {/* Heading */}
                      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display mb-8 max-w-5xl">
                        Conclusion
                      </h2>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-orange-500 rounded-full mb-10" />

                      {/* Main Content */}
                      <div className="space-y-7 text-lg leading-9 text-slate-700 max-w-4xl">
                        <p>
                          The 12 Jyotirlingas of Lord Shiva represent the most
                          powerful manifestations of the divine cosmic light.
                        </p>

                        <p>
                          These temples are not only important religious sites
                          but also symbolize the eternal presence of Shiva
                          across the Indian subcontinent.
                        </p>

                        <p>
                          For centuries, devotees from all parts of the world
                          have undertaken pilgrimages to these sacred temples
                          seeking blessings, peace, and spiritual awakening.
                        </p>

                        <p>
                          Visiting the Jyotirlingas is believed to be a
                          transformative spiritual journey, allowing devotees to
                          connect with the timeless energy of Lord Shiva and
                          experience the deeper meaning of devotion.
                        </p>
                      </div>

                      {/* Highlight Box */}
                      <div className="mt-12 bg-white border border-orange-100 rounded-2xl p-7 md:p-8 shadow-sm">
                        <div className="flex items-start gap-4">
                          <Heart className="w-7 h-7 text-orange-500 shrink-0 mt-1" />

                          <p className="text-xl md:text-2xl leading-10 text-slate-800 font-medium">
                            The sacred Jyotirlingas continue to inspire millions
                            of devotees with faith, devotion, spiritual
                            strength, and the eternal blessings of Lord Shiva.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* FAQ */}
                  <section id="faqs">
                    <h2 className="text-3xl font-display font-bold text-stone-900 mb-6">
                      Frequently Asked Questions
                    </h2>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem
                        value="item-1"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          What are Jyotirlingas?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          Jyotirlingas are sacred manifestations of Lord Shiva
                          appearing as divine pillars of light.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="item-2"
                        className="bg-white border text-stone-800 rounded-lg mb-4 px-4 shadow-sm"
                      >
                        <AccordionTrigger className="font-bold text-left hover:text-orange-600 hover:no-underline py-4">
                          How many Jyotirlingas are there?
                        </AccordionTrigger>

                        <AccordionContent className="text-stone-600 text-lg pb-4 pt-2">
                          There are 12 sacred Jyotirlingas located across India.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </section>
                </div>
              </div>

              <CommentSection />
            </article>

            {/* RIGHT SIDEBAR */}
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 border border-stone-100 flex flex-col gap-8">
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

export default JyotirlingaBlog;
