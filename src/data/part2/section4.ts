import { CoursePage } from '../mooc-exercises';

export const section4: CoursePage = {
  id: "part2-4",
  title: {
    ENG: `Simple loops`,
    CAS: `Bucles simples`,
    EUS: `Begizta sinpleak\`
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: \`\n# Simple loops\n\n## After this section:\n\n- You will know what a loop means in programming\n- You will be able to use a \`while True\` loop in your programs\n- You will know how to use the \`break\` command to break out of a loop\n\nWe have now covered conditional structures in some detail. Another central technique in programming is repetition, or _iteration_. Together these form the fundamental control structures any programmer must master.\n\nThis section introduces a simple \`while\` loop. Its structure is similar to the conditional statements we already covered.\n\nLet's have a look at a program which asks the user to type in a number and then prints out the number squared. This continues until the user types in -1.\n\n\`\`\`\`python\nwhile True:\n    number = int(input(\"Please type in a number, -1 to quit: \"))\n\n    if number == -1:\n        break\n\n    print(number ** 2)\n\nprint(\"Thanks and bye!\")\n\`\`\`\`\n\n<sample-output>\n\nPlease type in a number, -1 to quit: **2**\n4\nPlease type in a number, -1 to quit: **4**\n16\nPlease type in a number, -1 to quit: **10**\n100\nPlease type in a number, -1 to quit: **-1**\nThanks and bye!\n\n</sample-output>\n\nAs you can see above, the program asks for several numbers, thanks to the \`while\` statement in the program. When the user types in -1, the \`break\` command is executed, which exits the loop and execution continues from the first line after the \`while\` block.\n\nWith loops, it is crucial that there is always a way to exit the loop at some point in the code, otherwise the repetition could go on forever. This forms an _infinite loop_.\n`,
        CAS: `\n# Bucles simples\n\n## Después de esta sección:\n\n- Sabrás qué significa un bucle en programación\n- Podrás usar un bucle \`while True\` en tus programas\n- Sabrás cómo usar el comando \`break\` para salir de un bucle\n\nYa hemos cubierto las estructuras condicionales con cierto detalle. Otra técnica central en programación es la repetición, o _iteración_. Juntas forman las estructuras de control fundamentales que cualquier programador debe dominar.\n\nEsta sección introduce un bucle \`while\` simple. Su estructura es similar a las sentencias condicionales que ya cubrimos.\n\nVeamos un programa que pide al usuario que escriba un número y luego imprime el número al cuadrado. Esto continúa hasta que el usuario escribe -1.\n\n\`\`\`\`python\nwhile True:\n    number = int(input(\"Por favor escribe un número, -1 para salir: \"))\n\n    if number == -1:\n        break\n\n    print(number ** 2)\n\nprint(\"¡Gracias y adiós!\")\n\`\`\`\`\n\n<sample-output>\n\nPor favor escribe un número, -1 para salir: **2**\n4\nPor favor escribe un número, -1 para salir: **4**\n16\nPor favor escribe un número, -1 para salir: **10**\n100\nPor favor escribe un número, -1 para salir: **-1**\n¡Gracias y adiós!\n\n</sample-output>\n\nComo puedes ver arriba, el programa pide varios números, gracias a la sentencia \`while\` en el programa. Cuando el usuario escribe -1, se ejecuta el comando \`break\`, que sale del bucle y la ejecución continúa desde la primera línea después del bloque \`while\`.\n\nCon los bucles, es crucial que siempre haya una forma de salir del bucle en algún punto del código, de lo contrario la repetición podría continuar para siempre. Esto forma un _bucle infinito_.\n`,
        EUS: `\n# Begizta sinpleak\n\n## Atal honen ondoren:\n\n- Programazioan begizta batek zer esan nahi duen jakingo duzu\n- \`while True\` begizta bat erabiltzeko gai izango zara zure programetan\n- \`break\` komandoa erabiltzen jakingo duzu begizta batetik irteteko\n\nEgitura kondizionalak xehetasunez landu ditugu. Programazioan beste teknika nagusi bat errepikapena da, edo _iterazioa_. Hauek dira programatzaile orok menderatu behar dituen oinarrizko kontrol egiturak.\n\nAtal honek \`while\` begizta sinple bat aurkezten du. Bere egitura dagoeneko landu ditugun baldintzazko sententzien antzekoa da.\n\nIkus dezagun programa bat, erabiltzaileari zenbaki bat idazteko eskatzen diona eta gero zenbakiaren karratua inprimatzen duena. Honek jarraitzen du erabiltzaileak -1 idatzi arte.\n\n\`\`\`\`python\nwhile True:\n    number = int(input(\"Mesedez idatzi zenbaki bat, -1 irteteko: \"))\n\n    if number == -1:\n        break\n\n    print(number ** 2)\n\nprint(\"Eskerrik asko eta agur!\")\n\`\`\`\`\n\n<sample-output>\n\nMesedez idatzi zenbaki bat, -1 irteteko: **2**\n4\nMesedez idatzi zenbaki bat, -1 irteteko: **4**\n16\nMesedez idatzi zenbaki bat, -1 irteteko: **10**\n100\nMesedez idatzi zenbaki bat, -1 irteteko: **-1**\nEskerrik asko eta agur!\n\n</sample-output>\n\nGoian ikus dezakezunez, programak hainbat zenbaki eskatzen ditu, programako \`while\` sententziari esker. Erabiltzaileak -1 idazten duenean, \`break\` komandoa exekutatzen da, begiztatik irteten dena eta exekuzioak \`while\` blokearen ondorengo lehen lerrotik jarraitzen du.\n\nBegiztekin, ezinbestekoa da kodean uneren batean begiztatik irteteko modu bat egotea beti, bestela errepikapena betirako jarrai liteke. Honek _begizta infinitu_ bat sortzen du.\n\`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part02-15_shall_we_continue',
      title: { ENG: \`Shall we continue?\`, CAS: \`¿Continuamos?\`, EUS: \`Jarraituko dugu?\` },
      description: {
        ENG: \`Write a program that asks the user 'hi' and then 'shall we continue?' until the user inputs 'no'. Then print 'okay then'.`,
        CAS: `Escribe un programa que diga 'hi' y pregunte 'shall we continue?' hasta que el usuario escriba 'no'. Entonces imprime 'okay then'.`,
        EUS: `Idatzi programa bat 'hi' esan eta 'shall we continue?' galdetzen duena erabiltzaileak 'no' idatzi arte. Orduan inprimatu 'okay then'.\`
      },
      initialCode: `# Write your solution here\n`,
      testCode: \`\nimport unittest\nclass TestContinue(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['yes', 'yes', 'no'])\n        self.assertIn("okay then", out)\n        if out.count("hi") < 3:\n             self.fail("Debes imprimir 'hi' en cada iteración del bucle, incluso antes de preguntar.")\n\`
    },
    {
      type: 'exercise',
      exerciseId: 'part02-16_input_validation',
      title: { ENG: \`Input validation\`, CAS: \`Validación de entrada\`, EUS: \`Sarrera baliozkotzea\` },
      description: {
        ENG: \`Write a program which asks the user for integer numbers. If the number is below zero, print 'Invalid number'. If above zero, print the square root (use \`from math import sqrt\`). If zero, stop.`,
        CAS: `Escribe un programa que pida números enteros. Si es menor que cero, imprime 'Invalid number'. Si es mayor, imprime la raíz cuadrada. Si es cero, para.`,
        EUS: `Idatzi zenbaki osoak eskatzen dituen programa. Zero baino txikiagoa bada, inprimatu 'Invalid number'. Handiagoa bada, erro karratua. Zero bada, gelditu.\`
      },
      initialCode: `from math import sqrt\n# Write your solution here\n`,
      testCode: \`\nimport unittest\nclass TestValidation(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['16', '-1', '4', '0'])\n        self.assertIn("4.0", out)\n        self.assertIn("Invalid number", out)\n        self.assertIn("2.0", out)\n        self.assertIn("Exiting", out)\n\`
    },
    {
      type: 'exercise',
      exerciseId: 'part02-17_countdown',
      title: { ENG: \`Fix the code: Countdown\`, CAS: \`Corrige el código: Cuenta atrás\`, EUS: \`Konpondu kodea: Atzerako kontaketa\` },
      description: {
        ENG: \`This program should print out a countdown. However, it doesn't quite work. Please fix it.`,
        CAS: `Este programa debería imprimir una cuenta atrás. Sin embargo, no funciona del todo bien. Por favor, arréglalo.`,
        EUS: `Programa honek atzerako kontaketa inprimatu beharko luke. Hala ere, ez du ondo funtzionatzen. Mesedez konpondu.\`
      },
      initialCode: `number = 5\nprint(\"Countdown!\")\nwhile True:\n  print(number)\n  number = number - 1\n  if number > 0:\n    break\n\nprint(\"Now!\")`,
      testCode: \`\nimport unittest\nclass TestCountdown(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        self.assertIn("5", out)\n        self.assertIn("1", out)\n        self.assertIn("Now!", out)\n        if "0" in out:\n             self.fail("No debes imprimir 0.")\n\`
    },
    {
      type: 'exercise',
      exerciseId: 'part02-18_repeat_password',
      title: { ENG: \`Repeat password\`, CAS: \`Repetir contraseña\`, EUS: \`Errepikatu pasahitza\` },
      description: {
        ENG: \`Write a program that asks for a password and then asks to repeat it. Keep asking until they match. Then print 'User account created!'.`,
        CAS: `Escribe un programa que pida una contraseña y luego pida repetirla. Sigue preguntando hasta que coincidan. Entonces imprime 'User account created!'.`,
        EUS: `Idatzi pasahitza eskatu eta gero errepikatzeko eskatzen duen programa. Jarraitu galdetzen bat etorri arte. Orduan inprimatu 'User account created!'.\`
      },
      initialCode: `# Write your solution here\n`,
      testCode: \`\nimport unittest\nclass TestPass(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['secret', 'wrong', 'secret'])\n        self.assertIn("User account created!", out)\n\`
    },
    {
      type: 'markdown',
      content: {
        ENG: \`\n## Loops and helper variables\n\nWe can use variables outside the loop to keep track of what happens inside.\n\n\`\`\`\`python\nattempts = 0\n\nwhile True:\n    code = input(\"Please type in your PIN: \")\n    attempts += 1\n\n    if code == \"1234\":\n        print(\"Correct PIN!\")\n        break\n\n    if attempts == 3:\n        print(\"Too many attempts...\")\n        break\n\n    print(\"Incorrect...try again\")\n\`\`\`\`\n\n## Debugging print statements in loops\n\nAdding loops to programs also adds to the potential sources of bugs. Debugging print statements are often the simplest way of finding their cause.\n\n\`\`\`\`python\nwhile True:\n    print(\"beginning of the while block:\")\n    code = input(\"Please type in your PIN: \")\n    attempts += 1\n\n    print(\"attempts:\`, attempts)\n    if attempts == 3:\n        # ...\n\`\`\`\`\n",
        CAS: \`\n## Bucles y variables auxiliares\n\nPodemos usar variables fuera del bucle para llevar un registro de lo que sucede dentro.\n\n\`\`\`\`python\nintentos = 0\n\nwhile True:\n    codigo = input(\"Por favor escribe tu PIN: \")\n    intentos += 1\n\n    if codigo == \"1234\":\n        print(\"¡PIN correcto!\")\n        break\n\n    if intentos == 3:\n        print(\"Demasiados intentos...\")\n        break\n\n    print(\"Incorrecto...inténtalo de nuevo\")\n\`\`\`\`\n\n## Depuración con impresiones en bucles\n\nAñadir bucles a los programas también aumenta las posibles fuentes de errores. Las sentencias de impresión para depuración suelen ser la forma más sencilla de encontrar su causa.\n`,
        EUS: `\n## Begiztak eta aldagai laguntzaileak\n\nBegiztatik kanpoko aldagaiak erabil ditzakegu barruan gertatzen dena jarraitzeko.\n\n\`\`\`\`python\nsaiakerak = 0\n\nwhile True:\n    kodea = input(\"Mesedez idatzi zure PINa: \")\n    saiakerak += 1\n\n    if kodea == \"1234\":\n        print(\"PIN zuzena!\")\n        break\n\n    if saiakerak == 3:\n        print(\"Saiakera gehiegi...\")\n        break\n\n    print(\"Okerra...saiatu berriro\")\n\`\`\`\`\n\n## Arazketa inprimaketak begiztetan\n\nProgrametara begiztak gehitzeak akats iturri potentzialak ere gehitzen ditu. Arazketarako inprimaketak askotan modurik errazena dira horien zergatia aurkitzeko.\n\`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part02-19_pin_and_number_of_attempts',
      title: { ENG: \`PIN and number of attempts\`, CAS: \`PIN y número de intentos\`, EUS: \`PINa eta saiakera kopurua\` },
      description: {
        ENG: \`Write a program that asks for a PIN code (4321). Keep asking until correct. Print number of attempts. If first try, print 'Correct! It only took you one single attempt!'.`,
        CAS: `Pide el PIN (4321). Repite hasta que sea correcto. Imprime intentos. Si es a la primera, imprime un mensaje especial.`,
        EUS: `Eskatu PINa (4321). Errepikatu zuzena izan arte. Inprimatu saiakerak. Lehenengoan bada, inprimatu mezu berezia.\`
      },
      initialCode: `# Write your solution here\n`,
      testCode: \`\nimport unittest\nclass TestPinAttempts(unittest.TestCase):\n    def test_one(self):\n        out = run_student_code(inputs=['4321'])\n        self.assertIn("single attempt", out)\n    def test_many(self):\n        out = run_student_code(inputs=['1111', '4321'])\n        self.assertIn("took you 2 attempts", out)\n\`
    },
    {
      type: 'exercise',
      exerciseId: 'part02-20_next_leap_year',
      title: { ENG: \`The next leap year\`, CAS: \`El próximo año bisiesto\`, EUS: \`Hurrengo urte bisustua\` },
      description: {
        ENG: \`Write a program which asks the user for a year, and prints out the next leap year.`,
        CAS: `Escribe un programa que pida un año y muestre el próximo año bisiesto.`,
        EUS: `Idatzi urte bat eskatzen duen programa, eta hurrengo urte bisustua inprimatzen duena.\`
      },
      initialCode: `# Write your solution here\n`,
      testCode: \`\nimport unittest\nclass TestNextLeap(unittest.TestCase):\n    def test_2023(self):\n        out = run_student_code(inputs=['2023'])\n        self.assertIn("2024", out)\n    def test_2024(self):\n        out = run_student_code(inputs=['2024'])\n        self.assertIn("2028", out)\n\`
    },
    {
      type: 'markdown',
      content: {
        ENG: \`\n## Concatenating strings with the + operator\n\nWe can build strings inside a loop using the \`+\` operator.\n\n\`\`\`\`python\nwords = ""\nwhile True:\n    word = input(\"Type a word: \")\n    if word == \"end\":\n        break\n    words += word + \" \"\n\nprint(words)\n\`\`\`\`\n`,
        CAS: `\n## Concatenando cadenas con el operador +\n\nPodemos construir cadenas dentro de un bucle usando el operador \`+\`. \n\n\`\`\`\`python\npalabras = ""\nwhile True:\n    palabra = input(\"Escribe una palabra: \")\n    if palabra == \"fin\":\n        break\n    palabras += palabra + \" \"\n\nprint(palabras)\n\`\`\`\`\n`,
        EUS: `\n## Kateak kateatzen + eragilearekin\n\nBegizta baten barruan kateak eraiki ditzakegu \`+\` eragilea erabiliz.\n\n\`\`\`\`python\nhitzak = ""\nwhile True:\n    hitza = input(\"Idatzi hitz bat: \")\n    if hitza == \"amaiera\":\n        break\n    hitzak += hitza + \" \"\n\nprint(hitzak)\n\`\`\`\`\n\`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part02-21_story',
      title: { ENG: \`Story\`, CAS: \`Historia\`, EUS: \`Istorioa\` },
      description: {
        ENG: \`Part 1: Ask for words and build a story. Stop on 'end'. Part 2: Also stop if same word is repeated.`,
        CAS: `Parte 1: Pide palabras y crea una historia. Para en 'end'. Parte 2: Para también si se repite palabra.`,
        EUS: `1. Zatia: Eskatu hitzak eta sortu istorioa. Gelditu 'end'-ekin. 2. Zatia: Gelditu hitza errepikatzen bada.\`
      },
      initialCode: `# Write your solution here\n`,
      testCode: \`\nimport unittest\nclass TestStory(unittest.TestCase):\n    def test_repeat(self):\n        out = run_student_code(inputs=['It', 'was', 'a', 'dark', 'dark', 'night'])\n        self.assertIn("It was a dark", out)\n        if "dark dark" in out:\n             self.fail("Stop BEFORE adding the repeated word.")\n\`
    },
    {
      type: 'exercise',
      exerciseId: 'part02-22_working_with_numbers',
      title: { ENG: \`Working with numbers\`, CAS: \`Trabajando con números\`, EUS: \`Zenbakiekin lanean\` },
      description: {
        ENG: \`Write a program that asks for numbers (0 to quit). Print count, sum, mean, and positives/negatives count.`,
        CAS: `Pide números (0 para salir). Imprime cuenta, suma, media, y positivos/negativos.`,
        EUS: `Eskatu zenbakiak (0 irteteko). Inprimatu kopurua, batura, batezbestekoa, eta positibo/negatiboak.`
      },
      initialCode: `print(\"Please type in integer numbers. Type in 0 to finish.\")\n# Write your solution here\n`,
      testCode: `\nimport unittest\nclass TestNumbers(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['5', '2', '-1', '0'])\n        self.assertIn("Count: 3", out)\n        self.assertIn("Sum: 6", out)\n        self.assertIn("Mean: 2.0", out)\n        self.assertIn("Positive: 2", out)\n        self.assertIn("Negative: 1", out)\n`
    },
    {
      type: 'quiz',
      title: { ENG: `Quiz`, CAS: `Cuestionario`, EUS: `Galdetegia` },
      questions: [
        {
          id: 'q1',
          prompt: { 
            ENG: 'What command exits a loop immediately?',
            CAS: '¿Qué comando sale de un bucle inmediatamente?',
            EUS: 'Zein komandok irteten du begizta batetik berehala?'
          },
          options: [
            { id: 'o1', text: 'stop', isCorrect: false },
            { id: 'o2', text: 'exit', isCorrect: false },
            { id: 'o3', text: 'break', isCorrect: true }
          ]
        },
        {
          id: 'q2',
          prompt: { 
            ENG: 'How many times does "while True:" run?',
            CAS: '¿Cuántas veces se ejecuta "while True:"?',
            EUS: 'Zenbat aldiz exekutatzen da "while True:"?'
          },
          options: [
            { id: 'o1', text: { ENG: 'Once.', CAS: 'Una vez.', EUS: 'Behin.' }, isCorrect: false },
            { id: 'o2', text: { ENG: 'Until "break" is called.', CAS: 'Hasta que se llame a "break".', EUS: '"break" deitu arte.' }, isCorrect: true },
            { id: 'o3', text: { ENG: '10 times.', CAS: '10 veces.', EUS: '10 aldiz.' }, isCorrect: false }
          ]
        },
        {
          id: 'q3',
          prompt: { 
            ENG: 'Why use helper variables outside a loop?',
            CAS: '¿Por qué usar variables auxiliares fuera de un bucle?',
            EUS: 'Zergatik erabili aldagai laguntzaileak begizta batetik kanpo?'
          },
          options: [
            { id: 'o1', text: { ENG: 'To reset them every iteration.', CAS: 'Para reiniciarlas en cada iteración.', EUS: 'Iterazio bakoitzean berrabiarazteko.' }, isCorrect: false },
            { id: 'o2', text: { ENG: 'To persist data across iterations.', CAS: 'Para persistir datos entre iteraciones.', EUS: 'Datuak iterazioen artean mantentzeko.' }, isCorrect: true },
            { id: 'o3', text: { ENG: 'Loops cannot have variables inside.', CAS: 'Los bucles no pueden tener variables dentro.', EUS: 'Begiztek ezin dute aldagairik izan barruan.' }, isCorrect: false }
          ]
        }
      ]
    }
  ]
};