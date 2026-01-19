const fs = require('fs');
const path = require('path');

const section3 = {
  id: "part2-3",
  title: {
    ENG: "Combining conditions",
    CAS: "Combinando condiciones",
    EUS: "Baldintzak konbinatzen"
  },
  blocks: [
    {
      "type": "markdown",
      "content": {
        "ENG": "\n# Combining conditions\n\n## After this section:\n\n- You will know how to use the operators `and`, `or` and `not` in conditions...",
        "CAS": "\n# Combinando condiciones\n\n## Después de esta sección:\n\n- Sabrás cómo usar los operadores `and`, `or` y `not` en condiciones...",
        "EUS": "\n# Baldintzak konbinatzen\n\n## Atal honen ondoren:\n\n- Jakingo duzu nola erabili `and`, `or` eta `not` eragileak baldintzetan..."
      }
    },
    {
      "type": "exercise",
      "exerciseId": "part02-09_nephews",
      "title": { ENG: "Nephews", CAS: "Sobrinos", EUS: "Ilobak" },
      "description": {
        ENG: "Recognize Donald Duck's or Mickey Mouse's nephews.",
        CAS: "Reconoce a los sobrinos del Pato Donald o Mickey Mouse.",
        EUS: "Ezagutu Donald Ahatearen edo Mickey Mouse-ren ilobak."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestNephews(unittest.TestCase):",
        "    def test_donald(self):",
        "        out = run_student_code(inputs=['Huey'])",
        "        self.assertIn('Donald', out, 'Huey is Donald\'s nephew | Huey es sobrino de Donald | Huey Donald-en iloba da')",
        "    def test_mickey(self):",
        "        out = run_student_code(inputs=['Morty'])",
        "        self.assertIn('Mickey', out, 'Morty is Mickey\'s nephew | Morty es sobrino de Mickey | Morty Mickey-ren iloba da')",
        "    def test_other(self):",
        "        out = run_student_code(inputs=['Bob'])",
        "        self.assertIn('not a nephew', out, 'Bob is not a nephew | Bob no es un sobrino | Bob ez da iloba')"
      ].join("\n")
    },
    {
      "type": "exercise",
      "exerciseId": "part02-10_grades_and_points_2",
      "title": { ENG: "Grades and points 2", CAS: "Notas y puntos 2", EUS: "Notak eta puntuak 2" },
      "description": {
        ENG: "Grade points including impossible range.",
        CAS: "Califica puntos incluyendo rango imposible.",
        EUS: "Kalifikatu puntuak ezinezko tartea barne."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestGrades2(unittest.TestCase):",
        "    def test_impossible(self):",
        "        out = run_student_code(inputs=['-5'])",
        "        self.assertIn('impossible', out, 'Should say impossible | Debería decir imposible | Ezinezkoa dela esan beharko luke')",
        "    def test_fail(self):",
        "        out = run_student_code(inputs=['45'])",
        "        self.assertIn('fail', out, 'Should be fail | Debería ser suspenso | Gutxiegi izan beharko litzateke')"
      ].join("\n")
    },
    {
      "type": "exercise",
      "exerciseId": "part02-11_fizzbuzz",
      "title": { ENG: "FizzBuzz", CAS: "FizzBuzz", EUS: "FizzBuzz" },
      "description": {
        ENG: "Fizz if div by 3, Buzz if by 5, FizzBuzz if both.",
        CAS: "Fizz si div por 3, Buzz si por 5, FizzBuzz si ambos.",
        EUS: "Fizz 3z zatigarria bada, Buzz 5ez, FizzBuzz biez."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestFizzBuzz(unittest.TestCase):",
        "    def test_15(self):",
        "        out = run_student_code(inputs=['15'])",
        "        self.assertIn('FizzBuzz', out, '15 is div by 3 and 5 | 15 es div por 3 y 5 | 15 3 eta 5ez zatigarria da')",
        "    def test_3(self):",
        "        out = run_student_code(inputs=['3'])",
        "        self.assertIn('Fizz', out, '3 is div by 3 | 3 es div por 3 | 3 3z zatigarria da')",
        "        self.assertNotIn('Buzz', out, '3 is not div by 5 | 3 no es div por 5 | 3 ez da 5ez zatigarria')"
      ].join("\n")
    },
    {
      "type": "exercise",
      "exerciseId": "part02-12_leap_year",
      "title": { ENG: "Leap year", CAS: "Año bisiesto", EUS: "Urte bisustua" },
      "description": {
        ENG: "Check if leap year (div by 4, not 100 unless 400).",
        CAS: "Comprueba si es bisiesto (div por 4, no 100 a menos que 400).",
        EUS: "Egiaztatu bisustua den (4z zatigarria, ez 100ez 400ez ez bada)."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestLeap(unittest.TestCase):",
        "    def test_2024(self):",
        "        out = run_student_code(inputs=['2024'])",
        "        self.assertIn('leap year', out, '2024 is leap | 2024 es bisiesto | 2024 bisustua da')",
        "    def test_1900(self):",
        "        out = run_student_code(inputs=['1900'])",
        "        self.assertIn('not a leap year', out, '1900 is not leap | 1900 no es bisiesto | 1900 ez da bisustua')",
        "    def test_2000(self):",
        "        out = run_student_code(inputs=['2000'])",
        "        self.assertIn('leap year', out, '2000 is leap | 2000 es bisiesto | 2000 bisustua da')"
      ].join("\n")
    },
    {
      "type": "markdown",
      "content": {
        "ENG": "\n## Nested conditionals\n\nConditions can be nested inside other conditions...",
        "CAS": "\n## Condicionales anidados\n\nLas condiciones pueden anidarse dentro de otras condiciones...",
        "EUS": "\n## Habiaratutako baldintzak\n\nBaldintzak beste baldintza batzuen barruan habiaratu daitezke..."
      }
    },
    {
      "type": "exercise",
      "exerciseId": "part02-13_alphabetically_in_the_middle",
      "title": { ENG: "Alphabetically in middle", CAS: "Alfabéticamente en medio", EUS: "Alfabetikoki erdian" },
      "description": {
        ENG: "Print letter in the middle alphabetically.",
        CAS: "Imprime la letra del medio alfabéticamente.",
        EUS: "Inprimatu erdiko hizkia alfabetikoki."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestMiddle(unittest.TestCase):",
        "    def test_run(self):",
        "        out = run_student_code(inputs=['a', 'c', 'b'])",
        "        self.assertIn('b', out, 'b is in the middle of a, c | b está en medio de a, c | b a eta c-ren erdian dago')"
      ].join("\n")
    },
    {
      "type": "exercise",
      "exerciseId": "part02-14_gift_tax",
      "title": { ENG: "Gift tax", CAS: "Impuesto de donaciones", EUS: "Dohaintza zerga" },
      "description": {
        ENG: "Calculate gift tax based on value.",
        CAS: "Calcula el impuesto de donaciones basado en el valor.",
        EUS: "Kalkulatu dohaintza zerga balioan oinarrituta."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestTax(unittest.TestCase):",
        "    def test_low(self):",
        "        out = run_student_code(inputs=['4000'])",
        "        self.assertIn('No tax', out, 'No tax for 4000 | Sin impuestos para 4000 | Zergarik ez 4000rako')",
        "    def test_mid(self):",
        "        out = run_student_code(inputs=['6000'])",
        "        self.assertIn('180', out, 'Tax should be 180 | El impuesto debería ser 180 | Zergak 180 izan beharko luke')"
      ].join("\n")
    }
  ]
};

const outputPath = path.join(__dirname, '../src/data/part2/section3.json');
fs.writeFileSync(outputPath, JSON.stringify(section3, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
