const fs = require('fs');
const path = require('path');

const filesToFix = [
  'src/data/part1/section3.ts',
  'src/data/part1/section4.ts',
  'src/data/part1/section5.ts',
  'src/data/part2/section1.ts',
  'src/data/part2/section3.ts',
  'src/data/part2/section4.ts',
  'src/data/part4/section1.ts',
  'src/data/part4/section2.ts',
  'src/data/part4/section3.ts',
  'src/data/part4/section4.ts',
  'src/data/part4/section5.ts',
  'src/data/part5/section1.ts',
  'src/data/part5/section2.ts',
  'src/data/part5/section3.ts',
  'src/data/part5/section4.ts',
  'src/data/part6/section2.ts',
  'src/data/part6/section3.ts',
  'src/data/part7/section2.ts',
  'src/data/part7/section4.ts',
  'src/data/part8/section3.ts',
  'src/data/part8/section4.ts',
  'src/data/part8/section5.ts',
  'src/data/part10/section3.ts',
  'src/data/part10/section4.ts',
  'src/data/part11/section1.ts',
  'src/data/part12/section1.ts',
  'src/data/part12/section2.ts',
  'src/data/part13/section4.ts'
];

filesToFix.forEach(filePath => {
  const fullPath = path.resolve(filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    let originalContent = content;

    // Regex to find backtick strings that are properties
    // (ENG|CAS|EUS) : ` ... ` followed by comma or brace
    
    const regex = /(ENG|CAS|EUS)(\s*: \s*)`([\s\S]*?)`(\s*(?:,|}|]|\n\s*(?:ENG|CAS|EUS|blocks|questions|type|exerciseId)))/g;
    
    const fixedContent = content.replace(regex, (match, key, sep, value, suffix) => {
        // Escape unescaped backticks in value
        // We use negative lookbehind to find ` not preceded by \
        let newValue = value.replace(/(?<!\\)`/g, '\\`');
        
        return key + sep + '`' + newValue + '`' + suffix;
    });

    if (fixedContent !== originalContent) {
        fs.writeFileSync(fullPath, fixedContent, 'utf8');
        console.log(`Escaped backticks in ${filePath}`);
    } else {
        console.log(`No changes for ${filePath}`);
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});
