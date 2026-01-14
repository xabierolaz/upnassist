import { CoursePage } from '../mooc-exercises';

export const section3: CoursePage = {
  id: "part13-3",
  title: {
    ENG: "Events",
    CAS: "Eventos",
    EUS: "Gertaerak"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Events

Pygame handles inputs through events.

```python
for event in pygame.event.get():
    if event.type == pygame.KEYDOWN:
        if event.key == pygame.K_LEFT:
            print("Left")
    if event.type == pygame.MOUSEBUTTONDOWN:
        print(event.pos)
```
`,
        CAS: `
# Eventos

Pygame maneja las entradas a través de eventos.

```python
for evento in pygame.event.get():
    if evento.type == pygame.KEYDOWN:
        if evento.key == pygame.K_LEFT:
            print("Izquierda")
    if evento.type == pygame.MOUSEBUTTONDOWN:
        print(evento.pos)
```
`,
        EUS: `
# Gertaerak

Pygame-k sarrerak gertaeren bidez kudeatzen ditu.

```python
for gertaera in pygame.event.get():
    if gertaera.type == pygame.KEYDOWN:
        if gertaera.key == pygame.K_LEFT:
            print("Ezkerra")
    if gertaera.type == pygame.MOUSEBUTTONDOWN:
        print(gertaera.pos)
```
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part13-09_four_directions',
      title: {
        ENG: "Four directions",
        CAS: "Cuatro direcciones",
        EUS: "Lau norabide"
      },
      description: {
        ENG: "Make the robot move in four directions using arrow keys.",
        CAS: "Haz que el robot se mueva en cuatro direcciones usando las flechas.",
        EUS: "Egin robota lau norabidetan mugitu dadin gezi-teklekin."
      },
      initialCode: "import pygame\n\n# ...\n",
      testCode: "pass"
    },
    {
      type: 'exercise',
      exerciseId: 'part13-10_robot_location',
      title: {
        ENG: "Robot location",
        CAS: "Ubicación del robot",
        EUS: "Robotaren kokapena"
      },
      description: {
        ENG: "Make the robot move to the location where the mouse is clicked.",
        CAS: "Haz que el robot se mueva a la ubicación donde se hace clic con el ratón.",
        EUS: "Egin robota saguarekin klik egindako lekura mugitu dadin."
      },
      initialCode: "import pygame\n\n# ...\n",
      testCode: "pass"
    }
  ]
};
