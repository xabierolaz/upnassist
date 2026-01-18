const fs = require('fs');

const f1 = 'src/data/part1/section1.json';
let c1 = fs.readFileSync(f1, 'utf8');
if (c1.indexOf('self.assertEqual(output.strip(), ":-)"') !== -1) {
    c1 = c1.split('self.assertEqual(output.strip(), ":-)"').join('self.assertEqual(output.strip(), ":-)"');
    fs.writeFileSync(f1, c1);
    console.log('Fixed section1');
} else {
    console.log('Section1 pattern not found');
}

const f4 = 'src/data/part1/section4.json';
let c4 = fs.readFileSync(f4, 'utf8');
if (c4.indexOf('print(f"The BMI is {bmi}")') !== -1) {
    c4 = c4.split('print(f"The BMI is {bmi}"').join('print(f"The BMI is {bmi}")');
    // Add others
    c4 = c4.split('print(f"/ operator {x/y}")').join('print(f"/ operator {x/y}")');
    c4 = c4.split('print(f"// operator {x//y}")').join('print(f"// operator {x//y}")');
    fs.writeFileSync(f4, c4);
    console.log('Fixed section4');
} else {
    console.log('Section4 pattern not found');
}

