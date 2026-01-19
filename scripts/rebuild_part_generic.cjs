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
    // Code Repo uses 'part01', 'part02'... (Zero padded)
    const codePartDir = path.join(codeRepoPath, `part${String(partNum).padStart(2, '0')}`);
    // Target Dir uses 'part1', 'part2'...
    const targetDir = path.join(srcDataPath, `part${partNum}`);

    if (!fs.existsSync(textPartDir)) {
        console.error(`❌ Text source directory not found: ${textPartDir}`);
        return;
    }

    // Find the correct Markdown file for this section
    // They usually start with the section number: "1-getting-started.md", "2-..."
    const mdFiles = fs.readdirSync(textPartDir)
        .filter(f => f.endsWith('.md') && /^[0-9]+-/.test(f))
        .sort((a, b) => parseInt(a) - parseInt(b));

    const mdFilename = mdFiles[sectionNum - 1]; // Array is 0-indexed, sections 1-indexed
    if (!mdFilename) {
        console.error(`❌ Markdown source not found for Section ${sectionNum} in ${textPartDir}`);
        return;
    }

    const mdPath = path.join(textPartDir, mdFilename);
    const targetPath = path.join(targetDir, `section${sectionNum}.json`);

    // 2. Load Existing JSON (to salvage translations)
    let existingData = {};
    try {
        if (fs.existsSync(targetPath)) {
            existingData = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
        }
    } catch (e) {
        console.warn(`⚠️ Could not read existing JSON for translations: ${e.message}`);
    }

    // 3. Process Content
    const markdownContent = fs.readFileSync(mdPath, 'utf8');
    
    // Improved Regex to capture any attribute order and robust content matching
    // Matches <in-browser-programming-exercise\s+([^>]+)>([\s\S]*?)<\/in-browser-programming-exercise>
    // Captures: 1=attributes, 2=content
    const exerciseBlockRegex = /<in-browser-programming-exercise\s+([^>]+)>([\s\S]*?)<\/in-browser-programming-exercise>/g;
    
    // Attribute parsers
    const getAttr = (attrs, name) => {
        const match = attrs.match(new RegExp(`${name}=\"([^\"]+)\"`));
        return match ? match[1] : null;
    };

    const blocks = [];
    let lastIndex = 0;
    let match;

    while ((match = exerciseBlockRegex.exec(markdownContent)) !== null) {
        // --- TEXT BLOCK BEFORE EXERCISE ---
        const textSegment = markdownContent.substring(lastIndex, match.index).trim();
        if (textSegment) {
            // Clean Frontmatter if it's the very first block
            let cleanText = textSegment;
            if (lastIndex === 0) {
                cleanText = cleanText.replace(/^---[\s\S]*?---\s*/, '').trim();
            }

            blocks.push({
                type: 'markdown',
                content: {
                    ENG: cleanText,
                    CAS: "", // Translations will be filled later
                    EUS: ""
                }
            });
        }

        // --- EXERCISE BLOCK ---
        const attributes = match[1];
        const innerContent = match[2].trim(); // Usually the description
        
        const name = getAttr(attributes, 'name');
        const tmcname = getAttr(attributes, 'tmcname');

        if (!tmcname) {
            console.warn(`⚠️ Skipping exercise with no tmcname at index ${match.index}`);
            lastIndex = match.index + match[0].length;
            continue;
        }

        // Fetch Code from Source 2
        let initialCode = "# Write your solution here";
        let testCode = "";

        const exerciseDir = path.join(codePartDir, tmcname);
        if (fs.existsSync(exerciseDir)) {
            // SRC
            const srcDir = path.join(exerciseDir, 'src');
            if (fs.existsSync(srcDir)) {
                const pyFiles = fs.readdirSync(srcDir).filter(f => f.endsWith('.py') && !f.startsWith('__'));
                if (pyFiles.length > 0) {
                    initialCode = fs.readFileSync(path.join(srcDir, pyFiles[0]), 'utf8');
                }
            }

            // TEST
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

        // Salvage Translations
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

    // --- FINAL TEXT BLOCK ---
    const remainingText = markdownContent.substring(lastIndex).trim();
    if (remainingText) {
        const cleanRemaining = remainingText.replace(/<!--[\s\S]*?-->/, '').trim(); // Remove HTML comments
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

    // 4. Match Translations for Text Blocks (Heuristic)
    // We try to match text blocks by index. It's imperfect but saves work.
    const oldTextBlocks = existingData.blocks ? existingData.blocks.filter(b => b.type === 'markdown') : [];
    const newTextBlocks = blocks.filter(b => b.type === 'markdown');

    newTextBlocks.forEach((block, i) => {
        if (oldTextBlocks[i]) {
            // Simple heuristic: If the ENG content starts similarly, assume it's the same block
            const oldEng = oldTextBlocks[i].content.ENG.substring(0, 50);
            const newEng = block.content.ENG.substring(0, 50);
            
            // Or just blindly copy if count matches to preserve manual work
            if (oldEng === newEng || true) { // Trust index for now
                block.content.CAS = oldTextBlocks[i].content.CAS || "";
                block.content.EUS = oldTextBlocks[i].content.EUS || "";
            }
        }
    });

    // 5. Write Result
    const newData = {
        id: `part${partNum}-${sectionNum}`,
        title: existingData.title || { ENG: "Title", CAS: "Título", EUS: "Izenburua" }, // Improve title extraction later
        blocks: blocks
    };

    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }
    
    fs.writeFileSync(targetPath, JSON.stringify(newData, null, 2));
    console.log(`✅ Successfully rebuilt ${targetPath} with ${blocks.length} blocks.`);
}

// CLI Args
const args = process.argv.slice(2);
if (args.length === 2) {
    rebuildSection(parseInt(args[0]), parseInt(args[1]));
} else {
    console.log("Usage: node rebuild_generic.cjs <PartNum> <SectionNum>");
}

module.exports = { rebuildSection };
