import { CoursePage } from '../mooc-exercises';

export const section4: CoursePage = {
  id: "part13-4",
  title: {
    ENG: "More pygame techniques",
    CAS: "Más técnicas de pygame",
    EUS: "Pygame teknika gehiago"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# More pygame techniques

## Drawing shapes

```python
pygame.draw.rect(window, (255, 0, 0), (x, y, width, height))
pygame.draw.circle(window, (0, 255, 0), (x, y), radius)
pygame.draw.line(window, (0, 0, 255), (x1, y1), (x2, y2), width)
```

## Text

```python
font = pygame.font.SysFont("Arial", 24)
text = font.render("Hello", True, (255, 255, 255))
window.blit(text, (x, y))
```
`,
        CAS: `
# Más técnicas de pygame

## Dibujar formas

```python
pygame.draw.rect(ventana, (255, 0, 0), (x, y, ancho, alto))
pygame.draw.circle(ventana, (0, 255, 0), (x, y), radio)
pygame.draw.line(ventana, (0, 0, 255), (x1, y1), (x2, y2), ancho)
```

## Texto

```python
fuente = pygame.font.SysFont("Arial", 24)
texto = fuente.render("Hola", True, (255, 255, 255))
ventana.blit(texto, (x, y))
```
`,
        EUS: `
# Pygame teknika gehiago

## Formak marrazten

```python
pygame.draw.rect(leihoa, (255, 0, 0), (x, y, zabalera, altuera))
pygame.draw.circle(leihoa, (0, 255, 0), (x, y), radioa)
pygame.draw.line(leihoa, (0, 0, 255), (x1, y1), (x2, y2), zabalera)
```

## Testua

```python
iturburua = pygame.font.SysFont("Arial", 24)
testua = iturburua.render("Kaixo", True, (255, 255, 255))
leihoa.blit(testua, (x, y))
```
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part13-11_four_walls',
      title: {
        ENG: "Four walls",
        CAS: "Cuatro paredes",
        EUS: "Lau pareta"
      },
      description: {
        ENG: "Make the robot move with arrow keys but stop at the walls (do not go off-screen).",
        CAS: "Haz que el robot se mueva con flechas pero se detenga en las paredes.",
        EUS: "Egin robota gezi-teklekin mugitu dadin baina paretetan gelditu dadin."
      },
      initialCode: "import pygame\n\n# ...\n",
      testCode: "pass"
    },
    {
      type: 'exercise',
      exerciseId: 'part13-12_robot_and_mouse',
      title: {
        ENG: "Robot and mouse",
        CAS: "Robot y ratón",
        EUS: "Robota eta sagua"
      },
      description: {
        ENG: "Make the robot follow the mouse cursor.",
        CAS: "Haz que el robot siga al cursor del ratón.",
        EUS: "Egin robotak saguaren kurtsorea jarraitu dezan."
      },
      initialCode: "import pygame\n\n# ...\n",
      testCode: "pass"
    },
    {
      type: 'exercise',
      exerciseId: 'part13-13_two_players',
      title: {
        ENG: "Two players",
        CAS: "Dos jugadores",
        EUS: "Bi jokalari"
      },
      description: {
        ENG: "Create two robots controlled by different keys (arrows vs WASD).",
        CAS: "Crea dos robots controlados por teclas diferentes (flechas vs WASD).",
        EUS: "Sortu bi robot tekla desberdinek kontrolatuta (geziak vs WASD)."
      },
      initialCode: "import pygame\n\n# ...\n",
      testCode: "pass"
    },
    {
      type: 'exercise',
      exerciseId: 'part13-14_clock',
      title: {
        ENG: "Clock",
        CAS: "Reloj",
        EUS: "Erlojua"
      },
      description: {
        ENG: "Draw a clock showing the current time. Use math.sin/cos for hands.",
        CAS: "Dibuja un reloj que muestre la hora actual.",
        EUS: "Marraztu uneko ordua erakusten duen erloju bat."
      },
      initialCode: "import pygame\nimport math\nfrom datetime import datetime\n\n# ...\n",
      testCode: "pass"
    }
  ]
};
