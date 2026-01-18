const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src', 'data', 'textbooks', 'level_08.ts');

try {
    const content = fs.readFileSync(targetFile, 'utf8');

    // Simple regex for "textbook_html": "..."
    const regex = /"textbook_html":\s*"((?:[^"\\]|\\.)*)"/g;

    let match;
    let index = 1;
    let totalChars = 0;

    console.log("START_OUTPUT");

    while ((match = regex.exec(content)) !== null) {
        let text = match[1];
        // Unescape
        text = text.replace(/\\"/g, '"');

        // Remove Ruby
        text = text.replace(/<rt>.*?<\/rt>/g, '').replace(/<rp>.*?<\/rp>/g, '');

        // Remove Tags
        text = text.replace(/<[^>]+>/g, '');

        // Remove Whitespace
        const cleanText = text.replace(/[\s\u3000]+/g, '');

        console.log(`Story L08_0${index}: ${cleanText.length} chars`);

        totalChars += cleanText.length;
        index++;
    }

    console.log(`TOTAL: ${totalChars}`);
    console.log("END_OUTPUT");

} catch (e) {
    console.log("ERROR: " + e.message);
}
