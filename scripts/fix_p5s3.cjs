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

const p5s3_6_cas_title = "Agenda telefónica, versión 2";
const p5s3_6_eus_title = "Telefono agenda, 2. bertsioa";
const p5s3_6_cas_desc = "Por favor escribe una versión mejorada de la aplicación de agenda telefónica. Cada entrada ahora debe acomodar múltiples números de teléfono. La aplicación debe funcionar exactamente igual que antes, pero esta vez se deben imprimir _todos_ los números adjuntos a un nombre.";
const p5s3_6_eus_desc = "Mesedez idatzi telefono agenda aplikazioaren bertsio hobetu bat. Sarrera bakoitzak orain hainbat telefono zenbaki onartu behar ditu. Aplikazioak lehen bezala funtzionatu behar du, baina oraingoan izen bati lotutako zenbaki _guztiak_ inprimatu behar dira.";

const p5s3_8_cas_title = "Invertir un diccionario";
const p5s3_8_eus_title = "Hiztegi bat alderantzikatu";
const p5s3_8_cas_desc = "Por favor escribe una función llamada `invert(dictionary: dict)`, que tome un diccionario como su argumento. El diccionario debe ser invertido en el lugar para que los valores se conviertan en claves y las claves se conviertan en valores.";
const p5s3_8_eus_desc = "Mesedez idatzi `invert(dictionary: dict)` izeneko funtzio bat, hiztegi bat argumentu gisa hartzen duena. Hiztegia bertan alderantzikatu behar da, balioak gako bihur daitezen eta gakoak balio.";

const p5s3_9_cas_title = "Números deletreados";
const p5s3_9_eus_title = "Zenbakiak letraz";
const p5s3_9_cas_desc = "Por favor escribe una función llamada `dict_of_numbers()`, que devuelva un nuevo diccionario. El diccionario debe tener los números del 0 al 99 como sus claves. El valor asignado a cada clave debe ser el número deletreado en palabras.";
const p5s3_9_eus_desc = "Mesedez idatzi `dict_of_numbers()` izeneko funtzio bat, hiztegi berri bat sortzen duena. Hiztegiak 0tik 99ra bitarteko zenbakiak izan behar ditu gako gisa. Gako bakoitzari esleitutako balioa zenbakia letraz idatzita izan behar da.";

const p5s3_11_cas_title = "Base de datos de películas";
const p5s3_11_eus_title = "Filme datu-basea";
const p5s3_11_cas_desc = "Por favor escribe una función llamada `add_movie(database: list, name: str, director: str, year: int, runtime: int)`, que añada un nuevo objeto película a una base de datos de películas. La base de datos es una lista, y cada objeto película en la lista es un diccionario.";
const p5s3_11_eus_desc = "Mesedez idatzi `add_movie(database: list, name: str, director: str, year: int, runtime: int)` izeneko funtzio bat, film objektu berri bat gehitzen duena film datu-base batera. Datu-basea zerrenda bat da, eta zerrendako film objektu bakoitza hiztegi bat.";

const p5s3_12_cas_title = "Encontrar películas";
const p5s3_12_eus_title = "Filmak aurkitu";
const p5s3_12_cas_desc = "Por favor escribe una función llamada `find_movies(database: list, search_term: str)`, que procese la base de datos de películas creada en el ejercicio anterior. La función debe formular una nueva lista, que contenga solo las películas cuyo título incluya el término buscado. La capitalización es irrelevante aquí.";
const p5s3_12_eus_desc = "Mesedez idatzi `find_movies(database: list, search_term: str)` izeneko funtzio bat, aurreko ariketan sortutako film datu-basea prozesatzen duena. Funtzioak zerrenda berri bat osatu behar du, bilatutako terminoa tituluan duten filmak soilik dituena. Letra larriak eta xeheak ez dira garrantzitsuak hemen.";

const p5s3_13_cas = "En este punto del curso, puedes elegir participar en un estudio de investigación relacionado con el aprendizaje de la programación. La participación es voluntaria y los participantes individuales no pueden ser identificados a partir de los datos recopilados en el estudio. Puedes abandonar libremente el experimento en cualquier momento. [Haz clic aquí para comenzar el estudio!](https://runestone.academy/ns/books/published/p3pt/index.html)";
const p5s3_13_eus = "Ikastaroaren puntu honetan, programazioaren ikaskuntzarekin lotutako ikerketa azterketa batean parte hartzea aukera dezakezu. Parte hartzea borondatezkoa da eta parte-hartzaile indibidualak ezin dira identifikatu azterketan bildutako datuetatik. Esperimentua libreki utzi dezakezu edozein unetan. [Egin klik hemen azterketa hasteko!](https://runestone.academy/ns/books/published/p3pt/index.html)";

fixFile('part5/section3.json', {
    "6": { cas_title: p5s3_6_cas_title, eus_title: p5s3_6_eus_title, cas_desc: p5s3_6_cas_desc, eus_desc: p5s3_6_eus_desc },
    "8": { cas_title: p5s3_8_cas_title, eus_title: p5s3_8_eus_title, cas_desc: p5s3_8_cas_desc, eus_desc: p5s3_8_eus_desc },
    "9": { cas_title: p5s3_9_cas_title, eus_title: p5s3_9_eus_title, cas_desc: p5s3_9_cas_desc, eus_desc: p5s3_9_eus_desc },
    "11": { cas_title: p5s3_11_cas_title, eus_title: p5s3_11_eus_title, cas_desc: p5s3_11_cas_desc, eus_desc: p5s3_11_eus_desc },
    "12": { cas_title: p5s3_12_cas_title, eus_title: p5s3_12_eus_title, cas_desc: p5s3_12_cas_desc, eus_desc: p5s3_12_eus_desc },
    "13": { cas: p5s3_13_cas, eus: p5s3_13_eus }
});
