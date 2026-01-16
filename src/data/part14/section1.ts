import { CoursePage } from '../mooc-exercises';

export const section1: CoursePage = {
  id: "part14-1",
  title: {
    ENG: "Game Project",
    CAS: "Proyecto de juego",
    EUS: "Joko proiektua"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Game Project

In this final part of the course, you will create a complete game using Pygame.

The project is divided into two parts:
1.  **Sokoban:** You will implement a classic puzzle game where a robot pushes boxes.
2.  **Your own game:** You will design and implement a game of your choice.

## Sokoban

The goal is to push all boxes onto the target squares.
`,
        CAS: `
# Proyecto de juego

En esta parte final del curso, crearás un juego completo usando Pygame.

El proyecto se divide en dos partes:
1.  **Sokoban:** Implementarás un clásico juego de puzles donde un robot empuja cajas.
2.  **Tu propio juego:** Diseñarás e implementarás un juego de tu elección.

## Sokoban

El objetivo es empujar todas las cajas a las casillas objetivo.
`,
        EUS: `
# Joko proiektua

Ikastaroaren azken zati honetan, joko oso bat sortuko duzu Pygame erabiliz.

Proiektua bi zatitan banatuta dago:
1.  **Sokoban:** Robot batek kaxak bultzatzen dituen puzzle joko klasiko bat inplementatuko duzu.
2.  **Zure jokoa:** Zuk aukeratutako joko bat diseinatu eta inplementatuko duzu.

## Sokoban

Helburua kaxa guztiak helburu laukietara bultzatzea da.
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part14-01_game_setup',
      title: {
        ENG: "Game setup",
        CAS: "Configuración del juego",
        EUS: "Jokoaren konfigurazioa"
      },
      description: {
        ENG: "Initialize the game window and load the assets (robot, box, wall, target, etc.).",
        CAS: "Inicializa la ventana del juego y carga los recursos (robot, caja, pared, objetivo, etc.).",
        EUS: "Hasieratu jokoaren leihoa eta kargatu baliabideak (robota, kaxa, horma, helburua, etab.)."
      },
      initialCode: "# Write your solution here\nimport pygame\n",
      testCode: `"\nimport unittest\nclass TestSetup(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    }
  ]
};