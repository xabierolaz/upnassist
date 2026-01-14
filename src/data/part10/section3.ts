import { CoursePage } from '../mooc-exercises';

export const section3: CoursePage = {
  id: "part10-3",
  title: {
    ENG: "Object oriented programming techniques",
    CAS: "Técnicas de programación orientada a objetos",
    EUS: "Objektuetara bideratutako programazio-teknikak"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Object oriented programming techniques

## Operator Overloading

You can define how operators like `+`, `<`, `==` work for your classes by implementing special methods.

- `__add__(self, other)`: `+`
- `__sub__(self, other)`: `-`
- `__lt__(self, other)`: `<`
- `__gt__(self, other)`: `>`
- `__eq__(self, other)`: `==`

````python
class Money:
    def __init__(self, euros, cents):
        self.euros = euros
        self.cents = cents

    def __add__(self, other):
        return Money(self.euros + other.euros, self.cents + other.cents)
````

## Iterators

You can make an object iterable (usable in a `for` loop) by implementing `__iter__` and `__next__`.

````python
class Counter:
    def __init__(self, limit):
        self.limit = limit
        self.value = 0

    def __iter__(self):
        self.value = 0
        return self

    def __next__(self):
        if self.value < self.limit:
            self.value += 1
            return self.value
        else:
            raise StopIteration
````
`,
        CAS: `
# Técnicas de programación orientada a objetos

## Sobrecarga de operadores

Puedes definir cómo funcionan operadores como `+`, `<`, `==` para tus clases implementando métodos especiales.

- `__add__(self, other)`: `+`
- `__sub__(self, other)`: `-`
- `__lt__(self, other)`: `<`
- `__gt__(self, other)`: `>`
- `__eq__(self, other)`: `==`

## Iteradores

Puedes hacer que un objeto sea iterable (utilizable en un bucle `for`) implementando `__iter__` y `__next__`.
`,
        EUS: `
# Objektuetara bideratutako programazio-teknikak

## Eragileen gainkarga

Zure klaseetarako `+`, `<`, `==` bezalako eragileek nola funtzionatzen duten defini dezakezu metodo bereziak inplementatuz.

- `__add__(self, other)`: `+`
- `__sub__(self, other)`: `-`
- `__lt__(self, other)`: `<`
- `__gt__(self, other)`: `>`
- `__eq__(self, other)`: `==`

## Iteratzaileak

Objektu bat iteragarri egin dezakezu (`for` begizta batean erabilgarria) `__iter__` eta `__next__` inplementatuz.
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part10-05_money',
      title: {
        ENG: "Money",
        CAS: "Dinero",
        EUS: "Dirua"
      },
      description: {
        ENG: "Create class Money with euros and cents. Implement __str__, __eq__, __lt__, __gt__, __add__, __sub__. Handle cent overflow/underflow correctly.",
        CAS: "Crea clase Money con euros y céntimos. Implementa operadores. Maneja correctamente el desbordamiento de céntimos.",
        EUS: "Sortu Money klasea euro eta zentimoekin. Inplementatu eragileak. Kudeatu zentimoen gainezkatzea behar bezala."
      },
      initialCode: "# Write your solution here\nclass Money:\n    pass\n",
      testCode: "
import unittest
class TestMoney(unittest.TestCase):
    def test_add(self):
        m1 = Money(1, 50)
        m2 = Money(0, 60)
        m3 = m1 + m2
        self.assertEqual(str(m3), \"2.10e\")
    def test_sub(self):
        m1 = Money(10, 0)
        m2 = Money(2, 50)
        m3 = m1 - m2
        self.assertEqual(str(m3), \"7.50e\")
"
    },
    {
      type: 'exercise',
      exerciseId: 'part10-06_simple_date',
      title: {
        ENG: "Simple Date",
        CAS: "Fecha simple",
        EUS: "Data sinplea"
      },
      description: {
        ENG: "Create class SimpleDate (day, month, year). Implement <, >, !=, ==, +, -. Assume 30 days per month for simplicity.",
        CAS: "Crea clase SimpleDate. Implementa operadores. Asume 30 días por mes.",
        EUS: "Sortu SimpleDate klasea. Inplementatu eragileak. Onartu hilabeteko 30 egun."
      },
      initialCode: "# Write your solution here\nclass SimpleDate:\n    pass\n",
      testCode: "pass"
    },
    {
      type: 'exercise',
      exerciseId: 'part10-07_iterable_shopping_list',
      title: {
        ENG: "Iterable shopping list",
        CAS: "Lista de compras iterable",
        EUS: "Erosketa-zerrenda iteragarria"
      },
      description: {
        ENG: "Create class ShoppingList. Make it iterable using __iter__ and __next__.",
        CAS: "Crea clase ShoppingList. Hazla iterable.",
        EUS: "Sortu ShoppingList klasea. Egin iteragarria."
      },
      initialCode: "# Write your solution here\nclass ShoppingList:\n    pass\n",
      testCode: "
import unittest
class TestIterable(unittest.TestCase):
    def test_iter(self):
        sl = ShoppingList()
        sl.add(\"Milk\", 1)
        sl.add(\"Bread\", 2)
        items = []
        for item in sl:
            items.append(item)
        self.assertEqual(len(items), 2)
"
    }
  ]
};
