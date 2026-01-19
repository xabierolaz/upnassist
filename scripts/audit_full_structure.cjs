const fs = require('fs');
const path = require('path');

// Base paths
const srcDataPath = path.resolve('src/data');
const extDataPath = path.resolve('external_resources/programming-25-repo/data');

// Report storage
const report = {
    totalSections: 0,
    brokenSections: [],
    suspiciousSections: [],
    validSections: []
};

// Helper to get MD files for a part
function getMdFiles(partNum) {
    const partDir = path.join(extDataPath, `part-${partNum}`);
    if (!fs.existsSync(partDir)) return [];
    
    return fs.readdirSync(partDir)
        .filter(f => f.endsWith('.md') && /^[0-9]+-/.test(f)) // Matches "1-getting-started.md"
        .sort((a, b) => parseInt(a) - parseInt(b));
}

// Main audit loop
function audit() {
    // Audit Parts 1 to 14
    for (let part = 1; part <= 14; part++) {
        const srcPartDir = path.join(srcDataPath, `part${part}`);
        
        // Get expected MD files
        const mdFiles = getMdFiles(part);
        
        if (!fs.existsSync(srcPartDir)) {
            console.log(`Part ${part} missing in src/data`);
            continue;
        }

        mdFiles.forEach((mdFile, index) => {
            const sectionNum = index + 1;
            const jsonPath = path.join(srcPartDir, `section${sectionNum}.json`);
            const mdPath = path.join(extDataPath, `part-${part}`, mdFile);
            
            report.totalSections++;

            if (!fs.existsSync(jsonPath)) {
                report.brokenSections.push({
                    id: `part${part}/section${sectionNum}`,
                    reason: "Missing JSON file"
                });
                return;
            }

            // Analyze MD
            const mdContent = fs.readFileSync(mdPath, 'utf8');
            const expectedExercises = (mdContent.match(/<in-browser-programming-exercise/g) || []).length;

            // Analyze JSON
            let jsonData;
            try {
                jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
            } catch (e) {
                report.brokenSections.push({
                    id: `part${part}/section${sectionNum}`,
                    reason: "Invalid JSON syntax"
                });
                return;
            }

            const jsonExercises = jsonData.blocks.filter(b => b.type === 'exercise').length;
            const jsonBlocks = jsonData.blocks;
            
            // Check 1: Exercise Count
            if (jsonExercises !== expectedExercises) {
                report.brokenSections.push({
                    id: `part${part}/section${sectionNum}`,
                    reason: `Exercise Mismatch: MD has ${expectedExercises}, JSON has ${jsonExercises}`
                });
                return;
            }

            // Check 2: Interleaving (Suspicious Pattern)
            // If we have > 1 exercise, and all exercises are clustered at the end
            if (jsonExercises > 1) {
                const lastExerciseIndex = jsonBlocks.map(b => b.type).lastIndexOf('exercise');
                const firstExerciseIndex = jsonBlocks.findIndex(b => b.type === 'exercise');
                
                // If all exercises are contiguous (indices are sequential)
                let isClustered = true;
                let exerciseIndices = [];
                jsonBlocks.forEach((b, i) => {
                    if (b.type === 'exercise') exerciseIndices.push(i);
                });

                // Check if indices are exactly sequential (e.g., 5, 6, 7)
                for (let i = 0; i < exerciseIndices.length - 1; i++) {
                    if (exerciseIndices[i+1] !== exerciseIndices[i] + 1) {
                        isClustered = false; // They are separated by something (likely markdown)
                        break;
                    }
                }

                // But wait, sometimes exercises ARE adjacent in the source.
                // Better check: Do we have Markdown -> Exercise -> Markdown?
                // Or Markdown (huge) -> Exercise -> Exercise?
                
                // Let's use a simple heuristic:
                // If the first block is HUGE markdown (contains multiple topics) and followed by exercises.
                // But "huge" is subjective.
                // Let's rely on the "Clustered" check. If they are clustered, it's suspicious.
                
                if (isClustered && jsonBlocks.length > exerciseIndices.length + 1) {
                     report.suspiciousSections.push({
                        id: `part${part}/section${sectionNum}`,
                        reason: "Suspicious Interleaving (All exercises are contiguous)"
                    });
                } else {
                    report.validSections.push(`part${part}/section${sectionNum}`);
                }
            } else {
                report.validSections.push(`part${part}/section${sectionNum}`);
            }
        });
    }

    console.log(JSON.stringify(report, null, 2));
}

audit();
