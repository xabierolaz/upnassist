const fs = require('fs');
const path = require('path');
const part1 = require('./p6s1_part1.cjs');
const part2 = require('./p6s1_part2.cjs');
const part3 = require('./p6s1_part3.cjs');

const section1 = {
  id: "part6-1",
  title: {
    ENG: "Reading files",
    CAS: "Leyendo archivos",
    EUS: "Fitxategiak irakurtzen"
  },
  blocks: [
    part1.learningObjectives,
    part1.introContent,
    part1.exerciseLargestNumber,
    part1.csvContent,
    part1.exerciseFruitMarket,
    part2.exerciseMatrix,
    part2.exerciseCourseGrading1,
    part2.exerciseCourseGrading2,
    part2.exerciseCourseGrading3,
    part3.exerciseSpellChecker,
    part3.exerciseRecipeSearch,
    part3.exerciseCityBikes
  ]
};

const outputPath = path.join(__dirname, '../src/data/part6/section1.json');
fs.writeFileSync(outputPath, JSON.stringify(section1, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
