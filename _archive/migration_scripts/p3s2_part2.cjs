const substringsContent = {
  type: "markdown",
  content: {
    ENG: "## Substrings (Slicing)\n\nYou can slice strings using the syntax `[start:end]`...",
    CAS: "## Subcadenas (Slicing)\n\nPuedes cortar cadenas usando la sintaxis `[inicio:fin]`...",
    EUS: "## Azpikateak (Slicing)\n\nKateak ebaki ditzakezu `[hasiera:amaiera]`..."
  }
};

const exerciseLineOfHashes = {
  type: "exercise",
  exerciseId: "part03-12_line_of_hashes",
  title: { ENG: "Line of hashes", CAS: "Línea de almohadillas", EUS: "Traola lerroa" },
  description: {
    ENG: "Print line of hashes of given width.",
    CAS: "Imprime línea de almohadillas del ancho dado.",
    EUS: "Inprimatu emandako zabalerako traola lerroa."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestHash(unittest.TestCase):",
    "    def test_3(self):",
    "        out = run_student_code(inputs=['3'])",
    "        self.assertIn('###', out, 'Should print ### | Debería imprimir ### | ### inprimatu beharko luke')"
  ].join("\n")
};

const exerciseRectangleOfHashes = {
  type: "exercise",
  exerciseId: "part03-13_rectangle_of_hashes",
  title: { ENG: "Rectangle of hashes", CAS: "Rectángulo de almohadillas", EUS: "Traola laukizuzena" },
  description: {
    ENG: "Print rectangle of hashes.",
    CAS: "Imprime rectángulo de almohadillas.",
    EUS: "Inprimatu traola laukizuzena."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestRect(unittest.TestCase):",
    "    def test_run(self):",
    "        out = run_student_code(inputs=['3', '2'])",
    "        if out.count('###') < 2:",
    "             self.fail('Should print 2 lines of 3 hashes | Debería imprimir 2 líneas de 3 almohadillas | 3 traolako 2 lerro inprimatu beharko lituzke')"
  ].join("\n")
};

const exerciseUnderlining = {
  type: "exercise",
  exerciseId: "part03-14_underlining",
  title: { ENG: "Underlining", CAS: "Subrayado", EUS: "Azpimarratua" },
  description: {
    ENG: "Print string underlined.",
    CAS: "Imprime cadena subrayada.",
    EUS: "Inprimatu katea azpimarratuta."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestUnderline(unittest.TestCase):",
    "    def test_hi(self):",
    "        out = run_student_code(inputs=['Hi'])",
    "        self.assertIn('Hi', out)",
    "        self.assertIn('--', out, 'Should be underlined | Debería estar subrayado | Azpimarratuta egon beharko litzateke')"
  ].join("\n")
};

const exerciseRightAligned = {
  type: "exercise",
  exerciseId: "part03-15_right_aligned",
  title: { ENG: "Right aligned", CAS: "Alineado a la derecha", EUS: "Eskuinean lerrokatuta" },
  description: {
    ENG: "Right align string to length 20 using stars.",
    CAS: "Alinea a la derecha la cadena a longitud 20 usando estrellas.",
    EUS: "Lerrokatu katea eskuinera 20ko luzerarekin izarrak erabiliz."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestRight(unittest.TestCase):",
    "    def test_python(self):",
    "        out = run_student_code(inputs=['python'])",
    "        self.assertIn('**************python', out, 'Should be padded with 14 stars | Debería tener 14 estrellas de relleno | 14 izarrekin bete beharko litzateke')"
  ].join("\n")
};

module.exports = { substringsContent, exerciseLineOfHashes, exerciseRectangleOfHashes, exerciseUnderlining, exerciseRightAligned };
