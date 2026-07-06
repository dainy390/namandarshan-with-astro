export interface ZodiacSign {
    id: string;
    name: string;
    sanskritName: string;
    meaning: string;
    dates: string;
    element: string;
    nature: string;
    rulingPlanet: string;
    rulingHouse: string;
    luckyDays: string[];
    symbol: string;
    strengths: string[];
    weaknesses: string[];
    traits: string;
    compatibility: string[];
    luckyNumber: string;
    luckyColor: string;
    luckyStone: string;
    career: string;
    love: string;
    health: string;
    image: string;
    // Detailed Content Sections
    fullGuide?: string;
    natureDetails?: {
        title: string;
        introduction: string;
        drive: string;
        impulsive: string;
        planetImpact: string;
        houseImpact: string;
        lifestyle: string;
        elementImpact?: string;
        famousPersonalities?: string[];
        image?: string;
    };
    traitsDetails?: {
        introduction?: string;
        positive: { title: string; text: string }[];
        negative: { title: string; text: string }[];
    };
    healthDetails?: {
        overview: string;
        concerns: string[];
        diet: string[];
        avoid: string[];
        fitness: string[];
        appearance: string[];
        beauty: string[];
        image?: string;
    };
    loveDetails?: {
        philosophy: string;
        lessonsGiven: string[];
        lessonsNeeded: string[];
        personality: string;
        trust: string;
        turnOffs?: string[];
        whenInLove?: string[];
        partnerExpectations?: string[];
        challenges?: string[];
        image?: string;
    };
    careerDetails?: {
        mantra: string;
        strengths: string[];
        skillsNeeded: string[];
        path: string;
        style: string;
        bestOptions: string[];
        finance: string[];
    };
    relationshipDetails?: {
        overview: string;
        lover: string;
        friend: string;
        colleague: string;
        boss: string;
        parent: { father: string; mother: string };
        child: string;
        husband: string;
        wife: string;
    };
    manDetails?: string;
    womanDetails?: string;
    moonDetails?: string;
    funFacts?: string[];
    faqs?: { q: string; a: string }[];
    // New fields for specific content
    luckyFactors?: {
        birthstones: string[];
        stones: string[];
        metals: string[];
        day: string;
        numbers: string;
        colors: string;
        exaltation?: string;
        debilitation?: string;
    };
    preferences?: {
        loves: string[];
        dislikes: string[];
    };
    lifeInsights?: {
        need: string;
        goal: string;
        motto: string;
        balance: string;
    };
    howToIdentify?: string;
}

