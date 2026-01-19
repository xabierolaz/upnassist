const fs = require('fs');
const path = require('path');

const srcDataPath = path.resolve(__dirname, '../src/data');

const replacements = [
    {
        pattern: /#\s*Write your solution here/i,
        CAS: "# Escribe tu solución aquí",
        EUS: "# Idatzi zure soluzioa hemen"
    },
    {
        pattern: /#\s*Fix the code/i,
        CAS: "# Arregla el código",
        EUS: "# Konpondu kodea"
    }
];

function fixTranslationsInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let json;
    try {
        json = JSON.parse(content);
    } catch (e) {
        console.error(`❌ Failed to parse ${filePath}`);
        return;
    }

    let modified = false;

    if (json.blocks) {
        json.blocks.forEach(block => {
            if (block.type === 'exercise' && block.initialCode) {
                // Ensure initialCode is an object
                if (typeof block.initialCode === 'string') {
                    block.initialCode = {
                        ENG: block.initialCode,
                        CAS: block.initialCode,
                        EUS: block.initialCode
                    };
                    modified = true;
                }

                const originalEng = block.initialCode.ENG || "";
                
                // Fix CAS
                let currentCas = block.initialCode.CAS || originalEng;
                replacements.forEach(rep => {
                    if (rep.pattern.test(currentCas) && !currentCas.includes(rep.CAS.substring(5))) { // Avoid double replacement
                        currentCas = currentCas.replace(rep.pattern, rep.CAS);
                        modified = true;
                    }
                });
                block.initialCode.CAS = currentCas;

                // Fix EUS
                let currentEus = block.initialCode.EUS || originalEng;
                replacements.forEach(rep => {
                    if (rep.pattern.test(currentEus) && !currentEus.includes(rep.EUS.substring(5))) {
                        currentEus = currentEus.replace(rep.pattern, rep.EUS);
                        modified = true;
                    }
                });
                block.initialCode.EUS = currentEus;
            }
        });
    }

    if (modified) {
        fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
        console.log(`✅ Fixed translations in ${path.basename(filePath)}`);
    }
}

function traverseDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverseDir(fullPath);
        } else if (file.endsWith('.json') && file.startsWith('section')) {
            fixTranslationsInFile(fullPath);
        }
    });
}

console.log("🌍 Starting Translation Fixer...");
traverseDir(srcDataPath);
console.log("🏁 Translation Fixer Complete.");
