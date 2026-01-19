const learningObjectives = {
  type: "markdown",
  content: {
    ENG: "# Learning objectives\n\n- You will know how to handle invalid input\n- You will understand what are exceptions in programming\n- You will be familiar with the most common exception types in Python\n- You will be able to handle exceptions in your own programs",
    CAS: "# Objetivos de aprendizaje\n\n- Sabrás cómo manejar entradas no válidas\n- Entenderás qué son las excepciones en programación\n- Estarás familiarizado con los tipos de excepciones más comunes en Python\n- Podrás manejar excepciones en tus propios programas",
    EUS: "# Ikas-helburuak\n\n- Sarrera baliogabeak nola kudeatu jakingo duzu\n- Programazioan salbuespenak zer diren ulertuko duzu\n- Python-eko salbuespen mota ohikoenak ezagutuko dituzu\n- Zure programetan salbuespenak kudeatzeko gai izango zara"
  }
};

const introContent = {
  type: "markdown",
  content: {
    ENG: "The are two basic categories of errors that come up in programming contexts...",
    CAS: "Hay dos categorías básicas de errores que surgen en contextos de programación...",
    EUS: "Programazio testuinguruetan sortzen diren erroreen oinarrizko bi kategoria daude..."
  }
};

const exceptionsContent = {
  type: "markdown",
  content: {
    ENG: "## Exceptions\n\nErrors that occur while the program is already running are called *exceptions*...",
    CAS: "## Excepciones\n\nLos errores que ocurren mientras el programa ya se está ejecutando se llaman *excepciones*...",
    EUS: "## Salbuespenak\n\nPrograma exekutatzen ari den bitartean gertatzen diren erroreei *salbuespen* deitzen zaie..."
  }
};

const exerciseReadInput = {
  type: "exercise",
  exerciseId: "part06-17_read_input",
  title: { ENG: "Read input", CAS: "Leer entrada", EUS: "Sarrera irakurri" },
  description: {
    ENG: "Write `read_input` that asks for input until valid integer within bounds.",
    CAS: "Escribe `read_input` que pida entrada hasta entero válido dentro de límites.",
    EUS: "Idatzi `read_input` sarrera eskatzen duena mugen barruko baliozko zenbaki osoa arte."
  },
  initialCode: { ENG: "def read_input(p, l, u): pass", CAS: "def read_input(p, l, u): pass", EUS: "def read_input(p, l, u): pass" },
  testCode: [
    "import unittest",
    "from unittest.mock import patch",
    "class TestReadInput(unittest.TestCase):",
    "    def test_run(self):",
    "        with patch('builtins.input', side_effect=['a', '1', '6']):",
    "            res = read_input('num', 5, 10)",
    "            self.assertEqual(res, 6, 'Should ignore invalid inputs | Debería ignorar entradas inválidas | Sarrera baliogabeak alde batera utzi beharko lituzke')"
  ].join("\n")
};

const raisingExceptionsContent = {
  type: "markdown",
  content: {
    ENG: "## Raising exceptions\n\nYou can also raise exceptions, with the command `raise`...",
    CAS: "## Lanzando excepciones\n\nTambién puedes lanzar excepciones, con el comando `raise`...",
    EUS: "## Salbuespenak sortzen\n\nSalbuespenak ere sor ditzakezu, `raise` komandoarekin..."
  }
};

const exerciseParameterValidation = {
  type: "exercise",
  exerciseId: "part06-18_parameter_validation",
  title: { ENG: "Parameter validation", CAS: "Validación de parámetros", EUS: "Parametroen balidazioa" },
  description: {
    ENG: "Write `new_person(name, age)` raising ValueError for invalid inputs.",
    CAS: "Escribe `new_person(name, age)` lanzando ValueError para entradas inválidas.",
    EUS: "Idatzi `new_person(name, age)` ValueError botatzen sarrera baliogabeetarako."
  },
  initialCode: { ENG: "def new_person(n, a): pass", CAS: "def new_person(n, a): pass", EUS: "def new_person(n, a): pass" },
  testCode: [
    "import unittest",
    "class TestParamValidation(unittest.TestCase):",
    "    def test_run(self):",
    "        with self.assertRaises(ValueError, msg='Should raise ValueError for empty name | Debería lanzar ValueError para nombre vacío | ValueError bota beharko luke izen hutsarako'):",
    "            new_person('', 20)",
    "        with self.assertRaises(ValueError, msg='Should raise ValueError for negative age | Debería lanzar ValueError para edad negativa | ValueError bota beharko luke adin negatiborako'):",
    "            new_person('Bob', -1)"
  ].join("\n")
};

module.exports = { learningObjectives, introContent, exceptionsContent, exerciseReadInput, raisingExceptionsContent, exerciseParameterValidation };
