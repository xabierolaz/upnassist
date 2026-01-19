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
      "- You will know how to create files with Python code",
      "- You will be able to write text based data to a file",
      "- You will know how to create a CSV file"
    ].join("\n"),
    CAS: [
      "# Objetivos de aprendizaje",
      "",
      "Después de esta sección",
      "",
      "- Sabrás cómo crear archivos con código Python",
      "- Podrás escribir datos basados en texto en un archivo",
      "- Sabrás cómo crear un archivo CSV"
    ].join("\n"),
    EUS: [
      "# Ikas-helburuak",
      "",
      "Atal honen ondoren",
      "",
      "- Python kodearekin fitxategiak nola sortu jakingo duzu",
      "- Testu bidezko datuak fitxategi batera idazteko gai izango zara",
      "- CSV fitxategi bat nola sortu jakingo duzu"
    ].join("\n")
  }
};

const introContent = {
  type: "markdown",
  content: {
    ENG: [
      "So far we have read data from files, but it is naturally also possible to write data to files. Typically a program processes data and stores the results in a file, so they can be used later or processed further by some other program.",
      "",
      "We can create a new file every time we want to write data to a file, but we can also append new data to the end of an existing file. In both cases we use the `open` function from the previous section. For writing files the function requires a second argument.",
      "",
      "## Creating a new file",
      "",
      "If you want to create a new file, you would call the `open` function with the additional argument `\"w\"`, to signify that the file should be opened in write mode. So, the function call could look like this:",
      "",
      "```python",
      "with open(\"new_file.txt\", \"w\") as my_file:",
      "    # code to write something to the file",
      "```",
      "",
      "*NB: if the file already exists, all the contents will be overwritten*. It pays to be very careful when creating new files.",
      "",
      "With the file open you can write data to it. You can use the method `write`, which takes the string that is to be written as its argument.",
      "",
      "```python",
      "with open(\"new_file.txt\", \"w\") as my_file:",
      "    my_file.write(\"Hello there!\")",
      "```",
      "",
      "When you execute the program, a new file named `new_file.txt` appears in the directory. The contents would look like this:",
      "",
      "```text",
      "Hello there!",
      "```",
      "",
      "If you want line breaks in the file, you will have to add them by hand - the `write` function doesn't work exactly like the more familiar `print` function, though they are similar. So, the following program",
      "",
      "```python",
      "with open(\"new_file.txt\", \"w\") as my_file:",
      "    my_file.write(\"Hello there!\")",
      "    my_file.write(\"This is the second line\")",
      "    my_file.write(\"This is the last line\")",
      "```",
      "",
      "would result in a file with these contents:",
      "",
      "```text",
      "Hello there!This is the second lineThis is the last line",
      "```",
      "",
      "Line breaks are achieved by adding new line characters `\\n` to the argument strings:",
      "",
      "```python",
      "with open(\"new_file.txt\", \"w\") as my_file:",
      "    my_file.write(\"Hello there!\\n\")",
      "    my_file.write(\"This is the second line\\n\")",
      "    my_file.write(\"This is the last line\\n\")",
      "```",
      "",
      "Now the contents of `new_file.txt` would look like this:",
      "",
      "```text",
      "Hello there!",
      "This is the second line",
      "This is the last line",
      "```"
    ].join("\n"),
    CAS: [
      "Hasta ahora hemos leído datos de archivos, pero naturalmente también es posible escribir datos en archivos. Típicamente, un programa procesa datos y almacena los resultados en un archivo, para que puedan ser utilizados más tarde o procesados posteriormente por algún otro programa.",
      "",
      "Podemos crear un nuevo archivo cada vez que queramos escribir datos en un archivo, pero también podemos añadir nuevos datos al final de un archivo existente. En ambos casos usamos la función `open` de la sección anterior. Para escribir archivos, la función requiere un segundo argumento.",
      "",
      "## Creando un nuevo archivo",
      "",
      "Si quieres crear un nuevo archivo, llamarías a la función `open` con el argumento adicional `\"w\"`, para indicar que el archivo debe abrirse en modo de escritura. Entonces, la llamada a la función podría verse así:",
      "",
      "```python",
      "with open(\"nuevo_archivo.txt\", \"w\") as mi_archivo:",
      "    # código para escribir algo en el archivo",
      "```",
      "",
      "*Nota: si el archivo ya existe, todo el contenido se sobrescribirá*. Vale la pena ser muy cuidadoso al crear nuevos archivos.",
      "",
      "Con el archivo abierto puedes escribir datos en él. Puedes usar el método `write`, que toma la cadena que se va a escribir como argumento.",
      "",
      "```python",
      "with open(\"nuevo_archivo.txt\", \"w\") as mi_archivo:",
      "    mi_archivo.write(\"¡Hola!\")",
      "```",
      "",
      "Cuando ejecutas el programa, aparece un nuevo archivo llamado `nuevo_archivo.txt` en el directorio. El contenido se vería así:",
      "",
      "```text",
      "¡Hola!",
      "```",
      "",
      "Si quieres saltos de línea en el archivo, tendrás que añadirlos a mano: la función `write` no funciona exactamente como la función `print` más familiar, aunque son similares. Entonces, el siguiente programa",
      "",
      "```python",
      "with open(\"nuevo_archivo.txt\", \"w\") as mi_archivo:",
      "    mi_archivo.write(\"¡Hola!\")",
      "    mi_archivo.write(\"Esta es la segunda línea\")",
      "    mi_archivo.write(\"Esta es la última línea\")",
      "```",
      "",
      "resultaría en un archivo con este contenido:",
      "",
      "```text",
      "¡Hola!Esta es la segunda líneaEsta es la última línea",
      "```",
      "",
      "Los saltos de línea se logran añadiendo caracteres de nueva línea `\\n` a las cadenas de argumentos:",
      "",
      "```python",
      "with open(\"nuevo_archivo.txt\", \"w\") as mi_archivo:",
      "    mi_archivo.write(\"¡Hola!\\n\")",
      "    mi_archivo.write(\"Esta es la segunda línea\\n\")",
      "    mi_archivo.write(\"Esta es la última línea\\n\")",
      "```",
      "",
      "Ahora el contenido de `nuevo_archivo.txt` se vería así:",
      "",
      "```text",
      "¡Hola!",
      "Esta es la segunda línea",
      "Esta es la última línea",
      "```"
    ].join("\n"),
    EUS: [
      "Orain arte fitxategietatik datuak irakurri ditugu, baina noski, fitxategietara datuak idaztea ere posible da. Normalean programa batek datuak prozesatzen ditu eta emaitzak fitxategi batean gordetzen ditu, geroago erabili ahal izateko edo beste programa batek gehiago prozesatu ahal izateko.",
      "",
      "Fitxategi berri bat sor dezakegu fitxategi batera datuak idatzi nahi ditugun bakoitzean, baina datu berriak lehendik dagoen fitxategi baten amaieran ere gehi ditzakegu. Bi kasuetan aurreko ataleko `open` funtzioa erabiltzen dugu. Fitxategiak idazteko funtzioak bigarren argumentu bat behar du.",
      "",
      "## Fitxategi berri bat sortzen",
      "",
      "Fitxategi berri bat sortu nahi baduzu, `open` funtzioari `\"w\"` argumentu gehigarriarekin deituko zenioke, fitxategia idazketa moduan ireki behar dela adierazteko. Beraz, funtzio deia honelakoa izan liteke:",
      "",
      "```python",
      "with open(\"fitxategi_berria.txt\", \"w\") as nire_fitxategia:",
      "    # fitxategian zerbait idazteko kodea",
      "```",
      "",
      "*OHARRA: fitxategia lehendik existitzen bada, eduki guztia gainidatziko da*. Merezi du oso kontuz ibiltzea fitxategi berriak sortzean.",
      "",
      "Fitxategia irekita dagoela datuak idatz ditzakezu bertan. `write` metodoa erabil dezakezu, idatzi beharreko katea argumentu gisa hartzen duena.",
      "",
      "```python",
      "with open(\"fitxategi_berria.txt\", \"w\") as nire_fitxategia:",
      "    nire_fitxategia.write(\"Kaixo hor!\")",
      "```",
      "",
      "Programa exekutatzen duzunean, `fitxategi_berria.txt` izeneko fitxategi berri bat agertzen da direktorioan. Edukia honelakoa izango litzateke:",
      "",
      "```text",
      "Kaixo hor!",
      "```",
      "",
      "Fitxategian lerro-jauziak nahi badituzu, eskuz gehitu beharko dituzu - `write` funtzioak ez du zehazki `print` funtzio ezagunagoak bezala funtzionatzen, antzekoak badira ere. Beraz, hurrengo programak",
      "",
      "```python",
      "with open(\"fitxategi_berria.txt\", \"w\") as nire_fitxategia:",
      "    nire_fitxategia.write(\"Kaixo hor!\")",
      "    nire_fitxategia.write(\"Hau bigarren lerroa da\")",
      "    nire_fitxategia.write(\"Hau azken lerroa da\")",
      "```",
      "",
      "eduki hauek dituen fitxategi bat sortuko luke:",
      "",
      "```text",
      "Kaixo hor!Hau bigarren lerroa daHau azken lerroa da",
      "```",
      "",
      "Lerro-jauziak argumentu kateei `\\n` lerro berri karaktereak gehituz lortzen dira:",
      "",
      "```python",
      "with open(\"fitxategi_berria.txt\", \"w\") as nire_fitxategia:",
      "    nire_fitxategia.write(\"Kaixo hor!\\n\")",
      "    nire_fitxategia.write(\"Hau bigarren lerroa da\\n\")",
      "    nire_fitxategia.write(\"Hau azken lerroa da\\n\")",
      "```",
      "",
      "Orain `fitxategi_berria.txt`-ren edukia honelakoa izango litzateke:",
      "",
      "```text",
      "Kaixo hor!",
      "Hau bigarren lerroa da",
      "Hau azken lerroa da",
      "```"
    ].join("\n")
  }
};

