const fs = require('fs');

const data = {
  "id": "part1-1",
  "title": {
    "ENG": "Getting started",
    "CAS": "Comenzando",
    "EUS": "Hasten"
  },
  "blocks": [
    {
      "type": "markdown",
      "content": {
        "ENG": "# Getting started\n\n## After this section:\n\n- You will have written and executed your first Python program\n- You will know how to use the print command\n- You will be able to use programming for arithmetic operations\n\nComputer programs consist of commands, each command instructing the computer to take some action. A computer executes these commands one by one. Among other things, commands can be used to perform calculations, compare things in the computer's memory, cause changes in how the program functions, relay messages or ask for information from the program's user.\n\nLet's begin programming by getting familiar with the `print` command, which prints text. In this context, printing essentially means that the program will show some text on the screen.\n\nThe following program will print the line \"Hi there!\":\n\n```python\nprint(\"Hi there!\")\n```\n\nWhen the program is run, it produces this:\n\n```text\nHi there!\n```\n\nThe program will not work unless the code is written exactly as it is above. For example, trying to run the `print` command without the quotation marks, like so\n\n```python\nprint(Hi there!)\n```\n\nwill not print out the message, but instead causes an error:\n\n```text\nFile \" \", line 1\nprint(Hi there!)\n^\nSyntaxError: invalid syntax\n```\n\nIn summary, if you want to print text, the text must all be encased in quotation marks or Python will not interpret it correctly.",
        "CAS": "# Comenzando\n\n## Después de esta sección:\n\n- Habrás escrito y ejecutado tu primer programa en Python\n- Sabrás cómo usar el comando print\n- Podrás usar la programación para realizar operaciones aritméticas\n\nLos programas informáticos consisten en comandos, cada uno de los cuales instruye al ordenador a realizar alguna acción. Un ordenador ejecuta estos comandos uno por uno. Entre otras cosas, los comandos pueden usarse para realizar cálculos, comparar cosas en la memoria del ordenador, causar cambios en el funcionamiento del programa, transmitir mensajes o pedir información al usuario del programa.\n\nComencemos a programar familiarizándonos con el comando `print`, que imprime texto. En este contexto, imprimir significa esencialmente que el programa mostrará algún texto en la pantalla.\n\nEl siguiente programa imprimirá la línea \"¡Hola!\":\n\n```python\nprint(\"¡Hola!\")\n```\n\nCuando se ejecuta el programa, produce esto:\n\n```text\n¡Hola!\n```\n\nEl programa no funcionará a menos que el código esté escrito exactamente como arriba. Por ejemplo, intentar ejecutar el comando `print` sin las comillas, así:\n\n```python\nprint(¡Hola!)\n```\n\nno imprimirá el mensaje, sino que causará un error:\n\n```text\nFile \" \", line 1\nprint(¡Hola!)\n^\nSyntaxError: invalid syntax\n```\n\nEn resumen, si quieres imprimir texto, el texto debe estar encerrado entre comillas o Python no lo interpretará correctamente.",
        "EUS": "# Hasten\n\n## Atal honen ondoren:\n\n- Zure lehen Python programa idatzi eta exekutatu izango duzu\n- Jakingo duzu nola erabili print komandoa\n- Programazioa erabili ahal izango duzu eragiketa aritmetikoak egiteko\n\nOrdenagailu-programak komandoz osatuta daude, eta komando bakoitzak ordenagailuari ekintza bat egiteko agintzen dio. Ordenagailu batek komando horiek banan-banan exekutatzen ditu. Besteak beste, komandoak kalkuluak egiteko, ordenagailuaren memoriako gauzak alderatzeko, programaren funtzionamenduan aldaketak eragiteko, mezuak transmititzeko edo programaren erabiltzaileari informazioa eskatzeko erabil daitezke.\n\nHas gaitezen programatzen testua inprimatzen duen `print` komandoa ezagutuz. Testuinguru honetan, inprimatzeak funtsean esan nahi du programak testu batzuk erakutsiko dituela pantailan.\n\nHurrengo programak \"Kaixo!\" lerroa inprimatuko du:\n\n```python\nprint(\"Kaixo!\")\n```\n\nPograma exekutatzen denean, hau sortzen du:\n\n```text\nKaixo!\n```\n\nProgramak ez du funtzionatuko kodea goian bezala idatzita ez badago. Adibidez, `print` komandoa komatxorik gabe exekutatzen saiatzeak, honela\n\n```python\nprint(Kaixo!)\n```\n\nez du mezua inprimatuko, errore bat sortuko du ordez:\n\n```text\nFile \" \", line 1\nprint(Kaixo!)\n^\nSyntaxError: invalid syntax\n```\n\nLaburbilduz, testua inprimatu nahi baduzu, testu guztiak komatxo artean egon behar du, bestela Pythonek ez du recte interpretatuko."
      }
    },
    {
      "type": "exercise",
      "exerciseId": "part01-01_emoticon",
      "title": {
        "ENG": "Emoticon",
        "CAS": "Emoticono",
        "EUS": "Emotikonoa"
      },
      "description": {
        "ENG": "Please write a program which prints out an emoticon: :-)",
        "CAS": "Por favor escribe un programa que imprima un emoticono: :-)",
        "EUS": "Mesedez idatzi programa bat emotikono bat inprimatzen duena: :-)"
      },
      "initialCode": "# Write your code here\n",
      "testCode": "\nimport unittest\nclass TestEmoticon(unittest.TestCase):\n    def test_output(self):\n        output = run_student_code()\n        self.assertEqual(output.strip(), ":-)")\n"
    },
    {
      "type": "markdown",
      "content": {
        "ENG": "## A program of multiple commands\n\nMultiple commands written in succession will be executed in order from first to last. For example this program\n\n```python\nprint(\"Welcome to Introduction to Programming!\")\nprint(\"First we will practice using the print command.\")\nprint(\"This program prints three lines of text on the screen.\")\n```\n\nprints the following lines on the screen:\n\n```text\nWelcome to Introduction to Programming!\nFirst we will practice using the print command.\nThis program prints three lines of text on the screen.\n```",
        "CAS": "## Un programa de múltiples comandos\n\nLos comandos escritos en sucesión se ejecutarán en orden desde el primero hasta el último. Por ejemplo, este programa:\n\n```python\nprint(\"¡Bienvenido a la Introducción a la Programación!\")\nprint(\"Primero practicaremos el uso del comando print.\")\nprint(\"Este programa imprime tres líneas de texto en la pantalla.\")\n```\n\nimprime las siguientes líneas en la pantalla:\n\n```text\n¡Bienvenido a la Introducción a la Programación!\nPrimero practicaremos el uso del comando print.\nEste programa imprime tres líneas de texto en la pantalla.\n```",
        "EUS": "## Hainbat komandoko programa bat\n\nOndoz ondo idatzitako hainbat komando lehenengotik azkenera ordenan exekutatuko dira. Adibidez programa honek\n\n```python\nprint(\"Ongi etorri Programaziorako Sarrerara!\")\nprint(\"Lehenik eta behin, print komandoa erabiltzen arituko gara.\")\nprint(\"Programa honek hiru testu-lerro inprimatzen ditu pantailan.\")\n```\n\nlerro hauek inprimatzen ditu pantailan:\n\n```text\nOngi etorri Programaziorako Sarrerara!\nLehenik eta behin, print komandoa erabiltzen arituko gara.\nPrograma honek hiru testu-lerro inprimatzen ditu pantailan.\n```"
      }
    },
    {
      "type": "exercise",
      "exerciseId": "part01-02_seven_brothers",
      "title": {
        "ENG": "Fix the code: Seven Brothers",
        "CAS": "Arregla el código: Siete Hermanos",
        "EUS": "Konpondu kodea: Zazpi Anaiak"
      },
      "description": {
        "ENG": "\"Seitsemän veljestä\" is one of the first novels ever written in Finnish. This program is supposed to print out the names of the brothers in alphabetical order, but it's not working quite right yet. Please fix the program so that the names are printed in the correct order.",
        "CAS": "\"Seitsemän veljestä\" es una de las primeras novelas escritas en finés. Este programa debería imprimir los nombres de los hermanos en orden alfabético, pero no funciona bien. Arréglalo.",
        "EUS": "\"Seitsemän veljestä\" finlandieraz idatzitako lehen eleberrietako bat da. Programa honek anaien izenak ordena alfabetikoan inprimatu beharko lituzke, baina ez dabil ondo. Konpondu ezazu."
      },
      "initialCode": "print(\"Simeoni\")\nprint(\"Juhani\")\nprint(\"Eero\")\nprint(\"Lauri\")\nprint(\"Aapo\")\nprint(\"Tuomas\")\nprint(\"Timo\")",
      "testCode": "\nimport unittest\nclass TestSevenBrothers(unittest.TestCase):\n    def test_output(self):\n        output = run_student_code().split('\\n')\n        expected = [\"Aapo\", \"Eero\", \"Juhani\", \"Lauri\", \"Simeoni\", \"Timo\", \"Tuomas\"]\n        output = [line.strip() for line in output if line.strip()]\n        self.assertEqual(output, expected)\n"
    },
    {
      "type": "exercise",
      "exerciseId": "part01-03_row_your_boat",
      "title": {
        "ENG": "Row, Row, Row Your Boat",
        "CAS": "Rema, rema, rema tu bote",
        "EUS": "Arraun, arraun, arraun zure txalupan"
      },
      "description": {
        "ENG": "Please write a program which prints out the following lines exactly as they are written here:\nRow, row, row your boat,\nGently down the stream.\nMerrily, merrily, merrily, merrily,\nLife is but a dream.",
        "CAS": "Escribe un programa que imprima las siguientes líneas exactamente:\nRow, row, row your boat,\nGently down the stream.\nMerrily, merrily, merrily, merrily,\nLife is but a dream.",
        "EUS": "Idatzi programa bat lerro hauek zehatz-mehatz inprimatzen dituena:\nRow, row, row your boat,\nGently down the stream.\nMerrily, merrily, merrily, merrily,\nLife is but a dream."
      },
      "initialCode": "# Write your code here\n",
      "testCode": "\nimport unittest\nclass TestRowBoat(unittest.TestCase):\n    def test_output(self):\n        output = run_student_code()\n        expected = \"Row, row, row your boat,\\nGently down the stream.\\nMerrily, merrily, merrily, merrily,\\nLife is but a dream.\"\n        self.assertIn(expected, output)\n"
    },
    {
      "type": "markdown",
      "content": {
        "ENG": "## Arithmetic operations\n\nYou can also put arithmetic operations inside a `print` command. Running it will then print out the result of the operation. For example, the following program\n\n```python\nprint(2 + 5)\nprint(3 * 3)\nprint(2 + 2 * 10)\n```\n\nprints out these lines:\n\n```text\n7\n9\n22\n```\n\nNotice the lack of quotation marks around the arithmetic operations above. Quotation marks are used to signify strings. In the context of programming, strings are sequences of characters. They can consist of letters, numbers and any other types of characters, such as punctuation.\n\nStrings are usually printed out exactly as they are written. Thus, the following two commands produce two quite different results:\n\n```python\nprint(2 + 2 * 10)\nprint(\"2 + 2 * 10\")\n```\n\nThis program prints out:\n\n```text\n22\n2 + 2 * 10\n```",
        "CAS": "## Operaciones aritméticas\n\nTambién puedes poner operaciones aritméticas dentro de un comando `print`. Al ejecutarlo, se imprimirá el resultado de la operación. Por ejemplo, el siguiente programa:\n\n```python\nprint(2 + 5)\nprint(3 * 3)\nprint(2 + 2 * 10)\n```\n\nimprime estas líneas:\n\n```text\n7\n9\n22\n```\n\nObserva la falta de comillas alrededor de las operaciones aritméticas anteriores. Las comillas se usan para significar cadenas (strings). En el contexto de la programación, las cadenas son secuencias de caracteres. Pueden consistir en letras, números y cualquier otro tipo de caracteres, como signos de puntuación.\n\nLas cadenas se suelen imprimir exactamente como están escritas. Por lo tanto, los dos comandos siguientes producen resultados muy diferentes:\n\n```python\nprint(2 + 2 * 10)\nprint(\"2 + 2 * 10\")\n```\n\nEste programa imprime:\n\n```text\n22\n2 + 2 * 10\n```",
        "EUS": "## Eragiketa aritmetikoak\n\nEragiketa aritmetikoak ere jar ditzakezu `print` komando baten barruan. Hura exekutatzean, eragiketaren emaitza inprimatuko da. Adibidez, honako programa honek\n\n```python\nprint(2 + 5)\nprint(3 * 3)\nprint(2 + 2 * 10)\n```\n\nlerro hauek inprimatzen ditu:\n\n```text\n7\n9\n22\n```\n\nKontuan izan goiko eragiketa aritmetikoen inguruan komatxorik ez dagoela. Komatxoak kateak (strings) adierazteko erabiltzen dira. Programazioaren testuinguruan, kateak karaktere-sekuentziak dira. Letrez, zenbakiz eta beste edozein karaktere motaz osatuta egon daitezke, hala nola puntuazio-markez.\n\nKateak idatzita dauden bezala inprimatu ohi dira. Beraz, hurrengo bi komandoek emaitza oso desberdinak ematen dituzte:\n\n```python\nprint(2 + 2 * 10)\nprint(\"2 + 2 * 10\")\n```\n\nPograma honek hau inprimatzen du:\n\n```text\n22\n2 + 2 * 10\n```"
      }
    },
    {
      "type": "markdown",
      "content": {
        "ENG": "## Commenting\n\nAny line beginning with the pound sign `#`, also known as a hash or a number sign, is a comment. This means that any text on that line following the `#` symbol will not in any way affect how the program functions. Python will simply ignore it.\n\nComments are used for explaining how a program works, to both the programmer themselves, and others reading the program code. In this program a comment explains the calculation performed in the code:\n\n```python\nprint(\"Hours in a year:\") # there are 365 days in a year and 24 hours in each day\nprint(365*24)\n```\n\nWhen the program is run, the comment will not be visible to the user:\n\n```text\nHours in a year:\n8760\n```",
        "CAS": "## Comentarios\n\nCualquier línea que comience con el signo `#`, también conocido como almohadilla o signo de número, es un comentario. Esto significa que cualquier texto en esa línea que siga al símbolo `#` no afectará de ninguna manera al funcionamiento del programa. Python simplemente lo ignorará.\n\nLos comentarios se utilizan para explicar cómo funciona un programa, tanto al propio programador como a otros que lean el código del programa. En este programa, un comentario explica el cálculo realizado en el código:\n\n```python\nprint(\"Horas en un año:\") # hay 365 días en un año y 24 horas en cada día\nprint(365*24)\n```\n\nCuando se ejecuta el programa, el comentario no será visible para el usuario:\n\n```text\nHoras en un año:\n8760\n```",
        "EUS": "## Iruzkinak\n\n`#` ikurrarekin hasten den edozein lerro iruzkin bat da. Horrek esan nahi du lerro horretan `#` ikurraren ondoren datorren testuak ez diola inolaz ere eragingo programaren funtzionamenduari. Pythonek ez dio jaramonik egingo.\n\nIruzkinak programa batek nola funtzionatzen duen azaltzeko erabiltzen dira, bai programatzaileari berari, bai programaren kodea irakurtzen duten beste batzuei. Programa honetan iruzkin batek kodean egindako kalkulua azaltzen du:\n\n```python\nprint(\"Orduak urtebetean:\") # urte batean 365 egun daude eta egun bakoitzean 24 ordu\nprint(365*24)\n```\n\nPograma exekutatzen denean, iruzkina ez da erabiltzailearentzat ikusgai egongo:\n\n```text\nOrduak urtebetean:\n8760\n```"
      }
    },
    {
      "type": "exercise",
      "exerciseId": "part01-04_minutes_in_a_year",
      "title": {
        "ENG": "Minutes in a year",
        "CAS": "Minutos en un año",
        "EUS": "Minutuak urte batean"
      },
      "description": {
        "ENG": "Please write a program which prints out the number of minutes in a year. Use Python code to perform the calculation.",
        "CAS": "Escribe un programa que imprima el número de minutos en un año. Usa código Python para el cálculo.",
        "EUS": "Idatzi urte bateko minutu kopurua inprimatzen duen programa. Erabili Python kodea kalkulua egiteko."
      },
      "initialCode": "# Write your code here\n",
      "testCode": "\nimport unittest\nclass TestMinutes(unittest.TestCase):\n    def test_output(self):\n        output = run_student_code()\n        self.assertIn(\"525600\", output)\n"
    },
    {
      "type": "markdown",
      "content": {
        "ENG": "Thus far, you have probably used double quotation marks `\"` to print out strings. In addition to the double quotation marks, Python also accepts single quotation marks `'`.\n\nThis comes in handy if you ever want to print out the actual quotation marks themselves:\n\n```python\nprint('\"Come right back!\", shouted the police officer.')\n```\n\n```text\n\"Come right back!\", shouted the police officer.\n```",
        "CAS": "Hasta ahora, probablemente hayas usado comillas dobles `\"` para imprimir cadenas. Además de las comillas dobles, Python también acepta comillas simples `'`.\n\nEsto resulta útil si alguna vez quieres imprimir las propias comillas:\n\n```python\nprint('\"¡Vuelve aquí ahora mismo!\", gritó el oficial de policía.')\n```\n\n```text\n\"¡Vuelve aquí ahora mismo!\", gritó el oficial de policía.\n```",
        "EUS": "Orain arte, ziurrenik komatxo bikoitzak `\"` erabili dituzu kateak inprimatzeko. Komatxo bikoitzaz gain, Pythonek komatxo bakunak ere onartzen ditu `'`.\n\nHauek oso erabilgarriak dira komatxoak idatzi nahi dituzunean:\n\n```python\nprint('\"Itzuli berehala!\", oihukatu zuen polizia-agenteak.')\n```\n\n```text\n\"Itzuli berehala!\", oihukatu zuen polizia-agenteak.\n```"
      }
    },
    {
      "type": "exercise",
      "exerciseId": "part01-05_print_some_code",
      "title": {
        "ENG": "Print some code",
        "CAS": "Imprimir código",
        "EUS": "Kodea inprimatu"
      },
      "description": {
        "ENG": "Please write a program which prints out the following:\nprint(\"Hello there!\")",
        "CAS": "Escribe un programa que imprima lo siguiente:\nprint(\"Hello there!\")",
        "EUS": "Idatzi hurrengoa inprimatzen duen programa:\nprint(\"Hello there!\")"
      },
      "initialCode": "# Write your code here\n",
      "testCode": "\nimport unittest\nclass TestPrintCode(unittest.TestCase):\n    def test_output(self):\n        output = run_student_code()\n        self.assertIn('print(\"Hello there!\")', output)\n"
    }
  ]
};

fs.writeFileSync('src/data/part1/section1.json', JSON.stringify(data, null, 2));
console.log("Written clean JSON");