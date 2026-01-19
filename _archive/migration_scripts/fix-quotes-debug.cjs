
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data');
const BACKSLASH = '\\';
const QUOTE = '"';
const ESCAPED_QUOTE = BACKSLASH + QUOTE;

console.log('Debugging section1.ts in ' + dataDir + '...');

const filePath = path.join(dataDir, 'part1/section1.ts');
let content = fs.readFileSync(filePath, 'utf8');
let originalContent = content;

function replaceRange(str, start, end, replacement) {
    return str.substring(0, start) + replacement + str.substring(end);
}

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

let currentIndex = 0;

while (true) {
    // Find start of initialCode
    const initialCodeKey = 'initialCode: "';
    const initialCodeStart = content.indexOf(initialCodeKey, currentIndex);
    if (initialCodeStart === -1) break;
    
    const contentStart = initialCodeStart + initialCodeKey.length;
    
    const testCodeKey = 'testCode';
    const nextTestCode = content.indexOf(testCodeKey, contentStart);
    if (nextTestCode === -1) {
        console.error('Malformed file: ' + filePath);
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
        console.log('InitialCode Inner (raw): [' + inner + ']');
        let fixedInner = escapeQuotes(inner);
        
        if (fixedInner.endsWith('\\')) {
             console.log('Removing trailing backslash from InitialCode');
             fixedInner = fixedInner.slice(0, -1);
        }
        
        if (inner !== fixedInner) {
            console.log('Fixed InitialCode content');
            content = replaceRange(content, contentStart, closingQuoteIndex, fixedInner);
            currentIndex = contentStart + fixedInner.length + 2;
        } else {
            currentIndex = nextTestCode;
        }
    } else {
        currentIndex = nextTestCode;
    }
    
    // testCode
    const testCodeKeyPattern = /testCode(?:""|)\s*:\s*"/g;
    testCodeKeyPattern.lastIndex = currentIndex;
    const match = testCodeKeyPattern.exec(content);
    if (!match) break;
    
    const testCodeStart = match.index + match[0].length;
    
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
        console.log('TestCode Inner (raw): [' + inner + ']');
        let fixedInner = escapeQuotes(inner);
        
        if (fixedInner.endsWith('\\')) {
             console.log('Removing trailing backslash from TestCode');
             fixedInner = fixedInner.slice(0, -1);
        }
        
        if (inner !== fixedInner) {
            console.log('Fixed TestCode content');
            content = replaceRange(content, testCodeStart, testCodeClosingQuote, fixedInner);
            currentIndex = testCodeStart + fixedInner.length + 5;
        } else {
            currentIndex = objectEnd;
        }
    } else {
        currentIndex = objectEnd;
    }
}

if (content !== originalContent) {
     fs.writeFileSync(filePath, content);
     console.log('Written changes to ' + filePath);
} else {
    console.log('No changes made.');
}
