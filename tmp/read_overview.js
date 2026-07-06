import fs from 'fs';

const logPath = 'C:\\Users\\roya6\\.gemini\\antigravity\\brain\\1729f76b-83f1-4eb6-9b13-6bc4183d0a8e\\.system_generated\\logs\\overview.txt';
const content = fs.readFileSync(logPath, 'utf8');
const lines = content.split('\n');
const firstLine = JSON.parse(lines[0]);

console.log("Original User Input Type:", typeof firstLine.content);
console.log("Original User Input Length:", firstLine.content.length);

const userContent = firstLine.content;
fs.writeFileSync('tmp/original_user_content.txt', userContent);
console.log("Written original user content to tmp/original_user_content.txt");
