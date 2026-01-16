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
      exerciseId: 'part09-04_lunchcard_and_paymentterminal',
      title: {
        ENG: "Lunch card and payment terminal",
        CAS: "Tarjeta de almuerzo y terminal de pago",
        EUS: "Bazkari txartela eta ordainketa terminala"
      },
      description: {
        ENG: "Implement classes `LunchCard` and `PaymentTerminal`. Terminal handles payments (cash/card) and lunches (regular/special). Update terminal cash and card balance accordingly.",
        CAS: "Implementa clases `LunchCard` y `PaymentTerminal`. La terminal maneja pagos (efectivo/tarjeta). Actualiza el efectivo de la terminal y el saldo de la tarjeta.",
        EUS: "Inplementatu `LunchCard` eta `PaymentTerminal` klaseak. Terminalak ordainketak kudeatzen ditu. Eguneratu terminalaren eskudirua eta txartelaren saldoa."
      },
      initialCode: "class LunchCard:\n    pass\n\nclass PaymentTerminal:\n    pass\n",
      testCode: `
import unittest
class TestLunchTerminal(unittest.TestCase):
    def test_run(self):
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
        ENG: "Create class `RealProperty` (rooms, sqm, price_per_sqm). Methods: `bigger(self, other)`, `price_difference(self, other)`, `more_expensive(self, other)`.",
        CAS: "Crea clase `RealProperty`. Métodos: `bigger`, `price_difference`, `more_expensive`.",
        EUS: "Sortu `RealProperty` klasea. Metodoak: `bigger`, `price_difference`, `more_expensive`."
      },
      initialCode: "class RealProperty:\n    def __init__(self, rooms, square_metres, price_per_sqm):\n        self.rooms = rooms\n        self.square_metres = square_metres\n        self.price_per_sqm = price_per_sqm\n",
      testCode: `
import unittest
class TestRealProperty(unittest.TestCase):
    def test_run(self):
        pass
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
        ENG: "Define class `Pet` (name, species) and class `Person` (name, pet). Person's `__str__` should mention the pet.",
        CAS: "Define clase `Pet` y `Person`. `__str__` de Person debe mencionar a la mascota.",
        EUS: "Definitu `Pet` eta `Person` klaseak. Person-en `__str__`-ek maskota aipatu behar du."
      },
      initialCode: "class Pet:\n    def __init__(self, name, description):\n        self.name = name\n        self.description = description\n\nclass Person:\n    pass\n",
      testCode: `
import unittest
class TestPets(unittest.TestCase):
    def test_run(self):
        pass
`
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
        ENG: "Create classes `Present` (name, weight) and `Box`. Box has `add_present(present)` and `total_weight()`. Box can hold multiple presents.",
        CAS: "Crea clases `Present` y `Box`. Box tiene `add_present` y `total_weight`.",
        EUS: "Sortu `Present` eta `Box` klaseak. Box-ek `add_present` eta `total_weight` ditu."
      },
      initialCode: "class Present:\n    pass\n\nclass Box:\n    pass\n",
      testCode: `
import unittest
class TestBox(unittest.TestCase):
    def test_run(self):
        pass
`
    }
  ]
};