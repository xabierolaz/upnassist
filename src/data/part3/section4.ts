import { CoursePage } from '../mooc-exercises';

export const section4: CoursePage = {
  id: "part3-4",
  title: {
    ENG: "Defining functions",
    CAS: "Definiendo funciones",
    EUS: "Funtzioak definitzen"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\nWe have already used functions such as `len`, `print` and `input` in our programs. These are functions built into Python, and so they are always ready at our disposal, no matter which environment we are programming in. However, it is also possible to define your own functions.\n\n## The function definition\n\nBefore a function can be used, it must be defined. Any function definition begins with the keyword `def`, short for _define_. Then comes the _name_ of the function, followed by parentheses and a colon character. This is called the _header_ of the function. After this, indented just like `while` and `if` blocks, comes the _body_ of the function.\n\nFor example, the following code defines the function `message`:\n\n\`\`\`python\ndef message():\n    print(\"This is my very own function!\")\n\`\`\`\n\nIf the program above is executed, nothing seems to happen. This is because the code in the body of the function is only executed when the function is _called_.\n\nCalling a function is as simple as mentioning its name in your code. Adding a function call to the end of the above program, like so\n\n\`\`\`python\ndef message():\n    print(\"This is my very own function!\")\n\nmessage()\n\`\`\`\nresults in a printed statement:\n\n\`\`\`text\nThis is my very own function!\n\`\`\`\n\nWhen a function has been defined it can be called multiple times:\n\n\`\`\`python\ndef message():\n    print(\"This is my very own function!\")\n\nmessage()\nmessage()\nmessage()\n\`\`\`\n\n\`\`\`text\nThis is my very own function!\nThis is my very own function!\nThis is my very own function!\n\`\`\`\n\n### Testing your own functions\n\nNB: from now on the majority of the exercises on this course will ask you to write your own function(s).\n\nWhen a program consists of only functions, executing it doesn't seem to have any effect. The following code doesn't print out anything, even though there is a print statement:\n\n\`\`\`python\ndef greet():\n    print(\"Hi!\")\n\`\`\`\n\nThe reason nothing is printed out is that the code within the body of the `greet` function is only executed when the function is called.\n\nThe \"main\" program below the function should contain appropriate function calls, so that the program can be tested. In fact, Python treats all code that is not within function definitions as part of the _main function_, which gets executed when the file itself is evaluated or executed. So, lets add a function call:\n\n\`\`\`python\ndef greet():\n    print(\"Hi!\")\n\n# All code not within function definitions is part of\n# the main function of the program\n# Calling our function:\n\ngreet()\n\`\`\`\n\n**Important**: on this course the automatic tests that are run on the exercise files require an empty main function. No commands should be left in the main function of your solution. That is, any code that you yourself use for testing must be contained in a specially defined `if` block:\n\n\`\`\`python\ndef greet():\n    print(\"Hi!\")\n\n# Write your main function within a block like this:\nif __name__ == \"__main__\":\n    greet()\n\`\`\`\n\nAny code left outside the above block causes an error. The purpose of this is to make sure that your solution gets tested on a clean slate, as the tests often check what your functions print out.\n",
        CAS: "\nYa hemos utilizado funciones como `len`, `print` e `input` en nuestros programas. Estas son funciones integradas en Python, por lo que siempre están a nuestra disposición, sin importar en qué entorno estemos programando. Sin embargo, también es posible definir tus propias funciones.\n\n## La definición de la función\n\nAntes de que se pueda usar una función, debe definirse. Cualquier definición de función comienza con la palabra clave `def`, abreviatura de _define_. Luego viene el _nombre_ de la función, seguido de paréntesis y un carácter de dos puntos. A esto se le llama el _encabezado_ de la función. Después de esto, sangrado al igual que los bloques `while` e `if`, viene el _cuerpo_ de la función.\n\nPor ejemplo, el siguiente código define la función `mensaje`:\n\n\`\`\`python\ndef mensaje():\n    print(\"¡Esta es mi propia función!\")\n\`\`\`\n\nSi se ejecuta el programa anterior, parece que no sucede nada. Esto se debe a que el código en el cuerpo de la función solo se ejecuta cuando se _llama_ a la función.\n\nLlamar a una función es tan simple como mencionar su nombre en tu código. Agregar una llamada a la función al final del programa anterior, así\n\n\`\`\`python\ndef mensaje():\n    print(\"¡Esta es mi propia función!\")\n\nmensaje()\n\`\`\`\nda como resultado una declaración impresa:\n\n\`\`\`text\n¡Esta es mi propia función!\n\`\`\`\n\nCuando se ha definido una función, se puede llamar varias veces:\n\n\`\`\`python\ndef mensaje():\n    print(\"¡Esta es mi propia función!\")\n\nmensaje()\nmensaje()\nmensaje()\n\`\`\`\n\n\`\`\`text\n¡Esta es mi propia función!\n¡Esta es mi propia función!\n¡Esta es mi propia función!\n\`\`\`\n\n### Probando tus propias funciones\n\nNota: a partir de ahora, la mayoría de los ejercicios de este curso te pedirán que escribas tu(s) propia(s) función(es).\n\nCuando un programa consta solo de funciones, ejecutarlo no parece tener ningún efecto. El siguiente código no imprime nada, aunque hay una declaración de impresión:\n\n\`\`\`python\ndef saludar():\n    print(\"¡Hola!\")\n\`\`\`\n\nLa razón por la que no se imprime nada es que el código dentro del cuerpo de la función `saludar` solo se ejecuta cuando se llama a la función.\n\nEl programa \"principal\" debajo de la función debe contener llamadas a funciones apropiadas, para que el programa pueda probarse. De hecho, Python trata todo el código que no está dentro de las definiciones de funciones como parte de la _función principal_, que se ejecuta cuando el archivo en sí se evalúa o ejecuta. Entonces, agreguemos una llamada a la función:\n\n\`\`\`python\ndef saludar():\n    print(\"¡Hola!\")\n\n# Todo el código que no está dentro de las definiciones de funciones es parte de\n# la función principal del programa\n# Llamando a nuestra función:\n\nsaludar()\n\`\`\`\n\n**Importante**: en este curso, las pruebas automáticas que se ejecutan en los archivos de ejercicio requieren una función principal vacía. No deben dejarse comandos en la función principal de tu solución. Es decir, cualquier código que uses tú mismo para probar debe estar contenido en un bloque `if` especialmente definido:\n\n\`\`\`python\ndef saludar():\n    print(\"¡Hola!\")\n\n# Escribe tu función principal dentro de un bloque como este:\nif __name__ == \"__main__\":\n    saludar()\n\`\`\`\n\nCualquier código que quede fuera del bloque anterior provoca un error. El propósito de esto es asegurar que tu solución se pruebe en borrón y cuenta nueva, ya que las pruebas a menudo verifican lo que imprimen tus funciones.\n",
        EUS: "\n`len`, `print` eta `input` bezalako funtzioak erabili ditugu gure programetan. Hauek Pythonen integratutako funtzioak dira, eta beraz, beti daude gure eskura, edozein ingurunetan programatzen ari garela ere. Hala ere, zure funtzio propioak definitzea ere posible da.\n\n## Funtzioaren definizioa\n\nFuntzio bat erabili aurretik, definitu egin behar da. Edozein funtzio-definizio `def` gako-hitzarekin hasten da, _define_ hitzaren laburdura. Ondoren funtzioaren _izena_ dator, parentesiekin eta bi puntu karakterearekin jarraituta. Honi funtzioaren _goiburua_ deitzen zaio. Honen ondoren, `while` eta `if` blokeak bezala koska eginda, funtzioaren _gorputza_ dator.\n\nAdibidez, honako kode honek `mezua` funtzioa definitzen du:\n\n\`\`\`python\ndef mezua():\n    print(\"Hau da nire funtzio propioa!\")\n\`\`\`\n\nGoiko programa exekutatzen bada, badirudi ez dela ezer gertatzen. Hau da funtzioaren gorputzeko kodea funtzioari _deitzen_ zaionean bakarrik exekutatzen delako.\n\nFuntzio bati deitzea zure kodean bere izena aipatzea bezain erraza da. Goiko programaren amaieran funtzio-dei bat gehitzeak, honela\n\n\`\`\`python\ndef mezua():\n    print(\"Hau da nire funtzio propioa!\")\n\nmezua()\n\`\`\`\ninprimatutako adierazpen bat ematen du:\n\n\`\`\`text\nHau da nire funtzio propioa!\n\`\`\`\n\nFuntzio bat definitu denean hainbat aldiz dei daiteke:\n\n\`\`\`python\ndef mezua():\n    print(\"Hau da nire funtzio propioa!\")\n\nmezua()\nmezua()\nmezua()\n\`\`\`\n\n\`\`\`text\nHau da nire funtzio propioa!\nHau da nire funtzio propioa!\nHau da nire funtzio propioa!\n\`\`\`\n\n### Zure funtzioak probatzen\n\nOharra: hemendik aurrera, ikastaro honetako ariketa gehienek zure funtzio propioa(k) idaztea eskatuko dizute.\n\nPrograma bat funtzioez bakarrik osatuta dagoenean, exekutatzeak ez dirudi inolako eraginik duenik. Honako kode honek ez du ezer inprimatzen, nahiz eta inprimatze-adierazpen bat egon:\n\n\`\`\`python\ndef agurtu():\n    print(\"Kaixo!\")\n\`\`\`\n\nEzer ez inprimatzearen arrazoia da `agurtu` funtzioaren gorputzaren barruko kodea funtzioari deitzen zaionean bakarrik exekutatzen dela.\n\nFuntzioaren azpiko programa \"nagusiak\" funtzio-dei egokiak izan behar ditu, programa probatu ahal izateko. Izan ere, Pythonek funtzio-definizioen barruan ez dagoen kode guztia _funtzio nagusiaren_ partetzat hartzen du, eta fitxategia bera ebaluatzen edo exekutatzen denean exekutatzen da. Beraz, gehi dezagun funtzio-dei bat:\n\n\`\`\`python\ndef agurtu():\n    print(\"Kaixo!\")\n\n# Funtzio-definizioen barruan ez dagoen kode guztia programaren\n# funtzio nagusiaren parte da\n# Gure funtzioari deitzen:\n\nagurtu()\n\`\`\`\n\n**Garrantzitsua**: ikastaro honetan, ariketa-fitxategietan exekutatzen diren proba automatikoek funtzio nagusi huts bat behar dute. Ez da komandorik utzi behar zure soluzioaren funtzio nagusian. Hau da, probatzeko zuk zeuk erabiltzen duzun edozein kode bereziki definitutako `if` bloke batean egon behar da:\n\n\`\`\`python\ndef agurtu():\n    print(\"Kaixo!\")\n\n# Idatzi zure funtzio nagusia honelako bloke batean:\nif __name__ == \"__main__\":\n    agurtu()\n\`\`\`\n\nGoiko bloketik kanpo geratzen den edozein kodek errorea eragiten du. Honen helburua zure soluzioa hutsetik probatzen dela ziurtatzea da, probek askotan zure funtzioek zer inprimatzen duten egiaztatzen baitute.\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part03-28_seven_brothers',
      title: {
        ENG: "Seven Cities",
        CAS: "Siete Ciudades",
        EUS: "Zazpi Hiri"
      },
      description: {
        ENG: "Write a function named `seven_cities`. When the function is called, it should print out the names of the seven cities in alphabetical order.",
        CAS: "Escribe una función llamada `seven_cities`. Cuando se llame a la función, debe imprimir los nombres de las siete ciudades en orden alfabético.",
        EUS: "Idatzi `seven_cities` izeneko funtzio bat. Funtzioa deitzen denean, zazpi hiriren izenak inprimatu beharko ditu ordena alfabetikoan."
      },
      initialCode: "# Write your solution here\n# You can test your function by calling it within the following block\nif __name__ == \"__main__\":\n    seven_cities()",
      testCode: `\nimport unittest\nfrom unittest.mock import patch\n\nclass TestSevenCities(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        expected = ["Barcelona", "Bilbao", "Madrid", "Pamplona", "Sevilla", "Valencia", "Zaragoza"]\n        for name in expected:\n            self.assertIn(name, out)\n`
    },
    {
      type: 'markdown',
      content: {
        ENG: "\n## Function arguments\n\nFunctions often take one or more _arguments_, which may affect what the function does. For example, the built-in Python functions `print` and `input` take as argument(s) the text that is to be displayed:\n\n\`\`\`python\nprint(\"Hi!\")                           # argument is the string \"Hi!\"\nname = input(\"What is your name? \")    # argument is the string \"What is your name? \"\nprint(name)                            # argument is the value of the variable name\n\`\`\`\n\nIt was mentioned before that the terms _argument_ and _parameter_ are often used to refer to the same thing. The distinction is that while _argument_ is used with the data passed to the function when the function is called, _inside_ the function the arguments are assigned to variables called _parameters_. So, approximately, when the function is called, we call the passed bits of data arguments, but when we are defining the function, we call them parameters.\n\nLet's define some functions that take arguments. In the function definition, the parameters are defined within the parentheses after the function name:\n\n\`\`\`python\ndef hello(target):\n    print(\"Hello\", target)\n\`\`\`\n\nCalling this function twice, like so\n\n\`\`\`python\nhello(\"Emily\")\nhello(\"world!\")\n\`\`\`\n\nprints out two different greetings:\n\n\`\`\`text\nHello Emily\nHello world!\n\`\`\`\n\nLet's take a closer look at the function definition:\n\n\`\`\`python\ndef hello(target):\n    print(\"Hello\", target)\n\`\`\`\n\nOn the first line, in the function header, we defined that this function takes an argument, and assigns it to a parameter named `target`. In the body of the function the `print` command uses the value stored in `target`.\n\nWhen the function is called, the parameter `target` has the value given as an argument in the function call. For example, the following function call\n\n\`\`\`python\nname = \"Alan\"\nhello(name)\n\`\`\`\n\ncauses the parameter `target` to be set to the value `\"Alan\"`.\n",
        CAS: "\n## Argumentos de función\n\nLas funciones a menudo toman uno o más _argumentos_, que pueden afectar lo que hace la función. Por ejemplo, las funciones integradas de Python `print` e `input` toman como argumento(s) el texto que se va a mostrar:\n\n\`\`\`python\nprint(\"¡Hola!\")                        # el argumento es la cadena \"¡Hola!\"\nnombre = input(\"¿Cómo te llamas? \")    # el argumento es la cadena \"¿Cómo te llamas? \"\nprint(nombre)                          # el argumento es el valor de la variable nombre\n\`\`\`\n\nSe mencionó antes que los términos _argumento_ y _parámetro_ se usan a menudo para referirse a la misma cosa. La distinción es que mientras _argumento_ se usa con los datos pasados a la función cuando se llama a la función, _dentro_ de la función los argumentos se asignan a variables llamadas _parámetros_. Entonces, aproximadamente, cuando se llama a la función, llamamos argumentos a los fragmentos de datos pasados, pero cuando estamos definiendo la función, los llamamos parámetros.\n\nDefinamos algunas funciones que toman argumentos. En la definición de la función, los parámetros se definen dentro de los paréntesis después del nombre de la función:\n\n\`\`\`python\ndef hola(objetivo):\n    print(\"Hola\", objetivo)\n\`\`\`\n\nLlamar a esta función dos veces, así\n\n\`\`\`python\nhola(\"Emily\")\nhola(\"mundo!\")\n\`\`\`\n\nimprime dos saludos diferentes:\n\n\`\`\`text\nHola Emily\nHola mundo!\n\`\`\`\n\nEchemos un vistazo más de cerca a la definición de la función:\n\n\`\`\`python\ndef hola(objetivo):\n    print(\"Hola\", objetivo)\n\`\`\`\n\nEn la primera línea, en el encabezado de la función, definimos que esta función toma un argumento y lo asigna a un parámetro llamado `objetivo`. En el cuerpo de la función, el comando `print` usa el valor almacenado en `objetivo`.\n\nCuando se llama a la función, el parámetro `objetivo` tiene el valor dado como argumento en la llamada a la función. Por ejemplo, la siguiente llamada a la función\n\n\`\`\`python\nnombre = \"Alan\"\nhola(nombre)\n\`\`\`\n\nhace que el parámetro `objetivo` se establezca en el valor `\"Alan\"`.\n",
        EUS: "\n## Funtzioaren argumentuak\n\nFuntzioek askotan _argumentu_ bat edo gehiago hartzen dituzte, eta horrek funtzioak egiten duena eragin dezake. Adibidez, `print` eta `input` Pythonen integratutako funtzioek bistaratu beharreko testua hartzen dute argumentu gisa:\n\n\`\`\`python\nprint(\"Kaixo!\")                        # argumentua \"Kaixo!\" katea da\nizena = input(\"Nola duzu izena? \")     # argumentua \"Nola duzu izena? \" katea da\nprint(izena)                           # argumentua izena aldagaiaren balioa da\n\`\`\`\n\nLehenago aipatu da _argumentu_ eta _parametro_ terminoak askotan gauza bera izendatzeko erabiltzen direla. Bereizketa da _argumentu_ funtzioari deitzen zaionean pasatzen diren datuekin erabiltzen dela, eta funtzioaren _barruan_ argumentuak _parametro_ deitzen diren aldagaiei esleitzen zaizkiela. Beraz, gutxi gorabehera, funtzioari deitzen zaionean, pasatutako datu-zatiei argumentu deitzen diegu, baina funtzioa definitzen ari garenean, parametro deitzen diegu.\n\nDefini ditzagun argumentuak hartzen dituzten funtzio batzuk. Funtzioaren definizioan, parametroak funtzioaren izenaren ondorengo parentesien barruan definitzen dira:\n\n\`\`\`python\ndef kaixo(helburua):\n    print(\"Kaixo\", helburua)\n\`\`\`\n\nFuntzio honi bi aldiz deitzeak, honela\n\n\`\`\`python\nkaixo(\"Emily\")\nkaixo(\"mundua!\")\n\`\`\`\n\nbi agur ezberdin inprimatzen ditu:\n\n\`\`\`text\nKaixo Emily\nKaixo mundua!\n\`\`\`\n\nIkus dezagun gertuago funtzioaren definizioa:\n\n\`\`\`python\ndef kaixo(helburua):\n    print(\"Kaixo\", helburua)\n\`\`\`\n\nLehenengo lerroan, funtzioaren goiburuan, funtzio honek argumentu bat hartzen duela definitu dugu, eta `helburua` izeneko parametro bati esleitzen diola. Funtzioaren gorputzean `print` komandoak `helburua` parametroan gordetako balioa erabiltzen du.\n\nFuntzioari deitzen zaionean, `helburua` parametroak funtzio-deian argumentu gisa emandako balioa du. Adibidez, honako funtzio-dei honek\n\n\`\`\`python\nizena = \"Alan\"\nkaixo(izena)\n\`\`\`\n\n`helburua` parametroa `\"Alan\"` balioan ezartzea eragiten du.\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part03-29_first_character',
      title: {
        ENG: "First character",
        CAS: "Primer carácter",
        EUS: "Lehen karakterea"
      },
      description: {
        ENG: "The exercise contains the outline of the function `first_character`. Please complete it so that it prints out the first character of the string it takes as its argument.",
        CAS: "El ejercicio contiene el esquema de la función `primer_caracter`. Por favor, complétalo para que imprima el primer carácter de la cadena que toma como argumento.",
        EUS: "Ariketak `lehen_karakterea` funtzioaren eskema dauka. Osatu ezazu argumentu gisa hartzen duen katearen lehen karakterea inprimatu dezan."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    first_character('python')",
      testCode: `\nimport unittest\nclass TestFirst(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        self.assertIn("p", out)\n`
    },
    {
      type: 'markdown',
      content: {
        ENG: "\n## More examples\n\nLet's have a look at some more examples of functions which take arguments. In the following function definition the parameter is a number:\n\n\`\`\`python\ndef squared(x):\n    print(f\"The square of the number {x} is {x * x}\")\n\nsquared(2)\nsquared(5)\n\`\`\`\n\n\`\`\`text\nThe square of the number 2 is 4\nThe square of the number 5 is 25\n\`\`\`\n\nMeanwhile, in this function definition there is an `if` statement within the body of the function:\n\n\`\`\`python\ndef hello(name):\n    if name == \"Emily\":\n        print(\"Hello\", name)\n    else:\n        print(\"Hi\", name)\n\nhello(\"Emily\")\nhello(\"Mark\")\n\`\`\`\n\n\`\`\`text\nHello Emily\nHi Mark\n\`\`\`\n\nThis function takes two arguments:\n\n\`\`\`python\ndef sum(x, y):\n    result = x + y\n    print(f\"The sum of the arguments {x} and {y} is {result}\")\n\nsum(1, 2)\nsum(5, 24)\n\`\`\`\n\n\`\`\`text\nThe sum of the arguments 1 and 2 is 3\nThe sum of the arguments 5 and 24 is 29\n\`\`\`\n\n## Warning: using global variables within functions\n\nIn the examples above we saw that it is possible to assign new variables within function definitions. The function can also see variables assigned outside it, in the main function. Such variables are called _global_ variables.\n\nUsing global variables from within functions is usually a bad idea. Among other issues, doing so may cause bugs which are difficult to trace.\n",
        CAS: "\n## Más ejemplos\n\nEchemos un vistazo a algunos ejemplos más de funciones que toman argumentos. En la siguiente definición de función, el parámetro es un número:\n\n\`\`\`python\ndef cuadrado(x):\n    print(f\"El cuadrado del número {x} es {x * x}\")\n\ncuadrado(2)\ncuadrado(5)\n\`\`\`\n\n\`\`\`text\nEl cuadrado del número 2 es 4\nEl cuadrado del número 5 es 25\n\`\`\`\n\nMientras tanto, en esta definición de función hay una declaración `if` dentro del cuerpo de la función:\n\n\`\`\`python\ndef hola(nombre):\n    if nombre == \"Emily\":\n        print(\"Hola\", nombre)\n    else:\n        print(\"Holi\", nombre)\n\nhola(\"Emily\")\nhola(\"Mark\")\n\`\`\`\n\n\`\`\`text\nHola Emily\nHoli Mark\n\`\`\`\n\nEsta función toma dos argumentos:\n\n\`\`\`python\ndef suma(x, y):\n    resultado = x + y\n    print(f\"La suma de los argumentos {x} y {y} es {resultado}\")\n\nsuma(1, 2)\nsuma(5, 24)\n\`\`\`\n\n\`\`\`text\nLa suma de los argumentos 1 y 2 es 3\nLa suma de los argumentos 5 y 24 es 29\n\`\`\`\n\n## Advertencia: uso de variables globales dentro de funciones\n\nEn los ejemplos anteriores vimos que es posible asignar nuevas variables dentro de las definiciones de funciones. La función también puede ver variables asignadas fuera de ella, en la función principal. Tales variables se llaman variables _globales_.\n\nUsar variables globales desde dentro de funciones suele ser una mala idea. Entre otros problemas, hacerlo puede causar errores que son difíciles de rastrear.\n",
        EUS: "\n## Adibide gehiago\n\nIkus ditzagun argumentuak hartzen dituzten funtzioen adibide gehiago. Honako funtzio-definizio honetan parametroa zenbaki bat da:\n\n\`\`\`python\ndef karratua(x):\n    print(f\"{x} zenbakiaren karratua {x * x} da\")\n\nkarratua(2)\nkarratua(5)\n\`\`\`\n\n\`\`\`text\n2 zenbakiaren karratua 4 da\n5 zenbakiaren karratua 25 da\n\`\`\`\n\nBitartean, funtzio-definizio honetan `if` adierazpen bat dago funtzioaren gorputzaren barruan:\n\n\`\`\`python\ndef agurtu(izena):\n    if izena == \"Emily\":\n        print(\"Kaixo\", izena)\n    else:\n        print(\"Aupa\", izena)\n\nagurtu(\"Emily\")\nagurtu(\"Mark\")\n\`\`\`\n\n\`\`\`text\nKaixo Emily\nAupa Mark\n\`\`\`\n\nFuntzio honek bi argumentu hartzen ditu:\n\n\`\`\`python\ndef batura(x, y):\n    emaitza = x + y\n    print(f\"{x} eta {y} argumentuen batura {emaitza} da\")\n\nbatura(1, 2)\nbatura(5, 24)\n\`\`\`\n\n\`\`\`text\n1 eta 2 argumentuen batura 3 da\n5 eta 24 argumentuen batura 29 da\n\`\`\`\n\n## Abisua: aldagai globalak funtzioetan erabiltzea\n\nAurreko adibideetan ikusi dugu funtzio-definizioen barruan aldagai berriak esleitzea posible dela. Funtzioak kanpoan esleitutako aldagaiak ere ikus ditzake, funtzio nagusian. Horrelako aldagaiei aldagai _globalak_ deitzen zaie.\n\nAldagai globalak funtzioen barrutik erabiltzea ideia txarra izan ohi da. Beste arazo batzuen artean, hori egiteak jarraitzeko zailak diren akatsak sor ditzake.\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part03-30_mean',
      title: {
        ENG: "Mean",
        CAS: "Media",
        EUS: "Batezbestekoa"
      },
      description: {
        ENG: "Write a function named `mean`, which takes three integer arguments. The function should print out the arithmetic mean of the three arguments.",
        CAS: "Escribe una función llamada `media`, que tome tres argumentos enteros. La función debe imprimir la media aritmética de los tres argumentos.",
        EUS: "Idatzi `batezbestekoa` izeneko funtzio bat, hiru argumentu oso hartzen dituena. Funtzioak hiru argumentuen batezbesteko aritmetikoa inprimatu behar du."
      },
      initialCode: `# Write your solution here\nif __name__ == "__main__\`:\n    mean(1, 2, 3)"
      testCode: `\nimport unittest\nclass TestMean(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        self.assertIn("2.0", out)\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-31_print_many_times',
      title: {
        ENG: "Print many times",
        CAS: "Imprimir muchas veces",
        EUS: "Askotan inprimatu"
      },
      description: {
        ENG: "Write a function named `print_many_times(text, times)`, which takes a string and an integer as arguments. The integer argument specifies how many times the string argument should be printed out.",
        CAS: "Escribe una función llamada `imprimir_muchas_veces(texto, veces)`, que tome una cadena y un entero como argumentos. El argumento entero especifica cuántas veces se debe imprimir el argumento de cadena.",
        EUS: "Idatzi `inprimatu_askotan(testua, aldiz)` izeneko funtzio bat, kate bat eta zenbaki oso bat argumentu gisa hartzen dituena. Argumentu osoak zehazten du zenbat aldiz inprimatu behar den katearen argumentua."
      },
      initialCode: `# Write your solution here\nif __name__ == "__main__":\n    print_many_times("hi\`, 5)"
      testCode: `\nimport unittest\nclass TestMany(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        if out.count("hi") < 5:\n             self.fail("Should print 'hi' 5 times. ")\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-32_square_of_hashes',
      title: {
        ENG: "A square of hashes",
        CAS: "Un cuadrado de almohadillas",
        EUS: "Traola karratu bat"
      },
      description: {
        ENG: "Write a function named `hash_square(length)`, which takes an integer argument. The function prints out a square of hash characters, and the argument specifies the length of the side of the square.",
        CAS: "Escribe una función llamada `cuadrado_almohadillas(longitud)`, que tome un argumento entero. La función imprime un cuadrado de caracteres de almohadilla, y el argumento especifica la longitud del lado del cuadrado.",
        EUS: "Idatzi `traola_karratua(luzera)` izeneko funtzio bat, argumentu oso bat hartzen duena. Funtzioak traola karakterez osatutako karratu bat inprimatzen du, eta argumentuak karratuaren aldearen luzera zehazten du."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    hash_square(3)",
      testCode: `\nimport unittest\nclass TestHashSq(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        # ###\n###\n###\n        if out.count("###") < 3:\n             self.fail("Should print 3 lines of hashes. ")\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-33_chessboard',
      title: {
        ENG: "Chessboard",
        CAS: "Tablero de ajedrez",
        EUS: "Xake-taula"
      },
      description: {
        ENG: "Write a function named `chessboard`, which prints out a chessboard made out of ones and zeroes. The function takes an integer argument, which specifies the length of the side of the board.",
        CAS: "Escribe una función llamada `tablero_ajedrez`, que imprima un tablero de ajedrez hecho de unos y ceros. La función toma un argumento entero, que especifica la longitud del lado del tablero.",
        EUS: "Idatzi `xake_taula` izeneko funtzio bat, bateko eta zeroko xake-taula bat inprimatzen duena. Funtzioak argumentu oso bat hartzen du, taularen aldearen luzera zehazten duena."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    chessboard(3)",
      testCode: `\nimport unittest\nclass TestChess(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        self.assertIn("101", out)\n        self.assertIn("010", out)\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part03-34_word_squared',
      title: {
        ENG: "A word squared",
        CAS: "Una palabra al cuadrado",
        EUS: "Hitz bat karratuan"
      },
      description: {
        ENG: "Write a function named `squared`, which takes a string argument and an integer argument, and prints out a square of characters as specified by the examples below.",
        CAS: "Escribe una función llamada `cuadrado`, que tome un argumento de cadena y un argumento entero, e imprima un cuadrado de caracteres como se especifica en los ejemplos a continuación.",
        EUS: "Idatzi `karratua` izeneko funtzio bat, kate argumentu bat eta zenbaki oso argumentu bat hartzen dituena, eta karaktere karratu bat inprimatzen duena azpiko adibideek zehazten duten moduan."
      },
      initialCode: `# Write your solution here\nif __name__ == "__main__":\n    squared("ab\`, 3)"
      testCode: `\nimport unittest\nclass TestWordSquared(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        # Simple check for structure\n        self.assertIn("aba", out)\n`
    },

  ]
};