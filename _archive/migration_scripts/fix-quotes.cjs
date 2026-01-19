
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
        let originalContent = content;
        
        // Fix initialCode
        // Look for initialCode: "..." followed by comma and testCode
        content = content.replace(/(initialCode\s*:\s*")([\s\S]*?(")\s*,\s*testCode)/g, (match, p1, p2, p3) => {
            // Escape unescaped double quotes in p2
            const fixedContent = p2.replace(/(?<!\\)\"/g, '\\"');
            return p1 + fixedContent + p3;
        });

        // Fix testCode
        // Look for testCode: "..." followed by closing brace of the object
        content = content.replace(/(testCode\s*:\s*")([\s\S]*?(")\s*,)/g, (match, p1, p2, p3) => {
            // Escape unescaped double quotes in p2
            const fixedContent = p2.replace(/(?<!\\)\"/g, '\\"');
            return p1 + fixedContent + p3;
        });
        
        if (content !== originalContent) {
             fs.writeFileSync(filePath, content);
             console.log('Fixed quotes in ' + filePath);
        }
    }
});
