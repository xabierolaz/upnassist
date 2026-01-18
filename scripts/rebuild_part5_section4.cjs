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
      "- You will be familiar with the tuple data type",
      "- You will be able to create tuples from various types of values",
      "- You will know the difference between a tuple and a list",
      "- You will be able to name some typical use cases for tuples"
    ].join("\n"),
    CAS: [
      "# Objetivos de aprendizaje",
      "",
      "Después de esta sección",
      "",
      "- Estarás familiarizado con el tipo de datos tupla",
      "- Podrás crear tuplas a partir de varios tipos de valores",
      "- Conocerás la diferencia entre una tupla y una lista",
      "- Podrás nombrar algunos casos de uso típicos para tuplas"
    ].join("\n"),
    EUS: [
      "# Ikas-helburuak",
      "",
      "Atal honen ondoren",
      "",
      "- Tupla datu-mota ezagutuko duzu",
      "- Hainbat balio motatatik tuplak sortzeko gai izango zara",
      "- Tupla baten eta zerrenda baten arteko aldea jakingo duzu",
      "- Tupletarako ohiko erabilera-kasu batzuk izendatzeko gai izango zara"
    ].join("\n")
  }
};

const introContent = {
  type: "markdown",
  content: {
    ENG: [
      "Tuple is a data structure which is, in many ways, similar to a list. The most important differences between the two are:",
      "",
      "* Tuples are enclosed in parentheses `()`, while lists are enclosed in square brackets `[]`",
      "* Tuples are *immutable*, while the contents of a list may change",
      "",
      "The following bit of code creates a tuple containing the coordinates of a point:",
      "",
      "```python",
      "point = (10, 20)",
      "```",
      "",
      "The items stored in a tuple are accessed by index, just like the items stored in a list:",
      "",
      "```python",
      "point = (10, 20)",
      "print(\"x coordinate:\", point[0])",
      "print(\"y coordinate:\", point[1])",
      "```",
      "",
      "```text",
      "x coordinate: 10",
      "y coordinate: 20",
      "```",
      "",
      "The values stored in a tuple cannot be changed after the tuple has been defined. The following will *not* work:",
      "",
      "```python",
      "point = (10, 20)",
      "point[0] = 15",
      "```",
      "",
      "```text",
      "TypeError: 'tuple' object does not support item assignment",
      "```"
    ].join("\n"),
    CAS: [
      "La tupla es una estructura de datos que es, en muchos aspectos, similar a una lista. Las diferencias más importantes entre las dos son:",
      "",
      "* Las tuplas están encerradas entre paréntesis `()`, mientras que las listas están encerradas entre corchetes `[]`",
      "* Las tuplas son *inmutables*, mientras que el contenido de una lista puede cambiar",
      "",
      "El siguiente fragmento de código crea una tupla que contiene las coordenadas de un punto:",
      "",
      "```python",
      "punto = (10, 20)",
      "```",
      "",
      "Se accede a los elementos almacenados en una tupla por índice, al igual que los elementos almacenados en una lista:",
      "",
      "```python",
      "punto = (10, 20)",
      "print(\"coordenada x:\", punto[0])",
      "print(\"coordenada y:\", punto[1])",
      "```",
      "",
      "```text",
      "coordenada x: 10",
      "coordenada y: 20",
      "```",
      "",
      "Los valores almacenados en una tupla no se pueden cambiar después de que se haya definido la tupla. Lo siguiente *no* funcionará:",
      "",
      "```python",
      "punto = (10, 20)",
      "punto[0] = 15",
      "```",
      "",
      "```text",
      "TypeError: 'tuple' object does not support item assignment",
      "```"
    ].join("\n"),
    EUS: [
      "Tupla datu-egitura bat da, modu askotan, zerrenda baten antzekoa. Bien arteko desberdintasun garrantzitsuenak hauek dira:",
      "",
      "* Tuplak parentesi artean `()` sartzen dira, eta zerrendak kortxete artean `[]`",
      "* Tuplak *aldaezinak* dira, eta zerrenda baten edukia alda daiteke",
      "",
      "Hurrengo kode zatiak puntu baten koordenatuak dituen tupla bat sortzen du:",
      "",
      "```python",
      "puntua = (10, 20)",
      "```",
      "",
      "Tupla batean gordetako elementuetara indize bidez sartzen da, zerrenda batean gordetako elementuetara bezala:",
      "",
      "```python",
      "puntua = (10, 20)",
      "print(\"x koordenatua:\", puntua[0])",
      "print(\"y koordenatua:\", puntua[1])",
      "```",
      "",
      "```text",
      "x koordenatua: 10",
      "y koordenatua: 20",
      "```",
      "",
      "Tupla batean gordetako balioak ezin dira aldatu tupla definitu ondoren. Hurrengoak *ez* du funtzionatuko:",
      "",
      "```python",
      "puntua = (10, 20)",
      "puntua[0] = 15",
      "```",
      "",
      "```text",
      "TypeError: 'tuple' object does not support item assignment",
      "```"
    ].join("\n")
  }
};

