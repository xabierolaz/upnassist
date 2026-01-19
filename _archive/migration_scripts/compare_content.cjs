const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const WEBSITE_DIR = path.join(__dirname, '../external_resources/mooc-website');
const DATA_DIR = path.join(__dirname, '../src/data');

// Full Metadata (Simplified for the script, assuming I can copy it or require it if I export it)
// I will reuse the list from the previous turn to be accurate.
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

function findHtmlFile(title, partIndex, sectionIndex) {
    if (partIndex === 1 && sectionIndex === 1 && title.toLowerCase().includes("getting started")) {
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

function getTextLength(htmlPath, title) {
    try {
        const html = fs.readFileSync(htmlPath, 'utf-8');
        const dom = new JSDOM(html);
        const doc = dom.window.document;
        // Find H1
        const h1s = Array.from(doc.querySelectorAll('h1'));
        let h1 = h1s.find(el => el.textContent.trim().toLowerCase().includes(title.toLowerCase()));
        if (!h1) h1 = h1s.find(el => el.textContent.trim().toLowerCase().includes(title.replace(/^\d+\.\s*/, '').toLowerCase()));
        if (!h1) return 0;
        
        let length = 0;
        const container = h1.parentElement;
        const children = Array.from(container.children);
        const startIndex = children.indexOf(h1) + 1;
        
        for (let i = startIndex; i < children.length; i++) {
            const el = children[i];
            if (el.textContent.includes("You have reached the end")) break;
            length += el.textContent.trim().length;
        }
        return length;
    } catch (e) { return 0; }
}

async function compare() {
    console.log("ID | Status | HTML File | JSON Chars | HTML Chars | Diff");
    console.log("---|---|---|---|---|---");
    
    for (const section of courseStructureMetadata) {
        const sectionNum = section.id.split('-').pop();
        const jsonPath = path.join(DATA_DIR, `part${section.part}/section${sectionNum}.json`);
        
        let jsonLen = 0;
        let jsonStatus = "MISSING";
        
        if (fs.existsSync(jsonPath)) {
            const json = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
            jsonLen = json.blocks
                .filter(b => b.type === 'markdown' && b.content && b.content.ENG)
                .reduce((acc, b) => acc + b.content.ENG.length, 0);
            jsonStatus = jsonLen > 0 ? "OK" : "EMPTY";
        }

        const htmlPath = findHtmlFile(section.title.ENG, section.part, parseInt(sectionNum));
        let htmlLen = 0;
        let htmlFile = "NONE";
        
        if (htmlPath) {
            htmlFile = path.basename(htmlPath);
            htmlLen = getTextLength(htmlPath, section.title.ENG);
        }

        let status = "OK";
        if (!htmlPath) status = "NO_SOURCE";
        else if (jsonStatus === "MISSING") status = "NO_JSON";
        else if (jsonLen < htmlLen * 0.5) status = "PARTIAL"; // Less than 50% content
        else if (jsonLen === 0) status = "EMPTY";

        console.log(`${section.id} | ${status} | ${htmlFile} | ${jsonLen} | ${htmlLen} | ${htmlLen - jsonLen}`);
    }
}

compare();
