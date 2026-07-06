import fs from 'fs';

const darshans = JSON.parse(fs.readFileSync("tmp/darshans.json", "utf8"));
console.log(`Loaded ${darshans.length} darshans:`);
darshans.forEach(d => {
    console.log(`- ${d.name} (slug: ${d.slug})`);
});
