import { CoursePage } from '../mooc-exercises';

export const section2: CoursePage = {
  id: "part13-2",
  title: {
    ENG: "Animation",
    CAS: "Animación",
    EUS: "Animazioa"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Animation

To animate, you update coordinates in a loop and redraw.

\`\`\`python
x = 0
y = 0
velocity_x = 1

while True:
    window.fill((0, 0, 0))
    window.blit(robot, (x, y))
    pygame.display.flip()
    
    x += velocity_x
\`\`\`

## Clock

Use \`pygame.time.Clock\` to control the frame rate.

\`\`\`python
clock = pygame.time.Clock()

while True:
    # ...
    clock.tick(60) # 60 FPS
\`\`\`
`,
        CAS: `
# Animación

Para animar, actualizas las coordenadas en un bucle y redibujas.

\`\`\`python
x = 0
y = 0
velocidad_x = 1

while True:
    window.fill((0, 0, 0))
    window.blit(robot, (x, y))
    pygame.display.flip()
    
    x += velocidad_x
\`\`\`

## Reloj

Usa \`pygame.time.Clock\` para controlar la tasa de fotogramas.

\`\`\`python
reloj = pygame.time.Clock()

while True:
    # ...
    reloj.tick(60) # 60 FPS
\`\`\`
`,
        EUS: `
# Animazioa

Animatzeko, koordenatuak eguneratzen dituzu begizta batean eta berriro marrazten duzu.

\`\`\`python
x = 0
y = 0
abiadura_x = 1

while True:
    window.fill((0, 0, 0))
    window.blit(robot, (x, y))
    pygame.display.flip()
    
    x += abiadura_x
\`\`\`

## Erlojua

Erabili \`pygame.time.Clock\` fotograma-tasa kontrolatzeko.

\`\`\`python
erlojua = pygame.time.Clock()

while True:
    # ...
    erlojua.tick(60) # 60 FPS
\`\`\`
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part13-05_vertical_movement',
      title: {
        ENG: "Vertical movement",
        CAS: "Movimiento vertical",
        EUS: "Mugimendu bertikala"
      },
      description: {
        ENG: "Make the robot move up and down, bouncing off the edges.",
        CAS: "Haz que el robot se mueva arriba y abajo, rebotando en los bordes.",
        EUS: "Egin robotak gora eta behera mugi dadin, ertzetan errebote eginez."
      },
      initialCode: "# Write your solution here\nimport pygame\n",
      testCode: `
import unittest
class TestVertical(unittest.TestCase):
    def test_run(self):
        pass
`
    },
    {
      type: 'exercise',
      exerciseId: 'part13-06_round_the_perimeter',
      title: {
        ENG: "Round the perimeter",
        CAS: "Alrededor del perímetro",
        EUS: "Perimetroaren inguruan"
      },
      description: {
        ENG: "Make the robot move along the edges of the window clockwise.",
        CAS: "Haz que el robot se mueva por los bordes de la ventana en sentido horario.",
        EUS: "Egin robotak leihoaren ertzetan zehar mugi dadin erlojuaren noranzkoan."
      },
      initialCode: "# Write your solution here\nimport pygame\n",
      testCode: `
import unittest
class TestPerimeter(unittest.TestCase):
    def test_run(self):
        pass
`
    },
    {
      type: 'exercise',
      exerciseId: 'part13-07_two_robots',
      title: {
        ENG: "Two robots",
        CAS: "Dos robots",
        EUS: "Bi robot"
      },
      description: {
        ENG: "Two robots moving horizontally. One top, one bottom. Different speeds.",
        CAS: "Dos robots moviéndose horizontalmente. Uno arriba, otro abajo. Velocidades diferentes.",
        EUS: "Bi robot horizontalki mugitzen. Bat goian, bestea behean. Abiadura ezberdinak."
      },
      initialCode: "# Write your solution here\nimport pygame\n",
      testCode: `
import unittest
class TestTwoRobots(unittest.TestCase):
    def test_run(self):
        pass
`
    },
    {
      type: 'exercise',
      exerciseId: 'part13-08_robot_circle',
      title: {
        ENG: "Robot circle",
        CAS: "Círculo de robots",
        EUS: "Robot zirkulua"
      },
      description: {
        ENG: "10 robots rotating in a circle around the center of the screen.",
        CAS: "10 robots rotando en círculo alrededor del centro de la pantalla.",
        EUS: "10 robot pantailaren erdian zirkulu batean biratzen."
      },
      initialCode: "# Write your solution here\nimport pygame\nimport math\n",
      testCode: `
import unittest
class TestCircle(unittest.TestCase):
    def test_run(self):
        pass
`
    },
    {
      type: 'exercise',
      exerciseId: 'part13-09_bouncing_ball',
      title: {
        ENG: "Bouncing ball",
        CAS: "Pelota rebotando",
        EUS: "Pilota saltoka"
      },
      description: {
        ENG: "A ball (use 'ball.png') bouncing around the screen.",
        CAS: "Una pelota ('ball.png') rebotando por la pantalla.",
        EUS: "Pilota bat ('ball.png') pantailan zehar saltoka."
      },
      initialCode: "# Write your solution here\nimport pygame\n",
      testCode: `
import unittest
class TestBall(unittest.TestCase):
    def test_run(self):
        pass
`
    },
    {
      type: 'exercise',
      exerciseId: 'part13-10_robot_invasion',
      title: {
        ENG: "Robot invasion",
        CAS: "Invasión de robots",
        EUS: "Robot inbasioa"
      },
      description: {
        ENG: "Robots fall from the sky randomly. If they hit the ground, they walk left/right.",
        CAS: "Robots caen del cielo aleatoriamente. Si tocan el suelo, caminan izquierda/derecha.",
        EUS: "Robotak zerutik erortzen dira ausaz. Lurra jotzen badute, ezkerrera/eskuinera ibiltzen dira."
      },
      initialCode: "# Write your solution here\nimport pygame\nimport random\n",
      testCode: `
import unittest
class TestInvasion(unittest.TestCase):
    def test_run(self):
        pass
`
    }
  ]
};
