const learningObjectives = {
  type: "markdown",
  content: {
    ENG: "# Learning objectives\n\n- You will know how to handle dates and times in Python code\n- You will be able to create and use `datetime` objects",
    CAS: "# Objetivos de aprendizaje\n\n- Sabrás cómo manejar fechas y horas en código Python\n- Podrás crear y usar objetos `datetime`",
    EUS: "# Ikas-helburuak\n\n- Python kodean datak eta orduak nola kudeatu jakingo duzu\n- `datetime` objektuak sortzeko eta erabiltzeko gai izango zara"
  }
};

const datetimeObjectContent = {
  type: "markdown",
  content: {
    ENG: "## The datetime object\n\nThe Python `datetime` module includes the function `now`...",
    CAS: "## El objeto datetime\n\nEl módulo `datetime` de Python incluye la función `now`...",
    EUS: "## Datetime objektua\n\nPython `datetime` moduluak `now` funtzioa barne hartzen du..."
  }
};

const comparingTimesContent = {
  type: "markdown",
  content: {
    ENG: "## Compare times\n\nThe familiar comparison operators work also on datetime objects...",
    CAS: "## Comparar horas\n\nLos operadores de comparación familiares funcionan también en objetos datetime...",
    EUS: "## Orduak konparatu\n\nKonparazio eragile ezagunek datetime objektuekin ere funtzionatzen dute..."
  }
};

const exerciseHowOld = {
  type: "exercise",
  exerciseId: "part07-09_how_old",
  title: { ENG: "How old", CAS: "Cuántos años", EUS: "Zenbat urte" },
  description: {
    ENG: "Write a program that asks for birth date and prints age in days on eve of new millennium.",
    CAS: "Escribe un programa que pida fecha de nacimiento e imprima edad en días en víspera del nuevo milenio.",
    EUS: "Idatzi programa bat jaiotze-data eskatzen duena eta adina egunetan inprimatzen duena milurteko berriaren bezperan."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: ""
};

const exerciseValidPic = {
  type: "exercise",
  exerciseId: "part07-10_valid_pic",
  title: { ENG: "Valid PIC?", CAS: "¿PIC válido?", EUS: "PIC baliozkoa?" },
  description: {
    ENG: "Write `is_it_valid(pic)` to check Finnish Personal Identity Code.",
    CAS: "Escribe `is_it_valid(pic)` para verificar el Código de Identidad Personal finlandés.",
    EUS: "Idatzi `is_it_valid(pic)` Finlandiako Identitate Pertsonaleko Kodea egiaztatzeko."
  },
  initialCode: { ENG: "def is_it_valid(pic): pass", CAS: "def is_it_valid(pic): pass", EUS: "def is_it_valid(pic): pass" },
  testCode: [
    "import unittest",
    "class TestPic(unittest.TestCase):",
    "    def test_run(self):",
    "        self.assertTrue(is_it_valid('230827-906F'), 'Should be valid | Debería ser válido | Baliozkoa izan beharko litzateke')",
    "        self.assertFalse(is_it_valid('120488+246A'), 'Invalid control char | Carácter de control inválido | Kontrol-karaktere baliogabea')"
  ].join("\n")
};

module.exports = { learningObjectives, datetimeObjectContent, comparingTimesContent, exerciseHowOld, exerciseValidPic };