const exerciseInscription = {
  type: "exercise",
  exerciseId: "part06-10_inscription",
  title: {
    ENG: "Inscription",
    CAS: "Inscripción",
    EUS: "Inskripzioa"
  },
  description: {
    ENG: "Please write a program which asks for the name of the user and then creates an \"inscription\" in a file specified by the user.",
    CAS: "Por favor escribe un programa que pida el nombre del usuario y luego cree una \"inscripción\" en un archivo especificado por el usuario.",
    EUS: "Mesedez idatzi programa bat erabiltzailearen izena eskatzen duena eta ondoren \"inskripzio\" bat sortzen duena erabiltzaileak zehaztutako fitxategi batean."
  },
  initialCode: {
    ENG: "# Write your solution here",
    CAS: "# Escribe tu solución aquí",
    EUS: "# Idatzi zure soluzioa hemen"
  },
  testCode: ""
};

const appendingContent = {
  type: "markdown",
  content: {
    ENG: [
      "## Appending data to an existing file",
      "",
      "If you want to append data to the end of a file, instead of overwriting the entire file, you should open the file in append mode with the argument `\"a\"`.",
      "",
      "If the file doesn't yet exist, append mode works exatly like write mode.",
      "",
      "The following program opens the file `new_file.txt` and appends a couple of lines of text to the end:",
      "",
      "```python",
      "with open(\"new_file.txt\", \"a\") as my_file:",
      "    my_file.write(\"This is the 4th line\\n\")",
      "    my_file.write(\"And yet another line.\\n\")",
      "```",
      "",
      "After this program is executed the contents of the file would look like this:",
      "",
      "```text",
      "Hello there!",
      "This is the second line",
      "This is the last line",
      "This is the 4th line",
      "And yet another line.",
      "```"
    ].join("\n"),
    CAS: [
      "## Añadiendo datos a un archivo existente",
      "",
      "Si quieres añadir datos al final de un archivo, en lugar de sobrescribir el archivo completo, debes abrir el archivo en modo de añadir (append) con el argumento `\"a\"`.",
      "",
      "Si el archivo aún no existe, el modo de añadir funciona exactamente como el modo de escritura.",
      "",
      "El siguiente programa abre el archivo `nuevo_archivo.txt` y añade un par de líneas de texto al final:",
      "",
      "```python",
      "with open(\"nuevo_archivo.txt\", \"a\") as mi_archivo:",
      "    mi_archivo.write(\"Esta es la 4ta línea\\n\")",
      "    mi_archivo.write(\"Y otra línea más.\\n\")",
      "```",
      "",
      "Después de que se ejecute este programa, el contenido del archivo se vería así:",
      "",
      "```text",
      "¡Hola!",
      "Esta es la segunda línea",
      "Esta es la última línea",
      "Esta es la 4ta línea",
      "Y otra línea más.",
      "```"
    ].join("\n"),
    EUS: [
      "## Datuak lehendik dagoen fitxategi bati gehitzen",
      "",
      "Datuak fitxategi baten amaieran gehitu nahi badituzu, fitxategi osoa gainidatzi beharrean, fitxategia gehitzeko moduan (append) ireki beharko zenuke `\"a\"` argumentuarekin.",
      "",
      "Fitxategia oraindik ez bada existitzen, gehitzeko moduak idazketa moduaren berdin funtzionatzen du.",
      "",
      "Hurrengo programak `fitxategi_berria.txt` fitxategia irekitzen du eta testu lerro pare bat gehitzen dizkio amaieran:",
      "",
      "```python",
      "with open(\"fitxategi_berria.txt\", \"a\") as nire_fitxategia:",
      "    nire_fitxategia.write(\"Hau 4. lerroa da\\n\")",
      "    nire_fitxategia.write(\"Eta beste lerro bat.\\n\")",
      "```",
      "",
      "Programa hau exekutatu ondoren fitxategiaren edukia honelakoa izango litzateke:",
      "",
      "```text",
      "Kaixo hor!",
      "Hau bigarren lerroa da",
      "Hau azken lerroa da",
      "Hau 4. lerroa da",
      "Eta beste lerro bat.",
      "```"
    ].join("\n")
  }
};

