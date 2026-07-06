import { useState } from "react";
import { BirthDetails } from "@/lib/kundali/kundali";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// All Indian states + major UTs — sorted by region
const POPULAR_CITIES = [
  // North India
  { name: "New Delhi", lat: 28.6139, lng: 77.2090, tz: 5.5, region: "North" },
  { name: "Lucknow", lat: 26.8467, lng: 80.9462, tz: 5.5, region: "North" },
  { name: "Agra", lat: 27.1767, lng: 78.0081, tz: 5.5, region: "North" },
  { name: "Varanasi", lat: 25.3176, lng: 82.9739, tz: 5.5, region: "North" },
  { name: "Allahabad", lat: 25.4358, lng: 81.8463, tz: 5.5, region: "North" },
  { name: "Kanpur", lat: 26.4499, lng: 80.3319, tz: 5.5, region: "North" },
  { name: "Jaipur", lat: 26.9124, lng: 75.7873, tz: 5.5, region: "North" },
  { name: "Jodhpur", lat: 26.2389, lng: 73.0243, tz: 5.5, region: "North" },
  { name: "Udaipur", lat: 24.5854, lng: 73.7125, tz: 5.5, region: "North" },
  { name: "Chandigarh", lat: 30.7333, lng: 76.7794, tz: 5.5, region: "North" },
  { name: "Amritsar", lat: 31.6340, lng: 74.8723, tz: 5.5, region: "North" },
  { name: "Ludhiana", lat: 30.9010, lng: 75.8573, tz: 5.5, region: "North" },
  { name: "Shimla", lat: 31.1048, lng: 77.1734, tz: 5.5, region: "North" },
  { name: "Dehradun", lat: 30.3165, lng: 78.0322, tz: 5.5, region: "North" },
  { name: "Haridwar", lat: 29.9457, lng: 78.1642, tz: 5.5, region: "North" },
  { name: "Jammu", lat: 32.7266, lng: 74.8570, tz: 5.5, region: "North" },
  { name: "Srinagar", lat: 34.0837, lng: 74.7973, tz: 5.5, region: "North" },
  { name: "Leh", lat: 34.1526, lng: 77.5770, tz: 5.5, region: "North" },

  // West India
  { name: "Mumbai", lat: 19.0760, lng: 72.8777, tz: 5.5, region: "West" },
  { name: "Pune", lat: 18.5204, lng: 73.8567, tz: 5.5, region: "West" },
  { name: "Nagpur", lat: 21.1458, lng: 79.0882, tz: 5.5, region: "West" },
  { name: "Nashik", lat: 19.9975, lng: 73.7898, tz: 5.5, region: "West" },
  { name: "Aurangabad", lat: 19.8762, lng: 75.3433, tz: 5.5, region: "West" },
  { name: "Ahmedabad", lat: 23.0225, lng: 72.5714, tz: 5.5, region: "West" },
  { name: "Surat", lat: 21.1702, lng: 72.8311, tz: 5.5, region: "West" },
  { name: "Vadodara", lat: 22.3072, lng: 73.1812, tz: 5.5, region: "West" },
  { name: "Gandhinagar", lat: 23.2156, lng: 72.6369, tz: 5.5, region: "West" },
  { name: "Rajkot", lat: 22.3039, lng: 70.8022, tz: 5.5, region: "West" },
  { name: "Dwarka", lat: 22.2442, lng: 68.9685, tz: 5.5, region: "West" },
  { name: "Solapur", lat: 17.6868, lng: 75.9064, tz: 5.5, region: "West" },
  { name: "Panaji", lat: 15.4909, lng: 73.8278, tz: 5.5, region: "West" },
  { name: "Silvassa", lat: 20.2665, lng: 73.0166, tz: 5.5, region: "West" },
  { name: "Daman", lat: 20.3974, lng: 72.8328, tz: 5.5, region: "West" },

  // South India
  { name: "Bangalore", lat: 12.9716, lng: 77.5946, tz: 5.5, region: "South" },
  { name: "Chennai", lat: 13.0827, lng: 80.2707, tz: 5.5, region: "South" },
  { name: "Hyderabad", lat: 17.3850, lng: 78.4867, tz: 5.5, region: "South" },
  { name: "Kochi", lat: 9.9312, lng: 76.2673, tz: 5.5, region: "South" },
  { name: "Thiruvanantha", lat: 8.5241, lng: 76.9366, tz: 5.5, region: "South" },
  { name: "Mysuru", lat: 12.2958, lng: 76.6394, tz: 5.5, region: "South" },
  { name: "Mangalore", lat: 12.9141, lng: 74.8560, tz: 5.5, region: "South" },
  { name: "Hubli", lat: 15.3647, lng: 75.1240, tz: 5.5, region: "South" },
  { name: "Coimbatore", lat: 11.0168, lng: 76.9558, tz: 5.5, region: "South" },
  { name: "Madurai", lat: 9.9252, lng: 78.1198, tz: 5.5, region: "South" },
  { name: "Salem", lat: 11.6643, lng: 78.1460, tz: 5.5, region: "South" },
  { name: "Tirupati", lat: 13.6288, lng: 79.4192, tz: 5.5, region: "South" },
  { name: "Vijayawada", lat: 16.5062, lng: 80.6480, tz: 5.5, region: "South" },
  { name: "Visakhapatnam", lat: 17.6868, lng: 83.2185, tz: 5.5, region: "South" },
  { name: "Amaravati", lat: 16.5731, lng: 80.3582, tz: 5.5, region: "South" },
  { name: "Pondicherry", lat: 11.9416, lng: 79.8083, tz: 5.5, region: "South" },
  { name: "Kavaratti", lat: 10.5667, lng: 72.6417, tz: 5.5, region: "South" },

  // East India
  { name: "Kolkata", lat: 22.5726, lng: 88.3639, tz: 5.5, region: "East" },
  { name: "Patna", lat: 25.6093, lng: 85.1376, tz: 5.5, region: "East" },
  { name: "Gaya", lat: 24.7955, lng: 85.0002, tz: 5.5, region: "East" },
  { name: "Bhubaneswar", lat: 20.2961, lng: 85.8245, tz: 5.5, region: "East" },
  { name: "Puri", lat: 19.8135, lng: 85.8312, tz: 5.5, region: "East" },
  { name: "Ranchi", lat: 23.3441, lng: 85.3096, tz: 5.5, region: "East" },
  { name: "Jamshedpur", lat: 22.8046, lng: 86.2029, tz: 5.5, region: "East" },
  { name: "Raipur", lat: 21.2514, lng: 81.6296, tz: 5.5, region: "East" },
  { name: "Guwahati", lat: 26.1445, lng: 91.7362, tz: 5.5, region: "East" },
  { name: "Agartala", lat: 23.8315, lng: 91.2868, tz: 5.5, region: "East" },
  { name: "Imphal", lat: 24.8170, lng: 93.9368, tz: 5.5, region: "East" },
  { name: "Shillong", lat: 25.5788, lng: 91.8933, tz: 5.5, region: "East" },
  { name: "Gangtok", lat: 27.3389, lng: 88.6065, tz: 5.5, region: "East" },
  { name: "Itanagar", lat: 27.0844, lng: 93.6053, tz: 5.5, region: "East" },
  { name: "Kohima", lat: 25.6701, lng: 94.1077, tz: 5.5, region: "East" },
  { name: "Aizawl", lat: 23.7271, lng: 92.7176, tz: 5.5, region: "East" },
  { name: "Port Blair", lat: 11.6234, lng: 92.7265, tz: 5.5, region: "East" },

  // Central India
  { name: "Bhopal", lat: 23.2599, lng: 77.4126, tz: 5.5, region: "Central" },
  { name: "Indore", lat: 22.7196, lng: 75.8577, tz: 5.5, region: "Central" },
  { name: "Ujjain", lat: 23.1793, lng: 75.7849, tz: 5.5, region: "Central" },
  { name: "Gwalior", lat: 26.2183, lng: 78.1828, tz: 5.5, region: "Central" },
  { name: "Jabalpur", lat: 23.1815, lng: 79.9864, tz: 5.5, region: "Central" },
];


