const fs = require('fs');
const path = require('path');

const section1 = {
  id: "part3-1",
  title: {
    ENG: "Loops with conditions",
    CAS: "Bucles con condiciones",
    EUS: "Baldintzadun begiztak"
  },
  "blocks": [
    {
      "type": "markdown",
      "content": {
        "ENG": "\n# Loops with conditions\n\nThe `while` loop can also be controlled by a condition other than `True`...",
        "CAS": "\n# Bucles con condiciones\n\nEl bucle `while` también puede ser controlado por una condición distinta de `True`...",
        "EUS": "\n# Baldintzadun begiztak\n\n`while` begizta `True` ez den beste baldintza batek ere kontrola dezake..."
      }
    },
    {
      "type": "exercise",
      "exerciseId": "part03-01_print_numbers",
      "title": { ENG: "Print numbers", CAS: "Imprimir números", EUS: "Zenbakiak inprimatu" },
      "description": {
        ENG: "Print even numbers between 2 and 30.",
        CAS: "Imprime números pares entre 2 y 30.",
        EUS: "Inprimatu 2 eta 30 arteko zenbaki bikoitiak."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestEven(unittest.TestCase):",
        "    def test_run(self):",
        "        out = run_student_code()",
        "        self.assertIn('2', out, 'Should start with 2 | Debería empezar con 2 | 2rekin hasi beharko luke')",
        "        self.assertIn('30', out, 'Should end with 30 | Debería terminar con 30 | 30ekin amaitu beharko luke')",
        "        if '1' in out: self.fail('No odd numbers | No números impares | Zenbaki bakoitirik ez')"
      ].join("\n")
    },
    {
      "type": "exercise",
      "exerciseId": "part03-02_countdown_fix",
      "title": { ENG: "Fix: Countdown", CAS: "Corrige: Cuenta atrás", EUS: "Konpondu: Atzerako kontaketa" },
      "description": {
        ENG: "Fix countdown from 5 to 1.",
        CAS: "Arregla la cuenta atrás de 5 a 1.",
        EUS: "Konpondu 5etik 1erako atzerako kontaketa."
      },
      "initialCode": {
        ENG: "print('Are you ready?')\nnumber = 5\nwhile number > 0:\n    print(number)\n    number = number - 1\nprint('Now!')",
        "CAS": "print('Are you ready?')\nnumber = 5\nwhile number > 0:\n    print(number)\n    number = number - 1\nprint('Now!')",
        "EUS": "print('Are you ready?')\nnumber = 5\nwhile number > 0:\n    print(number)\n    number = number - 1\nprint('Now!')"
      },
      "testCode": [
        "import unittest",
        "class TestCountdown(unittest.TestCase):",
        "    def test_run(self):",
        "        out = run_student_code()",
        "        self.assertIn('5', out)",
        "        self.assertIn('1', out)",
        "        self.assertIn('Now!', out)"
      ].join("\n")
    },
    {
      "type": "exercise",
      "exerciseId": "part03-03_numbers",
      "title": { ENG: "Numbers", CAS: "Números", EUS: "Zenbakiak" },
      "description": {
        ENG: "Print numbers from 1 to N.",
        CAS: "Imprime números del 1 al N.",
        EUS: "Inprimatu zenbakiak 1etik N-ra."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestNumbers(unittest.TestCase):",
        "    def test_5(self):",
        "        out = run_student_code(inputs=['5'])",
        "        self.assertIn('1', out)",
        "        self.assertIn('5', out)",
        "        if '6' in out: self.fail('Should stop at N | Debería parar en N | N-n gelditu beharko luke')"
      ].join("\n")
    },
    {
      "type": "exercise",
      "exerciseId": "part03-04_powers_of_two",
      "title": { ENG: "Powers of two", CAS: "Potencias de dos", EUS: "Biren berreturak" },
      "description": {
        ENG: "Print powers of 2 until N.",
        CAS: "Imprime potencias de 2 hasta N.",
        EUS: "Inprimatu 2ren berreturak N arte."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestPowers(unittest.TestCase):",
        "    def test_10(self):",
        "        out = run_student_code(inputs=['10'])",
        "        self.assertIn('1', out)",
        "        self.assertIn('8', out)",
        "        self.assertNotIn('16', out)"
      ].join("\n")
    },
    {
      "type": "exercise",
      "exerciseId": "part03-05_powers_of_base_n",
      "title": { ENG: "Powers of base n", CAS: "Potencias de base n", EUS: "n oinarriko berreturak" },
      "description": {
        ENG: "Print powers of base until limit.",
        CAS: "Imprime potencias de base hasta límite.",
        EUS: "Inprimatu oinarriaren berreturak muga arte."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestBaseN(unittest.TestCase):",
        "    def test_limit_100_base_3(self):",
        "        out = run_student_code(inputs=['100', '3'])",
        "        self.assertIn('1', out)",
        "        self.assertIn('27', out)",
        "        self.assertIn('81', out)",
        "        self.assertNotIn('243', out)"
      ].join("\n")
    },
    {
      "type": "exercise",
      "exerciseId": "part03-06_sum_of_consecutive_numbers",
      "title": { ENG: "Sum consecutive", CAS: "Suma consecutivos", EUS: "Ondoz ondoko batuketa" },
      "description": {
        ENG: "Sum 1+2+3... until limit.",
        CAS: "Suma 1+2+3... hasta límite.",
        EUS: "Batu 1+2+3... muga arte."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestSum(unittest.TestCase):",
        "    def test_18(self):",
        "        out = run_student_code(inputs=['18'])",
        "        self.assertIn('21', out, 'Sum should exceed 18 | Suma debería exceder 18 | Baturak 18 gainditu beharko luke')"
      ].join("\n")
    },
    {
      "type": "exercise",
      "exerciseId": "part03-07_sum_of_consecutive_numbers_2",
      "title": { ENG: "Sum consecutive v2", CAS: "Suma consecutivos v2", EUS: "Ondoz ondoko batuketa v2" },
      "description": {
        ENG: "Print calculation string.",
        CAS: "Imprime la cadena de cálculo.",
        EUS: "Inprimatu kalkulu katea."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestSum2(unittest.TestCase):",
        "    def test_18(self):",
        "        out = run_student_code(inputs=['18'])",
        "        self.assertIn('1 + 2 + 3 + 4 + 5 + 6 = 21', out, 'Calculation string wrong | Cadena de cálculo incorrecta | Kalkulu katea okerra')"
      ].join("\n")
    }
  ]
};

const outputPath = path.join(__dirname, '../src/data/part3/section1.json');
fs.writeFileSync(outputPath, JSON.stringify(section1, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
