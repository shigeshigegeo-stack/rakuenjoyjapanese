
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'stories', 'level_01_10.ts');
let fileContent = fs.readFileSync(filePath, 'utf8');

// Find the array content
// Look for "export const stories_level_01_10: Story[] = ["
const startMarker = "export const stories_level_01_10: Story[] = [";
const startIndex = fileContent.indexOf(startMarker);

if (startIndex === -1) {
    console.error("Could not find start marker");
    process.exit(1);
}

const arrayStartIndex = startIndex + startMarker.length;
// Find the last ']'
const arrayEndIndex = fileContent.lastIndexOf("]");

if (arrayEndIndex === -1) {
    console.error("Could not find end marker");
    process.exit(1);
}

const arrayContent = fileContent.substring(arrayStartIndex, arrayEndIndex + 1); // Indclude the ]

// Parse the array
let data;
try {
    // We use eval because the content is JS object literals (JSON-compatible)
    // We wrap in parentheses to match syntax like ([ ... ])
    data = eval('(' + arrayContent + ')');
} catch (e) {
    console.error("Failed to eval array content: " + e.message);
    // If eval fails (syntax error), we might need to fallback to a purely text-based cleanup or manual fix.
    // But let's check if it works.
    process.exit(1);
}

console.log(`Original count: ${data.length}`);

// Filter out garbage
// Garbage objects do not have 'id' property
const cleanData = data.filter(item => {
    return item.id && item.id.startsWith("STORY");
});

console.log(`Clean count: ${cleanData.length}`);

// Reconstruct file
const cleanJson = JSON.stringify(cleanData, null, 2);

const header = fileContent.substring(0, arrayStartIndex).trim();
// header usually ends with '=' or '[', trim might remove it.
// Actually, startMarker ends with '['.
// So let's just use the original preamble up to startMarker.

const preamble = fileContent.substring(0, startIndex + startMarker.length);
// But startMarker has ' [', so we want to put the newline after it?
// JSON.stringify will start with '['.
// We should remove the leading '[' from cleanJson or the trailing '[' from preamble.

// Let's rely on cleanJson being fully self-contained array.
// So preamble should end at '='
const preambleClean = fileContent.substring(0, startIndex + startMarker.length - 1).trim() + " ";

// Wait, startMarker is "export ... = ["
// We want "export ... = " + CleanJSON + ";"

const newContent = fileContent.substring(0, startIndex) +
    "export const stories_level_01_10: Story[] = " +
    cleanJson +
    ";\n";

fs.writeFileSync(filePath, newContent, 'utf8');
console.log("File cleaned and rewritten.");
