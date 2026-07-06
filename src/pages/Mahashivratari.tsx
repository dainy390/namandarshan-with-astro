import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";
import BookingModal from "@/components/booking/BookingModal";
import { ShareGuide } from "@/components/common/ShareGuide";

// Content extracted from docx
const content = {
  hero: {
    title: "एक रात, एक नमन, और महादेव का आशीर्वाद",
    subtitle: "Mahashivratri Guided Darshan Assistance",
    desc: "Experience Divine Bliss at the 12 Jyotirlingas & Prominent Shiva Temples",
    cta: "Connect with a Pandit Ji",
  },
  intro:
    "Mahashivratri is the most sacred night devoted to Lord Shiva, when the universe resonates with divine energy, devotion, and transformation. It is believed that prayers offered on this auspicious occasion bring inner peace, remove obstacles, and invite powerful blessings into one’s life. On this holy night, lakhs of devotees gather at Shiva temples across India, especially at the 12 Jyotirlingas, making darshan extremely crowded and time-consuming. To help devotees experience Mahadev’s blessings peacefully, Naman Darshan presents a Mahashivratri Guided Darshan Assistance Service, thoughtfully curated for a smooth, spiritually fulfilling journey. A knowledgeable Pandit Ji will accompany you, guide you through the temple, and share insights about the temple's history and significance.",
  significance: [
    {
      title: "Why is Mahashivratri celebrated?",
      text: 'It commemorates the "Great Night of Shiva," specifically the holy union of Lord Shiva and Goddess Parvati, or the night Shiva performed the Tandava, the cosmic dance of creation, preservation, and destruction.',
    },
    {
      title: "What is the importance of staying awake?",
      text: 'Devotees stay awake (Jagaran) to meditate, chant "Om Namah Shivaya," and honor the belief that the planetary alignment on this night supports a natural upward flow of energy, facilitating spiritual growth.',
    },
    {
      title: "What is the significance of the Shivling Abhishekam?",
      text: "The Shivalinga is bathed with milk, honey, water, and ghee to represent purification, devotion, and the cooling of the deity.",
    },
  ],
  fasting: {
    eat: {
      question: "What can I eat?",
      answer:
        "The fast is broken with sattvic (pure) food. During the day, one can consume milk, water, fruits, nuts, and items made from sabudana (sago), makhana (foxnuts), or singhara (water chestnut) flour.",
    },
    avoid: {
      question: "What should I avoid?",
      answer:
        "Avoid grains, non-vegetarian food, onions, garlic, alcohol, and tobacco.",
    },
    nirjala: {
      question: "What is Nirjala Vrat?",
      answer:
        "A strict fast where devotees abstain from both food and water for the entire day and night.",
    },
  },
  dosDonts: {
    dontOffer: {
      question: "What not to offer to the Shivalinga?",
      answer:
        "Avoid offering Tulsi leaves, turmeric, Ketki flowers, or coconut water.",
    },
    work: {
      question: "Is it okay to work on Mahashivratri?",
      answer:
        "While not prohibited, it is advised to avoid heavy work and focus on meditation and spiritual reflection.",
    },
  },
  sacredOpp: {
    title: "A Sacred Opportunity to Connect with Mahadev",
    points: [
      "The manifestation of Lord Shiva as the eternal Jyotirlinga",
      "Spiritual awakening and liberation from negative energies",
      "Fulfillment of sincere wishes and prayers",
      "Strength, clarity, and divine protection",
    ],
    footer:
      "This is a once-a-year opportunity to seek Lord Shiva’s grace in its most powerful form.",
  },
  priorityDarshan: {
    title: "Guided Darshan Assistance – Devotion and Significance",
    desc: "With our Guided Darshan Assistance, devotees can experience Mahashivratri with comfort and deep devotion, guided by the wisdom of a dedicated Pandit Ji.",
    benefits: [
      "Accompany and guidance by an experienced Pandit Ji",
      "Comprehensive explanation of temple history and significance",
      "More time to pray and absorb the divine atmosphere",
      "Ideal for senior citizens, families, and time-bound devotees",
    ],
  },
  jyotirlingas: {
    title: "Mahashivratri Darshan at 12 Jyotirlingas",
    text: "We assist devotees with darshan at all 12 Jyotirlinga temples, including major Shiva shrines across India, along with select renowned Shiva temples known for their Mahashivratri celebrations. Each temple follows its own customs and regulations, and our arrangements are made strictly within the guidelines laid down by temple authorities.",
  },
  prasad: {
    title: "Prasad for Devotees (Subject to Availability)",
    text: "Prasad holds deep spiritual significance for devotees. Wherever permitted and available, we make genuine efforts to arrange temple Prasad for devotees.",
    points: [
      "Prasad availability depends on temple norms and crowd conditions",
      "Not guaranteed at all temples",
      "Provided only where officially allowed",
    ],
  },
  whyChoose: [
    {
      title: "Mahashivratri Guided Darshan Assistance",
      icon: <CheckCircle2 className="h-6 w-6 text-orange-500" />,
    },
    {
      title: "Reduced waiting time during peak festival rush",
      icon: <Clock className="h-6 w-6 text-orange-500" />,
    },
    {
      title: "Transparent and devotion-centric service",
      icon: <CheckCircle2 className="h-6 w-6 text-orange-500" />,
    },
    {
      title: "Dedicated coordination during high-crowd periods",
      icon: <Phone className="h-6 w-6 text-orange-500" />,
    },
    {
      title: "Trusted platform for temple darshan assistance",
      icon: <CheckCircle2 className="h-6 w-6 text-orange-500" />,
    },
  ],
  whoShouldBook: [
    "Devotees visiting Jyotirlingas for the first time",
    "Elderly devotees and families",
    "Working professionals with limited travel time",
    "Devotees traveling from distant locations",
    "Anyone seeking a peaceful and organized darshan experience",
  ],
  faqs: [
    {
      q: "When is Mahashivratri 2026?",
      a: "It will be observed on February 15, 2026. Ideally, Nishita Kaal Puja time is between 12:09 AM and 01:01 AM on Feb 16.",
    },
    {
      q: "What is the best time for Puja (Nishita Kaal)?",
      a: "The most auspicious time is during the night (Nishita Kaal), typically around midnight. In 2026, this is between 12:09 AM and 01:01 AM on Feb 16.",
    },
    {
      q: "When to break the fast (Parana)?",
      a: "The fast is usually broken the next morning after sunrise, following the last vigil (prahar) of the night.",
    },
    {
      q: "Is this service suitable for senior citizens?",
      a: "Yes. Guided Darshan Assistance is especially helpful for senior citizens, families, and devotees who want a meaningful and smooth temple visit.",
    },
    {
      q: "Can I book Mahashivratri darshan at short notice?",
      a: "Due to heavy demand, last-minute availability is limited. Early booking is highly recommended.",
    },
    {
      q: "Will someone assist me during darshan?",
      a: "Our team provides coordination and guidance wherever applicable to ensure a smooth experience.",
    },
    {
      q: "Is Mahashivratri the best time to visit Jyotirlingas?",
      a: "Yes. Mahashivratri is considered the most powerful and spiritually rewarding time for Lord Shiva darshan.",
    },
  ],
};

