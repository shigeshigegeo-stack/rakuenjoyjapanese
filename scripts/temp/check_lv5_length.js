const fs = require('fs');
const path = require('path');

const filePath = path.join('c:\\Users\\aubyi\\Desktop\\japanese-stories\\src\\data\\textbooks\\level_05.ts');

try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Extract ID and textbook_html pairs
    const storyRegex = /"id":\s*"(.*?)",[\s\S]*?"textbook_html":\s*"(.*?)"/g;
    let match;

    console.log("Level 5 Character Counts (excluding ruby <rt> and HTML tags):");
    console.log("-------------------------------------------------------------");

    while ((match = storyRegex.exec(content)) !== null) {
        const id = match[1];
        let html = match[2];

        // 1. Remove <rt>...</rt> content (furigana)
        // Note: Non-greedy match for content
        let textWithoutRt = html.replace(/<rt>.*?<\/rt>/g, '');

        // 2. Remove all other HTML tags
        let cleanText = textWithoutRt.replace(/<[^>]+>/g, '');

        // 3. Unescape escaped quotes if any (though usually rare in this content format)
        cleanText = cleanText.replace(/\\"/g, '"');

        // 4. Remove whitespace (spaces, newlines) for character count
        // Japanese character count typically ignores spaces for density checks
        const textNoSpace = cleanText.replace(/\s+/g, '');

        console.log(`ID: ${id}`);
        // console.log(`Clean Text Preview: ${cleanText.substring(0, 50)}...`);
        console.log(`Count (no spaces): ${textNoSpace.length}`);
        console.log(`Count (with spaces): ${cleanText.length}`);
        console.log("-------------------------------------------------------------");
    }

} catch (err) {
    console.error("Error reading file:", err);
}
