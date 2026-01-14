import { CoursePage } from '../mooc-exercises';

export const section1: CoursePage = {
  id: "part11-1",
  title: {
    ENG: "List comprehensions",
    CAS: "Listas por comprensión",
    EUS: "Zerrenda-ulermena"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# List comprehensions

List comprehensions provide a concise way to create lists.

```python
numbers = [1, 2, 3, 4]
squares = [n**2 for n in numbers]
# [1, 4, 9, 16]
```

## Filtering

You can add an `if` clause to filter items.

```python
evens = [n for n in numbers if n % 2 == 0]
# [2, 4]
```

## Conditional expression

You can use `if-else` in the expression part.

```python
parity = ["even" if n % 2 == 0 else "odd" for n in numbers]
# ["odd", "even", "odd", "even"]
```
`,
        CAS: `
# Listas por comprensión

Las listas por comprensión proporcionan una forma concisa de crear listas.

```python
numeros = [1, 2, 3, 4]
cuadrados = [n**2 for n in numeros]
# [1, 4, 9, 16]
```

## Filtrado

Puedes añadir una cláusula `if` para filtrar elementos.

```python
pare = [n for n in numeros if n % 2 == 0]
# [2, 4]
```

## Expresión condicional

Puedes usar `if-else` en la parte de la expresión.

```python
paridad = ["par" if n % 2 == 0 else "impar" for n in numeros]
# ["impar", "par", "impar", "par"]
```
`,
        EUS: `
# Zerrenda-ulermena

Zerrenda-ulermenek zerrendak sortzeko modu zehatza eskaintzen dute.

```python
zenbakiak = [1, 2, 3, 4]
karratuak = [n**2 for n in zenbakiak]
# [1, 4, 9, 16]
```

## Iragazketa

`if` klausula bat gehi dezakezu elementuak iragazteko.

```python
bikoitiak = [n for n in zenbakiak if n % 2 == 0]
# [2, 4]
```

## Baldintzazko adierazpena

`if-else` erabil dezakezu adierazpenaren zatian.

```python
paritatea = ["bikoitia" if n % 2 == 0 else "bakoitia" for n in zenbakiak]
# ["bakoitia", "bikoitia", "bakoitia", "bikoitia"]
```
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part11-01_square_roots',
      title: {
        ENG: "Square roots",
        CAS: "Raíces cuadradas",
        EUS: "Erro karratuak"
      },
      description: {
        ENG: "Write a function square_roots(numbers: list) that returns a new list containing the square roots of the original numbers. Use a list comprehension.",
        CAS: "Escribe una función square_roots(numbers: list) que devuelva una nueva lista con las raíces cuadradas. Usa lista por comprensión.",
        EUS: "Idatzi square_roots(numbers: list) funtzioa, jatorrizko zenbakien erro karratuak dituen zerrenda berria itzultzen duena. Erabili zerrenda-ulermena."
      },
      initialCode: "from math import sqrt\ndef square_roots(numbers: list):\n    # write your solution here\n    pass\n",
      testCode: ""
import unittest
from math import sqrt
class TestSquareRoots(unittest.TestCase):
    def test_run(self):
        self.assertEqual(square_roots([1, 4, 9]), [1, 2, 3])
"
    },
    {
      type: 'exercise',
      exerciseId: 'part11-02_rows_of_stars',
      title: {
        ENG: "Rows of stars",
        CAS: "Filas de estrellas",
        EUS: "Izarren ilarak"
      },
      description: {
        ENG: "Write a function rows_of_stars(numbers: list) that returns a list of strings, where each string contains as many stars as the corresponding number.",
        CAS: "Escribe una función rows_of_stars(numbers: list) que devuelva una lista de cadenas con estrellas.",
        EUS: "Idatzi rows_of_stars(numbers: list) funtzioa, izarrak dituzten kateen zerrenda bat itzultzen duena."
      },
      initialCode: "def rows_of_stars(numbers: list):\n    # write your solution here\n    pass\n",
      testCode: ""
import unittest
class TestStars(unittest.TestCase):
    def test_run(self):
        self.assertEqual(rows_of_stars([1, 2]), ["*", "**"])
"
    },
    {
      type: 'exercise',
      exerciseId: 'part11-03_best_exam_result',
      title: {
        ENG: "Best exam result",
        CAS: "Mejor resultado de examen",
        EUS: "Azterketa emaitzarik onena"
      },
      description: {
        ENG: "Class ExamResult is provided. Write a function best_results(results: list) that returns a list of only those results with grade 5.",
        CAS: "Clase ExamResult dada. Escribe función best_results(results: list) que devuelva solo los resultados con nota 5.",
        EUS: "ExamResult klasea ematen da. Idatzi best_results(results: list) funtzioa, 5 nota duten emaitzak bakarrik itzultzen dituena."
      },
      initialCode: "class ExamResult:\n    def __init__(self, name: str, grade: int):\n        self.name = name\n        self.grade = grade\n\ndef best_results(results: list):\n    # write your solution here\n    pass\n",
      testCode: ""
import unittest
class TestBest(unittest.TestCase):
    def test_run(self):
        r1 = ExamResult("A", 5)
        r2 = ExamResult("B", 3)
        self.assertEqual(len(best_results([r1, r2])), 1)
"
    },
    {
      type: 'exercise',
      exerciseId: 'part11-04_lengths',
      title: {
        ENG: "Lengths",
        CAS: "Longitudes",
        EUS: "Luzerak"
      },
      description: {
        ENG: "Write a function lengths(lists: list) that receives a list of lists and returns a list containing the lengths of the inner lists.",
        CAS: "Escribe función lengths(lists: list) que reciba lista de listas y devuelva sus longitudes.",
        EUS: "Idatzi lengths(lists: list) funtzioa, zerrenda-zerrenda bat jaso eta barneko zerrenden luzerak itzultzen dituena."
      },
      initialCode: "def lengths(lists: list):\n    # write your solution here\n    pass\n",
      testCode: ""
import unittest
class TestLengths(unittest.TestCase):
    def test_run(self):
        self.assertEqual(lengths([[1,2], [3], []]), [2, 1, 0])
"
    },
    {
      type: 'exercise',
      exerciseId: 'part11-05_remove_smaller_than',
      title: {
        ENG: "Remove smaller than",
        CAS: "Eliminar menores que",
        EUS: "Txikiagoak ezabatu"
      },
      description: {
        ENG: "Write a function remove_smaller_than(numbers: list, limit: int) that returns a new list with items from the original list that are >= limit.",
        CAS: "Escribe función remove_smaller_than(numbers: list, limit: int).\n",
        EUS: "Idatzi remove_smaller_than(numbers: list, limit: int) funtzioa."
      },
      initialCode: "def remove_smaller_than(numbers: list, limit: int):\n    # write your solution here\n    pass\n",
      testCode: ""
import unittest
class TestRemove(unittest.TestCase):
    def test_run(self):
        self.assertEqual(remove_smaller_than([1, 2, 3, 4], 3), [3, 4])
"
    },
    {
      type: 'exercise',
      exerciseId: 'part11-06_begin_with_vowel',
      title: {
        ENG: "Begin with a vowel",
        CAS: "Empezar con una vocal",
        EUS: "Bokal batekin hasi"
      },
      description: {
        ENG: "Write a function begin_with_vowel(words: list) that returns a list of words starting with a vowel (a, e, i, o, u, y). Case insensitive.",
        CAS: "Escribe función begin_with_vowel(words: list).\n",
        EUS: "Idatzi begin_with_vowel(words: list) funtzioa."
      },
      initialCode: "def begin_with_vowel(words: list):\n    # write your solution here\n    pass\n",
      testCode: ""
import unittest
class TestVowel(unittest.TestCase):
    def test_run(self):
        self.assertEqual(begin_with_vowel(["apple", "Banana", "Orange"])), ["apple", "Orange"])
"
    },
    {
      type: 'exercise',
      exerciseId: 'part11-07_lottery_numbers',
      title: {
        ENG: "Lottery numbers",
        CAS: "Números de lotería",
        EUS: "Loteria zenbakiak"
      },
      description: {
        ENG: "Class LotteryNumbers is provided. Write method correct_numbers(self, numbers: list) that returns a list containing only the numbers that match the winning numbers (week_numbers attribute).",
        CAS: "Clase LotteryNumbers dada. Escribe método correct_numbers que devuelva los números coincidentes.",
        EUS: "LotteryNumbers klasea ematen da. Idatzi correct_numbers metodoa, zenbaki irabazleekin bat datozenak itzultzen dituena."
      },
      initialCode: "class LotteryNumbers:\n    def __init__(self, week: int, numbers: list):\n        self.week = week\n        self.numbers = numbers\n\n    def number_of_hits(self, numbers: list):\n        return [n for n in numbers if n in self.numbers]\n\n    def hits_in_place(self, numbers: list):\n        return [n if n in self.numbers else -1 for n in numbers]\n",
      testCode: "pass"
    }
  ]
};
