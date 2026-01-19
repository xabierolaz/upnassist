const learningObjectives = {
  type: "markdown",
  content: {
    ENG: "# Learning objectives\n\n- You will be able to create lists with different types of items\n- You will know how to use lists to organise data\n- You will be able to store a matrix as a two-dimensional list",
    CAS: "# Objetivos de aprendizaje\n\n- Podrás crear listas con diferentes tipos de elementos\n- Sabrás cómo usar listas para organizar datos\n- Podrás almacenar una matriz como una lista bidimensional",
    EUS: "# Ikas-helburuak\n\n- Mota desberdinetako elementuak dituzten zerrendak sortzeko gai izango zara\n- Datuak antolatzeko zerrendak nola erabili jakingo duzu\n- Matrize bat bi dimentsioko zerrenda gisa gordetzeko gai izango zara"
  }
};

const introContent = {
  type: "markdown",
  content: {
    ENG: "## Lists with different types of data\n\nIn the previous part we mainly handled lists with integer items...",
    CAS: "## Listas con diferentes tipos de datos\n\nEn la parte anterior manejamos principalmente listas con elementos enteros...",
    EUS: "## Mota desberdinetako datuak dituzten zerrendak\n\nAurreko zatian batez ere elementu osoak zituzten zerrendak maneiatu genituen..."
  }
};

const exerciseLongestString = {
  type: "exercise",
  exerciseId: "part05-01_longest_string",
  title: { ENG: "Longest string", CAS: "La cadena más larga", EUS: "Kate luzeena" },
  description: {
    ENG: "Please write a function named `longest(strings: list)`, which takes a list of strings as its argument. The function finds and returns the longest string in the list.",
    CAS: "Por favor escribe una función llamada `longest(strings: list)`, que tome una lista de cadenas como argumento. La función encuentra y devuelve la cadena más larga de la lista.",
    EUS: "Mesedez idatzi `longest(strings: list)` izeneko funtzio bat, kate zerrenda bat argumentu gisa hartzen duena. Funtzioak zerrendako kate luzeena aurkitu eta itzultzen du."
  },
  initialCode: { ENG: "def longest(s): pass", CAS: "def longest(s): pass", EUS: "def longest(s): pass" },
  testCode: [
    "import unittest",
    "class TestLongest(unittest.TestCase):",
    "    def test_run(self):",
    "        self.assertEqual(longest(['hi', 'hello']), 'hello', 'Should return hello | Debería devolver hello | hello itzuli beharko luke')",
    "        self.assertEqual(longest(['a', 'bc', 'def']), 'def', 'Should return def | Debería devolver def | def itzuli beharko luke')"
  ].join("\n")
};

const listsWithinListsContent = {
  type: "markdown",
  content: {
    ENG: "## Lists within lists\n\nThe items in a list can be lists themselves...",
    CAS: "## Listas dentro de listas\n\nLos elementos de una lista pueden ser listas a su vez...",
    EUS: "## Zerrendak zerrenden barruan\n\nZerrenda bateko elementuak zerrendak izan daitezke beraiek ere..."
  }
};

const matricesContent = {
  type: "markdown",
  content: {
    ENG: "## Matrices\n\nA two-dimensional array, or a *matrix*, is also a natural application of a list within a list...",
    CAS: "## Matrices\n\nUn arreglo bidimensional, o una *matriz*, es también una aplicación natural de una lista dentro de una lista...",
    EUS: "## Matrizeak\n\nBi dimentsioko array bat, edo *matrize* bat, zerrenda barruko zerrenda baten aplikazio naturala ere bada..."
  }
};

const accessingMatrixContent = {
  type: "markdown",
  content: {
    ENG: "## Accessing items in a matrix\n\nAccessing a single row within a matrix is simple...",
    CAS: "## Accediendo a elementos en una matriz\n\nAcceder a una sola fila dentro de una matriz es simple...",
    EUS: "## Matrize bateko elementuetara sartzen\n\nMatrize baten barruko errenkada bakar batera sartzea erraza da..."
  }
};

module.exports = { learningObjectives, introContent, exerciseLongestString, listsWithinListsContent, matricesContent, accessingMatrixContent };
