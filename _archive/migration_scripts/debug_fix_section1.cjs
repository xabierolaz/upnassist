const fs = require('fs');
const file = 'src/data/part1/section1.json';
let content = fs.readFileSync(file, 'utf8');

console.log("Original snippet:");
const snippetIndex = content.indexOf('output.strip()');
console.log(content.substring(snippetIndex, snippetIndex + 50));

const regex = /, ":-\)\"/;
if (regex.test(content)) {
    console.log("Found bad pattern.");
    content = content.replace(regex, ', \":-)\"');
    fs.writeFileSync(file, content);
    console.log("Fixed syntax error in section1.json");
} else {
    console.log("Pattern not found.");
    if (content.includes('":-)"')) {
         console.log("Found simple match");
         content = content.replace('":-)"', '\":-)\"');
         fs.writeFileSync(file, content);
         console.log("Fixed with simple replace.");
    }
}