interface BirthDetailsFormProps {
  onGenerate: (details: BirthDetails) => void;
}

export default function BirthDetailsForm({ onGenerate }: BirthDetailsFormProps) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [tz, setTz] = useState("5.5");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("All");

  const REGIONS = ["All", "North", "West", "South", "East", "Central"];
  const filteredCities = POPULAR_CITIES.filter(c =>
    (regionFilter === "All" || c.region === regionFilter) &&
    c.name.toLowerCase().includes(citySearch.toLowerCase())
  );

  const handleCitySelect = (city: typeof POPULAR_CITIES[0]) => {
    setPlace(city.name);
    setLat(city.lat.toString());
    setLng(city.lng.toString());
    setTz(city.tz.toString());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !date || !time || !lat || !lng) return;
    onGenerate({
      name,
      date,
      time,
      latitude: parseFloat(lat),
      longitude: parseFloat(lng),
      timezone: parseFloat(tz),
      place,
      email,
      phone,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-display tracking-wider uppercase text-muted-foreground">
          Full Name <span className="font-devanagari text-primary/60 normal-case tracking-normal">· नाम</span>
        </Label>
        <Input
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your full name"
          required
          className="bg-secondary border-border focus:border-primary focus:ring-primary/20"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="date" className="text-sm font-display tracking-wider uppercase text-muted-foreground">
            Date of Birth <span className="font-devanagari text-primary/60 normal-case tracking-normal">· जन्म तिथि</span>
          </Label>
          <Input
            id="date"
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            required
            className="bg-secondary border-border focus:border-primary focus:ring-primary/20"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="time" className="text-sm font-display tracking-wider uppercase text-muted-foreground">
            Time of Birth <span className="font-devanagari text-primary/60 normal-case tracking-normal">· जन्म समय</span>
          </Label>
          <Input
            id="time"
            type="time"
            value={time}
            onChange={e => setTime(e.target.value)}
            required
            className="bg-secondary border-border focus:border-primary focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="space-y-3">
        <Label className="text-sm font-display tracking-wider uppercase text-muted-foreground">
          Place of Birth <span className="font-devanagari text-primary/60 normal-case tracking-normal">· जन्म स्थान</span> — Quick Select
        </Label>
        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search city..."
          value={citySearch}
          onChange={e => setCitySearch(e.target.value)}
          className="w-full px-3 py-2 rounded-lg text-sm border border-border bg-secondary focus:outline-none focus:border-primary placeholder:text-muted-foreground"
        />
        {/* Region tabs */}
        <div className="flex gap-1.5 flex-wrap">
          {REGIONS.map(r => (
            <button
              key={r}
              type="button"
              onClick={() => setRegionFilter(r)}
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium transition-all border ${regionFilter === r
                ? "gold-gradient text-white border-transparent shadow-sm"
                : "bg-secondary border-border text-muted-foreground hover:border-primary/50"
                }`}
            >
              {r}
            </button>
          ))}
        </div>
        {/* City chips */}
        <div className="flex flex-wrap gap-2 max-h-44 overflow-y-auto scrollbar-hide pr-1">
          {filteredCities.map(city => (
            <button
              key={city.name}
              type="button"
              onClick={() => handleCitySelect(city)}
              className={`px-3 py-1.5 rounded-full text-sm transition-all border ${place === city.name
                ? "bg-primary/20 border-primary text-primary font-medium"
                : "bg-secondary border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
            >
              {city.name}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="place" className="text-sm font-display tracking-wider uppercase text-muted-foreground">
          Place Name
        </Label>
        <Input
          id="place"
          value={place}
          onChange={e => setPlace(e.target.value)}
          placeholder="City name"
          className="bg-secondary border-border focus:border-primary focus:ring-primary/20"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="lat" className="text-sm font-display tracking-wider uppercase text-muted-foreground">
            Latitude
          </Label>
          <Input
            id="lat"
            type="number"
            step="any"
            value={lat}
            onChange={e => setLat(e.target.value)}
            placeholder="28.61"
            required
            className="bg-secondary border-border focus:border-primary focus:ring-primary/20"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lng" className="text-sm font-display tracking-wider uppercase text-muted-foreground">
            Longitude
          </Label>
          <Input
            id="lng"
            type="number"
            step="any"
            value={lng}
            onChange={e => setLng(e.target.value)}
            placeholder="77.20"
            required
            className="bg-secondary border-border focus:border-primary focus:ring-primary/20"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="tz" className="text-sm font-display tracking-wider uppercase text-muted-foreground">
            Timezone
          </Label>
          <Input
            id="tz"
            type="number"
            step="0.5"
            value={tz}
            onChange={e => setTz(e.target.value)}
            placeholder="5.5"
            required
            className="bg-secondary border-border focus:border-primary focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-display tracking-wider uppercase text-muted-foreground">
            Email Address <span className="font-devanagari text-primary/60 normal-case tracking-normal">· ईमेल</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="For receiving report"
            required
            className="bg-secondary border-border focus:border-primary focus:ring-primary/20"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-display tracking-wider uppercase text-muted-foreground">
            WhatsApp Number <span className="font-devanagari text-primary/60 normal-case tracking-normal">· मोबाइल</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="For WhatsApp report"
            required
            className="bg-secondary border-border focus:border-primary focus:ring-primary/20"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full py-6 text-lg font-display tracking-widest uppercase gold-gradient text-primary-foreground hover:opacity-90 transition-opacity"
      >
        🪔 Generate Kundali
        <span className="font-devanagari ml-2 text-base normal-case tracking-normal opacity-80">· कुण्डली बनाएं</span>
      </Button>
    </form>
  );
}
