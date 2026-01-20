const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath, callback);
        } else {
            callback(path.join(dir, f));
        }
    });
}

const suspiciousPatterns = [
    />\s*([A-Z][a-z0-9\s:!?,.-]+)\s*</g, // Text between tags starting with Capital
    /placeholder="([^"]+)"/g,
    /title="([^"]+)"/g,
    /alt="([^"]+)"/g,
    /aria-label="([^"]+)"/g
];

const ignoreList = [
    'PyXom', 'Python', 'UpnAssist', 'CAS', 'ENG', 'EUS', 
    'Resultados', 'Tests', 'Error', 'Esperado', 'Obtenido', // These seem hardcoded in ResultsDisplay, check manually
    'Sample output', 'Traceback'
];

console.log("🔍 Scanning frontend for hardcoded strings...");

walkDir(srcDir, (filePath) => {
    if (!filePath.endsWith('.tsx')) return;
    
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(srcDir, filePath);

    suspiciousPatterns.forEach(regex => {
        let match;
        while ((match = regex.exec(content)) !== null) {
            const text = match[1].trim();
            if (text.length > 2 && !text.includes('{') && !text.startsWith('http')) {
                // Heuristic filtering
                if (ignoreList.some(ign => text.includes(ign))) return;

                console.log(`[${relativePath}] Potential hardcoded: "${text}"`);
            }
        }
    });
});
console.log("🏁 Done.");
