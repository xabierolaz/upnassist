import { CoursePage } from '../mooc-exercises';

export const section3: CoursePage = {
  id: "part9-3",
  title: {
    ENG: `Encapsulation`,
    CAS: `Encapsulamiento`,
    EUS: `Enkapsulazioa`
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Encapsulation

Encapsulation means hiding the internal state of an object. In Python, you can make attributes private by prefixing them with two underscores __\`.

\`\`\`python
class Wallet:
    def __init__(self):
        self.__money = 0
\`\`\`

## Getters and Setters

You can use the @property decorator to create getters and setters.

\`\`\`python
class Wallet:
    def __init__(self):
        self.__money = 0

    @property
    def money(self):
        return self.__money

    @money.setter
    def money(self, value):
        if value >= 0:
            self.__money = value
        else:
            raise ValueError("Money cannot be negative")
\`\`\`
`,
        CAS: `
# Encapsulamiento

El encapsulamiento significa ocultar el estado interno de un objeto. En Python, puedes hacer atributos privados prefijándolos con dos guiones bajos __\`.

\`\`\`python
class Cartera:
    def __init__(self):
        self.__dinero = 0
\`\`\`

## Getters y Setters

Puedes usar el decorador @property para crear getters y setters.

\`\`\`python
class Cartera:
    def __init__(self):
        self.__dinero = 0

    @property
    def dinero(self):
        return self.__dinero

    @dinero.setter
    def dinero(self, valor):
        if valor >= 0:
            self.__dinero = valor
        else:
            raise ValueError("El dinero no puede ser negativo")
\`\`\`
`,
        EUS: `
# Enkapsulazioa

Enkapsulazioak objektu baten barne-egoera ezkutatzea esan nahi du. Python-en, atributuak pribatu egin ditzakezu __ aurrizkiarekin.

\`\`\`python
class DiruZorroa:
    def __init__(self):
        self.__dirua = 0
\`\`\`

## Getter-ak eta Setter-ak

@property dekoratzailea erabil dezakezu getter eta setter-ak sortzeko.

\`\`\`python
class DiruZorroa:
    def __init__(self):
        self.__dirua = 0

    @property
    def dirua(self):
        return self.__dirua

    @dirua.setter
    def dirua(self, balioa):
        if balioa >= 0:
            self.__dirua = balioa
        else:
            raise ValueError("Dirua ezin da negatiboa izan")
\`\`\`
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part09-08_shortest_person_room',
      title: {
        ENG: `Shortest person in the room`,
        CAS: `Persona más baja en la habitación`,
        EUS: `Gelako pertsona laburrena`
      },
      description: {
        ENG: `Create class Room. Methods: add(person), is_empty(), print_contents(), shortest(), remove_shortest(). Person class is provided.`,
        CAS: `Crea la clase Room. Métodos: add(person), is_empty(), print_contents(), shortest(), remove_shortest(). Se da la clase Person.`,
        EUS: `Sortu Room klasea. Metodoak: add(person), is_empty(), print_contents(), shortest(), remove_shortest(). Person klasea ematen da.`
      },
      initialCode: `class Person:\n    def __init__(self, name: str, height: int):\n        self.name = name\n        self.height = height\n    def __str__(self):\n        return f\"{self.name} ({self.height} cm)\"\n\nclass Room:\n    def __init__(self):\n        pass\n    # ...\n`
      testCode: `\nimport unittest\nclass TestRoom(unittest.TestCase):\n    def test_run(self):\n        # We assume student fills Room\n        r = Room()\n        p1 = Person("A", 100)\n        p2 = Person("B", 200)\n        r.add(p1)\n        r.add(p2)\n        self.assertEqual(r.shortest().name, "A")\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part09-09_car',
      title: {
        ENG: `Car`,
        CAS: `Coche`,
        EUS: `Autoa`
      },
      description: {
        ENG: `Create class Car with private attributes __petrol and __odometer. Methods: fill_tank(), drive().`,
        CAS: `Crea clase Car con atributos privados __petrol y __odometer. Métodos: fill_tank(), drive().`,
        EUS: `Sortu Car klasea atributu pribatuekin __petrol eta __odometer. Metodoak: fill_tank(), drive().`
      },
      initialCode: `# Write your solution here\nclass Car:\n    pass\n`
      testCode: `\nimport unittest\nclass TestCar(unittest.TestCase):\n    def test_run(self):\n        c = Car()\n        c.fill_tank()\n        c.drive(10)\n        # Check integrity if possible, or just absence of errors\n        pass\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part09-10_recording',
      title: {
        ENG: `Recording`,
        CAS: `Grabación`,
        EUS: `Grabazioa`
      },
      description: {
        ENG: `Create class Recording with a private attribute __length. Use @property for length getter and setter. Setter raises ValueError if length < 0.`,
        CAS: `Crea clase Recording con atributo privado __length. Usa @property para getter y setter. Setter lanza ValueError si length < 0.`,
        EUS: `Sortu Recording klasea atributu pribatuarekin __length. Erabili @property getter eta setter-erako. Setter-ak ValueError jaurtitzen du length < 0 bada.`
      },
      initialCode: `# Write your solution here\nclass Recording:\n    pass\n`
      testCode: `\nimport unittest\nclass TestRecording(unittest.TestCase):\n    def test_run(self):\n        r = Recording(10)\n        r.length = 20\n        self.assertEqual(r.length, 20)\n        try:\n            r.length = -1\n            self.fail("El setter debería lanzar ValueError si se intenta asignar una longitud negativa.")\n        except ValueError:\n            pass\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part09-11_weather_station',
      title: {
        ENG: `Weather station`,
        CAS: `Estación meteorológica`,
        EUS: `Estazio meteorologikoa`
      },
      description: {
        ENG: `Create class WeatherStation. Methods: add_observation(observation), number_of_observations(). Attribute __name is initialized in constructor. Observations list should be private.`,
        CAS: `Crea clase WeatherStation. Métodos: add_observation, number_of_observations. Atributo __name en constructor. Lista de observaciones privada.`,
        EUS: `Sortu WeatherStation klasea. Metodoak: add_observation, number_of_observations. __name atributua eraikitzailean. Behaketa zerrenda pribatua.`
      },
      initialCode: `# Write your solution here\nclass WeatherStation:\n    pass\n`
      testCode: `\nimport unittest\nclass TestWeather(unittest.TestCase):\n    def test_run(self):\n        s = WeatherStation("Kumpula")\n        s.add_observation("Sunny")\n        self.assertEqual(s.number_of_observations(), 1)\n`
    }
  ]
};