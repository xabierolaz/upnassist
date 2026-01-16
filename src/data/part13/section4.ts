import { CoursePage } from '../mooc-exercises';

export const section4: CoursePage = {
  id: "part13-4",
  title: {
    ENG: `More Pygame`,
    CAS: `Más Pygame`,
    EUS: `Pygame gehiago\`
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: \`
# More Pygame

## Game logic

Separating game logic from drawing is good practice.

## Clocks and time

Using 
\`pygame.time.get_ticks()\`
 allows for timed events.
`,
        CAS: `
# Más Pygame

## Lógica del juego

Separar la lógica del juego del dibujado es una buena práctica.

## Relojes y tiempo

Usar 
\`pygame.time.get_ticks()\`
 permite eventos temporizados.
`,
        EUS: `
# Pygame gehiago

## Jokoaren logika

Jokoaren logika marrazketatik bereiztea praktika ona da.

## Erlojuak eta denbora

\`pygame.time.get_ticks()\`
 erabiltzeak denborazko gertaerak ahalbidetzen ditu.
\`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part13-15_robot_location',
      title: {
        ENG: \`Robot location`,
        CAS: `Ubicación del robot`,
        EUS: `Robotaren kokapena\`
      },
      description: {
        ENG: \`If the user clicks on the robot, it moves to a new random location. If user clicks elsewhere, nothing happens.`,
        CAS: `Si el usuario hace clic en el robot, se mueve a una nueva ubicación aleatoria.`,
        EUS: `Erabiltzaileak robotaren gainean klik egiten badu, ausazko kokapen berri batera mugitzen da.\`
      },
      initialCode: `# Write your solution here\nimport pygame\nimport random\n`
      testCode: \`
import unittest
class TestLocation(unittest.TestCase):
    def test_run(self):
        pass
\`
    },
    {
      type: 'exercise',
      exerciseId: 'part13-16_clock',
      title: {
        ENG: \`Clock`,
        CAS: `Reloj`,
        EUS: `Erlojua\`
      },
      description: {
        ENG: \`Draw an analog clock that shows the current time (hours, minutes, seconds). Update in real-time.`,
        CAS: `Dibuja un reloj analógico que muestre la hora actual. Actualiza en tiempo real.`,
        EUS: `Marraztu erloju analogiko bat uneko ordua erakusten duena.\`
      },
      initialCode: `# Write your solution here\nimport pygame\nimport datetime\nimport math\n`
      testCode: \`
import unittest
class TestClock(unittest.TestCase):
    def test_run(self):
        pass
\`
    },
    {
      type: 'exercise',
      exerciseId: 'part13-17_asteroids',
      title: {
        ENG: \`Asteroids`,
        CAS: `Asteroides`,
        EUS: `Asteroideak\`
      },
      description: {
        ENG: \`Implement a simple asteroids game. Robot moves, asteroids fall. If robot hits asteroid -> Game Over. Points for time/dodging.`,
        CAS: `Implementa un juego simple de asteroides. Robot se mueve, asteroides caen. Choque -> Fin del juego.`,
        EUS: `Inplementatu asteroide joko sinple bat. Robota mugitzen da, asteroideak erortzen dira. Talka -> Jokoa amaitu.`
      },
      initialCode: `# Write your solution here\nimport pygame\nimport random\n`
      testCode: `
import unittest
class TestAsteroids(unittest.TestCase):
    def test_run(self):
        pass
`
    }
  ]
};