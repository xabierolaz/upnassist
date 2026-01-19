const introContent = {
  type: "markdown",
  content: {
    ENG: "# Working with strings\n\nStrings can be combined...",
    CAS: "# Trabajando con cadenas\n\nLas cadenas se pueden combinar...",
    EUS: "# Kateekin lanean\n\nKateak konbina daitezke..."
  }
};

const exerciseStringMultiplied = {
  type: "exercise",
  exerciseId: "part03-08_string_multiplied",
  title: { ENG: "String multiplied", CAS: "Cadena multiplicada", EUS: "Katea biderkatuta" },
  description: {
    ENG: "Ask for string and amount, print string repeated amount times.",
    CAS: "Pide cadena y cantidad, imprime cadena repetida.",
    EUS: "Eskatu katea eta kopurua, inprimatu katea errepikatuta."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestMult(unittest.TestCase):",
    "    def test_run(self):",
    "        out = run_student_code(inputs=['hi', '3'])",
    "        self.assertIn('hihihi', out, 'Should print hihihi')"
  ].join("\n")
};

const exerciseLongerString = {
  type: "exercise",
  exerciseId: "part03-09_longer_string",
  title: { ENG: "The longer string", CAS: "La cadena más larga", EUS: "Kate luzeagoa" },
  description: {
    ENG: "Ask for two strings, print the longer one.",
    CAS: "Pide dos cadenas, imprime la más larga.",
    EUS: "Eskatu bi kate, inprimatu luzeena."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestLonger(unittest.TestCase):",
    "    def test_run(self):",
    "        out = run_student_code(inputs=['short', 'loooong'])",
    "        self.assertIn('loooong', out, 'Should print loooong')"
  ].join("\n")
};

const exerciseEndToBeginning = {
  type: "exercise",
  exerciseId: "part03-10_end_to_beginning",
  title: { ENG: "End to beginning", CAS: "De final a principio", EUS: "Amaieratik hasierara" },
  description: {
    ENG: "Print input string in reverse order, one char per line.",
    CAS: "Imprime cadena en orden inverso, un carácter por línea.",
    EUS: "Inprimatu katea alderantziz."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestReverse(unittest.TestCase):",
    "    def test_run(self):",
    "        out = run_student_code(inputs=['abc'])",
    "        self.assertIn('c', out)",
    "        self.assertIn('b', out)",
    "        self.assertIn('a', out)"
  ].join("\n")
};

const exerciseSecondAndSecondToLast = {
  type: "exercise",
  exerciseId: "part03-11_second_and_second_to_last",
  title: { ENG: "2nd and 2nd last", CAS: "2do y penúltimo", EUS: "2. eta azkenaurrekoa" },
  description: {
    ENG: "Check if 2nd and 2nd to last chars match.",
    CAS: "Comprueba si el 2do y penúltimo carácter coinciden.",
    EUS: "Egiaztatu 2. eta azkenaurreko karaktereak bat datozen."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestSecLast(unittest.TestCase):",
    "    def test_same(self):",
    "        out = run_student_code(inputs=['python'])",
    "        self.assertIn('different', out)",
    "    def test_match(self):",
    "        out = run_student_code(inputs=['abba'])",
    "        self.assertIn('same', out)"
  ].join("\n")
};

module.exports = { introContent, exerciseStringMultiplied, exerciseLongerString, exerciseEndToBeginning, exerciseSecondAndSecondToLast };