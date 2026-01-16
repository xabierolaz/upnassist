import { CoursePage } from '../mooc-exercises';

export const section3: CoursePage = {
  id: "part3-3",
  title: {
    ENG: "More loops",
    CAS: "Más bucles",
    EUS: "Begizta gehiago"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# More loops

## After this section:

- You will understand when the 
`break`
 command is needed to break out of loops
- You will be able to use the 
`continue`
 command to move to the next iteration
- You will understand how nested loops work

## The break command

You have already come across the 
`break`
 command. It can be used to stop the execution of a loop immediately.

\`\`\`python
sum = 0
while True:
    number = int(input("Please type in a number, -1 to exit: "))
    if number == -1:
        break
    sum += number

print(f"The sum is {sum}")
\`\`\`

## The continue command

Another way to change the way a loop is executed is the 
`continue`
 command. It causes the execution of the loop to jump straight to the beginning of the loop, skipping the rest of the block.

\`\`\`python
sum = 0
while True:
    number = int(input("Please type in a number, -1 to exit: "))
    if number == -1:
        break
    if number >= 10:
        continue
    sum += number

print(f"The sum is {sum}")
\`\`\`

## Nested loops

Just like 
`if`
 statements, loops can also be placed inside other loops.

\`\`\`python
number = int(input("Please type in a number: "))
while number > 0:
    i = 0
    while i < number:
        print(f"{i} ", end="")
        i += 1
    print()
    number -= 1
\`\`\`

<sample-output>

Please type in a number: **5**
0 1 2 3 4
0 1 2 3
0 1 2
0 1
0

</sample-output>
`,
        CAS: `
# Más bucles

## Después de esta sección:

- Entenderás cuándo se necesita el comando 
`break`
 para salir de los bucles
- Podrás usar el comando 
`continue`
 para pasar a la siguiente iteración
- Entenderás cómo funcionan los bucles anidados

## El comando break

Ya te has encontrado con el comando 
`break`
. Se puede usar para detener la ejecución de un bucle inmediatamente.

\`\`\`python
suma = 0
while True:
    numero = int(input("Por favor escribe un número, -1 para salir: "))
    if numero == -1:
        break
    suma += numero

print(f"La suma es {suma}")
\`\`\`

## El comando continue

Otra forma de cambiar cómo se ejecuta un bucle es el comando 
`continue`
. Hace que la ejecución del bucle salte directamente al comienzo del bucle, saltándose el resto del bloque.

\`\`\`python
suma = 0
while True:
    numero = int(input("Por favor escribe un número, -1 para salir: "))
    if numero == -1:
        break
    if numero >= 10:
        continue
    suma += numero

print(f"La suma es {suma}")
\`\`\`

## Bucles anidados

Al igual que las sentencias 
`if`
, los bucles también se pueden colocar dentro de otros bucles.

\`\`\`python
numero = int(input("Por favor escribe un número: "))
while numero > 0:
    i = 0
    while i < numero:
        print(f"{i} ", end="")
        i += 1
    print()
    numero -= 1
\`\`\`

<sample-output>

Por favor escribe un número: **5**
0 1 2 3 4
0 1 2 3
0 1 2
0 1
0

</sample-output>
`,
        EUS: `
# Begizta gehiago

## Atal honen ondoren:

- 
`break`
 komandoa noiz behar den ulertuko duzu begiztetatik irteteko
- 
`continue`
 komandoa hurrengo iteraziora pasatzeko erabiltzeko gai izango zara
- Habiaratutako begiztek nola funtzionatzen duten ulertuko duzu

## break komandoa

Dagoeneko topatu duzu 
`break`
 komandoa. Begizta baten exekuzioa berehala gelditzeko erabil daiteke.

\`\`\`python
batura = 0
while True:
    zenbakia = int(input("Mesedez idatzi zenbaki bat, -1 irteteko: "))
    if zenbakia == -1:
        break
    batura += zenbakia

print(f"Batura da {batura}")
\`\`\`

## continue komandoa

Begizta baten exekuzio modua aldatzeko beste modu bat 
`continue`
 komandoa da. Begiztaren exekuzioa begiztaren hasierara zuzenean salto egitea eragiten du, blokearen gainerakoa saltatuz.

\`\`\`python
batura = 0
while True:
    zenbakia = int(input("Mesedez idatzi zenbaki bat, -1 irteteko: "))
    if zenbakia == -1:
        break
    if zenbakia >= 10:
        continue
    batura += zenbakia

print(f"Batura da {batura}")
\`\`\`

## Habiaratutako begiztak


`if`
 sententziak bezala, begiztak beste begizta batzuen barruan ere jar daitezke.

\`\`\`python
zenbakia = int(input("Mesedez idatzi zenbaki bat: "))
while zenbakia > 0:
    i = 0
    while i < zenbakia:
        print(f"{i} ", end="")
        i += 1
    print()
    zenbakia -= 1
\`\`\`

<sample-output>

Mesedez idatzi zenbaki bat: **5**
0 1 2 3 4
0 1 2 3
0 1 2
0 1
0

</sample-output>
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part03-20_multiplication',
      title: { ENG: "Multiplication", CAS: "Multiplicación", EUS: "Biderketa" },
      description: {
        ENG: "Please write a program which asks the user for a positive integer number. The program then prints out a list of multiplication operations until both operands reach the number given by the user.",
        CAS: "Escribe un programa que pida un entero positivo. El programa imprime una lista de multiplicaciones hasta que ambos operandos alcanzan el número dado.",
        EUS: "Idatzi programa bat erabiltzaileari zenbaki oso positibo bat eskatzen diona. Programak biderketa eragiketen zerrenda inprimatzen du bi operandoek emandako zenbakira iritsi arte."
      },
      initialCode: "# Write your solution here\n"
      testCode: `\nimport unittest\nclass TestMult(unittest.TestCase):\n    def test_2(self):\n        out = run_student_code(inputs=['2'])\n        self.assertIn("1 * 1 = 1", out)\n        self.assertIn("2 * 2 = 4", out)\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-24_first_letters_of_words',
      title: { ENG: "First letters of words", CAS: "Primeras letras de las palabras", EUS: "Hitzen lehen letrak" },
      description: {
        ENG: "Write a program that asks for a sentence. Print the first letter of each word on a separate line.",
        CAS: "Escribe un programa que pida una frase. Imprime la primera letra de cada palabra en una línea separada.",
        EUS: "Idatzi esaldi bat eskatzen duen programa. Inprimatu hitz bakoitzaren lehen letra lerro bereizi batean."
      },
      initialCode: "# Write your solution here\n"
      testCode: `\nimport unittest\nclass TestFirst(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['Humpty Dumpty sat on a wall'])\n        self.assertIn("H", out)\n        self.assertIn("D", out)\n        self.assertIn("s", out)\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-21_factorial',
      title: { ENG: "Factorial", CAS: "Factorial", EUS: "Faktoriala" },
      description: {
        ENG: "Please write a program which asks the user to type in an integer number. If the user types in a negative number, the program reports \"Thanks and bye!\" and stops. Otherwise, the program prints out the factorial of the number.",
        CAS: "Escribe un programa que pida un entero. Si es negativo, imprime \"Thanks and bye!\" y para. Si no, imprime el factorial del número.",
        EUS: "Idatzi programa bat zenbaki oso bat eskatzen duena. Negatiboa bada, \"Thanks and bye!\" inprimatu eta gelditu. Bestela, zenbakiaren faktoriala inprimatu."
      },
      initialCode: "# Write your solution here\n"
      testCode: `\nimport unittest\nclass TestFact(unittest.TestCase):\n    def test_5(self):\n        out = run_student_code(inputs=['5', '-1'])\n        self.assertIn("120", out)\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-22_flip_the_pairs',
      title: { ENG: "Flip the pairs", CAS: "Invierte los pares", EUS: "Bikoteak irauli" },
      description: {
        ENG: "Write a program that asks for a number. Print integers from 1 to number, swapping each pair (2, 1, 4, 3...).",
        CAS: "Pide un número. Imprime enteros del 1 al número, intercambiando pares (2, 1, 4, 3...).",
        EUS: "Eskatu zenbaki bat. Inprimatu 1etik zenbakira, bikoteak trukatuz (2, 1, 4, 3...)."
      },
      initialCode: "# Write your solution here\n"
      testCode: `\nimport unittest\nclass TestFlip(unittest.TestCase):\n    def test_5(self):\n        out = run_student_code(inputs=['5'])\n        # 2 1 4 3 5\n        self.assertIn("4", out)\n        self.assertIn("3", out)\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-23_taking_turns',
      title: { ENG: "Taking turns", CAS: "Turnándose", EUS: "TXandaka" },
      description: {
        ENG: "Write a program that asks for a number. Print integers from 1 to number, alternating from ends (1, n, 2, n-1...).",
        CAS: "Pide un número. Imprime enteros alternando desde los extremos (1, n, 2, n-1...).",
        EUS: "Eskatu zenbaki bat. Inprimatu zenbakiak muturretatik txandakatuz (1, n, 2, n-1...)."
      },
      initialCode: "# Write your solution here\n"
      testCode: `\nimport unittest\nclass TestTurns(unittest.TestCase):\n    def test_5(self):\n        out = run_student_code(inputs=['5'])\n        # 1 5 2 4 3\n        self.assertIn("5", out)\n`
    },
    {
      type: 'quiz',
      title: { ENG: "Quiz", CAS: "Cuestionario", EUS: "Galdetegia" },
      questions: [
        {
          id: 'q1',
          prompt: { 
            ENG: 'What does the "continue" statement do?',
            CAS: '¿Qué hace la sentencia "continue"?',
            EUS: 'Zer egiten du "continue" sententziak?'
          },
          options: [
            { id: 'o1', text: { ENG: 'Stops the loop completely.', CAS: 'Detiene el bucle completamente.', EUS: 'Begizta erabat gelditzen du.' }, isCorrect: false },
            { id: 'o2', text: { ENG: 'Skips the rest of the current iteration and jumps to the beginning.', CAS: 'Salta el resto de la iteración actual y salta al principio.', EUS: 'Uneko iterazioaren gainerakoa saltatu eta hasierara salto egiten du.' }, isCorrect: true },
            { id: 'o3', text: { ENG: 'Restarts the program.', CAS: 'Reinicia el programa.', EUS: 'Programa berrabiarazten du.' }, isCorrect: false }
          ]
        },
        {
          id: 'q2',
          prompt: { 
            ENG: 'In a nested loop, which loop does "break" affect?',
            CAS: 'En un bucle anidado, ¿a qué bucle afecta "break"?',
            EUS: 'Habiaratutako begizta batean, zein begiztari eragiten dio "break"-ek?'
          },
          options: [
            { id: 'o1', text: { ENG: 'Only the innermost loop where it is placed.', CAS: 'Solo al bucle más interno donde está colocado.', EUS: 'Kokatuta dagoen barneko begiztari bakarrik.' }, isCorrect: true },
            { id: 'o2', text: { ENG: 'All loops.', CAS: 'Todos los bucles.', EUS: 'Begizta guztiei.' }, isCorrect: false },
            { id: 'o3', text: { ENG: 'The outermost loop.', CAS: 'El bucle más externo.', EUS: 'Kanpokoenari.' }, isCorrect: false }
          ]
        },
        {
          id: 'q3',
          prompt: { 
            ENG: 'Can you put a "while" loop inside an "if" block?',
            CAS: '¿Puedes poner un bucle "while" dentro de un bloque "if"?',
            EUS: 'Jar al dezakezu "while" begizta bat "if" bloke baten barruan?'
          },
          options: [
            { id: 'o1', text: { ENG: 'Yes.', CAS: 'Sí.', EUS: 'Bai.' }, isCorrect: true },
            { id: 'o2', text: { ENG: 'No, that is a syntax error.', CAS: 'No, es un error de sintaxis.', EUS: 'Ez, hori sintaxi errorea da.' }, isCorrect: false }
          ]
        }
      ]
    }
  ]
};