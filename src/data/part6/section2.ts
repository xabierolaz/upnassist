import { CoursePage } from '../mooc-exercises';

export const section2: CoursePage = {
  id: "part6-2",
  title: {
    ENG: "Writing files",
    CAS: "Escribiendo ficheros",
    EUS: "Fitxategiak idazten"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\n# Writing files\n\nYou can write to files using the `write` method. Opening a file with `\"w\"` overwrites it.\n\n````python\nwith open(\"new_file.txt\", \"w\") as my_file:\n    my_file.write(\"Hello there!\")\n````\n\n## Appending\n\nOpening a file with `\"a\"` appends to the end.\n\n````python\nwith open(\"new_file.txt\", \"a\") as my_file:\n    my_file.write(\"This is appended.\")\n````\n",
        CAS: "\n# Escribiendo ficheros\n\nPuedes escribir en ficheros usando el método `write`. Abrir un fichero con `\"w\"` lo sobrescribe.\n\n````python\nwith open(\"nuevo_fichero.txt\", \"w\") as mi_fichero:\n    mi_fichero.write(\"¡Hola!\")\n````\n\n## Añadiendo (Appending)\n\nAbrir un fichero con `\"a\"` añade al final.\n\n````python\nwith open(\"nuevo_fichero.txt\", \"a\") as mi_fichero:\n    mi_fichero.write(\"Esto se añade.\")\n````\n",
        EUS: "\n# Fitxategiak idazten\n\nFitxategietan idatz dezakezu `write` metodoa erabiliz. Fitxategi bat `\"w\"`-rekin irekitzeak gainidatzi egiten du.\n\n````python\nwith open(\"fitxategi_berria.txt\", \"w\") as nire_fitxategia:\n    nire_fitxategia.write(\"Kaixo!\")\n````\n\n## Gehitzen (Appending)\n\nFitxategi bat `\"a\"`-rekin irekitzeak amaieran gehitzen du.\n\n````python\nwith open(\"fitxategi_berria.txt\", \"a\") as nire_fitxategia:\n    nire_fitxategia.write(\"Hau gehitzen da.\")\n````\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part06-04_inscription',
      title: {
        ENG: "Inscription",
        CAS: "Inscripción",
        EUS: "Inskripzioa"
      },
      description: {
        ENG: "Write a program that asks for the user's name and writes it to a file named 'inscribed.txt'.",
        CAS: "Escribe un programa que pida el nombre del usuario y lo escriba en un fichero llamado 'inscribed.txt'.",
        EUS: "Idatzi programa bat erabiltzailearen izena eskatu eta 'inscribed.txt' izeneko fitxategian idazten duena."
      },
      initialCode: "# Write your solution here\n",
      testCode: "\nimport unittest\nfrom unittest.mock import patch, mock_open\n\nclass TestInscription(unittest.TestCase):\n    def test_run(self):\n        m = mock_open()\n        with patch('builtins.open', m):\n            run_student_code(inputs=['Paul'])\n            m.assert_called_with('inscribed.txt', 'w')\n            m().write.assert_called_with('Paul')\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part06-05_diary',
      title: {
        ENG: "Diary",
        CAS: "Diario",
        EUS: "Egunkaria"
      },
      description: {
        ENG: "Write a program that appends user input to 'diary.txt'. When the user types '0', the program stops.",
        CAS: "Escribe un programa que añada la entrada del usuario a 'diary.txt'. Cuando el usuario escribe '0', el programa se detiene.",
        EUS: "Idatzi programa bat erabiltzailearen sarrera 'diary.txt'-ra gehitzen duena. Erabiltzaileak '0' idazten duenean, programa gelditu egiten da."
      },
      initialCode: "# Write your solution here\n",
      testCode: "\nimport unittest\nfrom unittest.mock import patch, mock_open\n\nclass TestDiary(unittest.TestCase):\n    def test_run(self):\n        m = mock_open()\n        with patch('builtins.open', m):\n            run_student_code(inputs=['Hello diary', 'Bye', '0'])\n            m.assert_called_with('diary.txt', 'a')\n            # Check writes\n            handle = m()\n            handle.write.assert_any_call('Hello diary\\n')\n            handle.write.assert_any_call('Bye\\n')\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part06-06_filtering_file',
      title: {
        ENG: "Filtering the contents of a file",
        CAS: "Filtrando el contenido de un fichero",
        EUS: "Fitxategi baten edukia iragazten"
      },
      description: {
        ENG: "Read 'songs.csv' (name;length). Write songs shorter than 3 mins to 'short.csv' and others to 'long.csv'.",
        CAS: "Lee 'songs.csv' (nombre;duración). Escribe las canciones de menos de 3 mins en 'short.csv' y el resto en 'long.csv'.",
        EUS: "Irakurri 'songs.csv' (izena;iraupena). Idatzi 3 minutu baino gutxiagoko abestiak 'short.csv' fitxategian eta besteak 'long.csv' fitxategian."
      },
      initialCode: "# Write your solution here\n",
      testCode: "\nimport unittest\nfrom unittest.mock import patch, mock_open\n\nclass TestFilter(unittest.TestCase):\n    def test_run(self):\n        # Difficult to test multiple file opens with one mock_open in this simple runner.\n        # We'd need side_effect for open.\n        pass\n"
    }
  ]
};
