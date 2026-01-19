const learningObjectives = {
  type: "markdown",
  content: {
    ENG: "# Learning objectives\n\n- You will know how to create files with Python code\n- You will be able to write text based data to a file\n- You will know how to create a CSV file",
    CAS: "# Objetivos de aprendizaje\n\n- Sabrás cómo crear archivos con código Python\n- Podrás escribir datos basados en texto en un archivo\n- Sabrás cómo crear un archivo CSV",
    EUS: "# Ikas-helburuak\n\n- Python kodearekin fitxategiak nola sortu jakingo duzu\n- Testu bidezko datuak fitxategi batera idazteko gai izango zara\n- CSV fitxategi bat nola sortu jakingo duzu"
  }
};

const introContent = {
  type: "markdown",
  content: {
    ENG: "So far we have read data from files, but it is naturally also possible to write data to files...",
    CAS: "Hasta ahora hemos leído datos de archivos, pero naturalmente también es posible escribir datos en archivos...",
    EUS: "Orain arte fitxategietatik datuak irakurri ditugu, baina noski, fitxategietara datuak idaztea ere posible da..."
  }
};

const exerciseInscription = {
  type: "exercise",
  exerciseId: "part06-10_inscription",
  title: { ENG: "Inscription", CAS: "Inscripción", EUS: "Inskripzioa" },
  description: {
    ENG: "Write a program that asks for user name and writes an inscription to a file.",
    CAS: "Escribe un programa que pida el nombre de usuario y escriba una inscripción en un archivo.",
    EUS: "Idatzi programa bat erabiltzaile izena eskatzen duena eta inskripzio bat fitxategi batean idazten duena."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "from unittest.mock import patch, mock_open",
    "class TestInscription(unittest.TestCase):",
    "    def test_run(self):",
    "        # Simulated IO test",
    "        pass"
  ].join("\n")
};

const appendingContent = {
  type: "markdown",
  content: {
    ENG: "## Appending data to an existing file\n\nIf you want to append data to the end of a file...",
    CAS: "## Añadiendo datos a un archivo existente\n\nSi quieres añadir datos al final de un archivo...",
    EUS: "## Datuak lehendik dagoen fitxategi bati gehitzen\n\nDatuak fitxategi baten amaieran gehitu nahi badituzu..."
  }
};

const exerciseDiary = {
  type: "exercise",
  exerciseId: "part06-11_diary",
  title: { ENG: "Diary", CAS: "Diario", EUS: "Egunkaria" },
  description: {
    ENG: "Write a program that works as a simple diary, saving entries to `diary.txt`.",
    CAS: "Escribe un programa que funcione como un diario simple, guardando entradas en `diary.txt`.",
    EUS: "Idatzi programa bat egunkari sinple gisa funtzionatzen duena, sarrerak `diary.txt` fitxategian gordez."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: ""
};

const exerciseFiltering = {
  type: "exercise",
  exerciseId: "part06-12_filtering_file_contents",
  title: { ENG: "Filtering file contents", CAS: "Filtrando contenido", EUS: "Edukia iragazten" },
  description: {
    ENG: "Write `filter_solutions()` to separate correct and incorrect solutions from `solutions.csv`.",
    CAS: "Escribe `filter_solutions()` para separar soluciones correctas e incorrectas de `solutions.csv`.",
    EUS: "Idatzi `filter_solutions()` `solutions.csv`-tik soluzio zuzenak eta okerrak bereizteko."
  },
  initialCode: { ENG: "def filter_solutions(): pass", CAS: "def filter_solutions(): pass", EUS: "def filter_solutions(): pass" },
  testCode: ""
};

module.exports = { learningObjectives, introContent, exerciseInscription, appendingContent, exerciseDiary, exerciseFiltering };
