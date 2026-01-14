import { CoursePage } from '../mooc-exercises';

export const section1: CoursePage = {
  id: "part14-1",
  title: {
    ENG: "Game project",
    CAS: "Proyecto de juego",
    EUS: "Joko proiektua"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Game project: Sokoban

We will build a Sokoban game.

## The Map

The map is a 2D list.

\
self.map = [[1, 1, 1],
            [1, 0, 1],
            [1, 1, 1]]
\

## Images

We load images and map them to integers.
0 = floor, 1 = wall, 2 = target, 3 = box, 4 = robot.
`,
        CAS: `
# Proyecto de juego: Sokoban

Construiremos un juego de Sokoban.

## El Mapa

El mapa es una lista 2D.

\
self.map = [[1, 1, 1],
            [1, 0, 1],
            [1, 1, 1]]
\

## Imágenes

Cargamos imágenes y las mapeamos a enteros.
0 = suelo, 1 = pared, 2 = objetivo, 3 = caja, 4 = robot.
`,
        EUS: `
# Joko proiektua: Sokoban

Sokoban joko bat eraikiko dugu.

## Mapa

Mapa 2D zerrenda bat da.

\
self.map = [[1, 1, 1],
            [1, 0, 1],
            [1, 1, 1]]
\

## Irudiak

Irudiak kargatzen ditugu eta zenbaki osoetara mapatzen ditugu.
0 = lurra, 1 = horma, 2 = helburua, 3 = kutxa, 4 = robota.
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part14-01_sokoban_grid',
      title: {
        ENG: "Sokoban grid",
        CAS: "Rejilla de Sokoban",
        EUS: "Sokoban sareta"
      },
      description: {
        ENG: "Implement the Sokoban class that loads images and draws the initial map.",
        CAS: "Implementa la clase Sokoban que carga imágenes y dibuja el mapa inicial.",
        EUS: "Inplementatu Sokoban klasea, irudiak kargatzen dituena eta hasierako mapa marrazten duena."
      },
      initialCode: "import pygame\n\nclass Sokoban:\n    def __init__(self):
        pygame.init()\n        # ...\n",
      testCode: "pass"
    }
  ]
};
