const fs = require('fs');
const path = require('path');
const part1 = require('./p1s3_part1.cjs');
const part2 = require('./p1s3_part2.cjs');

const section3 = {
  id: "part1-3",
  title: {
    ENG: "More about variables",
    CAS: "Más sobre variables",
    EUS: "Aldagaiei buruz gehiago"
  },
  blocks: [
    part1.learningObjectives,
    part1.introContent,
    part1.changingValueContent,
    part1.integersContent,
    part1.combiningValuesContent,
    part2.exerciseExtraSpace,
    part2.floatContent,
    part2.exerciseArithmetics,
    part2.exercisePrintSingleLine
  ]
};

const outputPath = path.join(__dirname, '../src/data/part1/section3.json');
fs.writeFileSync(outputPath, JSON.stringify(section3, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
