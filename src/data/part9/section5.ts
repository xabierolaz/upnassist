import { CoursePage } from '../mooc-exercises';

export const section5: CoursePage = {
  id: "part9-5",
  title: {
    ENG: "Class attributes",
    CAS: "Atributos de clase",
    EUS: "Klase-atributuak"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Class attributes

Class attributes are shared by all instances of a class. They are defined outside the constructor.

```python
class SavingsAccount:
    general_rate = 0.03

    def __init__(self, balance):
        self.balance = balance
```

## Class methods

Class methods are methods that operate on the class itself, not on instances. They are decorated with `@classmethod`.

```python
class Registration:
    @classmethod
    def license_plate_valid(cls, plate):
        # ...
        return True
```
`,
        CAS: `
# Atributos de clase

Los atributos de clase son compartidos por todas las instancias de una clase. Se definen fuera del constructor.

```python
class CuentaAhorro:
    tasa_general = 0.03

    def __init__(self, saldo):
        self.saldo = saldo
```

## Métodos de clase

Los métodos de clase son métodos que operan sobre la clase misma, no sobre las instancias. Se decoran con `@classmethod`.

```python
class Matricula:
    @classmethod
    def matricula_valida(cls, matricula):
        # ...
        return True
```
`,
        EUS: `
# Klase-atributuak

Klase-atributuak klase baten instantzia guztiek partekatzen dituzte. Eraikitzailez kanpo definitzen dira.

```python
class AurrezkiKontua:
    tasa_orokorra = 0.03

    def __init__(self, saldoa):
        self.saldoa = saldoa
```

## Klase-metodoak

Klase-metodoak klasean bertan eragiten duten metodoak dira, ez instantzietan. 
@classmethod
-ekin apaintzen dira.

```python
class Matrikula:
    @classmethod
    def matrikula_baliozkoa(cls, matrikula):
        # ...
        return True
```
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part09-13_postcodes',
      title: {
        ENG: "Postcodes",
        CAS: "Códigos postales",
        EUS: "Posta kodeak"
      },
      description: {
        ENG: "Add class attribute postcodes to class City. It should be a dictionary. Add locations 'Helsinki': '00100', 'Turku': '20100', etc.",
        CAS: "Añade atributo de clase postcodes a clase City. Debe ser un diccionario. Añade 'Helsinki': '00100', etc.",
        EUS: "Gehitu postcodes klase-atributua City klaseari. Hiztegi bat izan behar du. Gehitu 'Helsinki': '00100', etab."
      },
      initialCode: "class City:\n    postcodes = {'Helsinki': '00100', 'Turku': '20100', 'Tampere': '33100', 'Jyväskylä': '40100', 'Oulu': '40100'}\n\n    def __init__(self, name: str, population: int):\n        self.name = name\n        self.population = population\n\n    def __str__(self):\n        return f\"{self.name} ({self.population})\"
",
      testCode: `
import unittest
class TestCity(unittest.TestCase):
    def test_run(self):
        self.assertEqual(City.postcodes['Helsinki'], '00100')
        c = City("Test", 100)
        self.assertEqual(c.postcodes['Turku'], '20100')
`
    },
    {
      type: 'exercise',
      exerciseId: 'part09-14_list_helper',
      title: {
        ENG: "List helper",
        CAS: "Ayudante de lista",
        EUS: "Zerrenda laguntzailea"
      },
      description: {
        ENG: "Create class ListHelper with static methods greatest_frequency(my_list) and doubles(my_list). greatest_frequency returns the most common item. doubles returns the number of unique items that appear at least twice.",
        CAS: "Crea clase ListHelper con métodos estáticos greatest_frequency y doubles.",
        EUS: "Sortu ListHelper klasea metodo estatikoekin: greatest_frequency eta doubles."
      },
      initialCode: "# Write your solution here\nclass ListHelper:\n    pass\n",
      testCode: `
import unittest
class TestListHelper(unittest.TestCase):
    def test_run(self):
        l = [1, 1, 2, 3, 3, 3]
        self.assertEqual(ListHelper.greatest_frequency(l), 3)
        self.assertEqual(ListHelper.doubles(l), 2)
`
    }
  ]
};
