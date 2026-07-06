import fs from 'fs';

const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));

let csvContent = 'Type,Source URL,Destination URL,Status Code/Redirect Type\n';

vercel.redirects.forEach(r => {
    const type = r.statusCode ? 'Block/Status' : 'Redirect';
    const source = `"${r.source.replace(/"/g, '""')}"`;
    const destination = `"${r.destination.replace(/"/g, '""')}"`;
    const status = r.statusCode ? r.statusCode : (r.permanent ? '301 (Permanent)' : '302 (Temporary)');
    csvContent += `${type},${source},${destination},${status}\n`;
});

fs.writeFileSync('tmp/redirections.csv', csvContent);
console.log("CSV exported successfully to tmp/redirections.csv");
