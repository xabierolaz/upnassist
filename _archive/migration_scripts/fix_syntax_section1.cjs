const fs = require('fs');
const file = 'src/data/part1/section1.json';
let content = fs.readFileSync(file, 'utf8');

// Fix unescaped quote in testCode for part01-01_emoticon
// Current broken: ... output.strip(), ":-)" ...
// Target: ... output.strip(), \":-)\" ...

// Use replace with string matching, carefully
content = content.replace('output.strip(), ":-)"', 'output.strip(), \":-)\"');

fs.writeFileSync(file, content);
console.log("Fixed syntax error in section1.json");
