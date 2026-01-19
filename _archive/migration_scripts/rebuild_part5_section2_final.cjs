const fs = require('fs');
const path = require('path');
const part1 = require('./p5s2_part1.cjs');
const part2 = require('./p5s2_part2.cjs');

const section2 = {
  id: "part5-2",
  title: {
    ENG: "References",
    CAS: "Referencias",
    EUS: "Erreferentziak"
  },
  blocks: [
    part1.learningObjectives,
    part1.introContent,
    part1.functionsAndListsContent,
    part1.exerciseItemsMultipliedByTwo,
    part1.exerciseRemoveSmallest,
    part2.exerciseSudokuPrintAndAdd,
    part2.exerciseSudokuAddCopy,
    part2.exerciseTicTacToe,
    part2.exerciseTranspose,
    part2.sideEffectsContent
  ]
};

const outputPath = path.join(__dirname, '../src/data/part5/section2.json');
fs.writeFileSync(outputPath, JSON.stringify(section2, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
