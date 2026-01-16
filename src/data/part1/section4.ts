import { CoursePage } from '../mooc-exercises';

export const section4: CoursePage = {
  id: "part1-4",
  title: {
    ENG: `Arithmetic operations`,
    CAS: `Operaciones aritméticas`,
    EUS: `Eragiketa aritmetikoak\`
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: \`\n# Arithmetic operations\n\n## After this section:\n\n- You will be able to use variables in various arithmetic operations\n- You will know how to deal with numbers in user input\n- You will know how to cast values into other fundamental data types\n\nIn the previous sections you've seen examples with basic arithmetics. In the following table you can see the most common arithmetic operators in Python, with examples:\n\n| Operator | Purpose | Example | Result |\n| :---: | :--- | :--- | :--- |\n| \`+\` | Addition | \`2 + 4\` | \`6\` |\n| \`-\` | Subtraction | \`10 - 2.5\` | \`7.5\` |\n| \`*\` | Multiplication | \`-2 * 123\` | \`-246\` |\n| \`/\` | Division (floating point result) | \`9 / 2\` | \`4.5\` |\n| \`//\` | Division (integer result) | \`9 // 2\` | \`4\` |\n| \`%\` | Modulo (Remainder) | \`9 % 2\` | \`1\` |\n| \`**\` | Exponentiation | \`2 ** 3\` | \`8\` |\n\nThe order of operations is familiar from mathematics: first calculate the exponents, then multiplication and division, and finally addition and subtraction. The order can be changed with parentheses.\n\nFor example this bit of code:\n\n\`\`\`python\nprint(2 + 3 * 3)\nprint((2 + 3) * 3)\n\`\`\`\n\nprints out:\n\n<sample-output>\n\n11\n15\n\n</sample-output>\n\n## Operands, operators and data types\n\nA calculation usually consists of *operands* and *operators*. The data type of an operand usually determines the data type of the result: if two integers are added together, the result will also be an integer. If a floating point number is subtracted from another floating point number, the result is a floating point number. In fact, if a single one of the operands in an expression is a floating point number, the result will also be a floating point number, regardless of the other operands.\n\n**Division \`/\` is an exception to this rule.** Its result is a floating point number, even if the operands are integers. For example \`1 / 5\` will result in the floating point number \`0.2\`.\n\nExample:\n\n\`\`\`python\nheight = 172.5\nweight = 68.55\n\n# the Body Mass Index, or BMI, is calculated by dividing body mass with the square of height\n# height is converted into metres in the formula\nbmi = weight / (height / 100) ** 2\n\nprint(f"The BMI is {bmi}")\n\`\`\`\n\nThis program prints out the following:\n\n<sample-output>\n\nThe BMI is 23.037177063642087\n\n</sample-output>\n\nNotice Python also has an integer division operator \`//\`. If the operands are integers, it will produce an integer. The result is rounded down to the nearest integer.\n\n\`\`\`python\nx = 3\ny = 2\n\nprint(f"/ operator {x/y}")\nprint(f"// operator {x//y}")\n\`\`\`\n\nprints out:\n\n<sample-output>\n\n/ operator 1.5\n// operator 1\n\n</sample-output>\n`,
        CAS: `\n# Operaciones aritméticas\n\n## Después de esta sección:\n\n- Podrás usar variables en varias operaciones aritméticas\n- Sabrás cómo tratar con números en la entrada del usuario\n- Sabrás cómo convertir valores a otros tipos de datos fundamentales\n\nEn las secciones anteriores has visto ejemplos con aritmética básica. En la siguiente tabla puedes ver los operadores aritméticos más comunes en Python:\n\n| Operador | Propósito | Ejemplo | Resultado |\n| :---: | :--- | :--- | :--- |\n| \`+\` | Suma | \`2 + 4\` | \`6\` |\n| \`-\` | Resta | \`10 - 2.5\` | \`7.5\` |\n| \`*\` | Multiplicación | \`-2 * 123\` | \`-246\` |\n| \`/\` | División (resultado flotante) | \`9 / 2\` | \`4.5\` |\n| \`//\` | División (resultado entero) | \`9 // 2\` | \`4\` |\n| \`%\` | Módulo (Resto) | \`9 % 2\` | \`1\` |\n| \`**\` | Exponenciación | \`2 ** 3\` | \`8\` |\n\nEl orden de las operaciones es familiar de las matemáticas: primero calcula los exponentes, luego multiplicación y división, y finalmente suma y resta. El orden se puede cambiar con paréntesis.\n\nPor ejemplo, este fragmento de código:\n\n\`\`\`python\nprint(2 + 3 * 3)\nprint((2 + 3) * 3)\n\`\`\`\n\nimprime:\n\n<sample-output>\n\n11\n15\n\n</sample-output>\n\n## Operandos, operadores y tipos de datos\n\nUn cálculo generalmente consta de *operandos* y *operadores*. El tipo de dato de un operando generalmente determina el tipo de dato del resultado: si se suman dos enteros, el resultado también será un entero. Si se resta un número de punto flotante de otro, el resultado es un número de punto flotante. De hecho, si solo uno de los operandos en una expresión es un número de punto flotante, el resultado también será un número de punto flotante.\n\n**La división \`/\` es una excepción a esta regla.** Su resultado es un número de punto flotante, incluso si los operandos son enteros. Por ejemplo \`1 / 5\` resultará en el número flotante \`0.2\`.\n\nEjemplo:\n\n\`\`\`python\nheight = 172.5\nweight = 68.55\n\n# el Índice de Masa Corporal, o IMC, se calcula dividiendo la masa corporal por el cuadrado de la altura\n# la altura se convierte a metros en la fórmula\nbmi = weight / (height / 100) ** 2\n\nprint(f"El IMC es {bmi}")\n\`\`\`\n\nEste programa imprime lo siguiente:\n\n<sample-output>\n\nEl IMC es 23.037177063642087\n\n</sample-output>\n\nFíjate que Python también tiene un operador de división entera \`//\`. Si los operandos son enteros, producirá un entero. El resultado se redondea hacia abajo al entero más cercano.\n\n\`\`\`python\nx = 3\ny = 2\n\nprint(f"Operador / {x/y}")\nprint(f"Operador // {x//y}")\n\`\`\`\n\nimprime:\n\n<sample-output>\n\nOperador / 1.5\nOperador // 1\n\n</sample-output>\n`,
        EUS: `\n# Eragiketa aritmetikoak\n\n## Atal honen ondoren:\n\n- Aldagaiak eragiketa aritmetiko ezberdinetan erabiltzeko gai izango zara\n- Jakingo duzu nola tratatu zenbakiak erabiltzailearen sarreran\n- Balioak oinarrizko beste datu mota batzuetara nola bihurtu jakingo duzu\n\nAurreko ataletan oinarrizko aritmetikako adibideak ikusi dituzu. Hurrengo taulan Python-eko eragile aritmetiko ohikoenak ikus ditzakezu:\n\n| Eragilea | Helburua | Adibidea | Emaitza |\n| :---: | :--- | :--- | :--- |\n| \`+\` | Batuketa | \`2 + 4\` | \`6\` |\n| \`-\` | Kenketa | \`10 - 2.5\` | \`7.5\` |\n| \`*\` | Biderketa | \`-2 * 123\` | \`-246\` |\n| \`/\` | Zatiketa (koma higikorra) | \`9 / 2\` | \`4.5\` |\n| \`//\` | Zatiketa (osoa) | \`9 // 2\` | \`4\` |\n| \`%\` | Modulua (Hondarra) | \`9 % 2\` | \`1\` |\n| \`**\` | Berreketa | \`2 ** 3\` | \`8\` |\n\nEragiketen ordena matematikatik ezaguna da: lehenik berretzaileak kalkulatu, gero biderketa eta zatiketa, eta azkenik batuketa eta kenketa. Ordena parentesiekin alda daiteke.\n\nAdibidez, kode zati honek:\n\n\`\`\`python\nprint(2 + 3 * 3)\nprint((2 + 3) * 3)\n\`\`\`\n\n\`\`\`text\n11\n15\n\`\`\`\n\n## Operandoak, eragileak eta datu motak\n\nKalkulu bat normalean *operando* eta *eragilez* osatzen da. Operando baten datu motak normalean emaitzaren datu mota zehazten du. Bi zenbaki oso batzen badira, emaitza ere zenbaki osoa izango da. Koma higikorreko zenbaki bat beste bati kentzen bazaio, emaitza koma higikorreko zenbakia da. Izan ere, adierazpen bateko operando bakar bat koma higikorreko zenbakia bada, emaitza ere koma higikorreko zenbakia izango da.\n\n**Zatiketa \`/\` arau honen salbuespena da.** Bere emaitza koma higikorreko zenbaki bat da, nahiz eta operandoak zenbaki osoak izan. Adibidez \`1 / 5\` eragiketak \`0.2\` zenbakia emango du.\n\nAdibidea:\n\n\`\`\`python\nheight = 172.5\nweight = 68.55\n\n# Gorputz Masa Indizea, edo GMI, masa altueraren karratuarekin zatituz kalkulatzen da\n# altuera metrotara bihurtzen da formulan\nbmi = weight / (height / 100) ** 2\n\nprint(f"GMIa {bmi} da")\n\`\`\`\n\nPrograma honek honako hau inprimatzen du:\n\n\`\`\`text\nGMIa 23.037177063642087 da\n\`\`\`\n\nOhartu Pythonek zatiketa osoko eragilea \`//\` ere baduela. Operandoak zenbaki osoak badira, zenbaki oso bat sortuko du. Emaitza hurbileneko zenbaki osora biribiltzen da beherantz.\n\n\`\`\`python\nx = 3\ny = 2\n\nprint(f"/ eragilea {x/y}")\nprint(f"// eragilea {x//y}")\n\`\`\`\n\nHonek inprimatzen du:\n\n\`\`\`text\n/ eragilea 1.5\n// eragilea 1\n\`\`\`\n\`
      }
    },
    {
      type: 'markdown',
      content: {
        ENG: \`\n## Numbers as input\n\nWe have already used the \`input\` command to read in strings from the user. The same function can be used to read in numbers, but the string produced by the function must then be converted to a numeric data type using \`int\` (for integers) or \`float\` (for decimals).\n\n\`\`\`python\nyear = int(input(\"Which year were you born? \"))\nprint(f\"Your age at the end of the year 2021: {2021 - year}\" )\n\`\`\`\n<sample-output>\n\nWhich year were you born? **1995**\nYour age at the end of the year 2021: 26\n\n</sample-output>\n\nUsually you can do this in one go:\n\n\`\`\`python\nyear = int(input(\"Which year were you born? \"))\nprint(f\"Your age at the end of the year 2021: {2021 - year}\" )\n\`\`\`\n\nSimilarly for floating point numbers:\n\n\`\`\`python\nheight = float(input(\"What is your height? \"))\nweight = float(input(\"What is your weight? \"))\n\nheight = height / 100\nbmi = weight / height ** 2\n\nprint(f\"The BMI is {bmi}\")\n\`\`\`\n`,
        CAS: `\n## Números como entrada\n\nYa hemos usado el comando \`input\` para leer cadenas del usuario. La misma función se puede usar para leer números, pero la cadena producida por la función debe convertirse a un tipo de dato numérico usando \`int\` (para enteros) o \`float\` (para decimales).\n\n\`\`\`python\nyear = int(input(\"¿En qué año naciste? \"))\nprint(f\"Tu edad al final del año 2021: {2021 - year}\" )\n\`\`\`\n<sample-output>\n\n¿En qué año naciste? **1995**\nTu edad al final del año 2021: 26\n\n</sample-output>\n\nNormalmente puedes hacer esto de una sola vez:\n\n\`\`\`python\nyear = int(input(\"¿En qué año naciste? \"))\nprint(f\"Tu edad al final del año 2021: {2021 - year}\" )\n\`\`\`\n\nDe manera similar para números de punto flotante:\n\n\`\`\`python\nheight = float(input(\"¿Cuál es tu altura? \"))\nweight = float(input(\"¿Cuál es tu peso? \"))\n\nheight = height / 100\nbmi = weight / height ** 2\n\nprint(f\"El IMC es {bmi}\")\n\`\`\`\n`,
        EUS: `\n## Zenbakiak sarrera gisa\n\nDagoeneko erabili dugu \`input\` komandoa erabiltzailearen kateak irakurtzeko. Funtzio bera erabil daiteke zenbakiak irakurtzeko, baina funtzioak sortutako katea datu mota numeriko batera bihurtu behar da \`int\` (zenbaki osoetarako) edo \`float\` (dezimaletarako) erabiliz.\n\n\`\`\`python\nyear = int(input(\"Zein urtetan jaio zinen? \"))\nprint(f\"Zure adina 2021 amaieran: {2021 - year}\" )\n\`\`\`\n<sample-output>\n\nZein urtetan jaio zinen? **1995**\nZure adina 2021 amaieran: 26\n\n</sample-output>\n\nNormalean hau kolpe batean egin dezakezu:\n\n\`\`\`python\nyear = int(input(\"Zein urtetan jaio zinen? \"))\nprint(f\"Zure adina 2021 amaieran: {2021 - year}\" )\n\`\`\`\n\nEra berean koma higikorreko zenbakiekin:\n\n\`\`\`python\nheight = float(input(\"Zein da zure altuera? \"))\nweight = float(input(\"Zein da zure pisua? \"))\n\nheight = height / 100\nbmi = weight / height ** 2\n\nprint(f\"GMIa {bmi} da\")\n\`\`\`\n\`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part01-13_times_five',
      title: { ENG: 'Times five', CAS: 'Por cinco', EUS: 'Bost aldiz' },
      description: {
          ENG: \`Please write a program which asks the user for a number. The program then prints out the number multiplied by five.`,
          CAS: `Por favor, escribe un programa que pida un número al usuario. El programa debe imprimir el número multiplicado por cinco.`,
          EUS: `Idatzi programa bat erabiltzaileari zenbaki bat eskatzen diona. Programak zenbakia bostez biderkatuta inprimatu behar du.\`
      },
      initialCode: `# Write your solution here\n`
      testCode: \`import unittest\nclass TestTimesFive(unittest.TestCase):\n    def test_run(self):\n        output = run_student_code(inputs=['3']).strip()\n        if "33333" in output:\n             self.fail(tr("It seems you are repeating the text 5 times ('33333'). Remember to convert the input to a number with int() before multiplying.", "Parece que estás repitiendo el texto 5 veces ('33333'). Recuerda convertir la entrada a número con int() antes de multiplicar.", "Badirudi testua 5 aldiz errepikatzen ari zarela ('33333'). Gogoratu sarrera zenbaki bihurtzea int() erabiliz biderkatu aurretik."))\n        self.assertIn("15", output)"
    }
    {
      type: 'exercise',
      exerciseId: 'part01-14_name_and_age',
      title: { ENG: 'Name and age', CAS: 'Nombre y edad', EUS: 'Izena eta adina' },
      description: {
          ENG: \`Please write a program which asks the user for their name and year of birth. The program then prints out their age at the end of 2021.`,
          CAS: `Por favor, escribe un programa que pida el nombre y año de nacimiento. Debe imprimir su edad al final de 2021.`,
          EUS: `Idatzi programa bat izena eta jaiotze urtea eskatzen dituena. Gero 2021 amaieran izango duen adina inprimatu behar du.\`
      },
      initialCode: `# Write your solution here\n`
      testCode: \`import unittest\nclass TestNameAge(unittest.TestCase):\n    def test_run(self):\n        output = run_student_code(inputs=['Frances', '1990'])\n        self.assertIn("Frances\`, output)\n        self.assertIn("31", output)"
    }
    {
      type: 'markdown',
      content: {
        ENG: \`\n## Using variables\n\nLet's have a look at a program which calculates the sum of three numbers given by the user:\n\n\\`\\`\\`python\nnumber1 = int(input("First number: "))\nnumber2 = int(input("Second number: "))\nnumber3 = int(input("Third number: "))\n\nsum = number1 + number2 + number3\nprint(f"The sum of the numbers: {sum}")\n\\`\\`\\`\n\nThe program uses four different variables, but two would easily suffice in this case, by **reusing** variables and using the **shorthand increment** operator \`+=\\`: \n\n\\`\\`\\`python\nsum = 0\n\nnumber = int(input("First number: "))\nsum += number # Same as: sum = sum + number\n\nnumber = int(input("Second number: "))\nsum += number\n\nnumber = int(input("Third number: "))\nsum += number\n\nprint(f"The sum of the numbers: {sum}")\n\\`\\`\\`\n\nHere, \`sum += number\` increases the value of \`sum\` by the value of \`number\`. This is very common in programming.\n`,
        CAS: `\n## Usando variables\n\nVeamos un programa que calcula la suma de tres números dados por el usuario:\n\n\\`\\`\\`python\nnumber1 = int(input("Primer número: "))\nnumber2 = int(input("Segundo número: "))\nnumber3 = int(input("Tercer número: "))\n\nsum = number1 + number2 + number3\nprint(f"La suma de los números: {sum}")\n\\`\\`\\`\n\nEl programa usa cuatro variables diferentes, pero dos serían suficientes en este caso, **reutilizando** variables y usando el operador **abreviado de incremento** \`+=\\`: \n\n\\`\\`\\`python\nsum = 0\n\nnumber = int(input("Primer número: "))\nsum += number # Lo mismo que: sum = sum + number\n\nnumber = int(input("Segundo número: "))\nsum += number\n\nnumber = int(input("Tercer número: "))\nsum += number\n\nprint(f"La suma de los números: {sum}")\n\\`\\`\\`\n\nAquí, \`sum += number\` incrementa el valor de \`sum\` por el valor de \`number\`. Esto es muy común en programación.\n`,
        EUS: `\n## Aldagaiak erabiltzen\n\nIkus dezagun erabiltzaileak emandako hiru zenbakiren batuketa kalkulatzen duen programa bat:\n\n\\`\\`\\`python\nnumber1 = int(input("Lehenengo zenbakia: "))\nnumber2 = int(input("Bigarren zenbakia: "))\nnumber3 = int(input("Hirugarren zenbakia: "))\n\nsum = number1 + number2 + number3\nprint(f"Zenbakien batuketa: {sum}")\n\\`\\`\\`\n\nProgramak lau aldagai ezberdin erabiltzen ditu, baina bi nahikoak lirateke kasu honetan, aldagaiak **berrerabiliz** eta \`+=\\` **gehikuntza laburtu** eragilea erabiliz:\n\n\\`\\`\\`python\nsum = 0\n\nnumber = int(input("Lehenengo zenbakia: "))\nsum += number # Honen berdina: sum = sum + number\n\nnumber = int(input("Bigarren zenbakia: "))\nsum += number\n\nnumber = int(input("Hirugarren zenbakia: "))\nsum += number\n\nprint(f"Zenbakien batuketa: {sum}")\n\\`\\`\\`\n\nHemen, \`sum += number\`-ek \`sum\`-en balioa handitzen du \`number\`-en balioarekin. Hau oso ohikoa da programazioan.\n\`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part01-15_seconds_in_a_day',
      title: { ENG: 'Seconds in a day', CAS: 'Segundos en un día', EUS: 'Segunduak egun batean' },
      description: {
          ENG: \`Please write a program which asks the user for a number of days. The program then prints out the number of seconds in that many days.`,
          CAS: `Por favor, escribe un programa que pida un número de días. Debe imprimir el número de segundos en esa cantidad de días.`,
          EUS: `Idatzi programa bat egun kopuru bat eskatzen duena. Gero egun horietan dauden segundu kopurua inprimatu behar du.\`
      },
      initialCode: `# Write your solution here\n`
      testCode: \`import unittest\nclass TestSeconds(unittest.TestCase):\n    def test_run(self):\n        output = run_student_code(inputs=['1'])\n        self.assertIn("86400\`, output)\n        \n        output2 = run_student_code(inputs=['2'])\n        self.assertIn("172800", output2)"
    }
    {
      type: 'exercise',
      exerciseId: 'part01-16_product',
      title: { ENG: 'Fix the code: Product', CAS: 'Corrige el código: Producto', EUS: 'Konpondu kodea: Biderkadura' },
      description: {
          ENG: \`This program asks the user for three numbers. The program then prints out their product. There is something wrong with the program. Please fix it.`,
          CAS: `Este programa pide tres números. Luego imprime su producto. Hay un error en el programa. Por favor, arréglalo.`,
          EUS: `Programa honek hiru zenbaki eskatzen ditu. Gero haien biderkadura inprimatzen du. Zerbait gaizki dago programan. Mesedez konpondu.\`
      },
      initialCode: \`number = int(input("Please type in the first number: "))\nnumber = int(input("Please type in the second number: "))\nnumber = int(input("Please type in the third number: "))\n\nproduct = number * number * number\n\nprint("The product is\`, product)"
      testCode: \`import unittest\nclass TestProduct(unittest.TestCase):\n    def test_run(self):\n        output = run_student_code(inputs=['2', '3', '5'])\n        if "125" in output:\n             self.fail(tr("You are multiplying the last number by itself 3 times. The problem is that you store all inputs in the same variable 'number', overwriting it. Use different variables.\`, "Estás multiplicando el último número por sí mismo 3 veces. El problema es que guardas todos los inputs en la variable 'number', sobrescribiéndola. Usa variables distintas.", "Azken zenbakia 3 aldiz biderkatzen ari zara. Arazoa da sarrera guztiak 'number' aldagaian gordetzen dituzula, gainidatziz. Erabili aldagai desberdinak."))\n        self.assertIn("30", output)"
    }
    {
      type: 'exercise',
      exerciseId: 'part01-17_sum_and_product',
      title: { ENG: 'Sum and product', CAS: 'Suma y producto', EUS: 'Batuketa eta biderkadura' },
      description: {
          ENG: \`Please write a program which asks the user for two numbers. The program will then print out the sum and the product of the two numbers.`,
          CAS: `Por favor, escribe un programa que pida dos números. Luego debe imprimir la suma y el producto de esos dos números.`,
          EUS: `Idatzi programa bat bi zenbaki eskatzen dituena. Gero bi zenbakien batuketa eta biderkadura inprimatu behar ditu.\`
      },
      initialCode: `# Write your solution here\n`
      testCode: \`import unittest\nclass TestSumProduct(unittest.TestCase):\n    def test_run(self):\n        output = run_student_code(inputs=['3', '7'])\n        self.assertIn("10\`, output)\n        self.assertIn("21", output)"
    }
    {
      type: 'exercise',
      exerciseId: 'part01-18_sum_and_mean',
      title: { ENG: 'Sum and mean', CAS: 'Suma y promedio', EUS: 'Batuketa eta batezbestekoa' },
      description: {
          ENG: \`Please write a program which asks the user for four numbers. The program then prints out the sum and the mean of the numbers.`,
          CAS: `Por favor, escribe un programa que pida cuatro números. Luego debe imprimir la suma y el promedio de los números.`,
          EUS: `Idatzi programa bat lau zenbaki eskatzen dituena. Gero zenbakien batuketa eta batezbestekoa inprimatu behar ditu.\`
      },
      initialCode: `# Write your solution here\n`
      testCode: \`import unittest\nclass TestSumMean(unittest.TestCase):\n    def test_run(self):\n        output = run_student_code(inputs=['2', '1', '6', '7'])\n        self.assertIn("16\`, output)\n        self.assertIn("4.0", output)"
    }
    {
      type: 'exercise',
      exerciseId: 'part01-19_food_expenditure',
      title: { ENG: 'Food expenditure', CAS: 'Gasto en comida', EUS: 'Janari gastua' },
      description: {
          ENG: \`Please write a program which asks the user for the number of times they eat at the student cafeteria, the price of a student lunch, and the money they spend on groceries per week. The program then estimates the daily and weekly food expenditure.`,
          CAS: `Por favor, escribe un programa que pida al usuario el número de veces que come en la cafetería, el precio de un almuerzo y el dinero que gasta en comestibles por semana. El programa estimará el gasto diario y semanal.`,
          EUS: `Idatzi programa bat erabiltzaileari galdetzen diona zenbat aldiz jaten duen kafetegian, bazkariaren prezioa eta astean janaritan gastatzen duena. Programak eguneko eta asteko gastua estimatuko du.\`
      },
      initialCode: `# Write your solution here\n`
      testCode: \`import unittest\nclass TestFood(unittest.TestCase):\n    def test_run(self):\n        output = run_student_code(inputs=['4', '2.5', '28.5'])\n        self.assertIn("5.5\`, output)\n        self.assertIn("38.5", output)"
    }
    {
      type: 'exercise',
      exerciseId: 'part01-20_students_in_groups',
      title: { ENG: 'Students in groups', CAS: 'Estudiantes en grupos', EUS: 'Ikasleak taldetan' },
      description: {
          ENG: \`Please write a program which asks for the number of students on a course and the desired group size. The program will then print out the number of groups formed.`,
          CAS: `Por favor, escribe un programa que pida el número de estudiantes en un curso y el tamaño de grupo deseado. El programa imprimirá el número de grupos formados.`,
          EUS: `Idatzi programa bat ikastaro bateko ikasle kopurua eta talde tamaina eskatzen dituena. Programak osatutako talde kopurua inprimatuko du.`
      },
      initialCode: `# Write your solution here\n`
      testCode: `import unittest\nclass TestGroups(unittest.TestCase):\n    def test_run(self):\n        output = run_student_code(inputs=['11', '3'])\n        self.assertIn("4`, output)\n        output2 = run_student_code(inputs=['12', '3'])\n        self.assertIn("4", output2)"
    }
    {
      type: 'quiz',
      title: { ENG: `Quiz`, CAS: `Cuestionario`, EUS: "Galdetegia` },
      questions: [
        {
          id: 'q1',
          prompt: { 
            ENG: 'What is the result of 9 // 2?',
            CAS: '¿Cuál es el resultado de 9 // 2?',
            EUS: 'Zein da 9 // 2 eragiketaren emaitza?'
          },
          options: [
            { id: 'o1', text: '4.5', isCorrect: false },
            { id: 'o2', text: '4', isCorrect: true, feedback: { ENG: '// is integer division, it rounds down.', CAS: '// es división entera, redondea hacia abajo.', EUS: '// zatiketa osoa da, beherantz biribiltzen du.' } },
            { id: 'o3', text: '5', isCorrect: false }
          ]
        },
        {
          id: 'q2',
          prompt: { 
            ENG: 'How do you correctly read an integer from user input?',
            CAS: '¿Cómo lees correctamente un entero de la entrada del usuario?',
            EUS: 'Nola irakurtzen duzu zuzen zenbaki oso bat erabiltzailearen sarreratik?'
          },
          options: [
            { id: 'o1', text: 'x = input("Number: ")', isCorrect: false },
            { id: 'o2', text: 'x = int(input("Number: "))', isCorrect: true },
            { id: 'o3', text: 'x = float(input("Number: "))', isCorrect: false }
          ]
        },
        {
          id: 'q3',
          prompt: { 
            ENG: 'What is the shorthand for x = x + 5?',
            CAS: '¿Cuál es la forma abreviada de x = x + 5?',
            EUS: 'Zein da x = x + 5 adierazpenaren forma laburtua?'
          },
          options: [
            { id: 'o1', text: 'x += 5', isCorrect: true },
            { id: 'o2', text: 'x =+ 5', isCorrect: false },
            { id: 'o3', text: 'x ++ 5', isCorrect: false }
          ]
        }
      ]
    }
  ]
};
