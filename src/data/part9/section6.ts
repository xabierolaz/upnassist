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
        ENG: `
# More examples with classes

## Point and Line

Here is an example of two classes, 
Point
 and 
Line
.

```python
import math

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x}, {self.y})"

class Line:
    def __init__(self, start, end):
        self.start = start
        self.end = end

    def length(self):
        return math.sqrt((self.end.x - self.start.x)**2 + (self.end.y - self.start.y)**2)
```

## Default values for parameters

You can provide default values for method parameters.

```python
class Student:
    def __init__(self, name, credits=0):
        self.name = name
        self.credits = credits
```

**Be careful with mutable default arguments like lists!** Use 
None
 instead.

```python
class Group:
    def __init__(self, members=None):
        if members is None:
            self.members = []
        else:
            self.members = members
```
`,
        CAS: `
# Más ejemplos con clases

## Punto y Línea

Aquí hay un ejemplo de dos clases, 
Punto
 y 
Línea
.

```python
import math

class Punto:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x}, {self.y})"

class Linea:
    def __init__(self, inicio, fin):
        self.inicio = inicio
        self.fin = fin

    def longitud(self):
        return math.sqrt((self.fin.x - self.inicio.x)**2 + (self.fin.y - self.inicio.y)**2)
```

## Valores por defecto para parámetros

Puedes proporcionar valores por defecto para los parámetros de los métodos.

```python
class Estudiante:
    def __init__(self, nombre, creditos=0):
        self.nombre = nombre
        self.creditos = creditos
```

**¡Ten cuidado con los argumentos por defecto mutables como las listas!** Usa 
None
 en su lugar.

```python
class Grupo:
    def __init__(self, miembros=None):
        if members is None:
            self.miembros = []
        else:
            self.miembros = miembros
```
`,
        EUS: `
# Adibide gehiago klaseekin

## Puntua eta Lerroa

Hona hemen bi klase, 
Puntua
 eta 
Lerroa
.

```python
import math

class Puntua:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x}, {self.y})"

class Lerroa:
    def __init__(self, hasiera, amaiera):
        self.hasiera = hasiera
        self.amaiera = amaiera

    def luzera(self):
        return math.sqrt((self.amaiera.x - self.hasiera.x)**2 + (self.amaiera.y - self.hasiera.y)**2)
```

## Parametroentzako balio lehenetsiak

Metodoen parametroentzako balio lehenetsiak eman ditzakezu.

```python
class Ikaslea:
    def __init__(self, izena, kredituak=0):
        self.izena = izena
        self.kredituak = kredituak
```

**Kontuz ibili zerrendak bezalako argumentu lehenetsi aldagarriekin!** Erabili 
None
 horren ordez.

```python
class Taldea:
    def __init__(self, kideak=None):
        if kideak is None:
            self.kideak = []
        else:
            self.kideak = kideak
```
`
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
        ENG: "Create classes Item (name, weight), Suitcase (max_weight, items list), and CargoHold (max_weight, suitcases list). Implement methods to add items/suitcases, check weight limits, and print contents.",
        CAS: "Crea clases Item, Suitcase y CargoHold. Implementa métodos para añadir, verificar peso e imprimir contenido.",
        EUS: "Sortu Item, Suitcase eta CargoHold klaseak. Inplementatu metodoak gehitzeko, pisua egiaztatzeko eta edukia inprimatzeko."
      },
      initialCode: "# Write your solution here\nclass Item:\n    pass\n\nclass Suitcase:\n    pass\n\nclass CargoHold:\n    pass\n",
      testCode: "\nimport unittest\nclass TestCargo(unittest.TestCase):\n    def test_run(self):\n        i1 = Item(\"Book\", 1)\n        i2 = Item(\"Laptop\", 2)\n        s = Suitcase(10)\n        s.add_item(i1)\n        s.add_item(i2)\n        self.assertEqual(s.weight(), 3)\n        c = CargoHold(100)\n        c.add_suitcase(s)\n        self.assertEqual(c.weight(), 3)\n"
    }
  ]
};
