
const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/data/part1/section1.ts');
const BACKSLASH = '\\';
const QUOTE = '"';
const ESCAPED_QUOTE = BACKSLASH + QUOTE;

function escapeQuotes(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '"') {
            if (i === 0 || str[i-1] !== '\\') {
                result += '\\"';
            } else {
                result += '"';
            }
        } else {
            result += str[i];
        }
    }
    return result;
}

function processFile(filePath) {
    console.log('Processing ' + filePath);
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    function replaceRange(str, start, end, replacement) {
        return str.substring(0, start) + replacement + str.substring(end);
    }
    
    let currentIndex = 0;
    
    while (true) {
        // Find start of initialCode
        const initialCodeKey = 'initialCode: "';
        const initialCodeStart = content.indexOf(initialCodeKey, currentIndex);
        if (initialCodeStart === -1) {
            console.log('No more initialCode found after ' + currentIndex);
            break;
        }
        
        const contentStart = initialCodeStart + initialCodeKey.length;
        
        const testCodeKey = 'testCode';
        const nextTestCode = content.indexOf(testCodeKey, contentStart);
        if (nextTestCode === -1) {
            console.error('Malformed file (missing testCode after initialCode): ' + filePath);
            break;
        }
        
        let closingQuoteIndex = -1;
        for (let i = nextTestCode - 1; i > contentStart; i--) {
            if (content[i] === '"') {
                closingQuoteIndex = i;
                break;
            }
        }
        
        if (closingQuoteIndex !== -1) {
            const inner = content.substring(contentStart, closingQuoteIndex);
            console.log('Found initialCode inner len: ' + inner.length);
            
            let fixedInner = escapeQuotes(inner);
            
            if (fixedInner.endsWith(BACKSLASH)) {
                 fixedInner = fixedInner.slice(0, -1);
            }
            
            if (inner !== fixedInner) console.log('Fixed initialCode content');
            
            content = replaceRange(content, contentStart, closingQuoteIndex, fixedInner);
            currentIndex = contentStart + fixedInner.length + 2;
        } else {
            console.log('Could not find closing quote for initialCode');
            currentIndex = nextTestCode;
        }
        
        // testCode
        const testCodeKeyPattern = /testCode(?:""|)\s*:\s*"/g;
        testCodeKeyPattern.lastIndex = currentIndex;
        const match = testCodeKeyPattern.exec(content);
        if (!match) {
            console.log('Could not find testCode key regex match after ' + currentIndex);
            break;
        }
        
        const testCodeStart = match.index + match[0].length;
        console.log('Found testCode start at ' + testCodeStart);
        
        const objectEnd = content.indexOf('}', testCodeStart);
        if (objectEnd === -1) break;
        
        let testCodeClosingQuote = -1;
        for (let i = objectEnd - 1; i > testCodeStart; i--) {
            if (content[i] === '"') {
                testCodeClosingQuote = i;
                break;
            }
        }
        
        if (testCodeClosingQuote !== -1) {
            const inner = content.substring(testCodeStart, testCodeClosingQuote);
            console.log('Found testCode inner: ' + inner.substring(0, 50) + '...');
            
            let fixedInner = escapeQuotes(inner);
            
            if (fixedInner.endsWith(BACKSLASH)) {
                 fixedInner = fixedInner.slice(0, -1);
            }
            
            if (inner !== fixedInner) {
                console.log('Fixing testCode content!');
                console.log('Original quotes: ' + (inner.match(/"/g) || []).length);
                console.log('Fixed quotes: ' + (fixedInner.match(/"/g) || []).length);
            }
            
            content = replaceRange(content, testCodeStart, testCodeClosingQuote, fixedInner);
            currentIndex = testCodeStart + fixedInner.length + 5;
        } else {
            console.log('Could not find closing quote for testCode');
            currentIndex = objectEnd;
        }
    }

    if (content !== originalContent) {
         fs.writeFileSync(filePath, content);
         console.log('Wrote fixed content to ' + filePath);
    } else {
        console.log('No changes made to ' + filePath);
    }
}

processFile(targetFile);
