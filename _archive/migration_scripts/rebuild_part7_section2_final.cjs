const fs = require('fs');
const path = require('path');
const part1 = require('./p7s2_part1.cjs');
const part2 = require('./p7s2_part2.cjs');

const section2 = {
  id: "part7-2",
  title: {
    ENG: "Randomness",
    CAS: "Aleatoriedad",
    EUS: "Ausazkotasuna"
  },
  blocks: [
    part1.learningObjectives,
    part1.introContent,
    part1.moreRandomContent,
    part1.lotteryContent,
    part1.exerciseLotteryNumbers,
    part1.exercisePasswordGen1,
    part2.exercisePasswordGen2,
    part2.exerciseDiceRoller,
    part2.exerciseRandomWords
  ]
};

const outputPath = path.join(__dirname, '../src/data/part7/section2.json');
fs.writeFileSync(outputPath, JSON.stringify(section2, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
