const fs = require('fs');
const path = require('path');
const part1 = require('./p1s5_part1.cjs');
const part2 = require('./p1s5_part2.cjs');
const part3 = require('./p1s5_part3.cjs');

const section5 = {
  id: "part-1-5",
  title: {
    ENG: "Conditional statements",
    CAS: "Sentencias condicionales",
    EUS: "Baldintzazko sententziak"
  },
  blocks: [
    part1.learningObjectives,
    part1.introContent,
    part1.exerciseOrwell,
    part1.exerciseAbsoluteValue,
    part1.exerciseSoup,
    part2.exerciseOrderOfMagnitude,
    part2.exerciseCalculator,
    part2.exerciseTemperatures,
    part2.exerciseDailyWages,
    part3.exerciseLoyaltyBonus,
    part3.exerciseWhatToWear,
    part3.exerciseQuadraticFormula
  ]
};

const outputPath = path.join(__dirname, '../src/data/part1/section5.json');
fs.writeFileSync(outputPath, JSON.stringify(section5, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
