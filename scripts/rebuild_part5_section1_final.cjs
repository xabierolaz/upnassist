const fs = require('fs');
const path = require('path');
const part1 = require('./p5s1_part1.cjs');
const part2 = require('./p5s1_part2.cjs');
const part3 = require('./p5s1_part3.cjs');

const section1 = {
  id: "part5-1",
  title: {
    ENG: "More lists",
    CAS: "Más listas",
    EUS: "Zerrenda gehiago"
  },
  blocks: [
    part1.learningObjectives,
    part1.introContent,
    part1.exerciseLongestString,
    part1.listsWithinListsContent,
    part1.matricesContent,
    part1.accessingMatrixContent,
    part2.exerciseMatchingElements,
    part2.exerciseGo,
    part3.exerciseSudokuRow,
    part3.exerciseSudokuColumn,
    part3.exerciseSudokuBlock,
    part3.exerciseSudokuGrid
  ]
};

const outputPath = path.join(__dirname, '../src/data/part5/section1.json');
fs.writeFileSync(outputPath, JSON.stringify(section1, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
