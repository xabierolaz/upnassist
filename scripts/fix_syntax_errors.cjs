const fs = require('fs');
const path = require('path');

const files = [
  'src/data/part4/section4.ts',
  'src/data/part5/section1.ts',
  'src/data/part8/section2.ts',
  'src/data/part10/section1.ts',
  'src/data/part12/section4.ts',
  'src/data/part9/section3.ts'
];

files.forEach(filePath => {
  const fullPath = path.resolve(filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    let originalContent = content;

    if (filePath.includes('part9/section3.ts')) {
        // Fix backtick in markdown content
        // Pattern: underscores __`.
        // Replace with: underscores __\`.
        content = content.replace('underscores __`.', 'underscores __\`.');
    }

    if (filePath.includes('part4/section4.ts') || filePath.includes('part8/section2.ts')) {
        // Fix initialCode starting with backtick and ending with quote, and inner escaped backticks
        // initialCode: `... __main__`: ... "`
        // We want to replace the end quote with backtick, and __main__`: with __main__":
        
        // Fix end quote
        const endQuoteRegex = /(initialCode:\s*`[\s\S]*?)"(\s*testCode)/;
        content = content.replace(endQuoteRegex, '$1`$2');
        
        // Fix inner __main__`:
        content = content.replace('__main__\`:', '__main__":');
    }

    if (filePath.includes('part5/section1.ts')) {
        // initialCode: `... howdydoody`, "hi there"] ... "`
        const endQuoteRegex = /(initialCode:\s*`[\s\S]*?)"(\s*testCode)/;
        content = content.replace(endQuoteRegex, '$1`$2');
        
        content = content.replace('howdydoody\`,', 'howdydoody",');
    }

    if (filePath.includes('part10/section1.ts') || filePath.includes('part12/section4.ts')) {
        // initialCode: `... return f`{...}" ... "`
        // Fix end quote
        const endQuoteRegex = /(initialCode:\s*`[\s\S]*?)"(\s*testCode)/;
        content = content.replace(endQuoteRegex, '$1`$2');
        
        // Fix f` -> f"
        content = content.replace(/return f\`\{/g, 'return f"{');
        // And the closing quote of the f-string might be " already? 
        // In the file it was: return f`{self.model}, {self.speed} MHz"
        // So we just need to fix the start.
    }

    if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Fixed syntax in ${filePath}`);
    } else {
        console.log(`No changes for ${filePath}`);
    }
  }
});
