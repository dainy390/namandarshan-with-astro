import fs from 'fs';

const pbPath = 'C:\\Users\\roya6\\.gemini\\antigravity\\conversations\\1729f76b-83f1-4eb6-9b13-6bc4183d0a8e.pb';
const buffer = fs.readFileSync(pbPath);

// Convert buffer to string with binary/latin1 decoding so we don't drop bytes
const content = buffer.toString('latin1');

// Match all URLs starting with https://namandarshan.com
// We will look for sequences of characters that form a URL
const regex = /https?:\/\/[a-zA-Z0-9\-_./%]+/g;
const matches = content.match(regex) || [];

console.log("Total matched URLs in PB file:", matches.length);

const uniqueUrls = Array.from(new Set(matches));
console.log("Unique URLs in PB file:", uniqueUrls.length);

// Let's filter only the URLs that don't contain standard domains other than namandarshan.com
const namandarshanUrls = uniqueUrls.filter(url => url.includes('namandarshan.com'));
console.log("Unique namandarshan.com URLs:", namandarshanUrls.length);

fs.writeFileSync('tmp/pb_matched_urls.json', JSON.stringify(namandarshanUrls, null, 2));
console.log("Saved unique namandarshan URLs to tmp/pb_matched_urls.json");
