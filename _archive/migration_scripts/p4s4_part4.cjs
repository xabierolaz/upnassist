const exerciseDistinctNumbers = {
  type: "exercise",
  exerciseId: "part04-28_distinct_numbers",
  title: { ENG: "Distinct numbers", CAS: "Números distintos", EUS: "Zenbaki desberdinak" },
  description: {
    ENG: "Please write a function named `distinct_numbers`, which takes a list of integers as its argument. The function returns a new list containing the numbers from the original list in order of magnitude, and so that each distinct number is present only once.",
    CAS: "Por favor escribe una función llamada `distinct_numbers`, que tome una lista de enteros como argumento. La función devuelve una nueva lista que contiene los números de la lista original en orden de magnitud, y de modo que cada número distinto esté presente solo una vez.",
    EUS: "Mesedez idatzi `distinct_numbers` izeneko funtzio bat, osoko zenbakien zerrenda bat argumentu gisa hartzen duena. Funtzioak zerrenda berri bat itzultzen du, jatorrizko zerrendako zenbakiak magnitude ordenan dituena, eta zenbaki desberdin bakoitza behin bakarrik agertzen da."
  },
  initialCode: { ENG: "def distinct_numbers(my_list): pass", CAS: "def distinct_numbers(mi_lista): pass", EUS: "def distinct_numbers(nire_zerrenda): pass" },
  testCode: [
    "import unittest",
    "class TestDistinct(unittest.TestCase):",
    "    def test_run(self):",
    "        self.assertEqual(distinct_numbers([3, 2, 2, 1, 3]), [1, 2, 3], 'Should return sorted unique numbers | Debería devolver números únicos ordenados | Zenbaki bakar ordenatuak itzuli beharko lituzke')",
    "        self.assertEqual(distinct_numbers([1, 1, 1]), [1], 'Should handle duplicates | Debería manejar duplicados | Bikoiztuak kudeatu beharko lituzke')"
  ].join("\n")
};

const bestOrWorstContent = {
  type: "markdown",
  content: {
    ENG: "## Finding the best or the worst item in a list\n\nA very common programming task is finding the best or worst item in a list...",
    CAS: "## Encontrando el mejor o el peor elemento en una lista\n\nUna tarea de programación muy común es encontrar el mejor o el peor elemento en una lista...",
    EUS: "## Zerrenda bateko elementurik onena edo txarrena aurkitzen\n\nProgramazio-zeregin oso ohikoa da zerrenda bateko elementurik onena edo txarrena aurkitzea..."
  }
};

const exerciseLengthOfLongest = {
  type: "exercise",
  exerciseId: "part04-29_length_of_longest",
  title: { ENG: "Length of longest string", CAS: "Longitud de la cadena más larga", EUS: "Kate luzeenaren luzera" },
  description: {
    ENG: "Please write a function named `length_of_longest`, which takes a list of strings as its argument. The function returns the length of the longest string.",
    CAS: "Por favor escribe una función llamada `length_of_longest`, que tome una lista de cadenas como argumento. La función devuelve la longitud de la cadena más larga.",
    EUS: "Mesedez idatzi `length_of_longest` izeneko funtzio bat, kate zerrenda bat argumentu gisa hartzen duena. Funtzioak kate luzeenaren luzera itzultzen du."
  },
  initialCode: { ENG: "def length_of_longest(my_list): pass", CAS: "def length_of_longest(mi_lista): pass", EUS: "def length_of_longest(nire_zerrenda): pass" },
  testCode: [
    "import unittest",
    "class TestLengthLongest(unittest.TestCase):",
    "    def test_run(self):",
    "        self.assertEqual(length_of_longest(['a', 'bc', 'def']), 3, 'Should return 3 for def | Debería devolver 3 para def | 3 itzuli beharko luke def-rako')",
    "        self.assertEqual(length_of_longest(['first', 'second', 'third']), 6, 'Should return 6 for second | Debería devolver 6 para second | 6 itzuli beharko luke second-erako')"
  ].join("\n")
};

const exerciseShortestInList = {
  type: "exercise",
  exerciseId: "part04-30_shortest_in_list",
  title: { ENG: "Shortest in list", CAS: "El más corto en la lista", EUS: "Zerrendako laburrena" },
  description: {
    ENG: "Please write a function named `shortest`, which takes a list of strings as its argument. The function returns whichever of the strings is the shortest.",
    CAS: "Por favor escribe una función llamada `shortest`, que tome una lista de cadenas como argumento. La función devuelve cualquiera de las cadenas que sea la más corta.",
    EUS: "Mesedez idatzi `shortest` izeneko funtzio bat, kate zerrenda bat argumentu gisa hartzen duena. Funtzioak kate laburrena dena itzultzen du."
  },
  initialCode: { ENG: "def shortest(my_list): pass", CAS: "def shortest(mi_lista): pass", EUS: "def shortest(nire_zerrenda): pass" },
  testCode: [
    "import unittest",
    "class TestShortest(unittest.TestCase):",
    "    def test_run(self):",
    "        res = shortest(['first', 'second', 'third'])",
    "        self.assertIn(res, ['first', 'third'], 'Should return first or third | Debería devolver first o third | first edo third itzuli beharko luke')"
  ].join("\n")
};

const exerciseAllLongestInList = {
  type: "exercise",
  exerciseId: "part04-31_all_longest_in_list",
  title: { ENG: "All longest in list", CAS: "Todos los más largos", EUS: "Luzeen guztiak" },
  description: {
    ENG: "Please write a function named `all_the_longest`, which takes a list of strings as its argument. The function should return a new list containing the longest string in the original list. If more than one are equally long, return all of them.",
    CAS: "Por favor escribe una función llamada `all_the_longest`, que tome una lista de cadenas como argumento. La función debe devolver una nueva lista que contenga la cadena más larga. Si hay más de una igual de largas, devuélvelas todas.",
    EUS: "Mesedez idatzi `all_the_longest` izeneko funtzio bat, kate zerrenda bat argumentu gisa hartzen duena. Funtzioak zerrenda berri bat itzuli behar du kate luzeena duena. Bat baino gehiago berdin luzeak badira, itzuli denak."
  },
  initialCode: { ENG: "def all_the_longest(my_list): pass", CAS: "def all_the_longest(mi_lista): pass", EUS: "def all_the_longest(nire_zerrenda): pass" },
  testCode: [
    "import unittest",
    "class TestAllLongest(unittest.TestCase):",
    "    def test_run(self):",
    "        res = all_the_longest(['a', 'bc', 'de'])",
    "        self.assertEqual(res, ['bc', 'de'], 'Should return [bc, de] | Debería devolver [bc, de] | [bc, de] itzuli beharko luke')"
  ].join("\n")
};

module.exports = { exerciseDistinctNumbers, bestOrWorstContent, exerciseLengthOfLongest, exerciseShortestInList, exerciseAllLongestInList };
