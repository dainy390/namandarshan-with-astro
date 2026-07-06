export interface DevoteeContribution {
  id: string;
  userName: string;
  userAvatar?: string;
  templeName: string;
  location: string;
  comment: string;
  image: string;
  likes: number;
  comments: number;
  date: string;
}

export interface DevoteeJourney {
  id: string;
  name: string;
  city: string;
  avatar: string;
  templesVisited: number;
  testimonial: string;
}

export interface DevoteeReview {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export const devoteeContributions: DevoteeContribution[] = [
  {
    id: "1",
    userName: "Sujit & Family",
    templeName: "Jagannath Temple",
    location: "Puri, Odisha",
    comment: "The divine atmosphere at Puri Jagannath is truly beyond words. Feeling blessed to have witnessed the evening Aarti with my family. The management and hygiene are exceptional.",
    image: "/images/temples/jagannath-family.png",
    likes: 245,
    comments: 18,
    date: "2 hours ago"
  },
  {
    id: "2",
    userName: "Priya Patel",
    templeName: "Kashi Vishwanath",
    location: "Varanasi",
    comment: "Witnessing the Ganga Aarti at Dashashwamedh Ghat followed by Kashi Vishwanath Darshan is a soul-stirring experience. The energy is vibrant.",
    image: "/images/devotee-wall/ganga-aarti.png",
    likes: 589,
    comments: 32,
    date: "5 hours ago"
  },
  {
    id: "3",
    userName: "Amit Verma",
    templeName: "Pashupatinath Temple",
    location: "Kathmandu",
    comment: "A deeply spiritual visit to the sacred Pashupatinath. The ancient architecture and the peaceful flow of Bagmati river create a divine aura.",
    image: "/images/devotee-wall/pashupatinath.png",
    likes: 312,
    comments: 25,
    date: "1 day ago"
  },
  {
    id: "4",
    userName: "Sanjay Mehra",
    userAvatar: "https://i.pravatar.cc/150?u=sanjay",
    templeName: "Ganga Ghats",
    location: "Varanasi",
    comment: "Faith in every corner. The crowd, the flags, and the devotion at the Ghats is something one must experience once in their lifetime.",
    image: "/images/devotee-wall/varanasi-ghat.png",
    likes: 767,
    comments: 52,
    date: "2 days ago"
  },
  {
    id: "5",
    userName: "Meena Krishnamurthy",
    userAvatar: "https://i.pravatar.cc/150?u=meena",
    templeName: "Devotee Sangam",
    location: "Ayodhya",
    comment: "The sight of thousands of devotees sitting in synchronized prayer is a testament to the power of collective faith.",
    image: "/images/devotee-wall/devotees-sitting.png",
    likes: 424,
    comments: 28,
    date: "3 days ago"
  }
];

export const devoteeJourneys: DevoteeJourney[] = [
  {
    id: "j1",
    name: "Sunita Reddy",
    city: "Hyderabad",
    avatar: "/images/devotee-wall/ganga-aarti.png",
    templesVisited: 12,
    testimonial: "The Ganga Aarti experience in Varanasi was truly transformative for my spiritual journey."
  },
  {
    id: "j2",
    name: "Rajesh Khanna",
    city: "Delhi",
    avatar: "/images/devotee-wall/pashupatinath.png",
    templesVisited: 8,
    testimonial: "Discovered the serenity of Pashupatinath through this wonderful platform. Highly recommended!"
  },
  {
    id: "j3",
    name: "Anjali Gupta",
    city: "Indore",
    avatar: "/images/devotee-wall/varanasi-ghat.png",
    templesVisited: 15,
    testimonial: "I've discovered so many hidden spiritual gems and vibrant Ghats through the feedback from fellow devotees."
  }
];

export const devoteeReviews: DevoteeReview[] = [
  {
    id: "r1",
    name: "Vikram Singh",
    rating: 5,
    text: "Exemplary service and authentic information. A must-visit portal for every devotee.",
    date: "Mar 20, 2026"
  },
  {
    id: "r2",
    name: "Meera Iyer",
    rating: 5,
    text: "The community here is so supportive. Loving the new Sanatan Wall feature!",
    date: "Mar 22, 2026"
  }
];
