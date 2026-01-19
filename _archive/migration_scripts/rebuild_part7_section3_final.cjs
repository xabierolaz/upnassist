const fs = require('fs');
const path = require('path');
const part1 = require('./p7s3_part1.cjs');
const part2 = require('./p7s3_part2.cjs');

const section3 = {
  id: "part7-3",
  title: {
    ENG: "Times and dates",
    CAS: "Horas y fechas",
    EUS: "Orduak eta datak"
  },
  blocks: [
    part1.learningObjectives,
    part1.datetimeObjectContent,
    part1.comparingTimesContent,
    part1.exerciseHowOld,
    part1.exerciseValidPic,
    part2.formattingContent,
    part2.exerciseScreenTime
  ]
};

const outputPath = path.join(__dirname, '../src/data/part7/section3.json');
fs.writeFileSync(outputPath, JSON.stringify(section3, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
