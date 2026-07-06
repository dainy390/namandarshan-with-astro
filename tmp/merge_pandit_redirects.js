import fs from 'fs';

// Load existing vercel.json
const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
let currentRedirects = vercel.redirects;

// Load generated pandit redirects
const panditRedirects = JSON.parse(fs.readFileSync('tmp/pandit_redirects.json', 'utf8'));

console.log("Current redirects count before merging pandits:", currentRedirects.length);

// We want to keep unique ones
const uniquePanditRedirectsMap = {};
panditRedirects.forEach(rule => {
    uniquePanditRedirectsMap[rule.source] = rule;
});
const uniquePanditRedirects = Object.values(uniquePanditRedirectsMap);
console.log(`Unique pandit redirect entries to enforce: ${uniquePanditRedirects.length}`);

// For each unique pandit redirect, filter out any existing redirects or blocks that match the source
uniquePanditRedirects.forEach(newRule => {
    const initialLen = currentRedirects.length;
    currentRedirects = currentRedirects.filter(r => {
        let rClean = r.source;
        if (rClean.endsWith('/') && rClean !== '/' && !rClean.includes('*')) {
            rClean = rClean.slice(0, -1);
        }
        return rClean !== newRule.source;
    });
    const removedCount = initialLen - currentRedirects.length;
    if (removedCount > 0) {
        console.log(`Removed ${removedCount} pre-existing rule(s) for source: ${newRule.source}`);
    }
});

// Insert new rules just after the sitemap index redirect (at index 1)
currentRedirects.splice(1, 0, ...uniquePanditRedirects);

vercel.redirects = currentRedirects;

fs.writeFileSync('vercel.json', JSON.stringify(vercel, null, 4));
console.log("Successfully updated vercel.json with Pandit/Panditji redirects!");
console.log("New total redirects count:", vercel.redirects.length);
