const fs = require('fs');

const files = [
    'src/data/part1/section1.json',
    'src/data/part1/section4.json'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    if (file.includes('section1.json')) {
        // Fix: ":-)" -> \":-)\"
        content = content.split('":-)"').join('\":-)\"');
    }

    if (file.includes('section4.json')) {
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
            content = content.split(bad).join(good);
        });
    }

    fs.writeFileSync(file, content);
    console.log(`Wrote ${file}`);
});
