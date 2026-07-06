import Groq from "groq-sdk";
import type { KundaliData } from "./kundali";

const API_KEY = (import.meta.env.VITE_GROQ_API_KEY as string) || "";

const groq = new Groq({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true 
});

const DIVINE_SYSTEM_PROMPT = `You are Jyotishi Pandit — a wise, compassionate, and deeply revered Vedic astrologer (Jyotishi) in the lineage of ancient seers of Bharat.

Your manner of speaking is:
- Deeply spiritual yet accessible. Begin responses with "🕉 Pranam" or "ॐ" occasionally.
- You refer to planets as "Grahas" (e.g., Surya, Chandra, Mangal, Budha, Guru, Shukra, Shani, Rahu, Ketu).
- You speak of astrology as "Jyotish" — the divine science of light.
- You always tie interpretations back to dharma, karma, and spiritual growth.
- You are concise but profound. No unnecessary padding.
- You offer hope and perspective, never fear or doom.
- You occasionally quote from Brihat Parashara Hora Shastra or Vedic wisdom.
- Format your responses with clear sections using markdown (bold, bullets) — mobile-friendly, not excessively long.
- When giving remedies, suggest traditional Vedic ones (mantras, gemstones, fasting, charity — with the planet's name).`;

export type ChatMessage = {
  role: "user" | "model";
  parts: string;
};

function buildKundaliContext(data: KundaliData): string {
  const planets = data.planets
    .map(
      (p) =>
        `${p.planet} in ${p.rashiName} (House ${((p.rashi - data.ascendant + 12) % 12) + 1})${p.isRetrograde ? " [Retrograde]" : ""}`
    )
    .join(", ");

  return `
Kundali of: ${data.birthDetails.name}
Birth: ${data.birthDetails.date} at ${data.birthDetails.time}, ${data.birthDetails.place}
Ascendant (Lagna): ${["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"][data.ascendant]} at ${data.ascendantDegree.toFixed(1)}° in ${data.ascendantNakshatra} Nakshatra
Moon Sign (Rashi): ${["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"][data.moonSign]}
Sun Sign: ${["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"][data.sunSign]}
Birth Nakshatra: ${data.nakshatra} (Pada ${data.nakshatraPada}), ruled by ${data.dashaLord}
Dasha Lord: ${data.dashaLord}
Planetary Positions: ${planets}
  `.trim();
}

export async function getDeepSpiritualReading(data: KundaliData): Promise<string> {
  const context = buildKundaliContext(data);
  const prompt = `
Based on this Kundali, provide a comprehensive divine reading covering:
1. **Soul's Purpose (Dharma)** — What is this soul's calling?
2. **Personality & Appearance** — Lagna and its influence.
3. **Mind & Emotions** — Chandra (Moon) analysis.
4. **Career & Karma** — 10th House and key Grahas.
5. **Relationships** — 7th House analysis.
6. **Spiritual Path** — 9th and 12th House, Ketu's placement.
7. **Vedic Remedies** — 2-3 specific remedies for growth.

Keep each section concise (2-4 sentences), deeply Vedic in tone, and spiritually uplifting.

Kundali Data:
${context}
  `.trim();

  const completion = await groq.chat.completions.create({
    messages: [
      { role: "system", content: DIVINE_SYSTEM_PROMPT },
      { role: "user", content: prompt }
    ],
    model: "llama-3.3-70b-versatile",
  });

  return completion.choices[0]?.message?.content || "The stars are silent momentarily. Please try again.";
}

export async function getAIPanditResponse(
  data: KundaliData,
  history: any[], // Flexible to handle existing history structure
  userMessage: string
): Promise<string> {
  const context = buildKundaliContext(data);
  
  const messages: any = [
    { role: "system", content: DIVINE_SYSTEM_PROMPT },
    { role: "system", content: `Context: You are interpreting the Kundali of ${data.birthDetails.name}.\n\nKundali Data:\n${context}` },
  ];

  // Convert and add history
  history.forEach(msg => {
    messages.push({
      role: msg.role === "model" ? "assistant" : msg.role,
      content: msg.parts || msg.content
    });
  });

  messages.push({ role: "user", content: userMessage });

  const completion = await groq.chat.completions.create({
    messages,
    model: "llama-3.3-70b-versatile",
  });

  return completion.choices[0]?.message?.content || "🙏 I apologize — the celestial connection was interrupted.";
}
