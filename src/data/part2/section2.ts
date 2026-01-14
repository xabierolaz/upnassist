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
        ENG: "\n# More conditionals\n\n## The else statement\n\nWe often want to execute one block of code if a condition is true, and another block if it is false. This can be achieved with the `else` statement.\n\n```python\nnumber = int(input(\"Please type in a number: \"))\n\nif number < 0:\n    print(\"The number is negative\")\nelse:\n    print(\"The number is positive or zero\")\n```\n\n## The modulo operator\n\nParity can be checked with the modulo operator `%`, which produces the remainder of an integer division.\n\n```python\nnumber = int(input(\"Please type in a number: \"))\n\nif number % 2 == 0:\n    print(\"The number is even\")\nelse:\n    print(\"The number is odd\")\n```\n\n```text\nPlease type in a number: **5**\nThe number is odd\n```\n",
        CAS: "\n# Más condicionales\n\n## La sentencia else\n\nA menudo queremos ejecutar un bloque de código si una condición es verdadera, y otro bloque si es falsa. Esto se puede lograr con la sentencia `else`.\n\n```python\nnumber = int(input(\"Por favor escribe un número: \"))\n\nif number < 0:\n    print(\"El número es negativo\")\nelse:\n    print(\"El número es positivo o cero\")\n```\n\n## El operador módulo\n\nLa paridad se puede comprobar con el operador módulo `%`, que produce el resto de una división entera.\n\n```python\nnumber = int(input(\"Por favor escribe un número: \"))\n\nif number % 2 == 0:\n    print(\"El número es par\")\nelse:\n    print(\"El número es impar\")\n```\n\n```text\nPor favor escribe un número: **5**\nEl número es impar\n```\n",
        EUS: "\n# Baldintza gehiago\n\n## else sententzia\n\nAskotan kode bloke bat exekutatu nahi dugu baldintza bat egia bada, eta beste bloke bat gezurra bada. Hau `else` sententziarekin lor daiteke.\n\n```python\nnumber = int(input(\"Mesedez idatzi zenbaki bat: \"))\n\nif number < 0:\n    print(\"Zenbakia negatiboa da\")\nelse:\n    print(\"Zenbakia positiboa edo zero da\")\n```\n\n## Modulu eragilea\n\nParitatea `%` modulu eragilearekin egiazta daiteke, zeinak zatiketa oso baten hondarra ematen baitu.\n\n```python\nnumber = int(input(\"Mesedez idatzi zenbaki bat: \"))\n\nif number % 2 == 0:\n    print(\"Zenbakia bikoitia da\")\nelse:\n    print(\"Zenbakia bakoitia da\")\n```\n\n```text\nMesedez idatzi zenbaki bat: **5**\nZenbakia bakoitia da\n```\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part02-04_age_of_maturity',
      title: {
        ENG: "Age of maturity",
        CAS: "Mayoría de edad",
        EUS: "Adin nagusitasuna"
      },
      description: {
        ENG: "Please write a program which asks the user for their age. The program should then print out a message based on whether the user is of age or not, using 18 as the age of maturity.",
        CAS: "Por favor, escribe un programa que pida la edad al usuario. El programa debe imprimir un mensaje basado en si el usuario es mayor de edad o no, usando 18 como la mayoría de edad.",
        EUS: "Idatzi programa bat erabiltzaileari adina eskatzen diona. Programak mezu bat inprimatu behar du erabiltzailea adin nagusikoa den ala ez kontuan hartuta, 18 urte erabiliz muga gisa."
      },
      initialCode: "# Write your solution here\n",
      testCode: "\nimport unittest\nclass TestAge(unittest.TestCase):\n    def test_minor(self):\n        out = run_student_code(inputs=['10'])\n        self.assertIn(\"not of age\", out)\n        \n    def test_adult(self):\n        out = run_student_code(inputs=['18'])\n        self.assertIn(\"You are of age\", out)\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part02-05_greater_number',
      title: {
        ENG: "Greater number",
        CAS: "Número mayor",
        EUS: "Zenbaki handiagoa"
      },
      description: {
        ENG: "Please write a program which asks for two integer numbers. The program should then print out whichever is greater. If the numbers are equal, the program should print a different message.",
        CAS: "Por favor, escribe un programa que pida dos números enteros. El programa debe imprimir cuál es mayor. Si son iguales, debe imprimir un mensaje diferente.",
        EUS: "Idatzi programa bat bi zenbaki oso eskatzen dituena. Programak handiena dena inprimatu behar du. Zenbakiak berdinak badira, mezu ezberdin bat inprimatu behar du."
      },
      initialCode: "# Write your solution here\n",
      testCode: "\nimport unittest\nclass TestGreater(unittest.TestCase):\n    def test_greater(self):\n        out = run_student_code(inputs=['5', '8'])\n        self.assertIn(\"8 is greater\", out)\n        \n    def test_equal(self):\n        out = run_student_code(inputs=['5', '5'])\n        self.assertIn(\"equal\", out)\n"
    },
    {
      type: 'markdown',
      content: {
        ENG: "\n## Alternative branches using the elif statement\n\nA conditional statement can be added to with an `elif` branch (\"else if\"). Importantly, an `elif` statement is executed only if none of the preceding branches is executed.\n\n```python\ngoals_home = int(input(\"Home goals scored: \"))\ngoals_away = int(input(\"Away goals scored: \"))\n\nif goals_home > goals_away:\n    print(\"The home team won!\")\nelif goals_away > goals_home:\n    print(\"The away team won!\")\nelse:\n    print(\"It's a tie!\")\n```\n\n```text\nHome goals scored: **3**\nAway goals scored: **3**\nIt's a tie!\n```\n",
        CAS: "\n## Ramas alternativas usando la sentencia elif\n\nSe puede añadir una rama a una sentencia condicional con `elif` (\"else if\"). Es importante destacar que una sentencia `elif` solo se ejecuta si ninguna de las ramas precedentes se ha ejecutado.\n\n```python\ngoals_home = int(input(\"Goles local: \"))\ngoals_away = int(input(\"Goles visitante: \"))\n\nif goals_home > goals_away:\n    print(\"¡El equipo local ganó!\")\nelif goals_away > goals_home:\n    print(\"¡El equipo visitante ganó!\")\nelse:\n    print(\"¡Es un empate!\")\n```\n\n```text\nGoles local: **3**\nGoles visitante: **3**\n¡Es un empate!\n```\n",
        EUS: "\n## Adar alternatiboak elif sententzia erabiliz\n\nBaldintzazko sententzia bati adar bat gehi dakioke `elif` (\"else if\") erabiliz. Garrantzitsua da `elif` sententzia aurreko adarrik exekutatu ez bada bakarrik exekutatzen dela.\n\n```python\ngoals_home = int(input(\"Etxekoen golak: \"))\ngoals_away = int(input(\"Kanpokoen golak: \"))\n\nif goals_home > goals_away:\n    print(\"Etxeko taldeak irabazi du!\")\nelif goals_away > goals_home:\n    print(\"Kanpoko taldeak irabazi du!\")\nelse:\n    print(\"Berdinketa da!\")\n```\n\n```text\nEtxekoen golak: **3**\nKanpokoen golak: **3**\nBerdinketa da!\n```\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part02-06_the_elder',
      title: {
        ENG: "The elder",
        CAS: "El mayor",
        EUS: "Zaharrena"
      },
      description: {
        ENG: "Please write a program which asks for the names and ages of two persons. The program should then print out the name of the elder.",
        CAS: "Por favor, escribe un programa que pida los nombres y edades de dos personas. El programa debe imprimir el nombre del mayor.",
        EUS: "Idatzi programa bat bi pertsonaren izenak eta adinak eskatzen dituena. Programak zaharrenaren izena inprimatu behar du."
      },
      initialCode: "# Write your solution here\n",
      testCode: "\nimport unittest\nclass TestElder(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['Alan', '20', 'Bob', '25'])\n        self.assertIn(\"The elder is Bob\", out)\n        \n    def test_same(self):\n        out = run_student_code(inputs=['Alan', '25', 'Bob', '25'])\n        self.assertIn(\"same age\", out)\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part02-07_alphabetically_last',
      title: {
        ENG: "Alphabetically last",
        CAS: "Alfabéticamente el último",
        EUS: "Alfabetikoki azkena"
      },
      description: {
        ENG: "Please write a program which asks for two words. The program should then print out whichever of the two comes alphabetically last.",
        CAS: "Por favor, escribe un programa que pida dos palabras. El programa debe imprimir cuál de las dos va última alfabéticamente.",
        EUS: "Idatzi programa bat bi hitz eskatzen dituena. Programak alfabetikoki azkena doana inprimatu behar du."
      },
      initialCode: "# Write your solution here\n",
      testCode: "\nimport unittest\nclass TestAlpha(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['a', 'z'])\n        self.assertIn(\"z comes alphabetically last\", out)\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part02-08_grades_and_points',
      title: {
        ENG: "Grades and points",
        CAS: "Notas y puntos",
        EUS: "Notak eta puntuak"
      },
      description: {
        ENG: "Please write a program which asks for the amount of points received and then prints the grade according to a table (0-49: fail, 50-59: 1, ... 90-100: 5).",
        CAS: "Por favor, escribe un programa que pida la cantidad de puntos recibidos y luego imprima la nota según una tabla (0-49: suspenso, 50-59: 1, ... 90-100: 5).",
        EUS: "Idatzi programa bat lortutako puntu kopurua eskatzen duena eta gero nota inprimatzen duena taula baten arabera (0-49: gutxiegi, 50-59: 1, ... 90-100: 5)."
      },
      initialCode: "# Write your solution here\n",
      testCode: "\nimport unittest\nclass TestGrades(unittest.TestCase):\n    def test_fail(self):\n        out = run_student_code(inputs=['45'])\n        self.assertIn(\"fail\", out)\n    def test_5(self):\n        out = run_student_code(inputs=['95'])\n        self.assertIn(\"5\", out)\n"
    }
  ]
};