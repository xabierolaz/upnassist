const moduleContents = {
  type: "markdown",
  content: {
    ENG: "## The contents of a module\n\nThe Python documentation has extensive resources on each module...",
    CAS: "## El contenido de un módulo\n\nLa documentación de Python tiene amplios recursos sobre cada módulo...",
    EUS: "## Modulu baten edukia\n\nPython dokumentazioak baliabide zabalak ditu modulu bakoitzari buruz..."
  }
};

const exerciseSpecialCharacters = {
  type: "exercise",
  exerciseId: "part07-02_special_characters",
  title: { ENG: "Special characters", CAS: "Caracteres especiales", EUS: "Karaktere bereziak" },
  description: {
    ENG: "Write `separate_characters(my_string)` using `string` module to separate ascii letters, punctuation, and others.",
    CAS: "Escribe `separate_characters(my_string)` usando el módulo `string` para separar letras ascii, puntuación y otros.",
    EUS: "Idatzi `separate_characters(nire_katea)` `string` modulua erabiliz ascii letrak, puntuazioa eta beste batzuk bereizteko."
  },
  initialCode: { ENG: "import string\ndef separate_characters(s): pass", CAS: "import string\ndef separate_characters(s): pass", EUS: "import string\ndef separate_characters(s): pass" },
  testCode: [
    "import unittest",
    "class TestSpecialChars(unittest.TestCase):",
    "    def test_run(self):",
    "        parts = separate_characters('abc.!123')",
    "        self.assertEqual(parts, ('abc', '.!', '123'), 'Should separate correctly | Debería separar correctamente | Behar bezala bereizi beharko luke Август')"
  ].join("\n")
};

const exerciseFractions = {
  type: "exercise",
  exerciseId: "part07-03_fractions",
  title: { ENG: "Fractions", CAS: "Fracciones", EUS: "Zatikiak" },
  description: {
    ENG: "Write `fractionate(amount)` using `fractions` module.",
    CAS: "Escribe `fractionate(amount)` usando el módulo `fractions`.",
    EUS: "Idatzi `fractionate(amount)` `fractions` modulua erabiliz."
  },
  initialCode: { ENG: "import fractions\ndef fractionate(n): pass", CAS: "import fractions\ndef fractionate(n): pass", EUS: "import fractions\ndef fractionate(n): pass" },
  testCode: [
    "import unittest",
    "from fractions import Fraction",
    "class TestFractions(unittest.TestCase):",
    "    def test_run(self):",
    "        res = fractionate(3)",
    "        self.assertEqual(len(res), 3, 'Should return 3 fractions | Debería devolver 3 fracciones | 3 zatiki itzuli beharko lituzke')",
    "        self.assertEqual(res[0], Fraction(1, 3), 'Should be 1/3 | Debería ser 1/3 | 1/3 izan beharko litzateke')"
  ].join("\n")
};

module.exports = { moduleContents, exerciseSpecialCharacters, exerciseFractions };
