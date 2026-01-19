
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/textbooks/level_05.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Simple regex to extract id and textbook_html
// Assuming standard formatting as seen in view_file
const regex = /"id":\s*"(.*?)",[\s\S]*?"textbook_html":\s*"(.*?)"/g;

let match;
console.log("--- Level 5 Stories Character Count ---");
while ((match = regex.exec(content)) !== null) {
    const id = match[1];
    let html = match[2];

    // Decode unicode checks if necessary (JS usually handles UTF8 source well)
    // Remove HTML tags
    let text = html.replace(/<[^>]*>/g, '');

    // Remove whitespace/newlines to count characters roughly
    // Or keep punctuation? Usually punctuation is counted in Japanese.
    // Just remove spaces and newlines.
    const cleanText = text.replace(/\s/g, '');

    console.log(`ID: ${id}`);
    console.log(`Character Count: ${cleanText.length}`);
    console.log(`Text Preview: ${cleanText.substring(0, 30)}...`);
    console.log("-----------------------------------------");
}
