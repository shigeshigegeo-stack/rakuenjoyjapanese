const fs = require('fs');
const path = require('path');

const filePath = path.join('c:\\Users\\aubyi\\Desktop\\japanese-stories\\src\\data\\textbooks\\level_05.ts');

try {
    const content = fs.readFileSync(filePath, 'utf8');
    // Regex to capture content inside double quotes, allowing escaped quotes
    const storyRegex = /"id":\s*"(.*?)",[\s\S]*?"textbook_html":\s*"((?:[^"\\]|\\.)*)"/g;
    let match;

    const results = [];

    while ((match = storyRegex.exec(content)) !== null) {
        const id = match[1];
        let html = match[2];

        // 1. Remove <rt>...</rt> content (furigana)
        let textWithoutRt = html.replace(/<rt>.*?<\/rt>/g, '');

        // 2. Remove all other HTML tags
        let cleanText = textWithoutRt.replace(/<[^>]+>/g, '');

        // 3. Unescape escaped quotes
        cleanText = cleanText.replace(/\\"/g, '"');

        // 4. Remove whitespace (spaces, newlines) for character count
        const textNoSpace = cleanText.replace(/\s+/g, '');

        results.push({
            id: id,
            count: textNoSpace.length,
            preview: textNoSpace.substring(0, 20) + "..."
        });
    }
    console.log(JSON.stringify(results, null, 2));

} catch (err) {
    console.error("Error", err);
}
