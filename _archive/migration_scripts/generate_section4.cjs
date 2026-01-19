const fs = require('fs');

const blocks = [];

// Block 1: Intro & Operators Table
blocks.push({
  type: "markdown",
  content: {
    ENG: `# Arithmetic operations

## Learning objectives

After this section:
- You will be able to use variables in various arithmetic operations
- You will know how to deal with numbers in user input
- You will know how to cast values into other fundamental data types

In the previous sections you've seen examples with basic arithmetics. In the following table you can see the most common arithmetic operators in Python, with examples:

| Operator | Purpose | Example | Result |
| :--- | :--- | :--- | :--- |
| \`+\` | Addition | \`2 + 4\` | \`6\` |
| \`-\` | Subtraction | \`10 - 2.5\` | \`7.5\` |
| \`*\` | Multiplication | \`-2 * 123\` | \`-246\` |
| \`/\` | Division (floating point result) | \`9 / 2\` | \`4.5\` |
| \`//\` | Division (integer result) | \`9 // 2\` | \`4\` |
| \`%\` | Modulo | \`9 % 2\` | \`1\` |
| \`**\` | Exponentiation | \`2 ** 3\` | \`8\` |

The order of operations is familiar from mathematics: first calculate the exponents, then multiplication and division, and finally addition and subtraction. The order can be changed with parentheses. For example this bit of code

\`\`\`python
print(2 + 3 * 3)
print((2 + 3) * 3)
\`\`\`

prints out

\`\`\`text
11
15
\`\`\`

## Operands, operators and data types

A calculation usually consists of *operands* and *operators*:

\`1\` (operand) \`+\` (operator) \`1\` (operand)

The data type of an operand usually determines the data type of the result: if two integers are added together, the result will also be an integer. If a floating point number is subtracted from another floating point number, the result is a floating point number.

In fact, if a single one of the operands in an expression is a floating point number, the result will also be a floating point number, regardless of the other operands.

Division \`/\` is an exception to this rule. Its result is a floating point number, even if the operands are integers. For example \`1 / 5\` will result in the floating point number \`0.2\`.

Example:

\`\`\`python
height = 172.5
weight = 68.55

# the Body Mass Index, or BMI, is calculated by dividing body mass with the square of height
# height is converted into metres in the formula
bmi = weight / (height / 100) ** 2
print(f"The BMI is {bmi}")
\`\`\`

This program prints out the following:

\`\`\`text
The BMI is 23.037177063642087
\`\`\`

Notice Python also has an integer division operator \`//\`. If the operands are integers, it will produce an integer. The result is rounded down to the nearest integer. For example this program

\`\`\`python
x = 3
y = 2

print(f"/ operator {x/y}")
print(f"// operator {x//y}")
\`\`\`

prints out

\`\`\`text
/ operator 1.5
// operator 1
\`\`\``,
    CAS: `# Operaciones aritméticas

## Objetivos de aprendizaje

Después de esta sección:
- Podrás usar variables en diversas operaciones aritméticas
- Sabrás cómo tratar con números en la entrada del usuario
- Sabrás cómo convertir valores a otros tipos de datos fundamentales

En las secciones anteriores has visto ejemplos con aritmética básica. En la siguiente tabla puedes ver los operadores aritméticos más comunes en Python, con ejemplos:

| Operador | Propósito | Ejemplo | Resultado |
| :--- | :--- | :--- | :--- |
| \`+\` | Suma | \`2 + 4\` | \`6\` |
| \`-\` | Resta | \`10 - 2.5\` | \`7.5\` |
| \`*\` | Multiplicación | \`-2 * 123\` | \`-246\` |
| \`/\` | División (resultado punto flotante) | \`9 / 2\` | \`4.5\` |
| \`//\` | División (resultado entero) | \`9 // 2\` | \`4\` |
| \`%\` | Módulo (resto) | \`9 % 2\` | \`1\` |
| \`**\` | Exponenciación | \`2 ** 3\` | \`8\` |

El orden de las operaciones es familiar de las matemáticas: primero calcula los exponentes, luego multiplicación y división, y finalmente suma y resta. El orden se puede cambiar con paréntesis. Por ejemplo, este fragmento de código

\`\`\`python
print(2 + 3 * 3)
print((2 + 3) * 3)
\`\`\`

imprime

\`\`\`text
11
15
\`\`\`

## Operandos, operadores y tipos de datos

Un cálculo generalmente consta de *operandos* y *operadores*:

\`1\` (operando) \`+\` (operador) \`1\` (operando)

El tipo de dato de un operando generalmente determina el tipo de dato del resultado: si se suman dos enteros, el resultado también será un entero. Si se resta un número de punto flotante de otro número de punto flotante, el resultado es un número de punto flotante.

De hecho, si uno solo de los operandos en una expresión es un número de punto flotante, el resultado también será un número de punto flotante, independientemente de los otros operandos.

La división \`/\` es una excepción a esta regla. Su resultado es un número de punto flotante, incluso si los operandos son enteros. Por ejemplo \`1 / 5\` resultará en el número de punto flotante \`0.2\`.

Ejemplo:

\`\`\`python
altura = 172.5
peso = 68.55

# el Índice de Masa Corporal, o IMC, se calcula dividiendo la masa corporal por el cuadrado de la altura
# la altura se convierte a metros en la fórmula
imc = peso / (altura / 100) ** 2
print(f"El IMC es {imc}")
\`\`\`

Este programa imprime lo siguiente:

\`\`\`text
El IMC es 23.037177063642087
\`\`\`

Observa que Python también tiene un operador de división entera \`//\`. Si los operandos son enteros, producirá un entero. El resultado se redondea hacia abajo al entero más cercano. Por ejemplo este programa

\`\`\`python
x = 3
y = 2

print(f"operador / {x/y}")
print(f"operador // {x//y}")
\`\`\`

imprime

\`\`\`text
operador / 1.5
operador // 1
\`\`\``,
    EUS: `# Eragiketa aritmetikoak

## Ikaskuntza-helburuak

Atal honen ondoren:
- Aldagaiak eragiketa aritmetiko ezberdinetan erabiltzeko gai izango zara
- Jakingo duzu nola tratatu zenbakiak erabiltzailearen sarreran
- Jakingo duzu nola bihurtu balioak oinarrizko beste datu-mota batzuetara

Aurreko ataletan oinarrizko aritmetikako adibideak ikusi dituzu. Hurrengo taulan Python-eko eragile aritmetiko ohikoenak ikus ditzakezu, adibideekin:

| Eragilea | Helburua | Adibidea | Emaitza |
| :--- | :--- | :--- | :--- |
| \`+\` | Batuketa | \`2 + 4\` | \`6\` |
| \`-\` | Kenketa | \`10 - 2.5\` | \`7.5\` |
| \`*\` | Biderketa | \`-2 * 123\` | \`-246\` |
| \`/\` | Zatiketa (koma mugikorreko emaitza) | \`9 / 2\` | \`4.5\` |
| \`//\` | Zatiketa (emaitza osoa) | \`9 // 2\` | \`4\` |
| \`%\` | Modulua (hondarra) | \`9 % 2\` | \`1\` |
| \`**\` | Berreketa | \`2 ** 3\` | \`8\` |

Eragiketen ordena matematikatik ezaguna da: lehenik berretzaileak kalkulatu, gero biderketa eta zatiketa, eta azkenik batuketa eta kenketa. Ordena parentesi bidez alda daiteke. Adibidez kode zati honek

\`\`\`python
print(2 + 3 * 3)
print((2 + 3) * 3)
\`\`\`

hau inprimatzen du

\`\`\`text
11
15
\`\`\`

## Operandoak, eragileak eta datu motak

Kalkulu bat normalean *operandoek* eta *eragileek* osatzen dute:

\`1\` (operandoa) \`+\` (eragilea) \`1\` (operandoa)

Operando baten datu-motak zehazten du normalean emaitzaren datu-mota: bi zenbaki oso batzen badira, emaitza ere zenbaki osoa izango da. Koma mugikorreko zenbaki bat beste koma mugikorreko zenbaki batetik kentzen bada, emaitza koma mugikorreko zenbaki bat da.

Izan ere, adierazpen bateko operandoetako bakar bat koma mugikorreko zenbakia bada, emaitza ere koma mugikorreko zenbakia izango da, gainerako operandoak kontuan hartu gabe.

Zatiketa \`/\` arau honen salbuespena da. Bere emaitza koma mugikorreko zenbakia da, nahiz eta operandoak zenbaki osoak izan. Adibidez \`1 / 5\` eragiketak \`0.2\` koma mugikorreko zenbakia emango du.

Adibidea:

\`\`\`python
altuera = 172.5
pisua = 68.55

# Gorputz Masa Indizea, edo GMI, gorputz-masa altueraren karratuarekin zatituz kalkulatzen da
# altuera metrotara bihurtzen da formulan
gmi = pisua / (altuera / 100) ** 2
print(f"GMIa {gmi} da")
\`\`\`

Programa honek hau inprimatzen du:

\`\`\`text
GMIa 23.037177063642087 da
\`\`\`

Ohartu Pythonek baduela zenbaki osoen zatiketa eragile bat ere \`//\`. Operandoak zenbaki osoak badira, zenbaki oso bat sortuko du. Emaitza hurbileneko zenbaki osora biribiltzen da behera. Adibidez programa honek

\`\`\`python
x = 3
y = 2

print(f"/ eragilea {x/y}")
print(f"// eragilea {x//y}")
\`\`\`

hau inprimatzen du

\`\`\`text
/ eragilea 1.5
// eragilea 1
\`\`\``
  }
});

