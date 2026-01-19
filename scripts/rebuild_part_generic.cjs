const fs = require('fs');
const path = require('path');

// Configuration
const projectRoot = path.resolve(__dirname, '..');
const srcDataPath = path.join(projectRoot, 'src/data');
const textRepoPath = path.join(projectRoot, 'external_resources/programming-25-repo/data');
const codeRepoPath = path.join(projectRoot, 'external_resources/Python_Programming_MOOC_2026_I');

/**
 * Rebuilds a specific section JSON using the Double Source Truth protocol.
 * @param {number} partNum - 1 to 14
 * @param {number} sectionNum - 1 to N
 */
function rebuildSection(partNum, sectionNum) {
    console.log(`
Rebuilding Part ${partNum} Section ${sectionNum}...`);

    // 1. Resolve Paths
    // Text Repo uses 'part-1', 'part-2'...
    const textPartDir = path.join(textRepoPath, `part-${partNum}`);
    
    // Code Repo Logic: Part 1-7 in Repo I, Part 8-14 in Repo II
    let currentCodeRepo = path.join(projectRoot, 'external_resources/Python_Programming_MOOC_2026_I');
    if (partNum >= 8) {
        currentCodeRepo = path.join(projectRoot, 'external_resources/Python_Programming_MOOC_2026_II');
    }
    
    // Code Repo uses 'part01', 'part02'... (Zero padded)
    const codePartDir = path.join(currentCodeRepo, `part${String(partNum).padStart(2, '0')}`);
    // Target Dir uses 'part1', 'part2'...
    const targetDir = path.join(srcDataPath, `part${partNum}`);

    if (!fs.existsSync(textPartDir)) {
        console.error(`❌ Text source directory not found: ${textPartDir}`);
        return;
    }

    const mdFiles = fs.readdirSync(textPartDir)
        .filter(f => f.endsWith('.md') && /^[0-9]+-/.test(f))
        .sort((a, b) => parseInt(a) - parseInt(b));

    const mdFilename = mdFiles[sectionNum - 1]; 
    if (!mdFilename) {
        console.error(`❌ Markdown source not found for Section ${sectionNum} in ${textPartDir}`);
        return;
    }

    const mdPath = path.join(textPartDir, mdFilename);
    const targetPath = path.join(targetDir, `section${sectionNum}.json`);

    let existingData = {};
    try {
        if (fs.existsSync(targetPath)) {
            existingData = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
        }
    } catch (e) {
        console.warn(`⚠️ Could not read existing JSON for translations: ${e.message}`);
    }

    const markdownContent = fs.readFileSync(mdPath, 'utf8');
    
    // Improved Regex to capture any attribute order and robust content matching
    // Supports both <in-browser-programming-exercise> and <programming-exercise>
    // Captures: 1=tag name, 2=attributes, 3=content
    const exerciseBlockRegex = /<(in-browser-programming-exercise|programming-exercise)\s+([^>]+)>([\s\S]*?)<\/\1>/g;
    
    // Attribute parsers - Supports both double and single quotes
    const getAttr = (attrs, name) => {
        const match = attrs.match(new RegExp(`${name}=["']([^"']+)["']`));
        return match ? match[1].trim() : null;
    };

    const blocks = [];
    let lastIndex = 0;
    let match;

    while ((match = exerciseBlockRegex.exec(markdownContent)) !== null) {
        // --- TEXT BLOCK BEFORE EXERCISE ---
        const textSegment = markdownContent.substring(lastIndex, match.index).trim();
        if (textSegment) {
            let cleanText = textSegment;
            if (lastIndex === 0) {
                cleanText = cleanText.replace(/^\s*---[\s\S]*?---\s*/, '').trim();
            }

            blocks.push({
                type: 'markdown',
                content: {
                    ENG: cleanText,
                    CAS: "",
                    EUS: ""
                }
            });
        }

        // --- EXERCISE BLOCK ---
        const tagName = match[1];
        const attributes = match[2];
        const innerContent = match[3].trim(); 
        
        const name = getAttr(attributes, 'name');
        const tmcname = getAttr(attributes, 'tmcname');

        if (!tmcname) {
            console.warn(`⚠️ Skipping exercise with no tmcname at index ${match.index}`);
            lastIndex = match.index + match[0].length;
            continue;
        }

        let initialCode = "# Write your solution here";
        let testCode = "";

        const exerciseDir = path.join(codePartDir, tmcname);
        if (fs.existsSync(exerciseDir)) {
            const srcDir = path.join(exerciseDir, 'src');
            if (fs.existsSync(srcDir)) {
                const pyFiles = fs.readdirSync(srcDir).filter(f => f.endsWith('.py') && !f.startsWith('__'));
                if (pyFiles.length > 0) {
                    initialCode = fs.readFileSync(path.join(srcDir, pyFiles[0]), 'utf8');
                }
            }

            const testDir = path.join(exerciseDir, 'test');
            if (fs.existsSync(testDir)) {
                const testFiles = fs.readdirSync(testDir).filter(f => f.endsWith('.py') && !f.startsWith('__'));
                if (testFiles.length > 0) {
                    testCode = fs.readFileSync(path.join(testDir, testFiles[0]), 'utf8');
                }
            }
        } else {
            console.error(`❌ Exercise code not found: ${tmcname}`);
        }

        let oldBlock = null;
        if (existingData.blocks) {
            oldBlock = existingData.blocks.find(b => b.exerciseId === tmcname);
        }

        blocks.push({
            type: 'exercise',
            exerciseId: tmcname,
            title: {
                ENG: name || "Exercise",
                CAS: oldBlock?.title?.CAS || "",
                EUS: oldBlock?.title?.EUS || ""
            },
            description: {
                ENG: innerContent,
                CAS: oldBlock?.description?.CAS || "",
                EUS: oldBlock?.description?.EUS || ""
            },
            initialCode: {
                ENG: initialCode,
                CAS: oldBlock?.initialCode?.CAS || initialCode.replace(/Write your solution here/i, "Escribe tu solución aquí"),
                EUS: oldBlock?.initialCode?.EUS || initialCode.replace(/Write your solution here/i, "Idatzi zure irtenbidea hemen")
            },
            testCode: testCode
        });

        lastIndex = match.index + match[0].length;
    }

    const remainingText = markdownContent.substring(lastIndex).trim();
    if (remainingText) {
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

    const oldTextBlocks = existingData.blocks ? existingData.blocks.filter(b => b.type === 'markdown') : [];
    const newTextBlocks = blocks.filter(b => b.type === 'markdown');

    newTextBlocks.forEach((block, i) => {
        if (oldTextBlocks[i]) {
            const oldEng = oldTextBlocks[i].content.ENG.substring(0, 50);
            const newEng = block.content.ENG.substring(0, 50);
            
            if (oldEng === newEng || true) { 
                block.content.CAS = oldTextBlocks[i].content.CAS || "";
                block.content.EUS = oldTextBlocks[i].content.EUS || "";
            }
        }
    });

    const newData = {
        id: `part${partNum}-${sectionNum}`,
        title: existingData.title || { ENG: "Title", CAS: "Título", EUS: "Izenburua" }, 
        blocks: blocks
    };

    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }
    
    fs.writeFileSync(targetPath, JSON.stringify(newData, null, 2));
    console.log(`✅ Successfully rebuilt ${targetPath} with ${blocks.length} blocks.`);
}

const args = process.argv.slice(2);
if (args.length === 2) {
    rebuildSection(parseInt(args[0]), parseInt(args[1]));
} else {
    console.log("Usage: node rebuild_generic.cjs <PartNum> <SectionNum>");
}

module.exports = { rebuildSection };