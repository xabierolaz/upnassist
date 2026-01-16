import { CoursePage } from '../mooc-exercises';

export const section2: CoursePage = {
  id: "part3-2",
  title: {
    ENG: "Working with strings",
    CAS: "Trabajando con cadenas",
    EUS: "Kateekin lanean"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\n# Working with strings\n\n## After this section:\n\n- You will be able to use the operators `+\` and `*` with strings\n- You will know how to find out the length of a string\n- You will know what is meant by string indexing\n- You will know how to look for substrings within a string\n\n## String operations\n\nStrings can be combined, or _concatenated_, with the `+\` operator:\n\n\`\`\`python\nbegin = \"ex\"\nend = \"ample\"\nword = begin+end\nprint(word)\n\`\`\`\n\nThe `*` operator can also be used with a string, when the other operand is an integer. The string operand is then repeated the number of times specified by the integer.\n\n\`\`\`python\nword = \"banana\"\nprint(word*3)\n\`\`\`\n\n<sample-output>\n\nbananabananabanana\n\n</sample-output>\n\n## The length and index of a string\n\nThe function `len` returns the number of characters in a string, which is always an integer value. For example, `len(\"hey\")` returns 3.\n\nAs strings are essentially sequences of characters, any single character in a string can also be retrieved. The operator `[]` finds the character with the _index_ specified within the brackets.\n\nThe index refers to a position in the string, counting up from zero.\n\n\`\`\`python\nword = \"python\"\nprint(word[0])\nprint(word[-1]) # Last character\n\`\`\`\n\n<sample-output>\n\np\nn\n</sample-output>\n\n## Substrings (Slicing)\n\nYou can slice strings using the syntax `[start:end]`. This creates a substring starting at index `start` and ending **before** index `end`.\n\n\`\`\`python\nword = \"banana\"\nprint(word[0:3])\n\`\`\`\n\n<sample-output>\n\nban\n\n</sample-output>\n\n## Searching\n\nThe `in` operator checks if a substring exists. The `find` method returns the index of the first occurrence, or -1 if not found.\n\n\`\`\`python\nprint(\"a\" in \"banana\") # True\nprint(\"banana\".find(\"na\")) # 2\n\`\`\`\n",
        CAS: "\n# Trabajando con cadenas\n\n## Después de esta sección:\n\n- Podrás usar los operadores `+\` y `*` con cadenas\n- Sabrás cómo averiguar la longitud de una cadena\n- Sabrás qué significa la indexación de cadenas\n- Sabrás cómo buscar subcadenas dentro de una cadena\n\n## Operaciones con cadenas\n\nLas cadenas se pueden combinar, o _concatenar_, con el operador `+\`: \n\n\`\`\`python\ninicio = \"ej\"\nfin = \"emplo\"\npalabra = inicio+fin\nprint(palabra)\n\`\`\`\n\nEl operador `*` también se puede usar con una cadena, cuando el otro operando es un entero. La cadena se repite el número de veces especificado por el entero.\n\n\`\`\`python\npalabra = \"banana\"\nprint(palabra*3)\n\`\`\`\n\n<sample-output>\n\nbananabananabanana\n\n</sample-output>\n\n## La longitud e índice de una cadena\n\nLa función `len` devuelve el número de caracteres en una cadena, que es siempre un valor entero. Por ejemplo, `len(\"hey\")` devuelve 3.\n\nComo las cadenas son esencialmente secuencias de caracteres, se puede recuperar cualquier carácter individual. El operador `[]` encuentra el carácter con el _índice_ especificado entre corchetes.\n\nEl índice se refiere a una posición en la cadena, contando desde cero.\n\n\`\`\`python\npalabra = \"python\"\nprint(palabra[0])\nprint(palabra[-1]) # Último carácter\n\`\`\`\n\n<sample-output>\n\np\nn\n</sample-output>\n\n## Subcadenas (Slicing)\n\nPuedes cortar cadenas usando la sintaxis `[inicio:fin]`. Esto crea una subcadena que comienza en el índice `inicio` y termina **antes** del índice `fin`.\n\n\`\`\`python\npalabra = \"banana\"\nprint(palabra[0:3])\n\`\`\`\n\n<sample-output>\n\nban\n\n</sample-output>\n\n## Búsqueda\n\nEl operador `in` comprueba si existe una subcadena. El método `find` devuelve el índice de la primera aparición, o -1 si no se encuentra.\n\n\`\`\`python\nprint(\"a\" in \"banana\") # True\nprint(\"banana\".find(\"na\")) # 2\n\`\`\`\n",
        EUS: "\n# Kateekin lanean\n\n## Atal honen ondoren:\n\n- `+\` eta `*` eragileak kateekin erabiltzeko gai izango zara\n- Kate baten luzera nola jakin jakingo duzu\n- Kateen indexazioa zer den jakingo duzu\n- Kate baten barruan azpikateak nola bilatu jakingo duzu\n\n## Kate eragiketak\n\nKateak konbina daitezke, edo _kateatu_, `+\` eragilearekin:\n\n\`\`\`python\nhasiera = \"adibi\"\namaiera = \"adea\"\nhitza = hasiera+amaiera\nprint(hitza)\n\`\`\`\n\n`*` eragilea ere erabil daiteke kate batekin, beste operandoa zenbaki osoa denean. Katea zenbaki osoak zehaztutako aldiz errepikatzen da.\n\n\`\`\`python\nhitza = \"banana\"\nprint(hitza*3)\n\`\`\`\n\n<sample-output>\n\nbananabananabanana\n\n</sample-output>\n\n## Kate baten luzera eta indizea\n\n`len` funtzioak kate bateko karaktere kopurua itzultzen du, beti ere zenbaki oso bat dena. Adibidez, `len(\"kaixo\")`-k 5 itzultzen du.\n\nKateak funtsean karaktere-sekuentziak direnez, kateko edozein karaktere berreskura daiteke. `[]` eragileak kortxeteen artean zehaztutako _indizea_ duen karakterea aurkitzen du.\n\nIndizeak kateko posizio bati egiten dio erreferentzia, zerotik hasita zenbatuz.\n\n\`\`\`python\nhitza = \"python\"\nprint(hitza[0])\nprint(hitza[-1]) # Azken karakterea\n\`\`\`\n\n<sample-output>\n\np\nn\n</sample-output>\n\n## Azpikateak (Slicing)\n\nKateak ebaki ditzakezu `[hasiera:amaiera]` sintaxia erabiliz. Honek azpikate bat sortzen du `hasiera` indizean hasi eta `amaiera` indizearen **aurretik** amaitzen dena.\n\n\`\`\`python\nhitza = \"banana\"\nprint(hitza[0:3])\n\`\`\`\n\n<sample-output>\n\nban\n\n</sample-output>\n\n## Bilaketa\n\n`in` eragileak azpikaterik badagoen egiaztatzen du. `find` metodoak lehen agerraldiaren indizea itzultzen du, edo -1 ez bada aurkitzen.\n\n\`\`\`python\nprint(\"a\" in \"banana\") # True\nprint(\"banana\".find(\"na\")) # 2\n\`\`\`\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part03-08_string_multiplied',
      title: { ENG: "String multiplied", CAS: "Cadena multiplicada", EUS: "Katea biderkatuta" },
      description: {
        ENG: "Please write a program which asks the user for a string and an amount. The program then prints out the string as many times as specified by the amount. The string should be printed out all on the same line.",
        CAS: "Escribe un programa que pida una cadena y una cantidad. El programa debe imprimir la cadena tantas veces como se especifique, todo en la misma línea.",
        EUS: "Idatzi programa bat kate bat eta kopuru bat eskatzen dituena. Programak katea kopuru horretan inprimatu behar du, dena lerro berean."
      },
      initialCode: "# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestMult(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['hi', '3'])\n        self.assertIn("hihihi", out)\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-09_longer_string',
      title: { ENG: "The longer string", CAS: "La cadena más larga", EUS: "Kate luzeagoa" },
      description: {
        ENG: "Please write a program which asks the user for two strings and then prints out the longer of the two. If equal length, print 'The strings are equally long'.",
        CAS: "Escribe un programa que pida dos cadenas y luego imprima la más larga de las dos. Si son iguales, 'The strings are equally long'.",
        EUS: "Idatzi programa bat bi kate eskatzen dituena eta gero bietako luzeena inprimatzen duena. Berdinak badira, 'The strings are equally long'."
      },
      initialCode: "# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestLonger(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['short', 'loooong'])\n        self.assertIn("loooong", out)" +\n                   "    def test_equal(self):\n        out = run_student_code(inputs=['ab', 'cd'])\n        self.assertIn("equally long", out)\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-10_end_to_beginning',
      title: { ENG: "End to beginning", CAS: "De final a principio", EUS: "Amaieratik hasierara" },
      description: {
        ENG: "Please write a program which asks the user for a string. The program then prints out the input string in reverse order, from end to beginning. Each character should be on a separate line.",
        CAS: "Escribe un programa que pida una cadena. Luego imprime la cadena en orden inverso, carácter por carácter en líneas separadas.",
        EUS: "Idatzi programa bat kate bat eskatzen duena. Gero katea alderantzizko ordenan inprimatu behar du, karaktere bakoitza lerro bereizi batean."
      },
      initialCode: "# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestReverse(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['abc'])\n        self.assertIn("c", out)\n        self.assertIn("b", out)\n        self.assertIn("a", out)\n        # Ensure order\n        idx_c = out.find("c")\n        idx_a = out.find("a")\n        if idx_c > idx_a:\n             self.fail("Order incorrect.")\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-11_second_and_second_to_last',
      title: { ENG: "Second and second to last characters", CAS: "Segundo y penúltimo carácter", EUS: "Bigarren eta azkenaurreko karakterea" },
      description: {
        ENG: "Please write a program which asks the user for a string. The program then prints out a message based on whether the second character and the second to last character are the same or not.",
        CAS: "Escribe un programa que pida una cadena. Debe imprimir un mensaje dependiendo de si el segundo carácter y el penúltimo son iguales o no.",
        EUS: "Idatzi programa bat kate bat eskatzen duena. Gero mezu bat inprimatu behar du bigarren eta azkenaurreko karaktereak berdinak diren ala ez oinarrituta."
      },
      initialCode: "# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestSecLast(unittest.TestCase):\n    def test_same(self):\n        out = run_student_code(inputs=['python'])\n        self.assertIn("different", out)\n    def test_match(self):\n        out = run_student_code(inputs=['abba'])\n        self.assertIn("same", out)\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-12_line_of_hashes',
      title: { ENG: "A line of hashes", CAS: "Una línea de almohadillas", EUS: "Traola lerro bat" },
      description: {
        ENG: "Please write a program which asks the user for a width and then prints out a line of hashes which is as long as the specified width.",
        CAS: "Escribe un programa que pida un ancho y luego imprima una línea de almohadillas (#) de ese ancho.",
        EUS: "Idatzi programa bat zabalera bat eskatzen duena eta gero zabalera horretako traola (#) lerro bat inprimatzen duena."
      },
      initialCode: "# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestHash(unittest.TestCase):\n    def test_3(self):\n        out = run_student_code(inputs=['3'])\n        self.assertIn("###", out)\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-13_rectangle_of_hashes',
      title: { ENG: "A rectangle of hashes", CAS: "Un rectángulo de almohadillas", EUS: "Traola laukizuzen bat" },
      description: {
        ENG: "Please write a program which asks the user for width and height and prints a rectangle of hashes.",
        CAS: "Escribe un programa que pida ancho y alto e imprima un rectángulo de almohadillas.",
        EUS: "Idatzi programa bat zabalera eta altuera eskatzen dituena eta traola laukizuzen bat inprimatzen duena."
      },
      initialCode: "# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestRect(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['3', '2'])\n        if out.count("###") < 2:\n             self.fail("Should print 2 lines of 3 hashes.")\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-14_underlining',
      title: { ENG: "Underlining", CAS: "Subrayado", EUS: "Azpimarratua" },
      description: {
        ENG: "Write a program which asks for strings. Print each string underlined (with '-'). Stop on empty string.",
        CAS: "Pide cadenas. Imprime cada una subrayada (con '-'). Para con cadena vacía.",
        EUS: "Eskatu kateak. Inprimatu bakoitza azpimarratuta ('-' erabiliz). Gelditu kate hutsa sartzean."
      },
      initialCode: "# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestUnderline(unittest.TestCase):\n    def test_hi(self):\n        out = run_student_code(inputs=['Hi', ''])\n        self.assertIn("Hi", out)\n        self.assertIn("--", out)\n`
    },
    {
        type: 'exercise',
        exerciseId: 'part03-15_right_aligned',
        title: { ENG: "Right aligned", CAS: "Alineado a la derecha", EUS: "Eskuinean lerrokatuta" },
        description: {
            ENG: "Ask for a string. Print it right-aligned in a field of 20 characters (padded with *).",
            CAS: "Pide una cadena. Imprímela alineada a la derecha en un campo de 20 caracteres (relleno con *).",
            EUS: "Eskatu kate bat. Inprimatu eskuinean lerrokatuta 20 karaktereko eremu batean (*-ekin beteta)."
        },
        initialCode: "# Write your solution here\n",
        testCode: `\nimport unittest\nclass TestRight(unittest.TestCase):\n    def test_python(self):\n        out = run_student_code(inputs=['python'])\n        self.assertIn("**************python", out)\n`
    },
    {
        type: 'exercise',
        exerciseId: 'part03-16_framed_word',
        title: { ENG: "A framed word", CAS: "Palabra enmarcada", EUS: "Markoztatutako hitza" },
        description: {
            ENG: "Ask for a string. Print it centered in a 30-char wide frame of stars.",
            CAS: "Pide una cadena. Imprímela centrada en un marco de estrellas de 30 caracteres de ancho.",
            EUS: "Eskatu kate bat. Inprimatu zentratuta 30 karaktereko zabalera duen izar marko batean."
        },
        initialCode: "# Write your solution here\n",
        testCode: `\nimport unittest\nclass TestFrame(unittest.TestCase):\n    def test_word(self):\n        out = run_student_code(inputs=['word'])\n        self.assertIn("******************************", out)\n        self.assertIn("*            word            *", out)\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-17_substrings_part_1',
      title: { ENG: "Substrings, part 1", CAS: "Subcadenas, parte 1", EUS: "Azpikateak, 1. zatia" },
      description: {
        ENG: "Ask for a string. Print all substrings starting from the first character (t, te, tes, test).",
        CAS: "Pide una cadena. Imprime todas las subcadenas que empiezan por el primer carácter.",
        EUS: "Eskatu kate bat. Inprimatu lehen karakteretik hasten diren azpikate guztiak."
      },
      initialCode: "# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestSub1(unittest.TestCase):\n    def test_test(self):\n        out = run_student_code(inputs=['test'])\n        self.assertIn("tes", out)\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-18_substrings_part_2',
      title: { ENG: "Substrings, part 2", CAS: "Subcadenas, parte 2", EUS: "Azpikateak, 2. zatia" },
      description: {
        ENG: "Ask for a string. Print all substrings ending with the last character (t, st, est, test).",
        CAS: "Pide una cadena. Imprime todas las subcadenas que terminan con el último carácter.",
        EUS: "Eskatu kate bat. Inprimatu azken karakterez amaitzen diren azpikate guztiak."
      },
      initialCode: "# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestSub2(unittest.TestCase):\n    def test_test(self):\n        out = run_student_code(inputs=['test'])\n        self.assertIn("st", out)\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-19_does_it_contain_vowels',
      title: { ENG: "Does it contain vowels", CAS: "¿Contiene vocales?", EUS: "Bokalik ba al du?" },
      description: {
        ENG: "Ask for a string. Check for a, e, o. Print 'x found' or 'x not found'.",
        CAS: "Pide una cadena. Comprueba a, e, o. Imprime 'x found' o 'x not found'.",
        EUS: "Eskatu kate bat. Egiaztatu a, e, o. Inprimatu 'x found' edo 'x not found'."
      },
      initialCode: "# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestVowels(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['hello'])\n        self.assertIn("a not found", out)\n        self.assertIn("e found", out)\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-20_find_first_substring',
      title: { ENG: "Find the first substring", CAS: "Encontrar la primera subcadena", EUS: "Aurkitu lehenengo azpikatea" },
      description: {
        ENG: "Ask for a word and a character. Print the first 3 characters starting from that character.",
        CAS: "Pide palabra y carácter. Imprime los primeros 3 caracteres empezando por ese carácter.",
        EUS: "Eskatu hitza eta karakterea. Inprimatu lehen 3 karaktereak karaktere horretatik hasita."
      },
      initialCode: "# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestFindSub(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['mammoth', 'm'])\n        self.assertIn("mam", out)\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-21_find_all_substrings',
      title: { ENG: "Find all the substrings", CAS: "Encontrar todas las subcadenas", EUS: "Aurkitu azpikate guztiak" },
      description: {
        ENG: "Like previous, but print ALL 3-char substrings starting with that character.",
        CAS: "Como el anterior, pero imprime TODAS las subcadenas de 3 caracteres que empiecen por ese carácter.",
        EUS: "Aurrekoa bezala, baina inprimatu karaktere horretakin hasten diren 3 karaktereko azpikate GUZTIAK."
      },
      initialCode: "# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestFindAll(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['mammoth', 'm'])\n        self.assertIn("mam", out)\n        self.assertIn("mmo", out)\n        self.assertIn("mot", out)\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-22_second_occurrence',
      title: { ENG: "The second occurrence", CAS: "La segunda ocurrencia", EUS: "Bigarren agerraldia" },
      description: {
        ENG: "Find the second occurrence of a substring. Print index or 'does not occur twice'.",
        CAS: "Encuentra la segunda ocurrencia de una subcadena. Imprime el índice o un mensaje si no existe.",
        EUS: "Aurkitu azpikate baten bigarren agerraldia. Inprimatu indizea edo mezua ez bada existitzen."
      },
      initialCode: "# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestSecond(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(inputs=['abcabc', 'ab'])\n        self.assertIn("index 3", out)\n`
    },
    {
      type: 'quiz',
      title: { ENG: "Quiz", CAS: "Cuestionario", EUS: "Galdetegia" },
      questions: [
        {
          id: 'q1',
          prompt: { 
            ENG: 'What is the index of the first character in a string?',
            CAS: '¿Cuál es el índice del primer carácter en una cadena?',
            EUS: 'Zein da kate bateko lehen karakterearen indizea?'
          },
          options: [
            { id: 'o1', text: '1', isCorrect: false },
            { id: 'o2', text: '0', isCorrect: true },
            { id: 'o3', text: '-1', isCorrect: false }
          ]
        },
        {
          id: 'q2',
          prompt: { 
            ENG: 'What does "banana"[1:4] return?',
            CAS: '¿Qué devuelve "banana"[1:4]?',
            EUS: 'Zer itzultzen du "banana"[1:4]-k?'
          },
          options: [
            { id: 'o1', text: '"ban"', isCorrect: false },
            { id: 'o2', text: '"ana"', isCorrect: true },
            { id: 'o3', text: '"anan"', isCorrect: false }
          ]
        },
        {
          id: 'q3',
          prompt: { 
            ENG: 'What does find() return if the substring is not found?',
            CAS: '¿Qué devuelve find() si no se encuentra la subcadena?',
            EUS: 'Zer itzultzen du find()-ek azpikatea ez bada aurkitzen?'
          },
          options: [
            { id: 'o1', text: 'False', isCorrect: false },
            { id: 'o2', text: '0', isCorrect: false },
            { id: 'o3', text: '-1', isCorrect: true }
          ]
        }
      ]
    }
  ]
};