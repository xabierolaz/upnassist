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

To complete the game, you need to:
1.  Check for victory (all boxes on targets).
2.  Add a move counter.
3.  Add a reset button.

## Victory condition

Iterate through all boxes and check if they are on a target square.
`,
        CAS: `
# Terminando el juego

Para completar el juego, necesitas:
1.  Verificar la victoria (todas las cajas en objetivos).
2.  Añadir un contador de movimientos.
3.  Añadir un botón de reinicio.

## Condición de victoria

Itera sobre todas las cajas y verifica si están en una casilla objetivo.
`,
        EUS: `
# Jokoa amaitzen

Jokoa osatzeko, hau egin behar duzu:
1.  Garaipena egiaztatu (kaxa guztiak helburuetan).
2.  Mugimendu kontagailua gehitu.
3.  Berrezartzeko botoia gehitu.

## Garaipen baldintza

Iteratu kaxa guztien gainean eta egiaztatu helburu lauki batean dauden.
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part14-03_finishing_touches',
      title: {
        ENG: "Finishing touches",
        CAS: "Toques finales",
        EUS: "Azken ukituak"
      },
      description: {
        ENG: "Implement victory check, move counter, and reset functionality.",
        CAS: "Implementa verificación de victoria, contador de movimientos y funcionalidad de reinicio.",
        EUS: "Inplementatu garaipen egiaztapena, mugimendu kontagailua eta berrezartze funtzionalitatea."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
class TestFinishing(unittest.TestCase):
    def test_run(self):
        pass
`
    }
  ]
};
