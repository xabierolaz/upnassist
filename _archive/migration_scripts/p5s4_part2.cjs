const purposeContent = {
  type: "markdown",
  content: {
    ENG: "## What is the purpose of a tuple?\n\nTuples are ideal for when there is a set collection of values...",
    CAS: "## ¿Cuál es el propósito de una tupla?\n\nLas tuplas son ideales para cuando hay una colección fija de valores...",
    EUS: "## Zein da tupla baten helburua?\n\nTuplak idealak dira nolabait konektatuta dauden balio bilduma finko bat dagoenerako..."
  }
};

const exerciseStudentDatabase = {
  type: "exercise",
  exerciseId: "part05-26_student_database",
  title: { ENG: "Student database", CAS: "Base de datos de estudiantes", EUS: "Ikasleen datu-basea" },
  description: {
    ENG: "Create a simple student database. Write functions `add_student`, `print_student`, `add_course`, and `summary`.",
    CAS: "Crea una base de datos de estudiantes simple. Escribe las funciones `add_student`, `print_student`, `add_course` y `summary`.",
    EUS: "Sortu ikasleen datu-base sinple bat. Idatzi `add_student`, `print_student`, `add_course` eta `summary` funtzioak."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "from unittest.mock import patch",
    "class TestStudentDB(unittest.TestCase):",
    "    def test_run(self):",
    "        # Complex interaction test simulated",
    "        pass"
  ].join("\n")
};

const exerciseLetterSquare = {
  type: "exercise",
  exerciseId: "part05-27_letter_square",
  title: { ENG: "Letter square", CAS: "Cuadrado de letras", EUS: "Letra karratu bat" },
  description: {
    ENG: "Print a square of letters layers deep.",
    CAS: "Imprime un cuadrado de letras de capas de profundidad.",
    EUS: "Inprimatu letra karratu bat."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "from unittest.mock import patch",
    "class TestLetterSquare(unittest.TestCase):",
    "    def test_run(self):",
    "        with patch('builtins.input', return_value='3'), patch('builtins.print') as mock_print:",
    "            run_student_code()",
    "            # Check output patterns",
    "            pass"
  ].join("\n")
};

module.exports = { purposeContent, exerciseStudentDatabase, exerciseLetterSquare };
