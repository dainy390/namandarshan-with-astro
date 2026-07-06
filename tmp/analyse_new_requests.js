import fs from 'fs';

const rawInput = `https://namandarshan.com/travel/thillai-nataraja-temple-chidambaram-tamil-nadu/	2026-02-27	redirect to https://namandarshan.com/temples/thillai-nataraja-temple
https://namandarshan.com/live-darshan-golden/	2026-02-27	redirect to https://namandarshan.com/live-darshan/golden-temple
https://namandarshan.com/travel/udupi-sri-krishna/	2026-02-25	redirect to https://namandarshan.com/temples/udupi-sri-krishna-matha-temple
https://namandarshan.com/pandit-in-nashik/	2026-02-25	
https://namandarshan.com/pandit-in-rishikesh/	2026-02-25	
https://namandarshan.com/travel/trimbakeshwar-jyotirlinga/	2026-02-25	redirect to https://namandarshan.com/temples/trimbakeshwar-jyotirlinga-temple
https://namandarshan.com/puja-booking	2026-02-24	redirect to https://namandarshan.com/puja
https://namandarshan.com/pandit-in-yamunotri/	2026-02-23	
https://namandarshan.com/ttbm_places/gendarmenmarkt-taubenstr/	2026-02-23	
https://namandarshan.com/travel-organizer/jagannath-yatra-packages/feed/	2026-02-23	
https://namandarshan.com/elementor-hf/home-duplicate-147/	2026-02-23	
https://namandarshan.com/puja_/	2026-02-23	redirect to https://namandarshan.com/puja
https://namandarshan.com/travel-category/iskcon-mayapur/feed/	2026-02-22	
https://namandarshan.com/crm-login	2026-02-22	
https://namandarshan.com/blog/mysteries-of-jagannath-puri	2026-02-22	redirect to https://namandarshan.com/blogs/mysteries-of-jagannath-puri
https://namandarshan.com/travel-category/platinum-yatra-package/feed/	2026-02-22	redirect to https://namandarshan.com/exclusive-temple-darshan-packeges
https://namandarshan.com/travel-category/varadharaja-perumal-temple/feed/	2026-02-22	
https://namandarshan.com/travel/siddhivinayak-temple/	2026-02-22	redirect to https://namandarshan.com/temples/siddhivinayak-temple
https://namandarshan.com/travel-category/udupi-sri-krishna-matha/feed/	2026-02-20	
https://namandarshan.com/travel/kalighat-kali-temple/	2026-02-20	redirect to https://namandarshan.com/temples/kalighat-kali-temple
https://namandarshan.com/wp-admin/admin.php	2026-02-20	
https://namandarshan.com/travel-category/mahakaleshwar-jyotirlinga/feed/	2026-02-20	
https://namandarshan.com/tour/varadharaja-perumal/	2026-02-20	redirect to https://namandarshan.com/temples/varadharaja-perumal-temple
https://namandarshan.com/tour/vaishno-devi-temple/	2026-02-20	redirect to https://namandarshan.com/temples/vaishno-devi-temple
https://namandarshan.com/tour/chardham-yatra-packages/	2026-02-20	redirect to https://namandarshan.com/char-dham-yatra
https://namandarshan.com/travel-category/chamundeshwari-temple/feed/	2026-02-20	
https://namandarshan.com/product/68e36caf94276/feed/	2026-02-18	
https://namandarshan.com/travel-category/swaminarayan-akshardham-mandir/feed/	2026-02-17	
https://namandarshan.com/elementor-hf/my-account-4/	2026-02-17	
https://namandarshan.com/elementor-hf/vrindavan-yatra-2/	2026-02-17	
https://namandarshan.com/tour/kedarnath-platinum-yatra-package/	2026-02-17	redirect to https://namandarshan.com/exclusive-temple-darshan-packeges
https://namandarshan.com/tour/airavatesvara-temple/	2026-02-17	redirect to https://namandarshan.com/temples/airavatesvara-temple
https://namandarshan.com/product/68e1094555784/feed/	2026-02-17	
https://namandarshan.com/travel/shodashopachar-puja-kedarnath/	2026-02-17	
https://namandarshan.com/wp-includes/css/dashicons.min.css?ver=6.9,https://namandarshan.com/wp-includes/js/tinymce/skins/wordpress/wp-content.css?ver%3D6.9	2026-02-17	
https://namandarshan.com/wp-admin/	2026-02-17	
https://namandarshan.com/tour/kashi-vishwanath-temple/	2026-02-17	redirect to http://namandarshan.com/temples/kashi-vishwanath-temple
https://namandarshan.com/travel/parasnath-digambar-jain-temple/	2026-02-17	redirect to https://namandarshan.com/temples/parasnath-digambar-jain-temple
https://namandarshan.com/tour/baidyanath-temple/	2026-02-17	
https://namandarshan.com/package/vrindavan-yatra/	2026-02-16	redirect to https://namandarshan.com/vrindavan-yatra
https://namandarshan.com/tour/parasnath-digambar-jain-temple/	2026-02-16	redirect to https://namandarshan.com/temples/parasnath-digambar-jain-temple
https://namandarshan.com/tour/badrinath-temple/	2026-02-15	temple deleted
https://namandarshan.com/elementor-hf/home1-2-2/	2026-02-14	
https://namandarshan.com/tour/kalighat-kali-temple/	2026-02-14	redirect to https://namandarshan.com/temples/kalighat-kali-temple
https://namandarshan.com/travel/mahakaleshwar-jyotirlinga/	2026-02-14	redirect to https://namandarshan.com/temples/mahakaleshwar-jyotirlinga-temple
https://namandarshan.com/travel/vindhyachal-temple/	2026-02-13	redirect to https://namandarshan.com/temples/vindhyachal-temple
https://namandarshan.com/travel-category/neelkanth-mahadev-temple/	2026-02-13	redirect to https://namandarshan.com/temples/neelkanth-mahadev-temple
https://namandarshan.com/tour/siddhivinayak-temple/	2026-02-13	redirect to https://namandarshan.com/temples/siddhivinayak-temple
https://namandarshan.com/travel-category/tara-temple/	2026-02-13	redirect to https://namandarshan.com/temples/tara-temple
https://namandarshan.com/ttbm_guide/rabiul/	2026-02-12	
https://namandarshan.com/tour/ranganathaswamy-temple/	2026-02-12	redirect to https://namandarshan.com/temples/ranganathaswamy-temple
https://namandarshan.com/wp-includes/js/wp-emoji-release.min.js?ver=6.9	2026-02-12	
https://namandarshan.com/elementor-hf/header/	2026-02-11	
https://namandarshan.com/tour/shree-somnath-jyotirling-temple/	2026-02-11	redirect to https://namandarshan.com/temples/shree-somnath-jyotirling-temple
https://namandarshan.com/tour/thillai-nataraja-temple-chidambaram-tamil-nadu/	2026-02-11	redirect to https://namandarshan.com/temples/thillai-nataraja-temple
https://namandarshan.com/tour/dwarkadhish-temple/	2026-02-11	redirect to https://namandarshan.com/temples/dwarkadhish-temple
https://namandarshan.com/tour/kamakhyay-temple/	2026-02-11	temple deleted
https://namandarshan.com/tour/tara-temple-tarapith/	2026-02-10	redirect to https://namandarshan.com/temples/tara-temple
https://namandarshan.com/wp-content/uploads/*	2026-02-10	
https://namandarshan.com/tour/dakshineswar-kali-temple/	2026-02-10	redirect to https://namandarshan.com/temples/dakshineswar-kali-temple
https://namandarshan.com/tour/vindhyachal-temple/	2026-02-10	redirect to https://namandarshan.com/temples/vindhyachal-temple
https://namandarshan.com/travel-category/swaminarayan-akshardham-mandir/	2026-02-10	redirect to https://namandarshan.com/temples/swaminarayan-akshardham-mandir-temple
https://namandarshan.com/tour/gangotri-temple/	2026-02-10	redirect to https://namandarshan.com/temples/gangotri-temple
https://namandarshan.com/travel/vrindavan-yatra-package-2/	2026-02-09	
https://namandarshan.com/yatra-specials/	2026-02-09	
https://namandarshan.com/travel/bhimashankar-temple/	2026-02-09	redirect to https://namandarshan.com/temples/bhimashankar-jyotirlinga-temple
https://namandarshan.com/travel-category/padmanabhaswamy-temple/	2026-02-09	redirect to https://namandarshan.com/temples/padmanabhaswamy-temple
https://namandarshan.com/elementor-hf/footer/	2026-02-08	
https://namandarshan.com/tour/chamundeshwari-temple/	2026-02-08	redirect to https://namandarshan.com/temples/chamundeshwari-temple
https://namandarshan.com/tour/sabarimala-sastha-temple/	2026-02-08	redirect to https://namandarshan.com/temples/sabarimala-temple
https://namandarshan.com/tour/naina-devi-temple/	2026-02-07	redirect to https://namandarshan.com/temples/naina-devi-temple
https://namandarshan.com/tour/mahakaleshwar-jyotirlinga/	2026-02-07	redirect to https://namandarshan.com/temples/mahakaleshwar-jyotirlinga-temple
https://namandarshan.com/tour/banke-bihari-temple/	2026-02-06	redirect to https://namandarshan.com/temples/banke-bihari-temple
https://namandarshan.com/tour/neelkanth-mahadev-temple/	2026-02-06	redirect to https://namandarshan.com/temples/neelkanth-mahadev-temple`;