// Block 2: Numbers as input
blocks.push({
  type: "markdown",
  content: {
    ENG: `## Numbers as input

We have already used the \`input\` command to read in strings from the user. The same function can be used to read in numbers, but the string produced by the function must then be converted to a numeric data type in the program code.

In the previous section we cast integers as strings with the \`str\` function. The same basic principle applies here, but the name of the casting function will be different. A string can be converted into an integer with the function \`int\`.

The following program asks the user for their year of birth and stores it in the variable \`input_str\`. The program then creates another variable \`year\`, which contains the year converted into an integer. After this the calculation \`2021-year\` is possible, using the user-supplied value.

\`\`\`python
input_str = input("Which year were you born? ")
year = int(input_str)
print(f"Your age at the end of the year 2021: {2021 - year}" )
\`\`\`

\`\`\`text
Which year were you born? 1995
Your age at the end of the year 2021: 26
\`\`\`

Usually you do not need to create two separate variables (like \`input_str\` and \`year\` above) to read a number value from the user. Instead, reading the input with the \`input\` function and converting it with the \`int\` function can be achieved in one go:

\`\`\`python
year = int(input("Which year were you born? "))
print(f"Your age at the end of the year 2021: {2021 - year}" )
\`\`\`

Similarly, a string can be converted into a floating point number with the function \`float\`. This programs asks the user for their height and weight, and uses these to calculate their BMI:

\`\`\`python
height = float(input("What is your height? "))
weight = float(input("What is your weight? "))

height = height / 100
bmi = weight / height ** 2

print(f"The BMI is {bmi}")
\`\`\`

An example printout from the program:

\`\`\`text
What is your height? 163
What is your weight? 74.45
The BMI is 28.02137829801649
\`\`\``,
    CAS: `## Números como entrada

Ya hemos utilizado el comando \`input\` para leer cadenas del usuario. La misma función se puede utilizar para leer números, pero la cadena producida por la función debe convertirse a un tipo de dato numérico en el código del programa.

En la sección anterior convertimos enteros a cadenas con la función \`str\`. Aquí se aplica el mismo principio básico, pero el nombre de la función de conversión será diferente. Una cadena se puede convertir en un entero con la función \`int\`.

El siguiente programa pregunta al usuario su año de nacimiento y lo almacena en la variable \`entrada_str\`. Luego, el programa crea otra variable \`year\`, que contiene el año convertido a un entero. Después de esto, el cálculo \`2021-year\` es posible, utilizando el valor proporcionado por el usuario.

\`\`\`python
entrada_str = input("¿En qué año naciste? ")
year = int(entrada_str)
print(f"Tu edad al final del año 2021: {2021 - year}" )
\`\`\`

\`\`\`text
¿En qué año naciste? 1995
Tu edad al final del año 2021: 26
\`\`\`

Normalmente no necesitas crear dos variables separadas (como \`entrada_str\` y \`year\` arriba) para leer un valor numérico del usuario. En su lugar, leer la entrada con la función \`input\` y convertirla con la función \`int\` se puede lograr de una sola vez:

\`\`\`python
year = int(input("¿En qué año naciste? "))
print(f"Tu edad al final del año 2021: {2021 - year}" )
\`\`\`

Del mismo modo, una cadena se puede convertir en un número de punto flotante con la función \`float\`. Este programa pregunta al usuario su altura y peso, y los utiliza para calcular su IMC:

\`\`\`python
altura = float(input("¿Cuál es tu altura? "))
peso = float(input("¿Cuál es tu peso? "))

altura = altura / 100
imc = peso / altura ** 2

print(f"El IMC es {imc}")
\`\`\`

Un ejemplo de impresión del programa:

\`\`\`text
¿Cuál es tu altura? 163
¿Cuál es tu peso? 74.45
El IMC es 28.02137829801649
\`\`\``,
    EUS: `## Zenbakiak sarrera gisa

Dagoeneko erabili dugu \`input\` komandoa erabiltzailearen kateak irakurtzeko. Funtzio bera erabil daiteke zenbakiak irakurtzeko, baina funtzioak sortutako katea zenbakizko datu-mota batera bihurtu behar da programaren kodean.

Aurreko atalean zenbaki osoak kate bihurtu genituen \`str\` funtzioarekin. Oinarrizko printzipio bera aplikatzen da hemen, baina bihurketa-funtzioaren izena ezberdina izango da. Kate bat zenbaki oso bihur daiteke \`int\` funtzioarekin.

Hurrengo programak erabiltzaileari bere jaiotze-urtea galdetzen dio eta \`sarrera_str\` aldagaian gordetzen du. Ondoren, programak beste aldagai bat sortzen du, \`urtea\`, urtea zenbaki oso bihurtuta duena. Honen ondoren, \`2021-urtea\` kalkulua posible da, erabiltzaileak emandako balioa erabiliz.

\`\`\`python
sarrera_str = input("Zein urtetan jaio zinen? ")
urtea = int(sarrera_str)
print(f"Zure adina 2021. urtearen amaieran: {2021 - urtea}" )
\`\`\`

\`\`\`text
Zein urtetan jaio zinen? 1995
Zure adina 2021. urtearen amaieran: 26
\`\`\`

Normalean ez duzu bi aldagai bereizi sortu beharrik (goiko \`sarrera_str\` eta \`urtea\` bezala) erabiltzailearen zenbakizko balio bat irakurtzeko. Horren ordez, sarrera \`input\` funtzioarekin irakurtzea eta \`int\` funtzioarekin bihurtzea kolpe batean lor daiteke:

\`\`\`python
urtea = int(input("Zein urtetan jaio zinen? "))
print(f"Zure adina 2021. urtearen amaieran: {2021 - urtea}" )
\`\`\`

Era berean, kate bat koma mugikorreko zenbaki bihur daiteke \`float\` funtzioarekin. Programa honek erabiltzaileari bere altuera eta pisua galdetzen dizkio, eta hauek erabiltzen ditu bere GMI kalkulatzeko:

\`\`\`python
altuera = float(input("Zein da zure altuera? "))
pisua = float(input("Zein da zure pisua? "))

altuera = altuera / 100
gmi = pisua / altuera ** 2

print(f"GMIa {gmi} da")
\`\`\`

Programaren inprimaketa adibide bat:

\`\`\`text
Zein da zure altuera? 163
Zein da zure pisua? 74.45
GMIa 28.02137829801649 da
\`\`\``
  }
});

