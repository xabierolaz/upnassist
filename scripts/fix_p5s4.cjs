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

const p5s4_6_cas_title = "Un cuadrado de letras";
const p5s4_6_eus_title = "Letra karratu bat";
const p5s4_6_cas_desc = "Este último ejercicio de esta parte es una tarea de resolución de problemas relativamente exigente. Se puede resolver de muchas maneras diferentes. Aunque esta sección actual del material cubre las tuplas, las tuplas no son necesariamente la mejor manera de resolver esto.\n\nPor favor escribe un programa que imprima un cuadrado de letras como se especifica en los ejemplos a continuación. Puedes asumir que habrá como máximo 26 capas.";
const p5s4_6_eus_desc = "Zati honetako azken ariketa hau arazoak konpontzeko zeregin nahiko zorrotza da. Modu askotara ebatz daiteke. Materialaren uneko atal honek tuplak jorratzen dituen arren, tuplak ez dira nezesarioan hau ebazteko biderik onena.\n\nMesedez idatzi programa bat beheko adibideetan zehazten den bezala letra karratu bat inprimatzen duena. Suposa dezakezu gehienez 26 geruza egongo direla.";

const p5s4_7_cas = "Por favor responde a un cuestionario rápido sobre los materiales de esta semana.\n\n<quiz id=\"34daa09c-da82-53df-be28-02a22704bf7e\"></quiz>";
const p5s4_7_eus = "Mesedez erantzun aste honetako materialei buruzko galdetegi azkar bati.\n\n<quiz id=\"34daa09c-da82-53df-be28-02a22704bf7e\"></quiz>";

fixFile('part5/section4.json', {
    "6": { cas_title: p5s4_6_cas_title, eus_title: p5s4_6_eus_title, cas_desc: p5s4_6_cas_desc, eus_desc: p5s4_6_eus_desc },
    "7": { cas: p5s4_7_cas, eus: p5s4_7_eus }
});
