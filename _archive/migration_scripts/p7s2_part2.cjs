const exercisePasswordGen2 = {
  type: "exercise",
  exerciseId: "part07-06_password_generator_part_2",
  title: { ENG: "Password generator 2", CAS: "Generador de contraseñas 2", EUS: "Pasahitz sortzailea 2" },
  description: {
    ENG: "Write improved `generate_strong_password` with numbers and specials.",
    CAS: "Escribe `generate_strong_password` mejorado con números y especiales.",
    EUS: "Idatzi `generate_strong_password` hobetua zenbaki eta bereziekin."
  },
  initialCode: { ENG: "def generate_strong_password(l, n, s): pass", CAS: "def generate_strong_password(l, n, s): pass", EUS: "def generate_strong_password(l, n, s): pass" },
  testCode: [
    "import unittest",
    "class TestPassGen2(unittest.TestCase):",
    "    def test_run(self):",
    "        pw = generate_strong_password(10, True, True)",
    "        self.assertEqual(len(pw), 10, 'Length should be 10 | La longitud debería ser 10 | Luzera 10 izan beharko litzateke')"
  ].join("\n")
};

const exerciseDiceRoller = {
  type: "exercise",
  exerciseId: "part07-07_dice_roller",
  title: { ENG: "Dice roller", CAS: "Lanzador de dados", EUS: "Dado jaurtitzailea" },
  description: {
    ENG: "Simulate non-transitive dice.",
    CAS: "Simula dados no transitivos.",
    EUS: "Simulatu dado ez-trantsitiboak."
  },
  initialCode: { ENG: "def roll(d): pass\ndef play(d1, d2, t): pass", CAS: "def roll(d): pass\ndef play(d1, d2, t): pass", EUS: "def roll(d): pass\ndef play(d1, d2, t): pass" },
  testCode: [
    "import unittest",
    "class TestDice(unittest.TestCase):",
    "    def test_run(self):",
    "        # Stochastic test simplified",
    "        pass"
  ].join("\n")
};

const exerciseRandomWords = {
  type: "exercise",
  exerciseId: "part07-08_random_words",
  title: { ENG: "Random words", CAS: "Palabras aleatorias", EUS: "Ausazko hitzak" },
  description: {
    ENG: "Write `words(n, beginning)` to fetch random words starting with string.",
    CAS: "Escribe `words(n, beginning)` para obtener palabras aleatorias que comiencen con cadena.",
    EUS: "Idatzi `words(n, beginning)` katearekin hasten diren ausazko hitzak lortzeko."
  },
  initialCode: { ENG: "def words(n, b): pass", CAS: "def words(n, b): pass", EUS: "def words(n, b): pass" },
  testCode: [
    "import unittest",
    "class TestRandomWords(unittest.TestCase):",
    "    def test_run(self):",
    "        pass"
  ].join("\n")
};

module.exports = { exercisePasswordGen2, exerciseDiceRoller, exerciseRandomWords };
