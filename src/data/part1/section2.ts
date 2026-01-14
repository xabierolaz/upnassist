import { CoursePage } from '../mooc-exercises';

export const section2: CoursePage = {
  id: "part1-2",
  title: {
    ENG: "Information from the user",
    CAS: "Información del usuario",
    EUS: "Erabiltzailearen informazioa"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\n# Information from the user\n\n## After this section:\n\n- You will know how to write a program which uses input from the user\n- You will know how to use variables to store input and print it out\n- You will be able to combine strings\n\nInput refers to any information a user gives to the program. Specifically, the Python command `input` reads in a line of input typed in by the user.\n\n```python\nname = input(\"What is your name? \")\nprint(\"Hi there, \" + name)\n```\n\nThe execution of this program could look like this (input from the user in the first line):\n\n```text\nWhat is your name? Paul Python\nHi there, Paul Python\n```\n\nThe word `name` in this program is a _variable_. A variable is a location for storing some value.\n",
        CAS: "\n# Información del usuario\n\n## Después de esta sección:\n\n- Sabrás cómo escribir un programa que utilice la entrada del usuario\n- Sabrás cómo usar variables para almacenar la entrada e imprimirla\n- Serás capaz de combinar cadenas de texto\n\nLa entrada (input) se refiere a cualquier información que un usuario da al programa. Específicamente, el comando `input` de Python lee una línea de entrada escrita por el usuario.\n\n```python\nname = input(\"¿Cómo te llamas? \")\nprint(\"Hola, \" + name)\n```\n\nLa ejecución de este programa podría verse así (entrada del usuario en la primera línea):\n\n```text\n¿Cómo te llamas? Paul Python\nHola, Paul Python\n```\n\nLa palabra `name` en este programa es una _variable_. Una variable es una ubicación para almacenar algún valor.\n",
        EUS: "\n# Erabiltzailearen informazioa\n\n## Atal honen ondoren:\n\n- Jakingo duzu nola idatzi erabiltzailearen sarrera erabiltzen duen programa bat\n- Jakingo duzu nola erabili aldagaiak sarrera gordetzeko eta inprimatzeko\n- Kateak konbinatzeko gai izango zara\n\nSarrera (input) erabiltzaileak programari ematen dion edozein informaziori dagokio. Zehazki, Python-eko `input` komandoak erabiltzaileak idatzitako sarrera lerro bat irakurtzen du.\n\n```python\nname = input(\"Nola duzu izena? \")\nprint(\"Kaixo, \" + name)\n```\n\nPrograma honen exekuzioa honelakoa izan daiteke (erabiltzailearen sarrera lehen lerroan):\n\n```text\nNola duzu izena? Paul Python\nKaixo, Paul Python\n```\n\nPrograma honetako `name` hitza _aldagai_ bat da. Aldagaia balio bat gordetzeko kokapen bat da.\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part01-06_name_twice',
      title: {
        ENG: "Name twice",
        CAS: "Nombre dos veces",
        EUS: "Izena bi aldiz"
      },
      description: {
        ENG: "Please write a program which asks for the user's name and then prints it twice, on two consecutive lines.",
        CAS: "Por favor, escribe un programa que pida el nombre del usuario y luego lo imprima dos veces, en dos líneas consecutivas.",
        EUS: "Mesedez idatzi programa bat erabiltzaileari izena eskatzen diona eta gero bi aldiz inprimatzen duena, bi lerro jarraitutan."
      },
      initialCode: "# Write your solution here\n",
      testCode: "\nimport unittest\nclass TestNameTwice(unittest.TestCase):\n    def test_run(self):\n        inputs = ['Paul']\n        output = run_student_code(inputs=inputs).strip().split('\n')\n        # We expect at least 2 lines with 'Paul'\n        matches = [line for line in output if 'Paul' in line]\n        if len(matches) < 2:\n            self.fail(\"The name should be printed twice.\")\n"
    },
    {
      type: 'markdown',
      content: {
        ENG: "\n## Referencing a variable\n\nA single variable can be referred to many times in a program:\n\n```python\nname = input(\"What is your name? \")\n\nprint(\"Hi, \" + name + \"!\")\nprint(name + \" is quite a nice name.\")\n```\n\nIf the user gives the name Paul Python, this program prints out the following:\n\n```text\nWhat is your name? Paul Python\nHi, Paul Python!\nPaul Python is quite a nice name.\n```\n\nStrings and variables can be combined quite freely using the `+\` operator.",
        CAS: "\n## Referenciar una variable\n\nSe puede hacer referencia a una sola variable muchas veces en un programa:\n\n```python\nname = input(\"¿Cómo te llamas? \")\n\nprint(\"¡Hola, \" + name + \"!\")\nprint(name + \" es un nombre muy bonito.\")\n```\n\nSi el usuario introduce el nombre Paul Python, este programa imprime lo siguiente:\n\n```text\n¿Cómo te llamas? Paul Python\n¡Hola, Paul Python!\nPaul Python es un nombre muy bonito.\n```\n\nLas cadenas y las variables se pueden combinar libremente usando el operador `+\`.",
        EUS: "\n## Aldagai bat erreferentziatzea\n\nPrograma batean aldagai bati askotan egin dakioke erreferentzia:\n\n```python\nname = input(\"Nola duzu izena? \")\n\nprint(\"Kaixo, \" + name + \"!\")\nprint(name + \" izen polita da.\")\n```\n\nErabiltzaileak Paul Python izena ematen badu, programa honek hau inprimatzen du:\n\n```text\nNola duzu izena? Paul Python\nKaixo, Paul Python!\nPaul Python izen polita da.\n```\n\nKateak eta aldagaiak nahiko aske konbina daitezke `+\` operadorea erabiliz."
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part01-07_name_and_exclamation_marks',
      title: {
        ENG: "Name and exclamation marks",
        CAS: "Nombre y signos de exclamación",
        EUS: "Izena eta harridura-markak"
      },
      description: {
        ENG: "Please write a program which asks for the user's name and then prints it out twice on a single line so that there is an exclamation mark at the beginning of the line, another between the two names and a third one at the end of the line.",
        CAS: "Por favor, escribe un programa que pida el nombre del usuario y luego lo imprima dos veces en una sola línea de manera que haya un signo de exclamación al principio de la línea, otro entre los dos nombres y un tercero al final de la línea.",
        EUS: "Mesedez idatzi programa bat erabiltzaileari izena eskatzen diona eta gero bi aldiz lerro bakar batean inprimatzen duena, harridura-marka bat lerroaren hasieran, beste bat bi izenen artean eta hirugarren bat lerroaren amaieran egon dadin."
      },
      initialCode: "# Write your solution here\n",
      testCode: "\nimport unittest\nclass TestExclamation(unittest.TestCase):\n    def test_run(self):\n        inputs = ['Paul']\n        output = run_student_code(inputs=inputs).strip()\n        expected = \"!Paul!Paul!\"\n        if expected not in output:\n            self.fail(f\"Expected output to contain: {expected}\")\n"
    },
    {
      type: 'markdown',
      content: {
        ENG: "\n## More than one input\n\nA program can ask for more than one input. Notice how below each input command stores the received value in a different variable.\n\n```python\nname = input(\"What is your name? \")\nemail = input(\"What is your email address? \")\nnickname = input(\"What is your nickname? \")\n\nprint(\"Let's make sure we got this right\")\nprint(\"Your name: \" + name)\nprint(\"Your email address: \" + email)\nprint(\"Your nickname: \" + nickname)\n```\n\nThe program could print out this, for example:\n\n```text\nWhat is your name? Frances Fictitious\nWhat is your email address? frances99@example.com\nWhat is your nickname? Fran\nLet's make sure we got this right\nYour name: Frances Fictitious\nYour email address: frances99@example.com\nYour nickname: Fran\n```\n",
        CAS: "\n## Más de una entrada\n\nUn programa puede pedir más de una entrada. Observa cómo a continuación cada comando input almacena el valor recibido en una variable diferente.\n\n```python\nname = input(\"¿Cómo te llamas? \")\nemail = input(\"¿Cuál es tu dirección de email? \")\nnickname = input(\"¿Cuál es tu apodo? \")\n\nprint(\"Asegurémonos de que esto está bien\")\nprint(\"Tu nombre: \" + name)\nprint(\"Tu email: \" + email)\nprint(\"Tu apodo: \" + nickname)\n```\n\nEl programa podría imprimir esto, por ejemplo:\n\n```text\n¿Cómo te llamas? Frances Fictitious\n¿Cuál es tu dirección de email? frances99@example.com\n¿Cuál es tu apodo? Fran\nAsegurémonos de que esto está bien\nTu nombre: Frances Fictitious\nTu email: frances99@example.com\nTu apodo: Fran\n```\n",
        EUS: "\n## Sarrera bat baino gehiago\n\nPrograma batek sarrera bat baino gehiago eska dezake. Ohartu nola azpian sarrera komando bakoitzak jasotako balioa aldagai ezberdin batean gordetzen duen.\n\n```python\nname = input(\"Nola duzu izena? \")\nemail = input(\"Zein da zure posta helbidea? \")\nnickname = input(\"Zein da zure ezizena? \")\n\nprint(\"Ziurtatu dezagun hau ondo dagoela\")\nprint(\"Zure izena: \" + name)\nprint(\"Zure posta: \" + email)\nprint(\"Zure ezizena: \" + nickname)\n```\n\nProgramak hau inprimatu lezake, adibidez:\n\n```text\nNola duzu izena? Frances Fictitious\nZein da zure posta helbidea? frances99@example.com\nZein da zure ezizena? Fran\nZiurtatu dezagun hau ondo dagoela\nZure izena: Frances Fictitious\nZure posta: frances99@example.com\nZure ezizena: Fran\n```\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part01-08_name_and_address',
      title: {
        ENG: "Name and address",
        CAS: "Nombre y dirección",
        EUS: "Izena eta helbidea"
      },
      description: {
        ENG: "Please write a program which asks for the user's name and address. The program should also print out the given information.",
        CAS: "Por favor, escribe un programa que pida el nombre y la dirección del usuario. El programa también debe imprimir la información dada.",
        EUS: "Mesedez idatzi programa bat erabiltzailearen izena eta helbidea eskatzen dituena. Programak emandako informazioa ere inprimatu behar du."
      },
      initialCode: "# Write your solution here\n",
      testCode: "\nimport unittest\nclass TestNameAddress(unittest.TestCase):\n    def test_run(self):\n        inputs = ['Steve', 'Sanders', '91 Station Road', 'London EC05 6AW']\n        output = run_student_code(inputs=inputs)\n        if \"Steve Sanders\" not in output:\n             self.fail(\"Output missing full name 'Steve Sanders'\")\n        if \"91 Station Road\" not in output:\n             self.fail(\"Output missing address '91 Station Road'\")\n        if \"London EC05 6AW\" not in output:\n             self.fail(\"Output missing city/zip 'London EC05 6AW'\")\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part01-09_utterances',
      title: {
        ENG: "Fix the code: Utterances",
        CAS: "Corrige el código: Expresiones",
        EUS: "Konpondu kodea: Adierazpenak"
      },
      description: {
        ENG: "Here is a program which should ask for three utterances and print them out. However, there is something wrong with the code below. Please fix it.",
        CAS: "Aquí hay un programa que debería pedir tres expresiones y las imprima. Sin embargo, hay algo mal en el código de abajo. Por favor, corrígelo.",
        EUS: "Hemen hiru adierazpen eskatu eta inprimatu beharko lituzkeen programa bat dago. Hala ere, zerbait gaizki dago beheko kodean. Mesedez konpondu ezazu."
      },
      initialCode: "part = input(\"The 1st part: \")\npart = input(\"The 1st part: \")\npart = input(\"The 1st part: \")\nprint(part + part + part)",
      testCode: "\nimport unittest\nclass TestUtterances(unittest.TestCase):\n    def test_run(self):\n        inputs = ['hickory', 'dickory', 'dock']\n        output = run_student_code(inputs=inputs).strip()\n        expected = \"hickory-dickory-dock!\"\n        if expected not in output:\n             self.fail(f\"Expected output to contain: {expected}\")\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part01-10_story',
      title: {
        ENG: "Story",
        CAS: "Historia",
        EUS: "Istorioa"
      },
      description: {
        ENG: "Please write a program which prints out a story. The user gives a name and a year, which should be inserted into the printout.",
        CAS: "Por favor, escribe un programa que imprima una historia. El usuario da un nombre y un año, que deben insertarse en la impresión.",
        EUS: "Mesedez idatzi istorio bat inprimatzen duen programa bat. Erabiltzaileak izen bat eta urte bat ematen ditu, eta horiek inprimaketan txertatu behar dira."
      },
      initialCode: "# Write your solution here\n",
      testCode: "\nimport unittest\nclass TestStory(unittest.TestCase):\n    def test_run(self):\n        inputs = ['Mary', '1572']\n        output = run_student_code(inputs=inputs)\n        if \"Mary is a valiant knight\" not in output:\n            self.fail(\"Missing 'Mary is a valiant knight'\")\n        if \"born in the year 1572\" not in output:\n             self.fail(\"Missing 'born in the year 1572'\")\n"
    }
  ]
};
