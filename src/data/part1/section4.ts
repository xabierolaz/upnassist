import { CoursePage } from '../mooc-exercises';

export const section4: CoursePage = {
  id: "part-1-4",
  title: "4. Arithmetic operations",
  blocks: [
    { type: 'markdown', content: "# Arithmetic operations\n\nPython supports +, -, *, /, //, %, **.\n\n### Operands, operators and data types\n\nA calculation usually consists of *operands* and *operators*:\n\n![Operands and Operators](/assets/mooc/part-1/1_4_1.png)\n\nThe data type of an operand usually determines the data type of the result." },
    {
      type: 'exercise',
      exerciseId: 'part01-13_times_five',
      title: 'Times five',
      description: "Please write a program which asks the user for a number. The program then prints out the number multiplied by five.",
      initialCode: "# Write code here\n",
      testCode: "import unittest\nclass TestFive(unittest.TestCase):\n    def test_3(self):\n        out = run_student_code(inputs=['3'])\n        if \"33333\" in out:\n            self.fail(\"❌ Has repetido el string '3' cinco veces. Recuerda convertir el input a entero con int().\")\n        self.assertIn('15', out)"
    },
    {
      type: 'exercise',
      exerciseId: 'part01-14_name_and_age',
      title: 'Name and age',
      description: "Please write a program which asks the user for their name and year of birth. The program then prints out their age at the end of 2021.",
      initialCode: "# Write your code here\n",
      testCode: "import unittest\nclass TestNameAge(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['Frances', '1990'])\n        self.assertIn('Frances', out)\n        if \"31\" not in out:\n             self.fail(\"❌ Cálculo de edad incorrecto. Para 1990, la edad debería ser 31.\")\n        self.assertIn('31', out)"
    },
    { type: 'markdown', content: "## Using variables\n\nStoring sums in variables..." },
    {
      type: 'exercise',
      exerciseId: 'part01-15_seconds_in_a_day',
      title: 'Seconds in a day',
      description: "Please write a program which asks the user for a number of days. The program then prints out the number of seconds in that many days.",
      initialCode: "# Write your code here\n",
      testCode: "import unittest\nclass TestSec(unittest.TestCase):\n    def test_1(self):\n        out = run_student_code(inputs=['1'])\n        self.assertIn('86400', out)\n    def test_2(self):\n        out = run_student_code(inputs=['2'])\n        if \"172800\" not in out:\n             self.fail(\"❌ Cálculo incorrecto para 2 días. Recuerda: 2 * 24 * 60 * 60.\")"
    },
    {
      type: 'exercise',
      exerciseId: 'part01-16_product',
      title: 'Fix the code: Product',
      description: "This program asks the user for three numbers. The program then prints out their product. There is something wrong with the program. Please fix it.",
      initialCode: "number = int(input(\"Please type in the first number: \"))\nnumber = int(input(\"Please type in the second number: \"))\nnumber = int(input(\"Please type in the third number: \"))\n\nproduct = number * number * number\n\nprint(\"The product is\", product)",
      testCode: "import unittest\nclass TestProd(unittest.TestCase):\n    def test_prod(self):\n        out = run_student_code(inputs=['2','3','5'])\n        if \"125\" in out:\n             self.fail(\"❌ Tu programa está multiplicando el último número por sí mismo 3 veces. Debes multiplicar los tres números DISTINTOS.\")\n        self.assertIn('30', out)"
    },
    {
      type: 'exercise',
      exerciseId: 'part01-17_sum_and_product',
      title: 'Sum and product',
      description: "Please write a program which asks the user for two numbers. The program will then print out the sum and the product of the two numbers.",
      initialCode: "# Write your code here\n",
      testCode: "import unittest\nclass TestSumProd(unittest.TestCase):\n    def test_calc(self):\n        out = run_student_code(inputs=['3','7'])\n        self.assertIn('10', out)\n        self.assertIn('21', out)"
    },
    {
      type: 'exercise',
      exerciseId: 'part01-18_sum_and_mean',
      title: 'Sum and mean',
      description: "Please write a program which asks the user for four numbers. The program then prints out the sum and the mean of the numbers.",
      initialCode: "# Write your code here\n",
      testCode: "import unittest\nclass TestSumMean(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['2','1','6','7'])\n        if \"16\" not in out: self.fail(\"❌ Suma incorrecta.\")\n        if \"4.0\" not in out: self.fail(\"❌ Promedio incorrecto. (16 / 4 = 4.0).\")"
    },
    {
      type: 'exercise',
      exerciseId: 'part01-19_food_expenditure',
      title: 'Food expenditure',
      description: "Please write a program which estimates a user's typical food expenditure.",
      initialCode: "# Write your code here\n",
      testCode: "import unittest\nclass TestFood(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['4','2.5','28.5'])\n        if \"5.5\" not in out: self.fail(\"❌ Gasto diario incorrecto.\")\n        if \"38.5\" not in out: self.fail(\"❌ Gasto semanal incorrecto.\")"
    },
    {
      type: 'exercise',
      exerciseId: 'part01-20_students_in_groups',
      title: 'Students in groups',
      description: "Please write a program which asks for the number of students on a course and the desired group size. The program will then print out the number of groups formed.",
      initialCode: "# Write your code here\n",
      testCode: "import unittest\nclass TestGroups(unittest.TestCase):\n    def test_11_3(self):\n        out = run_student_code(inputs=['11','3'])\n        if \"3\" in out and \"4\" not in out:\n             self.fail(\"❌ Resultado incorrecto: 3. Recuerda que si sobran alumnos, se necesita un grupo extra.\")\n        self.assertIn('4', out)"
    }
  ]
};