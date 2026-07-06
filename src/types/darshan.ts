export interface Darshan {
    _id?: string;
    name: string;
    location: string;
    description: string;
    image: string;

    // International Specific
    subTitle?: string;
    subtitle?: string; // Supporting both casing conventions
    introHighlights?: string | string[];

    // Structure / Architecture
    structureTitle?: string;
    structureDesc?: string;
    structurePoints?: string[];
    structureFooter?: string;
    historyArchitectureDesc?: string; // Fallback

    // Experience
    experienceTitle?: string;
    experienceDesc?: string;
    experienceSections?: { title: string; text: string }[];
    religiousSignificanceDesc?: string; // Fallback

    // Why Visit / Surroundings
    surroundingsDesc?: string;
    whyVisitTitle?: string;
    whyVisitFooter?: string;

    // Visitor Info
    visitorGuide?: { title: string; text: string }[];
    visitorGuideFooter?: string;
    darshanTimings?: string;
    schedule?: { label: string; time: string }[];
    entryFee?: string;
    connectivity?: string;
    notableEvents?: string;

    // SEO
    seoTitle?: string;
    seoDescription?: string;
    seoKeywords?: string;

    // Reviews
    reviews?: {
        name: string;
        date: string;
        rating: number;
        comment: string;
    }[];

    // FAQs
    faqs?: {
        question: string;
        answer: string;
    }[];

    // Other
    crowdFreeExperience?: {
        title?: string;
        description?: string;
        ctaText?: string;
    };

    // Additional fields from DarshanForm
    category?: "Domestic" | "International";
    bookingProcess?: { step: string; description: string }[];
    guidelines?: { title: string; description: string }[];
    trustPoints?: string[];

    [key: string]: any; // Allow for other fields not explicitly typed yet
}
