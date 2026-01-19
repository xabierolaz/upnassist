const learningObjectives = {
  type: "markdown",
  content: {
    ENG: "# Learning objectives\n\n- You will know how to use a module to process CSV files\n- You will know how to use a module to process JSON files\n- You will be able to retrieve and read files from the internet",
    CAS: "# Objetivos de aprendizaje\n\n- Sabrás cómo usar un módulo para procesar archivos CSV\n- Sabrás cómo usar un módulo para procesar archivos JSON\n- Podrás recuperar y leer archivos de internet",
    EUS: "# Ikas-helburuak\n\n- Modulu bat CSV fitxategiak prozesatzeko nola erabili jakingo duzu\n- Modulu bat JSON fitxategiak prozesatzeko nola erabili jakingo duzu\n- Internetetik fitxategiak berreskuratu eta irakurtzeko gai izango zara"
  }
};

const csvContent = {
  type: "markdown",
  content: {
    ENG: "## Reading CSV files\n\nCSV is such a simple format that so far we have accessed the with hand-written code...",
    CAS: "## Leyendo archivos CSV\n\nCSV es un formato tan simple que hasta ahora hemos accedido a él con código escrito a mano...",
    EUS: "## CSV fitxategiak irakurtzen\n\nCSV hain formatu sinplea denez, orain arte eskuz idatzitako kodearekin atzitu dugu..."
  }
};

const jsonContent = {
  type: "markdown",
  content: {
    ENG: "## Reading JSON files\n\nCSV is just one of many machine-readable data formats. JSON is another...",
    CAS: "## Leyendo archivos JSON\n\nCSV es solo uno de los muchos formatos de datos legibles por máquina. JSON es otro...",
    EUS: "## JSON fitxategiak irakurtzen\n\nCSV makinek irakurtzeko moduko datu formatu askotako bat besterik ez da. JSON beste bat da..."
  }
};

const exerciseJsonFiles = {
  type: "exercise",
  exerciseId: "part07-12_json_files",
  title: { ENG: "JSON files", CAS: "Archivos JSON", EUS: "JSON fitxategiak" },
  description: {
    ENG: "Write `print_persons(filename)` to read JSON and print content.",
    CAS: "Escribe `print_persons(filename)` para leer JSON e imprimir contenido.",
    EUS: "Idatzi `print_persons(filename)` JSON irakurtzeko eta edukia inprimatzeko."
  },
  initialCode: { ENG: "def print_persons(f): pass", CAS: "def print_persons(f): pass", EUS: "def print_persons(f): pass" },
  testCode: [
    "import unittest",
    "class TestJson(unittest.TestCase):",
    "    def test_run(self):",
    "        pass"
  ].join("\n")
};

const internetContent = {
  type: "markdown",
  content: {
    ENG: "## Retrieving a file from the internet\n\nThe Python standard library also contains modules for dealing with online content...",
    CAS: "## Recuperando un archivo de internet\n\nLa biblioteca estándar de Python también contiene módulos para tratar con contenido en línea...",
    EUS: "## Fitxategi bat internetetik berreskuratzen\n\nPython liburutegi estandarrak lineako edukiarekin aritzeko moduluak ere baditu..."
  }
};

const exerciseCourseStatistics = {
  type: "exercise",
  exerciseId: "part07-13_course_statistics",
  title: { ENG: "Course stats", CAS: "Estadísticas del curso", EUS: "Ikastaro estatistikak" },
  description: {
    ENG: "Fetch data from URL and process it.",
    CAS: "Obtén datos de URL y procésalos.",
    EUS: "Lortu datuak URLtik eta prozesatu."
  },
  initialCode: { ENG: "def retrieve_all(): pass", CAS: "def retrieve_all(): pass", EUS: "def retrieve_all(): pass" },
  testCode: [
    "import unittest",
    "class TestStats(unittest.TestCase):",
    "    def test_run(self):",
    "        pass"
  ].join("\n")
};

module.exports = { learningObjectives, csvContent, jsonContent, exerciseJsonFiles, internetContent, exerciseCourseStatistics };
