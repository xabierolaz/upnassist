const exerciseSudokuRow = {
  type: "exercise",
  exerciseId: "part05-04_sudoku_row",
  title: { ENG: "Sudoku: check row", CAS: "Sudoku: comprobar fila", EUS: "Sudoku: errenkada egiaztatu" },
  description: {
    ENG: "Please write a function named `row_correct(sudoku: list, row_no: int)`, which takes a two-dimensional array representing a sudoku grid, and an integer referring to a single row. The function should return `True` or `False`, depending on whether the row is filled in correctly.",
    CAS: "Por favor escribe una función llamada `row_correct`, que compruebe si una fila es correcta.",
    EUS: "Mesedez idatzi `row_correct` funtzioa, errenkada zuzena den egiaztatzeko."
  },
  initialCode: { ENG: "def row_correct(s, r): pass", CAS: "def row_correct(s, r): pass", EUS: "def row_correct(s, r): pass" },
  testCode: [
    "import unittest",
    "class TestSudokuRow(unittest.TestCase):",
    "    def test_run(self):",
    "        s = [[1, 2, 3], [2, 3, 1], [3, 1, 2]]",
    "        self.assertTrue(row_correct(s, 0), 'Row 0 is correct | La fila 0 es correcta | 0 errenkada zuzena da')",
    "        s[0][0] = 2",
    "        self.assertFalse(row_correct(s, 0), 'Row 0 has duplicates | La fila 0 tiene duplicados | 0 errenkadak bikoiztuak ditu')"
  ].join("\n")
};

const exerciseSudokuColumn = {
  type: "exercise",
  exerciseId: "part05-05_sudoku_column",
  title: { ENG: "Sudoku: check column", CAS: "Sudoku: comprobar columna", EUS: "Sudoku: zutabea egiaztatu" },
  description: {
    ENG: "Please write a function named `column_correct`, which checks if a column is filled correctly.",
    CAS: "Por favor escribe una función llamada `column_correct`, que compruebe si una columna es correcta.",
    EUS: "Mesedez idatzi `column_correct` funtzioa, zutabea zuzena den egiaztatzeko."
  },
  initialCode: { ENG: "def column_correct(s, c): pass", CAS: "def column_correct(s, c): pass", EUS: "def column_correct(s, c): pass" },
  testCode: [
    "import unittest",
    "class TestSudokuCol(unittest.TestCase):",
    "    def test_run(self):",
    "        s = [[1, 2], [2, 1]]",
    "        self.assertTrue(column_correct(s, 0), 'Column 0 is correct | La columna 0 es correcta | 0 zutabea zuzena da')",
    "        s[1][0] = 1",
    "        self.assertFalse(column_correct(s, 0), 'Column 0 has duplicates | La columna 0 tiene duplicados | 0 zutabeak bikoiztuak ditu')"
  ].join("\n")
};

const exerciseSudokuBlock = {
  type: "exercise",
  exerciseId: "part05-06_sudoku_block",
  title: { ENG: "Sudoku: check block", CAS: "Sudoku: comprobar bloque", EUS: "Sudoku: blokea egiaztatu" },
  description: {
    ENG: "Please write a function named `block_correct`, which checks if a 3x3 block is filled correctly.",
    CAS: "Por favor escribe una función llamada `block_correct`, que compruebe si un bloque 3x3 es correcto.",
    EUS: "Mesedez idatzi `block_correct` funtzioa, 3x3 blokea zuzena den egiaztatzeko."
  },
  initialCode: { ENG: "def block_correct(s, r, c): pass", CAS: "def block_correct(s, r, c): pass", EUS: "def block_correct(s, r, c): pass" },
  testCode: [
    "import unittest",
    "class TestSudokuBlock(unittest.TestCase):",
    "    def test_run(self):",
    "        # Simplified test for 3x3 block",
    "        pass"
  ].join("\n")
};

const exerciseSudokuGrid = {
  type: "exercise",
  exerciseId: "part05-07_sudoku_grid",
  title: { ENG: "Sudoku: check grid", CAS: "Sudoku: comprobar cuadrícula", EUS: "Sudoku: sareta egiaztatu" },
  description: {
    ENG: "Please write a function named `sudoku_grid_correct`, which checks the whole grid.",
    CAS: "Por favor escribe una función llamada `sudoku_grid_correct`, que compruebe la cuadrícula completa.",
    EUS: "Mesedez idatzi `sudoku_grid_correct` funtzioa, sareta osoa egiaztatzen duena."
  },
  initialCode: { ENG: "def sudoku_grid_correct(s): pass", CAS: "def sudoku_grid_correct(s): pass", EUS: "def sudoku_grid_correct(s): pass" },
  testCode: [
    "import unittest",
    "class TestSudokuGrid(unittest.TestCase):",
    "    def test_run(self):",
    "        # Simplified grid test",
    "        pass"
  ].join("\n")
};

module.exports = { exerciseSudokuRow, exerciseSudokuColumn, exerciseSudokuBlock, exerciseSudokuGrid };
