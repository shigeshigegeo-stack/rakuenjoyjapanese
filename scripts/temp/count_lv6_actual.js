const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src', 'data', 'textbooks', 'level_06.ts');

try {
    const content = fs.readFileSync(targetFile, 'utf8');

    // Improved regex to capture the value of textbook_html
    // Looking for key "textbook_html": "VALUE",
    // We assume the value doesn't contain unescaped double quotes ending the string unexpectedly.
    const regex = /"textbook_html":\s*"((?:[^"\\]|\\.)*)"/g;

    let match;
    let index = 1;
    let totalCharsNoSpace = 0;

    let output = `Processing file: ${targetFile}\n\n`;

    while ((match = regex.exec(content)) !== null) {
        const rawHtml = match[1];

        // Unescape escaped quotes if any
        let html = rawHtml.replace(/\\"/g, '"');

        // 1. Remove Ruby Pronunciation (<rt>...</rt>)
        // We also remove <rp> just in case, though usually not present in this data
        let noRuby = html.replace(/<rt>.*?<\/rt>/g, '').replace(/<rp>.*?<\/rp>/g, '');

        // 2. Remove all HTML tags
        let textOnly = noRuby.replace(/<[^>]+>/g, '');

        // 3. Decode basic HTML entities
        textOnly = textOnly
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"');

        // 4. Calculate counts
        // Standard Japanese character count usually ignores whitespace
        const textNoSpace = textOnly.replace(/[\s\u3000]+/g, '');

        const countNoSpace = textNoSpace.length;

        output += `Story L06_0${index}:\n`;
        output += `- Raw Count (no ruby, no html, no spaces): ${countNoSpace}\n`;
        output += `-------------------\n`;

        totalCharsNoSpace += countNoSpace;
        index++;
    }

    output += `\nTotal Characters (Level 6, excluding ruby, html, spaces): ${totalCharsNoSpace}\n`;

    fs.writeFileSync('count_lv6_clean.txt', output, 'utf8');
    console.log("Done writing to count_lv6_clean.txt");

} catch (err) {
    console.error("Error reading or processing file:", err);
    fs.writeFileSync('count_lv6_clean.txt', "Error: " + err, 'utf8');
}
