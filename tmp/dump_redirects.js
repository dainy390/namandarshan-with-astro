import fs from 'fs';

const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));

console.log("SOURCE -> DESTINATION");
vercel.redirects.forEach((r, idx) => {
    if (r.statusCode) {
        console.log(`${idx + 1}. [Status ${r.statusCode}] ${r.source} -> ${r.destination}`);
    } else {
        console.log(`${idx + 1}. ${r.source} -> ${r.destination}`);
    }
});
