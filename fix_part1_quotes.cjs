const fs = require('fs');

const files = [
    'src/data/part1/section1.json',
    'src/data/part1/section4.json'
];

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        if (file.includes('section1.json')) {
            // Fix: ":-)" -> \":-)\"
            content = content.split('":-)"').join('\":-)\"');
        }

        if (file.includes('section4.json')) {
            // Fix print(f"...") -> print(f\"...\")
            content = content.replace(new RegExp('print\\(f\"(.*?)\"\\)', 'g'), (match, p1) => {
                return `print(f\"${p1}\")`;
            });
            
            // Fix input("...") -> input(\"...\")
            content = content.replace(new RegExp('input\\(\"(.*?)\"\\)', 'g'), (match, p1) => {
                 return `input(\"${p1}\")`;
            });
            
            // Fix print("...") -> print(\"...\")
             content = content.replace(new RegExp('print\\(\"(.*?)\"\\)', 'g'), (match, p1) => {
                 return `print(\"${p1}\")`;
            });
        }

        fs.writeFileSync(file, content);
        console.log(`Fixed ${file}`);
    } catch (e) {
        console.error(`Error fixing ${file}:`, e);
    }
});