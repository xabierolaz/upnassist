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

const p5s1_2_cas = `## Listas dentro de listas

Los elementos en una lista pueden ser listas ellos mismos:

__BT____BT____BT__python
my_list = [[5, 2, 3], [4, 1], [2, 2, 5, 1]]
print(my_list)
print(my_list[1])
print(my_list[1][0])
__BT____BT____BT__
<sample-output>

[[5, 2, 3], [4, 1], [2, 2, 5, 1]]
[4, 1]
4

</sample-output>

¿Por qué serían útiles las listas dentro de listas?

Recuerda que las listas pueden contener elementos de diferentes tipos. Podrías almacenar información sobre una persona en una lista. Por ejemplo, podrías incluir su nombre como el primer elemento, su edad como el segundo elemento, y su altura en metros como el tercer elemento:

__BT____BT____BT__python
["Anne", 12, 1.45]
__BT____BT____BT__

Una base de datos de personas podría ser entonces una lista, cuyos elementos serían listas conteniendo información sobre una sola persona:

__BT____BT____BT__python
persons = [["Betty", 10, 1.37], ["Peter", 7, 1.25], ["Emily", 32, 1.64], ["Alan", 39, 1.78]]

for person in persons:
  name = person[0]
  age = person[1]
  height = person[2]
  print(f"{name}: age {age} years, height {height} meters")
__BT____BT____BT__

<sample-output>

Betty: age 10 years, height 1.37 meters
Peter: age 7 years, height 1.25 meters
Emily: age 32 years, height 1.64 meters
Alan: age 39 years, height 1.78 meters

</sample-output>

El bucle __BT__for__BT__ recorre los elementos en la lista exterior uno por uno. Es decir, cada lista que contiene información sobre una sola persona es, a su vez, asignada a la variable __BT__person__BT__.

Las listas no siempre son la mejor manera de presentar datos, como información sobre una persona. Pronto encontraremos los _diccionarios_ de Python, que a menudo son más adecuados para tales situaciones.

## Matrices

Un array bidimensional, o una _matriz_, es también una aplicación natural de una lista dentro de una lista.

Por ejemplo, la siguiente matriz

<img src="5_1_1.png">

podría presentarse como una lista bidimensional en Python así:

__BT____BT____BT__python
my_matrix = [[1, 2, 3], [3, 2, 1], [2, 2, 5]]
__BT____BT____BT__`;

const p5s1_2_eus = `## Zerrendak zerrenden barruan

Zerrenda bateko elementuak zerrendak izan daitezke beraiek ere:

__BT____BT____BT__python
my_list = [[5, 2, 3], [4, 1], [2, 2, 5, 1]]
print(my_list)
print(my_list[1])
print(my_list[1][0])
__BT____BT____BT__
<sample-output>

[[5, 2, 3], [4, 1], [2, 2, 5, 1]]
[4, 1]
4

</sample-output>

Zergatik izango lirateke erabilgarriak zerrendak zerrenden barruan?

Gogoratu zerrendek mota ezberdineko elementuak izan ditzaketela. Pertsona bati buruzko informazioa zerrenda batean gorde dezakezu. Adibidez, bere izena lehen elementu gisa sar zenezake, bere adina bigarren elementu gisa, eta bere altuera metrotan hirugarren elementu gisa:

__BT____BT____BT__python
["Anne", 12, 1.45]
__BT____BT____BT__

Pertsonen datu-base bat zerrenda bat izan daiteke orduan, non elementuak pertsona bakar bati buruzko informazioa duten zerrendak diren:

__BT____BT____BT__python
persons = [["Betty", 10, 1.37], ["Peter", 7, 1.25], ["Emily", 32, 1.64], ["Alan", 39, 1.78]]

for person in persons:
  name = person[0]
  age = person[1]
  height = person[2]
  print(f"{name}: age {age} years, height {height} meters")
__BT____BT____BT__

<sample-output>

Betty: age 10 years, height 1.37 meters
Peter: age 7 years, height 1.25 meters
Emily: age 32 years, height 1.64 meters
Alan: age 39 years, height 1.78 meters

</sample-output>

__BT__for__BT__ begizta kanpoko zerrendako elementuetan zehar mugitzen da banan-banan. Hau da, pertsona bakar bati buruzko informazioa duen zerrenda bakoitza, txandaka, __BT__person__BT__ aldagaiari esleitzen zaio.

Zerrendak ez dira beti datuak aurkezteko modurik onena, pertsona bati buruzko informazioa adibidez. Laster Python _hiztegiak_ topatuko ditugu, askotan horrelako egoeretarako egokiagoak direnak.

## Matrizeak

Bi dimentsioko array bat, edo _matrize_ bat, zerrenda baten barruko zerrenda baten aplikazio naturala ere bada.

Adibidez, hurrengo matrizea

<img src="5_1_1.png">

honela aurkez daiteke bi dimentsioko zerrenda gisa Python-en:

__BT____BT____BT__python
my_matrix = [[1, 2, 3], [3, 2, 1], [2, 2, 5]]
__BT____BT____BT__`;