const exerciseDiary = {
  type: "exercise",
  exerciseId: "part06-11_diary",
  title: {
    ENG: "Diary",
    CAS: "Diario",
    EUS: "Egunkaria"
  },
  description: {
    ENG: "Please write a program which works as a simple diary. The diary entries should be saved in the file `diary.txt`. When the program is executed, it should first read any entries already in the file.",
    CAS: "Por favor escribe un programa que funcione como un diario simple. Las entradas del diario deben guardarse en el archivo `diary.txt`. Cuando se ejecute el programa, primero debe leer cualquier entrada que ya esté en el archivo.",
    EUS: "Mesedez idatzi egunkari sinple gisa funtzionatzen duen programa bat. Egunkariko sarrerak `diary.txt` fitxategian gorde behar dira. Programa exekutatzen denean, lehenik fitxategian dauden sarrerak irakurri behar ditu."
  },
  initialCode: {
    ENG: "# Write your solution here",
    CAS: "# Escribe tu solución aquí",
    EUS: "# Idatzi zure soluzioa hemen"
  },
  testCode: ""
};

const exerciseFiltering = {
  type: "exercise",
  exerciseId: "part06-12_filtering_file_contents",
  title: {
    ENG: "Filtering the contents of a file",
    CAS: "Filtrando el contenido de un archivo",
    EUS: "Fitxategi baten edukia iragazten"
  },
  description: {
    ENG: "The file `solutions.csv` contains math solutions. Write a function `filter_solutions()` that reads the file and separates correct and incorrect solutions into `correct.csv` and `incorrect.csv`.",
    CAS: "El archivo `solutions.csv` contiene soluciones matemáticas. Escribe una función `filter_solutions()` que lea el archivo y separe las soluciones correctas e incorrectas en `correct.csv` e `incorrect.csv`.",
    EUS: "`solutions.csv` fitxategiak matematika soluzioak ditu. Idatzi `filter_solutions()` funtzio bat, fitxategia irakurri eta soluzio zuzenak eta okerrak `correct.csv` eta `incorrect.csv` fitxategietan bereizten dituena."
  },
  initialCode: {
    ENG: [
      "def filter_solutions():",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "def filter_solutions():",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "def filter_solutions():",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exerciseStorePersonalData = {
  type: "exercise",
  exerciseId: "part06-13_store_personal_data",
  title: {
    ENG: "Store personal data",
    CAS: "Almacenar datos personales",
    EUS: "Datu pertsonalak gorde"
  },
  description: {
    ENG: "Please write a function named `store_personal_data(person: tuple)`, which takes a tuple containing some identifying information as its argument. This should be processed and written into the file `people.csv`.",
    CAS: "Por favor escribe una función llamada `store_personal_data(person: tuple)`, que tome una tupla con información de identificación como argumento. Esto debe procesarse y escribirse en el archivo `people.csv`.",
    EUS: "Mesedez idatzi `store_personal_data(person: tuple)` izeneko funtzio bat, identifikazio informazioa duen tupla bat argumentu gisa hartzen duena. Hau prozesatu eta `people.csv` fitxategian idatzi behar da."
  },
  initialCode: {
    ENG: [
      "def store_personal_data(person: tuple):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "def store_personal_data(person: tuple):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "def store_personal_data(person: tuple):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exerciseCourseGrading4 = {
  type: "exercise",
  exerciseId: "part06-14_course_grading_part_4",
  title: {
    ENG: "Course grading, part 4",
    CAS: "Calificación del curso, parte 4",
    EUS: "Ikastaroaren kalifikazioa, 4. zatia"
  },
  description: {
    ENG: "Expand the course grading program. It should now also read course info from a file and generate `results.txt` and `results.csv` files with the output.",
    CAS: "Expande el programa de calificación del curso. Ahora también debe leer la información del curso de un archivo y generar archivos `results.txt` y `results.csv` con la salida.",
    EUS: "Zabaldu ikastaroa kalifikatzeko programa. Orain ikastaroaren informazioa ere fitxategi batetik irakurri behar du eta `results.txt` eta `results.csv` fitxategiak sortu emaitzarekin."
  },
  initialCode: {
    ENG: "# Write your solution here",
    CAS: "# Escribe tu solución aquí",
    EUS: "# Idatzi zure soluzioa hemen"
  },
  testCode: ""
};

const exerciseWordSearch = {
  type: "exercise",
  exerciseId: "part06-15_word_search",
  title: {
    ENG: "Word search",
    CAS: "Búsqueda de palabras",
    EUS: "Hitz bilaketa"
  },
  description: {
    ENG: "Please write a function named `find_words(search_term: str)`. It should return a list containing all the words in `words.txt` which match the search term. The search term can contain wildcards `.` and `*`.",
    CAS: "Por favor escribe una función llamada `find_words(search_term: str)`. Debe devolver una lista que contenga todas las palabras en `words.txt` que coincidan con el término de búsqueda. El término de búsqueda puede contener comodines `.` y `*`.",
    EUS: "Mesedez idatzi `find_words(search_term: str)` izeneko funtzio bat. `words.txt`-ko bilaketa-terminoarekin bat datozen hitz guztiak dituen zerrenda bat itzuli behar du. Bilaketa-terminoak `.` eta `*` komodin-karaktereak izan ditzake."
  },
  initialCode: {
    ENG: [
      "def find_words(search_term: str):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "def find_words(search_term: str):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "def find_words(search_term: str):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exerciseDictionaryFile = {
  type: "exercise",
  exerciseId: "part06-16_dictionary_file",
  title: {
    ENG: "Dictionary stored in a file",
    CAS: "Diccionario almacenado en un archivo",
    EUS: "Fitxategi batean gordetako hiztegia"
  },
  description: {
    ENG: "Please write a program which functions as a dictionary. The dictionary entries should be written to a file called `dictionary.txt`. The user can add words or search for them.",
    CAS: "Por favor escribe un programa que funcione como un diccionario. Las entradas del diccionario deben escribirse en un archivo llamado `dictionary.txt`. El usuario puede agregar palabras o buscarlas.",
    EUS: "Mesedez idatzi hiztegi gisa funtzionatzen duen programa bat. Hiztegiko sarrerak `dictionary.txt` izeneko fitxategian idatzi behar dira. Erabiltzaileak hitzak gehitu edo bilatu ditzake."
  },
  initialCode: {
    ENG: "# Write your solution here",
    CAS: "# Escribe tu solución aquí",
    EUS: "# Idatzi zure soluzioa hemen"
  },
  testCode: ""
};

const section2 = {
  id: "part6-2",
  title: {
    ENG: "Writing files",
    CAS: "Escribiendo archivos",
    EUS: "Fitxategiak idazten"
  },
  blocks: [
    learningObjectives,
    introContent,
    exerciseInscription,
    appendingContent,
    exerciseDiary,
    exerciseFiltering,
    exerciseStorePersonalData,
    exerciseCourseGrading4,
    exerciseWordSearch,
    exerciseDictionaryFile
  ]
};

const outputPath = path.join(__dirname, '../src/data/part6/section2.json');
fs.writeFileSync(outputPath, JSON.stringify(section2, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);