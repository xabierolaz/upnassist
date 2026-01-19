const fs = require('fs');
const path = require('path');
const part1 = require('./p5s4_part1.cjs');
const part2 = require('./p5s4_part2.cjs');

const section4 = {
  id: "part5-4",
  title: {
    ENG: "Tuple",
    CAS: "Tupla",
    EUS: "Tupla"
  },
  blocks: [
    part1.learningObjectives,
    part1.introContent,
    part1.exerciseCreateTuple,
    part1.exerciseOldestPerson,
    part1.exerciseOlderPeople,
    part2.purposeContent,
    part2.exerciseStudentDatabase,
    part2.exerciseLetterSquare
  ]
};

const outputPath = path.join(__dirname, '../src/data/part5/section4.json');
fs.writeFileSync(outputPath, JSON.stringify(section4, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
