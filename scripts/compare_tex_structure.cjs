const fs = require('fs');
const path = require('path');

// RUTAS ABSOLUTAS PARA EVITAR PROBLEMAS
const engFile = 'D:\\Upnassist2026\\document\\sparse_lab.tex';
const casFile = 'D:\\Upnassist2026\\Pyxom-vNext\\curriculum-src\\data-structures\\02_Matrices_Dispersas\\Thursday_Practice\\lab_dispersas.tex';

console.log(`⚖️  Comparing TEX Structure:\n   ENG: ${engFile}\n   CAS: ${casFile}\n`);

function extractStructure(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        // Handle both CRLF and LF
        const lines = content.split(/\r?\n/);
        const structure = [];

        lines.forEach((line, index) => {
            const trimmed = line.trim();
            
            if (trimmed.startsWith('\\section')) {
                structure.push({ type: 'SECTION', content: trimmed, line: index + 1 });
            } else if (trimmed.startsWith('\\subsection')) {
                structure.push({ type: 'SUBSECTION', content: trimmed, line: index + 1 });
            } else if (trimmed.startsWith('\\begin{attachedlisting}')) {
                const match = trimmed.match(/\\\[(.*?)\\\]/);
                const label = match ? match[1] : 'unknown';
                structure.push({ type: 'CODE', content: label, line: index + 1 });
            }
        });
        
        console.log(`Parsed ${structure.length} items from ${filePath}`);
        return structure;
    } catch (e) {
        console.error(`Error reading ${filePath}:`, e.message);
        return [];
    }
}

const engStruct = extractStructure(engFile);
const casStruct = extractStructure(casFile);

// Compare
console.log("\n--- STRUCTURAL COMPARISON ---");
const maxLen = Math.max(engStruct.length, casStruct.length);

console.log(`${"ENGLISH (Original)".padEnd(50)} | ${"SPANISH (Translation)".padEnd(50)} | STATUS`);
console.log("-".repeat(110));

let mismatchCount = 0;

for (let i = 0; i < maxLen; i++) {
    const eng = engStruct[i] || { type: '---', content: '---' };
    const cas = casStruct[i] || { type: '---', content: '---' };

    let match = false;
    if (eng.type === cas.type) {
        if (eng.type === 'CODE') {
            match = eng.content === cas.content; 
        } else {
            // Rough check: ignore formatting and language diffs
            // Just check if structure aligns (both are subsections)
            match = true;
        }
    }

    const status = match ? "OK" : "MISMATCH";
    if (status === "MISMATCH") mismatchCount++;

    const engDisplay = eng.content.substring(0, 45).replace(/[\n\r]/g, '');
    const casDisplay = cas.content.substring(0, 45).replace(/[\n\r]/g, '');

    console.log(`${engDisplay.padEnd(50)} | ${casDisplay.padEnd(50)} | ${status}`);
}

console.log("\n---------------------------------------------------");
if (mismatchCount > 0 || engStruct.length !== casStruct.length) {
    console.log(`⚠️ FOUND DISCREPANCIES. Total Mismatches: ${mismatchCount}`);
} else {
    console.log("✅ Structure aligns perfectly.");
}