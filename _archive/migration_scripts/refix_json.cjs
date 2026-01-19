const fs = require('fs');

const files = [
    'src/data/part1/section1.json',
    'src/data/part1/section4.json'
];

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        // Fix for Section 1 TestCode syntax error (unescaped quote)
        if (file.includes('section1.json')) {
            // Find: ":-)" inside the testCode string
            // It looks like: ... strip(), ":-)" ...
            // We want: ... strip(), \":-)\" ...
            content = content.replace('strip(), ":-)"', 'strip(), \":-)\"');
        }

        // Standardize initialCode to object if it's currently the default string
        const stringToReplace = '"initialCode": "# Write your code here\n"';
        const replacementObj = `"initialCode": {
        "ENG": "# Write your code here\n",
        "CAS": "# Escribe tu código aquí\n",
        "EUS": "# Idatzi zure kodea hemen\n"
      }`;
      
        if (content.includes(stringToReplace)) {
             content = content.split(stringToReplace).join(replacementObj);
        }

        // Also handle the one without newline if it exists
        const stringToReplace2 = '"initialCode": "# Write your code here"';
        const replacementObj2 = `"initialCode": {
        "ENG": "# Write your code here",
        "CAS": "# Escribe tu código aquí",
        "EUS": "# Idatzi zure kodea hemen"
      }`;
        if (content.includes(stringToReplace2)) {
            content = content.split(stringToReplace2).join(replacementObj2);
        }

        fs.writeFileSync(file, content);
        console.log(`Refixed: ${file}`);
        
    } catch (e) {
        console.error(`Failed to refix ${file}:`, e);
    }
});
