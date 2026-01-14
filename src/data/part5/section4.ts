import { CoursePage } from '../mooc-exercises';

export const section4: CoursePage = {
  id: "part5-4",
  title: {
    ENG: "Tuple",
    CAS: "Tupla",
    EUS: "Tupla"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\n# Tuple\n\nA tuple is an immutable list. It is defined using parentheses `()`.\n\n```python\npoint = (10, 20)\nprint(point[0]) # 10\n```\n\nTuples are useful when you want to ensure the data cannot be changed, or when you want to use a sequence as a dictionary key.\n\n## Returning multiple values\n\nFunctions can return multiple values using a tuple.\n\n```python\ndef minmax(my_list):\n    return min(my_list), max(my_list)\n\nminimum, maximum = minmax([1, 5, 2])\nprint(f\"Min: {minimum}, Max: {maximum}\")\n```\n",
        CAS: "\n# Tupla\n\nUna tupla es una lista inmutable. Se define usando paréntesis `()`.\n\n```python\npunto = (10, 20)\nprint(punto[0]) # 10\n```\n\nLas tuplas son útiles cuando quieres asegurarte de que los datos no cambien, o cuando quieres usar una secuencia como clave de un diccionario.\n\n## Retornando múltiples valores\n\nLas funciones pueden devolver múltiples valores usando una tupla.\n\n```python\ndef minmax(lista):\n    return min(lista), max(lista)\n\nminimo, maximo = minmax([1, 5, 2])\nprint(f\"Min: {minimo}, Max: {maximo}\")\n```\n",
        EUS: "\n# Tupla\n\nTupla bat zerrenda aldaezin bat da. Parentesiak `()` erabiliz definitzen da.\n\n```python\npuntua = (10, 20)\nprint(puntua[0]) # 10\n```\n\nTuplak erabilgarriak dira datuak aldatu ezin direla ziurtatu nahi duzunean, edo sekuentzia bat hiztegi-gako gisa erabili nahi duzunean.\n\n## Balio anitz itzultzen\n\nFuntzioek balio anitz itzul ditzakete tupla bat erabiliz.\n\n```python\ndef minmax(zerrenda):\n    return min(zerrenda), max(zerrenda)\n\nminimoa, maximoa = minmax([1, 5, 2])\nprint(f\"Min: {minimoa}, Max: {maximoa}\")\n```\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part05-20_create_tuple',
      title: {
        ENG: "Create a tuple",
        CAS: "Crear una tupla",
        EUS: "Tupla bat sortu"
      },
      description: {
        ENG: "Write a function named create_tuple(x, y, z), which takes three arguments and returns them as a tuple.",
        CAS: "Escribe una función llamada crear_tupla(x, y, z), que tome tres argumentos y los devuelva como una tupla.",
        EUS: "Idatzi tupla_sortu(x, y, z) izeneko funtzio bat, hiru argumentu hartu eta tupla gisa itzultzen dituena."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    print(create_tuple(1, \"two\", 3))",
      testCode: "\nimport unittest\nclass TestTuple(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        self.assertIn(\"(1, 'two', 3)\", out)\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part05-21_oldest_person',
      title: {
        ENG: "The oldest person",
        CAS: "La persona más vieja",
        EUS: "Pertsona zaharrena"
      },
      description: {
        ENG: "Write a function named oldest_person(people), which takes a list of tuples as an argument. Each tuple contains a name and a year of birth (e.g. (\"Arthur\", 1977)). The function should return the name of the oldest person.",
        CAS: "Escribe una función llamada persona_mas_vieja(personas), que tome una lista de tuplas. Cada tupla tiene nombre y año (ej. (\"Arthur\", 1977)). Devuelve el nombre del más viejo.",
        EUS: "Idatzi pertsona_zaharrena(pertsonak) izeneko funtzio bat. Tupla zerrenda bat hartzen du (izena, urtea). Pertsona zaharrenaren izena itzuli behar du."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    p = [(\"Arthur\", 1977), (\"Emily\", 2014)]\n    print(oldest_person(p))",
      testCode: "\nimport unittest\nclass TestOldest(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        # 1977 < 2014 so Arthur is older\n        self.assertIn(\"Arthur\", out)\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part05-22_older_people',
      title: {
        ENG: "Older people",
        CAS: "Personas mayores",
        EUS: "Pertsona zaharragoak"
      },
      description: {
        ENG: "Write a function named older_people(people, year), which takes a list of tuples and a year. It returns a list of names of people born before that year.",
        CAS: "Escribe una función llamada personas_mayores(personas, ano). Devuelve una lista de nombres de personas nacidas antes de ese año.",
        EUS: "Idatzi pertsona_zaharragoak(pertsonak, urtea). Urte hori baino lehen jaiotako pertsonen izenen zerrenda itzultzen du."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    p = [(\"Arthur\", 1977), (\"Emily\", 2014)]\n    print(older_people(p, 2000))",
      testCode: "\nimport unittest\nclass TestOlder(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        # Arthur 1977 < 2000\n        self.assertIn(\"Arthur\", out)\n        self.assertNotIn(\"Emily\", out)\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part05-23_student_database',
      title: {
        ENG: "Student database",
        CAS: "Base de datos de estudiantes",
        EUS: "Ikasleen datu-basea"
      },
      description: {
        ENG: "Write a program to manage a student database (a dictionary). Functions needed: add_student, print_student, add_course, summary. Courses are tuples (name, grade).",
        CAS: "Escribe un programa para gestionar una base de datos de estudiantes (diccionario). Funciones: agregar_estudiante, imprimir_estudiante, agregar_curso, resumen. Cursos son tuplas (nombre, nota).",
        EUS: "Idatzi ikasleen datu-base bat kudeatzeko programa (hiztegia). Beharrezko funtzioak: ikaslea_gehitu, ikaslea_inprimatu, ikastaroa_gehitu, laburpena. Ikastaroak tuplak dira (izena, nota)."
      },
      initialCode: "students = {}\ndef add_student(database, name):\n    # implementation\n    pass\n\ndef print_student(database, name):\n    # implementation\n    pass\n\ndef add_course(database, name, course):\n    # implementation\n    pass\n\ndef summary(database):\n    # implementation\n    pass\n\nif __name__ == \"__main__\":\n    add_student(students, \"Peter\")\n    add_course(students, \"Peter\", (\"Introduction to Programming\", 3))\n    print_student(students, \"Peter\")",
      testCode: "\nimport unittest\nclass TestDB(unittest.TestCase):\n    def test_run(self):\n        # We assume the user implements the logic.\n        # This is a complex exercise to test fully via stdout string matching without stricter structure.\n        # But we check for basic output.\n        out = run_student_code()\n        self.assertIn(\"Peter\", out)\n        self.assertIn(\"Introduction to Programming\", out)\n        self.assertIn(\"3\", out)\n"
    }
  ]
};
