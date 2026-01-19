const learningObjectives = {
  type: "markdown",
  content: {
    ENG: "# Learning objectives\n\n- You will be familiar with the dictionary data structure\n- You will be able to use a dictionary with different types of keys and values",
    CAS: "# Objetivos de aprendizaje\n\n- Estarás familiarizado con la estructura de datos de diccionario\n- Podrás usar un diccionario con diferentes tipos de claves y valores",
    EUS: "# Ikas-helburuak\n\n- Hiztegia datu-egitura ezagutuko duzu\n- Mota desberdinetako gako eta balioak dituen hiztegi bat erabiltzeko gai izango zara"
  }
};

const introContent = {
  type: "markdown",
  content: {
    ENG: "Lists can be handy in many situations, but they are limited by the fact that the items are accessed through indexes...",
    CAS: "Las listas pueden ser útiles en muchas situaciones, pero están limitadas por el hecho de que se accede a los elementos a través de índices...",
    EUS: "Zerrendak erabilgarriak izan daitezke egoera askotan, baina mugatuta daude elementuak indizeen bidez atzitzen direlako..."
  }
};

const keysAndValuesContent = {
  type: "markdown",
  content: {
    ENG: "## How keys and values work\n\nEach key can appear only once in the dictionary...",
    CAS: "## Cómo funcionan las claves y los valores\n\nCada clave puede aparecer solo una vez en el diccionario...",
    EUS: "## Nola funtzionatzen dute gakoek eta balioek\n\nGako bakoitza behin bakarrik ager daiteke hiztegian..."
  }
};

const exerciseTimesTen = {
  type: "exercise",
  exerciseId: "part05-14_times_ten",
  title: { ENG: "Times ten", CAS: "Por diez", EUS: "Bider hamar" },
  description: {
    ENG: "Please write a function named `times_ten(start_index: int, end_index: int)`, which creates and returns a new dictionary. The keys of the dictionary should be the numbers between `start_index` and `end_index` inclusive. The value mapped to each key should be the key times ten.",
    CAS: "Por favor escribe una función llamada `times_ten(start_index: int, end_index: int)`, que cree y devuelva un nuevo diccionario. Las claves del diccionario deben ser los números entre `start_index` y `end_index` inclusive. El valor asignado a cada clave debe ser la clave multiplicada por diez.",
    EUS: "Mesedez idatzi `times_ten(start_index: int, end_index: int)` izeneko funtzio bat, hiztegi berri bat sortu eta itzultzen duena. Hiztegiko gakoak `start_index` eta `end_index` arteko zenbakiak izan behar dira, biak barne."
  },
  initialCode: { ENG: "def times_ten(s, e): pass", CAS: "def times_ten(s, e): pass", EUS: "def times_ten(s, e): pass" },
  testCode: [
    "import unittest",
    "class TestTimesTen(unittest.TestCase):",
    "    def test_run(self):",
    "        d = times_ten(1, 3)",
    "        self.assertEqual(d[1], 10, 'Value for 1 should be 10 | El valor para 1 debería ser 10 | 1entzako balioa 10 izan beharko litzateke')",
    "        self.assertEqual(d[3], 30, 'Value for 3 should be 30 | El valor para 3 debería ser 30 | 3rentzako balioa 30 izan beharko litzateke')"
  ].join("\n")
};

const exerciseFactorials = {
  type: "exercise",
  exerciseId: "part05-15_factorials",
  title: { ENG: "Factorials", CAS: "Factoriales", EUS: "Faktorialak" },
  description: {
    ENG: "Please write a function named `factorials(n: int)`, which returns the factorials of the numbers 1 to `n` in a dictionary. The number is the key, and the factorial of that number is the value mapped to it.",
    CAS: "Por favor escribe una función llamada `factorials(n: int)`, que devuelva los factoriales de los números 1 a `n` en un diccionario.",
    EUS: "Mesedez idatzi `factorials(n: int)` izeneko funtzio bat, 1etik `n`-rako zenbakien faktorialak itzultzen dituena hiztegi batean."
  },
  initialCode: { ENG: "def factorials(n): pass", CAS: "def factorials(n): pass", EUS: "def factorials(n): pass" },
  testCode: [
    "import unittest",
    "class TestFactorials(unittest.TestCase):",
    "    def test_run(self):",
    "        d = factorials(3)",
    "        self.assertEqual(d[1], 1, '1! should be 1 | 1! debería ser 1 | 1! 1 izan beharko litzateke')",
    "        self.assertEqual(d[3], 6, '3! should be 6 | 3! debería ser 6 | 3! 6 izan beharko litzateke')"
  ].join("\n")
};

module.exports = { learningObjectives, introContent, keysAndValuesContent, exerciseTimesTen, exerciseFactorials };
