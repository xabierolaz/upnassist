import { CoursePage } from '../mooc-exercises';

export const section3: CoursePage = {
  id: "part-1-3",
  title: "3. More about variables",
  blocks: [
    { type: 'markdown', content: "# More about variables\n\nVariables are needed for various purposes in programming." },
    { type: 'markdown', content: "## Changing the value of a variable\n\nThe value stored in a variable can change." },
    {
        type: 'exercise',
        exerciseId: 'part01-10b_extra_space',
        title: 'Extra space',
        description: `Please fix the code so that the printout looks right. Notice especially how the comma notation in the print command automatically inserts a space.`, 
        initialCode: `name = "Tim Tester"\nage = 20\nskill1 = "python"\nlevel1 = "beginner"\nskill2 = "java"\nlevel2 = "veteran"\nskill3 = "programming"\nlevel3 = "semiprofessional"\nlower = 2000\nupper = 3000\n\nprint("my name is ", name, " , I am ", age, "years old")\nprint("my skills are")\nprint("- ", skill1, " (", level1, ")")\nprint("- ", skill2, " (", level2, ")")\nprint("- ", skill3, " (", level3, " )")\nprint("I am looking for a job with a salary of", lower, "-", upper, "euros per month")`,
        testCode: `import unittest\nclass TestSpace(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        \n        # Check specific common errors\n        if "my name is  Tim Tester" in out:\n            self.fail("❌ Hay un espacio extra antes del nombre 'Tim Tester'. Recuerda que la coma añade un espacio automáticamente.")\n        \n        if "( beginner )" in out:\n             self.fail("❌ Hay un espacio extra dentro del paréntesis de nivel.")\n             \n        if "2000 - 3000" in out:\n             self.fail("❌ Hay espacios extra alrededor del guión de salario.")\n\n        self.assertIn("my name is Tim Tester, I am 20 years old", out)\n        self.assertIn("- python (beginner)", out)\n        self.assertIn("salary of 2000-3000 euros", out)`
    },
    { type: 'markdown', content: `## Integers\n\nIntegers are numbers without a decimal part.` },
    { type: 'markdown', content: `## Floating point numbers\n\nNumbers with decimals.` },
    {
        type: 'exercise',
        exerciseId: 'part01-11_arithmetics',
        title: 'Arithmetics',
        description: `Complete the program to print arithmetic results.`, 
        initialCode: `x = 27\ny = 15\n# Write your code here\n`,
        testCode: `import unittest\nclass TestArith(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        if "42" in out and "27 + 15 = 42" not in out:\n            self.fail("❌ Debes imprimir la operación completa (ej: '27 + 15 = 42'), no solo el resultado.")\n        \n        self.assertIn("27 + 15 = 42", out)\n        self.assertIn("27 / 15 = 1.8", out)`
    },
    {
        type: 'exercise',
        exerciseId: 'part01-12_print_a_single_line',
        title: 'Fix the code: Print a single line',
        description: `Please fix this program so that the entire calculation, complete with result, is printed out on a single line.`, 
        initialCode: `print(5)\nprint(" + ")\nprint(8)\nprint(" - ")\nprint(4)\nprint(" = ")\nprint(5 + 8 - 4)`,
        testCode: `import unittest\nclass TestSingle(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        if "\\n" in out.strip():\n             self.fail("❌ La salida debe estar en una sola línea. Usa el argumento end='' en la función print.")\n        \n        self.assertIn("5 + 8 - 4 = 9", out)`
    }
  ]
};