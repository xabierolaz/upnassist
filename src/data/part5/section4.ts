import { CoursePage } from '../mooc-exercises';

export const section4: CoursePage = {
  id: "part5-4",
  title: {
    ENG: `Tuple`,
    CAS: `Tupla`,
    EUS: `Tupla`
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `\n# Tuple\n\nA tuple is an immutable list. It is defined using parentheses \`()\`.\n\n\`\`\`python\npoint = (10, 20)\nprint(point[0]) # 10\n\`\`\`\n\nTuples are useful when you want to ensure the data cannot be changed, or when you want to use a sequence as a dictionary key.\n\n## Returning multiple values\n\nFunctions can return multiple values using a tuple.\n\n\`\`\`python\ndef minmax(my_list):\n    return min(my_list), max(my_list)\n\nminimum, maximum = minmax([1, 5, 2])\nprint(f\"Min: {minimum}, Max: {maximum}\")\n\`\`\`\n`,
        CAS: `\n# Tupla\n\nUna tupla es una lista inmutable. Se define usando paréntesis \`()\`. \n\n\`\`\`python\npunto = (10, 20)\nprint(punto[0]) # 10\n\`\`\`\n\nLas tuplas son útiles cuando quieres asegurarte de que los datos no cambien, o cuando quieres usar una secuencia como clave de un diccionario.\n\n## Retornando múltiples valores\n\nLas funciones pueden devolver múltiples valores usando una tupla.\n\n\`\`\`python\ndef minmax(lista):\n    return min(lista), max(lista)\n\nminimo, maximo = minmax([1, 5, 2])\nprint(f\"Min: {minimo}, Max: {maximo}\")\n\`\`\`\n`,
        EUS: `\n# Tupla\n\nTupla bat zerrenda aldaezin bat da. Parentesiak \`()\` erabiliz definitzen da.\n\n\`\`\`python\npuntua = (10, 20)\nprint(puntua[0]) # 10\n\`\`\`\n\nTuplak erabilgarriak dira datuak aldatu ezin direla ziurtatu nahi duzunean, edo sekuentzia bat hiztegi-gako gisa erabili nahi duzunean.\n\n## Balio anitz itzultzen\n\nFuntzioek balio anitz itzul ditzakete tupla bat erabiliz.\n\n\`\`\`python\ndef minmax(zerrenda):\n    return min(zerrenda), max(zerrenda)\n\nminimoa, maximoa = minmax([1, 5, 2])\nprint(f\"Min: {minimoa}, Max: {maximoa}\")\n\`\`\`\n`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part05-21_movie_database',
      title: {
        ENG: `Movie database`,
        CAS: `Base de datos de películas`,
        EUS: `Filmen datu-basea`
      },
      description: {
        ENG: `Write a function named add_movie(database: list, name: str, director: str, year: int, runtime: int), which adds a new movie object (dictionary) to the database list. The dictionary should have keys 'name', 'director', 'year' and 'runtime'.`,
        CAS: `Escribe una función llamada add_movie(database: list, name: str, director: str, year: int, runtime: int), que añada un nuevo objeto película (diccionario) a la lista de base de datos.`,
        EUS: `Idatzi add_movie(database: list, name: str, director: str, year: int, runtime: int) funtzioa, film objektu berri bat (hiztegia) gehitzen duena datu-baseko zerrendara.`
      },
      initialCode: `# Write your solution here\n`,
      testCode: `\nimport unittest\nclass TestMovieDB(unittest.TestCase):\n    def test_run(self):\n        # We need to inject the function call if not present\n        pass\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part05-22_find_movies',
      title: {
        ENG: `Find movies`,
        CAS: `Buscar películas`,
        EUS: `Filmak bilatu`
      },
      description: {
        ENG: `Write a function named find_movies(database: list, search_term: str), which returns a new list containing the movies whose name contains the search term (case insensitive).`,
        CAS: `Escribe una función llamada find_movies(database: list, search_term: str), que devuelva una nueva lista con las películas cuyo nombre contenga el término de búsqueda (sin distinguir mayúsculas).`,
        EUS: `Idatzi find_movies(database: list, search_term: str) funtzioa, bilaketa-terminoa izenean duten filmen zerrenda berria itzultzen duena (maiuskulak/minuskulak ez bereizi).`
      },
      initialCode: `# Write your solution here\n`,
      testCode: `\nimport unittest\nclass TestFindMovies(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part05-23_create_tuple',
      title: {
        ENG: `Create a tuple`,
        CAS: `Crear una tupla`,
        EUS: `Tupla bat sortu`
      },
      description: {
        ENG: `Write a function named create_tuple(x, y, z), which takes three arguments and returns them as a tuple.`,
        CAS: `Escribe una función llamada create_tuple(x, y, z), que tome tres argumentos y los devuelva como una tupla.`,
        EUS: `Idatzi create_tuple(x, y, z) izeneko funtzio bat, hiru argumentu hartu eta tupla gisa itzultzen dituena.`
      },
      initialCode: `# Write your solution here\nif __name__ == "__main__":\n    print(create_tuple(1, "two\`, 3))"
      testCode: `\nimport unittest\nclass TestTuple(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        # (1, 'two', 3)\n        if "(1, 'two', 3)" not in out and "(1, "two", 3)" not in out:\n             self.fail("Output should contain the tuple (1, 'two', 3).")\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part05-24_oldest_person',
      title: {
        ENG: `The oldest person`,
        CAS: `La persona más vieja`,
        EUS: `Pertsona zaharrena`
      },
      description: {
        ENG: `Write a function named oldest_person(people), which takes a list of tuples as an argument. Each tuple contains a name and a year of birth (e.g. (\"Arthur\`, 1977)). The function should return the name of the oldest person.",
        CAS: `Escribe una función llamada oldest_person(people), que tome una lista de tuplas. Cada tupla tiene nombre y año (ej. (\"Arthur\`, 1977)). Devuelve el nombre del más viejo.",
        EUS: `Idatzi oldest_person(people) izeneko funtzio bat. Tupla zerrenda bat hartzen du (izena, urtea). Pertsona zaharrenaren izena itzuli behar du.`
      },
      initialCode: `# Write your solution here\nif __name__ == "__main__":\n    p = [("Arthur", 1977), ("Emily\`, 2014)]\n    print(oldest_person(p))"
      testCode: `\nimport unittest\nclass TestOldest(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        # 1977 < 2014 so Arthur is older\n        if "Arthur" not in out:\n             self.fail("El más viejo es quien tiene el año de nacimiento MENOR. Aquí Arthur (1977) es más viejo que Emily (2014).")\n        self.assertIn("Arthur", out)\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part05-25_older_people',
      title: {
        ENG: `Older people`,
        CAS: `Personas mayores`,
        EUS: `Pertsona zaharragoak`
      },
      description: {
        ENG: `Write a function named older_people(people, year), which takes a list of tuples and a year. It returns a list of names of people born before that year.`,
        CAS: `Escribe una función llamada older_people(people, year). Devuelve una lista de nombres de personas nacidas antes de ese año.`,
        EUS: `Idatzi older_people(people, year). Urte hori baino lehen jaiotako pertsonen izenen zerrenda itzultzen du.`
      },
      initialCode: `# Write your solution here\nif __name__ == "__main__":\n    p = [("Arthur", 1977), ("Emily\`, 2014)]\n    print(older_people(p, 2000))"
      testCode: `\nimport unittest\nclass TestOlder(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        # Arthur 1977 < 2000\n        if "Arthur" not in out:\n             self.fail("Arthur should be in the list (1977 < 2000).")\n        if "Emily" in out:\n             self.fail("Emily should NOT be in the list (2014 > 2000).")\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part05-26_student_database',
      title: {
        ENG: `Student database`,
        CAS: `Base de datos de estudiantes`,
        EUS: `Ikasleen datu-basea`
      },
      description: {
        ENG: `Write a program to manage a student database (a dictionary). Functions needed: add_student, print_student, add_course, summary. Courses are tuples (name, grade).`,
        CAS: `Escribe un programa para gestionar una base de datos de estudiantes (diccionario). Funciones: add_student, print_student, add_course, summary. Cursos son tuplas (nombre, nota).`,
        EUS: `Idatzi ikasleen datu-base bat kudeatzeko programa (hiztegia). Beharrezko funtzioak: add_student, print_student, add_course, summary. Ikastaroak tuplak dira (izena, nota).`
      },
      initialCode: `students = {}\ndef add_student(database, name):\n    pass\n\ndef print_student(database, name):\n    pass\n\ndef add_course(database, name, course):\n    pass\n\ndef summary(database):\n    pass\n\nif __name__ == "__main__":\n    add_student(students, "Peter")\n    add_course(students, "Peter", ("Introduction to Programming\`, 3))\n    print_student(students, \"Peter\")"
      testCode: `\nimport unittest\nclass TestDB(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        # Peter:\n        #  1 completed courses:\n        #   Introduction to Programming 3\n        #  average grade 3.0\n        if "Peter" not in out: self.fail("Output missing student name 'Peter'")\n        if "Introduction to Programming 3" not in out: self.fail("Missing course info")\n        if "average grade 3.0" not in out: self.fail("Missing average grade calculation")\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part05-27_letter_square',
      title: {
        ENG: `Letter square`,
        CAS: `Cuadrado de letras`,
        EUS: `Letra karratua`
      },
      description: {
        ENG: `Write a program which asks the user for an integer \`layers\`. Then prints a square of letters. Layer 1 is 'A', layer 2 'B', etc.`,
        CAS: `Escribe un programa que pida un entero \`capas\`. Luego imprime un cuadrado de letras. Capa 1 es 'A', capa 2 'B', etc.`,
        EUS: `Idatzi \`geruzak\` zenbaki osoa eskatzen duen programa. Gero letra karratu bat inprimatzen du. 1. geruza 'A' da, 2. geruza 'B', etab.`
      },
      initialCode: `# Write your solution here\n`,
      testCode: `\nimport unittest\nclass TestLetterSquare(unittest.TestCase):\n    def test_run(self):\n        inputs = ["3"]\n        out = run_student_code(inputs=inputs)\n        # 3 layers -> C\n        # CCCCC\n        # CBBBC\n        # CBABC\n        # CBBBC\n        # CCCCC\n        if "CBABC" not in out:\n             self.fail("Middle layer for input 3 should contain 'CBABC'.")\n        if "CCCCC" not in out:\n             self.fail("Outer layer for input 3 should be 'CCCCC'.")\n`
    }
  ]
};