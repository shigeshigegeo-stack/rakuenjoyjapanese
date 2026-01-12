const fs = require('fs');
const path = 'src/data/stories.json';

try {
    let content = fs.readFileSync(path, 'utf8');

    // 1. Replace Santos -> Watson
    // Python replace is global, so use replaceAll or regex global
    const originalLen = content.length;
    content = content.replace(/サントス/g, 'ワトソン');
    content = content.replace(/Santos/g, 'Watson');
    console.log('Replaced Santos with Watson');

    // 2. Remove Katakana Furigana
    // Pattern: <ruby>KATAKANA<rt>...</rt></ruby>
    // Katakana range: \u30A1-\u30F6 \u30FC \u30FB
    // Using regex to match ONLY if the base text is purely Katakana
    // Note: The python script used [ァ-ヶー・]
    const rubyRegex = /<ruby>([\u30A1-\u30F6\u30FC\u30FB]+)<rt>.*?<\/rt><\/ruby>/g;

    let matchCount = 0;
    content = content.replace(rubyRegex, (match, p1) => {
        matchCount++;
        return p1;
    });
    console.log(`Removed furigana from ${matchCount} katakana words`);

    fs.writeFileSync(path, content, 'utf8');
    console.log('Cleanup complete');

} catch (e) {
    console.error(e);
}
