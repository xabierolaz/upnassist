const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const WEBSITE_DIR = path.join(__dirname, '../external_resources/mooc-website');
const DATA_DIR = path.join(__dirname, '../src/data');

// Full Metadata
const courseStructureMetadata = [
    { id: "part1-1", title: { ENG: "Getting started" }, part: 1 },
    { id: "part1-2", title: { ENG: "Information from the user" }, part: 1 },
    { id: "part1-3", title: { ENG: "More about variables" }, part: 1 },
    { id: "part1-4", title: { ENG: "Arithmetic operations" }, part: 1 },
    { id: "part1-5", title: { ENG: "Conditional statements" }, part: 1 },
    { id: "part2-1", title: { ENG: "Programming terminology" }, part: 2 },
    { id: "part2-2", title: { ENG: "More conditionals" }, part: 2 },
    { id: "part2-3", title: { ENG: "Combining conditions" }, part: 2 },
    { id: "part2-4", title: { ENG: "Simple loops" }, part: 2 },
    { id: "part3-1", title: { ENG: "More loops" }, part: 3 },
    { id: "part3-2", title: { ENG: "Working with strings" }, part: 3 },
    { id: "part3-3", title: { ENG: "More loops (nested)" }, part: 3 },
    { id: "part3-4", title: { ENG: "Defining functions" }, part: 3 },
    { id: "part4-1", title: { ENG: "Visual Studio Code" }, part: 4 },
    { id: "part4-2", title: { ENG: "More functions" }, part: 4 },
    { id: "part4-3", title: { ENG: "Lists" }, part: 4 },
    { id: "part4-4", title: { ENG: "Definite iteration" }, part: 4 },
    { id: "part4-5", title: { ENG: "Print statement formatting" }, part: 4 },
    { id: "part5-1", title: { ENG: "More lists" }, part: 5 },
    { id: "part5-2", title: { ENG: "References" }, part: 5 },
    { id: "part5-3", title: { ENG: "Dictionary" }, part: 5 },
    { id: "part5-4", title: { ENG: "Tuple" }, part: 5 },
    { id: "part6-1", title: { ENG: "Reading files" }, part: 6 },
    { id: "part6-2", title: { ENG: "Writing files" }, part: 6 },
    { id: "part6-3", title: { ENG: "Handling errors" }, part: 6 },
    { id: "part6-4", title: { ENG: "Local database / JSON" }, part: 6 },
    { id: "part7-1", title: { ENG: "Modules" }, part: 7 },
    { id: "part7-2", title: { ENG: "Randomness" }, part: 7 },
    { id: "part7-3", title: { ENG: "Times and dates" }, part: 7 },
    { id: "part7-4", title: { ENG: "Data processing" }, part: 7 },
    { id: "part7-5", title: { ENG: "Creating modules" }, part: 7 },
    { id: "part7-6", title: { ENG: "More features" }, part: 7 },
    { id: "part8-1", title: { ENG: "Objects and methods" }, part: 8 },
    { id: "part8-2", title: { ENG: "Classes and objects" }, part: 8 },
    { id: "part8-3", title: { ENG: "Defining classes" }, part: 8 },
    { id: "part8-4", title: { ENG: "Defining methods" }, part: 8 },
    { id: "part8-5", title: { ENG: "More examples of classes" }, part: 8 },
    { id: "part9-1", title: { ENG: "Objects and references" }, part: 9 },
    { id: "part9-2", title: { ENG: "Objects as attributes" }, part: 9 },
    { id: "part9-3", title: { ENG: "Encapsulation" }, part: 9 },
    { id: "part9-4", title: { ENG: "Scope of methods" }, part: 9 },
    { id: "part9-5", title: { ENG: "Class attributes" }, part: 9 },
    { id: "part9-6", title: { ENG: "More examples with classes" }, part: 9 },
    { id: "part10-1", title: { ENG: "Class hierarchies" }, part: 10 },
    { id: "part10-2", title: { ENG: "Access modifiers" }, part: 10 },
    { id: "part10-3", title: { ENG: "OO programming techniques" }, part: 10 },
    { id: "part10-4", title: { ENG: "Developing a larger application" }, part: 10 },
    { id: "part11-1", title: { ENG: "List comprehensions" }, part: 11 },
    { id: "part11-2", title: { ENG: "More comprehensions" }, part: 11 },
    { id: "part11-3", title: { ENG: "Recursion" }, part: 11 },
    { id: "part11-4", title: { ENG: "More recursion examples" }, part: 11 },
    { id: "part12-1", title: { ENG: "Functions as arguments" }, part: 12 },
    { id: "part12-2", title: { ENG: "Generators" }, part: 12 },
    { id: "part12-3", title: { ENG: "Functional programming" }, part: 12 },
    { id: "part12-4", title: { ENG: "Regular expressions" }, part: 12 },
    { id: "part12-5", title: { ENG: "Custom modules" }, part: 12 },
    { id: "part12-6", title: { ENG: "Advanced recursion" }, part: 12 },
    { id: "part13-1", title: { ENG: "Pygame" }, part: 13 },
    { id: "part13-2", title: { ENG: "Animation" }, part: 13 },
    { id: "part13-3", title: { ENG: "Events" }, part: 13 },
    { id: "part13-4", title: { ENG: "More Pygame techniques" }, part: 13 },
    { id: "part14-1", title: { ENG: "Game project" }, part: 14 },
    { id: "part14-2", title: { ENG: "Robot and boxes" }, part: 14 },
    { id: "part14-3", title: { ENG: "Finishing the game" }, part: 14 },
    { id: "part14-4", title: { ENG: "Your own game" }, part: 14 }
];

