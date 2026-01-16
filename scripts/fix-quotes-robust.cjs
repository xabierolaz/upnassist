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

function escapeContent(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === '"') {
            // Count preceding backslashes
            let backslashes = 0;
            let j = i - 1;
            while (j >= 0 && str[j] === '\\') {
                backslashes++;
                j--;
            }
            
            // If even number of backslashes (0, 2, ...), the quote is unescaped.
            // We need to escape it.
            if (backslashes % 2 === 0) {
                result += '\\"';
            } else {
                // Already escaped
                result += '"';
            }
        } else if (char === '\n') {
            // Escape literal newline to \n
            result += '\\n';
        } else if (char === '\r') {
            // Ignore CR or escape it? Better to ignore/remove for consistency
        } else {
            result += char;
        }
    }
    return result;
}

walkDir(dataDir, function(filePath) {
    if (filePath.endsWith('.ts') && !filePath.includes('mooc-exercises.ts')) {
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
            if (initialCodeStart === -1) break;
            
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
                let fixedInner = escapeContent(inner);
                
                if (fixedInner.endsWith('\\')) {
                     fixedInner = fixedInner.slice(0, -1);
                }
                
                content = replaceRange(content, contentStart, closingQuoteIndex, fixedInner);
                currentIndex = contentStart + fixedInner.length + 2;
            } else {
                currentIndex = nextTestCode;
            }
            
            // testCode
            // Handle corrupted testCode"" case from previous attempt
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
                let fixedInner = escapeContent(inner);
                
                if (fixedInner.endsWith('\\')) {
                     fixedInner = fixedInner.slice(0, -1);
                }
                
                content = replaceRange(content, testCodeStart, testCodeClosingQuote, fixedInner);
                currentIndex = testCodeStart + fixedInner.length + 5;
            } else {
                currentIndex = objectEnd;
            }
        }

        if (content !== originalContent) {
             fs.writeFileSync(filePath, content);
             console.log('Fixed syntax (quotes & newlines) in ' + filePath);
        }
    }
});
