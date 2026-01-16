const fs = require('fs');
const path = require('path');

const filesToFix = [
  'src/data/part1/section2.ts',
  'src/data/part1/section5.ts',
  'src/data/part2/section1.ts',
  'src/data/part2/section2.ts',
  'src/data/part2/section3.ts',
  'src/data/part2/section4.ts',
  'src/data/part3/section1.ts',
  'src/data/part3/section2.ts',
  'src/data/part3/section4.ts',
  'src/data/part5/section4.ts',
  'src/data/part6/section1.ts',
  'src/data/part7/section1.ts',
  'src/data/part7/section3.ts',
  'src/data/part7/section5.ts',
  'src/data/part7/section6.ts',
  'src/data/part8/section1.ts',
  'src/data/part8/section3.ts',
  'src/data/part9/section1.ts',
  'src/data/part9/section2.ts',
  'src/data/part9/section4.ts',
  'src/data/part9/section5.ts',
  'src/data/part9/section6.ts',
  'src/data/part10/section2.ts',
  'src/data/part11/section2.ts',
  'src/data/part11/section3.ts',
  'src/data/part11/section4.ts',
  'src/data/part12/section3.ts',
  'src/data/part12/section5.ts',
  'src/data/part12/section6.ts',
  'src/data/part13/section1.ts',
  'src/data/part13/section2.ts',
  'src/data/part13/section3.ts',
  'src/data/part14/section1.ts',
  'src/data/part14/section2.ts'
];

filesToFix.forEach(filePath => {
  const fullPath = path.resolve(filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Improved regex to handle escaped quotes in double-quoted strings
    // AND escaped backticks in backtick strings.
    // Backtick string: ` ( [^`\\]|\\.)* `
    
    const regex = /(initialCode:\s*(?:`(?:[^`\\]|\\.)*`|"(?:[^"\\]|\\.)*"))(\s*\n\s*testCode:)/g;
    
    if (regex.test(content)) {
       const newContent = content.replace(regex, '$1,$2');
       if (newContent !== content) {
           fs.writeFileSync(fullPath, newContent, 'utf8');
           console.log(`Fixed comma in ${filePath}`);
       } else {
           console.log(`No replacement made in ${filePath}`);
       }
    } else {
        console.log(`No missing comma pattern found in ${filePath}`);
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});
