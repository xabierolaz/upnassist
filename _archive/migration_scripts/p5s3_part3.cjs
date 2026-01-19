const exerciseInvertDictionary = {
  type: "exercise",
  exerciseId: "part05-19_invert_dictionary",
  title: { ENG: "Invert dictionary", CAS: "Invertir diccionario", EUS: "Hiztegia alderantzikatu" },
  description: {
    ENG: "Please write a function named `invert`, which inverts a dictionary in place.",
    CAS: "Por favor escribe una función llamada `invert`, que invierte un diccionario en su lugar.",
    EUS: "Mesedez idatzi `invert` funtzioa, hiztegi bat bere horretan alderantzikatzen duena."
  },
  initialCode: { ENG: "def invert(d): pass", CAS: "def invert(d): pass", EUS: "def invert(d): pass" },
  testCode: [
    "import unittest",
    "class TestInvert(unittest.TestCase):",
    "    def test_run(self):",
    "        d = {1: 'a', 2: 'b'}",
    "        invert(d)",
    "        self.assertEqual(d['a'], 1, 'Should map a to 1 | Debería asignar a a 1 | a 1-era esleitu beharko luke')",
    "        self.assertNotIn(1, d, 'Original key 1 should be gone | La clave original 1 debería haber desaparecido | Jatorrizko 1 gakoa desagertu beharko litzateke')"
  ].join("\n")
};

const exerciseNumbersSpelledOut = {
  type: "exercise",
  exerciseId: "part05-20_numbers_spelled_out",
  title: { ENG: "Numbers spelled out", CAS: "Números escritos", EUS: "Zenbakiak idatzita" },
  description: {
    ENG: "Please write a function named `dict_of_numbers()`, which returns a new dictionary with numbers 0-99 spelled out.",
    CAS: "Por favor escribe una función llamada `dict_of_numbers()`, que devuelve un nuevo diccionario con los números 0-99 escritos.",
    EUS: "Mesedez idatzi `dict_of_numbers()` funtzioa, 0-99 zenbakiak idatzita dituen hiztegi berri bat itzultzen duena."
  },
  initialCode: { ENG: "def dict_of_numbers(): pass", CAS: "def dict_of_numbers(): pass", EUS: "def dict_of_numbers(): pass" },
  testCode: [
    "import unittest",
    "class TestNumbersSpelled(unittest.TestCase):",
    "    def test_run(self):",
    "        d = dict_of_numbers()",
    "        self.assertEqual(d[0], 'zero', '0 should be zero | 0 debería ser zero | 0 zero izan beharko litzateke')",
    "        self.assertEqual(d[11], 'eleven', '11 should be eleven | 11 debería ser eleven | 11 eleven izan beharko litzateke')"
  ].join("\n")
};

const structuredDataContent = {
  type: "markdown",
  content: {
    ENG: "## Using dictionaries for structured data\n\nDictionaries are very useful for structuring data...",
    CAS: "## Usando diccionarios para datos estructurados\n\nLos diccionarios son muy útiles para estructurar datos...",
    EUS: "## Hiztegiak datu egituratuetarako erabiltzen\n\nHiztegiak oso erabilgarriak dira datuak egituratzeko..."
  }
};

const exerciseMovieDatabase = {
  type: "exercise",
  exerciseId: "part05-21_movie_database",
  title: { ENG: "Movie database", CAS: "Base de datos de películas", EUS: "Filmen datu-basea" },
  description: {
    ENG: "Please write a function named `add_movie`, which adds a new movie object into a movie database.",
    CAS: "Por favor escribe una función llamada `add_movie`, que añade una nueva película a la base de datos.",
    EUS: "Mesedez idatzi `add_movie` funtzioa, film berri bat datu-basera gehitzen duena."
  },
  initialCode: { ENG: "def add_movie(db, name, director, year, runtime): pass", CAS: "def add_movie(db, name, director, year, runtime): pass", EUS: "def add_movie(db, name, director, year, runtime): pass" },
  testCode: [
    "import unittest",
    "class TestAddMovie(unittest.TestCase):",
    "    def test_run(self):",
    "        db = []",
    "        add_movie(db, 'Test Movie', 'Director', 2020, 120)",
    "        self.assertEqual(len(db), 1, 'Database should have 1 movie | La base de datos debería tener 1 película | Datu-baseak film 1 eduki beharko luke')",
    "        self.assertEqual(db[0]['name'], 'Test Movie', 'Name should match | El nombre debería coincidir | Izenak bat etorri beharko luke')"
  ].join("\n")
};

const exerciseFindMovies = {
  type: "exercise",
  exerciseId: "part05-22_find_movies",
  title: { ENG: "Find movies", CAS: "Buscar películas", EUS: "Filmak bilatu" },
  description: {
    ENG: "Please write a function named `find_movies`, which returns movies matching a search term.",
    CAS: "Por favor escribe una función llamada `find_movies`, que devuelve películas que coinciden con un término de búsqueda.",
    EUS: "Mesedez idatzi `find_movies` funtzioa, bilaketa termino batekin bat datozen filmak itzultzen dituena."
  },
  initialCode: { ENG: "def find_movies(db, term): pass", CAS: "def find_movies(db, term): pass", EUS: "def find_movies(db, term): pass" },
  testCode: [
    "import unittest",
    "class TestFindMovies(unittest.TestCase):",
    "    def test_run(self):",
    "        db = [{'name': 'Python', 'director': 'G', 'year': 2000, 'runtime': 100}]",
    "        res = find_movies(db, 'python')",
    "        self.assertEqual(len(res), 1, 'Should find python (case insensitive) | Debería encontrar python (insensible a mayúsculas) | python aurkitu beharko luke (maiuskulak/minuskulak ezaxola)')"
  ].join("\n")
};

module.exports = { exerciseInvertDictionary, exerciseNumbersSpelledOut, structuredDataContent, exerciseMovieDatabase, exerciseFindMovies };
