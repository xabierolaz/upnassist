import { CoursePage } from '../mooc-exercises';

export const section5: CoursePage = {
  id: "part1-5",
  title: {
    ENG: `Conditional statements`,
    CAS: `Sentencias condicionales`,
    EUS: `Baldintzazko sententziak`
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `\n# Conditional statements\n\n## After this section:\n\n- You will be able to use a simple conditional statement in programming\n- You will know what a Boolean value is\n- You will be able to express conditionals with comparison operators\n\nThus far, every program we have written has been executed line by line in order. Instead of executing every line of code every single time a program is run, it is often useful to create sections of the program which are only executed in certain situations.\n\nFor example, the following code checks whether the user is of age:\n\n\`\`\`python\nage = int(input(\"How old are you? \"))\n\nif age > 17:\n    print(\"You are of age!\")\n    print(\"Here's a copy of GTA6 for you. \")\n\nprint(\"Next customer, please!\")\n\`\`\`\n\nWhen the user is over the age of 17, the execution of the program should look like this:\n\n<sample-output>\n\nHow old are you? **18**\nYou are of age!\nHere's a copy of GTA6 for you.\nNext customer, please!\n\n</sample-output>\n\nIf the user is 17 or under, only this is printed out:\n\n<sample-output>\n\nHow old are you? **16**\nNext customer, please!\n\n</sample-output>\n\nThese examples show us that the value given as input affects which parts of the program are executed. The program contains a _conditional statement_ with a block of code which is executed only if the condition in the statement is true.\n\nIn a conditional statement the keyword \`if\` is followed by a _condition_, such as a comparison of two values. The code block following this header line is only executed if the condition is true.\n\nNotice the colon character \`:\` following the \`if\` header. Without it, Python will raise a SyntaxError.\n\n## Comparison operators\n\nVery typically conditions consist of comparing two values. Here is a table with the most common comparison operators used in Python:\n\n| Operator | Purpose | Example |\n| :---: | :--- | :--- |\n| \`==\` | Equal to | \`a == b\` |\n| \`!=\` | Not equal to | \`a != b\` |\n| \`>\` | Greater than | \`a > b\` |\n| \`>=\` | Greater than or equal to | \`a >= b\` |\n| \`<\` | Less than | \`a < b\` |\n| \`<=\` | Less than or equal to | \`a <= b\` |\n\nLet's have a look at a program which prints out different things based on whether the number the user inputs is negative, positive, or equal to zero:\n\n\`\`\`python\nnumber = int(input(\"Please type in a number: \"))\n\nif number < 0:\n    print(\"The number is negative.\")\n\nif number > 0:\n    print(\"The number is positive.\")\n\nif number == 0:\n    print(\"The number is zero.\")\n\`\`\`\n\n## Indentation\n\nPython recognises that a block of code is part of a conditional statement if each line of code in the block is _indented_ the same. That is, there should be a bit of whitespace at the beginning of every line of code within the code block. Each line should have the same amount of whitespace.\n\nFor example:\n\n\`\`\`python\npassword = input(\"Please type in a password: \")\n\nif password == \"kittycat\":\n    print(\"You knew the password!\")\n    print(\"You must be either the intended user...\")\n    print(\"...or quite an accomplished hacker.\")\n\nprint(\"The program has finished its execution. Thanks and bye!\")\n\`\`\`\n`,
        CAS: `\n# Sentencias condicionales\n\n## Después de esta sección:\n\n- Podrás usar una sentencia condicional simple en programación\n- Sabrás qué es un valor booleano\n- Podrás expresar condicionales con operadores de comparación\n\nHasta ahora, cada programa que hemos escrito se ha ejecutado línea por línea en orden. En lugar de ejecutar cada línea de código cada vez que se ejecuta un programa, a menudo es útil crear secciones del programa que solo se ejecuten en ciertas situaciones.\n\nPor ejemplo, el siguiente código verifica si el usuario es mayor de edad:\n\n\`\`\`python\nage = int(input(\"¿Cuántos años tienes? \"))\n\nif age > 17:\n    print(\"¡Eres mayor de edad!\")\n    print(\"Aquí tienes una copia de GTA6 para ti. \")\n\nprint(\"¡Siguiente cliente, por favor!\")\n\`\`\`\n\nCuando el usuario tiene más de 17 años, la ejecución del programa debería verse así:\n\n<sample-output>\n\n¿Cuántos años tienes? **18**\n¡Eres mayor de edad!\nAquí tienes una copia de GTA6 para ti.\n¡Siguiente cliente, por favor!\n\n</sample-output>\n\nSi el usuario tiene 17 años o menos, solo se imprime esto:\n\n<sample-output>\n\n¿Cuántos años tienes? **16**\n¡Siguiente cliente, por favor!\n\n</sample-output>\n\nEstos ejemplos nos muestran que el valor dado como entrada afecta qué partes del programa se ejecutan. El programa contiene una _sentencia condicional_ con un bloque de código que se ejecuta solo si la condición en la sentencia es verdadera.\n\nEn una sentencia condicional, la palabra clave \`if\` va seguida de una _condición_, como una comparación de dos valores. El bloque de código que sigue a esta línea de encabezado solo se ejecuta si la condición es verdadera.\n\nFíjate en el carácter de dos puntos \`:\` que sigue al encabezado \`if\`. Sin él, Python generará un SyntaxError.\n\n## Operadores de comparación\n\nMuy típicamente las condiciones consisten en comparar dos valores. Aquí hay una tabla con los operadores de comparación más comunes usados en Python:\n\n| Operador | Propósito | Ejemplo |\n| :---: | :--- | :--- |\n| \`==\` | Igual a | \`a == b\` |\n| \`!=\` | No es igual a | \`a != b\` |\n| \`>\` | Mayor que | \`a > b\` |\n| \`>=\` | Mayor o igual que | \`a >= b\` |\n| \`<\` | Menor que | \`a < b\` |\n| \`<=\` | Menor o igual que | \`a <= b\` |\n\nVeamos un programa que imprime cosas diferentes según si el número que el usuario ingresa es negativo, positivo o igual a cero:\n\n\`\`\`python\nnumber = int(input(\"Por favor escribe un número: \"))\n\nif number < 0:\n    print(\"El número es negativo.\")\n\nif number > 0:\n    print(\"El número es positivo.\")\n\nif number == 0:\n    print(\"El número es cero.\")\n\`\`\`\n\n## Indentación\n\nPython reconoce que un bloque de código es parte de una sentencia condicional si cada línea de código en el bloque está _indentada_ igual. Es decir, debe haber un poco de espacio en blanco al comienzo de cada línea de código dentro del bloque de código. Cada línea debe tener la misma cantidad de espacio en blanco.\n\nPor ejemplo:\n\n\`\`\`python\npassword = input(\"Por favor escribe una contraseña: \")\n\nif password == \"kittycat\":\n    print(\"¡Sabías la contraseña!\")\n    print(\"Debes ser el usuario autorizado...\")\n    print(\"...o un hacker muy hábil.\")\n\nprint(\"El programa ha terminado su ejecución. ¡Gracias y adiós!\")\n\`\`\`\n`,
        EUS: `\n# Baldintzazko sententziak\n\n## Atal honen ondoren:\n\n- Baldintzazko sententzia sinple bat erabiltzeko gai izango zara programazioan\n- Jakingo duzu zer den balio boolear bat\n- Baldintzak konparazio-eragileekin adierazteko gai izango zara\n\nOrain arte, idatzi dugun programa bakoitza lerroz lerro exekutatu da ordenan. Programa bat exekutatzen den bakoitzean kode lerro bakoitza exekutatu beharrean, askotan erabilgarria da egoera jakin batzuetan bakarrik exekutatzen diren programa atalak sortzea.\n\nAdibidez, kode honek erabiltzailea adin nagusikoa den egiaztatzen du:\n\n\`\`\`python\nage = int(input(\"Zenbat urte dituzu? \"))\n\nif age > 17:\n    print(\"Adin nagusikoa zara!\")\n    print(\"Hemen daukazu GTA6-ren kopia bat zuretzat. \")\n\nprint(\"Hurrengo bezeroa, mesedez!\")\n\`\`\`\n\nErabiltzaileak 17 urte baino gehiago dituenean, programaren exekuzioa honelakoa izan beharko litzateke:\n\n<sample-output>\n\nZenbat urte dituzu? **18**\nAdin nagusikoa zara!\nHemen daukazu GTA6-ren kopia bat zuretzat.\nHurrengo bezeroa, mesedez!\n\n</sample-output>\n\nErabiltzaileak 17 urte edo gutxiago baditu, hau bakarrik inprimatzen da:\n\n<sample-output>\n\nZenbat urte dituzu? **16**\nHurrengo bezeroa, mesedez!\n\n</sample-output>\n\nAdibide hauek erakusten digute sarrera gisa emandako balioak programaren zein zati exekutatzen diren eragiten duela. Programak _baldintzazko sententzia_ bat dauka, sententzian dagoen baldintza egia bada bakarrik exekutatzen den kode bloke batekin.\n\nBaldintzazko sententzia batean \`if\` gako-hitza ondoren _baldintza_ bat dator, bi balioren arteko konparazio bat bezala. Goiburuko lerro honen ondorengo kode blokea baldintza egia bada bakarrik exekutatzen da.\n\nOhartu \`if\` goiburuaren ondorengo \`:\` bi puntuetan. Hori gabe, Pythonek SyntaxError bat emango du.\n\n## Konparazio-eragileak\n\nOso tipikoa da baldintzak bi balio konparatzean oinarritzea. Hemen dago Python-en erabiltzen diren konparazio-eragile ohikoenen taula:\n\n| Eragilea | Helburua | Adibidea |\n| :---: | :--- | :--- |\n| \`==\` | Berdin | \`a == b\` |\n| \`!=\` | Ezberdin | \`a != b\` |\n| \`>\` | Handiago | \`a > b\` |\n| \`>=\` | Handiago edo berdin | \`a >= b\` |\n| \`<\` | Txikiago | \`a < b\` |\n| \`<=\` | Txikiago edo berdin | \`a <= b\` |\n\nIkus dezagun programa bat, zeinak gauza ezberdinak inprimatzen dituen erabiltzaileak sartzen duen zenbakia negatiboa, positiboa edo zero den kontuan hartuta:\n\n\`\`\`python\nnumber = int(input(\"Mesedez idatzi zenbaki bat: \"))\n\nif number < 0:\n    print(\"Zenbakia negatiboa da.\")\n\nif number > 0:\n    print(\"Zenbakia positiboa da.\")\n\nif number == 0:\n    print(\"Zenbakia zero da.\")\n\`\`\`\n\n## Indentazioa\n\nPython-ek ezagutzen du kode bloke bat baldintzazko sententzia baten parte dela, bloke horretako kode lerro bakoitza berdin _indentatuta_ badago. Hau da, zuriune pixka bat egon behar da kode blokeko kode lerro bakoitzaren hasieran. Lerro bakoitzak zuriune kopuru bera izan behar du.\n\nAdibidez:\n\n\`\`\`python\npassword = input(\"Mesedez idatzi pasahitz bat: \")\n\nif password == \"kittycat\":\n    print(\"Bazenekien pasahitza!\")\n    print(\"Baimendutako erabiltzailea izan behar duzu...\")\n    print(\"...edo hacker trebe bat.\")\n\nprint(\"Programak amaitu du exekuzioa. Eskerrik asko eta agur!\")\n\`\`\`\n`
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
          ENG: `Please write a program which asks the user for an integer number. The program should print out 'Orwell' if the number is exactly 1984.`,
          CAS: `Por favor, escribe un programa que pida un número entero al usuario. El programa debe imprimir 'Orwell' si el número es exactamente 1984.`,
          EUS: `Idatzi programa bat erabiltzaileari zenbaki oso bat eskatzen diona. Programak 'Orwell' inprimatu behar du zenbakia zehazki 1984 bada.`
      },
      initialCode: `# Write your solution here\n`,
      testCode: `\nimport unittest\nclass TestOrwell(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['1984'])\n        self.assertIn("Orwell", out)\n        \n        out2 = run_student_code(inputs=['2020'])\n        self.assertNotIn("Orwell", out2)\n`
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
          ENG: `Please write a program which asks the user for an integer number. If the number is less than zero, the program should print out the number multiplied by -1. Otherwise the program prints out the number as is.`,
          CAS: `Por favor, escribe un programa que pida un número entero al usuario. Si el número es menor que cero, el programa debe imprimir el número multiplicado por -1. De lo contrario, imprime el número tal cual.`,
          EUS: `Idatzi programa bat zenbaki oso bat eskatzen duena. Zenbakia zero baino txikiagoa bada, programak zenbakia -1ekin biderkatuta inprimatu behar du. Bestela zenbakia bere horretan inprimatzen du.`
      },
      initialCode: `# Write your solution here\n`,
      testCode: `\nimport unittest\nclass TestAbsolute(unittest.TestCase):\n    def test_neg(self):\n        out = run_student_code(inputs=['-5'])\n        self.assertIn("5", out)\n        if "-5" in out and "5" not in out:\n             self.fail("Has impreso el número negativo tal cual. Debes multiplicarlo por -1 si es menor que 0.")\n        self.assertNotIn("-5", out)\n        \n    def test_pos(self):\n        out = run_student_code(inputs=['5'])\n        self.assertIn("5", out)\n`
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
          ENG: `Please write a program which asks for the user's name. If the name is anything but 'Jerry', the program then asks for the number of portions of soup.`,
          CAS: `Por favor, escribe un programa que pida el nombre del usuario. Si el nombre es cualquier cosa excepto 'Jerry', el programa pide el número de porciones de sopa.`,
          EUS: `Idatzi programa bat erabiltzailearen izena eskatzen duena. Izena 'Jerry' ez den beste edozein bada, programak zopa zati kopurua galdetzen du.`
      },
      initialCode: `# Write your solution here\n`,
      testCode: `\nimport unittest\nclass TestSoup(unittest.TestCase):\n    def test_jerry(self):\n        try:\n            out = run_student_code(inputs=['Jerry'])\n            self.assertIn("Next person", out)\n        except:\n            self.fail(tr("If the name is Jerry, the program should NOT ask for portions. It's waiting for input it shouldn't be asking for.", "Si el nombre es Jerry, el programa NO debería preguntar por las porciones. Se ha quedado esperando un input que no debería pedir.", "Izena Jerry bada, programak EZ luke zatiak eskatu behar. Eskatu behar ez duen sarrera baten zain geratu da."))\n\n    def test_other(self):\n        out = run_student_code(inputs=['Kramer', '2'])\n        self.assertIn("11.8", out)\n`
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
          CAS: `Por favor, escribe un programa que pida un número entero al usuario. El programa debe imprimir la magnitud del número.`,
          EUS: `Idatzi programa bat zenbaki oso bat eskatzen duena. Programak zenbakiaren magnitudea inprimatu behar du.`
      },
      initialCode: `# Write your solution here\n`,
      testCode: `\nimport unittest\nclass TestOrder(unittest.TestCase):\n    def test_1000(self):\n        out = run_student_code(inputs=['1000'])\n        self.assertIn("Thank you!", out)\n        self.assertNotIn("smaller than", out)\n\n    def test_900(self):\n        out = run_student_code(inputs=['900'])\n        self.assertIn("smaller than 1000", out)\n        self.assertNotIn("smaller than 100", out)\n`
    },
    {
      type: 'markdown',
      content: {
        ENG: `\n## Boolean values and Boolean expressions\n\nAny condition used in a conditional statement will result in a truth value, that is, either true or false. For example, the condition \`a < 5\` is true if \`a\` is less than 5, and false if \`a\` is equal to or greater than 5.\n\nThese types of values are often called _Boolean_ values, named after the English mathematician George Boole. In Python they are handled by the \`bool\` data type. Variables of type \`bool\` can only have two values: \`True\` or \`False\`.\n\nAny bit of code that results in a Boolean value is called a _Boolean expression_. For example, the condition in a conditional statement is always a Boolean expression, and the words _condition_ and _Boolean expression_ can often be used interchangeably.\n\nThe result of a Boolean expression can be stored in a variable just like the result of any numerical calculation:\n\n\`\`\`python\na = 3\ncondition = a < 5\nprint(condition)\nif condition:\n    print(\"a is less than 5\")\n\`\`\`\n\n<sample-output>\n\nTrue\na is less than 5\n\n</sample-output>\n`,
        CAS: `\n## Valores booleanos y expresiones booleanas\n\nCualquier condición utilizada en una sentencia condicional resultará en un valor de verdad, es decir, verdadero o falso. Por ejemplo, la condición \`a < 5\` es verdadera si \`a\` es menor que 5, y falsa si \`a\` es igual o mayor que 5.\n\nEstos tipos de valores a menudo se llaman valores _booleanos_, nombrados en honor al matemático inglés George Boole. En Python son manejados por el tipo de dato \`bool\`. Las variables de tipo \`bool\` solo pueden tener dos valores: \`True\` (Verdadero) o \`False\` (Falso).\n\nCualquier fragmento de código que resulte en un valor booleano se llama _expresión booleana_. Por ejemplo, la condición en una sentencia condicional es siempre una expresión booleana, y las palabras _condición_ y _expresión booleana_ a menudo se pueden usar indistintamente.\n\nEl resultado de una expresión booleana se puede almacenar en una variable al igual que el resultado de cualquier cálculo numérico:\n\n\`\`\`python\na = 3\ncondition = a < 5\nprint(condition)\nif condition:\n    print(\"a es menor que 5\")\n\`\`\`\n\n<sample-output>\n\nTrue\na es menor que 5\n\n</sample-output>\n`,
        EUS: `\n## Balio boolearrak eta adierazpen boolearrak\n\nBaldintzazko sententzia batean erabilitako edozein baldintzak egia-balio bat emango du, hau da, egia edo gezurra. Adibidez, \`a < 5\` baldintza egia da \`a\` 5 baino txikiagoa bada, eta gezurra \`a\` 5 edo handiagoa bada.\n\nBalio mota hauei _Boolear_ balioak deitzen zaie askotan, George Boole matematikari ingelesaren omenez. Python-en \`bool\` datu motak kudeatzen ditu. \`bool\` motako aldagaiek bi balio bakarrik izan ditzakete: \`True\` (Egia) edo \`False\` (Gezurra).\n\nBalio boolear bat ematen duen edozein kode zatiri _adierazpen boolear_ deitzen zaio. Adibidez, baldintzazko sententzia bateko baldintza beti da adierazpen boolearra, eta _baldintza_ eta _adierazpen boolear_ hitzak askotan elkarren ordez erabil daitezke.\n\nAdierazpen boolear baten emaitza aldagai batean gorde daiteke, edozein zenbakizko kalkuluren emaitza bezala:\n\n\`\`\`python\na = 3\ncondition = a < 5\nprint(condition)\nif condition:\n    print(\"a 5 baino txikiagoa da\")\n\`\`\`\n\n<sample-output>\n\nTrue\na 5 baino txikiagoa da\n\n</sample-output>\n`
      }
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
          ENG: `Please write a program which asks the user for two numbers and an operation. If the operation is add, multiply or subtract, the program should calculate and print out the result.`,
          CAS: `Por favor, escribe un programa que pida dos números y una operación. Si la operación es sumar, multiplicar o restar, el programa debe calcular e imprimir el resultado.`,
          EUS: `Idatzi programa bat bi zenbaki eta eragiketa bat eskatzen dituena. Eragiketa batuketa, biderketa edo kenketa bada, programak emaitza kalkulatu eta inprimatu behar du.`
      },
      initialCode: `# Write your solution here\n`,
      testCode: `\nimport unittest\nclass TestCalc(unittest.TestCase):\n    def test_add(self):\n        out = run_student_code(inputs=['10', '2', 'add'])\n        self.assertIn("12", out)\n        \n    def test_sub(self):\n        out = run_student_code(inputs=['10', '2', 'subtract'])\n        self.assertIn("8", out)\n`
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
          ENG: `Please write a program which asks the user for a temperature in degrees Fahrenheit, and then prints out the same in degrees Celsius. If the temperature is below zero degrees Celsius, the program should also print out 'Brr! It's cold in here!'.`,
          CAS: `Por favor, escribe un programa que pida una temperatura en Fahrenheit e imprima la misma en Celsius. Si la temperatura es bajo cero Celsius, también debe imprimir '¡Brr! ¡Hace frío aquí!'.`,
          EUS: `Idatzi programa bat tenperatura bat Fahrenheit-etan eskatzen duena eta Celsius-etan inprimatzen duena. Tenperatura zero azpitik bada, 'Brr! Hotza dago hemen!' ere inprimatu behar du.`
      },
      initialCode: `# Write your solution here\n`,
      testCode: `\nimport unittest\nclass TestTemp(unittest.TestCase):\n    def test_cold(self):\n        out = run_student_code(inputs=['21'])\n        self.assertIn("-6.11", out)\n        self.assertIn("Brr", out)\n        \n    def test_warm(self):\n        out = run_student_code(inputs=['101'])\n        self.assertIn("38.33", out)\n        self.assertNotIn("Brr", out)\n`
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
          ENG: `Please write a program which asks for the hourly wage, hours worked, and the day of the week. The program should then print out the daily wages, which equal hourly wage multiplied by hours worked, except on Sundays when the hourly wage is doubled.`,
          CAS: `Por favor, escribe un programa que pida el salario por hora, las horas trabajadas y el día de la semana. El programa debe imprimir el salario diario, que es el salario por hora multiplicado por las horas, excepto los domingos que se paga el doble.`,
          EUS: `Idatzi programa bat orduko soldata, lan egindako orduak eta asteko eguna eskatzen dituena. Programak eguneko soldata inprimatu behar du, hau da, orduko soldata bider orduak, igandeetan izan ezik, orduan bikoitza ordaintzen baita.`
      },
      initialCode: `# Write your solution here\n`,
      testCode: `\nimport unittest\nclass TestWages(unittest.TestCase):\n    def test_sunday(self):\n        out = run_student_code(inputs=['10', '5', 'Sunday'])\n        self.assertIn("100", out)\n        \n    def test_monday(self):\n        out = run_student_code(inputs=['10', '5', 'Monday'])\n        self.assertIn("50", out)\n`
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
          ENG: `This program calculates the end of year bonus a customer receives on their loyalty card. The bonus is calculated with the following formula: If there are less than 100 points on the card, the bonus is 10 %. In any other case the bonus is 15 %. The program has a problem. Please fix it.`,
          CAS: `Este programa calcula el bono de fin de año de una tarjeta de fidelidad. Si hay menos de 100 puntos, el bono es del 10%. En cualquier otro caso es del 15%. El programa tiene un problema. Por favor, arréglalo.`,
          EUS: `Programa honek leialtasun txartel baten urte amaierako bonua kalkulatzen du. 100 puntu baino gutxiago badaude, bonua %10 da. Beste edozein kasutan %15 da. Programak arazo bat du. Mesedez konpondu.`
      },
      initialCode: `points = int(input(\"How many points are on your card? \"))\nif points < 100:\n    points *= 1.1\n    print(\"Your bonus is 10 %\")\n\nif points >= 100:\n    points *= 1.15\n    print(\"Your bonus is 15 %\")\n\nprint(\"You now have \" + str(points) + \" points\")`,
      testCode: `\nimport unittest\nclass TestBonus(unittest.TestCase):\n    def test_90(self):\n        out = run_student_code(inputs=['90'])\n        if out.count("Bonus") > 1:\n             self.fail(tr("The program is applying BOTH bonuses. This happens because by modifying 'points' in the first if, it then meets the condition of the second if. Use 'elif' or an 'else' to make them exclusive.", "El programa está aplicando AMBOS bonos. Esto sucede porque al modificar 'points' en el primer if, pasa a cumplir la condición del segundo if. Usa 'elif' o un 'else' para que sean exclusivos.", "Programa bi hobariak aplikatzen ari da. Hau gertatzen da lehenengo if-ean 'points' aldatzean, bigarren if-aren baldintza betetzen duelako. Erabili 'elif' edo 'else' esklusiboak izan daitezen."))\n        self.assertIn("99.0", out)\n`
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
          CAS: `Por favor, escribe un programa que pregunte la previsión del tiempo para mañana y sugiera ropa adecuada.`,
          EUS: `Idatzi programa bat biharko eguraldi iragarpena galdetzen duena eta eguraldiari dagokion arropa iradokitzen duena.`
      },
      initialCode: `# Write your solution here\n`,
      testCode: `\nimport unittest\nclass TestWear(unittest.TestCase):\n    def test_cold_rain(self):\n        out = run_student_code(inputs=['5', 'yes'])\n        self.assertIn("Wear jeans", out)\n        self.assertIn("Wear a jumper", out)\n        self.assertIn("Wear a jacket", out)\n        self.assertIn("Make it a warm coat", out)\n        self.assertIn("Don't forget your umbrella", out)\n`
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
          ENG: `Please write a program for solving a quadratic equation of the form ax²+bx+c. The program asks for values a, b and c. It should then use the quadratic formula to calculate and print out the roots of the equation.`,
          CAS: `Por favor, escribe un programa para resolver una ecuación cuadrática de la forma ax²+bx+c. El programa pide los valores a, b y c. Luego debe usar la fórmula cuadrática para calcular e imprimir las raíces.`,
          EUS: `Idatzi programa bat ax²+bx+c formako ekuazio koadratiko bat ebazteko. Programak a, b eta c balioak eskatzen ditu. Gero formula koadratikoa erabili behar du erroak kalkulatu eta inprimatzeko.`
      },
      initialCode: `# Write your solution here\nfrom math import sqrt\n`,
      testCode: `\nimport unittest\nclass TestQuad(unittest.TestCase):\n    def test_roots(self):\n        out = run_student_code(inputs=['1', '2', '-8'])\n        self.assertIn("2.0", out)\n        self.assertIn("-4.0", out)\n`
    },
    {
      type: 'quiz',
      title: {
          ENG: `Quiz`,
          CAS: `Cuestionario`,
          EUS: `Galdetegia`
      },
      questions: [
        {
          id: 'q1',
          prompt: {
            ENG: 'Which of the following lines has correct syntax?',
            CAS: '¿Cuál de las siguientes líneas tiene la sintaxis correcta?',
            EUS: 'Ondorengo lerroetatik zeinek du sintaxi zuzena?'
          },
          options: [
            { id: 'o1', text: 'if age > 10', isCorrect: false },
            { id: 'o2', text: 'if age > 10:', isCorrect: true },
            { id: 'o3', text: 'if (age > 10)', isCorrect: false, feedback: { ENG: 'Parentheses are not mandatory in Python, but the colon : is.', CAS: 'Los paréntesis no son obligatorios en Python, pero los dos puntos : sí.', EUS: 'Parentesiak ez dira derrigorrezkoak Python-en, baina bi puntuak : bai.' } }
          ]
        },
        {
          id: 'q2',
          prompt: {
            ENG: 'What is the type of the value True?',
            CAS: '¿Cuál es el tipo del valor True?',
            EUS: 'Zein motatakoa da True balioa?'
          },
          options: [
            { id: 'o1', text: 'int', isCorrect: false },
            { id: 'o2', text: 'str', isCorrect: false },
            { id: 'o3', text: 'bool', isCorrect: true }
          ]
        },
        {
          id: 'q3',
          prompt: {
            ENG: 'How do you indicate a block of code belongs to an "if" statement?',
            CAS: '¿Cómo indicas que un bloque de código pertenece a una sentencia "if"?',
            EUS: 'Nola adierazten duzu kode bloke bat "if" sententzia bati dagokiola?'
          },
          options: [
            { id: 'o1', text: { ENG: 'By using curly braces {}', CAS: 'Usando llaves {}', EUS: 'Giltzak {} erabiliz' }, isCorrect: false },
            { id: 'o2', text: { ENG: 'By indentation (whitespace)', CAS: 'Por indentación (espacio en blanco)', EUS: 'Indentazioaren bidez (zuriunea)' }, isCorrect: true },
            { id: 'o3', text: { ENG: 'By using the keyword "then"', CAS: 'Usando la palabra clave "then"', EUS: '"then" gako-hitza erabiliz' }, isCorrect: false }
          ]
        }
      ]
    }
  ]
};
