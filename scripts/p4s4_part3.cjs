const exerciseSumOfPositives = {
  type: "exercise",
  exerciseId: "part04-25_sum_of_positives",
  title: { ENG: "Sum of positive numbers", CAS: "Suma de números positivos", EUS: "Zenbaki positiboen batura" },
  description: {
    ENG: "Please write a function named `sum_of_positives`, which takes a list of integers as its argument. The function returns the sum of the positive values in the list.",
    CAS: "Por favor escribe una función llamada `sum_of_positives`, que tome una lista de enteros como argumento. La función devuelve la suma de los valores positivos en la lista.",
    EUS: "Mesedez idatzi `sum_of_positives` izeneko funtzio bat, osoko zenbakien zerrenda bat argumentu gisa hartzen duena. Funtzioak zerrendako balio positiboen batura itzultzen du."
  },
  initialCode: { ENG: "def sum_of_positives(my_list): pass", CAS: "def sum_of_positives(mi_lista): pass", EUS: "def sum_of_positives(nire_zerrenda): pass" },
  testCode: [
    "import unittest",
    "class TestSumPos(unittest.TestCase):",
    "    def test_run(self):",
    "        self.assertEqual(sum_of_positives([1, -2, 3, -4, 5]), 9, 'Sum of [1, -2, 3, -4, 5] should be 9 | La suma de [1, -2, 3, -4, 5] debería ser 9 | [1, -2, 3, -4, 5]-en batura 9 izan beharko litzateke')",
    "        self.assertEqual(sum_of_positives([-1, -2]), 0, 'Sum of negatives should be 0 | La suma de negativos debería ser 0 | Negatiboen batura 0 izan beharko litzateke')"
  ].join("\n")
};

const exerciseEvenNumbers = {
  type: "exercise",
  exerciseId: "part04-26_even_numbers",
  title: { ENG: "Even numbers", CAS: "Números pares", EUS: "Zenbaki bikoitiak" },
  description: {
    ENG: "Please write a function named `even_numbers`, which takes a list of integers as an argument. The function returns a new list containing the even numbers from the original list.",
    CAS: "Por favor escribe una función llamada `even_numbers`, que tome una lista de enteros como argumento. La función devuelve una nueva lista que contiene los números pares de la lista original.",
    EUS: "Mesedez idatzi `even_numbers` izeneko funtzio bat, osoko zenbakien zerrenda bat argumentu gisa hartzen duena. Funtzioak zerrenda berri bat itzultzen du, jatorrizko zerrendako zenbaki bikoitiak dituena."
  },
  initialCode: { ENG: "def even_numbers(my_list): pass", CAS: "def even_numbers(mi_lista): pass", EUS: "def even_numbers(nire_zerrenda): pass" },
  testCode: [
    "import unittest",
    "class TestEven(unittest.TestCase):",
    "    def test_run(self):",
    "        self.assertEqual(even_numbers([1, 2, 3, 4]), [2, 4], 'Should return [2, 4] | Debería devolver [2, 4] | [2, 4] itzuli beharko luke')",
    "        self.assertEqual(even_numbers([1, 3, 5]), [], 'Should return empty list for odd numbers | Debería devolver lista vacía para impares | Zerrenda hutsa itzuli beharko luke bakoitietarako')"
  ].join("\n")
};

const exerciseSumOfLists = {
  type: "exercise",
  exerciseId: "part04-27_sum_of_lists",
  title: { ENG: "The sum of lists", CAS: "La suma de listas", EUS: "Zerrenden batura" },
  description: {
    ENG: "Please write a function named `list_sum` which takes two lists of integers as arguments. The function returns a new list which contains the sums of the items at each index in the two original lists.",
    CAS: "Por favor escribe una función llamada `list_sum` que tome dos listas de enteros como argumentos. La función devuelve una nueva lista que contiene las sumas de los elementos en cada índice en las dos listas originales.",
    EUS: "Mesedez idatzi `list_sum` izeneko funtzio bat, osoko zenbakien bi zerrenda argumentu gisa hartzen dituena. Funtzioak zerrenda berri bat itzultzen du, jatorrizko bi zerrendetako indize bakoitzeko elementuen baturak dituena."
  },
  initialCode: { ENG: "def list_sum(l1, l2): pass", CAS: "def list_sum(l1, l2): pass", EUS: "def list_sum(l1, l2): pass" },
  testCode: [
    "import unittest",
    "class TestListSum(unittest.TestCase):",
    "    def test_run(self):",
    "        self.assertEqual(list_sum([1, 2], [3, 4]), [4, 6], 'Should return [4, 6] | Debería devolver [4, 6] | [4, 6] itzuli beharko luke')",
    "        self.assertEqual(list_sum([0, 0], [0, 0]), [0, 0], 'Should handle zeros | Debería manejar ceros | Zeroak kudeatu beharko lituzke')"
  ].join("\n")
};

module.exports = { exerciseSumOfPositives, exerciseEvenNumbers, exerciseSumOfLists };
