import fs from 'fs';

const darshans = JSON.parse(fs.readFileSync("tmp/darshans.json", "utf8"));

async function findMatches() {
    try {
        const res = await fetch("https://namandarshan-astrotalk-testing-backend.onrender.com/api/temples");
        const temples = await res.json();
        
        console.log(`Checking ${temples.length} temples against ${darshans.length} darshans...`);
        
        for (const temple of temples) {
            // Find a darshan whose name matches or is very similar
            const cleanTempleName = temple.name.toLowerCase().replace(/temple|mandir/g, "").trim();
            const matchingDarshan = darshans.find(d => {
                const cleanDarshanName = d.name.toLowerCase().replace(/temple|mandir/g, "").trim();
                return cleanDarshanName.includes(cleanTempleName) || cleanTempleName.includes(cleanDarshanName);
            });
            
            if (matchingDarshan) {
                console.log(`Temple: "${temple.name}" (slug: ${temple.slug}) -> Matching Darshan: "${matchingDarshan.name}" (slug: ${matchingDarshan.slug})`);
            }
        }
    } catch(e) {
        console.error(e);
    }
}
findMatches();
