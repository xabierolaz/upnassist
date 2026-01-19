
const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const dataDir = path.join(__dirname, '../src/data');

console.log(`Scanning ${dataDir}...`);

walkDir(dataDir, function(filePath) {
    if (filePath.endsWith('.ts') && !filePath.includes('mooc-exercises.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Replace unescaped triple backticks with escaped backticks
        // We look for ``` that are NOT preceded by a backslash
        // actually, we just want to escape them if they are inside a backticked string.
        // But since we assume the file structure relies on `...` for content, 
        // and we want literal ``` inside it, we escape them.
        
        // However, we must be careful not to double escape if I already ran this.
        // And we must NOT escape single backticks that act as delimiters.
        
        // Regex: Find ``` and replace with \`\`\`
        // But wait, in JS/TS string `...`, to get a backtick, you escape it: \
        // So ``` becomes \`\`\`
        
        // We only target triple backticks because those are used for code blocks in MD.
        // Single backticks used for inline code `code` also need escaping!
        
        // Let's escape ALL backticks that are NOT the start/end of the string?
        // That's hard to detect without a parser.
        
        // Heuristic:
        // The file follows this pattern:
        // ENG: `
        // ... content ...
        // `
        
        // We can try to use a regex to capture the content between `ENG: 
` and the matching end backtick?
        // No, regex for balanced nesting is impossible.
        
        // Brute force strategy:
        // If we assume that the ONLY place backticks appear is inside the `content` values (which are template literals),
        // AND that `initialCode`/`testCode` use double/single quotes (which I generally used in my generation),
        // THEN we can escape ALL backticks that are not "ENG: `", "CAS: `", "EUS: `" or the closing "`,".
        
        // Actually, replacing ` ``` ` with ` \`\`\` ` handles the code blocks.
        // Replacing inline ` ` ` with ` \` ` handles inline code.
        
        // But how to distinguish the delimiter?
        // The delimiter is usually at the end of a line or followed by comma/brace?
        // ENG: ` ... `
        
        // Let's try a safer regex:
        // Replace ``` with \`\`\`
        // This fixes the block issue which is the most common error source (nested blocks).
        
        if (content.includes('```')) {
             // console.log(`Fixing code blocks in ${filePath}`);
             // Replace ``` with \`\`\`
             // content = content.replace(/```/g, '\\`\\`\\`');
             // Wait, if I replace ``` with \`\`\`, it becomes literally \`\`\` in the file string.
             // In the TS string: ` ... \`\`\` ... ` -> parses to string containing ```. Correct.
             
             // BUT, what if I have inline code `variable`?
             // That is a single backtick. It also needs escaping!
             // `variable` -> \`variable\`
             
             // If I blindly replace ` with \`, I break the delimiters.
             
             // Regex to find content blocks:
             // (ENG|CAS|EUS):\s*`([\s\S]*?)`(?=\s*(?:,|\}))
             // This matches the key, the opening backtick, the content (non-greedy), and lookahead for closing.
             // But if content contains backticks, the regex stops at the first backtick!
             // That's the problem. The file is currently syntactically broken because the parser stops early.
             
             // So I can't parse it easily.
             
             // However, I generated these files. I know the structure.
             // content: {
             //   ENG: `...`,
             //   CAS: `...`,
             //   EUS: `...`
             // }
             
             // The "broken" file has ` ... ` ... ` ... `
             // The parser sees: ` ... ` (end of string) ... (junk) ... ` (start of string?)
             
             // I need to escape ALL backticks that are NOT "ENG: `", "CAS: `", "EUS: `" or the very last "`" before "},.
             
             // Strategy:
             // 1. Split by keys: "ENG: `", "CAS: `", "EUS: `"
             // 2. In the chunks, escape ALL backticks.
             // 3. Reassemble.
             
             // Example: 
             // content = " ... ENG: ` bla ` bla ` ... "
             // Split on "ENG: `" -> ["...", " bla ` bla ` ... "]
             // Escape the second part? " bla \` bla \` ... "
             // But the last backtick is the delimiter!
             
             // The last non-whitespace character of the block should be the backtick?
             // Or rather, look for the pattern "`," or "`\n" at the end?
             
             // Better:
             // The content strings are usually long.
             // I will replace "```" with "\\`\\`\\`" specifically. This fixes the code blocks.
             // I will also look for inline code "` " and " `" and replace with "\\` " and " \`".
             
             // Let's just fix ``` first as it causes the "Expected }" error (block termination).
             
             const fixed = content.replace(/```/g, '\\`\\`\\`');
             if (fixed !== content) {
                 fs.writeFileSync(filePath, fixed);
                 console.log(`Fixed 
` in ${filePath});
             }
        }
    }
});
