const searchingContent = {
  type: "markdown",
  content: {
    ENG: "## Searching\n\nThe `in` operator checks if a substring exists...",
    CAS: "## Búsqueda\n\nEl operador `in` comprueba si existe una subcadena...",
    EUS: "## Bilaketa\n\n`in` eragileak azpikaterik badagoen egiaztatzen du..."
  }
};

const exerciseFindFirstSubstring = {
  type: "exercise",
  exerciseId: "part03-16_find_first_substring",
  title: { ENG: "Find first substring", CAS: "Encontrar primera subcadena", EUS: "Aurkitu lehenengo azpikatea" },
  description: {
    ENG: "Print first 3 chars starting with given char.",
    CAS: "Imprime los primeros 3 caracteres que comienzan con el carácter dado.",
    EUS: "Inprimatu emandako karakterez hasten diren lehen 3 karaktereak."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestFindSub(unittest.TestCase):",
    "    def test_run(self):",
    "        out = run_student_code(inputs=['mammoth', 'm'])",
    "        self.assertIn('mam', out, 'Should print mam | Debería imprimir mam | mam inprimatu beharko luke')"
  ].join("\n")
};

const exerciseSubstrings1 = {
  type: "exercise",
  exerciseId: "part03-17_substrings_part_1",
  title: { ENG: "Substrings 1", CAS: "Subcadenas 1", EUS: "Azpikateak 1" },
  description: {
    ENG: "Print substrings starting with first char.",
    CAS: "Imprime subcadenas que empiezan con el primer carácter.",
    EUS: "Inprimatu lehen karakterez hasten diren azpikateak."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestSub1(unittest.TestCase):",
    "    def test_test(self):",
    "        out = run_student_code(inputs=['test'])",
    "        self.assertIn('tes', out, 'Should print tes | Debería imprimir tes | tes inprimatu beharko luke')"
  ].join("\n")
};

const exerciseSubstrings2 = {
  type: "exercise",
  exerciseId: "part03-18_substrings_part_2",
  title: { ENG: "Substrings 2", CAS: "Subcadenas 2", EUS: "Azpikateak 2" },
  description: {
    ENG: "Print substrings ending with last char.",
    CAS: "Imprime subcadenas que terminan con el último carácter.",
    EUS: "Inprimatu azken karakterez amaitzen diren azpikateak."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestSub2(unittest.TestCase):",
    "    def test_test(self):",
    "        out = run_student_code(inputs=['test'])",
    "        self.assertIn('st', out, 'Should print st | Debería imprimir st | st inprimatu beharko luke')"
  ].join("\n")
};

const exerciseDoesItContainVowels = {
  type: "exercise",
  exerciseId: "part03-19_does_it_contain_vowels",
  title: { ENG: "Contains vowels?", CAS: "¿Contiene vocales?", EUS: "Bokalik ba al du?" },
  description: {
    ENG: "Check for a, e, o.",
    CAS: "Comprueba a, e, o.",
    EUS: "Egiaztatu a, e, o."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestVowels(unittest.TestCase):",
    "    def test_run(self):",
    "        out = run_student_code(inputs=['hello'])",
    "        self.assertIn('a not found', out, 'a not found message missing | Falta mensaje a no encontrada | a ez da aurkitu mezua falta da')",
    "        self.assertIn('e found', out, 'e found message missing | Falta mensaje e encontrada | e aurkitu da mezua falta da')"
  ].join("\n")
};

module.exports = { searchingContent, exerciseFindFirstSubstring, exerciseSubstrings1, exerciseSubstrings2, exerciseDoesItContainVowels };
