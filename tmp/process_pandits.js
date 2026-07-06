import fs from 'fs';

const rawInput = `https://namandarshan.com/penchalakona-lakshmi-narasimha-swamy-temple-prasadam
https://namandarshan.com/ttbm_guide/shamim
https://namandarshan.com/travel-category/iskcon-mayapur
https://namandarshan.com/kanipakam-varasiddhi-vinayaka-swamy-temple-puja
https://namandarshan.com/uttarakhand-prasadam
https://namandarshan.com/neelkanth-mahadev-prasadam-online
https://namandarshan.com/travel-category/chamundeshwari-temple
https://namandarshan.com/travel-category/chamundeshwari-temple/
https://namandarshan.com/pages
https://namandarshan.com/pages/
https://namandarshan.com/puja/ /linga-bhairavi-devi-abhishekam-puja
https://namandarshan.com/travel/ramanathaswamy-temple
https://namandarshan.com/travel/ramanathaswamy-temple/
https://namandarshan.com/travel/meenakshi-temple
https://namandarshan.com/malyadri-lakshmi-narasimha-swamy-temple-prasadam
https://namandarshan.com/pandit-in-haridwar
https://namandarshan.com/badrinath-seva-maha-abhishek-shringar-vip-darshan
https://namandarshan.com/ram-bhakti-utsav-at-ram-mandir-ayodhya-winter-darshan
https://namandarshan.com/ram-bhakti-utsav-at-ram-mandir-ayodhya-winter-darshan/
https://namandarshan.com/pandit-in-somnath
https://namandarshan.com/linga-bhairavi-temple-coimbatore-darshan
https://namandarshan.com/pandit-in-somnath/
https://namandarshan.com/travel/adiyogi-shiva-temple/
https://namandarshan.com/search/{search_term_string}/feed/rss2/
https://namandarshan.com/kashi darshan/
https://namandarshan.com/temples/vaishno-devi-temple/-
https://namandarshan.com/tirupati-balaji-temple-devotional-darshan-experience-winter-season/
https://namandarshan.com/travel/jagannath-yatra-packages/
https://namandarshan.com/chandi-devi-temple-vip-darshan-haridwar
https://namandarshan.com/Effortless
https://namandarshan.com/kanipakam-varasiddhi-vinayaka-swamy-temple-prasadam
https://namandarshan.com/malyadri-lakshmi-narasimha-swamy-temple-puja
https://namandarshan.com/bhitargaon-temple-vip-darshan-kanpur
https://namandarshan.com/uttarakhand-temple
https://namandarshan.com/add-ons/
https://namandarshan.com/vaishno-devi-temple/-
https://namandarshan.com/5-lingaraj-temple-bhubaneswar-odisha/
https://namandarshan.com/uttar-pradesh-temple
https://namandarshan.com/orchid-grid-2/
https://namandarshan.com/lotus-grid-2/
https://namandarshan.com/my-trips-login/
https://namandarshan.com/blog/barsana-lathmar-holi-guide
https://namandarshan.com/badrinath-temple-darshan-2026-timings-vip-pass
https://namandarshan.com/search?q=%7Bsearch_term_string%7D
https://namandarshan.com/travel-organizer/jagannath-yatra-packages/
https://namandarshan.com/travel/sai-baba-mandir/
https://namandarshan.com/ttbm_places/alexanderplatz-alexa/
https://namandarshan.com/ttbm_places/rotes-rathaus-neptune-fountain/
https://namandarshan.com/travel-category/thillai-nataraja-temple/
https://namandarshan.com/our-accommodations/
https://namandarshan.com/ttbm_guide/sumon/
https://namandarshan.com/travel/jagannath-temple/
https://namandarshan.com/travel/virupaksha-temple-hampi-karnataka/
https://namandarshan.com/mahakal_blog/
https://namandarshan.com/category/news1/
https://namandarshan.com/pandit-in-trimbakeshwar/
https://namandarshan.com/mata-vaishno-devi-2/
https://namandarshan.com/travel/lingaraj-temple/
https://namandarshan.com/travel/naina-devi-temple/
https://namandarshan.com/ranganathaswamy-temple/
https://namandarshan.com/iskon-mayapur/
https://namandarshan.com/travel/badrinath-temple/
https://namandarshan.com/trimbakeshwar-jyotirlinga-nashik-maharashtra/
https://namandarshan.com/uttarakhand-temples
https://namandarshan.com/neelkanth-mahadev-temple-vip-darshan-rishikesh
https://namandarshan.com/travel/virupaksha-temple/
https://namandarshan.com/travel-category/guruvayur-temple/
https://namandarshan.com/travel/kedarnath-yatra-package/
https://namandarshan.com/crm-login/
https://namandarshan.com/travel/swaminarayan-akshardham-mandir/
https://namandarshan.com/travel-category/lingaraj-temple/
https://namandarshan.com/puja-booking-online/
https://namandarshan.com/travel/pandit-mayur-ratnakar-kodilkar/
https://namandarshan.com/pandit-in-omkareshwar/
https://namandarshan.com/kashi-darshan/
https://namandarshan.com/travel-category/airavatesvara-temple/
https://namandarshan.com/travel-category/parasnath-digambar-jain-temple/feed/
https://namandarshan.com/travel-category/vindhyachal-temple/
https://namandarshan.com/category/uncategorized/
https://namandarshan.com/travel-category/sri-venkateswara-swami-temple/
https://namandarshan.com/news-and-events/
https://namandarshan.com/travel/birla-mandir/
https://namandarshan.com/pages-2/
https://namandarshan.com/ttbm_tour_tag/bhimashankar-rudrabhishek-puja/
https://namandarshan.com/travel/shirdi-yatra-packages/
https://namandarshan.com/pandit-in-ujjain/
https://namandarshan.com/elementor-hf/home1-2/
https://namandarshan.com/ttbm_places/brandenburger-tor/
https://namandarshan.com/crm-logout/
https://namandarshan.com/penchalakona-lakshmi-narasimha-swamy-temple-darshan
https://namandarshan.com/book-panditji/
https://namandarshan.com/travel-category/dakshineswar-kali-temple/
https://namandarshan.com/pandit-in-deoghar/
https://namandarshan.com/travel/ayodhya-yatra-packages/
https://namandarshan.com/travel-category/palani-murugan-temple/
https://namandarshan.com/travel-category/ramanathaswamy-temple/
https://namandarshan.com/live-darshan-badrinath/
https://namandarshan.com/travel/kanyakumari-amman-temple/
https://namandarshan.com/travel-category/trimbakeshwar-jyotirlinga/
https://namandarshan.com/wp-content/plugins/*
https://namandarshan.com/malyadri-lakshmi-narasimha-swamy-temple-darshan
https://namandarshan.com/kanipakam-varasiddhi-vinayaka-swamy-temple-darshan
https://namandarshan.com/travel/padmanabhaswamy-temple/
https://namandarshan.com/blog/golden-temple-yatra/feed/
https://namandarshan.com/travel/mehandipur-balaji-temple/
https://namandarshan.com/travel-category/varadharaja-perumal-temple/
https://namandarshan.com/pandit-in-haridwar/
https://namandarshan.com/pandit-in-bhimashankar/
https://namandarshan.com/2024/02/14/golden-temple-yatra/
https://namandarshan.com/blog/golden-temple-yatra/
https://namandarshan.com/erp-subscription/
https://namandarshan.com/ayodhya
https://namandarshan.com/tour/kedarnath-yatra-package/
https://namandarshan.com/yatra_testing/
https://namandarshan.com/travel-category/baidyanath-temple/
https://namandarshan.com/contact
https://namandarshan.com/tour/
https://namandarshan.com/tour/yamunotri-temple/
https://namandarshan.com/tour/kedarnath-temple/
https://namandarshan.com/testing/
https://namandarshan.com/travel/banke-bihari-temple/
https://namandarshan.com/travel-category/parasnath-digambar-jain-temple/
https://namandarshan.com/travel/tara-temple-tarapith/
https://namandarshan.com/crm-dashboard/
https://namandarshan.com/travel/yamunotri-temple/
https://namandarshan.com/travel/belur-math/
https://namandarshan.com/travel-category/kanyakumari-bhagavathy-amman/
https://namandarshan.com/puja-booking/
https://namandarshan.com/tour/ayodhya-yatra-packages/
https://namandarshan.com/kashi-vishwanath-temple-varanasi/
https://namandarshan.com/tour/sri-venkateswara-swami-temple/
https://namandarshan.com/pandit-in-rameswaram/
https://namandarshan.com/package/ayodhya-yatra/
https://namandarshan.com/blog/dauji-huranga-baldeo-guide
https://namandarshan.com/blog/phalen-gaon-fire-holi-guide
https://namandarshan.com/blog/chhadimar-holi-gokul-guide
https://namandarshan.com/ranganathaswamy-temple/?book=open
https://namandarshan.com/travel/kedarnath-platinum-yatra-package/
https://namandarshan.com/register/
https://namandarshan.com/tour/yamunotri-temple
https://namandarshan.com/admin-panel/
https://namandarshan.com/mahakaleshwar-temple-ujjain-shiva-bhakti-agni-rituals-winter-darshan/
https://namandarshan.com/your-booking-detail/
https://namandarshan.com/travel/laxminarayan-temple-birla-mandir/
https://namandarshan.com/travel-category/kashi-vishwanath-temple/feed/
https://namandarshan.com/jagannath_blog/
https://namandarshan.com/travel/dakshineswar-kali-temple/
https://namandarshan.com/travel-organizer/vrindavan-yatra-package/
https://namandarshan.com/travel-category/mehandipur-balaji-temple/
https://namandarshan.com/travel/chardham-yatra-packages/
https://namandarshan.com/travel-category/meenakshi-temple/
https://namandarshan.com/jyotirlinga
https://namandarshan.com/tour/the-golden-temple/
https://namandarshan.com/pandit-in-varanasi/
https://namandarshan.com/travel/baidyanath-temple/
https://namandarshan.com/travel-category/jagannath-temple/
https://namandarshan.com/packages-2/
https://namandarshan.com/travel/thillai-nataraja-temple-chidambaram-tamil-nadu/
https://namandarshan.com/live-darshan-golden/
https://namandarshan.com/travel/udupi-sri-krishna/
https://namandarshan.com/pandit-in-nashik/
https://namandarshan.com/pandit-in-rishikesh/
https://namandarshan.com/travel/trimbakeshwar-jyotirlinga/
https://namandarshan.com/puja-booking
https://namandarshan.com/pandit-in-yamunotri/
https://namandarshan.com/ttbm_places/gendarmenmarkt-taubenstr/
https://namandarshan.com/travel-organizer/jagannath-yatra-packages/feed/
https://namandarshan.com/elementor-hf/home-duplicate-147/
https://namandarshan.com/puja_/
https://namandarshan.com/travel-category/iskcon-mayapur/feed/
https://namandarshan.com/crm-login
https://namandarshan.com/blog/mysteries-of-jagannath-puri
https://namandarshan.com/travel-category/platinum-yatra-package/feed/
https://namandarshan.com/travel-category/varadharaja-perumal-temple/feed/
https://namandarshan.com/travel/siddhivinayak-temple/
https://namandarshan.com/travel-category/udupi-sri-krishna-matha/feed/
https://namandarshan.com/travel/kalighat-kali-temple/
https://namandarshan.com/wp-admin/admin.php
https://namandarshan.com/travel-category/mahakaleshwar-jyotirlinga/feed/
https://namandarshan.com/tour/varadharaja-perumal/
https://namandarshan.com/tour/vaishno-devi-temple/
https://namandarshan.com/tour/chardham-yatra-packages/
https://namandarshan.com/travel-category/chamundeshwari-temple/feed/
https://namandarshan.com/product/68e36caf94276/feed/
https://namandarshan.com/travel-category/swaminarayan-akshardham-mandir/feed/
https://namandarshan.com/elementor-hf/my-account-4/
https://namandarshan.com/elementor-hf/vrindavan-yatra-2/
https://namandarshan.com/tour/kedarnath-platinum-yatra-package/
https://namandarshan.com/tour/airavatesvara-temple/
https://namandarshan.com/product/68e1094555784/feed/
https://namandarshan.com/travel/shodashopachar-puja-kedarnath/
https://namandarshan.com/wp-includes/css/dashicons.min.css?ver=6.9,https://namandarshan.com/wp-includes/js/tinymce/skins/wordpress/wp-content.css?ver%3D6.9
https://namandarshan.com/wp-admin/
https://namandarshan.com/tour/kashi-vishwanath-temple/
https://namandarshan.com/travel/parasnath-digambar-jain-temple/
https://namandarshan.com/tour/baidyanath-temple/
https://namandarshan.com/package/vrindavan-yatra/
https://namandarshan.com/tour/parasnath-digambar-jain-temple/
https://namandarshan.com/tour/badrinath-temple/
https://namandarshan.com/elementor-hf/home1-2-2/
https://namandarshan.com/tour/kalighat-kali-temple/
https://namandarshan.com/travel/mahakaleshwar-jyotirlinga/
https://namandarshan.com/travel/vindhyachal-temple/
https://namandarshan.com/travel-category/neelkanth-mahadev-temple/
https://namandarshan.com/tour/siddhivinayak-temple/
https://namandarshan.com/travel-category/tara-temple/
https://namandarshan.com/ttbm_guide/rabiul/
https://namandarshan.com/tour/ranganathaswamy-temple/
https://namandarshan.com/wp-includes/js/wp-emoji-release.min.js?ver=6.9
https://namandarshan.com/elementor-hf/header/
https://namandarshan.com/tour/shree-somnath-jyotirling-temple/
https://namandarshan.com/tour/thillai-nataraja-temple-chidambaram-tamil-nadu/
https://namandarshan.com/tour/dwarkadhish-temple/
https://namandarshan.com/tour/kamakhyay-temple/
https://namandarshan.com/tour/tara-temple-tarapith/
https://namandarshan.com/wp-content/uploads/*
https://namandarshan.com/tour/dakshineswar-kali-temple/
https://namandarshan.com/tour/vindhyachal-temple/
https://namandarshan.com/travel-category/swaminarayan-akshardham-mandir/
https://namandarshan.com/tour/gangotri-temple/
https://namandarshan.com/travel/vrindavan-yatra-package-2/
https://namandarshan.com/yatra-specials/
https://namandarshan.com/travel/bhimashankar-temple/
https://namandarshan.com/travel-category/padmanabhaswamy-temple/
https://namandarshan.com/elementor-hf/footer/
https://namandarshan.com/tour/chamundeshwari-temple/
https://namandarshan.com/tour/sabarimala-sastha-temple/
https://namandarshan.com/tour/naina-devi-temple/
https://namandarshan.com/tour/mahakaleshwar-jyotirlinga/
https://namandarshan.com/tour/banke-bihari-temple/
https://namandarshan.com/tour/neelkanth-mahadev-temple/`;

const urls = Array.from(new Set(rawInput.split('\n').map(line => line.trim()).filter(Boolean)));
console.log("Total unique URLs to parse:", urls.length);

const panditRedirects = [];

urls.forEach(urlStr => {
    if (urlStr.toLowerCase().includes('pandit') || urlStr.toLowerCase().includes('panditji')) {
        let path = urlStr.replace('https://namandarshan.com', '').replace('http://namandarshan.com', '');
        
        // Strip trailing slash unless wildcard
        let cleanedPath = path;
        if (cleanedPath.endsWith('/') && cleanedPath !== '/' && !cleanedPath.includes('*')) {
            cleanedPath = cleanedPath.slice(0, -1);
        }
        
        panditRedirects.push({
            source: cleanedPath,
            destination: "/vedic-consultants",
            permanent: true
        });
    }
});

console.log("Identified Pandit/Panditji redirects count:", panditRedirects.length);
fs.writeFileSync('tmp/pandit_redirects.json', JSON.stringify(panditRedirects, null, 2));
