const exercisePrintManyTimes = {
  type: "exercise",
  exerciseId: "part03-27_print_many_times",
  title: { ENG: "Print many times", CAS: "Imprimir muchas veces", EUS: "Askotan inprimatu" },
  description: {
    ENG: "Print text n times.",
    CAS: "Imprime texto n veces.",
    EUS: "Inprimatu testua n aldiz."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestMany(unittest.TestCase):",
    "    def test_run(self):",
    "        out = run_student_code()",
    "        if out.count('hi') < 5:",
    "             self.fail('Should print hi 5 times | Debería imprimir hi 5 veces | hi 5 aldiz inprimatu beharko luke')"
  ].join("\n")
};

const exerciseHashSquare = {
  type: "exercise",
  exerciseId: "part03-28_hash_square",
  title: { ENG: "Hash square", CAS: "Cuadrado de almohadillas", EUS: "Traola karratua" },
  description: {
    ENG: "Print square of hashes.",
    CAS: "Imprime cuadrado de almohadillas.",
    EUS: "Inprimatu traola karratua."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestHashSq(unittest.TestCase):",
    "    def test_run(self):",
    "        out = run_student_code()",
    "        if out.count('###') < 3:",
    "             self.fail('Should print 3 lines | Debería imprimir 3 líneas | 3 lerro inprimatu beharko lituzke')"
  ].join("\n")
};

const exerciseChessboard = {
  type: "exercise",
  exerciseId: "part03-29_chessboard",
  title: { ENG: "Chessboard", CAS: "Tablero de ajedrez", EUS: "Xake-taula" },
  description: {
    ENG: "Print chessboard of 1s and 0s.",
    CAS: "Imprime tablero de ajedrez de 1s y 0s.",
    EUS: "Inprimatu 1 eta 0z osatutako xake-taula."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestChess(unittest.TestCase):",
    "    def test_run(self):",
    "        out = run_student_code()",
    "        self.assertIn('101', out, 'Pattern 101 missing | Falta patrón 101 | 101 patroia falta da')",
    "        self.assertIn('010', out, 'Pattern 010 missing | Falta patrón 010 | 010 patroia falta da')"
  ].join("\n")
};

module.exports = { exercisePrintManyTimes, exerciseHashSquare, exerciseChessboard };
