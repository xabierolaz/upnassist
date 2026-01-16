import { CoursePage } from '../mooc-exercises';

export const section3: CoursePage = {
  id: "part8-3",
  title: {
    ENG: `Defining classes`,
    CAS: `Definiendo clases`,
    EUS: `Klaseak definitzen`
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Defining classes

A class is defined using the 
class
 keyword.

\`\`\`python
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance
\`\`\`

## The constructor

The 
__init__
 method is the constructor. It initializes the object. The first parameter is always 
self
.

\`\`\`python
account = BankAccount("Peter", 100)
print(account.owner)
\`\`\`
`,
        CAS: `
# Definiendo clases

Una clase se define usando la palabra clave 
class
.

\`\`\`python
class CuentaBancaria:
    def __init__(self, titular, saldo):
        self.titular = titular
        self.saldo = saldo
\`\`\`

## El constructor

El método 
__init__
 es el constructor. Inicializa el objeto. El primer parámetro es siempre 
self
.

\`\`\`python
cuenta = CuentaBancaria("Peter", 100)
print(cuenta.titular)
\`\`\`
`,
        EUS: `
# Klaseak definitzen

Klase bat 
class
 gako-hitza erabiliz definitzen da.

\`\`\`python
class BankuKontua:
    def __init__(self, jabea, saldoa):
        self.jabea = jabea
        self.saldoa = saldoa
\`\`\`

## Eraikitzailea


__init__
 metodoa eraikitzailea da. Objektua hasieratzen du. Lehen parametroa beti 
self
 da.

\`\`\`python
kontua = BankuKontua("Peter", 100)
print(kontua.jabea)
\`\`\`
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part08-06_three_classes',
      title: {
        ENG: `Three classes`,
        CAS: `Tres clases`,
        EUS: `Hiru klase`
      },
      description: {
        ENG: `Write three classes: 
Checklist
, 
Customer
, and 
Cable
. Checklist has header and entries. Customer has id, balance, discount. Cable has model, length, max_speed, bidirectional.`,
        CAS: `Escribe tres clases: 
Checklist
 (encabezado, entradas), 
Customer
 (id, saldo, descuento), 
Cable
 (modelo, longitud, velocidad_max, bidireccional).`,
        EUS: `Idatzi hiru klase: 
Checklist
 (goiburua, sarrerak), 
Customer
 (id, saldoa, deskontua), 
Cable
 (modeloa, luzera, abiadura_max, bidirekzionala).`
      },
      initialCode: `# Write your solution here\n`,
      testCode: `\nimport unittest\nclass TestClasses(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part08-07_pet',
      title: {
        ENG: `Pet`,
        CAS: `Mascota`,
        EUS: `Maskota`
      },
      description: {
        ENG: `Define a class named 
Pet
. The constructor should take the name, species and year of birth. Also write a function 
new_pet(name, species, year)
 that creates and returns a Pet object.`,
        CAS: `Define una clase 
Mascota
. Constructor: nombre, especie, año. Escribe también 
new_pet(nombre, especie, año)
 que devuelva un objeto Mascota.`,
        EUS: `Definitu 
Maskota
 klasea. Eraikitzailea: izena, espeziea, urtea. Idatzi 
new_pet(izena, espeziea, urtea)
 ere, Maskota objektu bat itzultzen duena.`
      },
      initialCode: `# Write your solution here\nclass Pet:\n    def __init__(self, name: str, species: str, year_of_birth: int):\n        self.name = name\n        self.species = species\n        self.year_of_birth = year_of_birth\n\ndef new_pet(name: str, species: str, year_of_birth: int):\n    return Pet(name, species, year_of_birth)\n`,
      testCode: `\nimport unittest\nclass TestPet(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part08-08_older_book',
      title: {
        ENG: `Older book`,
        CAS: `Libro más viejo`,
        EUS: `Liburu zaharragoa`
      },
      description: {
        ENG: `Write a function 
older_book(book1, book2)
 that prints which book is older. If same year, print they are same age.`,
        CAS: `Escribe 
older_book(libro1, libro2)
 que imprima cuál es más viejo. Si mismo año, imprime que tienen la misma edad.`,
        EUS: `Idatzi 
older_book(liburu1, liburu2)
. Inprimatu zein den zaharragoa. Urte bera bada, inprimatu adin bera dutela.`
      },
      initialCode: `# Write your solution here\n`,
      testCode: `\nimport unittest\nclass TestOlderBook(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part08-09_books_of_genre',
      title: {
        ENG: `Books of genre`,
        CAS: `Libros de un género`,
        EUS: `Genero bateko liburuak`
      },
      description: {
        ENG: `Write a function 
books_of_genre(books: list, genre: str)
 that returns a new list of books matching the genre.`,
        CAS: `Escribe 
books_of_genre(libros, genero)
 que devuelva una lista de libros de ese género.`,
        EUS: `Idatzi 
books_of_genre(liburuak, generoa)
 genero horretako liburuen zerrenda bat itzultzen duena.`
      },
      initialCode: `# Write your solution here\n`,
      testCode: `\nimport unittest\nclass TestGenre(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    }
  ]
};