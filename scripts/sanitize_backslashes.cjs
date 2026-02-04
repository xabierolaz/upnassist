const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../src/courses/mooc/content');

console.log(`Sanitizing over-escaped backslashes in ${contentDir}...`);

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.json')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });
  return arrayOfFiles;
}

try {
    const files = getAllFiles(contentDir);
    let fixedCount = 0;

    files.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;

        // SAFETY CHECK: We only target 8 or more backslashes.
        // 4 backslashes (\\n) are REQUIRED for Python inside JSON.
        // If we reduce 4 to 2 or 1, we BREAK the code.
        
        // Match 8 or more backslashes followed by n
        // In Regex Literal: \\ matches a single backslash.
        // We want to match 8 backslashes in the file.
        // 8 * 2 = 16 backslashes in the regex string.
        const regexExcessive = /\\\\\\\\\\\\\\\\n/g; 
        
        if (regexExcessive.test(content)) {
            // Replace with 4 backslashes (\\n)
            // In replacement string: \\ is one backslash.
            // We want 4. So we need 16? No.
            // In replace(regex, string), the string is literal except for $.
            // But wait, \\ matches \ in string definition.
            // To get \\\\n in file, we need "\\\\\\\\n" in JS string.
            
            content = content.replace(regexExcessive, "\\\\\\\\n");
            
            fs.writeFileSync(file, content, 'utf8');
            console.log(`[CLEANED] ${path.relative(process.cwd(), file)} had excessive escaping.`);
            fixedCount++;
        }
    });

    if (fixedCount === 0) {
        console.log("No files with excessive escaping (8+ backslashes) found. The current 4-backslash setup is correct.");
    } else {
        console.log(`Sanitized ${fixedCount} files.`);
    }

} catch (e) {
    console.error("Fatal error:", e);
}
