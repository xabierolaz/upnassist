import { CoursePage } from '../mooc-exercises';

export const section4: CoursePage = {
  id: "part12-4",
  title: {
    ENG: `Functional programming`,
    CAS: `Programación funcional`,
    EUS: `Programazio funtzionala`
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `\n# Functional programming\n\n## map\n\nThe \`map\` function applies a function to all items in an iterable.\n\n\`\`\`python\ndef double(n):\n    return n * 2\n\nnumbers = [1, 2, 3]\ndoubled = map(double, numbers)\nprint(list(doubled)) # [2, 4, 6]\n\`\`\`\n\n## filter\n\nThe \`filter\` function constructs an iterator from elements of an iterable for which a function returns true.\n\n\`\`\`python\ndef is_even(n):\n    return n % 2 == 0\n\nnumbers = [1, 2, 3, 4]\nevens = filter(is_even, numbers)\nprint(list(evens)) # [2, 4]\n\`\`\`\n\n## reduce\n\nThe \`reduce\` function performs a rolling computation to sequential pairs of values in a list.\n\n\`\`\`python\nfrom functools import reduce\n\ndef add(x, y):\n    return x + y\n\nnumbers = [1, 2, 3, 4]\nsum = reduce(add, numbers)\nprint(sum) # 10\n\`\`\`\n`,
        CAS: `\n# Programación funcional\n\n## map\n\nLa función \`map\` aplica una función a todos los elementos de un iterable.\n\n\`\`\`python\ndef doblar(n):\n    return n * 2\n\nnumeros = [1, 2, 3]\ndobles = map(doblar, numeros)\nprint(list(dobles)) # [2, 4, 6]\n\`\`\`\n\n## filter\n\nLa función \`filter\` construye un iterador a partir de los elementos de un iterable para los cuales una función devuelve true.\n\n\`\`\`python\ndef es_par(n):\n    return n % 2 == 0\n\nnumeros = [1, 2, 3, 4]\npare = filter(es_par, numeros)\nprint(list(pares)) # [2, 4]\n\`\`\`\n\n## reduce\n\nLa función \`reduce\` realiza un cálculo acumulativo a pares secuenciales de valores en una lista.\n\n\`\`\`python\nfrom functools import reduce\n\ndef sumar(x, y):\n    return x + y\n\nnumeros = [1, 2, 3, 4]\nsuma = reduce(sumar, numeros)\nprint(suma) # 10\n\`\`\`\n`,
        EUS: `\n# Programazio funtzionala\n\n## map\n\n\`map\` funtzioak funtzio bat aplikatzen die iteragarri bateko elementu guztiei.\n\n\`\`\`python\ndef bikoiztu(n):\n    return n * 2\n\nzenbakiak = [1, 2, 3]\nbikoitzak = map(bikoiztu, zenbakiak)\nprint(list(bikoitzak)) # [2, 4, 6]\n\`\`\`\n\n## filter\n\n\`filter\` funtzioak iteratzaile bat eraikitzen du iteragarri bateko elementuetatik, funtzio batek egia itzultzen duenentzat.\n\n\`\`\`python\ndef bikoitia_da(n):\n    return n % 2 == 0\n\nzenbakiak = [1, 2, 3, 4]\nbikoitiak = filter(bikoitia_da, zenbakiak)\nprint(list(bikoitiak)) # [2, 4]\n\`\`\`\n\n## reduce\n\n\`reduce\` funtzioak kalkulu metatua egiten du zerrenda bateko balio bikote sekuentzialetan.\n\n\`\`\`python\nfrom functools import reduce\n\ndef batu(x, y):\n    return x + y\n\nzenbakiak = [1, 2, 3, 4]\nbatura = reduce(batu, zenbakiak)\nprint(batura) # 10\n\`\`\`\n`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part12-11_attempted_courses',
      title: {
        ENG: `Attempted courses`,
        CAS: `Cursos intentados`,
        EUS: `Saiatutako ikastaroak`
      },
      description: {
        ENG: `Class \`CourseAttempt\`. Write \`names_of_students(attempts)\` using \`map\`. Write \`course_names(attempts)\` using \`map\` (unique names).`,
        CAS: `Clase \`CourseAttempt\`. Escribe \`names_of_students\` y \`course_names\` usando \`map\`.`,
        EUS: `\`CourseAttempt\` klasea. Idatzi \`names_of_students\` eta \`course_names\` \`map\` erabiliz.`
      },
      initialCode: `class CourseAttempt:\n    def __init__(self, student_name: str, course_name: str, grade: int):\n        self.student_name = student_name\n        self.course_name = course_name\n        self.grade = grade\n\n    def __str__(self):\n        return f\`{self.student_name}, grade for the course {self.course_name} {self.grade}\"\n\n# Write your solution here\n`
      testCode: `\nimport unittest\nclass TestAttempted(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part12-12_filtering_attempts',
      title: {
        ENG: `Filtering attempts`,
        CAS: `Filtrando intentos`,
        EUS: `Saiakerak iragazten`
      },
      description: {
        ENG: `Write \`accepted(attempts)\` (grade >= 1) using \`filter\`. Write \`attempts_with_grade(attempts, grade)\` using \`filter\`. Write \`passed_students(attempts, course)\` (grade > 0, specific course) using \`filter\` and \`map\`.`,
        CAS: `Escribe \`accepted\`, \`attempts_with_grade\`, \`passed_students\` usando \`filter\` y \`map\`.`,
        EUS: `Idatzi \`accepted\`, \`attempts_with_grade\`, \`passed_students\` \`filter\` eta \`map\` erabiliz.`
      },
      initialCode: `# Write your solution here\n`
      testCode: `\nimport unittest\nclass TestFilterAttempts(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part12-13_credits',
      title: {
        ENG: `Credits`,
        CAS: `Créditos`,
        EUS: `Kredituak`
      },
      description: {
        ENG: `Class \`CourseAttempt\` with credits. Write \`sum_of_all_credits(attempts)\` using \`reduce\`. Write \`sum_of_passed_credits(attempts)\` using \`filter\` and \`reduce\`. Write \`average(attempts)\` using \`filter\` and \`reduce\`.`,
        CAS: `Clase \`CourseAttempt\`. Escribe sumas y promedio usando \`reduce\` y \`filter\`.`,
        EUS: `\`CourseAttempt\` klasea. Idatzi baturak eta batezbestekoa \`reduce\` eta \`filter\` erabiliz.`
      },
      initialCode: `from functools import reduce\n\nclass CourseAttempt:\n    def __init__(self, course_name: str, grade: int, credits: int):\n        self.course_name = course_name\n        self.grade = grade\n        self.credits = credits\n\n    def __str__(self):\n        return f\"{self.course_name} ({self.credits} cr) grade {self.grade}\"\n\n# Write your solution here\n`
      testCode: `\nimport unittest\nclass TestCredits(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    }
  ]
};