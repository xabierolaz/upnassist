const exerciseMostCommonCharacter = {
  type: "exercise",
  exerciseId: "part04-34_most_common_character",
  title: { ENG: "Most common character", CAS: "Carácter más común", EUS: "Karaktere ohikoena" },
  description: {
    ENG: "Please write a function named `most_common_character`, which takes a string argument. The function returns the character which has the most occurrences within the string.",
    CAS: "Por favor escribe una función llamada `most_common_character`, que tome un argumento de cadena. La función devuelve el carácter que tiene más apariciones dentro de la cadena.",
    EUS: "Mesedez idatzi `most_common_character` izeneko funtzio bat, kate argumentu bat hartzen duena. Funtzioak katean agerraldi gehien dituen karakterea itzultzen du."
  },
  initialCode: { ENG: "def most_common_character(s): pass", CAS: "def most_common_character(s): pass", EUS: "def most_common_character(s): pass" },
  testCode: [
    "import unittest",
    "class TestMostCommon(unittest.TestCase):",
    "    def test_run(self):",
    "        self.assertEqual(most_common_character('abbabac'), 'a', 'Should return a | Debería devolver a | a itzuli beharko luke')",
    "        self.assertEqual(most_common_character('coder'), 'c', 'Should return first common char | Debería devolver el primer carácter común | Lehen karaktere arrunta itzuli beharko luke')"
  ].join("\n")
};

const exerciseNoVowelsAllowed = {
  type: "exercise",
  exerciseId: "part04-35_no_vowels_allowed",
  title: { ENG: "No vowels allowed", CAS: "No se permiten vocales", EUS: "Bokalik ez da onartzen" },
  description: {
    ENG: "Please write a function named `no_vowels`, which takes a string argument. The function returns a new string, which should be the same as the original but with all vowels removed.",
    CAS: "Por favor escribe una función llamada `no_vowels`, que tome un argumento de cadena. La función devuelve una nueva cadena, que debe ser la misma que la original pero con todas las vocales eliminadas.",
    EUS: "Mesedez idatzi `no_vowels` izeneko funtzio bat, kate argumentu bat hartzen duena. Funtzioak kate berri bat itzultzen du, jatorrizkoaren berdina izan behar duena baina bokal guztiak kenduta."
  },
  initialCode: { ENG: "def no_vowels(s): pass", CAS: "def no_vowels(s): pass", EUS: "def no_vowels(s): pass" },
  testCode: [
    "import unittest",
    "class TestNoVowels(unittest.TestCase):",
    "    def test_run(self):",
    "        self.assertEqual(no_vowels('this is an example'), 'ths s n xmpl', 'Should remove vowels | Debería eliminar vocales | Bokalak kendu beharko lituzke')"
  ].join("\n")
};

const exerciseNoShoutingAllowed = {
  type: "exercise",
  exerciseId: "part04-36_no_shouting_allowed",
  title: { ENG: "No shouting allowed", CAS: "No se permite gritar", EUS: "Ez da oihukatzea onartzen" },
  description: {
    ENG: "Please use the `isupper` method to write a function named `no_shouting`, which takes a list of strings as an argument. The function returns a new list, containing only those items from the original which do not consist of solely uppercase characters.",
    CAS: "Por favor usa el método `isupper` para escribir una función llamada `no_shouting`, que tome una lista de cadenas como argumento. La función devuelve una nueva lista, que contiene solo aquellos elementos del original que no consisten únicamente en caracteres en mayúsculas.",
    EUS: "Mesedez erabili `isupper` metodoa `no_shouting` izeneko funtzio bat idazteko, kate zerrenda bat argumentu gisa hartzen duena. Funtzioak zerrenda berri bat itzultzen du, jatorrizkotik karaktere larriz soilik osatuta ez dauden elementuak bakarrik dituena."
  },
  initialCode: { ENG: "def no_shouting(l): pass", CAS: "def no_shouting(l): pass", EUS: "def no_shouting(l): pass" },
  testCode: [
    "import unittest",
    "class TestNoShouting(unittest.TestCase):",
    "    def test_run(self):",
    "        res = no_shouting(['HI', 'Hello', 'THERE'])",
    "        self.assertEqual(res, ['Hello'], 'Should remove HI and THERE | Debería eliminar HI y THERE | HI eta THERE kendu beharko lituzke')"
  ].join("\n")
};

module.exports = { exerciseMostCommonCharacter, exerciseNoVowelsAllowed, exerciseNoShoutingAllowed };
