const fs = require('fs');
const path = require('path');
const part1 = require('./p4s4_part1.cjs');
const part2 = require('./p4s4_part2.cjs');
const part3 = require('./p4s4_part3.cjs');
const part4 = require('./p4s4_part4.cjs');

const rangeContent = {
  type: "markdown",
  content: {
    ENG: "## The function `range`\n\nOften you know how many times you want to repeat a certain bit of code...",
    CAS: "## La función `range`\n\nA menudo sabes cuántas veces quieres repetir un cierto fragmento de código...",
    EUS: "## `range` funtzioa\n\nAskotan badakizu zenbat aldiz errepikatu nahi duzun kode zati jakin bat..."
  }
};

const rangeToListContent = {
  type: "markdown",
  content: {
    ENG: "## From a range to a list\n\nThe function `range` returns a range object...",
    CAS: "## De un rango a una lista\n\nLa función `range` devuelve un objeto rango...",
    EUS: "## Barrutitik zerrendara\n\n`range` funtzioak range objektu bat itzultzen du..."
  }
};

const section4 = {
  id: "part4-4",
  title: {
    ENG: "Definite iteration",
    CAS: "Iteración definida",
    EUS: "Iterazio definitua"
  },
  blocks: [
    part1.learningObjectives,
    part1.introContent,
    part1.exerciseStarStudded,
    rangeContent,
    part1.exerciseNegativeToPositive,
    rangeToListContent,
    part2.exerciseListOfStars,
    part2.exerciseAnagrams,
    part2.exercisePalindromes,
    part3.exerciseSumOfPositives,
    part3.exerciseEvenNumbers,
    part3.exerciseSumOfLists,
    part4.exerciseDistinctNumbers,
    part4.bestOrWorstContent,
    part4.exerciseLengthOfLongest,
    part4.exerciseShortestInList,
    part4.exerciseAllLongestInList
  ]
};

const outputPath = path.join(__dirname, '../src/data/part4/section4.json');
fs.writeFileSync(outputPath, JSON.stringify(section4, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
