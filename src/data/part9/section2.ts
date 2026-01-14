import { CoursePage } from '../mooc-exercises';

export const section2: CoursePage = {
  id: "part9-2",
  title: {
    ENG: "Objects as attributes",
    CAS: "Objetos como atributos",
    EUS: "Objektuak atributu gisa"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Objects as attributes

An object can have other objects as attributes.

\`\`\`python
class Date:
    def __init__(self, d, m, y):
        self.day = d
        self.month = m
        self.year = y

class Person:
    def __init__(self, name, birthdate):
        self.name = name
        self.birthdate = birthdate # Date object

d = Date(1, 1, 2000)
p = Person("John", d)
print(p.birthdate.year) # 2000
\`\`\`

## Lists of objects

An attribute can also be a list of objects.

\`\`\`python
class Team:
    def __init__(self, name):
        self.name = name
        self.players = []

    def add_player(self, player):
        self.players.append(player)
\`\`\`
`,
        CAS: `
# Objetos como atributos

Un objeto puede tener otros objetos como atributos.

\`\`\`python
class Fecha:
    def __init__(self, d, m, a):
        self.dia = d
        self.mes = m
        self.anio = a

class Persona:
    def __init__(self, nombre, nacimiento):
        self.nombre = nombre
        self.nacimiento = nacimiento # Objeto Fecha

d = Fecha(1, 1, 2000)
p = Persona("Juan", d)
print(p.nacimiento.anio) # 2000
\`\`\`

## Listas de objetos

Un atributo también puede ser una lista de objetos.

\`\`\`python
class Equipo:
    def __init__(self, nombre):
        self.nombre = nombre
        self.jugadores = []

    def agregar_jugador(self, jugador):
        self.jugadores.append(jugador)
\`\`\`
`,
        EUS: `
# Objektuak atributu gisa

Objektu batek beste objektu batzuk izan ditzake atributu gisa.

\`\`\`python
class Data:
    def __init__(self, d, m, u):
        self.eguna = d
        self.hila = m
        self.urtea = u

class Pertsona:
    def __init__(self, izena, jaioteguna):
        self.izena = izena
        self.jaioteguna = jaioteguna # Data objektua

d = Data(1, 1, 2000)
p = Pertsona("Jon", d)
print(p.jaioteguna.urtea) # 2000
\`\`\`

## Objektu zerrendak

Atributu bat objektu zerrenda bat ere izan daiteke.

\`\`\`python
class Taldea:
    def __init__(self, izena):
        self.izena = izena
        self.jokalariak = []

    def jokalaria_gehitu(self, jokalaria):
        self.jokalariak.append(jokalaria)
\`\`\`
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part09-04_lunch_card_and_payment_terminal',
      title: {
        ENG: "Lunch card and payment terminal",
        CAS: "Tarjeta de almuerzo y terminal de pago",
        EUS: "Bazkari txartela eta ordainketa terminala"
      },
      description: {
        ENG: "Implement classes LunchCard and PaymentTerminal. Terminal handles payments (cash/card) and lunches (regular/special).",
        CAS: "Implementa clases LunchCard y PaymentTerminal.",
        EUS: "Inplementatu LunchCard eta PaymentTerminal klaseak."
      },
      initialCode: "class LunchCard:\n    pass\n\nclass PaymentTerminal:\n    pass\n",
      testCode: `
import unittest
class TestLunch(unittest.TestCase):
    def test_run(self):
        card = LunchCard(10)
        term = PaymentTerminal()
        term.eat_lunch(card)
        # assert balance changed
        pass
`
    },
    {
      type: 'exercise',
      exerciseId: 'part09-05_comparing_properties',
      title: {
        ENG: "Comparing properties",
        CAS: "Comparando propiedades",
        EUS: "Propietateak konparatzen"
      },
      description: {
        ENG: "Create class RealEstate. Methods: bigger(self, other), price_difference(self, other), more_expensive(self, other).",
        CAS: "Crea clase RealEstate con métodos de comparación.",
        EUS: "Sortu RealEstate klasea konparazio metodoekin."
      },
      initialCode: "class RealEstate:\n    def __init__(self, rooms, square_metres, price_per_sqm):\n        self.rooms = rooms\n        self.square_metres = square_metres\n        self.price_per_sqm = price_per_sqm\n",
      testCode: `
import unittest
class TestRealEstate(unittest.TestCase):
    def test_run(self):
        r1 = RealEstate(1, 20, 100)
        r2 = RealEstate(2, 40, 100)
        self.assertTrue(r2.bigger(r1))
`
    },
    {
      type: 'exercise',
      exerciseId: 'part09-06_pets',
      title: {
        ENG: "Pets",
        CAS: "Mascotas",
        EUS: "Maskotak"
      },
      description: {
        ENG: "Define class Pet and class Person. Person has a name and a pet attribute.",
        CAS: "Define clase Pet y Person. Person tiene nombre y mascota.",
        EUS: "Definitu Pet eta Person klaseak. Person-ek izena eta maskota ditu."
      },
      initialCode: "class Pet:\n    def __init__(self, name, description):\n        self.name = name
        self.description = description
\nclass Person:\n    pass\n",
      testCode: "pass"
    },
    {
      type: 'exercise',
      exerciseId: 'part09-07_box_of_presents',
      title: {
        ENG: "Box of presents",
        CAS: "Caja de regalos",
        EUS: "Opari kutxa"
      },
      description: {
        ENG: "Create classes Present (name, weight) and Box (max_weight). Box has add_present and total_weight methods.",
        CAS: "Crea clases Present y Box.",
        EUS: "Sortu Present eta Box klaseak."
      },
      initialCode: "class Present:\n    pass\n\nclass Box:\n    pass\n",
      testCode: "pass"
    }
  ]
};
