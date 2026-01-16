import { CoursePage } from '../mooc-exercises';

export const section4: CoursePage = {
  id: "part11-4",
  title: {
    ENG: "More classes",
    CAS: "Más clases",
    EUS: "Klase gehiago"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# More classes

Complex applications often involve multiple interacting classes.

\
\`\`\`python
class Task:
    def __init__(self, description, priority):
        self.description = description
        self.priority = priority

class TaskList:
    def __init__(self):
        self.tasks = []

    def add_task(self, task):
        self.tasks.append(task)
\
\`\`\`
`,
        CAS: `
# Más clases

Las aplicaciones complejas a menudo involucran múltiples clases interactuando.

\
\`\`\`python
class Tarea:
    def __init__(self, descripcion, prioridad):
        self.descripcion = descripcion
        self.prioridad = prioridad

class ListaTareas:
    def __init__(self):
        self.tareas = []

    def agregar_tarea(self, tarea):
        self.tareas.append(tarea)
\
\`\`\`
`,
        EUS: `
# Klase gehiago

Aplikazio konplexuek sarritan elkarreraginean dauden klase anitz izaten dituzte.

\
\`\`\`python
class Zeregina:
    def __init__(self, deskribapena, lehentasuna):
        self.deskribapena = deskribapena
        self.lehentasuna = lehentasuna

class ZereginZerrenda:
    def __init__(self):
        self.zereginak = []

    def gehitu_zeregina(self, zeregina):
        self.zereginak.append(zeregina)
\
\`\`\`
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part11-18_order_book',
      title: {
        ENG: "Order book",
        CAS: "Libro de pedidos",
        EUS: "Eskari liburua"
      },
      description: {
        ENG: "Create classes \`Task\` (description, programmer, workload) and \`OrderBook\`. \`OrderBook\` manages tasks (add, mark finished, list finished/unfinished, programmer status).",
        CAS: "Crea clases \`Task\` y \`OrderBook\`. OrderBook gestiona tareas (añadir, marcar, listar, estado programador).",
        EUS: "Sortu \`Task\` eta \`OrderBook\` klaseak. OrderBook-ek zereginak kudeatzen ditu."
      },
      initialCode: "# Write your solution here\nclass Task:\n    pass\n\nclass OrderBook:\n    pass\n",
      testCode: `\nimport unittest\nclass TestOrderBook(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part11-19_order_book_application',
      title: {
        ENG: "Order book application",
        CAS: "Aplicación de libro de pedidos",
        EUS: "Eskari liburu aplikazioa"
      },
      description: {
        ENG: "Build an interactive application for the \`OrderBook\`. Commands: 1 add order, 2 list finished, 3 list unfinished, 4 mark finished, 5 programmers, 6 status of programmer. Handle errors gracefully.",
        CAS: "Crea una app interactiva para \`OrderBook\`. Comandos varios. Maneja errores.",
        EUS: "Sortu aplikazio interaktiboa \`OrderBook\`-erako. Hainbat komando. Erroreak kudeatu."
      },
      initialCode: "# Write your solution here\n# Use the classes from previous exercise\n",
      testCode: `\nimport unittest\nclass TestOrderApp(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    }
  ]
};