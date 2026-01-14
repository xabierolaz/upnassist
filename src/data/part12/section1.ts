import { CoursePage } from '../mooc-exercises';

export const section1: CoursePage = {
  id: "part12-1",
  title: {
    ENG: "Functions as arguments",
    CAS: "Funciones como argumentos",
    EUS: "Funtzioak argumentu gisa"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Functions as arguments

You can pass functions as arguments to other functions. This is commonly used in sorting.

\`\`\`python
def by_length(item):
    return len(item)

names = ["Alice", "Bob", "Charlie"]
names.sort(key=by_length)
\`\`\`

## Lambda expressions

Lambda expressions are anonymous functions.

\`\`\`python
names.sort(key=lambda name: len(name))
\`\`\`
`,
        CAS: `
# Funciones como argumentos

Puedes pasar funciones como argumentos a otras funciones. Esto se usa comúnmente en la ordenación.

\`\`\`python
def por_longitud(item):
    return len(item)

nombres = ["Alice", "Bob", "Charlie"]
nombres.sort(key=por_longitud)
\`\`\`

## Expresiones Lambda

Las expresiones lambda son funciones anónimas.

\`\`\`python
nombres.sort(key=lambda nombre: len(nombre))
\`\`\`
`,
        EUS: `
# Funtzioak argumentu gisa

Funtzioak beste funtzio batzuei argumentu gisa pasa ditzakezu. Hau askotan erabiltzen da ordenatzerakoan.

\`\`\`python
def luzeraren_arabera(item):
    return len(item)

izenak = ["Alice", "Bob", "Charlie"]
izenak.sort(key=luzeraren_arabera)
\`\`\`

## Lambda adierazpenak

Lambda adierazpenak funtzio anonimoak dira.

\`\`\`python
izenak.sort(key=lambda izena: len(izena))
\`\`\`
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part12-01_remaining_stock',
      title: {
        ENG: "Sort by remaining stock",
        CAS: "Ordenar por stock restante",
        EUS: "Stock-aren arabera ordenatu"
      },
      description: {
        ENG: "Write a function sort_by_remaining_stock(items: list) that sorts a list of tuples (name, price, stock) by stock. Use a separate helper function or lambda.",
        CAS: "Escribe función sort_by_remaining_stock que ordene tuplas (nombre, precio, stock) por stock.",
        EUS: "Idatzi sort_by_remaining_stock funtzioa, tuplak (izena, prezioa, stocka) stock-aren arabera ordenatzen dituena."
      },
      initialCode: "def sort_by_remaining_stock(items: list):\n    # write your solution here\n    pass\n",
      testCode: `
import unittest
class TestStock(unittest.TestCase):
    def test_run(self):
        items = [("A", 10, 5), ("B", 10, 2), ("C", 10, 10)]
        sort_by_remaining_stock(items)
        self.assertEqual(items[0][0], "B")
`
    },
    {
      type: 'exercise',
      exerciseId: 'part12-02_seasons',
      title: {
        ENG: "Sort by seasons",
        CAS: "Ordenar por temporadas",
        EUS: "Denboraldien arabera ordenatu"
      },
      description: {
        ENG: "Write a function sort_by_seasons(items: list) that sorts a list of dictionaries {'name': ..., 'seasons': ...} by the number of seasons.",
        CAS: "Escribe función sort_by_seasons que ordene diccionarios por número de temporadas.",
        EUS: "Idatzi sort_by_seasons funtzioa, hiztegiak denboraldi kopuruaren arabera ordenatzen dituena."
      },
      initialCode: "def sort_by_seasons(items: list):\n    # write your solution here\n    pass\n",
      testCode: `
import unittest
class TestSeasons(unittest.TestCase):
    def test_run(self):
        shows = [{"name": "A", "seasons": 5}, {"name": "B", "seasons": 2}]
        result = sort_by_seasons(shows)
        self.assertEqual(result[0]["name"], "B")
`
    },
    {
      type: 'exercise',
      exerciseId: 'part12-03_ratings',
      title: {
        ENG: "Sort by ratings",
        CAS: "Ordenar por valoraciones",
        EUS: "Balorazioen arabera ordenatu"
      },
      description: {
        ENG: "Write a function sort_by_ratings(items: list) that sorts a list of dictionaries by rating (descending).",
        CAS: "Escribe función sort_by_ratings que ordene por valoración (descendente).",
        EUS: "Idatzi sort_by_ratings funtzioa, balorazioaren arabera ordenatzen dituena (beheraka)."
      },
      initialCode: "def sort_by_ratings(items: list):\n    # write your solution here\n    pass\n",
      testCode: `
import unittest
class TestRatings(unittest.TestCase):
    def test_run(self):
        shows = [{"rating": 8.5}, {"rating": 9.0}]
        result = sort_by_ratings(shows)
        self.assertEqual(result[0]["rating"], 9.0)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part12-04_climbing_route',
      title: {
        ENG: "Climbing route",
        CAS: "Ruta de escalada",
        EUS: "Eskalada ibilbidea"
      },
      description: {
        ENG: "Class ClimbingRoute is provided. Write functions sort_by_length and sort_by_difficulty that sort a list of ClimbingRoute objects.",
        CAS: "Clase ClimbingRoute dada. Escribe funciones de ordenación.",
        EUS: "ClimbingRoute klasea ematen da. Idatzi ordenazio funtzioak."
      },
      initialCode: `class ClimbingRoute:
    def __init__(self, name: str, length: int, grade: str):
        self.name = name
        self.length = length
        self.grade = grade
    def __str__(self):
        return f"{self.name}, length {self.length} metres, grade {self.grade}"

def sort_by_length(routes: list):
    # ...
    pass

def sort_by_difficulty(routes: list):
    # ...
    pass
`,
      testCode: "pass"
    }
  ]
};
