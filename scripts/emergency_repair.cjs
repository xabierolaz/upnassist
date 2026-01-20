const fs = require('fs');
const path = require('path');

const srcDataDir = path.join(__dirname, '..', 'src', 'data');

// Manual repair for the specific corruption in section1.json
function manualRepair(content) {
    return content
        .replace(/" "\:-\)"/g, '":-)"') // Fix double-double quotes
        .replace(/self\.assertTrue\(output\.startswith\(\"\:\"\), ([^\"].*?)\)/g, 'self.assertTrue(output.startswith(":"), "$1")') // Fix missing quotes
        .replace(/self\.assertEqual\(output\, \"\:\-\)\"\, ([^\"].*?)\)/g, 'self.assertEqual(output, ":-)", "$1")'); // Fix missing quotes
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Apply manual repairs
    let fixedContent = manualRepair(content);
    
    if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`🛠 Repaired syntax in ${path.basename(filePath)}`);
    }
}

function traverseDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverseDir(fullPath);
        } else if (file.endsWith('.json') && file.startsWith('section')) {
            processFile(fullPath);
        }
    });
}

console.log("🚀 Running Syntax Emergency Repair...");
traverseDir(srcDataDir);
console.log("🏁 Done.");
