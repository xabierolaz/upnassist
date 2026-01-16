import { CoursePage } from '../mooc-exercises';

export const section1: CoursePage = {
  id: "part10-1",
  title: {
    ENG: `Inheritance`,
    CAS: `Herencia`,
    EUS: `Herentzia`
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `\n# Inheritance\n\nInheritance allows a class (child class) to derive attributes and methods from another class (parent class).\n\n\`\`\`python\nclass Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        print(\"Animal speaks\")\n\nclass Dog(Animal):\n    def speak(self):\n        print(\"Woof!\")\n\ndog = Dog(\"Rex\")\ndog.speak() # Woof!\nprint(dog.name) # Rex\n\`\`\`\n\n## Calling the parent constructor\n\nUse `super()` to call the parent constructor.\n\n\`\`\`python\nclass Cat(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)\n        self.breed = breed\n\`\`\`\n`,
        CAS: `\n# Herencia\n\nLa herencia permite que una clase (clase hija) derive atributos y métodos de otra clase (clase madre).\n\n\`\`\`python\nclass Animal:\n    def __init__(self, nombre):\n        self.nombre = nombre\n\n    def hablar(self):\n        print(\"El animal habla\")\n\nclass Perro(Animal):\n    def hablar(self):\n        print(\"¡Guau!\")\n\nperro = Perro(\"Rex\")\nperro.hablar() # ¡Guau!\nprint(perro.nombre) # Rex\n\`\`\`\n\n## Llamando al constructor padre\n\nUsa `super()` para llamar al constructor de la clase madre.\n\n\`\`\`python\nclass Gato(Animal):\n    def __init__(self, nombre, raza):\n        super().__init__(nombre)\n        self.raza = raza\n\`\`\`\n`,
        EUS: `\n# Herentzia\n\nHerentziak klase bati (klase umea) beste klase batetik (klase gurasoa) atributuak eta metodoak jasotzea ahalbidetzen dio.\n\n\`\`\`python\nclass Animalia:\n    def __init__(self, izena):\n        self.izena = izena\n\n    def hitz_egin(self):\n        print(\"Animaliak hitz egiten du\")\n\nclass Txakurra(Animalia):\n    def hitz_egin(self):\n        print(\"Zaunk!\")\n\ntxakurra = Txakurra(\"Rex\")\ntxakurra.hitz_egin() # Zaunk!\nprint(txakurra.izena) # Rex\n\`\`\`\n\n## Guraso eraikitzailea deitzen\n\nErabili `super()` gurasoaren eraikitzailea deitzeko.\n\n\`\`\`python\nclass Katua(Animalia):\n    def __init__(self, izena, arraza):\n        super().__init__(izena)\n        self.arraza = arraza\n\`\`\`\n`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part10-01_laptop_computer',
      title: {
        ENG: `Laptop computer`,
        CAS: `Ordenador portátil`,
        EUS: `Ordenagailu eramangarria`
      },
      description: {
        ENG: `The exercise template contains a class `Computer`. Define a class `LaptopComputer` which inherits `Computer`. The constructor should take 3 arguments: model, speed, and weight.`,
        CAS: `La plantilla contiene la clase `Computer`. Define `LaptopComputer` que herede de `Computer`. Constructor con modelo, velocidad y peso.`,
        EUS: `Txantiloiak `Computer` klasea du. Definitu `LaptopComputer` `Computer`-etik heredatzen duena. Eraikitzaileak modeloa, abiadura eta pisua hartzen ditu.`
      },
      initialCode: `class Computer:\n    def __init__(self, model: str, speed: int):\n        self.model = model\n        self.speed = speed\n\n    def __str__(self):\n        return f\`{self.model}, {self.speed} MHz\"\n\n# Write your solution here\n`
      testCode: `\nimport unittest\nclass TestLaptop(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part10-02_game_museum',
      title: {
        ENG: `Game museum`,
        CAS: `Museo de juegos`,
        EUS: `Joko museoa`
      },
      description: {
        ENG: `The `GameWarehouse` class is provided. Define a class `GameMuseum` inheriting from it. Override `list_games()` to return only games made before 1990.`,
        CAS: `Se da `GameWarehouse`. Define `GameMuseum` heredando de ella. Sobreescribe `list_games()` para devolver juegos anteriores a 1990.`,
        EUS: ``GameWarehouse` ematen da. Definitu `GameMuseum` bertatik heredatuz. Gainidatzi `list_games()` 1990 baino lehenagoko jokoak soilik itzultzeko.`
      },
      initialCode: `class ComputerGame:\n    def __init__(self, name: str, publisher: str, year: int):\n        self.name = name\n        self.publisher = publisher\n        self.year = year\n\nclass GameWarehouse:\n    def __init__(self):\n        self.__games = []\n\n    def add_game(self, game: ComputerGame):\n        self.__games.append(game)\n\n    def list_games(self):\n        return self.__games\n\n# Write your solution here\n`
      testCode: `\nimport unittest\nclass TestMuseum(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part10-03_areas',
      title: {
        ENG: `Areas`,
        CAS: `Áreas`,
        EUS: `Azalerak`
      },
      description: {
        ENG: `The `Rectangle` class is provided. Create a class `Square` inheriting from `Rectangle`. A square is a rectangle with equal sides.`,
        CAS: `Se da `Rectangle`. Crea `Square` heredando de `Rectangle`. Un cuadrado tiene lados iguales.`,
        EUS: ``Rectangle` ematen da. Sortu `Square` `Rectangle`-etik heredatuz. Karratu bat alde berdinak dituen laukizuzena da.`
      },
      initialCode: `class Rectangle:\n    def __init__(self, width: int, height: int):\n        self.width = width\n        self.height = height\n\n    def __str__(self):\n        return f\"rectangle {self.width}x{self.height}\"\n\n    def area(self):\n        return self.width * self.height\n\n# Write your solution here\n`
      testCode: `\nimport unittest\nclass TestAreas(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part10-04_word_game',
      title: {
        ENG: `Word game`,
        CAS: `Juego de palabras`,
        EUS: `Hitz jokoa`
      },
      description: {
        ENG: `The `WordGame` class handles the game loop. Implement subclasses `LongestWord`, `MostVowels`, and `RockPaperScissors` that override `round_winner`. The logic for each game is specific.`,
        CAS: `Implementa subclases `LongestWord`, `MostVowels`, `RockPaperScissors`. Sobreescribe `round_winner`.`,
        EUS: `Inplementatu `LongestWord`, `MostVowels`, `RockPaperScissors` azpiklaseak. Gainidatzi `round_winner`.`
      },
      initialCode: `import random\n\nclass WordGame:\n    def __init__(self, rounds: int):\n        self.wins1 = 0\n        self.wins2 = 0\n        self.rounds = rounds\n\n    def round_winner(self, player1_word: str, player2_word: str):\n        # determine a random winner\n        return random.randint(1, 2)\n\n    def play(self):\n        print("Word game:")\n        for i in range(1, self.rounds+1):\n            print(f"round {i}")\n            answer1 = input("player1: ")\n            answer2 = input("player2: ")\n\n            if self.round_winner(answer1, answer2) == 1:\n                self.wins1 += 1\n                print("player 1 won")\n            elif self.round_winner(answer1, answer2) == 2:\n                self.wins2 += 1\n                print("player 2 won")\n            else:\n                pass # tie\n\n        print(\`game over, wins:\")\n        print(f\"player 1: {self.wins1}\")\n        print(f\"player 2: {self.wins2}\")\n\n# Write your solution here\n"
      testCode: `\nimport unittest\nclass TestWordGame(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    }
  ]
};