// Block 3: Exercise Times Five
blocks.push({
  type: "exercise",
  exerciseId: "part01-09_times_five",
  title: {
    ENG: "Times five",
    CAS: "Por cinco",
    EUS: "Bider bost"
  },
  description: {
    ENG: "Please write a program which asks the user for a number. The program then prints out the number multiplied by five.",
    CAS: "Escribe un programa que pida un número al usuario. Luego, el programa debe imprimir el número multiplicado por cinco.",
    EUS: "Mesedez idatzi programa bat erabiltzaileari zenbaki bat eskatzen diona. Ondoren, programak zenbakia bostekin biderkatuta inprimatzen du."
  },
  initialCode: "# Write your code here\n",
  testCode: `
import unittest
class TestTimesFive(unittest.TestCase):
    def test_output(self):
        output = run_student_code(inputs=["3"])
        self.assertIn("15", output)
        self.assertIn("3 times 5 is 15", output)
`
});

// Block 4: Exercise Name and Age
blocks.push({
  type: "exercise",
  exerciseId: "part01-10_name_and_age",
  title: {
    ENG: "Name and age",
    CAS: "Nombre y edad",
    EUS: "Izena eta adina"
  },
  description: {
    ENG: "Please write a program which asks the user for their name and year of birth. The program then prints out a message as follows:\n\nSample output:\nWhat is your name? Frances Fictitious\nWhich year were you born? 1990\nHi Frances Fictitious, you will be 31 years old at the end of the year 2021",
    CAS: "Escribe un programa que pida al usuario su nombre y año de nacimiento. El programa debe imprimir un mensaje como sigue:\n\nEjemplo de salida:\nWhat is your name? Frances Fictitious\nWhich year were you born? 1990\nHi Frances Fictitious, you will be 31 years old at the end of the year 2021",
    EUS: "Idatzi programa bat erabiltzaileari bere izena eta jaiotze-urtea eskatzen dizkiona. Ondoren, programak mezu bat inprimatzen du honela:\n\nIrteera adibidea:\nWhat is your name? Frances Fictitious\nWhich year were you born? 1990\nHi Frances Fictitious, you will be 31 years old at the end of the year 2021"
  },
  initialCode: "# Write your code here\n",
  testCode: `
import unittest
class TestNameAge(unittest.TestCase):
    def test_output(self):
        output = run_student_code(inputs=["Frances", "1990"])
        self.assertIn("31 years old", output)
        self.assertIn("Frances", output)
`
});

