const fs = require('fs');
const path = require('path');

const section2 = {
  id: "part2-2",
  title: {
    ENG: "More conditionals",
    CAS: "Más condicionales",
    EUS: "Baldintza gehiago"
  },
  "blocks": [
    {
      "type": "markdown",
      "content": {
        "ENG": "\n# More conditionals\n\n## After this section:\n\n- You will know how to create multiple branches within conditional statements...",
        "CAS": "\n# Más condicionales\n\n## Después de esta sección:\n\n- Sabrás cómo crear múltiples ramas dentro de sentencias condicionales...",
        "EUS": "\n# Baldintza gehiago\n\n## Atal honen ondoren:\n\n- Jakingo duzu nola sortu adar anitz baldintzazko sententzien barruan..."
      }
    },
    {
      "type": "exercise",
      "exerciseId": "part02-04_age_of_maturity",
      "title": { ENG: "Age of maturity", CAS: "Mayoría de edad", EUS: "Adin nagusitasuna" },
      "description": {
        ENG: "Write a program that prints a message based on age (18).",
        CAS: "Escribe un programa que imprima un mensaje basado en la edad (18).",
        EUS: "Idatzi adinaren arabera mezu bat inprimatzen duen programa (18)."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestAge(unittest.TestCase):",
        "    def test_minor(self):",
        "        out = run_student_code(inputs=['10'])",
        "        self.assertIn('not of age', out, 'Should say not of age | Debería decir no mayor de edad | Ez dela adin nagusikoa esan beharko luke')",
        "    def test_adult(self):",
        "        out = run_student_code(inputs=['18'])",
        "        self.assertIn('You are of age', out, 'Should say of age | Debería decir mayor de edad | Adin nagusikoa dela esan beharko luke')"
      ].join("\n")
    },
    {
      "type": "exercise",
      "exerciseId": "part02-05_greater_number",
      "title": { ENG: "Greater number", CAS: "Número mayor", EUS: "Zenbaki handiagoa" },
      "description": {
        ENG: "Print whichever of two numbers is greater.",
        CAS: "Imprime cuál de dos números es mayor.",
        EUS: "Inprimatu bi zenbakietatik handiena dena."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestGreater(unittest.TestCase):",
        "    def test_greater(self):",
        "        out = run_student_code(inputs=['5', '8'])",
        "        self.assertIn('8 is greater', out, '8 should be greater | 8 debería ser mayor | 8 handiagoa izan beharko litzateke')",
        "    def test_equal(self):",
        "        out = run_student_code(inputs=['5', '5'])",
        "        self.assertIn('equal', out, 'Should say equal | Debería decir iguales | Berdinak direla esan beharko luke')"
      ].join("\n")
    },
    {
      "type": "markdown",
      "content": {
        "ENG": "\n## Alternative branches using the elif statement\n\nA conditional statement can be added to with an `elif` branch...",
        "CAS": "\n## Ramas alternativas usando la sentencia elif\n\nSe puede añadir una rama a una sentencia condicional con `elif`...",
        "EUS": "\n## Adar alternatiboak elif sententzia erabiliz\n\nBaldintzazko sententzia bati adar bat gehi dakioke `elif` erabiliz..."
      }
    },
    {
      "type": "exercise",
      "exerciseId": "part02-06_the_elder",
      "title": { ENG: "The elder", CAS: "El mayor", EUS: "Zaharrena" },
      "description": {
        ENG: "Print name of the elder of two persons.",
        CAS: "Imprime el nombre del mayor de dos personas.",
        EUS: "Inprimatu bi pertsonatik zaharrenaren izena."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestElder(unittest.TestCase):",
        "    def test_run(self):",
        "        out = run_student_code(inputs=['Alan', '20', 'Bob', '25'])",
        "        self.assertIn('The elder is Bob', out, 'Bob is elder | Bob es el mayor | Bob da zaharrena')",
        "    def test_same(self):",
        "        out = run_student_code(inputs=['Alan', '25', 'Bob', '25'])",
        "        self.assertIn('same age', out, 'Same age | Misma edad | Adin bera')"
      ].join("\n")
    },
    {
      "type": "exercise",
      "exerciseId": "part02-07_alphabetically_last",
      "title": { ENG: "Alphabetically last", CAS: "Alfabéticamente el último", EUS: "Alfabetikoki azkena" },
      "description": {
        ENG: "Print the word that comes last alphabetically.",
        CAS: "Imprime la palabra que va última alfabéticamente.",
        EUS: "Inprimatu alfabetikoki azkena doan hitza."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestAlpha(unittest.TestCase):",
        "    def test_run(self):",
        "        out = run_student_code(inputs=['a', 'z'])",
        "        self.assertIn('z comes alphabetically last', out, 'z comes last | z va último | z doa azkena')"
      ].join("\n")
    },
    {
      "type": "exercise",
      "exerciseId": "part02-08_grades_and_points",
      "title": { ENG: "Grades and points", CAS: "Notas y puntos", EUS: "Notak eta puntuak" },
      "description": {
        ENG: "Print grade based on points table.",
        CAS: "Imprime la nota basada en la tabla de puntos.",
        EUS: "Inprimatu nota puntuen taulan oinarrituta."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestGrades(unittest.TestCase):",
        "    def test_fail(self):",
        "        out = run_student_code(inputs=['45'])",
        "        self.assertIn('fail', out, 'Should be fail | Debería ser suspenso | Gutxiegi izan beharko litzateke')",
        "    def test_5(self):",
        "        out = run_student_code(inputs=['95'])",
        "        self.assertIn('5', out, 'Should be 5 | Debería ser 5 | 5 izan beharko litzateke')"
      ].join("\n")
    }
  ]
};

const outputPath = path.join(__dirname, '../src/data/part2/section2.json');
fs.writeFileSync(outputPath, JSON.stringify(section2, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
