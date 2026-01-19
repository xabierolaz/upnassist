const fs = require('fs');
const path = require('path');

const learningObjectives = {
  type: "markdown",
  content: {
    ENG: "# Learning objectives\n\n- You will be able to write your own modules\n- You will know what the Python variable `__name__` and the value `__main__` signify",
    CAS: "# Objetivos de aprendizaje\n\n- Podrás escribir tus propios módulos\n- Sabrás qué significan la variable de Python `__name__` y el valor `__main__`",
    EUS: "# Ikas-helburuak\n\n- Zure modulu propioak idazteko gai izango zara\n- `__name__` Python aldagaia eta `__main__` balioak zer esan nahi duten jakingo duzu"
  }
};

const creatingModulesContent = {
  type: "markdown",
  content: {
    ENG: "## Creating your own modules\n\nWriting your own Python modules is easy. Any file containing valid Python code can be imported as a module...",
    CAS: "## Creando tus propios módulos\n\nEscribir tus propios módulos de Python es fácil. Cualquier archivo que contenga código Python válido puede importarse como un módulo...",
    EUS: "## Zure modulu propioak sortzen\n\nZure Python modulu propioak idaztea erraza da. Baliozko Python kodea duen edozein fitxategi modulu gisa inporta daiteke..."
  }
};

const mainFunctionContent = {
  type: "markdown",
  content: {
    ENG: "## Main function code in a module\n\nIf a module contains any code which is not contained within a function definition...",
    CAS: "## Código de función principal en un módulo\n\nSi un módulo contiene algún código que no está contenido dentro de una definición de función...",
    EUS: "## Funtzio nagusiko kodea modulu batean\n\nModulu batek funtzio definizio baten barruan ez dagoen koderik badu..."
  }
};

const exerciseStringHelper = {
  type: "exercise",
  exerciseId: "part07-17_string_helper",
  title: { ENG: "String helper", CAS: "Ayudante de cadenas", EUS: "Kate laguntzailea" },
  description: {
    ENG: "Write module `string_helper` with functions `change_case`, `split_in_half`, `remove_special_characters`.",
    CAS: "Escribe el módulo `string_helper` con funciones `change_case`, `split_in_half`, `remove_special_characters`.",
    EUS: "Idatzi `string_helper` modulua `change_case`, `split_in_half`, `remove_special_characters` funtzioekin."
  },
  initialCode: { ENG: "def change_case(s): pass\ndef split_in_half(s): pass\ndef remove_special_characters(s): pass", CAS: "def change_case(s): pass\ndef split_in_half(s): pass\ndef remove_special_characters(s): pass", EUS: "def change_case(s): pass\ndef split_in_half(s): pass\ndef remove_special_characters(s): pass" },
  testCode: [
    "import unittest",
    "import string",
    "class TestStringHelper(unittest.TestCase):",
    "    def test_run(self):",
    "        self.assertEqual(change_case('Hello'), 'hELLO', 'Should flip case | Debería invertir mayúsculas/minúsculas | Maiuskulak/minuskulak alderantzikatu beharko lituzke')",
    "        self.assertEqual(split_in_half('abcd'), ('ab', 'cd'), 'Should split in half | Debería dividir por la mitad | Erdibitu beharko luke רבי')"
  ].join("\n")
};

const section5 = {
  id: "part7-5",
  title: {
    ENG: "Creating your own modules",
    CAS: "Creando tus propios módulos",
    EUS: "Zure modulu propioak sortzen"
  },
  blocks: [
    learningObjectives,
    creatingModulesContent,
    mainFunctionContent,
    exerciseStringHelper
  ]
};

const outputPath = path.join(__dirname, '../src/data/part7/section5.json');
fs.writeFileSync(outputPath, JSON.stringify(section5, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);