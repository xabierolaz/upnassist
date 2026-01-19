const learningObjectives = {
  type: "markdown",
  content: {
    ENG: "# Learning objectives\n\n- You will know what is meant by a reference to a variable\n- You will understand that there can be multiple references to the same object\n- You will be able to use lists as parameters in functions\n- You will know what is meant by a side effect of a function",
    CAS: "# Objetivos de aprendizaje\n\n- Sabrás qué se entiende por una referencia a una variable\n- Entenderás que puede haber múltiples referencias al mismo objeto\n- Podrás usar listas como parámetros en funciones\n- Sabrás qué se entiende por un efecto secundario de una función",
    EUS: "# Ikas-helburuak\n\n- Aldagai baten erreferentziarekin zer esan nahi den jakingo duzu\n- Objektu berberera erreferentzia anitz egon daitezkeela ulertuko duzu\n- Funtzioetan zerrendak parametro gisa erabiltzeko gai izango zara\n- Funtzio baten albo-efektuarekin zer esan nahi den jakingo duzu"
  }
};

const introContent = {
  type: "markdown",
  content: {
    ENG: "Thus far we have thought of a variable as a sort of a \"box\" which contains the value...",
    CAS: "Hasta ahora hemos pensado en una variable como una especie de \"caja\" que contiene el valor...",
    EUS: "Orain arte aldagai bat aldagaiaren balioa duen \"kutxa\" moduko bat bezala pentsatu dugu..."
  }
};

const functionsAndListsContent = {
  type: "markdown",
  content: {
    ENG: "## Using lists as parameters in functions\n\nWhen you pass a list as an argument to a function, you are passing a reference to that list...",
    CAS: "## Usando listas como parámetros en funciones\n\nCuando pasas una lista como argumento a una función, estás pasando una referencia a esa lista...",
    EUS: "## Zerrendak parametro gisa erabiltzea funtzioetan\n\nZerrenda bat funtzio bati argumentu gisa pasatzen diozunean, zerrenda horretarako erreferentzia bat pasatzen ari zara..."
  }
};

const exerciseItemsMultipliedByTwo = {
  type: "exercise",
  exerciseId: "part05-08_items_multiplied_by_two",
  title: { ENG: "Items multiplied by two", CAS: "Elementos multiplicados por dos", EUS: "Elementuak biz biderkatuta" },
  description: {
    ENG: "Please write a function named `double_items(numbers: list)`, which takes a list of integers as its argument. The function should return a new list, which contains all values from the original list doubled. The function should not change the original list.",
    CAS: "Por favor escribe una función llamada `double_items(numbers: list)`, que tome una lista de enteros como argumento. La función debe devolver una nueva lista, que contenga todos los valores de la lista original duplicados. La función no debe cambiar la lista original.",
    EUS: "Mesedez idatzi `double_items(numbers: list)` izeneko funtzio bat, osoko zenbakien zerrenda bat argumentu gisa hartzen duena. Funtzioak zerrenda berri bat itzuli behar du, jatorrizko zerrendako balio guztiak bikoiztuta dituena. Funtzioak ez du jatorrizko zerrenda aldatu behar."
  },
  initialCode: { ENG: "def double_items(n): pass", CAS: "def double_items(n): pass", EUS: "def double_items(n): pass" },
  testCode: [
    "import unittest",
    "class TestDouble(unittest.TestCase):",
    "    def test_run(self):",
    "        orig = [1, 2, 3]",
    "        res = double_items(orig)",
    "        self.assertEqual(res, [2, 4, 6], 'Should double items | Debería duplicar elementos | Elementuak bikoiztu beharko lituzke')",
    "        self.assertEqual(orig, [1, 2, 3], 'Should not modify original | No debería modificar el original | Ez luke jatorrizkoa aldatu behar')"
  ].join("\n")
};

const exerciseRemoveSmallest = {
  type: "exercise",
  exerciseId: "part05-09_remove_smallest",
  title: { ENG: "Remove smallest", CAS: "Eliminar el más pequeño", EUS: "Txikiena kendu" },
  description: {
    ENG: "Please write a function named `remove_smallest(numbers: list)`, which takes a list of integers as its argument. The functions should find and remove the smallest item in the list. The function should not have a return value - it should directly modify the list it receives as a parameter.",
    CAS: "Por favor escribe una función llamada `remove_smallest(numbers: list)`, que tome una lista de enteros como argumento. La función debe encontrar y eliminar el elemento más pequeño de la lista. La función no debe tener un valor de retorno - debe modificar directamente la lista que recibe como parámetro.",
    EUS: "Mesedez idatzi `remove_smallest(numbers: list)` izeneko funtzio bat, osoko zenbakien zerrenda bat argumentu gisa hartzen duena. Funtzioak zerrendako elementu txikiena aurkitu eta kendu behar du. Funtzioak ez du itzulera-baliorik izan behar - parametro gisa jasotzen duen zerrenda zuzenean aldatu behar du."
  },
  initialCode: { ENG: "def remove_smallest(n): pass", CAS: "def remove_smallest(n): pass", EUS: "def remove_smallest(n): pass" },
  testCode: [
    "import unittest",
    "class TestRemoveSmallest(unittest.TestCase):",
    "    def test_run(self):",
    "        nums = [1, 2, 3]",
    "        remove_smallest(nums)",
    "        self.assertEqual(nums, [2, 3], 'Should remove 1 | Debería eliminar el 1 | 1 kendu beharko luke')",
    "        nums2 = [5, 3, 4]",
    "        remove_smallest(nums2)",
    "        self.assertEqual(nums2, [5, 4], 'Should remove 3 | Debería eliminar el 3 | 3 kendu beharko luke')"
  ].join("\n")
};

module.exports = { learningObjectives, introContent, functionsAndListsContent, exerciseItemsMultipliedByTwo, exerciseRemoveSmallest };
