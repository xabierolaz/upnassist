const learningObjectives = {
  type: "markdown",
  content: {
    ENG: "# Learning objectives\n\n- You will know what a Python module is\n- You will be able to include a module in your program with the `import` statement",
    CAS: "# Objetivos de aprendizaje\n\n- Sabrás qué es un módulo de Python\n- Podrás incluir un módulo en tu programa con la declaración `import`",
    EUS: "# Ikas-helburuak\n\n- Python modulu bat zer den jakingo duzu\n- Modulu bat zure programan sartzeko gai izango zara `import` sententziarekin"
  }
};

const debuggingContent = {
  type: "markdown",
  content: {
    ENG: "## Debugging revisited\n\nWe have already come across quite a few debugging methods on this course...",
    CAS: "## Depuración revisada\n\nYa hemos encontrado bastantes métodos de depuración en este curso...",
    EUS: "## Arazketa berrikusia\n\nIkastaro honetan arazketa metodo dezente topatu ditugu dagoeneko..."
  }
};

const usingModulesContent = {
  type: "markdown",
  content: {
    ENG: "## Using modules\n\nThe Python language definition already contains some useful functions...",
    CAS: "## Usando módulos\n\nLa definición del lenguaje Python ya contiene algunas funciones útiles...",
    EUS: "## Moduluak erabiltzen\n\nPython lengoaiaren definizioak dagoeneko baditu funtzio erabilgarri batzuk..."
  }
};

const exerciseHypotenuse = {
  type: "exercise",
  exerciseId: "part07-01_hypotenuse",
  title: { ENG: "Hypotenuse", CAS: "Hipotenusa", EUS: "Hipotenusa" },
  description: {
    ENG: "Please write a function named `hypotenuse(leg1, leg2)` which returns the length of the hypotenuse.",
    CAS: "Por favor escribe una función llamada `hypotenuse(leg1, leg2)` que devuelva la longitud de la hipotenusa.",
    EUS: "Mesedez idatzi `hypotenuse(leg1, leg2)` funtzioa, hipotenusaren luzera itzultzen duena."
  },
  initialCode: { ENG: "import math\ndef hypotenuse(l1, l2): pass", CAS: "import math\ndef hypotenuse(l1, l2): pass", EUS: "import math\ndef hypotenuse(l1, l2): pass" },
  testCode: [
    "import unittest",
    "class TestHypotenuse(unittest.TestCase):",
    "    def test_run(self):",
    "        res = hypotenuse(3, 4)",
    "        self.assertEqual(res, 5.0, 'Should be 5.0 for 3 and 4 | Debería ser 5.0 para 3 y 4 | 5.0 izan beharko litzateke 3 eta 4-rako')"
  ].join("\n")
};

module.exports = { learningObjectives, debuggingContent, usingModulesContent, exerciseHypotenuse };
