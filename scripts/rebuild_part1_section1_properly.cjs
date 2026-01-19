const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const markdownPath = path.join(projectRoot, 'external_resources/programming-25-repo/data/part-1/1-getting-started.md');
const exercisesRoot = path.join(projectRoot, 'external_resources/Python_Programming_MOOC_2026_I/part01');
const targetPath = path.join(projectRoot, 'src/data/part1/section1.json');

// Read existing JSON to salvage translations if possible
let existingData = {};
try {
    existingData = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
} catch (e) {
    console.warn("Could not read existing section1.json");
}

const markdownContent = fs.readFileSync(markdownPath, 'utf8');

// Regex to find exercises
const exerciseRegex = /<in-browser-programming-exercise\s+name="([^"]+)"\s+tmcname="([^"]+)"[^>]*>([\s\S]*?)<\/in-browser-programming-exercise>/g;

const blocks = [];
let lastIndex = 0;
let match;

while ((match = exerciseRegex.exec(markdownContent)) !== null) {
    // Add text block before this exercise
    const textContent = markdownContent.substring(lastIndex, match.index).trim();
    if (textContent) {
        // Clean up frontmatter if it's the first block
        let cleanText = textContent;
        if (lastIndex === 0) {
            cleanText = cleanText.replace(/^---[\s\S]*?---\s*/, '').trim();
        }
        
        blocks.push({
            type: 'markdown',
            content: {
                ENG: cleanText,
                CAS: "", // Placeholder
                EUS: ""  // Placeholder
            }
        });
    }

    // Add exercise block
    const title = match[1];
    const tmcname = match[2];
    const description = match[3].trim();

    // Load code
    const exerciseDir = path.join(exercisesRoot, tmcname);
    let initialCode = "# Write your code here";
    let testCode = "";

    try {
        // Find src file (usually src/name.py or similar)
        // We know structure is src/{something}.py. 
        // Actually, sometimes the file name matches tmcname suffix?
        // Let's just find the first .py file in src/ that is not __init__.py
        const srcDir = path.join(exerciseDir, 'src');
        const srcFiles = fs.readdirSync(srcDir).filter(f => f.endsWith('.py') && !f.startsWith('__'));
        if (srcFiles.length > 0) {
            initialCode = fs.readFileSync(path.join(srcDir, srcFiles[0]), 'utf8');
        }
    } catch (e) {
        console.error(`Could not read initial code for ${tmcname}: ${e.message}`);
    }

    try {
        const testDir = path.join(exerciseDir, 'test');
        const testFiles = fs.readdirSync(testDir).filter(f => f.endsWith('.py') && !f.startsWith('__'));
         if (testFiles.length > 0) {
            testCode = fs.readFileSync(path.join(testDir, testFiles[0]), 'utf8');
        }
    } catch (e) {
        console.error(`Could not read test code for ${tmcname}: ${e.message}`);
    }

    // Salvage translations if available in existingData
    let salvaged = null;
    if (existingData.blocks) {
        salvaged = existingData.blocks.find(b => b.exerciseId === tmcname);
    }

    blocks.push({
        type: 'exercise',
        exerciseId: tmcname,
        title: {
            ENG: title,
            CAS: salvaged?.title?.CAS || "",
            EUS: salvaged?.title?.EUS || ""
        },
        description: {
            ENG: description,
            CAS: salvaged?.description?.CAS || "",
            EUS: salvaged?.description?.EUS || ""
        },
        initialCode: {
            ENG: initialCode,
            CAS: salvaged?.initialCode?.CAS || initialCode.replace("Write your code here", "Escribe tu código aquí"), 
            EUS: salvaged?.initialCode?.EUS || initialCode.replace("Write your code here", "Idatzi zure kodea hemen")
        },
        testCode: testCode
    });

    lastIndex = match.index + match[0].length;
}

// Add remaining text
const remainingText = markdownContent.substring(lastIndex).trim();
if (remainingText) {
     // Remove any footer comments like the quiz placeholder
     const cleanRemaining = remainingText.replace(/<!--[\s\S]*?-->/, '').trim();
     if (cleanRemaining) {
        blocks.push({
            type: 'markdown',
            content: {
                ENG: cleanRemaining,
                CAS: "",
                EUS: ""
            }
        });
     }
}

const newData = {
    id: "part1-1",
    title: existingData.title || { ENG: "Getting started", CAS: "Comenzando", EUS: "Hasten" },
    blocks: blocks
};

fs.writeFileSync(targetPath, JSON.stringify(newData, null, 2));
console.log("Rebuilt section1.json with " + blocks.length + " blocks.");
