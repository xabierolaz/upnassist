const fs = require('fs');

const files = [
    'src/data/part1/section1.json',
    'src/data/part1/section4.json'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    if (file.includes('section1.json')) {
        console.log("Fixing section1...");
        // Match ":-)" and replace with \":-)\"
        // In string literal: \"\\\":-)\\\"\" -> ":-)"
        if (content.includes('":-)"')) {
            console.log("Found bad string in section1");
            content = content.split('":-)"').join('":-)"');
        } else {
            console.log("Did not find bad string in section1");
        }
    }

    if (file.includes('section4.json')) {
        console.log("Fixing section4...");
        const replacements = [
            ['print(f"The BMI is {bmi}")', 'print(f"The BMI is {bmi}")'],
            ['print(f"/ operator {x/y}")', 'print(f"/ operator {x/y}")'],
            ['print(f"// operator {x//y}")', 'print(f"// operator {x//y}")'],
            ['print(f"Your age at the end of the year 2021: {2021 - year}" )', 'print(f"Your age at the end of the year 2021: {2021 - year}" )'],
            ['print(f"The sum of the numbers: {sum}")', 'print(f"The sum of the numbers: {sum}")'],
            ['print(f"{numero1} + {numero2} = {numero1+numero2}" )', 'print(f"{numero1} + {numero2} = {numero1+numero2}" )'],
            ['print(f"La suma de los números: {sum}" )', 'print(f"La suma de los números: {sum}" )'],
            ['print(f"Zenbakien batura: {batura}" )', 'print(f"Zenbakien batura: {batura}" )'],
            ['print(f"Zure adina 2021. urtearen amaieran: {2021 - urtea}" )', 'print(f"Zure adina 2021. urtearen amaieran: {2021 - urtea}" )'],
            ['print(f"GMIa {gmi} da")', 'print(f"GMIa {gmi} da")'],
            ['print(f"El IMC es {imc}")', 'print(f"El IMC es {imc}")']
        ];
        
        replacements.forEach(([bad, good]) => {
            if (content.includes(bad)) {
                console.log(`Found ${bad}`);
                content = content.split(bad).join(good);
            }
        });
    }

    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log(`Wrote changes to ${file}`);
    } else {
        console.log(`No changes for ${file}`);
    }
});