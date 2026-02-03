const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = fs.statSync(dirFile).isDirectory()
        ? walkSync(dirFile, filelist)
        : filelist.concat(dirFile);
    } catch (err) {
      if (err.code !== 'ENOENT') throw err;
    }
  });
  return filelist;
}

const CONTENT_DIR = path.join(__dirname, '../src/courses');

console.log('🔍 Verifying Content Integrity...');

const files = walkSync(CONTENT_DIR).filter(f => f.endsWith('.json'));
let errors = 0;

const badSplitRegex = /\.split\(['"]\n['"]\)/;

files.forEach(file => {
    try {
        const content = fs.readFileSync(file, 'utf8');
        const json = JSON.parse(content);
        
        if (!json.title) {
            console.error(`❌ [MISSING TITLE] ${path.relative(process.cwd(), file)}`);
            errors++;
        }
        
        if (!json.blocks || !Array.isArray(json.blocks)) {
            console.error(`❌ [INVALID BLOCKS] ${path.relative(process.cwd(), file)}`);
            errors++;
        } else {
            // Deep check blocks
            json.blocks.forEach((block, idx) => {
                if (!block.type) {
                    console.error(`❌ [INVALID BLOCK TYPE] ${path.relative(process.cwd(), file)} at index ${idx}`);
                    errors++;
                }
                
                // Content Safety Checks
                if (block.type === 'exercise' && block.testCode) {
                    if (badSplitRegex.test(block.testCode)) {
                         console.error(`❌ [BAD SPLIT] Actual newline in string found in ${path.relative(process.cwd(), file)} (Block ${idx}). Use split('\\n').`);
                         errors++;
                    }
                    if (block.testCode.includes('retun_value')) {
                        console.error(`❌ [TYPO] 'retun_value' found in ${path.relative(process.cwd(), file)} (Block ${idx})`);
                        errors++;
                    }
                }
            });
        }

    } catch (e) {
        console.error(`❌ [INVALID JSON] ${path.relative(process.cwd(), file)}: ${e.message}`);
        errors++;
    }
});

if (errors === 0) {
    console.log(`✅ All ${files.length} content files are valid.`);
    process.exit(0);
} else {
    console.error(`🛑 Found ${errors} errors in content files.`);
    process.exit(1);
}