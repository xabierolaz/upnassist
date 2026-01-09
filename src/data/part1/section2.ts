import { CoursePage } from '../mooc-exercises';

export const section2: CoursePage = {
  id: "part-1-2",
  title: "2. Information from the user",
  blocks: [
    { type: 'markdown', content: "# Information from the user\n\nInput refers to any information a user gives to the program. Specifically, the Python command `input` reads in a line of input typed in by the user.\n\n```python\nname = input(\"What is your name? \")\nprint(\"Hi there, \" + name)\n```" },
    {
        type: 'exercise',
        exerciseId: 'part01-06_name_twice',
        title: 'Name twice',
        description: "Please write a program which asks for the user's name and then prints it twice, on two consecutive lines.",
        initialCode: "# Write your code here\n",
        testCode: "import unittest\nclass TestNameTwice(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['Paul']).strip().split('\n')\n        clean_out = [l for l in out if 'Paul' in l]\n        if len(clean_out) < 2:\n            self.fail(\"❌ Debes imprimir el nombre dos veces.\")\n        if clean_out[0] == clean_out[1] and \"Paul\" in clean_out[0]:\n            pass\n        else:\n            self.fail(\"❌ Asegúrate de imprimir el nombre tal cual se ingresó, dos veces.\")"
    },
    { type: 'markdown', content: "## Referencing a variable\n\nA single variable can be referred to many times in a program." },
    {
        type: 'exercise',
        exerciseId: 'part01-07_name_and_exclamation_marks',
        title: 'Name and exclamation marks',
        description: "Please write a program which asks for the user's name and then prints it out twice on a single line so that there is an exclamation mark at the beginning of the line, another between the two names and a third one at the end of the line.",
        initialCode: "# Write your code here\n",
        testCode: "import unittest\nclass TestExcl(unittest.TestCase):\n    def test_paul(self):\n        out = run_student_code(inputs=['Paul'])\n        expected = \"!Paul!Paul!\"\n        if expected not in out:\n            self.fail(f\"❌ Esperaba '{expected}', pero no lo encontré en tu salida.\\n💡 Revisa los espacios. No debería haber espacios entre los signos de exclamación y el nombre.\")"
    },
    { type: 'markdown', content: "## More than one input\n\nA program can ask for more than one input." },
    {
        type: 'exercise',
        exerciseId: 'part01-08_name_and_address',
        title: 'Name and address',
        description: "Please write a program which asks for the user's name and address. The program should also print out the given information.",
        initialCode: "# Write your code here\n",
        testCode: "import unittest\nclass TestAddr(unittest.TestCase):\n    def test_steve(self):\n        out = run_student_code(inputs=['Steve', 'Sanders', '91 Station Road', 'London'])\n        if \"Steve Sanders\" not in out:\n            self.fail(\"❌ No encontré el nombre completo 'Steve Sanders' en la salida.\")\n        if \"91 Station Road\" not in out:\n            self.fail(\"❌ No encontré la dirección '91 Station Road'.\")\n        if \"London\" not in out:\n            self.fail(\"❌ No encontré la ciudad 'London'.\")"
    },
    {
        type: 'exercise',
        exerciseId: 'part01-09_utterances',
        title: 'Fix the code: Utterances',
        description: "Here is a program which should ask for three utterances and print them out. However, there is something wrong with the code below. Please fix it.",
        initialCode: "part1 = input(\"The 1st part: \")\npart2 = input(\"The 1st part: \")\npart3 = input(\"The 1st part: \")\nprint(part1 + part2 + part3)",
        testCode: "import unittest\nclass TestUtter(unittest.TestCase):\n    def test_parts(self):\n        out = run_student_code(inputs=['hickory', 'dickory', 'dock'])\n        if \"hickory-dickory-dock!\" in out:\n            pass\n        elif \"hickorydickorydock\" in out:\n             self.fail(\"❌ Falta el guión '-' entre las palabras.\")\n        else:\n             self.fail(\"❌ Esperaba 'hickory-dickory-dock!', pero tu salida fue diferente.\")"
    },
    {
        type: 'exercise',
        exerciseId: 'part01-10_story',
        title: 'Story',
        description: "Please write a program which prints out the following story. The user gives a name and a year.",
        initialCode: "# Write your code here\n",
        testCode: "import unittest\nclass TestStory(unittest.TestCase):\n    def test_mary(self):\n        out = run_student_code(inputs=['Mary', '1572'])\n        if \"Mary is a valiant knight\" not in out:\n            self.fail(\"❌ La primera frase no coincide. Verifica espacios y mayúsculas.\")\n        if \"born in the year 1572\" not in out:\n            self.fail(\"❌ Verifica la parte del año. ¿Quizás falta un espacio antes de 1572?\")"
    }
  ]
};
