import { CoursePage } from '../mooc-exercises';

export const section2: CoursePage = {
  id: "part12-2",
  title: {
    ENG: `Lambda expressions`,
    CAS: `Expresiones lambda`,
    EUS: `Lambda adierazpenak\`
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: \`
# Lambda expressions

Lambda expressions are small anonymous functions defined with the \`lambda\` keyword.

\`\`\`python
add = lambda x, y: x + y
print(add(2, 3)) # 5
\`\`\`

They are often used as arguments to sorting functions.

\`\`\`python
people = [{"name": "Arthur\`, "age": 45}, {"name": "Bessie", "age": 12}]
people.sort(key=lambda p: p["age"])
\`\`\`
",
        CAS: \`
# Expresiones lambda

Las expresiones lambda son pequeñas funciones anónimas definidas con la palabra clave \`lambda\`.

\`\`\`python
sumar = lambda x, y: x + y
print(sumar(2, 3)) # 5
\`\`\`

A menudo se usan como argumentos para funciones de ordenación.

\`\`\`python
gente = [{"nombre": "Arthur\`, "edad": 45}, {"nombre": "Bessie", "edad": 12}]
gente.sort(key=lambda p: p["edad"])
\`\`\`
",
        EUS: \`
# Lambda adierazpenak

Lambda adierazpenak \`lambda\` gako-hitzarekin definitutako funtzio anonimo txikiak dira.

\`\`\`python
batu = lambda x, y: x + y
print(batu(2, 3)) # 5
\`\`\`

Sarritan ordenazio funtzioetarako argumentu gisa erabiltzen dira.

\`\`\`python
jendea = [{"izena": "Arthur\`, "adina": 45}, {"izena": "Bessie", "adina": 12}]
jendea.sort(key=lambda p: p["adina"])
\`\`\`
"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part12-04_climbing_route',
      title: {
        ENG: \`Climbing route`,
        CAS: `Ruta de escalada`,
        EUS: `Eskalada ibilbidea\`
      },
      description: {
        ENG: \`Class \`ClimbingRoute\` provided. Write \`sort_by_length(routes)\` (descending length) and \`sort_by_difficulty(routes)\` (descending grade, then length).`,
        CAS: `Clase \`ClimbingRoute\`. Escribe \`sort_by_length\` (desc) y \`sort_by_difficulty\` (grado desc, luego longitud desc).`,
        EUS: `\`ClimbingRoute\` klasea. Idatzi \`sort_by_length\` (beheraka) eta \`sort_by_difficulty\` (zailtasuna beheraka, gero luzera).\`
      },
      initialCode: \`class ClimbingRoute:\n    def __init__(self, name: str, length: int, grade: str):\n        self.name = name\n        self.length = length\n        self.grade = grade\n\n    def __str__(self):\n        return f\`{self.name}, length {self.length} metres, grade {self.grade}\"\n\n# Write your solution here\n"
      testCode: \`"\nimport unittest\nclass TestClimbing(unittest.TestCase):\n    def test_run(self):\n        pass\n\`
    },
    {
      type: 'exercise',
      exerciseId: 'part12-05_climbing_areas',
      title: {
        ENG: \`Climbing areas`,
        CAS: `Zonas de escalada`,
        EUS: `Eskalada eremuak\`
      },
      description: {
        ENG: \`Class \`ClimbingArea\`. Write \`sort_by_number_of_routes\` (asc) and \`sort_by_most_difficult\` (desc by hardest route grade).`,
        CAS: `Clase \`ClimbingArea\`. Escribe \`sort_by_number_of_routes\` (asc) y \`sort_by_most_difficult\` (desc por ruta más difícil).`,
        EUS: `\`ClimbingArea\` klasea. Idatzi \`sort_by_number_of_routes\` (goraka) eta \`sort_by_most_difficult\` (ibilbide zailenaren arabera beheraka).\`
      },
      initialCode: \`class ClimbingRoute:\n    # ... (assume same as above)\n    pass\n\nclass ClimbingArea:\n    def __init__(self, name: str):\n        self.name = name\n        self.__routes = []\n\n    def add_route(self, route: ClimbingRoute):\n        self.__routes.append(route)\n\n    def routes(self):\n        return len(self.__routes)\n\n    def hardest_route(self):\n        def by_difficulty(route):\n            return route.grade\n        routes_in_order = sorted(self.__routes, key=by_difficulty)\n        # return last one\n        return routes_in_order[-1]\n\n    def __str__(self):\n        return f\`{self.name}, {self.routes()} routes, hardest {self.hardest_route().grade}\"\n\n# Write your solution here\n"
      testCode: \`"\nimport unittest\nclass TestAreas(unittest.TestCase):\n    def test_run(self):\n        pass\n\`
    },
    {
      type: 'exercise',
      exerciseId: 'part12-06_ballplayers',
      title: {
        ENG: \`Ballplayers`,
        CAS: `Jugadores de pelota`,
        EUS: `Pilota jokalariak\`
      },
      description: {
        ENG: \`Class \`BallPlayer\`. Write functions \`most_goals\`, \`most_points\`, \`least_minutes\`. Return name/tuple/object respectively.`,
        CAS: `Clase \`BallPlayer\`. Escribe funciones para más goles, más puntos, menos minutos.`,
        EUS: `\`BallPlayer\` klasea. Idatzi funtzioak gol gehien, puntu gehien, minutu gutxien lortzeko.\`
      },
      initialCode: `class BallPlayer:\n    def __init__(self, name: str, number: int, goals: int, passes: int, minutes: int):\n        self.name = name\n        self.number = number\n        self.goals = goals\n        self.passes = passes\n        self.minutes = minutes\n\n    def __str__(self):\n        return (f'BallPlayer(name={self.name}, number={self.number}, '\n            f'goals={self.goals}, passes={self.passes}, minutes={self.minutes})')\n\n# Write your solution here\n`
      testCode: \`"\nimport unittest\nclass TestPlayers(unittest.TestCase):\n    def test_run(self):\n        pass\n\`
    },
    {
      type: 'exercise',
      exerciseId: 'part12-07_product_search',
      title: {
        ENG: \`Product search`,
        CAS: `Búsqueda de productos`,
        EUS: `Produktu bilaketa\`
      },
      description: {
        ENG: \`Write \`search(products: list, criterion: callable)\`. Products are tuples (name, price, stock). Return items satisfying the criterion.`,
        CAS: `Escribe \`search(products, criterion)\`. Devuelve productos que cumplen el criterio.`,
        EUS: `Idatzi \`search(products, criterion)\`. Irizpidea betetzen duten produktuak itzuli.`
      },
      initialCode: `# Write your solution here\ndef search(products: list, criterion: callable):\n    return []\n`
      testCode: `"\nimport unittest\nclass TestSearch(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    }
  ]
};