const fs = require('fs');
const path = require('path');
const part1 = require('./p3s2_part1.cjs');
const part2 = require('./p3s2_part2.cjs');
const part3 = require('./p3s2_part3.cjs');

const section2 = {
  id: "part3-2",
  title: {
    ENG: "Working with strings",
    CAS: "Trabajando con cadenas",
    EUS: "Kateekin lanean"
  },
  blocks: [
    part1.introContent,
    part1.exerciseStringMultiplied,
    part1.exerciseLongerString,
    part1.exerciseEndToBeginning,
    part1.exerciseSecondAndSecondToLast,
    part2.substringsContent,
    part2.exerciseLineOfHashes,
    part2.exerciseRectangleOfHashes,
    part2.exerciseUnderlining,
    part2.exerciseRightAligned,
    part3.searchingContent,
    part3.exerciseFindFirstSubstring,
    part3.exerciseSubstrings1,
    part3.exerciseSubstrings2,
    part3.exerciseDoesItContainVowels
  ]
};

const outputPath = path.join(__dirname, '../src/data/part3/section2.json');
fs.writeFileSync(outputPath, JSON.stringify(section2, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
