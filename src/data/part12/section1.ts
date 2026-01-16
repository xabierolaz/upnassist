import { CoursePage } from '../mooc-exercises';

export const section1: CoursePage = {
  id: "part12-1",
  title: {
    ENG: `Functions as arguments`,
    CAS: `Funciones como argumentos`,
    EUS: `Funtzioak argumentu gisa\`
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: \`
# Functions as arguments

You can pass functions as arguments to other functions.

\
\`\`\`python
def add(x, y):
    return x + y

def operate(func, x, y):
    return func(x, y)

print(operate(add, 2, 3)) # 5
\
\`\`\`

## Sorting with custom key

The 
\`sort\` method and 
\`sorted\` function accept a 
\`key\` argument, which is a function that transforms each element before comparison.

\
\`\`\`python
def by_length(s):
    return len(s)

words = ["apple", "banana", "pear"]
words.sort(key=by_length)
print(words) # ['pear', 'apple', 'banana']
\
\`\`\`
`,
        CAS: `
# Funciones como argumentos

Puedes pasar funciones como argumentos a otras funciones.

\
\`\`\`python
def sumar(x, y):
    return x + y

def operar(func, x, y):
    return func(x, y)

print(operar(sumar, 2, 3)) # 5
\
\`\`\`

## Ordenando con clave personalizada

El método 
\`sort\` y la función 
\`sorted\` aceptan un argumento 
\`key\`, que es una función que transforma cada elemento antes de la comparación.

\
\`\`\`python
def por_longitud(s):
    return len(s)

palabras = ["manzana", "banana", "pera"]
palabras.sort(key=por_longitud)
print(palabras) # ['pera', 'manzana', 'banana']
\
\`\`\`
`,
        EUS: `
# Funtzioak argumentu gisa

Funtzioak beste funtzio batzuetara argumentu gisa pasa ditzakezu.

\
\`\`\`python
def batu(x, y):
    return x + y

def operatu(func, x, y):
    return func(x, y)

print(operatu(batu, 2, 3)) # 5
\
\`\`\`

## Gako pertsonalizatuarekin ordenatzen


\`sort\` metodoak eta 
\`sorted\` funtzioak 
\`key\` argumentua onartzen dute, elementu bakoitza konparatu aurretik eraldatzen duen funtzio bat dena.

\
\`\`\`python
def luzeraren_arabera(s):
    return len(s)

hitzak = ["sagarra", "banana", "udarea"]
hitzak.sort(key=luzeraren_arabera)
print(hitzak) # ['udarea', 'sagarra', 'banana']
\
\`\`\`
\`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part12-01_remaining_stock',
      title: {
        ENG: \`Remaining stock`,
        CAS: `Stock restante`,
        EUS: `Geratzen den stocka\`
      },
      description: {
        ENG: \`Write a function 
\`sort_by_remaining_stock(items: list)\`
 that takes a list of tuples (name, price, stock). It should return a new list sorted by stock (low to high). Do not modify original list.`,
        CAS: `Escribe 
\`sort_by_remaining_stock(items)\`
. Ordena por stock (ascendente). No modifiques la original.`,
        EUS: `Idatzi 
\`sort_by_remaining_stock(items)\`
. Ordenatu stockaren arabera (goraka). Ez aldatu jatorrizkoa.\`
      },
      initialCode: `# Write your solution here\ndef sort_by_remaining_stock(items: list):\n    return []\n`
      testCode: \`
import unittest
class TestStock(unittest.TestCase):
    def test_run(self):
        pass
\`
    },
    {
      type: 'exercise',
      exerciseId: 'part12-02_seasons',
      title: {
        ENG: \`Seasons`,
        CAS: `Temporadas`,
        EUS: `Denboraldiak\`
      },
      description: {
        ENG: \`Write a function 
\`sort_by_seasons(items: list)\`
 that sorts a list of dictionaries (TV shows) by the number of seasons. Ascending order.`,
        CAS: `Escribe 
\`sort_by_seasons(items)\`
. Ordena series por número de temporadas (ascendente).`,
        EUS: `Idatzi 
\`sort_by_seasons(items)\`
. Ordenatu telesailak denboraldi kopuruaren arabera (goraka).\`
      },
      initialCode: `# Write your solution here
def sort_by_seasons(items: list):
    return []
`
      testCode: \`
import unittest
class TestSeasons(unittest.TestCase):
    def test_run(self):
        pass
\`
    },
    {
      type: 'exercise',
      exerciseId: 'part12-03_ratings',
      title: {
        ENG: \`Ratings`,
        CAS: `Calificaciones`,
        EUS: `Balorazioak\`
      },
      description: {
        ENG: \`Write a function 
\`sort_by_ratings(items: list)\`
 that sorts TV shows by rating (descending).`,
        CAS: `Escribe 
\`sort_by_ratings(items)\`
. Ordena por calificación (descendente).`,
        EUS: `Idatzi 
\`sort_by_ratings(items)\`
. Ordenatu balorazioaren arabera (beheraka).`
      },
      initialCode: `# Write your solution here
def sort_by_ratings(items: list):
    return []
`
      testCode: `
import unittest
class TestRatings(unittest.TestCase):
    def test_run(self):
        pass
`
    }
  ]
};