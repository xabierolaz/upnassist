const exerciseLoyaltyBonus = {
  type: "exercise",
  exerciseId: "part01-28_loyalty_bonus",
  title: { ENG: "Loyalty bonus", CAS: "Bono de lealtad", EUS: "Leialtasun bonua" },
  description: {
    ENG: "Fix bonus calculation logic.",
    CAS: "Arregla la lógica del cálculo del bono.",
    EUS: "Konpondu bonuaren kalkuluaren logika."
  },
  initialCode: {
    ENG: [
      "points = int(input('Points: '))",
      "if points < 100:",
      "    points *= 1.1",
      "    print('Bonus 10%')",
      "if points >= 100:",
      "    points *= 1.15",
      "    print('Bonus 15%')"
    ].join("\n"),
    CAS: [
      "points = int(input('Puntos: '))",
      "if points < 100:",
      "    points *= 1.1",
      "    print('Bono 10%')",
      "if points >= 100:",
      "    points *= 1.15",
      "    print('Bono 15%')"
    ].join("\n"),
    EUS: [
      "points = int(input('Puntuak: '))",
      "if points < 100:",
      "    points *= 1.1",
      "    print('Bonua 10%')",
      "if points >= 100:",
      "    points *= 1.15",
      "    print('Bonua 15%')"
    ].join("\n")
  },
  testCode: [
    "import unittest",
    "class TestLoyalty(unittest.TestCase):",
    "    def test_95(self):",
    "        out = run_student_code(inputs=['95'])",
    "        if out.count('Bonus') > 1 or out.count('Bono') > 1 or out.count('Bonua') > 1:",
    "             self.fail('Printed bonus twice | Imprimió el bono dos veces | Bonua bi aldiz inprimatu du')",
    "        self.assertTrue(True)"
  ].join("\n")
};

const exerciseWhatToWear = {
  type: "exercise",
  exerciseId: "part01-29_what_to_wear_tomorrow",
  title: { ENG: "What to wear", CAS: "Qué ponerse", EUS: "Zer jantzi" },
  description: {
    ENG: "Suggest clothing based on weather.",
    CAS: "Sugiere ropa según el clima.",
    EUS: "Iradoki arropa eguraldiaren arabera."
  },
  initialCode: { ENG: "# Write code here", CAS: "# Escribe código aquí", EUS: "# Idatzi kodea hemen" },
  testCode: [
    "import unittest",
    "class TestWear(unittest.TestCase):",
    "    def test_21_no(self):",
    "        out = run_student_code(inputs=['21', 'no'])",
    "        self.assertIn('Wear jeans', out, 'Should say wear jeans | Debería decir usar jeans | Jeans janztea esan beharko luke')",
    "        if 'jumper' in out: self.fail('No jumper needed | No hace falta jumper | Ez da jertserik behar')"
  ].join("\n")
};

const exerciseQuadraticFormula = {
  type: "exercise",
  exerciseId: "part01-30_quadratic_formula",
  title: { ENG: "Quadratic formula", CAS: "Fórmula cuadrática", EUS: "Ekuazio koadratikoa" },
  description: {
    ENG: "Solve ax²+bx+c.",
    CAS: "Resuelve ax²+bx+c.",
    EUS: "Ebatzi ax²+bx+c."
  },
  initialCode: {
    ENG: "# Write code here\nfrom math import sqrt",
    CAS: "# Escribe código aquí\nfrom math import sqrt",
    EUS: "# Idatzi kodea hemen\nfrom math import sqrt"
  },
  testCode: [
    "import unittest",
    "class TestQuad(unittest.TestCase):",
    "    def test_roots(self):",
    "        out = run_student_code(inputs=['1', '2', '-8'])",
    "        self.assertIn('2.0', out, 'Root 2.0 missing | Falta raíz 2.0 | 2.0 erroa falta da')",
    "        self.assertIn('-4.0', out, 'Root -4.0 missing | Falta raíz -4.0 | -4.0 erroa falta da')"
  ].join("\n")
};

module.exports = { exerciseLoyaltyBonus, exerciseWhatToWear, exerciseQuadraticFormula };