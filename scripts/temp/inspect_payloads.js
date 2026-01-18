/* eslint-disable */
const fs = require('fs');
const path = require('path');

const dir = 'out/textbooks';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.txt'));

files.forEach(filename => {
    const filePath = path.join(dir, filename);
    const content = fs.readFileSync(filePath, 'utf8');

    // Look for patterns like:
    // ... "textbook":{"id":"STORY_L01_04", ...
    const marker = '"textbook":{';
    const startIdx = content.indexOf(marker);

    if (startIdx !== -1) {
        console.log(`Found textbook data in ${filename}`);
        // Try to extract the whole object. It's inside a larger JSON structure.
        // We look for the closing brace of the textbook object.
        let braceCount = 0;
        let endIdx = -1;
        for (let i = startIdx + '"textbook":'.length - 1; i < content.length; i++) {
            if (content[i] === '{') braceCount++;
            if (content[i] === '}') {
                braceCount--;
                if (braceCount === 0) {
                    endIdx = i + 1;
                    break;
                }
            }
        }

        if (endIdx !== -1) {
            const textbookJsonStr = content.substring(startIdx + '"textbook":'.length - 1, endIdx);
            try {
                const textbook = JSON.parse(textbookJsonStr);
                // Check L01_04 specifically
                if (textbook.id === 'STORY_L01_04') {
                    console.log('--- L01_04 Content ---');
                    console.log('Title:', textbook.title);
                    console.log('HTML Length:', textbook.textbook_html ? textbook.textbook_html.length : 'N/A');
                    console.log('Translation (First 100 chars):', textbook.translation ? textbook.translation.substring(0, 100) : 'N/A');
                    console.log('Quizzes:', JSON.stringify(textbook.quizzes, null, 2));
                }
            } catch (e) {
                console.error(`Error parsing JSON in ${filename}: ${e.message}`);
            }
        }
    }
});
