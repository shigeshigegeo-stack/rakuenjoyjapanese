const fs = require('fs');
const path = require('path');

const storiesPath = path.join('src', 'data', 'stories.json');
const rawData = fs.readFileSync(storiesPath, 'utf8');
const stories = JSON.parse(rawData);

function cleanTitle(title) {
    return title.replace(/<ruby>(.*?)<rt>(.*?)<\/rt><\/ruby>/g, (match, text, furigana) => {
        // Check if text is purely Katakana (including long vowel mark 'ー' and middot '・')
        if (/^[\u30A0-\u30FFー・]+$/.test(text)) {
            return text;
        }
        return match;
    });
}

console.log("Checking titles for Katakana furigana removal...\n");

let changesCount = 0;

stories.forEach(story => {
    const originalTitle = story.title;
    const newTitle = cleanTitle(originalTitle);

    if (originalTitle !== newTitle) {
        console.log(`[ID: ${story.id}]`);
        console.log(`Original: ${originalTitle}`);
        console.log(`New:      ${newTitle}`);
        console.log('---');
        changesCount++;
    }
});

console.log(`Total titles to change: ${changesCount}`);
