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

const p6s2_7_cas = `## Manejo de datos en formato CSV

Escribamos un programa que evalúe el rendimiento de los estudiantes en un curso. El programa lee un archivo CSV, que contiene los puntos de ejercicios semanales recibidos por los estudiantes. El programa luego calcula el total de puntos y determina la calificación obtenida por cada estudiante. Finalmente, el programa crea un archivo CSV que contiene el total de puntos y la calificación para cada estudiante.

El archivo CSV dado como entrada al programa se ve así:

<sample-data>

Peter;4;2;3;5;4;0;0
Paula;7;2;8;3;5;4;5
Susan;3;4;3;5;3;4;4
Emily;6;6;5;5;0;4;8

</sample-data>

La lógica del programa se divide en tres funciones: leer el archivo y procesar el contenido en un formato accesible, determinar la calificación, y escribir el archivo.

El archivo se lee siguiendo los principios cubiertos en la sección anterior. Los datos se almacenan en un diccionario, donde la clave es el nombre del estudiante, y el valor es una lista de los puntos recibidos por el estudiante, en formato entero:

__BT____BT____BT__python
def read_weekly_points(filename):
    weekly_points = {}
    with open(filename) as my_file:
        for line in my_file:
            parts = line.split(";")
            point_list = []
            for points in parts[1:]:
                point_list.append(int(points))
            weekly_points[parts[0]] = point_list

    return weekly_points
__BT____BT____BT__

La segunda función es para determinar la calificación basada en los puntos recibidos. Esta función es a su vez usada por la tercera función, que escribe los resultados en el archivo.

__BT____BT____BT__python
def grade(points):
    if points < 20:
        return 0
    elif points < 25:
        return 1
    elif points < 30:
        return 2
    elif points < 35:
        return 3
    elif points < 40:
        return 4
    else:
        return 5

def save_results(filename, weekly_points):
    with open(filename, "w") as my_file:
        for name, point_list in weekly_points.items():
            point_sum = sum(point_list)
            gr = grade(point_sum)
            my_file.write(f"{name};{point_sum};{gr}\n")
__BT____BT____BT__`;

const p6s2_7_eus = `## Datuak kudeatzen CSV formatuan

Idatzi dezagun programa bat ikasleen errendimendua ebaluatzen duena ikastaro batean. Programak CSV fitxategi bat irakurtzen du, ikasleek jasotako asteko ariketa puntuak dituena. Programak ondoren puntu guztira kalkulatzen du eta ikasle bakoitzak lortutako kalifikazioa zehazten du. Azkenik, programak CSV fitxategi bat sortzen du ikasle bakoitzaren puntu guztira eta kalifikazioarekin.

Programari sarrera gisa emandako CSV fitxategiak honelako itxura du:

<sample-data>

Peter;4;2;3;5;4;0;0
Paula;7;2;8;3;5;4;5
Susan;3;4;3;5;3;4;4
Emily;6;6;5;5;0;4;8

</sample-data>

Programaren logika hiru funtziotan banatzen da: fitxategia irakurri eta edukia formatu irisgarri batean prozesatu, kalifikazioa zehaztu, eta fitxategia idatzi.

Fitxategia aurreko atalean landutako printzipioak jarraituz irakurtzen da. Datuak hiztegi batean gordetzen dira, non gakoa ikaslearen izena den, eta balioa ikasleak jasotako puntuen zerrenda bat den, formatu osoan:

__BT____BT____BT__python
def read_weekly_points(filename):
    weekly_points = {}
    with open(filename) as my_file:
        for line in my_file:
            parts = line.split(";")
            point_list = []
            for points in parts[1:]:
                point_list.append(int(points))
            weekly_points[parts[0]] = point_list

    return weekly_points
__BT____BT____BT__

Bigarren funtzioa jasotako puntuen araberako kalifikazioa zehazteko da. Funtzio hau, era berean, hirugarren funtzioak erabiltzen du, emaitzak fitxategian idazten dituena.

__BT____BT____BT__python
def grade(points):
    if points < 20:
        return 0
    elif points < 25:
        return 1
    elif points < 30:
        return 2
    elif points < 35:
        return 3
    elif points < 40:
        return 4
    else:
        return 5

def save_results(filename, weekly_points):
    with open(filename, "w") as my_file:
        for name, point_list in weekly_points.items():
            point_sum = sum(point_list)
            gr = grade(point_sum)
            my_file.write(f"{name};{point_sum};{gr}\n")
__BT____BT____BT__`;

const p6s2_8_cas_title = "Calificación del curso, parte 4";
const p6s2_8_eus_title = "Ikastaroaren kalifikazioa, 4. zatia";
const p6s2_8_cas_desc = "Retomemos el proyecto de calificación del curso de la sección anterior. El programa ahora debe crear dos archivos: `results.txt` con un reporte formateado y `results.csv` con los datos separados por punto y coma.";
const p6s2_8_eus_desc = "Itzul gaitezen aurreko ataleko ikastaroaren kalifikazio proiektura. Programak orain bi fitxategi sortu behar ditu: `results.txt` formateatutako txosten batekin eta `results.csv` puntu eta komaz banatutako datuekin.";

const p6s2_9_cas_title = "Búsqueda de palabras";
const p6s2_9_eus_title = "Hitz bilaketa";
const p6s2_9_cas_desc = "Por favor escribe una función llamada `find_words(search_term: str)`, que devuelva una lista con todas las palabras en el archivo que coincidan con el término de búsqueda. El término puede incluir comodines como `.` para un carácter cualquiera o `*` para el inicio/final de una palabra.";
const p6s2_9_eus_desc = "Mesedez idatzi `find_words(search_term: str)` izeneko funtzio bat, bilaketa-terminoarekin bat datozen fitxategiko hitz guztiak biltzen dituen zerrenda bat itzultzen duena. Terminoak komodinak izan ditzake, adibidez `.` edozein karakteretarako edo `*` hitz baten hasiera/amaierarako.";

const p6s2_10_cas_title = "Diccionario almacenado en un archivo";
const p6s2_10_eus_title = "Fitxategi batean gordetako hiztegia";
const p6s2_10_cas_desc = "Por favor escribe un programa que funcione como un diccionario. El usuario puede añadir nuevas entradas o buscar existentes. Las entradas deben guardarse en un archivo llamado `dictionary.txt`.";
const p6s2_10_eus_desc = "Mesedez idatzi hiztegi gisa funtzionatzen duen programa bat. Erabiltzaileak sarrera berriak gehitu ditzake edo lehendik daudenak bilatu. Sarrerak `dictionary.txt` izeneko fitxategi batean gorde behar dira.";

fixFile('part6/section2.json', {
    "7": { cas: p6s2_7_cas, eus: p6s2_7_eus },
    "8": { cas_title: p6s2_8_cas_title, eus_title: p6s2_8_eus_title, cas_desc: p6s2_8_cas_desc, eus_desc: p6s2_8_eus_desc },
    "9": { cas_title: p6s2_9_cas_title, eus_title: p6s2_9_eus_title, cas_desc: p6s2_9_cas_desc, eus_desc: p6s2_9_eus_desc },
    "10": { cas_title: p6s2_10_cas_title, eus_title: p6s2_10_eus_title, cas_desc: p6s2_10_cas_desc, eus_desc: p6s2_10_cas_desc }
});
