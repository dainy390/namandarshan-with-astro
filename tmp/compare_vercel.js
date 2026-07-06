import fs from 'fs';

const oldVercel = JSON.parse(fs.readFileSync('vercel.json.bak', 'utf8'));
const newVercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));

console.log("Old redirects count:", oldVercel.redirects.length);
console.log("New redirects count:", newVercel.redirects.length);

const oldSources = new Set(oldVercel.redirects.map(r => r.source));
const addedRedirects = newVercel.redirects.filter(r => !oldSources.has(r.source));

console.log("Newly added redirects count:", addedRedirects.length);
fs.writeFileSync('tmp/added_redirects.json', JSON.stringify(addedRedirects, null, 2));
