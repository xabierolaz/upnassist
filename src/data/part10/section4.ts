import { CoursePage } from '../mooc-exercises';

export const section4: CoursePage = {
  id: "part10-4",
  title: {
    ENG: `Application development`,
    CAS: `Desarrollo de aplicaciones`,
    EUS: `Aplikazioen garapena\`
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: \`
# Application development

Structuring a larger application is important. Using classes helps manage complexity.

A common pattern:
1.  **Domain classes:** Represent the data (e.g., 
\`Person\`
, 
\`Course\`
).
2.  **Logic/Service classes:** Handle operations (e.g., 
\`PhoneBook\`
, 
\`CourseRegistry\`
).
3.  **UI/Main class:** Handles user interaction.

\`python\`
class PhoneBookApplication:
    def __init__(self):
        self.__phonebook = PhoneBook()

    def execute(self):
        # main loop
        pass
\`
`,
        CAS: `
# Desarrollo de aplicaciones

Estructurar una aplicación más grande es importante. Usar clases ayuda a gestionar la complejidad.

Un patrón común:
1.  **Clases de dominio:** Representan los datos (ej. 
\`Persona\`
, 
\`Curso\`
).
2.  **Clases lógicas/servicio:** Manejan operaciones (ej. 
\`Agenda\`
, 
\`RegistroCursos\`
).
3.  **UI/Clase principal:** Maneja la interacción con el usuario.

\`python\`
class AplicacionAgenda:
    def __init__(self):
        self.__agenda = Agenda()

    def ejecutar(self):
        # bucle principal
        pass
\`
`,
        EUS: `
# Aplikazioen garapena

Aplikazio handiago bat egituratzea garrantzitsua da. Klaseak erabiltzeak konplexutasuna kudeatzen laguntzen du.

Eredu arrunt bat:
1.  **Domeinu klaseak:** Datuak irudikatzen dituzte (adib. 
\`Pertsona\`
, 
\`Ikastaroa\`
).
2.  **Logika/Zerbitzu klaseak:** Eragiketak kudeatzen dituzte (adib. 
\`TelefonoGida\`
, 
\`IkastaroErregistroa\`
).
3.  **UI/Klase nagusia:** Erabiltzailearekiko elkarrekintza kudeatzen du.

\`python\`
class TelefonoGidaAplikazioa:
    def __init__(self):
        self.__gida = TelefonoGida()

    def exekutatu(self):
        # begizta nagusia
        pass
\`
\`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part10-10_phone_book_v1',
      title: {
        ENG: \`Phone book, version 1`,
        CAS: `Agenda telefónica, versión 1`,
        EUS: `Telefono gida, 1. bertsioa\`
      },
      description: {
        ENG: \`Implement a phone book application. Commands: 1 search, 2 add, 3 quit. Use a \`PhoneBook\` class to store data.`,
        CAS: `Implementa una agenda. Comandos: 1 buscar, 2 añadir, 3 salir. Usa clase \`PhoneBook\`.`,
        EUS: `Inplementatu telefono gida bat. Komandoak: 1 bilatu, 2 gehitu, 3 irten. Erabili \`PhoneBook\` klasea.\`
      },
      initialCode: `# Write your solution here\nclass PhoneBook:\n    pass\n\nclass PhoneBookApplication:\n    pass\n`
      testCode: \`\`\nimport unittest\nclass TestPhoneBookV1(unittest.TestCase):\n    def test_run(self):\n        pass\n\`\`
    },
    {
      type: 'exercise',
      exerciseId: 'part10-11_phone_book_v2',
      title: {
        ENG: \`Phone book, version 2`,
        CAS: `Agenda telefónica, versión 2`,
        EUS: `Telefono gida, 2. bertsioa\`
      },
      description: {
        ENG: \`Extend the phone book. Store multiple numbers per person. Add command 1 search: prints all numbers or 'address unknown' (wait, address is next). Just multiple numbers.`,
        CAS: `Extiende la agenda. Almacena múltiples números por persona.`,
        EUS: `Zabaldu gida. Pertsona bakoitzeko zenbaki anitz gorde.\`
      },
      initialCode: `# Write your solution here\n`
      testCode: \`\`\nimport unittest\nclass TestPhoneBookV2(unittest.TestCase):\n    def test_run(self):\n        pass\n\`\`
    },
    {
      type: 'exercise',
      exerciseId: 'part10-12_course_records',
      title: {
        ENG: \`Course records`,
        CAS: `Registros de cursos`,
        EUS: `Ikastaro erregistroak\`
      },
      description: {
        ENG: \`Create an application to track course completions. Commands: 1 add course (name, grade, credits), 2 get course data (by name), 3 statistics (total credits, mean grade, grade distribution). Update grade if higher.`,
        CAS: `Crea app de cursos. 1 añadir, 2 datos curso, 3 estadísticas. Actualiza nota si es mayor.`,
        EUS: `Sortu ikastaro aplikazioa. 1 gehitu, 2 datuak lortu, 3 estatistikak. Eguneratu nota altuagoa bada.`
      },
      initialCode: `# Write your solution here\n`
      testCode: `\`\nimport unittest\nclass TestCourseRecords(unittest.TestCase):\n    def test_run(self):\n        pass\n\``
    }
  ]
};