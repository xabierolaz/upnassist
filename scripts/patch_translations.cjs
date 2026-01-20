const fs = require('fs');
const path = require('path');

const srcDataPath = path.resolve(__dirname, '../src/data');

function patchFile(relativePath, patches) {
    const filePath = path.join(srcDataPath, relativePath);
    if (!fs.existsSync(filePath)) {
        console.error(`❌ File not found: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let json = JSON.parse(content);
    let modified = false;

    // We assume patches is an object where keys are block indices (0-based)
    Object.keys(patches).forEach(indexStr => {
        const index = parseInt(indexStr);
        const patch = patches[indexStr];
        const block = json.blocks[index];

        if (block) {
            if (block.type === 'markdown' && block.content) {
                if (patch.cas && patch.cas.text) {
                    block.content.CAS = patch.cas.text;
                    modified = true;
                }
                if (patch.eus && patch.eus.text) {
                    block.content.EUS = patch.eus.text;
                    modified = true;
                }
                if (patch.cas && patch.cas.title) {
                    // Title in markdown block? Usually not, but for consistency
                    block.title = block.title || {};
                    block.title.CAS = patch.cas.title;
                    modified = true;
                }
            } else if (block.type === 'exercise') {
                if (patch.cas && patch.cas.title) {
                    block.title = block.title || {};
                    block.title.CAS = patch.cas.title;
                    modified = true;
                }
                if (patch.eus && patch.eus.title) {
                    block.title = block.title || {};
                    block.title.EUS = patch.eus.title;
                    modified = true;
                }
                if (patch.cas && patch.cas.description) {
                    block.description = block.description || {};
                    block.description.CAS = patch.cas.description;
                    modified = true;
                }
                if (patch.eus && patch.eus.description) {
                    block.description = block.description || {};
                    block.description.EUS = patch.eus.description;
                    modified = true;
                }
            }
        }
    });

    if (modified) {
        fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
        console.log(`✅ Patched ${relativePath}`);
    }
}

const batch = JSON.parse(fs.readFileSync(path.join(__dirname, 'current_patch.json'), 'utf8'));

Object.keys(batch).forEach(file => {
    patchFile(file, batch[file]);
});
