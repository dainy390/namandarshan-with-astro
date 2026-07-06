const https = require('https');
https.get('https://unsplash.com/s/photos/hindu-puja', (res) => {
    let data = '';
    res.on('data', d => data += d);
    res.on('end', () => {
        const matches = data.match(/"id":"([a-zA-Z0-9_-]{11})"/g);
        if(matches) {
            console.log([...new Set(matches)].slice(0, 15).join('\n'));
        } else {
            console.log("No matches");
        }
    });
});
