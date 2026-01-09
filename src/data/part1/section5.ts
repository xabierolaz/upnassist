import { CoursePage } from '../mooc-exercises';

export const section5: CoursePage = {
  id: "part-1-5",
  title: {
    ENG: "5. Conditional statements",
    CAS: "5. Sentencias condicionales",
    EUS: "5. Baldintzazko sententziak"
  },
  blocks: [
    {
        type: 'markdown',
        content: {
            ENG: "# Conditional statements\n\nUsing `if` to control flow.\n\n![Conditional Logic](/assets/mooc/part-1/1_5_1.png)\n\nIn a conditional statement the keyword `if` is followed by a condition.",
            CAS: "# Sentencias condicionales\n\nUsando `if` para controlar el flujo.\n\n![Lógica Condicional](/assets/mooc/part-1/1_5_1.png)\n\nEn una sentencia condicional, la palabra clave `if` va seguida de una condición.",
            EUS: "# Baldintzazko sententziak\n\n`if` erabiltzen fluxua kontrolatzeko.\n\n![Lógica Condicional](/assets/mooc/part-1/1_5_1.png)\n\nBaldintzazko sententzia batean, `if` gako-hitzaren ondoren baldintza bat dator."
        }
    },
    {
      type: 'exercise',
      exerciseId: 'part01-21_orwell',
      title: {
          ENG: 'Orwell',
          CAS: 'Orwell',
          EUS: 'Orwell'
      },
      description: {
          ENG: `Print 'Orwell' if the number is exactly 1984.`,
          CAS: `Imprime 'Orwell' si el número es exactamente 1984.`,
          EUS: `Inprimatu 'Orwell' zenbakia zehazki 1984 bada.`
      },
      initialCode: "# Write code here\n",
      testCode: `import unittest\nclass TestOrwell(unittest.TestCase):\n    def test_1984(self):\n        self.assertIn('Orwell', run_student_code(inputs=['1984']))\n    def test_2020(self):\n        out = run_student_code(inputs=['2020'])\n        if "Orwell" in out:\n             self.fail(\"❌ El programa imprimió 'Orwell' para el año 2020. Solo debe hacerlo para 1984.")`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-22_absolute_value',
      title: {
          ENG: 'Absolute value',
          CAS: 'Valor absoluto',
          EUS: 'Balio absolutua'
      },
      description: {
          ENG: `Please write a program which asks the user for an integer number. If the number is less than zero, print out the number multiplied by -1.`,
          CAS: `Escribe un programa que pida un número entero. Si el número es menor que cero, imprime el número multiplicado por -1.`,
          EUS: `Idatzi programa bat zenbaki oso bat eskatzen duena. Zenbakia zero baino txikiagoa bada, inprimatu zenbakia -1ekin biderkatuta.`
      },
      initialCode: "# Write your code here\n",
      testCode: `import unittest\nclass TestAbs(unittest.TestCase):\n    def test_neg(self):\n        out = run_student_code(inputs=['-7'])\n        if \"-7\" in out and \"7\" not in out:\n             self.fail(\"❌ Imprimiste -7. El valor absoluto debe ser positivo (7).")\n        self.assertIn('7', out)`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-23_soup_or_no_soup',
      title: {
          ENG: 'Soup or no soup',
          CAS: 'Sopa o no sopa',
          EUS: 'Zopa edo zopa ez'
      },
      description: {
          ENG: `Please write a program which asks for the user's name. If the name is anything but 'Jerry', ask for portions and print total cost.`,
          CAS: `Escribe un programa que pida el nombre. Si el nombre es cualquier cosa excepto 'Jerry', pide las porciones e imprime el coste total.`,
          EUS: `Idatzi programa bat izena eskatzen duena. Izena 'Jerry' ez den beste edozein bada, eskatu zatiak eta inprimatu kostu totala.`
      },
      initialCode: "# Write your code here\n",
      testCode: `import unittest\nclass TestSoup(unittest.TestCase):\n    def test_kramer(self):\n        out = run_student_code(inputs=['Kramer', '2'])\n        self.assertIn('11.8', out)\n    def test_jerry(self):\n        # Jerry no debe preguntar por porciones\n        try:\n            out = run_student_code(inputs=['Jerry'])\n        except StopIteration:\n             self.fail(\"❌ El programa pidió un input extra (porciones) a Jerry. Jerry no come sopa.\")\n        \n        self.assertNotIn(\"cost\", out)`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-24_order_of_magnitude',
      title: {
          ENG: 'Order of magnitude',
          CAS: 'Orden de magnitud',
          EUS: 'Magnitude ordena'
      },
      description: {
          ENG: `Please write a program which asks the user for an integer number. The program should then print out the magnitude of the number.`,
          CAS: `Escribe un programa que pida un número entero. El programa debe imprimir la magnitud del número (si es menor que 1000, 100, 10).`,
          EUS: `Idatzi programa bat zenbaki oso bat eskatzen duena. Programak zenbakiaren magnitudea inprimatu behar du.`
      },
      initialCode: "# Write your code here\n",
      testCode: `import unittest\nclass TestMag(unittest.TestCase):\n    def test_950(self):\n        out = run_student_code(inputs=['950'])\n        self.assertIn('smaller than 1000', out)\n        if \"smaller than 100\" in out:\n             self.fail(\"❌ 950 NO es menor que 100.")`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-25_calculator',
      title: {
          ENG: 'Calculator',
          CAS: 'Calculadora',
          EUS: 'Kalkulagailua'
      },
      description: {
          ENG: `Please write a program which asks the user for two numbers and an operation.`,
          CAS: `Escribe un programa que pida dos números y una operación (suma, resta...).`,
          EUS: `Idatzi programa bat bi zenbaki eta eragiketa bat eskatzen dituena.`
      },
      initialCode: "# Write your code here\n",
      testCode: `import unittest\nclass TestCalc(unittest.TestCase):\n    def test_add(self):\n        out = run_student_code(inputs=['10', '17', 'add'])\n        if \"27\" not in out: self.fail(\"❌ Suma incorrecta.")\n    def test_sub(self):\n        out = run_student_code(inputs=['4', '6', 'subtract'])\n        if \"-2\" not in out: self.fail(\"❌ Resta incorrecta.")`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-26_temperatures',
      title: {
          ENG: 'Temperatures',
          CAS: 'Temperaturas',
          EUS: 'Tenperaturak'
      },
      description: {
          ENG: `Please write a program which asks the user for a temperature in degrees Fahrenheit, and then prints out the same in degrees Celsius.`,
          CAS: `Escribe un programa que pida una temperatura en Fahrenheit e imprima su equivalente en Celsius.`,
          EUS: `Idatzi programa bat tenperatura bat Fahrenheit gradutan eskatzen duena eta Celsius gradutan inprimatzen duena.`
      },
      initialCode: "# Write your code here\n",
      testCode: `import unittest\nclass TestTemp(unittest.TestCase):\n    def test_101(self):\n        out = run_student_code(inputs=['101'])\n        self.assertIn('38.3', out)\n    def test_21(self):\n        out = run_student_code(inputs=['21'])\n        if \"Brr\" not in out:\n             self.fail(\"❌ Faltó imprimir 'Brr! It's cold in here!' para temperaturas bajo cero.")`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-27_daily_wages',
      title: {
          ENG: 'Daily wages',
          CAS: 'Salario diario',
          EUS: 'Eguneko soldata'
      },
      description: {
          ENG: `Please write a program which asks for the hourly wage, hours worked, and the day of the week. Sundays pay double.`,
          CAS: `Escribe un programa que pida el salario por hora, horas trabajadas y día de la semana. Los domingos se paga doble.`,
          EUS: `Idatzi programa bat orduko soldata, lan egindako orduak eta asteko eguna eskatzen dituena. Igandeetan bikoitza ordaintzen da.`
      },
      initialCode: "# Write your code here\n",
      testCode: `import unittest\nclass TestWage(unittest.TestCase):\n    def test_mon(self):\n        out = run_student_code(inputs=['8.5', '3', 'Monday'])\n        self.assertIn('25.5', out)\n    def test_sun(self):\n        out = run_student_code(inputs=['12.5', '10', 'Sunday'])\n        if \"125\" in out:\n             self.fail(\"❌ No aplicaste el pago doble de los domingos.")\n        self.assertIn('250.0', out)`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-28_loyalty_bonus',
      title: {
          ENG: 'Loyalty bonus',
          CAS: 'Bono de lealtad',
          EUS: 'Leialtasun bonua'
      },
      description: {
          ENG: `Fix the bonus calculation.`,
          CAS: `Arregla el cálculo del bono.`,
          EUS: `Konpondu bonuaren kalkulua.`
      },
      initialCode: `points = int(input("Points: "))\nif points < 100:\n    points *= 1.1\n    print("Bonus 10%")\nif points >= 100:\n    points *= 1.15\n    print("Bonus 15%")`,
      testCode: `import unittest\nclass TestLoyalty(unittest.TestCase):\n    def test_95(self):\n        out = run_student_code(inputs=['95'])\n        if out.count('Bonus') > 1:\n             self.fail(\"❌ Tu programa imprimió el bono DOS veces (error lógico).")\n        self.assertTrue(out.count('Bonus') == 1)`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-29_what_to_wear_tomorrow',
      title: {
          ENG: 'What to wear tomorrow',
          CAS: 'Qué ponerse mañana',
          EUS: 'Zer jantzi bihar'
      },
      description: {
          ENG: `Please write a program which asks for tomorrow's weather forecast and then suggests weather-appropriate clothing.`,
          CAS: `Escribe un programa que pregunte la previsión del tiempo para mañana y sugiera ropa adecuada.`,
          EUS: `Idatzi programa bat biharko eguraldi iragarpena galdetzen duena eta eguraldiari dagokion arropa iradokitzen duena.`
      },
      initialCode: "# Write your code here\n",
      testCode: `import unittest\nclass TestWear(unittest.TestCase):\n    def test_21_no(self):\n        out = run_student_code(inputs=['21', 'no'])\n        self.assertIn('Wear jeans', out)\n        if \"jumper\" in out: self.fail(\"❌ Con 21 grados no hace falta jumper.")`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-30_quadratic_formula',
      title: {
          ENG: 'Solving a quadratic equation',
          CAS: 'Resolviendo una ecuación cuadrática',
          EUS: 'Ekuazio koadratiko bat ebazten'
      },
      description: {
          ENG: `Please write a program for solving a quadratic equation of the form ax²+bx+c.`,
          CAS: `Escribe un programa para resolver una ecuación cuadrática de la forma ax²+bx+c.`,
          EUS: `Idatzi programa bat ax²+bx+c formako ekuazio koadratiko bat ebazteko.`
      },
      initialCode: "# Write your code here\nfrom math import sqrt\n",
      testCode: `import unittest\nclass TestQuad(unittest.TestCase):\n    def test_roots(self):\n        out = run_student_code(inputs=['1', '2', '-8'])\n        self.assertIn('2.0', out)\n        self.assertIn('-4.0', out)`
    }
  ]
};