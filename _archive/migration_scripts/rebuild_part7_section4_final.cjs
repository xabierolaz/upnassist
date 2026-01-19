const fs = require('fs');
const path = require('path');
const part1 = require('./p7s4_part1.cjs');
const part2 = require('./p7s4_part2.cjs');

const section4 = {
  id: "part7-4",
  title: {
    ENG: "Data processing",
    CAS: "Procesamiento de datos",
    EUS: "Datu prozesamendua"
  },
  blocks: [
    part1.learningObjectives,
    part1.csvContent,
    part1.jsonContent,
    part1.exerciseJsonFiles,
    part1.internetContent,
    part1.exerciseCourseStatistics,
    part2.exerciseWhoCheated,
    part2.exerciseWhoCheated2,
    part2.exerciseSpellchecker2
  ]
};

const outputPath = path.join(__dirname, '../src/data/part7/section4.json');
fs.writeFileSync(outputPath, JSON.stringify(section4, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
