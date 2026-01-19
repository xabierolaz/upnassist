const fs = require('fs');
const path = require('path');

// Translation Dictionary for Common Phrases
const translations = {
    "# Write your code here": {
        CAS: "# Escribe tu código aquí",
        EUS: "# Idatzi zure kodea hemen"
    },
    "# Write your solution here": {
        CAS: "# Escribe tu solución aquí",
        EUS: "# Idatzi zure soluzioa hemen"
    },
    "Please type in a number:": {
        CAS: "Por favor, escribe un número:",
        EUS: "Mesedez, idatzi zenbaki bat:"
    },
    "Please type in a string:": {
        CAS: "Por favor, escribe una cadena:",
        EUS: "Mesedez, idatzi kate bat:"
    },
    "What is your name?": {
        CAS: "¿Cómo te llamas?",
        EUS: "Nola duzu izena?"
    }
};

// Helper to translate code content
function translateCode(code, lang) {
    let translated = code;

    // 1. Replace exact full-line comments (common placeholders)
    for (const [eng, trans] of Object.entries(translations)) {
        if (code.includes(eng)) {
            translated = translated.replace(new RegExp(escapeRegExp(eng), 'g'), trans[lang] || eng);
        }
    }

    // 2. Specialized Regex replacements for common input prompts
    if (lang === 'CAS') {
        translated = translated.replace(/input("What is your name\? ")/g, 'input("¿Cómo te llamas? ")');
        translated = translated.replace(/input("Please type in a number: ")/g, 'input("Por favor, escribe un número: ")');
        translated = translated.replace(/input("Please type in a word: ")/g, 'input("Por favor, escribe una palabra: ")');
        translated = translated.replace(/# Write your code here/g, '# Escribe tu código aquí');
        translated = translated.replace(/# Write your solution here/g, '# Escribe tu solución aquí');
        translated = translated.replace(/"The 1st part: "/g, '"La primera parte: "');
        
    } else if (lang === 'EUS') {
        translated = translated.replace(/input("What is your name\? ")/g, 'input("Nola duzu izena? ")');
        translated = translated.replace(/input("Please type in a number: ")/g, 'input("Mesedez, idatzi zenbaki bat: ")');
        translated = translated.replace(/input("Please type in a word: ")/g, 'input("Mesedez, idatzi hitz bat: ")');
        translated = translated.replace(/# Write your code here/g, '# Idatzi zure kodea hemen');
        translated = translated.replace(/# Write your solution here/g, '# Idatzi zure soluzioa hemen');
        translated = translated.replace(/"The 1st part: "/g, '"Lehenengo zatia: "');
    }

    return translated;
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\\]/g, '\\$&');
}

// Find all section files without glob
const dataDir = path.join(__dirname, 'src/data');
let files = [];

if (fs.existsSync(dataDir)) {
    const parts = fs.readdirSync(dataDir).filter(f => f.startsWith('part'));
    parts.forEach(part => {
        const partDir = path.join(dataDir, part);
        if (fs.statSync(partDir).isDirectory()) {
            const sections = fs.readdirSync(partDir).filter(f => f.startsWith('section') && f.endsWith('.json'));
            sections.forEach(section => {
                files.push(path.join(partDir, section));
            });
        }
    });
}

let updatedCount = 0;

files.forEach(file => {
    try {
        const content = fs.readFileSync(file, 'utf8');
        const data = JSON.parse(content);
        let modified = false;

        if (data.blocks) {
            data.blocks.forEach(block => {
                if (block.type === 'exercise' && typeof block.initialCode === 'string') {
                    const original = block.initialCode;
                    
                    // Create Localized Object
                    block.initialCode = {
                        ENG: original,
                        CAS: translateCode(original, 'CAS'),
                        EUS: translateCode(original, 'EUS')
                    };
                    
                    modified = true;
                }
            });
        }

        if (modified) {
            fs.writeFileSync(file, JSON.stringify(data, null, 2));
            console.log(`Updated: ${file}`);
            updatedCount++;
        }
    } catch (e) {
        console.error(`Error processing ${file}:`, e);
    }
});

console.log(`Total files updated: ${updatedCount}`);