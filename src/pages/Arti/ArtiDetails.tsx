import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

import { Flame, BookOpen, Languages, Sparkles, Play, Pause, Music, Volume2, HelpCircle, ArrowRight, Video } from "lucide-react";
import { getApiUrl } from "@/utils/api";
import { Button } from "react-day-picker";

import TempleCard from "@/pages/Temples/components/TempleCard";
import PujaCard from "@/pages/Puja/components/PujaCard";
import PrasadamCard from "@/pages/Prasadam/components/PrasadamCard";
import ChadhavaCard from "@/pages/Chadhava/components/ChadhavaCard";

const getTranslatedAarti = (rawAarti: any, isHindi: boolean) => {
  if (!rawAarti) return null;
  if (isHindi) return rawAarti;

  const translated = { ...rawAarti };

  if (rawAarti.slug === "शिव-जी-की-आरती–ॐ-जय-शिव-ओंकारा-Lyrics") {
    translated.title = {
      hindi: rawAarti.title?.hindi,
      english: "Shiv Ji Ki Aarti - Om Jai Shiv Omkara"
    };
    translated.about = "This Aarti is one of the most popular Aartis of Lord Shiva. Its composition describes the various forms, attributes, and divine glory of Shiva. Through the Aarti, devotees remember the oneness of Lord Shiva, Brahma, and Vishnu, as well as the divine mysteries of the preservation, creation, and destruction of the universe.";
    translated.spiritualSignificance = `<ul>
  <li>This Aarti describes both the manifest (Sagun) and unmanifest (Nirakar) forms of Lord Shiva.</li>
  <li>The Aarti conveys the message of unity among Brahma, Vishnu, and Mahesh (Shiva).</li>
  <li>Lord Shiva is presented not only as the destroyer of the universe but also as a benevolent and compassionate deity.</li>
  <li>Singing the Aarti provides peace of mind, stability, and spiritual strength.</li>
  <li>Devotion to Shiva inspires one to overcome ego, anger, and negative thoughts.</li>
</ul>`;
    translated.benefits = [
      "1. Peace of Mind: Regular recitation of the Aarti calms the mind and helps reduce stress.",
      "2. Positive Energy: Performing the Shiva Aarti at home increases spiritual atmosphere and positivity.",
      "3. Protection from Fear and Negativity: Lord Shiva is considered the remover of obstacles. His Aarti increases willpower and courage.",
      "4. Spiritual Progress: Regular Aarti fosters devotion, meditation, and surrender to God.",
      "5. Family Peace and Happiness: Performing the Aarti with family enhances mutual love, harmony, and goodwill."
    ];
    translated.bestTime = `<h3><strong>In Daily Worship</strong></h3>
<ul>
  <li>In the morning after taking a bath</li>
  <li>In the evening after lighting the lamp</li>
</ul>
<h3><strong>On Special Occasions</strong></h3>
<ul>
  <li>Mondays</li>
  <li>Pradosh Vrat</li>
  <li>Monthly Shivratri</li>
  <li>Mahashivratri</li>
  <li>Sawan and Shravan month</li>
  <li>Kartik month</li>
  <li>Before starting any important work</li>
</ul>`;
    translated.howToSing = `<h3><strong>1. Preparation of Worship Place</strong></h3>
<ul>
  <li>Install a Shivling or idol of Lord Shiva.</li>
  <li>Keep the place clean.</li>
</ul>
<h3><strong>2. Worship Materials</strong></h3>
<ul>
  <li>Lamp (ghee or oil)</li>
  <li>Incense sticks</li>
  <li>Flowers</li>
  <li>Bael leaves (Belpatra)</li>
  <li>Water or Holy Ganges water</li>
  <li>Aarti plate</li>
</ul>
<h3><strong>3. Worship Ceremony</strong></h3>
<ul>
  <li>Offer water, holy water, bael leaves, and flowers to the Shivling.</li>
  <li>Chant the mantra "Om Namah Shivaya".</li>
</ul>
<h3><strong>4. Perform Aarti</strong></h3>
<ul>
  <li>Light the lamp and sing the Aarti.</li>
  <li>Rotate the Aarti plate clockwise in front of the deity.</li>
</ul>
<h3><strong>5. Prayer</strong></h3>
<ul>
  <li>Offer prayers after the Aarti according to your faith.</li>
  <li>Distribute Prasadam.</li>
</ul>`;
  }

  if (translated.title?.english && /[\u0900-\u097F]/.test(translated.title.english)) {
    if (translated.title.english.includes("शिव जी की आरती")) {
      translated.title = {
        ...translated.title,
        english: "Shiv Ji Ki Aarti - Om Jai Shiv Omkara"
      };
    }
  }

  return translated;
};

const AartiDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [rawAarti, setRawAarti] = useState<any>(null);
  const [allAartis, setAllAartis] = useState<any[]>([]);
  const [allTemples, setAllTemples] = useState<any[]>([]);
  const [allPujas, setAllPujas] = useState<any[]>([]);
  const [allPrasadams, setAllPrasadams] = useState<any[]>([]);
  const [allChadhavas, setAllChadhavas] = useState<any[]>([]);

  // true = hindi | false = english
  const [isHindi, setIsHindi] = useState(true);

  const [loading, setLoading] = useState(true);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setProgress(time);
    }
  };

  const [suggestedAartis, setSuggestedAartis] = useState<any[]>([]);
  const [suggestedBhajans, setSuggestedBhajans] = useState<any[]>([]);

  useEffect(() => {
    const fetchAllAartis = async () => {
      try {
        const response = await fetch(getApiUrl("/api/aarti"));
        const result = await response.json();
        if (result.success && Array.isArray(result.data)) {
          setAllAartis(result.data);
        } else if (Array.isArray(result)) {
          setAllAartis(result);
        }
      } catch (err) {
        console.error("Error fetching all aartis:", err);
      }
    };
    fetchAllAartis();

    const fetchAllTemples = async () => {
      try {
        const response = await fetch(getApiUrl("/api/temples"));
        const result = await response.json();
        if (Array.isArray(result)) {
          setAllTemples(result);
        }
      } catch (err) {
        console.error("Error fetching all temples:", err);
      }
    };
    fetchAllTemples();

    const fetchAllPujas = async () => {
      try {
        const response = await fetch(getApiUrl("/api/pujas"));
        const result = await response.json();
        if (Array.isArray(result)) {
          setAllPujas(result);
        }
      } catch (err) {
        console.error("Error fetching all pujas:", err);
      }
    };
    fetchAllPujas();

    const fetchAllPrasadams = async () => {
      try {
        const response = await fetch(getApiUrl("/api/prasadams"));
        const result = await response.json();
        if (Array.isArray(result)) {
          setAllPrasadams(result);
        }
      } catch (err) {
        console.error("Error fetching all prasadams:", err);
      }
    };
    fetchAllPrasadams();

    const fetchAllChadhavas = async () => {
      try {
        const response = await fetch(getApiUrl("/api/chadhava"));
        const result = await response.json();
        if (Array.isArray(result)) {
          setAllChadhavas(result);
        }
      } catch (err) {
        console.error("Error fetching all chadhavas:", err);
      }
    };
    fetchAllChadhavas();
  }, []);

  useEffect(() => {
    const fetchAarti = async () => {
      try {
        const response = await fetch(getApiUrl(`/api/aarti/${slug}`), {
            method:"GET"
        });

        const result = await response.json();

        if(result.success){
            setRawAarti(result.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAarti();
  }, [slug]);

  useEffect(() => {
    if (rawAarti && allAartis.length > 0) {
      if (rawAarti.relatedAartis && rawAarti.relatedAartis.length > 0) {
        setSuggestedAartis(rawAarti.relatedAartis);
      } else {
        const random = [...allAartis].filter(a => a.slug !== rawAarti.slug).sort(() => 0.5 - Math.random()).slice(0, 3).map(a => a.slug);
        setSuggestedAartis(random);
      }

      if (rawAarti.relatedBhajans && rawAarti.relatedBhajans.length > 0) {
        setSuggestedBhajans(rawAarti.relatedBhajans);
      } else {
        const random = [...allAartis].filter(a => a.slug !== rawAarti.slug).sort(() => 0.5 - Math.random()).slice(0, 3).map(a => a.slug);
        setSuggestedBhajans(random);
      }
    }
  }, [rawAarti, allAartis]);

  const aarti = getTranslatedAarti(rawAarti, isHindi);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
            <span className="text-sm font-semibold text-stone-500">Loading...</span>
        </div>
      </div>
    );
  }

  if (!aarti) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
            <h1 className="text-2xl font-bold text-stone-700 mb-2">Aarti / Bhajan Not Found</h1>
            <a href="/bhajan-aarti" className="text-orange-500 font-bold hover:underline">Go Back to Listing</a>
        </div>
      </div>
    );
  }

  // Youtube embed helper
  const getEmbedUrl = (url: string) => {
    if (!url) return "";
    if (url.includes("youtube.com/embed/")) return url;
    if (url.includes("youtube.com/watch?v=")) {
        const id = url.split("v=")[1]?.split("&")[0];
        return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes("youtu.be/")) {
        const id = url.split("youtu.be/")[1]?.split("?")[0];
        return `https://www.youtube.com/embed/${id}`;
    }
    return url;
  };

  const isYouTubeUrl = (url: string) => {
    if (!url) return false;
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  const getResolvedVideoUrl = (url: string) => {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    return getApiUrl(url);
  };

  // Convert slug to readable text
  const formatSlug = (slugText: string) => {
    return slugText
        .split("-")
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
  };

  // SEO Schema Definitions
  const buildSchemas = () => {
    if (!aarti) return [];

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://namandarshan.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Bhajans & Aartis",
          "item": "https://namandarshan.com/bhajan-aarti"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": isHindi ? aarti.title.hindi : aarti.title.english,
          "item": `https://namandarshan.com/bhajan-aarti/${aarti.slug}`
        }
      ]
    };

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": isHindi ? aarti.title.hindi : aarti.title.english,
      "image": [aarti.thumbnail],
      "datePublished": aarti.createdAt || new Date().toISOString(),
      "dateModified": aarti.updatedAt || new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": "Namandarshan",
        "url": "https://namandarshan.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Namandarshan",
        "logo": {
          "@type": "ImageObject",
          "url": "https://namandarshan.com/logo.png"
        }
      },
      "description": isHindi 
        ? `${aarti.title.hindi} के लिरिक्स, हिंदी और अंग्रेजी में, अंग्रेजी अर्थ, लाभ और आध्यात्मिक महत्व।` 
        : `Read ${aarti.title.english} lyrics in Hindi & English along with English meaning, spiritual significance, benefits, and FAQ.`
    };

    const faqSchema = aarti.faqs && aarti.faqs.length > 0 ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": aarti.faqs.map((faq: any) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    } : null;

    const audioSchema = aarti.audioUrl ? {
      "@context": "https://schema.org",
      "@type": "AudioObject",
      "name": isHindi ? `${aarti.title.hindi} ऑडियो` : `${aarti.title.english} Audio`,
      "contentUrl": aarti.audioUrl,
      "description": isHindi ? `${aarti.title.hindi} सुनने के लिए ऑडियो ट्रैक` : `Audio track to listen to ${aarti.title.english}`,
      "encodingFormat": "audio/mpeg"
    } : null;

    const videoSchema = aarti.videoUrl ? {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": isHindi ? `${aarti.title.hindi} वीडियो` : `${aarti.title.english} Video`,
      "description": isHindi ? `${aarti.title.hindi} वीडियो ट्रैक` : `Video player to watch ${aarti.title.english}`,
      "thumbnailUrl": [aarti.thumbnail],
      "uploadDate": aarti.createdAt || new Date().toISOString(),
      "contentUrl": aarti.videoUrl,
      "embedUrl": getEmbedUrl(aarti.videoUrl)
    } : null;

    return [
      breadcrumbSchema,
      articleSchema,
      ...(faqSchema ? [faqSchema] : []),
      ...(audioSchema ? [audioSchema] : []),
      ...(videoSchema ? [videoSchema] : [])
    ];
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <SEO
        title={isHindi ? aarti.title.hindi : aarti.title.english}
        description={isHindi ? aarti.deity.hindi : aarti.deity.english}
        schemas={buildSchemas()}
      />

      <Header />

      <main className="flex-grow pt-40 md:pt-48 lg:pt-52 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-12">
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src={aarti.thumbnail}
              alt={aarti.title.english}
              className="w-full h-[500px] object-contain bg-stone-900"
            />
          
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
              
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14 text-white">
              <div className="inline-flex items-center gap-2 bg-orange-500/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.25em] mb-5">
                <Flame className="w-4 h-4" />

                {isHindi ? aarti.deity?.hindi : aarti.deity?.english}
              </div>

              {/* H1 Title: Strict SEO Format */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
                {isHindi ? aarti.title.hindi : aarti.title.english} Lyrics in Hindi | English | Meaning, Benefits & Spiritual Significance
              </h1>

              <p className="text-orange-100 text-lg max-w-2xl mb-8">
                {isHindi
                  ? "भक्ति, श्रद्धा और आध्यात्मिक ऊर्जा से भरपूर आरती"
                  : "A devotional bhajan filled with faith, positivity and divine energy"}
              </p>

              {aarti.audioUrl && (
                <div className="flex flex-col gap-4 max-w-3xl">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={togglePlay}
                      className="w-14 h-14 flex-shrink-0 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-lg"
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                    </button>
                    
                    <div className="flex-grow flex items-center gap-3">
                      <span className="text-xs font-medium w-10 text-right">
                        {Math.floor(progress / 60)}:{(Math.floor(progress % 60)).toString().padStart(2, '0')}
                      </span>
                      <input 
                        type="range" 
                        min={0} 
                        max={duration || 100} 
                        value={progress} 
                        onChange={handleSeek}
                        className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer accent-orange-500"
                      />
                      <span className="text-xs font-medium w-10">
                        {Math.floor(duration / 60)}:{(Math.floor(duration % 60)).toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  
                  <audio 
                    ref={audioRef}
                    src={aarti.audioUrl} 
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={() => setIsPlaying(false)}
                    className="hidden"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Language Toggle */}
        <section className="container mx-auto px-4 mb-10">
          <div className="flex justify-center">
            <div className="bg-white p-2 rounded-full shadow-md border border-orange-100 inline-flex items-center gap-2">
              <button
                onClick={() => setIsHindi(true)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  isHindi
                    ? "bg-orange-500 text-white"
                    : "text-stone-600 hover:bg-orange-50"
                }`}
              >
                हिंदी
              </button>

              <button
                onClick={() => setIsHindi(false)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  !isHindi
                    ? "bg-orange-500 text-white"
                    : "text-stone-600 hover:bg-orange-50"
                }`}
              >
                English
              </button>
            </div>
          </div>
        </section>

        {/* Content sections */}
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 w-full min-w-0">
            {aarti.isTemplate ? (
              /* NEW TEMPLATE RENDER */
              <div className="space-y-12">
              {/* About Section */}
              {aarti.about && (
                <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-orange-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-orange-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-stone-900">
                      About {isHindi ? aarti.title.hindi : aarti.title.english}
                    </h2>
                  </div>
                  <div 
                    className="text-stone-700 leading-relaxed text-lg prose prose-stone max-w-none" 
                    dangerouslySetInnerHTML={{ __html: aarti.about }}
                  />
                </div>
              )}

              {/* Hindi Lyrics Section */}
              {aarti.lyricsHindi && (isHindi || !aarti.lyricsRoman) && (
                <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-orange-100">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-orange-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-stone-900">
                      Lyrics in Hindi
                    </h2>
                  </div>
                  {/<[a-z][\s\S]*>/i.test(aarti.lyricsHindi) ? (
                    <div 
                      className="text-stone-800 leading-relaxed text-lg md:text-2xl font-semibold text-center prose prose-stone max-w-none [&_p]:text-center"
                      dangerouslySetInnerHTML={{ __html: aarti.lyricsHindi }}
                    />
                  ) : (
                    <div className="space-y-4 text-center">
                      {aarti.lyricsHindi.split("\n").map((line: string, i: number) => (
                        <p key={i} className="text-lg md:text-2xl font-semibold text-stone-800 leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Roman Hindi Lyrics Section */}
              {aarti.lyricsRoman && (!isHindi || !aarti.lyricsHindi) && (
                <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-orange-100">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-orange-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-stone-900">
                      Lyrics in English (Transliteration)
                    </h2>
                  </div>
                  {/<[a-z][\s\S]*>/i.test(aarti.lyricsRoman) ? (
                    <div 
                      className="text-stone-700 leading-relaxed text-lg md:text-xl font-medium italic text-center prose prose-stone max-w-none [&_p]:text-center"
                      dangerouslySetInnerHTML={{ __html: aarti.lyricsRoman }}
                    />
                  ) : (
                    <div className="space-y-4 text-center">
                      {aarti.lyricsRoman.split("\n").map((line: string, i: number) => (
                        <p key={i} className="text-lg md:text-xl font-medium text-stone-700 leading-relaxed italic">
                          {line}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* English Meaning Section */}
              {aarti.englishMeaning && (
                <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-orange-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                      <Languages className="w-6 h-6 text-orange-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-stone-900">
                      English Meaning of {isHindi ? aarti.title.hindi : aarti.title.english}
                    </h2>
                  </div>
                  <div 
                    className="text-stone-700 leading-relaxed text-lg prose prose-stone max-w-none" 
                    dangerouslySetInnerHTML={{ __html: aarti.englishMeaning }}
                  />
                </div>
              )}

              {/* Spiritual Significance */}
              {aarti.spiritualSignificance && (
                <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-orange-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                      <Flame className="w-6 h-6 text-orange-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-stone-900">
                      Spiritual Significance of {isHindi ? aarti.title.hindi : aarti.title.english}
                    </h2>
                  </div>
                  <div 
                    className="text-stone-700 leading-relaxed text-lg prose prose-stone max-w-none" 
                    dangerouslySetInnerHTML={{ __html: aarti.spiritualSignificance }}
                  />
                </div>
              )}

              {/* Benefits */}
              {aarti.benefits && aarti.benefits.length > 0 && (
                <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-orange-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-orange-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-stone-900">
                      Benefits of Singing {isHindi ? aarti.title.hindi : aarti.title.english}
                    </h2>
                  </div>
                  <ul className="space-y-4">
                    {aarti.benefits.map((benefit: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-stone-700 text-lg leading-relaxed">
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-500 mt-2.5 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Best Time to Sing */}
              {aarti.bestTime && (
                <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-orange-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-orange-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-stone-900">
                      Best Time to Sing {isHindi ? aarti.title.hindi : aarti.title.english}
                    </h2>
                  </div>
                  <div 
                    className="text-stone-700 leading-relaxed text-lg prose prose-stone max-w-none" 
                    dangerouslySetInnerHTML={{ __html: aarti.bestTime }}
                  />
                </div>
              )}

              {/* How to Sing Correctly */}
              {aarti.howToSing && (
                <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-orange-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-orange-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-stone-900">
                      How to Sing {isHindi ? aarti.title.hindi : aarti.title.english}
                    </h2>
                  </div>
                  <div 
                    className="text-stone-700 leading-relaxed text-lg prose prose-stone max-w-none" 
                    dangerouslySetInnerHTML={{ __html: aarti.howToSing }}
                  />
                </div>
              )}

              {/* Which Deity is Worshipped */}
              {aarti.deityWorshipped && (
                <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-orange-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-orange-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-stone-900">
                      Which Deity is Worshipped Through This Bhajan?
                    </h2>
                  </div>
                  <div 
                    className="text-stone-700 leading-relaxed text-lg prose prose-stone max-w-none" 
                    dangerouslySetInnerHTML={{ __html: aarti.deityWorshipped }}
                  />
                </div>
              )}

              {/* Festivals & Occasions */}
              {aarti.festivals && aarti.festivals.length > 0 && (
                <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-orange-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-orange-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-stone-900">
                      Festivals & Occasions to Sing This Bhajan
                    </h2>
                  </div>
                  <ul className="space-y-4">
                    {aarti.festivals.map((occasion: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-stone-700 text-lg leading-relaxed">
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-500 mt-2.5 shrink-0" />
                        <span>{occasion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* What This Bhajan Teaches Us */}
              {aarti.teachings && (
                <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-orange-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-orange-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-stone-900">
                      What This Bhajan Teaches Us
                    </h2>
                  </div>
                  <div 
                    className="text-stone-700 leading-relaxed text-lg prose prose-stone max-w-none" 
                    dangerouslySetInnerHTML={{ __html: aarti.teachings }}
                  />
                </div>
              )}

              {/* Listen Audio */}
              {aarti.audioUrl && (
                <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-orange-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                      <Music className="w-6 h-6 text-orange-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-stone-900">
                      Listen to {isHindi ? aarti.title.hindi : aarti.title.english} Audio
                    </h2>
                  </div>
                  <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 flex flex-col md:flex-row items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white shrink-0">
                      <Volume2 className="w-6 h-6" />
                    </div>
                    <div className="flex-grow w-full">
                      <audio controls className="w-full">
                        <source src={aarti.audioUrl} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  </div>
                </div>
              )}

              {/* Watch Video */}
              {aarti.videoUrl && (
                <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-orange-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                      <Video className="w-6 h-6 text-orange-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-stone-900">
                      Watch {isHindi ? aarti.title.hindi : aarti.title.english} Video
                    </h2>
                  </div>
                  <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-video max-w-3xl mx-auto border border-orange-100 bg-black">
                    {isYouTubeUrl(aarti.videoUrl) ? (
                      <iframe
                        src={getEmbedUrl(aarti.videoUrl)}
                        title={aarti.title.english}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <video
                        src={getResolvedVideoUrl(aarti.videoUrl)}
                        controls
                        playsInline
                        preload="auto"
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                    )}
                  </div>
                </div>
              )}



              {/* Frequently Asked Questions */}
              {aarti.faqs && aarti.faqs.length > 0 && (
                <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-orange-100">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                      <HelpCircle className="w-6 h-6 text-orange-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-stone-900">
                      Frequently Asked Questions (FAQs)
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {aarti.faqs.map((faq: any, i: number) => (
                      <div key={i} className="border border-orange-100 rounded-2xl bg-stone-50/30 overflow-hidden shadow-xs">
                        <h3 className="text-lg font-black text-stone-900 p-5 bg-stone-50/50 flex justify-between items-center select-none leading-snug">
                          {faq.question}
                        </h3>
                        <div className="p-5 border-t border-orange-50/50 text-stone-600 leading-relaxed text-base">
                          {faq.answer || "Answer not available."}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
        ) : (
          /* LEGACY LAYOUT FALLBACK */
            <div className="space-y-10">
              {(aarti.sections || [])
                .filter((section: any) => {
                  const headingEnglish = (section.heading?.english || "").toLowerCase();
                  const headingHindi = (section.heading?.hindi || "").toLowerCase();
                  
                  if (isHindi) {
                    // Hindi Mode:
                    // 1. Hide if no Hindi content
                    const hasHindiContent = section.content?.hindi && section.content.hindi.filter((l: string) => l && l.trim() !== "").length > 0;
                    if (!hasHindiContent) return false;
                    
                    // 2. Hide if heading specifically points to English / Roman / Transliteration
                    if (
                      headingEnglish.includes("english") || 
                      headingEnglish.includes("roman") || 
                      headingEnglish.includes("transliteration") ||
                      headingHindi.includes("अंग्रेजी") ||
                      headingHindi.includes("इंग्लिश")
                    ) {
                      return false;
                    }
                  } else {
                    // English Mode:
                    // 1. Hide if no English content
                    const hasEnglishContent = section.content?.english && section.content.english.filter((l: string) => l && l.trim() !== "").length > 0;
                    if (!hasEnglishContent) return false;
                    
                    // 2. Hide if heading specifically points to Hindi
                    if (
                      headingEnglish.includes("hindi") ||
                      headingHindi.includes("हिंदी")
                    ) {
                      return false;
                    }
                  }
                  return true;
                })
                .map((section: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-orange-100"
                >
                  {/* Heading */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                      {section.type === "lyrics" ? (
                        <BookOpen className="w-6 h-6 text-orange-600" />
                      ) : (
                        <Sparkles className="w-6 h-6 text-orange-600" />
                      )}
                    </div>

                    <div>
                      <h2 className="text-2xl md:text-3xl font-black text-stone-900">
                        {isHindi
                          ? section.heading.hindi
                          : section.heading.english}
                      </h2>


                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-5 text-center">
                    {(isHindi
                      ? section.content.hindi
                      : section.content.english
                    )?.map((line: string, i: number) => (
                      <p
                        key={i}
                        className={`leading-relaxed text-stone-700 ${
                          section.type === "lyrics"
                            ? "text-lg md:text-xl font-medium"
                            : "text-base"
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
        )}
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[400px] shrink-0 space-y-8 sticky top-32">
            {/* Related Aartis */}
            {suggestedAartis.length > 0 && (
              <div className="bg-white rounded-[32px] p-6 shadow-sm border border-orange-100">
                <h2 className="text-xl font-black text-stone-900 mb-6 border-b pb-2">
                  Related Aartis
                </h2>
                <div className="flex flex-col gap-6">
                  {suggestedAartis.map((item: any, i: number) => {
                    const isString = typeof item === 'string';
                    const slug = isString ? item : item.slug;
                    const foundRaw = isString ? allAartis.find((a: any) => a.slug === slug) : null;
                    const found = foundRaw ? getTranslatedAarti(foundRaw, isHindi) : null;
                    
                    const title = found 
                      ? (isHindi ? found.title?.hindi : found.title?.english) || found.title?.english || found.title
                      : isString ? formatSlug(item) : item.title;

                    const deity = found 
                      ? (isHindi ? found.deity?.hindi : found.deity?.english) || found.deity?.english || found.deity
                      : isString ? "" : item.deity;

                    const thumbnail = found ? found.thumbnail : (isString ? "" : item.thumbnail);

                    return (
                      <div key={i} className="bg-stone-50 rounded-3xl overflow-hidden border border-orange-100 shadow-sm flex flex-col group hover:shadow-md transition-all duration-300">
                        <div className="h-40 overflow-hidden relative bg-stone-200">
                          {thumbnail ? (
                            <img src={thumbnail} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Flame className="w-10 h-10 text-orange-400" />
                            </div>
                          )}
                        </div>
                        <div className="p-5 flex-grow flex flex-col justify-between">
                          <div>
                            <h3 className="text-base font-bold text-stone-900 mb-1 leading-snug">{title}</h3>
                            {deity && <p className="text-orange-600 text-[10px] font-semibold mb-4 uppercase tracking-wider">{deity}</p>}
                          </div>
                          <a
                            href={`/bhajan-aarti/${slug}`}
                            className="inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-colors duration-300"
                          >
                            Read Lyrics
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Related Bhajans */}
            {suggestedBhajans.length > 0 && (
              <div className="bg-white rounded-[32px] p-6 shadow-sm border border-orange-100">
                <h2 className="text-xl font-black text-stone-900 mb-6 border-b pb-2">
                  Related Bhajans
                </h2>
                <div className="flex flex-col gap-6">
                  {suggestedBhajans.map((item: any, i: number) => {
                    const isString = typeof item === 'string';
                    const slug = isString ? item : item.slug;
                    const foundRaw = isString ? allAartis.find((a: any) => a.slug === slug) : null;
                    const found = foundRaw ? getTranslatedAarti(foundRaw, isHindi) : null;
                    
                    const title = found 
                      ? (isHindi ? found.title?.hindi : found.title?.english) || found.title?.english || found.title
                      : isString ? formatSlug(item) : item.title;

                    const deity = found 
                      ? (isHindi ? found.deity?.hindi : found.deity?.english) || found.deity?.english || found.deity
                      : isString ? "" : item.deity;

                    const thumbnail = found ? found.thumbnail : (isString ? "" : item.thumbnail);

                    return (
                      <div key={i} className="bg-stone-50 rounded-3xl overflow-hidden border border-orange-100 shadow-sm flex flex-col group hover:shadow-md transition-all duration-300">
                        <div className="h-40 overflow-hidden relative bg-stone-200">
                          {thumbnail ? (
                            <img src={thumbnail} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Flame className="w-10 h-10 text-orange-400" />
                            </div>
                          )}
                        </div>
                        <div className="p-5 flex-grow flex flex-col justify-between">
                          <div>
                            <h3 className="text-base font-bold text-stone-900 mb-1 leading-snug">{title}</h3>
                            {deity && <p className="text-orange-600 text-[10px] font-semibold mb-4 uppercase tracking-wider">{deity}</p>}
                          </div>
                          <a
                            href={`/bhajan-aarti/${slug}`}
                            className="inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-colors duration-300"
                          >
                            Read Lyrics
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Related Temples */}
            {aarti.relatedTemples && aarti.relatedTemples.length > 0 && (
              <div className="bg-white rounded-[32px] p-6 shadow-sm border border-orange-100">
                <h2 className="text-xl font-black text-stone-900 mb-6 border-b pb-2">
                  Related Temples
                </h2>
                <div className="flex flex-col gap-6">
                  {aarti.relatedTemples.map((slugStr: string, i: number) => {
                    const found = allTemples.find((t: any) => t.slug === slugStr || t.slug === slugStr.replace(/-temple$/, '') || t.slug === slugStr + '-temple');
                    if (found) {
                      return (
                        <div key={i} className="h-full">
                          <TempleCard temple={found} />
                        </div>
                      );
                    }
                    return (
                      <div key={i} className="h-full flex items-center">
                        <a
                          href={`/temples/${slugStr}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-orange-50 hover:bg-orange-100 text-orange-700 font-bold border border-orange-100 text-sm transition-all duration-300 shadow-xs"
                        >
                          <span>{formatSlug(slugStr)}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Related Online Pujas */}
            {aarti.relatedPujas && aarti.relatedPujas.length > 0 && (
              <div className="bg-white rounded-[32px] p-6 shadow-sm border border-orange-100">
                <h2 className="text-xl font-black text-stone-900 mb-6 border-b pb-2">
                  Related Pujas
                </h2>
                <div className="flex flex-col gap-6">
                  {aarti.relatedPujas.map((slugStr: string, i: number) => {
                    const found = allPujas.find((p: any) => p.slug === slugStr || p.slug === slugStr.replace(/-puja$/, '') || p.slug === slugStr + '-puja');
                    if (found) {
                      return (
                        <div key={i} className="h-full">
                          <PujaCard
                            id={found.id || found._id}
                            slug={found.slug}
                            title={found.title}
                            image={found.image}
                            description={found.description}
                            imageFit={found.imageFit}
                            location={found.location}
                            category={found.category}
                            problemAddressed={found.problemAddressed}
                            festival={found.festival}
                            temple={found.temple}
                            isOnline={found.isOnline}
                            isTemple={found.isTemple}
                            isHome={found.isHome}
                          />
                        </div>
                      );
                    }
                    return (
                      <div key={i} className="h-full flex items-center">
                        <a
                          href={`/puja/${slugStr}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-orange-50 hover:bg-orange-100 text-orange-700 font-bold border border-orange-100 text-sm transition-all duration-300 shadow-xs"
                        >
                          <span>{formatSlug(slugStr)}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Related Prasadam */}
            {aarti.relatedPrasadam && aarti.relatedPrasadam.length > 0 && (
              <div className="bg-white rounded-[32px] p-6 shadow-sm border border-orange-100">
                <h2 className="text-xl font-black text-stone-900 mb-6 border-b pb-2">
                  Related Prasadam
                </h2>
                <div className="flex flex-col gap-6">
                  {aarti.relatedPrasadam.map((slugStr: string, i: number) => {
                    const found = allPrasadams.find((p: any) => p.slug === slugStr || p.slug === slugStr.replace(/-prasadam$/, '') || p.slug === slugStr + '-prasadam');
                    if (found) {
                      return (
                        <div key={i} className="h-full">
                          <PrasadamCard
                            id={found.id || found._id}
                            slug={found.slug}
                            title={found.title}
                            image={found.image}
                            description={found.description}
                            templeName={found.templeName}
                            location={found.location}
                            templeSlug={found.templeSlug}
                            temples={allTemples}
                          />
                        </div>
                      );
                    }
                    return (
                      <div key={i} className="h-full flex items-center">
                        <a
                          href={`/prasadam/${slugStr}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-orange-50 hover:bg-orange-100 text-orange-700 font-bold border border-orange-100 text-sm transition-all duration-300 shadow-xs"
                        >
                          <span>{formatSlug(slugStr)}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Related Chadhava */}
            {aarti.relatedChadhava && aarti.relatedChadhava.length > 0 && (
              <div className="bg-white rounded-[32px] p-6 shadow-sm border border-orange-100">
                <h2 className="text-xl font-black text-stone-900 mb-6 border-b pb-2">
                  Related Chadhava
                </h2>
                <div className="flex flex-col gap-6">
                  {aarti.relatedChadhava.map((slugStr: string, i: number) => {
                    const found = allChadhavas.find((c: any) => c.slug === slugStr || c.slug === slugStr.replace(/-chadhava$/, '') || c.slug === slugStr + '-chadhava');
                    if (found) {
                      return (
                        <div key={i} className="h-full">
                          <ChadhavaCard
                            offering={{
                              id: found.id || found._id,
                              slug: found.slug,
                              name: found.name || found.title || "",
                              image: found.image,
                              description: found.description,
                              templeName: found.templeName || found.temple || "",
                              tag: found.tag || ""
                            }}
                            onBook={(offering) => {
                              navigate(`/chadhava/${offering.slug || offering.id}`);
                            }}
                          />
                        </div>
                      );
                    }
                    return (
                      <div key={i} className="h-full flex items-center">
                        <a
                          href={`/chadhava/${slugStr}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-orange-50 hover:bg-orange-100 text-orange-700 font-bold border border-orange-100 text-sm transition-all duration-300 shadow-xs"
                        >
                          <span>{formatSlug(slugStr)}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>


      </main>

      <Footer />
    </div>
  );
};

export default AartiDetailPage;
