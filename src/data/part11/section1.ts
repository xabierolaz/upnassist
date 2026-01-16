import { CoursePage } from '../mooc-exercises';

export const section1: CoursePage = {
  id: "part11-1",
  title: {
    ENG: `List comprehensions`,
    CAS: `Listas por comprensión`,
    EUS: `Zerrendak ulermenez\`
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: \`
# List comprehensions

List comprehensions provide a concise way to create lists.

\`\`\`python
numbers = [1, 2, 3, 4]
squares = [n**2 for n in numbers]
print(squares) # [1, 4, 9, 16]
\`\`\`

## Filtering

You can add an \`if\` clause to filter elements.

\`\`\`python
even_squares = [n**2 for n in numbers if n % 2 == 0]
print(even_squares) # [4, 16]
\`\`\`
`,
        CAS: `
# Listas por comprensión

Las listas por comprensión proporcionan una forma concisa de crear listas.

\`\`\`python
numeros = [1, 2, 3, 4]
cuadrados = [n**2 for n in numeros]
print(cuadrados) # [1, 4, 9, 16]
\`\`\`

## Filtrando

Puedes añadir una cláusula \`if\` para filtrar elementos.

\`\`\`python
cuadrados_pares = [n**2 for n in numeros if n % 2 == 0]
print(cuadrados_pares) # [4, 16]
\`\`\`
`,
        EUS: `
# Zerrendak ulermenez

Zerrendak ulermenez zerrendak sortzeko modu trinko bat eskaintzen dute.

\`\`\`python
zenbakiak = [1, 2, 3, 4]
karratuak = [n**2 for n in zenbakiak]
print(karratuak) # [1, 4, 9, 16]
\`\`\`

## Iragazten

\`if\` klausula bat gehi dezakezu elementuak iragazteko.

\`\`\`python
karratu_bikoitiak = [n**2 for n in zenbakiak if n % 2 == 0]
print(karratu_bikoitiak) # [4, 16]
\`\`\`
\`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part11-01_square_roots',
      title: {
        ENG: \`Square roots`,
        CAS: `Raíces cuadradas`,
        EUS: `Erro karratuak\`
      },
      description: {
        ENG: \`Write a function \`square_roots(numbers: list)\` that returns a new list containing the square roots of the original numbers. Use a list comprehension. Maximum 2 lines of code.`,
        CAS: `Escribe \`square_roots(numbers)\` que devuelva raíces cuadradas. Usa comprensión de listas. Máximo 2 líneas.`,
        EUS: `Idatzi \`square_roots(numbers)\` erro karratuak itzultzeko. Erabili zerrenda ulermena. Gehienez 2 lerro.\`
      },
      initialCode: `# Write your solution here\nfrom math import sqrt\n\ndef square_roots(numbers: list):\n    return []\n`
      testCode: \`
import unittest
class TestRoots(unittest.TestCase):
    def test_run(self):
        pass
\`
    },
    {
      type: 'exercise',
      exerciseId: 'part11-02_rows_of_stars',
      title: {
        ENG: \`Rows of stars`,
        CAS: `Filas de estrellas`,
        EUS: `Izar errenkadak\`
      },
      description: {
        ENG: \`Write a function \`rows_of_stars(numbers: list)\` that returns a list of strings. Each string contains * characters corresponding to the number. Use list comprehension. Max 2 lines.`,
        CAS: `Escribe \`rows_of_stars(numbers)\`. Devuelve lista de cadenas de estrellas. Usa comprensión. Máx 2 líneas.`,
        EUS: `Idatzi \`rows_of_stars(numbers)\`. Izar kateen zerrenda itzuli. Erabili ulermena. Gehienez 2 lerro.\`
      },
      initialCode: `# Write your solution here\ndef rows_of_stars(numbers: list):\n    return []\n`
      testCode: \`
import unittest
class TestStars(unittest.TestCase):
    def test_run(self):
        pass
\`
    },
    {
      type: 'exercise',
      exerciseId: 'part11-03_best_exam_result',
      title: {
        ENG: \`Best exam result`,
        CAS: `Mejor resultado de examen`,
        EUS: `Azterketa emaitzarik onena\`
      },
      description: {
        ENG: \`Write a function \`best_results(results: list)\` that receives a list of \`ExamResult\` objects and returns a list of the highest integers from each object (attributes grade1, grade2, grade3). Max 2 lines.`,
        CAS: `Escribe \`best_results(results)\`. Recibe objetos \`ExamResult\`. Devuelve la mejor nota de cada uno. Máx 2 líneas.`,
        EUS: `Idatzi \`best_results(results)\`. \`ExamResult\` objektuak jaso. Bakoitzaren nota onena itzuli. Gehienez 2 lerro.\`
      },
      initialCode: `class ExamResult:\n    def __init__(self, name: str, grade1: int, grade2: int, grade3: int):\n        self.name = name\n        self.grade1 = grade1\n        self.grade2 = grade2\n        self.grade3 = grade3\n\ndef best_results(results: list):\n    return []\n`
      testCode: \`
import unittest
class TestBest(unittest.TestCase):
    def test_run(self):
        pass
\`
    },
    {
      type: 'exercise',
      exerciseId: 'part11-04_lengths',
      title: {
        ENG: \`Lengths`,
        CAS: `Longitudes`,
        EUS: `Luzerak\`
      },
      description: {
        ENG: \`Write a function \`lengths(lists: list)\` that receives a list of lists and returns a list containing the lengths of those lists. Max 2 lines.`,
        CAS: `Escribe \`lengths(lists)\`. Recibe lista de listas, devuelve sus longitudes. Máx 2 líneas.`,
        EUS: `Idatzi \`lengths(lists)\`. Zerrenden zerrenda jaso, luzerak itzuli. Gehienez 2 lerro.\`
      },
      initialCode: `# Write your solution here\ndef lengths(lists: list):\n    return []\n`
      testCode: \`
import unittest
class TestLengths(unittest.TestCase):
    def test_run(self):
        pass
\`
    },
    {
      type: 'exercise',
      exerciseId: 'part11-05_remove_smaller_than',
      title: {
        ENG: \`Remove smaller than`,
        CAS: `Eliminar menores que`,
        EUS: `Txikiagoak kendu\`
      },
      description: {
        ENG: \`Write a function \`remove_smaller_than(numbers: list, limit: int)\` that returns a new list keeping only numbers >= limit. Max 2 lines.`,
        CAS: `Escribe \`remove_smaller_than(numbers, limit)\`. Devuelve lista con números >= límite. Máx 2 líneas.`,
        EUS: `Idatzi \`remove_smaller_than(numbers, limit)\`. Zenbaki >= muga itzuli. Gehienez 2 lerro.\`
      },
      initialCode: `# Write your solution here\ndef remove_smaller_than(numbers: list, limit: int):\n    return []\n`
      testCode: \`
import unittest
class TestRemove(unittest.TestCase):
    def test_run(self):
        pass
\`
    },
    {
      type: 'exercise',
      exerciseId: 'part11-06_begin_with_vowel',
      title: {
        ENG: \`Begin with vowel`,
        CAS: `Empieza con vocal`,
        EUS: `Bokalarekin hasi\`
      },
      description: {
        ENG: \`Write a function \`begin_with_vowel(words: list)\` that returns words starting with a vowel (a, e, i, o, u, y, ä, ö). Case insensitive. Max 2 lines.`,
        CAS: `Escribe \`begin_with_vowel(words)\`. Devuelve palabras que empiezan por vocal. Máx 2 líneas.`,
        EUS: `Idatzi \`begin_with_vowel(words)\`. Bokalarekin hasten diren hitzak itzuli. Gehienez 2 lerro.\`
      },
      initialCode: `# Write your solution here\ndef begin_with_vowel(words: list):\n    return []\n`
      testCode: \`
import unittest
class TestVowel(unittest.TestCase):
    def test_run(self):
        pass
\`
    },
    {
      type: 'exercise',
      exerciseId: 'part11-07_lottery_numbers',
      title: {
        ENG: \`Lottery numbers`,
        CAS: `Números de lotería`,
        EUS: `Loteria zenbakiak\`
      },
      description: {
        ENG: \`Class \`LotteryNumbers\` stores a week number and a list of 7 winning numbers. Methods: \`number_of_hits(numbers)\` (returns count of matches), \`hits_in_place(numbers)\` (returns list with matches or -1).`,
        CAS: `Clase \`LotteryNumbers\`. Métodos: \`number_of_hits\` (cuenta aciertos), \`hits_in_place\` (lista con aciertos o -1).`,
        EUS: `\`LotteryNumbers\` klasea. Metodoak: \`number_of_hits\` (asmatzeak kontatu), \`hits_in_place\` (zerrenda asmatzeekin edo -1).`
      },
      initialCode: `class LotteryNumbers:\n    def __init__(self, week_number: int, winning_numbers: list):\n        self.week_number = week_number\n        self.winning_numbers = winning_numbers\n\n    # Write your solution here\n`
      testCode: `
import unittest
class TestLottery(unittest.TestCase):
    def test_run(self):
        pass
`
    }
  ]
};