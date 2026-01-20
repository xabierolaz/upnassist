const fs = require('fs');
const path = require('path');

const srcDataDir = path.join(__dirname, '..', 'src', 'data');

// Common test message patterns and their translations
const commonTranslations = [
    {
        pattern: /"Output was expected to have (\d+) lines, your program's output is now in (\d+) lines\."/g,
        replacement: "Output was expected to have $1 lines, your program's output is now in $2 lines. | Se esperaba que la salida tuviera $1 líneas, pero tu programa produjo $2 líneas. | Irteerak $1 lerro izatea espero zen, baina zure programak $2 lerro sortu ditu."
    },
    {
        pattern: /"Make sure that you don't print out extra characters before the emoticon starts\."/g,
        replacement: "Make sure that you don't print out extra characters before the emoticon starts. | Asegúrate de no imprimir caracteres extra antes de que empiece el emoticono. | Ziurtatu ez duzula karaktere gehigarririk inprimatzen emotikonoa hasi aurretik."
    },
    {
        pattern: /"Emoticon is malformed\."/g,
        replacement: "Emoticon is malformed. | El emoticono está mal formado. | Emotikonoa gaizki osatuta dago."
    },
    {
        pattern: /"Your code should contain function named as (\w+)"/g,
        replacement: "Your code should contain function named as $1 | Tu código debe contener una función llamada $1 | Zure kodeak $1 izeneko funtzio bat izan behar du"
    },
    {
        pattern: /"The code for testing the functions should be placed inside\\nif __name__ == \\"__main__\\":\\nblock. The following row should be moved:\\n"/g,
        replacement: "The code for testing the functions should be placed inside\nif __name__ == \"__main__\":\nblock. | El código de prueba debe ir dentro del bloque\nif __name__ == \"__main__\":. | Proba-kodea\nif __name__ == \"__main__\":\nblokearen barruan egon behar da."
    },
    {
        pattern: /"Function (\w+) is expected to return a value,? which is of type (\w+)"/g,
        replacement: "Function $1 is expected to return a value of type $2 | Se espera que la función $1 devuelva un valor de tipo $2 | $1 funtzioak $2 motako balio bat itzultzea espero da"
    },
    {
        pattern: /"The function is expected to return the following list:\\n"/g,
        replacement: "The function is expected to return the following list: | Se espera que la función devuelva la siguiente lista: | Funtzioak hurrengo zerrenda itzultzea espero da:"
    },
    {
        pattern: /"The function is expected to return the following string:\\n"/g,
        replacement: "The function is expected to return the following string: | Se espera que la función devuelva la siguiente cadena: | Funtzioak hurrengo katea itzultzea espero da:"
    }
];

function translateTestCode(testCode) {
    if (!testCode) return testCode;
    let newCode = testCode;
    
    // First, let's fix the ones without quotes (regressions from previous run)
    // Looking for strings like: , Make sure... starts. | ... | ...)
    // This is hard to catch perfectly with regex, so we'll look for the pipe patterns that are naked.
    
    // Pattern to catch naked translated blocks: , [Text] | [Text] | [Text])
    // We wrap them in double quotes.
    newCode = newCode.replace(/,\s*([^"'].*? \| .*? \| .*?)\)/g, ', "$1")');

    commonTranslations.forEach(t => {
        newCode = newCode.replace(t.pattern, t.replacement);
    });
    
    return newCode;
}

function processFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    let modified = false;

    if (data.blocks) {
        data.blocks.forEach(block => {
            if (block.type === 'exercise' && block.testCode) {
                const translated = translateTestCode(block.testCode);
                if (translated !== block.testCode) {
                    block.testCode = translated;
                    modified = true;
                }
            }
        });
    }

    if (modified) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log(`✅ Fixed/Translated feedback in ${path.basename(filePath)}`);
    }
}

function traverseDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverseDir(fullPath);
        } else if (file.endsWith('.json') && file.startsWith('section')) {
            processFile(fullPath);
        }
    });
}

console.log("🚀 Repairing and Translating Test Feedback...");
traverseDir(srcDataDir);
console.log("🏁 Done.");
