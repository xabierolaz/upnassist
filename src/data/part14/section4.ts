import { CoursePage } from '../mooc-exercises';

export const section4: CoursePage = {
  id: "part14-4",
  title: {
    ENG: "Your own game",
    CAS: "Tu propio juego",
    EUS: "Zure jokoa"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Your own game

Now it's time to unleash your creativity. Design and implement a game of your choice using Pygame.

It can be:
- A platformer.
- A shooter.
- A puzzle game.
- A strategy game.

**Requirements:**
- The game must be playable.
- It must have a clear goal.
- The code must be well-structured.
`,
        CAS: `
# Tu propio juego

Ahora es el momento de liberar tu creatividad. Diseña e implementa un juego de tu elección usando Pygame.

Puede ser:
- Un juego de plataformas.
- Un shooter.
- Un juego de puzles.
- Un juego de estrategia.

**Requisitos:**
- El juego debe ser jugable.
- Debe tener un objetivo claro.
- El código debe estar bien estructurado.
`,
        EUS: `
# Zure jokoa

Orain zure sormena askatzeko garaia da. Diseinatu eta inplementatu nahi duzun joko bat Pygame erabiliz.

Izan daiteke:
- Plataforma joko bat.
- Shooter bat.
- Puzzle joko bat.
- Estrategia joko bat.

**Baldintzak:**
- Jokoak jolasteko modukoa izan behar du.
- Helburu argi bat izan behar du.
- Kodeak ondo egituratuta egon behar du.
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part14-04_own_game',
      title: {
        ENG: "Your own game",
        CAS: "Tu propio juego",
        EUS: "Zure jokoa"
      },
      description: {
        ENG: "Submit your own game project. Make sure to include all necessary assets.",
        CAS: "Envía tu proyecto de juego. Asegúrate de incluir todos los recursos necesarios.",
        EUS: "Bidali zure joko proiektua. Ziurtatu beharrezko baliabide guztiak sartzen dituzula."
      },
      initialCode: "# Write your solution here\nimport pygame\n",
      testCode: `
import unittest
class TestOwnGame(unittest.TestCase):
    def test_run(self):
        pass
`
    }
  ]
};