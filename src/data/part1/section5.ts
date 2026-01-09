import { CoursePage } from '../mooc-exercises';

export const section5: CoursePage = {
  id: "part-1-5",
  title: "5. Conditional statements",
  blocks: [
    { type: 'markdown', content: "# Conditional statements\n\nUsing `if` to control flow.\n\n![Conditional Logic](/assets/mooc/part-1/1_5_1.png)\n\nIn a conditional statement the keyword `if` is followed by a condition." },
    {
      type: 'exercise',
      exerciseId: 'part01-21_orwell',
      title: 'Orwell',
      description: `Print 'Orwell' if the number is exactly 1984.`, 
      initialCode: "# Write code here\n",
      testCode: `import unittest\nclass TestOrwell(unittest.TestCase):\n    def test_1984(self):\n        self.assertIn('Orwell', run_student_code(inputs=['1984']))\n    def test_2020(self):\n        out = run_student_code(inputs=['2020'])\n        if \"Orwell\" in out:\n             self.fail(\"❌ El programa imprimió 'Orwell' para el año 2020. Solo debe hacerlo para 1984.")`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-22_absolute_value',
      title: 'Absolute value',
      description: `Please write a program which asks the user for an integer number. If the number is less than zero, print out the number multiplied by -1.`, 
      initialCode: "# Write your code here\n",
      testCode: `import unittest\nclass TestAbs(unittest.TestCase):\n    def test_neg(self):\n        out = run_student_code(inputs=['-7'])\n        if \"-7\" in out and \"7\" not in out:\n             self.fail(\"❌ Imprimiste -7. El valor absoluto debe ser positivo (7).")\n        self.assertIn('7', out)`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-23_soup_or_no_soup',
      title: 'Soup or no soup',
      description: `Please write a program which asks for the user's name. If the name is anything but 'Jerry', ask for portions and print total cost.`, 
      initialCode: "# Write your code here\n",
      testCode: `import unittest\nclass TestSoup(unittest.TestCase):\n    def test_kramer(self):\n        out = run_student_code(inputs=['Kramer', '2'])\n        self.assertIn('11.8', out)\n    def test_jerry(self):\n        # Jerry no debe preguntar por porciones\n        try:\n            out = run_student_code(inputs=['Jerry'])\n        except StopIteration:\n             self.fail(\"❌ El programa pidió un input extra (porciones) a Jerry. Jerry no come sopa.")\n        \n        self.assertNotIn(\"cost\", out)`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-24_order_of_magnitude',
      title: 'Order of magnitude',
      description: `Please write a program which asks the user for an integer number. The program should then print out the magnitude of the number.`, 
      initialCode: "# Write your code here\n",
      testCode: `import unittest\nclass TestMag(unittest.TestCase):\n    def test_950(self):\n        out = run_student_code(inputs=['950'])\n        self.assertIn('smaller than 1000', out)\n        if \"smaller than 100\" in out:\n             self.fail(\"❌ 950 NO es menor que 100.")`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-25_calculator',
      title: 'Calculator',
      description: `Please write a program which asks the user for two numbers and an operation.`, 
      initialCode: "# Write your code here\n",
      testCode: `import unittest\nclass TestCalc(unittest.TestCase):\n    def test_add(self):\n        out = run_student_code(inputs=['10', '17', 'add'])\n        if \"27\" not in out: self.fail(\"❌ Suma incorrecta.")\n    def test_sub(self):\n        out = run_student_code(inputs=['4', '6', 'subtract'])\n        if \"-2\" not in out: self.fail(\"❌ Resta incorrecta.")`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-26_temperatures',
      title: 'Temperatures',
      description: `Please write a program which asks the user for a temperature in degrees Fahrenheit, and then prints out the same in degrees Celsius.`, 
      initialCode: "# Write your code here\n",
      testCode: `import unittest\nclass TestTemp(unittest.TestCase):\n    def test_101(self):\n        out = run_student_code(inputs=['101'])\n        self.assertIn('38.3', out)\n    def test_21(self):\n        out = run_student_code(inputs=['21'])\n        if \"Brr\" not in out:\n             self.fail(\"❌ Faltó imprimir 'Brr! It's cold in here!' para temperaturas bajo cero.")`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-27_daily_wages',
      title: 'Daily wages',
      description: `Please write a program which asks for the hourly wage, hours worked, and the day of the week. Sundays pay double.`, 
      initialCode: "# Write your code here\n",
      testCode: `import unittest\nclass TestWage(unittest.TestCase):\n    def test_mon(self):\n        out = run_student_code(inputs=['8.5', '3', 'Monday'])\n        self.assertIn('25.5', out)\n    def test_sun(self):\n        out = run_student_code(inputs=['12.5', '10', 'Sunday'])\n        if \"125\" in out:\n             self.fail(\"❌ No aplicaste el pago doble de los domingos.")\n        self.assertIn('250.0', out)`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-28_loyalty_bonus',
      title: 'Loyalty bonus',
      description: `Fix the bonus calculation.`, 
      initialCode: `points = int(input("Points: "))\nif points < 100:\n    points *= 1.1\n    print("Bonus 10%")\nif points >= 100:\n    points *= 1.15\n    print("Bonus 15%")`,
      testCode: `import unittest\nclass TestLoyalty(unittest.TestCase):\n    def test_95(self):\n        out = run_student_code(inputs=['95'])\n        if out.count('Bonus') > 1:\n             self.fail(\"❌ Tu programa imprimió el bono DOS veces (error lógico).")\n        self.assertTrue(out.count('Bonus') == 1)`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-29_what_to_wear_tomorrow',
      title: 'What to wear tomorrow',
      description: `Please write a program which asks for tomorrow's weather forecast and then suggests weather-appropriate clothing.`, 
      initialCode: "# Write your code here\n",
      testCode: `import unittest\nclass TestWear(unittest.TestCase):\n    def test_21_no(self):\n        out = run_student_code(inputs=['21', 'no'])\n        self.assertIn('Wear jeans', out)\n        if \"jumper\" in out: self.fail(\"❌ Con 21 grados no hace falta jumper.")`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-30_quadratic_formula',
      title: 'Solving a quadratic equation',
      description: `Please write a program for solving a quadratic equation of the form ax²+bx+c.`, 
      initialCode: "# Write your code here\nfrom math import sqrt\n",
      testCode: `import unittest\nclass TestQuad(unittest.TestCase):\n    def test_roots(self):\n        out = run_student_code(inputs=['1', '2', '-8'])\n        self.assertIn('2.0', out)\n        self.assertIn('-4.0', out)`
    }
  ]
};
