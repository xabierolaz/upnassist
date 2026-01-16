import { CoursePage } from '../mooc-exercises';

export const section1: CoursePage = {
  id: "part9-1",
  title: {
    ENG: "Objects and references",
    CAS: "Objetos y referencias",
    EUS: "Objektuak eta erreferentziak"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\n# Objects and references\n\nVariables in Python do not store objects directly, but references to objects.\n\n\`\`\`python\nlist1 = [1, 2, 3]\nlist2 = list1 # list2 refers to the same object as list1\nlist2.append(4)\nprint(list1) # [1, 2, 3, 4]\n\`\`\`\n\n## Comparing objects\n\nThe `is` operator checks if two variables refer to the exact same object. The `==` operator checks if the contents are equal.\n\n\`\`\`python\na = [1, 2, 3]\nb = [1, 2, 3]\nc = a\n\nprint(a is b) # False\nprint(a == b) # True\nprint(a is c) # True\n\`\`\`\n\n## Objects as arguments\n\nWhen you pass an object to a function, you are passing a reference. Modifications to the object inside the function affect the original object.\n\n\`\`\`python\ndef change_name(person, new_name):\n    person.name = new_name\n\`\`\`\n",
        CAS: "\n# Objetos y referencias\n\nLas variables en Python no almacenan objetos directamente, sino referencias a objetos.\n\n\`\`\`python\nlista1 = [1, 2, 3]\nlista2 = lista1 # lista2 se refiere al mismo objeto que lista1\nlista2.append(4)\nprint(lista1) # [1, 2, 3, 4]\n\`\`\`\n\n## Comparando objetos\n\nEl operador `is` verifica si dos variables se refieren exactamente al mismo objeto. El operador `==` verifica si el contenido es igual.\n\n\`\`\`python\na = [1, 2, 3]\nb = [1, 2, 3]\nc = a\n\nprint(a is b) # False\nprint(a == b) # True\nprint(a is c) # True\n\`\`\`\n\n## Objetos como argumentos\n\nCuando pasas un objeto a una función, estás pasando una referencia. Las modificaciones al objeto dentro de la función afectan al objeto original.\n\n\`\`\`python\ndef cambiar_nombre(persona, nuevo_nombre):\n    persona.nombre = nuevo_nombre\n\`\`\`\n",
        EUS: "\n# Objektuak eta erreferentziak\n\nPython-en aldagaiek ez dituzte objektuak zuzenean gordetzen, objektuen erreferentziak baizik.\n\n\`\`\`python\nzerrenda1 = [1, 2, 3]\nzerrenda2 = zerrenda1 # zerrenda2 zerrenda1-en objektu berdinera erreferentzia egiten du\nzerrenda2.append(4)\nprint(zerrenda1) # [1, 2, 3, 4]\n\`\`\`\n\n## Objektuak konparatzen\n\n`is` eragileak bi aldagai objektu berdinera erreferentzia egiten duten egiaztatzen du. `==` eragileak edukia berdina den egiaztatzen du.\n\n\`\`\`python\na = [1, 2, 3]\nb = [1, 2, 3]\nc = a\n\nprint(a is b) # False\nprint(a == b) # True\nprint(a is c) # True\n\`\`\`\n\n## Objektuak argumentu gisa\n\nObjektu bat funtzio batera pasatzen duzunean, erreferentzia bat pasatzen ari zara. Funtzio barruan objektuari egindako aldaketek jatorrizko objektuari eragiten diote.\n\n\`\`\`python\ndef izena_aldatu(pertsona, izen_berria):\n    pertsona.izena = izen_berria\n\`\`\`\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part09-01_fastest_car',
      title: {
        ENG: "Fastest car",
        CAS: "El coche más rápido",
        EUS: "Autorik azkarrena"
      },
      description: {
        ENG: "Create a function `fastest_car(cars: list)` that receives a list of Car objects and returns the name of the fastest car. Car class has `make` and `top_speed` attributes.",
        CAS: "Crea una función `fastest_car(cars: list)` que reciba una lista de objetos Car y devuelva el nombre del coche más rápido. La clase Car tiene atributos `make` y `top_speed`.",
        EUS: "Sortu `fastest_car(cars: list)` funtzioa, Car objektuen zerrenda bat jasotzen duena eta auto azkarrenaren izena itzultzen duena. Car klaseak `make` eta `top_speed` atributuak ditu."
      },
      initialCode: "class Car:\n    def __init__(self, make: str, top_speed: int):\n        self.make = make\n        self.top_speed = top_speed\n\ndef fastest_car(cars: list):\n    # write your solution here\n    pass\n",
      testCode: `\nimport unittest\nclass TestFastestCar(unittest.TestCase):\n    def test_run(self):\n        cars = [Car("A", 100), Car("B", 200), Car("C", 150)]\n        out = fastest_car(cars)\n        if out != "B":\n             self.fail(f"El coche más rápido debería ser 'B' (200), pero tu función devolvió '{out}'.")\n        self.assertEqual(out, "B")\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part09-02_passing_a_list',
      title: {
        ENG: "Passing a list",
        CAS: "Pasando una lista",
        EUS: "Zerrenda bat pasatzen"
      },
      description: {
        ENG: "The exercise template has a class Person. Create a function analyze(people: list) that returns a tuple (count, average_height, name_of_tallest).",
        CAS: "La plantilla tiene una clase Person. Crea una función analyze(people: list) que devuelva una tupla (cantidad, altura_promedio, nombre_mas_alto).",
        EUS: "Txantiloiak Person klasea du. Sortu analyze(people: list) funtzioa, tupla bat itzultzen duena (kopurua, batez_besteko_altuera, altuenaren_izena)."
      },
      initialCode: "class Person:\n    def __init__(self, name: str, height: int):\n        self.name = name\n        self.height = height\n\ndef analyze(people: list):\n    # write your solution here\n    pass\n",
      testCode: `\nimport unittest\nclass TestAnalyze(unittest.TestCase):\n    def test_run(self):\n        p = [Person("A", 100), Person("B", 200)]\n        res = analyze(p)\n        if not isinstance(res, tuple):\n             self.fail("La función debe devolver una tupla (ej: (2, 150.0, 'B')).")\n        self.assertEqual(res, (2, 150, "B"))\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part09-03_baby',
      title: {
        ENG: "Baby",
        CAS: "Bebé",
        EUS: "Haurra"
      },
      description: {
        ENG: "Create a class Baby with constructor taking name, weight and height. Default weight 3000, height 50. (Wait, was this Part 8? Maybe simple class exercise here).",
        CAS: "Crea clase Baby. (Quizás simple repaso de clases).",
        EUS: "Sortu Baby klasea."
      },
      initialCode: "# Write your solution here\nclass Baby:\n    pass\n",
      testCode: `\nimport unittest\nclass TestBaby(unittest.TestCase):\n    def test_creation(self):\n        try:\n            b = Baby("Tom", 3000)\n        except:\n            self.fail("Could not create Baby('Tom', 3000)")\n        self.assertEqual(b.weight, 3000)\n`
    }
  ]
};