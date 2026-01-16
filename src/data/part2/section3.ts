import { CoursePage } from '../mooc-exercises';

export const section3: CoursePage = {
  id: "part2-3",
  title: {
    ENG: `Combining conditions`,
    CAS: `Combinando condiciones`,
    EUS: `Baldintzak konbinatzen\`
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: \`\n# Combining conditions\n\n## After this section:\n\n- You will know how to use the operators \`and\`, \`or\` and \`not\` in conditions\n- You will be able to write nested conditionals\n\n## Logical operators\n\nYou can combine conditions with the logical operators \`and\` and \`or\`. The operator \`and\` specifies that all the given conditions must be true at the same time. The operator \`or\` specifies that at least one of the given conditions must be true.\n\nFor example, the condition \`number >= 5 and number <= 8\` determines that \`number\` must simultaneously be at least 5 and at most 8. That is, it must be between 5 and 8.\n\n\`\`\`\`python\nnumber = int(input(\"Please type in a number: \"))\nif number >= 5 and number <= 8:\n    print(\"The number is between 5 and 8\")\n\`\`\`\`\n\nThe following truth table contains the behaviour of these operators in different situations:\n\n| a | b | a and b | a or b |\n| :---: | :---: | :---: | :---: |\n| False | False | False | False |\n| True | False | False | True |\n| False | True | False | True |\n| True | True | True | True |\n\nSometimes it is necessary to know if something is _not_ true. The operator \`not\` negates a condition:\n\n| a | not a |\n| :---: | :---: |\n| True | False |\n| False | True |\n\nThe above example with the range of 5 to 8 _excluded_ could also be programmed like this:\n\n\`\`\`\`python\nnumber = int(input(\"Please type in a number: \"))\nif not (number >= 5 and number <= 8):\n    print(\"The number is not within the range of 5 to 8\")\n\`\`\`\`\n\n## Combining and chaining conditions\n\nThe following program asks the user to type in four numbers. It then works out which of the four is the greatest, with the help of some conditions:\n\n\`\`\`\`python\nn1 = int(input(\"Number 1: \"))\nn2 = int(input(\"Number 2: \"))\nn3 = int(input(\"Number 3: \"))\nn4 = int(input(\"Number 4: \"))\n\nif n1 > n2 and n1 > n3 and n1 > n4:\n    greatest = n1\nelif n2 > n3 and n2 > n4:\n    greatest = n2\nelif n3 > n4:\n    greatest = n3\nelse:\n    greatest = n4\n\nprint(f" {greatest} is the greatest of the numbers.")\n\`\`\`\`\n`,
        CAS: `\n# Combinando condiciones\n\n## Después de esta sección:\n\n- Sabrás cómo usar los operadores \`and\`, \`or\` y \`not\` en condiciones\n- Podrás escribir condicionales anidados\n\n## Operadores lógicos\n\nPuedes combinar condiciones con los operadores lógicos \`and\` (y) y \`or\` (o). El operador \`and\` especifica que todas las condiciones dadas deben ser verdaderas al mismo tiempo. El operador \`or\` especifica que al menos una de las condiciones dadas debe ser verdadera.\n\nPor ejemplo, la condición \`number >= 5 and number <= 8\` determina que \`number\` debe ser simultáneamente al menos 5 y como máximo 8. Es decir, debe estar entre 5 y 8.\n\n\`\`\`\`python\nnumber = int(input(\"Por favor escribe un número: \"))\nif number >= 5 and number <= 8:\n    print(\"El número está entre 5 y 8\")\n\`\`\`\`\n\nLa siguiente tabla de verdad contiene el comportamiento de estos operadores en diferentes situaciones:\n\n| a | b | a and b | a or b |\n| :---: | :---: | :---: | :---: |\n| Falso | Falso | Falso | Falso |\n| Verdadero | Falso | Falso | Verdadero |\n| Falso | Verdadero | Falso | Verdadero |\n| Verdadero | Verdadero | Verdadero | Verdadero |\n\nA veces es necesario saber si algo _no_ es verdadero. El operador \`not\` niega una condición:\n\n| a | not a |\n| :---: | :---: |\n| Verdadero | Falso |\n| Falso | Verdadero |\n\nEl ejemplo anterior con el rango de 5 a 8 _excluido_ también podría programarse así:\n\n\`\`\`\`python\nnumber = int(input(\"Por favor escribe un número: \"))\nif not (number >= 5 and number <= 8):\n    print(\"El número no está en el rango de 5 a 8\")\n\`\`\`\`\n\n## Combinando y encadenando condiciones\n\nEl siguiente programa pide al usuario que escriba cuatro números. Luego calcula cuál de los cuatro es el mayor, con la ayuda de algunas condiciones:\n\n\`\`\`\`python\nn1 = int(input(\"Número 1: \"))\nn2 = int(input(\"Número 2: \"))\nn3 = int(input(\"Número 3: \"))\nn4 = int(input(\"Número 4: \"))\n\nif n1 > n2 and n1 > n3 and n1 > n4:\n    mayor = n1\nelif n2 > n3 and n2 > n4:\n    mayor = n2\nelif n3 > n4:\n    mayor = n3\nelse:\n    mayor = n4\n\nprint(f" {mayor} es el mayor de los números.")\n\`\`\`\`\n`,
        EUS: `\n# Baldintzak konbinatzen\n\n## Atal honen ondoren:\n\n- \`and\`, \`or\` eta \`not\` eragileak baldintzetan nola erabili jakingo duzu\n- Habiaratutako baldintzak idazteko gai izango zara\n\n## Eragile logikoak\n\nBaldintzak \`and\` (eta) eta \`or\` (edo) eragile logikoekin konbina ditzakezu. \`and\` eragileak zehazten du emandako baldintza guztiak egia izan behar direla aldi berean. \`or\` eragileak zehazten du emandako baldintzetako bat gutxienez egia izan behar dela.\n\nAdibidez, \`number >= 5 and number <= 8\` baldintzak zehazten du \`number\` aldi berean gutxienez 5 eta gehienez 8 izan behar dela. Hau da, 5 eta 8 artean egon behar du.\n\n\`\`\`\`python\nnumber = int(input(\"Mesedez idatzi zenbaki bat: \"))\nif number >= 5 and number <= 8:\n    print(\"Zenbakia 5 eta 8 artean dago\")\n\`\`\`\`\n\nHurrengo egia-taulak eragile hauen portaera erakusten du egoera ezberdinetan:\n\n| a | b | a and b | a or b |\n| :---: | :---: | :---: | :---: |\n| Gezurra | Gezurra | Gezurra | Gezurra |\n| Egia | Gezurra | Gezurra | Egia |\n| Gezurra | Egia | Gezurra | Egia |\n| Egia | Egia | Egia | Egia |\n\nBatzuetan beharrezkoa da zerbait egia _ez_ dela jakitea. \`not\` eragileak baldintza bat ezeztatzen du:\n\n| a | not a |\n| :---: | :---: |\n| Egia | Gezurra |\n| Gezurra | Egia |\n\n5 eta 8 arteko tartea _baztertuta_ duen aurreko adibidea horrela ere programatu liteke:\n\n\`\`\`\`python\nnumber = int(input(\"Mesedez idatzi zenbaki bat: \"))\nif not (number >= 5 and number <= 8):\n    print(\"Zenbakia ez dago 5 eta 8 arteko tartean\")\n\`\`\`\`\n\n## Baldintzak konbinatzen eta kateatzen\n\nHurrengo programak erabiltzaileari lau zenbaki idazteko eskatzen dio. Gero, baldintza batzuen laguntzaz, lauretatik zein den handiena kalkulatzen du:\n\n\`\`\`\`python\nn1 = int(input(\"1. Zenbakia: \"))\nn2 = int(input(\"2. Zenbakia: \"))\nn3 = int(input(\"3. Zenbakia: \"))\nn4 = int(input(\"4. Zenbakia: \"))\n\nif n1 > n2 and n1 > n3 and n1 > n4:\n    handiena = n1\nelif n2 > n3 and n2 > n4:\n    handiena = n2\nelif n3 > n4:\n    handiena = n3\nelse:\n    handiena = n4\n\nprint(f" {handiena} da zenbakirik handiena.")\n\`\`\`\`\n\`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part02-08_age_check',
      title: { ENG: \`Age check\`, CAS: \`Comprobación de edad\`, EUS: \`Adin egiaztapena\` },
      description: {
        ENG: \`Please write a program which asks for the user's age. If the age is not plausible, that is, it is under 5 or something that can't be an actual human age, the program should print out a comment.`,
        CAS: `Por favor, escribe un programa que pida la edad al usuario. Si la edad no es plausible, es decir, es menor de 5 o algo que no puede ser una edad humana real, el programa debe imprimir un comentario.`,
        EUS: `Idatzi programa bat erabiltzaileari adina eskatzen diona. Adina sinesgarria ez bada, hau da, 5 baino gutxiago edo gizakien adin erreala izan ezin den zerbait, programak iruzkin bat inprimatu behar du.\`
      },
      initialCode: `# Write your solution here\n`,
      testCode: \`\nimport unittest\nclass TestAgeCheck(unittest.TestCase):\n    def test_ok(self):\n        out = run_student_code(inputs=['13'])\n        self.assertIn("Ok", out)\n    def test_young(self):\n        out = run_student_code(inputs=['2'])\n        self.assertIn("suspect", out)\n    def test_negative(self):\n        out = run_student_code(inputs=['-4'])\n        self.assertIn("mistake", out)\n\`
    },
    {
      type: 'exercise',
      exerciseId: 'part02-09_nephews',
      title: { ENG: \`Nephews\`, CAS: \`Sobrinos\`, EUS: \`Ilobak\` },
      description: {
        ENG: \`Please write a program which asks for the user's name. If the name is Huey, Dewey or Louie, the program should recognise the user as one of Donald Duck's nephews. If the name is Morty or Ferdie, the program should recognise the user as one of Mickey Mouse's nephews.`,
        CAS: `Escribe un programa que pida el nombre. Si es Huey, Dewey o Louie, es sobrino del Pato Donald. Si es Morty o Ferdie, es sobrino de Mickey Mouse.`,
        EUS: `Idatzi izena eskatzen duen programa. Huey, Dewey edo Louie bada, Donald Ahatearen iloba da. Morty edo Ferdie bada, Mickey Mouserena.\`
      },
      initialCode: `# Write your solution here\n`,
      testCode: \`\nimport unittest\nclass TestNephews(unittest.TestCase):\n    def test_huey(self):\n        out = run_student_code(inputs=['Huey'])\n        self.assertIn("Donald", out)\n    def test_ferdie(self):\n        out = run_student_code(inputs=['Ferdie'])\n        self.assertIn("Mickey", out)\n\`
    },
    {
      type: 'exercise',
      exerciseId: 'part02-10_grades_and_points',
      title: { ENG: \`Grades and points\`, CAS: \`Notas y puntos\`, EUS: \`Notak eta puntuak\` },
      description: {
        ENG: \`The table below outlines the grade boundaries. < 0: impossible, 0-49: fail, 50-59: 1, ..., 90-100: 5, > 100: impossible.`,
        CAS: `La tabla de notas: < 0: imposible, 0-49: suspenso, 50-59: 1, ..., 90-100: 5, > 100: imposible.`,
        EUS: `Noten taula: < 0: ezinezkoa, 0-49: gutxiegi, 50-59: 1, ..., 90-100: 5, > 100: ezinezkoa.\`
      },
      initialCode: `# Write your solution here\n`,
      testCode: \`\nimport unittest\nclass TestGrades(unittest.TestCase):\n    def test_neg(self):\n        out = run_student_code(inputs=['-1'])\n        self.assertIn("impossible", out)\n    def test_fail(self):\n        out = run_student_code(inputs=['49'])\n        self.assertIn("fail", out)\n    def test_5(self):\n        out = run_student_code(inputs=['100'])\n        self.assertIn("5", out)\n\`
    },
    {
      type: 'exercise',
      exerciseId: 'part02-11_fizzbuzz',
      title: { ENG: \`FizzBuzz\`, CAS: \`FizzBuzz\`, EUS: \`FizzBuzz\` },
      description: {
        ENG: \`Divisible by 3: Fizz. Divisible by 5: Buzz. Divisible by both: FizzBuzz.`,
        CAS: `Divisible por 3: Fizz. Divisible por 5: Buzz. Divisible por ambos: FizzBuzz.`,
        EUS: `3rekin zatigarria: Fizz. 5ekin: Buzz. Biekin: FizzBuzz.\`
      },
      initialCode: `# Write your solution here\n`,
      testCode: \`\nimport unittest\nclass TestFizz(unittest.TestCase):\n    def test_15(self):\n        out = run_student_code(inputs=['15'])\n        self.assertIn("FizzBuzz", out)\n\`
    },
    {
      type: 'markdown',
      content: {
        ENG: \`\n## Nested conditionals\n\nConditional statements can also be nested within other conditional statements. For example, the following program checks whether a number is above zero, and then whether it is odd or even:\n\n\`\`\`\`python\nnumber = int(input(\"Please type in a number: \"))\n\nif number > 0:\n    if number % 2 == 0:\n        print(\"The number is even\")\n    else:\n        print(\"The number is odd\")\nelse:\n    print(\"The number is negative or zero\")\n\`\`\`\`\n\nWith nested conditional statements it is crucial to get the indentations right. Indentations determine which branches are linked together.\n`,
        CAS: `\n## Condicionales anidados\n\nLas sentencias condicionales también se pueden anidar dentro de otras sentencias condicionales. Por ejemplo, el siguiente programa comprueba si un número es mayor que cero, y luego si es impar o par:\n\n\`\`\`\`python\nnumber = int(input(\"Por favor escribe un número: \"))\n\nif number > 0:\n    if number % 2 == 0:\n        print(\"El número es par\")\n    else:\n        print(\"El número es impar\")\nelse:\n    print(\"El número es negativo o cero\")\n\`\`\`\`\n\nCon las sentencias condicionales anidadas es crucial hacer bien la indentación. La indentación determina qué ramas están vinculadas entre sí.\n`,
        EUS: `\n## Habiaratutako baldintzak\n\nBaldintzazko sententziak beste baldintzazko sententzia batzuen barruan habiaratu daitezke. Adibidez, hurrengo programak zenbaki bat zero baino handiagoa den egiaztatzen du, eta gero bakoitia edo bikoitia den:\n\n\`\`\`\`python\nnumber = int(input(\"Mesedez idatzi zenbaki bat: \"))\n\nif number > 0:\n    if number % 2 == 0:\n        print(\"Zenbakia bikoitia da\")\n    else:\n        print(\"Zenbakia bakoitia da\")\nelse:\n    print(\"Zenbakia negatiboa edo zero da\")\n\`\`\`\`\n\nHabiaratutako baldintzazko sententziekin ezinbestekoa da indentazioa ondo egitea. Indentazioak zehazten du zein adar dauden elkarrekin lotuta.\n\`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part02-12_leap_year',
      title: { ENG: \`Leap year\`, CAS: \`Año bisiesto\`, EUS: \`Urte bisustua\` },
      description: {
        ENG: \`A year is a leap year if divisible by 4. If divisible by 100, must also be divisible by 400.`,
        CAS: `Un año es bisiesto si es divisible por 4. Si es divisible por 100, también debe serlo por 400.`,
        EUS: `Urte bat bisustua da 4rekin zatigarria bada. 100ekin zatigarria bada, 400ekin ere izan behar du.\`
      },
      initialCode: `# Write your solution here\n`,
      testCode: \`\nimport unittest\nclass TestLeap(unittest.TestCase):\n    def test_2400(self):\n        out = run_student_code(inputs=['2400'])\n        self.assertIn("leap year", out)\n    def test_2100(self):\n        out = run_student_code(inputs=['2100'])\n        if "not" not in out:\n             self.fail("2100 NO es bisiesto (divisible por 100 pero no por 400).")\n        self.assertIn("not a leap year", out)\n\`
    },
    {
      type: 'exercise',
      exerciseId: 'part02-13_alphabetically_in_the_middle',
      title: { ENG: \`Alphabetically in the middle\`, CAS: \`Alfabéticamente en el medio\`, EUS: \`Alfabetikoki erdian\` },
      description: {
        ENG: \`Write a program which asks for three letters. Print the one in the middle alphabetically.`,
        CAS: `Escribe un programa que pida tres letras. Imprime la que esté en el medio alfabéticamente.`,
        EUS: `Idatzi hiru hizki eskatzen dituen programa. Inprimatu alfabetikoki erdian dagoena.\`
      },
      initialCode: `# Write your solution here\n`,
      testCode: \`\nimport unittest\nclass TestMid(unittest.TestCase):\n    def test_abc(self):\n        out = run_student_code(inputs=['a','b','c'])\n        self.assertIn("b", out)\n    def test_cba(self):\n        out = run_student_code(inputs=['c','b','a'])\n        self.assertIn("b", out)\n\`
    },
    {
      type: 'exercise',
      exerciseId: 'part02-14_gift_tax',
      title: { ENG: \`Gift tax calculator\`, CAS: \`Calculadora de impuesto de donaciones\`, EUS: \`Dohaintza zerga kalkulagailua\` },
      description: {
        ENG: \`Calculate gift tax based on value. See tax table in full description.`,
        CAS: `Calcula el impuesto de donaciones basado en el valor. Ver tabla en la descripción completa.`,
        EUS: `Kalkulatu dohaintza zerga balioan oinarrituta. Ikusi zerga taula deskribapen osoan.`
      },
      initialCode: `# Write your solution here\n`,
      testCode: `\nimport unittest\nclass TestGift(unittest.TestCase):\n    def test_5000(self):\n        out = run_student_code(inputs=['5000'])\n        self.assertIn("100", out)\n    def test_25000(self):\n        out = run_student_code(inputs=['25000'])\n        # 100 + (25000-5000)*0.08 = 100 + 1600 = 1700\n        self.assertIn("1700", out)\n`
    },
    {
      type: 'quiz',
      title: { ENG: `Quiz`, CAS: `Cuestionario`, EUS: `Galdetegia` },
      questions: [
        {
          id: 'q1',
          prompt: { 
            ENG: 'Which operator returns True if at least one condition is true?',
            CAS: '¿Qué operador devuelve Verdadero si al menos una condición es verdadera?',
            EUS: 'Zein eragilek itzultzen du Egia gutxienez baldintza bat egia bada?'
          },
          options: [
            { id: 'o1', text: 'and', isCorrect: false },
            { id: 'o2', text: 'or', isCorrect: true },
            { id: 'o3', text: 'not', isCorrect: false }
          ]
        },
        {
          id: 'q2',
          prompt: { 
            ENG: 'What is the result of: True and False?',
            CAS: '¿Cuál es el resultado de: True and False?',
            EUS: 'Zein da honen emaitza: True and False?'
          },
          options: [
            { id: 'o1', text: 'True', isCorrect: false },
            { id: 'o2', text: 'False', isCorrect: true },
            { id: 'o3', text: 'None', isCorrect: false }
          ]
        },
        {
          id: 'q3',
          prompt: { 
            ENG: 'What does "not (x < 5)" mean?',
            CAS: '¿Qué significa "not (x < 5)"?',
            EUS: 'Zer esan nahi du "not (x < 5)"?'
          },
          options: [
            { id: 'o1', text: { ENG: 'x is less than 5', CAS: 'x es menor que 5', EUS: 'x 5 baino txikiagoa da' }, isCorrect: false },
            { id: 'o2', text: { ENG: 'x is greater than or equal to 5', CAS: 'x es mayor o igual que 5', EUS: 'x 5 edo handiagoa da' }, isCorrect: true },
            { id: 'o3', text: { ENG: 'x is negative', CAS: 'x es negativo', EUS: 'x negatiboa da' }, isCorrect: false }
          ]
        }
      ]
    }
  ]
};