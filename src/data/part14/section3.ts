import { CoursePage } from '../mooc-exercises';

export const section3: CoursePage = {
  id: "part14-3",
  title: {
    ENG: "Finishing the game",
    CAS: "Terminando el juego",
    EUS: "Jokoa amaitzen"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Finishing the game

We add a move counter, win condition, and controls to restart/exit.

## Checking if solved

\`\`\`python
def game_solved(self):
    for y in range(self.height):
        for x in range(self.width):
            if self.map[y][x] in [2, 6]: # Empty target or robot on target
                return False
    return True
\`\`\`
`,
        CAS: `
# Terminando el juego

Añadimos contador de movimientos, condición de victoria y controles.

## Comprobar si está resuelto

\`\`\`python
def game_solved(self):
    for y in range(self.height):
        for x in range(self.width):
            if self.map[y][x] in [2, 6]: # Objetivo vacío o robot en objetivo
                return False
    return True
\`\`\`
`,
        EUS: `
# Jokoa amaitzen

Mugimendu kontagailua, irabazteko baldintza eta kontrolak gehitzen ditugu.

## Ebatzita dagoen egiaztatzen

\`\`\`python
def game_solved(self):
    for y in range(self.height):
        for x in range(self.width):
            if self.map[y][x] in [2, 6]: # Helburu hutsa edo robota helburuan
                return False
    return True
\`\`\`
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part14-03_finished_sokoban',
      title: {
        ENG: "Finished Sokoban",
        CAS: "Sokoban terminado",
        EUS: "Sokoban amaituta"
      },
      description: {
        ENG: "Implement the full Sokoban game with move counter, win check, and restart functionality.",
        CAS: "Implementa el juego Sokoban completo con contador, victoria y reinicio.",
        EUS: "Inplementatu Sokoban joko osoa kontagailuarekin, garaipenarekin eta berrabiaraztearekin."
      },
      initialCode: "import pygame\n\nclass Sokoban:\n    # ... previous code ...\n    def game_solved(self):\n        # ...\n",
      testCode: "pass"
    }
  ]
};