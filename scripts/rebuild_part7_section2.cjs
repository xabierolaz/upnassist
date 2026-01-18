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
      "- You will be familiar with some of the functions in the module `random`",
      "- You will be able to make use of random numbers in your programs"
    ].join("\n"),
    CAS: [
      "# Objetivos de aprendizaje",
      "",
      "Después de esta sección",
      "",
      "- Estarás familiarizado con algunas de las funciones en el módulo `random`",
      "- Podrás hacer uso de números aleatorios en tus programas"
    ].join("\n"),
    EUS: [
      "# Ikas-helburuak",
      "",
      "Atal honen ondoren",
      "",
      "- `random` moduluko funtzio batzuk ezagutuko dituzu",
      "- Zure programetan ausazko zenbakiak erabiltzeko gai izango zara"
    ].join("\n")
  }
};

const introContent = {
  type: "markdown",
  content: {
    ENG: [
      "This section concentrates on the module `random` from the Python standard library. It contains tools for generating random numbers and other randomized functionality.",
      "",
      "## Generating a random number",
      "",
      "The function `randint(a, b)` returns a random integer value between `a` and `b`, inclusive. For example, the following program works like a generic die:",
      "",
      "```python",
      "from random import randint",
      "",
      "print(\"The result of the throw:\", randint(1, 6))",
      "```",
      "",
      "```text",
      "The result of the throw: 4",
      "```",
      "",
      "The following program throws the die ten times:",
      "",
      "```python",
      "from random import randint",
      "",
      "for i in range(10):",
      "    print(\"The result of the throw:\", randint(1, 6))",
      "```",
      "",
      "```text",
      "The result of the throw: 5",
      "The result of the throw: 4",
      "The result of the throw: 3",
      "The result of the throw: 2",
      "The result of the throw: 3",
      "The result of the throw: 4",
      "The result of the throw: 6",
      "The result of the throw: 4",
      "The result of the throw: 4",
      "The result of the throw: 3",
      "```",
      "",
      "NB: it is worth remembering that the function `randint` works a bit differently when compared to, for example, slices, or the function `range`, which we've come across previously. The function call `randint(1, 6)` results in a number between 1 and 6 inclusive, but the function call `range(1, 6)` results in a range of numbers from 1 to 5."
    ].join("\n"),
    CAS: [
      "Esta sección se concentra en el módulo `random` de la biblioteca estándar de Python. Contiene herramientas para generar números aleatorios y otras funcionalidades aleatorias.",
      "",
      "## Generando un número aleatorio",
      "",
      "La función `randint(a, b)` devuelve un valor entero aleatorio entre `a` y `b`, inclusive. Por ejemplo, el siguiente programa funciona como un dado genérico:",
      "",
      "```python",
      "from random import randint",
      "",
      "print(\"El resultado del lanzamiento:\", randint(1, 6))",
      "```",
      "",
      "```text",
      "El resultado del lanzamiento: 4",
      "```",
      "",
      "El siguiente programa lanza el dado diez veces:",
      "",
      "```python",
      "from random import randint",
      "",
      "for i in range(10):",
      "    print(\"El resultado del lanzamiento:\", randint(1, 6))",
      "```",
      "",
      "```text",
      "El resultado del lanzamiento: 5",
      "El resultado del lanzamiento: 4",
      "El resultado del lanzamiento: 3",
      "El resultado del lanzamiento: 2",
      "El resultado del lanzamiento: 3",
      "El resultado del lanzamiento: 4",
      "El resultado del lanzamiento: 6",
      "El resultado del lanzamiento: 4",
      "El resultado del lanzamiento: 4",
      "El resultado del lanzamiento: 3",
      "```",
      "",
      "Nota: vale la pena recordar que la función `randint` funciona un poco diferente en comparación con, por ejemplo, las rebanadas, o la función `range`, que hemos visto anteriormente. La llamada a la función `randint(1, 6)` resulta en un número entre 1 y 6 inclusive, pero la llamada a la función `range(1, 6)` resulta en un rango de números del 1 al 5."
    ].join("\n"),
    EUS: [
      "Atal honek Python liburutegi estandarreko `random` moduluan jartzen du arreta. Ausazko zenbakiak sortzeko eta ausazko beste funtzionalitate batzuk lortzeko tresnak ditu.",
      "",
      "## Ausazko zenbaki bat sortzen",
      "",
      "`randint(a, b)` funtzioak ausazko balio oso bat itzultzen du `a` eta `b` artean, biak barne. Adibidez, hurrengo programak dado generiko baten antzera funtzionatzen du:",
      "",
      "```python",
      "from random import randint",
      "",
      "print(\"Jaurtiketaren emaitza:\", randint(1, 6))",
      "```",
      "",
      "```text",
      "Jaurtiketaren emaitza: 4",
      "```",
      "",
      "Hurrengo programak hamar aldiz jaurtitzen du dadoa:",
      "",
      "```python",
      "from random import randint",
      "",
      "for i in range(10):",
      "    print(\"Jaurtiketaren emaitza:\", randint(1, 6))",
      "```",
      "",
      "```text",
      "Jaurtiketaren emaitza: 5",
      "Jaurtiketaren emaitza: 4",
      "Jaur tiketaren emaitza: 3",
      "Jaur tiketaren emaitza: 2",
      "Jaur tiketaren emaitza: 3",
      "Jaur tiketaren emaitza: 4",
      "Jaur tiketaren emaitza: 6",
      "Jaur tiketaren emaitza: 4",
      "Jaur tiketaren emaitza: 4",
      "Jaur tiketaren emaitza: 3",
      "```",
      "",
      "OHARRA: merezi du gogoratzea `randint` funtzioak apur bat desberdin funtzionatzen duela, adibidez, zatiekin edo `range` funtzioarekin alderatuta, aurretik ikusi ditugunak. `randint(1, 6)` funtzio deiak 1 eta 6 arteko zenbaki bat ematen du biak barne, baina `range(1, 6)` funtzio deiak 1etik 5era bitarteko zenbaki sorta bat ematen du."
    ].join("\n")
  }
};

