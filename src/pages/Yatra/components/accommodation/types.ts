export type StayCategory = 'Budget' | 'Standard' | 'Premium' | 'Dharamshala';

export interface Stay {
    id: string;
    name: string;
    category: StayCategory;
    location: string; // Destination name, e.g. "Ayodhya", "Kedarnath", "Puri"
    pricePerNight: number;
    rating: number;
    reviewCount: number;
    imageUrl: string;
    templeDistance: string; // e.g. "200m from Ram Mandir"
    hasWifi: boolean;
    hasAc: boolean;
    hasFood: boolean;
    hasParking: boolean;
    recommended: boolean;
    description: string;
    policies: string[];
    roomType: string;
}
