const exerciseListOfStars = {
  type: "exercise",
  exerciseId: "part04-22_list_of_stars",
  title: { ENG: "List of stars", CAS: "Lista de estrellas", EUS: "Izar zerrenda" },
  description: {
    ENG: "Please write a function named `list_of_stars`, which takes a list of integers as its argument. The function should print out lines of star characters.",
    CAS: "Por favor escribe una función llamada `list_of_stars`, que tome una lista de enteros como argumento. La función debe imprimir líneas de caracteres de estrella.",
    EUS: "Mesedez idatzi `list_of_stars` izeneko funtzio bat, osoko zenbakien zerrenda bat argumentu gisa hartzen duena. Funtzioak izar karaktereen lerroak inprimatu behar ditu."
  },
  initialCode: { ENG: "def list_of_stars(list): pass", CAS: "def list_of_stars(lista): pass", EUS: "def list_of_stars(zerrenda): pass" },
  testCode: [
    "import unittest",
    "from unittest.mock import patch",
    "class TestListOfStars(unittest.TestCase):",
    "    def test_run(self):",
    "        with patch('builtins.print') as mock_print:",
    "            list_of_stars([2, 1])",
    "            # Expected: '**', '*",
    "            if mock_print.call_count != 2:",
    "                self.fail('Should print exactly 2 lines for input [2, 1] | Debería imprimir exactamente 2 líneas para la entrada [2, 1] | 2 lerro zehazki inprimatu beharko lituzke [2, 1] sarrerarako')",
    "            mock_print.assert_any_call('**')",
    "            mock_print.assert_any_call('*')"
  ].join("\n")
};

const exerciseAnagrams = {
  type: "exercise",
  exerciseId: "part04-23_anagrams",
  title: { ENG: "Anagrams", CAS: "Anagramas", EUS: "Anagramak" },
  description: {
    ENG: "Please write a function named `anagrams`, which takes two strings as arguments. The function returns `True` if the strings are anagrams of each other.",
    CAS: "Por favor escribe una función llamada `anagrams`, que tome dos cadenas como argumentos. La función devuelve `True` si las cadenas son anagramas una de la otra.",
    EUS: "Mesedez idatzi `anagrams` izeneko funtzio bat, bi kate argumentu gisa hartzen dituena. Funtzioak `True` itzultzen du kateak elkarren anagramak badira."
  },
  initialCode: { ENG: "def anagrams(s1, s2): pass", CAS: "def anagrams(s1, s2): pass", EUS: "def anagrams(s1, s2): pass" },
  testCode: [
    "import unittest",
    "class TestAnagrams(unittest.TestCase):",
    "    def test_run(self):",
    "        self.assertTrue(anagrams('tame', 'mate'), 'tame and mate are anagrams | tame y mate son anagramas | tame eta mate anagramak dira')",
    "        self.assertFalse(anagrams('tame', 'tamee'), 'tame and tamee are not anagrams | tame y tamee no son anagramas | tame eta tamee ez dira anagramak')",
    "        self.assertFalse(anagrams('tabby', 'batty'), 'tabby and batty are not anagrams | tabby y batty no son anagramas | tabby eta batty ez dira anagramak')"
  ].join("\n")
};

const exercisePalindromes = {
  type: "exercise",
  exerciseId: "part04-24_palindromes",
  title: { ENG: "Palindromes", CAS: "Palíndromos", EUS: "Palindromoak" },
  description: {
    ENG: "Please write a function named `palindromes`, which takes a string argument and returns `True` if the string is a palindrome.",
    CAS: "Por favor escribe una función llamada `palindromes`, que tome un argumento de cadena y devuelva `True` si la cadena es un palíndromo.",
    EUS: "Mesedez idatzi `palindromes` izeneko funtzio bat, kate argumentu bat hartzen duena eta `True` itzultzen duena katea palindromoa bada."
  },
  initialCode: { ENG: "def palindromes(s): pass", CAS: "def palindromes(s): pass", EUS: "def palindromes(s): pass" },
  testCode: [
    "import unittest",
    "class TestPalindromes(unittest.TestCase):",
    "    def test_run(self):",
    "        self.assertTrue(palindromes('madam'), 'madam is a palindrome | madam es un palíndromo | madam palindromoa da')",
    "        self.assertFalse(palindromes('example'), 'example is not a palindrome | example no es un palíndromo | example ez da palindromoa')"
  ].join("\n")
};

module.exports = { exerciseListOfStars, exerciseAnagrams, exercisePalindromes };
