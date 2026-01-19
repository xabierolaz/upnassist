const exerciseMatrix = {
  type: "exercise",
  exerciseId: "part06-03_matrix",
  title: { ENG: "Matrix", CAS: "Matriz", EUS: "Matrizea" },
  description: {
    ENG: "Read `matrix.txt` and implement `matrix_sum`, `matrix_max`, `row_sums`.",
    CAS: "Lee `matrix.txt` e implementa `matrix_sum`, `matrix_max`, `row_sums`.",
    EUS: "Irakurri `matrix.txt` eta inplementatu `matrix_sum`, `matrix_max`, `row_sums`."
  },
  initialCode: { ENG: "def matrix_sum(): pass\ndef matrix_max(): pass\ndef row_sums(): pass", CAS: "def matrix_sum(): pass\ndef matrix_max(): pass\ndef row_sums(): pass", EUS: "def matrix_sum(): pass\ndef matrix_max(): pass\ndef row_sums(): pass" },
  testCode: [
    "import unittest",
    "from unittest.mock import mock_open, patch",
    "class TestMatrix(unittest.TestCase):",
    "    def test_run(self):",
    "        m = mock_open(read_data='1,2\n3,4')",
    "        with patch('builtins.open', m):",
    "            self.assertEqual(matrix_sum(), 10, 'Sum should be 10 | La suma debería ser 10 | Batura 10 izan beharko litzateke')",
    "            self.assertEqual(matrix_max(), 4, 'Max should be 4 | El máximo debería ser 4 | Maximoa 4 izan beharko litzateke')",
    "            self.assertEqual(row_sums(), [3, 7], 'Row sums wrong | Sumas de filas incorrectas | Errenkada baturak oker')"
  ].join("\n")
};

const exerciseCourseGrading1 = {
  type: "exercise",
  exerciseId: "part06-04_course_grading_part_1",
  title: { ENG: "Course grading 1", CAS: "Calificación 1", EUS: "Kalifikazioa 1" },
  description: {
    ENG: "Read student and exercise data, print total exercises.",
    CAS: "Lee datos de estudiantes y ejercicios, imprime el total de ejercicios.",
    EUS: "Irakurri ikasle eta ariketa datuak, inprimatu ariketa guztiak."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestGrading1(unittest.TestCase):",
    "    def test_run(self):",
    "        # Simulated file read test",
    "        pass"
  ].join("\n")
};

const exerciseCourseGrading2 = {
  type: "exercise",
  exerciseId: "part06-05_course_grading_part_2",
  title: { ENG: "Course grading 2", CAS: "Calificación 2", EUS: "Kalifikazioa 2" },
  description: {
    ENG: "Calculate grades based on exam and exercises.",
    CAS: "Calcula calificaciones basadas en examen y ejercicios.",
    EUS: "Kalkulatu notak azterketa eta ariketetan oinarrituta."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestGrading2(unittest.TestCase):",
    "    def test_run(self):",
    "        pass"
  ].join("\n")
};

const exerciseCourseGrading3 = {
  type: "exercise",
  exerciseId: "part06-06_course_grading_part_3",
  title: { ENG: "Course grading 3", CAS: "Calificación 3", EUS: "Kalifikazioa 3" },
  description: {
    ENG: "Print detailed statistics.",
    CAS: "Imprime estadísticas detalladas.",
    EUS: "Inprimatu estatistika zehatzak."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestGrading3(unittest.TestCase):",
    "    def test_run(self):",
    "        pass"
  ].join("\n")
};

module.exports = { exerciseMatrix, exerciseCourseGrading1, exerciseCourseGrading2, exerciseCourseGrading3 };
