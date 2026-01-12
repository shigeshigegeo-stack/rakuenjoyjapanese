const fs = require('fs');
const path = require('path');

const storiesPath = path.join('src', 'data', 'stories.json');
const rawData = fs.readFileSync(storiesPath, 'utf8');
let stories = JSON.parse(rawData);

let updateCount = 0;

// Sort stories to potentially handle ID conflicts if needed, but replacement should be safe if IDs are unique
// We iterate and update.

const newStories = stories.map(story => {
    if (typeof story.level === 'number') {
        const oldLevel = story.level;
        const newLevel = oldLevel + 4;

        story.level = newLevel;

        // Update ID
        // Pattern: STORY_L{number}_...
        const idRegex = /STORY_L(\d+)_/;
        const match = story.id.match(idRegex);

        if (match) {
            const idLevel = parseInt(match[1], 10);
            // Ensure we are replacing the correct level in ID (sanity check)
            if (idLevel === oldLevel) {
                // Replace only the first occurrence (STORY_L1_ -> STORY_L5_)
                story.id = story.id.replace(idRegex, `STORY_L${newLevel}_`);
            }
        }

        updateCount++;
    }
    return story;
});

// Sort by level for tidiness
newStories.sort((a, b) => {
    if (typeof a.level === 'number' && typeof b.level === 'number') return a.level - b.level;
    return 0;
});

fs.writeFileSync(storiesPath, JSON.stringify(newStories, null, 2), 'utf8');

console.log(`Updated ${updateCount} stories.`);
console.log(`Level 1 became Level 5.`);
console.log(`Level 2 became Level 6.`);
console.log(`...`);
