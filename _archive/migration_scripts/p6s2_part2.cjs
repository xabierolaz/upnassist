const exerciseStorePersonalData = {
  type: "exercise",
  exerciseId: "part06-13_store_personal_data",
  title: { ENG: "Store personal data", CAS: "Almacenar datos personales", EUS: "Datu pertsonalak gorde" },
  description: {
    ENG: "Write `store_personal_data(person)` to save tuple info to `people.csv`.",
    CAS: "Escribe `store_personal_data(person)` para guardar info de tupla en `people.csv`.",
    EUS: "Idatzi `store_personal_data(person)` tupla informazioa `people.csv`-n gordetzeko."
  },
  initialCode: { ENG: "def store_personal_data(p): pass", CAS: "def store_personal_data(p): pass", EUS: "def store_personal_data(p): pass" },
  testCode: ""
};

const exerciseCourseGrading4 = {
  type: "exercise",
  exerciseId: "part06-14_course_grading_part_4",
  title: { ENG: "Course grading 4", CAS: "Calificación 4", EUS: "Kalifikazioa 4" },
  description: {
    ENG: "Expand course grading program to generate result files.",
    CAS: "Expande el programa de calificación para generar archivos de resultados.",
    EUS: "Zabaldu kalifikazio programa emaitza fitxategiak sortzeko."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: ""
};

const exerciseWordSearch = {
  type: "exercise",
  exerciseId: "part06-15_word_search",
  title: { ENG: "Word search", CAS: "Búsqueda de palabras", EUS: "Hitz bilaketa" },
  description: {
    ENG: "Write `find_words(search_term)` to find words matching pattern.",
    CAS: "Escribe `find_words(search_term)` para encontrar palabras que coincidan con el patrón.",
    EUS: "Idatzi `find_words(search_term)` patroiarekin bat datozen hitzak aurkitzeko."
  },
  initialCode: { ENG: "def find_words(t): pass", CAS: "def find_words(t): pass", EUS: "def find_words(t): pass" },
  testCode: ""
};

const exerciseDictionaryFile = {
  type: "exercise",
  exerciseId: "part06-16_dictionary_file",
  title: { ENG: "Dictionary file", CAS: "Archivo de diccionario", EUS: "Hiztegi fitxategia" },
  description: {
    ENG: "Create a dictionary program that saves to `dictionary.txt`.",
    CAS: "Crea un programa de diccionario que guarde en `dictionary.txt`.",
    EUS: "Sortu `dictionary.txt`-n gordetzen duen hiztegi programa bat."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: ""
};

module.exports = { exerciseStorePersonalData, exerciseCourseGrading4, exerciseWordSearch, exerciseDictionaryFile };
