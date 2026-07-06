import { Stay } from './types';

export const mockStays: Stay[] = [
    // Ayodhya Stays
    {
        id: 'ayodhya-1',
        name: 'Sri Ram Vedic Dham Dharamshala',
        category: 'Dharamshala',
        location: 'Ayodhya',
        pricePerNight: 800,
        rating: 4.8,
        reviewCount: 340,
        imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format&fit=crop',
        templeDistance: '350m from Ram Mandir',
        hasWifi: true,
        hasAc: false,
        hasFood: true,
        hasParking: true,
        recommended: true,
        description: 'A traditional and clean Vedic staying home in the heart of Ayodhya. Offers strictly pure-vegetarian satvik meals, morning bhajan hours, and spacious rooms suitable for families.',
        policies: [
            'No smoking or alcohol consumption allowed on premises.',
            'Strictly pure-vegetarian/satvik food served.',
            'Check-in: 12:00 PM, Check-out: 11:00 AM.'
        ],
        roomType: 'Spacious Family Hall'
    },
    {
        id: 'ayodhya-2',
        name: 'The Divine Ramayana Retreat',
        category: 'Premium',
        location: 'Ayodhya',
        pricePerNight: 4500,
        rating: 4.9,
        reviewCount: 180,
        imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop',
        templeDistance: '1.2km from Ram Mandir',
        hasWifi: true,
        hasAc: true,
        hasFood: true,
        hasParking: true,
        recommended: true,
        description: 'A high-end luxury resort styled with classic Indian temple motifs. Features soundproof AC suites, yoga centers, pure-vegetarian fine dining, and guided temple shuttle assistance.',
        policies: [
            'Only pure-vegetarian dining allowed.',
            'Pets are not allowed.',
            'Express laundry and room service available.'
        ],
        roomType: 'Luxury Heritage Suite'
    },
    {
        id: 'ayodhya-3',
        name: 'Saryu Nivas Guest House',
        category: 'Standard',
        location: 'Ayodhya',
        pricePerNight: 1800,
        rating: 4.5,
        reviewCount: 95,
        imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop',
        templeDistance: '600m from Saryu Ghat',
        hasWifi: true,
        hasAc: true,
        hasFood: true,
        hasParking: false,
        recommended: false,
        description: 'Comfortable family guest house offering a beautiful view of the holy Saryu River. Rooms are equipped with split ACs, high-speed Wi-Fi, and 24/7 power backup.',
        policies: [
            'Vegetarian meals only.',
            '24-hour hot water available.',
            'Check-out is strictly at 10:00 AM.'
        ],
        roomType: 'Deluxe AC Room'
    },

    // Kedarnath Stays
    {
        id: 'kedarnath-1',
        name: 'Kedarnath GMVN Tourist Bungalow',
        category: 'Standard',
        location: 'Kedarnath',
        pricePerNight: 2200,
        rating: 4.6,
        reviewCount: 420,
        imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format&fit=crop',
        templeDistance: '200m from Kedarnath Temple',
        hasWifi: false,
        hasAc: false,
        hasFood: true,
        hasParking: false,
        recommended: true,
        description: 'Managed staying home near the holy shrines of Kedarnath. Offers warm bedding, heavy blankets, hot water buckets, and basic medical oxygen support if required.',
        policies: [
            'Power supply is available during limited morning and evening hours.',
            'No room heater/AC provided due to high altitude power restrictions.',
            'Warm clothing and raincoats are mandatory.'
        ],
        roomType: 'Triple Bed Standard Hut'
    },
    {
        id: 'kedarnath-2',
        name: 'Himalayan Eco Ashram & Camps',
        category: 'Budget',
        location: 'Kedarnath',
        pricePerNight: 1200,
        rating: 4.4,
        reviewCount: 88,
        imageUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=600&auto=format&fit=crop',
        templeDistance: '1.5km from Kedarnath Temple',
        hasWifi: false,
        hasAc: false,
        hasFood: true,
        hasParking: false,
        recommended: false,
        description: 'Eco-friendly Swiss tents offering warm beds, shared clean washrooms, and unlimited organic herbal tea. Ideal for adventure seekers and energetic pilgrims.',
        policies: [
            'Shared modern biological toilets.',
            'Strict zero-plastic policy.',
            'Hot water provided on demand.'
        ],
        roomType: 'Semi-Luxury Swiss Tent'
    },

    // Puri Stays
    {
        id: 'puri-1',
        name: 'Sri Jagannath Seva Dharamshala',
        category: 'Dharamshala',
        location: 'Puri',
        pricePerNight: 600,
        rating: 4.7,
        reviewCount: 290,
        imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format&fit=crop',
        templeDistance: '400m from Jagannath Temple',
        hasWifi: true,
        hasAc: false,
        hasFood: true,
        hasParking: true,
        recommended: true,
        description: 'Spacious and divine Dharamshala featuring large courtyards, Mahaprasad coupon guides, and comfortable beds. Safe and highly secure for family yatris.',
        policies: [
            'Luggage storage facility available.',
            'Temple dress-code assistance available.',
            'Pure vegetarian home cooking.'
        ],
        roomType: 'Four Bed Family Suite'
    },
    {
        id: 'puri-2',
        name: 'The Puri Heritage Sea Resort',
        category: 'Premium',
        location: 'Puri',
        pricePerNight: 3800,
        rating: 4.8,
        reviewCount: 156,
        imageUrl: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=600&auto=format&fit=crop',
        templeDistance: '1.8km from Jagannath Temple',
        hasWifi: true,
        hasAc: true,
        hasFood: true,
        hasParking: true,
        recommended: true,
        description: 'A luxurious sea-facing resort. Watch the sunrise from your private balcony, and take advantage of our free private AC transfers to the temple for morning and evening Aaratis.',
        policies: [
            'Free AC shuttle service to Jagannath Temple twice a day.',
            '24-hour room service.',
            'Access to standard swimming pool.'
        ],
        roomType: 'Sea Facing Deluxe AC Room'
    },

    // Vrindavan Stays
    {
        id: 'vrindavan-1',
        name: 'Radhe Krishna Bhakti Ashram',
        category: 'Dharamshala',
        location: 'Vrindavan',
        pricePerNight: 900,
        rating: 4.9,
        reviewCount: 512,
        imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format&fit=crop',
        templeDistance: '500m from Prem Mandir',
        hasWifi: true,
        hasAc: true,
        hasFood: true,
        hasParking: true,
        recommended: true,
        description: 'An exceptionally managed ashram with active daily kirtan rooms, gorgeous gardens, and hygienic rooms. Highly peaceful and deeply spiritual aura.',
        policies: [
            'Participation in evening Aarti is highly encouraged.',
            'No onion or garlic served in any satvik meals.',
            'Check-out: 12:00 PM.'
        ],
        roomType: 'Standard AC Double Bed'
    },
    {
        id: 'vrindavan-2',
        name: 'Mela Heritage Palace',
        category: 'Premium',
        location: 'Vrindavan',
        pricePerNight: 5500,
        rating: 4.9,
        reviewCount: 220,
        imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop',
        templeDistance: '800m from Bankey Bihari Temple',
        hasWifi: true,
        hasAc: true,
        hasFood: true,
        hasParking: true,
        recommended: true,
        description: 'Traditional Marwari styled palace offering royal hospitality, marble suites, therapeutic ayurvedic spas, and guided Darshan Pandit Ji assistance.',
        policies: [
            'Strict adherence to traditional dress codes is requested.',
            'Vedic wellness therapies can be pre-booked.',
            'Complimentary breakfast included.'
        ],
        roomType: 'Royal Maharaja Suite'
    },

    // Shirdi Stays
    {
        id: 'shirdi-1',
        name: 'Sai Baba Bhakt Nivas',
        category: 'Dharamshala',
        location: 'Shirdi',
        pricePerNight: 500,
        rating: 4.7,
        reviewCount: 890,
        imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format&fit=crop',
        templeDistance: '150m from Shirdi Sai Temple',
        hasWifi: true,
        hasAc: false,
        hasFood: true,
        hasParking: true,
        recommended: true,
        description: 'The primary destination for Shirdi pilgrims. Highly clean rooms with immediate proximity to the main Samadhi temple entrance.',
        policies: [
            'Pre-booking of Kakad Aarti coupons available.',
            'Free absolute safety lockers.',
            'Pure satvik prasadam meals.'
        ],
        roomType: 'Family Standard Non-AC Room'
    },
    {
        id: 'shirdi-2',
        name: 'Sai Grand Heritage Hotel',
        category: 'Standard',
        location: 'Shirdi',
        pricePerNight: 2400,
        rating: 4.6,
        reviewCount: 310,
        imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop',
        templeDistance: '600m from Shirdi Sai Temple',
        hasWifi: true,
        hasAc: true,
        hasFood: true,
        hasParking: true,
        recommended: false,
        description: 'A modern, premium hotel equipped with contemporary luxury, standard AC amenities, multi-cuisine dining, and active help desk for old age senior pilgrims.',
        policies: [
            'Wheelchair assistance available.',
            'Free temple drop-off and pickup.',
            'Early check-in options on request.'
        ],
        roomType: 'Executive Triple AC Room'
    }
];
