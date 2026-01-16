import { CoursePage } from '../mooc-exercises';

export const section5: CoursePage = {
  id: "part8-5",
  title: {
    ENG: `More examples of classes`,
    CAS: `Más ejemplos de clases`,
    EUS: `Klaseen adibide gehiago\`
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: \`
# More examples of classes

## The \`__str__\` method

The \`__str__\` method returns a string representation of the object.

\`\`\`python
class Person:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return f"Person: {self.name}"

p = Person("Peter")
print(p) # Person: Peter
\`\`\`
`,
        CAS: `
# Más ejemplos de clases

## El método \`__str__\`

El método \`__str__\` devuelve una representación en cadena del objeto.

\`\`\`python
class Persona:
    def __init__(self, nombre):
        self.nombre = nombre

    def __str__(self):
        return f"Persona: {self.nombre}"

p = Persona("Peter")
print(p) # Persona: Peter
\`\`\`
`,
        EUS: `
# Klaseen adibide gehiago

## \`__str__\` metodoa

\`__str__\` metodoak objektuaren kate-adierazpena itzultzen du.

\`\`\`python
class Pertsona:
    def __init__(self, izena):
        self.izena = izena

    def __str__(self):
        return f"Pertsona: {self.izena}"

p = Pertsona("Peter")
print(p) # Pertsona: Peter
\`\`\`
\`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part08-15_lunchcard',
      title: {
        ENG: \`LunchCard`,
        CAS: `Tarjeta de almuerzo`,
        EUS: `Bazkari txartela\`
      },
      description: {
        ENG: \`Create \`LunchCard\` class with balance. Methods: \`eat_cheap()\`, \`eat_special()\`, \`deposit_money(amount)\`. Prevent negative balance. Main program interactions.`,
        CAS: `Crea \`LunchCard\`. Métodos: \`eat_cheap\`, \`eat_special\`, \`deposit_money\`. Evita saldo negativo.`,
        EUS: `Sortu \`LunchCard\`. Metodoak: \`eat_cheap\`, \`eat_special\`, \`deposit_money\`. Saihestu saldo negatiboa.\`
      },
      initialCode: `# Write your solution here\n`
      testCode: \`\nimport unittest\nclass TestLunch(unittest.TestCase):\n    def test_run(self):\n        pass\n\`
    },
    {
      type: 'exercise',
      exerciseId: 'part08-16_series',
      title: {
        ENG: \`Series`,
        CAS: `Series`,
        EUS: `Series\`
      },
      description: {
        ENG: \`Create class \`Series(title, seasons, genres)\`. Methods: \`__str__\`, \`rate(rating)\`. Helpers: \`minimum_grade(rating, series_list)\`, \`includes_genre(genre, series_list)\`.`,
        CAS: `Crea clase \`Series\`. Métodos: \`__str__\`, \`rate\`. Auxiliares: \`minimum_grade\`, \`includes_genre\`.`,
        EUS: `Sortu \`Series\` klasea. Metodoak: \`__str__`, `rate`. Laguntzaileak: `minimum_grade`, `includes_genre`.`
      },
      initialCode: `# Write your solution here\n`
      testCode: `\nimport unittest\nclass TestSeries(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    }
  ]
};