const fs = require('fs');
const path = require('path');

const storiesPath = path.join('src', 'data', 'stories.json');
const rawData = fs.readFileSync(storiesPath, 'utf8');
let stories = JSON.parse(rawData);

let newStories = [];
try {
    const tempPath = path.join(__dirname, 'temp_update.json');
    if (fs.existsSync(tempPath)) {
        const tempData = fs.readFileSync(tempPath, 'utf8');
        newStories = JSON.parse(tempData);
    } else {
        console.log('No temp_update.json found.');
        process.exit(0);
    }
} catch (e) {
    console.error('Error reading temp_update.json:', e);
    process.exit(1);
}

let updatedCount = 0;
newStories.forEach(newStory => {
    const index = stories.findIndex(s => s.id === newStory.id);
    if (index !== -1) {
        stories[index] = newStory;
        updatedCount++;
    } else {
        stories.push(newStory);
        updatedCount++;
        console.log(`Added new story: ${newStory.id}`);
    }
});

fs.writeFileSync(storiesPath, JSON.stringify(stories, null, 2), 'utf8');
console.log(`Successfully updated/added ${updatedCount} stories.`);
