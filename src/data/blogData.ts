import kedarnathImage from "@/assets/blogs/kedarnath.jpg";
import jagannathImage from "@/assets/blogs/jagannath.jpg";
import buddhaMainImage from "@/assets/blogs/buddha-purnima-front-new.jpg";
import twelwJyotirlingImg from "@/assets/blogs/The12Jyotirling.png"
import vastuGuideImg from "@/assets/VS1.png";
import vastuFrontImg from "@/assets/VS8.webp";

export interface Blog {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  link: string;
  readTime: string;
}

export const blogs: Blog[] = [
  {
    title: "Vastu Shastra: Complete Guide to Balance, Energy & Prosperity",
    excerpt: "Explore Vastu Shastra for home with directions, tips, colours & remedies. Improve energy, prosperity, and harmony with simple Vastu principles.",
    image: vastuFrontImg,
    date: "16 May 2026",
    link: "/blog/vastu-shastra-guide-home",
    readTime: "10 min read",
  },
  {
    title:
      "Buddha Purnima 2026: Date, Spiritual Meaning, Rituals & Powerful Observances",
    excerpt:
      "Buddha Purnima is one of the most sacred festivals honoring the life and divine journey of Gautama Buddha. In 2026, devotees gather to reflect upon his timeless teachings of wisdom, compassion, and inner awakening.",
    image: buddhaMainImage,
    date: "22 April 2026",
    link: "/blog/buddha-purnima-2026-guide",
    readTime: "10 min read",
  },
  {
    title:
      "Bankey Bihari Temple Darshan Update 2026: Supreme Court Panel Supports Reforms, Easier Access for Devotees",
    excerpt:
      "In an important development for devotees planning Bankey Bihari temple darshan booking, a Supreme Court-appointed committee has supported a series of reforms aimed at improving crowd management, safety, and equal access.",
    image: "/assets/WhatsApp Image 2026-04-21 at 10.33.42 AM.jpeg",
    date: "21 April 2026",
    link: "/blog/bankey-bihari-temple-darshan-update-2026-reforms",
    readTime: "6 min read",
  },
  {
    title:
      "Shukra Gochar April 2026: Venus in Taurus Brings Wealth, Comfort & Lucky Breaks for 5 Zodiac Signs",
    excerpt:
      "On April 19, 2026, Venus (Shukra) shifts from Aries into Taurus—its own sign. In Vedic astrology, this is a powerful placement forming Malavya Yoga.",
    image: "/assets/shukra-gochar-april-2026.png",
    date: "16 April 2026",
    link: "/blog/shukra-gochar-april-2026-venus-in-taurus",
    readTime: "5 min read",
  },
  {
    title:
      "War, Power & Planets: A Vedic Astrology Analysis of Global Tensions in 2026",
    excerpt:
      "Discover the astrological climate of 2026. Will global tensions escalate to World War III? An in-depth Vedic astrology prediction on Mars transits, Mercury retrogrades, and power dynamics.",
    image: "/assets/global-tensions-2026.jpeg",
    date: "15 April 2026",
    link: "/blog/vedic-astrology-predictions-global-tensions-2026",
    readTime: "8 min read",
  },
  {
    title:
      "Sabarimala Case Explained: Complete Story, Legal Battle, Timeline & Latest Updates (2026)",
    excerpt:
      "A comprehensive guide to the Sabarimala case, exploring its historical background, legal journey, constitutional significance, and the ongoing debate in 2026.",
    image: "/assets/sabarimala-case-main.png",
    date: "09 April 2026",
    link: "/blog/sabarimala-case-explained-complete-story-legal-battle",
    readTime: "15 min read",
  },
  {
    title: "Graha Shanti Puja: Balance Planetary Energies & Bring Peace",
    excerpt:
      "Complete guide to Graha Shanti Puja. Learn about the rituals, timing, benefits, and how to book online Graha Shanti puja for planetary balance.",
    image: "/assets/GrahaShantiPujaBlog.png",
    date: "30 March 2026",
    link: "/blog/graha-shanti-puja-planetary-balance-guide",
    readTime: "9 min read",
  },
  {
    title: "Vastu Shanti Puja: Why It’s Essential Before Entering a New Home",
    excerpt:
      "Complete guide to Vastu Shanti Puja. Learn about the benefits, timing, vidhi, and how to book online Vastu Shanti puja for home energy correction.",
    image: "/assets/VastuShantiPujaBlog.jpg",
    date: "30 March 2026",
    link: "/blog/vastu-shanti-puja-new-home-guide",
    readTime: "8 min read",
  },
  {
    title:
      "Satyanarayan Pooja: A Simple Ritual That Brings Peace, Positivity & Blessings",
    excerpt:
      "Complete guide to Satyanarayan Pooja. Learn about the katha, puja vidhi at home, and how to book online Satyanarayan puja for peace.",
    image: "/assets/SatyanarayanPoojaBlog.png",
    date: "30 March 2026",
    link: "/blog/satyanarayan-pooja-peace-positivity-guide",
    readTime: "7 min read",
  },
  {
    title:
      "April Full Moon 2026 (Pink Moon): Date, Time, Spiritual Meaning & Significance",
    excerpt:
      "Complete guide to April Full Moon 2026 including date, time (IST), spiritual meaning, Chaitra Purnima significance, and temple darshan tips.",
    image: "/assets/PinkMoon2026_Main.png",
    date: "02 April 2026",
    link: "/blog/april-full-moon-2026-pink-moon-guide",
    readTime: "8 min read",
  },
  {
    title: "Chaitra Navratri 2026: Dates, Muhurat Timings & Fasting Rituals",
    excerpt:
      "Celebrate Chaitra Navratri 2026 with our complete guide. Find dates, auspicious muhurat timings, daily goddess rituals, fasting rules, and Shakti temple darshan guides.",
    image: "/assets/ChaitraNavratri2026.png",
    date: "19 March 2026",
    link: "/blog/chaitra-navratri-2026-dates-muhurat-rituals",
    readTime: "15 min read",
  },
  {
    title:
      "Hanuman Jayanti 2026: Date, Puja Timings, Rituals & Temple Celebrations",
    excerpt:
      "Celebrate Hanuman Jayanti 2026 with our complete guide. Find dates, auspicious puja timings, rituals, fasting rules, and famous Hanuman temples in Mathura and Vrindavan.",
    image: "/assets/HanumanJayanti2026_v2.png",
    date: "02 April 2026",
    link: "/blog/hanuman-jayanti-2026-date-puja-rituals",
    readTime: "10 min read",
  },
  {
    title: "Vedic vs Western Astrology: Understanding the Real Difference",
    excerpt:
      "Learn the real difference between Vedic and Western astrology including zodiac systems, prediction techniques, and accuracy comparison.",
    image: "/assets/vedic-vs-western-astrology.jpg",
    date: "27 February 2026",
    link: "/blog/vedic-vs-western-astrology-difference",
    readTime: "12 min read",
  },
  {
    title: "Sun Sign vs Moon Sign Explained — Powerful Personality Combination",
    excerpt:
      "Learn the real difference between Sun Sign and Moon Sign, how they shape your personality, and explore zodiac traits and powerful element combinations.",
    image: "/assets/sunSignvsMoonSign.jpg",
    date: "27 February 2026",
    link: "/blog/sun-sign-vs-moon-sign-difference",
    readTime: "6 min read",
  },
  {
    title: "Dauji Huranga 2026 in Baldeo",
    excerpt:
      "Plan your visit to Dauji Huranga 2026 in Baldeo with this complete travel and darshan guide. Learn temple entry tips, crowd advice, timing, and routes to attend Dauji Temple Holi smoothly.",
    image: "/assets/blog14.jpg",
    date: "25 February 2026",
    link: "/blog/dauji-huranga-2026-baldeo-darshan-guide-tips",
    readTime: "7 min read",
  },
  {
    title: "Phalen Gaon Ki Holi (Near Kosi Kalan)",
    excerpt:
      "Plan your visit to Phalen Gaon Holi 2026 with this complete travel guide. Learn fire ritual timings, crowd tips, routes, and planning advice...",
    image: "/assets/blog13.jpg",
    date: "01 March 2026",
    link: "/blog/phalen-gaon-ki-holi-2026-fire-ritual-travel-guide-tips",
    readTime: "6 min read",
  },
  {
    title: "Chhadimar Holi Celebration in Gokul",
    excerpt:
      "Plan your visit to Chhadimar Holi 2026 in Gokul with this complete travel and darshan guide. Learn temple entry tips, crowd advice, timing, and routes to attend Bal Krishna Holi celebrations...",
    image: "/assets/blog12.jpg",
    date: "01 March 2026",
    link: "/blog/chhadimar-holi-gokul-2026-darshan-guide-tips",
    readTime: "8 min read",
  },
  {
    title: "Mathura Janmabhoomi Huranga 2026: Darshan Guide",
    excerpt:
      "Plan your visit to Mathura Janmabhoomi Huranga 2026 with this complete darshan and travel guide. Learn entry rules, temple tips, security checks, and crowd planning.",
    image: "/assets/blog11.jpg",
    date: "28 February 2026",
    link: "/blog/mathura-janmabhoomi-huranga-2026-darshan-guide",
    readTime: "7 min read",
  },
  {
    title: "Rangbharni Ekadashi Vrindavan 2026 Darshan Travel Guide",
    excerpt:
      "Plan your visit to Rangbharni Ekadashi 2026 in Vrindavan with this complete darshan and travel guide. Know temple timings, crowd tips, routes, and festival insights.",
    image: "/assets/blog9.jpg",
    date: "27 February 2026",
    link: "/blog/rangbharni-ekadashi-vrindavan-2026-darshan-guide",
    readTime: "12 min read",
  },
  {
    title: "Nandgaon Lathmar Holi 2026 Darshan Travel Guide",
    excerpt:
      "Attend Nandgaon Lathmar Holi 2026 with a complete travel and darshan planning guide. Learn temple access tips, crowd advice, routes, and timing.",
    image: "/assets/blog7.jpg",
    date: "26 February 2026",
    link: "/blog/nandgaon-lathmar-holi-2026-darshan-guide",
    readTime: "12 min read",
  },
  {
    title: "Lathmar Holi Celebration in Barsana 2026 Darshan Guide",
    excerpt:
      "Discover what makes Lathmar Holi in Barsana unique with this complete guide. Learn temple darshan tips, crowd insights, travel routes, and planning advice.",
    image: "/assets/blog4.jpg",
    date: "25 February 2026",
    link: "/blog/lathmar-holi-barsana-2026-darshan-guide",
    readTime: "12 min read",
  },
  {
    title: "Laddu Mar Holi at Shriji Temple, Barsana Darshan Guide",
    excerpt:
      "Experience Laddu Mar Holi at Shriji Temple Barsana with darshan planning tips, travel info, crowd guide, and Phag Nimantran festival details.",
    image: "/assets/blog3.jpg",
    date: "24 February 2026",
    link: "/blog/laddu-mar-holi-barsana-guide",
    readTime: "10 min read",
  },
  {
    title: "Phag Nimantran in Nandgaon & Laddu Mar Holi in Barsana",
    excerpt:
      "Plan Shriji Temple Barsana Holi darshan for Phag Nimantran and Laddu Mar Holi 2026 with travel tips, crowd guide, timings and booking advice.",
    image: "/assets/blog1.jpg",
    date: "24 February 2026",
    link: "/blog/phag-nimantran-barsana-holi-guide",
    readTime: "12 min read",
  },

  {
    title: "Ram Mandir Ayodhya: The 500-Year Wait Ends",
    excerpt:
      "The Grand Ram Mandir in Ayodhya is not just a structure of stone; it is a symbol of civilizational resilience, cultural revival, and the unwavering faith of a nation.",
    image:
      "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/WhatsApp_Image_2026-02-04_at_15.12.54_uyqvre.jpg",
    date: "22 January 2026",
    link: "/blog/ram-mandir-ayodhya-history-darshan-guide",
    readTime: "20 min read",
  },
  {
    title: "Tirupati Balaji: The Richest Temple & its Mysterious Legends",
    excerpt:
      "Perched atop the seven hills of Seshachalam, the Tirumala Venkateswara Temple is often called 'Kaliyuga Vaikuntha'. Discover the legends and debt to Kubera.",
    image:
      "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/WhatsApp_Image_2026-02-04_at_15.13.27_dynuus.jpg",
    date: "24 January 2026",
    link: "/blog/tirupati-balaji-darshan-booking-laddu-mystery",
    readTime: "18 min read",
  },
  {
    title: "Mysteries of Jagannath Puri: Where Science Bows to Divinity",
    excerpt:
      "The Jagannath Temple in Puri is a place where physical laws seem to suspend. From the flag flying against the wind to the cooking miracles, explore the divine mysteries.",
    image: jagannathImage,
    date: "20 January 2026",
    link: "/blogs/mysteries-of-jagannath-puri",
    readTime: "12 min read",
  },

  {
    title: "Golden Temple Yatra: The Shining Jewel of Amritsar",
    excerpt:
      "Discover the Golden Temple in Amritsar—a serene haven drawing countless visitors seeking peace and spirituality. Explore its history and architectural splendor.",
    image:
      "https://imgcld.yatra.com/holiday-india/image/upload/t_yt_blog_w_800_c_fill_g_auto_q_auto:good_f_jpg/v1441876623/blog/Golden_Temple_of_the_Darbar_Sahib.jpg",
    date: "31 January 2026",
    link: "/blog/golden-temple-amritsar-history-langar-guide",
    readTime: "10 min read",
  },
  {
    title: "Chardham Yatra: Essential Medical & Travel Tips",
    excerpt:
      "Traveling to the high Himalayas requires preparation. Learn about medical tips, essential packing, and the best time to visit Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    image:
      "https://www.shivkhori.in/wp-content/uploads/2025/11/Chardham-Registration--768x432.webp",
    date: "31 January 2026",
    link: "/blog/chardham-yatra-medical-tips-packing-guide",
    readTime: "8 min read",
  },
  {
    title: "Kashi: The City of Light & Moksha",
    excerpt:
      "Kashi is older than history. Discover the spiritual significance of Varanasi, the Ganga Aarti, and the new Kashi Vishwanath Corridor.",
    image: "/kashi-vishwanath.png",
    date: "31 January 2026",
    link: "/blog/kashi-vishwanath-moksha-ganga-aarti-guide",
    readTime: "7 min read",
  },

  {
    title: "Shirdi Sai Baba’s 11 Promises (11 Vachan)",
    excerpt:
      "To reassure his devotees, Sai Baba gave 11 Golden Promises before taking Samadhi. Read these promises that continue to guide millions.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Sri_Sai_Baba_Temple_%2C_Shirdi.jpg",
    date: "31 January 2026",
    link: "/blog/shirdi-sai-baba-11-vachan-promises-meaning",
    readTime: "6 min read",
  },
  {
    title: "Shirdi Sai Baba Yatra",
    excerpt:
      "Embark on a spiritual journey to Shirdi, the abode of Sai Baba. A guide to the temple, darshan timings, and the peaceful atmosphere of Sai's home.",
    image:
      "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/WhatsApp_Image_2026-02-04_at_15.05.09_o78rkp.jpg",
    date: "15 January 2026",
    link: "/blog/shirdi-yatra",
    readTime: "8 min read",
  },
  {
    title: "Vedic Astrology & Temple Remedies – Divine Guidance for Your Life",
    excerpt:
      "Discover how Vedic astrology connects with divine temple remedies. Learn about planetary influences, doshas, and how sacred darshan can bring balance to your life.",
    image: "/assets/ChatGPT Image Feb 16, 2026 at 04_25_40 PM.png",
    date: "17 February 2026",
    link: "/blog/vedic-astrology-temple-remedies",
    readTime: "15 min read",
  },
  {
    title:
      "Holi Festival 2026: History, Significance, Rituals & Celebration Guide",
    excerpt:
      "Explore the complete guide to Holi 2026. Learn about Holika Dahan, the legend of Prahlad, auspicious timings, rituals, and how India celebrates the Festival of Colors.",
    image: "/assets/Picture 2.png",
    date: "12 March 2026",
    link: "/blog/holi-2026-history-significance-rituals",
    readTime: "5 min read",
  },
  {
    title: "Everything You Should Know About the 12 Jyotirlingas of Lord Shiva and Their Spiritual Significance",
    excerpt: "The Complete Spiritual Guide to the 12 Jyotirlingas",
    image: twelwJyotirlingImg,
    date: "12 May 2026",
    link: "/blog/Everything-You-Should-Know-About-the-12-Jyotirlingas-of-Lord-Shiva-and-Their-Spiritual-Significance",
    readTime: "10 min read",
  },
];
