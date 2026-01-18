const fs = require('fs');
const path = require('path');

const learningObjectives = {
  type: "markdown",
  content: {
    ENG: [
      "# Learning objectives",
      "",
      "After this section",
      "",
      "- You will know what a Python module is",
      "- You will be able to include a module in your program with the `import` statement",
      "- You will know how to look for more information on the contents of modules"
    ].join("\n"),
    CAS: [
      "# Objetivos de aprendizaje",
      "",
      "Después de esta sección",
      "",
      "- Sabrás qué es un módulo de Python",
      "- Podrás incluir un módulo en tu programa con la declaración `import`",
      "- Sabrás cómo buscar más información sobre el contenido de los módulos"
    ].join("\n"),
    EUS: [
      "# Ikas-helburuak",
      "",
      "Atal honen ondoren",
      "",
      "- Python modulu bat zer den jakingo duzu",
      "- Modulu bat zure programan sartzeko gai izango zara `import` sententziarekin",
      "- Moduluen edukiari buruzko informazio gehiago nola bilatu jakingo duzu"
    ].join("\n")
  }
};

const debuggingContent = {
  type: "markdown",
  content: {
    ENG: [
      "## Debugging revisited",
      "",
      "We have already come across quite a few debugging methods on this course. The [visualisation tool](http://www.pythontutor.com/visualize.html#mode=edit) should now be familiar to you, and debugging print outs are a good old staple by now. You have possibly also tried the Visual Studio Code [built-in debugger](/part-4/1-vscode#the-built-in-debugger).",
      "",
      "In Python version 3.7 brought yet another easy and useful tool for debugging programs: the `breakpoint()` command.",
      "",
      "You can add this command to any point in your code (within normal syntactic rules, of course). When the program is run, the execution halts at the point where you inserted the `breakpoint` command.",
      "",
      "When the execution halts at the `breakpoint` command, an interactive console window is opened. Here you can write any code just as you would in a normal Python console, and see how the code works at exactly that point in the program.",
      "",
      "The `breakpoint` command is especially useful when you know that some line of code causes an error, but you are not quite sure why that is. Add a breakpoint just before the problematic line of code and run your program. Now you can try out different options in the interactive console window, and figure out the correct commands to include in your program.",
      "",
      "It is also possible to continue execution from where it halted. The command `continue`, or the shorthand `c`, typed into the debugging console will resume execution until the next breakpoint is reached.",
      "",
      "The command `exit` finishes the execution of the program.",
      "",
      "When you are done debugging, remember to remove the `breakpoint` commands from your code!"
    ].join("\n"),
    CAS: [
      "## Depuración revisada",
      "",
      "Ya hemos encontrado bastantes métodos de depuración en este curso. La [herramienta de visualización](http://www.pythontutor.com/visualize.html#mode=edit) ya debería serte familiar, y las impresiones de depuración son un viejo elemento básico a estas alturas. Posiblemente también hayas probado el [depurador integrado](/part-4/1-vscode#the-built-in-debugger) de Visual Studio Code.",
      "",
      "En la versión 3.7 de Python se introdujo otra herramienta fácil y útil para depurar programas: el comando `breakpoint()`.",
      "",
      "Puedes agregar este comando en cualquier punto de tu código (dentro de las reglas sintácticas normales, por supuesto). Cuando se ejecuta el programa, la ejecución se detiene en el punto donde insertaste el comando `breakpoint`.",
      "",
      "Cuando la ejecución se detiene en el comando `breakpoint`, se abre una ventana de consola interactiva. Aquí puedes escribir cualquier código tal como lo harías en una consola de Python normal, y ver cómo funciona el código exactamente en ese punto del programa.",
      "",
      "El comando `breakpoint` es especialmente útil cuando sabes que alguna línea de código causa un error, pero no estás muy seguro de por qué. Agrega un punto de interrupción justo antes de la línea de código problemática y ejecuta tu programa. Ahora puedes probar diferentes opciones en la ventana de consola interactiva y averiguar los comandos correctos para incluir en tu programa.",
      "",
      "También es posible continuar la ejecución desde donde se detuvo. El comando `continue`, o la abreviatura `c`, escrito en la consola de depuración reanudará la ejecución hasta que se alcance el siguiente punto de interrupción.",
      "",
      "El comando `exit` finaliza la ejecución del programa.",
      "",
      "¡Cuando termines de depurar, recuerda eliminar los comandos `breakpoint` de tu código!"
    ].join("\n"),
    EUS: [
      "## Arazketa berrikusia",
      "",
      "Ikastaro honetan arazketa metodo dezente topatu ditugu dagoeneko. [Bistaratze tresna](http://www.pythontutor.com/visualize.html#mode=edit) ezaguna izan beharko litzateke zuretzat orain, eta arazketa inprimaketak oinarrizko zahar onak dira dagoeneko. Visual Studio Code-ren [araztaile integratua](/part-4/1-vscode#the-built-in-debugger) ere probatu zenuen beharbada.",
      "",
      "Python 3.7 bertsioan programak arazteko beste tresna erraz eta erabilgarri bat ekarri zuen: `breakpoint()` komandoa.",
      "",
      "Komando hau zure kodeko edozein puntutan gehi dezakezu (arau sintaktiko normalen barruan, noski). Programa exekutatzen denean, exekuzioa `breakpoint` komandoa sartu zenuen puntuan gelditzen da.",
      "",
      "Exekuzioa `breakpoint` komandoan gelditzen denean, kontsola leiho interaktibo bat irekitzen da. Hemen edozein kode idatz dezakezu Python kontsola arrunt batean egingo zenukeen bezala, eta kodeak programako puntu horretan zehazki nola funtzionatzen duen ikusi.",
      "",
      "`breakpoint` komandoa bereziki erabilgarria da kode lerro batek errore bat eragiten duela dakizunean, baina zergatik den ziur ez zaudenean. Gehitu etendura-puntu bat kode lerro problematikoaren aurretik eta exekutatu zure programa. Orain aukera desberdinak proba ditzakezu kontsola leiho interaktiboan, eta zure programan sartu beharreko komando zuzenak asmatu.",
      "",
      "Gelditu den tokitik exekuzioa jarraitzea ere posible da. `continue` komandoak, edo `c` laburdurak, arazketa kontsolan idatzita, exekuzioa berrekingo du hurrengo etendura-puntura iritsi arte.",
      "",
      "`exit` komandoak programaren exekuzioa amaitzen du.",
      "",
      "Arazketa amaitzean, gogoratu `breakpoint` komandoak zure kodetik kentzea!"
    ].join("\n")
  }
};

