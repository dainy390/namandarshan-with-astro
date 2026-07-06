import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

import { ChevronRight, Flame, Clock, MapPin, Calendar, Info, HelpCircle, BookOpen, CheckCircle2, Star } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import BlogBreadcrumb from "@/components/common/BlogBreadcrumb";
import CommentSection from "@/components/common/CommentSection";
import LeadForm from "@/components/common/LeadForm";
import mahakalImage from "@/assets/blogs/twelveJyotirling/MahakaleshwarJyotirlinga.png";
import LordShivavsDushan from "@/assets/LordShivavsDushan.jpg";
import Mahakaleshwar_TempleUjjain from "@/assets/Mahakaleshwar_TempleUjjain.jpg";
import mahakalArchitectureImage from "@/assets/blogs/twelveJyotirling/MahakaleshwarJyotirlinga.png";

const MahakaleshwarJyotirlinga = () => {
  const tableOfContents = [
    { id: "intro", title: "Introduction" },
    { id: "importance", title: "Why it is Important" },
    { id: "legend", title: "Divine Legend" },
    { id: "south-facing", title: "The South-Facing Mystery" },
    { id: "bhasma-aarti", title: "Sacred Bhasma Aarti" },
    { id: "architecture", title: "Temple Architecture" },
    { id: "rituals", title: "Rituals & Festivals" },
    { id: "travel-guide", title: "Travel Guide" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const recentPosts = [
    {
      title: "Kashi Vishwanath Guide",
      link: "/blog/kashi-vishwanath-moksha-ganga-aarti-guide",
    },
    {
      title: "Kedarnath Yatra History",
      link: "/blog/kedarnath-temple-yatra-history-legend",
    },
    {
      title: "Shirdi Sai Baba Promises",
      link: "/blog/shirdi-sai-baba-11-vachan-promises-meaning",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 180;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO
        title="Mahakaleshwar Jyotirlinga Ujjain – History, Bhasma Aarti, Darshan & Travel Guide"
        description="Explore Mahakaleshwar Jyotirlinga in Ujjain, one of the 12 sacred Jyotirlingas of Lord Shiva. Learn about Bhasma Aarti, temple history, darshan timings, and spiritual significance."
      />
      <Header />

      <main className="pt-36 md:pt-48 lg:pt-52 pb-12">
        <div className="container mx-auto px-4">
          <BlogBreadcrumb pageTitle="Mahakaleshwar Jyotirlinga Guide" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Sidebar - Table of Contents */}
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-slate-100">
                <h3 className="font-bold text-lg mb-4 text-slate-900 border-b pb-3 text-center">
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:text-primary hover:bg-amber-50 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <ChevronRight className="w-3 h-3 text-amber-500" />
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-6">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100">
                {/* Title Section */}
                <div className="p-8 md:p-10">
                  <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 leading-tight">
                    Mahakaleshwar Jyotirlinga – The Eternal Lord of Time and
                    Death
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-amber-500" /> 12 May
                      2026
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-amber-500" /> 15 min read
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Flame className="w-4 h-4 text-amber-500" /> Jyotirlinga
                      Guide
                    </span>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="relative">
                  <div className="aspect-[16/9] bg-slate-100 flex items-center justify-center overflow-hidden border-b border-slate-100 group">
                    <img
                      src={mahakalImage}
                      alt="Mahakaleshwar Jyotirlinga Temple"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      Sacred Jyotirlinga
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 space-y-8 text-lg leading-relaxed text-slate-700">
                  <section id="intro">
                    <p className="lead text-xl font-medium text-slate-900 mb-6 italic border-l-4 border-amber-500 pl-6">
                      "Mahakaleshwar Jyotirlinga is one of the most powerful and
                      spiritually revered among the 12 Jyotirlingas of Lord
                      Shiva. Located in the ancient city of Ujjain, it stands as
                      the eternal ruler of Time."
                    </p>
                    <p>
                      Mahakaleshwar Jyotirlinga is one of the most powerful and
                      spiritually revered among the 12 Jyotirlingas of Lord
                      Shiva. Located in the ancient city of Ujjain in Madhya
                      Pradesh, this sacred temple stands on the banks of the
                      holy Kshipra River and attracts millions of devotees every
                      year.
                    </p>
                    <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 my-6">
                      <p className="font-bold text-amber-900 mb-2">
                        The word “Mahakaleshwar” comes from two Sanskrit words:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-sm text-slate-700">
                        <li>
                          <span className="font-bold">Maha</span> – meaning
                          great
                        </li>
                        <li>
                          <span className="font-bold">Kala</span> – meaning time
                          or death
                        </li>
                      </ul>
                      <p className="mt-3 text-sm italic text-slate-600">
                        Thus, Mahakaleshwar refers to the “Great Lord of Time
                        and Death.”
                      </p>
                    </div>
                    <p>
                      Lord Shiva in this form is believed to govern time,
                      destiny, destruction, and liberation. Devotees worship
                      Mahakaleshwar to seek protection from fear, untimely
                      death, negative energies, and suffering.
                    </p>
                  </section>

                  <hr className="my-8 border-slate-100" />

                  <section id="importance">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                      <Info className="w-8 h-8 text-amber-500" /> Why
                      Mahakaleshwar Jyotirlinga is So Important
                    </h2>
                    <p>
                      Mahakaleshwar Jyotirlinga is regarded as one of the most
                      spiritually intense Shiva temples in India. Devotees
                      believe that worshipping Lord Mahakal helps:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      {[
                        "Protect from untimely death",
                        "Remove fear and negativity",
                        "Destroy evil influences",
                        "Grant inner strength and courage",
                        "Bring spiritual awakening",
                        "Help attain liberation (moksha)",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 transition-hover hover:border-amber-200"
                        >
                          <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                          <span className="text-sm font-medium text-slate-800">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="legend">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">
                      The Divine Story Behind Mahakaleshwar
                    </h2>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-slate-800">
                        The Devoted Brahmin Family of Ujjain
                      </h3>
                      <p>
                        Long ago, in the holy city of Ujjain, there lived a
                        deeply devoted Brahmin named Vedapriya. He and his four
                        sons were sincere devotees of Lord Shiva. At the same
                        time, a powerful demon named <strong>Dushan</strong>{" "}
                        began terrorizing the region, ordering the people to
                        stop worshipping Lord Shiva.
                      </p>
                      <div className="my-8 aspect-[16/9] bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-lg group">
                        <img
                          src={LordShivavsDushan}
                          alt="Lord Shiva destroying demon Dushan"
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white text-xs font-medium text-center italic">
                            Lord Shiva appearing as Mahakal to destroy Dushan
                          </p>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800">
                        Lord Shiva Appears as Mahakal
                      </h3>
                      <p>
                        Enraged by their faith, Dushan attacked the Brahmin
                        family. At that moment, the earth trembled and a
                        brilliant pillar of divine light emerged. From this
                        energy appeared Lord Shiva in his fierce Mahakal form.
                        With a terrifying roar, Lord Shiva destroyed the demon
                        instantly and protected his devotees.
                      </p>
                    </div>
                  </section>

                  <hr className="my-8 border-slate-100" />

                  <section id="south-facing">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                      <MapPin className="w-8 h-8 text-amber-500" /> The
                      South-Facing Jyotirlinga (Dakshinamukhi)
                    </h2>
                    <p>
                      Mahakaleshwar Jyotirlinga is unique because it faces
                      south. In Hindu spiritual traditions, south is associated
                      with death and transformation. This rare "Dakshinamukhi"
                      form is considered extremely sacred in tantric traditions.
                      Devotees believe that worshipping this form removes the
                      fear of death and grants immense spiritual strength.
                    </p>
                  </section>

                  <section id="bhasma-aarti">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                      <Flame className="w-8 h-8 text-amber-500" /> The Famous
                      Bhasma Aarti
                    </h2>
                    <p>
                      One of the most extraordinary rituals is the{" "}
                      <strong>Bhasma Aarti</strong>, performed daily before
                      sunrise. Lord Mahakal is worshipped with sacred ash
                      (Bhasma), symbolizing the ultimate reality that all
                      physical existence eventually turns into ashes.
                    </p>
                    <div className="bg-slate-900 p-8 rounded-3xl text-white my-8 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
                      <h4 className="text-amber-400 font-bold mb-3 uppercase tracking-widest text-xs">
                        Spiritual Meaning of Bhasma
                      </h4>
                      <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex gap-3">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />{" "}
                          Life is temporary, the soul is eternal
                        </li>
                        <li className="flex gap-3">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />{" "}
                          Material attachments are secondary to divine
                          consciousness
                        </li>
                        <li className="flex gap-3">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />{" "}
                          Witnessing the aarti is considered highly auspicious
                        </li>
                      </ul>
                    </div>
                  </section>

                  <section id="architecture">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">
                      Architecture of Mahakaleshwar Temple
                    </h2>
                    <p>
                      The temple reflects traditional Hindu architecture
                      combined with Maratha influence. The Jyotirlinga is
                      installed in the underground sanctum, creating a deeply
                      spiritual atmosphere.
                    </p>
                    <div className="my-8 aspect-video bg-slate-100 rounded-3xl overflow-hidden border border-slate-100 shadow-xl group relative">
                      <img
                        src={Mahakaleshwar_TempleUjjain}
                        alt="Mahakaleshwar Temple Complex Architecture"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <p className="text-white text-sm font-medium italic">
                          The grand architectural splendor of the Mahakaleshwar
                          Temple complex.
                        </p>
                      </div>
                    </div>
                    <p>
                      The complex also contains shrines dedicated to Lord
                      Ganesha, Goddess Parvati, and the{" "}
                      <strong>Nagchandreshwar</strong> shrine, which opens only
                      once every year on Nag Panchami.
                    </p>
                  </section>

                  <section id="rituals">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                      <Calendar className="w-8 h-8 text-amber-500" /> Important
                      Rituals & Festivals
                    </h2>
                    <div className="space-y-6">
                      <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                        <h4 className="font-bold text-amber-900 mb-2">
                          Rudrabhishek
                        </h4>
                        <p className="text-sm">
                          Bathing the Jyotirlinga with milk, honey, ghee, and
                          Gangajal to remove obstacles and bring peace.
                        </p>
                      </div>
                      <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                        <h4 className="font-bold text-amber-900 mb-2">
                          Mahashivratri
                        </h4>
                        <p className="text-sm">
                          Celebrated on a grand scale with night-long prayers
                          and devotional processions in Ujjain.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="travel-guide">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                      <MapPin className="w-8 h-8 text-amber-500" /> Travel Guide
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <Clock className="w-5 h-5 text-amber-500" /> Best Time
                          to Visit
                        </h3>
                        <p className="text-sm">
                          <strong>October to March:</strong> Pleasant weather
                          ideal for darshan. <br />
                          <strong>Mahashivratri:</strong> Spiritually
                          significant but extremely crowded.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-amber-500" /> How to
                          Reach
                        </h3>
                        <ul className="text-sm space-y-2">
                          <li>
                            <strong>Air:</strong> Devi Ahilyabai Holkar Airport,
                            Indore
                          </li>
                          <li>
                            <strong>Train:</strong> Ujjain Junction Railway
                            Station
                          </li>
                          <li>
                            <strong>Road:</strong> Well connected to Indore,
                            Bhopal, and Ahmedabad
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section id="faq">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                      <HelpCircle className="w-8 h-8 text-amber-500" />{" "}
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                      {[
                        {
                          q: "Where is Mahakaleshwar Jyotirlinga located?",
                          a: "Mahakaleshwar Temple is located in Ujjain, Madhya Pradesh, on the banks of the Kshipra River.",
                        },
                        {
                          q: "What is the meaning of Mahakal?",
                          a: "Mahakal means the Lord of Time and Death (Maha - Great, Kala - Time/Death).",
                        },
                        {
                          q: "Can devotees attend Bhasma Aarti?",
                          a: "Yes, devotees can attend by following temple guidelines and prior online bookings.",
                        },
                        {
                          q: "Why is the Jyotirlinga south-facing?",
                          a: "Known as Dakshinamukhi, it represents Shiva's mastery over death and the southern direction (Yama's direction).",
                        },
                      ].map((faq, i) => (
                        <div key={i} className="border-b border-slate-100 pb-4">
                          <h3 className="font-bold text-slate-800 mb-2">
                            {faq.q}
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-3xl p-8 text-white shadow-xl text-center">
                    <h3 className="text-3xl font-bold mb-4 font-display">
                      Plan Your Mahakal Yatra
                    </h3>
                    <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto italic">
                      "Experience the divine energy of Mahakal with complete
                      travel assistance and darshan support from Naman Darshan."
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        to="/darshan/mahakaleshwar-jyotirlinga-ujjain-vipdarshan"
                        className="inline-block bg-white text-amber-600 font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-slate-100 transition-all transform hover:-translate-y-1"
                      >
                        Plan Your Pilgrimage
                      </Link>
                      <a
                        href="https://wa.me/919311973199"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:-translate-y-1"
                      >
                        WhatsApp Support
                      </a>
                    </div>
                  </section>

                  <p className="text-center font-bold text-amber-600 mt-8 mb-8 bg-amber-50 py-4 rounded-xl border border-amber-100 flex items-center justify-center gap-2 italic">
                    Jai Mahakal! 🙏🕉️ हर हर महादेव!
                  </p>
                </div>
              </div>
              <CommentSection />
            </article>

            {/* Right Sidebar */}
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-40 md:top-48 lg:top-52 border border-slate-100 flex flex-col gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-4 bg-amber-600 text-white px-4 py-3 -mx-6 -mt-6 rounded-t-xl text-center">
                    Important Info
                  </h3>
                  <div className="space-y-4 mt-6 text-sm">
                    <div className="p-3 bg-amber-50 rounded-lg flex justify-between items-center font-medium">
                      <span>Bhasma Aarti</span>
                      <span className="text-amber-700">04:00 AM</span>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg flex justify-between items-center font-medium">
                      <span>Location</span>
                      <span className="text-amber-700">Ujjain, MP</span>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg flex justify-between items-center font-medium text-center">
                      <span className="w-full">Dakshinamukhi Jyotirlinga</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4 border-b pb-2 text-slate-800">
                    Recent Blogs
                  </h3>
                  <div className="space-y-4 text-xs font-medium">
                    {recentPosts.map((post, i) => (
                      <Link
                        key={i}
                        to={post.link}
                        className="block hover:text-amber-600 transition-colors"
                      >
                        {post.title}
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

export default MahakaleshwarJyotirlinga;
