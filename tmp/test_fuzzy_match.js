import fs from 'fs';

const darshans = JSON.parse(fs.readFileSync("tmp/darshans.json", "utf8"));

const noiseWords = new Set(['temple', 'mandir', 'devasthanam', 'dham', 'swamy', 'sri', 'shree', 'shri', 'the', 'vipdarshan', 'darshan', 'jyotirlinga', 'jyotirling']);

function findFuzzyMatch(slugParam) {
    const cleanParam = slugParam
        .toLowerCase()
        .replace(/-(vipdarshan|darshan|temple|mandir|devasthanam|dham|swamy|sri|shree|shri|the)$/g, '')
        .replace(/^(sri|shree|shri|the)-/g, '');
        
    const terms = cleanParam.split('-').filter(t => t.length > 2 && !noiseWords.has(t));
    if (terms.length === 0) return null;
    
    // Find matching darshans in local array
    const matches = darshans.filter(d => {
        const dSlug = d.slug.toLowerCase();
        const dName = d.name.toLowerCase();
        return terms.some(t => dSlug.includes(t) || dName.includes(t));
    });
    
    let bestMatch = null;
    let highestScore = 0;
    
    for (const match of matches) {
        let score = 0;
        const matchSlug = match.slug.toLowerCase();
        const matchName = match.name.toLowerCase();
        
        for (const term of terms) {
            if (matchSlug.includes(term)) score += 2;
            if (matchName.includes(term)) score += 1;
        }
        
        // Exact startsWith matches get extra boost
        if (matchSlug.startsWith(terms[0])) {
            score += 3;
        }
        
        if (score > highestScore) {
            highestScore = score;
            bestMatch = match;
        }
    }
    
    return bestMatch;
}

async function test() {
    try {
        const res = await fetch("https://namandarshan-astrotalk-testing-backend.onrender.com/api/temples");
        const temples = await res.json();
        
        let successCount = 0;
        for (const temple of temples) {
            const match = findFuzzyMatch(temple.slug);
            if (match) {
                successCount++;
                console.log(`[MATCH] "${temple.name}" (${temple.slug}) -> "${match.name}" (${match.slug})`);
            } else {
                console.log(`[MISS]  "${temple.name}" (${temple.slug})`);
            }
        }
        console.log(`\nFuzzy matching resolved ${successCount} out of ${temples.length} temples!`);
    } catch(e) {
        console.error(e);
    }
}
test();
