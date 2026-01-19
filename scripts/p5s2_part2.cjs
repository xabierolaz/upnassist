const exerciseSudokuPrintAndAdd = {
  type: "exercise",
  exerciseId: "part05-10_sudoku_print_and_add",
  title: { ENG: "Sudoku: print and add", CAS: "Sudoku: imprimir y añadir", EUS: "Sudoku: inprimatu eta gehitu" },
  description: {
    ENG: "In this exercise we will complete two more functions for the sudoku project: `print_sudoku(sudoku: list)` and `add_number(sudoku: list, row_no: int, column_no: int, number:int)`.",
    CAS: "En este ejercicio completaremos dos funciones más para el proyecto sudoku: `print_sudoku` y `add_number`.",
    EUS: "Ariketa honetan sudoku proiekturako beste bi funtzio osatuko ditugu: `print_sudoku` eta `add_number`."
  },
  initialCode: { ENG: "def print_sudoku(s): pass\ndef add_number(s, r, c, n): pass", CAS: "def print_sudoku(s): pass\ndef add_number(s, r, c, n): pass", EUS: "def print_sudoku(s): pass\ndef add_number(s, r, c, n): pass" },
  testCode: [
    "import unittest",
    "class TestSudokuPrintAdd(unittest.TestCase):",
    "    def test_run(self):",
    "        s = [[0]*9 for _ in range(9)]",
    "        add_number(s, 0, 0, 5)",
    "        self.assertEqual(s[0][0], 5, 'Should add 5 at 0,0 | Debería añadir 5 en 0,0 | 0,0-n 5 gehitu beharko luke')"
  ].join("\n")
};

const exerciseSudokuAddCopy = {
  type: "exercise",
  exerciseId: "part05-11_sudoku_add_to_copy",
  title: { ENG: "Sudoku: add to copy", CAS: "Sudoku: añadir a copia", EUS: "Sudoku: kopia bati gehitu" },
  description: {
    ENG: "The function `copy_and_add` takes a sudoku grid and arguments. It should return a COPY of the grid with the new number added.",
    CAS: "La función `copy_and_add` toma una cuadrícula de sudoku y argumentos. Debe devolver una COPIA de la cuadrícula con el nuevo número añadido.",
    EUS: "`copy_and_add` funtzioak sudoku sareta bat eta argumentuak hartzen ditu. Saretaren KOPIA bat itzuli behar du zenbaki berria gehituta."
  },
  initialCode: { ENG: "def copy_and_add(s, r, c, n): pass", CAS: "def copy_and_add(s, r, c, n): pass", EUS: "def copy_and_add(s, r, c, n): pass" },
  testCode: [
    "import unittest",
    "class TestSudokuCopy(unittest.TestCase):",
    "    def test_run(self):",
    "        s = [[0]*9 for _ in range(9)]",
    "        s2 = copy_and_add(s, 0, 0, 5)",
    "        self.assertNotEqual(s, s2, 'Should return a copy | Debería devolver una copia | Kopia bat itzuli beharko luke Ав')",
    "        self.assertEqual(s2[0][0], 5, 'Copy should have the new number | La copia debería tener el nuevo número | Kopiak zenbaki berria izan beharko luke')"
  ].join("\n")
};

const exerciseTicTacToe = {
  type: "exercise",
  exerciseId: "part05-12_tic_tac_toe",
  title: { ENG: "Tic-Tac-Toe", CAS: "Tres en raya", EUS: "Artzain-jokoa" },
  description: {
    ENG: "Please write a function named `play_turn`, which places the given symbol at the given coordinates on the board.",
    CAS: "Por favor escribe una función llamada `play_turn`, que coloque el símbolo dado en las coordenadas dadas en el tablero.",
    EUS: "Mesedez idatzi `play_turn` izeneko funtzio bat, emandako ikurra taulako emandako koordenatuetan jartzen duena."
  },
  initialCode: { ENG: "def play_turn(b, x, y, p): pass", CAS: "def play_turn(b, x, y, p): pass", EUS: "def play_turn(b, x, y, p): pass" },
  testCode: [
    "import unittest",
    "class TestTicTacToe(unittest.TestCase):",
    "    def test_run(self):",
    "        board = [['', '', ''], ['', '', ''], ['', '', '']]",
    "        res = play_turn(board, 0, 0, 'X')",
    "        self.assertTrue(res, 'Should place X | Debería colocar X | X jarri beharko luke Ав')",
    "        self.assertEqual(board[0][0], 'X', 'Board should update | El tablero debería actualizarse | Taula eguneratu beharko litzateke')"
  ].join("\n")
};

const exerciseTranspose = {
  type: "exercise",
  exerciseId: "part05-13_transpose_matrix",
  title: { ENG: "Transpose matrix", CAS: "Transponer matriz", EUS: "Matrizea irauli" },
  description: {
    ENG: "Please write a function named `transpose`, which transposes the matrix directly.",
    CAS: "Por favor escribe una función llamada `transpose`, que transponga la matriz directamente.",
    EUS: "Mesedez idatzi `transpose` izeneko funtzio bat, matrizea zuzenean iraultzen duena."
  },
  initialCode: { ENG: "def transpose(m): pass", CAS: "def transpose(m): pass", EUS: "def transpose(m): pass" },
  testCode: [
    "import unittest",
    "class TestTranspose(unittest.TestCase):",
    "    def test_run(self):",
    "        m = [[1, 2], [3, 4]]",
    "        transpose(m)",
    "        self.assertEqual(m, [[1, 3], [2, 4]], 'Should transpose | Debería transponer | Irauli beharko luke')"
  ].join("\n")
};

const sideEffectsContent = {
  type: "markdown",
  content: {
    ENG: "## Side effects of functions\n\nIf a function takes a reference to a list as an argument...",
    CAS: "## Efectos secundarios de las funciones\n\nSi una función toma una referencia a una lista como argumento...",
    EUS: "## Funtzioen albo-efektuak\n\nFuntzio batek zerrenda baterako erreferentzia bat hartzen badu argumentu gisa..."
  }
};

module.exports = { exerciseSudokuPrintAndAdd, exerciseSudokuAddCopy, exerciseTicTacToe, exerciseTranspose, sideEffectsContent };