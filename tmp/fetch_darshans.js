import fs from 'fs';

async function fetchDarshans() {
    try {
        console.log("Fetching darshans...");
        const res = await fetch("https://namandarshan-astrotalk-testing-backend.onrender.com/api/darshan");
        if (!res.ok) {
            console.error("Failed to fetch darshans, status:", res.status);
            return;
        }
        const data = await res.json();
        fs.writeFileSync("tmp/darshans.json", JSON.stringify(data, null, 2));
        console.log(`Saved ${data.length} darshans to tmp/darshans.json`);
    } catch (e) {
        console.error("Error:", e);
    }
}

fetchDarshans();
