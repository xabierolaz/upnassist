const fs = require('fs');

const replacements = [
    { pattern: "`name`", replacement: "\\`name\\`" }
];

console.log("Replacement string:", replacements[0].replacement);

