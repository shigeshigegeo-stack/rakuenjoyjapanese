const fs = require('fs');
const path = require('path');

const storiesPath = path.join(__dirname, 'src/data/stories.json');
const outputDir = path.join(__dirname, 'src/data/stories');

const rawData = fs.readFileSync(storiesPath, 'utf-8');
const stories = JSON.parse(rawData);

// Group stories by level batches (1-10, 11-20, etc.)
const batches = {};

stories.forEach(story => {
    let level = 0;
    if (typeof story.level === 'number') {
        level = story.level;
    } else if (typeof story.level === 'string') {
        const match = story.level.match(/\d+/);
        if (match) {
            level = parseInt(match[0], 10);
        } else {
            // Default or fallback for N5 etc if needed, but assuming mostly numeric based on existing logic
            // If N5 (JLPT), let's put it in a separate bucket or map to a high number?
            // The existing code mapped N5 to > 30 effectively for sorting.
            // For file grouping, let's put N5 in 'jlpt' or similar.
            if (story.level.startsWith('N')) {
                level = 1000; // Special bucket
            }
        }
    }

    let batchKey = 'others';
    if (level > 0 && level < 1000) {
        const start = Math.floor((level - 1) / 10) * 10 + 1;
        const end = start + 9;
        batchKey = `level_${String(start).padStart(2, '0')}_${String(end).padStart(2, '0')}`;
    } else if (level >= 1000) {
        batchKey = 'jlpt';
    }

    if (!batches[batchKey]) {
        batches[batchKey] = [];
    }
    batches[batchKey].push(story);
});

// Generate files
const generatedFiles = [];

for (const [key, batchStories] of Object.entries(batches)) {
    const fileName = `${key}.ts`;
    const filePath = path.join(outputDir, fileName);
    const fileContent = `import { Story } from './types';

export const stories_${key}: Story[] = ${JSON.stringify(batchStories, null, 2)};
`;
    fs.writeFileSync(filePath, fileContent);
    generatedFiles.push(key);
    console.log(`Generated ${fileName} with ${batchStories.length} stories.`);
}

// Generate index.ts
let indexContent = '';
generatedFiles.forEach(key => {
    indexContent += `import { stories_${key} } from './${key}';\n`;
});

indexContent += `\nimport { Story } from './types';\n\n`;
indexContent += `export const stories: Story[] = [\n`;
generatedFiles.forEach(key => {
    indexContent += `  ...stories_${key},\n`;
});
indexContent += `];\n`;

fs.writeFileSync(path.join(outputDir, 'index.ts'), indexContent);
console.log('Generated index.ts');
