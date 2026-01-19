const fs = require('fs');
const path = require('path');
const part1 = require('./p6s2_part1.cjs');
const part2 = require('./p6s2_part2.cjs');

const section2 = {
  id: "part6-2",
  title: {
    ENG: "Writing files",
    CAS: "Escribiendo archivos",
    EUS: "Fitxategiak idazten"
  },
  blocks: [
    part1.learningObjectives,
    part1.introContent,
    part1.exerciseInscription,
    part1.appendingContent,
    part1.exerciseDiary,
    part1.exerciseFiltering,
    part2.exerciseStorePersonalData,
    part2.exerciseCourseGrading4,
    part2.exerciseWordSearch,
    part2.exerciseDictionaryFile
  ]
};

const outputPath = path.join(__dirname, '../src/data/part6/section2.json');
fs.writeFileSync(outputPath, JSON.stringify(section2, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
