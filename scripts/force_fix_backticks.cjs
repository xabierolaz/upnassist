const fs = require('fs');
const path = require('path');

const filesToFix = [
  'src/data/part1/section2.ts',
  'src/data/part1/section3.ts',
  'src/data/part1/section4.ts',
  'src/data/part1/section5.ts',
  'src/data/part2/section1.ts',
  'src/data/part2/section2.ts',
  'src/data/part2/section3.ts',
  'src/data/part2/section4.ts',
  'src/data/part3/section1.ts',
  'src/data/part3/section2.ts',
  'src/data/part3/section4.ts',
  'src/data/part4/section1.ts',
  'src/data/part4/section2.ts',
  'src/data/part4/section3.ts',
  'src/data/part4/section4.ts',
  'src/data/part4/section5.ts',
  'src/data/part5/section1.ts',
  'src/data/part5/section2.ts',
  'src/data/part5/section3.ts',
  'src/data/part5/section4.ts',
  'src/data/part6/section1.ts',
  'src/data/part6/section2.ts',
  'src/data/part6/section3.ts',
  'src/data/part7/section1.ts',
  'src/data/part7/section2.ts',
  'src/data/part7/section3.ts',
  'src/data/part7/section4.ts',
  'src/data/part7/section5.ts',
  'src/data/part7/section6.ts',
  'src/data/part8/section1.ts',
  'src/data/part8/section2.ts',
  'src/data/part8/section3.ts',
  'src/data/part8/section4.ts',
  'src/data/part8/section5.ts',
  'src/data/part9/section1.ts',
  'src/data/part9/section2.ts',
  'src/data/part9/section3.ts',
  'src/data/part9/section4.ts',
  'src/data/part9/section5.ts',
  'src/data/part9/section6.ts',
  'src/data/part10/section1.ts',
  'src/data/part10/section2.ts',
  'src/data/part10/section3.ts',
  'src/data/part10/section4.ts',
  'src/data/part11/section1.ts',
  'src/data/part11/section2.ts',
  'src/data/part11/section3.ts',
  'src/data/part11/section4.ts',
  'src/data/part12/section1.ts',
  'src/data/part12/section2.ts',
  'src/data/part12/section3.ts',
  'src/data/part12/section4.ts',
  'src/data/part12/section5.ts',
  'src/data/part12/section6.ts',
  'src/data/part13/section1.ts',
  'src/data/part13/section2.ts',
  'src/data/part13/section3.ts',
  'src/data/part13/section4.ts',
  'src/data/part14/section1.ts',
  'src/data/part14/section2.ts'
];

filesToFix.forEach(filePath => {
  const fullPath = path.resolve(filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    let newContent = content;
    
    // Include initialCode, testCode, title in search keys
    ['ENG', 'CAS', 'EUS', 'initialCode', 'testCode', 'title'].forEach(key => {
        // use regex for start because spacing varies
        const startRegex = new RegExp(key + "\s*:\s*`", "g");
        let matchStart;
        
        let searchFrom = 0;
        
        while (true) {
            startRegex.lastIndex = searchFrom;
            matchStart = startRegex.exec(newContent);
            if (!matchStart) break;
            
            const contentStart = matchStart.index + matchStart[0].length;
            const rest = newContent.slice(contentStart);
            
            // End regex
            const pattern = "`\s*(?:,\s*\n|}\s*(?:,|]|$)|\n\s*(?:ENG|CAS|EUS|blocks|questions|type|exerciseId|initialCode|testCode|title))";
            const endRegex = new RegExp(pattern, "g");
            
            const matchEnd = endRegex.exec(rest);
            if (matchEnd) {
                const endIdx = contentStart + matchEnd.index;
                const blockContent = newContent.substring(contentStart, endIdx);
                
                const fixedBlock = blockContent.replace(/(?<!\\)`/g, '\\`');
                
                if (fixedBlock !== blockContent) {
                    newContent = newContent.substring(0, contentStart) + fixedBlock + newContent.substring(endIdx);
                    console.log(`Fixed backticks in ${filePath} for ${key}`);
                    searchFrom = contentStart + fixedBlock.length + matchEnd[0].length; 
                } else {
                    searchFrom = endIdx + matchEnd[0].length;
                }
            } else {
                // console.log(`Could not find end of block for ${key} in ${filePath}`);
                searchFrom = contentStart;
            }
        }
    });

    if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
    } else {
        console.log(`No changes for ${filePath}`);
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});