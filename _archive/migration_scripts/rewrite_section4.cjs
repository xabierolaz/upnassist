const fs = require('fs');

const section4 = {
  "id": "part1-4",
  "title": {
    "ENG": "4. Arithmetic operations",
    "CAS": "4. Operaciones aritméticas",
    "EUS": "4. Eragiketa aritmetikoak"
  },
  "blocks": [
    {
      "type": "markdown",
      "content": {
        "ENG": "# Arithmetic operations\n\n## Learning objectives\n\nAfter this section:\n- You will be able to use variables in various arithmetic operations\n- You will know how to deal with numbers in user input\n- You will know how to cast values into other fundamental data types\n\nIn the previous sections you've seen examples with basic arithmetics. In the following table you can see the most common arithmetic operators in Python, with examples:\n\n| Operator | Purpose | Example | Result |\n| :--- | :--- | :--- | :--- |\n| `+` | Addition | `2 + 4` | `6` |\n| `-` | Subtraction | `10 - 2.5` | `7.5` |\n| `*` | Multiplication | `-2 * 123` | `-246` |\n| `/` | Division (floating point result) | `9 / 2` | `4.5` |\n| `//` | Division (integer result) | `9 // 2` | `4` |\n| `%` | Modulo | `9 % 2` | `1` |\n| `**` | Exponentiation | `2 ** 3` | `8` |\n\nThe order of operations is familiar from mathematics: first calculate the exponents, then multiplication and division, and finally addition and subtraction. The order can be changed with parentheses. For example this bit of code\n\n```python\nprint(2 + 3 * 3)\nprint((2 + 3) * 3)\n```\n\nprints out\n\n```text\n11\n15\n```\n\n## Operands, operators and data types\n\nA calculation usually consists of *operands* and *operators*:\n\n`1` (operand) `+` (operator) `1` (operand)\n\nThe data type of an operand usually determines the data type of the result: if two integers are added together, the result will also be an integer. If a floating point number is subtracted from another floating point number, the result is a floating point number.\n\nIn fact, if a single one of the operands in an expression is a floating point number, the result will also be a floating point number, regardless of the other operands.\n\nDivision `/` is an exception to this rule. Its result is a floating point number, even if the operands are integers. For example `1 / 5` will result in the floating point number `0.2`.\n\nExample:\n\n```python\nheight = 172.5\nweight = 68.55\n\n# the Body Mass Index, or BMI, is calculated by dividing body mass with the square of height\n# height is converted into metres in the formula\nbmi = weight / (height / 100) ** 2\nprint(f"The BMI is {bmi}")\n```\n\nThis program prints out the following:\n\n```text\nThe BMI is 23.037177063642087\n```\n\nNotice Python also has an integer division operator `//`. If the operands are integers, it will produce an integer. The result is rounded down to the nearest integer. For example this program\n\n```python\nx = 3\ny = 2\n\nprint(f"/ operator {x/y}")\nprint(f"// operator {x//y}")\n```\n\nprints out\n\n```text\n/ operator 1.5\n// operator 1\n```",
        "CAS": "# Operaciones aritméticas\n\n## Objetivos de aprendizaje\n\nDespués de esta sección:\n- Podrás usar variables en diversas operaciones aritméticas\n- Sabrás cómo tratar con números en la entrada del usuario\n- Sabrás cómo convertir valores a otros tipos de datos fundamentales\n\nEn las secciones anteriores has visto ejemplos con aritmética básica. En la siguiente tabla puedes ver los operadores aritméticos más comunes en Python, con ejemplos:\n\n| Operador | Propósito | Ejemplo | Resultado |\n| :--- | :--- | :--- | :--- |\n| `+` | Suma | `2 + 4` | `6` |\n| `-` | Resta | `10 - 2.5` | `7.5` |\n| `*` | Multiplicación | `-2 * 123` | `-246` |\n| `/` | División (resultado punto flotante) | `9 / 2` | `4.5` |\n| `//` | División (resultado entero) | `9 // 2` | `4` |\n| `%` | Módulo (resto) | `9 % 2` | `1` |\n| `**` | Exponenciación | `2 ** 3` | `8` |\n\nEl orden de las operaciones es familiar de las matemáticas: primero calcula los exponentes, luego multiplicación y división, y finalmente suma y resta. El orden se puede cambiar con paréntesis. Por ejemplo, este fragmento de código\n\n```python\nprint(2 + 3 * 3)\nprint((2 + 3) * 3)\n```\n\n```text\n11\n15\n```\n\n## Operandos, operadores y tipos de datos\n\nUn cálculo generalmente consta de *operandos* y *operadores*:\n\n`1` (operando) `+` (operador) `1` (operando)\n\nEl tipo de dato de un operando generalmente determina el tipo de dato del resultado: si se suman dos enteros, el resultado también será un entero. Si se resta un número de punto flotante de otro número de punto flotante, el resultado es un número de punto flotante.\n\nDe hecho, si uno solo de los operandos en una expresión es un número de punto flotante, el resultado también será un número de punto flotante, independientemente de los otros operandos.\n\nLa división `/` es una excepción a esta regla. Su resultado es un número de punto flotante, incluso si los operandos son enteros. Por ejemplo `1 / 5` resultará en el número de punto flotante `0.2`.\n\nEjemplo:\n\n```python\naltura = 172.5\npeso = 68.55\n\n# el Índice de Masa Corporal, o IMC, se calcula dividiendo la masa corporal por el cuadrado de la altura\n# la altura se convierte en metros en la fórmula\nimc = peso / (altura / 100) ** 2\nprint(f"El IMC es {imc}")\n```\n\nEste programa imprime lo siguiente:\n\n```text\nEl IMC es 23.037177063642087\n```\n\nObserva que Python también tiene un operador de división entera `//`. Si los operandos son enteros, producirá un entero. El resultado se redondea hacia abajo al entero más cercano. Por ejemplo, este programa\n\n```python\nx = 3\ny = 2\n\nprint(f"/ operator {x/y}")\nprint(f"// operator {x//y}")\n```\n\nimprime\n\n```text\n/ operator 1.5\n// operator 1\n```",
        "EUS": "# Eragiketa aritmetikoak\n\n## Ikaskuntza-helburuak\n\nAtal honen ondoren:\n- Aldagaiak eragiketa aritmetiko ezberdinetan erabiltzeko gai izango zara\n- Jakingo duzu nola tratatu zenbakiak erabiltzailearen sarreran\n- Jakingo duzu nola bihurtu balioak oinarrizko beste datu-mota batzuetara\n\nAurreko ataletan oinarrizko aritmetikako adibideak ikusi dituzu. Hurrengo taulan Python-eko eragile aritmetiko ohikoenak ikus ditzakezu, adibideekin:\n\n| Eragilea | Helburua | Adibidea | Emaitza |\n| :--- | :--- | :--- | :--- |\n| `+` | Batuketa | `2 + 4` | `6` |\n| `-` | Kenketa | `10 - 2.5` | `7.5` |\n| `*` | Biderketa | `-2 * 123` | `-246` |\n| `/` | Zatiketa (koma mugikorreko emaitza) | `9 / 2` | `4.5` |\n| `//` | Zatiketa (emaitza osoa) | `9 // 2` | `4` |\n| `%` | Modulua (hondarra) | `9 % 2` | `1` |\n| `**` | Berreketa | `2 ** 3` | `8` |\n\nEragiketen ordena matematikatik ezaguna da: lehenik berretzaileak kalkulatu, gero biderketa eta zatiketa, eta azkenik batuketa eta kenketa. Ordena parentesi bidez alda daiteke. Adibidez kode zati honek\n\n```python\nprint(2 + 3 * 3)\nprint((2 + 3) * 3)\n```\n\nhau inprimatzen du\n\n```text\n11\n15\n```\n\n## Operandoak, eragileak eta datu motak\n\nKalkulu bat normalean *operandoek* eta *eragileek* osatzen dute:\n\n`1` (operandoa) `+` (eragilea) `1` (operandoa)\n\nOperando baten datu-motak zehazten du normalean emaitzaren datu-mota: bi zenbaki oso batzen badira, emaitza ere zenbaki osoa izango da. Koma mugikorreko zenbaki bat beste koma mugikorreko zenbaki batetik kentzen bada, emaitza koma mugikorreko zenbaki bat da.\n\nIzan ere, adierazpen bateko operandoetako bakar bat koma mugikorreko zenbakia bada, emaitza ere koma mugikorreko zenbakia izango da, gainerako operandoak kontuan hartu gabe.\n\nZatiketa `/` arau honen salbuespena da. Bere emaitza koma mugikorreko zenbakia da, nahiz eta operandoak zenbaki osoak izan. Adibidez `1 / 5` eragiketak `0.2` koma mugikorreko zenbakia emango du.\n\nAdibidea:\n\n```python\naltuera = 172.5\npisua = 68.55\n\n# GMI (Gorputz Masa Indizea) kalkulatzeko, pisua altueraren karratuarekin zatitzen da\n# altuera metrotara bihurtzen da formulan\ngmi = pisua / (altuera / 100) ** 2\nprint(f"GMIa {gmi} da")\n```\n\nPrograma honek hau inprimatzen du:\n\n```text\nGMIa 23.037177063642087 da\n```\n\nOhar zaitez Pythonek zatiketa osorako eragile bat ere baduela `//`. Operandoak zenbaki osoak badira, zenbaki oso bat emango du. Emaitza behera biribiltzen da hurbileneko zenbaki osora. Adibidez programa honek\n\n```python\nx = 3\ny = 2\n\nprint(f"/ eragilea {x/y}")\nprint(f"// eragilea {x//y}")\n```\n\nhau inprimatzen du\n\n```text\n/ eragilea 1.5\n// eragilea 1\n```"
      }
    },
    {
      "type": "markdown",
      "content": {
        "ENG": "# Numbers as input\n\nWe have already used the `input` command to read in strings from the user. The same function can be used to read in numbers, but the string produced by the function must then be converted to a numeric data type in the program code.\n\nIn the previous section we cast integers as strings with the `str` function. The same basic principle applies here, but the name of the casting function will be different. A string can be converted into an integer with the function `int`.\n\nThe following program asks the user for their year of birth and stores it in the variable `input_str`. The program then creates another variable `year`, which contains the year converted into an integer. After this the calculation `2021-year` is possible, using the user-supplied value.\n\n```python\ninput_str = input(\"Which year were you born? \")\nyear = int(input_str)\nprint(f\"Your age at the end of the year 2021: {2021 - year}\" )
```\n\n```text\nWhich year were you born? 1995\nYour age at the end of the year 2021: 26\n```\n\nUsually you do not need to create two separate variables (like `input_str` and `year` above) to read a number value from the user. Instead, reading the input with the `input` function and converting it with the `int` function can be achieved in one go:\n\n```python\nyear = int(input(\"Which year were you born? \"))\nprint(f\"Your age at the end of the year 2021: {2021 - year}\" )
```\n\nSimilarly, a string can be converted into a floating point number with the function `float`. This programs asks the user for their height and weight, and uses these to calculate their BMI:\n\n```python\nheight = float(input(\"What is your height? \"))\nweight = float(input(\"What is your weight? \"))\n\nheight = height / 100\nbmi = weight / height ** 2\n\nprint(f\"The BMI is {bmi}\")\n```\n\nAn example printout from the program:\n\n```text\nWhat is your height? 163\nWhat is your weight? 74.45\nThe BMI is 28.02137829801649\n```",
        "CAS": "# Números como entrada\n\nYa hemos utilizado el comando `input` para leer cadenas del usuario. La misma función se puede utilizar para leer números, pero la cadena producida por la función debe convertirse a un tipo de dato numérico en el código del programa.\n\nEn la sección anterior convertimos enteros a cadenas con la función `str`. Aquí se aplica el mismo principio básico, pero el nombre de la función de conversión será diferente. Una cadena se puede convertir en un entero con la función `int`.\n\nEl siguiente programa pregunta al usuario su año de nacimiento y lo almacena en la variable `entrada_str`. Luego, el programa crea otra variable `year`, que contiene el año convertido a un entero. Después de esto, el cálculo `2021-year` es posible, utilizando el valor proporcionado por el usuario.\n\n```python\nentrada_str = input(\"¿En qué año naciste? \")\nyear = int(entrada_str)\nprint(f\"Tu edad al final del año 2021: {2021 - year}\" )\n```\n\n```text\n¿En qué año naciste? 1995\nTu edad al final del año 2021: 26\n```\n\nNormalmente no necesitas crear dos variables separadas (como `entrada_str` y `year` arriba) para leer un valor numérico del usuario. En su lugar, leer la entrada con la función `input` y convertirla con la función `int` se puede lograr de una sola vez:\n\n```python\nyear = int(input(\"¿En qué año naciste? \"))\nprint(f\"Tu edad al final del año 2021: {2021 - year}\" )\n```\n\nDel mismo modo, una cadena se puede convertir en un número de punto flotante con la función `float`. Este programa pregunta al usuario su altura y peso, y los utiliza para calcular su IMC:\n\n```python\naltura = float(input(\"¿Cuál es tu altura? \"))\npeso = float(input(\"¿Cuál es tu peso? \"))\n\naltura = altura / 100\nimc = peso / altura ** 2\n\nprint(f\"El IMC es {imc}\")\n```\n\nUn ejemplo de impresión del programa:\n\n```text\n¿Cuál es tu altura? 163\n¿Cuál es tu peso? 74.45\nEl IMC es 28.02137829801649\n```",
        "EUS": "# Zenbakiak sarrera gisa\n\nDagoeneko erabili dugu `input` komandoa erabiltzailearen kateak irakurtzeko. Funtzio bera erabil daiteke zenbakiak irakurtzeko, baina funtzioak sortutako katea zenbakizko datu-mota batera bihurtu behar da programaren kodean.\n\nAurreko atalean zenbaki osoak kate bihurtu genituen `str` funtzioarekin. Oinarrizko printzipio bera aplikatzen da hemen, baina bihurketa-funtzioaren izena ezberdina izango da. Kate bat zenbaki oso bihur daiteke `int` funtzioarekin.\n\nHurrengo programak erabiltzaileari bere jaiotze-urtea galdetzen dio eta `sarrera_str` aldagaian gordetzen du. Ondoren, programak beste aldagai bat sortzen du, `urtea`, urtea zenbaki oso bihurtuta duena. Honen ondoren, `2021-urtea` kalkulua posible da, erabiltzaileak emandako balioa erabiliz.\n\n```python\nsarrera_str = input(\"Zein urtetan jaio zinen? \")\nurtea = int(sarrera_str)\nprint(f\"Zure adina 2021. urtearen amaieran: {2021 - urtea}\" )\n```\n\n```text\nZein urtetan jaio zinen? 1995\nZure adina 2021. urtearen amaieran: 26\n```\n\nNormalean ez duzu bi aldagai bereizi sortu beharrik (goiko `sarrera_str` eta `urtea` bezala) erabiltzailearen zenbakizko balio bat irakurtzeko. Horren ordez, sarrera `input` funtzioarekin irakurtzea eta `int` funtzioarekin bihurtzea kolpe batean lor daiteke:\n\n```python\nurtea = int(input(\"Zein urtetan jaio zinen? \"))\nprint(f\"Zure adina 2021. urtearen amaieran: {2021 - urtea}\" )\n```\n\nEra berean, kate bat koma mugikorreko zenbaki bihur daiteke `float` funtzioarekin. Programa honek erabiltzaileari bere altuera eta pisua galdetzen dizkio, eta hauek erabiltzen ditu bere GMI kalkulatzeko:\n\n```python\naltuera = float(input(\"Zein da zure altuera? \"))\npisua = float(input(\"Zein da zure pisua? \"))\n\naltuera = altuera / 100\ngmi = pisua / altuera ** 2\n\nprint(f\"GMIa {gmi} da\")\n```\n\nProgramaren inprimaketa adibide bat:\n\n```text\nZein da zure altuera? 163\nZein da zure pisua? 74.45\nGMIa 28.02137829801649 da\n```"
      }
    },
    {
      "type": "exercise",
      "exerciseId": "part01-09_times_five",
      "title": {
        "ENG": "Times five",
        "CAS": "Por cinco",
        "EUS": "Bider bost"
      },
      "description": {
        "ENG": "Please write a program which asks the user for a number. The program then prints out the number multiplied by five.",
        "CAS": "Escribe un programa que pida un número al usuario. Luego, el programa debe imprimir el número multiplicado por cinco.",
        "EUS": "Mesedez idatzi programa bat erabiltzaileari zenbaki bat eskatzen diona. Ondoren, programak zenbakia bostekin biderkatuta inprimatzen du."
      },
      "initialCode": {
        "ENG": "# Write your code here\n",
        "CAS": "# Escribe tu código aquí\n",
        "EUS": "# Idatzi zure kodea hemen\n"
      },
      "testCode": "\nimport unittest\nclass TestTimesFive(unittest.TestCase):\n    def test_output(self):\n        output = run_student_code(inputs=[\"3\"])\n        self.assertIn(\"15\", output)\n        self.assertIn(\"3 times 5 is 15\", output)\n"
    },
    {
      "type": "exercise",
      "exerciseId": "part01-10_name_and_age",
      "title": {
        "ENG": "Name and age",
        "CAS": "Nombre y edad",
        "EUS": "Izena eta adina"
      },
      "description": {
        "ENG": "Please write a program which asks the user for their name and year of birth. The program then prints out a message as follows:\n\nSample output:\nWhat is your name? Frances Fictitious\nWhich year were you born? 1990\nHi Frances Fictitious, you will be 31 years old at the end of the year 2021",
        "CAS": "Escribe un programa que pida al usuario su nombre y año de nacimiento. El programa debe imprimir un mensaje como sigue:\n\nEjemplo de salida:\nWhat is your name? Frances Fictitious\nWhich year were you born? 1990\nHi Frances Fictitious, you will be 31 years old at the end of the year 2021",
        "EUS": "Idatzi programa bat erabiltzaileari bere izena eta jaiotze-urtea eskatzen dizkiona. Ondoren, programak mezu bat inprimatzen du honela:\n\nIrteera adibidea:\nWhat is your name? Frances Fictitious\nWhich year were you born? 1990\nHi Frances Fictitious, you will be 31 years old at the end of the year 2021"
      },
      "initialCode": {
        "ENG": "# Write your code here\n",
        "CAS": "# Escribe tu código aquí\n",
        "EUS": "# Idatzi zure kodea hemen\n"
      },
      "testCode": "\nimport unittest\nclass TestNameAge(unittest.TestCase):\n    def test_output(self):\n        output = run_student_code(inputs=[\"Frances\", \"1990\"])\n        self.assertIn(\"31 years old\", output)\n        self.assertIn(\"Frances\", output)\n"
    },
    {
      "type": "markdown",
      "content": {
        "ENG": "# Using variables\n\nLet's have a look at a program which calculates the sum of three numbers given by the user:\n\n```python\nnumber1 = int(input(\"First number: \"))\nnumber2 = int(input(\"Second number: \"))\nnumber3 = int(input(\"Third number: \"))\n\nsum = number1 + number2 + number3\nprint(f\"The sum of the numbers: {sum}\")\n```\n\nAn example execution of the program:\n\n```text\nFirst number: 5\nSecond number: 21\nThird number: 7\nThe sum of the numbers: 33\n```\n\nThe program uses four different variables, but two would easily suffice in this case:\n\n```python\nsum = 0\n\nnumber = int(input(\"First number: \"))\nsum = sum + number\n\nnumber = int(input(\"Second number: \"))\nsum = sum + number\n\nnumber = int(input(\"Third number: \"))\nsum = sum + number\n\nprint(f\"The sum of the numbers: {sum}\")\n```\n\nNow all inputs from the user are read into the one and the same variable `number`. The value of the variable `sum` is increased by the value of the variable `number` each time the user inputs a new number.\n\nLet's take a closer look at this command:\n\n```python\nsum = sum + number\n```\n\nHere, the value of the variable `sum` and the value of the variable `number` are added together, and the result is stored back in the variable `sum`. For example, if before the command the value of `sum` is 3 and the value of `number` is 2, after the command is executed, the value of `sum` is 5.\n\nIncreasing the value of a variable is a very common operation. As such, there is a commonly used shorthand notation which achieves the same result as the explicit summing up above:\n\n```python\nsum += number\n```\n\nThis allows us to write the above program a little more concisely:\n\n```python\nsum = 0\n\nnumber = int(input(\"First number: \"))\nsum += number\n\nnumber = int(input(\"Second number: \"))\nsum += number\n\nnumber = int(input(\"Third number: \"))\nsum += number\n\nprint(f\"The sum of the numbers: {sum}\")\n```\n\nIn fact, we don't necessarily need the variable `number` at all. The user inputs can also be processed like this:\n\n```python\nsum = 0\n\nsum += int(input(\"First number: \"))\nsum += int(input(\"Second number: \"))\nsum += int(input(\"Third number: \"))\n\nprint(f\"The sum of the numbers: {sum}\")\n```\n\nOf course, it will depend on the context how many variables are needed. If there is a need to remember each value the user inputs, it will not be possible to \"reuse\" the same variable to read different values from the user. Consider this:\n\n```python\nnumber1 = int(input(\"First number: \"))\nnumber2 = int(input(\"Second number: \"))\n\nprint(f\"{number1} + {number2} = {number1+number2}\")\n```\n\n```text\nFirst number: 2\nSecond number: 3\n2 + 3 = 5\n```\n\nOn the other hand, the above program does not have a named variable for storing the sum of the two values. \"Reusing\" a variable only makes sense when there is a need to temporarily store things of a similar type and purpose, for example when summing up numbers.\n\nIn the following example the variable `data` is used to first store the name of the user, and then their age. This is not at all sensible.\n\n```python\ndata = input(\"What is your name? \")\nprint(\"Hi \" + data + \"!\")\n\ndata = int(input(\"How old are you? \"))\n# the program continues...\n```\n\nA better idea is to use separate variables, with descriptive names:\n\n```python\nname = input(\"What is your name? \")\nprint(\"Hi \" + name + \"!\")\n\nage = int(input(\"How old are you? \"))\n# the program continues...\n```",
        "CAS": "# Usando variables\n\nEchemos un vistazo a un programa que calcula la suma de tres números dados por el usuario:\n\n```python\nnumero1 = int(input(\"Primer número: \"))\nnumero2 = int(input(\"Segundo número: \"))\nnumero3 = int(input(\"Tercer número: \"))\n\nsuma = numero1 + numero2 + numero3\nprint(f\"La suma de los números: {suma}\" )\n```\n\nUn ejemplo de ejecución del programa:\n\n```text\nPrimer número: 5\nSegundo número: 21\nTercer número: 7\nLa suma de los números: 33\n```\n\nEl programa utiliza cuatro variables diferentes, pero dos bastarían fácilmente en este caso:\n\n```python\nsuma = 0\n\nnumero = int(input(\"Primer número: \"))\nsuma = suma + numero\n\nnumero = int(input(\"Segundo número: \"))\nsuma = suma + numero\n\nnumero = int(input(\"Tercer número: \"))\nsuma = suma + numero\n\nprint(f\"La suma de los números: {suma}\" )\n```\n\nAhora todas las entradas del usuario se leen en la misma variable `numero`. El valor de la variable `suma` se incrementa con el valor de la variable `numero` cada vez que el usuario introduce un nuevo número.\n\nEchemos un vistazo más de cerca a este comando:\n\n```python\nsuma = suma + numero\n```\n\nAquí, el valor de la variable `suma` y el valor de la variable `numero` se suman, y el resultado se almacena de nuevo en la variable `suma`. Por ejemplo, si antes del comando el valor de `suma` es 3 y el valor de `numero` es 2, después de ejecutar el comando, el valor de `suma` es 5.\n\nIncrementar el valor de una variable es una operación muy común. Como tal, existe una notación abreviada comúnmente utilizada que logra el mismo resultado que la suma explícita anterior:\n\n```python\nsuma += numero\n```\n\nEsto nos permite escribir el programa anterior de manera un poco más concisa:\n\n```python\nsuma = 0\n\nnumero = int(input(\"Primer número: \"))\nsuma += numero\n\nnumero = int(input(\"Segundo número: \"))\nsuma += numero\n\nnumero = int(input(\"Tercer número: \"))\nsuma += numero\n\nprint(f\"La suma de los números: {suma}\" )\n```\n\nDe hecho, no necesitamos necesariamente la variable `numero` en absoluto. Las entradas del usuario también se pueden procesar así:\n\n```python\nsuma = 0\n\nsuma += int(input(\"Primer número: \"))\nsuma += int(input(\"Segundo número: \"))\nsuma += int(input(\"Tercer número: \"))\n\nprint(f\"La suma de los números: {suma}\" )\n```\n\nPor supuesto, dependerá del contexto cuántas variables se necesiten. Si es necesario recordar cada valor que el usuario introduce, no será posible \"reutilizar\" la misma variable para leer diferentes valores del usuario. Considera lo siguiente:\n\n```python\nnumero1 = int(input(\"Primer número: \"))\nnumero2 = int(input(\"Segundo número: \"))\n\nprint(f\"{numero1} + {numero2} = {numero1+numero2}\" )\n```\n\n```text\nPrimer número: 2\nSegundo número: 3\n2 + 3 = 5\n```\n\nPor otro lado, el programa anterior no tiene una variable con nombre para almacenar la suma de los dos valores. \"Reutilizar\" una variable solo tiene sentido cuando hay necesidad de almacenar temporalmente cosas de un tipo y propósito similar, por ejemplo, al sumar números.\n\nEn el siguiente ejemplo, la variable `datos` se usa primero para almacenar el nombre del usuario, y luego su edad. Esto no es en absoluto sensato.\n\n```python\ndatos = input(\"¿Cómo te llamas? \")\nprint(\"Hola \" + datos + \"!\")\n\ndatos = int(input(\"¿Cuántos años tienes? \"))\n# el programa continúa...\n```\n\nUna mejor idea es usar variables separadas, con nombres descriptivos:\n\n```python\nnombre = input(\"¿Cómo te llamas? \")\nprint(\"Hola \" + nombre + \"!\")\n\nedad = int(input(\"¿Cuántos años tienes? \"))\n# el programa continúa...\n```",
        "EUS": "# Aldagaiak erabiltzen\n\nIkus dezagun erabiltzaileak emandako hiru zenbakiren batura kalkulatzen duen programa bat:\n\n```python\nzenbakia1 = int(input(\"Lehen zenbakia: \"))\nzenbakia2 = int(input(\"Bigarren zenbakia: \"))\nzenbakia3 = int(input(\"Hirugarren zenbakia: \"))\n\nbatura = zenbakia1 + zenbakia2 + zenbakia3\nprint(f\"Zenbakien batura: {batura}\" )\n```\n\nProgramaren exekuzio baten adibidea:\n\n```text\nLehen zenbakia: 5\nBigarren zenbakia: 21\nHirugarren zenbakia: 7\nZenbakien batura: 33\n```\n\nProgramak lau aldagai ezberdin erabiltzen ditu, baina bi nahikoak lirateke kasu honetan:\n\n```python\nbatura = 0\n\nzenbakia = int(input(\"Lehen zenbakia: \"))\nbatura = batura + zenbakia\n\nzenbakia = int(input(\"Bigarren zenbakia: \"))\nbatura = batura + zenbakia\n\nzenbakia = int(input(\"Hirugarren zenbakia: \"))\nbatura = batura + zenbakia\n\nprint(f\"Zenbakien batura: {batura}\" )\n```\n\nOrain erabiltzailearen sarrera guztiak `zenbakia` aldagai berean irakurtzen dira. `batura` aldagaiaren balioa `zenbakia` aldagaiaren balioarekin handitzen da erabiltzaileak zenbaki berri bat sartzen duen bakoitzean.\n\nAzter dezagun gertuagotik komando hau:\n\n```python\nbatura = batura + zenbakia\n```\n\nHemen, `batura` aldagaiaren balioa eta `zenbakia` aldagaiaren balioa batzen dira, eta emaitza `batura` aldagaian gordetzen da berriro. Adibidez, komandoa baino lehen `batura`-ren balioa 3 bada eta `zenbakia`-rena 2 bada, komandoa exekutatu ondoren, `batura`-ren balioa 5 da.\n\nAldagai baten balioa handitzea oso eragiketa arrunta da. Horregatik, bada goiko batuketa esplizituaren emaitza bera lortzen duen idazkera laburtu bat:\n\n```python\nbatura += zenbakia\n```\n\nHonek goiko programa pixka bat laburrago idazteko aukera ematen digu:\n\n```python\nbatura = 0\n\nzenbakia = int(input(\"Lehen zenbakia: \"))\nbatura += zenbakia\n\nzenbakia = int(input(\"Bigarren zenbakia: \"))\nbatura += zenbakia\n\nzenbakia = int(input(\"Hirugarren zenbakia: \"))\nbatura += zenbakia\n\nprint(f\"Zenbakien batura: {batura}\" )\n```\n\nIzan ere, ez dugu `zenbakia` aldagaia zertan behar. Erabiltzailearen sarrerak honela ere prozesatu daitezke:\n\n```python\nbatura = 0\n\nbatura += int(input(\"Lehen zenbakia: \"))\nbatura += int(input(\"Bigarren zenbakia: \"))\nbatura += int(input(\"Hirugarren zenbakia: \"))\n\nprint(f\"Zenbakien batura: {batura}\" )\n```\n\nNoski, testuinguruaren araberakoa izango da zenbat aldagai behar diren. Erabiltzaileak sartzen duen balio bakoitza gogoratu behar bada, ezinezkoa izango da aldagai bera \"berrerabiltzea\" erabiltzailearen balio ezberdinak irakurtzeko. Kontuan hartu hau:\n\n```python\nzenbakia1 = int(input(\"Lehen zenbakia: \"))\nzenbakia2 = int(input(\"Bigarren zenbakia: \"))\n\nprint(f\"{zenbakia1} + {zenbakia2} = {zenbakia1+zenbakia2}\" )\n```\n\n```text\nLehen zenbakia: 2\nBigarren zenbakia: 3\n2 + 3 = 5\n```\n\nBestalde, goiko programak ez du bi balioen batura gordetzeko izendatutako aldagairik. \"Berrerabiltzeak\" zentzua du bakarrik antzeko mota eta helburuko gauzak aldi baterako gorde behar direnean, adibidez zenbakiak batzerakoan.\n\nHurrengo adibidean `datuak` aldagaia erabiltzen da lehenik erabiltzailearen izena gordetzeko, eta gero bere adina. Hau ez da batere zentzuzkoa.\n\n```python\ndatuak = input(\"Nola duzu izena? \")\nprint(\"Kaixo \" + datuak + \"!\")\n\ndatuak = int(input(\"Zenbat urte dituzu? \"))\n# programak jarraitzen du...\n```\n\nIdeia hobea da aldagai bereiziak erabiltzea, izen deskribatzaileekin:\n\n```python\nizena = input(\"Nola duzu izena? \")\nprint(\"Kaixo \" + izena + \"!\")\n\nadina = int(input(\"Zenbat urte dituzu? \"))\n# programak jarraitzen du...\n```"
      }
    },
    {
      "type": "exercise",
      "exerciseId": "part01-11_seconds_in_a_day",
      "title": {
        "ENG": "Seconds in a day",
        "CAS": "Segundos en un día",
        "EUS": "Segunduak egun batean"
      },
      "description": {
        "ENG": "Please write a program which asks the user for a number of days. The program then prints out the number of seconds in the amount of days given.",
        "CAS": "Escribe un programa que pida al usuario un número de días. Luego, el programa imprime el número de segundos en la cantidad de días dada.",
        "EUS": "Idatzi programa bat erabiltzaileari egun kopuru bat eskatzen diona. Ondoren, programak emandako egun kopuruko segundo kopurua inprimatzen du."
      },
      "initialCode": {
        "ENG": "# Write your code here\n",
        "CAS": "# Escribe tu código aquí\n",
        "EUS": "# Idatzi zure kodea hemen\n"
      },
      "testCode": "\nimport unittest\nclass TestSeconds(unittest.TestCase):\n    def test_output(self):\n        output = run_student_code(inputs=[\"1\"])\n        self.assertIn(\"86400\", output)\n        \n        output2 = run_student_code(inputs=[\"7\"])\n        self.assertIn(\"604800\", output2)\n"
    },
    {
      "type": "exercise",
      "exerciseId": "part01-12_fix_product",
      "title": {
        "ENG": "Fix the code: Product",
        "CAS": "Arregla el código: Producto",
        "EUS": "Konpondu kodea: Biderkadura"
      },
      "description": {
        "ENG": "This program asks the user for three numbers. The program then prints out their product, that is, the numbers multiplied by each other. There is, however, something wrong with the program. Please fix it.",
        "CAS": "Este programa pide al usuario tres números. Luego imprime su producto. Sin embargo, hay algo mal en el programa. Por favor, arréglalo.",
        "EUS": "Programa honek hiru zenbaki eskatzen dizkio erabiltzaileari. Ondoren, haien biderkadura inprimatzen du. Hala ere, zerbait gaizki dago programan. Mesedez, konpondu."
      },
      "initialCode": {
        "ENG": "number = int(input(\"Please type in the first number: \"))\nnumber = int(input(\"Please type in the second number: \"))\nnumber = int(input(\"Please type in the third number: \"))\n\nproduct = number * number * number\n\nprint(\"The product is\", product)",
        "CAS": "number = int(input(\"Por favor, escribe el primer número: \"))\nnumber = int(input(\"Por favor, escribe el segundo número: \"))\nnumber = int(input(\"Por favor, escribe el tercer número: \"))\n\nproduct = number * number * number\n\nprint(\"El producto es\", product)",
        "EUS": "number = int(input(\"Mesedez, idatzi lehen zenbakia: \"))\nnumber = int(input(\"Mesedez, idatzi bigarren zenbakia: \"))\nnumber = int(input(\"Mesedez, idatzi hirugarren zenbakia: \"))\n\nproduct = number * number * number\n\nprint(\"Biderkadura da\", product)"
      },
      "testCode": "\nimport unittest\nclass TestProduct(unittest.TestCase):\n    def test_output(self):\n        # 2, 3, 5 -> 30\n        output = run_student_code(inputs=[\"2\", \"3\", \"5\"])\n        self.assertIn(\"30\", output)\n"
    },
    {
      "type": "exercise",
      "exerciseId": "part01-13_sum_and_product",
      "title": {
        "ENG": "Sum and product",
        "CAS": "Suma y producto",
        "EUS": "Batuketa eta biderkadura"
      },
      "description": {
        "ENG": "Please write a program which asks the user for two numbers. The program will then print out the sum and the product of the two numbers.",
        "CAS": "Escribe un programa que pida al usuario dos números. El programa imprimirá la suma y el producto de los dos números.",
        "EUS": "Idatzi programa bat erabiltzaileari bi zenbaki eskatzen dizkiona. Programak bi zenbakien batura eta biderkadura inprimatuko ditu."
      },
      "initialCode": {
        "ENG": "# Write your code here\n",
        "CAS": "# Escribe tu código aquí\n",
        "EUS": "# Idatzi zure kodea hemen\n"
      },
      "testCode": "\nimport unittest\nclass TestSumProd(unittest.TestCase):\n    def test_output(self):\n        output = run_student_code(inputs=[\"3\", \"7\"])\n        self.assertIn(\"10\", output)\n        self.assertIn(\"21\", output)\n"
    },
    {
      "type": "exercise",
      "exerciseId": "part01-14_sum_and_mean",
      "title": {
        "ENG": "Sum and mean",
        "CAS": "Suma y media",
        "EUS": "Batuketa eta batezbestekoa"
      },
      "description": {
        "ENG": "Please write a program which asks the user for four numbers. The program then prints out the sum and the mean of the numbers.",
        "CAS": "Escribe un programa que pida al usuario cuatro números. El programa imprimirá la suma y la media de los números.",
        "EUS": "Idatzi programa bat erabiltzaileari lau zenbaki eskatzen dizkiona. Programak zenbakien batura eta batezbestekoa inprimatuko ditu."
      },
      "initialCode": {
        "ENG": "# Write your code here\n",
        "CAS": "# Escribe tu código aquí\n",
        "EUS": "# Idatzi zure kodea hemen\n"
      },
      "testCode": "\nimport unittest\nclass TestSumMean(unittest.TestCase):\n    def test_output(self):\n        output = run_student_code(inputs=[\"2\", \"1\", \"6\", \"7\"])\n        self.assertIn(\"16\", output)\n        self.assertIn(\"4.0\", output)\n"
    },
    {
      "type": "exercise",
      "exerciseId": "part01-15_food_expenditure",
      "title": {
        "ENG": "Food expenditure",
        "CAS": "Gasto en comida",
        "EUS": "Janari gastua"
      },
      "description": {
        "ENG": "Please write a program which estimates a user's typical food expenditure. The program asks the user how many times a week they eat at the student cafeteria. Then it asks for the price of a typical student lunch, and for money spent on groceries during the week. Based on this information the program calculates the user's typical food expenditure both weekly and daily.",
        "CAS": "Escribe un programa que estime el gasto típico en comida de un usuario. Pregunta cuántas veces come en la cafetería, el precio del almuerzo y el gasto en comestibles. Calcula el gasto semanal y diario.",
        "EUS": "Idatzi erabiltzailearen janari-gastu tipikoa kalkulatzen duen programa. Galdetu zenbat aldiz jaten duen kafetegian, bazkariaren prezioa eta janari-erosketetan gastatutako dirua. Kalkulatu asteko eta eguneko gastua."
      },
      "initialCode": {
        "ENG": "# Write your code here\n",
        "CAS": "# Escribe tu código aquí\n",
        "EUS": "# Idatzi zure kodea hemen\n"
      },
      "testCode": "\nimport unittest\nclass TestFood(unittest.TestCase):\n    def test_output(self):\n        # 4 times, 2.5 price, 28.5 groceries\n        # Weekly: 4 * 2.5 + 28.5 = 10 + 28.5 = 38.5\n        # Daily: 38.5 / 7 = 5.5\n        output = run_student_code(inputs=[\"4\", \"2.5\", \"28.5\"])\n        self.assertIn(\"Daily: 5.5 euros\", output)\n        self.assertIn(\"Weekly: 38.5 euros\", output)\n"
    },
    {
      "type": "exercise",
      "exerciseId": "part01-16_students_in_groups",
      "title": {
        "ENG": "Students in groups",
        "CAS": "Estudiantes en grupos",
        "EUS": "Ikasleak taldetan"
      },
      "description": {
        "ENG": "Please write a program which asks for the number of students on a course and the desired group size. The program will then print out the number of groups formed from the students on the course. If the division is not even, one of the groups may have fewer members than specified. Hint: the integer division operator // could come in handy here.",
        "CAS": "Escribe un programa que pida el número de estudiantes y el tamaño del grupo deseado. Imprime el número de grupos formados. Si la división no es exacta, un grupo puede tener menos miembros.",
        "EUS": "Idatzi programa bat ikasle kopurua eta taldearen tamaina eskatzen dituena. Inprimatu osatutako talde kopurua. Zatiketa zehatza ez bada, talde batek kide gutxiago izan ditzake."
      },
      "initialCode": {
        "ENG": "# Write your code here\n",
        "CAS": "# Escribe tu código aquí\n",
        "EUS": "# Idatzi zure kodea hemen\n"
      },
      "testCode": "\nimport unittest\nclass TestGroups(unittest.TestCase):\n    def test_output(self):\n        # 8 students, 4 per group -> 2\n        out1 = run_student_code(inputs=[\"8\", \"4\"])\n        self.assertIn(\"2\", out1)\n        \n        # 11 students, 3 per group -> 4 groups (3 full + 1 partial)\n        out2 = run_student_code(inputs=[\"11\", \"3\"])\n        self.assertIn(\"4\", out2)\n"
    }
  ]
}
fs.writeFileSync('src/data/part1/section4.json', JSON.stringify(section4, null, 2));
console.log("Successfully rewrote section4.json");