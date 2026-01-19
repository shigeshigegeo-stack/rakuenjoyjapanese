const fs = require('fs');
const path = require('path');

const filePath = path.join('c:\\Users\\aubyi\\Desktop\\japanese-stories\\src\\data\\textbooks\\level_05.ts');
const outPath = path.join('c:\\Users\\aubyi\\Desktop\\japanese-stories\\scripts\\level_05_counts.txt');

try {
    const content = fs.readFileSync(filePath, 'utf8');
    const storyRegex = /"id":\s*"(.*?)",[\s\S]*?"textbook_html":\s*"((?:[^"\\]|\\.)*)"/g;
    let match;

    let output = "Level 5 Character Counts (No Spaces):\n";

    while ((match = storyRegex.exec(content)) !== null) {
        const id = match[1];
        let html = match[2];
        let textWithoutRt = html.replace(/<rt>.*?<\/rt>/g, '');
        let cleanText = textWithoutRt.replace(/<[^>]+>/g, '');
        cleanText = cleanText.replace(/\\"/g, '"');
        const textNoSpace = cleanText.replace(/\s+/g, '');

        output += `${id}: ${textNoSpace.length}\n`;
    }

    fs.writeFileSync(outPath, output);
    console.log("Written to " + outPath);

} catch (err) {
    console.error("Error", err);
}
