const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'part5', 'section1.json');

function fixPart5() {
    if (!fs.existsSync(filePath)) {
        console.error("File not found");
        return;
    }
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    let modified = false;

    data.blocks.forEach(block => {
        if (block.type === 'exercise') {
            if (block.exerciseId === 'part05-03_go') {
                block.title.CAS = "Go";
                block.title.EUS = "Go";
                modified = true;
            }
            if (block.exerciseId === 'part05-04_sudoku_row') {
                block.title.CAS = "Sudoku: verificar fila";
                block.title.EUS = "Sudoku: ilara egiaztatu";
                modified = true;
            }
            if (block.exerciseId === 'part05-05_sudoku_column') {
                block.title.CAS = "Sudoku: verificar columna";
                block.title.EUS = "Sudoku: zutabea egiaztatu";
                modified = true;
            }
            if (block.exerciseId === 'part05-06_sudoku_block') {
                block.title.CAS = "Sudoku: verificar bloque";
                block.title.EUS = "Sudoku: blokea egiaztatu";
                modified = true;
            }
            if (block.exerciseId === 'part05-07_sudoku_grid') {
                block.title.CAS = "Sudoku: verificar cuadrícula";
                block.title.EUS = "Sudoku: sareta egiaztatu";
                modified = true;
            }
        }
    });

    if (modified) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log("✅ Fixed part5/section1.json titles robustly.");
    } else {
        console.log("ℹ️ No changes needed for part5/section1.json");
    }
}

fixPart5();
