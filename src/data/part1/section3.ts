import { CoursePage } from '../mooc-exercises';

export const section3: CoursePage = {
  id: "part1-3",
  title: {
    ENG: "More about variables",
    CAS: "Más sobre variables",
    EUS: "Aldagaiei buruz gehiago"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\n# More about variables\n\nVariables are needed for various purposes in programming. The value stored in a variable can also be defined using other variables:\n\n```python\ngiven_name = \"Paul\"\nfamily_name = \"Python\"\n\nname = given_name + \" \" + family_name\n\nprint(name)\n```\n\n```text\nPaul Python\n```\n\n## Changing the value of a variable\n\nAs implied by the name _variable_, the value stored in a variable can change.\n\n```python\nword = input(\"Please type in a word: \")\nprint(word)\n\nword = input(\"And another word: \")\nprint(word)\n\nword = \"third\"\nprint(word)\n```\n\n```text\nPlease type in a word: **first**\nfirst\nAnd another word: **second**\nsecond\nthird\n```\n\nThe new value of a variable can be derived from its old value.\n\n```python\nword = input(\"Please type in a word: \")\nprint(word)\n\nword = word + \"!!!\"\nprint(word)\n```\n\n```text\nPlease type in a word: **test**\ntest\ntest!!!\n```\n",
        CAS: "\n# Más sobre variables\n\nLas variables son necesarias para varios propósitos en la programación. El valor almacenado en una variable también puede definirse utilizando otras variables:\n\n```python\ngiven_name = \"Paul\"\nfamily_name = \"Python\"\n\nname = given_name + \" \" + family_name\n\nprint(name)\n```\n\n```text\nPaul Python\n```\n\n## Cambiando el valor de una variable\n\nComo su nombre implica, el valor almacenado en una _variable_ puede cambiar.\n\n```python\nword = input(\"Por favor escribe una palabra: \")\nprint(word)\n\nword = input(\"Y otra palabra: \")\nprint(word)\n\nword = \"tercera\"\nprint(word)\n```\n\n```text\nPor favor escribe una palabra: **primera**\nprimera\nY otra palabra: **segunda**\nsegunda\ntercera\n```\n\nEl nuevo valor de una variable puede derivarse de su valor anterior.\n\n```python\nword = input(\"Por favor escribe una palabra: \")\nprint(word)\n\nword = word + \"!!!\"\nprint(word)\n```\n\n```text\nPor favor escribe una palabra: **prueba**\nprueba\nprueba!!!\n```\n",
        EUS: "\n# Aldagaiei buruz gehiago\n\nAldagaiak hainbat helburutarako beharrezkoak dira programazioan. Aldagai batean gordetako balioa beste aldagai batzuk erabiliz ere defini daiteke:\n\n```python\ngiven_name = \"Paul\"\nfamily_name = \"Python\"\n\nname = given_name + \" \" + family_name\n\nprint(name)\n```\n\n```text\nPaul Python\n```\n\n## Aldagai baten balioa aldatzea\n\nIzenak iradokitzen duen bezala, _aldagai_ batean gordetako balioa alda daiteke.\n\n```python\nword = input(\"Mesedez idatzi hitz bat: \")\nprint(word)\n\nword = input(\"Eta beste hitz bat: \")\nprint(word)\n\nword = \"hirugarrena\"\nprint(word)\n```\n\n```text\nMesedez idatzi hitz bat: **lehenengoa**\nlehenengoa\nEta beste hitz bat: **bigarrena**\nbigarrena\nhirugarrena\n```\n\nAldagai baten balio berria bere balio zaharretik erator daiteke.\n\n```python\nword = input(\"Mesedez idatzi hitz bat: \")\nprint(word)\n\nword = word + \"!!!\"\nprint(word)\n```\n\n```text\nMesedez idatzi hitz bat: **proba**\nproba\nproba!!!\n```\n"
      }
    },
    {
      type: 'markdown',
      content: {
        ENG: "\n## Integers\n\nThus far, we have only stored strings in variables. Let's have a look at integers first. Integers are numbers that do not have a decimal or fractional part.\n\n```python\nage = 24\nprint(age)\n```\n\n```text\n24\n```\n\nVariable types matter because different operations affect different types of variables in different ways.\n\n```python\nnumber1 = 100\nnumber2 = \"100\"\n\nprint(number1 + number1)\nprint(number2 + number2)\n```\n\n```text\n200\n100100\n```\n\nFor integer values the \`+\` operator means addition, but for string values it means concatenation.\n\nAttempting to divide a string by a number causes an error:\n\n```python\nnumber = \"100\"\nprint(number / 2)\n```\n\n```text\nTypeError: unsupported operand type(s) for /: 'str' and 'int'\n```\n",
        CAS: "\n## Enteros\n\nHasta ahora, solo hemos almacenado cadenas en variables. Veamos primero los enteros. Los enteros son números que no tienen parte decimal o fraccionaria.\n\n```python\nage = 24\nprint(age)\n```\n\n```text\n24\n```\n\nLos tipos de variables importan porque diferentes operaciones afectan a diferentes tipos de variables de diferentes maneras.\n\n```python\nnumber1 = 100\nnumber2 = \"100\"\n\nprint(number1 + number1)\nprint(number2 + number2)\n```\n\n```text\n200\n100100\n```\n\nPara valores enteros el operador \`+\` significa suma, pero para valores de cadena significa concatenación.\n\nIntentar dividir una cadena por un número causa un error:\n\n```python\nnumber = \"100\"\nprint(number / 2)\n```\n\n```text\nTypeError: unsupported operand type(s) for /: 'str' and 'int'\n```\n",
        EUS: "\n## Zenbaki osoak\n\nOrain arte, kateak bakarrik gorde ditugu aldagaietan. Ikus ditzagun lehenik zenbaki osoak. Zenbaki osoak zati dezimal edo zatiki gabeko zenbakiak dira.\n\n```python\nage = 24\nprint(age)\n```\n\n```text\n24\n```\n\nAldagai motak garrantzitsuak dira, eragiketa ezberdinek modu ezberdinean eragiten dietelako aldagai mota ezberdinei.\n\n```python\nnumber1 = 100\nnumber2 = \"100\"\n\nprint(number1 + number1)\nprint(number2 + number2)\n```\n\n```text\n200\n100100\n```\n\nZenbaki osoetarako \`+\` eragileak batuketa esan nahi du, baina kateetarako, kateatzea.\n\nKate bat zenbaki batekin zatitzen saiatzeak errorea eragiten du:\n\n```python\nnumber = \"100\"\nprint(number / 2)\n```\n\n```text\nTypeError: unsupported operand type(s) for /: 'str' and 'int'\n```\n"
      }
    },
    {
      type: 'markdown',
      content: {
        ENG: "\n## Combining values when printing\n\nCombining two different types of values will not work just like that:\n\n```python\nresult = 10 * 25\nprint(\"The result is \" + result)\n```\n\n```text\nTypeError: unsupported operand type(s) for +: 'str' and 'int'\n```\n\nIf we do want to print out a string and an integer in a single command, the integer can be cast as a string with the \`str\` function:\n\n```python\nresult = 10 * 25\nprint(\"The result is \" + str(result))\n```\n\nThe \`print\` command also supports combining different types of values by adding a comma between them:\n\n```python\nresult = 10 * 25\nprint(\"The result is\", result)\n```\n\n```text\nThe result is 250\n```\n\nNotice that there is an automatically added whitespace character between the values separated by a comma here.\n",
        CAS: "\n## Combinando valores al imprimir\n\nCombinar dos tipos diferentes de valores no funcionará así como así:\n\n```python\nresult = 10 * 25\nprint(\"El resultado es \" + result)\n```\n\n```text\nTypeError: unsupported operand type(s) for +: 'str' and 'int'\n```\n\nSi queremos imprimir una cadena y un entero en un solo comando, el entero puede convertirse a cadena con la función \`str\`:\n\n```python\nresult = 10 * 25\nprint(\"El resultado es \" + str(result))\n```\n\nEl comando \`print\` también soporta combinar diferentes tipos de valores añadiendo una coma entre ellos:\n\n```python\nresult = 10 * 25\nprint(\"El resultado es\", result)\n```\n\n```text\nEl resultado es 250\n```\n\nFíjate que hay un espacio en blanco añadido automáticamente entre los valores separados por una coma.\n",
        EUS: "\n## Balioak konbinatzen inprimatzean\n\nBi balio mota ezberdin konbinatzeak ez du funtzionatuko besterik gabe:\n\n```python\nresult = 10 * 25\nprint(\"Emaitza da \" + result)\n```\n\n```text\nTypeError: unsupported operand type(s) for +: 'str' and 'int'\n```\n\nKate bat eta zenbaki oso bat komando bakar batean inprimatu nahi baditugu, zenbaki osoa kate bihurtu daiteke \`str\` funtzioarekin:\n\n```python\nresult = 10 * 25\nprint(\"Emaitza da \" + str(result))\n```\n\n\`print\` komandoak balio mota ezberdinak konbinatzea ere onartzen du, haien artean koma bat gehituz:\n\n```python\nresult = 10 * 25\nprint(\"Emaitza da\", result)\n```\n\n```text\nEmaitza da 250\n```\n\nOhartu komaz bereizitako balioen artean zuriune bat gehitzen dela automatikoki.\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part01-10b_extra_space',
      title: {
        ENG: "Extra space",
        CAS: "Espacio extra",
        EUS: "Espazio gehigarria"
      },
      description: {
        ENG: "Please fix the code so that the printout looks right. Notice especially how the comma notation in the print command automatically inserts a space.",
        CAS: "Por favor, arregla el código para que la salida se vea bien. Fíjate especialmente en cómo la coma en el comando print inserta un espacio automáticamente.",
        EUS: "Mesedez, konpondu kodea irteera ondo ikus dadin. Erreparatu nola print komandoan komak espazio bat gehitzen duen automatikoki."
      },
      initialCode: "name = \"Tim Tester\"\nage = 20\nskill1 = \"python\"\nlevel1 = \"beginner\"\nskill2 = \"java\"\nlevel2 = \"veteran\"\nskill3 = \"programming\"\nlevel3 = \"semiprofessional\"\nlower = 2000\nupper = 3000\n\nprint(\"my name is \", name, \" , I am \", age, \"years old\")\nprint(\"my skills are\")\nprint(\" - \", skill1, \" (\", level1, \" )\")\nprint(\" - \", skill2, \" (\", level2, \" )\")\nprint(\" - \", skill3, \" (\", level3, \" )\")\nprint(\"I am looking for a job with a salary of\", lower, \" - \", upper, \"euros per month\")",
      testCode: "\nimport unittest\nclass TestSpace(unittest.TestCase):\n    def test_run(self):\n        output = run_student_code().strip()\n        \n        # Check specific common errors\n        if \"my name is  Tim Tester\" in output:\n            self.fail(\"❌ Extra space before 'Tim Tester'. Comma adds one automatically.\")\n        \n        if \"( beginner )\" in output:\n             self.fail(\"❌ Extra space inside parenthesis.\")\n             \n        if \"2000 - 3000\" in output:\n             self.fail(\"❌ Extra spaces around salary hyphen.\")\n\n        self.assertIn(\"my name is Tim Tester, I am 20 years old\", output)\n        self.assertIn(\" - python (beginner)\", output)\n        self.assertIn(\"salary of 2000-3000 euros\", output)\n"
    },
    {
      type: 'markdown',
      content: {
        ENG: "\n## Printing with f-strings\n\nSo called _f-strings_ are another way of formatting printouts in Python.\n\n```python\nresult = 10 * 25\nprint(f\"The result is {result}\")\n```\n\n```text\nThe result is 250\n```\n\nA single f-string can contain multiple variables.\n\n```python\nname = \"Mark\"\nage = 37\ncity = \"Palo Alto\"\nprint(f\"Hi {name}, you are {age} years old. You live in {city}.\")\n```\n\n```text\nHi Mark, you are 37 years old. You live in Palo Alto.\n```\n\nF-strings are usually a more reliable option than comma notation.\n",
        CAS: "\n## Imprimiendo con f-strings\n\nLas llamadas _f-strings_ son otra forma de formatear impresiones en Python.\n\n```python\nresult = 10 * 25\nprint(f\"El resultado es {result}\")\n```\n\n```text\nEl resultado es 250\n```\n\nUna sola f-string puede contener múltiples variables.\n\n```python\nname = \"Mark\"\nage = 37\ncity = \"Palo Alto\"\nprint(f\"Hola {name}, tienes {age} años. Vives en {city}.\")\n```\n\n```text\nHola Mark, tienes 37 años. Vives en Palo Alto.\n```\n\nLas f-strings suelen ser una opción más fiable que la notación con comas.\n",
        EUS: "\n## f-string-ekin inprimatzen\n\n_f-strings_ deiturikoak Python-en inprimaketak formateatzeko beste modu bat dira.\n\n```python\nresult = 10 * 25\nprint(f\"Emaitza da {result}\")\n```\n\n```text\nEmaitza da 250\n```\n\nHainbat aldagai izan ditzake f-string bakar batek.\n\n```python\nname = \"Mark\"\nage = 37\ncity = \"Palo Alto\"\nprint(f\"Kaixo {name}, {age} urte dituzu. {city}-n bizi zara.\")\n```\n\n```text\nKaixo Mark, 37 urte dituzu. Palo Alto-n bizi zara.\n```\n\nf-strings-ak koma notazioa baino aukera fidagarriagoa izan ohi dira.\n"
      }
    },
    {
      type: 'markdown',
      content: {
        ENG: "\n## Floating point numbers\n\nNumbers with decimals are called _floating point numbers_.\n\n```python\nnumber1 = 2.5\nnumber2 = -1.25\nnumber3 = 3.62\n\nmean = (number1 + number2 + number3) / 3\nprint(f\"Mean: {mean}\")\n```\n\n```text\nMean: 1.6233333333333333\n```\n",
        CAS: "\n## Números de punto flotante\n\nLos números con decimales se llaman _números de punto flotante_.\n\n```python\nnumber1 = 2.5\nnumber2 = -1.25\nnumber3 = 3.62\n\nmean = (number1 + number2 + number3) / 3\nprint(f\"Media: {mean}\")\n```\n\n```text\nMedia: 1.6233333333333333\n```\n",
        EUS: "\n## Koma higikorreko zenbakiak\n\nDezimaldunak diren zenbakiei _koma higikorreko zenbakiak_ deitzen zaie.\n\n```python\nnumber1 = 2.5\nnumber2 = -1.25\nnumber3 = 3.62\n\nmean = (number1 + number2 + number3) / 3\nprint(f\"Batazbestekoa: {mean}\")\n```\n\n```text\nBatazbestekoa: 1.6233333333333333\n```\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part01-11_arithmetics',
      title: {
        ENG: "Arithmetics",
        CAS: "Aritmética",
        EUS: "Aritmetika"
      },
      description: {
        ENG: "Complete the program. The program should print out the calculation and the result.",
        CAS: "Completa el programa. El programa debe imprimir el cálculo y el resultado.",
        EUS: "Osatu programa. Programak kalkulua eta emaitza inprimatu behar ditu."
      },
      initialCode: "x = 27\ny = 15\n# Write your solution here\n",
      testCode: "\nimport unittest\nclass TestArith(unittest.TestCase):\n    def test_run(self):\n        output = run_student_code()\n        self.assertIn(\"27 + 15 = 42\", output)\n        self.assertIn(\"27 - 15 = 12\", output)\n        self.assertIn(\"27 * 15 = 405\", output)\n        self.assertIn(\"27 / 15 = 1.8\", output)\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part01-12_print_a_single_line',
      title: {
        ENG: "Fix the code: Print a single line",
        CAS: "Corrige el código: Imprimir una sola línea",
        EUS: "Konpondu kodea: Lerro bakarra inprimatu"
      },
      description: {
        ENG: "Please fix this program so that the entire calculation, complete with result, is printed out on a single line.",
        CAS: "Por favor, arregla este programa para que todo el cálculo, incluido el resultado, se imprima en una sola línea.",
        EUS: "Mesedez konpondu programa hau kalkulu osoa, emaitzarekin batera, lerro bakar batean inprimatu dadin."
      },
      initialCode: "print(5)\nprint(\" + \")\nprint(8)\nprint(\" - \")\nprint(4)\nprint(\" = \")\nprint(5 + 8 - 4)",
      testCode: "\nimport unittest\nclass TestSingle(unittest.TestCase):\n    def test_run(self):\n        output = run_student_code()\n        if \"\\n\" in output.strip():\n             self.fail(\"Output should be on a single line. Use end='' argument in print.\")\n        \n        self.assertIn(\"5 + 8 - 4 = 9\", output)\n"
    }
  ]
};