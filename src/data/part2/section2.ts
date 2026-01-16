import { CoursePage } from '../mooc-exercises';

export const section2: CoursePage = {
  id: "part2-2",
  title: {
    ENG: "More conditionals",
    CAS: "Más condicionales",
    EUS: "Baldintza gehiago"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\n# More conditionals\n\n## The else statement\n\nWe often want to execute one block of code if a condition is true, and another block if it is false. This can be achieved with the `else` statement.\n\n\`\`\`python\nnumber = int(input(\"Please type in a number: \"))\n\nif number < 0:\n    print(\"The number is negative\")\nelse:\n    print(\"The number is positive or zero\")\n\`\`\`\n\nWhen using an if-else construction, one and exactly one of the branches will always be executed.\n\n## The modulo operator\n\nParity can be checked with the modulo operator `%`, which produces the remainder of an integer division. When divided by two, if the remainder is zero, the number is even. Otherwise the number is odd.\n\n\`\`\`python\nnumber = int(input(\"Please type in a number: \"))\n\nif number % 2 == 0:\n    print(\"The number is even\")\nelse:\n    print(\"The number is odd\")\n\`\`\`\n\n<sample-output>\n\nPlease type in a number: **5**\nThe number is odd\n\n</sample-output>\n\nAnother example with string comparison:\n\n\`\`\`python\ncorrect = \"kittycat\"\npassword = input(\"Please type in the password: \")\n\nif password == correct:\n    print(\"Welcome\")\nelse:\n    print(\"No admittance\")\n\`\`\`\n",
        CAS: "\n# Más condicionales\n\n## La sentencia else\n\nA menudo queremos ejecutar un bloque de código si una condición es verdadera, y otro bloque si es falsa. Esto se puede lograr con la sentencia `else`.\n\n\`\`\`python\nnumber = int(input(\"Por favor escribe un número: \"))\n\nif number < 0:\n    print(\"El número es negativo\")\nelse:\n    print(\"El número es positivo o cero\")\n\`\`\`\n\nAl usar una construcción if-else, una y exactamente una de las ramas siempre se ejecutará.\n\n## El operador módulo\n\nLa paridad se puede comprobar con el operador módulo `%`, que produce el resto de una división entera. Cuando se divide por dos, si el resto es cero, el número es par. De lo contrario, el número es impar.\n\n\`\`\`python\nnumber = int(input(\"Por favor escribe un número: \"))\n\nif number % 2 == 0:\n    print(\"El número es par\")\nelse:\n    print(\"El número es impar\")\n\`\`\`\n\n<sample-output>\n\nPor favor escribe un número: **5**\nEl número es impar\n\n</sample-output>\n\nOtro ejemplo con comparación de cadenas:\n\n\`\`\`python\ncorrect = \"gatito\"\npassword = input(\"Por favor escribe la contraseña: \")\n\nif password == correct:\n    print(\"Bienvenido\")\nelse:\n    print(\"Acceso denegado\")\n\`\`\`\n",
        EUS: "\n# Baldintza gehiago\n\n## else sententzia\n\nAskotan kode bloke bat exekutatu nahi dugu baldintza bat egia bada, eta beste bloke bat gezurra bada. Hau `else` sententziarekin lor daiteke.\n\n\`\`\`python\nnumber = int(input(\"Mesedez idatzi zenbaki bat: \"))\n\nif number < 0:\n    print(\"Zenbakia negatiboa da\")\nelse:\n    print(\"Zenbakia positiboa edo zero da\")\n\`\`\`\n\nif-else eraikuntza erabiltzean, adarretako bat eta zehazki bat beti exekutatuko da.\n\n## Modulu eragilea\n\nParitatea `%` modulu eragilearekin egiazta daiteke, zeinak zatiketa oso baten hondarra ematen baitu. Birekin zatitzean, hondarra zero bada, zenbakia bikoitia da. Bestela, zenbakia bakoitia da.\n\n\`\`\`python\nnumber = int(input(\"Mesedez idatzi zenbaki bat: \"))\n\nif number % 2 == 0:\n    print(\"Zenbakia bikoitia da\")\nelse:\n    print(\"Zenbakia bakoitia da\")\n\`\`\`\n\n<sample-output>\n\nMesedez idatzi zenbaki bat: **5**\nZenbakia bakoitia da\n\n</sample-output>\n\nBeste adibide bat kateen konparazioarekin:\n\n\`\`\`python\ncorrect = \"katutxoa\"\npassword = input(\"Mesedez idatzi pasahitza: \")\n\nif password == correct:\n    print(\"Ongi etorri\")\nelse:\n    print(\"Ez dago sartzerik\")\n\`\`\`\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part02-04_age_of_maturity',
      title: { ENG: "Age of maturity", CAS: "Mayoría de edad", EUS: "Adin nagusitasuna" },
      description: {
        ENG: "Please write a program which asks the user for their age. The program should then print out a message based on whether the user is of age or not, using 18 as the age of maturity.",
        CAS: "Por favor, escribe un programa que pida la edad al usuario. El programa debe imprimir un mensaje basado en si el usuario es mayor de edad o no, usando 18 como la mayoría de edad.",
        EUS: "Idatzi programa bat erabiltzaileari adina eskatzen diona. Programak mezu bat inprimatu behar du erabiltzailea adin nagusikoa den ala ez kontuan hartuta, 18 urte erabiliz muga gisa."
      },
      initialCode: "# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestAge(unittest.TestCase):\n    def test_minor(self):\n        out = run_student_code(inputs=['10'])\n        self.assertIn("not of age", out)\n        \n    def test_adult(self):\n        out = run_student_code(inputs=['18'])\n        if "not of age" in out:\n             self.fail("A los 18 años ya se es mayor de edad. Revisa tu condición (¿usaste > 18 en vez de >= 18?).")\n        self.assertIn("You are of age", out)\n`
    },
    {
      type: 'markdown',
      content: {
        ENG: "\n## Alternative branches using the elif statement\n\nOften there are more than two options the program should account for. For example, the result of a football match could go three ways: home wins, away wins, or there is a tie.\n\nA conditional statement can be added to with an `elif` branch (\"else if\"). Importantly, an `elif` statement is executed only if none of the preceding branches is executed.\n\n\`\`\`python\ngoals_home = int(input(\"Home goals scored: \"))\ngoals_away = int(input(\"Away goals scored: \"))\n\nif goals_home > goals_away:\n    print(\"The home team won!\")\nelif goals_away > goals_home:\n    print(\"The away team won!\")\nelse:\n    print(\"It's a tie!\")\n\`\`\`\n\n<sample-output>\n\nHome goals scored: **3**\nAway goals scored: **3**\nIt's a tie!\n\n</sample-output>\n\nIn the above example there are three alternative branches, exactly one of which will always be executed. However, there is no limit to the number of `elif` branches a conditional statement can contain, and the `else` branch is not mandatory.\n",
        CAS: "\n## Ramas alternativas usando la sentencia elif\n\nA menudo hay más de dos opciones que el programa debe tener en cuenta. Por ejemplo, el resultado de un partido de fútbol puede ser de tres formas: gana el local, gana el visitante o hay empate.\n\nSe puede añadir una rama a una sentencia condicional con `elif` (\"else if\"). Es importante destacar que una sentencia `elif` solo se ejecuta si ninguna de las ramas precedentes se ha ejecutado.\n\n\`\`\`python\ngoals_home = int(input(\"Goles local: \"))\ngoals_away = int(input(\"Goles visitante: \"))\n\nif goals_home > goals_away:\n    print(\"¡El equipo local ganó!\")\nelif goals_away > goals_home:\n    print(\"¡El equipo visitante ganó!\")\nelse:\n    print(\"¡Es un empate!\")\n\`\`\`\n\n<sample-output>\n\nGoles local: **3**\nGoles visitante: **3**\n¡Es un empate!\n\n</sample-output>\n\nEn el ejemplo anterior hay tres ramas alternativas, de las cuales siempre se ejecutará exactamente una. Sin embargo, no hay límite en el número de ramas `elif` que puede contener una sentencia condicional, y la rama `else` no es obligatoria.\n",
        EUS: "\n## Adar alternatiboak elif sententzia erabiliz\n\nAskotan bi aukera baino gehiago daude programak kontuan hartu beharrekoak. Adibidez, futbol partidu baten emaitza hiru modutara izan daiteke: etxekoak irabazten du, kanpokoak irabazten du edo berdinketa dago.\n\nBaldintzazko sententzia bati adar bat gehi dakioke `elif` (\"else if\") erabiliz. Garrantzitsua da `elif` sententzia aurreko adarrik exekutatu ez bada bakarrik exekutatzen dela.\n\n\`\`\`python\ngoals_home = int(input(\"Etxekoen golak: \"))\ngoals_away = int(input(\"Kanpokoen golak: \"))\n\nif goals_home > goals_away:\n    print(\"Etxeko taldeak irabazi du!\")\nelif goals_away > goals_home:\n    print(\"Kanpoko taldeak irabazi du!\")\nelse:\n    print(\"Berdinketa da!\")\n\`\`\`\n\n<sample-output>\n\nEtxekoen golak: **3**\nKanpokoen golak: **3**\nBerdinketa da!\n\n</sample-output>\n\nAurreko adibidean hiru adar alternatibo daude, eta horietako bat eta zehazki bat beti exekutatuko da. Hala ere, ez dago mugarik baldintzazko sententziak izan dezakeen `elif` adar kopuruan, eta `else` adarra ez da derrigorrezkoa.\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part02-05_greater_number',
      title: { ENG: "Greater number", CAS: "Número mayor", EUS: "Zenbaki handiagoa" },
      description: {
        ENG: "Please write a program which asks for two integer numbers. The program should then print out whichever is greater. If the numbers are equal, the program should print a different message.",
        CAS: "Por favor, escribe un programa que pida dos números enteros. El programa debe imprimir cuál es mayor. Si son iguales, debe imprimir un mensaje diferente.",
        EUS: "Idatzi programa bat bi zenbaki oso eskatzen dituena. Programak handiena dena inprimatu behar du. Zenbakiak berdinak badira, mezu ezberdin bat inprimatu behar du."
      },
      initialCode: "# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestGreater(unittest.TestCase):\n    def test_greater(self):\n        out = run_student_code(inputs=['5', '8'])\n        self.assertIn("8 is greater", out)\n        \n    def test_equal(self):\n        out = run_student_code(inputs=['5', '5'])\n        if "greater" in out:\n             self.fail("Si los números son iguales, no digas que uno es mayor. Imprime un mensaje específico de igualdad.")\n        self.assertIn("equal", out)\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part02-06_the_elder',
      title: { ENG: "The elder", CAS: "El mayor", EUS: "Zaharrena" },
      description: {
        ENG: "Please write a program which asks for the names and ages of two persons. The program should then print out the name of the elder.",
        CAS: "Por favor, escribe un programa que pida los nombres y edades de dos personas. El programa debe imprimir el nombre del mayor.",
        EUS: "Idatzi programa bat bi pertsonaren izenak eta adinak eskatzen dituena. Programak zaharrenaren izena inprimatu behar du."
      },
      initialCode: "# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestElder(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['Alan', '20', 'Bob', '25'])\n        self.assertIn("The elder is Bob", out)\n        \n    def test_same(self):\n        out = run_student_code(inputs=['Alan', '25', 'Bob', '25'])\n        if "The elder is" in out:\n             self.fail("Si tienen la misma edad, no digas que uno es mayor. Indica que tienen la misma edad.")\n        self.assertIn("same age", out)\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part02-07_alphabetically_last',
      title: { ENG: "Alphabetically last", CAS: "Alfabéticamente el último", EUS: "Alfabetikoki azkena" },
      description: {
        ENG: "Please write a program which asks for two words. The program should then print out whichever of the two comes alphabetically last. Python comparison operators can also be used on strings. String a is smaller than string b if it comes alphabetically before b.",
        CAS: "Por favor, escribe un programa que pida dos palabras. El programa debe imprimir cuál de las dos va última alfabéticamente. Los operadores de comparación también funcionan con cadenas.",
        EUS: "Idatzi programa bat bi hitz eskatzen dituena. Programak alfabetikoki azkena doana inprimatu behar du. Python-eko konparazio eragileak kateekin ere erabil daitezke."
      },
      initialCode: "# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestAlpha(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['a', 'z'])\n        self.assertIn("z comes alphabetically last", out)\n`
    },
    {
      type: 'quiz',
      title: { ENG: "Quiz", CAS: "Cuestionario", EUS: "Galdetegia" },
      questions: [
        {
          id: 'q1',
          prompt: { 
            ENG: 'When is the code inside an \"else\" block executed?',
            CAS: '¿Cuándo se ejecuta el código dentro de un bloque \"else\"?',
            EUS: 'Noiz exekutatzen da \"else\" bloke baten barruko kodea?'
          },
          options: [
            { id: 'o1', text: { ENG: 'Always.', CAS: 'Siempre.', EUS: 'Beti.' }, isCorrect: false },
            { id: 'o2', text: { ENG: 'When the preceding \"if\" condition is False.', CAS: 'Cuando la condición \"if\" precedente es Falsa.', EUS: 'Aurreko \"if\" baldintza Gezurra denean.' }, isCorrect: true },
            { id: 'o3', text: { ENG: 'When the preceding \"if\" condition is True.', CAS: 'Cuando la condición \"if\" precedente es Verdadera.', EUS: 'Aurreko \"if\" baldintza Egia denean.' }, isCorrect: false }
          ]
        },
        {
          id: 'q2',
          prompt: { 
            ENG: 'What is the result of 10 % 3?',
            CAS: '¿Cuál es el resultado de 10 % 3?',
            EUS: 'Zein da 10 % 3 eragiketaren emaitza?'
          },
          options: [
            { id: 'o1', text: '3.33', isCorrect: false },
            { id: 'o2', text: '3', isCorrect: false },
            { id: 'o3', text: '1', isCorrect: true, feedback: { ENG: 'It is the remainder of 10 divided by 3.', CAS: 'Es el resto de 10 dividido por 3.', EUS: '10 zati 3ren hondarra da.' } }
          ]
        },
        {
          id: 'q3',
          prompt: { 
            ENG: 'Which string comes last alphabetically: \"Apple\" or \"banana\"?',
            CAS: '¿Qué cadena va última alfabéticamente: \"Apple\" o \"banana\"?',
            EUS: 'Zein kate doa azkena alfabetikoki: \"Apple\" edo \"banana\"?'
          },
          options: [
            { id: 'o1', text: '\"Apple\"', isCorrect: false, feedback: { ENG: 'Uppercase letters usually come before lowercase in ASCII/Unicode sorting.', CAS: 'Las mayúsculas suelen ir antes que las minúsculas en el ordenamiento ASCII/Unicode.', EUS: 'Maiuskulak minuskula baino lehenago joan ohi dira ASCII/Unicode ordenamenduan.' } },
            { id: 'o2', text: '\"banana\"', isCorrect: true },
            { id: 'o3', text: { ENG: 'They are equal.', CAS: 'Son iguales.', EUS: 'Berdinak dira.' }, isCorrect: false }
          ]
        }
      ]
    }
  ]
};