const p5s1_4_cas = `## Un array bidimensional como estructura de datos en un juego

Una matriz puede ser una estructura de datos muy útil en muchos juegos diferentes. Por ejemplo, la cuadrícula de un juego de sudoku en la imagen de abajo

<img src="5_1_3.png">

se puede representar en forma de matriz así:

__BT____BT____BT__python
sudoku = [
  [9, 0, 0, 0, 8, 0, 3, 0, 0],
  [0, 0, 0, 2, 5, 0, 7, 0, 0],
  [0, 2, 0, 3, 0, 0, 0, 0, 4],
  [0, 9, 4, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 7, 3, 0, 5, 6, 0],
  [7, 0, 5, 0, 6, 0, 4, 0, 0],
  [0, 0, 7, 8, 0, 3, 9, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 3],
  [3, 0, 0, 0, 0, 0, 0, 0, 2]
]
__BT____BT____BT__

Aquí el valor cero representa un cuadrado vacío, ya que el cero no es un valor aceptable en un puzzle de sudoku terminado.

Aquí hay una función simple para imprimir la cuadrícula de sudoku anterior:

__BT____BT____BT__python
def print_grid(sudoku):
    for row in sudoku:
        for square in row:
            if square > 0:
                print(f" {square}", end="")
            else:
                print(" _", end="")
        print()

print_grid(sudoku)
__BT____BT____BT__

Cualquier juego común con un diseño de tablero se puede modelar de manera similar. Entre otros, ajedrez, Buscaminas, Hundir la flota o Mastermind se basan todos en una cuadrícula bidimensional. Para sudoku, es natural usar números para representar el estado del juego, pero para otros juegos, diferentes métodos pueden ser mejores.`;

const p5s1_4_eus = `## Bi dimentsioko array bat joko bateko datu-egitura gisa

Matrize bat datu-egitura oso erabilgarria izan daiteke joko ezberdin askotan. Adibidez, beheko irudiko sudoku joko baten sareta

<img src="5_1_3.png">

matrize moduan irudika daiteke honela:

__BT____BT____BT__python
sudoku = [
  [9, 0, 0, 0, 8, 0, 3, 0, 0],
  [0, 0, 0, 2, 5, 0, 7, 0, 0],
  [0, 2, 0, 3, 0, 0, 0, 0, 4],
  [0, 9, 4, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 7, 3, 0, 5, 6, 0],
  [7, 0, 5, 0, 6, 0, 4, 0, 0],
  [0, 0, 7, 8, 0, 3, 9, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 3],
  [3, 0, 0, 0, 0, 0, 0, 0, 2]
]
__BT____BT____BT__

Hemen zero balioak karratu huts bat adierazten du, zero ez baita onargarria den balio bat amaitutako sudoku puzzle batean.

Hemen goiko sudoku sareta inprimatzeko funtzio sinple bat:

__BT____BT____BT__python
def print_grid(sudoku):
    for row in sudoku:
        for square in row:
            if square > 0:
                print(f" {square}", end="")
            else:
                print(" _", end="")
        print()

print_grid(sudoku)
__BT____BT____BT__

Joko-taula diseinua duen edozein joko arrunt antzeko moduan modelatu daiteke. Besteak beste, xakea, Dragoi-meatzea, Ontzi-urperatzea edo Mastermind guztiak bi dimentsioko sareta batean oinarritzen dira. Sudokurako, naturala da zenbakiak erabiltzea jokoaren egoera irudikatzeko, baina beste jokoetarako, metodo ezberdinak hobeak izan daitezke.`;

fixFile('part5/section1.json', {
    "2": { cas: p5s1_2_cas, eus: p5s1_2_eus },
    "4": { cas: p5s1_4_cas, eus: p5s1_4_eus }
});
