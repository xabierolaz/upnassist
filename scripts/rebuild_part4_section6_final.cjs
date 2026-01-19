const fs = require('fs');
const path = require('path');
const part1 = require('./p4s6_part1.cjs');
const part2 = require('./p4s6_part2.cjs');
const part3 = require('./p4s6_part3.cjs');

const section6 = {
  id: "part4-6",
  title: {
    ENG: "More strings and lists",
    CAS: "Más cadenas y listas",
    EUS: "Kate eta zerrenda gehiago"
  },
  blocks: [
    part1.learningObjectives,
    part1.introContent,
    part1.exerciseEverythingReversed,
    part1.stringsImmutableContent,
    part2.exerciseMostCommonCharacter,
    part2.exerciseNoVowelsAllowed,
    part2.exerciseNoShoutingAllowed,
    part3.exerciseNeighboursInList,
    part3.largeProjectContent,
    part3.exerciseGradeStatistics
  ]
};

const outputPath = path.join(__dirname, '../src/data/part4/section6.json');
fs.writeFileSync(outputPath, JSON.stringify(section6, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
