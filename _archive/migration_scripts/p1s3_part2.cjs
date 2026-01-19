const exerciseExtraSpace = {
  type: "exercise",
  exerciseId: "part01-06_extra_space",
  title: { ENG: "Extra space", CAS: "Espacio extra", EUS: "Espazio gehigarria" },
  description: {
    ENG: "Fix code to print job seeker info without extra spaces.",
    CAS: "Corrige el código para imprimir información sin espacios extra.",
    EUS: "Konpondu kodea espazio gehigarririk gabe inprimatzeko."
  },
  initialCode: {
    ENG: "name = \"Tim Tester\"\n# ...",
    CAS: "name = \"Tim Tester\"\n# ...",
    EUS: "name = \"Tim Tester\"\n# ..."
  },
  testCode: [
    "import unittest",
    "class TestExtraSpace(unittest.TestCase):",
    "    def test_output(self):",
    "        output = run_student_code()",
    "        expected = 'my name is Tim Tester, I am 20 years old\nmy skills are\n- python (beginner)\n- java (veteran)\n- programming (semiprofessional)\nI am looking for a job with a salary of 2000-3000 euros per month'",
    "        self.assertEqual(output.strip(), expected.strip(), 'Output does not match exactly | La salida no coincide exactamente | Irteera ez dator bat zehazki')"
  ].join("\n")
};

const floatContent = {
  type: "markdown",
  content: {
    ENG: "## Floating point numbers\n\nFloating point number or float...",
    CAS: "## Números de punto flotante\n\nNúmero de punto flotante o float...",
    EUS: "## Koma mugikorreko zenbakiak\n\nKoma mugikorreko zenbakia edo float..."
  }
};

const exerciseArithmetics = {
  type: "exercise",
  exerciseId: "part01-07_arithmetics",
  title: { ENG: "Arithmetics", CAS: "Aritmética", EUS: "Aritmetika" },
  description: {
    ENG: "Complete program to print sum, difference, product, division.",
    CAS: "Completa el programa para imprimir suma, resta, producto, división.",
    EUS: "Osatu programa batuketa, kenketa, biderkadura, zatiketa inprimatzeko."
  },
  initialCode: { ENG: "x = 27\ny = 15\n# Code here", CAS: "x = 27\ny = 15\n# Código aquí", EUS: "x = 27\ny = 15\n# Kodea hemen" },
  testCode: [
    "import unittest",
    "class TestArithmetics(unittest.TestCase):",
    "    def test_output(self):",
    "        output = run_student_code()",
    "        self.assertIn('27 + 15 = 42', output, 'Sum incorrect | Suma incorrecta | Batuketa okerra')",
    "        self.assertIn('27 - 15 = 12', output, 'Diff incorrect | Resta incorrecta | Kenketa okerra')",
    "        self.assertIn('27 * 15 = 405', output, 'Prod incorrect | Producto incorrecto | Biderkadura okerra')",
    "        self.assertIn('27 / 15 = 1.8', output, 'Div incorrect | División incorrecta | Zatiketa okerra')"
  ].join("\n")
};

const exercisePrintSingleLine = {
  type: "exercise",
  exerciseId: "part01-08_print_single_line",
  title: { ENG: "Fix code: Print single line", CAS: "Arregla código: Una línea", EUS: "Konpondu: Lerro bakarra" },
  description: {
    ENG: "Fix program to print calculation on one line.",
    CAS: "Arregla programa para imprimir cálculo en una línea.",
    EUS: "Konpondu programa kalkulua lerro batean inprimatzeko."
  },
  initialCode: { ENG: "print(5)\n# ...", CAS: "print(5)\n# ...", EUS: "print(5)\n# ..." },
  testCode: [
    "import unittest",
    "class TestSingleLine(unittest.TestCase):",
    "    def test_output(self):",
    "        output = run_student_code()",
    "        self.assertEqual(output.strip(), '5 + 8 - 4 = 9', 'Should be one line | Debería ser una línea | Lerro bakarra izan beharko litzateke')"
  ].join("\n")
};

module.exports = { exerciseExtraSpace, floatContent, exerciseArithmetics, exercisePrintSingleLine };
