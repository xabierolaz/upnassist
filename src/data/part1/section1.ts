import { CoursePage } from '../mooc-exercises';

export const section1: CoursePage = {
  id: "part-1-1",
  title: "1. Getting Started",
  blocks: [
    { type: 'markdown', content: "# Getting started\n\nAfter this section:\n- You will have written and executed your first Python program\n- You will know how to use the print command\n\nLet's begin programming by getting familiar with the `print` command." },
    { type: 'markdown', content: "```python\nprint(\"Hi there!\")\n```" },
    {
      type: 'exercise',
      exerciseId: 'part01-01_emoticon',
      title: 'Emoticon',
      description: `Please write a program which prints out an emoticon: :-)`, 
      initialCode: "# Write your code here\n", 
      testCode: "import unittest\nimport sys\nclass TestEmoticon(unittest.TestCase):\n    def test_output(self):\n        output = run_student_code()\n        self.assertEqual(output.strip(), ':-)')"
    },
    { type: 'markdown', content: "## A program of multiple commands\n\nMultiple commands written in succession will be executed in order from first to last." },
    {
      type: 'exercise',
      exerciseId: 'part01-02_seven_brothers',
      title: 'Fix the code: Seven Brothers',
      description: `"Seitsemän veljestä" is one of the first novels ever written in Finnish. It is the story of seven orphaned brothers learning to make their way in the world. Fix the program so that the names are printed in alphabetical order.`, 
      initialCode: "print(\"Simeoni\")\nprint(\"Juhani\")\nprint(\"Eero\")\nprint(\"Lauri\")\nprint(\"Aapo\")\nprint(\"Tuomas\")\nprint(\"Timo\")",
      testCode: "import unittest\nclass TestSeven(unittest.TestCase):\n    def test_order(self):\n        output = [l.strip() for l in run_student_code().split('\\n') if l]\n        expected = ['Aapo', 'Eero', 'Juhani', 'Lauri', 'Simeoni', 'Timo', 'Tuomas']\n        if len(output) != 7:\n            self.fail(f\"❌ Esperaba 7 nombres, pero tu programa imprimió {len(output)}.\")\n        for i, (got, want) in enumerate(zip(output, expected)):\n            if got != want:\n                self.fail(f\"❌ Error en la línea {i+1}. Esperaba '{want}', pero encontré '{got}'. Recuerda: Orden alfabético.\")"
    },
    {
      type: 'exercise',
      exerciseId: 'part01-03_row_your_boat',
      title: 'Row, Row, Row Your Boat',
      description: `Please write a program which prints out the following lines exactly as they are written here:\n\nRow, row, row your boat,\nGently down the stream.\nMerrily, merrily, merrily, merrily,\nLife is but a dream.`, 
      initialCode: "# Write your code here\n", 
      testCode: "import unittest\nclass TestRow(unittest.TestCase):\n    def test_pass(self):\n        output = run_student_code().strip().split('\\n')\n        expected = [\"Row, row, row your boat,\", \"Gently down the stream.\", \"Merrily, merrily, merrily, merrily,\", \"Life is but a dream.\"]\n        if len(output) < 4:\n             self.fail(\"❌ Faltan líneas. Asegúrate de imprimir las 4 líneas del poema.\")\n        for i, (got, want) in enumerate(zip(output, expected)):\n            if got.strip() != want:\n                self.fail(f\"❌ Error en la línea {i+1}.\\nEsperaba: '{want}'\\nRecibí:   '{got}'\\n💡 Revisa mayúsculas y puntuación (comas/puntos).\")"
    },
    { type: 'markdown', content: "## Arithmetic operations\n\nYou can also put arithmetic operations inside a `print` command." },
    {
      type: 'exercise',
      exerciseId: 'part01-04_minutes_in_a_year',
      title: 'Minutes in a year',
      description: "Please write a program which prints out the number of minutes in a year. Use Python code to perform the calculation.", 
      initialCode: "print(\"Minutes in a year:\")\n", 
      testCode: "import unittest\nclass TestMin(unittest.TestCase):\n    def test_calc(self):\n        out = run_student_code()\n        if \"525600\" not in out:\n            self.fail(\"❌ No encontré el resultado correcto (525600). ¿Multiplicaste 365 * 24 * 60?\")\n        if \"525600\" in STUDENT_CODE:\n             self.fail(\"⚠️ Advertencia: Parece que escribiste el número directamente. El ejercicio pide que Python haga el cálculo (ej: print(365 * ...))\")"
    },
    { type: 'markdown', content: "## Commenting\n\nAny line beginning with the pound sign `#` is a comment." },
    {
      type: 'exercise',
      exerciseId: 'part01-05_print_code',
      title: 'Print some code',
      description: "Please write a program which prints out the following: print(\"Hello there!\")", 
      initialCode: "# Write your code here\n", 
      testCode: "import unittest\nclass TestP(unittest.TestCase):\n    def test_pass(self):\n        out = run_student_code().strip()\n        expected = 'print(\"Hello there!\")'\n        if out != expected:\n            self.fail(f\"❌ Resultado incorrecto.\\nEsperaba: {expected}\\nRecibí:   {out}\\n💡 Pista: Para imprimir comillas dobles, envuelve tu string en comillas simples: print('...\")"
    }
  ]
};
