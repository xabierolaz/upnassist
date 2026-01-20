const fs = require('fs');
const path = require('path');

function fixFile(relativePath, patches) {
    const filePath = path.resolve(__dirname, '../src/data', relativePath);
    if (!fs.existsSync(filePath)) return;
    let json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    for (const [index, content] of Object.entries(patches)) {
        const idx = parseInt(index);
        if (!json.blocks[idx]) continue;
        if (content.cas) json.blocks[idx].content.CAS = content.cas.replace(/__BT__/g, '`');
        if (content.eus) json.blocks[idx].content.EUS = content.eus.replace(/__BT__/g, '`');
        if (content.cas_title) {
            json.blocks[idx].title = json.blocks[idx].title || {};
            json.blocks[idx].title.CAS = content.cas_title;
        }
        if (content.eus_title) {
            json.blocks[idx].title = json.blocks[idx].title || {};
            json.blocks[idx].title.EUS = content.eus_title;
        }
        if (content.cas_desc) {
            json.blocks[idx].description = json.blocks[idx].description || {};
            json.blocks[idx].description.CAS = content.cas_desc.replace(/__BT__/g, '`');
        }
        if (content.eus_desc) {
            json.blocks[idx].description = json.blocks[idx].description || {};
            json.blocks[idx].description.EUS = content.eus_desc.replace(/__BT__/g, '`');
        }
    }

    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
    console.log(`✅ Fixed ${relativePath}`);
}

// Part 5 Section 3 missing blocks
const p5s3_7_cas = `## Eliminando claves y valores de un diccionario

Es naturalmente posible eliminar pares clave-valor del diccionario también. Hay dos formas de lograr esto. La primera es el comando __BT__del__BT__:

__BT____BT____BT__python
staff = {"Alan": "lecturer", "Emily": "professor", "David": "lecturer"}
del staff["David"]
print(staff)
__BT____BT____BT__

<sample-output>

{'Alan': 'lecturer', 'Emily': 'professor'}

</sample-output>

Si intentas usar el comando __BT__del__BT__ para borrar una clave que no existe en el diccionario, habrá un error:

__BT____BT____BT__python
staff = {"Alan": "lecturer", "Emily": "professor", "David": "lecturer"}
del staff["Paul"]
__BT____BT____BT__

<sample-output>

<pre>
>>> del staff["Paul"]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'Paul'
</pre>

</sample-output>

Así que, antes de borrar una clave deberías verificar si está presente en el diccionario:

__BT____BT____BT__python
staff = {"Alan": "lecturer", "Emily": "professor", "David": "lecturer"}
if "Paul" in staff:
  del staff["Paul"]
  print("Borrado")
else:
  print("Esta persona no es miembro del personal")
__BT____BT____BT__

La otra forma de borrar entradas en un diccionario es el método __BT__pop__BT__:

__BT____BT____BT__python
staff = {"Alan": "lecturer", "Emily": "professor", "David": "lecturer"}
deleted = staff.pop("David")
print(staff)
print(deleted, "borrado")
__BT____BT____BT__

<sample-output>

{'Alan': 'lecturer', 'Emily': 'professor'}
lecturer borrado

</sample-output>

Como puedes ver arriba, __BT__pop__BT__ también devuelve el valor de la entrada borrada.`;

const p5s3_7_eus = `## Gakoak eta balioak hiztegi batetik kentzen

Noski posible da gako-balio bikoteak hiztegitik kentzea ere. Hau lortzeko bi modu daude. Lehenengoa __BT__del__BT__ komandoa da:

__BT____BT____BT__python
staff = {"Alan": "lecturer", "Emily": "professor", "David": "lecturer"}
del staff["David"]
print(staff)
__BT____BT____BT__

<sample-output>

{'Alan': 'lecturer', 'Emily': 'professor'}

</sample-output>

__BT__del__BT__ komandoa erabiltzen saiatzen bazara hiztegian existitzen ez den gako bat ezabatzeko, errore bat egongo da:

__BT____BT____BT__python
staff = {"Alan": "lecturer", "Emily": "professor", "David": "lecturer"}
del staff["Paul"]
__BT____BT____BT__

<sample-output>

<pre>
>>> del staff["Paul"]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'Paul'
</pre>

</sample-output>

Beraz, gako bat ezabatu aurretik hiztegian dagoen egiaztatu beharko zenuke:

__BT____BT____BT__python
staff = {"Alan": "lecturer", "Emily": "professor", "David": "lecturer"}
if "Paul" in staff:
  del staff["Paul"]
  print("Ezabatua")
else:
  print("Pertsona hau ez da langilea")
__BT____BT____BT__

Hiztegi batean sarrerak ezabatzeko beste modua __BT__pop__BT__ metodoa da:

__BT____BT____BT__python
staff = {"Alan": "lecturer", "Emily": "professor", "David": "lecturer"}
deleted = staff.pop("David")
print(staff)
print(deleted, "ezabatua")
__BT____BT____BT__

<sample-output>

{'Alan': 'lecturer', 'Emily': 'professor'}
lecturer ezabatua

</sample-output>

Goian ikus dezakezun bezala, __BT__pop__BT__-ek ezabatutako sarreraren balioa ere itzultzen du.`;

