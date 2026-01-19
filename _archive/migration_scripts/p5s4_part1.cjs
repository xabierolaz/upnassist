const learningObjectives = {
  type: "markdown",
  content: {
    ENG: "# Learning objectives\n\n- You will be familiar with the tuple data type\n- You will be able to create tuples from various types of values",
    CAS: "# Objetivos de aprendizaje\n\n- Estarás familiarizado con el tipo de datos tupla\n- Podrás crear tuplas a partir de varios tipos de valores",
    EUS: "# Ikas-helburuak\n\n- Tupla datu-mota ezagutuko duzu\n- Hainbat balio motatatik tuplak sortzeko gai izango zara"
  }
};

const introContent = {
  type: "markdown",
  content: {
    ENG: "Tuple is a data structure which is, in many ways, similar to a list...",
    CAS: "La tupla es una estructura de datos que es, en muchos aspectos, similar a una lista...",
    EUS: "Tupla datu-egitura bat da, modu askotan, zerrenda baten antzekoa..."
  }
};

const exerciseCreateTuple = {
  type: "exercise",
  exerciseId: "part05-23_create_tuple",
  title: { ENG: "Create a tuple", CAS: "Crear una tupla", EUS: "Tupla bat sortu" },
  description: {
    ENG: "Please write a function named `create_tuple(x: int, y: int, z: int)`, which creates and returns a tuple: (smallest, greatest, sum).",
    CAS: "Por favor escribe una función llamada `create_tuple(x: int, y: int, z: int)`, que crea y devuelve una tupla: (menor, mayor, suma).",
    EUS: "Mesedez idatzi `create_tuple` funtzioa, tupla bat sortu eta itzultzen duena: (txikiena, handiena, batura)."
  },
  initialCode: { ENG: "def create_tuple(x, y, z): pass", CAS: "def create_tuple(x, y, z): pass", EUS: "def create_tuple(x, y, z): pass" },
  testCode: [
    "import unittest",
    "class TestCreateTuple(unittest.TestCase):",
    "    def test_run(self):",
    "        res = create_tuple(5, 3, -1)",
    "        self.assertEqual(res, (-1, 5, 7), 'Should return (-1, 5, 7) | Debería devolver (-1, 5, 7) | (-1, 5, 7) itzuli beharko luke')"
  ].join("\n")
};

const exerciseOldestPerson = {
  type: "exercise",
  exerciseId: "part05-24_oldest_person",
  title: { ENG: "The oldest person", CAS: "La persona más mayor", EUS: "Pertsona zaharrena" },
  description: {
    ENG: "Please write a function named `oldest_person(people: list)`, which takes a list of tuples (name, year). Find the oldest person.",
    CAS: "Por favor escribe una función llamada `oldest_person`, que toma una lista de tuplas (nombre, año). Encuentra a la persona más mayor.",
    EUS: "Mesedez idatzi `oldest_person` funtzioa, tupla zerrenda bat hartzen duena (izena, urtea). Aurkitu pertsona zaharrena."
  },
  initialCode: { ENG: "def oldest_person(people): pass", CAS: "def oldest_person(people): pass", EUS: "def oldest_person(people): pass" },
  testCode: [
    "import unittest",
    "class TestOldest(unittest.TestCase):",
    "    def test_run(self):",
    "        p = [('Arthur', 1977), ('Emily', 2014)]",
    "        self.assertEqual(oldest_person(p), 'Arthur', 'Should return Arthur | Debería devolver Arthur | Arthur itzuli beharko luke')"
  ].join("\n")
};

const exerciseOlderPeople = {
  type: "exercise",
  exerciseId: "part05-25_older_people",
  title: { ENG: "Older people", CAS: "Personas mayores", EUS: "Pertsona zaharragoak" },
  description: {
    ENG: "Please write a function named `older_people(people: list, year: int)`, which selects people born before the year.",
    CAS: "Por favor escribe una función llamada `older_people`, que selecciona personas nacidas antes del año.",
    EUS: "Mesedez idatzi `older_people` funtzioa, urtea baino lehen jaiotako pertsonak hautatzen dituena."
  },
  initialCode: { ENG: "def older_people(people, year): pass", CAS: "def older_people(people, year): pass", EUS: "def older_people(people, year): pass" },
  testCode: [
    "import unittest",
    "class TestOlder(unittest.TestCase):",
    "    def test_run(self):",
    "        p = [('Arthur', 1977), ('Emily', 2014)]",
    "        res = older_people(p, 2000)",
    "        self.assertEqual(res, ['Arthur'], 'Should return [Arthur] | Debería devolver [Arthur] | [Arthur] itzuli beharko luke')"
  ].join("\n")
};

module.exports = { learningObjectives, introContent, exerciseCreateTuple, exerciseOldestPerson, exerciseOlderPeople };
