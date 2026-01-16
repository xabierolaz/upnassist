import { CoursePage } from '../mooc-exercises';

export const section3: CoursePage = {
  id: "part10-3",
  title: {
    ENG: `Object oriented techniques`,
    CAS: `Técnicas orientadas a objetos`,
    EUS: `Objektuei orientatutako teknikak\`
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: \`
# Object oriented techniques

## Operator Overloading

You can define how operators like \`+\`, \`-\`, \`<\` behave for your classes by implementing special methods like \`__add__\`, \`__sub__\`, \`__lt__\`.

\`\`\`python
class Number:
    def __init__(self, value):
        self.value = value

    def __add__(self, other):
        return Number(self.value + other.value)
\`\`\`

## Iterators

To make an object iterable (usable in \`for\` loops), implement \`__iter__\` and \`__next__\`.

\`\`\`python
class Counter:
    def __init__(self, max):
        self.max = max
        self.n = 0

    def __iter__(self):
        self.n = 0
        return self

    def __next__(self):
        if self.n < self.max:
            self.n += 1
            return self.n
        else:
            raise StopIteration
\`\`\`
`,
        CAS: `
# Técnicas orientadas a objetos

## Sobrecarga de Operadores

Puedes definir cómo se comportan operadores como \`+\`, \`-\`, \`<\` para tus clases implementando métodos especiales como \`__add__\`, \`__sub__\`, \`__lt__\`.

\`\`\`python
class Numero:
    def __init__(self, valor):
        self.valor = valor

    def __add__(self, otro):
        return Numero(self.valor + otro.valor)
\`\`\`

## Iteradores

Para hacer un objeto iterable (usable en bucles \`for\`), implementa \`__iter__\` y \`__next__\`.

\`\`\`python
class Contador:
    def __init__(self, max):
        self.max = max
        self.n = 0

    def __iter__(self):
        self.n = 0
        return self

    def __next__(self):
        if self.n < self.max:
            self.n += 1
            return self.n
        else:
            raise StopIteration
\`\`\`
`,
        EUS: `
# Objektuei orientatutako teknikak

## Eragileen gainkarga

\`+\`, \`-\`, \`<\` bezalako eragileek zure klaseekin nola jokatzen duten defini dezakezu \`__add__\`, \`__sub__\`, \`__lt__\` bezalako metodo bereziak inplementatuz.

\`\`\`python
class Zenbakia:
    def __init__(self, balioa):
        self.balioa = balioa

    def __add__(self, bestea):
        return Zenbakia(self.balioa + bestea.balioa)
\`\`\`

## Iteratzaileak

Objektu bat iteragarria egiteko (\`for\` begiztetan erabiltzeko), inplementatu \`__iter__\` eta \`__next__\`.

\`\`\`python
class Kontagailua:
    def __init__(self, max):
        self.max = max
        self.n = 0

    def __iter__(self):
        self.n = 0
        return self

    def __next__(self):
        if self.n < self.max:
            self.n += 1
            return self.n
        else:
            raise StopIteration
\`\`\`
\`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part10-07_money',
      title: {
        ENG: \`Money`,
        CAS: `Dinero`,
        EUS: `Dirua\`
      },
      description: {
        ENG: \`Create a class \`Money\` to handle currency (euros, cents). Implement \`__str__\`, \`__eq__\`, \`__lt__\`, \`__gt__\`, \`__ne__\`, \`__add__\`, \`__sub__\`. Handle cents overflow/underflow correctly.`,
        CAS: `Crea clase \`Money\`. Implementa operadores. Maneja desbordamiento de céntimos.`,
        EUS: `Sortu \`Money\` klasea. Inplementatu eragileak. Kudeatu zentimoen gainezkatzea.\`
      },
      initialCode: `# Write your solution here\nclass Money:\n    def __init__(self, euros: int, cents: int):\n        self.__euros = euros\n        self.__cents = cents\n\n    def __str__(self):\n        return f\"{self.__euros}.{self.__cents:02d} eur\"\n`
      testCode: \`\nimport unittest\nclass TestMoney(unittest.TestCase):\n    def test_run(self):\n        pass\n\`
    },
    {
      type: 'exercise',
      exerciseId: 'part10-08_simple_date',
      title: {
        ENG: \`Simple date`,
        CAS: `Fecha simple`,
        EUS: `Data sinplea\`
      },
      description: {
        ENG: \`Extend \`SimpleDate\` class. Implement \`__lt__\`, \`__gt__\`, \`__eq__\`, \`__ne__\`, \`__add__\` (add days), \`__sub__\` (diff in days). Assuming 30 days/month, 12 months/year.`,
        CAS: `Extiende \`SimpleDate\`. Implementa operadores y suma/resta de días. Asume 30 días/mes.`,
        EUS: `Zabaldu \`SimpleDate\`. Inplementatu eragileak eta egunen batuketa/kenketa. Onartu 30 egun/hilabete.\`
      },
      initialCode: `# Write your solution here\nclass SimpleDate:\n    pass\n`
      testCode: \`\nimport unittest\nclass TestSimpleDate(unittest.TestCase):\n    def test_run(self):\n        pass\n\`
    },
    {
      type: 'exercise',
      exerciseId: 'part10-09_iterable_shopping_list',
      title: {
        ENG: \`Iterable shopping list`,
        CAS: `Lista de compra iterable`,
        EUS: `Erosketa zerrenda iteragarria\`
      },
      description: {
        ENG: \`Make the \`ShoppingList\` class iterable. Implement \`__iter__\` and \`__next__\` so that \`for product in shopping_list:\` works.`,
        CAS: `Haz \`ShoppingList\` iterable. Implementa \`__iter__\` y \`__next__\`.`,
        EUS: `Egin \`ShoppingList\` iteragarria. Inplementatu \`__iter__\` eta \`__next__\`.`
      },
      initialCode: `# Write your solution here\nclass ShoppingList:\n    def __init__(self):\n        self.products = []\n\n    def number_of_items(self):\n        return len(self.products)\n\n    def add(self, product: str, number: int):\n        self.products.append((product, number))\n\n    def product(self, n: int):\n        return self.products[n - 1][0]\n\n    def number(self, n: int):\n        return self.products[n - 1][1]\n`
      testCode: `\nimport unittest\nclass TestIterableList(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    }
  ]
};