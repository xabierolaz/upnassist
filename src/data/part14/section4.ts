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

Create a game using Pygame.

## Requirements
- Moveable sprite.
- Collectable items or enemies.
- Clear goal.
- Score/Counter.
- Good code structure.
`,
        CAS: `
# Tu propio juego

Crea un juego usando Pygame.

## Requisitos
- Sprite movible.
- Objetos coleccionables o enemigos.
- Objetivo claro.
- Puntuación/Contador.
- Buena estructura de código.
`,
        EUS: `
# Zure jokoa

Sortu joko bat Pygame erabiliz.

## Baldintzak
- Sprite mugikorra.
- Biltzeko elementuak edo etsaiak.
- Helburu argia.
- Puntuazioa/Kontagailua.
- Kode egitura ona.
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part14-04_your_own_game',
      title: {
        ENG: "Own game",
        CAS: "Juego propio",
        EUS: "Joko propioa"
      },
      description: {
        ENG: "Implement your own game following the requirements. Be creative!",
        CAS: "Implementa tu propio juego siguiendo los requisitos. ¡Sé creativo!",
        EUS: "Inplementatu zure joko propioa baldintzak jarraituz. Izan sortzailea!"
      },
      initialCode: "import pygame\n\n# Write your game code here\n",
      testCode: "pass"
    }
  ]
};
