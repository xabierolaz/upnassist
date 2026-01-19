const fs = require('fs');
const path = require('path');
const part1 = require('./p1s4_part1.cjs');
const part2 = require('./p1s4_part2.cjs');

const section4 = {
  id: "part1-4",
  title: {
    ENG: "Arithmetic operations",
    CAS: "Operaciones aritméticas",
    EUS: "Eragiketa aritmetikoak"
  },
  blocks: [
    part1.learningObjectives,
    part1.introContent,
    part1.numbersInputContent,
    part1.exerciseTimesFive,
    part1.exerciseNameAndAge,
    part1.usingVariablesContent,
    part1.exerciseSecondsInDay,
    part1.exerciseFixProduct,
    part2.exerciseSumAndProduct,
    part2.exerciseSumAndMean,
    part2.exerciseFoodExpenditure,
    part2.exerciseStudentsInGroups
  ]
};

const outputPath = path.join(__dirname, '../src/data/part1/section4.json');
fs.writeFileSync(outputPath, JSON.stringify(section4, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
