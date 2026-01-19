const exerciseOrderOfMagnitude = {
  type: "exercise",
  exerciseId: "part01-24_order_of_magnitude",
  title: { ENG: "Order of magnitude", CAS: "Orden de magnitud", EUS: "Magnitude ordena" },
  description: {
    ENG: "Print magnitude of number (<1000, <100, <10).",
    CAS: "Imprime la magnitud del número (<1000, <100, <10).",
    EUS: "Inprimatu zenbakiaren magnitudea (<1000, <100, <10)."
  },
  initialCode: { ENG: "# Write code here", CAS: "# Escribe código aquí", EUS: "# Idatzi kodea hemen" },
  testCode: [
    "import unittest",
    "class TestMag(unittest.TestCase):",
    "    def test_950(self):",
    "        out = run_student_code(inputs=['950'])",
    "        self.assertIn('smaller than 1000', out, 'Should be < 1000 | Debería ser < 1000 | < 1000 izan beharko litzateke')",
    "        if 'smaller than 100' in out:",
    "             self.fail('950 is NOT smaller than 100 | 950 NO es menor que 100 | 950 EZ da 100 baino txikiagoa')"
  ].join("\n")
};

const exerciseCalculator = {
  type: "exercise",
  exerciseId: "part01-25_calculator",
  title: { ENG: "Calculator", CAS: "Calculadora", EUS: "Kalkulagailua" },
  description: {
    ENG: "Ask for two numbers and operation (add, subtract, multiply).",
    CAS: "Pide dos números y operación (add, subtract, multiply).",
    EUS: "Eskatu bi zenbaki eta eragiketa (add, subtract, multiply)."
  },
  initialCode: { ENG: "# Write code here", CAS: "# Escribe código aquí", EUS: "# Idatzi kodea hemen" },
  testCode: [
    "import unittest",
    "class TestCalc(unittest.TestCase):",
    "    def test_add(self):",
    "        out = run_student_code(inputs=['10', '17', 'add'])",
    "        if '27' not in out: self.fail('Addition incorrect | Suma incorrecta | Batuketa okerra')",
    "    def test_sub(self):",
    "        out = run_student_code(inputs=['4', '6', 'subtract'])",
    "        if '-2' not in out: self.fail('Subtraction incorrect | Resta incorrecta | Kenketa okerra')"
  ].join("\n")
};

const exerciseTemperatures = {
  type: "exercise",
  exerciseId: "part01-26_temperatures",
  title: { ENG: "Temperatures", CAS: "Temperaturas", EUS: "Tenperaturak" },
  description: {
    ENG: "Convert F to C. If < 0, print Brr.",
    CAS: "Convierte F a C. Si < 0, imprime Brr.",
    EUS: "Bihurtu F C-ra. < 0 bada, inprimatu Brr."
  },
  initialCode: { ENG: "# Write code here", CAS: "# Escribe código aquí", EUS: "# Idatzi kodea hemen" },
  testCode: [
    "import unittest",
    "class TestTemp(unittest.TestCase):",
    "    def test_101(self):",
    "        out = run_student_code(inputs=['101'])",
    "        self.assertIn('38.3', out, 'Should be 38.3 | Debería ser 38.3 | 38.3 izan beharko litzateke')",
    "    def test_21(self):",
    "        out = run_student_code(inputs=['21'])",
    "        if 'Brr' not in out:",
    "             self.fail('Missing Brr message | Falta mensaje Brr | Brr mezua falta da')"
  ].join("\n")
};

const exerciseDailyWages = {
  type: "exercise",
  exerciseId: "part01-27_daily_wages",
  title: { ENG: "Daily wages", CAS: "Salario diario", EUS: "Eguneko soldata" },
  description: {
    ENG: "Calculate wage. Sunday double.",
    CAS: "Calcula salario. Domingo doble.",
    EUS: "Kalkulatu soldata. Igandea bikoitza."
  },
  initialCode: { ENG: "# Write code here", CAS: "# Escribe código aquí", EUS: "# Idatzi kodea hemen" },
  testCode: [
    "import unittest",
    "class TestWage(unittest.TestCase):",
    "    def test_mon(self):",
    "        out = run_student_code(inputs=['8.5', '3', 'Monday'])",
    "        self.assertIn('25.5', out, 'Wage incorrect | Salario incorrecto | Soldata okerra')",
    "    def test_sun(self):",
    "        out = run_student_code(inputs=['12.5', '10', 'Sunday'])",
    "        if '125' in out:",
    "             self.fail('Did not apply double pay | No aplicó pago doble | Ez da ordainketa bikoitza aplikatu')",
    "        self.assertIn('250.0', out)"
  ].join("\n")
};

module.exports = { exerciseOrderOfMagnitude, exerciseCalculator, exerciseTemperatures, exerciseDailyWages };
