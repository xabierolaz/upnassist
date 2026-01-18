const fs = require('fs');
const section = require('./src/data/part1/section3.json');

console.log(`Checking Section: ${section.id}`);

let missing = 0;

section.blocks.forEach((block, idx) => {
    if (block.type === 'markdown' && block.content) {
        ['ENG', 'CAS', 'EUS'].forEach(lang => {
            if (!block.content[lang] || block.content[lang].trim().length === 0) {
                console.error(`❌ Block ${idx} missing ${lang} content.`);
                missing++;
            }
        });
    }
    
    if (block.type === 'exercise') {
        // Check titles and descriptions
        ['ENG', 'CAS', 'EUS'].forEach(lang => {
            if (!block.title[lang]) {
                console.error(`❌ Exercise ${block.exerciseId} missing title in ${lang}`);
                missing++;
            }
            if (block.description && !block.description[lang]) {
                console.error(`❌ Exercise ${block.exerciseId} missing description in ${lang}`);
                missing++;
            }
        });

        // Check executable logic presence
        if (!block.initialCode) {
             console.error(`❌ Exercise ${block.exerciseId} missing initialCode`);
             missing++;
        }
        if (!block.testCode) {
             console.error(`❌ Exercise ${block.exerciseId} missing testCode`);
             missing++;
        }
    }
});

if (missing === 0) {
    console.log("✅ All content is present, trilingual, and executable.");
} else {
    console.log(`❌ Found ${missing} gaps.`);
}