// Block 5: Using variables
blocks.push({
  type: "markdown",
  content: {
    ENG: `## Using variables

Let's have a look at a program which calculates the sum of three numbers given by the user:

\`\`\`python
number1 = int(input("First number: "))
number2 = int(input("Second number: "))
number3 = int(input("Third number: "))

sum = number1 + number2 + number3
print(f"The sum of the numbers: {sum}")
\`\`\`

An example execution of the program:

\`\`\`text
First number: 5
Second number: 21
Third number: 7
The sum of the numbers: 33
\`\`\`

The program uses four different variables, but two would easily suffice in this case:

\`\`\`python
sum = 0

number = int(input("First number: "))
sum = sum + number

number = int(input("Second number: "))
sum = sum + number

number = int(input("Third number: "))
sum = sum + number

print(f"The sum of the numbers: {sum}")
\`\`\`

Now all inputs from the user are read into the one and the same variable \`number\`. The value of the variable \`sum\` is increased by the value of the variable \`number\` each time the user inputs a new number.

Let's take a closer look at this command:

\`\`\`python
sum = sum + number
\`\`\`

Here, the value of the variable \`sum\` and the value of the variable \`number\` are added together, and the result is stored back in the variable \`sum\`. For example, if before the command the value of \`sum\` is 3 and the value of \`number\` is 2, after the command is executed, the value of \`sum\` is 5.

Increasing the value of a variable is a very common operation. As such, there is a commonly used shorthand notation which achieves the same result as the explicit summing up above:

\`\`\`python
sum += number
\`\`\`

This allows us to write the above program a little more concisely:

\`\`\`python
sum = 0

number = int(input("First number: "))
sum += number

number = int(input("Second number: "))
sum += number

number = int(input("Third number: "))
sum += number

print(f"The sum of the numbers: {sum}")
\`\`\`

In fact, we don't necessarily need the variable \`number\` at all. The inputs from the user can also be processed like this:

\`\`\`python
sum = 0

sum += int(input("First number: "))
sum += int(input("Second number: "))
sum += int(input("Third number: "))

print(f"The sum of the numbers: {sum}")
\`\`\`

Of course, it will depend on the context how many variables are needed. If it is required to remember each value the user inputs, it will not be possible to "reuse" the same variable to read different values from the user. Consider the following:

\`\`\`python
number1 = int(input("First number: "))
number2 = int(input("Second number: "))

print(f"{number1} + {number2} = {number1+number2}")
\`\`\`

\`\`\`text
First number: 2
Second number: 3
2 + 3 = 5
\`\`\`

On the other hand, the above program does not have a named variable for storing the sum of the two values. "Reusing" a variable only makes sense when there is a need to temporarily store things of a similar type and purpose, for example when summing numbers.

In the following example the variable \`data\` is used to first store the name of the user, and then their age. This is not at all sensible.

\`\`\`python
data = input("What is your name? ")
print("Hi " + data + "!")

data = int(input("What is your age? "))
# program continues...
\`\`\`

A better idea is to use separate variables, with descriptive names:

\`\`\`python
name = input("What is your name? ")
print("Hi " + name + "!")

age = int(input("What is your age? "))
# program continues...
\`\`\``,
    CAS: `## Usando variables

Echemos un vistazo a un programa que calcula la suma de tres números dados por el usuario:

\`\`\`python
numero1 = int(input("Primer número: "))
numero2 = int(input("Segundo número: "))
numero3 = int(input("Tercer número: "))

suma = numero1 + numero2 + numero3
print(f"La suma de los números: {suma}")
\`\`\`

Un ejemplo de ejecución del programa:

\`\`\`text
Primer número: 5
Segundo número: 21
Tercer número: 7
La suma de los números: 33
\`\`\`

El programa utiliza cuatro variables diferentes, pero dos bastarían fácilmente en este caso:

\`\`\`python
suma = 0

numero = int(input("Primer número: "))
suma = suma + numero

numero = int(input("Segundo número: "))
suma = suma + numero

numero = int(input("Tercer número: "))
suma = suma + numero

print(f"La suma de los números: {suma}")
\`\`\`

Ahora todas las entradas del usuario se leen en la misma variable \`numero\`. El valor de la variable \`suma\` se incrementa con el valor de la variable \`numero\` cada vez que el usuario introduce un nuevo número.

Echemos un vistazo más de cerca a este comando:

\`\`\`python
suma = suma + numero
\`\`\`

Aquí, el valor de la variable \`suma\` y el valor de la variable \`numero\` se suman, y el resultado se almacena de nuevo en la variable \`suma`. Por ejemplo, si antes del comando el valor de \`suma\` es 3 y el valor de \`numero\` es 2, después de ejecutar el comando, el valor de \`suma\` es 5.

Incrementar el valor de una variable es una operación muy común. Como tal, existe una notación abreviada comúnmente utilizada que logra el mismo resultado que la suma explícita anterior:

\`\`\`python
suma += numero
\`\`\`

Esto nos permite escribir el programa anterior de manera un poco más concisa:

\`\`\`python
suma = 0

numero = int(input("Primer número: "))
suma += numero

numero = int(input("Segundo número: "))
suma += numero

numero = int(input("Tercer número: "))
suma += numero

print(f"La suma de los números: {suma}")
\`\`\`

De hecho, no necesitamos necesariamente la variable \`numero\` en absoluto. Las entradas del usuario también se pueden procesar así:

\`\`\`python
suma = 0

suma += int(input("Primer número: "))
suma += int(input("Segundo número: "))
suma += int(input("Tercer número: "))

print(f"La suma de los números: {suma}")
\`\`\`

Por supuesto, dependerá del contexto cuántas variables se necesiten. Si es necesario recordar cada valor que el usuario introduce, no será posible "reutilizar" la misma variable para leer diferentes valores del usuario. Considera lo siguiente:

\`\`\`python
numero1 = int(input("Primer número: "))
numero2 = int(input("Segundo número: "))

print(f"{numero1} + {numero2} = {numero1+numero2}")
\`\`\`

\`\`\`text
Primer número: 2
Segundo número: 3
2 + 3 = 5
\`\`\`

Por otro lado, el programa anterior no tiene una variable con nombre para almacenar la suma de los dos valores. "Reutilizar" una variable solo tiene sentido cuando hay necesidad de almacenar temporalmente cosas de un tipo y propósito similar, por ejemplo, al sumar números.

En el siguiente ejemplo, la variable \`datos\` se usa primero para almacenar el nombre del usuario, y luego su edad. Esto no es en absoluto sensato.

\`\`\`python
datos = input("¿Cómo te llamas? ")
print("Hola " + datos + "!")

datos = int(input("¿Cuántos años tienes? "))
# el programa continúa...
\`\`\`

Una mejor idea es usar variables separadas, con nombres descriptivos:

\`\`\`python
nombre = input("¿Cómo te llamas? ")
print("Hola " + nombre + "!")

edad = int(input("¿Cuántos años tienes? "))
# el programa continúa...
\`\`\``,
    EUS: `## Aldagaiak erabiltzen

Ikus dezagun erabiltzaileak emandako hiru zenbakiren batura kalkulatzen duen programa bat:

\`\`\`python
zenbakia1 = int(input("Lehen zenbakia: "))
zenbakia2 = int(input("Bigarren zenbakia: "))
zenbakia3 = int(input("Hirugarren zenbakia: "))

batura = zenbakia1 + zenbakia2 + zenbakia3
print(f"Zenbakien batura: {batura}")
\`\`\`

Programaren exekuzio baten adibidea:

\`\`\`text
Lehen zenbakia: 5
Bigarren zenbakia: 21
Hirugarren zenbakia: 7
Zenbakien batura: 33
\`\`\`

Programak lau aldagai ezberdin erabiltzen ditu, baina bi nahikoak lirateke kasu honetan:

\`\`\`python
batura = 0

zenbakia = int(input("Lehen zenbakia: "))
batura = batura + zenbakia

zenbakia = int(input("Bigarren zenbakia: "))
batura = batura + zenbakia

zenbakia = int(input("Hirugarren zenbakia: "))
batura = batura + zenbakia

print(f"Zenbakien batura: {batura}")
\`\`\`

Orain erabiltzailearen sarrera guztiak \`zenbakia\` aldagai berean irakurtzen dira. \`batura\` aldagaiaren balioa \`zenbakia\` aldagaiaren balioarekin handitzen da erabiltzaileak zenbaki berri bat sartzen duen bakoitzean.

Azter dezagun gertuagotik komando hau:

\`\`\`python
batura = batura + zenbakia
\`\`\`

Hemen, \`batura\` aldagaiaren balioa eta \`zenbakia\` aldagaiaren balioa batzen dira, eta emaitza \`batura\` aldagaian gordetzen da berriro. Adibidez, komandoa baino lehen \`batura\`-ren balioa 3 bada eta \`zenbakia\`-rena 2 bada, komandoa exekutatu ondoren, \`batura\`-ren balioa 5 da.

Aldagai baten balioa handitzea oso eragiketa arrunta da. Horregatik, bada goiko batuketa esplizituaren emaitza bera lortzen duen idazkera laburtu bat:

\`\`\`python
batura += zenbakia
\`\`\`

Honek goiko programa pixka bat laburrago idazteko aukera ematen digu:

\`\`\`python
batura = 0

zenbakia = int(input("Lehen zenbakia: "))
batura += zenbakia

zenbakia = int(input("Bigarren zenbakia: "))
batura += zenbakia

zenbakia = int(input("Hirugarren zenbakia: "))
batura += zenbakia

print(f"Zenbakien batura: {batura}")
\`\`\`

Izan ere, ez dugu \`zenbakia\` aldagaia zertan behar. Erabiltzailearen sarrerak honela ere prozesatu daitezke:

\`\`\`python
batura = 0

batura += int(input("Lehen zenbakia: "))
batura += int(input("Bigarren zenbakia: "))
batura += int(input("Hirugarren zenbakia: "))

print(f"Zenbakien batura: {batura}")
\`\`\`

Noski, testuinguruaren araberakoa izango da zenbat aldagai behar diren. Erabiltzaileak sartzen duen balio bakoitza gogoratu behar bada, ezinezkoa izango da aldagai bera "berrerabiltzea" erabiltzailearen balio ezberdinak irakurtzeko. Kontuan hartu hau:

\`\`\`python
zenbakia1 = int(input("Lehen zenbakia: "))
zenbakia2 = int(input("Bigarren zenbakia: "))

print(f"{zenbakia1} + {zenbakia2} = {zenbakia1+zenbakia2}")
\`\`\`

\`\`\`text
Lehen zenbakia: 2
Bigarren zenbakia: 3
2 + 3 = 5
\`\`\`

Bestalde, goiko programak ez du bi balioen batura gordetzeko izendatutako aldagairik. Aldagai bat "berrerabiltzeak" zentzua du bakarrik antzeko mota eta helburuko gauzak aldi baterako gorde behar direnean, adibidez zenbakiak batzerakoan.

Hurrengo adibidean \`datuak\` aldagaia erabiltzen da lehenik erabiltzailearen izena gordetzeko, eta gero bere adina. Hau ez da batere zentzuzkoa.

\`\`\`python
datuak = input("Nola duzu izena? ")
print("Kaixo " + datuak + "!")

datuak = int(input("Zenbat urte dituzu? "))
# programak jarraitzen du...
\`\`\`

Ideia hobea da aldagai bereiziak erabiltzea, izen deskribatzaileekin:

\`\`\`python
izena = input("Nola duzu izena? ")
print("Kaixo " + izena + "!")

adina = int(input("Zenbat urte dituzu? "))
# programak jarraitzen du...
\`\`\``
  }
});

