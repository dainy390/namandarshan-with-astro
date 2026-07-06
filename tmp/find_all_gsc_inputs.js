import fs from 'fs';
import path from 'path';

const brainDir = 'C:\\Users\\roya6\\.gemini\\antigravity\\brain';
const dirs = fs.readdirSync(brainDir);

for (const dir of dirs) {
    const logPath = path.join(brainDir, dir, '.system_generated', 'logs', 'overview.txt');
    if (fs.existsSync(logPath)) {
        const content = fs.readFileSync(logPath, 'utf8');
        if (content.includes('crawled') || content.includes('indexing') || content.includes('redirected') || content.includes('232')) {
            console.log(`Match in conversation: ${dir}`);
            // Let's count how many lines containing http or https are in the content
            const httpCount = (content.match(/https?:\/\//g) || []).length;
            console.log(`  Contains http/https links: ${httpCount}`);
        }
    }
}
