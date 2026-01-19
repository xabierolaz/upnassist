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
      "- You will know how to use a module to process CSV files",
      "- You will know how to use a module to process JSON files",
      "- You will be able to retrieve and read files from the internet"
    ].join("\n"),
    CAS: [
      "# Objetivos de aprendizaje",
      "",
      "Después de esta sección",
      "",
      "- Sabrás cómo usar un módulo para procesar archivos CSV",
      "- Sabrás cómo usar un módulo para procesar archivos JSON",
      "- Podrás recuperar y leer archivos de internet"
    ].join("\n"),
    EUS: [
      "# Ikas-helburuak",
      "",
      "Atal honen ondoren",
      "",
      "- Modulu bat CSV fitxategiak prozesatzeko nola erabili jakingo duzu",
      "- Modulu bat JSON fitxategiak prozesatzeko nola erabili jakingo duzu",
      "- Internetetik fitxategiak berreskuratu eta irakurtzeko gai izango zara"
    ].join("\n")
  }
};

const csvContent = {
  type: "markdown",
  content: {
    ENG: [
      "## Reading CSV files",
      "",
      "CSV is such a simple format that so far we have accessed the with hand-written code. There is, however, a ready-made module in the Python standard library for working with CSV files: `csv`. It works like this:",
      "",
      "```python",
      "import csv",
      "",
      "with open(\"test.csv\") as my_file:",
      "    for line in csv.reader(my_file, delimiter=\";\"):",
      "        print(line)",
      "```",
      "",
      "The above code reads all lines in the CSV file `test.csv`, separates the contents of each line into a list using the delimiter `;`, and prints each list.",
      "",
      "Since the CSV format is so simple, what's the use of having a separate module when we can just as well use the `split` function? Well, for one, the way the module is built, it will also work correctly if the values in the file are strings, which may also contain the delimiter character."
    ].join("\n"),
    CAS: [
      "## Leyendo archivos CSV",
      "",
      "CSV es un formato tan simple que hasta ahora hemos accedido a él con código escrito a mano. Sin embargo, hay un módulo listo para usar en la biblioteca estándar de Python para trabajar con archivos CSV: `csv`. Funciona así:",
      "",
      "```python",
      "import csv",
      "",
      "with open(\"test.csv\") as mi_archivo:",
      "    for linea in csv.reader(mi_archivo, delimiter=\";\"):",
      "        print(linea)",
      "```",
      "",
      "El código anterior lee todas las líneas en el archivo CSV `test.csv`, separa el contenido de cada línea en una lista usando el delimitador `;`, e imprime cada lista.",
      "",
      "Dado que el formato CSV es tan simple, ¿de qué sirve tener un módulo separado cuando podemos usar la función `split`? Bueno, por un lado, la forma en que está construido el módulo, también funcionará correctamente si los valores en el archivo son cadenas, que también pueden contener el carácter delimitador."
    ].join("\n"),
    EUS: [
      "## CSV fitxategiak irakurtzen",
      "",
      "CSV hain formatu sinplea denez, orain arte eskuz idatzitako kodearekin atzitu dugu. Hala ere, Python liburutegi estandarrean prest dagoen modulu bat dago CSV fitxategiekin lan egiteko: `csv`. Honela funtzionatzen du:",
      "",
      "```python",
      "import csv",
      "",
      "with open(\"test.csv\") as nire_fitxategia:",
      "    for lerroa in csv.reader(nire_fitxategia, delimiter=\";\"):",
      "        print(lerroa)",
      "```",
      "",
      "Goiko kodeak `test.csv` CSV fitxategiko lerro guztiak irakurtzen ditu, lerro bakoitzaren edukia zerrenda batean bereizten du `;` mugatzailea erabiliz, eta zerrenda bakoitza inprimatzen du.",
      "",
      "CSV formatua hain sinplea denez, zertarako balio du modulu bereizi bat izateak `split` funtzioa ere erabil dezakegunean? Bada, batetik, modulua eraikita dagoen moduagatik, fitxategiko balioak kateak badira ere ondo funtzionatuko du, nahiz eta kate horiek mugatzaile karakterea eduki."
    ].join("\n")
  }
};