const usingModulesContent = {
  type: "markdown",
  content: {
    ENG: [
      "## Using modules",
      "",
      "The Python language definition already contains some useful functions, such as the `len` function which returns the length of a string or a list, or the `sum` function which returns the sum of items in a data structure, but they will only get a programmer so far. The Python *standard library* is a collection of standardised functions and objects, which can be used to expand the expressive power of Python in many ways.",
      "",
      "The standard library is comprised of *modules*, which contain functions and classes grouped around different themes and functionalities. In this part of the course we will familiarize ourselves with some useful Python modules. We will also learn to write our own modules.",
      "",
      "The command `import` makes the contents of the given module accessible in the current program. Let's have a closer look at working with the `math` module. It contains the definitions of some mathematical functions, such as `sqrt` for square root and `log` for logarithm.",
      "",
      "```python",
      "import math",
      "",
      "# The square root of the number 5",
      "print(math.sqrt(5))",
      "# the base 2 logarithm of the number 8",
      "print(math.log(8, 2))",
      "```",
      "",
      "```text",
      "2.23606797749979",
      "3.0",
      "```",
      "",
      "The functions are defined in the `math` module, so they must be referred to as `math.sqrt` and `math.log` in the program code.",
      "",
      "## Selecting distinct sections from a module",
      "",
      "Another way to use modules is to select a distinct entity from the module with the `from` command. In case we want to use just the functions `sqrt` and `log` from the module `math`, we can do the following:",
      "",
      "```python",
      "from math import sqrt, log",
      "",
      "print(sqrt(5))",
      "print(log(5,2))",
      "```",
      "",
      "As you can see above, we do not need the `math` prefix when using the functions imported in this manner.",
      "",
      "Sometimes a handy shortcut is to import *all* the contents of a module with the star notation:",
      "",
      "```python",
      "from math import *",
      "",
      "print(sqrt(5))",
      "print(log(5,2))",
      "```",
      "",
      "Importing modules with the star notation can be useful when testing and in some smaller projects, but it can pose some new problems, too. We will come across these later."
    ].join("\n"),
    CAS: [
      "## Usando módulos",
      "",
      "La definición del lenguaje Python ya contiene algunas funciones útiles, como la función `len` que devuelve la longitud de una cadena o una lista, o la función `sum` que devuelve la suma de elementos en una estructura de datos, pero solo llevarán al programador hasta cierto punto. La *biblioteca estándar* de Python es una colección de funciones y objetos estandarizados, que se pueden utilizar para expandir el poder expresivo de Python de muchas maneras.",
      "",
      "La biblioteca estándar está compuesta por *módulos*, que contienen funciones y clases agrupadas en torno a diferentes temas y funcionalidades. En esta parte del curso nos familiarizaremos con algunos módulos útiles de Python. También aprenderemos a escribir nuestros propios módulos.",
      "",
      "El comando `import` hace que el contenido del módulo dado sea accesible en el programa actual. Echemos un vistazo más de cerca al trabajo con el módulo `math`. Contiene las definiciones de algunas funciones matemáticas, como `sqrt` para la raíz cuadrada y `log` para el logaritmo.",
      "",
      "```python",
      "import math",
      "",
      "# La raíz cuadrada del número 5",
      "print(math.sqrt(5))",
      "# el logaritmo base 2 del número 8",
      "print(math.log(8, 2))",
      "```",
      "",
      "```text",
      "2.23606797749979",
      "3.0",
      "```",
      "",
      "Las funciones se definen en el módulo `math`, por lo que deben referirse como `math.sqrt` y `math.log` en el código del programa.",
      "",
      "## Seleccionando secciones distintas de un módulo",
      "",
      "Otra forma de usar módulos es seleccionar una entidad distinta del módulo con el comando `from`. En caso de que queramos usar solo las funciones `sqrt` y `log` del módulo `math`, podemos hacer lo siguiente:",
      "",
      "```python",
      "from math import sqrt, log",
      "",
      "print(sqrt(5))",
      "print(log(5,2))",
      "```",
      "",
      "Como puedes ver arriba, no necesitamos el prefijo `math` al usar las funciones importadas de esta manera.",
      "",
      "A veces, un atajo útil es importar *todo* el contenido de un módulo con la notación de estrella:",
      "",
      "```python",
      "from math import *",
      "",
      "print(sqrt(5))",
      "print(log(5,2))",
      "```",
      "",
      "Importar módulos con la notación de estrella puede ser útil al probar y en algunos proyectos más pequeños, pero también puede plantear algunos problemas nuevos. Nos encontraremos con estos más tarde."
    ].join("\n"),
    EUS: [
      "## Moduluak erabiltzen",
      "",
      "La definición del lenguaje Python ya contiene algunas funciones útiles, como la función `len` que devuelve la longitud de una cadena o una lista, o la función `sum` que devuelve la suma de elementos en una estructura de datos, pero solo llevarán al programador hasta cierto punto. La *biblioteca estándar* de Python es una colección de funciones y objetos estandarizados, que se pueden utilizar para expandir el poder expresivo de Python de muchas maneras.",
      "",
      "La biblioteca estándar está compuesta por *módulos*, que contienen funciones y clases agrupadas en torno a diferentes temas y funcionalidades. En esta parte del curso nos familiarizaremos con algunos módulos útiles de Python. También aprenderemos a escribir nuestros propios módulos.",
      "",
      "El comando `import` hace que el contenido del módulo dado sea accesible en el programa actual. Echemos un vistazo más de cerca al trabajo con el módulo `math`. Contiene las definiciones de algunas funciones matemáticas, como `sqrt` para la raíz cuadrada y `log` para el logaritmo.",
      "",
      "```python",
      "import math",
      "",
      "# 5 zenbakiaren erro karratua",
      "print(math.sqrt(5))",
      "# 8 zenbakiaren 2 oinarriko logaritmoa",
      "print(math.log(8, 2))",
      "```",
      "",
      "```text",
      "2.23606797749979",
      "3.0",
      "```",
      "",
      "Funtzioak `math` moduluan definituta daude, beraz, `math.sqrt` eta `math.log` gisa aipatu behar dira programa kodean.",
      "",
      "## Atal bereiziak hautatzen modulu batetik",
      "",
      "Moduluak erabiltzeko beste modu bat modulutik entitate bereizi bat hautatzea da `from` komandoarekin. `math` modulutik `sqrt` eta `log` funtzioak bakarrik erabili nahi baditugu, honako hau egin dezakegu:",
      "",
      "```python",
      "from math import sqrt, log",
      "",
      "print(sqrt(5))",
      "print(log(5,2))",
      "```",
      "",
      "Goian ikus dezakezunez, ez dugu `math` aurrizkia behar modu honetan inportatutako funtzioak erabiltzean.",
      "",
      "Batzuetan lasterbide erabilgarria da modulu baten eduki *guztia* izar notazioarekin inportatzea:",
      "",
      "```python",
      "from math import *",
      "",
      "print(sqrt(5))",
      "print(log(5,2))",
      "```",
      "",
      "Izar notazioarekin moduluak inportatzea erabilgarria izan daiteke probatzean eta proiektu txikiago batzuetan, baina arazo berri batzuk ere sor ditzake. Geroago topatuko ditugu hauek."
    ].join("\n")
  }
};

