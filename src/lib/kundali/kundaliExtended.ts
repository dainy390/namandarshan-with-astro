import { KundaliData, RASHIS, RASHI_LORDS, RASHI_HINDI, NAKSHATRAS, NAKSHATRA_LORDS, PLANETS, Planet } from "./kundali";

// ─── Panchang Details ───
export interface PanchangData {
  tithi: string;
  tithiType: string;
  karan: string;
  yoga: string;
  nakshatra: string;
  sunrise: string;
  sunset: string;
  ayanamsha: number;
}

const TITHIS = [
  "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami",
  "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami",
  "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", "Purnima/Amavasya"
];

const KARANS = [
  "Bav", "Balav", "Kaulav", "Taitil", "Gar", "Vanij", "Vishti",
  "Shakuni", "Chatushpad", "Nag", "Kimstughna"
];

const YOGAS = [
  "Vishkambha", "Priti", "Ayushman", "Saubhagya", "Shobhana",
  "Atiganda", "Sukarma", "Dhriti", "Shula", "Ganda",
  "Vriddhi", "Dhruva", "Vyaghata", "Harshana", "Vajra",
  "Siddhi", "Vyatipata", "Variyan", "Parigha", "Shiva",
  "Siddha", "Sadhya", "Shubha", "Shukla", "Brahma",
  "Indra", "Vaidhriti"
];

export function calcPanchang(data: KundaliData): PanchangData {
  const moonLon = data.planets.find(p => p.planet === "Moon")!.longitude;
  const sunLon = data.planets.find(p => p.planet === "Sun")!.longitude;

  const diff = ((moonLon - sunLon + 360) % 360);
  const tithiIndex = Math.floor(diff / 12);
  const tithiType = tithiIndex < 15 ? "Shukla" : "Krishna";
  const tithi = TITHIS[tithiIndex % 15];

  const karanIndex = Math.floor(diff / 6) % KARANS.length;
  const yogaIndex = Math.floor(((moonLon + sunLon) % 360) / (360 / 27));

  // Approximate sunrise/sunset
  const lat = data.birthDetails.latitude;
  const [y, m, d] = data.birthDetails.date.split("-").map(Number);
  const dayOfYear = Math.floor((275 * m / 9) - ((m + 9) / 12) * (1 + Math.floor((y - 4 * Math.floor(y / 4) + 2) / 3)) + d - 30);
  const decl = 23.45 * Math.sin(2 * Math.PI * (284 + dayOfYear) / 365);
  const declRad = decl * Math.PI / 180;
  const latRad = lat * Math.PI / 180;
  const ha = Math.acos(-Math.tan(latRad) * Math.tan(declRad)) * 180 / Math.PI / 15;
  const sunriseH = 12 - ha + data.birthDetails.timezone;
  const sunsetH = 12 + ha + data.birthDetails.timezone;
  // Adjust for longitude
  const lngCorrection = (data.birthDetails.longitude - data.birthDetails.timezone * 15) / 15;
  const sr = sunriseH - lngCorrection;
  const ss = sunsetH - lngCorrection;

  const formatTime = (h: number) => {
    const hrs = Math.floor(h);
    const mins = Math.floor((h - hrs) * 60);
    return `${hrs}:${mins.toString().padStart(2, "0")}`;
  };

  return {
    tithi,
    tithiType: `${tithiType}${tithi}`,
    karan: KARANS[karanIndex],
    yoga: YOGAS[yogaIndex % 27],
    nakshatra: data.nakshatra,
    sunrise: formatTime(sr),
    sunset: formatTime(ss),
    ayanamsha: 23.856 + 0.0138 * ((toJD(data) - 2451545.0) / 36525.0 + 0.5),
  };
}

