const fs = require('fs');
const path = require('path');

const section3 = {
  id: "part3-3",
  title: {
    ENG: "More loops",
    CAS: "Más bucles",
    EUS: "Begizta gehiago"
  },
  "blocks": [
    {
      "type": "markdown",
      "content": {
        "ENG": "\n# More loops\n\n## The break command\n\nThe `break` command stops the execution of a loop immediately...",
        "CAS": "\n# Más bucles\n\n## El comando break\n\nEl comando `break` detiene la ejecución de un bucle inmediatamente...",
        "EUS": "\n# Begizta gehiago\n\n## break komandoa\n\n`break` komandoak begizta baten exekuzioa berehala gelditzen du..."
      }
    },
    {
      "type": "exercise",
      "exerciseId": "part03-20_multiplication",
      "title": { ENG: "Multiplication", CAS: "Multiplicación", EUS: "Biderketa" },
      "description": {
        ENG: "Print multiplication table until operands reach N.",
        CAS: "Imprime tabla de multiplicación hasta que operandos lleguen a N.",
        EUS: "Inprimatu biderketa taula operandoak N iritsi arte."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestMult(unittest.TestCase):",
        "    def test_2(self):",
        "        out = run_student_code(inputs=['2'])",
        "        self.assertIn('1 * 1 = 1', out)",
        "        self.assertIn('2 * 2 = 4', out)"
      ].join("\n")
    },
    {
      "type": "exercise",
      "exerciseId": "part03-21_factorial",
      "title": { ENG: "Factorial", CAS: "Factorial", EUS: "Faktoriala" },
      "description": {
        ENG: "Print factorial of N. Stop if N < 0.",
        CAS: "Imprime factorial de N. Para si N < 0.",
        EUS: "Inprimatu N-ren faktoriala. Gelditu N < 0 bada."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestFact(unittest.TestCase):",
        "    def test_3(self):",
        "        out = run_student_code(inputs=['3', '-1'])",
        "        self.assertIn('6', out)",
        "    def test_5(self):",
        "        out = run_student_code(inputs=['5', '-1'])",
        "        self.assertIn('120', out)"
      ].join("\n")
    },
    {
      "type": "exercise",
      "exerciseId": "part03-22_flip_the_pairs",
      "title": { ENG: "Flip pairs", CAS: "Invierte pares", EUS: "Bikoteak irauli" },
      "description": {
        ENG: "Print numbers 1 to N swapping pairs.",
        CAS: "Imprime números 1 a N intercambiando pares.",
        EUS: "Inprimatu 1etik N-ra zenbakiak bikoteak trukatuz."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestFlip(unittest.TestCase):",
        "    def test_5(self):",
        "        out = run_student_code(inputs=['5'])",
        "        self.assertIn('2', out)",
        "        self.assertIn('1', out)",
        "        self.assertIn('4', out)",
        "        self.assertIn('3', out)",
        "        self.assertIn('5', out)"
      ].join("\n")
    },
    {
      "type": "exercise",
      "exerciseId": "part03-23_taking_turns",
      "title": { ENG: "Taking turns", CAS: "Turnándose", EUS: "Txandaka" },
      "description": {
        ENG: "Print numbers from ends to middle.",
        CAS: "Imprime números de extremos al medio.",
        EUS: "Inprimatu zenbakiak muturretatik erdira."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestTurns(unittest.TestCase):",
        "    def test_5(self):",
        "        out = run_student_code(inputs=['5'])",
        "        self.assertIn('1', out)",
        "        self.assertIn('5', out)"
      ].join("\n")
    }
  ]
};

const outputPath = path.join(__dirname, '../src/data/part3/section3.json');
fs.writeFileSync(outputPath, JSON.stringify(section3, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
