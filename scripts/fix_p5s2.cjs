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
        if (content.cas_desc) json.blocks[idx].description.CAS = content.cas_desc;
        if (content.eus_desc) json.blocks[idx].description.EUS = content.eus_desc;
    }

    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
    console.log(`✅ Fixed ${relativePath}`);
}

const p5s2_6_cas_title = "Transponer una matriz";
const p5s2_6_eus_title = "Matrize bat irauli";
const p5s2_6_cas_desc = "Por favor escribe una función llamada `transpose(matrix: list)`, que tome un array bidimensional de enteros, es decir, una matriz, como su argumento. La función debe _transponer_ la matriz. Transponer significa esencialmente voltear la matriz sobre su diagonal: las columnas se convierten en filas, y las filas se convierten en columnas.\n\nPuedes asumir que la matriz es una matriz cuadrada, por lo que tendrá el mismo número de filas y columnas.\n\nLa siguiente matriz\n\n```python\n1 2 3\n4 5 6\n7 8 9\n```\n\ntranspuesta se ve así:\n\n```python\n1 4 7\n2 5 8\n3 6 9\n```\n\nLa función no debe tener un valor de retorno. La matriz debe modificarse directamente a través de la referencia.";
const p5s2_6_eus_desc = "Mesedez idatzi `transpose(matrix: list)` izeneko funtzio bat, bi dimentsioko osoko array bat, hau da, matrize bat, argumentu gisa hartzen duena. Funtzioak matrizea _irauli_ (transpose) behar du. Iraultzeak esan nahi du funtsean matrizea bere diagonalaren gainean biratzea: zutabeak ilara bihurtzen dira, eta ilarak zutabe bihurtzen dira.\n\nSuposa dezakezu matrizea matrize karratua dela, beraz ilara eta zutabe kopuru bera izango du.\n\nHurrengo matrizea\n\n```python\n1 2 3\n4 5 6\n7 8 9\n```\n\niraulita honelakoa da:\n\n```python\n1 4 7\n2 5 8\n3 6 9\n```\n\nFuntzioak ez du itzulera baliorik izan behar. Matrizea zuzenean aldatu behar da erreferentziaren bidez.";

const p5s2_7_cas = `## Efectos secundarios de las funciones

Si una función toma una referencia a una lista como argumento, podrá modificar esa lista. Si las modificaciones directas no fueron intencionadas por el programador, modificar accidentalmente la lista recibida como parámetro podría causar problemas en otras partes del programa.

Echemos un vistazo a una función que se supone que encuentra el segundo elemento más pequeño en una lista:

__BT____BT____BT__python
def second_smallest(my_list: list) -> int:
    # en una lista ordenada, el segundo elemento más pequeño está en el índice 1
    my_list.sort()
    return my_list[1]

numbers = [1, 4, 2, 5, 3, 6, 4, 7]
print(second_smallest(numbers))
print(numbers)
__BT____BT____BT__

<sample-output>
2
[1, 2, 3, 4, 4, 5, 6, 7]
</sample-output>

La función encuentra el segundo elemento más pequeño de manera fiable, pero adicionalmente ordena la lista en el lugar, cambiando el orden de los elementos. Si el orden es significativo en otras partes del programa, llamar a la función podría causar errores. Las modificaciones no intencionales a un objeto accedido a través de una referencia se llaman un _efecto secundario_ de una función.

Podemos evitar el efecto secundario haciendo un pequeño cambio en la función:

__BT____BT____BT__python
def second_smallest(my_list: list) -> int:
    list_copy = sorted(my_list)
    return list_copy[1]

numbers = [1, 4, 2, 5, 3, 6, 4, 7]
print(second_smallest(numbers))
print(numbers)
__BT____BT____BT__

<sample-output>

2
[1, 4, 2, 5, 3, 6, 4, 7]

</sample-output>

La función __BT__sorted__BT__ devuelve una nueva copia ordenada de la lista, por lo que buscar el segundo elemento más pequeño ya no altera el orden de la lista original.

Generalmente se considera una buena práctica de programación evitar causar efectos secundarios con funciones. Los efectos secundarios pueden hacer que sea más difícil verificar que el programa funcione como se pretende en todas las situaciones.

Las funciones libres de efectos secundarios también se llaman _funciones puras_. Especialmente cuando se adhiere a un paradigma de programación funcional, el objetivo es escribir funciones puras siempre que sea posible.`;

const p5s2_7_eus = `## Funtzioen efektu sekundarioak

Funtzio batek zerrenda baten erreferentzia hartzen badu argumentu gisa, zerrenda hori aldatu ahal izango du. Zuzeneko aldaketak programatzaileak nahi ez bazituen, parametro gisa jasotako zerrenda ustekabean aldatzeak arazoak sor ditzake programaren beste leku batzuetan.

Ikus dezagun zerrenda bateko bigarren elementu txikiena aurkitu behar duen funtzio bat:

__BT____BT____BT__python
def second_smallest(my_list: list) -> int:
    # zerrenda ordenatu batean, bigarren elementu txikiena 1 indizean dago
    my_list.sort()
    return my_list[1]

numbers = [1, 4, 2, 5, 3, 6, 4, 7]
print(second_smallest(numbers))
print(numbers)
__BT____BT____BT__

<sample-output>
2
[1, 2, 3, 4, 4, 5, 6, 7]
</sample-output>

Funtzioak bigarren elementu txikiena fidagarritasunez aurkitzen du, baina gainera zerrenda bertan ordenatzen du, elementuen ordena aldatuz. Ordena esanguratsua bada programaren beste leku batzuetan, funtzioari deitzeak erroreak sor ditzake. Erreferentzia baten bidez atzitutako objektu bati egindako nahi gabeko aldaketei funtzio baten _efektu sekundarioa_ deitzen zaie.

Efektu sekundarioa saihestu dezakegu funtzioan aldaketa txiki bat eginez:

__BT____BT____BT__python
def second_smallest(my_list: list) -> int:
    list_copy = sorted(my_list)
    return list_copy[1]

numbers = [1, 4, 2, 5, 3, 6, 4, 7]
print(second_smallest(numbers))
print(numbers)
__BT____BT____BT__

<sample-output>

2
[1, 4, 2, 5, 3, 6, 4, 7]

</sample-output>

__BT__sorted__BT__ funtzioak zerrendaren kopia ordenatu berri bat itzultzen du, beraz bigarren elementu txikiena bilatzeak ez du jada jatorrizko zerrendaren ordena nahasten.

Oro har, programazio praktika ontzat jotzen da funtzioekin efektu sekundarioak sortzea saihestea. Efektu sekundarioek zailagoa egin dezakete egiaztatzea programak egoera guztietan nahi bezala funtzionatzen duela.

Efektu sekundariorik gabeko funtzioei _funtzio puruak_ ere deitzen zaie. Batez ere programazio funtzionalaren paradigma jarraitzean, helburua funtzio puruak idaztea da ahal den guztietan.`;

fixFile('part5/section2.json', {
    "6": { cas_title: p5s2_6_cas_title, eus_title: p5s2_6_eus_title, cas_desc: p5s2_6_cas_desc, eus_desc: p5s2_6_eus_desc },
    "7": { cas: p5s2_7_cas, eus: p5s2_7_eus }
});

