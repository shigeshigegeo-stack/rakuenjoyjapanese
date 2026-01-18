const fs = require('fs');
const path = require('path');

const baseDir = 'src/data/textbooks';
const files = fs.readdirSync(baseDir).filter(f => f.match(/^level_\d+\.ts$/));

console.log("Checking titles for consistency...");

files.forEach(file => {
    const content = fs.readFileSync(path.join(baseDir, file), 'utf8');
    // Naive matching assumes sequential order
    // Using simple regex to capture objects might be flaky if order differs.
    // Let's rely on finding "id": "..." and then the NEXT "title": "..."

    let pos = 0;
    while (true) {
        const idMatch = content.substring(pos).match(/"id":\s*"(TEXTBOOK_L[^"]+)"/);
        if (!idMatch) break;

        const id = idMatch[1];
        const currentBlockStart = pos + idMatch.index;

        const titleMatch = content.substring(currentBlockStart).match(/"title":\s*"((?:[^"\\]|\\.)*)"/);

        if (titleMatch) {
            const title = titleMatch[1];
            const hasRuby = title.includes('<ruby>');
            const hasSpace = title.match(/[\s\u3000]/);
            // Only care about spaces if they are NOT inside tags? 
            // The previous audit removed tags. Here we check raw string.
            // If space is inside tag attributes (rare for ruby), acceptable. 
            // But we want NO spaces in title text generally.

            let status = "";
            if (!hasRuby && !title.match(/^[ぁ-んァ-ンー]+$/)) {
                // If no ruby and NOT only kana, likely missing ruby for kanji
                status += " [MISSING RUBY?]";
            }
            if (!hasRuby && title.match(/^[ぁ-んァ-ンー]+$/)) {
                status += " [KANA ONLY]";
            }
            if (hasSpace) status += " [HAS SPACE]";

            console.log(`${id.padEnd(15)} | ${title.padEnd(40)} |${status}`);

            pos = currentBlockStart + titleMatch.index + titleMatch[0].length;
        } else {
            console.log(`${id}: Title not found`);
            pos = currentBlockStart + 10;
        }
    }
});