// Block 6: Exercise Seconds in a day
blocks.push({
  type: "exercise",
  exerciseId: "part01-11_seconds_in_a_day",
  title: {
    ENG: "Seconds in a day",
    CAS: "Segundos en un día",
    EUS: "Segunduak egun batean"
  },
  description: {
    ENG: "Please write a program which asks the user for a number of days. The program then prints out the number of seconds in the amount of days given.",
    CAS: "Escribe un programa que pida al usuario un número de días. Luego, el programa imprime el número de segundos en la cantidad de días dada.",
    EUS: "Idatzi programa bat erabiltzaileari egun kopuru bat eskatzen diona. Ondoren, programak emandako egun kopuruko segundo kopurua inprimatzen du."
  },
  initialCode: "# Write your code here\n",
  testCode: `
import unittest
class TestSeconds(unittest.TestCase):
    def test_output(self):
        output = run_student_code(inputs=["1"])
        self.assertIn("86400", output)
        
        output2 = run_student_code(inputs=["7"])
        self.assertIn("604800", output2)
`
});

// Block 7: Exercise Fix Product
blocks.push({
  type: "exercise",
  exerciseId: "part01-12_fix_product",
  title: {
    ENG: "Fix the code: Product",
    CAS: "Arregla el código: Producto",
    EUS: "Konpondu kodea: Biderkadura"
  },
  description: {
    ENG: "This program asks the user for three numbers. The program then prints out their product, that is, the numbers multiplied by each other. There is, however, something wrong with the program. Please fix it.",
    CAS: "Este programa pide al usuario tres números. Luego imprime su producto. Sin embargo, hay algo mal en el programa. Por favor, arréglalo.",
    EUS: "Programa honek hiru zenbaki eskatzen dizkio erabiltzaileari. Ondoren, haien biderkadura inprimatzen du. Hala ere, zerbait gaizki dago programan. Mesedez, konpondu."
  },
  initialCode: `number = int(input("Please type in the first number: "))
number = int(input("Please type in the second number: "))
number = int(input("Please type in the third number: "))

product = number * number * number

print("The product is", product)`,
  testCode: `
import unittest
class TestProduct(unittest.TestCase):
    def test_output(self):
        # 2, 3, 5 -> 30
        output = run_student_code(inputs=["2", "3", "5"])
        self.assertIn("30", output)
`
});

