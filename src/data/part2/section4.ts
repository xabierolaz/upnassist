import { CoursePage } from '../mooc-exercises';

export const section4: CoursePage = {
  id: "part2-4",
  title: {
    ENG: "Simple loops",
    CAS: "Bucles simples",
    EUS: "Begizta sinpleak"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Simple loops

A loop allows sections of code to be repeated multiple times. The 
\`while\` loop is one of the most common loop structures.

## The while True loop

The structure 
\`while True:\` creates a loop that continues forever, unless it is interrupted. The command 
\`break\` is used to exit the loop.

\`\`\`python
while True:
    number = int(input("Please type in a number, -1 to quit: "))

    if number == -1:
        break

    print(number ** 2)

print("Thanks and bye!")
\`\`\`

\`\`\`text
Please type in a number, -1 to quit: **2**
4
Please type in a number, -1 to quit: **-1**
Thanks and bye!
\`\`\`
`,
        CAS: `
# Bucles simples

Un bucle permite repetir secciones de código múltiples veces. El bucle 
\`while\` (mientras) es una de las estructuras de bucle más comunes.

## El bucle while True

La estructura 
\`while True:\` crea un bucle que continúa para siempre, a menos que sea interrumpido. El comando 
\`break\` se usa para salir del bucle.

\`\`\`python
while True:
    number = int(input("Por favor escribe un número, -1 para salir: "))

    if number == -1:
        break

    print(number ** 2)

print("¡Gracias y adiós!")
\`\`\`

\`\`\`text
Por favor escribe un número, -1 para salir: **2**
4
Por favor escribe un número, -1 para salir: **-1**
¡Gracias y adiós!
\`\`\`
`,
        EUS: `
# Begizta sinpleak

Begizta batek kode zatiak hainbat aldiz errepikatzeko aukera ematen du. 
\`while\` begizta da egitura ohikoenetako bat.

## while True begizta

\`while True:\` egiturak betirako jarraitzen duen begizta bat sortzen du, eten ezean. 
\`break\` komandoa begiztatik irteteko erabiltzen da.

\`\`\`python
while True:
    number = int(input("Mesedez idatzi zenbaki bat, -1 irteteko: "))

    if number == -1:
        break

    print(number ** 2)

print("Eskerrik asko eta agur!")
\`\`\`

\`\`\`text
Mesedez idatzi zenbaki bat, -1 irteteko: **2**
4
Mesedez idatzi zenbaki bat, -1 irteteko: **-1**
Eskerrik asko eta agur!
\`\`\`
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part02-15_shall_we_continue',
      title: {
        ENG: "Shall we continue?",
        CAS: "¿Continuamos?",
        EUS: "Jarraituko dugu?"
      },
      description: {
        ENG: "Write a program that asks the user 'hi' and then 'shall we continue?' until the user inputs 'no'. Then print 'okay then'.",
        CAS: "Escribe un programa que diga 'hi' y pregunte 'shall we continue?' hasta que el usuario escriba 'no'. Entonces imprime 'okay then'.",
        EUS: "Idatzi programa bat 'hi' esan eta 'shall we continue?' galdetzen duena erabiltzaileak 'no' idatzi arte. Orduan inprimatu 'okay then'."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
from unittest.mock import patch

class TestContinue(unittest.TestCase):
    def test_run(self):
        # inputs: yes, yes, no
        out = run_student_code(inputs=['yes', 'yes', 'no'])
        # Should print hi 3 times (initial + 2 loops)
        # Actually logic:
        # Loop: print hi, ask input. If no break.
        # So inputs: yes -> hi, ask. yes -> hi, ask. no -> hi, ask, break.
        # Wait, description says: asks user 'hi' and then 'shall we continue?'.
        # Let's assume structure:
        # while True:
        #   print("hi")
        #   res = input("shall we continue? ")
        #   if res == "no": break
        # print("okay then")
        
        self.assertIn("okay then", out)
        if out.count("hi") < 1:
             self.fail("Should print 'hi' inside the loop.")
`
    },
    {
      type: 'markdown',
      content: {
        ENG: `
## Loops and helper variables

We can use variables outside the loop to keep track of what happens inside.

\`\`\`python
attempts = 0

while True:
    code = input("Please type in your PIN: ")
    attempts += 1

    if code == "1234":
        print("Correct PIN!")
        break

    if attempts == 3:
        print("Too many attempts...")
        break

    print("Incorrect...try again")
\`\`\`
`,
        CAS: `
## Bucles y variables auxiliares

Podemos usar variables fuera del bucle para llevar un registro de lo que sucede dentro.

\`\`\`python
intentos = 0

while True:
    codigo = input("Por favor escribe tu PIN: ")
    intentos += 1

    if codigo == "1234":
        print("¡PIN correcto!")
        break

    if intentos == 3:
        print("Demasiados intentos...")
        break

    print("Incorrecto...inténtalo de nuevo")
\`\`\`
`,
        EUS: `
## Begiztak eta aldagai laguntzaileak

Begiztatik kanpoko aldagaiak erabil ditzakegu barruan gertatzen dena jarraitzeko.

\`\`\`python
saiakerak = 0

while True:
    kodea = input("Mesedez idatzi zure PINa: ")
    saiakerak += 1

    if kodea == "1234":
        print("PIN zuzena!")
        break

    if saiakerak == 3:
        print("Saiakera gehiegi...")
        break

    print("Okerra...saiatu berriro")
\`\`\`
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part02-16_pin_and_attempts',
      title: {
        ENG: "PIN and number of attempts",
        CAS: "PIN y número de intentos",
        EUS: "PINa eta saiakera kopurua"
      },
      description: {
        ENG: "Write a program that asks for a PIN code. Keep asking until the user enters '4321'. When correct, print 'Correct! It took you X attempts'.",
        CAS: "Escribe un programa que pida un código PIN. Sigue pidiendo hasta que el usuario introduzca '4321'. Cuando sea correcto, imprime 'Correct! It took you X attempts'.",
        EUS: "Idatzi PIN kodea eskatzen duen programa bat. Jarraitu galdetzen erabiltzaileak '4321' sartu arte. Zuzena denean, inprimatu 'Correct! It took you X attempts'."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
class TestPin(unittest.TestCase):
    def test_run(self):
        out = run_student_code(inputs=['1111', '2222', '4321'])
        self.assertIn("Correct!", out)
        self.assertIn("3 attempts", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part02-17_countdown',
      title: {
        ENG: "Countdown",
        CAS: "Cuenta atrás",
        EUS: "Atzerako kontaketa"
      },
      description: {
        ENG: "Write a program that asks for a number and prints a countdown from that number to 1. Then print 'Now!'.",
        CAS: "Escribe un programa que pida un número e imprima una cuenta atrás desde ese número hasta 1. Luego imprime 'Now!'.",
        EUS: "Idatzi programa bat zenbaki bat eskatzen duena eta zenbaki horretatik 1era atzerako kontaketa inprimatzen duena. Gero inprimatu 'Now!'."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
class TestCountdown(unittest.TestCase):
    def test_run(self):
        out = run_student_code(inputs=['3'])
        self.assertIn("3", out)
        self.assertIn("2", out)
        self.assertIn("1", out)
        self.assertIn("Now!", out)
`
    },
    {
      type: 'markdown',
      content: {
        ENG: `
## Concatenating strings

We can build strings inside a loop using the 
\`+\` operator.

\`\`\`python
words = ""
while True:
    word = input("Type a word: ")
    if word == "end":
        break
    words += word + " "

print(words)
\`\`\`
`,
        CAS: `
## Concatenando cadenas

Podemos construir cadenas dentro de un bucle usando el operador 
\`+\`.

\`\`\`python
palabras = ""
while True:
    palabra = input("Escribe una palabra: ")
    if palabra == "fin":
        break
    palabras += palabra + " "

print(palabras)
\`\`\`
`,
        EUS: `
## Kateak kateatzen

Begizta baten barruan kateak eraiki ditzakegu 
\`+\` eragilea erabiliz.

\`\`\`python
hitzak = ""
while True:
    hitza = input("Idatzi hitz bat: ")
    if hitza == "amaiera":
        break
    hitzak += hitza + " "

print(hitzak)
\`\`\`
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part02-18_repeat_password',
      title: {
        ENG: "Repeat password",
        CAS: "Repetir contraseña",
        EUS: "Errepikatu pasahitza"
      },
      description: {
        ENG: "Write a program that asks for a password and then asks to repeat it. Keep asking until they match. Then print 'User account created!'.",
        CAS: "Escribe un programa que pida una contraseña y luego pida repetirla. Sigue preguntando hasta que coincidan. Entonces imprime 'User account created!'.",
        EUS: "Idatzi pasahitza eskatu eta gero errepikatzeko eskatzen duen programa. Jarraitu galdetzen bat etorri arte. Orduan inprimatu 'User account created!'."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
class TestPass(unittest.TestCase):
    def test_run(self):
        out = run_student_code(inputs=['secret', 'wrong', 'secret'])
        self.assertIn("User account created!", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part02-19_story',
      title: {
        ENG: "Story",
        CAS: "Historia",
        EUS: "Istorioa"
      },
      description: {
        ENG: "Write a program that keeps asking for words and adds them to a story. If the user types 'end', the program prints the story. Also, if the user types the same word twice in a row, the program stops and prints the story.",
        CAS: "Escribe un programa que siga pidiendo palabras y las añada a una historia. Si el usuario escribe 'end', el programa imprime la historia. Además, si el usuario escribe la misma palabra dos veces seguidas, el programa se detiene e imprime la historia.",
        EUS: "Idatzi hitzak etengabe eskatu eta istorio bati gehitzen dizkion programa. Erabiltzaileak 'end' idazten badu, programak istorioa inprimatzen du. Gainera, erabiltzaileak hitz bera bi aldiz jarraian idazten badu, programa gelditu eta istorioa inprimatzen du."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
class TestStory(unittest.TestCase):
    def test_end(self):
        out = run_student_code(inputs=['Once', 'upon', 'a', 'time', 'end'])
        self.assertIn("Once upon a time", out)
        
    def test_repeat(self):
        out = run_student_code(inputs=['It', 'was', 'a', 'dark', 'dark', 'night'])
        self.assertIn("It was a dark", out)
        if "dark dark" in out:
             self.fail("Should stop before adding the second repeated word.")
`
    },
    {
      type: 'exercise',
      exerciseId: 'part02-20_working_with_numbers',
      title: {
        ENG: "Working with numbers",
        CAS: "Trabajando con números",
        EUS: "Zenbakiekin lanean"
      },
      description: {
        ENG: "Write a program that asks for numbers. If the user inputs 0, the program stops. Then print the count, sum, mean, positive and negative count of the numbers.",
        CAS: "Escribe un programa que pida números. Si el usuario introduce 0, el programa se detiene. Luego imprime la cuenta, suma, media, y cuenta de positivos y negativos.",
        EUS: "Idatzi zenbakiak eskatzen dituen programa bat. Erabiltzaileak 0 sartzen badu, programa gelditu egiten da. Gero inprimatu zenbakien kopurua, batura, batezbestekoa, eta positibo eta negatiboen kopurua."
      },
      initialCode: "print(\"Please type in integer numbers. Type in 0 to finish.\")\n# Write your solution here\n",
      testCode: `
import unittest
class TestNumbers(unittest.TestCase):
    def test_run(self):
        out = run_student_code(inputs=['5', '2', '-1', '0'])
        self.assertIn("Count: 3", out)
        self.assertIn("Sum: 6", out)
        self.assertIn("Mean: 2.0", out)
        self.assertIn("Positive: 2", out)
        self.assertIn("Negative: 1", out)
`
    }
  ]
};
