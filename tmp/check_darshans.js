import fs from 'fs';

async function checkTemples() {
    try {
        console.log("Fetching temples...");
        const templesRes = await fetch("https://namandarshan-astrotalk-testing-backend.onrender.com/api/temples");
        if (!templesRes.ok) {
            console.error("Failed to fetch temples status:", templesRes.status);
            return;
        }
        const temples = await templesRes.json();
        console.log(`Found ${temples.length} temples. Checking darshan pages...`);

        const validTemples = [];
        const invalidTemples = [];

        for (const temple of temples) {
            // Calculate baseRoute like in frontend
            const ctaUrl = temple.darshan_cta_url ? temple.darshan_cta_url : "";
            // Normalize route (simple version)
            let route = ctaUrl;
            if (!route) {
                route = temple.slug ? `/darshan/${temple.slug}` : "";
            }
            if (route.startsWith("http://") || route.startsWith("https://")) {
                try {
                    const parsed = new URL(route);
                    route = parsed.pathname + parsed.search + parsed.hash;
                } catch (e) {
                    const match = route.match(/^https?:\/\/[^\/]+(\/.*)/);
                    if (match && match[1]) {
                        route = match[1];
                    }
                }
            }
            
            const match = route.match(/^\/darshan\/([^?#]+)/);
            const darshanSlug = match ? match[1] : null;

            if (!darshanSlug) {
                console.log(`[Temple] ${temple.name} (Slug: ${temple.slug}) - No darshan slug. Route: ${route}`);
                invalidTemples.push({ temple, reason: "No darshan slug / external url: " + route });
                continue;
            }

            // Fetch darshan
            const darshanRes = await fetch(`https://namandarshan-astrotalk-testing-backend.onrender.com/api/darshan/${darshanSlug}`);
            if (darshanRes.ok) {
                const darshanData = await darshanRes.json();
                if (darshanData.message || !darshanData.name) {
                    invalidTemples.push({ temple, reason: `API returned message: ${darshanData.message}` });
                    console.log(`[INVALID] ${temple.name} (Slug: ${temple.slug}) -> Darshan slug: ${darshanSlug} not found.`);
                } else {
                    validTemples.push(temple);
                    console.log(`[VALID] ${temple.name} (Slug: ${temple.slug}) -> Darshan slug: ${darshanSlug} exists!`);
                }
            } else {
                invalidTemples.push({ temple, reason: `HTTP status: ${darshanRes.status}` });
                console.log(`[INVALID] ${temple.name} (Slug: ${temple.slug}) -> Darshan slug: ${darshanSlug} HTTP status: ${darshanRes.status}`);
            }
        }

        let output = "================ RESULTS ================\n";
        output += `Total valid: ${validTemples.length}\n`;
        output += `Total invalid/missing darshan: ${invalidTemples.length}\n\n`;

        output += "Valid temples:\n";
        validTemples.forEach(t => {
            output += `- ${t.name} (slug: ${t.slug})\n`;
        });

        output += "\nInvalid temples (temple not found):\n";
        invalidTemples.forEach(it => {
            output += `- ${it.temple.name} (slug: ${it.temple.slug}) [Reason: ${it.reason}]\n`;
        });

        fs.writeFileSync("tmp/results.txt", output);
        console.log("Results written to tmp/results.txt");

    } catch (e) {
        console.error("Error:", e);
    }
}

checkTemples();
