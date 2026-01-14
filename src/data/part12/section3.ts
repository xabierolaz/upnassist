import { CoursePage } from '../mooc-exercises';

export const section3: CoursePage = {
  id: "part12-3",
  title: {
    ENG: "Functional programming",
    CAS: "Programación funcional",
    EUS: "Programazio funtzionala"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\n# Functional programming\n\n## map\n\nThe `map` function applies a function to all items in an iterable.\n\n```python\nnumbers = [1, 2, 3]\ndoubled = map(lambda x: x * 2, numbers)\n# [2, 4, 6] (when converted to list)\n```\n\n## filter\n\nThe `filter` function picks items for which the function returns True.\n\n```python\nevens = filter(lambda x: x % 2 == 0, numbers)\n# [2]\n```\n\n## reduce\n\nThe `reduce` function (from `functools`) aggregates items.\n\n```python\nfrom functools import reduce\nsum = reduce(lambda a, b: a + b, numbers, 0)\n# 6\n```\n",
        CAS: "\n# Programación funcional\n\n## map\n\nLa función `map` aplica una función a todos los elementos de un iterable.\n\n## filter\n\nLa función `filter` selecciona elementos para los cuales la función devuelve True.\n\n## reduce\n\nLa función `reduce` (de `functools`) agrega elementos.\n",
        EUS: "\n# Programazio funtzionala\n\n## map\n\n`map` funtzioak funtzio bat aplikatzen die iteragarri bateko elementu guztiei.\n\n## filter\n\n`filter` funtzioak True itzultzen duten elementuak hautatzen ditu.\n\n## reduce\n\n`reduce` funtzioak ( `functools`-etik) elementuak agregatzen ditu.\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part12-08_attempted_courses',
      title: {
        ENG: "Attempted courses",
        CAS: "Cursos intentados",
        EUS: "Saiatutako ikastaroak"
      },
      description: {
        ENG: "Class CourseAttempt(student_name, course_name, grade) is provided. Write functions names_of_students(attempts) using map, and course_names(attempts) using map (unique names).",
        CAS: "Escribe funciones names_of_students y course_names usando map.",
        EUS: "Idatzi names_of_students eta course_names funtzioak map erabiliz."
      },
      initialCode: "class CourseAttempt:\n    def __init__(self, student_name: str, course_name: str, grade: int):\n        self.student_name = student_name\n        self.course_name = course_name\n        self.grade = grade\n\ndef names_of_students(attempts: list):\n    # write your solution here\n    pass\n\ndef course_names(attempts: list):\n    # write your solution here\n    pass\n",
      testCode: "\nimport unittest\nclass TestAttempts(unittest.TestCase):\n    def test_run(self):\n        a1 = CourseAttempt(\"Peter\", \"Python\", 3)\n        a2 = CourseAttempt(\"Paula\", \"Java\", 5)\n        self.assertEqual(list(names_of_students([a1, a2])), [\"Peter\", \"Paula\"])\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part12-09_credits',
      title: {
        ENG: "Credits",
        CAS: "Créditos",
        EUS: "Kredituak"
      },
      description: {
        ENG: "Class CourseAttempt(course_name, grade, credits) is provided. Write sum_of_all_credits, sum_of_passed_credits (grade >= 1), and average_grade_of_passed using filter, map and reduce.",
        CAS: "Escribe funciones de suma y promedio de créditos usando filter, map y reduce.",
        EUS: "Idatzi kredituen batura eta batez besteko funtzioak filter, map eta reduce erabiliz."
      },
      initialCode: "from functools import reduce\n\nclass CourseAttempt:\n    def __init__(self, course_name: str, grade: int, credits: int):\n        self.course_name = course_name\n        self.grade = grade\n        self.credits = credits\n\ndef sum_of_all_credits(attempts: list):\n    pass\n\ndef sum_of_passed_credits(attempts: list):\n    pass\n\ndef average_grade_of_passed(attempts: list):\n    pass\n",
      testCode: "pass"
    }
  ]
};
