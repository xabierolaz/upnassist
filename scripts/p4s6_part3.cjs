const exerciseNeighboursInList = {
  type: "exercise",
  exerciseId: "part04-37_neighbours_in_list",
  title: { ENG: "Neighbours in list", CAS: "Vecinos en una lista", EUS: "Auzokideak zerrenda batean" },
  description: {
    ENG: "Given a list of integers, let's decide that two consecutive items in the list are neighbours if their difference is 1. Please write a function named `longest_series_of_neighbours`, which looks for the longest series of neighbours within the list, and returns its length.",
    CAS: "Dada una lista de enteros, decidamos que dos elementos consecutivos en la lista son vecinos si su diferencia es 1. Por favor escribe una función llamada `longest_series_of_neighbours`, que busque la serie más larga de vecinos dentro de la lista, y devuelva su longitud.",
    EUS: "Osoko zenbakien zerrenda bat emanda, erabaki dezagun zerrendako ondoz ondoko bi elementu auzokideak direla haien aldea 1 bada. Mesedez idatzi `longest_series_of_neighbours` izeneko funtzio bat, zerrendan auzokideen serie luzeena bilatzen duena, eta bere luzera itzultzen duena."
  },
  initialCode: { ENG: "def longest_series_of_neighbours(my_list): pass", CAS: "def longest_series_of_neighbours(mi_lista): pass", EUS: "def longest_series_of_neighbours(nire_zerrenda): pass" },
  testCode: [
    "import unittest",
    "class TestNeighbours(unittest.TestCase):",
    "    def test_run(self):",
    "        self.assertEqual(longest_series_of_neighbours([1, 2, 5, 7, 6, 5, 6, 3, 4, 1, 0]), 4, 'Should be 4 for 5, 6, 5, 6 | Debería ser 4 para 5, 6, 5, 6 | 4 izan beharko litzateke 5, 6, 5, 6-rako')",
    "        self.assertEqual(longest_series_of_neighbours([1, 3, 5]), 1, 'Should be 1 if no neighbours | Debería ser 1 si no hay vecinos | 1 izan beharko litzateke auzokiderik ez badago')"
  ].join("\n")
};

const largeProjectContent = {
  type: "markdown",
  content: {
    ENG: "## Developing a larger programming project\n\nThis fourth part culminates in a slightly larger programming project...",
    CAS: "## Desarrollando un proyecto de programación más grande\n\nEsta cuarta parte culmina en un proyecto de programación ligeramente más grande...",
    EUS: "## Programazio proiektu handiago bat garatzen\n\nLaugarren zati hau programazio proiektu apur bat handiago batean amaitzen da..."
  }
};

const exerciseGradeStatistics = {
  type: "exercise",
  exerciseId: "part04-38_grade_statistics",
  title: { ENG: "Grade statistics", CAS: "Estadísticas de calificaciones", EUS: "Kalifikazio estatistikak" },
  description: {
    ENG: "In this exercise you will write a program for printing out grade statistics for a university course. The program asks the user for results from different students on the course. These include exam points and numbers of exercises completed.",
    CAS: "En este ejercicio escribirás un programa para imprimir estadísticas de calificaciones de un curso universitario. El programa pide al usuario los resultados de diferentes estudiantes en el curso. Estos incluyen puntos de examen y número de ejercicios completados.",
    EUS: "Ariketa honetan unibertsitateko ikastaro bateko kalifikazio estatistikak inprimatzeko programa bat idatziko duzu. Programak ikastaroko ikasle desberdinen emaitzak eskatzen dizkio erabiltzaileari."
  },
  initialCode: { ENG: "# Write your solution here", CAS: "# Escribe tu solución aquí", EUS: "# Idatzi zure soluzioa hemen" },
  testCode: [
    "import unittest",
    "from unittest.mock import patch",
    "class TestGradeStats(unittest.TestCase):",
    "    def test_run(self):",
    "        # Complex test simulated",
    "        pass"
  ].join("\n")
};

module.exports = { exerciseNeighboursInList, largeProjectContent, exerciseGradeStatistics };
