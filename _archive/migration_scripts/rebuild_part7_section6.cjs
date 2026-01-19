const fs = require('fs');
const path = require('path');

const learningObjectives = {
  type: "markdown",
  content: {
    ENG: "# Learning objectives\n\n- You will be familiar with some more Python features",
    CAS: "# Objetivos de aprendizaje\n\n- Estarás familiarizado con algunas características más de Python",
    EUS: "# Ikas-helburuak\n\n- Python-en ezaugarri gehiago ezagutuko dituzu"
  }
};

const moreFeaturesContent = {
  type: "markdown",
  content: {
    ENG: "To finish off this course, here you will find various useful Python features...",
    CAS: "Para terminar este curso, aquí encontrarás varias características útiles de Python...",
    EUS: "Ikastaro hau amaitzeko, hemen Python-en hainbat ezaugarri erabilgarri aurkituko dituzu..."
  }
};

const exerciseOwnLanguage = {
  type: "exercise",
  exerciseId: "part07-18_own_programming_language",
  title: {
    ENG: "Your own programming language",
    CAS: "Tu propio lenguaje de programación",
    EUS: "Zure programazio lengoaia"
  },
  description: {
    ENG: "Write a function `run(program)` that executes commands: PRINT, MOV, ADD, SUB, MUL, JUMP, IF...JUMP, END.",
    CAS: "Escribe una función `run(program)` que ejecute comandos: PRINT, MOV, ADD, SUB, MUL, JUMP, IF...JUMP, END.",
    EUS: "Idatzi `run(program)` funtzioa komando hauek exekutatzeko: PRINT, MOV, ADD, SUB, MUL, JUMP, IF...JUMP, END."
  },
  initialCode: {
    ENG: "def run(program): pass",
    CAS: "def run(program): pass",
    EUS: "def run(program): pass"
  },
  testCode: [
    "import unittest",
    "from unittest.mock import patch",
    "class TestOwnLang(unittest.TestCase):",
    "    def test_run(self):",
    "        prog = ['MOV A 1', 'MOV B 2', 'ADD A B', 'PRINT A']",
    "        # Result should be 3",
    "        with patch('builtins.print') as mock_print:",
    "            run(prog)",
    "            mock_print.assert_called_with(3)",
    "            if mock_print.call_count != 1:",
    "                self.fail('Should output exactly once | Debería imprimir exactamente una vez | Behin bakarrik inprimatu beharko luke')"
  ].join("\n")
};

const section6 = {
  id: "part7-6",
  title: {
    ENG: "More Python features",
    CAS: "Más características de Python",
    EUS: "Python ezaugarri gehiago"
  },
  blocks: [
    learningObjectives,
    moreFeaturesContent,
    exerciseOwnLanguage
  ]
};

const outputPath = path.join(__dirname, '../src/data/part7/section6.json');
fs.writeFileSync(outputPath, JSON.stringify(section6, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);