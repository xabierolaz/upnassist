const learningObjectives = {
  type: "markdown",
  content: {
    ENG: "# Learning objectives\n\nAfter this section\n\n- You will be familiar with more methods for slicing strings and lists\n- You will understand what immutability of strings means\n- You will be able to use the methods `count` and `replace`",
    CAS: "# Objetivos de aprendizaje\n\nDespués de esta sección\n\n- Estarás familiarizado con más métodos para rebanar cadenas y listas\n- Entenderás qué significa la inmutabilidad de las cadenas\n- Podrás usar los métodos `count` y `replace`",
    EUS: "# Ikas-helburuak\n\nAtal honen ondoren\n\n- Kateak eta zerrendak zatitzeko metodo gehiago ezagutuko dituzu\n- Kateen aldaezintasunak zer esan nahi duen ulertuko duzu\n- `count` eta `replace` metodoak erabiltzeko gai izango zara"
  }
};

const introContent = {
  type: "markdown",
  content: {
    ENG: "You are already familiar with the `[]` syntax for accessing a part of a string...",
    CAS: "Ya estás familiarizado con la sintaxis `[]` para acceder a una parte de una cadena...",
    EUS: "Jada ezagutzen duzu kate baten zati batera sartzeko `[]` sintaxia..."
  }
};

const exerciseEverythingReversed = {
  type: "exercise",
  exerciseId: "part04-33_everything_reversed",
  title: {
    ENG: "Everything reversed",
    CAS: "Todo invertido",
    EUS: "Dena alderantzizkatuta"
  },
  description: {
    ENG: "Please write a function named `everything_reversed`, which takes a list of strings as its argument. The function returns a new list with all of the items on the original list reversed. Also the order of items should be reversed on the new list.",
    CAS: "Por favor escribe una función llamada `everything_reversed`, que tome una lista de cadenas como argumento. La función devuelve una nueva lista con todos los elementos de la lista original invertidos. Además, el orden de los elementos debe invertirse en la nueva lista.",
    EUS: "Mesedez idatzi `everything_reversed` izeneko funtzio bat, kate zerrenda bat argumentu gisa hartzen duena. Funtzioak zerrenda berri bat itzultzen du jatorrizko zerrendako elementu guztiak alderantzizkatuta. Elementuen ordena ere alderantzizkatu behar da zerrenda berrian."
  },
  initialCode: { ENG: "def everything_reversed(my_list): pass", CAS: "def everything_reversed(mi_lista): pass", EUS: "def everything_reversed(nire_zerrenda): pass" },
  testCode: [
    "import unittest",
    "class TestEverythingReversed(unittest.TestCase):",
    "    def test_run(self):",
    "        res = everything_reversed(['Hi', 'there', 'example'])",
    "        self.assertEqual(res, ['elpmaxe', 'ereht', 'iH'], 'Should be reversed list of reversed strings | Debería ser lista invertida de cadenas invertidas | Kate alderantzizkatuen zerrenda alderantzizkatua izan beharko luke')"
  ].join("\n")
};

const stringsImmutableContent = {
  type: "markdown",
  content: {
    ENG: "## Strings are immutable\n\nStrings and lists have a lot in common...",
    CAS: "## Las cadenas son inmutables\n\nLas cadenas y las listas tienen mucho en común...",
    EUS: "## Kateak aldaezinak dira\n\nKateek eta zerrendek komunean asko dute..."
  }
};

module.exports = { learningObjectives, introContent, exerciseEverythingReversed, stringsImmutableContent };