const Mahashivratri = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1a0b00]">
      <SEO
        title="Mahashivratri 2026 Guided Darshan Assistance | Naman Darshan"
        description="Request Guided Darshan Assistance for Mahashivratri 2026 at 12 Jyotirlingas. Experience divine bliss and temple insights with a local Pandit Ji."
        keywords={[
          "mahashivratri 2026",
          "mahashivratri darshan assistance",
          "Jyotirlinga darshan",
          "Guided Darshan Assistance",
          "naman darshan",
        ]}
      />
      <Header />

      <main>
        {/* Hero Section - Full Screen */}
        <section className="relative w-full h-[65vh] md:h-screen bg-[#1a0b00] overflow-hidden">
          {/* Background Image */}
          <div className="absolute left-0 right-0 bottom-0 top-40 md:top-48 lg:top-52">
            <img
              src="/image1.jpg"
              alt="Happy Maha Shivratri - Shiva & 12 Jyotirlingas"
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Text Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-40 md:pt-48">
            <p className="text-[#deb887] text-xl md:text-3xl font-serif mb-6 tracking-wide drop-shadow-md animate-fade-in-up">
              एक रात, एक नमन, और महादेव का आशीर्वाद ।
            </p>

            <h1
              className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white mb-4 tracking-tight leading-none drop-shadow-2xl animate-fade-in-up delay-100"
              style={{ textShadow: "0 4px 10px rgba(0,0,0,0.5)" }}
            >
              Mahashivratri
            </h1>

            <div className="flex justify-center items-center gap-4 my-8 opacity-80 animate-fade-in-up delay-200">
              <div className="w-16 h-[2px] bg-[#d68c45]"></div>
              <div className="w-3 h-3 rounded-full bg-[#d68c45]"></div>
              <div className="w-16 h-[2px] bg-[#d68c45]"></div>
            </div>

            <p className="uppercase tracking-[0.3em] text-[#d68c45] text-base md:text-xl font-medium mb-8 animate-fade-in-up delay-300">
              Guided Darshan Assistance
            </p>

            <p className="text-gray-200 text-lg md:text-2xl mb-12 font-light max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-400">
              Experience Divine Bliss at the 12 Jyotirlingas & Prominent Shiva
              Temples
            </p>

            <Button
              className="bg-gradient-to-r from-[#e65100] to-[#ff6d00] hover:from-[#bf360c] hover:to-[#e65100] text-white font-serif uppercase tracking-widest text-sm md:text-lg px-8 py-4 md:px-12 md:py-8 rounded-full shadow-[0_0_30px_rgba(230,81,0,0.6)] border border-[#ffcc80]/50 transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(230,81,0,0.8)] animate-fade-in-up delay-500"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Request a Guide Now
            </Button>
          </div>
        </section>

        {/* Breadcrumbs and Share */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#2a1205] p-4 rounded-2xl border border-[#d68c45]/20 shadow-lg">
            <nav className="flex items-center space-x-2 text-sm text-[#deb887]/70">
              <a href="/" className="hover:text-[#d68c45] transition-colors">Home</a>
              <span>/</span>
              <span className="text-[#d68c45] font-medium">Mahashivratri</span>
            </nav>
            <ShareGuide />
          </div>
        </div>

        {/* Intro Section */}
        <section className="py-10 md:py-16 container mx-auto px-4">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center text-[#fcebd5]">
              <img
                src="/image2.jpg"
                alt="Mahashivratri Celebration"
                className="w-full h-auto object-cover rounded-2xl shadow-xl mb-8 border border-[#d68c45]/20"
              />
              <p className="text-lg leading-relaxed font-serif opacity-90">
                {content.intro}
              </p>
            </div>
          </RevealOnScroll>
        </section>

        {/* Significance Cards */}
        <section className="py-12 md:py-16 bg-[#1a0b00]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-center text-[#d68c45] mb-12">
              Significance and Rituals
            </h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {content.significance.map((item, index) => (
                <RevealOnScroll key={index} delay={index * 100}>
                  <div className="bg-[#2a1205] p-8 rounded-xl border border-[#d68c45]/20 shadow-lg hover:shadow-[#d68c45]/10 transition-shadow h-full">
                    <h3 className="text-xl font-bold text-[#deb887] mb-4 font-serif">
                      {item.title}
                    </h3>
                    <p className="text-[#fcebd5]/80">{item.text}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Fasting & Rules */}
        <section className="py-10 md:py-16 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <RevealOnScroll>
              <div className="bg-[#2a1205] p-8 rounded-2xl shadow-lg border border-[#d68c45]/20">
                <h3 className="text-2xl font-serif font-bold text-[#d68c45] mb-6 flex items-center">
                  <span className="bg-[#d68c45]/20 p-2 rounded-full mr-3 text-2xl">
                    🍽️
                  </span>
                  Fasting Rules (Vrat)
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-[#deb887] mb-2">
                      {content.fasting.eat.question}
                    </h4>
                    <p className="text-[#fcebd5]/70">
                      {content.fasting.eat.answer}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-400 mb-2">
                      {content.fasting.avoid.question}
                    </h4>
                    <p className="text-[#fcebd5]/70">
                      {content.fasting.avoid.answer}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#deb887] mb-2">
                      {content.fasting.nirjala.question}
                    </h4>
                    <p className="text-[#fcebd5]/70">
                      {content.fasting.nirjala.answer}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="bg-[#2a1205] p-8 rounded-2xl shadow-lg border border-[#d68c45]/20">
                <h3 className="text-2xl font-serif font-bold text-[#d68c45] mb-6 flex items-center">
                  <span className="bg-[#d68c45]/20 p-2 rounded-full mr-3 text-2xl">
                    ⚠️
                  </span>
                  Dos and Don'ts
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-red-400 mb-2 flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      {content.dosDonts.dontOffer.question}
                    </h4>
                    <p className="text-[#fcebd5]/70">
                      {content.dosDonts.dontOffer.answer}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#deb887] mb-2">
                      {content.dosDonts.work.question}
                    </h4>
                    <p className="text-[#fcebd5]/70">
                      {content.dosDonts.work.answer}
                    </p>
                  </div>
                  <div className="bg-[#3e1c08] p-4 rounded-lg mt-6 border border-[#d68c45]/10">
                    <h4 className="font-bold text-[#d68c45] mb-3">
                      {content.sacredOpp.title}
                    </h4>
                    <ul className="space-y-2">
                      {content.sacredOpp.points.map((pt, i) => (
                        <li
                          key={i}
                          className="flex items-start text-[#fcebd5]/80 text-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-[#d68c45]/60 mt-4 italic">
                      {content.sacredOpp.footer}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Priority Darshan Service */}
        <section className="py-12 md:py-16 bg-[#8B0000] text-white">
          <div className="container mx-auto px-4">
            <RevealOnScroll>
              <div className="text-center max-w-4xl mx-auto mb-12">
                <h2 className="text-2xl md:text-5xl font-serif font-bold mb-6 text-[#FF9933]">
                  {content.priorityDarshan.title}
                </h2>
                <p className="text-xl text-orange-100 mb-8">
                  {content.priorityDarshan.desc}
                </p>
                <div className="grid sm:grid-cols-2 gap-6 text-left">
                  {content.priorityDarshan.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start bg-white/10 p-4 rounded-lg backdrop-blur-sm"
                    >
                      <CheckCircle2 className="w-6 h-6 text-[#FF9933] mr-3 mt-1 flex-shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Button
                    size="lg"
                    className="bg-[#FF9933] hover:bg-[#E68A00] text-black font-bold text-lg md:text-xl px-6 py-4 md:px-10 md:py-6 rounded-full shadow-xl"
                    onClick={() => setIsBookingModalOpen(true)}
                  >
                    Connect with a Pandit Ji
                  </Button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Jyotirlingas & Prasad Section */}
        <section className="py-12 md:py-20 bg-[#f9f4ee] text-[#1a0b00]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <RevealOnScroll>
                <div className="bg-white p-10 rounded-2xl shadow-xl h-full border-t-4 border-[#8B0000] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-orange-50 rounded-bl-full -mr-10 -mt-10 z-0"></div>
                  <h3 className="text-3xl font-serif font-bold text-[#8B0000] mb-6 relative z-10 border-b-2 border-[#FF9933] pb-2 inline-block">
                    {content.jyotirlingas.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700 relative z-10">
                    {content.jyotirlingas.text}
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={200}>
                <div className="bg-white p-10 rounded-2xl shadow-xl h-full border-t-4 border-[#FF9933] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-red-50 rounded-bl-full -mr-10 -mt-10 z-0"></div>
                  <h3 className="text-3xl font-serif font-bold text-[#8B0000] mb-6 relative z-10 border-b-2 border-[#FF9933] pb-2 inline-block">
                    {content.prasad.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6 relative z-10">
                    {content.prasad.text}
                  </p>
                  <ul className="space-y-3 relative z-10">
                    {content.prasad.points.map((point, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-[#FF9933] mt-2 mr-3 flex-shrink-0"></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Who Should Book & Why Choose Us */}
        <section className="py-12 md:py-20 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <RevealOnScroll className="order-2 md:order-1">
              <h3 className="text-3xl font-serif font-bold text-[#d68c45] mb-8">
                Who is This Service For?
              </h3>
              <ul className="space-y-4">
                {content.whoShouldBook.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-lg text-[#fcebd5]/90 p-3 bg-[#2a1205] shadow-sm rounded-lg border border-[#d68c45]/20"
                  >
                    <div className="bg-[#d68c45]/20 p-2 rounded-full mr-4">
                      <CheckCircle2 className="w-5 h-5 text-[#d68c45]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
            <RevealOnScroll className="order-1 md:order-2">
              <div className="bg-[#2a1205] p-10 rounded-3xl border border-[#d68c45]/30 shadow-2xl">
                <h3 className="text-3xl font-serif font-bold text-[#d68c45] mb-8">
                  Why Devotees Trust Naman Darshan?
                </h3>
                <div className="space-y-6">
                  {content.whyChoose.map((item, i) => (
                    <div key={i} className="flex items-center text-[#fcebd5]">
                      <div className="mr-4">{item.icon}</div>
                      <span className="font-medium text-lg">{item.title}</span>
                    </div>
                  ))}
                  <div className="flex items-center mt-6 pt-6 border-t border-[#d68c45]/20">
                    <Phone className="w-6 h-6 text-[#d68c45] mr-3" />
                    <span className="text-2xl font-bold text-white">
                      +9187969 73199
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 md:py-16 bg-[#150500]">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif text-center text-[#d68c45] mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {content.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b-[#d68c45]/20"
                >
                  <AccordionTrigger className="text-left text-lg font-medium text-[#deb887] hover:text-[#d68c45]">
                    <span>{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent forceMount={true} className="text-[#fcebd5]/80 text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="py-12 md:py-20 bg-gradient-to-t from-[#2a1205] to-[#1a0b00] text-center"
          id="book"
        >
          <div className="container mx-auto px-4">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#d68c45] mb-6">
                Request Early – Limited Slots Available
              </h2>
              <p className="text-xl text-[#fcebd5]/80 max-w-2xl mx-auto mb-10">
                Mahashivratri sees extremely high demand, and Guided Darshan Assistance
                slots are limited. Early registration ensures better coordination and
                a smoother experience.
              </p>
              <Button
                size="lg"
                className="bg-[#d68c45] hover:bg-[#b56b2a] text-black font-bold text-lg md:text-xl px-8 py-4 md:px-12 md:py-6 rounded-full shadow-2xl transition-all hover:-translate-y-1 shadow-[#d68c45]/20"
                onClick={() => setIsBookingModalOpen(true)}
              >
                Request Guided Darshan Assistance
              </Button>
              <p className="mt-8 text-2xl font-serif text-[#deb887] font-bold">
                Har Har Mahadev
              </p>
            </RevealOnScroll>

          </div>
        </section>
      </main>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        title="Mahashivratri Guided Darshan Assistance"
        type="darshan"
        serviceName="Mahashivratri Guided Darshan Assistance"
        serviceId="mahashivratari"
      />

      <Footer />
    </div>
  );
};

export default Mahashivratri;
