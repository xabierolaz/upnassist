const fs = require('fs');
const path = require('path');

function fixFile(relativePath, patches) {
    const filePath = path.resolve(__dirname, '../src/data', relativePath);
    let json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    for (const [index, content] of Object.entries(patches)) {
        const idx = parseInt(index);
        if (content.cas) json.blocks[idx].content.CAS = content.cas.replace(/__BT__/g, '`');
        if (content.eus) json.blocks[idx].content.EUS = content.eus.replace(/__BT__/g, '`');
    }

    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
    console.log(`✅ Fixed ${relativePath}`);
}

const p6s3_2_cas = `## Errores típicos

Aquí hay una selección de errores típicos con los que probablemente te encontrarás, junto con algunas situaciones donde pueden ocurrir.

**ValueError**

Este error a menudo se lanza cuando el argumento pasado a una función es de alguna manera inválido. Por ejemplo, la llamada a función __BT__float("1,23")__BT__ causa un error, porque los decimales siempre se separan por un punto en Python, y aquí tenemos una coma.

**TypeError**

Este error ocurre cuando un valor es del tipo incorrecto. Por ejemplo, la llamada a función __BT__len(10)__BT__ causa un __BT__TypeError__BT__, porque la función __BT__len__BT__ requiere un valor cuya longitud se pueda calcular, como una cadena o una lista.

**IndexError**

Este error común ocurre cuando se intenta referir a un índice que no existe. Por ejemplo, la expresión __BT__"abc"[5]__BT__ causa un __BT__IndexError__BT__, porque la cadena en cuestión no tiene índice 5.

**ZeroDivisionError**

Como su nombre implica, este error se lanza cuando se intenta dividir por cero, lo cual sabemos por matemáticas que siempre es una mala idea. Por ejemplo, si intentamos determinar la media aritmética de valores en una lista con la fórmula __BT__sum(my_list) / len(my_list)__BT__, pero nuestra lista tiene longitud cero, ocurrirá este error.

**Excepciones en el manejo de archivos**

Algunos errores comunes al trabajar con archivos son **FileNotFoundError** (al intentar acceder a un archivo que no existe), **io.UnsupportedOperation** (al intentar realizar una operación en un archivo que no es soportada por el modo en que se abrió el archivo) o **PermissionError** (el programa carece de los permisos necesarios para acceder al archivo).

## Manejando múltiples excepciones a la vez

Puede haber más de un bloque __BT__except__BT__ adjunto a cada bloque __BT__try__BT__. Por ejemplo, el siguiente programa puede manejar tanto una __BT__FileNotFoundException__BT__ como un __BT__PermissionError__BT__:

__BT____BT____BT__python
try:
    with open("example.txt") as my_file:
        for line in my_file:
            print(line)
except FileNotFoundError:
    print("El archivo no existe")
except PermissionError:
    print("No tienes permiso para leer el archivo")
__BT____BT____BT__`;

const p6s3_2_eus = `## Errore tipikoak

Hemen topatuko dituzun errore tipikoen hautaketa bat duzu, gerta daitezkeen egoera batzuekin batera.

**ValueError**

Errore hau askotan funtzio bati pasatako argumentua nolabait baliogabea denean jaurtitzen da. Adibidez, __BT__float("1,23")__BT__ funtzio deia errore bat da, hamartarrak beti puntu batez banatzen direlako Python-en, eta hemen koma bat dugu.

**TypeError**

Errore hau balio bat mota okerrekoa denean gertatzen da. Adibidez, __BT__len(10)__BT__ funtzio deia __BT__TypeError__BT__ bat eragiten du, __BT__len__BT__ funtzioak luzera kalkulatu daitekeen balio bat behar duelako, kate edo zerrenda bat bezala.

**IndexError**

Errore arrunt hau existitzen ez den indize bati erreferentzia egiten saiatzean gertatzen da. Adibidez, __BT__"abc"[5]__BT__ adierazpenak __BT__IndexError__BT__ bat eragiten du, kasuan kasuko kateak ez duelako 5 indizerik.

**ZeroDivisionError**

Izenak dioen bezala, errore hau zeroz zatitzen saiatzean jaurtitzen da, matematikatik badakigu ideia txarra dela beti. Adibidez, zerrenda bateko balioen batezbesteko aritmetikoa zehazten saiatzen bagara __BT__sum(my_list) / len(my_list)__BT__ formularekin, baina gure zerrendak zero luzera badu, errore hau gertatuko da.

**Fitxategi kudeaketan salbuespenak**

Fitxategiekin lan egitean ohiko errore batzuk **FileNotFoundError** (existitzen ez den fitxategi bat atzitzen saiatzean), **io.UnsupportedOperation** (fitxategia ireki den moduak onartzen ez duen eragiketa bat egiten saiatzean) edo **PermissionError** (programak ez du fitxategia atzitzeko beharrezko baimenik) dira.

## Salbuespen anitz aldi berean kudeatzen

__BT__except__BT__ bloke bat baino gehiago egon daiteke __BT__try__BT__ bloke bakoitzari lotuta. Adibidez, hurrengo programak __BT__FileNotFoundException__BT__ eta __BT__PermissionError__BT__ biak kudeatu ditzake:

__BT____BT____BT__python
try:
    with open("example.txt") as my_file:
        for line in my_file:
            print(line)
except FileNotFoundError:
    print("Fitxategia ez da existitzen")
except PermissionError:
    print("Ez duzu fitxategia irakurtzeko baimenik")
__BT____BT____BT__`;

fixFile('part6/section3.json', {
    "2": { cas: p6s3_2_cas, eus: p6s3_2_eus }
});