export const zodiacSigns: ZodiacSign[] = [
    {
        id: "aries",
        name: "Aries",
        sanskritName: "Mesha",
        meaning: "The Ram",
        dates: "March 21 - April 19",
        element: "Fire",
        nature: "Cardinal, Positive, Masculine",
        rulingPlanet: "Mars",
        rulingHouse: "First House",
        luckyDays: ["Tuesday"],
        symbol: "The Ram",
        strengths: ["Energetic and enthusiastic", "Courageous and ambitious", "Natural leadership skills", "Action-oriented and pioneering", "Highly motivated and inspiring"],
        weaknesses: ["Impatient and impulsive", "Sometimes self-centered", "Can be reckless or overly aggressive", "Quick-tempered and hasty"],
        traits: "Aries is the very first sign in the zodiac cycle, symbolizing beginnings, energy, and fresh starts. Often referred to as the 'infant' of the zodiac, Aries represents the initial spark of life and action.",
        compatibility: ["Leo", "Sagittarius", "Gemini", "Aquarius"],
        luckyNumber: "6, 7",
        luckyColor: "Shades of Red (Scarlet, Vermilion, Carmine)",
        luckyStone: "Ruby, Diamond",
        career: "Aries thrives in roles that offer independence, authority, and excitement. Best career options include Engineering, Defense, Medicine (Surgery), Sports, and Entrepreneurship.",
        love: "Deeply passionate and devoted partners. Aries express their feelings openly and believe in giving their best to their loved ones, expecting equal appreciation in return.",
        health: "Naturally energetic and strong, but prone to head-related issues (migraines), high blood pressure, and stress-related exhaustion.",
        image: "/assets/Screenshot 2026-04-24 150135.png",
        
        fullGuide: "Aries is the very first sign in the zodiac cycle, symbolizing beginnings, energy, and fresh starts. It marks the start of the astrological year and aligns with the arrival of the spring season, bringing a sense of renewal and enthusiasm. People born under this sign are known for their active, bold, and energetic nature. Aries sets the pace for the entire zodiac wheel, acting as a driving force that initiates movement and progress.",
        
        howToIdentify: "Individuals born between March 21 and April 19 belong to the Aries zodiac sign. These natives are natural leaders who possess confidence, optimism, and a strong sense of determination. They are friendly, approachable, and often carry a positive attitude that attracts others easily. Aries individuals are filled with passion and excitement, not afraid to take risks and always ready to step forward in challenging situations.",

        natureDetails: {
            title: "Aries Nature: Personality, Traits, Strengths & Behavior",
            introduction: "As the symbol of the Ram, Aries holds the position of being the first and most pioneering sign of the zodiac. This sign represents initiative, courage, and the ability to take bold steps in life. Aries individuals are naturally driven by action and possess a fearless attitude that helps them stand out in any situation. Their transparency makes them trustworthy, as they prefer clarity over manipulation.",
            drive: "Aries natives are highly goal-oriented and motivated. They possess a strong inner urge to take action and achieve their ambitions. For them, challenges are opportunities rather than obstacles. The idea of 'impossible' rarely exists in their mindset.",
            impulsive: "One of the key traits of Aries is their quick decision-making ability. They act instantly, often without overthinking, which makes them highly dynamic but sometimes impulsive. Their desire to win and succeed can push them into risky or unpredictable situations.",
            planetImpact: "Aries is governed by Mars, the planet associated with energy, action, and courage. Mars symbolizes strength, aggression, and the drive to fight against challenges. This planetary influence makes Aries individuals bold, fearless, and highly active.",
            houseImpact: "Aries is connected to the First House, which represents self-identity, physical presence, and how others perceive you. It reflects your personality, confidence, and approach to new beginnings.",
            lifestyle: "Aries individuals enjoy being in the spotlight and often take the lead in conversations or group activities. They are willing to invest extra effort to stay ahead and achieve quick success. However, their focus on personal goals may sometimes affect their relationships.",
            elementImpact: "As a Fire sign, Aries is full of energy, enthusiasm, and passion. Fire represents light, warmth, and transformation. They are vibrant, confident, and capable of spreading positivity wherever they go.",
            famousPersonalities: ["Lady Gaga", "Robert Downey Jr.", "Jackie Chan", "Elton John", "Leonardo da Vinci", "Maria Sharapova", "Mukesh Ambani", "Guru Nanak Dev", "Ajay Devgn"],
            image: "/assets/Screenshot 2026-04-24 151738.png"
        },

        traitsDetails: {
            introduction: "Aries, the first sign of the zodiac, is known for its bold, fearless, and action-driven personality. People born under Aries tend to follow their own path and believe strongly in their ideas and values.",
            positive: [
                { title: "Natural Leadership", text: "Aries individuals are born leaders who enjoy taking control and guiding others. They do not wait for opportunities but actively create them." },
                { title: "Strong Self-Confidence", text: "Confidence is one of the strongest qualities of Aries. They believe in their abilities and rarely doubt themselves, even during difficult times." },
                { title: "High Energy & Positivity", text: "Being a fire sign ruled by Mars, Aries is filled with enthusiasm and vitality. They maintain a positive outlook even in challenging situations." },
                { title: "Courage & Fearlessness", text: "Aries natives are known for their bravery. They are not afraid to face risks or step into unknown situations." },
                { title: "Creative & Innovative Thinking", text: "Aries individuals enjoy exploring new ideas and approaches. They dislike routine and repetitive work." }
            ],
            negative: [
                { title: "Self-Centered Tendencies", text: "At times, Aries can become overly focused on their own goals. Their desire to succeed may lead them to overlook the feelings of others." },
                { title: "Attention-Seeking Nature", text: "Aries enjoys being noticed and appreciated. They like to be at the center of attention and can feel frustrated when ignored." },
                { title: "Quick Temper", text: "Aries individuals can be short-tempered and may react strongly when things do not go their way. They often struggle to manage anger." },
                { title: "Impatience", text: "Patience is not a natural strength for Aries. They prefer quick results and may become restless when things take time." },
                { title: "Impulsive Decisions", text: "Aries tends to act quickly without fully analyzing situations, which can result in choices that are not well thought out." }
            ]
        },

        healthDetails: {
            overview: "Aries individuals are naturally energetic, strong, and full of vitality. They possess excellent stamina and a powerful physical constitution. However, their health challenges often arise from their intense lifestyle, including overworking, stress, and frustration.",
            concerns: ["Migraines and headaches", "High blood pressure", "Digestive problems", "Kidney-related concerns", "Eye strain and dental issues"],
            diet: ["Beans, lentils, and brown rice", "Leafy greens like spinach and lettuce", "Broccoli, cucumber, and cauliflower", "Bananas, figs, and apricots", "Walnuts and dairy products"],
            avoid: ["Spicy foods (causes acidity)", "Caffeine and sugary drinks", "Excess salt", "Alcohol"],
            fitness: ["Maintain regular workout routine", "Practice stress management like yoga", "Ensure proper rest to avoid burnout"],
            appearance: ["Prominent facial structure", "Well-shaped eyebrows", "Broad shoulders", "Strong bone structure", "Energetic body movements"],
            beauty: ["Red shades suit them best", "Bold makeup styles", "Defined eyebrows", "Confident posture"],
            image: "/assets/Screenshot 2026-04-24 151804.png"
        },

        loveDetails: {
            philosophy: "I am - Self-driven love and passionate expression",
            lessonsGiven: ["Courage and boldness", "Enthusiasm and positivity", "Active affection", "Genuine love"],
            lessonsNeeded: ["Patience in relationships", "Trusting the right partner", "Emotional control", "Compromise"],
            personality: "Aries approach love with openness and sincerity. They do not believe in emotional games and express feelings directly. They are attentive, affectionate, and deeply loyal, but can be possessive.",
            trust: "Trust is paramount. Once broken, it is extremely difficult for Aries to rebuild. They seek loyalty, honesty, and emotional intensity from their partner.",
            image: "/assets/Screenshot 2026-04-24 151850.png"
        },

        careerDetails: {
            mantra: "I can achieve anything",
            strengths: ["Leadership and initiative", "Creativity and innovation", "Strong ambition", "Risk-taking mindset"],
            skillsNeeded: ["Patience", "Consistent completion of tasks", "Strategic planning", "Delegation"],
            path: "Aries thrives in environments where they can take charge and make decisions. They perform best in roles that offer excitement, competition, and opportunities to lead.",
            style: "Energetic, proactive, and enthusiastic workers who prefer starting new projects and bringing fresh ideas to life.",
            bestOptions: ["Engineering", "Defense/Military", "Medicine (Surgery)", "Sports", "Entrepreneurship", "Marketing/Sales"],
            finance: ["Earn well due to hard work", "Can take financial risks", "Need to avoid impulsive spending", "Should focus on budgeting and long-term saving"]
        },

        relationshipDetails: {
            overview: "Aries individuals are naturally magnetic and full of life. They bring excitement, positivity, and spontaneity into the lives of their loved ones. Trust and honesty are the foundations of their emotional world.",
            lover: "Passionate, expressive, and proactive. They don’t hesitate to take the first step and openly communicate feelings. They expect equal energy from their partner.",
            friend: "Loyal and supportive friends who stand by their friends in every situation. They enjoy friendships that are energetic and fun.",
            colleague: "Enthusiastic and highly motivated. They prefer working independently but are always willing to support others when needed.",
            boss: "Dynamic, decisive, and results-oriented leaders. They expect efficiency and do not hesitate to point out mistakes directly.",
            parent: {
                father: "Energetic, caring, and fun-loving. Encourages children to participate in sports and grow independently.",
                mother: "Nurturing yet strong and protective. Supports children's dreams while maintaining discipline."
            },
            child: "Energetic, curious, and full of enthusiasm. Love attention and often take the lead in school or play.",
            husband: "Loving, loyal, and ambitious. Strives to maintain a positive and supportive bond with his partner.",
            wife: "Confident, intelligent, and independent. Brings strength and passion into the relationship and supports her partner's success."
        },

        manDetails: "The Aries man is naturally driven to lead and stand out. Ruled by Mars, he carries a powerful combination of energy, ambition, and determination. He is a fearless warrior and a free-spirited individual who values independence. In love, he is passionate and romantic, but also needs his personal space.",
        womanDetails: "The Aries woman is a powerful blend of confidence, independence, and passion. She is career-focused, energetic, and never afraid to stand out. She thrives in roles where she can express creativity and leadership. In love, she is loyal and expressive, making her partner feel special and valued.",
        moonDetails: "Individuals with the Moon in Aries possess a strong emotional need for independence. Their reactions are quick and instinctive. They are honest, direct, and emotionally expressive, usually moving on quickly from anger.",
        
        funFacts: [
            "Natural problem solvers who prefer action over overthinking.",
            "Often have a sharp sense of observation and witty sarcasm.",
            "Never hesitates to change something that doesn't align with their values.",
            "Desires trust and loyalty above all in relationships.",
            "Frustrated by delays and repetitive explanations.",
            "Music choices reflect their intense and changing moods."
        ],

        faqs: [
            { q: "What makes Aries unique?", a: "Their leadership, high energy, and fearless nature make them naturally influential." },
            { q: "What are Aries dates?", a: "Aries falls between March 21 and April 19." },
            { q: "How are Aries in love?", a: "They are passionate, loyal, and direct partners who value emotional connection." },
            { q: "What element governs Aries?", a: "The Fire element, symbolizing passion and enthusiasm." },
            { q: "Why is Aries important in astrology?", a: "Being the first sign, it represents initiative and the driving force of the zodiac." }
        ],

        luckyFactors: {
            birthstones: ["Red Coral", "Aquamarine"],
            stones: ["Ruby", "Diamond"],
            metals: ["Iron", "Steel"],
            day: "Tuesday",
            numbers: "6, 7",
            colors: "Shades of Red (Scarlet, Vermilion, Carmine)"
        },

        preferences: {
            loves: ["Competition and challenges", "Adventure and travel", "Engaging debates", "Shopping and exciting activities"],
            dislikes: ["Being ignored", "Losing or failure", "Sharing their favorite things", "Being told 'no'"]
        },

        lifeInsights: {
            need: "Constant action and progress",
            goal: "To be number one",
            motto: "Keep moving forward",
            balance: "Patience and careful thinking"
        }
    },
    {
        id: "taurus",
        name: "Taurus",
        sanskritName: "Vrishabha",
        meaning: "The Bull",
        dates: "April 20 - May 20",
        element: "Earth",
        nature: "Fixed, Negative, Feminine",
        rulingPlanet: "Venus",
        rulingHouse: "Second House (Wealth & Values)",
        luckyDays: ["Friday", "Monday", "Saturday"],
        symbol: "The Bull",
        strengths: ["Highly reliable and trustworthy", "Patient and consistent", "Strong determination and focus", "Calm and emotionally stable", "Practical and grounded"],
        weaknesses: ["Stubborn and resistant to change", "Slow in decision-making", "Possessive at times", "Can hold grudges", "Avoids risks and new experiences"],
        traits: "Taurus is the second sign of the zodiac and is associated with stability, comfort, and material rewards. It governs the second house in astrology, which relates to wealth, values, and possessions. Known as one of the most grounded signs, Taurus acts as the stabilizing force in the zodiac cycle.",
        compatibility: ["Cancer", "Virgo", "Capricorn", "Pisces"],
        luckyNumber: "2, 7",
        luckyColor: "Pink, White, Lotus Green",
        luckyStone: "Diamond, White Sapphire",
        career: "Taurus individuals believe in building a steady and rewarding life through patience and consistent effort. They thrive in finance, healthcare, agriculture, and creative fields like design.",
        love: "Taurus individuals take relationships seriously and value honesty above all else. They are loyal, dependable, and deeply committed partners who value long-term stability.",
        health: "Naturally strong with good stamina, but recovery can be slow due to resistance to change. Sensitive areas include the throat, neck, and respiratory system.",
        image: "/assets/Screenshot 2026-04-24 150357.png",
        
        fullGuide: "Taurus is the second sign of the zodiac and is associated with stability, comfort, and material rewards. It governs the second house in astrology, which relates to wealth, values, and possessions. Known as one of the most grounded signs, Taurus acts as the stabilizing force in the zodiac cycle. This sign represents a deep appreciation for life’s pleasures—whether it’s good food, comfort, luxury, or emotional security. Taurus individuals believe in building a steady and rewarding life through patience and consistent effort.",
        
        howToIdentify: "People born between April 20 and May 20 fall under the Taurus zodiac sign. These individuals are practical, reliable, and determined. They are often known for their calm and composed nature, along with a strong sense of responsibility. Taurus natives generally have two distinct energy modes—either relaxed and easy-going or highly driven and focused when required. They do not rush into things and prefer to take steady, well-thought-out steps.",

        natureDetails: {
            title: "Taurus Nature: Personality, Behavior, Strengths & Lifestyle",
            introduction: "Taurus, the second sign of the zodiac, represents stability, patience, and the rewards of consistent effort. Symbolized by the Bull, Taurus individuals carry immense strength and determination, along with a calm and composed personality. They are gentle, easy-going, and peace-loving by nature, but can become firm and stubborn when pushed.",
            drive: "Taurus individuals are highly committed and consistent in their work. Once they start something, they ensure it is completed, no matter how long it takes. Their determination allows them to overcome obstacles without giving up.",
            impulsive: "Taurus natives generally have two distinct energy modes—either relaxed and easy-going or highly driven and focused when required. They do not rush into things and prefer to take steady, well-thought-out steps.",
            planetImpact: "Taurus is ruled by Venus, the planet of love, beauty, and luxury. This influence makes Taurus individuals naturally charming and inclined toward harmony in relationships. Venus also enhances their desire for comfort, romance, and emotional satisfaction.",
            houseImpact: "Taurus is associated with the Second House, which represents wealth, possessions, values, and self-worth. This influence makes Taurus individuals highly focused on financial security and material stability.",
            lifestyle: "Taurus individuals are known for their simplicity, stability, and practical approach to life. They prefer steady progress rather than sudden changes. Their calm and composed nature makes them dependable and trustworthy.",
            elementImpact: "As a fixed Earth sign, Taurus is practical, grounded, and reliable. They face challenges with patience and realism rather than reacting impulsively. They are supportive and provide emotional stability to others.",
            famousPersonalities: ["Queen Elizabeth II", "George Clooney", "David Beckham", "Dwayne Johnson", "Robert Pattinson", "Madhuri Dixit", "Anushka Sharma", "Varun Dhawan", "Satyajit Ray"],
            image: "/assets/image (2).png"
        },

        traitsDetails: {
            introduction: "Taurus is known as one of the most dependable and steady zodiac signs. Individuals born under this sign are practical, determined, and grounded in their approach to life.",
            positive: [
                { title: "Logical & Practical", text: "Taurus individuals are known for their strong sense of logic and practical thinking. They approach situations with clarity and realism." },
                { title: "Generous & Trustworthy", text: "Taurus natives are loyal and dependable in relationships. Once they trust someone, they remain committed and supportive." },
                { title: "Determined & Hardworking", text: "Determination is one of Taurus’ strongest qualities. They are focused and persistent and do not give up easily." },
                { title: "Understanding & Observant", text: "Taurus individuals have strong observational skills and a deep understanding of people and situations." },
                { title: "Kind & Nurturing", text: "They are naturally kind-hearted and compassionate. Taurus creates a sense of comfort and security for others." },
                { title: "Organized & Detail-Oriented", text: "Taurus individuals are well-organized and pay attention to details. They plan carefully before taking action." },
                { title: "Patient & Consistent", text: "Patience is a defining trait of Taurus. Their steady and consistent approach often leads to long-term success." }
            ],
            negative: [
                { title: "Jealous & Possessive", text: "Taurus can become overly attached to people and material things. Their desire for security sometimes turns into jealousy." },
                { title: "Lazy & Comfort-Loving", text: "While they are hardworking, Taurus also enjoys comfort and relaxation. This can lead to laziness when they feel too comfortable." },
                { title: "Stubborn Nature", text: "Once Taurus makes a decision, it is very difficult to change their mind. Their fixed mindset can make them resistant to new ideas." },
                { title: "Dependent Tendencies", text: "Taurus may sometimes rely too much on their close circle for emotional or practical support." },
                { title: "Imbalance Between Work & Leisure", text: "Taurus often struggles to balance work and relaxation, which can lead to overworking or excessive indulgence." },
                { title: "Materialistic Outlook", text: "Their love for luxury and comfort can make them overly focused on material success and excessive spending." },
                { title: "Resistance to Change", text: "Taurus prefers stability and routine, which makes them uncomfortable with sudden changes and can limit opportunities." }
            ]
        },

        healthDetails: {
            overview: "Taurus individuals are naturally strong and possess good physical stamina. However, recovery can be slow due to their resistance to change and sometimes ignoring medical advice. A major reason behind health concerns is a sedentary lifestyle combined with indulgence in food and comfort.",
            concerns: ["Throat infections, tonsils, and laryngitis", "Respiratory problems like asthma", "Weight gain and slow metabolism", "Poor blood circulation", "Joint pain, arthritis, or stiffness"],
            diet: ["Fresh fruits and green vegetables", "Salads and light meals", "Foods rich in iodine for thyroid balance", "Spinach, beetroot, beans, and nuts", "Hydrating foods and plenty of water"],
            avoid: ["Excessive fatty, sugary, and starchy foods", "Overeating or frequent indulgence in heavy meals", "Sedentary lifestyle with little physical movement", "Ignoring hydration"],
            fitness: ["Walking, yoga, or light workouts", "Spend time in nature to maintain mental peace", "Avoid long periods of inactivity", "Maintain a consistent daily routine"],
            appearance: ["Broad shoulders and sturdy build", "Strong neck and upper body", "Well-proportioned physique", "Calm and composed body language", "Graceful and steady movements"],
            beauty: ["Soft colors like blue, pink, and pastels", "High-quality and comfortable fabrics", "Floral patterns and subtle accessories", "Minimal yet classy jewelry", "Timeless fashion style"],
            image: "/assets/image (1).png"
        },

        loveDetails: {
            philosophy: "I possess - Self-driven love and passionate expression",
            lessonsGiven: ["Stability", "Emotional support", "Loyalty", "Practical care", "Long-term security"],
            lessonsNeeded: ["Adaptability", "Forgiveness", "Patience in listening", "Openness to change"],
            personality: "Taurus individuals take relationships seriously and value honesty above all else. They are loyal, dependable, and deeply committed partners. They prefer to build relationships slowly and carefully.",
            trust: "Trust is extremely important to them. Even small lies can affect their feelings deeply, and they may find it hard to forgive once trust is broken.",
            image: "/assets/image (3).png"
        },

        careerDetails: {
            mantra: "Progress steadily, one step at a time",
            strengths: ["Patience to handle long and complex projects", "Strong sense of punctuality and discipline", "Practical decision-making skills", "Self-reliance and accountability"],
            skillsNeeded: ["Value time and efficiency", "Openness to calculated risks", "Adaptability to changes", "Avoiding rigidity in methods"],
            path: "Taurus thrives in careers that offer stability, financial security, and a touch of creativity. They focus on building a solid foundation and gradually climbing toward success.",
            style: "Consistent, hardworking, and focused. Excellent team players who deliver consistent results and meet deadlines efficiently.",
            bestOptions: ["Finance and banking", "Healthcare and education", "Agriculture and farming", "Fashion designing", "Interior decoration", "Real estate"],
            finance: ["Strong saving mindset", "Preference for long-term investments", "Careful spending with occasional indulgence", "Focus on building financial stability"]
        },

        relationshipDetails: {
            overview: "Taurus is a unique blend of strength and emotional sensitivity. They take relationships very seriously and prefer building connections slowly and steadily.",
            lover: "Patient, loyal, and deeply committed. They often show love through actions—such as thoughtful gifts and quality time—rather than just words.",
            friend: "Selective but loyal for life. They are supportive and always ready to help their friends in difficult situations.",
            colleague: "Reliable, hardworking, and focused on quality results. They believe in consistency and prefer a stable work environment.",
            boss: "Calm, practical, and organized. They prefer a structured approach and ensure that tasks are completed efficiently.",
            parent: {
                father: "Loving, protective, and responsible. Works hard to provide comfort and security and instills strong values and discipline.",
                mother: "Caring, patient, and highly organized. Maintains a structured routine and focuses on stability and moral values."
            },
            child: "Affectionate, calm, and attached to family. Determined once they commit and naturally inclined toward creative and sensory experiences.",
            husband: "Loyal, dependable, and deeply committed. Works hard to provide financial and emotional security. Can be possessive.",
            wife: "Loving, supportive, and devoted. Values a peaceful and secure home environment and puts effort into maintaining harmony."
        },

        manDetails: "A Taurus man is known for his stability, patience, and practical mindset. He values security in all aspects of life. He is organized, well-planned, and handles challenges with a calm mindset. In love, he is sensual, romantic, and expresses affection through actions and care.",
        womanDetails: "A Taurus woman is a perfect blend of strength, grace, and practicality. She values stability, loyalty, and emotional security. She is emotionally strong, independent, and has an artistic nature influenced by Venus. She expresses love through actions and meaningful connection.",
        moonDetails: "Individuals with the Moon in Taurus possess emotional stability, patience, and a deep desire for security. They are calm, grounded, and prefer a peaceful life. They gravitate toward beauty and luxury and find comfort in routine and material stability.",
        
        funFacts: [
            "Intelligent, observant, and naturally good at reading people's intentions.",
            "Their life motto: Prove through actions rather than making promises.",
            "Diverse music taste depending on mood, often used to express feelings.",
            "Rarely fooled by superficial behavior due to sharp observation skills.",
            "Respect genuine and dependable people and straightforward communication above all.",
            "Can be highly irritated when they have to repeat themselves or are rushed."
        ],

        faqs: [
            { q: "What are the main traits of Taurus?", a: "Taurus individuals are patient, reliable, practical, and determined. They value stability and comfort in life." },
            { q: "What are Taurus dates?", a: "Taurus falls between April 20 and May 20." },
            { q: "How are Taurus in relationships?", a: "They are loyal, trustworthy, and committed but may take time to open up. Honesty is very important to them." },
            { q: "What is the Vedic name of Taurus?", a: "The Vedic name for Taurus is Vrishabha." },
            { q: "What element is Taurus?", a: "Taurus is an Earth sign, symbolizing stability, practicality, and grounded energy." }
        ],

        luckyFactors: {
            birthstones: ["Emerald", "Diamond"],
            stones: ["Diamond", "White Sapphire"],
            metals: ["Copper", "Bronze"],
            day: "Friday",
            numbers: "2, 7",
            colors: "Pink, White, Lotus Green"
        },

        preferences: {
            loves: ["Stability and security", "Loyalty and trust", "Emotional warmth", "Comfort and luxury"],
            dislikes: ["Being rushed or pressured", "Sudden or unexpected changes", "Lack of logic or common sense", "Being hungry or uncomfortable"]
        },

        lifeInsights: {
            need: "Security and stability",
            goal: "Building a steady and rewarding life",
            motto: "Consistency leads to lasting results",
            balance: "Balancing comfort with adaptability"
        }
    },
    {
        id: "gemini",
        name: "Gemini",
        sanskritName: "Mithun",
        meaning: "The Twins",
        dates: "May 20 - June 21",
        element: "Air",
        nature: "Air – Mutable – Positive",
        rulingPlanet: "Mercury",
        rulingHouse: "Third House (Communication & Intellect)",
        luckyDays: ["Wednesday", "Friday", "Monday"],
        symbol: "The Twins",
        strengths: ["Quick-witted and intelligent", "Adaptable and versatile", "Excellent communicators", "Energetic and enthusiastic", "Creative and imaginative"],
        weaknesses: ["Indecisiveness", "Restlessness and lack of focus", "Inconsistency", "Overthinking", "Easily distracted"],
        traits: "Gemini is the third sign of the zodiac and is associated with communication, intellect, and curiosity. Represented by the symbol of the Twins, Gemini reflects duality in personality—showing different sides depending on the situation.",
        compatibility: ["Aries", "Leo", "Libra", "Aquarius", "Sagittarius"],
        luckyNumber: "3, 6",
        luckyColor: "Yellow, Light Green",
        luckyStone: "Emerald",
        career: "Geminis thrive in dynamic environments where ideas and innovation are encouraged. They excel in fields like marketing, media, journalism, and networking.",
        love: "Geminis need intellectual stimulation in relationships. They are playful, communicative, and value variety, but take time to fully commit.",
        health: "Associated with the lungs and nervous system. Mental activity plays a major role, and stress or overthinking can lead to fatigue or anxiety.",
        image: "/assets/image (4).png",
        
        fullGuide: "Gemini is the third sign of the zodiac and is associated with the third house, which governs communication, intellect, and curiosity. This sign is known for its quick thinking, adaptability, and strong ability to express ideas. Represented by the symbol of the Twins, Gemini reflects duality in personality—showing different sides depending on the situation. This dual nature makes them fascinating, unpredictable, and highly engaging individuals. Being an air sign, Gemini thrives on ideas, conversations, and mental stimulation. They are naturally energetic, lively, and always eager to explore something new.",
        
        howToIdentify: "Individuals born between May 20 and June 21 fall under the Gemini zodiac sign. They are easily recognized by their sharp intellect, expressive nature, and dynamic personality. Gemini natives are quick thinkers, fast learners, and highly curious. They tend to focus more on thinking and analyzing rather than acting impulsively. Their mind is constantly active, making them excellent at multitasking and adapting to different situations.",

        natureDetails: {
            title: "Gemini Nature: Personality, Behavior, Strengths & Weaknesses",
            introduction: "Gemini is a sign driven by curiosity, communication, and the constant exchange of ideas. Individuals born under this sign are naturally inclined toward conversations, learning, and exploring different perspectives. Their minds are always active, processing information and reacting quickly to their surroundings.",
            drive: "Geminis have an endless thirst for knowledge. They are always eager to learn new things, explore ideas, and gather information from various sources. Their curiosity often leads them to experiment with new ideas, though it may sometimes result in scattered focus.",
            impulsive: "One of the most defining aspects of Gemini is duality. They often experience contrasting thoughts and emotions at the same time, which makes them versatile yet unpredictable. They can switch between tasks quickly but may lose interest in repetitive activities.",
            planetImpact: "Mercury, the ruling planet of Gemini, governs communication, intellect, and thought processes. It enhances their ability to process information quickly and express ideas effectively. This strong connection between mind and speech makes Gemini highly articulate and mentally agile.",
            houseImpact: "Gemini is associated with the Third House, which represents communication, intellect, curiosity, and networking. It highlights their need for constant mental stimulation and sharing of knowledge.",
            lifestyle: "Gemini individuals are lively, cheerful, and full of energy. They enjoy being around people and thrive in social environments. They are charming, engaging, and excellent at building connections. They avoid monotony at all costs.",
            elementImpact: "As a mutable air sign, Gemini is associated with intellect, ideas, and communication. This element gives them strong mental energy and creative thinking abilities, but can also make them restless and easily bored.",
            famousPersonalities: ["Johnny Depp", "Angelina Jolie", "Kanye West", "Natalie Portman", "Marilyn Monroe", "Donald Trump", "Morgan Freeman"],
            image: "/assets/image (5).png"
        },

        traitsDetails: {
            introduction: "Gemini is one of the most lively and expressive zodiac signs. Ruled by Mercury, Gemini possesses sharp intelligence, quick wit, and exceptional communication skills.",
            positive: [
                { title: "Adaptable & Flexible", text: "Gemini individuals are highly adaptable and open to change. They easily adjust to new situations, people, and environments." },
                { title: "Outgoing & Social", text: "Geminis are natural socializers who love interacting with others. Their ability to connect with different personalities makes them popular." },
                { title: "Witty & Humorous", text: "One of Gemini’s most attractive qualities is their sense of humor. They are quick-witted and use clever wordplay to entertain others." },
                { title: "Enthusiastic & Energetic", text: "Gemini individuals are full of energy and approach life with excitement. Their lively attitude is contagious and inspires others." },
                { title: "Intelligent & Curious", text: "Curiosity is at the core of Gemini’s personality. They are constantly seeking knowledge and enjoy learning new things." },
                { title: "Versatile & Multi-Talented", text: "Geminis can handle multiple tasks at once. Their diverse interests and quick learning abilities make them skilled in various fields." }
            ],
            negative: [
                { title: "Superficial Tendencies", text: "Due to their wide range of interests, Gemini may struggle to focus deeply on one thing, leading to broad but shallow knowledge." },
                { title: "Inconsistency", text: "Gemini’s ever-changing nature can make them indecisive. Their interests and moods may shift frequently." },
                { title: "Manipulative Behavior", text: "Their strong communication skills can sometimes be used to influence or persuade others in subtle, non-direct ways." },
                { title: "Lack of Seriousness", text: "Geminis tend to take life lightly and may avoid responsibilities, appearing immature or unreliable in serious situations." },
                { title: "Anxiety & Restlessness", text: "Their constantly active mind can lead to overthinking and anxiety when overwhelmed with too many tasks or decisions." },
                { title: "Easily Distracted", text: "Gemini gets bored quickly and may lose interest in tasks midway, making it difficult to complete long-term projects." }
            ]
        },

        healthDetails: {
            overview: "Gemini is associated with the lungs, nervous system, and communication organs. Mental activity plays a major role in overall health. Their fast-paced lifestyle and constant thinking can lead to stress, anxiety, and fatigue.",
            concerns: ["Anxiety, mood swings, and nervous tension", "Insomnia and mental exhaustion", "Respiratory problems like asthma", "Joint pain, especially in shoulders and arms", "Digestive imbalance due to irregular habits"],
            diet: ["Fresh fruits and vegetables", "Potassium-rich foods (bananas, tomatoes, oranges)", "Iron-rich foods (spinach, beetroot)", "Calcium sources (milk, dairy)", "Nuts like almonds and walnuts for brain health"],
            avoid: ["Excess caffeine and stimulants", "Aerated drinks and processed foods", "High sugar intake", "Junk food and unhealthy snacks"],
            fitness: ["Breathing exercises and meditation", "Light physical activities like walking or yoga", "Maintain a proper sleep schedule", "Take regular breaks to relax the mind"],
            appearance: ["Slim and agile body structure", "Bright, expressive eyes", "Quick and energetic movements", "Long limbs and flexible posture", "A naturally youthful look regardless of age"],
            beauty: ["Bright colors like yellow and orange", "Experimenting with fashion trends", "Versatile wardrobe and breezy hairstyles", "Style that reflects their dynamic nature"],
            image: "/assets/image (6).png"
        },

        loveDetails: {
            philosophy: "Declaration: I’m simple, but my mind isn’t. Key Phrase: I think",
            lessonsGiven: ["Intellectual connection and awareness", "Openness to new experiences", "Flexibility and curiosity"],
            lessonsNeeded: ["Emotional depth and warmth", "Patience in relationships", "Valuing emotional connection beyond logic"],
            personality: "For Gemini, communication is the heartbeat of love. A relationship without meaningful conversations feels incomplete to them. They are naturally romantic and can create dreamy moments filled with charm, excitement, and emotional connection. Gemini’s dual nature makes their love life both exciting and unpredictable. They have multiple emotional layers, think fast and act quickly, and are charming but hard to fully understand. Because of their ever-changing personality, Gemini may take time to settle down. They often explore different relationships before committing, as they seek someone who truly understands their complexity.",
            trust: "Gemini values space and independence deeply. They dislike possessiveness, jealousy, or overly clingy behavior. A healthy balance between closeness and freedom is what keeps them happy in love. They want a partner who matches their energy, keeps things interesting, and supports them during emotional lows.",
            turnOffs: ["Constant nagging", "Emotional dependency", "Controlling or possessive behavior"],
            whenInLove: [
                "Communicate constantly (texts, calls, long conversations)",
                "Include their partner in every plan",
                "Introduce their partner to friends and family",
                "Become emotionally invested and protective",
                "Share ideas and deep late-night talks"
            ],
            partnerExpectations: [
                "Matches their energy and intellect",
                "Keeps things interesting and avoids routine",
                "Supports them during emotional lows",
                "Respects their freedom and independence"
            ],
            challenges: [
                "Difficulty committing early",
                "Emotional inconsistency",
                "Overthinking feelings",
                "Getting bored in routine relationships"
            ],
            image: "/assets/image (7).png"
        },

        careerDetails: {
            mantra: "Learn, communicate, and innovate",
            strengths: ["Multi-tasking and energetic", "Excellent communication and negotiation", "Quick thinkers and problem solvers", "Adaptability in dynamic environments"],
            skillsNeeded: ["Persistence and task completion", "Strategic depth", "Time management and efficiency", "Focus on long-term results"],
            path: "Geminis thrive in environments where ideas and innovation are encouraged. They excel in fields like marketing, media, public relations, and technology.",
            style: "Energetic, proactive, and communicative. They prefer starting new projects and bringing fresh ideas to life rather than repetitive work.",
            bestOptions: ["Journalism and Writing", "Marketing and Sales", "Public Relations", "Teaching and Education", "Technology and Media", "Travel and Tourism"],
            finance: ["Resourceful earners with multiple interests", "Can take calculated financial risks", "Should avoid impulsive spending and focus on long-term stability"]
        },

        relationshipDetails: {
            overview: "Gemini is one of the most exciting yet complex signs. They bring energy, excitement, and intellectual depth into relationships. Freedom is extremely important for Gemini; they thrive in relationships where they are allowed to grow individually while still being emotionally connected.",
            lover: "Playful, exciting, passionate yet thoughtful, curious and experimental. When they find the 'right person', they become loyal, caring, and emotionally expressive. Love for them means connection through conversation.",
            friend: "Entertaining, witty, and always full of stories. Loyal to close friends and supportive with intelligence and practical advice. They are supportive friends who guide others with intelligence.",
            colleague: "Enthusiastic and highly motivated. Great at communication and thrive in team settings where ideas are shared.",
            boss: "Innovative and inspiring. Encourages creativity but can be challenging to keep up with due to their fast-paced thinking.",
            parent: {
                father: "Playful and friendly. Encourages freedom and creativity while building strong emotional bonds.",
                mother: "Energetic and creative. Acts as both a parent and a friend, balancing fun with responsibility."
            },
            child: "Talkative, expressive, and quick learners. They love exploring multiple interests and prefer learning through interaction.",
            husband: "Charming, witty, and mentally engaging. Needs intellectual connection and values freedom and social life in marriage.",
            wife: "Smart, expressive, and lively. Balances career and personal life effectively and keeps the relationship fresh and exciting."
        },

        manDetails: "A Gemini man is a natural communicator and socially active. He thrives on change, ideas, and interaction. He is outgoing, quick-witted, and always in search of something new. In love, he is fun and surprising but values his independence deeply. He needs space and a partner who brings mental stimulation.",
        womanDetails: "A Gemini woman is a vibrant mix of intelligence, charm, and unpredictability. She is dynamic, adaptable, and highly versatile. She thrives on communication and constant change. In love, she is charming, playful, and seeks a partner who matches her energy and intellect.",
        moonDetails: "Individuals with the Moon in Gemini possess a strong emotional need for variety and communication. They process feelings through logic and discussion. They are mentally agile and curious but may struggle with emotional consistency.",
        
        funFacts: [
            "I am a simple person with a complicated mind.",
            "Can understand situations faster than others and react just as quickly.",
            "When low, they become unusually silent and disconnected from reality.",
            "Highly sarcastic yet honest and adventurous at heart.",
            "Often feel like 'mind readers' because they understand people deeply.",
            "Their mind rarely rests during uncertainty, replaying situations repeatedly."
        ],

        faqs: [
            { q: "What are the key traits of Gemini?", a: "Gemini individuals are intelligent, curious, adaptable, and highly communicative." },
            { q: "What is the Sanskrit/Vedic name of Gemini?", a: "The Vedic name for Gemini is Mithun." },
            { q: "What makes Gemini unique?", a: "Their dual personality, quick thinking, and ability to adapt to any situation make them stand out." },
            { q: "What element is Gemini associated with?", a: "Gemini is an Air sign, symbolizing intellect, communication, and creativity." },
            { q: "What are Gemini dates?", a: "Gemini falls between May 20 and June 21." },
            { q: "What is Gemini’s love personality?", a: "Gemini is a romantic, communicative, and intellectually driven partner who values freedom and dislikes possessiveness." },
            { q: "How does Gemini approach relationships?", a: "They prioritize communication, excitement, and mental connection. They take time to commit but are engaging partners." },
            { q: "What are Gemini’s biggest challenges in love?", a: "Inconsistency, overthinking, and fear of losing independence can create challenges." },
            { q: "What does Gemini expect from a partner?", a: "A partner who is exciting, understanding, communicative, and respectful of their freedom." },
            { q: "How does Gemini express love?", a: "Through conversations, shared experiences, humor, and including their partner in every aspect of life." }
        ],

        luckyFactors: {
            birthstones: ["Emerald", "Agate"],
            stones: ["Emerald"],
            metals: ["Mercury", "Silver"],
            day: "Wednesday",
            numbers: "3, 6",
            colors: "Yellow, Light Green"
        },

        preferences: {
            loves: ["New ideas and technology", "Meaningful conversations", "Freedom and independence", "Learning and variety"],
            dislikes: ["Asking for help", "Repetitive routines", "Being controlled", "Lack of logic or common sense"]
        },

        lifeInsights: {
            need: "Mental stimulation and change",
            goal: "Gathering and sharing knowledge",
            motto: "Prove through actions rather than making promises",
            balance: "Consistency and focus"
        }
    },
    {
        id: "cancer",
        name: "Cancer",
        sanskritName: "Karka",
        meaning: "The Crab",
        dates: "June 21 - July 22",
        element: "Water",
        nature: "Water – Cardinal – Negative",
        rulingPlanet: "Moon",
        rulingHouse: "Fourth House (Home & Security)",
        luckyDays: ["Monday", "Thursday", "Sunday"],
        symbol: "The Crab",
        strengths: [
            "Deeply caring and nurturing",
            "Loyal and protective of loved ones",
            "Strong intuition and emotional intelligence",
            "Supportive and trustworthy",
            "Ability to comfort others in difficult times"
        ],
        weaknesses: [
            "Can become overly emotional or sensitive",
            "Difficulty letting go of the past",
            "Fear of being abandoned",
            "May become clingy in relationships",
            "Tendency to hide true feelings"
        ],
        traits: "Cancer is the fourth sign of the zodiac and is known for its emotional depth and sensitivity. It represents care, protection, and strong emotional bonding. Often associated with a motherly nature, this sign naturally leans towards nurturing and supporting others.",
        compatibility: ["Taurus", "Virgo", "Scorpio", "Capricorn", "Pisces"],
        luckyNumber: "2, 7, 9",
        luckyColor: "White, Silver",
        luckyStone: "Pearl",
        career: "You excel in careers where care, creativity, and emotional intelligence are valued. Best career fields include Human Resources, Healthcare, Education, and Creative Arts.",
        love: "When it comes to love, you are deeply emotional and wholehearted. You don’t believe in half-hearted connections—when you love, you give everything.",
        health: "Cancer is closely connected with areas like the chest, stomach, digestion, and reproductive system. Your health is deeply influenced by your emotional state.",
        image: "/assets/image (8).png",
        
        fullGuide: "Cancer is the fourth sign of the zodiac and is known for its emotional depth and sensitivity. It represents care, protection, and strong emotional bonding. Often associated with a motherly nature, this sign naturally leans towards nurturing and supporting others. People born under Cancer tend to feel things deeply. Their world is guided more by emotions than logic, which makes them compassionate, intuitive, and highly connected to their loved ones.",
        
        howToIdentify: "Cancer individuals are warm-hearted, protective, and deeply attached to their close circle. They are the caregivers of the zodiac—always ready to support, listen, and stand by the people they love. Outwardly, they may appear strong or reserved, but internally they are extremely sensitive. Their moods can shift quickly, much like the changing phases of the Moon, which governs this sign. Despite their emotional nature, Cancerians also have a surprising sense of humor. When comfortable, they can be playful, witty, and full of laughter. They don’t actively chase attention, but when it comes their way, they quietly enjoy it.",

        natureDetails: {
            title: "Cancer Nature: Personality, Behavior, Strengths & Lifestyle",
            introduction: "Cancer individuals are deeply emotional, caring, and naturally nurturing. They feel everything intensely and are known for their strong empathy, which helps them build meaningful and lasting relationships. You are sensitive by nature and can get hurt easily. Trust is something you don’t give easily—you take your time to understand people before letting them into your inner circle.",
            drive: "Once you feel secure with someone, you open up completely and are willing to go to great lengths for them. Your emotional intelligence allows you to understand others without them saying much. You can sense feelings, intentions, and moods effortlessly. You also have a vivid imagination and a strong connection to memories.",
            impulsive: "Your mood can influence your actions significantly. At times, you may feel nostalgic, sentimental, or even slightly withdrawn. You enjoy exploring new places, but home will always be your favorite place to return to. You take time to process your thoughts and emotions, which helps you understand things deeply.",
            planetImpact: "The Moon governs Cancer, which is why emotions play such a central role in your personality. Your feelings can shift frequently, just like the phases of the Moon. This influence gives you deep emotional awareness, strong intuition, and a natural connection with people’s feelings.",
            houseImpact: "The fourth house represents comfort, family, and emotional security. For Cancer, this area of life is extremely important. Your home is not just a place—it’s your safe space where you feel protected and relaxed.",
            lifestyle: "Socially, you are warm, polite, and easy to connect with. You prefer meaningful connections over superficial ones. Although you enjoy meeting people, you still value your personal space and comfort zone. You often look for emotional comfort when stressed, which can sometimes make you avoid change.",
            elementImpact: "As a water sign, Cancer is deeply connected to emotions and intuition. You feel emotions strongly, easily connect with others’ feelings, and seek harmony while avoiding conflict.",
            famousPersonalities: ["Princess Diana", "Selena Gomez", "Ariana Grande", "Tom Hanks", "Meryl Streep", "Elon Musk", "Priyanka Chopra", "Vin Diesel", "Malala Yousafzai", "Nikola Tesla", "Katrina Kaif", "Ranveer Singh"],
            image: "/assets/image (9).png"
        },

        traitsDetails: {
            introduction: "Cancer, the fourth zodiac sign, is deeply connected to home, emotions, and family life. If there’s one thing that defines Cancer individuals, it’s their strong attachment to loved ones and the comfort of their personal space. Cancerians are known for their loyalty, emotional intelligence, and nurturing nature.",
            positive: [
                { title: "Creative", text: "You have a vivid imagination and a natural flair for creativity. Whether it’s writing, art, or storytelling, you express your emotions beautifully through creative outlets." },
                { title: "Emotionally Aware", text: "You feel emotions deeply and understand the emotional needs of others effortlessly. Family and close relationships are extremely important to you." },
                { title: "Loving & Warm", text: "Your caring nature makes you one of the most affectionate signs. You are thoughtful, protective, and genuinely invested in the happiness of people around you." },
                { title: "Highly Intuitive", text: "Your instincts are incredibly strong. You can often sense what others are feeling without them saying a word. This makes it difficult for anyone to mislead you." },
                { title: "Sensitive & Compassionate", text: "You are deeply empathetic and can easily connect with people’s pain and joy. You often absorb the emotions of others, which makes you supportive." }
            ],
            negative: [
                { title: "Moody", text: "Your emotions can shift quickly, sometimes without a clear reason. You may go from feeling joyful to withdrawn within a short time." },
                { title: "Overthinking & Negative Thinking", text: "You tend to dwell on past experiences and emotional wounds. This can sometimes make you focus more on what went wrong." },
                { title: "Clingy at Times", text: "Because you value emotional security, you may become overly attached to people or situations. Letting go is not easy for you." },
                { title: "Unpredictable", text: "Your reactions are often guided by your emotions, which can change frequently. This makes your behavior seem unpredictable to others." },
                { title: "Guarded & Suspicious", text: "You don’t trust easily. Until you feel completely safe, you tend to protect yourself by keeping emotional distance." },
                { title: "Resentful", text: "When hurt, you may hold onto feelings longer than necessary. Even if you don’t express it openly, the emotional impact stays with you." }
            ]
        },

        healthDetails: {
            overview: "Cancer is closely connected with areas like the chest, stomach, digestion, and reproductive system. Your health is deeply influenced by your emotional state—when your mind feels disturbed, your body often reflects it.",
            concerns: [
                "Digestive discomfort, acidity, or bloating",
                "Gastric troubles and abdominal sensitivity",
                "Water retention and weight fluctuations",
                "Respiratory issues like cough or chest congestion",
                "Fatigue linked to emotional stress",
                "Skin concerns due to nutritional imbalance",
                "Occasional joint or posture-related discomfort"
            ],
            diet: [
                "Dairy products like milk and yogurt",
                "Fresh fruits and green vegetables",
                "Whole grains and light, nourishing meals",
                "Beetroot, leafy greens, and seasonal produce",
                "Lean proteins like fish or plant-based options",
                "Hydrating foods and natural juices"
            ],
            avoid: [
                "Excess sugar and refined starch",
                "Very salty foods (can increase bloating)",
                "Spicy or heavily processed meals",
                "Overeating comfort foods"
            ],
            fitness: [
                "Gentle exercises like yoga, walking, or light workouts",
                "Spending time in nature to maintain mental peace",
                "Maintain a consistent daily routine",
                "Mindful eating to improve digestion and mood"
            ],
            appearance: [
                "Medium height with a slightly rounded or soft body structure",
                "Naturally expressive face with calm features",
                "Smooth or delicate skin tone",
                "Round or prominent facial structure",
                "Soft eyes that reflect emotions easily",
                "Broad upper body or noticeable shoulders"
            ],
            beauty: [
                "Soft shades like silver, blue, pink, and pastel tones suit you best",
                "Light makeup with glossy or dewy finishes",
                "Neutral eyeshadows and soft liners highlight your eyes",
                "Simple accessories like pearls elevate your elegance",
                "Comforting fabrics like silk or soft textures"
            ],
            image: "/assets/image (10).png"
        },

        loveDetails: {
            philosophy: "Declaration: Family is my foundation of love. Key Phrase: I feel",
            lessonsGiven: ["Care", "Emotional depth", "Loyalty", "Nurturing"],
            lessonsNeeded: ["Letting go", "Expressing feelings openly", "Trusting without fear"],
            personality: "When it comes to love, you are deeply emotional and wholehearted. You don’t believe in half-hearted connections—when you love, you give everything. You seek a relationship that feels safe, warm, and emotionally secure. You are intuitive and emotionally aware, which makes you a deeply connected partner. You are also someone who remembers everything—special dates, meaningful moments, and emotional milestones.",
            trust: "Trust is everything to you. You take your time to build trust, but once it’s built, you give your whole heart. You don’t play games in love—you seek something real, meaningful, and lasting.",
            whenInLove: [
                "Introduce your partner to your close circle",
                "Invest your time, energy, and emotions fully",
                "Become protective, caring, and deeply involved",
                "Create a safe emotional space for your partner",
                "Show love through care, attention, and thoughtful gestures"
            ],
            challenges: [
                "Can become overly sensitive or emotional",
                "Feel insecure without reassurance",
                "Hold onto past emotional experiences",
                "Retreat into yourself when things don’t feel right"
            ],
            image: "/assets/image (11).png"
        },

        careerDetails: {
            mantra: "Success comes from care and consistency",
            strengths: [
                "Empathy, intuition, and emotional intelligence",
                "Creativity and unique problem-solving",
                "Persistence and strong inner drive",
                "Observant and responsible leadership"
            ],
            skillsNeeded: ["Emotional balance", "Patience", "Confidence", "Handling criticism wisely"],
            path: "You excel in careers where care, creativity, and emotional intelligence are valued. You perform best in roles where your work impacts others meaningfully.",
            style: "Focused, committed, and hardworking. You prefer environments that feel supportive and thrive with freedom to work in your own style.",
            bestOptions: [
                "Human Resources & Counseling",
                "Healthcare, Nursing & Therapy",
                "Teaching & Childcare",
                "Writing, Editing & Content Creation",
                "Interior Designing & Art",
                "Social Work & NGOs"
            ],
            finance: [
                "Naturally cautious and practical with finances",
                "Preference for saving and long-term planning",
                "Financial security provides emotional peace",
                "Builds wealth slowly and steadily"
            ]
        },

        relationshipDetails: {
            overview: "For Cancer, relationships are at the center of life. You have a warm and comforting presence that makes others feel safe opening up. You invest your emotions fully into making connections work.",
            lover: "Deeply emotional, protective, and committed. Values connection on a soul level and seeks long-term security.",
            friend: "Loyal, caring, and deeply invested. Always shows up and enjoys making lasting memories.",
            colleague: "Dependable, thoughtful, and supportive. Creates a comfortable environment and values stability.",
            boss: "Observant, responsible, and emotionally intelligent. Cares about team growth and well-being.",
            parent: {
                father: "Caring, involved, and values emotional connection. Protects and guides with patience.",
                mother: "Nurturing, protective, and deeply involved. Prioritizes family happiness and stability."
            },
            child: "Sensitive, intuitive, and attached to home. Prefers calm surroundings and forms deep early bonds.",
            husband: "Devoted, loyal, and emotionally present. Takes responsibility for family well-being.",
            wife: "Loving, supportive, and emotionally connected. Prioritizes family and supports partner wholeheartedly."
        },

        manDetails: "A Cancer man is traditional, caring, and emotionally deep. He leads with his heart and values emotional security. He is naturally protective and deeply attached to loved ones. While he may appear reserved, he is a loyal and reliable partner who remembers every emotional moment.",
        womanDetails: "A Cancer woman is emotionally strong yet gentle. Ruled by the Moon, her moods can shift, but she is deeply loyal and intuitive. She acts as a natural peacemaker and values home, family, and genuine connections above all else.",
        moonDetails: "With the Moon in Cancer, emotions are your language. You experience life through your heart, making you deeply compassionate, intuitive, and protective. You seek emotional security and thrive in familiar surroundings where you feel safe.",
        
        funFacts: [
            "Cancer’s biggest challenge: Letting go of trust and memories when hurt.",
            "When angry, Cancer withdraws into silence and retreats to their personal space.",
            "Deepest fear: Losing the people or things they are emotionally attached to.",
            "Loves: Cozy home environments, family time, and meaningful conversations.",
            "Dislikes: Insensitive people, broken promises, and constant criticism.",
            "Will never: Easily walk away from the people they love.",
            "Perfect gift: Sentimental and memory-based presents like personalized items or home décor."
        ],

        faqs: [
            { q: "What are the main traits of Cancer?", a: "Cancer individuals are emotional, nurturing, loyal, and sensitive. They deeply care for their loved ones and value emotional connections." },
            { q: "How does the Moon influence Cancer?", a: "The Moon strongly influences Cancer, causing fluctuations in mood and emotional intensity. This makes them intuitive but sometimes unpredictable." },
            { q: "What are Cancer's social traits?", a: "They are caring and supportive, with a hidden playful and humorous side that comes out when they feel comfortable." },
            { q: "How do Cancerians deal with disappointment?", a: "They may become quiet or moody for a while, but usually return to their gentle nature once they process their feelings." },
            { q: "Why is the fourth house important for Cancer?", a: "It represents home, family, and emotional security—key priorities in a Cancer’s life." },
            { q: "What kind of diet suits Cancer best?", a: "A diet rich in fresh fruits, vegetables, dairy, and light meals that support digestion and reduce bloating." },
            { q: "How are Cancer individuals as parents?", a: "They are nurturing, protective, and deeply involved in their children’s lives." },
            { q: "What challenges do Cancer natives face?", a: "They may struggle with emotional sensitivity, holding onto the past, and fear of losing loved ones." }
        ],

        luckyFactors: {
            birthstones: ["Pearl", "Moonstone"],
            stones: ["Pearl"],
            metals: ["Silver"],
            day: "Monday",
            numbers: "2, 7, 9",
            colors: "White, Silver",
            exaltation: "Sun",
            debilitation: "Sun"
        },

        preferences: {
            loves: ["Spending time with family", "Creating a cozy home environment", "Meaningful conversations", "Emotional bonding"],
            dislikes: ["Insensitive or emotionally distant people", "Broken promises", "Constant criticism", "Being misunderstood"]
        },

        lifeInsights: {
            need: "Emotional security and stability",
            goal: "Building a secure and loving family life",
            motto: "I feel, and my family is my foundation",
            balance: "Balancing emotional depth with the ability to let go"
        }
    },
    {
        id: "leo",
        name: "Leo",
        sanskritName: "Simha",
        meaning: "The Lion",
        dates: "Jul 23 - Aug 22",
        element: "Fire",
        nature: "Fixed, Positive, Masculine",
        rulingPlanet: "Sun",
        rulingHouse: "Fifth House",
        luckyDays: ["Sunday", "Tuesday", "Thursday"],
        symbol: "The Lion",
        strengths: ["Creative", "Passionate", "Generous", "Warm-hearted", "Cheerful", "Humorous"],
        weaknesses: ["Arrogant", "Stubborn", "Self-centered", "Lazy", "Inflexible"],
        traits: "Leo is the fifth sign of the zodiac and represents confidence, creativity, and bold self-expression. Symbolized by the lion, this sign carries a natural sense of authority and presence.",
        compatibility: ["Aries", "Sagittarius", "Aquarius", "Gemini", "Libra"],
        luckyNumber: "1, 4",
        luckyColor: "Gold, Orange, Yellow",
        luckyStone: "Ruby",
        career: "Leos are natural leaders who thrive in roles that offer recognition and authority. They excel in leadership, entertainment, entrepreneurship, and creative fields.",
        love: "Leos are passionate, expressive, and deeply loyal partners. They love grandly and seek a relationship filled with admiration and warmth.",
        health: "Blessed with natural vitality and strength, Leo governs the heart and spine. They should stay active but avoid overexertion and stress.",
        image: "/assets/image (16).png",

        fullGuide: "Leo is the fifth sign of the zodiac and represents confidence, creativity, and bold self-expression. Symbolized by the lion, this sign carries a natural sense of authority and presence. You are someone who naturally stands out—whether it’s your personality, energy, or the way you carry yourself. There’s a strong desire within you to lead, inspire, and leave a lasting impression. Your energy is vibrant, magnetic, and hard to ignore.",
        
        howToIdentify: "Leos are often easy to spot—they bring energy into any room they walk into. You have a confident and charismatic presence, enjoy attention and appreciation, and naturally take charge in group settings. You are expressive, outgoing, and often have a flair for drama—not in a negative way, but in a way that makes life more exciting and engaging. People are drawn to your warmth, your smile, and your ability to uplift the atmosphere around you.",

        natureDetails: {
            title: "Leo Nature: Personality, Behavior, Strengths & Lifestyle",
            introduction: "Leo natives are naturally driven to create a strong foundation before starting anything important. You prefer clarity, structure, and purpose in your actions. Once your vision is clear, you pursue it with full confidence and energy. You are goal-oriented and highly organized, like to plan, lead, and execute with precision.",
            drive: "Leadership comes naturally to you—it’s not something you try to learn. You take responsibility without hesitation, guide others and set clear directions, and perform best when you are in control. You don’t rely on others for support. Instead, you become the pillar others lean on. Your confidence and determination help you overcome obstacles with strength.",
            impulsive: "You are an entertainer at heart. Whether it’s storytelling, performing, or simply engaging people, you know how to hold attention and create excitement. You bring energy and enthusiasm into any environment and have a natural flair for drama and expression.",
            planetImpact: "The Sun defines your core identity, confidence, and life force. It gives you strong self-belief and charisma. You naturally attract attention and admiration and radiate warmth and positivity. The Sun also brings a sense of authority, which can sometimes make you appear dominant.",
            houseImpact: "The fifth house adds playfulness and creativity to your personality. You enjoy fun, romance, and self-expression. You have a youthful and vibrant outlook on life and are naturally drawn to creative pursuits. This influence also connects you to love, passion, and the joy of living fully.",
            lifestyle: "As a fire sign, your energy is powerful, dynamic, and inspiring. You are confident and action-oriented, bring enthusiasm into everything you do, and motivate others with your passion. You thrive in environments where you can express yourself freely and take initiative.",
            famousPersonalities: ["Barack Obama", "Jennifer Lopez", "Madonna", "Chris Hemsworth", "Leonardo DiCaprio", "Selena Gomez"],
            image: "/assets/image (13).png"
        },

        traitsDetails: {
            introduction: "Leo is known as the powerhouse of the zodiac—a sign that naturally commands attention without even trying. You carry a strong presence, a bold mindset, and a personality that people instantly notice.",
            positive: [
                { title: "Warm-hearted & Generous", text: "You have a naturally big heart. You don’t just care—you show it through actions. You support your loved ones without hesitation and love giving your time and energy." },
                { title: "Optimistic & Energetic", text: "You are someone who refuses to stay down for long. You always try to see the brighter side of situations and bounce back quickly from setbacks." },
                { title: "Natural Leader", text: "Leadership is not something you learn—it’s something you naturally possess. You take charge in difficult situations and inspire others with your confidence." },
                { title: "Protective & Loyal", text: "When you care about someone, you stand by them completely. You defend your loved ones when needed and expect the same level of loyalty in return." },
                { title: "Honest & Straightforward", text: "You believe in clarity rather than sugarcoating things. You speak your mind openly and prefer truth over diplomacy." },
                { title: "Charismatic & Expressive", text: "You are born to stand out. You enjoy attention and admiration and have a natural flair for drama and storytelling, making you the center of attention." }
            ],
            negative: [
                { title: "Ego & Arrogance", text: "Your confidence is your strength—but sometimes it can go overboard. You may believe your way is always right and struggle to accept criticism." },
                { title: "Inflexibility", text: "Once you decide something, it’s hard to change your mind. You stick to your opinions strongly and may resist new perspectives." },
                { title: "Lazy When Uninspired", text: "Despite your ambition, you may lose interest quickly if something doesn’t excite you. You avoid tasks that feel boring or lack recognition." },
                { title: "Pride & Stubbornness", text: "Your pride can sometimes work against you. You may find it difficult to admit mistakes and dislike being corrected by others." },
                { title: "Domineering Nature", text: "You like to lead—but sometimes you may overdo it. You may try to control situations or people and expect others to follow your lead." },
                { title: "Jealous & Competitive", text: "You always aim to be the best—and that can create pressure. You dislike being overshadowed and may become overly competitive." }
            ]
        },

        healthDetails: {
            overview: "Leo is a sign blessed with natural vitality, strength, and a strong life force. Ruled by the Sun, you possess excellent endurance and the ability to bounce back quickly from illness. Your zodiac sign governs the heart, spine, upper back, and wrists, which require special care during stress.",
            concerns: [
                "Heart health and circulation issues",
                "Back pain, stiffness, or posture-related discomfort",
                "Exhaustion and burnout from overexertion",
                "High fevers and sudden energy drains",
                "Nerve-related stress when pressure is high"
            ],
            diet: [
                "Whole grains for steady energy",
                "Fresh fruits like apples and citrus",
                "Green vegetables like spinach and carrots",
                "Nuts and seeds, especially almonds",
                "Dairy products and lean proteins",
                "Hydrating fluids and fresh natural juices"
            ],
            avoid: [
                "Excessive oily and spicy foods",
                "Heavily processed or sugary meals",
                "Overindulgence in rich heavy food",
                "Irregular eating schedules and skipping meals"
            ],
            fitness: [
                "Strength training and muscle building",
                "Cycling or high-energy outdoor sports",
                "Dance workouts or group fitness classes",
                "Yoga and stretching for spinal flexibility",
                "Consistent routine rather than occasional intensity"
            ],
            appearance: [
                "Regal and confident posture",
                "Expressive eyes and a noticeable presence",
                "Walk and body language reflecting authority",
                "Thick, voluminous hair (often a defining feature)",
                "Inner confidence reflected in a charismatic look"
            ],
            beauty: [
                "Warm tones like gold, orange, and red",
                "Bold and expressive makeup looks",
                "Dramatic eye styling and glowing skin",
                "Statement fashion that reflects individuality",
                "Style that is bold, vibrant, and unforgettable"
            ],
            image: "/assets/image (14).png"
        },

        loveDetails: {
            philosophy: "Declaration: I lead with my heart. Key Phrase: I will",
            lessonsGiven: ["Confidence in love", "Emotional warmth", "Generosity", "Courage to express feelings"],
            lessonsNeeded: ["Patience", "Humility", "Mutual effort and balance"],
            personality: "When you fall in love, you do it with intensity, pride, and a sense of purpose. Your feelings are bold and unmistakable. You are fiercely loyal once committed and believe love should feel grand, exciting, and meaningful. You are generous with your love, time, and energy, giving wholeheartedly and expecting your partner to match your intensity.",
            trust: "Honesty is the backbone of your relationships. You prefer clarity over confusion and expect transparency. Once you trust someone, you give them your whole heart. Loyalty is non-negotiable for you, and once broken, it shakes your emotional foundation deeply.",
            whenInLove: [
                "Love with intensity and unmistakable pride",
                "Uplift and support partner wholeheartedly",
                "Express affection in grand and memorable ways",
                "Involve partner deeply in your vibrant life",
                "Stay fiercely loyal and protective"
            ],
            challenges: [
                "Craving constant attention and appreciation",
                "High expectations leading to disappointment",
                "Possessiveness when feeling insecure",
                "Loss of interest if relationship feels dull"
            ],
            image: "/assets/image (15).png"
        },

        careerDetails: {
            mantra: "Watch me rise",
            strengths: [
                "Strong leadership and commanding presence",
                "Excellent communication and influencing skills",
                "High creativity and innovative thinking",
                "Ability to motivate and inspire teams"
            ],
            skillsNeeded: ["Patience", "Collaboration", "Adaptability", "Listening to others' ideas"],
            path: "Leos thrive in roles where their talents are recognized and where they can lead or influence decisions. You perform best in careers that allow you to shine, lead, and create impact.",
            style: "Energetic, visionary, and proactive. You prefer taking charge and initiating projects rather than following instructions. You have a strong ability to see the bigger picture.",
            bestOptions: [
                "Leadership Roles (CEO, Manager, Director)",
                "Politics & Government Positions",
                "Entrepreneurship & Business Ownership",
                "Media, Entertainment & Performing Arts",
                "Public Speaking & Coaching",
                "Marketing, Branding & PR"
            ],
            finance: [
                "Strong ability to attract wealth through passion",
                "Ambitious earning goals to support a luxury lifestyle",
                "Strategically long-term with money management",
                "Financial stability is key to independence"
            ]
        },

        relationshipDetails: {
            overview: "Leo is passionate, expressive, and fiercely loyal in relationships. You bring warmth, energy, and a strong presence into people's lives. While you seek admiration, your generosity makes you unforgettable.",
            lover: "Intense, warm, and romantic. You make sure your partner never questions where they stand. You enjoy grand gestures and creating memorable experiences.",
            friend: "Loyal, generous, and full of life. You stand by friends through thick and thin and enjoy being the one who brings people together.",
            colleague: "Naturally step into leadership roles. Energetic and confident, you prefer environments where efforts are acknowledged and respect is mutual.",
            boss: "Visionary, results-oriented, and inspiring. You recognize talent and reward hard work but expect respect and dedication in return.",
            parent: {
                father: "Protective, playful, and deeply involved. Acts as a confident role model and encourages children to explore their talents.",
                mother: "Strong, independent, and nurturing. Balances ambitions with family while encouraging confidence and dignity in children."
            },
            child: "Confident, expressive, and loves attention. Naturally inclined toward leadership and creative play from a young age.",
            husband: "Protector and provider. Values loyalty, admiration, and emotional connection. Committed to creating a luxurious and supportive environment.",
            wife: "Expressive, confident, and deeply devoted. Values independence and expects equal admiration and respect in marriage."
        },

        manDetails: "A Leo man carries a natural aura of authority and charm. He is warm-hearted, expressive, and believes in living life grandly. Confidence is his strongest asset, helping him take bold steps. At his core, he is generous and kind, always willing to uplift those who matter to him. He thrives on challenges and takes responsibility without hesitation.",
        womanDetails: "A Leo woman is the definition of presence. Vibrant, expressive, and full of life, she naturally becomes the center of attention. She has a warm, generous heart and a bold, straightforward personality. Creative and stylish, she dreams big and believes in living life on her own terms. She values respect above all else.",
        moonDetails: "With the Moon in Leo, your emotional world is vibrant and expressive. You experience emotions with intensity and your heart leads your decisions. You have a strong need to feel valued and appreciated. Optimism is your strongest emotional trait, often becoming the support system for others.",
        
        funFacts: [
            "First thought of a Leo: 'I lead.'",
            "Motto: 'Give your best or don't bother at all.'",
            "Bounces back quickly from setbacks with natural resilience.",
            "When hurt, chooses silence over confrontation to protect pride.",
            "Attracted to confidence, charm, and a fun-loving attitude.",
            "Loves: Cozy home environments, family time, and meaningful conversations.",
            "Dislikes: Being taken lightly, ignored, or fake friendships."
        ],

        faqs: [
            { q: "What defines Leo's nature?", a: "Confidence, leadership, creativity, and a strong desire to stand out and make an impact." },
            { q: "How does the Sun influence Leo?", a: "The Sun gives Leo self-confidence, charisma, energy, and a natural ability to attract attention and lead." },
            { q: "What are Leo's biggest strengths?", a: "Leadership, creativity, loyalty, confidence, and the ability to inspire others." },
            { q: "What challenges do Leos face?", a: "They may struggle with ego, sensitivity to criticism, and a need for constant validation." },
            { q: "How does the fifth house affect Leo?", a: "It enhances creativity, romance, joy, and self-expression, making Leo vibrant and playful." }
        ],

        luckyFactors: {
            birthstones: ["Ruby", "Peridot"],
            stones: ["Ruby"],
            metals: ["Gold"],
            day: "Sunday",
            numbers: "1, 4",
            colors: "Gold, Orange, Yellow"
        },

        preferences: {
            loves: ["Attention and admiration", "Leadership roles", "Creative expression", "Luxury and comfort"],
            dislikes: ["Being ignored", "Criticism", "Being controlled", "Mediocrity"]
        },

        lifeInsights: {
            need: "Recognition and appreciation",
            goal: "To lead, inspire, and leave a lasting impression",
            motto: "I will",
            balance: "Confidence and humility"
        }
    },
    {
        id: "virgo",
        name: "Virgo",
        sanskritName: "Kanya",
        meaning: "The Maiden",
        dates: "Aug 23 - Sep 22",
        element: "Earth",
        nature: "Earth – Mutable – Introverted Energy",
        rulingPlanet: "Mercury",
        rulingHouse: "Sixth House",
        luckyDays: ["Wednesday", "Friday", "Monday"],
        symbol: "The Maiden",
        strengths: ["Exceptional attention to detail", "Strong analytical and problem-solving skills", "Highly organized and disciplined", "Reliable and hardworking", "Practical and grounded mindset", "Ability to improve systems and processes"],
        weaknesses: ["Overthinking and constant worrying", "Being overly critical of self and others", "Difficulty relaxing or letting go", "Hesitation in expressing emotions", "Tendency to isolate when overwhelmed"],
        traits: "Virgo is the sixth sign of the zodiac and is often considered the perfectionist of the zodiac wheel. This sign represents order, discipline, and a deep desire to improve everything it touches. Symbolized by the Maiden, Virgo carries an energy that is pure, thoughtful, and highly analytical.",
        compatibility: ["Taurus", "Gemini", "Cancer", "Sagittarius", "Capricorn"],
        luckyNumber: "3, 5, 6",
        luckyColor: "Grey, Beige, Pale-Yellow",
        luckyStone: "Emerald",
        career: "Virgos are detail-oriented and analytical. They excel in research, accounting, healthcare, and editing.",
        love: "In love, Virgos are dedicated and practical. They show their love through service and reliability.",
        health: "Virgo rules the digestive system. They should be mindful of diet-related issues and stress management.",
        image: "/assets/image (17).png",

        fullGuide: "Virgo is the sixth sign of the zodiac and is often considered the perfectionist of the zodiac wheel. This sign represents order, discipline, and a deep desire to improve everything it touches. Symbolized by the Maiden, Virgo carries an energy that is pure, thoughtful, and highly analytical. You are someone who believes in structure and clarity. You don’t like chaos or uncertainty—instead, you prefer planning, organizing, and refining things until they reach their best possible form. Your mind naturally focuses on details, making you highly observant and efficient in everything you do. Virgo energy is grounded and practical. You approach life with logic and realism, often relying on facts rather than emotions. This makes you a reliable individual who others trust when things need to be handled with precision. Virgo is a sign of intelligence, precision, and quiet strength. You may not always seek the spotlight, but your presence is felt through your work, your dedication, and your ability to make things better. When you learn to ease your inner pressure and embrace imperfection, your true potential becomes even more powerful—making you one of the most dependable and capable signs of the zodiac.",

        natureDetails: {
            title: "Virgo Nature: Personality, Behavior, Strengths & Lifestyle",
            introduction: "Virgo individuals are grounded, thoughtful, and driven by a deep desire to improve everything around them. You carry a sense of responsibility that reflects in your daily actions, making you one of the most dependable and disciplined personalities in the zodiac.",
            drive: "You are someone who thrives on structure and clarity. Whether it’s your work, personal life, or future goals, you prefer having a clear plan in place. You don’t leave things to chance—every step is calculated, every decision is carefully considered. This makes you highly efficient, but it can also lead to unnecessary pressure on yourself.",
            impulsive: "Despite appearing serious or reserved on the outside, your inner world is rich, organized, and meaningful. You are constantly thinking, analyzing, and refining ideas. You may not always express your emotions openly, but your actions reflect care, sincerity, and loyalty.",
            planetImpact: "Mercury gives you a sharp, analytical mind and excellent communication skills. You are naturally skilled at processing information, breaking it down, and using it effectively. You don’t just absorb knowledge—you filter it. You focus on what is useful, practical, and applicable. This makes you a problem-solver and a reliable source of insight.",
            houseImpact: "The sixth house governs your daily habits, work ethic, and approach to self-improvement. It shapes your need for order, cleanliness, and consistency. You find comfort in routines and structured environments. Whether it’s your workspace, health habits, or daily schedule, you prefer things to be organized and predictable.",
            lifestyle: "Being an Earth sign, you are practical, stable, and grounded in reality. You believe in logic over fantasy and prefer dealing with what is real and achievable. You are highly observant and can quickly notice when something feels 'off.' This awareness helps you avoid mistakes and make better decisions.",
            famousPersonalities: ["Beyoncé", "Michael Jackson", "Zendaya", "Keanu Reeves", "Stephen King", "Agatha Christie", "Kobe Bryant", "Akshay Kumar", "Kareena Kapoor", "Freddie Mercury"],
            image: "/assets/image (18).png"
        },

        traitsDetails: {
            introduction: "Virgo, the sixth sign of the zodiac, is known for its precision, discipline, and ability to bring order into chaos. You are someone who believes in doing things the right way—carefully, thoughtfully, and with attention to every small detail.",
            positive: [
                { title: "Intelligent & Knowledge-Oriented", text: "You have a sharp and curious mind that constantly seeks to learn and grow. You understand information, analyze it, and apply it practically." },
                { title: "Calm & Composed", text: "On the outside, you appear steady and composed. Even in stressful situations, you try to maintain control and think logically." },
                { title: "Highly Analytical", text: "Your biggest strength is your ability to break down complex situations. You observe, analyze, and evaluate every angle before making a decision." },
                { title: "Honest & Straightforward", text: "You value truth over comfort and believe honesty is essential. People trust you because they know you won’t pretend or sugarcoat reality." },
                { title: "Reliable & Responsible", text: "When you commit to something, you follow through. You deliver results with consistency and precision." },
                { title: "Perfection-Driven", text: "You naturally strive for excellence. You want things to be done properly and often go the extra mile to ensure quality." }
            ],
            negative: [
                { title: "Overly Critical", text: "Your attention to detail can turn into criticism toward yourself and others. You notice flaws easily, which can create misunderstandings." },
                { title: "Judgmental Tendencies", text: "At times, you may form opinions too quickly based on limited information. Your strong sense of right and wrong can make you less flexible." },
                { title: "Traditional & Resistant to Change", text: "You often prefer familiar systems and proven methods, which can make you hesitant to embrace new ideas." },
                { title: "Fussy About Details", text: "You can get so focused on small details that you lose sight of the bigger picture, which can slow down progress." },
                { title: "Slow to Open Up", text: "You take your time building trust and prefer observing and understanding before fully committing." }
            ]
        },

        healthDetails: {
            overview: "Virgo rules the digestive system, including the intestines and abdomen. You are naturally health-conscious but prone to stress-related digestive issues. Maintaining a consistent routine is key to your well-being.",
            concerns: [
                "Digestive system sensitivity",
                "Intestinal issues or food allergies",
                "Anxiety and stress-related ailments",
                "Insomnia due to overthinking",
                "Lower abdominal discomfort"
            ],
            diet: [
                "Fiber-rich foods for digestion",
                "Fresh vegetables and leafy greens",
                "Mindful eating and regular meal times",
                "Herbal teas like peppermint or chamomile",
                "Whole grains and lean proteins"
            ],
            avoid: [
                "Fast food and heavy grease",
                "Eating while stressed or rushed",
                "Excessive sugar and stimulants",
                "Overthinking during meals"
            ],
            fitness: [
                "Routine exercises like walking or jogging",
                "Yoga and meditation for stress relief",
                "Consistent daily movement",
                "Pilates for core strength"
            ],
            appearance: [
                "Neat and well-groomed appearance",
                "Clear, intelligent eyes",
                "Graceful and composed posture",
                "Subtle but elegant style"
            ],
            beauty: [
                "Natural and clean beauty looks",
                "Earth tones and soft palettes",
                "Focus on skin health and hygiene",
                "Minimalist and sophisticated style"
            ]
        },


        loveDetails: {
            philosophy: "Declaration: I nurture love through care, intention, and meaningful actions. Key Phrase: I observe and understand",
            lessonsGiven: ["Grace", "Sincerity", "Mindful devotion", "Reliability"],
            lessonsNeeded: ["Spontaneity", "Emotional expression", "Accepting imperfection"],
            personality: "Your love personality is a blend of logic and quiet emotion. You don't fall in love easily, but when you do, it is sincere, steady, and enduring. You value loyalty and emotional security over grand declarations. You are naturally attentive and notice small details, making you incredibly thoughtful.",
            trust: "Trust is built over time through consistency and honesty. Once you feel secure, your devotion is unwavering and pure. You seek depth, compatibility, and long-term potential in a partner.",
            whenInLove: [
                "Become more attentive and involved",
                "Check in on partner regularly",
                "Remember even the smallest details",
                "Make efforts to improve their life",
                "Stay loyal and committed"
            ],
            challenges: [
                "Overthinking emotions instead of feeling them",
                "High expectations for self and partner",
                "Difficulty expressing feelings openly",
                "Being overly critical even with good intentions"
            ],
            image: "/assets/image (19).png"
        },

        careerDetails: {
            mantra: "Precision creates success",
            strengths: [
                "Exceptional attention to detail",
                "Strong analytical and problem-solving skills",
                "High level of responsibility and reliability",
                "Consistency and precision in execution"
            ],
            skillsNeeded: ["Adaptability", "Flexibility", "Managing multiple priorities without stress"],
            path: "Virgos excel in careers that require logic, structure, precision, and service. You thrive in environments where you can improve systems and achieve excellence.",
            style: "Systematic, thoughtful, and methodical. You prefer to plan before executing and focus deeply on quality. You are a quiet but effective leader who guides by example.",
            bestOptions: [
                "Data Analyst / Researcher",
                "Healthcare Professional",
                "Writer / Editor / Teacher",
                "Project Manager / Accountant"
            ],
            finance: [
                "Cautious and intelligent with money",
                "Consistent saver for the future",
                "Avoids unnecessary financial risks",
                "Focuses on long-term stability and security"
            ]
        },

        relationshipDetails: {
            overview: "A relationship with a Virgo is built on trust, consistency, and quiet dedication. They express love through actions, responsibility, and care rather than dramatic words.",
            lover: "Subtle yet deeply devoted. Shows love through service and supporting your goals.",
            friend: "Loyal and thoughtful. A dependable friend who gives practical advice and shows up when it matters.",
            colleague: "Highly reliable and detail-focused. A perfectionist teammate who ensures quality and accuracy.",
            boss: "Precise, observant, and clear. A supportive mentor who expects excellence and organization.",
            parent: {
                father: "Responsible, patient, and committed to preparing children for the future.",
                mother: "Organized, attentive, and nurturing. Creates a structured and healthy environment."
            },
            child: "Observant, thoughtful, and curious. Enjoys learning and prefers structured environments.",
            husband: "Dependable and supportive husband. Proves love through actions and shared responsibilities.",
            wife: "Loyal and organized wife. Maintains balance and harmony while supporting her partner's growth."
        },

        manDetails: "A Virgo man is a thinker, a planner, and a quiet perfectionist. He approaches life with logic, structure, and a deep desire to improve everything he touches. He is naturally observant and detail-oriented, noticing everything from subtle behavioral patterns to small inconsistencies. While he may not express emotions openly, his actions reflect sincerity, loyalty, and a genuine desire to help. He values routine, stability, and practicality, making him one of the most dependable partners or colleagues you can have.",
        womanDetails: "A Virgo woman is a blend of intelligence, grace, and quiet strength. She may appear reserved, but beneath the surface lies a deeply thoughtful and capable personality. She values precision and purpose in everything she does, refusing to do things halfway. She is independent, self-reliant, and resilient. In love, she is thoughtful and intentional, seeking stability and mutual respect. She is the kind of person who improves everything she touches—relationships, work, and the lives of those around her.",
        moonDetails: "With the Moon in Virgo, emotions are filtered through logic and practicality. You analyze what you feel before expressing it. You feel most secure when life is organized and predictable. You are deeply caring and nurturing, but you show it through service and practical help. You have a strong need for order and naturally strive to improve your surroundings. Your strength lies in your discipline and your ability to bring clarity into any situation.",
        
        howToIdentify: "Virgos are not usually the loudest people in the room—but they are often the most aware. You might notice them quietly observing, analyzing situations, and picking up details that others completely miss. They carry a calm, composed presence and often prefer small circles or solitude. They focus on responsibilities and goals rather than social distractions, showing subtle elegance and a practical approach to life.",

        funFacts: [
            "Motto: 'I don't react—I analyze. I don't assume—I verify.'",
            "Pet Peeve: Messiness, chaos, and lack of hygiene.",
            "Attracted to: Discipline, intelligence, and good manners.",
            "Notice instantly: Small inconsistencies and changes in tone.",
            "Perfect Gift: Practical items like planners, wellness tools, or books.",
            "Mindset: 'Precision creates success.'",
            "Loves rewatching meaningful movies and being in nature."
        ],

        faqs: [
            { q: "What does Virgo represent in astrology?", a: "Virgo represents precision, organization, and a strong desire for improvement and perfection." },
            { q: "What are the key traits of Virgo?", a: "Virgo is analytical, detail-oriented, hardworking, and highly reliable." },
            { q: "Are Virgos emotional?", a: "They feel deeply but often express emotions through actions rather than words." },
            { q: "What makes Virgo unique?", a: "The ability to notice details, solve problems efficiently, and improve everything around them." },
            { q: "What challenges do Virgos face?", a: "Overthinking, perfectionism, and difficulty relaxing are some of common struggles." }
        ],

        luckyFactors: {
            birthstones: ["Blue Sapphire", "Peridot", "Sardonyx"],
            stones: ["Emerald"],
            metals: ["Mercury", "Gold"],
            day: "Wednesday",
            numbers: "3, 5, 6",
            colors: "Grey, Beige, Pale-Yellow"
        },

        preferences: {
            loves: ["Clean and organized environments", "Healthy food and mindful routines", "Animals and nature", "Learning and self-improvement"],
            dislikes: ["Messiness and lack of hygiene", "Chaos and unpredictability", "Being judged unfairly", "Unnecessary attention or show-offs"]
        },

        lifeInsights: {
            need: "Structure and clarity",
            goal: "To improve systems and processes and achieve excellence",
            motto: "I analyze",
            balance: "Perfection and acceptance"
        }
    },
    {
        id: "libra",
        name: "Libra",
        sanskritName: "Tula",
        meaning: "The Scales",
        dates: "Sep 23 - Oct 22",
        element: "Air",
        nature: "Air • Cardinal • Positive",
        rulingPlanet: "Venus",
        rulingHouse: "Seventh House",
        luckyDays: ["Friday", "Monday", "Saturday"],
        symbol: "The Scales",
        strengths: ["Charming and diplomatic", "Fair-minded and rational", "Socially intelligent and engaging", "Peace-loving and cooperative", "Refined sense of beauty and aesthetics"],
        weaknesses: ["Indecisiveness", "People-pleasing tendencies", "Avoidance of necessary conflict", "Emotional fluctuations when harmony is disturbed", "Overthinking"],
        traits: "Libra is the seventh sign of the zodiac and symbolizes balance, harmony, and justice. Represented by the scales, it is the only zodiac sign associated with an inanimate object—highlighting its deep connection with fairness, logic, and equilibrium rather than raw instinct.",
        compatibility: ["Gemini", "Leo", "Sagittarius", "Aquarius"],
        luckyNumber: "2, 7",
        luckyColor: "Pink, Blue",
        luckyStone: "Diamond, White Sapphire",
        career: "Libras are diplomatic and have a keen sense of justice. They excel in law, diplomacy, art, and fashion.",
        love: "Libras value harmony and partnership. They are romantic and seek balance in their relationships.",
        health: "Libra rules the kidneys and lower back. They should drink plenty of water to support kidney function.",
        image: "/assets/image (20).png",

        fullGuide: "Libra is the seventh sign of the zodiac and symbolizes balance, harmony, and justice. Represented by the scales, it is the only zodiac sign associated with an inanimate object—highlighting its deep connection with fairness, logic, and equilibrium rather than raw instinct. Libra energy is all about restoring balance wherever it is disturbed. Whether it’s in relationships, environments, or decisions, you naturally seek to create peace and alignment. You are driven by a strong sense of ethics and a desire to maintain harmony in all aspects of life. You are not comfortable in extremes. Instead, you constantly aim to find the middle ground—the point where everything feels right. Libra is the embodiment of balance, grace, and fairness. You are someone who brings peace into chaos, clarity into confusion, and harmony into relationships. Your strength lies in your ability to understand both sides of every situation and create solutions that feel right for everyone involved. When you learn to balance your own needs with those of others, you unlock your true power—becoming not just a mediator, but a guide for harmony in every aspect of life.",

        natureDetails: {
            title: "Libra Nature: Personality, Traits, Behavior & Lifestyle",
            introduction: "Libra individuals are the embodiment of grace, balance, and refined living. You naturally gravitate toward harmony in every aspect of life—whether it is relationships, surroundings, or decisions. Your personality reflects elegance, fairness, and a deep desire to maintain peace.",
            drive: "You are someone who prefers calm over chaos and diplomacy over conflict. Your approach to life is thoughtful and measured. Before making any decision, you carefully evaluate every angle, weighing both the advantages and disadvantages. This makes you one of the most balanced thinkers in the zodiac.",
            impulsive: "At your core, you are social, friendly, and emotionally intelligent. You connect easily with people and often become a central figure in your social circle. However, despite your love for companionship, you may struggle with finding the right balance between your own needs and expectations.",
            planetImpact: "Venus, the planet of love, beauty, and attraction, governs your personality. This influence enhances your appreciation for aesthetics, relationships, and refined experiences. You value beauty in all forms and have a natural sense of style and elegance.",
            houseImpact: "The seventh house governs relationships and partnerships. Its influence makes relationships a key focus in your life. You are naturally inclined to understand your partner's emotions and build meaningful, lasting bonds.",
            lifestyle: "As an Air sign, Libra is intellectual, communicative, and idea-driven. You thrive on conversations and mental stimulation. You bring change gently, often influencing others without force through your ability to negotiate.",
            famousPersonalities: ["Will Smith", "Kim Kardashian", "Serena Williams", "Bruno Mars", "Gwen Stefani", "Zac Efron", "Amitabh Bachchan", "Rekha", "Ranbir Kapoor"],
            image: "/assets/image (20).png"
        },

        traitsDetails: {
            introduction: "Libras are often regarded as some of the most charming and socially graceful individuals in the zodiac. Ruled by Venus, you naturally appreciate beauty, relationships, and refined living.",
            positive: [
                { title: "Romantic & Affectionate", text: "You believe in love and meaningful relationships. You enjoy expressing affection through thoughtful gestures and shared experiences." },
                { title: "Charming & Magnetic", text: "You possess a natural charm that attracts people effortlessly through your politeness, warmth, and social intelligence." },
                { title: "Excellent Listener", text: "You genuinely care about what others have to say and make them feel heard, making you a trusted confidant and friend." },
                { title: "Fair & Balanced", text: "Fairness is your strongest trait. You always try to see both sides of a situation and seek justice and equality." },
                { title: "Idealistic & Peace-Loving", text: "You believe in harmony and kindness, preferring cooperation over conflict and dialogue over arguments." },
                { title: "Understanding & Diplomatic", text: "You handle sensitive situations with grace, choosing words carefully to maintain social harmony." }
            ],
            negative: [
                { title: "Indecisive", text: "Seeing all perspectives can make choices difficult. You may overanalyze options and seek constant validation." },
                { title: "Avoidance of Conflict", text: "You dislike confrontation so much that you may suppress feelings or agree just to keep the peace." },
                { title: "People-Pleasing", text: "Your desire to keep everyone happy can come at the cost of your own needs and boundaries." },
                { title: "Superficial at Times", text: "Your love for aesthetics may occasionally lead to focusing more on appearances than deeper aspects." },
                { title: "Unreliable", text: "Indecisiveness and pressure-avoidance can sometimes make you appear inconsistent when quick action is needed." }
            ]
        },

        healthDetails: {
            overview: "Libra health revolves around balance. You govern the lower back, kidneys, and urinary system. Maintaining equilibrium in daily habits is essential for your well-being.",
            concerns: [
                "Kidney imbalances and urinary tract infections",
                "Lower back pain and posture issues",
                "Skin sensitivity and stress-related breakouts",
                "Hormonal imbalances",
                "Mental exhaustion from overthinking"
            ],
            diet: [
                "Whole grains and oats",
                "Fresh fruits like apples, grapes, and berries",
                "Green vegetables like spinach and peas",
                "Nuts, almonds, and seeds",
                "Light protein sources"
            ],
            avoid: [
                "Alcohol and carbonated drinks",
                "Excess sugar and highly processed foods",
                "Overworking without breaks",
                "Suppressed emotions"
            ],
            fitness: [
                "Regular stretching to strengthen the lower back",
                "Yoga and meditation for inner harmony",
                "Consistent work-life balance",
                "Walking in nature"
            ],
            appearance: [
                "Well-balanced body structure",
                "Pleasant smile and charming presence",
                "Soft facial features and expressive eyes",
                "Graceful movements"
            ],
            beauty: [
                "Balanced and refined style",
                "Subtle yet impactful aesthetics",
                "Focus on harmony and sophistication",
                "Natural elegance"
            ],
            image: "/assets/image (20).png"
        },

        loveDetails: {
            philosophy: "Declaration: I weigh everything and find balance in extremes. Key Phrase: I balance",
            lessonsGiven: ["Harmony", "Companionship", "Emotional support", "Art of balance"],
            lessonsNeeded: ["Self-worth", "Independence", "Expressing true feelings", "Standing firm"],
            personality: "You are a true romantic idealist, always searching for that perfect, harmonious connection. You don't rush decisions in love; you carefully analyze emotions and compatibility before committing. Once sure, you become deeply loyal and devoted.",
            trust: "Trust is built through mutual respect and emotional reciprocity. You seek a partner who matches your emotional and intellectual level and provides stability.",
            whenInLove: [
                "Create meaningful experiences for partner",
                "Express love through thoughtful compliments",
                "Seek constant interaction and closeness",
                "Invest deeply in partner's happiness",
                "Strive to keep the relationship peaceful"
            ],
            challenges: [
                "Delaying commitment due to overthinking",
                "Avoiding necessary conflict",
                "Dependence on partner for emotional balance",
                "Struggling to express true feelings if they disrupt harmony"
            ],
            image: "/assets/image (20).png"
        },

        careerDetails: {
            mantra: "If I can dream it, I can achieve it",
            strengths: [
                "Imagination and creativity",
                "Diplomacy and collaboration",
                "Mental alertness and fairness",
                "Refined approach to problem-solving"
            ],
            skillsNeeded: ["Standing up for yourself", "Being direct and firm", "Overcoming indecisiveness"],
            path: "Libras excel in creative fields (design, art, fashion), law, and communication-based roles. You thrive where variety and exchange of ideas exist.",
            style: "Cooperative, diplomatic, and aesthetically focused. You prefer a calm, organized work environment over high-pressure or messy settings.",
            bestOptions: [
                "Fashion / Interior / Graphic Designer",
                "Lawyer / Mediator / Judge",
                "Journalist / PR / Event Manager",
                "Architect / Consultant"
            ],
            finance: [
                "Taste for luxury and comfort",
                "Thoughtful financial decisions",
                "Hardworking to support a refined lifestyle",
                "Maintaining balance between indulgence and saving"
            ]
        },

        relationshipDetails: {
            overview: "Libras are natural seekers of balance and meaningful connections. They take time to commit, but once they do, they are loyal and devoted partners.",
            lover: "Romantic idealist. Nurtures the relationship with affection and avoids unnecessary conflict.",
            friend: "Loyal and socially vibrant. The glue that holds groups together with positivity and charm.",
            colleague: "Diplomatic and cooperative. Excellent at resolving team conflicts and maintaining harmony.",
            boss: "Fair and collaborative. Leads with diplomacy and encourages team creativity.",
            parent: {
                father: "Friendly and patient. Builds bonds through trust and open communication.",
                mother: "Caring and balanced. Acts as a mediator and ensures a harmonious environment."
            },
            child: "Charming and social. Acts as a mediator among peers but may take time with decisions.",
            husband: "Romantic and devoted. Prioritizes partner's happiness and avoids conflict.",
            wife: "Graceful and emotionally intelligent. Committed to maintaining a balanced and exciting family life."
        },

        manDetails: "A Libra man is a blend of charm, intelligence, and emotional awareness. Ruled by Venus, he has a magnetic personality and refined style. He is a natural communicator who avoids drama and seeks emotional stability. While he is loyal and romantic, he may struggle with conflict-avoidance and indecisiveness. He values fairness and seeks a partner who matches his intellectual depth and calm nature.",
        womanDetails: "A Libra woman embodies grace, charm, and intelligence. She thrives in social environments and believes deeply in fairness and balance. As a natural leader, she inspires others through her influential and persuasive style. She has a refined taste for beauty and luxury. In love, she is devoted and romantic, seeking an equal partnership based on mutual respect and understanding.",
        moonDetails: "Individuals with Moon in Libra have a deep emotional need for peace and harmony. You feel complete when surrounded by balance and love. You are highly inclined toward building connections and feel emotionally satisfied through communication and intellectual bonding. Your strength lies in your ability to restore balance in any conflict, though you may struggle with making firm stands.",
        
        howToIdentify: "A Libra personality is easy to notice by their natural elegance and composure. They carry a calm, balanced demeanor and are exceptionally friendly and approachable. You'll notice their love for beauty, symmetry, and meaningful conversations. They are often the ones mediating in groups and drawing people in with their effortless charm.",

        funFacts: [
            "Motto: 'I feel deeply, forgive quickly, and care endlessly.'",
            "Pet Peeve: Dishonesty, selfishness, and being ignored.",
            "Loves: Live concerts, boat rides, and aesthetically pleasing environments.",
            "Special Skill: Reading situations and detecting tension instantly.",
            "Fact: The only sign represented by an inanimate object (The Scales).",
            "Mindset: 'I balance extremes to find harmony.'"
        ],

        faqs: [
            { q: "What defines Libra's nature?", a: "Balance, fairness, charm, and a strong desire for harmony in all aspects of life." },
            { q: "Why are Libras known for balance?", a: "They are symbolized by the scales, representing fairness, equality, and equilibrium." },
            { q: "Are Libras good in relationships?", a: "Yes, they are romantic, loyal, and focused on maintaining harmony and partnership." },
            { q: "What are Libra's biggest challenges?", a: "Indecisiveness, people-pleasing, and avoiding necessary conflict." },
            { q: "What motivates Libra in life?", a: "The desire for balance, beauty, fairness, and meaningful connections." }
        ],

        luckyFactors: {
            birthstones: ["Opal", "Peridot"],
            stones: ["Diamond", "White Sapphire"],
            metals: ["Copper", "White Gold"],
            day: "Friday",
            numbers: "2, 7",
            colors: "Pink, Blue"
        },

        preferences: {
            loves: ["Harmony and peace", "Aesthetics and beauty", "Meaningful social interactions", "Luxury and comfort"],
            dislikes: ["Unnecessary conflict", "Injustice and unfairness", "Loud or chaotic environments", "Being pressured into quick decisions"]
        },

        lifeInsights: {
            need: "Balance and harmony",
            goal: "To create peace and alignment in all relationships",
            motto: "I balance",
            balance: "Self-needs and others' expectations"
        }
    },
    {
        id: "scorpio",
        name: "Scorpio",
        sanskritName: "Vrishchika",
        meaning: "The Scorpion",
        dates: "Oct 23 - Nov 21",
        element: "Water",
        nature: "Water – Fixed – Negative",
        rulingPlanet: "Pluto, Mars",
        rulingHouse: "Eighth House",
        luckyDays: ["Tuesday", "Saturday", "Friday"],
        symbol: "The Scorpion",
        strengths: ["Focused and determined", "Brave and courageous", "Loyal and faithful", "Ambitious and goal-oriented", "Intense and passionate"],
        weaknesses: ["Jealous and possessive", "Secretive and private", "Dominating and controlling", "Resentful", "Holding grudges"],
        traits: "Scorpio is the eighth sign of the zodiac and is known for its intensity, strength, and magnetic personality. You are not someone who does things halfway—everything you feel, think, and pursue is deep, powerful, and full of passion.",
        compatibility: ["Cancer", "Capricorn", "Pisces"],
        luckyNumber: "1, 8, 9",
        luckyColor: "Scarlet, Red, Rust",
        luckyStone: "Red Coral",
        career: "Scorpios thrive in competitive environments where they can use their intelligence and determination. They excel in investigative, medical, and strategic fields.",
        love: "Scorpios are intense and passionate lovers. They value honesty and emotional connection above all else and are deeply committed once trust is earned.",
        health: "Scorpio governs the reproductive organs and excretory system. Maintaining emotional balance is key for their physical well-being.",
        image: "/assets/image (21).png",

        fullGuide: "Scorpio is the eighth sign of the zodiac and is known for its intensity, strength, and magnetic personality. You are not someone who does things halfway—everything you feel, think, and pursue is deep, powerful, and full of passion. Your presence itself carries a sense of mystery that naturally draws people toward you. You are strong-willed, determined, and highly focused. Once you set your mind on something, you pursue it with complete dedication. You are ambitious and value stability and security in life. Your ability to stay committed and work tirelessly toward your goals makes you someone who can achieve great success. At the same time, you are highly intelligent and curious. You have a natural desire to understand things at a deeper level, which makes you observant and insightful. You don’t just accept things on the surface—you analyze, question, and seek the truth behind everything. Overall, Scorpio individuals are fearless, resilient, and driven. You don’t back down from challenges and continue to move forward with determination. Your emotional depth, strength, and magnetic personality make you one of the most powerful and intriguing signs of the zodiac.",

        natureDetails: {
            title: "Scorpio Nature: Personality, Traits, Behavior & Lifestyle",
            introduction: "Scorpio, symbolized by the Scorpion, is often considered one of the most complex and intense signs of the zodiac. While some astrologers describe it as an introverted or feminine sign, your true nature goes far beyond simple definitions.",
            drive: "You are strong-willed, determined, and highly focused. Once you set your mind on something, you pursue it with complete dedication. You are ambitious and value stability and security in life.",
            impulsive: "At your core, you are highly intelligent and curious. You have a natural desire to understand things at a deeper level. You don’t just accept things on the surface—you analyze, question, and seek the truth behind everything.",
            planetImpact: "Pluto, your ruling planet, represents the subconscious mind, hidden desires, and transformation. This influence gives you the ability to transform yourself and your life in profound ways.",
            houseImpact: "The eighth house governs transformation, shared resources, and hidden aspects of life. It makes you naturally inclined to explore the unknown and comfortable dealing with topics others avoid.",
            lifestyle: "As a Water sign, your emotions run deep and powerful. You are intuitive and sensitive, often understanding things without them being spoken. You tend to keep your emotions private, adding to your mystery.",
            famousPersonalities: ["Bill Gates", "Leonardo DiCaprio", "Anne Hathaway", "Ryan Gosling", "Katy Perry", "Shah Rukh Khan", "Aishwarya Rai", "Virat Kohli"],
            image: "/assets/image (21).png"
        },

        traitsDetails: {
            introduction: "Scorpio is one of the most intense and powerful signs of the zodiac. Known for its depth, passion, and magnetic presence, this sign stands out for its strong will and emotional intensity.",
            positive: [
                { title: "Focused", text: "You possess an incredible level of focus and determination. Once you decide on a goal, you pursue it with complete dedication." },
                { title: "Brave", text: "Courage is one of your defining qualities. You are not afraid to take risks or face difficult situations." },
                { title: "Loyal", text: "Loyalty runs deep in your character. When you trust someone, you are incredibly devoted and protective." },
                { title: "Faithful", text: "You are deeply committed in love and relationships. You remain faithful to your partners through every phase of life." },
                { title: "Ambitious", text: "Ambition drives you to aim high and achieve great things. Your persistence ensures success becomes inevitable." }
            ],
            negative: [
                { title: "Jealous", text: "You can experience intense jealousy, especially when you feel betrayed or insecure in relationships." },
                { title: "Possessive", text: "Your attachment can turn into possessiveness, stemming from a fear of losing someone you deeply care about." },
                { title: "Secretive", text: "You rarely reveal your true feelings easily, using secrecy as a shield to protect your emotions." },
                { title: "Dominating", text: "You prefer to be in control and take charge naturally, which can sometimes come across as dominating." },
                { title: "Resentful", text: "You do not forget betrayal easily and may hold onto resentment, though this often fuels your growth." }
            ]
        },

        healthDetails: {
            overview: "Scorpio natives are blessed with strong immunity and impressive recovery power. However, their intense personality and tendency to suppress emotions can lead to internal stress.",
            concerns: [
                "Reproductive system disorders and infections",
                "Intestinal and digestive issues",
                "Lower back and excretory system concerns",
                "Stress-related psychosomatic disorders",
                "Hormonal imbalances"
            ],
            diet: [
                "Protein-rich foods like fish, seafood, and eggs",
                "Healthy fats from avocados and nuts",
                "Fresh fruits like figs and black cherries",
                "Vegetables like onions, asparagus, and cauliflower",
                "Zinc-rich sources to support regeneration"
            ],
            avoid: [
                "Alcohol (weakens the system)",
                "Overly spicy and oily foods",
                "Heavily seasoned or processed items",
                "Suppressed emotions and internal stress"
            ],
            fitness: [
                "Intense physical activities to channel energy",
                "Yoga and meditation for emotional balance",
                "Spending time in nature and fresh air",
                "Consistent detoxification and hydration"
            ],
            appearance: [
                "Strong and powerful physical presence",
                "Sharp and defined facial features",
                "Deep, intense, and penetrating eyes",
                "Commanding aura and broad shoulders"
            ],
            beauty: [
                "Intensity and magnetism",
                "Signature color: Red (passion and confidence)",
                "Bold expression and dramatic styles",
                "Preference for black and burgundy tones"
            ],
            image: "/assets/image (21).png"
        },

        loveDetails: {
            philosophy: "Declaration: I transform pain into power. Key Phrase: I desire",
            lessonsGiven: ["Passion", "Emotional depth", "Raw intensity", "Complete surrender"],
            lessonsNeeded: ["Vulnerability", "Trust", "Mutual exchange", "Letting go of control"],
            personality: "You are one of the most mysterious and emotionally intense individuals in love. For you, love is not casual—it is an all-consuming experience that seeks deep emotional and spiritual unity.",
            trust: "Trust is the foundation of your relationships. It is built slowly, but once established, it becomes a powerful and lasting connection.",
            whenInLove: [
                "Give your whole heart and soul",
                "Seek deep emotional and mental bonding",
                "Become incredibly loyal and protective",
                "Experience love as something sacred and transformative",
                "Strive for total authenticity and transparency"
            ],
            challenges: [
                "Jealousy and possessiveness",
                "Fear of betrayal and loss",
                "Struggling to let go of past hurts",
                "Testing partner's loyalty and intentions"
            ],
            image: "/assets/image (21).png"
        },

        careerDetails: {
            mantra: "Persistence turns challenges into opportunities",
            strengths: [
                "Self-motivation and clear direction",
                "Strategic thinking and planning",
                "Intense focus and dedication",
                "Ability to handle complex tasks"
            ],
            skillsNeeded: ["Forgiveness and letting go", "Direct communication", "Delegating control"],
            path: "Scorpios excel in investigative, research-based, and strategic roles. You thrive where truth and depth are required.",
            style: "Disciplined, determined, and authoritative. You prefer positions of power where you can make an impactful difference.",
            bestOptions: [
                "Medical Researcher / Surgeon / Psychologist",
                "Investigator / Detective / Intelligence Officer",
                "Engineer / Architect / Market Analyst",
                "Defense Services / Navigator / Ecologist"
            ],
            finance: [
                "Strategic financial management",
                "Calculated and thoughtful spending",
                "Emphasis on long-term security",
                "Ability to recover from setbacks"
            ]
        },

        relationshipDetails: {
            overview: "Scorpios approach relationships with depth, passion, and seriousness. They value trust and honesty above all else.",
            lover: "Passionate and transformative. Seeks deep emotional and spiritual unity.",
            friend: "Extremely loyal and dependable. Values meaningful connections over superficial ones.",
            colleague: "Strategic and focused. Reliable asset who looks out for the team's bigger picture.",
            boss: "Strict and results-oriented. Leads with authority and expects high standards.",
            parent: {
                father: "Friendly and patient. Builds bonds through trust and open communication.",
                mother: "Caring and balanced. Acts as a mediator and ensures a harmonious environment."
            },
            child: "Charming and social. Acts as a mediator among peers but may take time with decisions.",
            husband: "Romantic and devoted. Prioritizes partner's happiness and avoids conflict.",
            wife: "Graceful and emotionally intelligent. Committed to maintaining a balanced and exciting family life."
        },

        manDetails: "A Scorpio man is a blend of passion, intensity, and self-reliance. He appears calm on the outside but carries a powerful emotional world. He is a natural observer who values control and independence. In love, he is deeply passionate and loyal, seeking a partner who matches his depth and confidence.",
        womanDetails: "A Scorpio woman embodies intensity, mystery, and inner strength. She is private, highly observant, and values clarity and truth. Driven by power and success, she is ambitious and independent. In relationships, she is devoted and loyal, remembering both kindness and betrayal deeply.",
        moonDetails: "Individuals with Moon in Scorpio have an intense emotional world. Ruled by Mars and Pluto, you are sensitive, secretive, and mentally strong. You have immense emotional depth and intuition. Your resilience allows you to rise after setbacks, though you may struggle with trust and possessiveness.",
        
        howToIdentify: "Scorpio personalities are recognized by their magnetic aura and intense, penetrating gaze. They have a commanding physical presence, often with sharp facial features and a serious demeanor. You'll notice their strategic approach, their tendency to observe before acting, and the air of mystery that surrounds them.",

        funFacts: [
            "Motto: 'The only people I owe my loyalty to are the ones who never made me question theirs.'",
            "Pet Peeve: Dishonesty, fake behavior, and being underestimated.",
            "Loves: Deep conversations, mystery, and uncovering hidden truths.",
            "Special Skill: Reading between the lines and detecting hidden motives.",
            "Fact: Known as the most transformative sign, capable of rising from ashes like a phoenix.",
            "Mindset: 'I transform challenges into power.'"
        ],

        faqs: [
            { q: "What defines Scorpio's nature?", a: "Intensity, passion, determination, and a magnetic personality driven by deep emotions." },
            { q: "Why are Scorpios considered mysterious?", a: "They tend to keep their emotions and thoughts private, revealing themselves only to those they trust deeply." },
            { q: "How do Scorpios handle challenges?", a: "With fearless determination and resilience, seeing them as opportunities for transformation." },
            { q: "What is Scorpio's approach to love?", a: "It is an all-consuming experience seeking deep emotional and spiritual unity." },
            { q: "What are their biggest strengths?", a: "Focus, courage, loyalty, ambition, and intense passion." }
        ],

        luckyFactors: {
            birthstones: ["Topaz", "Citrine"],
            stones: ["Red Coral"],
            metals: ["Iron", "Steel"],
            day: "Tuesday",
            numbers: "1, 8, 9",
            colors: "Scarlet, Red, Rust"
        },

        preferences: {
            loves: ["Truth and authenticity", "Meaningful connections", "Control and independence", "Uncovering mysteries"],
            dislikes: ["Dishonesty and betrayal", "Superficiality", "Being controlled", "Laziness"]
        },

        lifeInsights: {
            need: "Emotional security and transformation",
            goal: "To transform pain into power and find deep truth",
            motto: "I desire",
            balance: "Intensity and vulnerability"
        }
    },
    {
        id: "sagittarius",
        name: "Sagittarius",
        sanskritName: "Dhanu",
        meaning: "The Archer",
        dates: "Nov 22 - Dec 21",
        element: "Fire",
        nature: "Fire • Mutable • Positive",
        rulingPlanet: "Jupiter",
        rulingHouse: "Ninth House",
        luckyDays: ["Thursday", "Sunday", "Tuesday"],
        symbol: "The Archer",
        strengths: ["Adventurous and optimistic", "Sincere and truthful", "Philosophical and intellectual", "Large-hearted and generous", "Independent and energetic"],
        weaknesses: ["Blunt and insensitive", "Overconfident", "Unpredictable and inconsistent", "Restless", "Impulsive"],
        traits: "Sagittarius is the ninth sign of the zodiac and is widely known for its adventurous spirit, philosophical mindset, and boundless optimism. Represented by the Archer, this sign symbolizes a constant aim towards higher knowledge, truth, and exploration.",
        compatibility: ["Aries", "Gemini", "Leo", "Aquarius"],
        luckyNumber: "3, 12, 21, 30",
        luckyColor: "Yellow, Yellow-Orange, Violet, Purple",
        luckyStone: "Yellow Sapphire, Yellow Topaz, Amethyst",
        career: "Sagittarians thrive in careers that involve travel, communication, and exploration. They excel as teachers, philosophers, and motivational speakers.",
        love: "Sagittarius approaches love with a free spirit and an open heart. They value connection and communication, seeking liberating and adventurous partnerships.",
        health: "Sagittarius rules the hips, thighs, and liver. They should be mindful of over-indulgence and maintain an active lifestyle.",
        image: "/assets/image (22).png",

        fullGuide: "Sagittarius is the ninth sign of the zodiac and is widely known for its adventurous spirit, philosophical mindset, and boundless optimism. Represented by the Archer, this sign symbolizes a constant aim towards higher knowledge, truth, and exploration. The dual nature of half-man and half-horse reflects both intellectual wisdom and a strong instinct for freedom and movement. Ruled by Jupiter, the planet of expansion, wisdom, and abundance, Sagittarius individuals are naturally inclined towards growth—whether it is mental, spiritual, or physical. You are someone who seeks meaning in life and constantly looks beyond the obvious. You are not satisfied with surface-level understanding; instead, you aim to explore deeper truths and broader perspectives. Your deepest need is mental expansion. You are always seeking knowledge, truth, and experiences that broaden your understanding of life. From an astrological perspective, Sagittarius is associated with specific anatomical regions of the body. It governs the sacrum, hips, thighs, and the sciatic nerve, which supports movement and mobility. This connection further emphasizes your natural inclination towards activity, travel, and physical exploration.",

        natureDetails: {
            title: "Sagittarius Nature: Personality, Traits, Behavior & Lifestyle",
            introduction: "Sagittarius, the 9th sign of the zodiac, is symbolised by a Centaur—half human and half horse. This unique symbol reflects your dual nature: wisdom and intellect paired with instinctive, freedom-loving tendencies.",
            drive: "The human part of the Centaur holds a bow and arrow pointing upwards, signifying your constant aim towards higher knowledge, truth, and purpose. You refuse to get weighed down by difficulties.",
            impulsive: "At your core, you are highly active and energetic. You love open spaces, outdoor adventures, and physical activities. However, your restless energy can sometimes make it difficult to stay focused on one thing for long.",
            planetImpact: "Jupiter, the ruling planet, symbolizes expansion, growth, and wisdom. It encourages you to live freely, embrace life as it comes, and have faith in something greater than yourself.",
            houseImpact: "The Ninth House represents long-distance travel, higher education, philosophy, and exploration. It expands your horizons through exposure to new cultures and experiences.",
            lifestyle: "Being a Fire sign, you are full of energy, passion, and enthusiasm. You are spontaneous and often act on impulse, bringing positivity and excitement wherever you go.",
            famousPersonalities: ["Brad Pitt", "Britney Spears", "Bruce Lee", "Mark Twain", "Winston Churchill", "Beethoven", "Dilip Kumar", "John Abraham", "Tamannaah Bhatia"],
            image: "/assets/image (22).png"
        },

        traitsDetails: {
            introduction: "Sagittarius individuals carry one of the most vibrant and adventurous personalities in the zodiac. You are big-hearted, free-spirited, and naturally driven to explore life without limits.",
            positive: [
                { title: "Smart", text: "You are intelligent and forward-thinking, with the ability to see possibilities where others may not. Your strategic moves make you difficult to outsmart." },
                { title: "Caring", text: "You care deeply about people, often giving more than you receive. Your actions speak louder than words." },
                { title: "Deep", text: "Despite your fun-loving personality, you are a deep thinker who seeks to understand situations from a broader perspective." },
                { title: "Honest", text: "Honesty is your strongest trait. You believe in speaking the truth, providing transparency in all your dealings." },
                { title: "Wild", text: "As the 'wild child' of the zodiac, you are independent and full of life, with a contagious energy for adventure." }
            ],
            negative: [
                { title: "Impatience", text: "You dislike delays and can become restless and irritable when things don't happen quickly." },
                { title: "Careless", text: "Your spontaneous nature can lead to taking risks without considering consequences, occasionally resulting in mistakes." },
                { title: "Boastful", text: "Your confidence can sometimes turn into exaggeration, making you appear boastful to others." },
                { title: "Attention-Seeking", text: "You enjoy being noticed and may sometimes go out of your way to gain unnecessary appreciation." },
                { title: "Brutal", text: "Your honesty can become too intense during emotional moments, leading you to say things that leave a lasting impact." }
            ]
        },

        healthDetails: {
            overview: "Sagittarius individuals are blessed with strong physical vitality. However, the biggest challenge lies in over-indulgence, which can strain sensitive areas like the liver.",
            concerns: [
                "Liver strain and hepatic issues from overindulgence",
                "Sciatica and muscle strains in hips and thighs",
                "Ligament injuries from physical activity",
                "Fatigue or burnout from an overly active lifestyle",
                "Digestive disturbances from irregular eating habits"
            ],
            diet: [
                "Beets, tomatoes, and green vegetables",
                "Fruits like plums, apples, strawberries, and cherries",
                "Oats and whole grains",
                "Protein sources like chicken and fish",
                "Dates, prunes, and corn for essential nutrients"
            ],
            avoid: [
                "Excessive alcohol (impacts the liver)",
                "Smoking and heavy toxins",
                "Skipping meals or eating at odd hours",
                "Risky behavior leading to accidents"
            ],
            fitness: [
                "Outdoor adventures and physical sports",
                "Deep breathing and meditation for mental calmness",
                "Proper care for hips and thighs during activity",
                "Consistent hydration for detoxification"
            ],
            appearance: [
                "Tall and well-built physical structure",
                "Bright, expressive eyes and thick hair",
                "Cheerful appearance and pleasant voice",
                "Long limbs and distinct facial features"
            ],
            beauty: [
                "Casual, practical, and effortless style",
                "Preference for comfort and freedom of movement",
                "Flattering styles like fitted jeans or sportswear",
                "Vibrant colors like light purple"
            ],
            image: "/assets/image (22).png"
        },

        loveDetails: {
            philosophy: "Declaration: I aim for higher truths in connection. Key Phrase: I understand",
            lessonsGiven: ["Passion", "Emotional depth", "Raw intensity", "Complete surrender"],
            lessonsNeeded: ["Consistency", "Commitment", "Understanding boundaries", "Emotional depth"],
            personality: "You approach love with a free spirit and an open heart. For you, love is about connection, communication, and exploration—it should feel liberating, not restrictive.",
            trust: "Trust is built through honesty and transparency. You seek a partner who is intellectual, expressive, and respects your independence.",
            whenInLove: [
                "Bring joy, excitement, and adventure",
                "Seek deep emotional and spiritual unity",
                "Express affection openly and enthusiastically",
                "Provide unwavering loyalty once committed",
                "Encourage mutual growth and exploration"
            ],
            challenges: [
                "Maintaining consistency when routine sets in",
                "Fear of emotional confinement or restriction",
                "Blunt communication causing misunderstandings",
                "Lost in thoughts or idealist dream worlds"
            ],
            image: "/assets/image (22).png"
        },

        careerDetails: {
            mantra: "Growth lies in exploration and new perspectives",
            strengths: [
                "Big-picture thinking and strategic planning",
                "Motivational energy and leadership",
                "Networking and building social connections",
                "Determination to fulfill responsibilities"
            ],
            skillsNeeded: ["Discipline and consistency", "Attention to detail", "Managing ego and temper"],
            path: "Sagittarians thrive in dynamic, exciting careers that offer variety and travel. You excel in communication-based and inspirational roles.",
            style: "Energetic, social, and opportunity-driven. You prefer a healthy work environment that allows freedom and flexibility.",
            bestOptions: [
                "Travel Writer / Guide / Pilot",
                "Motivational Speaker / Teacher / Philosopher",
                "HR Manager / Social Worker / Counselor",
                "Politician / Activist / Marketing Professional"
            ],
            finance: [
                "Serious about earning and management",
                "Inclination towards independence in money matters",
                "Discipline to save for future security",
                "Occasional impulsive spending on experiences"
            ]
        },

        relationshipDetails: {
            overview: "Sagittarians bring joy and adventure into relationships. They value intellectual connection and personal independence.",
            lover: "Jovial and open-hearted. Seeks experimental and liberating partnerships.",
            friend: "Loyal and energetic favorite. Always ready to lift others' spirits.",
            colleague: "Approachable and positive. Strategic thinker who motivates the team.",
            boss: "Supportive leader. Creates a free and enjoyable work culture based on trust.",
            parent: {
                father: "Friendly and patient. Builds bonds through trust and open communication.",
                mother: "Caring and balanced. Acts as a mediator and ensures a harmonious environment."
            },
            child: "Charming and social. Acts as a mediator among peers but may take time with decisions.",
            husband: "Romantic and devoted. Prioritizes partner's happiness and avoids conflict.",
            wife: "Graceful and emotionally intelligent. Committed to maintaining a balanced and exciting family life."
        },

        manDetails: "A Sagittarius man carries a bright and optimistic outlook. He is a natural explorer who thrives on movement and discovery. Truthful and philosophical, he values honesty but can be blunt. In love, he is fun and generous, seeking a partner who respects his need for freedom and intellectual engagement.",
        womanDetails: "A Sagittarius woman is truthful, idealistic, and blessed with humor. She prefers learning through experience and values her independence deeply. Intelligent and broad-minded, she is a resourceful leader. In relationships, she is reliable and responsible, though her need for freedom is non-negotiable.",
        moonDetails: "Individuals with Moon in Sagittarius are naturally positive and freedom-loving. You have a 'happy-go-lucky' attitude and thrive in open spaces. Emotionally satisfied by travel and learning, you face challenges with courage. However, your impulsive nature and need for change can bring restlessness.",
        
        howToIdentify: "Sagittarius personalities are identified by their cheerful energy and athletic, well-built presence. They often have bright, expressive eyes and a pleasant, captivating voice. You'll notice their love for casual, comfortable fashion and their tendency to be the life of any social circle with their wit and optimism.",

        funFacts: [
            "Motto: 'I seek truth through exploration and experience.'",
            "Pet Peeve: Dishonesty, routine, and being controlled or restricted.",
            "Loves: Outdoor adventures, solo travel, and deep philosophical debates.",
            "Special Skill: Turning the most boring moments into something enjoyable.",
            "Fact: Known as the 'wild child' of the zodiac for their untamed spirit.",
            "Mindset: 'Mental expansion is my deepest inner need.'"
        ],

        faqs: [
            { q: "What defines Sagittarius's nature?", a: "Optimism, adventure, and a constant quest for higher knowledge and truth." },
            { q: "How does Jupiter influence Sagittarius?", a: "It brings expansion, growth, and wisdom, making them naturally hopeful and growth-oriented." },
            { q: "What are their biggest strengths?", a: "Sincerity, intelligence, resilience, and an energetic, positive outlook." },
            { q: "What challenges do they face in love?", a: "Balancing their need for independence with emotional commitment and consistency." },
            { q: "What careers suit them best?", a: "Any role involving travel, communication, and a dynamic, non-monotonous environment." }
        ],

        luckyFactors: {
            birthstones: ["Yellow Sapphire", "Yellow Topaz"],
            stones: ["Amethyst"],
            metals: ["Tin"],
            day: "Thursday",
            numbers: "3, 12, 21, 30",
            colors: "Yellow, Yellow-Orange, Violet, Purple"
        },

        preferences: {
            loves: ["Freedom and travel", "Intellectual challenges", "Open spaces and nature", "Truth and transparency"],
            dislikes: ["Monotony and routine", "Dishonesty", "Being underestimated", "Emotional confinement"]
        },

        lifeInsights: {
            need: "Mental expansion and freedom",
            goal: "To discover higher meaning and broader perspectives",
            motto: "I understand",
            balance: "Independence and emotional depth"
        }
    },
    {
        id: "capricorn",
        name: "Capricorn",
        sanskritName: "Makara",
        meaning: "The Goat",
        dates: "Dec 22 - Jan 19",
        element: "Earth",
        nature: "Earth • Cardinal • Negative",
        rulingPlanet: "Saturn",
        rulingHouse: "Tenth House",
        luckyDays: ["Saturday", "Friday", "Monday"],
        symbol: "The Goat",
        strengths: ["Hardworking and sincere", "Disciplined and persistent", "Wise and reliable", "Loyal and caring", "Resourceful and patient"],
        weaknesses: ["Emotionally guarded", "Overly serious or rigid", "Critical and unforgiving", "Self-centered at times", "Pessimistic"],
        traits: "Capricorn, represented by the steadily climbing Mountain Goat, is the 10th sign of the zodiac. This sign symbolizes ambition, perseverance, and a relentless drive toward success, moving forward no matter how steep the path.",
        compatibility: ["Taurus", "Virgo", "Pisces", "Cancer"],
        luckyNumber: "1, 4, 8, 10, 13, 17, 19, 22, 26",
        luckyColor: "Brown, Steel, Grey, Black",
        luckyStone: "Dark Sapphire",
        career: "Capricorns are highly career-driven and excel in structured environments. They thrive in finance, management, law, and administrative roles.",
        love: "For Capricorn, love is about commitment, stability, and long-term security. They take relationships seriously and prioritize building a secure future.",
        health: "Capricorn rules the knees, bones, and joints. They generally enjoy strong longevity but should be mindful of joint health and internal balance.",
        image: "/assets/image (23).png",

        fullGuide: "Capricorn, represented by the steadily climbing Mountain Goat, is the 10th sign of the zodiac. This sign symbolizes ambition, perseverance, and a relentless drive toward success. You are someone who keeps moving forward, no matter how steep the path may seem. Capricorn is deeply connected with responsibility, discipline, and the practical side of life. You are naturally inclined toward building a stable and secure future through consistent effort and dedication. Ruled by Saturn, the planet of discipline, structure, and delayed rewards, your journey is unique—your true potential often unfolds over time, especially after your late 20s or early 30s. Every step you take is calculated and aligned with your long-term vision.",

        natureDetails: {
            title: "Capricorn Nature: Personality, Behavior & Lifestyle",
            introduction: "The symbol of your sign is the Goat, reflecting a constant desire to climb higher and achieve more. You are self-confident and naturally set high goals for yourself.",
            drive: "Like a mountain goat, you have a relentless drive to rise in every aspect of life. Recognition and respect for your capabilities bring you deep satisfaction.",
            impulsive: "Every step you take is carefully planned. While you appear calm and composed on the surface, there is a deep emotional layer within that you guard carefully.",
            planetImpact: "Saturn, your ruler, governs discipline, responsibility, and karma. It teaches you the importance of patience and ensures you receive exactly what you deserve through sincere effort.",
            houseImpact: "The Tenth House shapes your professional life and social standing, driving your desire for recognition, authority, and respect in society.",
            lifestyle: "As an Earth sign, you believe in practicality and tangible results. You prefer planning everything in advance and dislike spontaneity, striving for realism over imagination.",
            famousPersonalities: ["Marilyn Monroe", "Elvis Presley", "Sir Isaac Newton", "Benjamin Franklin", "Denzel Washington", "Mohammed Rafi", "Mansur Ali Khan Pataudi", "Deepika Padukone", "Salman Khan", "Hrithik Roshan"],
            image: "/assets/image (23).png"
        },

        traitsDetails: {
            introduction: "Capricorns are among the most powerful and resourceful personalities in the zodiac. Driven by success, they are focused on building a secure and prosperous future.",
            positive: [
                { title: "Loyal", text: "You are deeply loyal and stand by your loved ones through all circumstances. Your dependability makes you a trustworthy companion." },
                { title: "Hardworking", text: "You believe success comes through consistent effort and do not shy away from the extra work required to achieve your goals." },
                { title: "Classy", text: "You carry a natural sense of elegance and sophistication, preferring refined personality traits over passing trends." },
                { title: "Ambitious", text: "Constantly striving for growth, you set high standards and work relentlessly to build a better future." },
                { title: "Reliable", text: "As a team player, you bring stability and structure to any group, ensuring productivity through your committed presence." }
            ],
            negative: [
                { title: "Overly Serious", text: "Your strong sense of responsibility can make you seem rigid or distant, occasionally creating an impression that you lack a fun-loving side." },
                { title: "Critical", text: "You tend to be critical when others do not meet your high standards, which can put pressure on your relationships." },
                { title: "Emotionally Guarded", text: "You may experience emotional heaviness or melancholy, often withdrawing rather than expressing your needs openly." },
                { title: "Unforgiving", text: "Once hurt or disappointed, you find it difficult to forget or forgive, especially if you perceive a lack of sincerity." },
                { title: "Suspicious", text: "A cautious mindset makes you suspicious when situations seem too perfect, which can lead to trust issues." }
            ]
        },

        healthDetails: {
            overview: "Capricorn natives generally enjoy good resistance to ailments and tend to grow healthier and stronger with age, aging with resilience and grace.",
            concerns: [
                "Bones and joints, particularly the knees and skeletal system",
                "Arthritis and joint-related discomfort",
                "Kidney stones and digestive disturbances",
                "Skin disorders such as shingles or eczema",
                "Stress-related melancholy or depression"
            ],
            diet: [
                "Calcium-rich foods like milk and almonds",
                "Leafy greens such as spinach",
                "Citrus fruits and figs for essential vitamins",
                "Whole grains, cereals, and brown rice",
                "Protein sources like fish and eggs"
            ],
            avoid: [
                "Excessive consumption of alcohol",
                "Rich, heavy, and overly processed foods",
                "Overworking without adequate rest",
                "Monotony in dietary habits"
            ],
            fitness: [
                "Consistent routine with proper meals and sleep",
                "Activities that strengthen bones and joints",
                "Mental relaxation techniques for emotional balance",
                "Avoiding overcommitment to professional duties"
            ],
            appearance: [
                "Balanced physical structure with smooth skin",
                "Composed, serious facial expression and maturity",
                "Deep, thoughtful eyes and prominent eyebrows",
                "Unique features like a thin upper lip and well-shaped chin"
            ],
            beauty: [
                "Refined and elegant style with body-hugging fits",
                "Anti-aging skincare, especially for the neck area",
                "Regular grooming and polished pedicures",
                "Sophisticated colors like glossy brown and coordinated nails"
            ],
            image: "/assets/image (23).png"
        },

        loveDetails: {
            philosophy: "Declaration: I build for eternity. Key Phrase: I use",
            lessonsGiven: ["Commitment", "Loyalty", "Long-term vision", "Supportive partnership"],
            lessonsNeeded: ["Work-life balance", "Flexibility", "Delegation", "Emotional expression"],
            personality: "For you, love is a commitment that combines emotional connection, physical satisfaction, and long-term security. You seek meaningful, lasting bonds over casual attractions.",
            trust: "Trust is built through sincerity and consistency. You value mature, successful partners who appreciate your grounded nature.",
            whenInLove: [
                "Become deeply committed and dependable",
                "Invest in building a stable future together",
                "Express love through meaningful actions and support",
                "Reveal a warm, loyal, and subtly playful side",
                "Prioritize family and long-term harmony"
            ],
            challenges: [
                "Guarding emotions behind a protective shield",
                "Prioritizing duty and responsibility over expression",
                "Appearing cold or emotionally distant initially",
                "Acting selfishly or rigidly under pressure"
            ],
            image: "/assets/image (23).png"
        },

        careerDetails: {
            mantra: "I build, I rise, and I achieve.",
            strengths: [
                "Discipline and long-term planning",
                "Reliability and consistent high standards",
                "Leadership by example and practical strategy",
                "Creation of stable and efficient systems"
            ],
            skillsNeeded: ["Work-life balance", "Delegating control", "Flexibility and emotional expression"],
            path: "Capricorns treat careers as lifelong missions. You excel in structured, strategic roles that contribute to something meaningful.",
            style: "Serious, focused, and result-oriented. You lead with a calm, practical demeanor and expect excellence.",
            bestOptions: [
                "Finance / Banking / Accounting",
                "Corporate Management / Law / Administration",
                "Science / Medicine / Research",
                "Media Production / Advertising / Arts Organization"
            ],
            finance: [
                "Cautious and strategic financial management",
                "Excellence at saving and long-term investing",
                "Preference for future security over impulsive spending",
                "Focus on building a solid material foundation"
            ]
        },

        relationshipDetails: {
            overview: "Capricorns approach relationships with maturity. They view connections as long-term investments requiring patience and trust.",
            lover: "Slow, steady, and action-oriented. Values loyalty and long-term security.",
            friend: "Selective but committed for life. Loyal supporter who values deep connections.",
            colleague: "Professional and focused. Backbone of the team who avoids office gossip.",
            boss: "Strict and result-oriented. Expects efficiency and continuous skill development.",
            parent: {
                father: "Friendly and patient. Builds bonds through trust and open communication.",
                mother: "Caring and balanced. Acts as a mediator and ensures a harmonious environment."
            },
            child: "Charming and social. Acts as a mediator among peers but may take time with decisions.",
            husband: "Conservative and protective. Values a simple, meaningful life and stable family bond.",
            wife: "Goal-oriented and practical. Balances responsibilities with a focus on security."
        },

        manDetails: "A Capricorn man is naturally conservative and prefers rules and structure. He builds a protective shield to safeguard his deep inner world. He values logic and simplicity, channelling energy into realistic pursuits. In love, he is serious and intentional, seeking intelligence and integrity over superficial attraction.",
        womanDetails: "A Capricorn woman is defined by simplicity, determination, and a goal-oriented mindset. She relies on logic and practicality rather than fantasies. She values security and progress, balancing traditions with an open mind. In relationships, she is a supportive, independent partner who respects fairness and principled living.",
        moonDetails: "Individuals with Moon in Capricorn have a deep inner need to stay productive and purposeful. You possess a feminine, practical energy ruled by Saturn. You analyze situations carefully and avoid unnecessary risks. While emotionally reserved, you are highly self-aware and strive for excellence and respect.",
        
        howToIdentify: "Capricorns are identified by their composed, mature aura and disciplined presence. They often have deep, thoughtful eyes, smooth skin, and a serious facial expression. You'll notice their preference for elegant, simple grooming and their tendency to be the dependable 'rock' in any professional or social circle.",

        funFacts: [
            "Motto: 'I build, I rise, and I achieve.'",
            "Pet Peeve: Laziness, shortcuts, and lack of discipline in others.",
            "Loves: Stability, long-term planning, and traditional values.",
            "Special Skill: Aging backward—growing more lively and expressive as they grow older.",
            "Fact: Known as the 'iceberg' sign because their true depth lies beneath the surface.",
            "Mindset: 'Security and respect are my ultimate priorities.'"
        ],

        faqs: [
            { q: "What defines Capricorn's core nature?", a: "Ambition, discipline, and a relentless drive to climb toward success." },
            { q: "How does Saturn influence Capricorn?", a: "It teaches patience and rewards hard work, ensuring success comes through consistent effort." },
            { q: "What are their biggest strengths?", a: "Reliability, wisdom, determination, and deep-rooted loyalty." },
            { q: "What challenges do they face in relationships?", a: "Balancing their serious, disciplined nature with emotional openness and expression." },
            { q: "What careers suit them best?", a: "Finance, law, research, and corporate management where structure and planning are key." }
        ],

        luckyFactors: {
            birthstones: ["Dark Sapphire"],
            stones: ["Dark Sapphire"],
            metals: ["Iron", "Lead"],
            day: "Saturday",
            numbers: "1, 4, 8, 10, 13, 17, 19, 22, 26",
            colors: "Brown, Steel, Grey, Black"
        },

        preferences: {
            loves: ["Stable future", "Quality and productivity", "Tradition and structure", "Recognition and respect"],
            dislikes: ["Shortcuts", "Recklessness", "Emotional drama", "Instability"]
        },

        lifeInsights: {
            need: "Security and purposeful achievement",
            goal: "To build a stable and respected legacy",
            motto: "I use",
            balance: "Ambition and emotional openness"
        }
    },
    {
        id: "aquarius",
        name: "Aquarius",
        sanskritName: "Kumbha",
        meaning: "The Water-Bearer",
        dates: "Jan 20 - Feb 18",
        element: "Air",
        nature: "Air • Fixed • Positive",
        rulingPlanet: "Uranus, Saturn",
        rulingHouse: "Eleventh House",
        luckyDays: ["Saturday", "Sunday", "Tuesday", "Thursday"],
        symbol: "The Water-Bearer",
        strengths: ["Independent and innovative", "Humanitarian and compassionate", "Intellectual and visionary", "Open-minded and creative", "Amiable and social"],
        weaknesses: ["Emotionally detached", "Unpredictable or impulsive", "Stubborn in opinions", "Inconsistent at times", "Sensitive to criticism"],
        traits: "Aquarius represents humanity, innovation, and forward-thinking vision. Known for their rebellious spirit and intellectual brilliance, they seek to break limitations and explore new-age concepts.",
        compatibility: ["Gemini", "Libra", "Sagittarius", "Aries"],
        luckyNumber: "4, 8, 13, 17, 22, 26",
        luckyColor: "Blue, Blue-Green, Grey, Black",
        luckyStone: "Opal, Aquamarine",
        career: "Aquarians thrive in innovative fields like technology, research, social causes, and creative industries. They value independence and intellectual stimulation.",
        love: "Aquarius approaches love through intellectual bonding and shared vision. They value freedom and individuality, often building a strong friendship first.",
        health: "Aquarius rules the ankles, circulatory system, and nervous system. They should be mindful of stress, anxiety, and maintaining a balanced lifestyle.",
        image: "/assets/image (24).png",

        fullGuide: "Aquarius, the eleventh sign of the zodiac, represents humanity, innovation, and forward-thinking vision. Individuals born under this sign are naturally inclined towards modern ideas, independence, and freedom. They are deeply fascinated by new-age concepts and unconventional paths. Ruled by Uranus and Saturn, they balance innovation with structure. Their rebellious nature is about breaking limitations and exploring new possibilities. Aquarius natives are often seen as visionaries who possess a unique ability to see the bigger picture and often feel connected to a larger humanitarian purpose.",

        natureDetails: {
            title: "Aquarius Nature: Personality, Behavior & Lifestyle",
            introduction: "Aquarius carries a unique blend of sensitivity and independence. You are highly curious and naturally attract people with your intelligence and wit.",
            drive: "Your drive is centered on progress and originality. You challenge societal norms and stand up for freedom and equality.",
            impulsive: "Your thinking is often ahead of its time, which can make you unpredictable. You prefer stability but are driven by sudden shifts toward transformation.",
            planetImpact: "Uranus, your ruler, influences your tendency to think differently and embrace unexpected breakthroughs. Saturn provides the discipline to structure your innovative ideas.",
            houseImpact: "The Eleventh House represents your dreams, aspirations, and the support system of friendships that help you achieve an ideal future.",
            lifestyle: "As an Air sign, you prioritize intellect and communication. You rely on logic and reasoning, often valuing ideas and freedom more than material gains.",
            famousPersonalities: ["Subhash Chandra Bose", "Abraham Lincoln", "Charles Darwin", "Thomas Edison", "Albert Einstein", "Michael Jordan", "Oprah Winfrey", "Ellen DeGeneres", "Shakira", "Paris Hilton"],
            image: "/assets/image (24).png"
        },

        traitsDetails: {
            introduction: "Aquarians are known for their rebellious spirit, uniqueness, and intellectual brilliance. They often think far beyond traditional boundaries.",
            positive: [
                { title: "Open-Minded", text: "You are willing to explore new ideas and avoid judging situations prematurely, preferring independent thought." },
                { title: "Humanitarian", text: "Deeply compassionate and socially aware, you genuinely care about humanity and often lead societal improvements." },
                { title: "Creative", text: "Creativity flows naturally, and you set trends through unique ideas and innovative artistic pursuits." },
                { title: "Free-Spirited", text: "Freedom is essential; you resist restrictions and prefer to live life on your own terms, exploring new possibilities." },
                { title: "Intellectual", text: "You possess a sharp ability to understand complex concepts and enjoy engaging in deep, thought-provoking discussions." }
            ],
            negative: [
                { title: "Impulsive", text: "Driven by sudden ideas, you may act without fully considering the consequences or long-term impacts." },
                { title: "Unpredictable", text: "Your behavior can be inconsistent, making it difficult for others to anticipate your next move." },
                { title: "Stubborn", text: "Being a fixed sign, once you form an opinion, you can be very firm and resistant to changing your perspective." },
                { title: "Extremist", text: "You can experience reactions in extremes, ranging from intense positivity to deep frustration or total detachment." },
                { title: "Emotionally Detached", text: "An invisible barrier can sometimes make you seem aloof or insensitive to those seeking a deeper emotional connection." }
            ]
        },

        healthDetails: {
            overview: "Aquarius natives generally have a delicate bone structure and a sensitive nervous system. They are aware of fitness but may struggle with consistency.",
            concerns: [
                "Weakness in ankles and lower legs (fractures)",
                "Nervous system issues like stress, anxiety, and insomnia",
                "Circulatory system and blood pressure stability",
                "Heart, backbone, and bladder sensitivities",
                "Mental fatigue from overthinking"
            ],
            diet: [
                "Circulation-supporting foods like walnuts and ocean fish",
                "Fresh fruits such as pears, oranges, apples, and grapefruit",
                "Vegetables like radishes, corn, lettuce, and spinach",
                "Nuts, seeds, and protein sources like tuna and clams",
                "Herbal teas to replace excessive caffeine"
            ],
            avoid: [
                "Excessive intake of sweets and carbonated drinks",
                "Processed or junk foods that affect blood sugar",
                "High caffeine consumption (triggers restlessness)",
                "Addictive habits and unhealthy escapism"
            ],
            fitness: [
                "Consistent routine to manage mental fatigue",
                "Emotional balance techniques for the nervous system",
                "Physical activities that don't strain delicate bones",
                "Regular sleep patterns to combat insomnia"
            ],
            appearance: [
                "Slim and tall body structure with a distinct presence",
                "Sharp facial features and a well-defined nose",
                "Dark, thick hair and sparkling, intelligent eyes",
                "Short and thick neck in proportion to the body",
                "Subtle, charming smile with possible dimples"
            ],
            beauty: [
                "Simple and unique style that prioritizes comfort",
                "Experimental hairstyles and retro-inspired fashion",
                "Fluorescent green as a lucky and personality-enhancing color",
                "Practical outfits that allow freedom of movement"
            ],
            image: "/assets/image (24).png"
        },

        loveDetails: {
            philosophy: "Declaration: I Experiment. Key Phrase: I know",
            lessonsGiven: ["Patience and tolerance", "Acceptance of differences", "Positivity in challenges", "Supportive partnership"],
            lessonsNeeded: ["Emotional connection over logic", "Vulnerability and surrender", "Balancing independence with availability"],
            personality: "For you, romance is about ideas and connection. You value freedom and intellectual bonding more than traditional romance, often building a strong friendship first.",
            trust: "Trust is built through intellectual compatibility and honesty. You seek partners who respect your space and individuality.",
            whenInLove: [
                "Express care through actions and thoughtful gestures",
                "Encourage your partner's growth and learning",
                "Value quality time and shared visionary experiences",
                "Maintain your individuality within the relationship",
                "Become a loyal, communicative, and fun companion"
            ],
            challenges: [
                "Confusing friendship with romantic feelings",
                "Prioritizing abstract goals over emotional needs",
                "Withdrawing when faced with emotional complications",
                "Appearing absent-minded or detached to your partner"
            ],
            image: "/assets/image (24).png"
        },

        careerDetails: {
            mantra: "I innovate, I lead, and I transform.",
            strengths: [
                "Forward-thinking and original ideas",
                "Strong analytical and problem-solving skills",
                "Humanitarian drive and visionary mindset",
                "Excellence in technology and discovery"
            ],
            skillsNeeded: ["Teamwork patience", "Detailed focus", "Clearer communication of abstract ideas"],
            path: "Aquarians are not made for routine. You excel in careers that offer flexibility, intellectual challenge, and a chance to lead change.",
            style: "Approachable, fair, and progressive. You lead by giving trust and space to others, focusing on meaningful results.",
            bestOptions: [
                "Science / Research / Engineering",
                "Technology / Digital Innovation",
                "Sociology / Social Work / Public Service",
                "Astrology / Psychology / Advanced Sciences",
                "Creative Writing / Design / Media"
            ],
            finance: [
                "Tool for lifestyle and aspirations rather than a goal",
                "Investing in innovative ideas or start-ups",
                "Prioritizing purpose over financial gain",
                "Strategic but unconventional financial planning"
            ]
        },

        relationshipDetails: {
            overview: "Aquarius seeks mental stimulation. Relationships are built on the foundation of freedom, honesty, and individuality.",
            lover: "Intellectual, open-minded, and unique. Expresses love through care and shared growth.",
            friend: "Strongest area. Loyal, supportive, and offers practical solutions to problems.",
            colleague: "Innovative and independent. Thrives in environments where norms can be questioned.",
            boss: "Approachable and fair. Encourages creativity and trusts employees with freedom.",
            parent: {
                father: "Friendly and progressive. Builds bonds based on friendship rather than authority.",
                mother: "Nurturing yet unconventional. Encourages early independence and confidence."
            },
            child: "Obedient yet freedom-loving. Respectful, independent, and emotionally self-sufficient.",
            husband: "Polite and witty. Multitasks between mental engagement and family support.",
            wife: "Smart and independent. Balances her strong inner power with social friendliness."
        },

        manDetails: "An Aquarius man is intelligent, determined, and driven by a desire to understand the truth. He is naturally curious and often multitasking between intellectual challenges. Polite and soft-spoken, he is a non-conformist who isn't afraid to challenge societal norms. He values independence and can be highly unpredictable in his interests.",
        womanDetails: "An Aquarius woman walks her own path, defined by intelligence and independent power. She relies on logic and honesty, respecting others' opinions but never compromising her beliefs. She is a compassionate leader who guides rather than controls, valuing privacy and living on her own terms.",
        moonDetails: "Individuals with Moon in Aquarius have an emotional world shaped by logic and observation. You are a deep thinker fascinated by human behavior. While socially active, you carry a strong sense of individuality and prioritize logic over emotional expression, needing acceptance for your unique habits.",
        
        howToIdentify: "Aquarians are identified by their tall, slim physique and sharp facial features. They often have a composed aura, intelligent, sparkling eyes, and a clear, articulate voice. You'll notice their preference for comfortable, unconventional styles and their ability to stay calm while being intellectually engaging in any crowd.",

        funFacts: [
            "Motto: 'Break the rules and find the truth.'",
            "Pet Peeve: Feeling stuck, traffic, and restrictive environments.",
            "Loves: Humanitarian causes, new gadgets, and intellectual debates.",
            "Special Skill: Visionary thinking—seeing trends before they happen.",
            "Fact: Known as the 'Water Bearer' but is actually an Air sign.",
            "Mindset: 'My independence is my identity.'"
        ],

        faqs: [
            { q: "What defines Aquarius's core nature?", a: "Independence, innovation, and a visionary mindset focused on humanity." },
            { q: "How does Uranus influence Aquarius?", a: "It drives originality, sudden breakthroughs, and the urge to challenge norms." },
            { q: "What are their biggest strengths?", a: "Intellectual brilliance, creativity, humanitarian compassion, and open-mindedness." },
            { q: "What challenges do they face in love?", a: "Balancing logic with emotional vulnerability and maintaining intimacy while preserving freedom." },
            { q: "What careers suit them best?", a: "Technology, social work, science, research, and any role involving innovation and social impact." }
        ],

        luckyFactors: {
            birthstones: ["Opal", "Aquamarine"],
            stones: ["Opal", "Aquamarine"],
            metals: ["Uranium", "Aluminum"],
            day: "Saturday, Sunday",
            numbers: "4, 8, 13, 17, 22, 26",
            colors: "Blue, Blue-Green, Grey, Black"
        },

        preferences: {
            loves: ["Modern ideas", "Independence and freedom", "Intellectual challenges", "Humanitarian causes"],
            dislikes: ["Restrictions", "Routine and repetition", "Emotional drama", "Inequality"]
        },

        lifeInsights: {
            need: "Independence and intellectual growth",
            goal: "To contribute to a better, more innovative world",
            motto: "I know",
            balance: "Logic and emotional availability"
        }
    },
    {
        id: "pisces",
        name: "Pisces",
        sanskritName: "Meena",
        meaning: "The Fish",
        dates: "Feb 19 - Mar 20",
        element: "Water",
        nature: "Water • Mutable • Negative",
        rulingPlanet: "Neptune, Jupiter",
        rulingHouse: "Twelfth House",
        luckyDays: ["Thursday", "Monday", "Sunday"],
        symbol: "The Fish",
        strengths: ["Compassionate and caring", "Creative and artistic", "Loyal and loving", "Highly intuitive", "Peace-loving and gentle"],
        weaknesses: ["Overly sensitive", "Escapism/Avoidance of reality", "Passive and indecisive", "Easily taken for granted", "Moody at times"],
        traits: "Pisces, represented by two fish swimming in opposite directions, symbolizes duality, depth, and emotional complexity. As the final sign, it carries the wisdom and qualities of all previous eleven signs.",
        compatibility: ["Scorpio", "Cancer", "Taurus", "Capricorn"],
        luckyNumber: "3, 7, 12, 16, 21, 25, 30, 34, 43",
        luckyColor: "Mauve, Lilac, Violet, Sea green",
        luckyStone: "Pearl, Emerald, Coral, Beruz",
        career: "Pisces thrive in creative and compassionate fields like art, music, writing, counseling, and healing. They value meaning and purpose over mere financial gain.",
        love: "For Pisces, love is a spiritual surrender and soulful connection. They are deeply romantic, loyal, and giving, often prioritizing their partner's happiness above their own.",
        health: "Pisces rules the feet, respiratory system, and circulation. They have a delicate physical structure and their health is closely linked to their emotional state.",
        image: "/assets/image (25).png",

        fullGuide: "Pisces, known as Meena in Vedic astrology, is the 12th and final sign of the zodiac. Represented by two fish swimming in opposite directions, Pisces symbolizes duality, depth, and emotional complexity. Being the last sign, Pisces is believed to carry qualities of all the previous eleven zodiac signs. This makes them one of the most intuitive, compassionate, and emotionally rich personalities in astrology. Ruled by Neptune and Jupiter, they possess a strong spiritual inclination and a deep inner world shaped by dreams and higher consciousness.",

        natureDetails: {
            title: "Pisces Nature: Personality, Strengths & Emotional Depth",
            introduction: "Pisces individuals are natural dreamers who view life through a creative and emotional lens. You carry a unique mix of softness and strength.",
            drive: "Your drive is centered on inner peace, emotional healing, and understanding life beyond the material world.",
            impulsive: "Your emotions are constantly shifting like water. While generally gentle, you can become overwhelmed by your own deep feelings.",
            planetImpact: "Neptune connects you to imagination and spirituality, while Jupiter brings wisdom, growth, and a desire for higher learning.",
            houseImpact: "The Twelfth House represents the subconscious, spiritual liberation, and the unseen layers of life that you navigate intuitively.",
            lifestyle: "You prefer a calm, secure, and comforting environment. You value soulful connections, creativity, and spiritual awareness more than status.",
            famousPersonalities: ["Michelangelo", "Elizabeth Taylor", "Oprah Winfrey", "Bruce Willis", "George Washington", "Jon Bon Jovi", "Albert Einstein", "Rihanna", "Justin Bieber", "Drew Barrymore"],
            image: "/assets/image (25).png"
        },

        traitsDetails: {
            introduction: "Pisces is deeply connected to emotions and imagination. You possess a quiet depth that makes you both compassionate and introspective.",
            positive: [
                { title: "Compassionate", text: "You are deeply empathetic, often feeling others' pain and going out of your way to help those in need." },
                { title: "Creative", text: "Your vivid imagination allows you to excel in arts, music, and writing, seeing beauty where others may not." },
                { title: "Loyal", text: "In relationships, you give wholeheartedly, prioritizing emotional connection and absolute devotion." },
                { title: "Intuitive", text: "You rely on your 'sixth sense' to navigate people and situations with surprising accuracy, sensing things others miss." },
                { title: "Peace-Loving", text: "You strive for harmony and avoid conflict, creating a comforting and gentle presence for those around you." }
            ],
            negative: [
                { title: "Overly Sensitive", text: "Your emotional nature means you can be easily hurt by careless words or broken promises." },
                { title: "Escapist", text: "When faced with difficult realities, you may withdraw into fantasies or dreams rather than confronting problems." },
                { title: "Indecisive", text: "Reluctance to confront issues can lead to inaction, leaving you caught between dreams and practical choices." },
                { title: "Moody", text: "You experience emotional highs and lows, often influenced by the emotional shifts of the environment around you." },
                { title: "Passive", text: "Your gentle nature can sometimes make you appear unmotivated or easily taken for granted by others." }
            ]
        },

        healthDetails: {
            overview: "Pisces natives have a delicate physical structure closely linked to their emotional well-being. Stress and anxiety directly impact their physical health.",
            concerns: [
                "Vulnerability in the feet (bunions, heel pain, fractures)",
                "Respiratory system and circulatory issues",
                "Rheumatism or swelling in lower limbs",
                "Insomnia and mental fatigue from emotional overload",
                "Susceptibility to addictive habits or overindulgence"
            ],
            diet: [
                "Foods supporting the blood, liver, and brain",
                "Fresh fruits like apples, grapes, and citrus fruits",
                "Leafy vegetables such as spinach and nutrient-rich greens",
                "Whole grains, cereals, and protein-rich options",
                "Low sodium intake to improve overall circulation"
            ],
            avoid: [
                "Excessive intake of salt and heavy processed foods",
                "Overeating during social gatherings or emotional stress",
                "Unhealthy addictions and irregular eating patterns",
                "Ignoring the need for proper rest and hydration"
            ],
            fitness: [
                "Meditation and yoga to restore emotional stability",
                "Spending time near water to calm the mind",
                "Light exercise and regular movement to improve circulation",
                "Maintaining a consistent routine to stay grounded"
            ],
            appearance: [
                "Average build, sometimes leaning toward a softer or fuller body type",
                "Large, expressive, and dreamy eyes (most striking feature)",
                "Mysterious, calm, and soulful overall appearance",
                "Graceful movements reflecting their fluid nature",
                "Distinctive features that give a look of quiet wisdom"
            ],
            beauty: [
                "Preference for comfort over trends with an effortless style",
                "Natural attraction to soft colors and comfortable fabrics",
                "Dressing sense that often varies with emotional mood",
                "Subtle beauty that lies in simplicity and mystery"
            ],
            image: "/assets/image (25).png"
        },

        loveDetails: {
            philosophy: "Declaration: I Believe. Key Phrase: I believe",
            lessonsGiven: ["Unconditional love and forgiveness", "Emotional empathy", "Sacrifice for the partner's happiness"],
            lessonsNeeded: ["Setting firm boundaries", "Balancing dreams with reality", "Handling conflict directly rather than withdrawing"],
            personality: "For you, love is a complete surrender. You immerse yourself in emotions and seek a soulful, fairytale-like connection that transcends the material.",
            trust: "Trust is built slowly through emotional sincerity. You are vulnerable to betrayal due to your idealistic and forgiving nature.",
            whenInLove: [
                "Become deeply devoted and emotionally present",
                "Express love through thoughtful gestures and actions",
                "Idealize your partner and prioritize their happiness",
                "Seek a soulful connection beyond surface attraction",
                "Offer constant reassurance and gentle support"
            ],
            challenges: [
                "Avoiding necessary confrontations to maintain peace",
                "Withdrawing or escaping into thoughts when hurt",
                "Confusing self-sacrifice with a healthy relationship",
                "Neglecting your own needs for the sake of the partner"
            ],
            image: "/assets/image (25).png"
        },

        careerDetails: {
            mantra: "I imagine, I heal, and I inspire.",
            strengths: [
                "Exceptional creativity and original thinking",
                "Strong emotional intelligence and empathy",
                "Quiet dedication and problem-solving ability",
                "Visionary approach to complex scenarios"
            ],
            skillsNeeded: ["Discipline and focus", "Handling criticism objectively", "Balancing emotions with logical practicality"],
            path: "You are not suited for rigid, mechanical routines. You thrive in roles that allow you to create, heal, guide, or inspire others.",
            style: "Supportive, approachable, and flexible. You lead through vision and empathy rather than authoritative control.",
            bestOptions: [
                "Art / Music / Writing / Filmmaking",
                "Counseling / Therapy / Psychology",
                "Social Work / Humanitarian Roles",
                "Medical / Healing / Spiritual Guidance",
                "Marine Work / Travel / Hospitality"
            ],
            finance: [
                "Generous and willing to spend on others without hesitation",
                "Balanced yet occasionally impulsive spending habits",
                "Prioritizing emotional satisfaction over financial status",
                "Tendency to manage funds well but needs practical structure"
            ]
        },

        relationshipDetails: {
            overview: "Connection for Pisces is about feeling understood and valued on a soulful level. They give more than they take in every bond.",
            lover: "Romantic, devoted, and emotionally invested. Seeks lasting emotional depth.",
            friend: "Loyal and compassionate. The one who notices when something is wrong without words.",
            colleague: "Supportive and collaborative. The person others rely on during high-pressure times.",
            boss: "Patient and encouraging. Trusts the team and focuses on their growth and development.",
            parent: {
                father: "Gentle and friendly. Prefers guiding children with patience as a companion.",
                mother: "Nurturing and selfless. Prioritizes children's happiness and emotional security."
            },
            child: "Sensitive and creative. Respectful of parents and emotionally attached to family.",
            husband: "Quietly wise and supportive. Navigates family life with intuition and care.",
            wife: "Mysterious and resilient. Handles challenges with quiet strength and deep love."
        },

        manDetails: "A Pisces man carries two worlds—reality and dreams. He is intuitive, emotional, and guided by his instincts. Gentle and caring, he senses others' feelings and absorbs them. While he dreams big, he may struggle with consistent effort and discipline. In love, he is deeply romantic and seeks a soulful, giving connection.",
        womanDetails: "A Pisces woman is mysterious and deeply emotional, possessing a quiet inner strength. She values real connection over grand gestures and is naturally creative. While she may appear fragile, she has a hidden resilience that emerges in crises. She is a loyal, devoted partner who needs consistent reassurance and warmth.",
        moonDetails: "Individuals with Moon in Pisces are deeply emotional and intuitive. You absorb the feelings of those around you and have a rich, sensitive inner world. You seek meaning and connection over material success. While highly compassionate, you must set emotional boundaries to avoid becoming overwhelmed by others' pain.",
        
        howToIdentify: "Pisceans are often recognized by their large, expressive, and dreamy eyes. They typically have an average, soft build and a mysterious, calm presence. You'll notice their preference for comfortable style, their fluid movements, and an aura of quiet wisdom and emotional depth that draws people in.",

        funFacts: [
            "Motto: 'Love is the answer to everything.'",
            "Pet Peeve: Harshness, broken promises, and rigid routines.",
            "Loves: Poetry, music, spending time near water, and deep conversations.",
            "Special Skill: Emotional reading—knowing how you feel before you say it.",
            "Fact: Known to carry qualities of all the previous eleven signs.",
            "Mindset: 'I live in my dreams because they are more real to me.'"
        ],

        faqs: [
            { q: "What is the core nature of Pisces?", a: "Emotional, intuitive, and imaginative, often living in a world of dreams and deep feelings." },
            { q: "How do Pisces handle conflict?", a: "They dislike confrontation and prefer peaceful, indirect, or harmonious solutions." },
            { q: "What are their biggest career strengths?", a: "Creativity, empathy, vision, and a dedication to meaningful and inspiring work." },
            { q: "What health areas are most vulnerable?", a: "The feet, respiratory system, and overall health due to emotional sensitivity." },
            { q: "Why are they considered the most wise sign?", a: "As the 12th sign, they are believed to have experienced the lessons of all other signs." }
        ],

        luckyFactors: {
            birthstones: ["Pearl", "Yellow Sapphire"],
            stones: ["Pearl", "Emerald", "Coral", "Beruz"],
            metals: ["Platinum", "Tin"],
            day: "Thursday, Monday",
            numbers: "3, 7, 12, 16, 21, 25, 30, 34, 43",
            colors: "Mauve, Lilac, Violet, Sea green"
        },

        preferences: {
            loves: ["Creative expression", "Soulful connections", "Peaceful environments", "Helping others"],
            dislikes: ["Harsh criticism", "Rigid structures", "Broken promises", "Being ignored"]
        },

        lifeInsights: {
            need: "Emotional security and creative freedom",
            goal: "To bring healing and compassion to the world",
            motto: "I believe",
            balance: "Dreams and reality"
        }
    }
];
