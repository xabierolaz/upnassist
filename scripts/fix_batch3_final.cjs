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

const p5s1_0_cas = `<text-box variant='learningObjectives' name="Objetivos de aprendizaje">

Después de esta sección

- Podrás crear listas con diferentes tipos de elementos
- Sabrás cómo usar listas para organizar datos
- Podrás almacenar una matriz como una lista bidimensional

</text-box>

<!--the same text is in sections 3-1, 5-1 and 6-1, check them all if you're changing this-->
<text-box variant='hint' name="Acerca de los ejercicios de este curso">

Convertirse en un programador competente requiere mucha práctica, a veces incluso una práctica bastante mecánica. También implica desarrollar habilidades de resolución de problemas y aplicar la intuición. Es por esto que hay muchos ejercicios de diferentes tipos en este curso. Algunos de ellos te piden aplicar de manera bastante directa lo que has aprendido en el material, pero algunos de ellos son intencionalmente más desafiantes y abiertos.

Algunos de los ejercicios pueden parecer abrumadores al principio, pero esto no es nada de qué preocuparse. Ninguno de los ejercicios es estrictamente obligatorio y, de hecho, _solo se requiere el 25 % de los puntos de cada parte para aprobar el curso._ Puedes encontrar más detalles sobre la aprobación del curso en la [página sobre calificación](/grading-and-exams).

**Los ejercicios no están en ningún orden específico de dificultad.** Cada sección suele introducir algunos conceptos nuevos de programación, y estos se practican luego con ejercicios tanto más simples como más complicados. **Si te encuentras con un ejercicio que te parece demasiado difícil, pasa al siguiente.** Siempre puedes volver a los ejercicios más difíciles si tienes tiempo más tarde.

Cuando las cosas inevitablemente se pongan difíciles, una palabra de consuelo: una tarea que parece imposiblemente difícil esta semana probablemente se sentirá bastante fácil en unas cuatro semanas.

</text-box>

## Listas con diferentes tipos de datos

En la parte anterior manejamos principalmente listas con elementos enteros, pero cualquier tipo de valor se puede almacenar en listas. Una lista de cadenas podría verse así:

__BT____BT____BT__python
my_list = ["Hola", "allí", "amigo"]
print(my_list[2])
__BT____BT____BT__

<sample-output>

amigo

</sample-output>

La función __BT__len__BT__ también funciona en listas que contienen otros valores:

__BT____BT____BT__python
my_list = ["Hola", "allí", "amigo"]
print(len(my_list))
__BT____BT____BT__

<sample-output>

3

</sample-output>

Los tipos de elementos en la lista también pueden variar. La misma lista podría contener enteros, cadenas y números de punto flotante:

__BT____BT____BT__python
my_list = [1, "Hola", 3.14]
__BT____BT____BT__

Normalmente esto no tiene mucho sentido, sin embargo. Es más probable que el programa se rompa si se espera que los elementos de una lista sean de un cierto tipo de datos y no lo son.`;

const p5s1_0_eus = `<text-box variant='learningObjectives' name="Helburuak">

Atal honen ondoren

- Elementu mota ezberdinekin zerrendak sortu ahal izango dituzu
- Datuak antolatzeko zerrendak nola erabili jakingo duzu
- Matrize bat bi dimentsioko zerrenda gisa gorde ahal izango duzu

</text-box>

<!--the same text is in sections 3-1, 5-1 and 6-1, check them all if you're changing this-->
<text-box variant='hint' name="Ikastaro honetako ariketei buruz">

Programatzaile trebea bihurtzeak praktika asko eskatzen du, batzuetan praktika mekaniko samarra ere bai. Arazoak konpontzeko gaitasunak garatzea eta intuizioa aplikatzea ere eskatzen du. Horregatik daude mota askotako ariketak ikastaro honetan. Horietako batzuek materialean ikasitakoa nahiko modu zuzenean aplikatzeko eskatzen dizute, baina horietako batzuk nahita erronka handiagoak eta irekiagoak dira.

Ariketa batzuk hasieran beldurgarriak eman dezakete, baina hori ez da kezkatu beharreko zerbait. Ariketetako bat ere ez da hertsiki derrigorrezkoa, eta, egiaz, _zati bakoitzeko puntuen % 25 baino ez da beharrezkoa ikastaroa gainditzeko._ Ikastaroa gainditzeari buruzko xehetasun gehiago aurki ditzakezu [kalifikazioari buruzko orrian](/grading-and-exams).

**Ariketak ez daude zailtasun-ordena espezifiko batean.** Atal bakoitzak programazio-kontzeptu berri batzuk sartu ohi ditu, eta hauek ariketa sinpleagoekin zein konplikatuagoekin lantzen dira. **Zailagoa iruditzen zaizun ariketa batekin topo egiten baduzu, joan hurrengora.** Beti itzul zaitezke ariketa zailagoetara geroago denbora baduzu.

Gauzak nahitaez gogortzen direnean, kontsolamendu-hitz bat: aste honetan ezinezkoa dirudien zeregin bat ziurrenik nahiko erraza irudituko zaizu lau aste barru.

</text-box>

## Datu mota ezberdineko zerrendak

Aurreko zatian batez ere osoko elementuak zituzten zerrendak kudeatu genituen, baina edozein balio mota gorde daiteke zerrendetan. Kate zerrenda bat honelakoa izan daiteke:

__BT____BT____BT__python
my_list = ["Kaixo", "han", "laguna"]
print(my_list[2])
__BT____BT____BT__

<sample-output>

laguna

</sample-output>

__BT__len__BT__ funtzioak beste balio batzuk dituzten zerrendetan ere funtzionatzen du:

__BT____BT____BT__python
my_list = ["Kaixo", "han", "laguna"]
print(len(my_list))
__BT____BT____BT__

<sample-output>

3

</sample-output>

Zerrendako elementu motak ere alda daitezke. Zerrenda berak osoko zenbakiak, kateak eta koma mugikorreko zenbakiak izan ditzake:

__BT____BT____BT__python
my_list = [1, "Kaixo", 3.14]
__BT____BT____BT__

Normalean honek ez du zentzu handirik, ordea. Litekeena da programa apurtzea zerrenda bateko elementuak datu mota jakin batekoak izatea espero bada eta ez badira.`;

fixFile('part5/section1.json', {
    "0": { cas: p5s1_0_cas, eus: p5s1_0_eus }
});
