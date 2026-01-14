import { CoursePage } from '../mooc-exercises';

export const section4: CoursePage = {
  id: "part1-4",
  title: {
    ENG: "Arithmetic operations",
    CAS: "Operaciones aritméticas",
    EUS: "Eragiketa aritmetikoak"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\n# Arithmetic operations\n\nIn the previous sections you've seen examples with basic arithmetics. Here are the most common arithmetic operators in Python:\n\n| Operator | Purpose | Example | Result |\n| :---: | :--- | :--- | :--- |\n| `+` | Addition | `2 + 4` | `6` |\n| `-` | Subtraction | `10 - 2.5` | `7.5` |\n| `*` | Multiplication | `2 * 2` | `4` |\n| `/` | Division | `9 / 3` | `3.0` |\n| `//` | Integer division | `9 // 3` | `3` |\n| `%` | Remainder | `10 % 3` | `1` |\n| `**` | Exponentiation | `2 ** 3` | `8` |\n\n## Order of operations\n\nThe order of operations is familiar from mathematics:\n\n1. Parentheses `()`\n2. Exponentiation `**`\n3. Multiplication `*`, Division `/`, Integer division `//`, Remainder `%`\n4. Addition `+`, Subtraction `-`\n\nParentheses can be used to influence the order of execution.\n\n```python\nprint(2 + 3 * 3)\nprint((2 + 3) * 3)\n```\n\n```text\n11\n15\n```\n",
        CAS: "\n# Operaciones aritméticas\n\nEn las secciones anteriores has visto ejemplos con aritmética básica. Aquí están los operadores aritméticos más comunes en Python:\n\n| Operador | Propósito | Ejemplo | Resultado |\n| :---: | :--- | :--- | :--- |\n| `+` | Suma | `2 + 4` | `6` |\n| `-` | Resta | `10 - 2.5` | `7.5` |\n| `*` | Multiplicación | `2 * 2` | `4` |\n| `/` | División | `9 / 3` | `3.0` |\n| `//` | División entera | `9 // 3` | `3` |\n| `%` | Resto | `10 % 3` | `1` |\n| `**` | Exponenciación | `2 ** 3` | `8` |\n\n## Orden de las operaciones\n\nEl orden de las operaciones es familiar de las matemáticas:\n\n1. Paréntesis `()`\n2. Exponenciación `**`\n3. Multiplicación `*`, División `/`, División entera `//`, Resto `%`\n4. Suma `+`, Resta `-`\n\nLos paréntesis se pueden usar para influir en el orden de ejecución.\n\n```python\nprint(2 + 3 * 3)\nprint((2 + 3) * 3)\n```\n\n```text\n11\n15\n```\n",
        EUS: "\n# Eragiketa aritmetikoak\n\nAurreko ataletan oinarrizko aritmetikako adibideak ikusi dituzu. Hemen daude Python-eko eragile aritmetiko ohikoenak:\n\n| Eragilea | Helburua | Adibidea | Emaitza |\n| :---: | :--- | :--- | :--- |\n| `+` | Batuketa | `2 + 4` | `6` |\n| `-` | Kenketa | `10 - 2.5` | `7.5` |\n| `*` | Biderketa | `2 * 2` | `4` |\n| `/` | Zatiketa | `9 / 3` | `3.0` |\n| `//` | Zatiketa osoa | `9 // 3` | `3` |\n| `%` | Hondarra | `10 % 3` | `1` |\n| `**` | Berreketa | `2 ** 3` | `8` |\n\n## Eragiketen ordena\n\nEragiketen ordena matematikatik ezaguna da:\n\n1. Parentesiak `()`\n2. Berreketa `**`\n3. Biderketa `*`, Zatiketa `/`, Zatiketa osoa `//`, Hondarra `%`\n4. Batuketa `+`, Kenketa `-`\n\nParentesiak exekuzio-ordena aldatzeko erabil daitezke.\n\n```python\nprint(2 + 3 * 3)\nprint((2 + 3) * 3)\n```\n\n```text\n11\n15\n```\n"
      }
    },
    {
      type: 'markdown',
      content: {
        ENG: "\n## Operands, operators and data types\n\nThe data type of an operand usually determines the data type of the result. If two integers are added, the result is an integer.\n\nDivision `/` is an exception to this rule. Its result is a floating point number, even if the operands are integers.\n\n```python\nheight = 172.5\nweight = 68.55\n\n# BMI calculation\nbmi = weight / (height / 100) ** 2\n\nprint(f\"The BMI is {bmi}\")\n```\n\n```text\nThe BMI is 23.037177063642087\n```\n\nNotice Python also has an integer division operator `//`. The result is rounded down to the nearest integer.\n\n```python\nx = 3\ny = 2\n\nprint(f\"/ operator {x/y}\")\nprint(f\"// operator {x//y}\")\n```\n\n```text\n/ operator 1.5\n// operator 1\n```\n",
        CAS: "\n## Operandos, operadores y tipos de datos\n\nEl tipo de dato de un operando generalmente determina el tipo de dato del resultado. Si se suman dos enteros, el resultado es un entero.\n\nLa división `/` es una excepción a esta regla. Su resultado es un número de punto flotante, incluso si los operandos son enteros.\n\n```python\nheight = 172.5\nweight = 68.55\n\n# Cálculo de IMC\nbmi = weight / (height / 100) ** 2\n\nprint(f\"El IMC es {bmi}\")\n```\n\n```text\nEl IMC es 23.037177063642087\n```\n\nFíjate que Python también tiene un operador de división entera `//`. El resultado se redondea hacia abajo al entero más cercano.\n\n```python\nx = 3\ny = 2\n\nprint(f\"Operador / {x/y}\")\nprint(f\"Operador // {x//y}\")\n```\n\n```text\nOperador / 1.5\nOperador // 1\n```\n",
        EUS: "\n## Operandoak, eragileak eta datu motak\n\nOperando baten datu motak normalean emaitzaren datu mota zehazten du. Bi zenbaki oso batzen badira, emaitza zenbaki osoa da.\n\nZatiketa `/` arau honen salbuespena da. Bere emaitza koma higikorreko zenbaki bat da, nahiz eta operandoak zenbaki osoak izan.\n\n```python\nheight = 172.5\nweight = 68.55\n\n# GMI kalkulua\nbmi = weight / (height / 100) ** 2\n\nprint(f\"GMIa {bmi} da\")\n```\n\n```text\nGMIa 23.037177063642087 da\n```\n\nOhartu Pythonek zatiketa osoko eragilea `//` ere baduela. Emaitza hurbileneko zenbaki osora biribiltzen da beherantz.\n\n```python\nx = 3\ny = 2\n\nprint(f\"/ eragilea {x/y}\")\nprint(f\"// eragilea {x//y}\")\n```\n\n```text\n/ eragilea 1.5\n// eragilea 1\n```\n"
      }
    },
    {
      type: 'markdown',
      content: {
        ENG: "\n## Numbers as input\n\nWe have already used the `input` command to read in strings. A string can be converted into an integer with the function `int`.\n\n```python\ninput_str = input(\"Which year were you born? \")\nyear = int(input_str)\nprint(f\"Your age at the end of the year 2021: {2021 - year}\")\n```\n\n```text\nWhich year were you born? **1995**\nYour age at the end of the year 2021: 26\n```\n\nUsually you can do this in one go:\n\n```python\nyear = int(input(\"Which year were you born? \"))\nprint(f\"Your age at the end of the year 2021: {2021 - year}\")\n```\n\nSimilarly, a string can be converted into a floating point number with the function `float`.",
        CAS: "\n## Números como entrada\n\nYa hemos usado el comando `input` para leer cadenas. Una cadena puede convertirse en un entero con la función `int`.\n\n```python\ninput_str = input(\"¿En qué año naciste? \")\nyear = int(input_str)\nprint(f\"Tu edad al final del año 2021: {2021 - year}\")\n```\n\n```text\n¿En qué año naciste? **1995**\nTu edad al final del año 2021: 26\n```\n\nNormalmente puedes hacer esto de una sola vez:\n\n```python\nyear = int(input(\"¿En qué año naciste? \"))\nprint(f\"Tu edad al final del año 2021: {2021 - year}\")\n```\n\nDe manera similar, una cadena puede convertirse en un número de punto flotante con la función `float`.",
        EUS: "\n## Zenbakiak sarrera gisa\n\nDagoeneko erabili dugu `input` komandoa kateak irakurtzeko. Kate bat zenbaki oso bihurtu daiteke `int` funtzioarekin.\n\n```python\ninput_str = input(\"Zein urtetan jaio zinen? \")\nyear = int(input_str)\nprint(f\"Zure adina 2021 amaieran: {2021 - year}\")\n```\n\n```text\nZein urtetan jaio zinen? **1995**\nZure adina 2021 amaieran: 26\n```\n\nNormalean hau kolpe batean egin dezakezu:\n\n```python\nyear = int(input(\"Zein urtetan jaio zinen? \"))\nprint(f\"Zure adina 2021 amaieran: {2021 - year}\")\n```\n\nEra berean, kate bat koma higikorreko zenbaki bihurtu daiteke `float` funtzioarekin.\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part01-13_times_five',
      title: {
          ENG: 'Times five',
          CAS: 'Por cinco',
          EUS: 'Bost aldiz'
      },
      description: {
          ENG: "Please write a program which asks the user for a number. The program then prints out the number multiplied by five.",
          CAS: "Por favor, escribe un programa que pida un número al usuario. El programa debe imprimir el número multiplicado por cinco.",
          EUS: "Idatzi programa bat erabiltzaileari zenbaki bat eskatzen diona. Programak zenbakia bostez biderkatuta inprimatu behar du."
      },
      initialCode: "# Write your solution here\n",
      testCode: "import unittest\nclass TestTimesFive(unittest.TestCase):\n    def test_run(self):\n        output = run_student_code(inputs=['3'])\n        if \"33333\" in output:\n             self.fail(\"It seems you are printing the string repeated 5 times. Remember to convert input to integer. \")\n        self.assertIn(\"15\", output)"
    }
    {
      type: 'exercise',
      exerciseId: 'part01-14_name_and_age',
      title: {
          ENG: 'Name and age',
          CAS: 'Nombre y edad',
          EUS: 'Izena eta adina'
      },
      description: {
          ENG: "Please write a program which asks the user for their name and year of birth. The program then prints out their age at the end of 2021.",
          CAS: "Por favor, escribe un programa que pida el nombre y año de nacimiento. Debe imprimir su edad al final de 2021.",
          EUS: "Idatzi programa bat izena eta jaiotze urtea eskatzen dituena. Gero 2021 amaieran izango duen adina inprimatu behar du."
      },
      initialCode: "# Write your solution here\n",
      testCode: "import unittest\nclass TestNameAge(unittest.TestCase):\n    def test_run(self):\n        output = run_student_code(inputs=['Frances', '1990'])\n        self.assertIn(\"Frances\", output)\n        self.assertIn(\"31\", output)"
    }
    {
      type: 'markdown',
      content: {
        ENG: "\n## Using variables\n\nLet's have a look at a program which calculates the sum of three numbers given by the user:\n\n```python\nnumber1 = int(input(\"First number: \"))\nnumber2 = int(input(\"Second number: \"))\nnumber3 = int(input(\"Third number: \"))\n\nsum = number1 + number2 + number3\nprint(f\"The sum of the numbers: {sum}\")\n```\n\n```text\nFirst number: **5**\nSecond number: **21**\nThird number: **7**\nThe sum of the numbers: 33\n```\n\nThe program uses four different variables, but two would easily suffice in this case:\n\n```python\nsum = 0\n\nnumber = int(input(\"First number: \"))\nsum = sum + number\n\nnumber = int(input(\"Second number: \"))\nsum = sum + number\n\nnumber = int(input(\"Third number: \"))\nsum = sum + number\n\nprint(f\"The sum of the numbers: {sum}\")\n```\n\nThere is a commonly used shorthand notation for increasing the value of a variable: `sum += number` is the same as `sum = sum + number`.",
        CAS: "\n## Usando variables\n\nVeamos un programa que calcula la suma de tres números dados por el usuario:\n\n```python\nnumber1 = int(input(\"Primer número: \"))\nnumber2 = int(input(\"Segundo número: \"))\nnumber3 = int(input(\"Tercer número: \"))\n\nsum = number1 + number2 + number3\nprint(f\"La suma de los números: {sum}\")\n```\n\n```text\nPrimer número: **5**\nSegundo número: **21**\nTercer número: **7**\nLa suma de los números: 33\n```\n\nEl programa usa cuatro variables diferentes, pero dos serían suficientes en este caso:\n\n```python\nsum = 0\n\nnumber = int(input(\"Primer número: \"))\nsum = sum + number\n\nnumber = int(input(\"Segundo número: \"))\nsum = sum + number\n\nnumber = int(input(\"Tercer número: \"))\nsum = sum + number\n\nprint(f\"La suma de los números: {sum}\")\n```\n\nHay una notación abreviada comúnmente utilizada para incrementar el valor de una variable: `sum += number` es lo mismo que `sum = sum + number`.",
        EUS: "\n## Aldagaiak erabiltzen\n\nIkus dezagun erabiltzaileak emandako hiru zenbakiren batuketa kalkulatzen duen programa bat:\n\n```python\nnumber1 = int(input(\"Lehenengo zenbakia: \"))\nnumber2 = int(input(\"Bigarren zenbakia: \"))\nnumber3 = int(input(\"Hirugarren zenbakia: \"))\n\nsum = number1 + number2 + number3\nprint(f\"Zenbakien batuketa: {sum}\")\n```\n\n```text\nLehenengo zenbakia: **5**\nBigarren zenbakia: **21**\nHirugarren zenbakia: **7**\nZenbakien batuketa: 33\n```\n\nProgramak lau aldagai ezberdin erabiltzen ditu, baina bi nahikoak lirateke kasu honetan:\n\n```python\nsum = 0\n\nnumber = int(input(\"Lehenengo zenbakia: \"))\nsum = sum + number\n\nnumber = int(input(\"Bigarren zenbakia: \"))\nsum = sum + number\n\nnumber = int(input(\"Hirugarren zenbakia: \"))\nsum = sum + number\n\nprint(f\"Zenbakien batuketa: {sum}\")\n```\n\nAldagai baten balioa handitzeko notazio laburtu bat erabili ohi da: `sum += number` eta `sum = sum + number` berdinak dira.\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part01-15_seconds_in_a_day',
      title: {
          ENG: 'Seconds in a day',
          CAS: 'Segundos en un día',
          EUS: 'Segunduak egun batean'
      },
      description: {
          ENG: "Please write a program which asks the user for a number of days. The program then prints out the number of seconds in that many days.",
          CAS: "Por favor, escribe un programa que pida un número de días. Debe imprimir el número de segundos en esa cantidad de días.",
          EUS: "Idatzi programa bat egun kopuru bat eskatzen duena. Gero egun horietan dauden segundu kopurua inprimatu behar du."
      },
      initialCode: "# Write your solution here\n",
      testCode: "import unittest\nclass TestSeconds(unittest.TestCase):\n    def test_run(self):\n        output = run_student_code(inputs=['1'])\n        self.assertIn(\"86400\", output)\n        \n        output2 = run_student_code(inputs=['2'])\n        self.assertIn(\"172800\", output2)"
    }
    {
      type: 'exercise',
      exerciseId: 'part01-16_product',
      title: {
          ENG: 'Fix the code: Product',
          CAS: 'Corrige el código: Producto',
          EUS: 'Konpondu kodea: Biderkadura'
      },
      description: {
          ENG: "This program asks the user for three numbers. The program then prints out their product. There is something wrong with the program. Please fix it.",
          CAS: "Este programa pide tres números. Luego imprime su producto. Hay un error en el programa. Por favor, arréglalo.",
          EUS: "Programa honek hiru zenbaki eskatzen ditu. Gero haien biderkadura inprimatzen du. Zerbait gaizki dago programan. Mesedez konpondu."
      },
      initialCode: "number = int(input(\"Please type in the first number: \"))\nnumber = int(input(\"Please type in the second number: \"))\nnumber = int(input(\"Please type in the third number: \"))\n\nproduct = number * number * number\n\nprint(\"The product is\", product)",
      testCode: "import unittest\nclass TestProduct(unittest.TestCase):\n    def test_run(self):\n        output = run_student_code(inputs=['2', '3', '5'])\n        if \"125\" in output:\n             self.fail(\"You are multiplying the last number by itself 3 times. Store inputs in different variables or update the product incrementally. \")\n        self.assertIn(\"30\", output)"
    }
    {
      type: 'exercise',
      exerciseId: 'part01-17_sum_and_product',
      title: {
          ENG: 'Sum and product',
          CAS: 'Suma y producto',
          EUS: 'Batuketa eta biderkadura'
      },
      description: {
          ENG: "Please write a program which asks the user for two numbers. The program will then print out the sum and the product of the two numbers.",
          CAS: "Por favor, escribe un programa que pida dos números. Luego debe imprimir la suma y el producto de esos dos números.",
          EUS: "Idatzi programa bat bi zenbaki eskatzen dituena. Gero bi zenbakien batuketa eta biderkadura inprimatu behar ditu."
      },
      initialCode: "# Write your solution here\n",
      testCode: "import unittest\nclass TestSumProduct(unittest.TestCase):\n    def test_run(self):\n        output = run_student_code(inputs=['3', '7'])\n        self.assertIn(\"10\", output)\n        self.assertIn(\"21\", output)"
    }
    {
      type: 'exercise',
      exerciseId: 'part01-18_sum_and_mean',
      title: {
          ENG: 'Sum and mean',
          CAS: 'Suma y promedio',
          EUS: 'Batuketa eta batezbestekoa'
      },
      description: {
          ENG: "Please write a program which asks the user for four numbers. The program then prints out the sum and the mean of the numbers.",
          CAS: "Por favor, escribe un programa que pida cuatro números. Luego debe imprimir la suma y el promedio de los números.",
          EUS: "Idatzi programa bat lau zenbaki eskatzen dituena. Gero zenbakien batuketa eta batezbestekoa inprimatu behar ditu."
      },
      initialCode: "# Write your solution here\n",
      testCode: "import unittest\nclass TestSumMean(unittest.TestCase):\n    def test_run(self):\n        output = run_student_code(inputs=['2', '1', '6', '7'])\n        self.assertIn(\"16\", output)\n        self.assertIn(\"4.0\", output)"
    }
    {
      type: 'exercise',
      exerciseId: 'part01-19_food_expenditure',
      title: {
          ENG: 'Food expenditure',
          CAS: 'Gasto en comida',
          EUS: 'Janari gastua'
      },
      description: {
          ENG: "Please write a program which asks the user for the number of times they eat at the student cafeteria, the price of a student lunch, and the money they spend on groceries per week. The program then estimates the daily and weekly food expenditure.",
          CAS: "Por favor, escribe un programa que pida al usuario el número de veces que come en la cafetería, el precio de un almuerzo y el dinero que gasta en comestibles por semana. El programa estimará el gasto diario y semanal.",
          EUS: "Idatzi programa bat erabiltzaileari galdetzen diona zenbat aldiz jaten duen kafetegian, bazkariaren prezioa eta astean janaritan gastatzen duena. Programak eguneko eta asteko gastua estimatuko du."
      },
      initialCode: "# Write your solution here\n",
      testCode: "import unittest\nclass TestFood(unittest.TestCase):\n    def test_run(self):\n        # 4 times, 2.5 price, 28.5 groceries\n        # Weekly: 4*2.5 + 28.5 = 10 + 28.5 = 38.5\n        # Daily: 38.5 / 7 = 5.5\n        output = run_student_code(inputs=['4', '2.5', '28.5'])\n        self.assertIn(\"5.5\", output)\n        self.assertIn(\"38.5\", output)"
    }
    {
      type: 'exercise',
      exerciseId: 'part01-20_students_in_groups',
      title: {
          ENG: 'Students in groups',
          CAS: 'Estudiantes en grupos',
          EUS: 'Ikasleak taldetan'
      },
      description: {
          ENG: "Please write a program which asks for the number of students on a course and the desired group size. The program will then print out the number of groups formed.",
          CAS: "Por favor, escribe un programa que pida el número de estudiantes en un curso y el tamaño de grupo deseado. El programa imprimirá el número de grupos formados.",
          EUS: "Idatzi programa bat ikastaro bateko ikasle kopurua eta talde tamaina eskatzen dituena. Programak osatutako talde kopurua inprimatuko du."
      },
      initialCode: "# Write your solution here\n",
      testCode: "import unittest\nclass TestGroups(unittest.TestCase):\n    def test_run(self):\n        output = run_student_code(inputs=['11', '3'])\n        # 11 students, group size 3 -> 4 groups\n        self.assertIn(\"4\", output)\n        \n        output2 = run_student_code(inputs=['12', '3'])\n        # 12 students, group size 3 -> 4 groups\n        self.assertIn(\"4\", output2)"
    }
  ]
};