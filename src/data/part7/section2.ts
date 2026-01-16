import { CoursePage } from '../mooc-exercises';

export const section2: CoursePage = {
  id: "part7-2",
  title: {
    ENG: `Randomness`,
    CAS: `Aleatoriedad`,
    EUS: `Ausazkotasuna\`
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: \`
# Randomness

The 
\`random\`
 module contains tools for generating random numbers.

## Generating a random number

\`\`\`python
from random import randint

print(randint(1, 6))
\`\`\`

## Other functions

- 
\`shuffle\`
: Shuffles a list in place.
- 
\`choice\`
: Picks a random element.
- 
\`sample\`
: Picks multiple unique elements.

\`\`\`python
from random import shuffle, choice, sample

my_list = [1, 2, 3, 4, 5]
shuffle(my_list)
print(my_list)

print(choice(my_list))

print(sample(my_list, 2))
\`\`\`
`,
        CAS: `
# Aleatoriedad

El módulo 
\`random\`
 contiene herramientas para generar números aleatorios.

## Generando un número aleatorio

\`\`\`python
from random import randint

print(randint(1, 6))
\`\`\`

## Otras funciones

- 
\`shuffle\`
: Baraja una lista in-situ.
- 
\`choice\`
: Elige un elemento aleatorio.
- 
\`sample\`
: Elige múltiples elementos únicos.

\`\`\`python
from random import shuffle, choice, sample

mi_lista = [1, 2, 3, 4, 5]
shuffle(mi_lista)
print(mi_lista)

print(choice(mi_lista))

print(sample(mi_lista, 2))
\`\`\`
`,
        EUS: `
# Ausazkotasuna

\`random\`
 moduluak ausazko zenbakiak sortzeko tresnak ditu.

## Ausazko zenbaki bat sortzen

\`\`\`python
from random import randint

print(randint(1, 6))
\`\`\`

## Beste funtzio batzuk

- 
\`shuffle\`
: Zerrenda bat nahasten du bertan.
- 
\`choice\`
: Ausazko elementu bat aukeratzen du.
- 
\`sample\`
: Hainbat elementu bakar aukeratzen ditu.

\`\`\`python
from random import shuffle, choice, sample

nire_zerrenda = [1, 2, 3, 4, 5]
shuffle(nire_zerrenda)
print(nire_zerrenda)

print(choice(nire_zerrenda))

print(sample(nire_zerrenda, 2))
\`\`\`
\`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part07-04_lottery_numbers',
      title: {
        ENG: \`Lottery numbers`,
        CAS: `Números de lotería`,
        EUS: `Loteria zenbakiak\`
      },
      description: {
        ENG: \`Write a function named \`lottery_numbers(amount, lower, upper)\`, which returns a list of 'amount' random numbers between 'lower' and 'upper'. The numbers must be unique and in ascending order.`,
        CAS: `Escribe una función llamada \`lottery_numbers(amount, lower, upper)\`, que devuelva una lista de 'amount' números aleatorios entre 'lower' y 'upper'. Los números deben ser únicos y estar ordenados.`,
        EUS: `Idatzi \`lottery_numbers(amount, lower, upper)\` izeneko funtzio bat. 'lower' eta 'upper' arteko 'amount' ausazko zenbaki zerrenda itzuli behar du. Zenbakiek bakarrak eta ordenatuak izan behar dute.\`
      },
      initialCode: `# Write your solution here\nfrom random import sample\n`
      testCode: \`
import unittest
class TestLottery(unittest.TestCase):
    def test_run(self):
        # We can verify the structure of the output
        pass
\`
    },
    {
      type: 'exercise',
      exerciseId: 'part07-05_password_generator_part_1',
      title: {
        ENG: \`Password generator, part 1`,
        CAS: `Generador de contraseñas, parte 1`,
        EUS: `Pasahitz sortzailea, 1. zatia\`
      },
      description: {
        ENG: \`Write a function \`generate_password(length)\` which returns a random string of the given length, consisting of lowercase letters a-z.`,
        CAS: `Escribe una función \`generate_password(length)\` que devuelva una cadena aleatoria de la longitud dada, con letras minúsculas a-z.`,
        EUS: `Idatzi \`generate_password(length)\` funtzioa, emandako luzerako ausazko kate bat itzultzen duena, a-z letra xeheekin.\`
      },
      initialCode: `# Write your solution here\nfrom random import choice\nimport string\n`
      testCode: \`
import unittest
class TestPass1(unittest.TestCase):
    def test_run(self):
        pass
\`
    },
    {
      type: 'exercise',
      exerciseId: 'part07-06_password_generator_part_2',
      title: {
        ENG: \`Password generator, part 2`,
        CAS: `Generador de contraseñas, parte 2`,
        EUS: `Pasahitz sortzailea, 2. zatia\`
      },
      description: {
        ENG: \`Write a function \`generate_strong_password(length, include_numbers, include_special)\` which returns a password. Letters are always included. Numbers and special chars are optional.`,
        CAS: `Escribe \`generate_strong_password(length, include_numbers, include_special)\`. Las letras siempre están. Números y especiales son opcionales.`,
        EUS: `Idatzi \`generate_strong_password(length, include_numbers, include_special)\`. Letrak beti daude. Zenbakiak eta karaktere bereziak aukerakoak dira.\`
      },
      initialCode: `# Write your solution here\nfrom random import choice, shuffle\nimport string\n`
      testCode: \`
import unittest
class TestPass2(unittest.TestCase):
    def test_run(self):
        pass
\`
    },
    {
      type: 'exercise',
      exerciseId: 'part07-07_dice_roller',
      title: {
        ENG: \`Dice roller`,
        CAS: `Lanzador de dados`,
        EUS: `Dado jaurtitzailea\`
      },
      description: {
        ENG: \`Write a function \`play(die1, die2, times)\` which simulates rolling two dice 'times' times. The dice ('A', 'B', 'C') have special faces: A=[3,3,3,3,3,6], B=[2,2,2,5,5,5], C=[1,4,4,4,4,4]. Return (die1_wins, die2_wins, ties).`,
        CAS: `Escribe \`play(die1, die2, times)\`. Simula tirar dos dados (A, B, C con caras especiales). Devuelve (gana1, gana2, empates).`,
        EUS: `Idatzi \`play(die1, die2, times)\`. Bi dado jaurtitzea simulatzen du (A, B, C aurpegi bereziekin). Itzuli (dado1_irabazi, dado2_irabazi, berdinketak).\`
      },
      initialCode: `# Write your solution here\nfrom random import sample\n\ndef play(die1, die2, times):\n    pass\n`
      testCode: \`
import unittest
class TestDice(unittest.TestCase):
    def test_run(self):
        pass
\`
    },
    {
      type: 'exercise',
      exerciseId: 'part07-08_random_words',
      title: {
        ENG: \`Random words`,
        CAS: `Palabras aleatorias`,
        EUS: `Ausazko hitzak\`
      },
      description: {
        ENG: \`Write a function \`words(n, beginning)\` that returns a list of 'n' random words from 'words.txt' that start with the given string. Raise ValueError if not enough words found.`,
        CAS: `Escribe \`words(n, beginning)\` que devuelva 'n' palabras aleatorias de 'words.txt' que empiecen por la cadena dada. Lanza ValueError si no hay suficientes.`,
        EUS: `Idatzi \`words(n, beginning)\` funtzioa, 'words.txt'-tik emandako katearekin hasten diren 'n' ausazko hitz itzultzen dituena. Jaurti ValueError nahikoa ez badaude.`
      },
      initialCode: `# Write your solution here\nimport random\n`
      testCode: `
import unittest
from unittest.mock import patch, mock_open

class TestRandomWords(unittest.TestCase):
    def test_run(self):
        # We simulate words.txt
        pass
`
    }
  ]
};
