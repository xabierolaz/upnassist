const fs = require('fs');
const path = require('path');

function fixFile(relativePath, patches) {
    const filePath = path.resolve(__dirname, '../src/data', relativePath);
    if (!fs.existsSync(filePath)) {
        console.log(`⚠️ Skip ${relativePath} (not found)`);
        return;
    }
    let json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    for (const [index, content] of Object.entries(patches)) {
        const idx = parseInt(index);
        if (!json.blocks[idx]) {
            console.log(`⚠️ Skip block ${idx} in ${relativePath} (not found)`);
            continue;
        }
        const block = json.blocks[idx];
        if (content.cas) {
            block.content = block.content || {};
            block.content.CAS = content.cas.replace(/__BT__/g, '`');
        }
        if (content.eus) {
            block.content = block.content || {};
            block.content.EUS = content.eus.replace(/__BT__/g, '`');
        }
        if (content.cas_title) {
            block.title = block.title || {};
            block.title.CAS = content.cas_title;
        }
        if (content.eus_title) {
            block.title = block.title || {};
            block.title.EUS = content.eus_title;
        }
        if (content.cas_desc) {
            block.description = block.description || {};
            block.description.CAS = content.cas_desc.replace(/__BT__/g, '`');
        }
        if (content.eus_desc) {
            block.description = block.description || {};
            block.description.EUS = content.eus_desc.replace(/__BT__/g, '`');
        }
    }

    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
    console.log(`✅ Fixed ${relativePath}`);
}

// Fix regressions in Part 1
fixFile('part1/section1.json', {
    "4": { cas_desc: "Por favor escribe un programa que imprima las siguientes líneas exactamente como están escritas aquí, puntuación y todo:\n\n<sample-output>\n\nRow, row, row your boat,\nGently down the stream.\nMerrily, merrily, merrily, merrily,\nLife is but a dream.\n\n</sample-output>", eus_desc: "Mesedez idatzi programa bat hurrengo lerroak hemen idatzita dauden bezala inprimatzen dituena, puntuazioa eta guzti:\n\n<sample-output>\n\nRow, row, row your boat,\nGently down the stream.\nMerrily, merrily, merrily, merrily,\nLife is but a dream.\n\n</sample-output>" },
    "6": { cas_desc: "Por favor escribe un programa que imprima el número de minutos en un año. Usa código Python para realizar el cálculo, como en el ejemplo de código anterior.", eus_desc: "Mesedez idatzi programa bat urte baten minutu kopurua inprimatzen duena. Erabili Python kodea kalkulua egiteko, aurreko kode adibidean bezala." },
    "7": { cas_desc: "Por favor escribe un programa que imprima lo siguiente:\n\n<sample-output>\n\nprint(\"Hello there!\")\n\n</sample-output>", eus_desc: "Mesedez idatzi programa bat honako hau inprimatzen duena:\n\n<sample-output>\n\nprint(\"Hello there!\")\n\n</sample-output>" }
});

fixFile('part1/section4.json', {
    "1": { cas_desc: "Por favor escribe un programa que pida un número al usuario y lo multiplique por cinco.", eus_desc: "Mesedez idatzi programa bat erabiltzaileari zenbaki bat eskatzen diona eta bider bost egiten duena." },
    "2": { cas_desc: "Por favor escribe un programa que pida el nombre y la edad del usuario.", eus_desc: "Mesedez idatzi programa bat erabiltzailearen izena eta adina eskatzen dituena." }
});

fixFile('part5/section1.json', {
    "5": { cas_title: "Go", eus_title: "Go" }
});

console.log("🏁 Regression fixes applied.");