const manualMapping = {
    "part2-2": "2-else-elif.html",
    "part3-3": "3-more-loops.html",
    "part4-1": "1-vscode.html",
    "part6-3": "3-errors.html",
    "part7-5": "5-creating-modules.html",
    "part7-6": "6-more-features.html",
    "part10-4": "4-application-development.html"
};

function elToMd(el) {
    if (!el) return "";
    
    // Skip
    if (['SCRIPT', 'STYLE', 'SVG', 'NOSCRIPT'].includes(el.tagName)) return "";
    // Skip navigation elements
    if (el.classList && (el.classList.contains('EndOfSubSection__ButtonWrapper-ees48a-2') || el.classList.contains('CoursePageFooter__CoursePageFooterWrapper-sc-1wp274x-0'))) return "";

    // Headers
    if (el.tagName === 'H1') return `# ${el.textContent.trim()}\n\n`;
    if (el.tagName === 'H2') return `## ${el.textContent.trim()}\n\n`;
    if (el.tagName === 'H3') return `### ${el.textContent.trim()}\n\n`;
    if (el.tagName === 'H4') return `#### ${el.textContent.trim()}\n\n`;
    
    // Paragraphs
    if (el.tagName === 'P') {
        return el.textContent.trim() + "\n\n";
    }

    // Lists
    if (el.tagName === 'UL') {
        return Array.from(el.children).map(li => `- ${li.textContent.trim()}`).join('\n') + "\n\n";
    }
    if (el.tagName === 'OL') {
        return Array.from(el.children).map((li, i) => `${i+1}. ${li.textContent.trim()}`).join('\n') + "\n\n";
    }

    // Code Blocks
    if (el.tagName === 'PRE' || (el.tagName === 'DIV' && el.classList.contains('gatsby-highlight'))) {
        return "```python\n" + el.textContent + "\n```\n\n";
    }

    // Sample Output (Strict Class Check)
    if (el.className && typeof el.className === 'string' && el.className.includes('SampleOutput__Wrapper')) {
         return "```text\n" + el.textContent.replace("Sample output", "").trim() + "\n```\n\n";
    }

    // Recursive Traversal for wrappers
    if (['DIV', 'ASIDE', 'SECTION', 'ARTICLE', 'BLOCKQUOTE', 'MAIN'].includes(el.tagName)) {
        return Array.from(el.children).map(child => elToMd(child)).join('');
    }

    // Fallback for leaf nodes like SPAN, B, I if top level, or text nodes
    if (el.nodeType === 3) return el.textContent; // Text node
    
    // If element has no children but has text content (e.g. unknown tag or B/I), return text
    if (el.children && el.children.length === 0) return el.textContent.trim() + "\n\n";

    return "";
}

function parseHtml(htmlContent, sectionTitle) {
    const dom = new JSDOM(htmlContent);
    const doc = dom.window.document;
    
    const h1s = Array.from(doc.querySelectorAll('h1'));
    let h1 = h1s.find(el => el.textContent.trim().toLowerCase().includes(sectionTitle.toLowerCase()));
    
    if (!h1) {
        const cleanTitle = sectionTitle.replace(/^\d+\.\s*/, '');
        h1 = h1s.find(el => el.textContent.trim().toLowerCase().includes(cleanTitle.toLowerCase()));
    }
    
    // Fallback
    if (!h1 && h1s.length > 0) h1 = h1s[0];
    
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
        if (el.querySelector && el.querySelector('a[href*=\".html\"]')) {
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

function findHtmlFile(id, title, partIndex, sectionIndex) {
    if (manualMapping[id]) return path.join(WEBSITE_DIR, manualMapping[id]);

    if (partIndex === 1 && sectionIndex === 1) {
        const p = path.join(WEBSITE_DIR, 'index.html');
        if (fs.existsSync(p)) return p;
    }

    const files = fs.readdirSync(WEBSITE_DIR).filter(f => f.endsWith('.html'));
    const slug = title.toLowerCase().replace(/[^\w]+/g, '-');
    let match = files.find(f => f.includes(slug));
    
    if (match) return path.join(WEBSITE_DIR, match);
    
    const titleWords = title.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(w => w.length > 3);
    match = files.find(f => {
        let hits = 0;
        titleWords.forEach(w => { if (f.includes(w)) hits++; });
        return hits >= Math.min(titleWords.length, 2);
    });
    
    if (match) return path.join(WEBSITE_DIR, match);
    
    return null;
}

async function restore() {
    for (const section of courseStructureMetadata) {
        const sectionNum = section.id.split('-').pop();
        const jsonPath = path.join(DATA_DIR, `part${section.part}/section${sectionNum}.json`);
        
        if (!fs.existsSync(jsonPath)) continue; 
        
        const htmlPath = findHtmlFile(section.id, section.title.ENG, section.part, parseInt(sectionNum));
        if (!htmlPath || !fs.existsSync(htmlPath)) {
            console.log(`[WARN] No HTML found for ${section.id}`);
            continue;
        }
        
        const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
        const parsedBlocks = parseHtml(htmlContent, section.title.ENG);
        
        if (!parsedBlocks || parsedBlocks.length === 0) {
            console.log(`[WARN] No content parsed for ${section.id} from ${path.basename(htmlPath)}`);
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
        
        while (exerciseIndex < exercises.length) {
            newBlocks.push(exercises[exerciseIndex]);
            exerciseIndex++;
        }
        
        json.blocks = newBlocks;
        fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2), 'utf-8');
        console.log(`[RESTORED] ${section.id}`);
    }
}

restore();
