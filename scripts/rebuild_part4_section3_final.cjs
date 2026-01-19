const fs = require('fs');
const path = require('path');
const part1 = require('./p4s3_content1.cjs');
const part2 = require('./p4s3_content2.cjs');
const part3 = require('./p4s3_content3.cjs');

const section3 = {
  id: "part4-3",
  title: {
    ENG: "Lists",
    CAS: "Listas",
    EUS: "Zerrendak"
  },
  blocks: [
    part1.learningObjectives,
    part1.introContent,
    part1.exerciseChangeValue,
    part2.addingItemsContent,
    part2.exerciseAddItems,
    part2.removingItemsContent,
    part2.exerciseAddRemove,
    part3.restContent
  ]
};

const outputPath = path.join(__dirname, '../src/data/part4/section3.json');
fs.writeFileSync(outputPath, JSON.stringify(section3, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
