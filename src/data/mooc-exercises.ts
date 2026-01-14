// Tipo para textos localizables (ENG, CAS, EUS)
export type LocalizedString = string | {
  ENG: string;
  CAS: string;
  EUS: string;
};

export interface Exercise {
  id: string;
  title: LocalizedString;
  description?: LocalizedString;
  initialCode: string;
  testCode: string;
}

export interface ContentBlock {
  type: 'markdown' | 'exercise';
  content?: LocalizedString;
  exerciseId?: string;
  title?: LocalizedString;
  description?: LocalizedString;
  initialCode?: string;
  testCode?: string;
}

export interface CoursePage {
  id: string;
  title: LocalizedString;
  blocks: ContentBlock[];
}

export const getLocalizedText = (text: LocalizedString | undefined, lang: 'ENG' | 'CAS' | 'EUS'): string => {
    if (!text) return "";
    if (typeof text === 'string') return text;
    return text[lang] || text['ENG'] || "";
};

// Estructura ligera para la navegación
export const courseStructure = [
  // Part 1
  { id: "part1-1", title: { ENG: "Getting started", CAS: "Empezando", EUS: "Hasten" } },
  { id: "part1-2", title: { ENG: "Information from the user", CAS: "Información del usuario", EUS: "Erabiltzailearen informazioa" } },
  { id: "part1-3", title: { ENG: "More about variables", CAS: "Más sobre variables", EUS: "Aldagaiei buruz gehiago" } },
  { id: "part1-4", title: { ENG: "Arithmetic operations", CAS: "Operaciones aritméticas", EUS: "Eragiketa aritmetikoak" } },
  { id: "part1-5", title: { ENG: "Conditional statements", CAS: "Sentencias condicionales", EUS: "Baldintza-sententziak" } },
  // Part 2
  { id: "part2-1", title: { ENG: "Programming terminology", CAS: "Terminología de programación", EUS: "Programazio terminologia" } },
  { id: "part2-2", title: { ENG: "More conditionals", CAS: "Más condicionales", EUS: "Baldintza gehiago" } },
  { id: "part2-3", title: { ENG: "Combining conditions", CAS: "Combinando condiciones", EUS: "Baldintzak konbinatzen" } },
  { id: "part2-4", title: { ENG: "Simple loops", CAS: "Bucles simples", EUS: "Begizta sinpleak" } },
  // Part 3
  { id: "part3-1", title: { ENG: "Loops with conditions", CAS: "Bucles con condiciones", EUS: "Baldintzadun begiztak" } },
  { id: "part3-2", title: { ENG: "Working with strings", CAS: "Trabajando con cadenas", EUS: "Kateekin lanean" } },
  { id: "part3-3", title: { ENG: "More loops", CAS: "Más bucles", EUS: "Begizta gehiago" } },
  { id: "part3-4", title: { ENG: "Defining functions", CAS: "Definiendo funciones", EUS: "Funtzioak definitzen" } },
  // Part 4
  { id: "part4-1", title: { ENG: "VS Code (Intro)", CAS: "VS Code (Intro)", EUS: "VS Code (Sarrera)" } },
  { id: "part4-2", title: { ENG: "More functions", CAS: "Más funciones", EUS: "Funtzio gehiago" } },
  { id: "part4-3", title: { ENG: "Lists", CAS: "Listas", EUS: "Zerrendak" } },
  { id: "part4-4", title: { ENG: "Definite iteration", CAS: "Iteración definida", EUS: "Iterazio definitua" } },
  { id: "part4-5", title: { ENG: "Print formatting", CAS: "Formato de impresión", EUS: "Inprimatze formatua" } },
  // Part 5
  { id: "part5-1", title: { ENG: "More lists", CAS: "Más listas", EUS: "Zerrenda gehiago" } },
  { id: "part5-2", title: { ENG: "References", CAS: "Referencias", EUS: "Erreferentziak" } },
  { id: "part5-3", title: { ENG: "Dictionary", CAS: "Diccionario", EUS: "Hiztegia" } },
  { id: "part5-4", title: { ENG: "Tuple", CAS: "Tupla", EUS: "Tupla" } },
  // Part 6
  { id: "part6-1", title: { ENG: "Reading files", CAS: "Leyendo archivos", EUS: "Fitxategiak irakurtzen" } },
  { id: "part6-2", title: { ENG: "Writing files", CAS: "Escribiendo archivos", EUS: "Fitxategiak idazten" } },
  { id: "part6-3", title: { ENG: "Handling errors", CAS: "Manejando errores", EUS: "Erroreak kudeatzen" } },
  { id: "part6-4", title: { ENG: "Local and global variables", CAS: "Variables locales y globales", EUS: "Aldagai lokalak eta globalak" } },
  // Part 7
  { id: "part7-1", title: { ENG: "Modules", CAS: "Módulos", EUS: "Moduluak" } },
  { id: "part7-2", title: { ENG: "Randomness", CAS: "Aleatoriedad", EUS: "Ausazkotasuna" } },
  { id: "part7-3", title: { ENG: "Times and dates", CAS: "Tiempos y fechas", EUS: "Denborak eta datak" } },
  { id: "part7-4", title: { ENG: "Data processing", CAS: "Procesamiento de datos", EUS: "Datuen prozesamendua" } },
  { id: "part7-5", title: { ENG: "Creating modules", CAS: "Creando módulos", EUS: "Moduluak sortzen" } },
  { id: "part7-6", title: { ENG: "More features", CAS: "Más características", EUS: "Ezaugarri gehiago" } },
  // Part 8
  { id: "part8-1", title: { ENG: "Objects and methods", CAS: "Objetos y métodos", EUS: "Objektuak eta metodoak" } },
  { id: "part8-2", title: { ENG: "Classes and objects", CAS: "Clases y objetos", EUS: "Klaseak eta objektuak" } },
  { id: "part8-3", title: { ENG: "Defining classes", CAS: "Definiendo clases", EUS: "Klaseak definitzen" } },
  { id: "part8-4", title: { ENG: "Defining methods", CAS: "Definiendo métodos", EUS: "Metodoak definitzen" } },
  { id: "part8-5", title: { ENG: "More examples of classes", CAS: "Más ejemplos de clases", EUS: "Klaseen adibide gehiago" } },
  // Part 9
  { id: "part9-1", title: { ENG: "Objects and references", CAS: "Objetos y referencias", EUS: "Objektuak eta erreferentziak" } },
  { id: "part9-2", title: { ENG: "Objects as attributes", CAS: "Objetos como atributos", EUS: "Objektuak atributu gisa" } },
  { id: "part9-3", title: { ENG: "Encapsulation", CAS: "Encapsulamiento", EUS: "Enkapsulazioa" } },
  { id: "part9-4", title: { ENG: "Scope of methods", CAS: "Alcance de los métodos", EUS: "Metodoen esparrua" } },
  { id: "part9-5", title: { ENG: "Class attributes", CAS: "Atributos de clase", EUS: "Klase-atributuak" } },
  { id: "part9-6", title: { ENG: "More examples with classes", CAS: "Más ejemplos con clases", EUS: "Adibide gehiago klaseekin" } },
  // Part 10
  { id: "part10-1", title: { ENG: "Class hierarchies", CAS: "Jerarquías de clases", EUS: "Klase-hierarkiak" } },
  { id: "part10-2", title: { ENG: "Access modifiers", CAS: "Modificadores de acceso", EUS: "Sarbide-aldatzaileak" } },
  { id: "part10-3", title: { ENG: "Object oriented programming techniques", CAS: "Técnicas de programación orientada a objetos", EUS: "Objektuetara bideratutako programazio-teknikak" } },
  { id: "part10-4", title: { ENG: "Developing a larger application", CAS: "Desarrollando una aplicación más grande", EUS: "Aplikazio handiago bat garatzen" } },
  // Part 11
  { id: "part11-1", title: { ENG: "List comprehensions", CAS: "Listas por comprensión", EUS: "Zerrenda-ulermena" } },
  { id: "part11-2", title: { ENG: "More comprehensions", CAS: "Más comprensiones", EUS: "Ulermen gehiago" } },
  { id: "part11-3", title: { ENG: "Recursion", CAS: "Recursividad", EUS: "Errekurtsibitatea" } },
  { id: "part11-4", title: { ENG: "More recursion examples", CAS: "Más ejemplos de recursividad", EUS: "Errekurtsio adibide gehiago" } },
  // Part 12
  { id: "part12-1", title: { ENG: "Functions as arguments", CAS: "Funciones como argumentos", EUS: "Funtzioak argumentu gisa" } },
  { id: "part12-2", title: { ENG: "Generators", CAS: "Generadores", EUS: "Sorgailuak" } },
  { id: "part12-3", title: { ENG: "Functional programming", CAS: "Programación funcional", EUS: "Programazio funtzionala" } },
  { id: "part12-4", title: { ENG: "Regular expressions", CAS: "Expresiones regulares", EUS: "Adierazpen erregularrak" } },
  // Part 13
  { id: "part13-1", title: { ENG: "Pygame", CAS: "Pygame", EUS: "Pygame" } },
  { id: "part13-2", title: { ENG: "Animation", CAS: "Animación", EUS: "Animazioa" } },
  { id: "part13-3", title: { ENG: "Events", CAS: "Eventos", EUS: "Gertaerak" } },
  { id: "part13-4", title: { ENG: "More pygame techniques", CAS: "Más técnicas de pygame", EUS: "Pygame teknika gehiago" } },
  // Part 14
  { id: "part14-1", title: { ENG: "Game project", CAS: "Proyecto de juego", EUS: "Joko proiektua" } },
  { id: "part14-2", title: { ENG: "Robot and boxes", CAS: "Robot y cajas", EUS: "Robota eta kutxak" } },
  { id: "part14-3", title: { ENG: "Finishing the game", CAS: "Terminando el juego", EUS: "Jokoa amaitzen" } },
  { id: "part14-4", title: { ENG: "Your own game", CAS: "Tu propio juego", EUS: "Zure jokoa" } }
];

