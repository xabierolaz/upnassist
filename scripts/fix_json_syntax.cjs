const fs = require('fs');
const path = require('path');

const srcDataDir = path.join(__dirname, '..', 'src', 'data');

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // This is a naive but effective way to find literal newlines inside what should be a single string in JSON
    // However, it's safer to try to parse and if it fails, fix.
    try {
        JSON.parse(content);
        // console.log(`✅ ${path.basename(filePath)} is already valid.`);
    } catch (e) {
        console.log(`🛠 Fixing ${path.basename(filePath)}...`);
        // The common error is unescaped newlines in "testCode" block.
        // We look for patterns like "testCode": "..." and replace literal newlines with \n
        
        // Strategy: find blocks of text between quotes that contain literal newlines
        // This regex tries to find strings that span multiple lines
        let fixed = content.replace(/"testCode":\s*"([\s\S]*?)"/g, (match, p1) => {
            return '"testCode": "' + p1.replace(/\n/g, '\\n').replace(/\r/g, '\\r') + '"';
        });

        try {
            JSON.parse(fixed);
            fs.writeFileSync(filePath, fixed, 'utf8');
            console.log(`✅ Fixed ${path.basename(filePath)}`);
        } catch (e2) {
            console.error(`❌ Failed to automatically fix ${path.basename(filePath)}: ${e2.message}`);
            // Second attempt: escape ALL literal newlines that are NOT between property/value separators
            // Very risky, better to do manual fix for section1.json first
        }
    }
}

function traverseDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverseDir(fullPath);
        } else if (file.endsWith('.json')) {
            fixFile(fullPath);
        }
    });
}

traverseDir(srcDataDir);
