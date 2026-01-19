const fs = require('fs');
const path = require('path');
const part1 = require('./p5s3_part1.cjs');
const part2 = require('./p5s3_part2.cjs');
const part3 = require('./p5s3_part3.cjs');

const section3 = {
  id: "part5-3",
  title: {
    ENG: "Dictionary",
    CAS: "Diccionario",
    EUS: "Hiztegia"
  },
  blocks: [
    part1.learningObjectives,
    part1.introContent,
    part1.keysAndValuesContent,
    part1.exerciseTimesTen,
    part1.exerciseFactorials,
    part2.traversingContent,
    part2.exerciseHistogram,
    part2.exercisePhoneBookV1,
    part2.exercisePhoneBookV2,
    part2.removingKeysContent,
    part3.exerciseInvertDictionary,
    part3.exerciseNumbersSpelledOut,
    part3.structuredDataContent,
    part3.exerciseMovieDatabase,
    part3.exerciseFindMovies
  ]
};

const outputPath = path.join(__dirname, '../src/data/part5/section3.json');
fs.writeFileSync(outputPath, JSON.stringify(section3, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
