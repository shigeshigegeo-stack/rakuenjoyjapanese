const fs = require('fs');
// Read the raw file content because require might fail if there are syntax oddities or encoding issues with the huge string,
// but require is safest for parsing semantics.
// Let's try require first.

try {
    const m = require('./recovered_stories.js');
    // m is [moduleID, function]
    if (Array.isArray(m) && m.length > 1 && typeof m[1] === 'function') {
        const loader = {
            v: (data) => {
                // data is the parsed JSON object
                console.log(JSON.stringify(data, null, 2));
            }
        };
        m[1](loader);
    } else {
        console.error('Unexpected module structure:', m);
        process.exit(1);
    }
} catch (e) {
    console.error(e);
    process.exit(1);
}
