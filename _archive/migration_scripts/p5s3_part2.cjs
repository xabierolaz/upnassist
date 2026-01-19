const traversingContent = {
  type: "markdown",
  content: {
    ENG: "## Traversing a dictionary\n\nThe familiar `for item in collection` loop can be used to traverse a dictionary, too...",
    CAS: "## Recorriendo un diccionario\n\nEl familiar bucle `for elemento in coleccion` también se puede usar para recorrer un diccionario...",
    EUS: "## Hiztegi bat zeharkatzen\n\nEzaguna den `for elementua in bilduma` begizta hiztegi bat zeharkatzeko ere erabil daiteke..."
  }
};

const exerciseHistogram = {
  type: "exercise",
  exerciseId: "part05-16_histogram",
  title: { ENG: "Histogram", CAS: "Histograma", EUS: "Histograma" },
  description: {
    ENG: "Please write a function named `histogram`, which takes a string as its argument. The function should print out a histogram representing the number of times each letter occurs in the string.",
    CAS: "Por favor escribe una función llamada `histogram`, que tome una cadena como argumento. La función debe imprimir un histograma que represente el número de veces que cada letra aparece en la cadena.",
    EUS: "Mesedez idatzi `histogram` izeneko funtzio bat, kate bat argumentu gisa hartzen duena. Funtzioak histograma bat inprimatu behar du."
  },
  initialCode: { ENG: "def histogram(s): pass", CAS: "def histogram(s): pass", EUS: "def histogram(s): pass" },
  testCode: [
    "import unittest",
    "from unittest.mock import patch",
    "class TestHistogram(unittest.TestCase):",
    "    def test_run(self):",
    "        with patch('builtins.print') as mock_print:",
    "            histogram('aba')",
    "            # a: **, b: *",
    "            mock_print.assert_any_call('a **')",
    "            mock_print.assert_any_call('b *')"
  ].join("\n")
};

const exercisePhoneBookV1 = {
  type: "exercise",
  exerciseId: "part05-17_phone_book_v1",
  title: { ENG: "Phone book v1", CAS: "Agenda v1", EUS: "Telefono-gida v1" },
  description: {
    ENG: "Please write a phone book application. It should allow searching (1), adding (2), and quitting (3).",
    CAS: "Por favor escribe una aplicación de agenda telefónica. Debe permitir buscar (1), añadir (2) y salir (3).",
    EUS: "Mesedez idatzi telefono-gida aplikazio bat. Bilatzea (1), gehitzea (2) eta irtetea (3) ahalbidetu behar du."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "from unittest.mock import patch",
    "class TestPhoneBookV1(unittest.TestCase):",
    "    def test_run(self):",
    "        # Simulated interaction test",
    "        pass"
  ].join("\n")
};

const exercisePhoneBookV2 = {
  type: "exercise",
  exerciseId: "part05-18_phone_book_v2",
  title: { ENG: "Phone book v2", CAS: "Agenda v2", EUS: "Telefono-gida v2" },
  description: {
    ENG: "Please write an improved version of the phone book application. Each entry should now accommodate multiple phone numbers.",
    CAS: "Por favor escribe una versión mejorada de la aplicación de agenda telefónica. Cada entrada debe admitir ahora múltiples números de teléfono.",
    EUS: "Mesedez idatzi telefono-gida aplikazioaren bertsio hobetua. Sarrera bakoitzak orain telefono zenbaki anitz onartu behar ditu."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestPhoneBookV2(unittest.TestCase):",
    "    def test_run(self):",
    "        # Simulated interaction test",
    "        pass"
  ].join("\n")
};

const removingKeysContent = {
  type: "markdown",
  content: {
    ENG: "## Removing keys and values from a dictionary\n\nIt is naturally possible to also remove key-value pairs from the dictionary...",
    CAS: "## Eliminando claves y valores de un diccionario\n\nNaturalmente, también es posible eliminar pares clave-valor del diccionario...",
    EUS: "## Gakoak eta balioak hiztegi batetik kentzen\n\nNoski, posible da hiztegitik gako-balio pareak ere kentzea..."
  }
};

module.exports = { traversingContent, exerciseHistogram, exercisePhoneBookV1, exercisePhoneBookV2, removingKeysContent };