const moreRandomContent = {
  type: "markdown",
  content: {
    ENG: [
      "## More randomizing functions",
      "",
      "The function `shuffle` will shuffle any data structure passed as an argument, in place. For example, the following program shuffles a list of words:",
      "",
      "```python",
      "from random import shuffle",
      "",
      "words = [\"atlas\", \"banana\", \"carrot\"]",
      "shuffle(words)",
      "print(words)",
      "```",
      "",
      "```text",
      "['banana', 'atlas', 'carrot']",
      "```",
      "",
      "The function `choice` returns a randomly picked item from a data structure:",
      "",
      "```python",
      "from random import choice",
      "",
      "words = [\"atlas\", \"banana\", \"carrot\"]",
      "print(choice(words))",
      "```",
      "",
      "```text",
      "'carrot'",
      "```"
    ].join("\n"),
    CAS: [
      "## Más funciones de aleatorización",
      "",
      "La función `shuffle` barajará cualquier estructura de datos pasada como argumento, en su lugar. Por ejemplo, el siguiente programa baraja una lista de palabras:",
      "",
      "```python",
      "from random import shuffle",
      "",
      "palabras = [\"atlas\", \"banana\", \"zanahoria\"]",
      "shuffle(palabras)",
      "print(palabras)",
      "```",
      "",
      "```text",
      "['banana', 'atlas', 'zanahoria']",
      "```",
      "",
      "La función `choice` devuelve un elemento elegido aleatoriamente de una estructura de datos:",
      "",
      "```python",
      "from random import choice",
      "",
      "palabras = [\"atlas\", \"banana\", \"zanahoria\"]",
      "print(choice(palabras))",
      "```",
      "",
      "```text",
      "'zanahoria'",
      "```"
    ].join("\n"),
    EUS: [
      "## Ausazkotze funtzio gehiago",
      "",
      "`shuffle` funtzioak argumentu gisa pasatako edozein datu-egitura nahastuko du, bere horretan. Adibidez, hurrengo programak hitz zerrenda bat nahasten du:",
      "",
      "```python",
      "from random import shuffle",
      "",
      "hitzak = [\"atlas\", \"banana\", \"azenarioa\"]",
      "shuffle(hitzak)",
      "print(hitzak)",
      "```",
      "",
      "```text",
      "['banana', 'atlas', 'azenarioa']",
      "```",
      "",
      "`choice` funtzioak datu-egitura batetik ausaz aukeratutako elementu bat itzultzen du:",
      "",
      "```python",
      "from random import choice",
      "",
      "hitzak = [\"atlas\", \"banana\", \"azenarioa\"]",
      "print(choice(hitzak))",
      "```",
      "",
      "```text",
      "'azenarioa'",
      "```"
    ].join("\n")
  }
};

