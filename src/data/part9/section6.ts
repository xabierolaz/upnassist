import { CoursePage } from '../mooc-exercises';

export const section6: CoursePage = {
  id: "part9-6",
  title: {
    ENG: "More examples with classes",
    CAS: "Más ejemplos con clases",
    EUS: "Adibide gehiago klaseekin"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\n# More examples with classes\n\n## Point and Line\n\nHere is an example of two classes, \nPoint\n and \nLine\n.\n\n\`\`\`python\nimport math\n\nclass Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __str__(self):\n        return f\"({self.x}, {self.y})\"\n\nclass Line:\n    def __init__(self, start, end):\n        self.start = start\n        self.end = end\n\n    def length(self):\n        return math.sqrt((self.end.x - self.start.x)**2 + (self.end.y - self.start.y)**2)\n\`\`\`\n\n## Default values for parameters\n\nYou can provide default values for method parameters.\n\n\`\`\`python\nclass Student:\n    def __init__(self, name, credits=0):\n        self.name = name\n        self.credits = credits\n\`\`\`\n\n**Be careful with mutable default arguments like lists!** Use \nNone\n instead.\n\n\`\`\`python\nclass Group:\n    def __init__(self, members=None):\n        if members is None:\n            self.members = []\n        else:\n            self.members = members\n\`\`\`\n",
        CAS: "\n# Más ejemplos con clases\n\n## Punto y Línea\n\nAquí hay un ejemplo de dos clases, \nPunto\n y \nLínea\n.\n\n\`\`\`python\nimport math\n\nclass Punto:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __str__(self):\n        return f\"({self.x}, {self.y})\"\n\nclass Linea:\n    def __init__(self, inicio, fin):\n        self.inicio = inicio\n        self.fin = fin\n\n    def longitud(self):\n        return math.sqrt((self.fin.x - self.inicio.x)**2 + (self.fin.y - self.inicio.y)**2)\n\`\`\`\n\n## Valores por defecto para parámetros\n\nPuedes proporcionar valores por defecto para los parámetros de los métodos.\n\n\`\`\`python\nclass Estudiante:\n    def __init__(self, nombre, creditos=0):\n        self.nombre = nombre\n        self.creditos = creditos\n\`\`\`\n\n**¡Ten cuidado con los argumentos por defecto mutables como las listas!** Usa \nNone\n en su lugar.\n\n\`\`\`python\nclass Grupo:\n    def __init__(self, miembros=None):\n        if members is None:\n            self.miembros = []\n        else:\n            self.miembros = miembros\n\`\`\`\n",
        EUS: "\n# Adibide gehiago klaseekin\n\n## Puntua eta Lerroa\n\nHona hemen bi klase, \nPuntua\n eta \nLerroa\n.\n\n\`\`\`python\nimport math\n\nclass Puntua:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __str__(self):\n        return f\"({self.x}, {self.y})\"\n\nclass Lerroa:\n    def __init__(self, hasiera, amaiera):\n        self.hasiera = hasiera\n        self.amaiera = amaiera\n\n    def luzera(self):\n        return math.sqrt((self.amaiera.x - self.hasiera.x)**2 + (self.amaiera.y - self.hasiera.y)**2)\n\`\`\`\n\n## Parametroentzako balio lehenetsiak\n\nMetodoen parametroentzako balio lehenetsiak eman ditzakezu.\n\n\`\`\`python\nclass Ikaslea:\n    def __init__(self, izena, kredituak=0):\n        self.izena = izena\n        self.kredituak = kredituak\n\`\`\`\n\n**Kontuz ibili zerrendak bezalako argumentu lehenetsi aldagarriekin!** Erabili \nNone\n horren ordez.\n\n\`\`\`python\nclass Taldea:\n    def __init__(self, kideak=None):\n        if kideak is None:\n            self.kideak = []\n        else:\n            self.kideak = kideak\n\`\`\`\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part09-15_item_suitcase_cargo',
      title: {
        ENG: "Item, Suitcase and Cargo hold",
        CAS: "Artículo, Maleta y Bodega de carga",
        EUS: "Artikulua, Maleta eta Karga-ategia"
      },
      description: {
        ENG: "Create classes `Item` (name, weight), `Suitcase` (max_weight, items), and `CargoHold` (max_weight, suitcases). Implement logic to manage weight limits and printing.",
        CAS: "Crea clases `Item`, `Suitcase`, y `CargoHold`. Gestiona límites de peso e impresión.",
        EUS: "Sortu `Item`, `Suitcase`, eta `CargoHold` klaseak. Kudeatu pisu mugak eta inprimatzea."
      },
      initialCode: "# Write your solution here\nclass Item:\n    pass\n\nclass Suitcase:\n    pass\n\nclass CargoHold:\n    pass\n",
      testCode: `\nimport unittest\nclass TestCargo(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    }
  ]
};