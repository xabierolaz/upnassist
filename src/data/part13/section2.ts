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
# Creating an animation

The following code creates an animation where a robot moves from left to right in a pygame window:

\`\`\`python
import pygame

pygame.init()
window = pygame.display.set_mode((640, 480))

robot = pygame.image.load("robot.png")

x = 0
y = 0
clock = pygame.time.Clock()

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            exit()

    window.fill((0, 0, 0))
    window.blit(robot, (x, y))
    pygame.display.flip()

    x += 1
    clock.tick(60)
\`\`\`

When this is executed, the result should look like this:

![Pygame animation](/images/pygame_animation.gif)

## Bouncing

The following code makes the robot bounce off the side walls:

\`\`\`python
# ... setup ...
velocity = 1
while True:
    # ... events ...
    x += velocity
    if velocity > 0 and x+robot.get_width() >= 640:
        velocity = -velocity
    if velocity < 0 and x <= 0:
        velocity = -velocity
    # ... draw ...
\`\`\`

Running the above code should look like this:

![Pygame animation bouncing](/images/pygame_animation2.gif)

## Rotation

Let's create one more animation. This time the robot should rotate in a circle around the centre of the window:

\`\`\`python
# ... math import ...
angle = 0
while True:
    # ... events ...
    x = 320+math.cos(angle)*100-robot.get_width()/2
    y = 240+math.sin(angle)*100-robot.get_height()/2
    
    window.blit(robot, (x, y))
    # ... flip ...
    angle += 0.01
\`\`\`

Running the above code should look like this:

![Pygame rotation](/images/pygame_rotation.gif)
`,
        CAS: `
# Creando una animación

El siguiente código crea una animación donde un robot se mueve de izquierda a derecha en una ventana pygame:

\`\`\`python
import pygame

pygame.init()
ventana = pygame.display.set_mode((640, 480))

robot = pygame.image.load("robot.png")

x = 0
y = 0
reloj = pygame.time.Clock()

while True:
    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:
            exit()

    ventana.fill((0, 0, 0))
    ventana.blit(robot, (x, y))
    pygame.display.flip()

    x += 1
    reloj.tick(60)
\`\`\`

Cuando esto se ejecuta, el resultado debería verse así:

![Animación Pygame](/images/pygame_animation.gif)

## Rebotando

El siguiente código hace que el robot rebote en las paredes laterales:

\`\`\`python
# ... configuración ...
velocidad = 1
while True:
    # ... eventos ...
    x += velocidad
    if velocidad > 0 and x+robot.get_width() >= 640:
        velocidad = -velocidad
    if velocidad < 0 and x <= 0:
        velocidad = -velocidad
    # ... dibujar ...
\`\`\`

Ejecutar el código anterior debería verse así:

![Animación rebote](/images/pygame_animation2.gif)

## Rotación

Creemos una animación más. Esta vez el robot debe rotar en un círculo alrededor del centro de la ventana:

\`\`\`python
# ... importar math ...
angulo = 0
while True:
    # ... eventos ...
    x = 320+math.cos(angulo)*100-robot.get_width()/2
    y = 240+math.sin(angulo)*100-robot.get_height()/2
    
    ventana.blit(robot, (x, y))
    # ... actualizar ...
    angulo += 0.01
\`\`\`

Ejecutar el código anterior debería verse así:

![Rotación Pygame](/images/pygame_rotation.gif)
`,
        EUS: `
# Animazio bat sortzen

Hurrengo kodeak animazio bat sortzen du, non robota ezkerretik eskuinera mugitzen den pygame leiho batean:

\`\`\`python
import pygame

pygame.init()
leihoa = pygame.display.set_mode((640, 480))

robota = pygame.image.load("robot.png")

x = 0
y = 0
erlojua = pygame.time.Clock()

while True:
    for gertaera in pygame.event.get():
        if gertaera.type == pygame.QUIT:
            exit()

    leihoa.fill((0, 0, 0))
    leihoa.blit(robota, (x, y))
    pygame.display.flip()

    x += 1
    erlojua.tick(60)
\`\`\`

Hau exekutatzen denean, emaitzak honela beharko luke:

![Pygame animazioa](/images/pygame_animation.gif)

## Errebotatzen

Hurrengo kodeak robota alboko paretetan errebotatzea eragiten du:

\`\`\`python
# ... konfigurazioa ...
abiadura = 1
while True:
    # ... gertaerak ...
    x += abiadura
    if abiadura > 0 and x+robota.get_width() >= 640:
        abiadura = -abiadura
    if abiadura < 0 and x <= 0:
        abiadura = -abiadura
    # ... marraztu ...
\`\`\`

Goiko kodea exekutatzean honela beharko luke:

![Pygame errebotatzen](/images/pygame_animation2.gif)

## Biraketa

Sortu dezagun beste animazio bat. Oraingoan robotak zirkulu batean biratu beharko luke leihoaren erdian:

\`\`\`python
# ... math inportatu ...
angelua = 0
while True:
    # ... gertaerak ...
    x = 320+math.cos(angelua)*100-robota.get_width()/2
    y = 240+math.sin(angelua)*100-robota.get_height()/2
    
    leihoa.blit(robota, (x, y))
    # ... eguneratu ...
    angelua += 0.01
\`\`\`

Goiko kodea exekutatzean honela beharko luke:

![Pygame biraketa](/images/pygame_rotation.gif)
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
        ENG: "Make the robot move vertically from top to bottom.",
        CAS: "Haz que el robot se mueva verticalmente de arriba a abajo.",
        EUS: "Egin robota bertikalki mugitu dadin goitik behera."
      },
      initialCode: "import pygame\n\n# ...\n",
      testCode: "pass"
    },
    {
      type: 'exercise',
      exerciseId: 'part13-06_bouncing_ball',
      title: {
        ENG: "Bouncing robot",
        CAS: "Robot rebotando",
        EUS: "Robot saltoka"
      },
      description: {
        ENG: "Make the robot bounce off the walls of the window.",
        CAS: "Haz que el robot rebote en las paredes de la ventana.",
        EUS: "Egin robotak leihoaren paretetan errebotatu dezan."
      },
      initialCode: "import pygame\n\n# ...\n",
      testCode: "pass"
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
        ENG: "Create two robots moving at different speeds/directions, bouncing off walls.",
        CAS: "Crea dos robots moviéndose a diferentes velocidades/direcciones, rebotando.",
        EUS: "Sortu bi robot abiadura/norabide desberdinetan mugitzen, errebotatzen."
      },
      initialCode: "import pygame\n\n# ...\n",
      testCode: "pass"
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
        ENG: "Make 10 robots rotate in a circle around the center of the screen.",
        CAS: "Haz que 10 robots roten en círculo alrededor del centro.",
        EUS: "Egin 10 robot zirkuluan biratu daitezen zentroaren inguruan."
      },
      initialCode: "import pygame\nimport math\n\n# ...\n",
      testCode: "pass"
    }
  ]
};