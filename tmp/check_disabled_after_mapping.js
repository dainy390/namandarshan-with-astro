import fs from 'fs';

const TEMPLE_TO_DARSHAN_SLUG_MAP = {
  "badrinath-temple": "badrinath-temple-darshan-vipdarshan",
  "mahakaleshwar-jyotirlinga-temple": "mahakaleshwar-jyotirlinga-ujjain-vipdarshan",
  "dwarkadhish-temple": "dwarkadhish-darshan-vipdarshan",
  "swaminarayan-akshardham-mandir-temple": "swaminarayan-akshardham-vipdarshan",
  "shree-somnath-jyotirling-temple": "somnath-jyotirlinga-darshan-vipdarshan",
  "jagannath-temple": "jagannath-temple-darshan-vipdarshan",
  "kalighat-kali-temple": "kalighat-kali-temple-darshan-vipdarshan",
  "kedarnath-temple": "kedarnath-dham-vipdarshan",
  "banke-bihari-temple": "banke-bihari-temple-vrindavan-vipdarshan",
  "vaishno-devi-temple": "mata-vaishno-devi-vipdarshan",
  "the-kamakhya-temple": "kamakhya-temple-vipdarshan",
  "sai-baba-mandir-temple": "shirdi-sai-baba-temple-vipdarshan",
  "meenakshi-temple": "meenakshi-amman-darshan-vipdarshan",
  "siddhivinayak-temple": "shri-siddhivinayak-ganapati-temple-vipdarshan",
  "omkareshwar-temple": "omkareshwar-jyotirlinga-darshan-vipdarshan",
  "sabarimala-temple": "sabarimala-sastha-temple-pathanamthitta-vipdarshan",
  "trinetra-ganesh-temple": "trinetra-ganesha-temple-vipdarshan",
  "iskcon-temple": "iskcon-temple-bangalore-vipdarshan",
  "bhimashankar-jyotirlinga-temple": "bhimashankar-temple-vipdarshan",
  "dakshineswar-kali-temple": "dakshineswar-kali-temple-darshan-vipdarshan",
  "sri-lakshmi-narasimha-swamy-temple": "sri-lakshmi-narasimha-swamy-devasthanam-vipdarshan",
  "salasar-dham-temple": "salasar-dham-mandir-vipdarshan",
  "besakih-great-temple-the-mother-temple-of-bali-temple": "besakih-great-temple-vipdarshan",
  "brihadeswara-temple-the-great-living-chola-marvel-temple": "brihadeswara-temple-vipdarshan",
  "khatu-shyam-ji-temple-rajasthan-complete-guide-for-devotees-temple": "khatu-shyam-ji-temple-vipdarshan",
  "sri-peddamma-thalli-temple": "divine-darshan-at-sri-peddamma-thalli-temple-vipdarshan",
  "chilkur-balaji-temple-visa-balaji-temple": "chilkur-balaji-temple-visa-balaji-vipdarshan",
  "nathdwara-shrinathji-temple": "divine-darshan-at-nathdwara-shrinathji-temple-vipdarshan",
  "shree-krishna-janmabhoomi-temple": "divine-darshan-at-shree-krishna-janmabhoomi-vipdarshan",
  "trimbakeshwar-jyotirlinga-temple": "trimbakeshwar-jyotirlinga-vipdarshan",
  "ram-janmabhoomi-temple": "ram-mandir-darshan-vipdarshan",
  "the-golden-temple": "golden-temple-amritsar-vipdarshan",
  "sri-sita-ramachandraswamy-temple": "sri-sita-ramachandraswamy-temple-vipdarshan",
  "sita-ramachandraswamy-temple-telangana-temple": "sri-sita-ramachandraswamy-temple-vipdarshan",
  "vontimitta-ram-mandir-a-sacred-abode-of-lord-rama-in-andhra-pradesh-temple": "vontimitta-kodandarama-swamy-temple-vipdarshan",
  "vontimitta-ram-mandir": "vontimitta-kodandarama-swamy-temple-vipdarshan",
  "sri-male-mahadeshwara-swamy-temple": "male-mahadeshwara-hills-vipdarshan",
  "male-mahadeshwara-hills-temple": "male-mahadeshwara-hills-vipdarshan",
  "naina-devi-temple": "shri-naina-devi-temple-vipdarshan",
  "sri-venkateswara-swami-temple": "tirupati-balaji-temple-vipdarshan"
};

async function test() {
    try {
        const res = await fetch("https://api.namandarshan.com/api/temples");
        const temples = await res.json();
        
        console.log("Checking disabled temples post-mapping...");
        const disabledTemples = [];
        const enabledTemples = [];

        for (const temple of temples) {
            const mappedSlug = TEMPLE_TO_DARSHAN_SLUG_MAP[temple.slug] || temple.slug;
            
            const darshanRes = await fetch(`https://api.namandarshan.com/api/darshan/${mappedSlug}`);
            if (darshanRes.ok) {
                const data = await darshanRes.json();
                if (data && !data.message && data.name) {
                    enabledTemples.push(temple.name);
                } else {
                    disabledTemples.push(temple.name);
                }
            } else {
                disabledTemples.push(temple.name);
            }
        }
        
        fs.writeFileSync("tmp/mapped_results.json", JSON.stringify({ enabled: enabledTemples, disabled: disabledTemples }, null, 2));
        console.log(`Saved results. Enabled: ${enabledTemples.length}, Disabled: ${disabledTemples.length}`);
    } catch(e) {
        console.error(e);
    }
}
test();
