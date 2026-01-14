import { CoursePage } from '../mooc-exercises';

export const section2: CoursePage = {
  id: "part4-2",
  title: {
    ENG: "Lists",
    CAS: "Listas",
    EUS: "Zerrendak"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Lists

A list is a collection of values.

```python
my_list = [7, 2, 2, 5, 2]
print(my_list)
```

```text
[7, 2, 2, 5, 2]
```

## Accessing items in a list

You can access items using their index (starting from 0).

```python
print(my_list[0])
print(my_list[1])
```

## Adding items

The `append` method adds items to the end of the list.

```python
numbers = []
numbers.append(5)
numbers.append(10)
print(numbers)
```

```text
[5, 10]
```
`,
        CAS: `
# Listas

Una lista es una colección de valores.

```python
mi_lista = [7, 2, 2, 5, 2]
print(mi_lista)
```

```text
[7, 2, 2, 5, 2]
```

## Accediendo a elementos en una lista

Puedes acceder a los elementos usando su índice (empezando desde 0).

```python
print(mi_lista[0])
print(mi_lista[1])
```

## Añadiendo elementos

El método `append` añade elementos al final de la lista.

```python
numeros = []
numeros.append(5)
numeros.append(10)
print(numeros)
```

```text
[5, 10]
```
`,
        EUS: `
# Zerrendak

Zerrenda bat balio bilduma bat da.

```python
nire_zerrenda = [7, 2, 2, 5, 2]
print(nire_zerrenda)
```

```text
[7, 2, 2, 5, 2]
```

## Elementuak atzitzen zerrenda batean

Elementuak atzi ditzakezu haien indizea erabiliz (0-tik hasita).

```python
print(nire_zerrenda[0])
print(nire_zerrenda[1])
```

## Elementuak gehitzen

`append` metodoak elementuak gehitzen ditu zerrendaren amaieran.

```python
zenbakiak = []
zenbakiak.append(5)
zenbakiak.append(10)
print(zenbakiak)
```

```text
[5, 10]
```
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part04-07_change_value_of_item',
      title: {
        ENG: "Change the value of an item",
        CAS: "Cambiar el valor de un elemento",
        EUS: "Elementu baten balioa aldatu"
      },
      description: {
        ENG: "Write a program that initialises a list with values [1, 2, 3, 4, 5]. Then ask the user for an index and a new value, replace the value at the index, and print the list. Repeat until the user enters index -1.",
        CAS: "Escribe un programa que inicialice una lista con [1, 2, 3, 4, 5]. Pide un índice y un nuevo valor, reemplaza el valor, e imprime la lista. Repite hasta que el índice sea -1.",
        EUS: "Idatzi programa bat zerrenda bat [1, 2, 3, 4, 5] balioekin hasieratzen duena. Eskatu indize bat eta balio berri bat, ordezkatu balioa, eta inprimatu zerrenda. Errepikatu indizea -1 izan arte."
      },
      initialCode: "my_list = [1, 2, 3, 4, 5]\n# Write your solution here\n",
      testCode: `
import unittest
class TestChange(unittest.TestCase):
    def test_run(self):
        out = run_student_code(inputs=['2', '10', '-1'])
        # [1, 2, 10, 4, 5]
        self.assertIn("[1, 2, 10, 4, 5]", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-08_add_items_to_list',
      title: {
        ENG: "Add items to a list",
        CAS: "Añadir elementos a una lista",
        EUS: "Elementuak gehitu zerrenda batera"
      },
      description: {
        ENG: "Write a program that asks the user for the number of items. Then ask for the items one by one and add them to a list. Finally print the list.",
        CAS: "Escribe un programa que pida el número de elementos. Luego pide los elementos uno a uno y añádelos a una lista. Finalmente imprime la lista.",
        EUS: "Idatzi programa bat elementu kopurua galdetzen duena. Gero elementuak banan-banan eskatu eta zerrenda batera gehitu. Azkenik zerrenda inprimatu."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
class TestAdd(unittest.TestCase):
    def test_run(self):
        out = run_student_code(inputs=['3', '10', '20', '30'])
        self.assertIn("[10, 20, 30]", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-09_addition_and_removal',
      title: {
        ENG: "Addition and removal",
        CAS: "Adición y eliminación",
        EUS: "Gehitzea eta kentzea"
      },
      description: {
        ENG: "Write a program that manages a list. Ask the user to (a)dd, (r)emove or (x)it. Add increases the last item + 1 (starting from 1). Remove removes the last item. Print the list after each operation.",
        CAS: "Escribe un programa que gestione una lista. Pide (a)ñadir, (r)etirar o (x)alir. Añadir agrega el último elemento + 1 (empieza en 1). Retirar quita el último. Imprime la lista tras cada operación.",
        EUS: "Idatzi zerrenda bat kudeatzen duen programa. Eskatu (a)gehitu, (r)kendu edo (x)irten. Gehitzeak azken elementua + 1 gehitzen du (1etik hasita). Kentzeak azkena kentzen du. Inprimatu zerrenda eragiketa bakoitzaren ondoren."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
class TestAddRem(unittest.TestCase):
    def test_run(self):
        out = run_student_code(inputs=['a', 'a', 'r', 'a', 'x'])
        # [] -> [1] -> [1, 2] -> [1] -> [1, 2]
        self.assertIn("[1, 2]", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-10_same_word_twice',
      title: {
        ENG: "The same word twice",
        CAS: "La misma palabra dos veces",
        EUS: "Hitz bera bitan"
      },
      description: {
        ENG: "Write a program that asks for words and adds them to a list. If the user types a word that is already in the list, stop and print the number of different words.",
        CAS: "Escribe un programa que pida palabras y las añada a una lista. Si el usuario escribe una palabra que ya está, para e imprime el número de palabras diferentes.",
        EUS: "Idatzi hitzak eskatu eta zerrenda batera gehitzen dituen programa. Erabiltzaileak zerrendan dagoeneko badagoen hitz bat idazten badu, gelditu eta inprimatu hitz ezberdinen kopurua."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
class TestTwice(unittest.TestCase):
    def test_run(self):
        out = run_student_code(inputs=['one', 'two', 'three', 'two'])
        # 3 different words
        self.assertIn("3", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-11_list_twice',
      title: {
        ENG: "List twice",
        CAS: "Lista dos veces",
        EUS: "Zerrenda bitan"
      },
      description: {
        ENG: "Write a program that asks for values and adds them to a list. After each addition, print the list in order of insertion and sorted.",
        CAS: "Escribe un programa que pida valores y los añada. Tras cada adición, imprime la lista en orden de inserción y ordenada.",
        EUS: "Idatzi balioak eskatu eta gehitzen dituen programa. Gehiketa bakoitzaren ondoren, inprimatu zerrenda txertatze-ordenan eta ordenatuta."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
class TestListTwice(unittest.TestCase):
    def test_run(self):
        out = run_student_code(inputs=['3', '1', '2', '0'])
        # Input 3: [3], [3]
        # Input 1: [3, 1], [1, 3]
        # Input 2: [3, 1, 2], [1, 2, 3]
        self.assertIn("[3, 1, 2]", out)
        self.assertIn("[1, 2, 3]", out)
`
    },
    {
      type: 'markdown',
      content: {
        ENG: `
## List methods and functions

- `len(my_list)`: length
- `min(my_list)`: smallest element
- `max(my_list)`: greatest element
- `sum(my_list)`: sum of elements
- `sorted(my_list)`: returns a sorted copy
- `my_list.sort()`: sorts in place
`,
        CAS: `
## Métodos y funciones de listas

- `len(mi_lista)`: longitud
- `min(mi_lista)`: elemento más pequeño
- `max(mi_lista)`: elemento más grande
- `sum(mi_lista)`: suma de elementos
- `sorted(mi_lista)`: devuelve una copia ordenada
- `mi_lista.sort()`: ordena in-situ
`,
        EUS: `
## Zerrenda metodoak eta funtzioak

- `len(nire_zerrenda)`: luzera
- `min(nire_zerrenda)`: elementu txikiena
- `max(nire_zerrenda)`: elementu handiena
- `sum(nire_zerrenda)`: elementuen batura
- `sorted(nire_zerrenda)`: kopia ordenatu bat itzultzen du
- `nire_zerrenda.sort()`: bertan ordenatzen du
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part04-12_length_of_list',
      title: {
        ENG: "The length of a list",
        CAS: "La longitud de una lista",
        EUS: "Zerrenda baten luzera"
      },
      description: {
        ENG: "Write a function named length which takes a list as an argument and returns its length.",
        CAS: "Escribe una función llamada longitud que tome una lista como argumento y devuelva su longitud.",
        EUS: "Idatzi luzera izeneko funtzio bat, zerrenda bat argumentu gisa hartzen duena eta bere luzera itzultzen duena."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    print(length([1, 2, 3]))",
      testCode: `
import unittest
class TestLen(unittest.TestCase):
    def test_run(self):
        # We rely on main block printing
        out = run_student_code()
        self.assertIn("3", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-13_arithmetic_mean',
      title: {
        ENG: "Arithmetic mean",
        CAS: "Media aritmética",
        EUS: "Batezbesteko aritmetikoa"
      },
      description: {
        ENG: "Write a function named mean which takes a list of integers as an argument and returns their arithmetic mean.",
        CAS: "Escribe una función llamada media que tome una lista de enteros y devuelva su media aritmética.",
        EUS: "Idatzi batezbestekoa izeneko funtzio bat, zenbaki osoen zerrenda bat hartzen duena eta haien batezbesteko aritmetikoa itzultzen duena."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    print(mean([1, 2, 3]))",
      testCode: `
import unittest
class TestMeanList(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        self.assertIn("2.0", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-14_range_of_list',
      title: {
        ENG: "The range of a list",
        CAS: "El rango de una lista",
        EUS: "Zerrenda baten tartea"
      },
      description: {
        ENG: "Write a function named range_of_list which returns the difference between the greatest and smallest values in a list.",
        CAS: "Escribe una función llamada rango_lista que devuelva la diferencia entre el valor más grande y el más pequeño de una lista.",
        EUS: "Idatzi zerrenda_tartea izeneko funtzio bat, zerrenda bateko balio handienaren eta txikienaren arteko aldea itzultzen duena."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    print(range_of_list([1, 5, 8]))",
      testCode: `
import unittest
class TestRange(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        # 8 - 1 = 7
        self.assertIn("7", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-15_star_studded',
      title: {
        ENG: "Star-studded",
        CAS: "Estrellado",
        EUS: "Izarrez beteta"
      },
      description: {
        ENG: "Write a program which asks the user for a string and then prints each character of the string on a separate line. After each character there should be a star (*) on a separate line.",
        CAS: "Escribe un programa que pida una cadena e imprima cada carácter en una línea separada. Después de cada carácter debe haber una estrella (*) en una línea separada.",
        EUS: "Idatzi programa bat kate bat eskatzen duena eta karaktere bakoitza lerro bereizi batean inprimatzen duena. Karaktere bakoitzaren ondoren izar bat (*) egon behar da lerro bereizi batean."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
class TestStar(unittest.TestCase):
    def test_run(self):
        out = run_student_code(inputs=['hi'])
        # h \n * \n i \n *
        self.assertIn("h", out)
        self.assertIn("i", out)
        self.assertIn("*", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-16_anagrams',
      title: {
        ENG: "Anagrams",
        CAS: "Anagramas",
        EUS: "Anagramak"
      },
      description: {
        ENG: "Write a function named anagrams(string1, string2) which returns True if the strings are anagrams of each other.",
        CAS: "Escribe una función llamada anagramas(cadena1, cadena2) que devuelva True si las cadenas son anagramas una de la otra.",
        EUS: "Idatzi anagramak(katea1, katea2) izeneko funtzio bat, True itzultzen duena kateak elkarren anagramak badira."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    print(anagrams(\"tame\", \"meta\"))",
      testCode: `
import unittest
class TestAnagram(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        self.assertIn("True", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-17_sum_of_positive_numbers',
      title: {
        ENG: "Sum of positive numbers",
        CAS: "Suma de números positivos",
        EUS: "Zenbaki positiboen batura"
      },
      description: {
        ENG: "Write a function named sum_of_positives, which takes a list of integers as its argument. The function returns the sum of the positive values in the list.",
        CAS: "Escribe una función llamada suma_positivos, que tome una lista de enteros. La función devuelve la suma de los valores positivos.",
        EUS: "Idatzi positiboen_batura izeneko funtzio bat, zenbaki osoen zerrenda bat hartzen duena. Funtzioak zerrendako balio positiboen batura itzultzen du."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    print(sum_of_positives([1, -2, 3, -4, 5]))",
      testCode: `
import unittest
class TestPosSum(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        # 1 + 3 + 5 = 9
        self.assertIn("9", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-18_even_numbers',
      title: {
        ENG: "Even numbers",
        CAS: "Números pares",
        EUS: "Zenbaki bikoitiak"
      },
      description: {
        ENG: "Write a function named even_numbers, which takes a list of integers as its argument. The function returns a new list containing only the even numbers from the original list.",
        CAS: "Escribe una función llamada numeros_pares, que tome una lista de enteros. Devuelve una nueva lista solo con los pares.",
        EUS: "Idatzi zenbaki_bikoitiak izeneko funtzio bat, zenbaki osoen zerrenda bat hartzen duena. Funtzioak zerrenda berri bat itzultzen du jatorrizko zerrendako zenbaki bikoitiekin bakarrik."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    print(even_numbers([1, 2, 3, 4, 5]))",
      testCode: `
import unittest
class TestEvenList(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        # [2, 4]
        self.assertIn("[2, 4]", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-19_sum_of_lists',
      title: {
        ENG: "The sum of lists",
        CAS: "La suma de listas",
        EUS: "Zerrenden batura"
      },
      description: {
        ENG: "Write a function named list_sum which takes two lists of integers as arguments. The function returns a new list containing the sum of items at each index.",
        CAS: "Escribe una función llamada suma_listas que tome dos listas de enteros. Devuelve una nueva lista con la suma de los elementos en cada índice.",
        EUS: "Idatzi zerrenda_batura izeneko funtzio bat, bi zenbaki oso zerrenda hartzen dituena. Funtzioak zerrenda berri bat itzultzen du indize bakoitzeko elementuen baturarekin."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    print(list_sum([1, 2], [3, 4]))",
      testCode: `
import unittest
class TestListSum(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        # [4, 6]
        self.assertIn("[4, 6]", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-20_distinct_numbers',
      title: {
        ENG: "Distinct numbers",
        CAS: "Números distintos",
        EUS: "Zenbaki ezberdinak"
      },
      description: {
        ENG: "Write a function named distinct_numbers, which takes a list of integers as its argument. The function returns a new list containing the numbers from the original list in order of magnitude, with each number appearing only once.",
        CAS: "Escribe una función llamada numeros_distintos. Devuelve una nueva lista con los números de la original ordenados y sin duplicados.",
        EUS: "Idatzi zenbaki_ezberdinak izeneko funtzio bat. Zerrenda berri bat itzultzen du jatorrizko zenbakiekin ordenatuta eta errepikapenik gabe."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    print(distinct_numbers([3, 2, 2, 1, 3]))",
      testCode: `
import unittest
class TestDistinct(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        # [1, 2, 3]
        self.assertIn("[1, 2, 3]", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-21_length_of_longest',
      title: {
        ENG: "Length of longest string",
        CAS: "Longitud de la cadena más larga",
        EUS: "Kate luzeenaren luzera"
      },
      description: {
        ENG: "Write a function named length_of_longest, which takes a list of strings as its argument. The function returns the length of the longest string.",
        CAS: "Escribe una función llamada longitud_mas_larga. Devuelve la longitud de la cadena más larga en la lista.",
        EUS: "Idatzi luzeenaren_luzera izeneko funtzio bat. Zerrendako kate luzeenaren luzera itzultzen du."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    print(length_of_longest([\"first\", \"second\", \"third\"]))",
      testCode: `
import unittest
class TestLongestLen(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        # second is 6 chars
        self.assertIn("6", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-22_shortest_string',
      title: {
        ENG: "Shortest string",
        CAS: "Cadena más corta",
        EUS: "Kate laburrena"
      },
      description: {
        ENG: "Write a function named shortest, which takes a list of strings as its argument. The function returns the shortest string. If there are multiple, return the last one.",
        CAS: "Escribe una función llamada mas_corta. Devuelve la cadena más corta. Si hay varias, devuelve la última que encuentres.",
        EUS: "Idatzi laburrena izeneko funtzio bat. Kate laburrena itzultzen du. Hainbat badaude, itzuli azkena."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    print(shortest([\"first\", \"second\", \"third\"]))",
      testCode: `
import unittest
class TestShortest(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        # first (5), second (6), third (5) -> third is last shortest
        self.assertIn("third", out)
`
    }
  ]
};
