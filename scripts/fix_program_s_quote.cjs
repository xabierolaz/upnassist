const fs = require('fs');
const path = require('path');

const srcDataDir = path.join(__dirname, '..', 'src', 'data');

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace "program's" with "program\'s" globally
    // We strictly look for the pattern to avoid over-escaping
    let fixed = content.replace(/your program's output/g, "your program\'s output");
    
    if (fixed !== content) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        console.log(`✅ Fixed unescaped quote in ${path.basename(filePath)}`);
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

