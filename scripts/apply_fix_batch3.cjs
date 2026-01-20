const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data');
const translationsFile = path.join(__dirname, 'fix_batch3.json');

const translations = JSON.parse(fs.readFileSync(translationsFile, 'utf8'));

Object.keys(translations).forEach(fileKey => {
    const filePath = path.join(dataDir, fileKey);
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        return;
    }

    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const updates = translations[fileKey];

    Object.keys(updates).forEach(index => {
        const idx = parseInt(index);
        const trans = updates[index];
        const block = content.blocks[idx];

        if (!block) {
            console.error(`Block index ${idx} not found in ${fileKey}`);
            return;
        }

        if (trans.cas) {
            if (block.type === 'markdown') block.content.CAS = trans.cas.text || block.content.CAS;
            if (block.type === 'exercise') {
                if (trans.cas.title) block.title.CAS = trans.cas.title;
                if (trans.cas.desc) block.description.CAS = trans.cas.desc;
            }
        }
        if (trans.eus) {
            if (block.type === 'markdown') block.content.EUS = trans.eus.text || block.content.EUS;
            if (block.type === 'exercise') {
                if (trans.eus.title) block.title.EUS = trans.eus.title;
                if (trans.eus.desc) block.description.EUS = trans.eus.desc;
            }
        }
    });

    fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
    console.log(`Updated ${fileKey}`);
});
