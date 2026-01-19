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

function convertContent(content) {
    // 1. Unescape backticks: \` -> `
    // These were added by a previous script attempt but now we use backticks as delimiters.
    content = content.replace(/\\`/g, '`');
    
    // 2. Unescape \" to "
    content = content.replace(/\\\"/g, '"');
    
    // 3. Safety: Escape backticks again because they are now our delimiters!
    content = content.replace(/`/g, '\\`');
    
    // Safety: Escape interpolation
    content = content.replace(/\$\{/g, '\\${');
    
    return content;
}

function processFile(filePath) {
    if (!filePath.endsWith('.ts') || filePath.includes('mooc-exercises.ts')) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    let currentIndex = 0;
    while (true) {
        const initialCodeKey = 'initialCode: "';
        const initialCodeStart = content.indexOf(initialCodeKey, currentIndex);
        if (initialCodeStart === -1) break;
        const valueStart = initialCodeStart + initialCodeKey.length;
        const testCodeKey = 'testCode';
        const nextTestCode = content.indexOf(testCodeKey, valueStart);
        if (nextTestCode === -1) break;
        const commaIndex = content.lastIndexOf(',', nextTestCode);
        if (commaIndex === -1 || commaIndex < valueStart) {
             currentIndex = nextTestCode;
             continue;
        }
        let quoteIndex = -1;
        for (let i = commaIndex - 1; i > valueStart; i--) {
            if (content[i] === '"') { quoteIndex = i; break; }
        }
        if (quoteIndex !== -1) {
            const inner = content.substring(valueStart, quoteIndex);
            const converted = convertContent(inner);
            const prefix = content.substring(0, valueStart - 1) + '`';
            const suffix = '`' + content.substring(quoteIndex + 1);
            content = prefix + converted + suffix;
            currentIndex = prefix.length + converted.length + 1; 
        } else { currentIndex = nextTestCode; }
    }
    
    currentIndex = 0;
    while (true) {
        const testCodeKey = 'testCode';
        const foundIndex = content.indexOf(testCodeKey, currentIndex);
        if (foundIndex === -1) break;
        const colonQuoteIndex = content.indexOf(': "', foundIndex);
        if (colonQuoteIndex === -1 || colonQuoteIndex - (foundIndex + testCodeKey.length) > 10) {
             currentIndex = foundIndex + testCodeKey.length;
             continue;
        }
        const valueStart = colonQuoteIndex + 3;
        const objectEnd = content.indexOf('}', valueStart);
        if (objectEnd === -1) break;
        let quoteIndex = -1;
        for (let i = objectEnd - 1; i > valueStart; i--) {
            if (content[i] === '"') { quoteIndex = i; break; }
        }
        if (quoteIndex !== -1) {
            const inner = content.substring(valueStart, quoteIndex);
            const converted = convertContent(inner);
            const prefix = content.substring(0, valueStart - 1) + '`';
            const suffix = '`' + content.substring(quoteIndex + 1);
            content = prefix + converted + suffix;
            currentIndex = prefix.length + converted.length + 1;
        } else { currentIndex = objectEnd; }
    }

    if (content !== originalContent) {
         fs.writeFileSync(filePath, content);
         console.log('Converted to backticks (manual v2): ' + filePath);
    }
}

walkDir(dataDir, processFile);
