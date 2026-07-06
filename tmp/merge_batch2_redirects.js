import fs from 'fs';

// 1. Define the new raw mappings requested
const rawMappings = [
  { source: "/travel/thillai-nataraja-temple-chidambaram-tamil-nadu/", destination: "/temples/thillai-nataraja-temple", permanent: true },
  { source: "/live-darshan-golden/", destination: "/live-darshan/golden-temple", permanent: true },
  { source: "/travel/udupi-sri-krishna/", destination: "/temples/udupi-sri-krishna-matha-temple", permanent: true },
  { source: "/pandit-in-nashik/", statusCode: 404, destination: "/404" },
  { source: "/pandit-in-rishikesh/", statusCode: 404, destination: "/404" },
  { source: "/travel/trimbakeshwar-jyotirlinga/", destination: "/temples/trimbakeshwar-jyotirlinga-temple", permanent: true },
  { source: "/puja-booking", destination: "/puja", permanent: true },
  { source: "/pandit-in-yamunotri/", statusCode: 404, destination: "/404" },
  { source: "/ttbm_places/gendarmenmarkt-taubenstr/", statusCode: 404, destination: "/404" },
  { source: "/travel-organizer/jagannath-yatra-packages/feed/", statusCode: 404, destination: "/404" },
  { source: "/elementor-hf/home-duplicate-147/", statusCode: 404, destination: "/404" },
  { source: "/puja_/", destination: "/puja", permanent: true },
  { source: "/travel-category/iskcon-mayapur/feed/", statusCode: 404, destination: "/404" },
  { source: "/crm-login", statusCode: 404, destination: "/404" },
  { source: "/blog/mysteries-of-jagannath-puri", destination: "/blogs/mysteries-of-jagannath-puri", permanent: true },
  { source: "/travel-category/platinum-yatra-package/feed/", destination: "/exclusive-temple-darshan-packeges", permanent: true },
  { source: "/travel-category/varadharaja-perumal-temple/feed/", statusCode: 404, destination: "/404" },
  { source: "/travel/siddhivinayak-temple/", destination: "/temples/siddhivinayak-temple", permanent: true },
  { source: "/travel-category/udupi-sri-krishna-matha/feed/", statusCode: 404, destination: "/404" },
  { source: "/travel/kalighat-kali-temple/", destination: "/temples/kalighat-kali-temple", permanent: true },
  { source: "/wp-admin/admin.php", statusCode: 404, destination: "/404" },
  { source: "/travel-category/mahakaleshwar-jyotirlinga/feed/", statusCode: 404, destination: "/404" },
  { source: "/tour/varadharaja-perumal/", destination: "/temples/varadharaja-perumal-temple", permanent: true },
  { source: "/tour/vaishno-devi-temple/", destination: "/temples/vaishno-devi-temple", permanent: true },
  { source: "/tour/chardham-yatra-packages/", destination: "/char-dham-yatra", permanent: true },
  { source: "/travel-category/chamundeshwari-temple/feed/", statusCode: 404, destination: "/404" },
  { source: "/product/68e36caf94276/feed/", statusCode: 404, destination: "/404" },
  { source: "/travel-category/swaminarayan-akshardham-mandir/feed/", statusCode: 404, destination: "/404" },
  { source: "/elementor-hf/my-account-4/", statusCode: 404, destination: "/404" },
  { source: "/elementor-hf/vrindavan-yatra-2/", statusCode: 404, destination: "/404" },
  { source: "/tour/kedarnath-platinum-yatra-package/", destination: "/exclusive-temple-darshan-packeges", permanent: true },
  { source: "/tour/airavatesvara-temple/", destination: "/temples/airavatesvara-temple", permanent: true },
  { source: "/product/68e1094555784/feed/", statusCode: 404, destination: "/404" },
  { source: "/travel/shodashopachar-puja-kedarnath/", statusCode: 404, destination: "/404" },
  
  // Split dashicons and tinymce from single GSC line
  { source: "/wp-includes/css/dashicons.min.css", statusCode: 404, destination: "/404" },
  { source: "/wp-includes/js/tinymce/skins/wordpress/wp-content.css", statusCode: 404, destination: "/404" },
  
  { source: "/wp-admin/", statusCode: 404, destination: "/404" },
  { source: "/tour/kashi-vishwanath-temple/", destination: "/temples/kashi-vishwanath-temple", permanent: true },
  { source: "/travel/parasnath-digambar-jain-temple/", destination: "/temples/parasnath-digambar-jain-temple", permanent: true },
  { source: "/tour/baidyanath-temple/", statusCode: 404, destination: "/404" },
  { source: "/package/vrindavan-yatra/", destination: "/vrindavan-yatra", permanent: true },
  { source: "/tour/parasnath-digambar-jain-temple/", destination: "/temples/parasnath-digambar-jain-temple", permanent: true },
  { source: "/tour/badrinath-temple/", statusCode: 410, destination: "/" },
  { source: "/elementor-hf/home1-2-2/", statusCode: 404, destination: "/404" },
  { source: "/tour/kalighat-kali-temple/", destination: "/temples/kalighat-kali-temple", permanent: true },
  { source: "/travel/mahakaleshwar-jyotirlinga/", destination: "/temples/mahakaleshwar-jyotirlinga-temple", permanent: true },
  { source: "/travel/vindhyachal-temple/", destination: "/temples/vindhyachal-temple", permanent: true },
  { source: "/travel-category/neelkanth-mahadev-temple/", destination: "/temples/neelkanth-mahadev-temple", permanent: true },
  { source: "/tour/siddhivinayak-temple/", destination: "/temples/siddhivinayak-temple", permanent: true },
  { source: "/travel-category/tara-temple/", destination: "/temples/tara-temple", permanent: true },
  { source: "/ttbm_guide/rabiul/", statusCode: 404, destination: "/404" },
  { source: "/tour/ranganathaswamy-temple/", destination: "/temples/ranganathaswamy-temple", permanent: true },
  { source: "/wp-includes/js/wp-emoji-release.min.js", statusCode: 404, destination: "/404" },
  { source: "/elementor-hf/header/", statusCode: 404, destination: "/404" },
  { source: "/tour/shree-somnath-jyotirling-temple/", destination: "/temples/shree-somnath-jyotirling-temple", permanent: true },
  { source: "/tour/thillai-nataraja-temple-chidambaram-tamil-nadu/", destination: "/temples/thillai-nataraja-temple", permanent: true },
  { source: "/tour/dwarkadhish-temple/", destination: "/temples/dwarkadhish-temple", permanent: true },
  { source: "/tour/kamakhyay-temple/", statusCode: 410, destination: "/" },
  { source: "/tour/tara-temple-tarapith/", destination: "/temples/tara-temple", permanent: true },
  { source: "/wp-content/uploads/(.*)", statusCode: 404, destination: "/404" },
  { source: "/tour/dakshineswar-kali-temple/", destination: "/temples/dakshineswar-kali-temple", permanent: true },
  { source: "/tour/vindhyachal-temple/", destination: "/temples/vindhyachal-temple", permanent: true },
  { source: "/travel-category/swaminarayan-akshardham-mandir/", destination: "/temples/swaminarayan-akshardham-mandir-temple", permanent: true },
  { source: "/tour/gangotri-temple/", destination: "/temples/gangotri-temple", permanent: true },
  { source: "/travel/vrindavan-yatra-package-2/", statusCode: 404, destination: "/404" },
  { source: "/yatra-specials/", statusCode: 404, destination: "/404" },
  { source: "/travel/bhimashankar-temple/", destination: "/temples/bhimashankar-jyotirlinga-temple", permanent: true },
  { source: "/travel-category/padmanabhaswamy-temple/", destination: "/temples/padmanabhaswamy-temple", permanent: true },
  { source: "/elementor-hf/footer/", statusCode: 404, destination: "/404" },
  { source: "/tour/chamundeshwari-temple/", destination: "/temples/chamundeshwari-temple", permanent: true },
  { source: "/tour/sabarimala-sastha-temple/", destination: "/temples/sabarimala-temple", permanent: true },
  { source: "/tour/naina-devi-temple/", destination: "/temples/naina-devi-temple", permanent: true },
  { source: "/tour/mahakaleshwar-jyotirlinga/", destination: "/temples/mahakaleshwar-jyotirlinga-temple", permanent: true },
  { source: "/tour/banke-bihari-temple/", destination: "/temples/banke-bihari-temple", permanent: true },
  { source: "/tour/neelkanth-mahadev-temple/", destination: "/temples/neelkanth-mahadev-temple", permanent: true }
];

