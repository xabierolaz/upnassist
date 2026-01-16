import { CoursePage } from '../mooc-exercises';

export const section1: CoursePage = {
  id: "part2-1",
  title: {
    ENG: `Programming terminology`,
    CAS: `Terminología de programación`,
    EUS: `Programazio terminologia\`
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: \`
# Programming terminology

## After this section:

- You will be familiar with some essential terminology in programming
- You will know the difference between a statement and an expression
- You will be able to find out the data type of an evaluated expression
- You will have learnt to use debugging methods to find mistakes in your code

In the first part of this course we didn't pay much attention to terminology, so let's have a look at some central concepts in programming.

## Statement

A _statement_ is a part of the program which executes something. It often, but not always, refers to a single command.

For example, 
print("Hi!")
 is a statement which prints out a line of text. Likewise, 
number = 2
 is a statement which assigns a value to a variable.

A statement can also be more complicated. It can, for instance, contain other statements. The following statement spans three lines:

\`\`\`python
if name == "Anna":
    print("Hi!")
    number = 2
\`\`\`

In the above case there are two statements (a print statement and an assignment statement) within a conditional statement.

## Block

A _block_ is a group of consecutive statements that are at the same level in the structure of the program. For example, the block of a conditional statement contains those statements which are executed only if the condition is true.

\`\`\`python
if age > 17:
    # beginning of the conditional block
    print("You are of age!")
    age = age + 1
    print("You are now one year older...")
    # end of the conditional block

print("This here belongs to another block")
\`\`\`

In Python blocks are expressed by indenting all code in the block by the same amount of whitespace.

NB: the main block of a Python program must always be at the leftmost edge of the file, without indentation.

## Expression

An _expression_ is a bit of code that results in a determined data type. When the program is executed, the expression is evaluated so that it has a value that can then be used in the program.

Here are a few examples of expressions:

| Expression | Value | Type | Python data type |
| :--- | :--- | :--- | :--- |
| \`2 + 4 + 3\` | \`9\` | integer | \`int\` |
| \`"abc" + "de"\` | \`"abcde"\` | string | \`str\` |
| \`11 / 2\` | \`5.5\` | floating point number | \`float\` |
| \`2 * 5 > 9\` | \`True\` | Boolean value | \`bool\` |

Because all expressions have a type, they can be assigned to variables.

## Function

A _function_ executes some functionality. Functions can also take one or more _arguments_, which are data that can be fed to and processed by the function. Arguments are sometimes also referred to as _parameters_.

A function is executed when it is _called_. That is, when the function (and its arguments, if any) is mentioned in the code.

\`\`\`python
print("this is an argument")
\`\`\`

Another function you\'ve already used often is the 
input
 function. In this case the function also _returns_ a value. After the function has been executed, the section of code where it was called is replaced by the value it returns.

## Data type

_Data type_ refers to the characteristics of any value present in the program. You can use the function 
\`type\`
 to find out the data type of any expression.

\`\`\`python
print(type("Anna"))
print(type(100))
\`\`\`

<sample-output>

<class 'str'>
<class 'int'>

</sample-output>

## Syntax

The _syntax_ of a programming language determines how the code of a program should be written. Each programming language has its own specific syntax. If the syntactic rules are not followed, there will be an error.

The following code has a syntax error (missing colon):

\`\`\`python
if name == "Anna"
    print("Hi!")
\`\`\`

<sample-output>
<pre>
  File "test.py", line 1
    if name == "Anna"
                    ^
SyntaxError: invalid syntax
</pre>
</sample-output>

## Debugging

If the syntax of the program is correct but the program still doesn\'t function as intended, there is a _bug_ in the program. Discovering and locating the cause of a bug is called _debugging_.

A simple yet effective way of debugging a program is adding debugging print statements to your code. Verifying the results of your code with 
\`print\`
 commands gives a quick confirmation the code does what you want it to do.
`,
        CAS: `
# Terminología de programación

## Después de esta sección:

- Estarás familiarizado con alguna terminología esencial en programación
- Sabrás la diferencia entre una sentencia y una expresión
- Podrás averiguar el tipo de dato de una expresión evaluada
- Habrás aprendido a usar métodos de depuración para encontrar errores en tu código

En la primera parte de este curso no prestamos mucha atención a la terminología, así que echemos un vistazo a algunos conceptos centrales en programación.

## Sentencia

Una _sentencia_ es una parte del programa que ejecuta algo. A menudo, pero no siempre, se refiere a un solo comando.

Por ejemplo, 
print("¡Hola!")
 es una sentencia que imprime una línea de texto. Asimismo, 
numero = 2
 es una sentencia que asigna un valor a una variable.

Una sentencia también puede ser más complicada. Puede, por ejemplo, contener otras sentencias. La siguiente sentencia abarca tres líneas:

\`\`\`python
if nombre == "Anna":
    print("¡Hola!")
    numero = 2
\`\`\`

En el caso anterior hay dos sentencias (una sentencia de impresión y una sentencia de asignación) dentro de una sentencia condicional.

## Bloque

Un _bloque_ es un grupo de sentencias consecutivas que están al mismo nivel en la estructura del programa. Por ejemplo, el bloque de una sentencia condicional contiene aquellas sentencias que se ejecutan solo si la condición es verdadera.

\`\`\`python
if edad > 17:
    # inicio del bloque condicional
    print("¡Eres mayor de edad!")
    edad = edad + 1
    print("Ahora eres un año mayor...")
    # fin del bloque condicional

print("Esto de aquí pertenece a otro bloque")
\`\`\`

En Python, los bloques se expresan indentando todo el código del bloque con la misma cantidad de espacio en blanco.

NB: el bloque principal de un programa Python debe estar siempre en el borde izquierdo del archivo, sin indentación.

## Expresión

Una _expresión_ es un trozo de código que da como resultado un tipo de dato determinado. Cuando se ejecuta el programa, la expresión se evalúa para obtener un valor que luego se puede usar en el programa.

Aquí hay algunos ejemplos de expresiones:

| Expresión | Valor | Tipo | Tipo de dato Python |
| :--- | :--- | :--- | :--- |
| \`2 + 4 + 3\` | \`9\` | entero | \`int\` |
| \`"abc" + "de"\` | \`"abcde"\` | cadena | \`str\` |
| \`11 / 2\` | \`5.5\` | número de punto flotante | \`float\` |
| \`2 * 5 > 9\` | \`True\` | Valor booleano | \`bool\` |

Como todas las expresiones tienen un tipo, se pueden asignar a variables.

## Función

Una _función_ ejecuta alguna funcionalidad. Las funciones también pueden tomar uno o más _argumentos_ (datos pasados a la función). Los argumentos a veces también se denominan _parámetros_.

Una función se ejecuta cuando es _llamada_. Es decir, cuando la función (y sus argumentos, si los hay) se menciona en el código.

\`\`\`python
print("esto es un argumento")
\`\`\`

Otra función que ya has usado a menudo es la función 
\`input\`
. En este caso, la función también _devuelve_ un valor. Después de ejecutar la función, la sección de código donde fue llamada se reemplaza por el valor que devuelve.

## Tipo de dato

_Tipo de dato_ se refiere a las características de cualquier valor presente en el programa. Puedes usar la función 
\`type\`
 para averiguar el tipo de dato de cualquier expresión.

\`\`\`python
print(type("Anna"))
print(type(100))
\`\`\`

<sample-output>

<class 'str'>
<class 'int'>

</sample-output>

## Sintaxis

La _sintaxis_ de un lenguaje de programación determina cómo debe escribirse el código de un programa. Cada lenguaje de programación tiene su propia sintaxis específica. Si no se siguen las reglas sintácticas, habrá un error.

El siguiente código tiene un error de sintaxis (falta dos puntos):

\`\`\`python
if nombre == "Anna"
    print("¡Hola!")
\`\`\`

<sample-output>
<pre>
  File "test.py", line 1
    if nombre == "Anna"
                    ^
SyntaxError: invalid syntax
</pre>
</sample-output>

## Depuración

Si la sintaxis del programa es correcta pero el programa no funciona como se esperaba, hay un _bug_ (fallo) en el programa. Descubrir y localizar la causa de un fallo se llama _depuración_ (debugging).

Una forma sencilla pero efectiva de depurar es añadir sentencias 
\`print\`
 a tu código para verificar los valores en diferentes pasos.
`,
        EUS: `
# Programazio terminologia

## Atal honen ondoren:

- Programazioko oinarrizko terminologiarekin ohituko zara
- Sententzia baten eta adierazpen baten arteko aldea jakingo duzu
- Ebaluatutako adierazpen baten datu mota aurkitzeko gai izango zara
- Zure kodean akatsak aurkitzeko arazketa metodoak erabiltzen ikasiko duzu

Ikastaroaren lehen zatian ez genion arreta handirik eman terminologiari; beraz, ikus ditzagun programazioko oinarrizko kontzeptu batzuk.

## Sententzia

_Sententzia_ bat zerbait exekutatzen duen programa-zati bat da. Askotan, baina ez beti, komando bakar bati egiten dio erreferentzia.

Adibidez, 
print("Kaixo!")
 testu lerro bat inprimatzen duen sententzia bat da. Era berean, 
zenbakia = 2
 aldagai bati balio bat esleitzen dion sententzia bat da.

Sententzia bat korapilatsuagoa ere izan daiteke. Adibidez, beste sententzia batzuk izan ditzake. Hurrengo sententziak hiru lerro hartzen ditu:

\`\`\`python
if izena == "Anna":
    print("Kaixo!")
    zenbakia = 2
\`\`\`

Aurreko kasuan bi sententzia daude (inprimatze sententzia bat eta esleipen sententzia bat) baldintzazko sententzia baten barruan.

## Blokea

_Bloke_ bat programaren egituran maila berean dauden ondoz ondoko sententzia multzoa da. Adibidez, baldintzazko sententzia baten blokeak baldintza egia bada bakarrik exekutatzen diren sententziak ditu.

\`\`\`python
if adina > 17:
    # bloke kondizionalaren hasiera
    print("Adin nagusikoa zara!")
    adina = adina + 1
    print("Orain urtebete zaharragoa zara...")
    # bloke kondizionalaren amaiera

print("Hau beste bloke batekoa da")
\`\`\`

Python-en blokeak adierazteko, bloke horretako kode guztia zuriune kopuru berberarekin indentatzen da.

OHARRA: Python programa baten bloke nagusia beti fitxategiaren ezkerreko ertzean egon behar da, indentaziorik gabe.

## Adierazpena

_Adierazpena_ datu mota zehatz bat ematen duen kode zatia da. Programa exekutatzean, adierazpena ebaluatzen da balio bat izan dezan, eta balio hori programan erabil daiteke.

Hona hemen adierazpenen adibide batzuk:

| Adierazpena | Balioa | Mota | Python datu mota |
| :--- | :--- | :--- | :--- |
| \`2 + 4 + 3\` | \`9\` | osoa | \`int\` |
| \`"abc" + "de"\` | \`"abcde"\` | katea | \`str\` |
| \`11 / 2\` | \`5.5\` | koma higikorreko zenbakia | \`float\` |
| \`2 * 5 > 9\` | \`True\` | Balio boolearra | \`bool\` |

Adierazpen guztiek mota bat dutenez, aldagaiei eslei daitezke.

## Funtzioa

_Funtzio_ batek funtzionalitate bat exekutatzen du. Funtzioek _argumentu_ bat edo gehiago har ditzakete (funtzioari pasatako datuak). Argumentuei batzuetan _parametro_ ere deitzen zaie.

Funtzio bat _deitzen_ denean exekutatzen da. Hau da, funtzioa (eta bere argumentuak, halakorik badago) kodean aipatzen denean.

\`\`\`python
print("hau argumentu bat da")
\`\`\`

Dagoeneko askotan erabili duzun beste funtzio bat 
\`input\`
 funtzioa da. Kasu honetan, funtzioak balio bat ere _itzultzen_ du. Funtzioa exekutatu ondoren, deitu den kode zatia itzultzen duen balioarekin ordezkatzen da.

## Datu mota

_Datu mota_ programan dagoen edozein balioren ezaugarriei dagokie. 
\`type\`
 funtzioa erabil dezakezu edozein adierazpenen datu mota jakiteko.

\`\`\`python
print(type("Anna"))
print(type(100))
\`\`\`

<sample-output>

<class 'str'>
<class 'int'>

</sample-output>

## Sintaxia

Programazio-lengoaia baten _sintaxiak_ zehazten du nola idatzi behar den programa baten kodea. Programazio-lengoaia bakoitzak bere sintaxi espezifikoa du. Arau sintaktikoak ez badira jarraitzen, errore bat egongo da.

Hurrengo kodeak sintaxi errorea du (bi puntu falta dira):

\`\`\`python
if izena == "Anna"
    print("Kaixo!")
\`\`\`

<sample-output>
<pre>
  File "test.py", line 1
    if izena == "Anna"
                    ^
SyntaxError: invalid syntax
</pre>
</sample-output>

## Arazketa

Programaren sintaxia zuzena bada baina programak ez badu espero bezala funtzionatzen, programan _bug_ (akats) bat dago. Akats baten zergatia aurkitu eta kokatzeari _arazketa_ (debugging) deitzen zaio.

Arazteko modu sinple baina eraginkorra zure kodeari 
\`print\`
 sententziak gehitzea da, urrats ezberdinetan balioak egiaztatzeko.
\`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part02-01_fix_syntax',
      title: { ENG: \`Fix the syntax\`, CAS: \`Corrige la sintaxis\`, EUS: \`Konpondu sintaxia\` },
      description: {
        ENG: \`The following program contains several syntactic errors. Please fix the program so that the syntax is in order and the program works as specified by the examples below.`,
        CAS: `El siguiente programa contiene varios errores sintácticos. Por favor, arregla el programa para que la sintaxis sea correcta y funcione como se especifica en los ejemplos.`,
        EUS: `Hurrengo programak hainbat sintaxi errore ditu. Mesedez konpondu programa sintaxia zuzena izan dadin eta beheko adibideetan zehaztu bezala funtziona dezan.\`
      },
      initialCode: `  number = input(\"Please type in a number: \")\n  if number>100\n    print(\"The number was greater than one hundred\")\n    number - 100\n    print(\"Now its value has decreased by one hundred)\n     print(\"Its value is now\"+ number)\n print(number + \" must be my lucky number!\")\n print(\"Have a nice day!)`,
      testCode: \`\nimport unittest\nclass TestSyntax(unittest.TestCase):\n    def test_run(self):\n        # Syntax errors are caught by the runner before this, but if logic is wrong:\n        out = run_student_code(inputs=['150'])\n        if "50" not in out:\n            self.fail("El cálculo no es correcto. Si entra 150, debería salir 50.")\n        self.assertIn("value is now 50", out)\n        \n        out2 = run_student_code(inputs=['10'])\n        self.assertIn("value is now 10", out2)\n\`
    },
    {
      type: 'exercise',
      exerciseId: 'part02-02_number_of_characters',
      title: { ENG: \`Number of characters\`, CAS: \`Número de caracteres\`, EUS: \`Karaktere kopurua\` },
      description: {
        ENG: \`The function len() can be used to find out the length of a string. Write a program which asks the user for a word and then prints out the number of characters in that word if there was more than one typed in.`,
        CAS: `La función len() se puede usar para averiguar la longitud de una cadena. Escribe un programa que pida una palabra al usuario y luego imprima el número de caracteres de esa palabra si se escribió más de uno.`,
        EUS: `len() funtzioa kate baten luzera jakiteko erabil daiteke. Idatzi programa bat erabiltzaileari hitz bat eskatzen diona eta gero hitz horren karaktere kopurua inprimatzen duena, bat baino gehiago idatzi bada.\`
      },
      initialCode: `# Write your solution here\n`,
      testCode: \`\nimport unittest\nclass TestLen(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['banana'])\n        if "6" not in out:\n             self.fail("Debes imprimir el número de caracteres (ej: 6). Usa la función len().")\n        self.assertIn("6", out)\n        self.assertIn("letters in the word banana", out)\n\`
    },
    {
      type: 'exercise',
      exerciseId: 'part02-03_typecasting',
      title: { ENG: \`Typecasting\`, CAS: \`Conversión de tipos\`, EUS: \`Mota bihurketa\` },
      description: {
        ENG: \`Please write a program which asks the user for a floating point number and then prints out the integer part and the decimal part separately. Use the Python \`int\` function.`,
        CAS: `Por favor, escribe un programa que pida un número decimal y luego imprima la parte entera y la parte decimal por separado. Usa la función \`int\` de Python.`,
        EUS: `Idatzi programa bat zenbaki dezimal bat eskatzen duena eta gero zati osoa eta zati dezimala bereizita inprimatzen dituena. Erabili Python-eko \`int\` funtzioa.`
      },
      initialCode: `# Write your solution here\n`,
      testCode: `\nimport unittest\nclass TestTypecasting(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['1.34'])\n        if "Integer part: 1" not in out:\n             self.fail("Falta la parte entera o no es correcta. Usa int() para obtenerla.")\n        \n        if "0.34" not in out and "0.340000" not in out:\n             self.fail("La parte decimal no es correcta. Recuerda: decimal = numero - entero.")\n        \n        self.assertIn("Integer part: 1", out)\n        self.assertIn("Decimal part: 0.34", out)\n`
    },
    {
      type: 'quiz',
      title: { ENG: `Quiz`, CAS: `Cuestionario`, EUS: `Galdetegia` },
      questions: [
        {
          id: 'q1',
          prompt: { 
            ENG: 'Which of the following is an expression?',
            CAS: '¿Cuál de los siguientes es una expresión?',
            EUS: 'Ondorengoetatik zein da adierazpen bat?'
          },
          options: [
            { id: 'o1', text: 'print("Hello")', isCorrect: false },
            { id: 'o2', text: 'x = 5', isCorrect: false },
            { id: 'o3', text: '2 + 5', isCorrect: true, feedback: { ENG: 'It evaluates to a value (7).', CAS: 'Se evalúa a un valor (7).', EUS: 'Balio batera ebaluatzen da (7).' } }
          ]
        },
        {
          id: 'q2',
          prompt: { 
            ENG: 'What does the function int(5.99) return?',
            CAS: '¿Qué devuelve la función int(5.99)?',
            EUS: 'Zer itzultzen du int(5.99) funtzioak?'
          },
          options: [
            { id: 'o1', text: '6', isCorrect: false },
            { id: 'o2', text: '5', isCorrect: true, feedback: { ENG: 'It truncates (rounds down).', CAS: 'Trunca (redondea hacia abajo).', EUS: 'Moztu egiten du (beherantz biribildu).' } },
            { id: 'o3', text: '5.99', isCorrect: false }
          ]
        },
        {
          id: 'q3',
          prompt: { 
            ENG: 'If you see "SyntaxError", what is the most likely cause?',
            CAS: 'Si ves "SyntaxError", ¿cuál es la causa más probable?',
            EUS: '"SyntaxError" ikusten baduzu, zein da kausarik probableena?'
          },
          options: [
            { id: 'o1', text: { ENG: 'Division by zero', CAS: 'División por cero', EUS: 'Zatiketa zeroz' }, isCorrect: false },
            { id: 'o2', text: { ENG: 'Missing colon or parenthesis', CAS: 'Falta dos puntos o paréntesis', EUS: 'Bi puntu edo parentesia falta da' }, isCorrect: true },
            { id: 'o3', text: { ENG: 'Internet connection lost', CAS: 'Conexión a internet perdida', EUS: 'Internet konexioa galdu da' }, isCorrect: false }
          ]
        }
      ]
    }
  ]
};
