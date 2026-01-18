const fs = require('fs');
const path = require('path');

const objectives = {
    'section1.json': {
        ENG: "## After this section:\n\n- You will be familiar with some essential terminology in programming\n- You will know the difference between a statement and an expression\n- You will be able to find out the data type of an evaluated expression\n- You will have learnt to use debugging methods to find mistakes in your code",
        CAS: "## Después de esta sección:\n\n- Te familiarizarás con terminología esencial en programación\n- Conocerás la diferencia entre una sentencia y una expresión\n- Podrás averiguar el tipo de dato de una expresión evaluada\n- Habrás aprendido a usar métodos de depuración para encontrar errores en tu código",
        EUS: "## Atal honen ondoren:\n\n- Programazioko oinarrizko terminologiarekin ohituko zara\n- Sententzia baten eta adierazpen baten arteko aldea jakingo duzu\n- Ebaluatutako adierazpen baten datu mota aurkitu ahal izango duzu\n- Zure kodean akatsak aurkitzeko arazketa metodoak erabiltzen ikasiko duzu"
    },
    'section2.json': {
        ENG: "## After this section:\n\n- You will know how to create multiple branches within conditional statements\n- You will understand the purpose of `if`, `elif` and `else` statements within a conditional statement\n- You will be able to use the modulo operation `%` in Boolean expressions",
        CAS: "## Después de esta sección:\n\n- Sabrás cómo crear múltiples ramas dentro de sentencias condicionales\n- Entenderás el propósito de las sentencias `if`, `elif` y `else` dentro de una sentencia condicional\n- Podrás usar la operación módulo `%` en expresiones booleanas",
        EUS: "## Atal honen ondoren:\n\n- Jakingo duzu nola sortu adar anitz baldintzazko sententzien barruan\n- `if`, `elif` eta `else` sententzien helburua ulertuko duzu baldintzazko sententzia baten barruan\n- `%` modulu eragiketa erabili ahal izango duzu adierazpen boolearretan"
    },
    'section3.json': {
        ENG: "## After this section:\n\n- You will know how to use the operators `and`, `or` and `not` in conditions\n- You will be able to write nested conditionals",
        CAS: "## Después de esta sección:\n\n- Sabrás cómo usar los operadores `and`, `or` y `not` en condiciones\n- Podrás escribir condicionales anidados",
        EUS: "## Atal honen ondoren:\n\n- Jakingo duzu nola erabili `and`, `or` eta `not` eragileak baldintzetan\n- Baldintza habiaratuak idatzi ahal izango dituzu"
    },
    'section4.json': {
        ENG: "## After this section:\n\n- You will know what a loop means in programming\n- You will be able to use a `while True` loop in your programs\n- You will know how to use the `break` command to break out of a loop",
        CAS: "## Después de esta sección:\n\n- Sabrás qué significa un bucle en programación\n- Podrás usar un bucle `while True` en tus programas\n- Sabrás cómo usar el comando `break` para salir de un bucle",
        EUS: "## Atal honen ondoren:\n\n- Jakingo duzu zer esan nahi duen begizta batek programazioan\n- `while True` begizta bat erabili ahal izango duzu zure programetan\n- Jakingo duzu nola erabili `break` komandoa begizta batetik irteteko"
    }
};

const dir = 'src/data/part2';

for (const [file, objs] of Object.entries(objectives)) {
    const filePath = path.join(dir, file);
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const json = JSON.parse(content);
        
        // Find the first markdown block
        const firstBlock = json.blocks.find(b => b.type === 'markdown');
        
        if (firstBlock) {
            // Check if already present
            if (firstBlock.content.ENG.includes("After this section")) {
                console.log(`Skipping ${file}, objectives already present.`);
                continue;
            }

            // Insert after title
            for (const lang of ['ENG', 'CAS', 'EUS']) {
                const lines = firstBlock.content[lang].split('\n');
                let insertIdx = 0;
                // Find index after the first H1
                const h1Idx = lines.findIndex(l => l.trim().startsWith('# '));
                if (h1Idx !== -1) {
                    insertIdx = h1Idx + 1;
                }
                
                // Insert objectives
                lines.splice(insertIdx, 0, '\n' + objs[lang] + '\n');
                firstBlock.content[lang] = lines.join('\n');
            }
            
            fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
            console.log(`Updated ${file}`);
        } else {
            console.log(`No markdown block found in ${file}`);
        }
    } catch (e) {
        console.error(`Error processing ${file}:`, e);
    }
}
