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
        ENG: "\n# More comprehensions\n\n## String operations\n\nYou can process characters in a string.\n\n\`\`\`python\ns = \"Hello\"\ncodes = [ord(c) for c in s]\nprint(codes)\n\`\`\`\n\n## Dictionary comprehensions\n\nYou can create dictionaries concisely.\n\n\`\`\`python\nwords = [\"apple\", \"banana\", \"pear\"]\nlengths = {word: len(word) for word in words}\nprint(lengths) # {'apple': 5, 'banana': 6, 'pear': 4}\n\`\`\`\n",
        CAS: "\n# Más comprensiones\n\n## Operaciones con cadenas\n\nPuedes procesar caracteres en una cadena.\n\n\`\`\`python\nnombre = \"Python\"\ncaracteres = [c.upper() for c in nombre]\n# ['P', 'Y', 'T', 'H', 'O', 'N']\n\`\`\`\n\n## Diccionarios por comprensión\n\nPuedes crear diccionarios usando comprensiones.\n\n\`\`\`python\npalabras = [\"manzana\", \"banana\", \"pera\"]\nlongitudes = {palabra: len(palabra) for palabra in palabras}\n# {'manzana': 7, 'banana': 6, 'pera': 4}\n\`\`\`\n",
        EUS: "\n# Ulermen gehiago\n\n## Kate eragiketak\n\nKate bateko karaktereak prozesatu ditzakezu.\n\n\`\`\`python\nizena = \"Python\"\nkarakterak = [c.upper() for c in izena]\n# ['P', 'Y', 'T', 'H', 'O', 'N']\n\`\`\`\n\n## Hiztegi ulermenak\n\nHiztegiak modu trinkoan sor ditzakezu.\n\n\`\`\`python\nhitzak = [\"sagarra\", \"banana\", \"udarea\"]\nluzerak = {hitza: len(hitza) for hitza in hitzak}\n# {'sagarra': 7, 'banana': 6, 'udarea': 6}\n\`\`\`\n"
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
      testCode: `\nimport unittest\nclass TestFilter(unittest.TestCase):\n    def test_run(self):\n        sentence = "I like apples and bananas"\n        forbidden = ["bananas"]\n        self.assertEqual(filter_forbidden(sentence, forbidden), "I like apples and")\n`
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
      testCode: `\nimport unittest\nclass TestLengths(unittest.TestCase):\n    def test_run(self):\n        self.assertEqual(lengths(["a", "bb"])), {"a": 1, "bb": 2})\n`
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
      testCode: `pass` // Needs file I/O mock
    }
  ]
};