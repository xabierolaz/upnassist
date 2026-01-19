const exerciseMatchingElements = {
  type: "exercise",
  exerciseId: "part05-02_number_of_matching_elements",
  title: { ENG: "Number of matching elements", CAS: "Número de elementos coincidentes", EUS: "Bat datozen elementuen kopurua" },
  description: {
    ENG: "Please write a function named `count_matching_elements`, which takes a two-dimensional array of integers and a single integer value as its arguments. The function then counts how many elements within the matrix match the argument value.",
    CAS: "Por favor escribe una función llamada `count_matching_elements`, que tome una matriz bidimensional de enteros y un valor entero único como sus argumentos. La función cuenta cuántos elementos dentro de la matriz coinciden con el valor del argumento.",
    EUS: "Mesedez idatzi `count_matching_elements` izeneko funtzio bat, osoko zenbakien bi dimentsioko array bat eta osoko balio bakar bat argumentu gisa hartzen dituena. Funtzioak matrizearen barruan argumentuaren balioarekin bat datozen elementu kopurua zenbatzen du."
  },
  initialCode: { ENG: "def count_matching_elements(m, e): pass", CAS: "def count_matching_elements(m, e): pass", EUS: "def count_matching_elements(m, e): pass" },
  testCode: [
    "import unittest",
    "class TestMatching(unittest.TestCase):",
    "    def test_run(self):",
    "        m = [[1, 2, 1], [0, 3, 4], [1, 0, 0]]",
    "        self.assertEqual(count_matching_elements(m, 1), 3, 'Should find 3 ones | Debería encontrar 3 unos | 3 bat aurkitu beharko lituzke')",
    "        self.assertEqual(count_matching_elements(m, 5), 0, 'Should find 0 fives | Debería encontrar 0 cincos | 0 bost aurkitu beharko lituzke')"
  ].join("\n")
};

const exerciseGo = {
  type: "exercise",
  exerciseId: "part05-03_go",
  title: { ENG: "Go", CAS: "Go", EUS: "Go" },
  description: {
    ENG: "Please write a function named `who_won(game_board: list)`, which takes a two-dimensional array as its argument. The array consists of integer values, where 0 is empty, 1 is player 1, and 2 is player 2. The function should return 1 if player 1 has more pieces, 2 if player 2 has more, and 0 if it's a tie.",
    CAS: "Por favor escribe una función llamada `who_won(game_board: list)`, que tome una matriz bidimensional como argumento. La matriz consta de valores enteros, donde 0 es vacío, 1 es jugador 1 y 2 es jugador 2. La función debe devolver 1 si el jugador 1 tiene más piezas, 2 si el jugador 2 tiene más, y 0 si es un empate.",
    EUS: "Mesedez idatzi `who_won(game_board: list)` izeneko funtzio bat, bi dimentsioko array bat argumentu gisa hartzen duena. Funtzioak 1 itzuli behar du 1. jokalariak pieza gehiago baditu, 2 itzuli 2. jokalariak gehiago baditu, eta 0 berdinketa bada."
  },
  initialCode: { ENG: "def who_won(board): pass", CAS: "def who_won(board): pass", EUS: "def who_won(board): pass" },
  testCode: [
    "import unittest",
    "class TestGo(unittest.TestCase):",
    "    def test_run(self):",
    "        board = [[1, 2, 1], [0, 0, 1], [2, 1, 0]]",
    "        self.assertEqual(who_won(board), 1, 'Player 1 should win | El jugador 1 debería ganar | 1. jokalariak irabazi beharko luke')",
    "        board2 = [[1, 2], [2, 1]]",
    "        self.assertEqual(who_won(board2), 0, 'It should be a tie | Debería ser un empate | Berdinketa izan beharko litzateke')"
  ].join("\n")
};

module.exports = { exerciseMatchingElements, exerciseGo };
