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

let changesCount = 0;

stories.forEach(story => {
    const originalTitle = story.title;
    const newTitle = cleanTitle(originalTitle);

    if (originalTitle !== newTitle) {
        story.title = newTitle;
        changesCount++;
    }
});

if (changesCount > 0) {
    fs.writeFileSync(storiesPath, JSON.stringify(stories, null, 2), 'utf8');
    console.log(`Successfully updated ${changesCount} titles.`);
} else {
    console.log('No changes needed.');
}
