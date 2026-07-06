import { KundaliData, RASHIS, RASHI_LORDS, Planet } from "./kundali";

const RASHI_TRAITS: Record<string, string> = {
  Aries: "Bold, energetic, pioneering, and courageous. Natural leaders with a strong desire to initiate action.",
  Taurus: "Stable, patient, practical, and sensual. Values security and comfort with a strong aesthetic sense.",
  Gemini: "Intellectual, communicative, adaptable, and curious. Quick-witted with diverse interests.",
  Cancer: "Nurturing, intuitive, emotional, and protective. Deeply connected to home and family.",
  Leo: "Charismatic, creative, generous, and proud. Natural performers who seek recognition and self-expression.",
  Virgo: "Analytical, detail-oriented, practical, and service-minded. Strives for perfection and purity.",
  Libra: "Diplomatic, harmonious, fair-minded, and partnership-oriented. Seeks balance in all things.",
  Scorpio: "Intense, transformative, resourceful, and passionate. Deep emotional and psychological depth.",
  Sagittarius: "Optimistic, philosophical, adventurous, and freedom-loving. Seeks truth and higher knowledge.",
  Capricorn: "Ambitious, disciplined, responsible, and structured. Focused on long-term achievement.",
  Aquarius: "Innovative, humanitarian, independent, and progressive. Visionary thinking and social consciousness.",
  Pisces: "Compassionate, imaginative, spiritual, and sensitive. Deep connection to the transcendent and artistic.",
};

const PLANET_IN_HOUSE: Record<string, Record<number, string>> = {
  Sun: {
    0: "Strong personality and leadership qualities. You command attention and have a natural authority.",
    1: "Wealth through self-effort. Strong speech and family values. May have a sharp tongue.",
    2: "Courageous and energetic. Good relationship with siblings. Strong willpower.",
    3: "Challenges with property or mother's health. Inner strength through overcoming domestic obstacles.",
    4: "Creative, intelligent, and possibly involved in speculative activities. Good with children.",
    5: "May face health challenges or conflicts. Service-oriented with ability to overcome enemies.",
    6: "Strong partnerships but potential ego clashes in relationships. Seeks a powerful spouse.",
    7: "Transformative experiences. Interest in occult sciences. Potential for inheritance.",
    8: "Fortunate with higher education and spiritual pursuits. Father figure is influential.",
    9: "Strong career and public recognition. Authority in professional life.",
    10: "Good gains and fulfillment of desires. Influential social circle.",
    11: "Spiritual inclination. May face expenses. Interest in foreign lands or isolation.",
  },
  Moon: {
    0: "Emotionally expressive, attractive appearance. Changeable nature but charming personality.",
    1: "Wealthy through family. Sweet speech. Beautiful face. Love for good food.",
    2: "Courageous mind. Good relationships with siblings. Creative communication.",
    3: "Emotional connection to home. Close bond with mother. Property gains possible.",
    4: "Emotionally intelligent. Creative with children. Romantic and artistic nature.",
    5: "Fluctuating health. Many small obstacles but emotional resilience to overcome them.",
    6: "Beautiful and charming spouse. Emotional fulfillment through partnerships.",
    7: "Emotional transformation. Intuitive and psychic abilities. Interest in mysteries.",
    8: "Spiritually inclined. Long journeys. Connection with foreign cultures. Righteous.",
    9: "Public popularity. Career involves dealing with people. Emotional satisfaction from work.",
    10: "Good gains from various sources. Supportive friends. Desires are fulfilled.",
    11: "Expenses on comfort. Spiritual retreats. Vivid dream life. Compassionate nature.",
  },
};

function getPlanetHouseInterpretation(planet: Planet, house: number): string {
  return PLANET_IN_HOUSE[planet]?.[house] || 
    `${planet} in the ${house + 1}${getOrdinalSuffix(house + 1)} house influences matters of ${getHouseTheme(house)}.`;
}

function getOrdinalSuffix(n: number): string {
  if (n === 1) return "st";
  if (n === 2) return "nd";
  if (n === 3) return "rd";
  return "th";
}