const lotteryContent = {
  type: "markdown",
  content: {
    ENG: [
      "## Lottery numbers",
      "",
      "A common example for studying randomness is the case of lottery numbers. Let's try and draw some lottery numbers. In Finland the national lottery consists of a pool of 40 numbers, 7 of which are chosen for each week's draw.",
      "",
      "A first attempt at drawing a set of numbers could look like this:",
      "",
      "```python",
      "from random import randint",
      "",
      "for i in range(7):",
      "    print(randint(1, 40))",
      "```",
      "",
      "This would not work in the long run, however, as the same number may appear twice in a single weekly draw of seven numbers. We need a way to make sure the numbers drawn are all unique.",
      "",
      "One possibility is to store the drawn numbers in a list, and only add a number if it is not already on the list. This can be repeated until the length of the list is seven:",
      "",
      "```python",
      "from random import randint",
      "",
      "weekly_draw = []",
      "while len(weekly_draw) < 7:",
      "    new_rnd = randint(1, 40)",
      "    if new_rnd not in weekly_draw:",
      "        weekly_draw.append(new_rnd)",
      "",
      "print(weekly_draw)",
      "```",
      "",
      "A more compact approach would be to use the `shuffle` function:",
      "",
      "```python",
      "from random import shuffle",
      "",
      "number_pool = list(range(1, 41))",
      "shuffle(number_pool)",
      "weekly_draw = number_pool[0:7]",
      "print(weekly_draw)",
      "```",
      "",
      "Here the idea is that we first create a list containing the available numbers 1 to 40, rather like the balls in a lottery machine. The pool of numbers is then shuffled, and the first seven numbers chosen for the weekly draw. This saves us the trouble of writing a loop.",
      "",
      "In fact, the `random` module contains an even easier way to select lottery numbers: the `sample` function. It returns a random selection of a specified size from a given data structure:",
      "",
      "```python",
      "from random import sample",
      "",
      "number_pool = list(range(1, 41))",
      "weekly_draw = sample(number_pool, 7)",
      "print(weekly_draw)",
      "```"
    ].join("\n"),
    CAS: [
      "## Números de lotería",
      "",
      "Un ejemplo común para estudiar la aleatoriedad es el caso de los números de lotería. Intentemos sacar algunos números de lotería. En Finlandia, la lotería nacional consiste en un grupo de 40 números, 7 de los cuales se eligen para el sorteo de cada semana.",
      "",
      "Un primer intento de sacar un conjunto de números podría verse así:",
      "",
      "```python",
      "from random import randint",
      "",
      "for i in range(7):",
      "    print(randint(1, 40))",
      "```",
      "",
      "Sin embargo, esto no funcionaría a largo plazo, ya que el mismo número puede aparecer dos veces en un solo sorteo semanal de siete números. Necesitamos una forma de asegurarnos de que los números extraídos sean todos únicos.",
      "",
      "Una posibilidad es almacenar los números extraídos en una lista y solo agregar un número si aún no está en la lista. Esto se puede repetir hasta que la longitud de la lista sea siete:",
      "",
      "```python",
      "from random import randint",
      "",
      "sorteo_semanal = []",
      "while len(sorteo_semanal) < 7:",
      "    nuevo_aleatorio = randint(1, 40)",
      "    if nuevo_aleatorio not in sorteo_semanal:",
      "        sorteo_semanal.append(nuevo_aleatorio)",
      "",
      "print(sorteo_semanal)",
      "```",
      "",
      "Un enfoque más compacto sería usar la función `shuffle`:",
      "",
      "```python",
      "from random import shuffle",
      "",
      "grupo_numeros = list(range(1, 41))",
      "shuffle(grupo_numeros)",
      "sorteo_semanal = grupo_numeros[0:7]",
      "print(sorteo_semanal)",
      "```",
      "",
      "Aquí la idea es que primero creamos una lista que contiene los números disponibles del 1 al 40, algo así como las bolas en una máquina de lotería. Luego se baraja el grupo de números y se eligen los primeros siete números para el sorteo semanal. Esto nos ahorra la molestia de escribir un bucle.",
      "",
      "De hecho, el módulo `random` contiene una forma aún más fácil de seleccionar números de lotería: la función `sample`. Devuelve una selección aleatoria de un tamaño específico de una estructura de datos dada:",
      "",
      "```python",
      "from random import sample",
      "",
      "grupo_numeros = list(range(1, 41))",
      "sorteo_semanal = sample(grupo_numeros, 7)",
      "print(sorteo_semanal)",
      "```"
    ].join("\n"),
    EUS: [
      "## Loteria zenbakiak",
      "",
      "Ausazkotasuna aztertzeko adibide arrunt bat loteria zenbakien kasua da. Saia gaitezen loteria zenbaki batzuk ateratzen. Finlandian loteria nazionala 40 zenbakiko multzo batez osatuta dago, eta horietatik 7 aukeratzen dira asteko zozketarako.",
      "",
      "Zenbaki multzo bat ateratzeko lehen saiakera bat honelakoa izan liteke:",
      "",
      "```python",
      "from random import randint",
      "",
      "for i in range(7):",
      "    print(randint(1, 40))",
      "```",
      "",
      "Honek ez luke funtzionatuko epe luzera, ordea, zenbaki bera bi aldiz ager baitaiteke zazpi zenbakiko asteko zozketa batean. Ateratako zenbakiak bakarrak direla ziurtatzeko modu bat behar dugu.",
      "",
      "Aukera bat ateratako zenbakiak zerrenda batean gordetzea da, eta zerrendan ez badago bakarrik gehitzea zenbakia. Hau errepikatu daiteke zerrendaren luzera zazpi izan arte:",
      "",
      "```python",
      "from random import randint",
      "",
      "asteko_zozketa = []",
      "while len(asteko_zozketa) < 7:",
      "    berria = randint(1, 40)",
      "    if berria not in asteko_zozketa:",
      "        asteko_zozketa.append(berria)",
      "",
      "print(asteko_zozketa)",
      "```",
      "",
      "Ikuspegi trinkoago bat `shuffle` funtzioa erabiltzea litzateke:",
      "",
      "```python",
      "from random import shuffle",
      "",
      "zenbaki_multzoa = list(range(1, 41))",
      "shuffle(zenbaki_multzoa)",
      "asteko_zozketa = zenbaki_multzoa[0:7]",
      "print(asteko_zozketa)",
      "```",
      "",
      "Hemen ideia da lehenik 1etik 40rako zenbaki erabilgarriak dituen zerrenda bat sortzen dugula, loteria makina bateko bolen antzera. Zenbaki multzoa nahasten da gero, eta lehenengo zazpi zenbakiak aukeratzen dira asteko zozketarako. Honek begizta bat idazteko lana aurrezten digu.",
      "",
      "Izan ere, `random` moduluak loteria zenbakiak hautatzeko modu are errazagoa du: `sample` funtzioa. Emandako datu-egitura batetik zehaztutako tamainako ausazko hautaketa bat itzultzen du:",
      "",
      "```python",
      "from random import sample",
      "",
      "zenbaki_multzoa = list(range(1, 41))",
      "asteko_zozketa = sample(zenbaki_multzoa, 7)",
      "print(asteko_zozketa)",
      "```"
    ].join("\n")
  }
};