const p5s3_10_cas = `## Usando diccionarios para datos estructurados

Los diccionarios son muy útiles para estructurar datos. El siguiente código creará un diccionario que contiene algunos datos personales:

__BT____BT____BT__python
person = {"name": "Pippa Python", "height": 154, "weight": 61, "age": 44}
__BT____BT____BT__

Esto significa que tenemos aquí a una persona llamada Pippa Python, cuya altura es 154, peso 61, y edad 44. La misma información podría almacenarse igual de bien en variables:

__BT____BT____BT__python
name = "Pippa Python"
height = 154
weight = 61
age = 44
__BT____BT____BT__

La ventaja de un diccionario es que es una colección. Recoge datos relacionados bajo una variable, por lo que es fácil acceder a los diferentes componentes. Esta misma ventaja la ofrece una lista:

__BT____BT____BT__python
person = ["Pippa Python", 153, 61, 44]
__BT____BT____BT__

Con listas, el programador tendrá que recordar qué se almacena en cada índice en la lista. No hay nada que indique que __BT__person[2]__BT__ contiene el peso y __BT__person[3]__BT__ la edad de la persona. Al usar un diccionario se evita este problema, ya que cada dato se accede a través de una clave nombrada.`;

const p5s3_10_eus = `## Hiztegiak erabiltzen datu egituratuetarako

Hiztegiak oso erabilgarriak dira datuak egituratzeko. Hurrengo kodeak datu pertsonal batzuk dituen hiztegi bat sortuko du:

__BT____BT____BT__python
person = {"name": "Pippa Python", "height": 154, "weight": 61, "age": 44}
__BT____BT____BT__

Honek esan nahi du hemen Pippa Python izeneko pertsona bat dugula, 154ko altuerarekin, 61eko pisuarekin, eta 44ko adinarekin. Informazio bera aldagaietan gorde liteke:

__BT____BT____BT__python
name = "Pippa Python"
height = 154
weight = 61
age = 44
__BT____BT____BT__

Hiztegi baten abantaila bilduma bat dela da. Erlazionatutako datuak aldagai baten azpian biltzen ditu, beraz erraza da osagai ezberdinetara sartzea. Abantaila bera zerrenda batek eskaintzen du:

__BT____BT____BT__python
person = ["Pippa Python", 153, 61, 44]
__BT____BT____BT__

Zerrendekin, programatzaileak gogoratu beharko du zer gordetzen den zerrendako indize bakoitzean. Ez dago ezer adierazten duena __BT__person[2]__BT__-k pisua duela eta __BT__person[3]__BT__-k pertsonaren adina. Hiztegi bat erabiltzean arazo hau saihesten da, datu bakoitza izendatutako gako baten bidez atzitzen baita.`;

// Part 6 Section 1 missing titles
const p6s1_9_cas_title = "Corrector ortográfico";
const p6s1_9_eus_title = "Ortografia zuzentzailea";
const p6s1_10_cas_title = "Búsqueda de recetas";
const p6s1_10_eus_title = "Errezeta bilaketa";
const p6s1_11_cas_title = "Bicicletas de ciudad";
const p6s1_11_eus_title = "Hiri bizikletak";

fixFile('part5/section3.json', {
    "7": { cas: p5s3_7_cas, eus: p5s3_7_eus },
    "10": { cas: p5s3_10_cas, eus: p5s3_10_eus }
});

fixFile('part6/section1.json', {
    "9": { cas_title: p6s1_9_cas_title, eus_title: p6s1_9_eus_title },
    "10": { cas_title: p6s1_10_cas_title, eus_title: p6s1_10_eus_title },
    "11": { cas_title: p6s1_11_cas_title, eus_title: p6s1_11_eus_title }
});