// Block 8: Exercise Sum and Product
blocks.push({
  type: "exercise",
  exerciseId: "part01-13_sum_and_product",
  title: {
    ENG: "Sum and product",
    CAS: "Suma y producto",
    EUS: "Batuketa eta biderkadura"
  },
  description: {
    ENG: "Please write a program which asks the user for two numbers. The program will then print out the sum and the product of the two numbers.",
    CAS: "Escribe un programa que pida al usuario dos números. El programa imprimirá la suma y el producto de los dos números.",
    EUS: "Idatzi programa bat erabiltzaileari bi zenbaki eskatzen dizkiona. Programak bi zenbakien batura eta biderkadura inprimatuko ditu."
  },
  initialCode: "# Write your code here\n",
  testCode: `
import unittest
class TestSumProd(unittest.TestCase):
    def test_output(self):
        output = run_student_code(inputs=["3", "7"])
        self.assertIn("10", output)
        self.assertIn("21", output)
`
});

// Block 9: Exercise Sum and Mean
blocks.push({
  type: "exercise",
  exerciseId: "part01-14_sum_and_mean",
  title: {
    ENG: "Sum and mean",
    CAS: "Suma y media",
    EUS: "Batuketa eta batezbestekoa"
  },
  description: {
    ENG: "Please write a program which asks the user for four numbers. The program then prints out the sum and the mean of the numbers.",
    CAS: "Escribe un programa que pida al usuario cuatro números. El programa imprimirá la suma y la media de los números.",
    EUS: "Idatzi programa bat erabiltzaileari lau zenbaki eskatzen dizkiona. Programak zenbakien batura eta batezbestekoa inprimatuko ditu."
  },
  initialCode: "# Write your code here\n",
  testCode: `
import unittest
class TestSumMean(unittest.TestCase):
    def test_output(self):
        output = run_student_code(inputs=["2", "1", "6", "7"])
        self.assertIn("16", output)
        self.assertIn("4.0", output)
`
});

