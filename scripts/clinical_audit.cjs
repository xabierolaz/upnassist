const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const repoPath = path.join(projectRoot, 'external_resources/programming-25-repo/data');
const jsonPath = path.join(projectRoot, 'src/data');
const metaPath = path.join(projectRoot, 'src/data/course-structure.ts');

console.log("🏥 INICIANDO AUDITORÍA CLÍNICA...\n");

// 1. Cargar Mapa de UI (Course Structure)
let uiMap = new Set();
try {
    const metaContent = fs.readFileSync(metaPath, 'utf8');
    const matches = metaContent.match(/id:\s*["']part(\d+)-(\d+)["']/g);
    if (matches) {
        matches.forEach(m => {
            const clean = m.replace(/id:\s*["']/, '').replace(/["']/,"");
            uiMap.add(clean);
        });
    }
} catch (e) {
    console.error("🔥 CRITICAL: No se pudo leer course-structure.ts");
}

console.log(`📋 UI Map cargado: ${uiMap.size} secciones registradas.\n`);

const report = [];

// Iterar Partes 1 a 14 (Rango teórico)
for (let p = 1; p <= 14; p++) {
    const partDirRepo = path.join(repoPath, `part-${p}`);
    
    // Si no existe la carpeta en el Repo, ¿debería existir?
    // Asumimos que el Repo es la "Verdad A". Si no está ahí, no existe.
    if (!fs.existsSync(partDirRepo)) {
        continue;
    }

    // Buscar archivos Markdown (Verdad A)
    const mdFiles = fs.readdirSync(partDirRepo)
        .filter(f => f.endsWith('.md') && /^[0-9]+-/.test(f))
        .sort((a, b) => parseInt(a) - parseInt(b));

    mdFiles.forEach((mdFile, index) => {
        const sectionNum = index + 1;
        const sectionId = `part${p}-${sectionNum}`;
        const diagnosis = {
            id: sectionId,
            src: true,
            json: false,
            jsonValid: false,
            blocks: 0,
            exercises: 0,
            brokenCode: 0,
            ui: false,
            status: 'UNKNOWN'
        };

        // Chequeo UI
        if (uiMap.has(sectionId)) diagnosis.ui = true;

        // Chequeo JSON (Verdad B)
        const jsonFile = path.join(jsonPath, `part${p}`, `section${sectionNum}.json`);
        if (fs.existsSync(jsonFile)) {
            diagnosis.json = true;
            try {
                const content = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
                diagnosis.jsonValid = true;
                diagnosis.blocks = content.blocks ? content.blocks.length : 0;
                
                if (content.blocks) {
                    content.blocks.forEach(b => {
                        if (b.type === 'exercise') {
                            diagnosis.exercises++;
                            // Chequeo de Código (Verdad D)
                            // Si el código es muy corto o es el default "pass", es sospechoso
                            const code = b.initialCode?.ENG || b.initialCode || "";
                            if (!code || code.length < 10 || code.includes("# Write your solution here") && code.length < 50) {
                                // Esto es subjetivo, pero útil para encontrar ejercicios vacíos
                                // diagnosis.brokenCode++; 
                            }
                            if (code.trim() === "pass" || code.trim() === "") {
                                diagnosis.brokenCode++;
                            }
                        }
                    });
                }
            } catch (e) {
                diagnosis.jsonValid = false;
            }
        }

        // Juicio Final
        if (diagnosis.src && diagnosis.json && diagnosis.jsonValid && diagnosis.ui) {
            diagnosis.status = 'HEALTHY';
            if (diagnosis.brokenCode > 0) diagnosis.status = 'SICK_CODE';
        } else if (!diagnosis.json) {
            diagnosis.status = 'MISSING_BUILD';
        } else if (!diagnosis.ui) {
            diagnosis.status = 'GHOST_UI'; // Existe data pero no se ve
        } else {
            diagnosis.status = 'CORRUPT';
        }

        report.push(diagnosis);
    });
}

// Imprimir Reporte
console.log("ID".padEnd(12) + "SRC".padEnd(5) + "JSON".padEnd(6) + "UI".padEnd(5) + "EXER".padEnd(6) + "STATUS");
console.log("-".repeat(50));

const sick = [];

report.forEach(r => {
    const statusColor = r.status === 'HEALTHY' ? 'OK' : 'FAIL';
    if (r.status !== 'HEALTHY') sick.push(r);
    
    console.log(
        r.id.padEnd(12) + 
        (r.src ? "Yes" : "No ").padEnd(5) + 
        (r.json ? "Yes" : "No ").padEnd(6) + 
        (r.ui ? "Yes" : "No ").padEnd(5) + 
        String(r.exercises).padEnd(6) + 
        r.status
    );
});

console.log("\n" + "=".repeat(50));
console.log(`RESULTADO FINAL: ${report.length} Secciones analizadas.`);
if (sick.length === 0) {
    console.log("✅ EL PACIENTE ESTÁ EN PERFECTO ESTADO DE SALUD.");
} else {
    console.log(`⚠️ SE ENCONTRARON ${sick.length} PATOLOGÍAS:`);
    sick.forEach(s => console.log(`   - ${s.id}: ${s.status}`));
}
