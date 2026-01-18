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
      "- You will know how to read the contents of files with Python",
      "- You will know what a text file and a CSV file are",
      "- You will be able to process the contents of a CSV file in your programs"
    ].join("\n"),
    CAS: [
      "# Objetivos de aprendizaje",
      "",
      "Después de esta sección",
      "",
      "- Sabrás cómo leer el contenido de archivos con Python",
      "- Sabrás qué son un archivo de texto y un archivo CSV",
      "- Podrás procesar el contenido de un archivo CSV en tus programas"
    ].join("\n"),
    EUS: [
      "# Ikas-helburuak",
      "",
      "Atal honen ondoren",
      "",
      "- Python-ekin fitxategien edukia nola irakurri jakingo duzu",
      "- Testu fitxategi bat eta CSV fitxategi bat zer diren jakingo duzu",
      "- Zure programetan CSV fitxategi baten edukia prozesatzeko gai izango zara"
    ].join("\n")
  }
};

const introContent = {
  type: "markdown",
  content: {
    ENG: [
      "A very common use case for programming is handling data stored in files. Programs can read data from files and write the computed results to files. Even large amounts of data become easy to process automatically when files are used.",
      "",
      "On this course we only deal with *text files*. All the files used will consist of lines of text. As an example, the Visual Studio Code editor we use on this course works with text files. NB: even though word processors such as Microsoft Word are usually used with files that contain text, Word documents themselves aren't text files. They also contain formatting information, and are encoded in a way that makes handling them in a program more complicated.",
      "",
      "## Reading data from a file",
      "",
      "Let's first work with a file called `example.txt`, with the following contents:",
      "",
      "```text",
      "Hello there!",
      "This example file contains three lines of text.",
      "This is the last line.",
      "```",
      "",
      "A simple way to include files in a Python program is to use the `with` statement. The header line opens the file, and the block where the file can be accessed follows. After the block the file is automatically closed, and can no longer be accessed.",
      "",
      "So, the following code opens the file, reads the contents, prints them out, and then closes the file:",
      "",
      "```python",
      "with open(\"example.txt\") as new_file:",
      "    contents = new_file.read()",
      "    print(contents)",
      "```",
      "",
      "```text",
      "Hello there!",
      "This example file contains three lines of text.",
      "This is the last line.",
      "```",
      "",
      "The variable `new_file` above is a *file handle*. Through it the file can accessed while it is still open. Here we used the method `read`, which returns the contents of the file as a single string.",
      "",
      "## Going through the contents of a file",
      "",
      "The `read` method is useful for printing out the contents of the entire file, but more often we will want to go through the file line by line.",
      "",
      "Text files can be thought of as lists of strings, each string representing a single line in the file. We can go through the list with a `for` loop.",
      "",
      "The following example reads our example file using a `for` loop, removes line breaks from the end of each line, counts the number of lines, and prints each line with its line number. It also keeps track of the length of the lines:",
      "",
      "```python",
      "with open(\"example.txt\") as new_file:",
      "    count = 0",
      "    total_length = 0",
      "",
      "    for line in new_file:",
      "        line = line.replace(\"\\n\", \"\")",
      "        count += 1",
      "        print(\"Line\", count, line)",
      "        length = len(line)",
      "        total_length += length",
      "",
      "print(\"Total length of lines:\", total_length)",
      "```",
      "",
      "```text",
      "Line 1 Hello there!",
      "Line 2 This example file contains three lines of text.",
      "Line 3 This is the last line.",
      "Total length of lines: 81",
      "```"
    ].join("\n"),
    CAS: [
      "Un caso de uso muy común para la programación es manejar datos almacenados en archivos. Los programas pueden leer datos de archivos y escribir los resultados calculados en archivos. Incluso grandes cantidades de datos se vuelven fáciles de procesar automáticamente cuando se usan archivos.",
      "",
      "En este curso solo tratamos con *archivos de texto*. Todos los archivos utilizados consistirán en líneas de texto. Como ejemplo, el editor Visual Studio Code que usamos en este curso funciona con archivos de texto. Nota: aunque los procesadores de texto como Microsoft Word se usan generalmente con archivos que contienen texto, los documentos de Word en sí no son archivos de texto. También contienen información de formato y están codificados de una manera que hace que manejarlos en un programa sea más complicado.",
      "",
      "## Leyendo datos de un archivo",
      "",
      "Primero trabajemos con un archivo llamado `ejemplo.txt`, con el siguiente contenido:",
      "",
      "```text",
      "¡Hola!",
      "Este archivo de ejemplo contiene tres líneas de texto.",
      "Esta es la última línea.",
      "```",
      "",
      "Una forma sencilla de incluir archivos en un programa Python es usar la declaración `with`. La línea de encabezado abre el archivo y sigue el bloque donde se puede acceder al archivo. Después del bloque, el archivo se cierra automáticamente y ya no se puede acceder a él.",
      "",
      "Entonces, el siguiente código abre el archivo, lee el contenido, lo imprime y luego cierra el archivo:",
      "",
      "```python",
      "with open(\"ejemplo.txt\") as nuevo_archivo:",
      "    contenido = nuevo_archivo.read()",
      "    print(contenido)",
      "```",
      "",
      "```text",
      "¡Hola!",
      "Este archivo de ejemplo contiene tres líneas de texto.",
      "Esta es la última línea.",
      "```",
      "",
      "La variable `nuevo_archivo` de arriba es un *identificador de archivo*. A través de él se puede acceder al archivo mientras todavía está abierto. Aquí usamos el método `read`, que devuelve el contenido del archivo como una sola cadena.",
      "",
      "## Recorriendo el contenido de un archivo",
      "",
      "El método `read` es útil para imprimir el contenido de todo el archivo, pero más a menudo querremos recorrer el archivo línea por línea.",
      "",
      "Los archivos de texto se pueden considerar como listas de cadenas, donde cada cadena representa una sola línea en el archivo. Podemos recorrer la lista con un bucle `for`.",
      "",
      "El siguiente ejemplo lee nuestro archivo de ejemplo usando un bucle `for`, elimina los saltos de línea del final de cada línea, cuenta el número de líneas e imprime cada línea con su número de línea. También realiza un seguimiento de la longitud de las líneas:",
      "",
      "```python",
      "with open(\"ejemplo.txt\") as nuevo_archivo:",
      "    cuenta = 0",
      "    longitud_total = 0",
      "",
      "    for linea in nuevo_archivo:",
      "        linea = linea.replace(\"\\n\", \"\")",
      "        cuenta += 1",
      "        print(\"Línea\", cuenta, linea)",
      "        longitud = len(linea)",
      "        longitud_total += longitud",
      "",
      "print(\"Longitud total de las líneas:\", longitud_total)",
      "```",
      "",
      "```text",
      "Línea 1 ¡Hola!",
      "Línea 2 Este archivo de ejemplo contiene tres líneas de texto.",
      "Línea 3 Esta es la última línea.",
      "Longitud total de las líneas: 81",
      "```"
    ].join("\n"),
    EUS: [
      "Programaziorako erabilera kasu oso ohiko bat fitxategietan gordetako datuak maneiatzea da. Programek fitxategietatik datuak irakur ditzakete eta kalkulatutako emaitzak fitxategietara idatzi. Datu kopuru handiak ere erraz prozesatzen dira automatikoki fitxategiak erabiltzen direnean.",
      "",
      "Ikastaro honetan *testu fitxategiekin* bakarrik ari gara. Erabilitako fitxategi guztiak testu lerroez osatuta egongo dira. Adibide gisa, ikastaro honetan erabiltzen dugun Visual Studio Code editoreak testu fitxategiekin lan egiten du. OHARRA: Microsoft Word bezalako testu prozesadoreak normalean testua duten fitxategiekin erabiltzen badira ere, Word dokumentuak beraiek ez dira testu fitxategiak. Formateatze informazioa ere badute, eta programa batean maneiatzea zailagoa egiten duen moduan kodetuta daude.",
      "",
      "## Datuak fitxategi batetik irakurtzen",
      "",
      "Lan egin dezagun lehenik `adibidea.txt` izeneko fitxategi batekin, eduki honekin:",
      "",
      "```text",
      "Kaixo hor!",
      "Adibide fitxategi honek hiru testu lerro ditu.",
      "Hau azken lerroa da.",
      "```",
      "",
      "Python programa batean fitxategiak sartzeko modu erraz bat `with` sententzia erabiltzea da. Goiburu lerroak fitxategia irekitzen du, eta fitxategia atzitu daitekeen blokea jarraitzen du. Blokearen ondoren fitxategia automatikoki ixten da, eta ezin da gehiago atzitu.",
      "",
      "Beraz, hurrengo kodeak fitxategia irekitzen du, edukia irakurtzen du, inprimatzen du, eta gero fitxategia ixten du:",
      "",
      "```python",
      "with open(\"adibidea.txt\") as fitxategi_berria:",
      "    edukia = fitxategi_berria.read()",
      "    print(edukia)",
      "```",
      "",
      "```text",
      "Kaixo hor!",
      "Adibide fitxategi honek hiru testu lerro ditu.",
      "Hau azken lerroa da.",
      "```",
      "",
      "Goiko `fitxategi_berria` aldagaia *fitxategi kudeatzaile* bat da. Haren bidez fitxategia atzitu daiteke oraindik irekita dagoen bitartean. Hemen `read` metodoa erabili dugu, fitxategiaren edukia kate bakar gisa itzultzen duena.",
      "",
      "## Fitxategi baten edukia zeharkatzen",
      "",
      "`read` metodoa erabilgarria da fitxategi osoaren edukia inprimatzeko, baina maizago fitxategia lerroz lerro zeharkatu nahiko dugu.",
      "",
      "Testu fitxategiak kate zerrenda gisa pentsa daitezke, kate bakoitzak fitxategiko lerro bakar bat adierazten duelarik. Zerrenda `for` begizta batekin zeharka dezakegu.",
      "",
      "Hurrengo adibideak gure adibide fitxategia irakurtzen du `for` begizta bat erabiliz, lerro bakoitzaren amaierako lerro-jauziak kentzen ditu, lerro kopurua zenbatzen du, eta lerro bakoitza bere lerro zenbakiarekin inprimatzen du. Lerroen luzeraren jarraipena ere egiten du:",
      "",
      "```python",
      "with open(\"adibidea.txt\") as fitxategi_berria:",
      "    kontagailua = 0",
      "    luzera_osoa = 0",
      "",
      "    for lerroa in fitxategi_berria:",
      "        lerroa = lerroa.replace(\"\\n\", \"\")",
      "        kontagailua += 1",
      "        print(\"Lerroa\", kontagailua, lerroa)",
      "        luzera = len(lerroa)",
      "        luzera_osoa += luzera",
      "",
      "print(\"Lerroen luzera osoa:\", luzera_osoa)",
      "```",
      "",
      "```text",
      "Lerroa 1 Kaixo hor!",
      "Lerroa 2 Adibide fitxategi honek hiru testu lerro ditu.",
      "Lerroa 3 Hau azken lerroa da.",
      "Lerroen luzera osoa: 81",
      "```"
    ].join("\n")
  }
};