// Block 10: Exercise Food Expenditure
blocks.push({
  type: "exercise",
  exerciseId: "part01-15_food_expenditure",
  title: {
    ENG: "Food expenditure",
    CAS: "Gasto en comida",
    EUS: "Janari gastua"
  },
  description: {
    ENG: "Please write a program which estimates a user's typical food expenditure. The program asks the user how many times a week they eat at the student cafeteria. Then it asks for the price of a typical student lunch, and for money spent on groceries during the week. Based on this information the program calculates the user's typical food expenditure both weekly and daily.",
    CAS: "Escribe un programa que estime el gasto típico en comida de un usuario. Pregunta cuántas veces come en la cafetería, el precio del almuerzo y el gasto en comestibles. Calcula el gasto semanal y diario.",
    EUS: "Idatzi erabiltzailearen janari-gastu tipikoa kalkulatzen duen programa. Galdetu zenbat aldiz jaten duen kafetegian, bazkariaren prezioa eta janari-erosketetan gastatutako dirua. Kalkulatu asteko eta eguneko gastua."
  },
  initialCode: "# Write your code here\n",
  testCode: `
import unittest
class TestFood(unittest.TestCase):
    def test_output(self):
        # 4 times, 2.5 price, 28.5 groceries
        # Weekly: 4 * 2.5 + 28.5 = 10 + 28.5 = 38.5
        # Daily: 38.5 / 7 = 5.5
        output = run_student_code(inputs=["4", "2.5", "28.5"])
        self.assertIn("Daily: 5.5 euros", output)
        self.assertIn("Weekly: 38.5 euros", output)
`
});

