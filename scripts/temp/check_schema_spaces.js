const fs = require('fs');
const path = require('path');

const files = [
    'src/data/textbooks/level_09.ts',
    'src/data/textbooks/level_10.ts'
];

// Regex for Japanese character ranges (Hiragana, Katakana, Kanji)
// accompanied by a space (half or full width) and another valid Japanese char.
// We want to detect: [JP][SPACE][JP]
const jpChar = '\\u3040-\\u309F\\u30A0-\\u30FF\\u4E00-\\u9FAF';
const space = '[\\s\\u3000]+';
const regex = new RegExp(`([${jpChar}])${space}([${jpChar}])`);

console.log("Checking schema_activation (Before Reading) for spaces in Level 9 and 10...\n");

files.forEach(relativePath => {
    const fullPath = path.join(process.cwd(), relativePath);
    if (!fs.existsSync(fullPath)) {
        console.log(`File not found: ${relativePath}`);
        return;
    }

    const content = fs.readFileSync(fullPath, 'utf8');

    // We need to parse out the objects. 
    // Since it's TS, we can't simple JSON.parse.
    // We'll regex for `schema_activation": \[` then capture the content until `]`

    // 1. Find all ID blocks to associate errors with IDs
    // We'll assume structure: "id": "ID", ... "schema_activation": [ ... ]

    let pos = 0;
    while (true) {
        // Find next ID
        const idMatch = content.substring(pos).match(/"id":\s*"(TEXTBOOK_L[^"]+)"/);
        if (!idMatch) break;

        const id = idMatch[1];
        const idIndex = pos + idMatch.index;

        // Find the schema_activation block for this ID
        // It should be after the ID
        const schemaBlockMatch = content.substring(idIndex).match(/"schema_activation":\s*\[([\s\S]*?)\]/);

        if (schemaBlockMatch) {
            const schemaContent = schemaBlockMatch[1];
            // Extract strings inside the array
            const stringMatches = [...schemaContent.matchAll(/"((?:[^"\\]|\\.)*)"/g)];

            stringMatches.forEach(m => {
                const line = m[1];
                // Check for invalid spaces
                // We strip ruby tags first to check the visible text spacing? 
                // Or check raw text? 
                // User said "Japanese character space Japanese character".
                // If there is <ruby>Kanji<rt>...</rt></ruby> SPACE <ruby>...
                // That is visible space.
                // If inside <rt>, it's fine? No, usually no spaces in furigana.
                // But let's check the CLEANED text (stripping tags) for spaces between chars.

                // Helper to strip tags
                const cleanLine = line.replace(/<[^>]+>/g, '');

                if (regex.test(cleanLine)) {
                    console.log(`[${path.basename(relativePath)}] ${id}`);
                    console.log(`  Found: "${cleanLine}"`);
                    console.log(`  Raw:   "${line}"\n`);
                }
            });

            // Advance pos to end of this block to find next ID
            pos = idIndex + schemaBlockMatch.index + schemaBlockMatch[0].length;
        } else {
            // No schema block found for this ID (maybe?) or we reached end
            pos = idIndex + 10;
        }
    }
});
