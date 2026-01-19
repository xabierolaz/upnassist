const fs = require('fs');
const path = require('path');
const part1 = require('./p6s3_part1.cjs');
const part2 = require('./p6s3_part2.cjs');

const section3 = {
  id: "part6-3",
  title: {
    ENG: "Handling errors",
    CAS: "Manejo de errores",
    EUS: "Erroreak kudeatzen"
  },
  blocks: [
    part1.learningObjectives,
    part1.introContent,
    part1.exceptionsContent,
    part1.exerciseReadInput,
    part1.raisingExceptionsContent,
    part1.exerciseParameterValidation,
    part2.exerciseIncorrectLotteryNumbers
  ]
};

const outputPath = path.join(__dirname, '../src/data/part6/section3.json');
fs.writeFileSync(outputPath, JSON.stringify(section3, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
