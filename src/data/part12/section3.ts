import { CoursePage } from '../mooc-exercises';

export const section3: CoursePage = {
  id: "part12-3",
  title: {
    ENG: "Generators",
    CAS: "Generadores",
    EUS: "Sorgailuak"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\n# Generators\n\nGenerators are functions that return an iterator. They use the `yield` keyword.\n\n\`\`\`python\ndef counter(max):\n    n = 0\n    while n < max:\n        yield n\n        n += 1\n\nfor i in counter(3):\n    print(i) # 0, 1, 2\n\`\`\`\n",
        CAS: "\n# Generadores\n\nLos generadores son funciones que devuelven un iterador. Usan la palabra clave `yield`.\n\n\`\`\`python\ndef contador(max):\n    n = 0\n    while n < max:\n        yield n\n        n += 1\n\nfor i in contador(3):\n    print(i) # 0, 1, 2\n\`\`\`\n",
        EUS: "\n# Sorgailuak\n\nSorgailuak iteratzaile bat itzultzen duten funtzioak dira. `yield` gako-hitza erabiltzen dute.\n\n\`\`\`python\ndef kontagailua(max):\n    n = 0\n    while n < max:\n        yield n\n        n += 1\n\nfor i in kontagailua(3):\n    print(i) # 0, 1, 2\n\`\`\`\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part12-08_even_numbers',
      title: {
        ENG: "Even numbers",
        CAS: "Números pares",
        EUS: "Zenbaki bikoitiak"
      },
      description: {
        ENG: "Write a generator function `even_numbers(beginning: int, maximum: int)` that yields even numbers from beginning up to maximum (inclusive).",
        CAS: "Escribe generador `even_numbers(beginning, maximum)`. Genera pares desde inicio hasta máximo (inclusive).",
        EUS: "Idatzi `even_numbers(beginning, maximum)` sorgailua. Zenbaki bikoitiak sortu hasieratik maximo arte."
      },
      initialCode: "# Write your solution here\ndef even_numbers(beginning: int, maximum: int):\n    pass\n",
      testCode: `\nimport unittest\nclass TestEven(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part12-09_prime_numbers',
      title: {
        ENG: "Prime numbers",
        CAS: "Números primos",
        EUS: "Zenbaki lehenak"
      },
      description: {
        ENG: "Write a generator function `prime_numbers()` that yields prime numbers starting from 2 (2, 3, 5, 7, ...). Infinite generator.",
        CAS: "Escribe generador `prime_numbers()`. Genera primos infinitamente (2, 3, 5...).",
        EUS: "Idatzi `prime_numbers()` sorgailua. Zenbaki lehenak sortu infinituki (2, 3, 5...)."
      },
      initialCode: "# Write your solution here\ndef prime_numbers():\n    pass\n",
      testCode: `\nimport unittest\nclass TestPrimes(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part12-10_random_words',
      title: {
        ENG: "Random words",
        CAS: "Palabras aleatorias",
        EUS: "Ausazko hitzak"
      },
      description: {
        ENG: "Write generator `word_generator(characters: str, length: int, amount: int)` that yields `amount` random words of `length` using `characters`.",
        CAS: "Escribe generador `word_generator`. Genera palabras aleatorias con los caracteres dados.",
        EUS: "Idatzi `word_generator` sorgailua. Ausazko hitzak sortu emandako karaktererekin."
      },
      initialCode: "# Write your solution here\ndef word_generator(characters: str, length: int, amount: int):\n    pass\n",
      testCode: `\nimport unittest\nclass TestRandom(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    }
  ]
};