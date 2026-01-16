import { CoursePage } from '../mooc-exercises';

export const section1: CoursePage = {
  id: "part1-1",
  title: {
    ENG: "Getting started",
    CAS: "Empezando",
    EUS: "Hasten"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\n# Getting started\n\n## After this section:\n\n- You will have written and executed your first Python program\n- You will know how to use the print command\n- You will be able to use programming for arithmetic operations\n\nComputer programs consist of **commands**, each command instructing the computer to take some action. A computer executes these commands one by one. Among other things, commands can be used to perform calculations, compare things in the computer's memory, cause changes in how the program functions, relay messages or ask for information from the program's user.\n\nLet's begin programming by getting familiar with the `print` command, which *prints* text. In this context, printing essentially means that the program will show some text on the screen.\n\nThe following program will print the line \"Hi there!\":\n\n```python\nprint(\"Hi there!\")\n```\n\nWhen the program is run, it produces this:\n\n<sample-output>\n\nHi there!\n\n</sample-output>\n\nThe program will not work unless the code is written exactly as it is above. For example, trying to run the print command without the quotation marks, like so:\n\n```python\nprint(Hi there!)\n```\n\nwill not print out the message, but instead causes an error:\n\n<sample-output>\n<pre>\nFile \"<stdin>\", line 1\n  print(Hi there!)\n                   ^\nSyntaxError: invalid syntax\n</pre>\n</sample-output>\n\nIn summary, if you want to print text, the text must all be encased in quotation marks or Python will not interpret it correctly.\n",
        CAS: "\n# Empezando\n\n## Después de esta sección:\n\n- Habrás escrito y ejecutado tu primer programa en Python\n- Sabrás cómo usar el comando print\n- Serás capaz de usar la programación para operaciones aritméticas\n\nLos programas de ordenador consisten en **comandos**, donde cada comando instruye al ordenador a realizar alguna acción. Un ordenador ejecuta estos comandos uno por uno. Entre otras cosas, los comandos se pueden usar para realizar cálculos, comparar cosas en la memoria del ordenador, causar cambios en cómo funciona el programa, transmitir mensajes o pedir información al usuario del programa.\n\nEmpecemos a programar familiarizándonos con el comando `print`, que *imprime* texto. En este contexto, imprimir esencialmente significa que el programa mostrará algún texto en la pantalla.\n\nEl siguiente programa imprimirá la línea \"¡Hola!\":\n\n```python\nprint(\"¡Hola!\")\n```\n\nCuando se ejecuta el programa, produce esto:\n\n<sample-output>\n\n¡Hola!\n\n</sample-output>\n\nEl programa no funcionará a menos que el código esté escrito exactamente como se muestra arriba. Por ejemplo, intentar ejecutar el comando print sin las comillas, así:\n\n```python\nprint(¡Hola!)\n```\n\nno imprimirá el mensaje, sino que causará un error:\n\n<sample-output>\n<pre>\nFile \"<stdin>\", line 1\n  print(¡Hola!)\n        ^\nSyntaxError: invalid syntax\n</pre>\n</sample-output>\n\nEn resumen, si quieres imprimir texto, el texto debe estar encerrado entre comillas o Python no lo interpretará correctamente.\n",
        EUS: "\n# Hasten\n\n## Atal honen ondoren:\n\n- Zure lehen Python programa idatzi eta exekutatu izango duzu\n- Jakingo duzu nola erabili print komandoa\n- Programazioa erabili ahal izango duzu eragiketa aritmetikoetarako\n\nOrdenagailu-programak **komandoz** osatuta daude; komando bakoitzak ordenagailuari ekintzaren bat egiteko agintzen dio. Ordenagailu batek komando hauek banan-banan exekutatzen ditu. Besteak beste, komandoak kalkuluak egiteko, ordenagailuaren memorian gauzak alderatzeko, programaren funtzionamenduan aldaketak eragiteko, mezuak helarazteko edo programaren erabiltzaileari informazioa eskatzeko erabil daitezke.\n\nHas gaitezen programatzen `print` komandoarekin trebatuz. Honek testua *inprimatzen* du. Testuinguru honetan, inprimatzeak esan nahi du programak testu batzuk pantailan erakutsiko dituela.\n\nHurrengo programak \"Kaixo!\" lerroa inprimatuko du:\n\n```python\nprint(\"Kaixo!\")\n```\n\nPrograma exekutatzen denean, hau sortzen du:\n\n<sample-output>\n\nKaixo!\n\n</sample-output>\n\nProgramak ez du funtzionatuko kodea goian dagoen bezala idazten ez bada. Adibidez, print komandoa komatxorik gabe exekutatzen saiatuz gero, horrela:\n\n```python\nprint(Kaixo!)\n```\n\nez du mezua inprimatuko, baizik eta errore bat sortuko du:\n\n<sample-output>\n<pre>\nFile \"<stdin>\", line 1\n  print(Kaixo!)\n        ^\nSyntaxError: invalid syntax\n</pre>\n</sample-output>\n\nLaburbilduz, testua inprimatu nahi baduzu, testuak komatxo artean egon behar du, bestela Pythonek ez du behar bezala interpretatuko.\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part01-01_emoticon',
      title: { ENG: "Emoticon", CAS: "Emoticono", EUS: "Emotikonoa" },
      description: {
        ENG: "Please write a program which prints out an emoticon: :-)",
        CAS: "Por favor, escribe un programa que imprima un emoticono: :-)",
        EUS: "Mesedez idatzi programa bat emotikono bat inprimatzen duena: :-)"
      },
      initialCode: `# Write your solution here\n`,
      testCode: `import unittest\nfrom unittest.mock import patch\nimport io\n\nclass TestEmoticon(unittest.TestCase):\n    def test_output(self):\n        output = run_student_code().strip()\n        if not output:\n            self.fail(tr("Your program didn't print anything. Use the print() command.", "Tu programa no ha impreso nada. Usa el comando print().", "Zure programak ez du ezer inprimatu. Erabili print() komandoa."))\n        if ":-)" not in output:\n            self.fail(tr(f"Expected emoticon :-) but found: {output}", f"Se esperaba el emoticono :-) pero se encontró: {output}", f":-) emotikonoa espero zen baina hau aurkitu da: {output}"))\n        self.assertIn(":-)", output)\n`
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
      title: { ENG: "Fix the code: Seven Cities", CAS: "Corrige el código: Siete Ciudades", EUS: "Konpondu kodea: Zazpi Hiri" },
      description: {
        ENG: "This program is supposed to print out the names of seven cities in alphabetical order, but it's not working quite right yet. Please fix the program.",
        CAS: "Este programa debería imprimir los nombres de siete ciudades en orden alfabético, pero no funciona bien todavía. Por favor, corrígelo.",
        EUS: "Programa honek zazpi hiriren izenak ordena alfabetikoan inprimatu beharko lituzke, baina oraindik ez dabil ondo. Mesedez konpondu programa."
      },
      initialCode: `print("Pamplona")\nprint("Valencia")\nprint("Zaragoza")\nprint("Barcelona")\nprint("Sevilla")\nprint("Bilbao")\nprint("Madrid")`,
      testCode: `import unittest\n\nclass TestSevenBrothers(unittest.TestCase):\n    def test_output(self):\n        output = run_student_code().strip().split('\\n')\n        expected = ["Barcelona", "Bilbao", "Madrid", "Pamplona", "Sevilla", "Valencia", "Zaragoza"]\n        # Filter empty lines just in case\n        output = [line for line in output if line.strip()]\n        \n        if len(output) != 7:\n             self.fail(tr(f"Expected 7 names, but found {len(output)}. Make sure to print all of them.", f"Se esperaban 7 nombres, pero se encontraron {len(output)}. Asegúrate de imprimir todos.", f"7 izen espero ziren, baina {len(output)} aurkitu dira. Ziurtatu denak inprimatzen dituzula."))\n\n        for i in range(7):\n            if output[i].strip() != expected[i]:\n                self.fail(tr(f"The order is incorrect. Line {i+1} should be {expected[i]}, but is {output[i]}.", f"El orden es incorrecto. En la línea {i+1} debería estar {expected[i]}, pero está {output[i]}.", f"Ordena okerra da. {i+1}. lerroan {expected[i]} egon beharko litzateke, baina {output[i]} dago."))\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-03_row_your_boat',
      title: { ENG: "Row, Row, Row Your Boat", CAS: "Rema, rema, rema tu bote", EUS: "Arraun, arraun, arraun zure txalupa" },
      description: {
        ENG: "Please write a program which prints out the following lines exactly as they are written here, punctuation and all:\n\nRow, row, row your boat,\nGently down the stream.\nMerrily, merrily, merrily, merrily,\nLife is but a dream.",
        CAS: "Por favor, escribe un programa que imprima las siguientes líneas exactamente como están escritas aquí, con puntuación y todo:\n\nRow, row, row your boat,\nGently down the stream.\nMerrily, merrily, merrily, merrily,\nLife is but a dream.",
        EUS: "Mesedez idatzi programa bat hurrengo lerroak zehazki hemen idatzita dauden bezala inprimatzen dituena, puntuazio eta guzti:\n\nRow, row, row your boat,\nGently down the stream.\nMerrily, merrily, merrily, merrily,\nLife is but a dream."
      },
      initialCode: `# Write your solution here\n`,
      testCode: `import unittest\n\nclass TestRowYourBoat(unittest.TestCase):\n    def test_output(self):\n        output = run_student_code().strip()\n        expected = "Row, row, row your boat,\\nGently down the stream.\\nMerrily, merrily, merrily, merrily,\\nLife is but a dream."\n        if output.lower() == expected.lower() and output != expected:\n            self.fail(tr("The text is correct but casing does not match exactly.", "El texto es correcto pero las mayúsculas/minúsculas no coinciden exactamente.", "Testua zuzena da baina maiuskulak/minuskulak ez datoz bat zehazki."))\n        if output != expected:\n            self.fail(tr("Output does not match exactly. Check punctuation and casing.", "La salida no coincide exactamente con la letra de la canción. Revisa puntuación y mayúsculas.", "Irteera ez dator bat zehazki. Egiaztatu puntuazioa eta maiuskulak."))\n`
    },
    {
      type: 'markdown',
      content: {
        ENG: "\n## Arithmetic operations\n\nYou can also put arithmetic operations inside a `print` command. Running it will then print out the result of the operation.\n\n```python\nprint(2 + 5)\nprint(3 * 3)\nprint(2 + 2 * 10)\n```\n\nPrints out these lines:\n\n<sample-output>\n\n7\n9\n22\n\n</sample-output>\n\nNotice the lack of quotation marks around the arithmetic operations above. Quotation marks are used to signify **strings**. In the context of programming, strings are sequences of characters. They can consist of letters, numbers and any other types of characters, such as punctuation. Strings aren't just words as we commonly understand them, but instead a single string can be as long as multiple complete sentences.\n\nStrings are usually printed out exactly as they are written. Thus, the following two commands produce two quite different results:\n\n```python\nprint(2 + 2 * 10)\nprint(\"2 + 2 * 10\")\n```\n\nThis program prints out:\n\n<sample-output>\n\n22\n2 + 2 * 10\n\n</sample-output>\n\nWith the second line of code, Python does not calculate the result of the operation, but instead prints out the operation itself, as a string.\nSo, strings are printed out just as they are written, without any reference to their contents.\n",
        CAS: "\n## Operaciones aritméticas\n\nTambién puedes poner operaciones aritméticas dentro de un comando `print`. Al ejecutarlo se imprimirá el resultado de la operación.\n\n```python\nprint(2 + 5)\nprint(3 * 3)\nprint(2 + 2 * 10)\n```\n\nImprime estas líneas:\n\n<sample-output>\n\n7\n9\n22\n\n</sample-output>\n\nNota la falta de comillas alrededor de las operaciones aritméticas anteriores. Las comillas se usan para indicar **cadenas de texto** (strings). En el contexto de la programación, las cadenas son secuencias de caracteres. Pueden consistir en letras, números y cualquier otro tipo de caracteres, como signos de puntuación.\n\nLas cadenas generalmente se imprimen exactamente como están escritas. Por lo tanto, los siguientes dos comandos producen resultados muy diferentes:\n\n```python\nprint(2 + 2 * 10)\nprint(\"2 + 2 * 10\")\n```\n\nEste programa imprime:\n\n<sample-output>\n\n22\n2 + 2 * 10\n\n</sample-output>\n\nCon la segunda línea de código, Python no calcula el resultado de la operación, sino que imprime la operación misma, como una cadena.\nAsí que, las cadenas se imprimen tal cual se escriben, sin referencia a su contenido (no se evalúan).\n",
        EUS: "\n## Eragiketa aritmetikoak\n\nEragiketa aritmetikoak ere jar ditzakezu `print` komandoaren barruan. Exekutatzean eragiketaren emaitza inprimatuko du.\n\n```python\nprint(2 + 5)\nprint(3 * 3)\nprint(2 + 2 * 10)\n```\n\nLerro hauek inprimatzen ditu:\n\n<sample-output>\n\n7\n9\n22\n\n</sample-output>\n\nOhartu goiko eragiketa aritmetikoen inguruan komatxorik ez dagoela. Komatxoak **kateak** (strings) adierazteko erabiltzen dira. Programazioaren testuinguruan, kateak karaktere-sekuentziak dira. Letrak, zenbakiak eta beste edozein motatako karaktereak izan daitezke, puntuazio-markak adibidez.\n\nKateak normalean idatzita dauden bezala inprimatzen dira. Beraz, hurrengo bi komandoek emaitza oso desberdinak ematen dituzte:\n\n```python\nprint(2 + 2 * 10)\nprint(\"2 + 2 * 10\")\n```\n\nPrograma honek hau inprimatzen du:\n\n<sample-output>\n\n22\n2 + 2 * 10\n\n</sample-output>\n\nBigarren kode-lerroarekin, Pythonek ez du eragiketaren emaitza kalkulatzen, baizik eta eragiketa bera inprimatzen du, kate gisa.\nBeraz, kateak idazten diren bezala inprimatzen dira, beraien edukia ebaluatu gabe.\n"
      }
    },
    {
      type: 'markdown',
      content: {
        ENG: "\n## Commenting\n\nAny line beginning with the pound sign `#`, also known as a hash or a number sign, is a comment. This means that any text on that line following the `#` symbol will not in any way affect how the program functions. Python will simply ignore it.\n\nComments are used for explaining how a program works, to both the programmer themselves, and others reading the program code. In this program a comment explains the calculation performed in the code:\n\n```python\nprint(\"Hours in a year:\")\n# there are 365 days in a year and 24 hours in each day\nprint(365*24)\n```\n\nWhen the program is run, the comment will not be visible to the user:\n\n<sample-output>\n\nHours in a year:\n8760\n\n</sample-output>\n\nShort comments can also be added to the end of a line:\n\n```python\nprint(\"Hours in a year:\")\nprint(365*24) # 365 days, 24 hours in each day\n```\n",
        CAS: "\n## Comentarios\n\nCualquier línea que comience con el signo de almohadilla `#`, es un comentario. Esto significa que cualquier texto en esa línea después del símbolo `#` no afectará de ninguna manera cómo funciona el programa. Python simplemente lo ignorará.\n\nLos comentarios se usan para explicar cómo funciona un programa, tanto para el programador mismo como para otros que lean el código. En este programa un comentario explica el cálculo realizado:\n\n```python\nprint(\"Horas en un año:\")\n# hay 365 días en un año y 24 horas en cada día\nprint(365*24)\n```\n\nCuando se ejecuta el programa, el comentario no será visible para el usuario:\n\n<sample-output>\n\nHoras en un año:\n8760\n\n</sample-output>\n\nTambién se pueden añadir comentarios cortos al final de una línea:\n\n```python\nprint(\"Horas en un año:\")\nprint(365*24) # 365 días, 24 horas en cada día\n```\n",
        EUS: "\n## Iruzkinak\n\n`#` zeinuarekin hasten den edozein lerro iruzkin bat da. Horrek esan nahi du `#` sinboloaren ondoren lerro horretan dagoen edozein testuk ez duela inolako eraginik izango programaren funtzionamenduan. Pythonek ez dio jaramonik egingo.\n\nIruzkinak programa batek nola funtzionatzen duen azaltzeko erabiltzen dira, bai programatzailearentzat berarentzat, bai programaren kodea irakurtzen duten besteentzat. Programa honetan iruzkin batek kodean egindako kalkulua azaltzen du:\n\n```python\nprint(\"Orduak urte batean:\")\n# 365 egun daude urtean eta 24 ordu egun bakoitzean\nprint(365*24)\n```\n\nPrograma exekutatzen denean, iruzkina ez da ikusgai egongo erabiltzailearentzat:\n\n<sample-output>\n\nOrduak urte batean:\n8760\n\n</sample-output>\n\nIruzkin laburrak lerro baten amaieran ere gehi daitezke:\n\n```python\nprint(\"Orduak urte batean:\")\nprint(365*24) # 365 egun, 24 ordu egun bakoitzean\n```\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part01-04_minutes_in_a_year',
      title: { ENG: "Minutes in a year", CAS: "Minutos en un año", EUS: "Minutuak urte batean" },
      description: {
        ENG: "Please write a program which prints out the number of minutes in a year. Use Python code to perform the calculation.",
        CAS: "Por favor, escribe un programa que imprima el número de minutos en un año. Usa código Python para realizar el cálculo.",
        EUS: "Mesedez idatzi programa bat urte bateko minutu kopurua inprimatzen duena. Erabili Python kodea kalkulua egiteko."
      },
      initialCode: `# Write your solution here\n`,
      testCode: `import unittest\nclass TestMinutes(unittest.TestCase):\n    def test_output(self):\n        output = run_student_code()\n        # 365 * 24 * 60 = 525600\n        if "525600" in STUDENT_CODE:\n             self.fail(tr("Cheating! You wrote the number directly. Use Python to calculate it (e.g. print(365 * 24 * 60))", "¡Trampa! Has escrito el número directamente. Debes dejar que Python lo calcule (ej: print(365 * 24 * 60))", "Iruzurra! Zenbakia zuzenean idatzi duzu. Erabili Python kalkulatzeko (adib. print(365 * 24 * 60))"))\n        self.assertIn("525600", output)\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-05_print_code',
      title: { ENG: "Print some code", CAS: "Imprimir código", EUS: "Kodea inprimatu" },
      description: {
        ENG: "Thus far, you have probably used double quotation marks \" to print out strings. In addition to the double quotation marks, Python also accepts single quotation marks '. Please write a program which prints out the following:\n\nprint(\"Hello there!\")",
        CAS: "Hasta ahora, probablemente has usado comillas dobles \" para imprimir cadenas. Además de las comillas dobles, Python también acepta comillas simples '. Por favor, escribe un programa que imprima lo siguiente:\n\nprint(\"Hello there!\")",
        EUS: "Orain arte, ziurrenik komatxo bikoitzak \" erabili dituzu kateak inprimatzeko. Komatxo bikoitzez gain, Pythonek komatxo sinpleak ' ere onartzen ditu. Mesedez idatzi programa bat hau inprimatzen duena:\n\nprint(\"Hello there!\")"
      },
      initialCode: `# Write your solution here\n`,
      testCode: `import unittest\nclass TestPrintCode(unittest.TestCase):\n    def test_output(self):\n        output = run_student_code().strip()\n        expected = 'print("Hello there!")'\n        if "print(" not in output:\n            self.fail(tr("Missing 'print(' in output. You must print literally: print(\\"Hello there!\\")", "Falta el comando print en el texto de salida. Debes imprimir literalmente: print(\\"Hello there!\\")", "'print(' falta irteeran. Literalki inprimatu behar duzu: print(\\"Hello there!\\")"))\n        if expected not in output:\n             self.fail(tr(f"Expected output: {expected}. Remember to use single quotes ' to wrap text containing double quotes.", f"Salida esperada: {expected}. Recuerda usar comillas simples ' para envolver el texto que contiene comillas dobles.", f"Espero den irteera: {expected}. Gogoratu komatxo sinpleak ' erabiltzea komatxo bikoitzak dituen testua biltzeko."))\n`
    },
    {
      type: 'quiz',
      title: { ENG: "Quiz", CAS: "Cuestionario", EUS: "Galdetegia" },
      questions: [
        {
          id: 'q1',
          prompt: { 
            ENG: 'Which of the following programs would print out the text "Hello there!"?',
            CAS: '¿Cuál de los siguientes programas imprimiría el texto "Hello there!"?',
            EUS: 'Ondorengo programa hauetako zeinek inprimatuko luke "Hello there!" testua?'
          },
          options: [
            { id: 'o1', text: 'print(Hello there!)', isCorrect: false, feedback: { ENG: 'Missing quotes!', CAS: '¡Faltan comillas!', EUS: 'Komatxoak falta dira!' } },
            { id: 'o2', text: 'print("Hello there!")', isCorrect: true },
            { id: 'o3', text: 'print("Hello there!)"', isCorrect: false, feedback: { ENG: 'Quotes misplaced.', CAS: 'Comillas mal colocadas.', EUS: 'Komatxoak gaizki jarrita.' } }
          ]
        },
        {
          id: 'q2',
          prompt: { 
            ENG: 'What does the following program print? print(2 + 2 * 10)',
            CAS: '¿Qué imprime el siguiente programa? print(2 + 2 * 10)',
            EUS: 'Zer inprimatzen du hurrengo programak? print(2 + 2 * 10)'
          },
          options: [
            { id: 'o1', text: '40', isCorrect: false, feedback: { ENG: 'Multiplication happens before addition.', CAS: 'La multiplicación ocurre antes de la suma.', EUS: 'Biderketa batuketa baino lehen egiten da.' } },
            { id: 'o2', text: '22', isCorrect: true },
            { id: 'o3', text: '2 + 2 * 10', isCorrect: false, feedback: { ENG: 'It prints the result, not the calculation (no quotes).', CAS: 'Imprime el resultado, no el cálculo (sin comillas).', EUS: 'Emaitza inprimatzen du, ez kalkulua (komatxorik ez).' } }
          ]
        },
        {
          id: 'q3',
          prompt: { 
            ENG: 'Which character is used to start a comment in Python?',
            CAS: '¿Qué carácter se usa para empezar un comentario en Python?',
            EUS: 'Zein karaktere erabiltzen da Python-en iruzkin bat hasteko?'
          },
          options: [
            { id: 'o1', text: '//', isCorrect: false },
            { id: 'o2', text: '<!--', isCorrect: false },
            { id: 'o3', text: '#', isCorrect: true }
          ]
        }
      ]
    }
  ]
};
