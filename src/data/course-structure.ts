import { LocalizedString } from './mooc-exercises';

// This is a placeholder for the types, we'll re-export everything from the main file
// but we need a central place to define the STRUCTURE without loading all JSONs at once.

export interface SectionMetadata {
    id: string;
    title: LocalizedString;
    part: number;
}

export const courseStructureMetadata: SectionMetadata[] = [
    // Part 1
    { id: "part1-1", title: { ENG: "1. Getting Started", CAS: "1. Comenzando", EUS: "1. Hasten" }, part: 1 },
    { id: "part1-2", title: { ENG: "2. Information from the user", CAS: "2. Información del usuario", EUS: "2. Erabiltzailearen informazioa" }, part: 1 },
    { id: "part1-3", title: { ENG: "3. More about variables", CAS: "3. Más sobre variables", EUS: "3. Aldagaiei buruz gehiago" }, part: 1 },
    { id: "part1-4", title: { ENG: "4. Arithmetic operations", CAS: "4. Operaciones aritméticas", EUS: "4. Eragiketa aritmetikoak" }, part: 1 },
    { id: "part1-5", title: { ENG: "5. Conditional statements", CAS: "5. Sentencias condicionales", EUS: "5. Baldintzazko sententziak" }, part: 1 },
    
    // Part 2
    { id: "part2-1", title: { ENG: "1. Programming terminology", CAS: "1. Terminología de programación", EUS: "1. Programazio terminologia" }, part: 2 },
    { id: "part2-2", title: { ENG: "2. More conditionals", CAS: "2. Más condicionales", EUS: "2. Baldintzazko gehiago" }, part: 2 },
    { id: "part2-3", title: { ENG: "3. Combining conditions", CAS: "3. Combinando condiciones", EUS: "3. Baldintzak konbinatzen" }, part: 2 },
    { id: "part2-4", title: { ENG: "4. Simple loops", CAS: "4. Bucles simples", EUS: "4. Begizta sinpleak" }, part: 2 },

    // Part 3
    { id: "part3-1", title: { ENG: "1. More loops", CAS: "1. Más bucles", EUS: "1. Begizta gehiago" }, part: 3 },
    { id: "part3-2", title: { ENG: "2. Working with strings", CAS: "2. Trabajando con cadenas", EUS: "2. Kateekin lanean" }, part: 3 },
    { id: "part3-3", title: { ENG: "3. More loops (nested)", CAS: "3. Más bucles (anidados)", EUS: "3. Begizta gehiago (habiaratuak)" }, part: 3 },
    { id: "part3-4", title: { ENG: "4. Defining functions", CAS: "4. Definiendo funciones", EUS: "4. Funtzioak definitzen" }, part: 3 },

    // Part 4
    { id: "part4-1", title: { ENG: "1. Visual Studio Code", CAS: "1. Visual Studio Code", EUS: "1. Visual Studio Code" }, part: 4 },
    { id: "part4-2", title: { ENG: "2. More functions", CAS: "2. Más funciones", EUS: "2. Funtzio gehiago" }, part: 4 },
    { id: "part4-3", title: { ENG: "3. Lists", CAS: "3. Listas", EUS: "3. Zerrendak" }, part: 4 },
    { id: "part4-4", title: { ENG: "4. Definite iteration", CAS: "4. Iteración definida", EUS: "4. Iterazio definitua" }, part: 4 },
    { id: "part4-5", title: { ENG: "5. Print statement formatting", CAS: "5. Formateo de impresión", EUS: "5. Inprimatze-formateatzea" }, part: 4 },
    { id: "part4-6", title: { ENG: "6. Strings and lists", CAS: "6. Cadenas y listas", EUS: "6. Kateak eta zerrendak" }, part: 4 },

    // Part 5
    { id: "part5-1", title: { ENG: "1. More lists", CAS: "1. Más listas", EUS: "1. Zerrenda gehiago" }, part: 5 },
    { id: "part5-2", title: { ENG: "2. References", CAS: "2. Referencias", EUS: "2. Erreferentziak" }, part: 5 },
    { id: "part5-3", title: { ENG: "3. Dictionary", CAS: "3. Diccionario", EUS: "3. Hiztegia" }, part: 5 },
    { id: "part5-4", title: { ENG: "4. Tuple", CAS: "4. Tupla", EUS: "4. Tupla" }, part: 5 },

    // Part 6
    { id: "part6-1", title: { ENG: "1. Reading files", CAS: "1. Leyendo archivos", EUS: "1. Fitxategiak irakurtzen" }, part: 6 },
    { id: "part6-2", title: { ENG: "2. Writing files", CAS: "2. Escribiendo archivos", EUS: "2. Fitxategiak idazten" }, part: 6 },
    { id: "part6-3", title: { ENG: "3. Handling errors", CAS: "3. Manejo de errores", EUS: "3. Erroreen kudeaketa" }, part: 6 },
    { id: "part6-4", title: { ENG: "4. Local database / JSON", CAS: "4. Base de datos local / JSON", EUS: "4. Tokiko datu-basea / JSON" }, part: 6 },

    // Part 7
    { id: "part7-1", title: { ENG: "1. Modules", CAS: "1. Módulos", EUS: "1. Moduluak" }, part: 7 },
    { id: "part7-2", title: { ENG: "2. Randomness", CAS: "2. Aleatoriedad", EUS: "2. Ausazkotasuna" }, part: 7 },
    { id: "part7-3", title: { ENG: "3. Times and dates", CAS: "3. Tiempos y fechas", EUS: "3. Orduak eta datak" }, part: 7 },
    { id: "part7-4", title: { ENG: "4. Data processing", CAS: "4. Procesamiento de datos", EUS: "4. Datu-prozesatzea" }, part: 7 },
    { id: "part7-5", title: { ENG: "5. Creating modules", CAS: "5. Creando módulos", EUS: "5. Moduluak sortzen" }, part: 7 },
    { id: "part7-6", title: { ENG: "6. More features", CAS: "6. Más características", EUS: "6. Ezaugarri gehiago" }, part: 7 },

    // Part 8
    { id: "part8-1", title: { ENG: "1. Objects and methods", CAS: "1. Objetos y métodos", EUS: "1. Objektuak eta metodoak" }, part: 8 },
    { id: "part8-2", title: { ENG: "2. Classes and objects", CAS: "2. Clases y objetos", EUS: "2. Klaseak eta objektuak" }, part: 8 },
    { id: "part8-3", title: { ENG: "3. Defining classes", CAS: "3. Definiendo clases", EUS: "3. Klaseak definitzen" }, part: 8 },
    { id: "part8-4", title: { ENG: "4. Defining methods", CAS: "4. Definiendo métodos", EUS: "4. Metodoak definitzen" }, part: 8 },
    { id: "part8-5", title: { ENG: "5. More examples of classes", CAS: "5. Más ejemplos de clases", EUS: "5. Klaseen adibide gehiago" }, part: 8 },

    // Part 9
    { id: "part9-1", title: { ENG: "1. Objects and references", CAS: "1. Objetos y referencias", EUS: "1. Objektuak eta erreferentziak" }, part: 9 },
    { id: "part9-2", title: { ENG: "2. Objects as attributes", CAS: "2. Objetos como atributos", EUS: "2. Objektuak atributu gisa" }, part: 9 },
    { id: "part9-3", title: { ENG: "3. Encapsulation", CAS: "3. Encapsulamiento", EUS: "3. Kapsularatzea" }, part: 9 },
    { id: "part9-4", title: { ENG: "4. Scope of methods", CAS: "4. Ámbito de métodos", EUS: "4. Metodoen esparrua" }, part: 9 },
    { id: "part9-5", title: { ENG: "5. Class attributes", CAS: "5. Atributos de clase", EUS: "5. Klase-atributuak" }, part: 9 },
    { id: "part9-6", title: { ENG: "6. More examples with classes", CAS: "6. Más ejemplos con clases", EUS: "6. Adibide gehiago klaseekin" }, part: 9 },

    // Part 10
    { id: "part10-1", title: { ENG: "1. Class hierarchies", CAS: "1. Jerarquías de clases", EUS: "1. Klase-hierarkiak" }, part: 10 },
    { id: "part10-2", title: { ENG: "2. Access modifiers", CAS: "2. Modificadores de acceso", EUS: "2. Sarbide-aldatzaileak" }, part: 10 },
    { id: "part10-3", title: { ENG: "3. OO programming techniques", CAS: "3. Técnicas de programación OO", EUS: "3. OO programazio-teknikak" }, part: 10 },
    { id: "part10-4", title: { ENG: "4. Developing a larger application", CAS: "4. Desarrollando una aplicación más grande", EUS: "4. Aplikazio handiago bat garatzen" }, part: 10 },

    // Part 11
    { id: "part11-1", title: { ENG: "1. List comprehensions", CAS: "1. Comprensión de listas", EUS: "1. Zerrenda-ulermena" }, part: 11 },
    { id: "part11-2", title: { ENG: "2. More comprehensions", CAS: "2. Más comprensiones", EUS: "2. Ulermen gehiago" }, part: 11 },
    { id: "part11-3", title: { ENG: "3. Recursion", CAS: "3. Recursividad", EUS: "3. Errekurtsibitatea" }, part: 11 },
    { id: "part11-4", title: { ENG: "4. More recursion examples", CAS: "4. Más ejemplos de recursividad", EUS: "4. Errekurtsibitate adibide gehiago" }, part: 11 },

    // Part 12
    { id: "part12-1", title: { ENG: "1. Functions as arguments", CAS: "1. Funciones como argumentos", EUS: "1. Funtzioak argumentu gisa" }, part: 12 },
    { id: "part12-2", title: { ENG: "2. Generators", CAS: "2. Generadores", EUS: "2. Sortzaileak" }, part: 12 },
    { id: "part12-3", title: { ENG: "3. Functional programming", CAS: "3. Programación funcional", EUS: "3. Programazio funtzionala" }, part: 12 },
    { id: "part12-4", title: { ENG: "4. Regular expressions", CAS: "4. Expresiones regulares", EUS: "4. Adierazpen erregularrak" }, part: 12 },

    // Part 13
    { id: "part13-1", title: { ENG: "1. Pygame", CAS: "1. Pygame", EUS: "1. Pygame" }, part: 13 },
    { id: "part13-2", title: { ENG: "2. Animation", CAS: "2. Animación", EUS: "2. Animazioa" }, part: 13 },
    { id: "part13-3", title: { ENG: "3. Events", CAS: "3. Eventos", EUS: "3. Gertaerak" }, part: 13 },
    { id: "part13-4", title: { ENG: "4. More Pygame techniques", CAS: "4. Más técnicas de Pygame", EUS: "4. Pygame teknika gehiago" }, part: 13 },

    // Part 14
    { id: "part14-1", title: { ENG: "1. Game project", CAS: "1. Proyecto de juego", EUS: "1. Joko proiektua" }, part: 14 },
    { id: "part14-2", title: { ENG: "2. Robot and boxes", CAS: "2. Robot y cajas", EUS: "2. Robota eta kaxak" }, part: 14 },
    { id: "part14-3", title: { ENG: "3. Finishing the game", CAS: "3. Terminando el juego", EUS: "3. Jokoa amaitzen" }, part: 14 },
    { id: "part14-4", title: { ENG: "4. Your own game", CAS: "4. Tu propio juego", EUS: "4. Zure joko propioa" }, part: 14 },

    // 2. PYTHON BASICS
    { id: "ds-w02-intro", title: { ENG: "Review: Python Tips & Tricks", CAS: "Repaso: Trucos y Básicos de Python", EUS: "Berrikuspena: Python Trikimailuak" }, part: 15 },
    { id: "part15-2", title: { ENG: "Sparse Matrices (Thursday 05/02/2026)", CAS: "Matrices Dispersas (Jueves 05/02/2026)", EUS: "Matrize Sakabanatuak (Osteguna 05/02/2026)" }, part: 15 },
    { id: "part16-1", title: { ENG: "Object-Oriented Python (Monday 09/02/2026)", CAS: "Python Orientado a Objetos (Lunes 09/02/2026)", EUS: "Objektuetara Bideratutako Python (Astelehena 09/02/2026)" }, part: 16 },
    { id: "part16-2", title: { ENG: "Working with Files (Thursday 12/02/2026)", CAS: "Trabajando con Archivos (Jueves 12/02/2026)", EUS: "Fitxategiekin Lanean (Osteguna 12/02/2026)" }, part: 16 },
    { id: "part17-1", title: { ENG: "Lists, Dictionaries, Stacks (Monday 16/02/2026)", CAS: "Listas, Diccionarios, Pilas (Lunes 16/02/2026)", EUS: "Zerrendak, Hiztegiak, Pilak (Astelehena 16/02/2026)" }, part: 17 },
    { id: "part17-2", title: { ENG: "Postfix Calculator (Thursday 19/02/2026)", CAS: "Calculadora Postfija (Jueves 19/02/2026)", EUS: "Postfix Kalkulagailua (Osteguna 19/02/2026)" }, part: 17 },
    { id: "part18-1", title: { ENG: "Queues and Dequeues (Monday 23/02/2026)", CAS: "Colas y Doble Colas (Lunes 23/02/2026)", EUS: "Ilarak eta Ilara Bikoitzak (Astelehena 23/02/2026)" }, part: 18 },
    { id: "part18-2", title: { ENG: "Palindromes (Thursday 26/02/2026)", CAS: "Palíndromos (Jueves 26/02/2026)", EUS: "Palindromoak (Osteguna 26/02/2026)" }, part: 18 },
    { id: "part19-1", title: { ENG: "Buffers (Monday 02/03/2026)", CAS: "Búferes (Lunes 02/03/2026)", EUS: "Bufferrak (Astelehena 02/03/2026)" }, part: 19 },
    { id: "part19-2", title: { ENG: "Balanced Parentheses (Thursday 05/03/2026)", CAS: "Paréntesis Balanceados (Jueves 05/03/2026)", EUS: "Parentesi Orekatuak (Osteguna 05/03/2026)" }, part: 19 },
    { id: "part20-1", title: { ENG: "Linked Lists I (Monday 09/03/2026)", CAS: "Listas Enlazadas I (Lunes 09/03/2026)", EUS: "Zerrenda Estekatuak I (Astelehena 09/03/2026)" }, part: 20 },
    { id: "part20-2", title: { ENG: "Conway's Game of Life (Thursday 12/03/2026)", CAS: "Juego de la Vida de Conway (Jueves 12/03/2026)", EUS: "Conway-ren Bizitzaren Jokoa (Osteguna 12/03/2026)" }, part: 20 },
    { id: "part21-1", title: { ENG: "Linked Lists II (Monday 16/03/2026)", CAS: "Listas Enlazadas II (Lunes 16/03/2026)", EUS: "Zerrenda Estekatuak II (Astelehena 16/03/2026)" }, part: 21 },
    { id: "part21-2", title: { ENG: "No Class (Father's Day) (Thursday 19/03/2026)", CAS: "No hay clase (Día del Padre) (Jueves 19/03/2026)", EUS: "Ez dago klaserik (Aitaren Eguna) (Osteguna 19/03/2026)" }, part: 21 },
    { id: "part22-1", title: { ENG: "Linked Lists III (Monday 23/03/2026)", CAS: "Listas Enlazadas III (Lunes 23/03/2026)", EUS: "Zerrenda Estekatuak III (Astelehena 23/03/2026)" }, part: 22 },
    { id: "part22-2", title: { ENG: "Working with Linked Lists (Thursday 26/03/2026)", CAS: "Trabajando con Listas Enlazadas (Jueves 26/03/2026)", EUS: "Zerrenda Estekatuekin Lanean (Osteguna 26/03/2026)" }, part: 22 },
    { id: "part23-1", title: { ENG: "Recursion and Computational Complexity (Monday 30/03/2026)", CAS: "Recursividad y Complejidad (Lunes 30/03/2026)", EUS: "Errekurtsibitatea eta Konplexutasuna (Astelehena 30/03/2026)" }, part: 23 },
    { id: "part23-2", title: { ENG: "No Class (Easter) (Thursday 02/04/2026)", CAS: "No hay clase (Pascua) (Jueves 02/04/2026)", EUS: "Ez dago klaserik (Pazkoa) (Osteguna 02/04/2026)" }, part: 23 },
    { id: "part24-1", title: { ENG: "Binary Trees (Monday 13/04/2026)", CAS: "Árboles Binarios (Lunes 13/04/2026)", EUS: "Zuhaitz Binarioak (Astelehena 13/04/2026)" }, part: 24 },
    { id: "part24-2", title: { ENG: "Recursion Exercises (Thursday 16/04/2026)", CAS: "Ejercicios de Recursividad (Jueves 16/04/2026)", EUS: "Errekurtsibitate Ariketak (Osteguna 16/04/2026)" }, part: 24 },
    { id: "part24-3", title: { ENG: "Constructing Binary Trees (Thursday 23/04/2026)", CAS: "Construyendo Árboles Binarios (Jueves 23/04/2026)", EUS: "Zuhaitz Binarioak Eraikitzen (Osteguna 23/04/2026)" }, part: 24 },
    { id: "part25-1", title: { ENG: "Generalizing Trees (Monday 27/04/2026)", CAS: "Generalizando Árboles (Lunes 27/04/2026)", EUS: "Zuhaitzak Orokortzen (Astelehena 27/04/2026)" }, part: 25 },
    { id: "part25-2", title: { ENG: "Huffman Coding I (Thursday 30/04/2026)", CAS: "Codificación Huffman I (Jueves 30/04/2026)", EUS: "Huffman Kodifikazioa I (Osteguna 30/04/2026)" }, part: 25 },
    { id: "part26-1", title: { ENG: "Graphs (Monday 04/05/2026)", CAS: "Grafos (Lunes 04/05/2026)", EUS: "Grafoak (Astelehena 04/05/2026)" }, part: 26 },
    { id: "part26-2", title: { ENG: "Huffman Coding II (Thursday 07/05/2026)", CAS: "Codificación Huffman II (Jueves 07/05/2026)", EUS: "Huffman Kodifikazioa II (Osteguna 07/05/2026)" }, part: 26 },
    { id: "part27-1", title: { ENG: "Review (Monday 11/05/2026)", CAS: "Repaso (Lunes 11/05/2026)", EUS: "Errepasoa (Astelehena 11/05/2026)" }, part: 27 },
    { id: "part27-2", title: { ENG: "Huffman Coding III (Thursday 14/05/2026)", CAS: "Codificación Huffman III (Jueves 14/05/2026)", EUS: "Huffman Kodifikazioa III (Osteguna 14/05/2026)" }, part: 27 }
];
