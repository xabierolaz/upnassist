import { CoursePage } from '../mooc-exercises';

export const section2: CoursePage = {
  id: "part11-2",
  title: {
    ENG: "More comprehensions",
    CAS: "Más comprensiones",
    EUS: "Ulermen gehiago"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# String comprehensions

You can use list comprehensions with strings.

```python
name = "Python"
chars = [c.upper() for c in name]
# ['P', 'Y', 'T', 'H', 'O', 'N']
```

## Dictionary comprehensions

You can create dictionaries using comprehensions.

```python
words = ["apple", "banana", "pear"]
lengths = {word: len(word) for word in words}
# {'apple': 5, 'banana': 6, 'pear': 4}
```
`,
        CAS: `
# Más comprensiones

Puedes usar listas por comprensión con cadenas.

```python
nombre = "Python"
caracteres = [c.upper() for c in nombre]
# ['P', 'Y', 'T', 'H', 'O', 'N']
```

## Diccionarios por comprensión

Puedes crear diccionarios usando comprensiones.

```python
palabras = ["manzana", "banana", "pera"]
longitudes = {palabra: len(palabra) for palabra in palabras}
# {'manzana': 7, 'banana': 6, 'pera': 4}
```
`,
        EUS: `
# Ulermen gehiago

Zerrenda-ulermenak kateekin erabil ditzakezu.

```python
izena = "Python"
karakterak = [c.upper() for c in izena]
# ['P', 'Y', 'T', 'H', 'O', 'N']
```

## Hiztegi-ulermenak

Hiztegiak sor ditzakezu ulermenak erabiliz.

```python
hitzak = ["sagarra", "banana", "madaria"]
luzerak = {hitza: len(hitza) for hitza in hitzak}
# {'sagarra': 7, 'banana': 6, 'madaria': 7}
```
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part11-08_filter_forbidden',
      title: {
        ENG: "Filter forbidden words",
        CAS: "Filtrar palabras prohibidas",
        EUS: "Hitz debekatuak iragazi"
      },
      description: {
        ENG: "Write a function filter_forbidden(string: str, forbidden: list) that removes words from the string that are in the forbidden list. Use list comprehension.",
        CAS: "Escribe función filter_forbidden que elimine palabras prohibidas. Usa lista por comprensión.",
        EUS: "Idatzi filter_forbidden funtzioa, debekatutako zerrendan dauden hitzak katetik kentzen dituena. Erabili zerrenda-ulermena."
      },
      initialCode: "def filter_forbidden(string: str, forbidden: list):\n    # write your solution here\n    pass\n",
      testCode: `
import unittest
class TestFilter(unittest.TestCase):
    def test_run(self):
        sentence = "I like apples and bananas"
        forbidden = ["bananas"]
        self.assertEqual(filter_forbidden(sentence, forbidden), "I like apples and")
`
    },
    {
      type: 'exercise',
      exerciseId: 'part11-09_lengths_of_strings',
      title: {
        ENG: "Lengths of strings",
        CAS: "Longitudes de cadenas",
        EUS: "Kateen luzerak"
      },
      description: {
        ENG: "Write a function lengths(strings: list) that returns a dictionary where keys are the strings and values are their lengths.",
        CAS: "Escribe función lengths que devuelva diccionario palabra:longitud.",
        EUS: "Idatzi lengths funtzioa, hiztegia itzultzen duena hitza:luzera."
      },
      initialCode: "def lengths(strings: list):\n    # write your solution here\n    pass\n",
      testCode: `
import unittest
class TestLengths(unittest.TestCase):
    def test_run(self):
        self.assertEqual(lengths(["a", "bb"])), {"a": 1, "bb": 2})
`
    },
    {
      type: 'exercise',
      exerciseId: 'part11-10_most_common_words',
      title: {
        ENG: "Most common words",
        CAS: "Palabras más comunes",
        EUS: "Hitz ohikoenak"
      },
      description: {
        ENG: "Write a function most_common_words(filename: str, lower_limit: int) that returns a dictionary of words appearing at least lower_limit times.",
        CAS: "Escribe función most_common_words que devuelva diccionario de palabras frecuentes.",
        EUS: "Idatzi most_common_words funtzioa, hitz ohikoenak dituen hiztegia itzultzen duena."
      },
      initialCode: "def most_common_words(filename: str, lower_limit: int):\n    # write your solution here\n    pass\n",
      testCode: "pass" // Needs file I/O mock
    }
  ]
};
