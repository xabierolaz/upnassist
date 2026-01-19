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
  'src/data/part8/section2.ts',
  'src/data/part8/section3.ts',
  'src/data/part8/section4.ts',
  'src/data/part8/section5.ts',
  'src/data/part9/section3.ts',
  'src/data/part9/section5.ts',
  'src/data/part10/section1.ts',
  'src/data/part10/section3.ts',
  'src/data/part10/section4.ts',
  'src/data/part11/section1.ts',
  'src/data/part12/section1.ts',
  'src/data/part12/section2.ts',
  'src/data/part12/section4.ts',
  'src/data/part13/section1.ts',
  'src/data/part13/section4.ts'
];

filesToFix.forEach(filePath => {
  const fullPath = path.resolve(filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    let originalContent = content;

    const keys = "(ENG|CAS|EUS|initialCode|testCode|title)";
    const suffixKeys = "(?:ENG|CAS|EUS|blocks|questions|type|exerciseId|initialCode|testCode|title)";
    
    // Pattern: key + separator + " + content + " + lookahead for (comma/brace/newline+key)
    // We use \\s to mean \s in regex
    // We use \" to mean " in regex string
    const pattern = keys + "(\\s*:\\s*)\"([\\s\\S]*?)\"(\\s*(?:,|}|]|" + String.fromCharCode(10) + "\\s*" + suffixKeys + "))";
    
    try {
        const regex = new RegExp(pattern, "g");
        
        const fixedContent = content.replace(regex, (match, key, sep, value, suffix) => {
            // Use backtick character explicitly
            // But we must NOT use backticks if the content already has backticks that we can't easily escape here?
            // Actually, force_fix_backticks.cjs handles escaping.
            // So we just blindly convert to backticks here.
            return key + sep + '`' + value + '`' + suffix;
        });

        if (fixedContent !== originalContent) {
            fs.writeFileSync(fullPath, fixedContent, 'utf8');
            console.log(`Updated quotes in ${filePath}`);
        } else {
            console.log(`No changes for ${filePath}`);
        }
    } catch (e) {
        console.error(`Regex error for ${filePath}:`, e);
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});