function getHouseTheme(house: number): string {
  const themes = [
    "self, personality, and physical body",
    "wealth, family, and speech",
    "courage, siblings, and communication",
    "home, mother, and emotional foundation",
    "children, creativity, and intelligence",
    "enemies, health, and service",
    "partnerships, marriage, and business",
    "transformation, longevity, and occult",
    "fortune, dharma, and higher learning",
    "career, status, and public life",
    "gains, desires, and social networks",
    "losses, spirituality, and liberation",
  ];
  return themes[house] || "";
}

export function generateSummary(data: KundaliData): {
  personality: string;
  ascendantAnalysis: string;
  moonSignAnalysis: string;
  sunSignAnalysis: string;
  keyPlanetaryInfluences: string[];
  nakshatraAnalysis: string;
  generalPrediction: string;
} {
  const ascRashi = RASHIS[data.ascendant];
  const moonRashi = RASHIS[data.moonSign];
  const sunRashi = RASHIS[data.sunSign];
  const ascLord = RASHI_LORDS[data.ascendant];
  
  const personality = `With ${ascRashi} (${ascLord}-ruled) Ascendant, ${moonRashi} Moon, and ${sunRashi} Sun, you possess a unique blend of ${RASHI_TRAITS[ascRashi]?.split(".")[0].toLowerCase()}. Your emotional nature is colored by the ${moonRashi} Moon, making you ${RASHI_TRAITS[moonRashi]?.split(",").slice(0, 2).join(",").toLowerCase()}.`;
  
  const ascendantAnalysis = `Your Ascendant (Lagna) is in ${ascRashi} at ${data.ascendantDegree.toFixed(2)}° in ${data.ascendantNakshatra} Nakshatra. ${RASHI_TRAITS[ascRashi]} The lord of your Ascendant is ${ascLord}, which significantly influences your life path and physical constitution.`;
  
  const moonSignAnalysis = `Your Moon is placed in ${moonRashi}, which is your Rashi (Moon Sign). ${RASHI_TRAITS[moonRashi]} This placement deeply influences your emotional responses, mental patterns, and subconscious tendencies.`;
  
  const sunSignAnalysis = `Your Sun is in ${sunRashi}. ${RASHI_TRAITS[sunRashi]} The Sun represents your soul's purpose, vitality, and the core of your identity.`;

  const keyPlanetaryInfluences: string[] = [];
  data.planets.forEach(pp => {
    const house = ((pp.rashi - data.ascendant + 12) % 12);
    const interp = getPlanetHouseInterpretation(pp.planet, house);
    const retroNote = pp.isRetrograde ? " (Retrograde - internalized energy)" : "";
    keyPlanetaryInfluences.push(
      `**${pp.planet}** in ${pp.rashiName} (House ${house + 1})${retroNote}: ${interp}`
    );
  });
  
  const nakshatraAnalysis = `Your birth Nakshatra is **${data.nakshatra}** (Pada ${data.nakshatraPada}), ruled by **${data.dashaLord}**. This Nakshatra governs the starting Mahadasha (planetary period) of your life. The qualities of ${data.nakshatra} shape your innate temperament and life direction at a deep level.`;

  const benefics = data.planets.filter(p => 
    ["Jupiter", "Venus", "Moon", "Mercury"].includes(p.planet)
  );
  const beneficHouses = benefics.map(p => ((p.rashi - data.ascendant + 12) % 12) + 1);
  const maleficPlanets = data.planets.filter(p => 
    ["Saturn", "Mars", "Rahu", "Ketu"].includes(p.planet)
  );
  
  const generalPrediction = `Overall, your chart shows natural benefic planets (${benefics.map(b => b.planet).join(", ")}) placed in houses ${beneficHouses.join(", ")}, which brings positive influences to those areas of life. ${maleficPlanets.some(p => !p.isRetrograde) ? "Some challenging planetary placements suggest areas of growth and transformation." : ""} The Dasha sequence starting from ${data.dashaLord} will shape the timing of major life events. This Kundali provides a foundational map — consult with a learned Jyotishi for detailed predictions and remedies.`;
  
  return {
    personality,
    ascendantAnalysis,
    moonSignAnalysis,
    sunSignAnalysis,
    keyPlanetaryInfluences,
    nakshatraAnalysis,
    generalPrediction,
  };
}