const exerciseLotteryNumbers = {
  type: "exercise",
  exerciseId: "part07-04_lottery_numbers",
  title: {
    ENG: "Lottery numbers",
    CAS: "Números de lotería",
    EUS: "Loteria zenbakiak"
  },
  description: {
    ENG: "Please write a function named `lottery_numbers(amount: int, lower: int, upper: int)`, which generates as many random numbers as specified by the first argument. All numbers should fall within the bounds `lower` to `upper`. The numbers should be stored in a list and returned. The numbers should be in ascending order in the returned list. As these are lottery numbers, no number should appear twice in the list.",
    CAS: "Por favor escribe una función llamada `lottery_numbers(amount: int, lower: int, upper: int)`, que genere tantos números aleatorios como especifique el primer argumento. Todos los números deben caer dentro de los límites `lower` a `upper`. Los números deben almacenarse en una lista y devolverse. Los números deben estar en orden ascendente en la lista devuelta. Como son números de lotería, ningún número debe aparecer dos veces en la lista.",
    EUS: "Mesedez idatzi `lottery_numbers(amount: int, lower: int, upper: int)` izeneko funtzio bat, lehenengo argumentuak zehazten duen adina ausazko zenbaki sortzen dituena. Zenbaki guztiek `lower` eta `upper` mugen barruan egon behar dute. Zenbakiak zerrenda batean gorde eta itzuli behar dira. Zenbakiak goranzko ordenan egon behar dira itzulitako zerrendan. Loteria zenbakiak direnez, zenbaki bat bera ere ez da bi aldiz agertu behar zerrendan."
  },
  initialCode: {
    ENG: [
      "from random import randint, sample",
      "",
      "def lottery_numbers(amount: int, lower: int, upper: int):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "from random import randint, sample",
      "",
      "def lottery_numbers(cantidad: int, inferior: int, superior: int):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "from random import randint, sample",
      "",
      "def lottery_numbers(kopurua: int, behekoa: int, goikoa: int):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exercisePasswordGen1 = {
  type: "exercise",
  exerciseId: "part07-05_password_generator_part_1",
  title: {
    ENG: "Password generator, part 1",
    CAS: "Generador de contraseñas, parte 1",
    EUS: "Pasahitz sortzailea, 1. zatia"
  },
  description: {
    ENG: "Please write a function which creates passwords of a desired length, consisting of lowercase characters a to z.",
    CAS: "Por favor escribe una función que cree contraseñas de una longitud deseada, que consistan en caracteres minúsculos de la a a la z.",
    EUS: "Mesedez idatzi nahi den luzerako pasahitzak sortzen dituen funtzio bat, a-tik z-rako karaktere minuskulaz osatuta."
  },
  initialCode: {
    ENG: [
      "import random",
      "import string",
      "",
      "def generate_password(length: int):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "import random",
      "import string",
      "",
      "def generate_password(longitud: int):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "import random",
      "import string",
      "",
      "def generate_password(luzera: int):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exercisePasswordGen2 = {
  type: "exercise",
  exerciseId: "part07-06_password_generator_part_2",
  title: {
    ENG: "Password generator, part 2",
    CAS: "Generador de contraseñas, parte 2",
    EUS: "Pasahitz sortzailea, 2. zatia"
  },
  description: {
    ENG: "Please write an improved version of your password generator. The function now takes three arguments: length, whether to include numbers, and whether to include special characters. The password should always contain at least one lowercase letter.",
    CAS: "Por favor escribe una versión mejorada de tu generador de contraseñas. La función ahora toma tres argumentos: longitud, si incluir números y si incluir caracteres especiales. La contraseña siempre debe contener al menos una letra minúscula.",
    EUS: "Mesedez idatzi zure pasahitz sortzailearen bertsio hobetua. Funtzioak orain hiru argumentu hartzen ditu: luzera, zenbakiak sartu ala ez, eta karaktere bereziak sartu ala ez. Pasahitzak beti eduki behar du gutxienez letra minuskula bat."
  },
  initialCode: {
    ENG: [
      "import random",
      "import string",
      "",
      "def generate_strong_password(length: int, use_numbers: bool, use_special: bool):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "import random",
      "import string",
      "",
      "def generate_strong_password(longitud: int, usar_numeros: bool, usar_especiales: bool):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "import random",
      "import string",
      "",
      "def generate_strong_password(luzera: int, zenbakiak_erabili: bool, bereziak_erabili: bool):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exerciseDiceRoller = {
  type: "exercise",
  exerciseId: "part07-07_dice_roller",
  title: {
    ENG: "Dice roller",
    CAS: "Lanzador de dados",
    EUS: "Dado jaurtitzailea"
  },
  description: {
    ENG: "In this exercise you will use non-transitive dice (A, B, C). Write a function `roll(die: str)` to roll a specific die, and `play(die1: str, die2: str, times: int)` to simulate a game between two dice.",
    CAS: "En este ejercicio usarás dados no transitivos (A, B, C). Escribe una función `roll(die: str)` para lanzar un dado específico, y `play(die1: str, die2: str, times: int)` para simular un juego entre dos dados.",
    EUS: "Ariketa honetan dado ez-trantsitiboak (A, B, C) erabiliko dituzu. Idatzi `roll(die: str)` funtzioa dado zehatz bat jaurtitzeko, eta `play(die1: str, die2: str, times: int)` bi dadoren arteko joko bat simulatzeko."
  },
  initialCode: {
    ENG: [
      "from random import choice",
      "",
      "def roll(die: str):",
      "    # Write your solution here",
      "    pass",
      "",
      "def play(die1: str, die2: str, times: int):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "from random import choice",
      "",
      "def roll(dado: str):",
      "    # Escribe tu solución aquí",
      "    pass",
      "",
      "def play(dado1: str, dado2: str, veces: int):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "from random import choice",
      "",
      "def roll(dadoa: str):",
      "    # Idatzi zure soluzioa hemen",
      "    pass",
      "",
      "def play(dadoa1: str, dadoa2: str, aldiz: int):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exerciseRandomWords = {
  type: "exercise",
  exerciseId: "part07-08_random_words",
  title: {
    ENG: "Random words",
    CAS: "Palabras aleatorias",
    EUS: "Ausazko hitzak"
  },
  description: {
    ENG: "Please write a function named `words(n: int, beginning: str)`, which returns a list containing `n` random words from `words.txt` that begin with the specified string. Raise `ValueError` if not enough words are found.",
    CAS: "Por favor escribe una función llamada `words(n: int, beginning: str)`, que devuelva una lista que contenga `n` palabras aleatorias de `words.txt` que comiencen con la cadena especificada. Lanza `ValueError` si no se encuentran suficientes palabras.",
    EUS: "Mesedez idatzi `words(n: int, beginning: str)` izeneko funtzio bat, `words.txt`-tik zehaztutako katearekin hasten diren `n` ausazko hitz dituen zerrenda bat itzultzen duena. Sortu `ValueError` ez bada nahikoa hitz aurkitzen."
  },
  initialCode: {
    ENG: [
      "import random",
      "",
      "def words(n: int, beginning: str):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "import random",
      "",
      "def words(n: int, comienzo: str):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "import random",
      "",
      "def words(n: int, hasiera: str):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const section2 = {
  id: "part7-2",
  title: {
    ENG: "Randomness",
    CAS: "Aleatoriedad",
    EUS: "Ausazkotasuna"
  },
  blocks: [
    learningObjectives,
    introContent,
    moreRandomContent,
    lotteryContent,
    exerciseLotteryNumbers,
    exercisePasswordGen1,
    exercisePasswordGen2,
    exerciseDiceRoller,
    exerciseRandomWords
  ]
};

const outputPath = path.join(__dirname, '../src/data/part7/section2.json');
fs.writeFileSync(outputPath, JSON.stringify(section2, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