const exerciseCreateTuple = {
  type: "exercise",
  exerciseId: "part05-23_create_tuple",
  title: {
    ENG: "Create a tuple",
    CAS: "Crear una tupla",
    EUS: "Tupla bat sortu"
  },
  description: {
    ENG: "Please write a function named `create_tuple(x: int, y: int, z: int)`, which takes three integers as its arguments, and creates and returns a tuple based on the following criteria: The first element is the smallest of the arguments, the second is the greatest, and the third is the sum of the arguments.",
    CAS: "Por favor escribe una función llamada `create_tuple(x: int, y: int, z: int)`, que tome tres enteros como argumentos, y cree y devuelva una tupla basada en los siguientes criterios: El primer elemento es el más pequeño de los argumentos, el segundo es el más grande, y el tercero es la suma de los argumentos.",
    EUS: "Mesedez idatzi `create_tuple(x: int, y: int, z: int)` izeneko funtzio bat, hiru osoko zenbaki argumentu gisa hartzen dituena, eta tupla bat sortu eta itzultzen duena irizpide hauetan oinarrituta: Lehenengo elementua argumentuen txikiena da, bigarrena handiena, eta hirugarrena argumentuen batura."
  },
  initialCode: {
    ENG: [
      "def create_tuple(x: int, y: int, z: int):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "def create_tuple(x: int, y: int, z: int):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "def create_tuple(x: int, y: int, z: int):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exerciseOldestPerson = {
  type: "exercise",
  exerciseId: "part05-24_oldest_person",
  title: {
    ENG: "The oldest person",
    CAS: "La persona más mayor",
    EUS: "Pertsona zaharrena"
  },
  description: {
    ENG: "Please write a function named `oldest_person(people: list)`, which takes a list of tuples as its argument. In each tuple, the first element is the name of a person, and the second element is their year of birth. The function should find the oldest person on the list and return their name.",
    CAS: "Por favor escribe una función llamada `oldest_person(people: list)`, que tome una lista de tuplas como argumento. En cada tupla, el primer elemento es el nombre de una persona, y el segundo elemento es su año de nacimiento. La función debe encontrar a la persona más mayor en la lista y devolver su nombre.",
    EUS: "Mesedez idatzi `oldest_person(people: list)` izeneko funtzio bat, tupla zerrenda bat argumentu gisa hartzen duena. Tupla bakoitzean, lehenengo elementua pertsona baten izena da, eta bigarren elementua bere jaiotze-urtea. Funtzioak zerrendako pertsona zaharrena aurkitu eta bere izena itzuli behar du."
  },
  initialCode: {
    ENG: [
      "def oldest_person(people: list):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "def oldest_person(people: list):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "def oldest_person(people: list):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exerciseOlderPeople = {
  type: "exercise",
  exerciseId: "part05-25_older_people",
  title: {
    ENG: "Older people",
    CAS: "Personas mayores",
    EUS: "Pertsona zaharragoak"
  },
  description: {
    ENG: "Please write a function named `older_people(people: list, year: int)`, which selects all those people on the list who were born *before* the year given as an argument. The function should return the names of these people in a new list.",
    CAS: "Por favor escribe una función llamada `older_people(people: list, year: int)`, que seleccione a todas las personas en la lista que nacieron *antes* del año dado como argumento. La función debe devolver los nombres de estas personas en una nueva lista.",
    EUS: "Mesedez idatzi `older_people(people: list, year: int)` izeneko funtzio bat, argumentu gisa emandako urtea baino *lehen* jaiotako zerrendako pertsona guztiak hautatzen dituena. Funtzioak pertsona horien izenak zerrenda berri batean itzuli behar ditu."
  },
  initialCode: {
    ENG: [
      "def older_people(people: list, year: int):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "def older_people(people: list, year: int):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "def older_people(people: list, year: int):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const purposeContent = {
  type: "markdown",
  content: {
    ENG: [
      "## What is the purpose of a tuple?",
      "",
      "Tuples are ideal for when there is a set collection of values which are in some way connected. For example, when there is a need to handle the x and y coordinates of a point, a tuple is a natural choice, because coordinates will always consist of two values:",
      "",
      "```python",
      "point = (10, 20)",
      "```",
      "",
      "Technically it is of course possible to also use a list to store these:",
      "",
      "```python",
      "point = [10, 20]",
      "```",
      "",
      "A list is a collection of consecutive items in a certain order. The size of a list may also change. When we are storing the coordinates of a point, we want to store the x and y coordinates specifically, not an arbitrary list containing those values.",
      "",
      "Because tuples are immutable, unlike lists, they can be used as keys in a dictionary. The following bit of code creates a dictionary, where the keys are coordinate points:",
      "",
      "```python",
      "points = {}",
      "points[(3, 5)] = \"monkey\"",
      "points[(5, 0)] = \"banana\"",
      "points[(1, 2)] = \"harpsichord\"",
      "print(points[(3, 5)])",
      "```",
      "",
      "```text",
      "monkey",
      "```",
      "",
      "Attempting a similar dictionary definition using lists would *not* work:",
      "",
      "```python",
      "points = {}",
      "points[[3, 5]] = \"monkey\"",
      "points[[5, 0]] = \"banana\"",
      "points[[1, 2]] = \"harpsichord\"",
      "print(points[[3, 5]])",
      "```",
      "",
      "```text",
      "TypeError: unhashable type: 'list'",
      "```",
      "",
      "## Tuples without parentheses",
      "",
      "The parentheses are not strictly necessary when defining tuples. The following two variable assignments are identical in their results:",
      "",
      "```python",
      "numbers = (1, 2, 3)",
      "```",
      "",
      "```python",
      "numbers = 1, 2, 3",
      "```",
      "",
      "This means we can also easily return multiple values using tuples. Let's have a look at the following example:",
      "",
      "```python",
      "def minmax(my_list):",
      "  return min(my_list), max(my_list)",
      "",
      "my_list = [33, 5, 21, 7, 88, 312, 5]",
      "",
      "min_value, max_value = minmax(my_list)",
      "print(f\"The smallest item is {min_value} and the greatest item is {max_value}\")",
      "```",
      "",
      "```text",
      "The smallest item is 5 and the greatest item is 312",
      "```"
    ].join("\n"),
    CAS: [
      "## ¿Cuál es el propósito de una tupla?",
      "",
      "Las tuplas son ideales para cuando hay una colección fija de valores que están conectados de alguna manera. Por ejemplo, cuando es necesario manejar las coordenadas x e y de un punto, una tupla es una opción natural, porque las coordenadas siempre consistirán en dos valores:",
      "",
      "```python",
      "punto = (10, 20)",
      "```",
      "",
      "Técnicamente, por supuesto, también es posible usar una lista para almacenar estos:",
      "",
      "```python",
      "punto = [10, 20]",
      "```",
      "",
      "Una lista es una colección de elementos consecutivos en un cierto orden. El tamaño de una lista también puede cambiar. Cuando almacenamos las coordenadas de un punto, queremos almacenar las coordenadas x e y específicamente, no una lista arbitraria que contenga esos valores.",
      "",
      "Debido a que las tuplas son inmutables, a diferencia de las listas, se pueden usar como claves en un diccionario. El siguiente fragmento de código crea un diccionario, donde las claves son puntos de coordenadas:",
      "",
      "```python",
      "puntos = {}",
      "puntos[(3, 5)] = \"mono\"",
      "puntos[(5, 0)] = \"banana\"",
      "puntos[(1, 2)] = \"clave\"",
      "print(puntos[(3, 5)])",
      "```",
      "",
      "```text",
      "mono",
      "```",
      "",
      "Intentar una definición de diccionario similar usando listas *no* funcionaría:",
      "",
      "```python",
      "puntos = {}",
      "puntos[[3, 5]] = \"mono\"",
      "puntos[[5, 0]] = \"banana\"",
      "puntos[[1, 2]] = \"clave\"",
      "print(puntos[[3, 5]])",
      "```",
      "",
      "```text",
      "TypeError: unhashable type: 'list'",
      "```",
      "",
      "## Tuplas sin paréntesis",
      "",
      "Los paréntesis no son estrictamente necesarios al definir tuplas. Las siguientes dos asignaciones de variables son idénticas en sus resultados:",
      "",
      "```python",
      "numeros = (1, 2, 3)",
      "```",
      "",
      "```python",
      "numeros = 1, 2, 3",
      "```",
      "",
      "Esto significa que también podemos devolver fácilmente múltiples valores usando tuplas. Echemos un vistazo al siguiente ejemplo:",
      "",
      "```python",
      "def minmax(mi_lista):",
      "  return min(mi_lista), max(mi_lista)",
      "",
      "mi_lista = [33, 5, 21, 7, 88, 312, 5]",
      "",
      "valor_min, valor_max = minmax(mi_lista)",
      "print(f\"El elemento más pequeño es {valor_min} y el elemento más grande es {valor_max}\")",
      "```",
      "",
      "```text",
      "El elemento más pequeño es 5 y el elemento más grande es 312",
      "```"
    ].join("\n"),
    EUS: [
      "## Zein da tupla baten helburua?",
      "",
      "Tuplak idealak dira nolabait konektatuta dauden balio bilduma finko bat dagoenerako. Adibidez, puntu baten x eta y koordenatuak maneiatzeko beharra dagoenean, tupla bat aukera naturala da, koordenatuek beti bi balio izango baitituzte:",
      "",
      "```python",
      "puntua = (10, 20)",
      "```",
      "",
      "Teknikoki, noski, zerrenda bat ere erabil daiteke hauek gordetzeko:",
      "",
      "```python",
      "puntua = [10, 20]",
      "```",
      "",
      "Zerrenda bat ordena jakin bateko ondoz ondoko elementuen bilduma da. Zerrenda baten tamaina ere alda daiteke. Puntu baten koordenatuak gordetzen ari garenean, x eta y koordenatuak berariaz gorde nahi ditugu, ez balio horiek dituen ausazko zerrenda bat.",
      "",
      "Tuplak aldaezinak direnez, zerrendak ez bezala, hiztegi batean gako gisa erabil daitezke. Hurrengo kode zatiak hiztegi bat sortzen du, non gakoak koordenatu puntuak diren:",
      "",
      "```python",
      "puntuak = {}",
      "puntuak[(3, 5)] = \"tximinoa\"",
      "puntuak[(5, 0)] = \"banana\"",
      "puntuak[(1, 2)] = \"klabezina\"",
      "print(puntuak[(3, 5)])",
      "```",
      "",
      "```text",
      "tximinoa",
      "```",
      "",
      "Zerrendak erabiliz antzeko hiztegi definizio bat saiatzeak *ez* luke funtzionatuko:",
      "",
      "```python",
      "puntuak = {}",
      "puntuak[[3, 5]] = \"tximinoa\"",
      "puntuak[[5, 0]] = \"banana\"",
      "puntuak[[1, 2]] = \"klabezina\"",
      "print(puntuak[[3, 5]])",
      "```",
      "",
      "```text",
      "TypeError: unhashable type: 'list'",
      "```",
      "",
      "## Parentesirik gabeko tuplak",
      "",
      "Parentesiak ez dira guztiz beharrezkoak tuplak definitzean. Hurrengo bi aldagai esleipenak berdin-berdinak dira emaitzetan:",
      "",
      "```python",
      "zenbakiak = (1, 2, 3)",
      "```",
      "",
      "```python",
      "zenbakiak = 1, 2, 3",
      "```",
      "",
      "Honek esan nahi du balio anitz erraz itzul ditzakegula tuplak erabiliz. Ikus dezagun hurrengo adibidea:",
      "",
      "```python",
      "def minmax(nire_zerrenda):",
      "  return min(nire_zerrenda), max(nire_zerrenda)",
      "",
      "nire_zerrenda = [33, 5, 21, 7, 88, 312, 5]",
      "",
      "min_balioa, max_balioa = minmax(nire_zerrenda)",
      "print(f\"Elementurik txikiena {min_balioa} da eta handiena {max_balioa}\")",
      "```",
      "",
      "```text",
      "Elementurik txikiena 5 da eta handiena 312",
      "```"
    ].join("\n")
  }
};

const exerciseStudentDatabase = {
  type: "exercise",
  exerciseId: "part05-26_student_database",
  title: {
    ENG: "Student database",
    CAS: "Base de datos de estudiantes",
    EUS: "Ikasleen datu-basea"
  },
  description: {
    ENG: "In this series of exercises you will create a simple student database. You will write functions `add_student`, `print_student`, `add_course`, and `summary`. See the detailed instructions in the course material for how each function should behave, including handling completed courses and grades.",
    CAS: "En esta serie de ejercicios crearás una base de datos de estudiantes simple. Escribirás las funciones `add_student`, `print_student`, `add_course` y `summary`. Consulta las instrucciones detalladas en el material del curso sobre cómo debe comportarse cada función, incluido el manejo de cursos completados y calificaciones.",
    EUS: "Ariketa sorta honetan ikasleen datu-base sinple bat sortuko duzu. `add_student`, `print_student`, `add_course` eta `summary` funtzioak idatziko dituzu. Ikusi ikastaroko materialeko argibide zehatzak funtzio bakoitzak nola jokatu behar duen jakiteko, osatutako ikastaroak eta kalifikazioak kudeatzea barne."
  },
  initialCode: {
    ENG: [
      "def add_student(students: dict, name: str):",
      "    # Write your solution here",
      "    pass",
      "",
      "def print_student(students: dict, name: str):",
      "    # Write your solution here",
      "    pass",
      "",
      "def add_course(students: dict, name: str, course: tuple):",
      "    # Write your solution here",
      "    pass",
      "",
      "def summary(students: dict):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "def add_student(students: dict, name: str):",
      "    # Escribe tu solución aquí",
      "    pass",
      "",
      "def print_student(students: dict, name: str):",
      "    # Escribe tu solución aquí",
      "    pass",
      "",
      "def add_course(students: dict, name: str, course: tuple):",
      "    # Escribe tu solución aquí",
      "    pass",
      "",
      "def summary(students: dict):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "def add_student(students: dict, name: str):",
      "    # Idatzi zure soluzioa hemen",
      "    pass",
      "",
      "def print_student(students: dict, name: str):",
      "    # Idatzi zure soluzioa hemen",
      "    pass",
      "",
      "def add_course(students: dict, name: str, course: tuple):",
      "    # Idatzi zure soluzioa hemen",
      "    pass",
      "",
      "def summary(students: dict):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exerciseLetterSquare = {
  type: "exercise",
  exerciseId: "part05-27_letter_square",
  title: {
    ENG: "A square of letters",
    CAS: "Un cuadrado de letras",
    EUS: "Letra karratu bat"
  },
  description: {
    ENG: "Please write a program which prints out a square of letters as specified in the examples. The program asks for the number of layers. You may assume there will be at most 26 layers.",
    CAS: "Por favor escribe un programa que imprima un cuadrado de letras como se especifica en los ejemplos. El programa pide el número de capas. Puedes asumir que habrá como máximo 26 capas.",
    EUS: "Mesedez idatzi programa bat letra karratu bat inprimatzen duena adibideetan zehazten den bezala. Programak geruza kopurua eskatzen du. Suposa dezakezu gehienez 26 geruza egongo direla."
  },
  initialCode: {
    ENG: "# Write your solution here",
    CAS: "# Escribe tu solución aquí",
    EUS: "# Idatzi zure soluzioa hemen"
  },
  testCode: ""
};

const section4 = {
  id: "part5-4",
  title: {
    ENG: "Tuple",
    CAS: "Tupla",
    EUS: "Tupla"
  },
  blocks: [
    learningObjectives,
    introContent,
    exerciseCreateTuple,
    exerciseOldestPerson,
    exerciseOlderPeople,
    purposeContent,
    exerciseStudentDatabase,
    exerciseLetterSquare
  ]
};

const outputPath = path.join(__dirname, '../src/data/part5/section4.json');
fs.writeFileSync(outputPath, JSON.stringify(section4, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
