import { CoursePage } from '../mooc-exercises';

export const section3: CoursePage = {
  id: "part5-3",
  title: {
    ENG: "Dictionary",
    CAS: "Diccionario",
    EUS: "Hiztegia"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Dictionary

A dictionary is a collection of key-value pairs.

```python
my_dict = {"name": "Peter", "age": 35}
print(my_dict["name"])
```

```text
Peter
```

## Adding and changing values

```python
my_dict["age"] = 36
my_dict["height"] = 180
print(my_dict)
```

```text
{'name': 'Peter', 'age': 36, 'height': 180}
```
`,
        CAS: `
# Diccionario

Un diccionario es una colección de pares clave-valor.

```python
mi_dicc = {"nombre": "Peter", "edad": 35}
print(mi_dicc["nombre"])
```

```text
Peter
```

## Añadir y cambiar valores

```python
mi_dicc["edad"] = 36
mi_dicc["altura"] = 180
print(mi_dicc)
```

```text
{'nombre': 'Peter', 'edad': 36, 'altura': 180}
```
`,
        EUS: `
# Hiztegia

Hiztegia gako-balio bikoteen bilduma bat da.

```python
nire_hiztegia = {"izena": "Peter", "adina": 35}
print(nire_hiztegia["izena"])
```

```text
Peter
```

## Balioak gehitu eta aldatu

```python
nire_hiztegia["adina"] = 36
nire_hiztegia["altuera"] = 180
print(nire_hiztegia)
```

```text
{'izena': 'Peter', 'adina': 36, 'altuera': 180}
```
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part05-13_times_ten',
      title: {
        ENG: "Times ten",
        CAS: "Por diez",
        EUS: "Hamar aldiz"
      },
      description: {
        ENG: "Write a function named times_ten(start_index, end_index), which creates and returns a dictionary. The keys should be numbers between start and end (inclusive), and the value should be the key multiplied by ten.",
        CAS: "Escribe una función llamada por_diez(inicio, fin), que cree y devuelva un diccionario. Las claves son números entre inicio y fin, y el valor es la clave por diez.",
        EUS: "Idatzi hamar_aldiz(hasiera, amaiera) izeneko funtzio bat. Hiztegi bat sortu eta itzuli behar du. Gakoak hasiera eta amaiera arteko zenbakiak dira, eta balioa gakoa bider hamar."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    d = times_ten(1, 3)\n    print(d)",
      testCode: `
import unittest
class TestTen(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        # {1: 10, 2: 20, 3: 30}
        self.assertIn("1: 10", out)
        self.assertIn("3: 30", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part05-14_factorials',
      title: {
        ENG: "Factorials",
        CAS: "Factoriales",
        EUS: "Faktorialak"
      },
      description: {
        ENG: "Write a function named factorials(n), which returns a dictionary. The dictionary should contain the factorials of numbers from 1 to n.",
        CAS: "Escribe una función llamada factoriales(n), que devuelva un diccionario con los factoriales de 1 a n.",
        EUS: "Idatzi faktorialak(n) izeneko funtzio bat. Hiztegi bat itzuli behar du 1etik n-rako zenbakien faktorialekin."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    k = factorials(5)\n    print(k[1])\n    print(k[3])\n    print(k[5])",
      testCode: `
import unittest
class TestFact(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        # 1, 6, 120
        self.assertIn("120", out)
`
    },
    {
      type: 'markdown',
      content: {
        ENG: `
## Traversing a dictionary

You can traverse keys using a 	for	 loop:

```python
for key in my_dict:
    print(key, my_dict[key])
```

Or both keys and values using 	.items()	:

```python
for key, value in my_dict.items():
    print(key, value)
```
`,
        CAS: `
## Recorriendo un diccionario

Puedes recorrer las claves con un bucle 	for	:

```python
for clave in mi_dicc:
    print(clave, mi_dicc[clave])
```

O claves y valores usando 	.items()	:

```python
for clave, valor in mi_dicc.items():
    print(clave, valor)
```
`,
        EUS: `
## Hiztegi bat zeharkatzen

Gakoak zeharka ditzakezu 	for	 begizta erabiliz:

```python
for gakoa in nire_hiztegia:
    print(gakoa, nire_hiztegia[gakoa])
```

Edo gakoak eta balioak 	.items()	 erabiliz:

```python
for gakoa, balioa in nire_hiztegia.items():
    print(gakoa, balioa)
```
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part05-15_histogram',
      title: {
        ENG: "Histogram",
        CAS: "Histograma",
        EUS: "Histograma"
      },
      description: {
        ENG: "Write a function named histogram(string), which prints a histogram representing the number of times each letter appears in the string. Each occurrence is represented by a star.",
        CAS: "Escribe una función llamada histograma(cadena), que imprima un histograma de las letras. Cada aparición es una estrella.",
        EUS: "Idatzi histograma(katea) izeneko funtzio bat. Letra bakoitzaren agerraldi kopurua irudikatzen duen histograma inprimatu behar du. Agerraldi bakoitza izar bat da."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    histogram(\"abba\")",
      testCode: `
import unittest
class TestHist(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        # a **
        # b **
        self.assertIn("a **", out)
        self.assertIn("b **", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part05-16_phone_book_v1',
      title: {
        ENG: "Phone book, version 1",
        CAS: "Agenda telefónica, versión 1",
        EUS: "Telefono gida, 1. bertsioa"
      },
      description: {
        ENG: "Write a phone book program. Commands: 1 search, 2 add, 3 quit. Adding saves a name and number. Search prints the number or 'no number'.",
        CAS: "Escribe una agenda. Comandos: 1 buscar, 2 añadir, 3 salir. Añadir guarda nombre y número. Buscar imprime el número o 'no number'.",
        EUS: "Idatzi telefono gida bat. Komandoak: 1 bilatu, 2 gehitu, 3 irten. Gehitzeak izena eta zenbakia gordetzen ditu. Bilatzeak zenbakia edo 'no number' inprimatzen du."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
class TestPhone1(unittest.TestCase):
    def test_run(self):
        # 2 -> Pekka -> 123
        # 1 -> Pekka -> 123
        # 3
        out = run_student_code(inputs=['2', 'Pekka', '123', '1', 'Pekka', '3'])
        self.assertIn("123", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part05-17_phone_book_v2',
      title: {
        ENG: "Phone book, version 2",
        CAS: "Agenda telefónica, versión 2",
        EUS: "Telefono gida, 2. bertsioa"
      },
      description: {
        ENG: "Extend the phone book. Multiple numbers can be added for the same person.",
        CAS: "Extiende la agenda. Se pueden añadir múltiples números para la misma persona.",
        EUS: "Zabaldu telefono gida. Pertsona berarentzat zenbaki bat baino gehiago gehi daitezke."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
class TestPhone2(unittest.TestCase):
    def test_run(self):
        # 2 -> Pekka -> 123
        # 2 -> Pekka -> 456
        # 1 -> Pekka
        # 3
        out = run_student_code(inputs=['2', 'Pekka', '123', '2', 'Pekka', '456', '1', 'Pekka', '3'])
        self.assertIn("123", out)
        self.assertIn("456", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part05-18_invert_dictionary',
      title: {
        ENG: "Invert a dictionary",
        CAS: "Invertir un diccionario",
        EUS: "Hiztegia alderantzikatu"
      },
      description: {
        ENG: "Write a function named invert(dictionary), which swaps keys and values in place. Assume values are unique and immutable.",
        CAS: "Escribe una función llamada invertir(diccionario), que intercambie claves y valores in-situ. Asume valores únicos.",
        EUS: "Idatzi alderantzikatu(hiztegia) izeneko funtzio bat. Gakoak eta balioak trukatzen ditu bertan. Onartu balio bakarrak direla."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    s = {1: \"first\", 2: \"second\"}
    invert(s)
    print(s)",
      testCode: `
import unittest
class TestInvert(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        # {'first': 1, 'second': 2}
        self.assertIn("'first': 1", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part05-19_numbers_to_names',
      title: {
        ENG: "Numbers to names",
        CAS: "Números a nombres",
        EUS: "Zenbakiak izenetara"
      },
      description: {
        ENG: "Write a function which takes a dictionary {number: name} and returns a new dictionary {name: number}. Handle duplicate names by keeping the last one.",
        CAS: "Escribe una función que tome {numero: nombre} y devuelva {nombre: numero}. Si hay nombres duplicados, quédate con el último.",
        EUS: "Idatzi funtzio bat {zenbakia: izena} hartu eta {izena: zenbakia} itzultzen duena. Izen errepikatuak badaude, mantendu azkena."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
class TestNumName(unittest.TestCase):
    # Testing logic would be similar to invert but new dict return
    pass
`
    }
  ]
};
