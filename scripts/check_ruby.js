const fs = require('fs');
const path = require('path');

const levels = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const baseDir = 'c:/Users/aubyi/Desktop/japanese-stories/src/data/textbooks';

// Output file
const outputFile = path.join(baseDir, 'ruby_check_result.txt');
if (fs.existsSync(outputFile)) fs.unlinkSync(outputFile);

function log(message) {
    fs.appendFileSync(outputFile, message + '\n');
    console.log(message);
}

// Regex to find Kanji
// \u4e00-\u9faf: Common Kanji
// \u3005: Iteration mark (doubling mark like in 人々)
const kanjiRegex = /[\u4e00-\u9faf\u3005]/;

function checkFile(level) {
    const filePath = path.join(baseDir, `level_${level}.ts`);
    if (!fs.existsSync(filePath)) {
        log(`File not found: ${filePath}`);
        return;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    // Extract each story object roughly
    // We assume the structure is standard enough for regex extraction
    const storyRegex = /\{[\s\S]*?"id":\s*"TEXTBOOK_([\s\S]*?)"[\s\S]*?\}/g;
    let match;

    while ((match = storyRegex.exec(content)) !== null) {
        const storyBlock = match[0];

        // Extract ID
        const idMatch = storyBlock.match(/"id":\s*"(.*?)"/);
        const id = idMatch ? idMatch[1] : 'Unknown ID';

        // Extract schema_activation content
        const schemaMatch = storyBlock.match(/"schema_activation":\s*\[([\s\S]*?)\]/);

        if (schemaMatch) {
            const schemaInner = schemaMatch[1];
            // Match strings enclosed in double quotes or single quotes or backticks
            const stringRegex = /"(.*?)"|'(.*?)'|`(.*?)`/g;
            let strMatch;

            let qIndex = 0;
            while ((strMatch = stringRegex.exec(schemaInner)) !== null) {
                qIndex++;
                const text = strMatch[1] || strMatch[2] || strMatch[3];

                // Remove existing ruby blocks
                // <ruby>...</ruby>
                const textWithoutRuby = text.replace(/<ruby>[\s\S]*?<\/ruby>/g, '');

                if (kanjiRegex.test(textWithoutRuby)) {
                    // Find the specific kanji that triggered it for better reporting
                    const missing = textWithoutRuby.match(new RegExp(kanjiRegex, 'g')).join('');

                    log(`[${id}] BR Question ${qIndex}: Found Kanji without ruby`);
                    log(`  Original:     ${text}`);
                    log(`  Without Ruby: ${textWithoutRuby}`);
                    log(`  Missing Ruby: ${missing}`);
                    log('---');
                }
            }
        }
    }
}

console.log('Starting check for missing ruby in Schema Activation (Before Reading)...');
levels.forEach(level => checkFile(level));
console.log('Check finished.');
