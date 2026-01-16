import { CoursePage } from '../mooc-exercises';

export const section4: CoursePage = {
  id: "part3-4",
  title: {
    ENG: "Defining functions",
    CAS: "Definiendo funciones",
    EUS: "Funtzioak definitzen"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
We have already used functions such as 
`len`
, 
`print`
 and 
`input`
 in our programs. These are functions built into Python, and so they are always ready at our disposal, no matter which environment we are programming in. However, it is also possible to define your own functions.

## The function definition

Before a function can be used, it must be defined. Any function definition begins with the keyword 
`def`
, short for _define_. Then comes the _name_ of the function, followed by parentheses and a colon character. This is called the _header_ of the function. After this, indented just like 
`while`
 and 
`if`
 blocks, comes the _body_ of the function.

For example, the following code defines the function 
`message`
:

`python
def message():
    print("This is my very own function!")
`

If the program above is executed, nothing seems to happen. This is because the code in the body of the function is only executed when the function is _called_.

Calling a function is as simple as mentioning its name in your code. Adding a function call to the end of the above program, like so

`python
def message():
    print("This is my very own function!")

message()
`
results in a printed statement:

`text
This is my very own function!
`

When a function has been defined it can be called multiple times:

`python
def message():
    print("This is my very own function!")

message()
message()
message()
`

`text
This is my very own function!
This is my very own function!
This is my very own function!
`

### Testing your own functions

NB: from now on the majority of the exercises on this course will ask you to write your own function(s).

When a program consists of only functions, executing it doesn't seem to have any effect. The following code doesn't print out anything, even though there is a print statement:

`python
def greet():
    print("Hi!")
`

The reason why nothing is printed is that the code within the body of the function 
`greet`
 is only executed when the function is called.

The "main" program below the function needs to contain appropriate function calls, so that the program can be tested. In fact, Python treats all code that is not within function definitions as part of the _main function_, which is executed when the file itself is evaluated or run. So, let's add a function call:

`python
def greet():
    print("Hi!")

# All code that is not within function definitions is part of the
# main function of the program
# Calling our function:

greet()
`

**Important**: on this course, the automatic tests run on the exercise files require an empty main function. No commands should be left in the main function of your solution. That is, any code you use yourself for testing needs to be contained within a specially defined 
`if`
 block:

`python
def greet():
    print("Hi!")

# Write your main function within a block like this:
if __name__ == "__main__":
    greet()
`

Any code left outside the block above causes an error. The purpose of this is to ensure your solution is tested on a clean slate, as the tests often verify what your functions print out.
`,
        CAS: 
`
Ya hemos utilizado funciones como 
`len`
, 
`print`
 e 
`input`
 en nuestros programas. Estas son funciones integradas en Python, por lo que siempre están a nuestra disposición, sin importar en qué entorno estemos programando. Sin embargo, también es posible definir tus propias funciones.

## La definición de la función

Antes de que se pueda usar una función, debe definirse. Cualquier definición de función comienza con la palabra clave 
`def`
, abreviatura de _define_. Luego viene el _nombre_ de la función, seguido de paréntesis y un carácter de dos puntos. A esto se le llama el _encabezado_ de la función. Después de esto, sangrado al igual que los bloques 
`while`
 e 
`if`
, viene el _cuerpo_ de la función.

Por ejemplo, el siguiente código define la función 
`mensaje`
:

`python
def mensaje():
    print("¡Esta es mi propia función!")
`

Si se ejecuta el programa anterior, parece que no sucede nada. Esto se debe a que el código en el cuerpo de la función solo se ejecuta cuando se _llama_ a la función.

Llamar a una función es tan simple como mencionar su nombre en tu código. Agregar una llamada a la función al final del programa anterior, así

`python
def mensaje():
    print("¡Esta es mi propia función!")

mensaje()
`
da como resultado una declaración impresa:

`text
¡Esta es mi propia función!
`

Cuando se ha definido una función, se puede llamar varias veces:

`python
def mensaje():
    print("¡Esta es mi propia función!")

mensaje()
mensaje()
mensaje()
`

`text
¡Esta es mi propia función!
¡Esta es mi propia función!
¡Esta es mi propia función!
`

### Probando tus propias funciones

Nota: a partir de ahora, la mayoría de los ejercicios de este curso te pedirán que escribas tu(s) propia(s) función(es).

Cuando un programa consta solo de funciones, ejecutarlo no parece tener ningún efecto. El siguiente código no imprime nada, aunque hay una declaración de impresión:

`python
def saludar():
    print("¡Hola!")
`

La razón por la que no se imprime nada es que el código dentro del cuerpo de la función 
`saludar`
 solo se ejecuta cuando se llama a la función.

El programa "principal" debajo de la función debe contener llamadas a funciones apropiadas, para que el programa pueda probarse. De hecho, Python trata todo el código que no está dentro de las definiciones de funciones como parte de la _función principal_, que se ejecuta cuando el archivo en sí se evalúa o ejecuta. Entonces, agreguemos una llamada a la función:

`python
def saludar():
    print("¡Hola!")

# Todo el código que no está dentro de las definiciones de funciones es parte de
# la función principal del programa
# Llamando a nuestra función:

saludar()
`

**Importante**: en este curso, las pruebas automáticas que se ejecutan en los archivos de ejercicio requieren una función principal vacía. No deben dejarse comandos en la función principal de tu solución. Es decir, cualquier código que uses tú mismo para probar debe estar contenido en un bloque 
`if`
 especialmente definido:

`python
def saludar():
    print("¡Hola!")

# Escribe tu función principal dentro de un bloque como este:
if __name__ == "__main__":
    saludar()
`

Cualquier código que quede fuera del bloque anterior provoca un error. El propósito de esto es asegurar que tu solución se pruebe en borrón y cuenta nueva, ya que las pruebas a menudo verifican lo que imprimen tus funciones.
`,
        EUS: 
`
`len`
, 
`print`
 eta 
`input`
 bezalako funtzioak erabili ditugu gure programetan. Hauek Pythonen integratutako funtzioak dira, eta beraz, beti daude gure eskura, edozein ingurunetan programatzen ari garela ere. Hala ere, zure funtzio propioak definitzea ere posible da.

## Funtzioaren definizioa

Funtzio bat erabili aurretik, definitu egin behar da. Edozein funtzio-definizio 
`def`
 gako-hitzarekin hasten da, _define_ hitzaren laburdura. Ondoren funtzioaren _izena_ dator, parentesiekin eta bi puntu karakterearekin jarraituta. Honi funtzioaren _goiburua_ deitzen zaio. Honen ondoren, 
`while`
 eta 
`if`
 blokeak bezala koska eginda, funtzioaren _gorputza_ dator.

Adibidez, honako kode honek 
`mezua`
 funtzioa definitzen du:

`python
def mezua():
    print("Hau da nire funtzio propioa!")
`

Goiko programa exekutatzen bada, badirudi ez dela ezer gertatzen. Hau da funtzioaren gorputzeko kodea funtzioari _deitzen_ zaionean bakarrik exekutatzen delako.

Funtzio bati deitzea zure kodean bere izena aipatzea bezain erraza da. Goiko programaren amaieran funtzio-dei bat gehitzeak, honela

`python
def mezua():
    print("Hau da nire funtzio propioa!")

mezua()
`
inprimatutako adierazpen bat ematen du:

`text
Hau da nire funtzio propioa!
`

Funtzio bat definitu denean hainbat aldiz dei daiteke:

`python
def mezua():
    print("Hau da nire funtzio propioa!")

mezua()
mezua()
mezua()
`

`text
Hau da nire funtzio propioa!
Hau da nire funtzio propioa!
Hau da nire funtzio propioa!
`

### Zure funtzioak probatzen

Oharra: hemendik aurrera, ikastaro honetako ariketa gehienek zure funtzio propioa(k) idaztea eskatuko dizute.

Programa bat funtzioez bakarrik osatuta dagoenean, exekutatzeak ez dirudi inolako eraginik duenik. Honako kode honek ez du ezer inprimatzen, nahiz eta inprimatze-adierazpen bat egon:

`python
def agurtu():
    print("Kaixo!")
`

Ezer ez inprimatzearen arrazoia da 
`agurtu`
 funtzioaren gorputzaren barruko kodea bakarrik exekutatzen dela funtzioari deitzen zaionean.

Funtzioaren azpiko programa "nagusiak" funtzio-dei egokiak eduki behar ditu, programa probatu ahal izateko. Izan ere, Pythonek funtzio-definizioen barruan ez dagoen kode guztia _funtzio nagusiaren_ zati gisa tratatzen du, fitxategia bera ebaluatzen edo exekutatzen denean exekutatzen dena. Beraz, gehi dezagun funtzio-dei bat:

`python
def agurtu():
    print("Kaixo!")

# Funtzio-definizioen barruan ez dagoen kode guztia programaren funtzio
# nagusiaren parte da
# Gure funtzioari deitzen:

agurtu()
`

**Garrantzitsua**: ikastaro honetan, ariketa-fitxategietan exekutatzen diren proba automatikoek funtzio nagusi hutsa eskatzen dute. Ez da komandorik utzi behar zure irtenbidearen funtzio nagusian. Hau da, zuk zeuk probatzeko erabiltzen duzun edozein kode bereziki definitutako 
`if`
 bloke baten barruan egon behar da:

`python
def agurtu():
    print("Kaixo!")

# Idatzi zure funtzio nagusia honelako bloke baten barruan:
if __name__ == "__main__":
    agurtu()
`

Aurreko bloketik kanpo geratzen den edozein kodek errorea eragiten du. Honen helburua zure irtenbidea arbel garbi batean probatzen dela ziurtatzea da, probek askotan zure funtzioek inprimatzen dutena egiaztatzen baitute.
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part03-28_seven_brothers',
      title: {
        ENG: "Seven Cities",
        CAS: "Siete Ciudades",
        EUS: "Zazpi Hiri"
      },
      description: {
        ENG: "Write a function named `seven_cities`. When the function is called, it should print out the names of the seven cities in alphabetical order.\n\n**Note:** You do not need to use Python Lists or loops to sort. Just print the lines in the correct order manually. We will learn about Lists in Part 4.",
        CAS: "Escribe una función llamada `seven_cities`. Cuando se llame a la función, debe imprimir los nombres de las siete ciudades en orden alfabético.\n\n**Nota:** No necesitas usar listas ni bucles todavía. Simplemente imprime las líneas en el orden correcto manualmente. Aprenderemos sobre listas en la Parte 4.",
        EUS: "Idatzi `seven_cities` izeneko funtzio bat. Funtzioa deitzen denean, zazpi hiriren izenak inprimatu beharko ditu ordena alfabetikoan.\n\n**Oharra:** Ez duzu zertan zerrendak edo begiztak erabili behar oraindik. Inprimatu lerroak ordena egokian eskuz. 4. zatian ikasiko dugu zerrendei buruz."
      },
      initialCode: "# Write your solution here\n# You can test your function by calling it within the following block\nif __name__ == \"__main__\":\n    seven_cities()",
      testCode: 
`
import unittest
from unittest.mock import patch

class TestSevenCities(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        expected = ["Barcelona", "Bilbao", "Madrid", "Pamplona", "Sevilla", "Valencia", "Zaragoza"]
        for name in expected:
            self.assertIn(name, out)
`
    },
    {
      type: 'markdown',
      content: {
        ENG: 
`
## Function arguments

Functions often take one or more _arguments_, which may affect what the function does. For example, the built-in Python functions 
`print`
 and 
`input`
 take as argument(s) the text that is to be displayed:

`python
print("Hi!")                           # argument is the string "Hi!"
name = input("What is your name? ")    # argument is the string "What is your name? "
print(name)                            # argument is the value of the variable name
`

It was mentioned before that the terms _argument_ and _parameter_ are often used to refer to the same thing. The distinction is that while _argument_ is used with the data passed to the function when the function is called, _inside_ the function the arguments are assigned to variables called _parameters_. So, approximately, when the function is called, we call the passed bits of data arguments, but when we are defining the function, we call them parameters.

Let's define some functions that take arguments. In the function definition, the parameters are defined within the parentheses after the function name:

`python
def hello(target):
    print("Hello", target)
`

Calling this function twice, like so

`python
hello("Emily")
hello("world!")
`

prints out two different greetings:

`text
Hello Emily
Hello world!
`

Let's take a closer look at the function definition:

`python
def hello(target):
    print("Hello", target)
`

On the first line, in the function header, we defined that this function takes an argument, and assigns it to a parameter named 
`target`
. In the body of the function the 
`print`
 command uses the value stored in 
`target`
.

When the function is called, the parameter 
`target`
 has the value given as an argument in the function call. For example, the following function call

`python
name = "Alan"
hello(name)
`

causes the parameter 
`target`
 to have the value 
`"Alan"`
 during the execution of the function 
`hello`
.
`,
        CAS: 
`
## Argumentos de función

Las funciones a menudo toman uno o más _argumentos_, que pueden afectar lo que hace la función. Por ejemplo, las funciones integradas de Python 
`print`
 e 
`input`
 toman como argumento(s) el texto que se va a mostrar:

`python
print("¡Hola!")                        # el argumento es la cadena "¡Hola!"
nombre = input("¿Cómo te llamas? ")    # el argumento es la cadena "¿Cómo te llamas? "
print(nombre)                          # el argumento es el valor de la variable nombre
`

Se mencionó antes que los términos _argumento_ y _parámetro_ se usan a menudo para referirse a la misma cosa. La distinción es que mientras _argumento_ se usa con los datos pasados a la función cuando se llama a la función, _dentro_ de la función los argumentos se asignan a variables llamadas _parámetros_. Entonces, aproximadamente, cuando se llama a la función, llamamos argumentos a los fragmentos de datos pasados, pero cuando estamos definiendo la función, los llamamos parámetros.

Definamos algunas funciones que toman argumentos. En la definición de la función, los parámetros se definen dentro de los paréntesis después del nombre de la función:

`python
def hola(objetivo):
    print("Hola", objetivo)
`

Llamar a esta función dos veces, así

`python
hola("Emily")
hola("mundo!")
`

imprime dos saludos diferentes:

`text
Hola Emily
Hola mundo!
`

Echemos un vistazo más de cerca a la definición de la función:

`python
def hola(objetivo):
    print("Hola", objetivo)
`

En la primera línea, en el encabezado de la función, definimos que esta función toma un argumento y lo asigna a un parámetro llamado 
`objetivo`
. En el cuerpo de la función, el comando 
`print`
 usa el valor almacenado en 
`objetivo`
.

Cuando se llama a la función, el parámetro 
`objetivo`
 tiene el valor dado como argumento en la llamada a la función. Por ejemplo, la siguiente llamada a la función

`python
nombre = "Alan"
hola(nombre)
`

hace que el parámetro 
`objetivo`
 tenga el valor 
`"Alan"`
 durante la ejecución de la función 
`hola`
.
`,
        EUS: 
`
## Funtzioaren argumentuak

Funtzioek askotan _argumentu_ bat edo gehiago hartzen dituzte, eta horrek funtzioak egiten duena eragin dezake. Adibidez, 
`print`
 eta 
`input`
 Pythonen integratutako funtzioek bistaratu beharreko testua hartzen dute argumentu gisa:

`python
print("Kaixo!")                        # argumentua "Kaixo!" katea da
izena = input("Nola duzu izena? ")     # argumentua "Nola duzu izena? " katea da
print(izena)                           # argumentua izena aldagaiaren balioa da
`

Lehenago aipatu da _argumentu_ eta _parametro_ terminoak askotan gauza bera izendatzeko erabiltzen direla. Bereizketa da _argumentu_ funtzioari deitzen zaionean pasatzen diren datuekin erabiltzen dela, eta funtzioaren _barruan_ argumentuak _parametro_ deitzen diren aldagaiei esleitzen zaizkiela. Beraz, gutxi gorabehera, funtzioari deitzen zaionean, pasatutako datu-zatiei argumentu deitzen diegu, baina funtzioa definitzen ari garenean, parametro deitzen diegu.

Defini ditzagun argumentuak hartzen dituzten funtzio batzuk. Funtzioaren definizioan, parametroak funtzioaren izenaren ondorengo parentesien barruan definitzen dira:

`python
def kaixo(helburua):
    print("Kaixo", helburua)
`

Funtzio honi bi aldiz deitzeak, honela

`python
kaixo("Emily")
kaixo("mundua!")
`

bi agur ezberdin inprimatzen ditu:

`text
Kaixo Emily
Kaixo mundua!
`

Ikus dezagun gertuago funtzioaren definizioa:

`python
def kaixo(helburua):
    print("Kaixo", helburua)
`

Lehenengo lerroan, funtzioaren goiburuan, funtzio honek argumentu bat hartzen duela definitu dugu, eta 
`helburua`
 izeneko parametro bati esleitzen diola. Funtzioaren gorputzean 
`print`
 komandoak 
`helburua`
 parametroan gordetako balioa erabiltzen du.

Funtzioari deitzen zaionean, 
`helburua`
 parametroak funtzio-deian argumentu gisa emandako balioa du. Adibidez, honako funtzio-dei honek

`python
izena = "Alan"
kaixo(izena)
`


`helburua`
 parametroak 
`"Alan"`
 balioa izatea eragiten du 
`kaixo`
 funtzioaren exekuzioan.
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part03-29_first_character',
      title: {
        ENG: "First character",
        CAS: "Primer carácter",
        EUS: "Lehen karakterea"
      },
      description: {
        ENG: "The exercise contains the outline of the function 
`first_character`
. Please complete it so that it prints out the first character of the string it takes as its argument.",
        CAS: "El ejercicio contiene el esquema de la función 
`primer_caracter`
. Por favor, complétalo para que imprima el primer carácter de la cadena que toma como argumento.",
        EUS: "Ariketak 
`lehen_karakterea`
 funtzioaren eskema dauka. Osatu ezazu argumentu gisa hartzen duen katearen lehen karakterea inprimatu dezan."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    first_character('python')",
      testCode: 
`
import unittest
class TestFirst(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        self.assertIn("p", out)
`
    },
    {
      type: 'markdown',
      content: {
        ENG: 
`
## More examples

Let's have a look at some more examples of functions which take arguments. In the following function definition the parameter is a number:

`python
def squared(x):
    print(f"The square of the number {x} is {x * x}")

squared(2)
squared(5)
`

`text
The square of the number 2 is 4
The square of the number 5 is 25
`

Meanwhile, in this function definition there is an 
`if`
 statement within the body of the function:

`python
def hello(name):
    if name == "Emily":
        print("Hello", name)
    else:
        print("Hi", name)

hello("Emily")
hello("Mark")
`

`text
Hello Emily
Hi Mark
`

This function takes two arguments:

`python
def sum(x, y):
    result = x + y
    print(f"The sum of the arguments {x} and {y} is {result}")

sum(1, 2)
sum(5, 24)
`

`text
The sum of the arguments 1 and 2 is 3
The sum of the arguments 5 and 24 is 29
`

## Warning: using global variables within functions

In the examples above we saw that it is possible to assign new variables within function definitions. The function can also see variables assigned outside it, in the main function. Such variables are called _global_ variables.

Using global variables from within functions is usually a bad idea. Among other issues, doing so may cause bugs which are difficult to trace.
`,
        CAS: 
`
## Más ejemplos

Echemos un vistazo a algunos ejemplos más de funciones que toman argumentos. En la siguiente definición de función, el parámetro es un número:

`python
def cuadrado(x):
    print(f"El cuadrado del número {x} es {x * x}")

cuadrado(2)
cuadrado(5)
`

`text
El cuadrado del número 2 es 4
El cuadrado del número 5 es 25
`

Mientras tanto, en esta definición de función hay una declaración 
`if`
 dentro del cuerpo de la función:

`python
def hola(nombre):
    if nombre == "Emily":
        print("Hola", nombre)
    else:
        print("Holi", nombre)

hola("Emily")
hola("Mark")
`

`text
Hola Emily
Holi Mark
`

Esta función toma dos argumentos:

`python
def suma(x, y):
    resultado = x + y
    print(f"La suma de los argumentos {x} y {y} es {resultado}")

suma(1, 2)
suma(5, 24)
`

`text
La suma de los argumentos 1 y 2 es 3
La suma de los argumentos 5 y 24 es 29
`

## Advertencia: uso de variables globales dentro de funciones

En los ejemplos anteriores vimos que es posible asignar nuevas variables dentro de las definiciones de funciones. La función también puede ver variables asignadas fuera de ella, en la función principal. Tales variables se llaman variables _globales_.

Usar variables globales desde dentro de funciones suele ser una mala idea. Entre otros problemas, hacerlo puede causar errores que son difíciles de rastrear.
`,
        EUS: 
`
## Adibide gehiago

Ikus ditzagun argumentuak hartzen dituzten funtzioen adibide gehiago. Honako funtzio-definizio honetan parametroa zenbaki bat da:

`python
def karratua(x):
    print(f"{x} zenbakiaren karratua {x * x} da")

karratua(2)
karratua(5)
`

`text
2 zenbakiaren karratua 4 da
5 zenbakiaren karratua 25 da
`

Bitartean, funtzio-definizio honetan 
`if`
 adierazpen bat dago funtzioaren gorputzaren barruan:

`python
def agurtu(izena):
    if izena == "Emily":
        print("Kaixo", izena)
    else:
        print("Aupa", izena)

agurtu("Emily")
agurtu("Mark")
`

`text
Kaixo Emily
Aupa Mark
`

Funtzio honek bi argumentu hartzen ditu:

`python
def batura(x, y):
    emaitza = x + y
    print(f"{x} eta {y} argumentuen batura {emaitza} da")

batura(1, 2)
batura(5, 24)
`

`text
1 eta 2 argumentuen batura 3 da
5 eta 24 argumentuen batura 29 da
`

## Abisua: aldagai globalak funtzioetan erabiltzea

Aurreko adibideetan ikusi dugu funtzio-definizioen barruan aldagai berriak esleitzea posible dela. Funtzioak kanpoan esleitutako aldagaiak ere ikus ditzake, funtzio nagusian. Horrelako aldagaiei aldagai _globalak_ deitzen zaie.

Aldagai globalak funtzioen barrutik erabiltzea ideia txarra izan ohi da. Beste arazo batzuen artean, hori egiteak jarraitzeko zailak diren akatsak sor ditzake.
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part03-30_mean',
      title: {
        ENG: "Mean",
        CAS: "Media",
        EUS: "Batezbestekoa"
      },
      description: {
        ENG: "Write a function named `mean`, which takes three integer arguments. The function should print out the arithmetic mean of the three arguments.",
        CAS: "Escribe una función llamada `media`, que tome tres argumentos enteros. La función debe imprimir la media aritmética de los tres argumentos.",
        EUS: "Idatzi `batezbestekoa` izeneko funtzio bat, hiru argumentu oso hartzen dituena. Funtzioak hiru argumentuen batezbesteko aritmetikoa inprimatu behar du."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    mean(1, 2, 3)",
      testCode: 
`
import unittest
class TestMean(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        self.assertIn("2.0", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-31_print_many_times',
      title: {
        ENG: "Print many times",
        CAS: "Imprimir muchas veces",
        EUS: "Askotan inprimatu"
      },
      description: {
        ENG: "Write a function named `print_many_times(text, times)`, which takes a string and an integer as arguments. The integer argument specifies how many times the string argument should be printed out.",
        CAS: "Escribe una función llamada `imprimir_muchas_veces(texto, veces)`, que tome una cadena y un entero como argumentos. El argumento entero especifica cuántas veces se debe imprimir el argumento de cadena.",
        EUS: "Idatzi `inprimatu_askotan(testua, aldiz)` izeneko funtzio bat, kate bat eta zenbaki oso bat argumentu gisa hartzen dituena. Argumentu osoak zehazten du zenbat aldiz inprimatu behar den katearen argumentua."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    print_many_times(\"hi\", 5)",
      testCode: 
`
import unittest
class TestMany(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        if out.count("hi") < 5:
             self.fail("Should print 'hi' 5 times. ")
`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-32_square_of_hashes',
      title: {
        ENG: "A square of hashes",
        CAS: "Un cuadrado de almohadillas",
        EUS: "Traola karratu bat"
      },
      description: {
        ENG: "Write a function named `hash_square(length)`, which takes an integer argument. The function prints out a square of hash characters, and the argument specifies the length of the side of the square.",
        CAS: "Escribe una función llamada `cuadrado_almohadillas(longitud)`, que tome un argumento entero. La función imprime un cuadrado de caracteres de almohadilla, y el argumento especifica la longitud del lado del cuadrado.",
        EUS: "Idatzi `traola_karratua(luzera)` izeneko funtzio bat, argumentu oso bat hartzen duena. Funtzioak traola karakterez osatutako karratu bat inprimatzen du, eta argumentuak karratuaren aldearen luzera zehazten du."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    hash_square(3)",
      testCode: 
`
import unittest
class TestHashSq(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        # ###
###
###
        if out.count("###") < 3:
             self.fail("Should print 3 lines of hashes. ")
`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-33_chessboard',
      title: {
        ENG: "Chessboard",
        CAS: "Tablero de ajedrez",
        EUS: "Xake-taula"
      },
      description: {
        ENG: "Write a function named `chessboard`, which prints out a chessboard made out of ones and zeroes. The function takes an integer argument, which specifies the length of the side of the board.",
        CAS: "Escribe una función llamada `tablero_ajedrez`, que imprima un tablero de ajedrez hecho de unos y ceros. La función toma un argumento entero, que especifica la longitud del lado del tablero.",
        EUS: "Idatzi `xake_taula` izeneko funtzio bat, bateko eta zeroko xake-taula bat inprimatzen duena. Funtzioak argumentu oso bat hartzen du, taularen aldearen luzera zehazten duena."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    chessboard(3)",
      testCode: 
`
import unittest
class TestChess(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        self.assertIn("101", out)
        self.assertIn("010", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-34_word_squared',
      title: {
        ENG: "A word squared",
        CAS: "Una palabra al cuadrado",
        EUS: "Hitz bat karratuan"
      },
      description: {
        ENG: "Write a function named `squared`, which takes a string argument and an integer argument, and prints out a square of characters as specified by the examples below.",
        CAS: "Escribe una función llamada `cuadrado`, que tome un argumento de cadena y un argumento entero, e imprima un cuadrado de caracteres como se especifica en los ejemplos a continuación.",
        EUS: "Idatzi `karratua` izeneko funtzio bat, kate argumentu bat eta zenbaki oso argumentu bat hartzen dituena, eta karaktere karratu bat inprimatzen duena azpiko adibideek zehazten duten moduan."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    squared(\"ab\", 3)",
      testCode: 
`
import unittest
class TestWordSquared(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        # Simple check for structure
        self.assertIn("aba", out)
`
    }
  ]
};
