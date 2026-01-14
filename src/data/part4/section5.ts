import { CoursePage } from '../mooc-exercises';

export const section5: CoursePage = {
  id: "part4-5",
  title: {
    ENG: "More strings and lists",
    CAS: "Más cadenas y listas",
    EUS: "Kate eta zerrenda gehiago"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# More strings and lists

## Slicing

You can slice strings and lists using the syntax `[start:end:step]`.

```python
word = "exemplary"
print(word[0:7:2])
```

```text
eepa
```

Reversing a string:

```python
print(word[::-1])
```

```text
yralpmexe
```

## String methods

- `count(substring)`: counts occurrences
- `replace(old, new)`: replaces substrings

```python
sentence = "How much wood would a woodchuck chuck"
print(sentence.count("wood"))
print(sentence.replace("wood", "ground"))
```

```text
2
How much ground would a groundchuck chuck
```
`,
        CAS: `
# Más cadenas y listas

## Rebanado (Slicing)

Puedes rebanar cadenas y listas usando la sintaxis `[inicio:fin:paso]`.

```python
palabra = "exemplary"
print(palabra[0:7:2])
```

```text
eepa
```

Invirtiendo una cadena:

```python
print(palabra[::-1])
```

```text
yralpmexe
```

## Métodos de cadena

- `count(subcadena)`: cuenta ocurrencias
- `replace(viejo, nuevo)`: reemplaza subcadenas

```python
frase = "How much wood would a woodchuck chuck"
print(frase.count("wood"))
print(frase.replace("wood", "ground"))
```

```text
2
How much ground would a groundchuck chuck
```
`,
        EUS: `
# Kate eta zerrenda gehiago

## Slicing (Zatikatzea)

Kateak eta zerrendak zatikatu ditzakezu `[hasiera:amaiera:pausoa]` sintaxia erabiliz.

```python
hitza = "exemplary"
print(hitza[0:7:2])
```

```text
eepa
```

Kate bat alderantzikatzea:

```python
print(hitza[::-1])
```

```text
yralpmexe
```

## Kate metodoak

- `count(azpikatea)`: agerraldiak zenbatzen ditu
- `replace(zaharra, berria)`: azpikateak ordezkatzen ditu

```python
esaldia = "How much wood would a woodchuck chuck"
print(esaldia.count("wood"))
print(esaldia.replace("wood", "ground"))
```

```text
2
How much ground would a groundchuck chuck
```
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part04-33_everything_reversed',
      title: {
        ENG: "Everything reversed",
        CAS: "Todo al revés",
        EUS: "Dena alderantziz"
      },
      description: {
        ENG: "Write a function named everything_reversed, which takes a list of strings as its argument. The function returns a new list with all of the items on the original list reversed. Also the order of items should be reversed.",
        CAS: "Escribe una función llamada todo_al_reves, que tome una lista de cadenas. Devuelve una nueva lista con todos los elementos invertidos, y el orden de la lista también invertido.",
        EUS: "Idatzi dena_alderantziz izeneko funtzio bat. Zerrenda berri bat itzultzen du elementu guztiekin alderantzikatuta, eta zerrendaren ordena ere alderantzikatuta."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    print(everything_reversed([\"Anti\", \"Meto\", \"Tic\", \"Ice\", \"Po\", \"Hot\", \"Mag\", \"Net\", \"Ic\"]))",
      testCode: `
import unittest
class TestRev(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        # \"Anti\" -> \"itnA\"
        # List reversed -> \"Ic\" first -> \"cI\"
        # Output should be ['cI', 'teN', 'gaM', 'toH', 'oP', 'ecI', 'ciT', 'oteM', 'itnA']
        self.assertIn(\"cI\", out)
        self.assertIn(\"itnA\", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-34_most_common_character',
      title: {
        ENG: "Most common character",
        CAS: "Carácter más común",
        EUS: "Karaktere ohikoena"
      },
      description: {
        ENG: "Write a function named most_common_character, which takes a string argument. The function returns the character which appears most often in the string.",
        CAS: "Escribe una función llamada caracter_mas_comun. Devuelve el carácter que aparece más a menudo.",
        EUS: "Idatzi karaktere_ohikoena izeneko funtzio bat. Katean gehien agertzen den karakterea itzultzen du."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    print(most_common_character(\"exemplary\"))",
      testCode: `
import unittest
class TestCommon(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        # e appears 2 times, but 'x' 1, 'm' 1... wait
        # e x e m p l a r y -> e:2
        self.assertIn("e", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-35_no_vowels_allowed',
      title: {
        ENG: "No vowels allowed",
        CAS: "No se permiten vocales",
        EUS: "Bokalik ez"
      },
      description: {
        ENG: "Write a function named no_vowels, which takes a string argument. The function returns a new string, which should be the same as the original but with all vowels removed.",
        CAS: "Escribe una función llamada sin_vocales. Devuelve una nueva cadena sin las vocales.",
        EUS: "Idatzi bokalik_gabe izeneko funtzio bat. Kate berri bat itzultzen du bokalik gabe."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    print(no_vowels(\"this is an example\"))",
      testCode: `
import unittest
class TestNoVowels(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        # ths s n xmpl
        self.assertIn("ths s n xmpl", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-36_no_shouting_allowed',
      title: {
        ENG: "No shouting allowed",
        CAS: "No se permite gritar",
        EUS: "Ez oihukatu"
      },
      description: {
        ENG: "Write a function named no_shouting, which takes a list of strings as an argument. The function returns a new list, containing only those strings from the original which do not consist of all uppercase characters.",
        CAS: "Escribe una función llamada no_gritar. Devuelve una lista con las cadenas que no estén todo en mayúsculas.",
        EUS: "Idatzi ez_oihukatu izeneko funtzio bat. Zerrenda berri bat itzultzen du letra larriz idatzita ez dauden kateekin bakarrik."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    print(no_shouting([\"HI\", \"hello\", \"HEY\", \"there\"]))",
      testCode: `
import unittest
class TestNoShout(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        # hello, there
        self.assertIn("hello", out)
        self.assertIn("there", out)
        if "HI" in out: self.fail("Should remove uppercase strings")
`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-37_neighbours_in_list',
      title: {
        ENG: "Neighbours in a list",
        CAS: "Vecinos en una lista",
        EUS: "Auzokideak zerrenda batean"
      },
      description: {
        ENG: "Write a function named longest_series_of_neighbours, which takes a list of integers as its argument. The function returns the length of the longest series of neighbours (values that differ by 1).",
        CAS: "Escribe una función llamada serie_vecinos_mas_larga. Devuelve la longitud de la serie más larga de vecinos (valores que difieren en 1).",
        EUS: "Idatzi auzokide_serie_luzeena izeneko funtzio bat. Auzokideen serie luzeenaren luzera itzultzen du (1eko aldea duten balioak)."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    print(longest_series_of_neighbours([1, 2, 5, 7, 6, 5, 6, 3, 4, 1, 0]))",
      testCode: `
import unittest
class TestNeighbours(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        # 5, 7, 6, 5, 6 -> length 4? 
        # 1,2 (2)
        # 5
        # 7,6,5,6 (4)
        # 3,4 (2)
        # 1,0 (2)
        # Max is 4
        self.assertIn("4", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-38_grade_statistics',
      title: {
        ENG: "Grade statistics",
        CAS: "Estadísticas de notas",
        EUS: "Noten estatistikak"
      },
      description: {
        ENG: "Write a program that asks the user for points and exam points, then prints statistics (average, pass percentage, grade distribution). Input terminates with empty line.",
        CAS: "Escribe un programa que pida puntos y puntos de examen, luego imprima estadísticas (media, porcentaje de aprobados, distribución de notas). La entrada termina con una línea vacía.",
        EUS: "Idatzi programa bat puntuak eta azterketa puntuak eskatzen dituena, eta gero estatistikak inprimatzen dituena (batezbestekoa, gainditze portzentajea, noten banaketa)."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
class TestStats(unittest.TestCase):
    def test_run(self):
        inputs = ['20 100', '15 80', '10 50', '']
        out = run_student_code(inputs=inputs)
        # Verify some output presence
        self.assertIn("Statistics:", out)
        self.assertIn("Points average:", out)
        self.assertIn("Pass percentage:", out)
        self.assertIn("Grade distribution:", out)
`
    }
  ]
};
