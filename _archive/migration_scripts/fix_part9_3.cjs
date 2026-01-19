const fs = require('fs');
const path = require('path');

const filePath = path.resolve('src/data/part9/section3.ts');
if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Fix backtick in markdown content: underscores __`. -> underscores __\`.
    // We use a regex to match __`.
    const regex = /underscores __`\./g;
    
    if (regex.test(content)) {
        const newContent = content.replace(regex, 'underscores __\\`.' );
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Fixed backtick in ${filePath}`);
    } else {
        console.log(`Pattern not found in ${filePath}`);
    }
} else {
    console.log(`File not found: ${filePath}`);
}

