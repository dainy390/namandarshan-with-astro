import fs from 'fs';

const pbPath = 'C:\\Users\\roya6\\.gemini\\antigravity\\conversations\\1729f76b-83f1-4eb6-9b13-6bc4183d0a8e.pb';
const buffer = fs.readFileSync(pbPath);

console.log("File size:", buffer.length);
console.log("First 100 bytes (hex):", buffer.slice(0, 100).toString('hex'));
console.log("First 100 bytes (ascii):", buffer.slice(0, 100).toString('ascii').replace(/[^\x20-\x7E]/g, '.'));
