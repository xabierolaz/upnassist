const exerciseSpellChecker = {
  type: "exercise",
  exerciseId: "part06-07_spellchecker",
  title: { ENG: "Spell checker", CAS: "Corrector ortográfico", EUS: "Ortografia-egiaztatzailea" },
  description: {
    ENG: "Highlight misspelled words.",
    CAS: "Resalta palabras mal escritas.",
    EUS: "Nabarmendu gaizki idatzitako hitzak."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestSpell(unittest.TestCase):",
    "    def test_run(self):",
    "        pass"
  ].join("\n")
};

const exerciseRecipeSearch = {
  type: "exercise",
  exerciseId: "part06-08_recipe_search",
  title: { ENG: "Recipe search", CAS: "Búsqueda de recetas", EUS: "Errezeta bilaketa" },
  description: {
    ENG: "Search recipes by name, time, ingredient.",
    CAS: "Busca recetas por nombre, tiempo, ingrediente.",
    EUS: "Bilatu errezetak izenaren, denboraren, osagaiaren arabera."
  },
  initialCode: { ENG: "def search_by_name(f, w): pass\ndef search_by_time(f, t): pass\ndef search_by_ingredient(f, i): pass", CAS: "def search_by_name(f, w): pass\ndef search_by_time(f, t): pass\ndef search_by_ingredient(f, i): pass", EUS: "def search_by_name(f, w): pass\ndef search_by_time(f, t): pass\ndef search_by_ingredient(f, i): pass" },
  testCode: [
    "import unittest",
    "class TestRecipe(unittest.TestCase):",
    "    def test_run(self):",
    "        pass"
  ].join("\n")
};

const exerciseCityBikes = {
  type: "exercise",
  exerciseId: "part06-09_city_bikes",
  title: { ENG: "City bikes", CAS: "Bicicletas de ciudad", EUS: "Hiriko bizikletak" },
  description: {
    ENG: "Process bike station data.",
    CAS: "Procesa datos de estaciones de bicicletas.",
    EUS: "Prozesatu bizikleta geltokien datuak."
  },
  initialCode: { ENG: "def get_station_data(f): pass\ndef distance(s, s1, s2): pass\ndef greatest_distance(s): pass", CAS: "def get_station_data(f): pass\ndef distance(s, s1, s2): pass\ndef greatest_distance(s): pass", EUS: "def get_station_data(f): pass\ndef distance(s, s1, s2): pass\ndef greatest_distance(s): pass" },
  testCode: [
    "import unittest",
    "class TestBikes(unittest.TestCase):",
    "    def test_run(self):",
    "        pass"
  ].join("\n")
};

module.exports = { exerciseSpellChecker, exerciseRecipeSearch, exerciseCityBikes };
