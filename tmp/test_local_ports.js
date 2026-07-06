async function testLocal() {
    const ports = [8080, 8090, 5001];
    for (const port of ports) {
        try {
            const res = await fetch(`http://localhost:${port}`);
            console.log(`Port ${port}: SUCCESS (status ${res.status})`);
        } catch(e) {
            console.log(`Port ${port}: FAILED (${e.message})`);
        }
    }
}
testLocal();
