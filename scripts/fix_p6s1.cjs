const fs = require('fs');
const path = require('path');

function fixFile(relativePath, patches) {
    const filePath = path.resolve(__dirname, '../src/data', relativePath);
    let json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    for (const [index, content] of Object.entries(patches)) {
        const idx = parseInt(index);
        if (content.cas) json.blocks[idx].content.CAS = content.cas.replace(/__BT__/g, '`');
        if (content.eus) json.blocks[idx].content.EUS = content.eus.replace(/__BT__/g, '`');
        if (content.cas_title) json.blocks[idx].title.CAS = content.cas_title;
        if (content.eus_title) json.blocks[idx].title.EUS = content.eus_title;
        if (content.cas_desc) json.blocks[idx].description.CAS = content.cas_desc.replace(/__BT__/g, '`');
        if (content.eus_desc) json.blocks[idx].description.EUS = content.eus_desc.replace(/__BT__/g, '`');
    }

    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
    console.log(`✅ Fixed ${relativePath}`);
}

const p6s1_7_cas_title = "Calificación del curso, parte 2";
const p6s1_7_eus_title = "Ikastaroaren kalifikazioa, 2. zatia";
const p6s1_7_cas_desc = "Expandamos el programa creado en el ejercicio anterior. Ahora también los puntos de examen otorgados a cada estudiante están contenidos en un archivo CSV. El programa debe volver a pedir al usuario los nombres de los archivos. Luego, el programa debe procesar los archivos e imprimir una calificación para cada estudiante.";
const p6s1_7_eus_desc = "Zabal dezagun aurreko ariketan sortutako programa. Orain ikasle bakoitzari azterketan emandako puntuak ere CSV fitxategi batean daude. Programak berriro eskatu behar dizkio erabiltzaileari fitxategien izenak. Ondoren, programak fitxategiak prozesatu behar ditu eta ikasle bakoitzarentzako kalifikazio bat inprimatu.";

const p6s1_8_cas_title = "Calificación del curso, parte 3";
const p6s1_8_eus_title = "Ikastaroaren kalifikazioa, 3. zatia";
const p6s1_8_cas_desc = "Este ejercicio continuará desde el anterior. Ahora imprimiremos algunas estadísticas basadas en los archivos CSV. Cada fila contiene la información para un solo estudiante. El número de ejercicios completados, el número de puntos por ejercicios otorgados, el número de puntos de examen otorgados, el número total de puntos otorgados y la calificación se muestran todos en columnas ordenadas.";
const p6s1_8_eus_desc = "Ariketa honek aurrekoarekin jarraituko du. Orain CSV fitxategietan oinarritutako estatistika batzuk inprimatuko ditugu. Ilara bakoitzak ikasle bakar baten informazioa dauka. Osatutako ariketa kopurua, emandako ariketa puntuak, emandako azterketa puntuak, emandako puntu guztiak eta kalifikazioa, guztiak zutabe txukunetan bistaratzen dira.";

fixFile('part6/section1.json', {
    "7": { cas_title: p6s1_7_cas_title, eus_title: p6s1_7_eus_title, cas_desc: p6s1_7_cas_desc, eus_desc: p6s1_7_eus_desc },
    "8": { cas_title: p6s1_8_cas_title, eus_title: p6s1_8_eus_title, cas_desc: p6s1_8_cas_desc, eus_desc: p6s1_8_eus_desc }
});
