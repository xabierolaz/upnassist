const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const htmlPath = path.join(__dirname, '../external_resources/mooc-website/2-information-from-the-user.html');
try {
    const html = fs.readFileSync(htmlPath, 'utf-8');
    const dom = new JSDOM(html);
    const doc = dom.window.document;

    // Find main content header
    const h1 = Array.from(doc.querySelectorAll('h1')).find(el => el.textContent.trim().includes('Information from the user'));
    if (!h1) {
        console.error("H1 not found");
        process.exit(1);
    }

    const container = h1.parentElement;
    let children = Array.from(container.children);

    let blocks = [];
    let currentMarkdown = "";

    function flushMarkdown() {
        if (currentMarkdown.trim()) {
            blocks.push({ type: 'markdown', content: { ENG: currentMarkdown } });
            currentMarkdown = "";
        }
    }

    function elToMd(el) {
        // Skip navigation/footer stuff if found inside
        if (el.querySelector('a[href="3-more-about-variables.html"]')) return "";

        let text = el.textContent.trim();
        if (!text && el.tagName !== 'DIV') return ""; // Skip empty non-divs

        if (el.tagName === 'H1') return `# ${text}\n\n`;
        if (el.tagName === 'H2') return `## ${text}\n\n`;
        if (el.tagName === 'H3') return `### ${text}\n\n`;
        if (el.tagName === 'P') return `${text}\n\n`;
        
        if (el.tagName === 'DIV' && el.classList.contains('gatsby-highlight')) {
            // Code block
            return "```python\n" + el.textContent + "\n```\n\n";
        }
        
        if (el.tagName === 'PRE') {
             return "```python\n" + el.textContent + "\n```\n\n";
        }

        if (el.tagName === 'UL') {
            return Array.from(el.querySelectorAll('li')).map(li => `- ${li.textContent.trim()}`).join('\n') + "\n\n";
        }
        
        // Sample Output
        if (el.classList.contains('SampleOutput__Wrapper-sc-8wht92-0') || el.textContent.includes('Sample output')) {
             return "```text\n" + el.textContent.replace("Sample output", "").trim() + "\n```\n\n";
        }

        return text + "\n\n";
    }

    // Start iterating from H1
    let startIndex = children.indexOf(h1);
    for (let i = startIndex; i < children.length; i++) {
        let el = children[i];
        
        // Check for exercise placeholder (LoadingWrapper)
        if (el.className && typeof el.className === 'string' && el.className.includes('Loading__LoadingWrapper')) {
            flushMarkdown();
            blocks.push({ type: 'exercise_placeholder' });
        } else {
            currentMarkdown += elToMd(el);
        }
    }
    flushMarkdown();

    console.log(JSON.stringify(blocks, null, 2));

} catch (e) {
    console.error(e);
}