// Block 11: Exercise Students in Groups
blocks.push({
  type: "exercise",
  exerciseId: "part01-16_students_in_groups",
  title: {
    ENG: "Students in groups",
    CAS: "Estudiantes en grupos",
    EUS: "Ikasleak taldetan"
  },
  description: {
    ENG: "Please write a program which asks for the number of students on a course and the desired group size. The program will then print out the number of groups formed from the students on the course. If the division is not even, one of the groups may have fewer members than specified. Hint: the integer division operator // could come in handy here.",
    CAS: "Escribe un programa que pida el número de estudiantes y el tamaño del grupo deseado. Imprime el número de grupos formados. Si la división no es exacta, un grupo puede tener menos miembros.",
    EUS: "Idatzi programa bat ikasle kopurua eta taldearen tamaina eskatzen dituena. Inprimatu osatutako talde kopurua. Zatiketa zehatza ez bada, talde batek kide gutxiago izan ditzake."
  },
  initialCode: "# Write your code here\n",
  testCode: `
import unittest
class TestGroups(unittest.TestCase):
    def test_output(self):
        # 8 students, 4 per group -> 2
        out1 = run_student_code(inputs=["8", "4"])
        self.assertIn("2", out1)
        
        # 11 students, 3 per group -> 4 groups (3 full + 1 partial)
        out2 = run_student_code(inputs=["11", "3"])
        self.assertIn("4", out2)
`
});

const section = {
  id: "part1-4",
  title: {
    ENG: "4. Arithmetic operations",
    CAS: "4. Operaciones aritméticas",
    EUS: "4. Eragiketa aritmetikoak"
  },
  blocks: blocks
};

fs.writeFileSync('src/data/part1/section4.json', JSON.stringify(section, null, 2));
console.log("Section 1-4 written successfully.");
