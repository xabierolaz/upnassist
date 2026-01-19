const fs = require('fs');
const path = require('path');
const part1 = require('./p1s2_part1.cjs');
const part2 = require('./p1s2_part2.cjs');

const section2 = {
  id: "part1-2",
  title: {
    ENG: "Information from the user",
    CAS: "Información del usuario",
    EUS: "Erabiltzailearen informazioa"
  },
  blocks: [
    part1.introContent,
    part1.exerciseNameTwice,
    part1.referencingContent,
    part2.exerciseNameAndAddress,
    part2.exerciseUtterances,
    part2.exerciseStory
  ]
};

const outputPath = path.join(__dirname, '../src/data/part1/section2.json');
fs.writeFileSync(outputPath, JSON.stringify(section2, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
