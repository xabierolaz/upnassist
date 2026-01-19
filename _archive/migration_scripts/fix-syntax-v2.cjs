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

walkDir(dataDir, function(filePath) {
    if (filePath.endsWith('.ts') && !filePath.includes('mooc-exercises.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let changed = false;

        // 1. Fix testCode and initialCode double quotes
        // Pattern: testCode: "CONTENT",\n or testCode: "CONTENT"\n      }
        // We look for the start and the end marker ", or " followed by }
        
        const props = ['testCode', 'initialCode'];
        props.forEach(prop => {
            let startToken = prop + ': "';
            if (content.includes(startToken)) {
                let parts = content.split(startToken);
                let newContent = parts[0];
                
                for (let i = 1; i < parts.length; i++) {
                    let part = parts[i];
                    // We need to find the end quote. 
                    // In our files, it's followed by , or \n and }
                    // Heuristic: The end is the last quote before the next property or block end.
                    
                    // Let's find the first occurrence of `",` or `"\n` that is followed by a closing brace or another property.
                    // Actually, since we know our structure:
                    //   prop: "...",
                    //   nextProp: ...
                    // OR
                    //   prop: "..."
                    // }
                    
                    let endMatch = part.match(/"\s*(?:,|\n\s*\})\s*/);
                    if (endMatch) {
                        let endIdx = endMatch.index;
                        let inner = part.substring(0, endIdx);
                        let rest = part.substring(endIdx);
                        
                        // Escape all unescaped double quotes in inner
                        let fixedInner = inner.replace(/(?<!\\)"/g, '\\"');
                        
                        if (fixedInner !== inner) {
                            changed = true;
                        }
                        newContent += startToken + fixedInner + rest;
                    } else {
                        newContent += startToken + part;
                    }
                }
                content = newContent;
            }
        });

        // 2. Fix content backticks (Part 2)
        // Ensure all backticks inside content blocks are escaped.
        // Pattern: (ENG|CAS|EUS): `CONTENT`
        const langs = ['ENG', 'CAS', 'EUS'];
        langs.forEach(lang => {
            let startToken = lang + ': `';
            if (content.includes(startToken)) {
                let parts = content.split(startToken);
                let newContent = parts[0];
                
                for (let i = 1; i < parts.length; i++) {
                    let part = parts[i];
                    // Find the end backtick.
                    // It's followed by , or \n and }
                    let endMatch = part.match(/`\s*(?:,|\n\s*\})\s*/);
                    if (endMatch) {
                        let endIdx = endMatch.index;
                        let inner = part.substring(0, endIdx);
                        let rest = part.substring(endIdx);
                        
                        // Escape all unescaped backticks in inner
                        let fixedInner = inner.replace(/(?<!\\)`/g, '\\`');
                        
                        if (fixedInner !== inner) {
                            changed = true;
                        }
                        newContent += startToken + fixedInner + rest;
                    } else {
                        newContent += startToken + part;
                    }
                }
                content = newContent;
            }
        });

        if (changed) {
            fs.writeFileSync(filePath, content);
            console.log('Fixed syntax in ' + filePath);
        }
    }
});
