const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'part1', 'section1.json');
let content = "";

try {
    content = fs.readFileSync(filePath, 'utf8');
    JSON.parse(content);
    console.log("✅ JSON is valid.");
} catch (e) {
    console.error("❌ JSON Invalid:", e.message);
    // Print context
    const match = e.message.match(/position (\d+)/);
    if (match) {
        const pos = parseInt(match[1]);
        const start = Math.max(0, pos - 50);
        const end = Math.min(content.length, pos + 50);
        console.log("Context:");
        console.log(content.substring(start, end));
        console.log(" ".repeat(pos - start) + "^");
    }
}
