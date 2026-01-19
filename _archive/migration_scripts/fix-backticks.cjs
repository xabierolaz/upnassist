
const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath, callback);
        } else {
            callback(path.join(dir, f));
        }
    });
}

const dataDir = path.join(__dirname, '../src/data');

console.log('Scanning ' + dataDir + '...');

walkDir(dataDir, function(filePath) {
    if (filePath.endsWith('.ts') && !filePath.includes('mooc-exercises.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // We want to replace unescaped triple backticks inside the content strings.
        // We assume that ``` only appears inside the Markdown content in these files.
        // We replace ``` with \`\`\`
        
        // Use split/join to avoid regex escaping headaches
        // But wait, if we replace ``` with \`\`\`, we introduce a backslash.
        // In a JS string, `\` needs to be `\\`.
        // So we want to replace ` with \` in the output file text.
        // But we only want to do this for the Triple backticks.
        
        // Example in file: content: ` ... ```python ... `
        // Goal in file:    content: ` ... \`\`\`python ... `
        
        // If we read the file, we get the literal string characters.
        
        if (content.includes('```')) {
             // Avoid double escaping if run multiple times?
             // We can check if it is NOT preceded by backslash.
             
             // Regex: /(?<!\\)```/g
             // This matches ``` not preceded by \
             
             // Replacement: '\\`\\`\\`' (literal backslash, backtick...)
             
             const fixed = content.replace(/(?<!\\)```/g, '\\`\\`\\`');
             
             if (fixed !== content) {
                 fs.writeFileSync(filePath, fixed);
                 console.log('Fixed backticks in ' + filePath);
             }
        }
    }
});