const exerciseLargestNumber = {
  type: "exercise",
  exerciseId: "part06-01_largest_number",
  title: {
    ENG: "Largest number",
    CAS: "El número más grande",
    EUS: "Zenbaki handiena"
  },
  description: {
    ENG: "The file `numbers.txt` contains integer numbers, one number per line. Please write a function named `largest`, which reads the file and returns the largest number in the file.",
    CAS: "El archivo `numbers.txt` contiene números enteros, un número por línea. Por favor escribe una función llamada `largest`, que lea el archivo y devuelva el número más grande en el archivo.",
    EUS: "`numbers.txt` fitxategiak zenbaki osoak ditu, zenbaki bat lerro bakoitzean. Mesedez idatzi `largest` izeneko funtzio bat, fitxategia irakurri eta fitxategiko zenbaki handiena itzultzen duena."
  },
  initialCode: {
    ENG: [
      "def largest():",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "def largest():",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "def largest():",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const csvContent = {
  type: "markdown",
  content: {
    ENG: [
      "## Reading CSV files",
      "",
      "A CSV file, short for *comma-separated Values*, is a text file which contains data separated by a predetermined character. The most common characters used for this purpose are the comma `,` and the semicolon `;`, but any character is, in principle, possible.",
      "",
      "CSV files are commonly used to store records of different kinds. Many database and spreadsheet programs, such as Excel, can import and export data in CSV format, which makes data exchange between different systems easy.",
      "",
      "We already learnt we can go through the lines in a file with a `for` loop, but how can we separate the different fields on a single line? Python has a string method `split` for just this purpose. The method takes the separator character(s) as a string argument, and returns the contents of the target string as a list of strings, separated at the separator.",
      "",
      "An example of how the method works:",
      "",
      "```python",
      "text = \"monkey,banana,harpsichord\"",
      "words = text.split(\",\")",
      "for word in words:",
      "    print(word)",
      "```",
      "",
      "```text",
      "monkey",
      "banana",
      "harpsichord",
      "```"
    ].join("\n"),
    CAS: [
      "## Leyendo archivos CSV",
      "",
      "Un archivo CSV, abreviatura de *valores separados por comas* (Comma-Separated Values), es un archivo de texto que contiene datos separados por un carácter predeterminado. Los caracteres más comunes utilizados para este propósito son la coma `,` y el punto y coma `;`, pero cualquier carácter es, en principio, posible.",
      "",
      "Los archivos CSV se utilizan comúnmente para almacenar registros de diferentes tipos. Muchos programas de bases de datos y hojas de cálculo, como Excel, pueden importar y exportar datos en formato CSV, lo que facilita el intercambio de datos entre diferentes sistemas.",
      "",
      "Ya aprendimos que podemos recorrer las líneas en un archivo con un bucle `for`, pero ¿cómo podemos separar los diferentes campos en una sola línea? Python tiene un método de cadena `split` para este propósito. El método toma el carácter (o caracteres) separador como argumento de cadena y devuelve el contenido de la cadena de destino como una lista de cadenas, separadas en el separador.",
      "",
      "Un ejemplo de cómo funciona el método:",
      "",
      "```python",
      "texto = \"mono,banana,clave\"",
      "palabras = texto.split(\",\")",
      "for palabra in palabras:",
      "    print(palabra)",
      "```",
      "",
      "```text",
      "mono",
      "banana",
      "clave",
      "```"
    ].join("\n"),
    EUS: [
      "## CSV fitxategiak irakurtzen",
      "",
      "CSV fitxategi bat, *komaz bereizitako balioen* (Comma-Separated Values) laburdura, aurrez zehaztutako karaktere batez bereizitako datuak dituen testu fitxategi bat da. Helburu honetarako gehien erabiltzen diren karaktereak koma `,` eta puntu eta koma `;` dira, baina edozein karaktere da posible printzipioz.",
      "",
      "CSV fitxategiak mota desberdinetako erregistroak gordetzeko erabili ohi dira. Datu-base eta kalkulu-orri programa askok, Excel adibidez, datuak CSV formatuan inportatu eta esportatu ditzakete, eta horrek sistema desberdinen arteko datu-trukaketa errazten du.",
      "",
      "Jada ikasi dugu fitxategi bateko lerroak `for` begizta batekin zeharka ditzakegula, baina nola bereiz ditzakegu lerro bakarreko eremu desberdinak? Python-ek `split` kate metodoa du helburu horretarako. Metodoak karaktere bereizlea(k) hartzen du kate argumentu gisa, eta helburu katearen edukia kate zerrenda gisa itzultzen du, bereizlean banatuta.",
      "",
      "Metodoak nola funtzionatzen duen erakusten duen adibide bat:",
      "",
      "```python",
      "testua = \"tximinoa,banana,klabezina\"",
      "hitzak = testua.split(\",\")",
      "for hitza in hitzak:",
      "    print(hitza)",
      "```",
      "",
      "```text",
      "tximinoa",
      "banana",
      "klabezina",
      "```"
    ].join("\n")
  }
};

const exerciseFruitMarket = {
  type: "exercise",
  exerciseId: "part06-02_fruit_market",
  title: {
    ENG: "Fruit market",
    CAS: "Mercado de frutas",
    EUS: "Fruta merkatua"
  },
  description: {
    ENG: "The file `fruits.csv` contains names of fruits, and their prices. Please write a function named `read_fruits`, which reads the file and returns a dictionary based on the contents. In the dictionary, the name of the fruit should be the key, and the value should be its price. Prices should be of type `float`.",
    CAS: "El archivo `fruits.csv` contiene nombres de frutas y sus precios. Por favor escribe una función llamada `read_fruits`, que lea el archivo y devuelva un diccionario basado en el contenido. En el diccionario, el nombre de la fruta debe ser la clave, y el valor debe ser su precio. Los precios deben ser de tipo `float`.",
    EUS: "`fruits.csv` fitxategiak fruta izenak eta haien prezioak ditu. Mesedez idatzi `read_fruits` izeneko funtzio bat, fitxategia irakurri eta edukian oinarritutako hiztegi bat itzultzen duena. Hiztegian, fruta izena gakoa izan behar da, eta balioa bere prezioa. Prezioek `float` motakoak izan behar dute."
  },
  initialCode: {
    ENG: [
      "def read_fruits():",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "def read_fruits():",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "def read_fruits():",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exerciseMatrix = {
  type: "exercise",
  exerciseId: "part06-03_matrix",
  title: {
    ENG: "Matrix",
    CAS: "Matriz",
    EUS: "Matrizea"
  },
  description: {
    ENG: "The file `matrix.txt` contains a matrix. Please write two functions, named `matrix_sum` and `matrix_max`. Both go through the matrix in the file, and then return the sum of the elements or the element with the greatest value. Also write `row_sums`, which returns a list containing the sum of each row.",
    CAS: "El archivo `matrix.txt` contiene una matriz. Por favor escribe dos funciones, llamadas `matrix_sum` y `matrix_max`. Ambas recorren la matriz en el archivo y luego devuelven la suma de los elementos o el elemento con el valor más grande. También escribe `row_sums`, que devuelve una lista que contiene la suma de cada fila.",
    EUS: "`matrix.txt` fitxategiak matrize bat du. Mesedez idatzi bi funtzio, `matrix_sum` eta `matrix_max` izenekoak. Biek fitxategiko matrizea zeharkatzen dute, eta ondoren elementuen batura edo balio handiena duen elementua itzultzen dute. Idatzi `row_sums` ere, errenkada bakoitzaren batura duen zerrenda bat itzultzen duena."
  },
  initialCode: {
    ENG: [
      "def matrix_sum():",
      "    # Write your solution here",
      "    pass",
      "",
      "def matrix_max():",
      "    # Write your solution here",
      "    pass",
      "",
      "def row_sums():",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "def matrix_sum():",
      "    # Escribe tu solución aquí",
      "    pass",
      "",
      "def matrix_max():",
      "    # Escribe tu solución aquí",
      "    pass",
      "",
      "def row_sums():",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "def matrix_sum():",
      "    # Idatzi zure soluzioa hemen",
      "    pass",
      "",
      "def matrix_max():",
      "    # Idatzi zure soluzioa hemen",
      "    pass",
      "",
      "def row_sums():",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exerciseCourseGrading1 = {
  type: "exercise",
  exerciseId: "part06-04_course_grading_part_1",
  title: {
    ENG: "Course grading, part 1",
    CAS: "Calificación del curso, parte 1",
    EUS: "Ikastaroaren kalifikazioa, 1. zatia"
  },
  description: {
    ENG: "Write a program that reads student info from `students1.csv` and exercise data from `exercises1.csv`. It should print the total number of exercises completed by each student.",
    CAS: "Escribe un programa que lea la información del estudiante de `students1.csv` y los datos de ejercicios de `exercises1.csv`. Debe imprimir el número total de ejercicios completados por cada estudiante.",
    EUS: "Idatzi programa bat ikasleen informazioa `students1.csv`-tik eta ariketen datuak `exercises1.csv`-tik irakurtzen dituena. Ikasle bakoitzak osatutako ariketa kopuru osoa inprimatu behar du."
  },
  initialCode: {
    ENG: "# Write your solution here",
    CAS: "# Escribe tu solución aquí",
    EUS: "# Idatzi zure soluzioa hemen"
  },
  testCode: ""
};

const exerciseCourseGrading2 = {
  type: "exercise",
  exerciseId: "part06-05_course_grading_part_2",
  title: {
    ENG: "Course grading, part 2",
    CAS: "Calificación del curso, parte 2",
    EUS: "Ikastaroaren kalifikazioa, 2. zatia"
  },
  description: {
    ENG: "Expand the previous program to also read exam points from `exam_points1.csv`. Calculate and print the grade for each student based on exam points + exercise points.",
    CAS: "Expande el programa anterior para leer también los puntos de examen de `exam_points1.csv`. Calcula e imprime la calificación para cada estudiante basándose en los puntos de examen + puntos de ejercicios.",
    EUS: "Zabaldu aurreko programa `exam_points1.csv`-tik azterketa puntuak ere irakurtzeko. Kalkulatu eta inprimatu ikasle bakoitzaren nota azterketa puntuak + ariketa puntuak oinarritzat hartuta."
  },
  initialCode: {
    ENG: "# Write your solution here",
    CAS: "# Escribe tu solución aquí",
    EUS: "# Idatzi zure soluzioa hemen"
  },
  testCode: ""
};

const exerciseCourseGrading3 = {
  type: "exercise",
  exerciseId: "part06-06_course_grading_part_3",
  title: {
    ENG: "Course grading, part 3",
    CAS: "Calificación del curso, parte 3",
    EUS: "Ikastaroaren kalifikazioa, 3. zatia"
  },
  description: {
    ENG: "Continue from the previous exercise. Print detailed statistics for each student in tidy columns.",
    CAS: "Continúa desde el ejercicio anterior. Imprime estadísticas detalladas para cada estudiante en columnas ordenadas.",
    EUS: "Jarraitu aurreko ariketatik. Inprimatu ikasle bakoitzaren estatistika zehatzak zutabe txukunetan."
  },
  initialCode: {
    ENG: "# Write your solution here",
    CAS: "# Escribe tu solución aquí",
    EUS: "# Idatzi zure soluzioa hemen"
  },
  testCode: ""
};

const exerciseSpellChecker = {
  type: "exercise",
  exerciseId: "part06-07_spellchecker",
  title: {
    ENG: "Spell checker",
    CAS: "Corrector ortográfico",
    EUS: "Ortografia-egiaztatzailea"
  },
  description: {
    ENG: "Write a program that asks the user for text and highlights misspelled words with stars. Use the provided `wordlist.txt`.",
    CAS: "Escribe un programa que pida texto al usuario y resalte las palabras mal escritas con estrellas. Usa el `wordlist.txt` proporcionado.",
    EUS: "Idatzi programa bat erabiltzaileari testua eskatzen diona eta gaizki idatzitako hitzak izarrekin nabarmentzen dituena. Erabili emandako `wordlist.txt`."
  },
  initialCode: {
    ENG: "# Write your solution here",
    CAS: "# Escribe tu solución aquí",
    EUS: "# Idatzi zure soluzioa hemen"
  },
  testCode: ""
};

const exerciseRecipeSearch = {
  type: "exercise",
  exerciseId: "part06-08_recipe_search",
  title: {
    ENG: "Recipe search",
    CAS: "Búsqueda de recetas",
    EUS: "Errezeta bilaketa"
  },
  description: {
    ENG: "Create a program to search recipes from a file based on name, preparation time, or ingredients. Implement functions `search_by_name`, `search_by_time`, and `search_by_ingredient`.",
    CAS: "Crea un programa para buscar recetas de un archivo basado en nombre, tiempo de preparación o ingredientes. Implementa las funciones `search_by_name`, `search_by_time`, y `search_by_ingredient`.",
    EUS: "Sortu programa bat fitxategi bateko errezetak bilatzeko izenaren, prestaketa denboraren edo osagaien arabera. Inplementatu `search_by_name`, `search_by_time`, eta `search_by_ingredient` funtzioak."
  },
  initialCode: {
    ENG: [
      "def search_by_name(filename: str, word: str):",
      "    # Write your solution here",
      "    pass",
      "",
      "def search_by_time(filename: str, prep_time: int):",
      "    # Write your solution here",
      "    pass",
      "",
      "def search_by_ingredient(filename: str, ingredient: str):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "def search_by_name(filename: str, word: str):",
      "    # Escribe tu solución aquí",
      "    pass",
      "",
      "def search_by_time(filename: str, prep_time: int):",
      "    # Escribe tu solución aquí",
      "    pass",
      "",
      "def search_by_ingredient(filename: str, ingredient: str):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "def search_by_name(filename: str, word: str):",
      "    # Idatzi zure soluzioa hemen",
      "    pass",
      "",
      "def search_by_time(filename: str, prep_time: int):",
      "    # Idatzi zure soluzioa hemen",
      "    pass",
      "",
      "def search_by_ingredient(filename: str, ingredient: str):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exerciseCityBikes = {
  type: "exercise",
  exerciseId: "part06-09_city_bikes",
  title: {
    ENG: "City bikes",
    CAS: "Bicicletas de ciudad",
    EUS: "Hiriko bizikletak"
  },
  description: {
    ENG: "Write functions to process Helsinki city bike station data. Implement `get_station_data`, `distance`, and `greatest_distance`.",
    CAS: "Escribe funciones para procesar datos de estaciones de bicicletas de la ciudad de Helsinki. Implementa `get_station_data`, `distance`, y `greatest_distance`.",
    EUS: "Idatzi Helsinkiko hiriko bizikleta geltokien datuak prozesatzeko funtzioak. Inplementatu `get_station_data`, `distance`, eta `greatest_distance`."
  },
  initialCode: {
    ENG: [
      "def get_station_data(filename: str):",
      "    # Write your solution here",
      "    pass",
      "",
      "def distance(stations: dict, station1: str, station2: str):",
      "    # Write your solution here",
      "    pass",
      "",
      "def greatest_distance(stations: dict):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "def get_station_data(filename: str):",
      "    # Escribe tu solución aquí",
      "    pass",
      "",
      "def distance(stations: dict, station1: str, station2: str):",
      "    # Escribe tu solución aquí",
      "    pass",
      "",
      "def greatest_distance(stations: dict):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "def get_station_data(filename: str):",
      "    # Idatzi zure soluzioa hemen",
      "    pass",
      "",
      "def distance(stations: dict, station1: str, station2: str):",
      "    # Idatzi zure soluzioa hemen",
      "    pass",
      "",
      "def greatest_distance(stations: dict):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const section1 = {
  id: "part6-1",
  title: {
    ENG: "Reading files",
    CAS: "Leyendo archivos",
    EUS: "Fitxategiak irakurtzen"
  },
  blocks: [
    learningObjectives,
    introContent,
    exerciseLargestNumber,
    csvContent,
    exerciseFruitMarket,
    exerciseMatrix,
    exerciseCourseGrading1,
    exerciseCourseGrading2,
    exerciseCourseGrading3,
    exerciseSpellChecker,
    exerciseRecipeSearch,
    exerciseCityBikes
  ]
};

const outputPath = path.join(__dirname, '../src/data/part6/section1.json');
fs.writeFileSync(outputPath, JSON.stringify(section1, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