// Cargador dinámico
export const loadSection = async (id: string): Promise<CoursePage | null> => {
  try {
    switch (id) {
      case 'part1-1': return (await import('./part1/section1')).section1;
      case 'part1-2': return (await import('./part1/section2')).section2;
      case 'part1-3': return (await import('./part1/section3')).section3;
      case 'part1-4': return (await import('./part1/section4')).section4;
      case 'part1-5': return (await import('./part1/section5')).section5;
      
      case 'part2-1': return (await import('./part2/section1')).section1;
      case 'part2-2': return (await import('./part2/section2')).section2;
      case 'part2-3': return (await import('./part2/section3')).section3;
      case 'part2-4': return (await import('./part2/section4')).section4;

      case 'part3-1': return (await import('./part3/section1')).section1;
      case 'part3-2': return (await import('./part3/section2')).section2;
      case 'part3-3': return (await import('./part3/section3')).section3;
      case 'part3-4': return (await import('./part3/section4')).section4;

      case 'part4-1': return (await import('./part4/section1')).section1;
      case 'part4-2': return (await import('./part4/section2')).section2;
      case 'part4-3': return (await import('./part4/section3')).section3;
      case 'part4-4': return (await import('./part4/section4')).section4;
      case 'part4-5': return (await import('./part4/section5')).section5;

      case 'part5-1': return (await import('./part5/section1')).section1;
      case 'part5-2': return (await import('./part5/section2')).section2;
      case 'part5-3': return (await import('./part5/section3')).section3;
      case 'part5-4': return (await import('./part5/section4')).section4;

      case 'part6-1': return (await import('./part6/section1')).section1;
      case 'part6-2': return (await import('./part6/section2')).section2;
      case 'part6-3': return (await import('./part6/section3')).section3;
      case 'part6-4': return (await import('./part6/section4')).section4;

      case 'part7-1': return (await import('./part7/section1')).section1;
      case 'part7-2': return (await import('./part7/section2')).section2;
      case 'part7-3': return (await import('./part7/section3')).section3;
      case 'part7-4': return (await import('./part7/section4')).section4;
      case 'part7-5': return (await import('./part7/section5')).section5;
      case 'part7-6': return (await import('./part7/section6')).section6;

      case 'part8-1': return (await import('./part8/section1')).section1;
      case 'part8-2': return (await import('./part8/section2')).section2;
      case 'part8-3': return (await import('./part8/section3')).section3;
      case 'part8-4': return (await import('./part8/section4')).section4;
      case 'part8-5': return (await import('./part8/section5')).section5;

      case 'part9-1': return (await import('./part9/section1')).section1;
      case 'part9-2': return (await import('./part9/section2')).section2;
      case 'part9-3': return (await import('./part9/section3')).section3;
      case 'part9-4': return (await import('./part9/section4')).section4;
      case 'part9-5': return (await import('./part9/section5')).section5;
      case 'part9-6': return (await import('./part9/section6')).section6;

      case 'part10-1': return (await import('./part10/section1')).section1;
      case 'part10-2': return (await import('./part10/section2')).section2;
      case 'part10-3': return (await import('./part10/section3')).section3;
      case 'part10-4': return (await import('./part10/section4')).section4;

      case 'part11-1': return (await import('./part11/section1')).section1;
      case 'part11-2': return (await import('./part11/section2')).section2;
      case 'part11-3': return (await import('./part11/section3')).section3;
      case 'part11-4': return (await import('./part11/section4')).section4;

      case 'part12-1': return (await import('./part12/section1')).section1;
      case 'part12-2': return (await import('./part12/section2')).section2;
      case 'part12-3': return (await import('./part12/section3')).section3;
      case 'part12-4': return (await import('./part12/section4')).section4;

      case 'part13-1': return (await import('./part13/section1')).section1;
      case 'part13-2': return (await import('./part13/section2')).section2;
      case 'part13-3': return (await import('./part13/section3')).section3;
      case 'part13-4': return (await import('./part13/section4')).section4;

      case 'part14-1': return (await import('./part14/section1')).section1;
      case 'part14-2': return (await import('./part14/section2')).section2;
      case 'part14-3': return (await import('./part14/section3')).section3;
      case 'part14-4': return (await import('./part14/section4')).section4;

      default: return null;
    }
  } catch (e) {
    console.error("Error loading section", e);
    return null;
  }
};

// Deprecated: getExercise is no longer used dynamically as we load sections on demand.
// Keeping it for type signature reference if needed by other legacy components, 
// but it will always return undefined now.
export const getExercise = (id: string): Exercise | undefined => undefined;

// Playground is static
export const playgroundExercise: Exercise = {
  id: "playground",
  title: "Sandbox / Playground",
  description: "Space to experiment freely.",
  initialCode: "# Zona de pruebas\nprint(\"Hola\")\n",
  testCode: ""
};