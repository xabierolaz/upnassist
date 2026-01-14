import { CoursePage } from '../mooc-exercises';

export const section2: CoursePage = {
  id: "part14-2",
  title: {
    ENG: "Robot and boxes",
    CAS: "Robot y cajas",
    EUS: "Robota eta kutxak"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Robot and boxes

We implement the movement logic.

## Movement

The 
`move`
 method calculates new coordinates.

```python
def move(self, move_y, move_x):
    robot_old_y, robot_old_x = self.find_robot()
    robot_new_y = robot_old_y + move_y
    robot_new_x = robot_old_x + move_x
```

## Moving boxes

If the new position has a box, we check if the box can be moved.
`,
        CAS: `
# Robot y cajas

Implementamos la lógica de movimiento.

## Movimiento

El método 
`move`
 calcula las nuevas coordenadas.

## Mover cajas

Si la nueva posición tiene una caja, comprobamos si la caja se puede mover.
`,
        EUS: `
# Robota eta kutxak

Mugimenduaren logika inplementatzen dugu.

## Mugimendua

`move`
 metodoak koordenatu berriak kalkulatzen ditu.

## Kutxak mugitzen

Posizio berriak kutxa bat badu, kutxa mugitu daitekeen egiaztatzen dugu.
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
        ENG: "Implement the move method to handle robot movement and box pushing.",
        CAS: "Implementa el método move para manejar el movimiento del robot y el empuje de cajas.",
        EUS: "Inplementatu move metodoa robotaren mugimendua eta kutxen bultzada kudeatzeko."
      },
      initialCode: "import pygame\n\nclass Sokoban:\n    # ... previous code ...\n    def move(self, move_y, move_x):\n        # Write your code here\n        pass\n",
      testCode: "pass"
    }
  ]
};
