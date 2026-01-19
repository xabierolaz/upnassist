const fs = require('fs');
const path = require('path');

const srcDataPath = path.resolve(__dirname, '../src/data');

function populateTranslations(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let json;
    try {
        json = JSON.parse(content);
    } catch (e) {
        return;
    }

    let modified = false;

    if (json.blocks) {
        json.blocks.forEach(block => {
            if (block.type === 'markdown' && block.content) {
                const eng = block.content.ENG || "";
                if (eng && (!block.content.CAS || block.content.CAS.trim() === "")) {
                    block.content.CAS = eng;
                    modified = true;
                }
                if (eng && (!block.content.EUS || block.content.EUS.trim() === "")) {
                    block.content.EUS = eng;
                    modified = true;
                }
            }
            if (block.type === 'exercise') {
                if (block.title) {
                    const engTitle = block.title.ENG || "";
                    if (engTitle && (!block.title.CAS || block.title.CAS.trim() === "")) {
                        block.title.CAS = engTitle;
                        modified = true;
                    }
                    if (engTitle && (!block.title.EUS || block.title.EUS.trim() === "")) {
                        block.title.EUS = engTitle;
                        modified = true;
                    }
                }
                if (block.description) {
                    const engDesc = block.description.ENG || "";
                    if (engDesc && (!block.description.CAS || block.description.CAS.trim() === "")) {
                        block.description.CAS = engDesc;
                        modified = true;
                    }
                    if (engDesc && (!block.description.EUS || block.description.EUS.trim() === "")) {
                        block.description.EUS = engDesc;
                        modified = true;
                    }
                }
            }
        });
    }

    if (modified) {
        fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
        console.log(`✅ Populated fallbacks in ${path.basename(filePath)}`);
    }
}

function traverseDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverseDir(fullPath);
        } else if (file.endsWith('.json') && file.startsWith('section')) {
            populateTranslations(fullPath);
        }
    });
}

console.log("🛠 Populating missing translations with English fallback...");
traverseDir(srcDataPath);
console.log("🏁 Done.");