const jsonContent = {
  type: "markdown",
  content: {
    ENG: [
      "## Reading JSON files",
      "",
      "CSV is just one of many machine-readable data formats. JSON is another, and it is used often when data has to be transferred between applications.",
      "",
      "JSON files are text files with a strict format, which is perhaps a little less accessible to the human eye than the CSV format. The structure of a JSON file might look quite familiar to you by now. The JSON file often looks exactly like a Python list containing dictionaries.",
      "",
      "The standard library has a module for working with JSON files: `json`. The function `loads` takes any argument passed in a JSON format and transforms it into a Python data structure. So, processing the `courses.json` file with the code below",
      "",
      "```python",
      "import json",
      "",
      "with open(\"courses.json\") as my_file:",
      "    data = my_file.read()",
      "",
      "courses = json.loads(data)",
      "print(courses)",
      "```",
      "",
      "would print out the Python list of dictionaries."
    ].join("\n"),
    CAS: [
      "## Leyendo archivos JSON",
      "",
      "CSV es solo uno de los muchos formatos de datos legibles por máquina. JSON es otro, y se usa a menudo cuando los datos tienen que transferirse entre aplicaciones.",
      "",
      "Los archivos JSON son archivos de texto con un formato estricto, que es quizás un poco menos accesible para el ojo humano que el formato CSV. La estructura de un archivo JSON puede parecerte bastante familiar ahora. El archivo JSON a menudo se ve exactamente como una lista de Python que contiene diccionarios.",
      "",
      "La biblioteca estándar tiene un módulo para trabajar con archivos JSON: `json`. La función `loads` toma cualquier argumento pasado en un formato JSON y lo transforma en una estructura de datos de Python. Entonces, procesar el archivo `courses.json` con el código a continuación",
      "",
      "```python",
      "import json",
      "",
      "with open(\"courses.json\") as mi_archivo:",
      "    datos = mi_archivo.read()",
      "",
      "cursos = json.loads(datos)",
      "print(cursos)",
      "```",
      "",
      "imprimiría la lista de diccionarios de Python."
    ].join("\n"),
    EUS: [
      "## JSON fitxategiak irakurtzen",
      "",
      "CSV makinek irakurtzeko moduko datu formatu askotako bat besterik ez da. JSON beste bat da, eta sarritan erabiltzen da datuak aplikazioen artean transferitu behar direnean.",
      "",
      "JSON fitxategiak formatu zorrotza duten testu fitxategiak dira, agian giza begiarentzat CSV formatua baino irisgarriagoa dena. JSON fitxategi baten egitura nahiko ezaguna egin dakizuke dagoeneko. JSON fitxategiak askotan hiztegiak dituen Python zerrenda baten itxura zehatza du.",
      "",
      "Liburutegi estandarrak JSON fitxategiekin lan egiteko modulu bat du: `json`. `loads` funtzioak JSON formatuan pasatako edozein argumentu hartzen du eta Python datu-egitura bihurtzen du. Beraz, `courses.json` fitxategia beheko kodearekin prozesatzeak",
      "",
      "```python",
      "import json",
      "",
      "with open(\"courses.json\") as nire_fitxategia:",
      "    datuak = nire_fitxategia.read()",
      "",
      "ikastaroak = json.loads(datuak)",
      "print(ikastaroak)",
      "```",
      "",
      "Python hiztegi zerrenda inprimatuko luke."
    ].join("\n")
  }
};

