const fs = require('fs');
const path = require('path');

const filePath = path.join('c:\\Users\\aubyi\\Desktop\\japanese-stories\\src\\data\\textbooks\\level_05.ts');

try {
    const content = fs.readFileSync(filePath, 'utf8');
    const storyRegex = /"id":\s*"(.*?)",[\s\S]*?"textbook_html":\s*"(.*?)"/g;
    let match;

    const results = [];

    while ((match = storyRegex.exec(content)) !== null) {
        const id = match[1];
        let html = match[2];

        let textWithoutRt = html.replace(/<rt>.*?<\/rt>/g, '');
        let cleanText = textWithoutRt.replace(/<[^>]+>/g, '');
        // Unescape quotes if needed (rare)
        cleanText = cleanText.replace(/\\"/g, '"');
        const textNoSpace = cleanText.replace(/\s+/g, '');

        results.push({
            id: id,
            count: textNoSpace.length,
            // preview: textNoSpace.substring(0, 10)
        });
    }
    console.log(JSON.stringify(results, null, 2));

} catch (err) {
    console.error("Error", err);
}
