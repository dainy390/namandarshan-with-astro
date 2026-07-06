export interface PujaData {
    id: string;
    title: string;
    image: string;
    description: string;
    about: string;
    benefits: string;
    samagri: string;
    timing: string;
    duration: string;
    location: string;

    imageFit?: "contain" | "cover";
    gloryTitle?: string;
    process?: { title: string; description: string }[];
    faqs?: { question: string; answer: string }[];
    importance?: { title: string; description: string }[];
    seoTitle?: string;
    seoDescription?: string;
    seoKeywords?: string[];
    whoShouldDo?: string[];
    muhuratDays?: string;
    muhuratTimes?: string;
    templeDetails?: string;
}

export const pujas: PujaData[] = [
    {
        id: "sunderkand-paath-ayodhya-booking",
        title: "Personalized Sunderkand Paath in Ayodhya",
        gloryTitle: "Sunderkand in Ayodhya",
        image: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/Gemini_Generated_Image_obzwdrobzwdrobzw_xff0xs.png", // Lord Hanuman/Ram related
        description: "Seek the blessings of Lord Rama and Lord Hanuman by performing a sacred, personalized Sunderkand Paath at the holy land of Ayodhya. Attain spiritual strength, courage, and relief from life's obstacles through this divine recitation.",
        about: "What is Sunderkand Paath?\nSunderkand is the fifth book of the sacred Ramcharitmanas, authored by Saint Tulsidas. It chronicles the journey of Lord Hanuman to Lanka, his unwavering devotion to Lord Rama, and his triumph over negativity and obstacles. Unlike other chapters that focus on the battles of Lord Rama, Sunderkand highlights the heroism, intelligence, and supreme devotion of Lord Hanuman.\n\nPerforming a Sunderkand Paath is considered one of the most effective ways to seek the blessings of the Sankat Mochan (the remover of suffering). In the spiritual tradition, reciting or listening to these verses creates a protective shield (Kavach) around the devotee and their family. It is performed to invoke divine grace, remove malefic planetary influences, and ensure success in daunting endeavors. By performing this in Ayodhya—the birthplace of Lord Rama—the spiritual vibrations are exponentially amplified.\n\nRelated Pujas for Spiritual Growth\nEnhance your spiritual journey by combining your Sunderkand Paath with:\n• Rudrabhishek Puja: For divine grace and health.\n• Hanuman Chalisa Path: For daily strength and protection.\n• Ram Navami Special Puja: For family prosperity and joy.\n• Graha Shanti Puja: To neutralize specific planetary obstacles.",
        benefits: "Removal of Obstacles: Known as the \"Sankat Mochan\" path, it helps overcome chronic problems and long-standing hurdles.\n\nProtection from Negative Energies: Creates an aura of positivity and protection against evil eyes and malevolent forces.\n\nMental Peace and Emotional Healing: The rhythmic chanting provides immense relief from anxiety, fear, and mental unrest.\n\nSuccess in Career & Business: Ideal for those seeking to overcome professional stagnation or looking for a breakthrough in their endeavors.\n\nHarmonious Family Life: Promotes domestic peace, dispels family conflicts, and invites prosperity into the household.\n\nAstrological Remedies: Highly recommended for those suffering from the negative effects of Saturn (Shani) or Mars (Mangal) in their birth chart.",
        samagri: "Hanuman Sindoor, Jasmine Oil, Red Flowers, Sweets (Laddoo), Betel Leaves.",
        timing: "Tuesdays or Saturdays (Auspicious Days)",
        duration: "90 to 120 minutes",
        location: "Ayodhya, Uttar Pradesh",
        imageFit: "contain",
        whoShouldDo: [
            "Individuals facing health recovery: Those seeking divine support during prolonged illnesses.",
            "Families in crisis: Those struggling with domestic disharmony or unexplained financial losses.",
            "Professionals: Individuals facing extreme pressure, fear of failure, or seeking new opportunities.",
            "Spiritual Seekers: Devotees wishing to deepen their connection with Lord Hanuman and Lord Rama.",
            "During Challenging Dashas: Essential for those going through difficult astrological periods like Shani Sade Sati or Dhaiya."
        ],
        muhuratDays: "Tuesdays, Saturdays, Full Moon (Purnima), or Hanuman Jayanti",
        muhuratTimes: "Ideal for removing fear, debt, and planetary obstacles.",
        templeDetails: "Ayodhya is the Janmabhoomi (birthplace) of Lord Rama. Performing Sunderkand Paath here carries a unique spiritual weight. The atmosphere of Ayodhya is saturated with the devotion of Lord Hanuman, who is believed to eternally guard the city. When your Sunderkand Paath is recited in this holy land, you are essentially performing it in the presence of the Lord himself, making it one of the most powerful spiritual interventions one can undertake.",
        process: [
            { title: "Sankalp Registration", description: "You provide your details (Name, Gotra, and specific intentions)." },
            { title: "Pandit Assignment", description: "A qualified Vedic Pandit in Ayodhya is assigned to your specific Sunderkand Paath." },
            { title: "Ritual Execution", description: "The Paath is conducted with full Vedic rituals at a sacred site in Ayodhya, with your name and Sankalp mentioned clearly." },
            { title: "Evidence Shared", description: "You receive a video recording of the key moments of your personalized recitation." },
            { title: "Blessings Delivered", description: "Divine Prasad and energized items are dispatched to your registered address." }
        ],
        faqs: [
            { question: "Can I book a personalized Sunderkand Paath online?", answer: "Yes, you can easily book a personalized session through Namandarshan.com, and we will perform it on your behalf in Ayodhya." },
            { question: "Is my name mentioned in the Sankalp?", answer: "Absolutely. The Pandit performs a dedicated Sankalp using your name and family details to ensure the benefits of the puja reach you directly." },
            { question: "Will I receive proof of the puja?", answer: "Yes, we provide video clips and photos of the Sunderkand Paath performed for your specific Sankalp." },
            { question: "Can NRIs book this puja?", answer: "Yes, we cater to devotees worldwide. We ensure that Prasad is carefully packed and shipped to your international location." },
            { question: "How long does the recitation take?", answer: "A complete, dedicated Sunderkand Paath usually takes approximately 90 to 120 minutes of rhythmic, authentic recitation." }
        ],
        importance: [
            { title: "Kotwal of Ayodhya", description: "Hanuman Ji is the eternal protector of Ayodhya. A puja performed here ensures that your prayers reach the feet of Lord Ram with his divine recommendation." },
            { title: "Remedy for Shani Dosh", description: "Scriptures confirm Sunderkand as the supreme remedy for planetary imbalances, Shani Dosh, and mental distress. It infuses life with courage and wisdom." },
            { title: "Authentic Vibrations", description: "Chanting verses in the vibrations of Ayodhya Janmabhoomi multiplies the spiritual impact a thousandfold compared to regular recitations." }
        ],
        seoTitle: "Personalized Sunderkand Paath in Ayodhya | Book Online for Divine Blessings",
        seoDescription: "Experience the divine power of Sunderkand Paath in Ayodhya. Book your personalized Sunderkand recitation with verified Vedic Pandits for spiritual protection, success, and positivity. Prasad delivery included.",
        seoKeywords: ["sunderkand path ayodhya", "online hanuman puja", "ayodhya ram mandir puja", "personal sankalp rituals", "sunderkand-paath-ayodhya-booking"]
    },
    {
        id: "shiv-rudrabhishek-puja",
        title: "Shiv Rudrabhishek",
        image: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/Gemini_Generated_Image_y6utrty6utrty6ut_x8hlhj.png", // Lord Shiva related
        description: "A powerful Vedic ritual bathing the Shivling with sacred offerings while chanting the Rudra Suktam to please Lord Shiva.",
        about: "Rudrabhishek is one of the most significant rituals to please Lord Shiva. It involves bathing the Shivling with sacred materials like milk, honey, ghee, yogurt, and gangajal while chanting Rudra Suktam.",
        benefits: "Health, wealth, prosperity, removal of sins, and fulfillment of desires.",
        samagri: "Milk, Curd, Honey, Ghee, Sugar, Gangajal, Bilva Patra, Datura, Flowers.",
        timing: "Every Monday or Pradosh",
        duration: "45 to 60 minutes",
        location: "Kashi / Kedarnath / Home",
        faqs: [
            { question: "What is the best time for Rudrabhishek?", answer: "Early morning (Brahma Muhurat) or Pradosh Kaal on Mondays are considered most auspicious." },
            { question: "Can we perform this at home?", answer: "Yes, our pandits can visit your home or perform it online with a designated Shivling." },
            { question: "Is fasting required?", answer: "Fasting is recommended but not mandatory. A satvik diet is advised on the day of the puja." }
        ],
        seoTitle: "Shiv Rudrabhishek Puja Booking | Online Shiva Puja",
        seoDescription: "Book Shiv Rudrabhishek Puja online for health, wealth, and prosperity. Perform authentic Vedic ritual for Lord Shiva with experienced Pandits.",
        seoKeywords: ["Shiv Rudrabhishek Puja booking", "Online Rudrabhishek Puja", "Lord Shiva Puja", "Rudra Abhishek benefits", "Shiva temple ritual"]
    },
    {
        id: "maha-laxmi-mata-puja",
        title: "Maha Laxmi Mata Puja",
        image: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/Gemini_Generated_Image_vtrtn1vtrtn1vtrt_scwv8g.png", // Divine/Aarti related
        description: "Worship of Goddess Laxmi, the deity of wealth and prosperity, to invite abundance and financial stability into your life.",
        about: "Maha Laxmi Puja is performed to invoke the blessings of the Goddess of Wealth. It is especially auspicious on Fridays and festive occasions like Diwali.",
        benefits: "Financial stability, wealth accumulation, success in business, and overall abundance.",
        samagri: "Lotus flowers, Coins, Sweets, Red Cloth, Kumkum, Turmeric.",
        timing: "Friday or Purnima",
        duration: "1 to 1.5 hours",
        location: "Home / Temple",
        faqs: [
            { question: "When should I perform Laxmi Puja?", answer: "It is best performed on Fridays, Purnima (Full Moon), or during Deepavali." },
            { question: "Does this help with debt?", answer: "Yes, worshipping Mahalaxmi with true devotion helps clear financial blockages and debts." },
            { question: "What should I wear?", answer: "Red or pink colored clothes are preferred for this puja." }
        ],
        seoTitle: "Maha Laxmi Puja Booking | Wealth & Prosperity Ritual",
        seoDescription: "Book Maha Laxmi Mata Puja online to invite wealth and abundance. Authentic Vedic rituals for financial stability and business success.",
        seoKeywords: ["Maha Laxmi Puja booking", "Online Laxmi Puja", "Wealth puja", "Prosperity rituals", "Diwali Laxmi Puja", "Financial stability puja"]
    },
    {
        id: "panchamrut-abhishek-puja",
        title: "Panchamrut Abhishek",
        image: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/panc-main_t40eog.jpg",
        description: "Ceremonial bathing of the deity with a sacred mixture of five nectars: milk, curd, honey, ghee, and sugar.",
        about: "Panchamrut Abhishek involves bathing the deity with a mixture of five sacred liquids: milk, curd, honey, ghee, and sugar. Each ingredient holds deep spiritual significance.",
        benefits: "Purification of mind and body, health, vitality, and spiritual upliftment.",
        samagri: "Milk, Curd, Honey, Ghee, Sugar.",
        timing: "Morning",
        duration: "30 minutes",
        location: "Any Temple",
        faqs: [
            { question: "What is Panchamrut?", answer: "It is a mixture of five holy foods: Milk, Curd, Ghee, Honey, and Sugar." },
            { question: "Can I drink Panchamrut?", answer: "Yes, it is distributed as Charanamrit (sacred nectar) after the Abhishekam." },
            { question: "Which deities accept Panchamrut?", answer: "It is commonly offered to Lord Shiva, Vishnu, and other major deities." }
        ],
        seoTitle: "Panchamrut Abhishek Booking | Sacred Bathing Ritual",
        seoDescription: "Book Panchamrut Abhishek online. Experience the sacred bathing ritual with five nectars for purification and spiritual upliftment.",
        seoKeywords: ["Panchamrut Abhishek booking", "Panchamrit Puja benefits", "Abhishekam ritual", "Lord Shiva Abhishek", "Hindu bathing ritual"]
    },
    {
        id: "shodashopachar-puja",
        title: "Shodashopachar Puja",
        image: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/sodh-main_zg2dc3.jpg",
        description: "An elaborate 16-step worship ritual offering various sacred items to the deity for complete devotion and blessings.",
        about: "Shodashopachar Puja consists of sixteen necessary stages of worship. Offerings of flowers, incense, light, food, and other symbolic objects are made to the deity with specific mantras.",
        benefits: "Complete connection with the divine, fulfillment of all wishes, and deep spiritual satisfaction.",
        samagri: "16 specific offerings including Vastram, Gandham, Pushpam, Dhoopam, Deepam, Naivedyam etc.",
        timing: "Special Occasions",
        duration: "1.5 to 2 hours",
        location: "Temple",
        faqs: [
            { question: "What does 'Shodashopachar' mean?", answer: "It means '16 ways of service' or offering 16 types of hospitalities to the deity." },
            { question: "Is this suitable for all gods?", answer: "Yes, this 16-step process is the standard Vedic way to worship any major deity." },
            { question: "Can I do this daily?", answer: "While typically done on special days, it can be performed daily if one has the time and resources." }
        ],
        seoTitle: "Shodashopachar Puja Ritual | 16-Step Vedic Worship",
        seoDescription: "Perform Shodashopachar Puja, the complete 16-step Vedic worship ritual. invoke divine blessings with elaborate offerings and mantras.",
        seoKeywords: ["Shodashopachar Puja ritual", "16 step puja", "Vedic worship steps", "Hindu deity worship", "Shodasha Upachara"]
    },
    {
        id: "maha-shakti-tridevi-puja",
        title: "Maha Shakti Tridevi Puja",
        image: "https://namandarshan-bucket.s3.ap-south-1.amazonaws.com/images/Gemini_Generated_Image_2kqx2p2kqx2p2kqx_mz29pb.png",
        description: "Worship of the three supreme Goddesses – Durga (Power), Laxmi (Wealth), and Saraswati (Knowledge) – for holistic wellbeing.",
        about: "This powerful puja invokes the blessings of the Tridevi. It combines the energies of strength, wealth, and wisdom.",
        benefits: "Overall success, power, protection, wisdom, and prosperity.",
        samagri: "Red, White and Yellow flowers, Special Sarees, bangles, sweets.",
        timing: "Navratri or Fridays",
        duration: "2 to 3 hours",
        location: "Shakti Peeth / Home",
        faqs: [
            { question: "Who are the Tridevi?", answer: "Durga (Strength), Laxmi (Wealth), and Saraswati (Wisdom)." },
            { question: "Is this helpful for students?", answer: "Yes, worshipping Goddess Saraswati as part of this puja aids in education and arts." },
            { question: "Why perform Tridevi Puja?", answer: "It balances all aspects of life: Material success, mental peace, and spiritual power." }
        ],
        seoTitle: "Maha Shakti Tridevi Puja | Worship Durga, Laxmi, Saraswati",
        seoDescription: "Book Maha Shakti Tridevi Puja for holistic wellbeing. Invoke blessings of Durga, Laxmi, and Saraswati for power, wealth, and wisdom.",
        seoKeywords: ["Maha Shakti Tridevi Puja", "Tridevi worship", "Durga Laxmi Saraswati puja", "Navratri puja booking", "Goddess worship rituals"]
    }
];
