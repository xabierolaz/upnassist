const learningObjectives = {
  type: "markdown",
  content: {
    ENG: "# Arithmetic operations\n\n## Learning objectives\n\nAfter this section:...",
    CAS: "# Operaciones aritméticas\n\n## Objetivos de aprendizaje\n\nDespués de esta sección:...",
    EUS: "# Eragiketa aritmetikoak\n\n## Ikaskuntza-helburuak\n\nAtal honen ondoren:..."
  }
};

const introContent = {
  type: "markdown",
  content: {
    ENG: "In the previous sections you've seen examples with basic arithmetics...",
    CAS: "En las secciones anteriores has visto ejemplos con aritmética básica...",
    EUS: "Aurreko ataletan oinarrizko aritmetikako adibideak ikusi dituzu..."
  }
};

const numbersInputContent = {
  type: "markdown",
  content: {
    ENG: "## Numbers as input\n\nWe have already used the `input` command to read in strings from the user...",
    CAS: "## Números como entrada\n\nYa hemos utilizado el comando `input` para leer cadenas del usuario...",
    EUS: "## Zenbakiak sarrera gisa\n\nDagoeneko erabili dugu `input` komandoa erabiltzailearen kateak irakurtzeko..."
  }
};

const exerciseTimesFive = {
  type: "exercise",
  exerciseId: "part01-09_times_five",
  title: { ENG: "Times five", CAS: "Por cinco", EUS: "Bider bost" },
  description: {
    ENG: "Write a program that asks for a number and prints it multiplied by five.",
    CAS: "Escribe un programa que pida un número y lo imprima multiplicado por cinco.",
    EUS: "Idatzi zenbaki bat eskatu eta bostekin biderkatuta inprimatzen duen programa."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestTimesFive(unittest.TestCase):",
    "    def test_output(self):",
    "        output = run_student_code(inputs=['3'])",
    "        self.assertIn('15', output, 'Should contain 15 | Debería contener 15 | 15 eduki beharko luke')",
    "        self.assertIn('3 times 5 is 15', output, 'Full message incorrect | Mensaje completo incorrecto | Mezu osoa okerra')"
  ].join("\n")
};

const exerciseNameAndAge = {
  type: "exercise",
  exerciseId: "part01-10_name_and_age",
  title: { ENG: "Name and age", CAS: "Nombre y edad", EUS: "Izena eta adina" },
  description: {
    ENG: "Write a program asking for name and birth year, then printing a message.",
    CAS: "Escribe un programa que pida nombre y año de nacimiento, luego imprima un mensaje.",
    EUS: "Idatzi izena eta jaiotze-urtea eskatzen dituen programa, gero mezu bat inprimatzeko."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestNameAge(unittest.TestCase):",
    "    def test_output(self):",
    "        output = run_student_code(inputs=['Frances', '1990'])",
    "        self.assertIn('31 years old', output, 'Should calc age correctly (assuming 2021) | Debería calcular edad correctamente (asumiendo 2021) | Adina ondo kalkulatu beharko luke (2021 suposatuz)')",
    "        self.assertIn('Frances', output, 'Name missing | Falta el nombre | Izena falta da')"
  ].join("\n")
};

const usingVariablesContent = {
  type: "markdown",
  content: {
    ENG: "## Using variables\n\nLet's have a look at a program which calculates the sum of three numbers...",
    CAS: "## Usando variables\n\nEchemos un vistazo a un programa que calcula la suma de tres números...",
    EUS: "## Aldagaiak erabiltzen\n\nIkus dezagun erabiltzaileak emandako hiru zenbakiren batura kalkulatzen duen programa bat..."
  }
};

const exerciseSecondsInDay = {
  type: "exercise",
  exerciseId: "part01-11_seconds_in_a_day",
  title: { ENG: "Seconds in a day", CAS: "Segundos en un día", EUS: "Segunduak egun batean" },
  description: {
    ENG: "Write a program that asks for days and prints seconds.",
    CAS: "Escribe un programa que pida días e imprima segundos.",
    EUS: "Idatzi egunak eskatu eta segunduak inprimatzen duen programa."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestSeconds(unittest.TestCase):",
    "    def test_output(self):",
    "        out = run_student_code(inputs=['1'])",
    "        self.assertIn('86400', out, '1 day = 86400 seconds | 1 día = 86400 segundos | Egun 1 = 86400 segundu')"
  ].join("\n")
};

const exerciseFixProduct = {
  type: "exercise",
  exerciseId: "part01-12_fix_product",
  title: { ENG: "Fix code: Product", CAS: "Arregla: Producto", EUS: "Konpondu: Biderkadura" },
  description: {
    ENG: "Fix the program to calculate product of three numbers correctly.",
    CAS: "Arregla el programa para calcular el producto de tres números correctamente.",
    EUS: "Konpondu programa hiru zenbakiren biderkadura ondo kalkulatzeko."
  },
  initialCode: {
    ENG: "number = int(input('1st: ')\nnumber = int(input('2nd: ')\nnumber = int(input('3rd: ')\nproduct = number * number * number\nprint(product)",
    CAS: "number = int(input('1ro: ')\nnumber = int(input('2do: ')\nnumber = int(input('3ro: ')\nproduct = number * number * number\nprint(product)",
    EUS: "number = int(input('1.: ')\nnumber = int(input('2.: ')\nnumber = int(input('3.: ')\nproduct = number * number * number\nprint(product)"
  },
  testCode: [
    "import unittest",
    "class TestProduct(unittest.TestCase):",
    "    def test_output(self):",
    "        out = run_student_code(inputs=['2', '3', '5'])",
    "        self.assertIn('30', out, '2*3*5 should be 30 | 2*3*5 debería ser 30 | 2*3*5 30 izan beharko litzateke')"
  ].join("\n")
};

module.exports = { learningObjectives, introContent, numbersInputContent, exerciseTimesFive, exerciseNameAndAge, usingVariablesContent, exerciseSecondsInDay, exerciseFixProduct };