const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
const currentRedirects = vercel.redirects;

const parsedLines = rawInput.split('\n').map(line => {
    const parts = line.split('\t');
    const urlStr = parts[0]?.trim();
    const action = parts[2]?.trim();
    if (!urlStr) return null;
    
    let path = urlStr.replace('https://namandarshan.com', '').replace('http://namandarshan.com', '');
    // Strip trailing slash for matching unless it's a wild card
    let matchPath = path;
    if (matchPath.endsWith('/') && matchPath !== '/' && !matchPath.includes('*')) {
        matchPath = matchPath.slice(0, -1);
    }
    
    return { originalUrl: urlStr, path, matchPath, action };
}).filter(Boolean);

console.log(`Parsed ${parsedLines.length} lines.`);

const newRedirectsToAdd = [];
const blocksToAdd = [];

parsedLines.forEach(item => {
    let sourcePath = item.matchPath;
    
    // Check if the source path already exists in current redirects (stricter check)
    const exists = currentRedirects.find(r => {
        let rSource = r.source;
        if (rSource.endsWith('/') && rSource !== '/' && !rSource.includes('*')) {
            rSource = rSource.slice(0, -1);
        }
        return rSource === sourcePath;
    });
    
    if (exists) {
        // Already exists
        console.log(`[ALREADY EXISTS] ${item.originalUrl} -> ${exists.destination} (statusCode: ${exists.statusCode})`);
    } else {
        // Parse action
        if (item.action && item.action.startsWith('redirect to ')) {
            const destUrl = item.action.replace('redirect to ', '').trim();
            const destPath = destUrl.replace('https://namandarshan.com', '').replace('http://namandarshan.com', '');
            newRedirectsToAdd.push({
                source: item.path,
                destination: destPath,
                permanent: true
            });
        } else if (item.action === 'temple deleted') {
            blocksToAdd.push({
                source: item.path,
                statusCode: 410,
                destination: '/'
            });
        } else {
            // No action/empty means it is a GSC 404/Block path
            // Let's check if it's a feed/elementor/spam path that needs to return 404
            // Since it is listed as an indexing issue without a redirect, we map it to 404
            blocksToAdd.push({
                source: item.path,
                statusCode: 404,
                destination: '/404'
            });
        }
    }
});

console.log(`New Redirects to add: ${newRedirectsToAdd.length}`);
console.log(`New Blocks to add: ${blocksToAdd.length}`);

fs.writeFileSync('tmp/new_redirects_to_add.json', JSON.stringify({ redirects: newRedirectsToAdd, blocks: blocksToAdd }, null, 2));
