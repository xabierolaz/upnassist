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
        ENG: `
# Information from the user

## After this section:

- You will know how to write a program which uses input from the user
- You will know how to use variables to store input and print it out
- You will be able to combine strings

_Input_ refers to any information a user gives to the program. Specifically, the Python command 
input
 reads in a line of input typed in by the user. It may also be used to display a message to the user, to prompt for specific input.

The following program reads in the name of the user with the 
input
 command. It then prints it out with the 
print
 command:

\`\`\`python
name = input("What is your name? ")
print("Hi there, " + name)
\`\`\`

The execution of this program could look like this (input from the user in the first line):

<sample-output>

What is your name? **Paul Python**
Hi there, Paul Python

</sample-output>

What this program prints out is partially dependent on input from the user. That means the execution of the program could also look like this:

<sample-output>

What is your name? **Paula Programmer**
Hi there, Paula Programmer

</sample-output>

The word 
name
 in this program is a _variable_. In the context of programming, a variable is a location for storing some _value_, such as a string or a number. This value can be used later, and it can also be changed.

> **Naming variables**
> 
> In principle, variables can be named quite freely, within certain limits specified in the Python language.
> 
> It is a common international programming practice to name variables in English, but you may come across code where variables are named in other languages, such as the native language of the programmer. The name of the variable has no direct effect on its content, so the name, in that sense, does not matter. However, it can often be helpful in understanding how code functions if variables are named logically and in English.
`,
        CAS: `
# Información del usuario

## Después de esta sección:

- Sabrás cómo escribir un programa que utilice la entrada del usuario
- Sabrás cómo usar variables para almacenar la entrada e imprimirla
- Serás capaz de combinar cadenas de texto

La _entrada_ (input) se refiere a cualquier información que un usuario da al programa. Específicamente, el comando 
input
 de Python lee una línea de entrada escrita por el usuario. También se puede usar para mostrar un mensaje al usuario, para pedir una entrada específica.

El siguiente programa lee el nombre del usuario con el comando 
input
. Luego lo imprime con el comando 
print
:

\`\`\`python
name = input("¿Cómo te llamas? ")
print("Hola, " + name)
\`\`\`

La ejecución de este programa podría verse así (entrada del usuario en la primera línea):

<sample-output>

¿Cómo te llamas? **Paul Python**
Hola, Paul Python

</sample-output>

Lo que este programa imprime depende parcialmente de la entrada del usuario. Eso significa que la ejecución del programa también podría verse así:

<sample-output>

¿Cómo te llamas? **Paula Programadora**
Hola, Paula Programadora

</sample-output>

La palabra 
name
 en este programa es una _variable_. En el contexto de la programación, una variable es una ubicación para almacenar algún _valor_, como una cadena de texto o un número. Este valor se puede usar más tarde, y también se puede cambiar.

> **Nombrar variables**
> 
> En principio, las variables se pueden nombrar con bastante libertad, dentro de ciertos límites especificados en el lenguaje Python.
> 
> Es una práctica común de programación internacional nombrar variables en inglés, pero puedes encontrar código donde las variables se nombran en otros idiomas, como el idioma nativo del programador. El nombre de la variable no tiene un efecto directo en su contenido, por lo que el nombre, en ese sentido, no importa. Sin embargo, a menudo puede ser útil para entender cómo funciona el código si las variables se nombran lógicamente y en inglés.
`,
        EUS: `
# Erabiltzailearen informazioa

## Atal honen ondoren:

- Jakingo duzu nola idatzi erabiltzailearen sarrera erabiltzen duen programa bat
- Jakingo duzu nola erabili aldagaiak sarrera gordetzeko eta inprimatzeko
- Kateak konbinatzeko gai izango zara

_Sarrera_ (input) erabiltzaileak programari ematen dion edozein informaziori dagokio. Zehazki, Python-eko 
input
 komandoak erabiltzaileak idatzitako sarrera lerro bat irakurtzen du. Erabiltzaileari mezu bat erakusteko ere erabil daiteke, sarrera zehatz bat eskatzeko.

Hurrengo programak erabiltzailearen izena irakurtzen du 
input
 komandoarekin. Gero 
print
 komandoarekin inprimatzen du:

\`\`\`python
name = input("Nola duzu izena? ")
print("Kaixo, " + name)
\`\`\`

Programa honen exekuzioa honelakoa izan daiteke (erabiltzailearen sarrera lehen lerroan):

<sample-output>

Nola duzu izena? **Paul Python**
Kaixo, Paul Python

</sample-output>

Programa honek inprimatzen duena partzialki erabiltzailearen sarreraren menpe dago. Horrek esan nahi du programaren exekuzioa honelakoa ere izan daitekeela:

<sample-output>

Nola duzu izena? **Paula Programatzailea**
Kaixo, Paula Programatzailea

</sample-output>

Programa honetako 
name
 hitza _aldagai_ bat da. Programazioaren testuinguruan, aldagaia _balio_ bat gordetzeko kokapen bat da, kate bat edo zenbaki bat bezala. Balio hau geroago erabil daiteke, eta aldatu ere egin daiteke.

> **Aldagaiak izendatzea**
> 
> Printzipioz, aldagaiak nahiko aske izenda daitezke, Python lengoaiak zehaztutako muga batzuen barruan.
> 
> Nazioarteko programazio praktika ohikoa da aldagaiak ingelesez izendatzea, baina baliteke kodea aurkitzea non aldagaiak beste hizkuntza batzuetan izendatuta dauden, programatzailearen jatorrizko hizkuntzan adibidez. Aldagaiaren izenak ez du eragin zuzenik bere edukian; beraz, izenak, zentzu horretan, ez du garrantzirik. Hala ere, askotan lagungarria izan daiteke kodeak nola funtzionatzen duen ulertzeko aldagaiak logikoki eta ingelesez izendatzen badira.
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part01-06_name_twice',
      title: { ENG: "Name twice", CAS: "Nombre dos veces", EUS: "Izena bi aldiz" },
      description: {
        ENG: "Please write a program which asks for the user's name and then prints it twice, on two consecutive lines.",
        CAS: "Por favor, escribe un programa que pida el nombre del usuario y luego lo imprima dos veces, en dos líneas consecutivas.",
        EUS: "Mesedez idatzi programa bat erabiltzaileari izena eskatzen diona eta gero bi aldiz inprimatzen duena, bi lerro jarraitutan."
      },
      initialCode: "# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestNameTwice(unittest.TestCase):\n    def test_run(self):\n        inputs = ['Paul']\n        output = run_student_code(inputs=inputs).strip().split('\n')\n        matches = [line for line in output if 'Paul' in line]\n        if len(matches) < 2:\n            self.fail(tr("The name should appear at least twice in the output, on separate lines.", "El nombre debe aparecer al menos dos veces en la salida, en líneas separadas.", "Izenak gutxienez bi aldiz agertu behar du irteeran, lerro bereizietan."))\n`
    },
    {
      type: 'markdown',
      content: {
        ENG: `
## Referencing a variable

A single variable can be referred to many times in a program:

\`\`\`python
name = input("What is your name? ")

print("Hi, " + name + "!")
print(name + " is quite a nice name.")
\`\`\`

If the user gives the name 
name
, this program prints out the following:

<sample-output>

What is your name? **Paul Python**
Hi, Paul Python!
Paul Python is quite a nice name.

</sample-output>

Let's have a closer look at the way the 
print
 command is used above. Within the brackets of the command there is both text in quotation marks as well as variable names which refer to input from the user. These have been combined with a 
+
 operator, which _concatenates_ two strings into a single string.

Strings and variables can be combined quite freely:

\`\`\`python
name = input("What is your name? ")

print("Hi " + name + "! Let me make sure: your name is " + name + "?")
\`\`\`

If the user gives the name 
Ellen Example
 this prints out:

<sample-output>

What is your name? **Ellen Example**
Hi Ellen Example! Let me make sure: your name is Ellen Example?

</sample-output>
`,
        CAS: `
## Referenciar una variable

Se puede hacer referencia a una sola variable muchas veces en un programa:

\`\`\`python
name = input("¿Cómo te llamas? ")

print("¡Hola, " + name + "!")
print(name + " es un nombre muy bonito.")
\`\`\`

Si el usuario introduce el nombre 
Paul Python
, este programa imprime lo siguiente:

<sample-output>

¿Cómo te llamas? **Paul Python**
¡Hola, Paul Python!
Paul Python es un nombre muy bonito.

</sample-output>

Echemos un vistazo más de cerca a la forma en que se usa el comando 
print
 arriba. Dentro de los paréntesis del comando hay tanto texto entre comillas como nombres de variables que se refieren a la entrada del usuario. Estos se han combinado con un operador 
+
, que _concatena_ (une) dos cadenas en una sola cadena.

Las cadenas y las variables se pueden combinar libremente:

\`\`\`python
name = input("¿Cómo te llamas? ")

print("¡Hola " + name + "! Déjame asegurarme: ¿tu nombre es " + name + "?")
\`\`\`

Si el usuario da el nombre 
Ellen Example
, esto imprime:

<sample-output>

¿Cómo te llamas? **Ellen Example**
¡Hola Ellen Example! Déjame asegurarme: ¿tu nombre es Ellen Example?

</sample-output>
`,
        EUS: `
## Aldagai bat erreferentziatzea

Programa batean aldagai bati askotan egin dakioke erreferentzia:

\`\`\`python
name = input("Nola duzu izena? ")

print("Kaixo, " + name + "!")
print(name + " izen polita da.")
\`\`\`

Erabiltzaileak 
Paul Python
 izena ematen badu, programa honek hau inprimatzen du:

<sample-output>

Nola duzu izena? **Paul Python**
Kaixo, Paul Python!
Paul Python izen polita da.

</sample-output>

Azter dezagun zehatzago 
print
 komandoa nola erabiltzen den goian. Komandoaren parentesi artean komatxo arteko testua eta erabiltzailearen sarrerari erreferentzia egiten dioten aldagai-izenak daude. Hauek 
+
 operadorearekin konbinatu dira, zeinak bi kate kate bakar batean _kateatzen_ (elkartzen) dituen.

Kateak eta aldagaiak nahiko aske konbina daitezke:

\`\`\`python
name = input("Nola duzu izena? ")

print("Kaixo " + name + "! Ziurtatu dezadan: zure izena " + name + " da?")
\`\`\`

Erabiltzaileak 
Ellen Example
 izena ematen badu, honek hau inprimatzen du:

<sample-output>

Nola duzu izena? **Ellen Example**
Kaixo Ellen Example! Ziurtatu dezadan: zure izena Ellen Example da?

</sample-output>
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part01-07_name_and_exclamation_marks',
      title: { ENG: "Name and exclamation marks", CAS: "Nombre y signos de exclamación", EUS: "Izena eta harridura-markak" },
      description: {
        ENG: "Please write a program which asks for the user's name and then prints it out twice on a single line so that there is an exclamation mark at the beginning of the line, another between the two names and a third one at the end of the line.",
        CAS: "Por favor, escribe un programa que pida el nombre del usuario y luego lo imprima dos veces en una sola línea de manera que haya un signo de exclamación al principio de la línea, otro entre los dos nombres y un tercero al final de la línea.",
        EUS: "Mesedez idatzi programa bat erabiltzaileari izena eskatzen diona eta gero bi aldiz lerro bakar batean inprimatzen duena, harridura-marka bat lerroaren hasieran, beste bat bi izenen artean eta hirugarren bat lerroaren amaieran egon dadin."
      },
      initialCode: "# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestExclamation(unittest.TestCase):\n    def test_run(self):\n        inputs = ['Paul']\n        output = run_student_code(inputs=inputs).strip()\n        expected = "!Paul!Paul!"\n        if "Paul" in output and expected not in output:\n            self.fail(tr(f"The format is incorrect. Expected '{expected}' but got '{output}'. Check the exclamation marks.", f"El formato es incorrecto. Se esperaba '{expected}' pero se obtuvo '{output}'. Revisa los signos de exclamación.", f"Formatua okerra da. '{expected}' espero zen baina '{output}' lortu da. Egiaztatu harridura-markak."))\n        if expected not in output:\n            self.fail(tr(f"Expected output: {expected}", f"Salida esperada: {expected}", f"Espero den irteera: {expected}"))\n`
    },
    {
      type: 'markdown',
      content: {
        ENG: `
## More than one input

A program can ask for more than one input. Notice how below each 
input
 command stores the received value in a different variable.

\`\`\`python
name = input("What is your name? ")
email = input("What is your email address? ")
nickname = input("What is your nickname? ")

print("Let's make sure we got this right")
print("Your name: " + name)
print("Your email address: " + email)
print("Your nickname: " + nickname)
\`\`\`

The program could print out this, for example:

<sample-output>

What is your name? **Frances Fictitious**
What is your email address? **frances99@example.com**
What is your nickname? **Fran**
Let's make sure we got this right
Your name: Frances Fictitious
Your email address: frances99@example.com
Your nickname: Fran

</sample-output>

If the same variable is used to store more than one input, each new value will replace the previous one. For example:

\`\`\`python
address = input("What is your address? ")
print("So you live at address " + address)

address = input("Please type in a new address: ")
print("Your address is now " + address)
\`\`\`

An example execution of the program:

<sample-output>

What is your address? **Python Path 101, Flat 3D**
So you live at address Python Path 101, Flat 3D
Please type in a new address: **New Road 999**
Your address is now New Road 999

</sample-output>

This means that if the same variable is used to store two inputs in succession, there is no way to access the first input value after it has been replaced by the second:

\`\`\`python
address = input("What is your address? ")
address = input("Please type in a new address: ")

print("Your address is now " + address)
\`\`\`

An example of how the program's output might look like:

<sample-output>

What is your address? **Python Path 10**
Please type in a new address: **Programmer's Walk 23**
Your address is now Programmer's Walk 23

</sample-output>
`,
        CAS: `
## Más de una entrada

Un programa puede pedir más de una entrada. Observa cómo a continuación cada comando 
input
 almacena el valor recibido en una variable diferente.

\`\`\`python
name = input("¿Cómo te llamas? ")
email = input("¿Cuál es tu dirección de email? ")
nickname = input("¿Cuál es tu apodo? ")

print("Asegurémonos de que esto está bien")
print("Tu nombre: " + name)
print("Tu email: " + email)
print("Tu apodo: " + nickname)
\`\`\`

El programa podría imprimir esto, por ejemplo:

<sample-output>

¿Cómo te llamas? **Frances Fictitious**
¿Cuál es tu dirección de email? **frances99@example.com**
¿Cuál es tu apodo? **Fran**
Asegurémonos de que esto está bien
Tu nombre: Frances Fictitious
Tu email: frances99@example.com
Tu apodo: Fran

</sample-output>

Si se usa la misma variable para almacenar más de una entrada, cada nuevo valor reemplazará al anterior. Por ejemplo:

\`\`\`python
address = input("¿Cuál es tu dirección? ")
print("Así que vives en la dirección " + address)

address = input("Por favor escribe una nueva dirección: ")
print("Tu dirección ahora es " + address)
\`\`\`

Un ejemplo de ejecución del programa:

<sample-output>

¿Cuál es tu dirección? **Python Path 101, Flat 3D**
Así que vives en la dirección Python Path 101, Flat 3D
Por favor escribe una nueva dirección: **New Road 999**
Tu dirección ahora es New Road 999

</sample-output>

Esto significa que si se usa la misma variable para almacenar dos entradas seguidas, no hay forma de acceder al primer valor de entrada después de que haya sido reemplazado por el segundo:

\`\`\`python
address = input("¿Cuál es tu dirección? ")
address = input("Por favor escribe una nueva dirección: ")

print("Tu dirección ahora es " + address)
\`\`\`

Un ejemplo de cómo podría verse la salida del programa:

<sample-output>

¿Cuál es tu dirección? **Python Path 10**
Por favor escribe una nueva dirección: **Programmer's Walk 23**
Tu dirección ahora es Programmer's Walk 23

</sample-output>
`,
        EUS: `
## Sarrera bat baino gehiago

Programa batek sarrera bat baino gehiago eska dezake. Ohartu nola azpian 
input
 komando bakoitzak jasotako balioa aldagai ezberdin batean gordetzen duen.

\`\`\`python
name = input("Nola duzu izena? ")
email = input("Zein da zure posta helbidea? ")
nickname = input("Zein da zure ezizena? ")

print("Ziurtatu dezagun hau ondo dagoela")
print("Zure izena: " + name)
print("Zure posta: " + email)
print("Zure ezizena: " + nickname)
\`\`\`

Programak hau inprimatu lezake, adibidez:

<sample-output>

Nola duzu izena? **Frances Fictitious**
Zein da zure posta helbidea? **frances99@example.com**
Zein da zure ezizena? **Fran**
Ziurtatu dezagun hau ondo dagoela
Zure izena: Frances Fictitious
Zure posta: frances99@example.com
Zure ezizena: Fran

</sample-output>

Aldagai bera erabiltzen bada sarrera bat baino gehiago gordetzeko, balio berri bakoitzak aurrekoa ordeztuko du. Adibidez:

\`\`\`python
address = input("Zein da zure helbidea? ")
print("Beraz, helbide honetan bizi zara: " + address)

address = input("Mesedez idatzi helbide berri bat: ")
print("Zure helbidea orain hau da: " + address)
\`\`\`

Programaren exekuzio adibide bat:

<sample-output>

Zein da zure helbidea? **Python Path 101, Flat 3D**
Beraz, helbide honetan bizi zara: Python Path 101, Flat 3D
Mesedez idatzi helbide berri bat: **New Road 999**
Zure helbidea orain hau da: New Road 999

</sample-output>

Horrek esan nahi du aldagai bera erabiltzen bada bi sarrera segidan gordetzeko, ez dago modurik lehenengo sarrerako baliora sartzeko bigarrenak ordeztu ondoren:

\`\`\`python
address = input("Zein da zure helbidea? ")
address = input("Mesedez idatzi helbide berri bat: ")

print("Zure helbidea orain hau da: " + address)
\`\`\`

Programaren irteera nolakoa izan litekeen erakusten duen adibidea:

<sample-output>

Zein da zure helbidea? **Python Path 10**
Mesedez idatzi helbide berri bat: **Programmer's Walk 23**
Zure helbidea orain hau da: Programmer's Walk 23

</sample-output>
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part01-08_name_and_address',
      title: { ENG: "Name and address", CAS: "Nombre y dirección", EUS: "Izena eta helbidea" },
      description: {
        ENG: "Please write a program which asks for the user's name and address. The program should also print out the given information.",
        CAS: "Por favor, escribe un programa que pida el nombre y la dirección del usuario. El programa también debe imprimir la información dada.",
        EUS: "Mesedez idatzi programa bat erabiltzailearen izena eta helbidea eskatzen dituena. Programak emandako informazioa ere inprimatu behar du."
      },
      initialCode: "# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestNameAddress(unittest.TestCase):\n    def test_run(self):\n        inputs = ['Steve', 'Sanders', '91 Station Road', 'London EC05 6AW']\n        output = run_student_code(inputs=inputs)\n        if "Steve Sanders" not in output:\n             self.fail("Output missing full name 'Steve Sanders'")\n        if "91 Station Road" not in output:\n             self.fail("Output missing address '91 Station Road'")\n        if "London EC05 6AW" not in output:\n             self.fail("Output missing city/zip 'London EC05 6AW'")\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-09_utterances',
      title: { ENG: "Fix the code: Utterances", CAS: "Corrige el código: Expresiones", EUS: "Konpondu kodea: Adierazpenak" },
      description: {
        ENG: "Here is a program which should ask for three utterances and print them out. However, there is something wrong with the code below. Please fix it.",
        CAS: "Aquí hay un programa que debería pedir tres expresiones y las imprima. Sin embargo, hay algo mal en el código de abajo. Por favor, corrígelo.",
        EUS: "Hemen hiru adierazpen eskatu eta inprimatu beharko lituzkeen programa bat dago. Hala ere, zerbait gaizki dago beheko kodean. Mesedez konpondu ezazu."
      },
      initialCode: "part = input(\"The 1st part: \")\npart = input(\"The 1st part: \")\npart = input(\"The 1st part: \")\nprint(part + part + part)",
      testCode: `\nimport unittest\nclass TestUtterances(unittest.TestCase):\n    def test_run(self):\n        inputs = ['hickory', 'dickory', 'dock']\n        output = run_student_code(inputs=inputs).strip()\n        expected = "hickory-dickory-dock!"\n        if "dockdockdock" in output.replace("-", ""):\n             self.fail(tr("You are using the same variable 'part' three times, overwriting the value. Use different names (part1, part2, etc).", "Estás usando la misma variable 'part' tres veces, por lo que sobrescribes el valor. Usa nombres diferentes (part1, part2, etc).", "'part' aldagai bera hiru aldiz erabiltzen ari zara, balioa gainidatziz. Erabili izen desberdinak (part1, part2, etab)." ))\n        if "hickory-dickory-dock" not in output:\n             self.fail(tr(f"Expected output: hickory-dickory-dock", f"Se esperaba la salida: hickory-dickory-dock", f"Espero den irteera: hickory-dickory-dock"))\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-10_story',
      title: { ENG: "Story", CAS: "Historia", EUS: "Istorioa" },
      description: {
        ENG: "Please write a program which prints out a story. The user gives a name and a year, which should be inserted into the printout.",
        CAS: "Por favor, escribe un programa que imprima una historia. El usuario da un nombre y un año, que deben insertarse en la impresión.",
        EUS: "Mesedez idatzi istorio bat inprimatzen duen programa bat. Erabiltzaileak izen bat eta urte bat ematen ditu, eta horiek inprimaketan txertatu behar dira."
      },
      initialCode: "# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestStory(unittest.TestCase):\n    def test_run(self):\n        inputs = ['Mary', '1572']\n        output = run_student_code(inputs=inputs)\n        if "Mary is a valiant knight" not in output:\n            self.fail("Missing 'Mary is a valiant knight'")\n        if "born in the year 1572" not in output:\n             self.fail("Missing 'born in the year 1572'")\n`
    },
    {
      type: 'quiz',
      title: { ENG: "Quiz", CAS: "Cuestionario", EUS: "Galdetegia" },
      questions: [
        {
          id: 'q1',
          prompt: { 
            ENG: 'What does the command input("What is your name? ") do?',
            CAS: '¿Qué hace el comando input("¿Cómo te llamas? ")?',
            EUS: 'Zer egiten du input("Nola duzu izena? ") komandoak?'
          },
          options: [
            { id: 'o1', text: { ENG: 'It only prints the text "What is your name?".', CAS: 'Solo imprime el texto "¿Cómo te llamas?".', EUS: 'Testua soilik inprimatzen du: "Nola duzu izena?".' }, isCorrect: false },
            { id: 'o2', text: { ENG: 'It prints the text and waits for the user to type something.', CAS: 'Imprime el texto y espera a que el usuario escriba algo.', EUS: 'Testua inprimatzen du eta erabiltzaileak zerbait idatzi arte itxaroten du.' }, isCorrect: true },
            { id: 'o3', text: { ENG: 'It stores the text "What is your name?" in a variable.', CAS: 'Almacena el texto "¿Cómo te llamas?" en una variable.', EUS: '"Nola duzu izena?" testua aldagai batean gordetzen du.' }, isCorrect: false }
          ]
        },
        {
          id: 'q2',
          prompt: { 
            ENG: 'If you have: name = "Alice". How do you print "Hello Alice"?',
            CAS: 'Si tienes: name = "Alice". ¿Cómo imprimes "Hola Alice"?',
            EUS: 'Baldin baduzu: name = "Alice". Nola inprimatzen duzu "Kaixo Alice"?'
          },
          options: [
            { id: 'o1', text: 'print("Hello name")', isCorrect: false },
            { id: 'o2', text: 'print("Hello " + name)', isCorrect: true },
            { id: 'o3', text: 'print("Hello " name)', isCorrect: false }
          ]
        },
        {
          id: 'q3',
          prompt: { 
            ENG: 'What happens if you assign a new value to an existing variable?',
            CAS: '¿Qué sucede si asignas un nuevo valor a una variable existente?',
            EUS: 'Zer gertatzen da lehendik dagoen aldagai bati balio berria esleitzen badiozu?'
          },
          options: [
            { id: 'o1', text: { ENG: 'The old value is lost.', CAS: 'El valor antiguo se pierde.', EUS: 'Balio zaharra galtzen da.' }, isCorrect: true },
            { id: 'o2', text: { ENG: 'The new value is added to the old one.', CAS: 'El nuevo valor se añade al antiguo.', EUS: 'Balio berria zaharrari gehitzen zaio.' }, isCorrect: false },
            { id: 'o3', text: { ENG: 'It causes an error.', CAS: 'Causa un error.', EUS: 'Errore bat sortzen du.' }, isCorrect: false }
          ]
        }
      ]
    }
  ]
};