const exerciseHypotenuse = {
  type: "exercise",
  exerciseId: "part07-01_hypotenuse",
  title: {
    ENG: "Hypotenuse",
    CAS: "Hipotenusa",
    EUS: "Hipotenusa"
  },
  description: {
    ENG: "Please write a function named `hypotenuse(leg1: float, leg2: float)`, which takes the lengths of the two sides adjacent to the right angle of an orthogonal triangle. The function should return the length of the hypotenuse.",
    CAS: "Por favor escribe una función llamada `hypotenuse(leg1: float, leg2: float)`, que tome las longitudes de los dos lados adyacentes al ángulo recto de un triángulo rectángulo. La función debe devolver la longitud de la hipotenusa.",
    EUS: "Mesedez idatzi `hypotenuse(leg1: float, leg2: float)` izeneko funtzio bat, triangelu angeluzuzen baten angelu zuzenaren ondoko bi aldeen luzerak hartzen dituena. Funtzioak hipotenusaren luzera itzuli behar du."
  },
  initialCode: {
    ENG: [
      "import math",
      "",
      "def hypotenuse(leg1: float, leg2: float):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "import math",
      "",
      "def hypotenuse(cateto1: float, cateto2: float):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "import math",
      "",
      "def hypotenuse(kateto1: float, kateto2: float):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const moduleContents = {
  type: "markdown",
  content: {
    ENG: [
      "## The contents of a module",
      "",
      "The Python documentation has extensive resources on each module in the Python standard library. The documentation contains information on the functions and methods defined in the module, and how the module can be used. For example, here is the link to the documentation for the `math` module:",
      "",
      "* https://docs.python.org/3/library/math.html",
      "",
      "We can also have a look at the contents of the module with the function `dir`:",
      "",
      "```python",
      "import math",
      "",
      "print(dir(math))",
      "```",
      "",
      "The function returns a list of names defined by the module. These may be, for example, names of classes, constant values or functions."
    ].join("\n"),
    CAS: [
      "## El contenido de un módulo",
      "",
      "La documentación de Python tiene amplios recursos sobre cada módulo en la biblioteca estándar de Python. La documentación contiene información sobre las funciones y métodos definidos en el módulo, y cómo se puede utilizar el módulo. Por ejemplo, aquí está el enlace a la documentación del módulo `math`:",
      "",
      "* https://docs.python.org/3/library/math.html",
      "",
      "También podemos echar un vistazo al contenido del módulo con la función `dir`:",
      "",
      "```python",
      "import math",
      "",
      "print(dir(math))",
      "```",
      "",
      "La función devuelve una lista de nombres definidos por el módulo. Estos pueden ser, por ejemplo, nombres de clases, valores constantes o funciones."
    ].join("\n"),
    EUS: [
      "## Modulu baten edukia",
      "",
      "Python dokumentazioak baliabide zabalak ditu Python liburutegi estandarreko modulu bakoitzari buruz. Dokumentazioak moduluan definitutako funtzio eta metodoei buruzko informazioa du, eta modulua nola erabil daitekeen. Adibidez, hemen `math` modulurako dokumentaziorako esteka:",
      "",
      "* https://docs.python.org/3/library/math.html",
      "",
      "Moduluaren edukiari ere begiratu diezaiekegu `dir` funtzioarekin:",
      "",
      "```python",
      "import math",
      "",
      "print(dir(math))",
      "```",
      "",
      "Funtzioak moduluak definitutako izen zerrenda bat itzultzen du. Hauek izan daitezke, adibidez, klaseen izenak, balio konstanteak edo funtzioak."
    ].join("\n")
  }
};

const exerciseSpecialCharacters = {
  type: "exercise",
  exerciseId: "part07-02_special_characters",
  title: {
    ENG: "Special characters",
    CAS: "Caracteres especiales",
    EUS: "Karaktere bereziak"
  },
  description: {
    ENG: "The Python module `string` contains some string constants. Please write a function named `separate_characters(my_string: str)`. The function should separate the characters in the string into three other strings (ascii letters, punctuation, others) and return these in a tuple.",
    CAS: "El módulo `string` de Python contiene algunas constantes de cadena. Por favor escribe una función llamada `separate_characters(my_string: str)`. La función debe separar los caracteres en la cadena en otras tres cadenas (letras ascii, puntuación, otros) y devolverlas en una tupla.",
    EUS: "Python-eko `string` moduluak kate konstante batzuk ditu. Mesedez idatzi `separate_characters(my_string: str)` izeneko funtzio bat. Funtzioak kateko karaktereak beste hiru katetan bereizi behar ditu (ascii letrak, puntuazioa, besteak) eta hauek tupla batean itzuli."
  },
  initialCode: {
    ENG: [
      "import string",
      "",
      "def separate_characters(my_string: str):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "import string",
      "",
      "def separate_characters(mi_cadena: str):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "import string",
      "",
      "def separate_characters(nire_katea: str):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exerciseFractions = {
  type: "exercise",
  exerciseId: "part07-03_fractions",
  title: {
    ENG: "Fractions",
    CAS: "Fracciones",
    EUS: "Zatikiak"
  },
  description: {
    ENG: "Please familiarize yourself with the Python module `fractions`. Use it to write a function named `fractionate(amount: int)`. The function should divide the number 1 into as many equal sized fractions as is specified by the argument, and return these in a list.",
    CAS: "Por favor familiarízate con el módulo `fractions` de Python. Úsalo para escribir una función llamada `fractionate(amount: int)`. La función debe dividir el número 1 en tantas fracciones de igual tamaño como se especifique en el argumento, y devolverlas en una lista.",
    EUS: "Mesedez ezagutu Python-eko `fractions` modulua. Erabili ezazu `fractionate(amount: int)` izeneko funtzio bat idazteko. Funtzioak 1 zenbakia argumentuak zehazten duen beste zatiki berdinatan banatu behar du, eta hauek zerrenda batean itzuli."
  },
  initialCode: {
    ENG: [
      "import fractions",
      "",
      "def fractionate(amount: int):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "import fractions",
      "",
      "def fractionate(cantidad: int):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "import fractions",
      "",
      "def fractionate(kopurua: int):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const section1 = {
  id: "part7-1",
  title: {
    ENG: "Modules",
    CAS: "Módulos",
    EUS: "Moduluak"
  },
  blocks: [
    learningObjectives,
    debuggingContent,
    usingModulesContent,
    exerciseHypotenuse,
    moduleContents,
    exerciseSpecialCharacters,
    exerciseFractions
  ]
};

const outputPath = path.join(__dirname, '../src/data/part7/section1.json');
fs.writeFileSync(outputPath, JSON.stringify(section1, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
