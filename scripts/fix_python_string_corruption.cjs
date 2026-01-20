const fs = require('fs');
const path = require('path');

const srcDataDir = path.join(__dirname, '..', 'src', 'data');

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // The issue is single quotes inside single-quoted strings in the testCode
    // Pattern: '... program's ...'
    // We need to escape the ' in program's if it's inside a ' string.
    
    // Actually, it's safer to just replace "program's" with "program\'s" inside testCode
    let modified = content.replace(/"testCode":\s*"([\s\S]*?)"/g, (match, p1) => {
        // Find strings like '... program's ...' and fix them.
        // This regex looks for ' followed by anything not a ' and then a ' followed by s and more non-' and finally '
        // But let's keep it simple: just fix known problematic words.
        let fixed = p1
            .replace(/program's/g, "program\'s")
            .replace(/program' producen/g, "programProducea") // wait, check other patterns
            .replace(/don't/g, "don\'t")
            .replace(/it's/g, "it\'s")
            .replace(/you're/g, "you\'re");
            
        return '"testCode": "' + fixed + '"';
    });

    if (modified !== content) {
        fs.writeFileSync(filePath, modified, 'utf8');
        console.log(`✅ Fixed string corruption in ${path.basename(filePath)}`);
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
