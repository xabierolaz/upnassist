import { CoursePage } from '../mooc-exercises';

export const section6: CoursePage = {
  id: "part12-6",
  title: {
    ENG: "Application development",
    CAS: "Desarrollo de aplicaciones",
    EUS: "Aplikazioen garapena"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Application development

Combining everything: classes, file I/O, lambda expressions, etc.
`,
        CAS: `
# Desarrollo de aplicaciones

Combinando todo: clases, E/S de archivos, expresiones lambda, etc.
`,
        EUS: `
# Aplikazioen garapena

Dena konbinatzen: klaseak, fitxategi S/I, lambda adierazpenak, etab.
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part12-15_hockey_statistics',
      title: {
        ENG: "Hockey statistics",
        CAS: "Estadísticas de hockey",
        EUS: "Hockey estatistikak"
      },
      description: {
        ENG: "Create an application to read JSON data and allow searches: by player, teams, countries, top points, top goals. Use map/filter/sorted where appropriate.",
        CAS: "Crea app para leer JSON y buscar: por jugador, equipos, países, más puntos, más goles.",
        EUS: "Sortu aplikazioa JSON irakurtzeko eta bilaketak egiteko: jokalari, talde, herrialde, puntu gehien, gol gehien."
      },
      initialCode: "# Write your solution here\nimport json\n\nclass HockeyApplication:\n    pass\n",
      testCode: `
import unittest
class TestHockey(unittest.TestCase):
    def test_run(self):
        pass
`
    }
  ]
};
