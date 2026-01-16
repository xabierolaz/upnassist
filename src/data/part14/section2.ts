import { CoursePage } from '../mooc-exercises';

export const section2: CoursePage = {
  id: "part14-2",
  title: {
    ENG: "Robot and boxes",
    CAS: "Robot y cajas",
    EUS: "Robota eta kaxak"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Robot and boxes

The core mechanics of Sokoban:
- The robot can move to empty squares.
- The robot can push a box if the square behind it is empty.
- The robot cannot move through walls or push two boxes at once.

## Map data

You can represent the level using a grid (list of lists or strings).

\
\`\`\`python
level = [
    "#######",
    "#  .  #",
    "#  $  #",
    "# @   #",
    "#######"
]
\
\`\`\`
`,
        CAS: `
# Robot y cajas

La mecánica central de Sokoban:
- El robot puede moverse a casillas vacías.
- El robot puede empujar una caja si la casilla detrás está vacía.
- El robot no puede atravesar paredes ni empujar dos cajas a la vez.

## Datos del mapa

Puedes representar el nivel usando una cuadrícula (lista de listas o cadenas).

\
\`\`\`python
nivel = [
    "#######",
    "#  .  #",
    "#  $  #",
    "# @   #",
    "#######"
]
\
\`\`\`
`,
        EUS: `
# Robota eta kaxak

Sokoban-en oinarrizko mekanika:
- Robota lauki hutsetara mugi daiteke.
- Robotak kaxa bat bultza dezake atzean dagoen laukia hutsik badago.
- Robotak ezin ditu hormak zeharkatu edo bi kaxa batera bultzatu.

## Mapa datuak

Maila irudikatzeko sareta bat erabil dezakezu (zerrenden zerrenda edo kateak).

\
\`\`\`python
maila = [
    "#######",
    "#  .  #",
    "#  $  #",
    "# @   #",
    "#######"
]
\
\`\`\`
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part14-02_robot_movement',
      title: {
        ENG: "Robot movement",
        CAS: "Movimiento del robot",
        EUS: "Robotaren mugimendua"
      },
      description: {
        ENG: "Implement movement logic. Handle collisions with walls and pushing boxes.",
        CAS: "Implementa la lógica de movimiento. Maneja colisiones con paredes y empuje de cajas.",
        EUS: "Inplementatu mugimenduaren logika. Kudeatu hormekin talkak eta kaxak bultzatzea."
      },
      initialCode: "# Write your solution here\n",
      testCode: `"\nimport unittest\nclass TestMovement(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    }
  ]
};