import { CoursePage } from '../mooc-exercises';

export const section1: CoursePage = {
  id: "part3-1",
  title: {
    ENG: "Loops with conditions",
    CAS: "Bucles con condiciones",
    EUS: "Baldintzadun begiztak"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Loops with conditions

## After this section:

- You will know how to create a while loop with a condition
- You will know what roles initialisation, formulating a condition and updating variables perform in a loop
- You will be able to create loops with different kinds of conditions

In the previous section we learnt to use the 
while True
 loop to repeat sections of code. In that construction the condition of the loop is 
True
, so the condition is fulfilled every time. We needed to explicitly break out from the loop each time to avoid an infinite loop.

Of course, the condition doesn't always have to be 
True
, but instead any Boolean expression can be used as the condition. The general structure of the 
while
 statement is as follows:


while <condition>:
    <block>


In the following loop we have the condition 
number < 10
. The block within the loop is executed only if the variable number is less than 10.


number = int(input("Please type in a number: "))

while number < 10:
    print(number)
    number += 1

print("Execution finished.")


## Initialisation, condition and update

To create a loop you'll often need to include three distinct steps: initialisation, condition, and updating the iteration variables.

1.  **Initialisation**: Setting the initial value(s) of the variable(s) used within the condition of the loop.
2.  **Condition**: Defines for how long the loop is to be executed.
3.  **Update**: Within each repetition of the loop the variables involved in the condition are updated.

If any one of these three components is missing, the loop will likely not function correctly. A typical error is omitting the update step:


number = 1

while number < 10:
    print(number)
    # Missing update! Infinite loop!


`,
        CAS: `
# Bucles con condiciones

## Después de esta sección:

- Sabrás cómo crear un bucle while con una condición
- Sabrás qué roles juegan la inicialización, formulación de una condición y actualización de variables en un bucle
- Podrás crear bucles con diferentes tipos de condiciones

En la sección anterior aprendimos a usar el bucle 
while True
 para repetir secciones de código. En esa construcción la condición del bucle es 
True
, por lo que la condición se cumple siempre. Necesitábamos salir explícitamente del bucle cada vez para evitar un bucle infinito.

Por supuesto, la condición no siempre tiene que ser 
True
; cualquier expresión booleana puede usarse como condición. La estructura general de la sentencia 
while
 es la siguiente:


while <condición>:
    <bloque>


En el siguiente bucle tenemos la condición 
number < 10
. El bloque dentro del bucle se ejecuta solo si la variable número es menor que 10.


number = int(input("Por favor escribe un número: "))

while number < 10:
    print(number)
    number += 1

print("Ejecución terminada.")


## Inicialización, condición y actualización

Para crear un bucle a menudo necesitarás incluir tres pasos distintos: inicialización, condición y actualización de las variables de iteración.

1.  **Inicialización**: Establecer el valor o valores iniciales de la(s) variable(s) usadas dentro de la condición del bucle.
2.  **Condición**: Define por cuánto tiempo se ejecutará el bucle.
3.  **Actualización**: Dentro de cada repetición del bucle, las variables involucradas en la condición se actualizan.

Si falta alguno de estos tres componentes, es probable que el bucle no funcione correctamente. Un error típico es omitir el paso de actualización:


number = 1

while number < 10:
    print(number)
    # ¡Falta actualización! ¡Bucle infinito!


`,
        EUS: `
# Baldintzadun begiztak

## Atal honen ondoren:

- 
while
 begizta bat baldintza batekin nola sortu jakingo duzu
- Hasieratzeak, baldintza bat formulatzeak eta aldagaiak eguneratzeak begizta batean betetzen dituzten eginkizunak ezagutuko dituzu
- Mota ezberdinetako baldintzak dituzten begiztak sortzeko gai izango zara

Aurreko atalean 
while True
 begizta erabiltzen ikasi genuen kode zatiak errepikatzeko. Eraikuntza horretan begiztaren baldintza 
True
 da; beraz, baldintza beti betetzen da. Begiztatik esplizituki irten behar genuen aldi bakoitzean begizta infinitu bat saihesteko.

Noski, baldintzak ez du beti 
True
 izan behar; horren ordez, edozein adierazpen boolear erabil daiteke baldintza gisa. 
while
 sententziaren egitura orokorra honako hau da:


while <baldintza>:
    <blokea>


Hurrengo begiztan 
number < 10
 baldintza dugu. Begizta barruko blokea zenbaki aldagaia 10 baino txikiagoa bada bakarrik exekutatzen da.


number = int(input("Mesedez idatzi zenbaki bat: "))

while number < 10:
    print(number)
    number += 1

print("Exekuzioa amaituta.")


## Hasieratzea, baldintza eta eguneratzea

Begizta bat sortzeko askotan hiru urrats ezberdin sartu beharko dituzu: hasieratzea, baldintza eta iterazio aldagaiak eguneratzea.

1.  **Hasieratzea**: Begiztaren baldintzaren barruan erabiltzen den aldagaiaren (edo aldagaien) hasierako balioa ezartzea.
2.  **Baldintza**: Begizta zenbat denboran exekutatuko den definitzen du.
3.  **Eguneratzea**: Begiztaren errepikapen bakoitzaren barruan baldintzan parte hartzen duten aldagaiak eguneratzen dira.

Hiru osagai horietako bat falta bada, litekeena da begiztak ondo ez funtzionatzea. Errore tipiko bat eguneratze urratsa ez egitea da:


number = 1

while number < 10:
    print(number)
    # Eguneratzea falta da! Begizta infinitua!


`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part03-01_print_numbers',
      title: { ENG: "Print numbers", CAS: "Imprimir números", EUS: "Zenbakiak inprimatu" },
      description: {
        ENG: "Please write a program which prints out all the even numbers between two and thirty, using a loop. Print each number on a separate line.",
        CAS: "Por favor, escribe un programa que imprima todos los números pares entre dos y treinta, usando un bucle. Imprime cada número en una línea separada.",
        EUS: "Idatzi programa bat bi eta hogeita hamar arteko zenbaki bikoiti guztiak inprimatzen dituena, begizta bat erabiliz. Inprimatu zenbaki bakoitza lerro bereizi batean."
      },
      initialCode: "# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestEven(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        if "2" not in out:\n             self.fail("Debe empezar en 2.")\n        if "30" not in out:\n             self.fail("Debe llegar hasta el 30 (incluido).")\n        if "1" in out or "3" in out:\n             self.fail("Estás imprimiendo números impares. Solo queremos los pares (2, 4, 6...).")\n        self.assertIn("2", out)\n        self.assertIn("30", out)`
    }
  ]
};