function toJD(data: KundaliData) {
  const [y, m, d] = data.birthDetails.date.split("-").map(Number);
  const [h, min] = data.birthDetails.time.split(":").map(Number);
  let year = y, month = m;
  if (month <= 2) { year--; month += 12; }
  const A = Math.floor(year / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + d + (h + min / 60 - data.birthDetails.timezone) / 24 + B - 1524.5;
}

// ─── Avakhada Details ───
export interface AvakhadaData {
  varna: string;
  vashya: string;
  yoni: string;
  gan: string;
  nadi: string;
  sign: string;
  signLord: string;
  nakshatraCharan: number;
  yunja: string;
  tatva: string;
  nameAlphabet: string;
  paya: string;
}

const VARNA_MAP: Record<number, string> = { 0: "Kshatriya", 1: "Vaishya", 2: "Shudra", 3: "Brahmin", 4: "Kshatriya", 5: "Vaishya", 6: "Shudra", 7: "Brahmin", 8: "Kshatriya", 9: "Vaishya", 10: "Shudra", 11: "Brahmin" };
const YONI_ANIMALS = ["Ashva", "Gaj", "Mesh", "Sarpa", "Shwan", "Marjar", "Mushak", "Gow", "Mahish", "Vyaghra", "Mrig", "Vanar", "Nakul", "Simha"];
const GAN_MAP = ["Deva", "Manushya", "Rakshasa"];
const NADI_MAP = ["Adhya", "Madhya", "Antya"];
const TATVA_MAP: Record<number, string> = { 0: "Fire", 1: "Earth", 2: "Air", 3: "Water", 4: "Fire", 5: "Earth", 6: "Air", 7: "Water", 8: "Fire", 9: "Earth", 10: "Air", 11: "Water" };
const NAME_ALPHABETS = [
  "Chu, Che, Cho, La", "Li, Lu, Le, Lo", "A, I, U, E",
  "O, Va, Vi, Vu", "Ve, Vo, Ka, Ki", "Ku, Gha, Ng, Chha",
  "Ke, Ko, Ha, Hi", "Hu, He, Ho, Da", "Di, Du, De, Do",
  "Ma, Mi, Mu, Me", "Mo, Ta, Ti, Tu", "Te, To, Pa, Pi",
  "Pu, Sha, Na, Tha", "Pe, Po, Ra, Ri", "Ru, Re, Ro, Taa",
  "Ti, Tu, Te, To", "Na, Ni, Nu, Ne", "No, Ya, Yi, Yu",
  "Ye, Yo, Bha, Bhi", "Bhu, Dha, Pha, Dha", "Bhe, Bho, Ja, Ji",
  "Ju, Je, Jo, Gha", "Ga, Gi, Gu, Ge", "Go, Saa, Si, Su",
  "Se, So, Da, Di", "Du, Tha, Jha, Da", "De, Do, Cha, Chi"
];

export function calcAvakhada(data: KundaliData): AvakhadaData {
  const moonRashi = data.moonSign;
  const nakshatraIdx = NAKSHATRAS.indexOf(data.nakshatra as any);
  
  return {
    varna: VARNA_MAP[moonRashi] || "Vaishya",
    vashya: moonRashi <= 5 ? "Chatushpad" : moonRashi <= 8 ? "Nara" : "Jalchar",
    yoni: YONI_ANIMALS[nakshatraIdx % YONI_ANIMALS.length],
    gan: GAN_MAP[nakshatraIdx % 3],
    nadi: NADI_MAP[nakshatraIdx % 3],
    sign: RASHIS[moonRashi],
    signLord: RASHI_LORDS[moonRashi],
    nakshatraCharan: data.nakshatraPada,
    yunja: data.nakshatraPada <= 2 ? "Purva" : "Antya",
    tatva: TATVA_MAP[moonRashi],
    nameAlphabet: NAME_ALPHABETS[nakshatraIdx] ? NAME_ALPHABETS[nakshatraIdx].split(",")[data.nakshatraPada - 1]?.trim() || "Sa" : "Sa",
    paya: ["Gold", "Silver", "Copper", "Iron"][moonRashi % 4],
  };
}

// ─── Vimshottari Dasha ───
export interface DashaPeriod {
  planet: string;
  startDate: Date;
  endDate: Date;
  antardashas: { planet: string; startDate: Date; endDate: Date }[];
}

const DASHA_YEARS: Record<string, number> = {
  Ketu: 7, Venus: 20, Sun: 6, Moon: 10, Mars: 7,
  Rahu: 18, Jupiter: 16, Saturn: 19, Mercury: 17
};

const DASHA_SEQUENCE = ["Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"];

export function calcVimshottariDasha(data: KundaliData): DashaPeriod[] {
  const moonLon = data.planets.find(p => p.planet === "Moon")!.longitude;
  const nakshatraIdx = Math.floor(moonLon / (360 / 27));
  const nakshatraStart = nakshatraIdx * (360 / 27);
  const posInNakshatra = moonLon - nakshatraStart;
  const nakshatraSpan = 360 / 27;
  const fractionElapsed = posInNakshatra / nakshatraSpan;

  const startLord = NAKSHATRA_LORDS[nakshatraIdx];
  const lordIndex = DASHA_SEQUENCE.indexOf(startLord);

  const [y, m, d] = data.birthDetails.date.split("-").map(Number);
  const birthDate = new Date(y, m - 1, d);

  // First dasha: remaining portion
  const dashas: DashaPeriod[] = [];
  let currentDate = new Date(birthDate);

  for (let i = 0; i < 9; i++) {
    const seq = (lordIndex + i) % 9;
    const planet = DASHA_SEQUENCE[seq];
    const totalYears = DASHA_YEARS[planet];
    let years = totalYears;

    if (i === 0) {
      years = totalYears * (1 - fractionElapsed);
    }

    const endDate = new Date(currentDate);
    endDate.setDate(endDate.getDate() + Math.round(years * 365.25));

    // Calculate Antardashas
    const antardashas: { planet: string; startDate: Date; endDate: Date }[] = [];
    let adStart = new Date(currentDate);
    for (let j = 0; j < 9; j++) {
      const adSeq = (seq + j) % 9;
      const adPlanet = DASHA_SEQUENCE[adSeq];
      const adYears = years * DASHA_YEARS[adPlanet] / 120;
      const adEnd = new Date(adStart);
      adEnd.setDate(adEnd.getDate() + Math.round(adYears * 365.25));
      antardashas.push({ planet: adPlanet, startDate: new Date(adStart), endDate: new Date(adEnd) });
      adStart = new Date(adEnd);
    }

    dashas.push({
      planet,
      startDate: new Date(currentDate),
      endDate: new Date(endDate),
      antardashas,
    });
    currentDate = new Date(endDate);
  }

  return dashas;
}

// ─── Yoga Detection ───
export interface YogaResult {
  name: string;
  nameHindi: string;
  description: string;
  isPresent: boolean;
}

export function detectYogas(data: KundaliData): YogaResult[] {
  const yogas: YogaResult[] = [];
  const getHouse = (planet: Planet) => ((data.planets.find(p => p.planet === planet)!.rashi - data.ascendant + 12) % 12);
  const moonHouse = getHouse("Moon");
  const sunHouse = getHouse("Sun");
  const jupiterHouse = getHouse("Jupiter");
  const marsHouse = getHouse("Mars");
  const saturnHouse = getHouse("Saturn");
  const venusHouse = getHouse("Venus");
  const mercuryHouse = getHouse("Mercury");

  // Gajakesari Yoga: Jupiter in kendra from Moon
  const jupFromMoon = ((jupiterHouse - moonHouse + 12) % 12);
  const gajakesari = [0, 3, 6, 9].includes(jupFromMoon);
  yogas.push({
    name: "Gajakesari Yoga",
    nameHindi: "गजकेसरी योग",
    description: gajakesari
      ? "Jupiter is in a Kendra (1st, 4th, 7th, or 10th) from Moon. This auspicious yoga blesses you with wisdom, wealth, fame, and lasting reputation. You possess natural leadership qualities and will be respected in society."
      : "Jupiter is not in a Kendra from Moon. This yoga is not formed in your chart.",
    isPresent: gajakesari,
  });

  // Sunapha Yoga: Any planet except Sun in 2nd from Moon
  const planetsIn2ndFromMoon = data.planets.filter(p => p.planet !== "Sun" && p.planet !== "Moon" && ((getHouse(p.planet) - moonHouse + 12) % 12) === 1);
  const sunapha = planetsIn2ndFromMoon.length > 0;
  yogas.push({
    name: "Sunapha Yoga",
    nameHindi: "सुनफा योग",
    description: sunapha
      ? "Planets other than Sun occupy the 2nd house from Moon. You will be the proud owner of properties earned through your perseverance. You will be wealthy, intelligent, and respected like a ruler."
      : "No planets (except Sun) in 2nd from Moon. This yoga is absent.",
    isPresent: sunapha,
  });

  // Vesi Yoga: Planet other than Moon in 2nd from Sun
  const planetsIn2ndFromSun = data.planets.filter(p => p.planet !== "Moon" && p.planet !== "Sun" && ((getHouse(p.planet) - sunHouse + 12) % 12) === 1);
  const vesi = planetsIn2ndFromSun.length > 0;
  yogas.push({
    name: "Vesi Yoga",
    nameHindi: "वेशी योग",
    description: vesi
      ? "Planets other than Moon occupy the 2nd from Sun. You are fortunate, happy, virtuous, and ethical. You will be exceptionally famous and aristocratic throughout life."
      : "No qualifying planets in 2nd from Sun. Vesi Yoga is absent.",
    isPresent: vesi,
  });

  // Budh-Aditya Yoga: Sun and Mercury in same house
  const budhAditya = sunHouse === mercuryHouse;
  yogas.push({
    name: "Budh-Aditya Yoga",
    nameHindi: "बुधादित्य योग",
    description: budhAditya
      ? "Sun and Mercury are conjunct. This yoga bestows high intelligence, eloquence, analytical ability, and success in education and communication. You may excel in writing, teaching, or advisory roles."
      : "Sun and Mercury are not conjunct. This yoga is not present.",
    isPresent: budhAditya,
  });

  // Chandra-Mangal Yoga: Moon and Mars conjunct
  const chandraMangal = moonHouse === marsHouse;
  yogas.push({
    name: "Chandra-Mangal Yoga",
    nameHindi: "चन्द्र-मंगल योग",
    description: chandraMangal
      ? "Moon and Mars are conjunct. This wealth-producing yoga gives financial prosperity through business acumen, courage, and determination. You have sharp instincts and bold decision-making ability."
      : "Moon and Mars are not in the same house. This yoga is absent.",
    isPresent: chandraMangal,
  });

  // Hamsa Yoga: Jupiter in Kendra in own/exaltation sign
  const jupiterInKendra = [0, 3, 6, 9].includes(jupiterHouse);
  const jupRashi = data.planets.find(p => p.planet === "Jupiter")!.rashi;
  const hamsa = jupiterInKendra && (jupRashi === 8 || jupRashi === 11 || jupRashi === 3); // Sagittarius, Pisces, Cancer
  yogas.push({
    name: "Hamsa Yoga",
    nameHindi: "हंस योग",
    description: hamsa
      ? "Jupiter is in a Kendra in its own or exaltation sign. This Pancha Mahapurusha Yoga blesses you with righteousness, spirituality, handsome appearance, and high social standing."
      : "Jupiter is not in Kendra in own/exalted sign. Hamsa Yoga is not formed.",
    isPresent: hamsa,
  });

  // Malavya Yoga: Venus in Kendra in own/exaltation sign
  const venusInKendra = [0, 3, 6, 9].includes(venusHouse);
  const venRashi = data.planets.find(p => p.planet === "Venus")!.rashi;
  const malavya = venusInKendra && (venRashi === 1 || venRashi === 6 || venRashi === 11); // Taurus, Libra, Pisces
  yogas.push({
    name: "Malavya Yoga",
    nameHindi: "मालव्य योग",
    description: malavya
      ? "Venus is in Kendra in own or exaltation sign. This blesses you with beauty, artistic talent, luxurious life, a loving spouse, and material comforts."
      : "Venus is not in Kendra in own/exalted sign. Malavya Yoga is absent.",
    isPresent: malavya,
  });

  // Ruchaka Yoga: Mars in Kendra in own/exaltation sign
  const marsInKendra = [0, 3, 6, 9].includes(marsHouse);
  const marsRashi = data.planets.find(p => p.planet === "Mars")!.rashi;
  const ruchaka = marsInKendra && (marsRashi === 0 || marsRashi === 7 || marsRashi === 9); // Aries, Scorpio, Capricorn
  yogas.push({
    name: "Ruchaka Yoga",
    nameHindi: "रुचक योग",
    description: ruchaka
      ? "Mars is in Kendra in own or exaltation sign. This Pancha Mahapurusha Yoga gives you courage, physical strength, military/leadership qualities, and victory over enemies."
      : "Mars is not in Kendra in own/exalted sign. Ruchaka Yoga is absent.",
    isPresent: ruchaka,
  });

  // Kemadruma Yoga: No planets in 2nd and 12th from Moon (inauspicious)
  const in2nd = data.planets.filter(p => p.planet !== "Moon" && ((getHouse(p.planet) - moonHouse + 12) % 12) === 1);
  const in12th = data.planets.filter(p => p.planet !== "Moon" && ((getHouse(p.planet) - moonHouse + 12) % 12) === 11);
  const kemadruma = in2nd.length === 0 && in12th.length === 0;
  yogas.push({
    name: "Kemadruma Yoga",
    nameHindi: "केमद्रुम योग",
    description: kemadruma
      ? "No planets are in 2nd or 12th from Moon. This challenging yoga may bring periods of financial struggle and emotional isolation. Remedies through charity and Moon worship can help."
      : "Planets are present near Moon, cancelling Kemadruma. This inauspicious yoga is not present.",
    isPresent: kemadruma,
  });

  return yogas;
}

// ─── Manglik Check ───
export interface ManglikResult {
  isManglik: boolean;
  marsHouse: number;
  description: string;
}

export function checkManglik(data: KundaliData): ManglikResult {
  const marsHouse = ((data.planets.find(p => p.planet === "Mars")!.rashi - data.ascendant + 12) % 12);
  const manglikHouses = [0, 3, 6, 7, 11]; // 1st, 4th, 7th, 8th, 12th
  const isManglik = manglikHouses.includes(marsHouse);

  // Check for cancellation
  const marsRashi = data.planets.find(p => p.planet === "Mars")!.rashi;
  const cancelled = marsRashi === 0 || marsRashi === 7 || marsRashi === 9; // Own/exaltation

  return {
    isManglik: isManglik && !cancelled,
    marsHouse: marsHouse + 1,
    description: isManglik && !cancelled
      ? `Mars is in the ${marsHouse + 1}${getOrd(marsHouse + 1)} house, making you Manglik. This may cause delays or turbulence in marriage. Remedies include Mangal Shanti Puja, fasting on Tuesdays, and worshipping Lord Hanuman.`
      : cancelled
        ? `Mars is in the ${marsHouse + 1}${getOrd(marsHouse + 1)} house in its own/exaltation sign, cancelling Manglik Dosha. You are Non-Manglik.`
        : `Mars is in the ${marsHouse + 1}${getOrd(marsHouse + 1)} house and in ${RASHIS[marsRashi]} sign. You are Non-Manglik.`,
  };
}

function getOrd(n: number) {
  if (n === 1) return "st"; if (n === 2) return "nd"; if (n === 3) return "rd"; return "th";
}

// ─── Sadesati ───
export interface SadesatiResult {
  isActive: boolean;
  phase: string;
  description: string;
}

export function checkSadesati(data: KundaliData): SadesatiResult {
  // Saturn's current approximate transit (simplified - using birth chart Saturn)
  const saturnRashi = data.planets.find(p => p.planet === "Saturn")!.rashi;
  const moonRashi = data.moonSign;
  const diff = ((saturnRashi - moonRashi + 12) % 12);

  if (diff === 11) return {
    isActive: true, phase: "Rising",
    description: "Saturn is transiting the 12th house from Moon, marking the beginning of Sade Sati. Be cautious of financial losses and relationship woes. Hard work and patience are your allies."
  };
  if (diff === 0) return {
    isActive: true, phase: "Peak",
    description: "Saturn is transiting over your Moon sign — the peak phase. Health and emotional challenges may arise. Surrender to spiritual practices, maintain discipline, and this phase will strengthen you."
  };
  if (diff === 1) return {
    isActive: true, phase: "Setting",
    description: "Saturn in 2nd from Moon — the setting phase. Financial caution is advised. Small family issues may arise. The intensity is reducing; maintain composure and good habits."
  };

  return {
    isActive: false, phase: "None",
    description: "Sade Sati is not currently active based on your birth chart positions. Saturn is well-placed from your Moon sign."
  };
}

// ─── Gemstone Recommendations ───
export interface GemstoneRecommendation {
  type: string;
  stone: string;
  stoneHindi: string;
  planet: string;
  howToWear: string;
  mantra: string;
  finger: string;
  metal: string;
  day: string;
}

const GEMSTONE_MAP: Record<string, { stone: string; hindi: string; mantra: string; metal: string; finger: string; day: string }> = {
  Sun: { stone: "Ruby", hindi: "माणिक", mantra: "Om Hram Hreem Hroum Sah Suryaya Namah", metal: "Gold", finger: "Ring finger", day: "Sunday" },
  Moon: { stone: "Pearl", hindi: "मोती", mantra: "Om Shram Shreem Shroum Sah Chandraya Namah", metal: "Silver", finger: "Little finger", day: "Monday" },
  Mars: { stone: "Red Coral", hindi: "मूंगा", mantra: "Om Kram Kreem Kroum Sah Bhaumaya Namah", metal: "Gold/Copper", finger: "Ring finger", day: "Tuesday" },
  Mercury: { stone: "Emerald", hindi: "पन्ना", mantra: "Om Bram Breem Broum Sah Budhaya Namah", metal: "Gold", finger: "Little finger", day: "Wednesday" },
  Jupiter: { stone: "Yellow Sapphire", hindi: "पुखराज", mantra: "Om Gram Greem Groum Sah Gurave Namah", metal: "Gold", finger: "Index finger", day: "Thursday" },
  Venus: { stone: "Diamond", hindi: "हीरा", mantra: "Om Dram Dreem Droum Sah Shukraya Namah", metal: "Gold/Platinum", finger: "Middle finger", day: "Friday" },
  Saturn: { stone: "Blue Sapphire", hindi: "नीलम", mantra: "Om Pram Preem Proum Sah Shanaischaraya Namah", metal: "Gold/Iron", finger: "Middle finger", day: "Saturday" },
  Rahu: { stone: "Hessonite", hindi: "गोमेद", mantra: "Om Bhram Bhreem Bhroum Sah Rahave Namah", metal: "Silver", finger: "Middle finger", day: "Saturday" },
  Ketu: { stone: "Cat's Eye", hindi: "लहसुनिया", mantra: "Om Stram Streem Stroum Sah Ketave Namah", metal: "Gold", finger: "Little finger", day: "Tuesday" },
};

export function getGemstoneRecommendations(data: KundaliData): GemstoneRecommendation[] {
  const ascLord = RASHI_LORDS[data.ascendant];
  const moonLord = RASHI_LORDS[data.moonSign];
  const ninthLord = RASHI_LORDS[(data.ascendant + 8) % 12]; // 9th house lord

  const results: GemstoneRecommendation[] = [];

  // Life Stone - Lagna Lord
  const life = GEMSTONE_MAP[ascLord];
  results.push({
    type: "Life Stone",
    stone: life.stone,
    stoneHindi: life.hindi,
    planet: ascLord,
    howToWear: `${life.metal}, on ${life.finger}`,
    mantra: life.mantra,
    finger: life.finger,
    metal: life.metal,
    day: life.day,
  });

  // Lucky Stone - Beneficial planet
  const beneficials = ["Venus", "Jupiter", "Mercury"];
  const luckyPlanet = beneficials.find(b => b !== ascLord) || "Venus";
  const lucky = GEMSTONE_MAP[luckyPlanet];
  results.push({
    type: "Lucky Stone",
    stone: lucky.stone,
    stoneHindi: lucky.hindi,
    planet: luckyPlanet,
    howToWear: `${lucky.metal}, on ${lucky.finger}`,
    mantra: lucky.mantra,
    finger: lucky.finger,
    metal: lucky.metal,
    day: lucky.day,
  });

  // Fortune Stone - 9th house lord
  const fortune = GEMSTONE_MAP[ninthLord];
  results.push({
    type: "Fortune Stone (Bhagya)",
    stone: fortune.stone,
    stoneHindi: fortune.hindi,
    planet: ninthLord,
    howToWear: `${fortune.metal}, on ${fortune.finger}`,
    mantra: fortune.mantra,
    finger: fortune.finger,
    metal: fortune.metal,
    day: fortune.day,
  });

  return results;
}

// ─── Rudraksha Recommendation ───
export interface RudrakshaRecommendation {
  mukhi: number;
  rulingPlanet: string;
  deity: string;
  benefits: string[];
  mantra: string;
  wearingDay: string;
}

const RUDRAKSHA_MAP: Record<string, { mukhi: number; deity: string; benefits: string[]; mantra: string; day: string }> = {
  Sun: { mukhi: 12, deity: "Lord Surya", benefits: ["Leadership qualities", "Health vitality", "Government favours", "Self-confidence"], mantra: "Om Kraum Sah Suryaya Namah", day: "Sunday" },
  Moon: { mukhi: 2, deity: "Lord Shiva & Parvati", benefits: ["Emotional stability", "Peace of mind", "Harmonious relationships", "Mental clarity"], mantra: "Om Namah", day: "Monday" },
  Mars: { mukhi: 3, deity: "Lord Agni", benefits: ["Courage and confidence", "Victory over enemies", "Physical strength", "Release from past karma"], mantra: "Om Kleem Namah", day: "Tuesday" },
  Mercury: { mukhi: 4, deity: "Lord Brahma", benefits: ["Intelligence and wisdom", "Communication skills", "Academic success", "Creative thinking"], mantra: "Om Hreem Namah", day: "Wednesday" },
  Jupiter: { mukhi: 5, deity: "Lord Kalagni Rudra", benefits: ["Spiritual growth", "Wealth and prosperity", "Good health", "Academic excellence"], mantra: "Om Hreem Namah", day: "Thursday" },
  Venus: { mukhi: 6, deity: "Lord Kartikeya", benefits: ["Love and attraction", "Artistic talents", "Material comforts", "Harmonious married life"], mantra: "Om Hreem Hum Namah", day: "Friday" },
  Saturn: { mukhi: 7, deity: "Goddess Mahalakshmi", benefits: ["Wealth and fortune", "Removal of Shani dosha", "Good health", "Success in business"], mantra: "Om Hum Namah", day: "Saturday" },
  Rahu: { mukhi: 9, deity: "Goddess Durga", benefits: ["Positive energy", "Fearlessness", "Willpower", "Protection from negativity"], mantra: "Om Hreem Hum Namah", day: "Saturday" },
  Ketu: { mukhi: 8, deity: "Lord Ganesha", benefits: ["Obstacle removal", "Spiritual awakening", "Protection from evil", "Success in ventures"], mantra: "Om Hum Namah", day: "Tuesday" },
};

export function getRudrakshaRecommendation(data: KundaliData): RudrakshaRecommendation {
  const lord = data.dashaLord;
  const rec = RUDRAKSHA_MAP[lord] || RUDRAKSHA_MAP["Jupiter"];
  return {
    mukhi: rec.mukhi,
    rulingPlanet: lord,
    deity: rec.deity,
    benefits: rec.benefits,
    mantra: rec.mantra,
    wearingDay: rec.day,
  };
}

// ─── Ascendant Report ───
export interface AscendantReport {
  description: string;
  personality: string;
  physical: string;
  health: string;
  career: string;
  relationship: string;
}

const ASC_REPORTS: Record<string, AscendantReport> = {
  Aries: {
    description: "Aries ascendant natives are natural-born leaders with a fiery temperament. Mars, the planet of energy and action, rules their chart, giving them an aggressive yet passionate approach to life.",
    personality: "Bold, competitive, and pioneering. You are a go-getter who doesn't shy away from challenges. Your enthusiasm is infectious, and you inspire others to take action. However, impatience can be your Achilles' heel.",
    physical: "Athletic build with strong features. Sharp eyes, prominent forehead, and reddish complexion. Prone to marks or scars on the head/face. Generally energetic with good vitality.",
    health: "Watch for head-related issues, migraines, and inflammatory conditions. Mars influence makes you prone to accidents and fevers. Regular exercise and anger management are essential.",
    career: "Ideal for leadership, military, sports, engineering, surgery, or entrepreneurship. You thrive in competitive environments. Self-employment suits you better than following orders.",
    relationship: "Passionate but dominating in relationships. You need a partner who can match your energy. Romance is intense but can be short-lived without emotional depth."
  },
  Taurus: {
    description: "Taurus ascendant is ruled by Venus, bestowing beauty, artistic sense, and a love for luxury and comfort. You are grounded, practical, and value stability above all.",
    personality: "Patient, reliable, and determined. You are the rock that others lean on. Your love for beauty and comfort drives your ambitions. Stubbornness is your defining trait — once decided, nothing moves you.",
    physical: "Strong, well-built body with attractive features. Beautiful eyes, thick hair, and a pleasant voice. Tendency towards weight gain. Graceful movements and charming presence.",
    health: "Throat, thyroid, and neck-related issues are common. Watch for diabetes and weight-related problems. A balanced diet and avoiding overindulgence are key to good health.",
    career: "Finance, banking, real estate, agriculture, food industry, fashion, and arts. You excel where patience and persistence are rewarded. Investment and wealth management come naturally.",
    relationship: "Loyal and devoted partner. You seek security and long-term commitment. Possessive tendencies need to be managed. Once committed, you are the most reliable and loving partner."
  },
  Gemini: {
    description: "Gemini ascendant is ruled by Mercury, making you intellectually curious, communicative, and adaptable. You are the chameleon of the zodiac, able to fit into any situation.",
    personality: "Lively, charming, and intellectually sharp. You possess a very active mind and are open to change. Restless and easily bored, you find it tough to concentrate on one thing for long. Your intellect dominates, and when serious, you make excellent decisions.",
    physical: "Bright eyes and expressive features. Flexible, thin build with medium to tall stature. Long limbs, pleasant personality, and wavy hair. Wide forehead and youthful appearance.",
    health: "Arms, wrists, and respiratory issues are common. Prone to stress, anxiety, and lung problems like bronchitis. Mental health needs attention — meditation and breathing exercises help greatly.",
    career: "Journalism, writing, teaching, telecommunications, research, and IT. Any career involving communication and information suits you. Internet-based careers are ideal.",
    relationship: "Emotionally independent and need space. Commitment can feel burdensome. You need intellectual stimulation in relationships. A partner who gives freedom while providing mental engagement is ideal."
  },
  Cancer: {
    description: "Cancer ascendant is ruled by the Moon, making you deeply emotional, intuitive, and nurturing. Home and family are the center of your universe.",
    personality: "Caring, protective, and deeply sensitive. You have strong intuition and can sense others' emotions. Your moods fluctuate like the lunar phases. You are fiercely protective of loved ones.",
    physical: "Round face, pale complexion, and expressive eyes. Medium build with tendency to retain water. Soft features and a nurturing aura. May have a prominent chest area.",
    health: "Digestive issues, water retention, and chest/breast-related problems. Emotional stress directly affects physical health. Avoid cold foods and maintain emotional equilibrium.",
    career: "Hospitality, nursing, psychology, real estate, food industry, and social work. You excel in caregiving roles and anything related to home and family.",
    relationship: "Deeply devoted and emotionally invested. You seek emotional security and can be clingy. Your nurturing nature makes you an ideal partner and parent."
  },
  Leo: {
    description: "Leo ascendant is ruled by the Sun, giving you a regal, commanding presence. You are born to shine and lead, with natural charisma and authority.",
    personality: "Confident, generous, and dramatic. You love the spotlight and have a natural magnetism. Pride and ego can be challenges, but your warmth and generosity win hearts.",
    physical: "Impressive bearing with broad shoulders. Lion-like mane of hair, strong features, and warm complexion. Commanding height and dignified walk.",
    health: "Heart, spine, and eye issues. Watch for blood pressure and back problems. Sunlight is beneficial. Avoid excessive pride-related stress.",
    career: "Administration, politics, entertainment, education, and management. Leadership positions suit you best. Creative fields where you can express yourself are ideal.",
    relationship: "Romantic, loyal, and generous partner. You need admiration and respect. Dramatic in love but fiercely devoted. A partner who appreciates your strengths thrives with you."
  },
  Virgo: {
    description: "Virgo ascendant is ruled by Mercury, making you analytical, detail-oriented, and service-minded. You strive for perfection in everything you do.",
    personality: "Practical, methodical, and health-conscious. You have an eye for detail that others miss. Critical thinking is your strength, but over-analysis can lead to worry. You are the problem-solver everyone turns to.",
    physical: "Neat, well-groomed appearance. Medium build with youthful looks. Clear eyes and pleasant features. Tend to look younger than actual age.",
    health: "Digestive system, nervous system, and intestinal issues. Hypochondria and anxiety about health are common. A regulated diet and stress management are crucial.",
    career: "Healthcare, accounting, editing, research, quality control, and service industries. Any role requiring precision and analytical thinking suits you perfectly.",
    relationship: "Devoted but sometimes overly critical partner. You express love through service and practical gestures. Need a patient partner who appreciates your attention to detail."
  },
  Libra: {
    description: "Libra ascendant is ruled by Venus, blessing you with charm, diplomacy, and an innate sense of beauty and justice. Balance is your life's mission.",
    personality: "Diplomatic, fair-minded, and sociable. You see all sides of every situation. Indecisiveness can be a challenge. You thrive in partnerships and hate conflict.",
    physical: "Attractive, symmetrical features. Dimples, beautiful smile, and graceful build. Tends to gain weight around the middle. Overall pleasing and harmonious appearance.",
    health: "Kidney, lower back, and skin issues. Balance in diet and lifestyle is essential. Avoid excessive sugar and maintain hydration.",
    career: "Law, diplomacy, arts, fashion, interior design, and counseling. Any career involving partnerships, aesthetics, or justice is ideal.",
    relationship: "Partnership-oriented and romantic. You need a relationship to feel complete. Fair and considerate partner but may avoid confrontation at the cost of honesty."
  },
  Scorpio: {
    description: "Scorpio ascendant is ruled by Mars (and Ketu traditionally), giving you intense depth, magnetic personality, and transformative power. You are the phoenix of the zodiac.",
    personality: "Intense, perceptive, and powerful. You see through facades and understand hidden motives. Your emotional depth is unmatched. You never forget — both kindness and betrayal.",
    physical: "Piercing, hypnotic eyes. Strong, compact build with magnetic presence. Dark features and intense gaze. Mysterious aura that draws people in.",
    health: "Reproductive system, urinary tract, and piles. Prone to infections and chronic conditions. Emotional suppression can cause physical ailments. Detox and transformative healing work well.",
    career: "Research, investigation, psychology, surgery, occult sciences, and finance. You excel in uncovering hidden truths and managing crises.",
    relationship: "All-or-nothing in love. Deeply passionate and possessive. Jealousy can be an issue. When you love, it's with your entire being — transformation through partnership."
  },
  Sagittarius: {
    description: "Sagittarius ascendant is ruled by Jupiter, the guru planet, making you optimistic, philosophical, and truth-seeking. You are the eternal student and teacher.",
    personality: "Optimistic, adventurous, and philosophical. You seek the bigger picture and higher truth. Frank to the point of bluntness. Freedom is non-negotiable for you.",
    physical: "Tall, athletic build with strong thighs. Broad forehead, expressive face, and jovial demeanor. May gain weight in later years. Bright, optimistic eyes.",
    health: "Liver, hips, and thigh issues. Prone to weight gain and blood sugar problems. An active, outdoor lifestyle is medicine for you.",
    career: "Teaching, law, publishing, travel, religion, and higher education. International careers and philosophical pursuits suit you perfectly.",
    relationship: "Freedom-loving but loyal when committed. You need a partner who shares your love for adventure and philosophy. Long-distance relationships may feature in your life."
  },
  Capricorn: {
    description: "Capricorn ascendant is ruled by Saturn, the taskmaster. You are ambitious, disciplined, and built for long-term success. Time is your greatest ally.",
    personality: "Serious, responsible, and goal-oriented. You plan decades ahead and work methodically towards your goals. You age in reverse — becoming more relaxed and successful with time.",
    physical: "Lean, bony structure with prominent features. Dark complexion, serious expression. May appear older when young and younger when old. Strong bone structure.",
    health: "Bone, joint, knee, and skin issues. Prone to depression and dental problems. Calcium-rich diet and regular exercise are essential.",
    career: "Administration, government, mining, agriculture, construction, and corporate management. You climb the ladder slowly but surely. CEO material.",
    relationship: "Cautious and slow in love. You need a stable, reliable partner. Not outwardly romantic but deeply loyal and committed once you decide."
  },
  Aquarius: {
    description: "Aquarius ascendant is ruled by Saturn (and Rahu), making you unconventional, humanitarian, and intellectually progressive. You march to your own drum.",
    personality: "Independent, innovative, and humanitarian. You think differently and challenge norms. Emotionally detached yet deeply caring about humanity. Your ideas are ahead of your time.",
    physical: "Tall, lean build with distinctive features. Large forehead, expressive eyes. Unique style of dressing. Youthful appearance maintained throughout life.",
    health: "Circulation, ankles, and nervous system. Prone to anxiety and irregular heartbeat. Grounding practices and social connection are healing.",
    career: "Technology, social work, NGOs, astrology, space science, and innovation. Any field involving progressive ideas and humanitarian work suits you.",
    relationship: "Need intellectual connection above all. Emotionally independent and may seem aloof. You love humanity but struggle with one-on-one intimacy sometimes."
  },
  Pisces: {
    description: "Pisces ascendant is ruled by Jupiter, making you compassionate, spiritual, and deeply intuitive. You are the most spiritual sign, connected to the divine.",
    personality: "Dreamy, empathetic, and artistic. You absorb others' emotions like a sponge. Your imagination is boundless, and you often live in your own world. Sacrifice and service define you.",
    physical: "Soft, dreamy features. Large, soulful eyes. Tendency towards a round or soft body type. Gentle aura and ethereal presence.",
    health: "Feet, lymphatic system, and immune system. Prone to addictions and allergies. Water therapy and spiritual practices are deeply healing.",
    career: "Arts, music, healing, spirituality, cinema, and charitable work. You excel where imagination and compassion are valued.",
    relationship: "Deeply romantic and devoted. You idealize your partner and can be hurt by reality. Boundaries in love need to be learned. Your love is unconditional and selfless."
  },
};

export function getAscendantReport(data: KundaliData): AscendantReport {
  return ASC_REPORTS[RASHIS[data.ascendant]] || ASC_REPORTS["Aries"];
}

// ─── Planetary Report ───
export interface PlanetaryReport {
  planet: Planet;
  house: number;
  sign: string;
  report: string;
}

export function getPlanetaryReports(data: KundaliData): PlanetaryReport[] {
  return data.planets.map(p => {
    const house = ((p.rashi - data.ascendant + 12) % 12) + 1;
    const sign = RASHIS[p.rashi];
    const signLord = RASHI_LORDS[p.rashi];
    
    return {
      planet: p.planet,
      house,
      sign,
      report: generatePlanetReport(p.planet, house, sign, signLord, p.isRetrograde),
    };
  });
}

function generatePlanetReport(planet: Planet, house: number, sign: string, signLord: string, isRetro: boolean): string {
  const houseThemes: Record<number, string> = {
    1: "self, personality, and physical body. This placement strongly influences your character and how the world sees you",
    2: "wealth, family, and speech. This affects your financial prospects and family relationships",
    3: "courage, siblings, and communication. This impacts your bravery, artistic skills, and relationship with siblings",
    4: "home, mother, and emotional foundation. This deeply affects your domestic life, property matters, and inner peace",
    5: "children, creativity, and intelligence. This influences your romantic life, progeny, and creative expression",
    6: "enemies, health, and service. This affects your ability to overcome obstacles and your health patterns",
    7: "partnerships, marriage, and business. This strongly influences your married life and business associations",
    8: "transformation, longevity, and occult. This impacts inheritance, sudden events, and spiritual transformation",
    9: "fortune, dharma, and higher learning. This affects your luck, spirituality, and relationship with father",
    10: "career, status, and public life. This strongly influences your professional success and reputation",
    11: "gains, desires, and social networks. This affects your income, friendships, and fulfillment of ambitions",
    12: "losses, spirituality, and liberation. This impacts foreign travels, expenses, and spiritual advancement",
  };

  const retNote = isRetro ? " Being retrograde, this planet's energy is internalized, creating a deeper, more reflective influence that manifests in unexpected ways." : "";

  return `The planet ${planet} is in the ${house}${getOrd(house)} house of your Kundli with the ${sign} sign (ruled by ${signLord}). This house governs ${houseThemes[house]}.${retNote} The influence of ${signLord} as the sign lord modifies how ${planet}'s energy expresses itself in your life, creating a unique karmic pattern that shapes your experiences in this area.`;
}
