const introContent = {
  type: "markdown",
  content: {
    ENG: "# Defining functions\n\nYou can define your own functions using the `def` keyword...",
    CAS: "# Definiendo funciones\n\nPuedes definir tus propias funciones usando la palabra clave `def`...",
    EUS: "# Funtzioak definitzen\n\nZure funtzio propioak defini ditzakezu `def` gako-hitza erabiliz..."
  }
};

const exerciseSevenBrothers = {
  type: "exercise",
  exerciseId: "part03-24_seven_brothers",
  title: { ENG: "Seven Brothers", CAS: "Siete Hermanos", EUS: "Zazpi Anaiak" },
  description: {
    ENG: "Print names of seven brothers alphabetically.",
    CAS: "Imprime los nombres de los siete hermanos en orden alfabético.",
    EUS: "Inprimatu zazpi anaien izenak ordena alfabetikoan."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "from unittest.mock import patch",
    "class TestSevenBrothers(unittest.TestCase):",
    "    def test_run(self):",
    "        out = run_student_code()",
    "        expected = ['Aapo', 'Eero', 'Juhani', 'Lauri', 'Simeoni', 'Timo', 'Tuomas']",
    "        for name in expected:",
    "            self.assertIn(name, out, f'Missing {name} | Falta {name} | {name} falta da')"
  ].join("\n")
};

const exerciseFirstCharacter = {
  type: "exercise",
  exerciseId: "part03-25_first_character",
  title: { ENG: "First character", CAS: "Primer carácter", EUS: "Lehen karakterea" },
  description: {
    ENG: "Print first character of argument string.",
    CAS: "Imprime el primer carácter de la cadena argumento.",
    EUS: "Inprimatu argumentu katearen lehen karakterea."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestFirst(unittest.TestCase):",
    "    def test_python(self):",
    "        out = run_student_code()",
    "        self.assertIn('p', out, 'Should print p | Debería imprimir p | p inprimatu beharko luke')"
  ].join("\n")
};

const exerciseMean = {
  type: "exercise",
  exerciseId: "part03-26_mean",
  title: { ENG: "Mean", CAS: "Media", EUS: "Batezbestekoa" },
  description: {
    ENG: "Print arithmetic mean of three integers.",
    CAS: "Imprime la media aritmética de tres enteros.",
    EUS: "Inprimatu hiru osoko zenbakiren batezbesteko aritmetikoa."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestMean(unittest.TestCase):",
    "    def test_run(self):",
    "        out = run_student_code()",
    "        self.assertIn('2.0', out, 'Mean of 1,2,3 is 2.0 | Media de 1,2,3 es 2.0 | 1,2,3-ren batezbestekoa 2.0 da')"
  ].join("\n")
};

module.exports = { introContent, exerciseSevenBrothers, exerciseFirstCharacter, exerciseMean };
