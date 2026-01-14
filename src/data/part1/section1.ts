import { CoursePage } from '../mooc-exercises';

export const section1: CoursePage = {
  id: "part1-1",
  title: {
    ENG: "Getting started",
    CAS: "Comenzando",
    EUS: "Hasten"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\n# Getting started\n\n## After this section:\n\n- You will have written and executed your first Python program\n- You will know how to use the print command\n- You will be able to use programming for arithmetic operations\n\nLet's begin programming by getting familiar with the `print` command. It prints text.\n\n```python\nprint(\"Hi there!\")\n```\n\nWhen you run this line of code, it will print the text \"Hi there!\".\n",
        CAS: "\n# Comenzando\n\n## Después de esta sección:\n\n- Habrás escrito y ejecutado tu primer programa en Python\n- Sabrás cómo usar el comando print\n- Serás capaz de usar la programación para operaciones aritméticas\n\nEmpecemos a programar familiarizándonos con el comando `print`. Imprime texto en pantalla.\n\n```python\nprint(\"¡Hola!\")\n```\n\nCuando ejecutes esta línea de código, imprimirá el texto \"¡Hola!\".\n",
        EUS: "\n# Hasten\n\n## Atal honen ondoren:\n\n- Zure lehen Python programa idatzi eta exekutatu izango duzu\n- Jakingo duzu nola erabili print komandoa\n- Programazioa erabili ahal izango duzu eragiketa aritmetikoetarako\n\nHas gaitezen programatzen `print` komandoarekin trebatuz. Testua inprimatzen du.\n\n```python\nprint(\"Kaixo!\")\n```\n\nKode lerro hau exekutatzen duzunean, \"Kaixo!\" testua inprimatuko du.\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part01-01_emoticon',
      title: {
        ENG: "Emoticon",
        CAS: "Emoticono",
        EUS: "Emotikonoa"
      },
      description: {
        ENG: "Please write a program which prints out an emoticon: :-)",
        CAS: "Por favor, escribe un programa que imprima un emoticono: :-)",
        EUS: "Mesedez idatzi programa bat emotikono bat inprimatzen duena: :-)"
      },
      initialCode: "# Write your solution here\n",
      testCode: "import unittest\nfrom unittest.mock import patch\nimport io\n\nclass TestEmoticon(unittest.TestCase):\n    def test_output(self):\n        output = run_student_code()\n        self.assertIn(\":-)\", output)\n"
    },
    {
      type: 'markdown',
      content: {
        ENG: "\n## A program of multiple commands\n\nMultiple commands written in succession will be executed in order from first to last. For example this program:\n\n```python\nprint(\"Welcome to Introduction to Programming!\")\nprint(\"First we will practice using the print command.\")\nprint(\"This program prints three lines of text on the screen.\")\n```\n\nPrints the following lines on the screen:\n\n<sample-output>\n\nWelcome to Introduction to Programming!\nFirst we will practice using the print command.\nThis program prints three lines of text on the screen.\n\n</sample-output>\n",
        CAS: "\n## Un programa con múltiples comandos\n\nMúltiples comandos escritos en sucesión se ejecutarán en orden del primero al último. Por ejemplo este programa:\n\n```python\nprint(\"¡Bienvenido a Introducción a la Programación!\")\nprint(\"Primero practicaremos el uso del comando print.\")\nprint(\"Este programa imprime tres líneas de texto en la pantalla.\")\n```\n\nImprime las siguientes líneas en la pantalla:\n\n<sample-output>\n\n¡Bienvenido a Introducción a la Programación!\nPrimero practicaremos el uso del comando print.\nEste programa imprime tres líneas de texto en la pantalla.\n\n</sample-output>\n",
        EUS: "\n## Komando anitzeko programa bat\n\nJarraian idatzitako komando anitzak lehenengotik azkenera ordenan exekutatuko dira. Adibidez programa hau:\n\n```python\nprint(\"Ongi etorri Programazioaren Sarrerara!\")\nprint(\"Lehenik print komandoa erabiltzen praktikatuko dugu.\")\nprint(\"Programa honek hiru testu lerro inprimatzen ditu pantailan.\")\n```\n\nHurrengo lerroak inprimatzen ditu pantailan:\n\n<sample-output>\n\nOngi etorri Programazioaren Sarrerara!\nLehenik print komandoa erabiltzen praktikatuko dugu.\nPrograma honek hiru testu lerro inprimatzen ditu pantailan.\n\n</sample-output>\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part01-02_seven_brothers',
      title: {
        ENG: "Fix the code: Seven Brothers",
        CAS: "Corrige el código: Siete Hermanos",
        EUS: "Konpondu kodea: Zazpi Anaiak"
      },
      description: {
        ENG: "\"Seitsemän veljestä\" is one of the first novels ever written in Finnish. This program is supposed to print out the names of the brothers in alphabetical order, but it's not working quite right yet. Please fix the program.",
        CAS: "\"Seitsemän veljestä\" es una de las primeras novelas escritas en finés. Este programa debería imprimir los nombres de los hermanos en orden alfabético, pero no funciona bien todavía. Por favor, corrígelo.",
        EUS: "\"Seitsemän veljestä\" suomieraz idatzitako lehen eleberrietako bat da. Programa honek anaien izenak ordena alfabetikoan inprimatu beharko lituzke, baina oraindik ez dabil ondo. Mesedez konpondu programa."
      },
      initialCode: "print(\"Simeoni\")\nprint(\"Juhani\")\nprint(\"Eero\")\nprint(\"Lauri\")\nprint(\"Aapo\")\nprint(\"Tuomas\")\nprint(\"Timo\")",
      testCode: "import unittest\n\nclass TestSevenBrothers(unittest.TestCase):\n    def test_output(self):\n        output = run_student_code().strip().split('\\n')\n        expected = [\"Aapo\", \"Eero\", \"Juhani\", \"Lauri\", \"Simeoni\", \"Timo\", \"Tuomas\"]\n        # Filter empty lines just in case\n        output = [line for line in output if line.strip()]\n        \n        if len(output) != 7:\n             self.fail(f\"Expected 7 names, but got {len(output)}\")\n\n        for i in range(7):\n            if output[i].strip() != expected[i]:\n                self.fail(f\"Expected {expected[i]} at line {i+1}, but got {output[i]}\")\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part01-03_row_your_boat',
      title: {
        ENG: "Row, Row, Row Your Boat",
        CAS: "Rema, rema, rema tu bote",
        EUS: "Arraun, arraun, arraun zure txalupa"
      },
      description: {
        ENG: "Please write a program which prints out the following lines exactly as they are written here, punctuation and all:\n\nRow, row, row your boat,\nGently down the stream.\nMerrily, merrily, merrily, merrily,\nLife is but a dream.",
        CAS: "Por favor, escribe un programa que imprima las siguientes líneas exactamente como están escritas aquí, con puntuación y todo:\n\nRow, row, row your boat,\nGently down the stream.\nMerrily, merrily, merrily, merrily,\nLife is but a dream.",
        EUS: "Mesedez idatzi programa bat hurrengo lerroak zehazki hemen idatzita dauden bezala inprimatzen dituena, puntuazio eta guzti:\n\nRow, row, row your boat,\nGently down the stream.\nMerrily, merrily, merrily, merrily,\nLife is but a dream."
      },
      initialCode: "# Write your solution here\n",
      testCode: "import unittest\n\nclass TestRowYourBoat(unittest.TestCase):\n    def test_output(self):\n        output = run_student_code().strip()\n        expected = \"Row, row, row your boat,\\nGently down the stream.\\nMerrily, merrily, merrily, merrily,\\nLife is but a dream.\"\n        if output != expected:\n            self.fail(\"The output does not match the expected lyrics exactly.\")\n"
    },
    {
      type: 'markdown',
      content: {
        ENG: "\n## Arithmetic operations\n\nYou can also put arithmetic operations inside a `print` command. Running it will then print out the result of the operation.\n\n```python\nprint(2 + 5)\nprint(3 * 3)\nprint(2 + 2 * 10)\n```\n\nPrints out these lines:\n\n<sample-output>\n\n7\n9\n22\n\n</sample-output>\n\nNotice the lack of quotation marks around the arithmetic operations above. Quotation marks are used to signify strings.\n",
        CAS: "\n## Operaciones aritméticas\n\nTambién puedes poner operaciones aritméticas dentro de un comando `print`. Al ejecutarlo se imprimirá el resultado de la operación.\n\n```python\nprint(2 + 5)\nprint(3 * 3)\nprint(2 + 2 * 10)\n```\n\nImprime estas líneas:\n\n<sample-output>\n\n7\n9\n22\n\n</sample-output>\n\nNota la falta de comillas alrededor de las operaciones aritméticas anteriores. Las comillas se usan para indicar cadenas de texto (strings).\n",
        EUS: "\n## Eragiketa aritmetikoak\n\nEragiketa aritmetikoak ere jar ditzakezu `print` komandoaren barruan. Exekutatzean eragiketaren emaitza inprimatuko du.\n\n```python\nprint(2 + 5)\nprint(3 * 3)\nprint(2 + 2 * 10)\n```\n\nLerro hauek inprimatzen ditu:\n\n<sample-output>\n\n7\n9\n22\n\n</sample-output>\n\nOhartu goiko eragiketa aritmetikoen inguruan komatxorik ez dagoela. Komatxoak kateak (strings) adierazteko erabiltzen dira.\n"
      }
    },
    {
      type: 'markdown',
      content: {
        ENG: "\n## Commenting\n\nAny line beginning with the pound sign `#`, also known as a hash or a number sign, is a comment. Python will simply ignore it.\n\n```python\nprint(\"Hours in a year:\")\n# there are 365 days in a year and 24 hours in each day\nprint(365*24)\n```\n\nWhen the program is run, the comment will not be visible to the user.\n",
        CAS: "\n## Comentarios\n\nCualquier línea que comience con el signo de almohadilla `#`, es un comentario. Python simplemente lo ignorará.\n\n```python\nprint(\"Horas en un año:\")\n# hay 365 días en un año y 24 horas en cada día\nprint(365*24)\n```\n\nCuando se ejecuta el programa, el comentario no será visible para el usuario.\n",
        EUS: "\n## Iruzkinak\n\n`#` zeinuarekin hasten den edozein lerro iruzkin bat da. Pythonek ez dio jaramonik egingo.\n\n```python\nprint(\"Orduak urte batean:\")\n# 365 egun daude urtean eta 24 ordu egun bakoitzean\nprint(365*24)\n```\n\nPrograma exekutatzen denean, iruzkina ez da ikusgai egongo erabiltzailearentzat.\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part01-04_minutes_in_a_year',
      title: {
        ENG: "Minutes in a year",
        CAS: "Minutos en un año",
        EUS: "Minutuak urte batean"
      },
      description: {
        ENG: "Please write a program which prints out the number of minutes in a year. Use Python code to perform the calculation.",
        CAS: "Por favor, escribe un programa que imprima el número de minutos en un año. Usa código Python para realizar el cálculo.",
        EUS: "Mesedez idatzi programa bat urte bateko minutu kopurua inprimatzen duena. Erabili Python kodea kalkulua egiteko."
      },
      initialCode: "# Write your solution here\n",
      testCode: "import unittest\nclass TestMinutes(unittest.TestCase):\n    def test_output(self):\n        output = run_student_code()\n        # 365 * 24 * 60 = 525600\n        self.assertIn(\"525600\", output)\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part01-05_print_code',
      title: {
        ENG: "Print some code",
        CAS: "Imprimir código",
        EUS: "Kodea inprimatu"
      },
      description: {
        ENG: "Thus far, you have probably used double quotation marks \" to print out strings. In addition to the double quotation marks, Python also accepts single quotation marks '. Please write a program which prints out the following:\n\nprint(\"Hello there!\")",
        CAS: "Hasta ahora, probablemente has usado comillas dobles \" para imprimir cadenas. Además de las comillas dobles, Python también acepta comillas simples '. Por favor, escribe un programa que imprima lo siguiente:\n\nprint(\"Hello there!\")",
        EUS: "Orain arte, ziurrenik komatxo bikoitzak \" erabili dituzu kateak inprimatzeko. Komatxo bikoitzez gain, Pythonek komatxo sinpleak ' ere onartzen ditu. Mesedez idatzi programa bat hau inprimatzen duena:\n\nprint(\"Hello there!\")"
      },
      initialCode: "# Write your solution here\n",
      testCode: "import unittest\nclass TestPrintCode(unittest.TestCase):\n    def test_output(self):\n        output = run_student_code().strip()\n        expected = 'print(\"Hello there!\")'\n        if expected not in output:\n             self.fail(f\"Expected output to contain: {expected}\")\n"
    }
  ]
};