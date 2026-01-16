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
        
        // 1. Fix "testCode"": " -> "testCode": "
        // The error log showed 'testCode"":', so we replace it.
        content = content.replace(/testCode""\s*:/g, 'testCode:');
        
        // 2. Fix 'initialCode: "... \",' -> 'initialCode: "... ",' 
        // We look for backslash quote comma, followed by whitespace and testCode.
        // Regex: /\\",(\s*testCode)/g -> '"$1'
        content = content.replace(/\\",(\s*testCode)/g, '"$1');
        
        // 3. Just in case testCode also has escaped closing quote
        // testCode: " ... \" }
        // Regex: /\\"\s*}/g -> '" }'
        // But be careful not to unescape if it is supposed to be escaped.
        // In valid code, testCode ends with quote, then whitespace, then }.
        // If it ends with \" }, it is broken (unterminated string).
        content = content.replace(/\\"\s*}/g, '" }');

        // 4. Fix potential double quotes in initialCode key if any (initialCode"" pattern?)
        content = content.replace(/initialCode""\s*:/g, 'initialCode:');

        if (content !== originalContent) {
             fs.writeFileSync(filePath, content);
             console.log('Repaired syntax in ' + filePath);
        }
    }
});
