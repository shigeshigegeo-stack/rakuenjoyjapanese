const fs = require('fs');
const path = require('path');

const levels = [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10'
];

const results = [];

const baseDir = 'c:\\Users\\aubyi\\Desktop\\japanese-stories\\src\\data\\textbooks';

function stripTags(html) {
    if (!html) return "";
    // Remove ruby rt tags content entirely if we want just the base text? 
    // Usually for char count we want the base text.
    // The previous logic defined: remove <rt>...</rt>, remove <rp>...</rp>, remove tags.
    let text = html.replace(/<rt>.*?<\/rt>/g, '').replace(/<rp>.*?<\/rp>/g, '');
    text = text.replace(/<[^>]+>/g, '');
    text = text.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"');
    return text;
}

function checkSpaces(text) {
    // Check for [Japanese Char] [Space] [Japanese Char]
    // Japanese Char range roughly: Hiragana, Katakana, CJK Unified Ideographs
    const regex = /([\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF])[\s\u3000]+([\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF])/;
    return regex.test(text);
}

function processLevel(lv) {
    const filename = `level_${lv}.ts`;
    const filePath = path.join(baseDir, filename);

    if (!fs.existsSync(filePath)) {
        console.log(`[Level ${lv}] File not found: ${filePath}`);
        return;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    // Naive parsing: find objects in array
    // We'll just regex for fields to be safer against slight format variations, 
    // or we can try to eval it if it were pure JSON, but it is TS code.
    // Let's use Regex to extract story blocks.

    // Match each object: { ... "id": "TEXTBOOK_Lx_y" ... }
    // It's a bit hard to parse nested structures with regex perfectly, but let's try identifying blocks by ID.

    const idRegex = /"id":\s*"(TEXTBOOK_L[^"]+)"/g;
    let match;
    const ids = [];
    while ((match = idRegex.exec(content)) !== null) {
        ids.push(match[1]);
    }

    console.log(`\n--- Checking Level ${lv} (${ids.length} stories) ---`);

    for (const id of ids) {
        // Extract the block for this ID (rudimentary)
        // Find "id": "ID", then look ahead for "textbook_html": "...", "translation": "...", "quizzes": [...]

        // Helper to extract field value for a specific ID context
        // We find the index of the ID, then search forward for the fields
        const idIndex = content.indexOf(`"${id}"`);
        const nextIdIndexMatch = content.substring(idIndex + 1).match(/"id":/);
        const nextIdIndex = nextIdIndexMatch ? idIndex + 1 + nextIdIndexMatch.index : content.length;

        const storyBlock = content.substring(idIndex, nextIdIndex);

        // Extract textbook_html
        const htmlMatch = storyBlock.match(/"textbook_html":\s*"((?:[^"\\]|\\.)*)"/);
        let html = htmlMatch ? htmlMatch[1] : "";
        // Unescape quotes
        html = html.replace(/\\"/g, '"');

        // Extract translation
        const transMatch = storyBlock.match(/"translation":\s*"((?:[^"\\]|\\.)*)"/);
        const trans = transMatch ? transMatch[1] : "";

        // Extract quizzes check (just naive check for spaces in the block)
        const quizzesMatch = storyBlock.match(/"quizzes":\s*\[([\s\S]*?)\]/);
        const quizzesContent = quizzesMatch ? quizzesMatch[1] : "";

        // 1. Text Spacing Check (HTML)
        // We check the RAW HTML for spaces between japanese chars, 
        // essentially ignoring tags? No, the user wants NO spaces "Unnatural spaces".
        // A space in HTML `> <` is rendered as a space.
        // A space inside text `あ い` is rendered as space.
        // We should check the stripped text for spaces.
        const cleanText = stripTags(html);
        const hasSpaceHTML = checkSpaces(cleanText);

        // 2. Character Count
        // Remove ALL whitespace for count? Or count with spaces?
        // User practice: remove all whitespace for counting Japanese characters typically.
        const textForCount = cleanText.replace(/[\s\u3000]+/g, '');
        const charCount = textForCount.length;

        // 3. Jim Check
        const hasJim = (html.includes("Jim") || html.includes("ジム") || trans.includes("Jim"));

        // 4. Quizzes Spacing
        // We need to parse quizzes roughly.
        // We can just check the raw string of the quizzes block for Japanese spaces.
        // Be careful not to flag spaces in JSON formatting.
        // We'll strip quotes and basic syntax chars to check text?
        // Better: extract strings inside quizzes block.
        const quizStrings = quizzesContent.match(/"((?:[^"\\]|\\.)*)"/g) || [];
        let hasSpaceQuiz = false;
        for (const qs of quizStrings) {
            const val = qs.slice(1, -1).replace(/\\"/g, '"'); // remove quotes
            const cleanVal = stripTags(val);
            if (checkSpaces(cleanVal)) {
                hasSpaceQuiz = true;
                break;
            }
        }

        // Report
        const issues = [];
        if (hasSpaceHTML) issues.push("Spaces in Text");
        if (hasSpaceQuiz) issues.push("Spaces in Quizzes");
        if (hasJim) issues.push("Contains 'Jim/ジム'");

        let status = "OK";
        if (issues.length > 0) status = `ISSUES: ${issues.join(", ")}`;

        results.push({
            id: id,
            level: lv,
            chars: charCount,
            status: status,
            issues: issues
        });
    }
}

console.log("Starting Audit...");
for (const lv of levels) {
    processLevel(lv);
}
fs.writeFileSync('audit_result.json', JSON.stringify(results, null, 2));
console.log("\nAudit Complete. Written to audit_result.json");
