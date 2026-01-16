import { CoursePage } from '../mooc-exercises';

export const section5: CoursePage = {
  id: "part9-5",
  title: {
    ENG: `Class attributes`,
    CAS: `Atributos de clase`,
    EUS: `Klase-atributuak`
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Class attributes

Class attributes are shared by all instances of a class. They are defined outside the constructor.

`python
class SavingsAccount:
    general_rate = 0.03

    def __init__(self, balance):
        self.balance = balance
`python

## Class methods

Class methods are methods that operate on the class itself, not on instances. They are decorated with `@classmethod`.

`python
class Registration:
    @classmethod
    def license_plate_valid(cls, plate):
        # ...
        return True
`python
`,
        CAS: `
# Atributos de clase

Los atributos de clase son compartidos por todas las instancias de una clase. Se definen fuera del constructor.

`python
class CuentaAhorro:
    tasa_general = 0.03

    def __init__(self, saldo):
        self.saldo = saldo
`python

## Métodos de clase

Los métodos de clase son métodos que operan sobre la clase misma, no sobre las instancias. Se decoran con `@classmethod`.

`python
class Matricula:
    @classmethod
    def matricula_valida(cls, matricula):
        # ...
        return True
`python
`,
        EUS: `
# Klase-atributuak

Klase-atributuak klase baten instantzia guztiek partekatzen dituzte. Eraikitzailez kanpo definitzen dira.

`python
class AurrezkiKontua:
    tasa_orokorra = 0.03

    def __init__(self, saldoa):
        self.saldoa = saldoa
`python

## Klase-metodoak

Klase-metodoak klasean bertan eragiten duten metodoak dira, ez instantzietan. 
@classmethod
-ekin apaintzen dira.

`python
class Matrikula:
    @classmethod
    def matrikula_baliozkoa(cls, matrikula):
        # ...
        return True
`python
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part09-13_postcodes',
      title: {
        ENG: `Postcodes`,
        CAS: `Códigos postales`,
        EUS: `Posta kodeak`
      },
      description: {
        ENG: `Add class attribute 
postcodes
 (dictionary) to class 
City
. It should be accessible via class or instances.`, 
        CAS: `Añade atributo de clase 
postcodes
 a 
City
. Accesible vía clase o instancias.`, 
        EUS: `Gehitu 
postcodes
 klase-atributua 
City
 klaseari. Klase edo instantzien bidez eskuragarria.`
      },
      initialCode: `class City:
    postcodes = {'Pamplona': '31001', 'Bilbao': '48001', 'Madrid': '28001', 'Barcelona': '08001', 'Sevilla': '41001'}

    def __init__(self, name: str, population: int):
        self.name = name
        self.population = population

    def __str__(self):
        return f"{self.name} ({self.population})"
`,
      testCode: `
import unittest

class TestCity(unittest.TestCase):
    def test_class_attribute(self):
        # Check if City class exists and has postcodes
        if 'City' not in globals():
             self.fail(tr("Class 'City' not defined.", "Clase 'City' no definida.", "'City' klasea ez da definitu."))
        
        # Verify access via class
        if not hasattr(City, 'postcodes'):
             self.fail(tr("Class 'City' missing 'postcodes' attribute.", "A la clase 'City' le falta el atributo 'postcodes'.", "'City' klaseari 'postcodes' atributua falta zaio."))
             
        # Verify correctness of data
        expected = {'Pamplona': '31001', 'Bilbao': '48001', 'Madrid': '28001', 'Barcelona': '08001', 'Sevilla': '41001'}
        self.assertEqual(City.postcodes, expected, tr("Postcodes dictionary does not match expected Spanish cities.", "El diccionario de códigos postales no coincide con las ciudades españolas esperadas.", "Posta kodeen hiztegia ez dator bat espero diren Espainiako hiriekin."))
        
        # Verify access via instance
        c = City("Pamplona", 200000)
        self.assertEqual(c.postcodes, expected, tr("Instance should verify postcodes.", "La instancia debería verificar códigos postales.", "Instantziak posta kodeak egiaztatu beharko lituzke."))
`
    },
    {
      type: 'exercise',
      exerciseId: 'part09-14_list_helper',
      title: {
        ENG: `List helper`,
        CAS: `Ayudante de lista`,
        EUS: `Zerrenda laguntzailea`
      },
      description: {
        ENG: `Create class 
ListHelper
 with static methods 
create_frequency(my_list)
 and 
doubles(my_list)
.`, 
        CAS: `Crea 
ListHelper
 con métodos estáticos 
create_frequency
 y 
doubles
.`, 
        EUS: `Sortu 
ListHelper
 klasea metodo estatikoekin.`
      },
      initialCode: `# Write your solution here
class ListHelper:
    pass
`,
      testCode: `
import unittest

class TestListHelper(unittest.TestCase):
    def test_methods(self):
        if 'ListHelper' not in globals():
             self.fail(tr("Class 'ListHelper' missing.", "Falta la clase 'ListHelper'.", "'ListHelper' klasea falta da."))

        # Test greatest_frequency
        l1 = [1, 1, 2, 1, 3]
        if not hasattr(ListHelper, 'greatest_frequency'):
             self.fail(tr("Method 'greatest_frequency' missing.", "Falta el método 'greatest_frequency'.", "'greatest_frequency' metodoa falta da."))
             
        res1 = ListHelper.greatest_frequency(l1)
        self.assertEqual(res1, 1, tr(f"greatest_frequency([1, 1, 2, 1, 3]) should be 1, got {res1}", f"greatest_frequency([1, 1, 2, 1, 3]) debería ser 1, se obtuvo {res1}", f"greatest_frequency([1, 1, 2, 1, 3]) 1 izan beharko litzateke, {res1} lortu da"))

        # Test doubles
        l2 = [1, 1, 2, 2, 3, 4, 4, 5]
        if not hasattr(ListHelper, 'doubles'):
             self.fail(tr("Method 'doubles' missing.", "Falta el método 'doubles'.", "'doubles' metodoa falta da."))
             
        res2 = ListHelper.doubles(l2)
        # 1, 2, 4 appear at least twice -> count is 3
        self.assertEqual(res2, 3, tr(f"doubles([1, 1, 2, 2, 3, 4, 4, 5]) should be 3, got {res2}", f"doubles([1, 1, 2, 2, 3, 4, 4, 5]) debería ser 3, se obtuvo {res2}", f"doubles([1, 1, 2, 2, 3, 4, 4, 5]) 3 izan beharko litzateke, {res2} lortu da"))
`
    }
  ]
};
