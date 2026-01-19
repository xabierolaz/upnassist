const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data');

// Regex to capture python code blocks
const pythonBlockRegex = /```python([\s\S]*?)```/g;
// Regex to capture sample output blocks
const sampleOutputRegex = /<sample-output>([\s\S]*?)<\/sample-output>/g;

// Function to extract blocks
function extractBlocks(text, regex) {
    const matches = [];
    let match;
    // Reset regex index
    regex.lastIndex = 0; 
    while ((match = regex.exec(text)) !== null) {
        matches.push(match[1].trim());
    }
    return matches;
}

// Function to check if text contains string literals
function hasStringLiterals(text) {
    return /(['"])(.*?)\1/.test(text);
}

// Function to check if text contains letters (to avoid flagging strictly numeric output)
function hasLetters(text) {
    return /[a-zA-Z]/.test(text);
}

// Recursive function to find files
function getFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getFiles(filePath, fileList);
        } else {
            if (file.endsWith('.json')) {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
}

const files = getFiles(dataDir);

console.log('--- Audit Report: Untranslated Code Snippets in CAS ---');

let totalIssues = 0;

files.forEach(file => {
    try {
        const content = JSON.parse(fs.readFileSync(file, 'utf8'));
        const relativePath = path.relative(dataDir, file);
        
        if (!content.blocks) return;

        content.blocks.forEach((block, index) => {
            if (block.type === 'markdown' && block.content) {
                const engContent = block.content.ENG || '';
                const casContent = block.content.CAS || '';

                if (!engContent || !casContent) return;

                // Check Python Blocks
                const engPyBlocks = extractBlocks(engContent, pythonBlockRegex);
                const casPyBlocks = extractBlocks(casContent, pythonBlockRegex);

                engPyBlocks.forEach((engBlock, i) => {
                    if (casPyBlocks[i]) {
                        const casBlock = casPyBlocks[i];
                        if (engBlock === casBlock && hasStringLiterals(engBlock) && hasLetters(engBlock)) {
                            // Ignore specific false positives
                            if (engBlock.includes('import ') || engBlock.includes('def ')) {
                                // imports and func defs might be untranslated, but check string literals
                                // If it has print("String"), it should be flagged.
                            }
                            
                            console.log(`\n[${relativePath}] Block ${index} - Python Snippet ${i+1}: POTENTIALLY UNTRANSLATED`);
                            console.log(`Code: ${engBlock.replace(/\n/g, ' ').substring(0, 80)}...`);
                            totalIssues++;
                        }
                    }
                });

                // Check Sample Output Blocks
                const engOutBlocks = extractBlocks(engContent, sampleOutputRegex);
                const casOutBlocks = extractBlocks(casContent, sampleOutputRegex);

                engOutBlocks.forEach((engBlock, i) => {
                    if (casOutBlocks[i]) {
                        const casBlock = casOutBlocks[i];
                        if (engBlock === casBlock && hasLetters(engBlock)) {
                             // Ignore purely technical outputs
                             if (engBlock.includes('File "') || engBlock.includes('Traceback')) return;

                             console.log(`\n[${relativePath}] Block ${index} - Sample Output ${i+1}: POTENTIALLY UNTRANSLATED`);
                             console.log(`Output: ${engBlock.replace(/\n/g, ' ').substring(0, 80)}...`);
                             totalIssues++;
                        }
                    }
                });
            }
        });
        
    } catch (e) {
        console.error(`Error processing ${file}: ${e.message}`);
    }
});

console.log(`\nTotal potential issues found: ${totalIssues}`);