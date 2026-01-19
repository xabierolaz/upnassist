const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const WEBSITE_DIR = path.join(__dirname, '../external_resources/mooc-website');
const DATA_DIR = path.join(__dirname, '../src/data');

const manualMapping = {
    "part2-2": "2-else-elif.html",
    "part3-3": "3-more-loops.html", // Nested loops are likely here too
    "part4-1": "1-vscode.html",
    "part6-3": "3-errors.html",
    "part7-5": "5-creating-modules.html",
    "part7-6": "6-more-features.html",
    "part10-4": "4-application-development.html"
};

function elToMd(el) {
    let text = el.textContent.trim();
    if (!text && el.tagName !== 'DIV') return "";

    if (el.tagName === 'H1') return `# ${text}\n\n`;
    if (el.tagName === 'H2') return `## ${text}\n\n`;
    if (el.tagName === 'H3') return `### ${text}\n\n`;
    if (el.tagName === 'P') return `${text}\n\n`;
    
    if (el.tagName === 'PRE' || (el.tagName === 'DIV' && el.classList.contains('gatsby-highlight'))) {
        return "```python\n" + el.textContent + "\n```\n\n";
    }

    if (el.tagName === 'UL') {
        return Array.from(el.querySelectorAll('li')).map(li => `- ${li.textContent.trim()}`).join('\n') + "\n\n";
    }
    
    if (el.tagName === 'OL') {
        return Array.from(el.querySelectorAll('li')).map((li, i) => `${i+1}. ${li.textContent.trim()}`).join('\n') + "\n\n";
    }

    if (el.textContent.includes('Sample output') || (el.className && typeof el.className === 'string' && el.className.includes('SampleOutput'))) {
         return "```text\n" + el.textContent.replace("Sample output", "").trim() + "\n```\n\n";
    }

    return text + "\n\n";
}

function parseHtml(htmlContent) {
    const dom = new JSDOM(htmlContent);
    const doc = dom.window.document;
    
    // Find content container. Usually under H1 or just the main content area.
    // We will assume the file IS the content, so we look for the main header.
    let h1 = doc.querySelector('h1');
    if (!h1) return null;

    const container = h1.parentElement;
    const children = Array.from(container.children);
    const startIndex = children.indexOf(h1) + 1;

    const contentMap = [];
    let currentText = "";

    function flush() {
        if (currentText.trim()) {
            contentMap.push({ type: 'text', content: currentText });
            currentText = "";
        }
    }

    for (let i = startIndex; i < children.length; i++) {
        const el = children[i];
        
        // Stop markers
        if (el.textContent && el.textContent.includes("You have reached the end of this section")) break;
        if (el.querySelector && el.querySelector('a[href*=".html"]')) {
             if (el.textContent.includes('Continue to the next section')) break;
        }

        // Exercise Placeholder
        if (el.className && typeof el.className === 'string' && el.className.includes('Loading__LoadingWrapper')) {
            flush();
            contentMap.push({ type: 'exercise_placeholder' });
        } else {
            currentText += elToMd(el);
        }
    }
    flush();
    
    return contentMap;
}

async function restore() {
    for (const [id, filename] of Object.entries(manualMapping)) {
        const sectionNum = id.split('-').pop();
        const partNum = id.split('-')[0].replace('part', '');
        const jsonPath = path.join(DATA_DIR, `part${partNum}/section${sectionNum}.json`);
        const htmlPath = path.join(WEBSITE_DIR, filename);
        
        if (!fs.existsSync(jsonPath)) {
            console.log(`[SKIP] JSON missing: ${jsonPath}`);
            continue;
        }
        if (!fs.existsSync(htmlPath)) {
            console.log(`[SKIP] HTML missing: ${htmlPath}`);
            continue;
        }
        
        console.log(`Restoring ${id} from ${filename}...`);
        
        const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
        const parsedBlocks = parseHtml(htmlContent);
        
        if (!parsedBlocks || parsedBlocks.length === 0) {
            console.log(`[WARN] No content parsed for ${id}`);
            continue;
        }
        
        const json = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
        const exercises = json.blocks.filter(b => b.type === 'exercise');
        
        const newBlocks = [];
        let exerciseIndex = 0;
        
        for (const item of parsedBlocks) {
            if (item.type === 'text') {
                newBlocks.push({
                    type: 'markdown',
                    content: {
                        ENG: item.content,
                        CAS: "", 
                        EUS: ""
                    }
                });
            } else if (item.type === 'exercise_placeholder') {
                if (exerciseIndex < exercises.length) {
                    newBlocks.push(exercises[exerciseIndex]);
                    exerciseIndex++;
                }
            }
        }
        
        // Append remaining exercises
        while (exerciseIndex < exercises.length) {
            newBlocks.push(exercises[exerciseIndex]);
            exerciseIndex++;
        }
        
        json.blocks = newBlocks;
        fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2), 'utf-8');
        console.log(`[SUCCESS] Restored ${id}`);
    }
}

restore();
