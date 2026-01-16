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
        ENG: "\n# Events\n\nPygame handles input via events.\n\n\`\`\`python\nfor event in pygame.event.get():\n    if event.type == pygame.KEYDOWN:\n        if event.key == pygame.K_LEFT:\n            print(\"Left key pressed\")\n\`\`\`\n\n## Mouse events\n\n\`\`\`python\nif event.type == pygame.MOUSEBUTTONDOWN:\n    x = event.pos[0]\n    y = event.pos[1]\n\`\`\`\n",
        CAS: "\n# Eventos\n\nPygame maneja la entrada a través de eventos.\n\n\`\`\`python\nfor event in pygame.event.get():\n    if event.type == pygame.KEYDOWN:\n        if event.key == pygame.K_LEFT:\n            print(\"Tecla izquierda presionada\")\n\`\`\`\n\n## Eventos del ratón\n\n\`\`\`python\nif event.type == pygame.MOUSEBUTTONDOWN:\n    x = event.pos[0]\n    y = event.pos[1]\n\`\`\`\n",
        EUS: "\n# Gertaerak\n\nPygame-k sarrera gertaeren bidez kudeatzen du.\n\n\`\`\`python\nfor event in pygame.event.get():\n    if event.type == pygame.KEYDOWN:\n        if event.key == pygame.K_LEFT:\n            print(\"Ezkerreko tekla sakatuta\")\n\`\`\`\n\n## Saguaren gertaerak\n\n\`\`\`python\nif event.type == pygame.MOUSEBUTTONDOWN:\n    x = event.pos[0]\n    y = event.pos[1]\n\`\`\`\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part13-11_four_directions',
      title: {
        ENG: "Four directions",
        CAS: "Cuatro direcciones",
        EUS: "Lau norabide"
      },
      description: {
        ENG: "Move the robot using arrow keys.",
        CAS: "Mueve el robot usando las flechas del teclado.",
        EUS: "Mugitu robota gezi-teklak erabiliz."
      },
      initialCode: "# Write your solution here\nimport pygame\n",
      testCode: `\nimport unittest\nclass TestDirections(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part13-12_four_walls',
      title: {
        ENG: "Four walls",
        CAS: "Cuatro paredes",
        EUS: "Lau horma"
      },
      description: {
        ENG: "Move the robot with arrows, but don't let it go outside the window.",
        CAS: "Mueve el robot, pero no dejes que salga de la ventana.",
        EUS: "Mugitu robota, baina ez utzi leihotik irteten."
      },
      initialCode: "# Write your solution here\nimport pygame\n",
      testCode: `\nimport unittest\nclass TestWalls(unittest.TestCase):\n    def test_run(self):\n        pass\n`
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
        ENG: "Two robots. One controlled by arrows, other by WASD.",
        CAS: "Dos robots. Uno controlado por flechas, otro por WASD.",
        EUS: "Bi robot. Bat geziekin kontrolatuta, bestea WASD bidez."
      },
      initialCode: "# Write your solution here\nimport pygame\n",
      testCode: `\nimport unittest\nclass TestPlayers(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part13-14_robot_and_mouse',
      title: {
        ENG: "Robot and mouse",
        CAS: "Robot y ratón",
        EUS: "Robot eta sagua"
      },
      description: {
        ENG: "The robot follows the mouse cursor.",
        CAS: "El robot sigue el cursor del ratón.",
        EUS: "Robotak saguaren kurtsorea jarraitzen du."
      },
      initialCode: "# Write your solution here\nimport pygame\n",
      testCode: `\nimport unittest\nclass TestMouse(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    }
  ]
};