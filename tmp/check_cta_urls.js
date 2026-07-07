async function checkCta() {
    try {
        const res = await fetch("https://namandarshan-astrotalk-testing-backend.onrender.com/api/temples");
        const temples = await res.json();
        const templesWithCta = temples.filter(t => t.darshan_cta_url);
        console.log(`Found ${templesWithCta.length} temples with darshan_cta_url:`);
        templesWithCta.forEach(t => {
            console.log(`- ${t.name}: ${t.darshan_cta_url}`);
        });
    } catch(e) {
        console.error(e);
    }
}
checkCta();
