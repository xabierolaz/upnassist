const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data');

const translations = {
    CAS: {
        'Please type in a number: ': 'Por favor, introduzca un número: ',
        'Please type in a string: ': 'Por favor, introduzca una cadena: ',
        'Please type in your PIN: ': 'Por favor, introduzca su PIN: ',
        'Please type in your name: ': 'Por favor, introduzca su nombre: ',
        'Please type in a sentence: ': 'Por favor, introduzca una frase: ',
        'Please type in an expression: ': 'Por favor, introduzca una expresión: ',
        'Type in number 1: ': 'Introduzca el número 1: ',
        'Type in number 2: ': 'Introduzca el número 2: ',
        'Value 1: ': 'Valor 1: ',
        'Value 2: ': 'Valor 2: ',
        'Hi there!': '¡Hola!',
        'Welcome to Introduction to Programming!': '¡Bienvenido a Introducción a la Programación!',
        'First we will practice using the print command.': 'Primero practicaremos el uso del comando print.',
        'This program prints three lines of text on the screen.': 'Este programa imprime tres líneas de texto en la pantalla.',
        'Hours in a year:': 'Horas en un año:',
        'print("Hello there!")': 'print("¡Hola!")',
        'Output:': 'Salida:'
    },
    EUS: {
        'Please type in a number: ': 'Mesedez, idatzi zenbaki bat: ',
        'Please type in a string: ': 'Mesedez, idatzi kate bat: ',
        'Please type in your PIN: ': 'Mesedez, idatzi zure PINa: ',
        'Please type in your name: ': 'Mesedez, idatzi zure izena: ',
        'Please type in a sentence: ': 'Mesedez, idatzi esaldi bat: ',
        'Please type in an expression: ': 'Mesedez, idatzi adierazpen bat: ',
        'Type in number 1: ': 'Idatzi 1. zenbakia: ',
        'Type in number 2: ': 'Idatzi 2. zenbakia: ',
        'Value 1: ': '1. balioa: ',
        'Value 2: ': '2. balioa: ',
        'Hi there!': 'Kaixo han!',
        'Welcome to Introduction to Programming!': 'Ongi etorri Programazioaren Sarrerara!',
        'First we will practice using the print command.': 'Lehenik print komandoa erabiltzen praktikatuko dugu.',
        'This program prints three lines of text on the screen.': 'Programa honek testu hiru lerro inprimatzen ditu pantailan.',
        'Hours in a year:': 'Urte bateko orduak:',
        'print("Hello there!")': 'print("Kaixo han!")',
        'Output:': 'Emaitza:'
    }
};

// Recursive function to find files
function getFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getFiles(filePath, fileList);
        } else {
            if (file.endsWith('.json')) {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
}

const files = getFiles(dataDir);

let totalReplacements = 0;

files.forEach(file => {
    try {
        let contentStr = fs.readFileSync(file, 'utf8');
        const originalContentStr = contentStr;
        const jsonContent = JSON.parse(contentStr);

        if (!jsonContent.blocks) return;

        let fileModified = false;

        jsonContent.blocks.forEach(block => {
            if (block.type === 'markdown' && block.content) {
                ['CAS', 'EUS'].forEach(lang => {
                    if (block.content[lang]) {
                        let text = block.content[lang];
                        const dict = translations[lang];
                        let blockModified = false;

                        for (const [english, translated] of Object.entries(dict)) {
                            // Replace in Code Blocks (```python ... ```)
                            const codeBlockRegex = /```python([\s\S]*?)```/g;
                            let match;
                            while ((match = codeBlockRegex.exec(text)) !== null) {
                                if (match[0].includes(english)) {
                                    // Use replace with string to only replace first occurrence in the matched block? 
                                    // No, we want to replace all occurrences within the block.
                                    // But we must be careful not to replace outside code blocks if we only intend code blocks.
                                    // Actually, replacing in the description text is usually good too if it's exact match!
                                    // But let's stick to simple string replacement within the whole text block for now,
                                    // as these phrases are specific enough.
                                    
                                    // Better approach: Regex replace globally in the text
                                    // But we need to handle " and ' carefully.
                                    
                                    // Let's replace simple string literals.
                                    const regex = new RegExp(english.replace(/[.*+?^${}()|[\\]/g, '\\$&'), 'g');
                                    if (regex.test(text)) {
                                        text = text.replace(regex, translated);
                                        blockModified = true;
                                        totalReplacements++;
                                    }
                                }
                            }

                             // Replace in Sample Output (<sample-output> ... </sample-output>)
                             const outputRegex = /<sample-output>([\s\S]*?)<\/sample-output>/g;
                             while ((match = outputRegex.exec(text)) !== null) {
                                 if (match[0].includes(english)) {
                                    const regex = new RegExp(english.replace(/[.*+?^${}()|[\\]/g, '\\$&'), 'g');
                                    if (regex.test(text)) {
                                        text = text.replace(regex, translated);
                                        blockModified = true;
                                        totalReplacements++;
                                    }
                                 }
                             }
                        }
                        
                        if (blockModified) {
                            block.content[lang] = text;
                            fileModified = true;
                        }
                    }
                });
            }
        });

        if (fileModified) {
            fs.writeFileSync(file, JSON.stringify(jsonContent, null, 2));
            console.log(`Updated ${path.relative(dataDir, file)}`);
        }
        
    } catch (e) {
        console.error(`Error processing ${file}: ${e.message}`);
    }
});

console.log(`\nTotal replacements made: ${totalReplacements}`);
