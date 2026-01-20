const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/data');
const report = {};
let totalMissingBlocks = 0;

function isTranslated(textObj) {
    if (!textObj) return false;
    
    // Check CAS
    const cas = textObj.CAS;
    const eng = textObj.ENG;
    
    if (!cas || typeof cas !== 'string' || cas.trim().length === 0) return false;
    if (cas === eng && eng.trim().length > 0 && !isCodeOnly(eng)) return false; // Identical to English (and not just code)

    // Check EUS
    const eus = textObj.EUS;
    if (!eus || typeof eus !== 'string' || eus.trim().length === 0) return false;
    if (eus === eng && eng.trim().length > 0 && !isCodeOnly(eng)) return false;

    return true;
}

// Helper to ignore blocks that are just code blocks or images, which might be identical
function isCodeOnly(text) {
    const trimmed = text.trim();
    // Simple heuristic: if it looks like just a code block or image
    if (trimmed.startsWith('```') && trimmed.endsWith('```')) return true;
    if (trimmed.startsWith('<img') && trimmed.endsWith('>')) return true;
    return false;
}

function auditPart(partNum) {
    const partDir = path.join(baseDir, `part${partNum}`);
    if (!fs.existsSync(partDir)) return;

    const files = fs.readdirSync(partDir).filter(f => f.endsWith('.json'));

    files.forEach(file => {
        const filePath = path.join(partDir, file);
        const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const missingInFile = [];

        if (content.blocks) {
            content.blocks.forEach((block, index) => {
                let missing = false;
                let reason = "";

                if (block.type === 'markdown') {
                    if (!isTranslated(block.content)) {
                        missing = true;
                        reason = "Markdown untranslated";
                    }
                } else if (block.type === 'exercise') {
                    if (!isTranslated(block.title)) {
                        missing = true;
                        reason = "Exercise Title untranslated";
                    } else if (!isTranslated(block.description)) {
                        missing = true;
                        reason = "Exercise Description untranslated";
                    }
                }

                if (missing) {
                    missingInFile.push({
                        index: index,
                        type: block.type,
                        reason: reason,
                        preview: block.type === 'exercise' ? block.title?.ENG : (block.content?.ENG?.substring(0, 30) + "...")
                    });
                }
            });
        }

        if (missingInFile.length > 0) {
            report[`part${partNum}/${file}`] = missingInFile;
            totalMissingBlocks += missingInFile.length;
        }
    });
}

// Audit all parts 1 to 14
for (let i = 1; i <= 14; i++) {
    auditPart(i);
}

console.log(JSON.stringify(report, null, 2));
console.error(`Total missing/untranslated blocks found: ${totalMissingBlocks}`);