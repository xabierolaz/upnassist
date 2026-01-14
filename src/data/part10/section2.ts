import { CoursePage } from '../mooc-exercises';

export const section2: CoursePage = {
  id: "part10-2",
  title: {
    ENG: "Access modifiers",
    CAS: "Modificadores de acceso",
    EUS: "Sarbide-aldatzaileak"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Access modifiers

In Python, access modifiers control the visibility of class members.

- **Public**: Accessible from anywhere (default).
- **Protected** (\`_name\`): Accessible within the class and its subclasses (convention).
- **Private** (\`__name\`): Accessible only within the class itself.

\`\`\`python
class Base:
    def __init__(self):
        self.public = "Public"
        self._protected = "Protected"
        self.__private = "Private"

class Derived(Base):
    def test(self):
        print(self.public)      # OK
        print(self._protected)  # OK
        # print(self.__private) # Error
\`\`\`
`,
        CAS: `
# Modificadores de acceso

En Python, los modificadores de acceso controlan la visibilidad de los miembros de la clase.

- **Público**: Accesible desde cualquier lugar (por defecto).
- **Protegido** (\`_nombre\`): Accesible dentro de la clase y sus subclases (convención).
- **Privado** (\`__nombre\`): Accesible solo dentro de la propia clase.

\`\`\`python
class Base:
    def __init__(self):
        self.publico = "Público"
        self._protegido = "Protegido"
        self.__privado = "Privado"

class Derivada(Base):
    def test(self):
        print(self.publico)      # OK
        print(self._protegido)   # OK
        # print(self.__privado)  # Error
\`\`\`
`,
        EUS: `
# Sarbide-aldatzaileak

Python-en, sarbide-aldatzaileek klaseko kideen ikusgarritasuna kontrolatzen dute.

- **Publikoa**: Edonondik eskuragarri (lehenetsia).
- **Babestua** (\`_izena\`): Klasearen barruan eta bere azpiklaseetan eskuragarri (hitzarmena).
- **Pribatua** (\`__izena\`): Klasearen barruan bakarrik eskuragarri.

\`\`\`python
class Oinarria:
    def __init__(self):
        self.publikoa = "Publikoa"
        self._babestua = "Babestua"
        self.__pribatua = "Pribatua"

class Eratorria(Oinarria):
    def test(self):
        print(self.publikoa)      # OK
        print(self._babestua)     # OK
        # print(self.__pribatua)  # Errorea
\`\`\`
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part10-04_word_game',
      title: {
        ENG: "Word game",
        CAS: "Juego de palabras",
        EUS: "Hitz-jokoa"
      },
      description: {
        ENG: "Class WordGame is provided. Create subclasses LongestWord, MostVowels, and RockPaperScissors. Override play_round.",
        CAS: "Clase WordGame dada. Crea subclases LongestWord, MostVowels y RockPaperScissors. Sobrescribe play_round.",
        EUS: "WordGame klasea ematen da. Sortu azpiklaseak LongestWord, MostVowels eta RockPaperScissors. Gainidatzi play_round."
      },
      initialCode: `import random

class WordGame:
    def __init__(self, rounds: int):
        self.wins1 = 0
        self.wins2 = 0
        self.rounds = rounds

    def round_winner(self, player1_word: str, player2_word: str):
        # draw
        return 0

    def play(self):
        print("Word game:")
        for i in range(1, self.rounds+1):
            print(f"round {i}")
            answer1 = input("player1: ")
            answer2 = input("player2: ")

            if self.round_winner(answer1, answer2) == 1:
                self.wins1 += 1
                print("player 1 won")
            elif self.round_winner(answer1, answer2) == 2:
                self.wins2 += 1
                print("player 2 won")
            else:
                pass # draw

        print("game over, wins:")
        print(f"player 1: {self.wins1}")
        print(f"player 2: {self.wins2}")

class LongestWord(WordGame):
    def __init__(self, rounds: int):
        super().__init__(rounds)

    def round_winner(self, player1_word: str, player2_word: str):
        # your code here
        return 0

class MostVowels(WordGame):
    def __init__(self, rounds: int):
        super().__init__(rounds)

    def round_winner(self, player1_word: str, player2_word: str):
        # your code here
        return 0

class RockPaperScissors(WordGame):
    def __init__(self, rounds: int):
        super().__init__(rounds)

    def round_winner(self, player1_word: str, player2_word: str):
        # your code here
        return 0
`,
      testCode: `
import unittest
class TestWordGame(unittest.TestCase):
    def test_longest(self):
        g = LongestWord(1)
        self.assertEqual(g.round_winner("long", "short"), 1)
        self.assertEqual(g.round_winner("a", "bb"), 2)
`
    }
  ]
};
