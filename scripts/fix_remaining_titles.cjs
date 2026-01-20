const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..', 'src', 'data');

function fixFile(filePath, fixes) {
    const fullPath = path.join(rootDir, filePath);
    if (!fs.existsSync(fullPath)) {
        console.error(`❌ File not found: ${fullPath}`);
        return;
    }

    try {
        let content = fs.readFileSync(fullPath, 'utf8');
        let data = JSON.parse(content);
        let modified = false;

        // data is likely { blocks: [...] }
        if (!data.blocks) {
             // Try assuming array? No, the other scripts assume { blocks: [] } or just object with keys?
             // Looking at fix_batch3.json it uses keys "1", "2" which implies the root object has keys corresponding to indices?
             // BUT populate_missing_translations.cjs uses json.blocks.forEach.
             // Let's assume the file structure matches what populate_missing_translations expects (standard Pyxom format).
             // Wait, fix_batch2.json used `block = json.blocks[idx]`.
             // So `json.blocks` is an array.
        }

        for (const [index, fix] of Object.entries(fixes)) {
            const i = parseInt(index);
            if (data.blocks && data.blocks[i]) {
                const block = data.blocks[i];
                if (fix.cas_title) {
                    block.title = block.title || {};
                    block.title.CAS = fix.cas_title;
                    modified = true;
                }
                if (fix.eus_title) {
                    block.title = block.title || {};
                    block.title.EUS = fix.eus_title;
                    modified = true;
                }
            }
        }

        if (modified) {
            fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), 'utf8');
            console.log(`✅ Fixed titles in ${filePath}`);
        }

    } catch (e) {
        console.error(`❌ Error processing ${filePath}: ${e.message}`);
    }
}

// Part 5
fixFile('part5/section1.json', {
    "5": { cas_title: "Go", eus_title: "Go" }
});

// Part 6
fixFile('part6/section1.json', {
    "9": { cas_title: "Corrector ortográfico", eus_title: "Ortografia zuzentzailea" },
    "10": { cas_title: "Búsqueda de recetas", eus_title: "Errezeta bilaketa" },
    "11": { cas_title: "Bicicletas de ciudad", eus_title: "Hiriko bizikletak" }
});

// Part 7
fixFile('part7/section2.json', {
    "6": { cas_title: "Palabras aleatorias", eus_title: "Ausazko hitzak" }
});
fixFile('part7/section4.json', {
    "7": { cas_title: "Corrector ortográfico, versión 2", eus_title: "Ortografia zuzentzailea, 2. bertsioa" }
});

// Part 8
fixFile('part8/section1.json', {
    "2": { cas_title: "Sumas de filas", eus_title: "Errenkaden baturak" }
});
fixFile('part8/section2.json', {
    "2": { cas_title: "Lista de la compra", eus_title: "Erosketa zerrenda" }
});
fixFile('part8/section4.json', {
    "4": { cas_title: "Estadísticas sobre números", eus_title: "Zenbakiei buruzko estatistikak" }
});
fixFile('part8/section5.json', {
    "5": { cas_title: "Series", eus_title: "Serieak" }
});

// Part 9
fixFile('part9/section1.json', {
    "5": { cas_title: "LunchCard y PaymentTerminal", eus_title: "LunchCard eta PaymentTerminal" },
    "7": { cas_title: "Comparando propiedades", eus_title: "Propietateak konparatzen" }
});
fixFile('part9/section2.json', {
    "5": { cas_title: "La persona más baja de la habitación", eus_title: "Gelako pertsonarik baxuena" }
});

// Part 10
fixFile('part10/section3.json', {
    "4": { cas_title: "Una lista de la compra iterable", eus_title: "Erosketa zerrenda iteragarria" }
});
fixFile('part10/section4.json', {
    "5": { cas_title: "Registros del curso", eus_title: "Ikastaroaren erregistroak" }
});

// Part 11
fixFile('part11/section1.json', {
    "9": { cas_title: "Números de lotería", eus_title: "Loteria zenbakiak" }
});
fixFile('part11/section2.json', {
    "4": { cas_title: "Diferencia de precio de propiedades más baratas", eus_title: "Jabetza merkeagoen prezio diferentzia" },
    "6": { cas_title: "Longitudes de cadenas", eus_title: "Kateen luzerak" },
    "7": { cas_title: "Palabras más comunes", eus_title: "Hitz ohikoenak" }
});
fixFile('part11/section3.json', {
    "4": { cas_title: "Equilibrar todos los paréntesis", eus_title: "Parentesi guztiak orekatu" }
});
fixFile('part11/section4.json', {
    "5": { cas_title: "Libro de pedidos", eus_title: "Eskaera liburua" },
    "6": { cas_title: "Aplicación de libro de pedidos", eus_title: "Eskaera liburuaren aplikazioa" }
});

// Part 12
fixFile('part12/section1.json', {
    "6": { cas_title: "Zonas de escalada", eus_title: "Eskalada guneak" },
    "8": { cas_title: "Jugadores de pelota", eus_title: "Pilota jokalariak" },
    "10": { cas_title: "Búsqueda de productos", eus_title: "Produktu bilaketa" }
});
fixFile('part12/section2.json', {
    "4": { cas_title: "Palabras aleatorias", eus_title: "Ausazko hitzak" }
});
fixFile('part12/section3.json', {
    "5": { cas_title: "Créditos de estudio", eus_title: "Ikasketa kredituak" }
});
fixFile('part12/section4.json', {
    "3": { cas_title: "Estadísticas de hockey", eus_title: "Hockey estatistikak" }
});

// Part 13
fixFile('part13/section2.json', {
    "6": { cas_title: "Invasión de robots", eus_title: "Roboten inbasioa" }
});
fixFile('part13/section3.json', {
    "5": { cas_title: "Robot y ratón", eus_title: "Robota eta sagua" },
    "6": { cas_title: "La ubicación del robot", eus_title: "Robotaren kokapena" }
});

console.log("🏁 Title fixes applied.");
