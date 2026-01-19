const fs = require('fs');
const path = require('path');
const part1 = require('./p3s4_part1.cjs');
const part2 = require('./p3s4_part2.cjs');

const section4 = {
  id: "part3-4",
  title: {
    ENG: "Defining functions",
    CAS: "Definiendo funciones",
    EUS: "Funtzioak definitzen"
  },
  blocks: [
    part1.introContent,
    part1.exerciseSevenBrothers,
    part1.exerciseFirstCharacter,
    part1.exerciseMean,
    part2.exercisePrintManyTimes,
    part2.exerciseHashSquare,
    part2.exerciseChessboard
  ]
};

const outputPath = path.join(__dirname, '../src/data/part3/section4.json');
fs.writeFileSync(outputPath, JSON.stringify(section4, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
