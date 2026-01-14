import { CoursePage } from '../mooc-exercises';

export const section2: CoursePage = {
  id: "part12-2",
  title: {
    ENG: "Generators",
    CAS: "Generadores",
    EUS: "Sorgailuak"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Generators

Generators allow you to declare a function that behaves like an iterator. Use the 
`yield` keyword to return data.

```python
def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1
```

## Generator Comprehensions

Similar to list comprehensions, but with parentheses.

```python
squares = (x*x for x in range(10))
```
`,
        CAS: `
# Generadores

Los generadores permiten declarar una función que se comporta como un iterador. Usa la palabra clave 
`yield`.

```python
def contar_hasta(n):
    i = 1
    while i <= n:
        yield i
        i += 1
```

## Generadores por comprensión

Similar a las listas por comprensión, pero con paréntesis.

```python
cuadrados = (x*x for x in range(10))
```
`,
        EUS: `
# Sorgailuak

Sorgailuek iteratzaile baten moduan jokatzen duen funtzio bat deklaratzeko aukera ematen dute. Erabili 
`yield` gako-hitza.

```python
n_raino_zenbatu(n):
    i = 1
    while i <= n:
        yield i
        i += 1
```

## Sorgailu-ulermenak

Zerrenda-ulermenen antzekoa, baina parentesiekin.

```python
karratuak = (x*x for x in range(10))
```
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part12-05_even_numbers',
      title: {
        ENG: "Even numbers",
        CAS: "Números pares",
        EUS: "Zenbaki bikoitiak"
      },
      description: {
        ENG: "Write a generator function even_numbers(beginning: int, maximum: int) that yields even numbers starting from beginning up to maximum.",
        CAS: "Escribe función generadora even_numbers.",
        EUS: "Idatzi even_numbers sorgailu funtzioa."
      },
      initialCode: "def even_numbers(beginning: int, maximum: int):\n    # write your solution here\n    pass\n",
      testCode: `
import unittest
class TestEven(unittest.TestCase):
    def test_run(self):
        gen = even_numbers(2, 6)
        self.assertEqual(list(gen), [2, 4, 6])
`
    },
    {
      type: 'exercise',
      exerciseId: 'part12-06_prime_numbers',
      title: {
        ENG: "Prime numbers",
        CAS: "Números primos",
        EUS: "Zenbaki lehenak"
      },
      description: {
        ENG: "Write a generator function prime_numbers() that yields prime numbers 2, 3, 5, 7, 11... infinitely.",
        CAS: "Escribe función generadora prime_numbers que genere primos infinitamente.",
        EUS: "Idatzi prime_numbers sorgailu funtzioa, zenbaki lehenak infinituki sortzen dituena."
      },
      initialCode: "def prime_numbers():\n    # write your solution here\n    pass\n",
      testCode: `
import unittest
class TestPrimes(unittest.TestCase):
    def test_run(self):
        gen = prime_numbers()
        primes = [next(gen) for _ in range(5)]
        self.assertEqual(primes, [2, 3, 5, 7, 11])
`
    },
    {
      type: 'exercise',
      exerciseId: 'part12-07_random_words',
      title: {
        ENG: "Random words",
        CAS: "Palabras aleatorias",
        EUS: "Ausazko hitzak"
      },
      description: {
        ENG: "Write a generator function word_generator(characters: str, length: int, amount: int) that yields 'amount' random words of length 'length' using 'characters'.",
        CAS: "Escribe generador de palabras aleatorias.",
        EUS: "Idatzi ausazko hitzen sorgailua."
      },
      initialCode: "def word_generator(characters: str, length: int, amount: int):\n    # write your solution here\n    pass\n",
      testCode: "pass" // Randomness test
    }
  ]
};