const exerciseJsonFiles = {
  type: "exercise",
  exerciseId: "part07-12_json_files",
  title: {
    ENG: "Handling JSON files",
    CAS: "Manejo de archivos JSON",
    EUS: "JSON fitxategiak kudeatzen"
  },
  description: {
    ENG: "Please write a function named `print_persons(filename: str)`, which reads a JSON file containing student information and prints the contents in a specific format.",
    CAS: "Por favor escribe una función llamada `print_persons(filename: str)`, que lea un archivo JSON que contiene información de estudiantes e imprima el contenido en un formato específico.",
    EUS: "Mesedez idatzi `print_persons(filename: str)` izeneko funtzio bat, ikasleen informazioa duen JSON fitxategi bat irakurtzen duena eta edukia formatu zehatz batean inprimatzen duena."
  },
  initialCode: {
    ENG: [
      "import json",
      "",
      "def print_persons(filename: str):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "import json",
      "",
      "def print_persons(filename: str):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "import json",
      "",
      "def print_persons(filename: str):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const internetContent = {
  type: "markdown",
  content: {
    ENG: [
      "## Retrieving a file from the internet",
      "",
      "The Python standard library also contains modules for dealing with online content, and one useful function is `urllib.request.urlopen`. It can be used to retrieve content from the internet, so it can be processed in your programs.",
      "",
      "The following code would print out the contents of the University of Helsinki front page:",
      "",
      "```python",
      "import urllib.request",
      "",
      "my_request = urllib.request.urlopen(\"https://helsinki.fi\")",
      "print(my_request.read())",
      "```",
      "",
      "In the following examples, however, we will work with machine-readable *data* from an online source. Much of the machine-readable data available online is in JSON format."
    ].join("\n"),
    CAS: [
      "## Recuperando un archivo de internet",
      "",
      "La biblioteca estándar de Python también contiene módulos para tratar con contenido en línea, y una función útil es `urllib.request.urlopen`. Se puede utilizar para recuperar contenido de internet, para que pueda ser procesado en tus programas.",
      "",
      "El siguiente código imprimiría el contenido de la portada de la Universidad de Helsinki:",
      "",
      "```python",
      "import urllib.request",
      "",
      "mi_peticion = urllib.request.urlopen(\"https://helsinki.fi\")",
      "print(mi_peticion.read())",
      "```",
      "",
      "En los siguientes ejemplos, sin embargo, trabajaremos con *datos* legibles por máquina de una fuente en línea. Gran parte de los datos legibles por máquina disponibles en línea están en formato JSON."
    ].join("\n"),
    EUS: [
      "## Fitxategi bat internetetik berreskuratzen",
      "",
      "Python liburutegi estandarrak lineako edukiarekin aritzeko moduluak ere baditu, eta funtzio erabilgarri bat `urllib.request.urlopen` da. Internetetik edukia berreskuratzeko erabil daiteke, zure programetan prozesatu ahal izateko.",
      "",
      "Hurrengo kodeak Helsinkiko Unibertsitateko azaleko orriaren edukia inprimatuko luke:",
      "",
      "```python",
      "import urllib.request",
      "",
      "nire_eskaera = urllib.request.urlopen(\"https://helsinki.fi\")",
      "print(nire_eskaera.read())",
      "```",
      "",
      "Hurrengo adibideetan, ordea, lineako iturri bateko makinek irakurtzeko moduko *datuekin* lan egingo dugu. Sarean eskuragarri dauden makinek irakurtzeko moduko datu asko JSON formatuan daude."
    ].join("\n")
  }
};

const exerciseCourseStatistics = {
  type: "exercise",
  exerciseId: "part07-13_course_statistics",
  title: {
    ENG: "Course statistics",
    CAS: "Estadísticas del curso",
    EUS: "Ikastaro estatistikak"
  },
  description: {
    ENG: "Please write a function named `retrieve_all()`, which retrieves the data of all active courses from `https://studies.cs.helsinki.fi/stats-mock/api/courses`. Also write `retrieve_course(course_name: str)` to get detailed stats for a specific course.",
    CAS: "Por favor escribe una función llamada `retrieve_all()`, que recupere los datos de todos los cursos activos de `https://studies.cs.helsinki.fi/stats-mock/api/courses`. También escribe `retrieve_course(course_name: str)` para obtener estadísticas detalladas de un curso específico.",
    EUS: "Mesedez idatzi `retrieve_all()` izeneko funtzio bat, ikastaro aktibo guztien datuak berreskuratzen dituena `https://studies.cs.helsinki.fi/stats-mock/api/courses` helbidetik. Idatzi `retrieve_course(course_name: str)` ere ikastaro zehatz baterako estatistika zehatzak lortzeko."
  },
  initialCode: {
    ENG: [
      "import urllib.request",
      "import json",
      "",
      "def retrieve_all():",
      "    # Write your solution here",
      "    pass",
      "",
      "def retrieve_course(course_name: str):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "import urllib.request",
      "import json",
      "",
      "def retrieve_all():",
      "    # Escribe tu solución aquí",
      "    pass",
      "",
      "def retrieve_course(nombre_curso: str):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "import urllib.request",
      "import json",
      "",
      "def retrieve_all():",
      "    # Idatzi zure soluzioa hemen",
      "    pass",
      "",
      "def retrieve_course(ikastaro_izena: str):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exerciseWhoCheated = {
  type: "exercise",
  exerciseId: "part07-14_who_cheated",
  title: {
    ENG: "Who cheated",
    CAS: "¿Quién hizo trampa?",
    EUS: "Nork egin zuen iruzur"
  },
  description: {
    ENG: "The files `start_times.csv` and `submissions.csv` contain exam data. Find students who spent over 3 hours on tasks. Write a function `cheaters()` that returns a list of their names.",
    CAS: "Los archivos `start_times.csv` y `submissions.csv` contienen datos de exámenes. Encuentra a los estudiantes que pasaron más de 3 horas en tareas. Escribe una función `cheaters()` que devuelva una lista de sus nombres.",
    EUS: "`start_times.csv` eta `submissions.csv` fitxategiek azterketa datuak dituzte. Aurkitu zereginetan 3 ordu baino gehiago eman zituzten ikasleak. Idatzi `cheaters()` funtzio bat haien izenen zerrenda itzultzen duena."
  },
  initialCode: {
    ENG: [
      "import csv",
      "from datetime import datetime, timedelta",
      "",
      "def cheaters():",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "import csv",
      "from datetime import datetime, timedelta",
      "",
      "def cheaters():",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "import csv",
      "from datetime import datetime, timedelta",
      "",
      "def cheaters():",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exerciseWhoCheated2 = {
  type: "exercise",
  exerciseId: "part07-15_who_cheated_2",
  title: {
    ENG: "Who cheated, version 2",
    CAS: "¿Quién hizo trampa?, versión 2",
    EUS: "Nork egin zuen iruzur, 2. bertsioa"
  },
  description: {
    ENG: "Please write a function named `final_points()`, which returns the final exam points received by the students in a dictionary. Ignore submissions made over 3 hours after start time. Only the highest score per task counts.",
    CAS: "Por favor escribe una función llamada `final_points()`, que devuelva los puntos finales del examen recibidos por los estudiantes en un diccionario. Ignora las entregas realizadas más de 3 horas después de la hora de inicio. Solo cuenta la puntuación más alta por tarea.",
    EUS: "Mesedez idatzi `final_points()` izeneko funtzio bat, ikasleek jasotako azken azterketa puntuak hiztegi batean itzultzen dituena. Ez ikusi egin hasiera ordutik 3 ordu baino gehiagora egindako bidalketei. Zeregin bakoitzeko puntuazio altuena bakarrik hartzen da kontuan."
  },
  initialCode: {
    ENG: [
      "import csv",
      "from datetime import datetime, timedelta",
      "",
      "def final_points():",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "import csv",
      "from datetime import datetime, timedelta",
      "",
      "def final_points():",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "import csv",
      "from datetime import datetime, timedelta",
      "",
      "def final_points():",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exerciseSpellchecker2 = {
  type: "exercise",
  exerciseId: "part07-16_spellchecker_2",
  title: {
    ENG: "Spell checker, version 2",
    CAS: "Corrector ortográfico, versión 2",
    EUS: "Ortografia-egiaztatzailea, 2. bertsioa"
  },
  description: {
    ENG: "Write an improved spell checker. For misspelled words, print a list of suggestions using `difflib.get_close_matches`.",
    CAS: "Escribe un corrector ortográfico mejorado. Para palabras mal escritas, imprime una lista de sugerencias usando `difflib.get_close_matches`.",
    EUS: "Idatzi ortografia-egiaztatzaile hobetua. Gaizki idatzitako hitzetarako, inprimatu iradokizun zerrenda bat `difflib.get_close_matches` erabiliz."
  },
  initialCode: {
    ENG: [
      "import difflib",
      "",
      "# Write your solution here"
    ].join("\n"),
    CAS: [
      "import difflib",
      "",
      "# Escribe tu solución aquí"
    ].join("\n"),
    EUS: [
      "import difflib",
      "",
      "# Idatzi zure soluzioa hemen"
    ].join("\n")
  },
  testCode: ""
};

const section4 = {
  id: "part7-4",
  title: {
    ENG: "Data processing",
    CAS: "Procesamiento de datos",
    EUS: "Datu prozesamendua"
  },
  blocks: [
    learningObjectives,
    csvContent,
    jsonContent,
    exerciseJsonFiles,
    internetContent,
    exerciseCourseStatistics,
    exerciseWhoCheated,
    exerciseWhoCheated2,
    exerciseSpellchecker2
  ]
};

const outputPath = path.join(__dirname, '../src/data/part7/section4.json');
fs.writeFileSync(outputPath, JSON.stringify(section4, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
