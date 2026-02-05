const fs = require('fs');
const path = require('path');

const targetFile = 'D:\\Upnassist2026\\Pyxom-vNext\\curriculum-src\\data-structures\\02_Matrices_Dispersas\\Thursday_Practice\\lab_dispersas.tex';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // 1. Quitar la ñ y acentos conflictivos en la sección inyectada
    content = content.replace(/tamaño/g, 'tamano');
    content = content.replace(/tamaños/g, 'tamanos');
    content = content.replace(/Parámetros/g, 'Parametros');

    // 2. Corregir el error \b\begin detectado en los logs
    // Parece que el script anterior inyectó un carácter de control \b (0x08)
    content = content.replace(/\u0008/g, ''); 
    content = content.replace(/\\b\\begin/g, '\\begin');
    content = content.replace(/\\b\\end/g, '\\end');

    fs.writeFileSync(targetFile, content, 'utf8');
    console.log("✅ Archivo .tex saneado (ñ eliminada, rutas de escape corregidas).");

} catch (e) {
    console.error("Error saneando:", e);
}
