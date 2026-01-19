const exerciseWhoCheated = {
  type: "exercise",
  exerciseId: "part07-14_who_cheated",
  title: { ENG: "Who cheated", CAS: "¿Quién hizo trampa?", EUS: "Nork egin zuen iruzur" },
  description: {
    ENG: "Find students with exam time > 3h.",
    CAS: "Encuentra estudiantes con tiempo de examen > 3h.",
    EUS: "Aurkitu > 3h azterketa denbora duten ikasleak."
  },
  initialCode: { ENG: "def cheaters(): pass", CAS: "def cheaters(): pass", EUS: "def cheaters(): pass" },
  testCode: [
    "import unittest",
    "class TestCheaters(unittest.TestCase):",
    "    def test_run(self):",
    "        pass"
  ].join("\n")
};

const exerciseWhoCheated2 = {
  type: "exercise",
  exerciseId: "part07-15_who_cheated_2",
  title: { ENG: "Who cheated 2", CAS: "¿Quién hizo trampa? 2", EUS: "Nork egin zuen iruzur 2" },
  description: {
    ENG: "Calculate final points ignoring late submissions.",
    CAS: "Calcula puntos finales ignorando entregas tardías.",
    EUS: "Kalkulatu azken puntuak bidalketa berantiarrak alde batera utziz."
  },
  initialCode: { ENG: "def final_points(): pass", CAS: "def final_points(): pass", EUS: "def final_points(): pass" },
  testCode: [
    "import unittest",
    "class TestCheaters2(unittest.TestCase):",
    "    def test_run(self):",
    "        pass"
  ].join("\n")
};

const exerciseSpellchecker2 = {
  type: "exercise",
  exerciseId: "part07-16_spellchecker_2",
  title: { ENG: "Spell checker 2", CAS: "Corrector ortográfico 2", EUS: "Ortografia-egiaztatzailea 2" },
  description: {
    ENG: "Provide suggestions for misspelled words.",
    CAS: "Proporciona sugerencias para palabras mal escritas.",
    EUS: "Eman iradokizunak gaizki idatzitako hitzetarako."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: ""
};

module.exports = { exerciseWhoCheated, exerciseWhoCheated2, exerciseSpellchecker2 };
