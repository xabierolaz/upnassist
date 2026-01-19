const fs = require('fs');
const path = require('path');
const part1 = require('./p7s1_part1.cjs');
const part2 = require('./p7s1_part2.cjs');

const section1 = {
  id: "part7-1",
  title: {
    ENG: "Modules",
    CAS: "Módulos",
    EUS: "Moduluak"
  },
  blocks: [
    part1.learningObjectives,
    part1.debuggingContent,
    part1.usingModulesContent,
    part1.exerciseHypotenuse,
    part2.moduleContents,
    part2.exerciseSpecialCharacters,
    part2.exerciseFractions
  ]
};

const outputPath = path.join(__dirname, '../src/data/part7/section1.json');
fs.writeFileSync(outputPath, JSON.stringify(section1, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
