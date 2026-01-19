const fs = require('fs');

const files = [
    'src/data/part1/section1.json',
    'src/data/part1/section4.json'
];

const translations = {
    "# Write your code here": {
        CAS: "# Escribe tu código aquí",
        EUS: "# Idatzi zure kodea hemen"
    },
    "# Write your solution here": {
        CAS: "# Escribe tu solución aquí",
        EUS: "# Idatzi zure soluzioa hemen"
    }
};

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        // 1. Fix potential syntax errors (unescaped quotes in testCode)
        // Look for pattern: "testCode": "... "..." ..."
        // This is hard to regex perfectly, but let's try to target specific known issues if any.
        // In section1.json, we saw ":-)" inside a string.
        // We will try to replace the known problematic string literals if we can identify them.
        
        // 2. Replace initialCode string with object
        // Regex to find "initialCode": "..." and replace with object
        // We match strictly the known default string to be safe
        
        const stringToReplace = '"initialCode": "# Write your code here\n"';
        const replacementObj = `"initialCode": {
        "ENG": "# Write your code here\n",
        "CAS": "# Escribe tu código aquí\n",
        "EUS": "# Idatzi zure kodea hemen\n"
      }`;
      
        content = content.split(stringToReplace).join(replacementObj);

        // Also handle the one without newline if it exists
        const stringToReplace2 = '"initialCode": "# Write your code here"';
        const replacementObj2 = `"initialCode": {
        "ENG": "# Write your code here",
        "CAS": "# Escribe tu código aquí",
        "EUS": "# Idatzi zure kodea hemen"
      }`;
        content = content.split(stringToReplace2).join(replacementObj2);

        fs.writeFileSync(file, content);
        console.log(`Force updated: ${file}`);
        
    } catch (e) {
        console.error(`Failed to force update ${file}:`, e);
    }
});