// Load existing vercel.json
const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
const currentRedirects = vercel.redirects;

console.log("Current redirects length:", currentRedirects.length);

// Helper to strip trailing slash unless wildcard
function cleanSource(src) {
  let cleaned = src;
  if (cleaned.endsWith('/') && cleaned !== '/' && !cleaned.includes('*')) {
    cleaned = cleaned.slice(0, -1);
  }
  return cleaned;
}

// Add global wildcards for WordPress & Elementor spam
const globalWildcards = [
  { source: "/wp-includes/(.*)", statusCode: 404, destination: "/404" },
  { source: "/wp-admin/(.*)", statusCode: 404, destination: "/404" },
  { source: "/elementor-hf/(.*)", statusCode: 404, destination: "/404" },
  { source: "/(.*)/feed", statusCode: 404, destination: "/404" }
];

const processedNew = [];

// Clean and merge raw mappings
rawMappings.forEach(mapping => {
  const cleanedSrc = cleanSource(mapping.source);
  
  // Check if it already exists in current redirects (matching either exact or cleaned)
  const exists = currentRedirects.find(r => cleanSource(r.source) === cleanedSrc);
  if (exists) {
    console.log(`[SKIPPED - ALREADY EXISTS] ${mapping.source} -> ${exists.destination}`);
    return;
  }
  
  // Create cleaned mapping
  const cleanMapping = { ...mapping, source: cleanedSrc };
  processedNew.push(cleanMapping);
});

// Also add global wildcards if not existing
globalWildcards.forEach(wildcard => {
  const exists = currentRedirects.find(r => r.source === wildcard.source);
  if (!exists) {
    processedNew.push(wildcard);
  }
});

console.log(`Adding ${processedNew.length} new rules.`);

// Insert new rules just after the first rule (usually /sitemap_index.xml -> /sitemap.xml)
// We will splice at index 1
currentRedirects.splice(1, 0, ...processedNew);

// Write updated vercel.json back
fs.writeFileSync('vercel.json', JSON.stringify(vercel, null, 4));
console.log("Successfully updated vercel.json!");
console.log("New total redirects count:", vercel.redirects.length);
