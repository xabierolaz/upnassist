const exerciseSumAndProduct = {
  type: "exercise",
  exerciseId: "part01-13_sum_and_product",
  title: { ENG: "Sum and product", CAS: "Suma y producto", EUS: "Batuketa eta biderkadura" },
  description: {
    ENG: "Write a program that asks for two numbers and prints sum and product.",
    CAS: "Escribe un programa que pida dos números e imprima suma y producto.",
    EUS: "Idatzi bi zenbaki eskatu eta batura zein biderkadura inprimatzen dituen programa."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestSumProd(unittest.TestCase):",
    "    def test_output(self):",
    "        out = run_student_code(inputs=['3', '7'])",
    "        self.assertIn('10', out, 'Sum should be 10 | Suma debería ser 10 | Batura 10 izan beharko litzateke')",
    "        self.assertIn('21', out, 'Prod should be 21 | Producto debería ser 21 | Biderkadura 21 izan beharko litzateke')"
  ].join("\n")
};

const exerciseSumAndMean = {
  type: "exercise",
  exerciseId: "part01-14_sum_and_mean",
  title: { ENG: "Sum and mean", CAS: "Suma y media", EUS: "Batuketa eta batezbestekoa" },
  description: {
    ENG: "Write a program that asks for four numbers and prints sum and mean.",
    CAS: "Escribe un programa que pida cuatro números e imprima suma y media.",
    EUS: "Idatzi lau zenbaki eskatu eta batura zein batezbestekoa inprimatzen dituen programa."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestSumMean(unittest.TestCase):",
    "    def test_output(self):",
    "        out = run_student_code(inputs=['2', '1', '6', '7'])",
    "        self.assertIn('16', out, 'Sum should be 16 | Suma debería ser 16 | Batura 16 izan beharko litzateke')",
    "        self.assertIn('4.0', out, 'Mean should be 4.0 | Media debería ser 4.0 | Batezbestekoa 4.0 izan beharko litzateke')"
  ].join("\n")
};

const exerciseFoodExpenditure = {
  type: "exercise",
  exerciseId: "part01-15_food_expenditure",
  title: { ENG: "Food expenditure", CAS: "Gasto en comida", EUS: "Janari gastua" },
  description: {
    ENG: "Write a program to estimate food expenditure.",
    CAS: "Escribe un programa para estimar el gasto en comida.",
    EUS: "Idatzi janari gastua estimatzeko programa bat."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestFood(unittest.TestCase):",
    "    def test_output(self):",
    "        out = run_student_code(inputs=['4', '2.5', '28.5'])",
    "        self.assertIn('Daily: 5.5 euros', out, 'Daily should be 5.5 | Diario debería ser 5.5 | Eguneko 5.5 izan beharko litzateke')",
    "        self.assertIn('Weekly: 38.5 euros', out, 'Weekly should be 38.5 | Semanal debería ser 38.5 | Asteko 38.5 izan beharko litzateke')"
  ].join("\n")
};

const exerciseStudentsInGroups = {
  type: "exercise",
  exerciseId: "part01-16_students_in_groups",
  title: { ENG: "Students in groups", CAS: "Estudiantes en grupos", EUS: "Ikasleak taldetan" },
  description: {
    ENG: "Calculate groups formed from students.",
    CAS: "Calcula grupos formados por estudiantes.",
    EUS: "Kalkulatu ikasleekin osatutako taldeak."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestGroups(unittest.TestCase):",
    "    def test_output(self):",
    "        out1 = run_student_code(inputs=['8', '4'])",
    "        self.assertIn('2', out1, '8/4 should be 2 groups | 8/4 deberían ser 2 grupos | 8/4 2 talde izan beharko lirateke')",
    "        out2 = run_student_code(inputs=['11', '3'])",
    "        self.assertIn('4', out2, '11/3 should be 4 groups | 11/3 deberían ser 4 grupos | 11/3 4 talde izan beharko lirateke')"
  ].join("\n")
};

module.exports = { exerciseSumAndProduct, exerciseSumAndMean, exerciseFoodExpenditure, exerciseStudentsInGroups };
