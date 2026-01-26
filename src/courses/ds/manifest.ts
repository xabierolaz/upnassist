export const syllabusData = {
  courseName: {
    ENG: "Data Structures",
    CAS: "Estructura de Datos",
    EUS: "Datu Egitureak"
  },
  academicYear: "2025-2026",
  lecturer: {
    name: "Xabier Olaz Moratinos",
    department: {
      ENG: "Statistics, Computer Science and Mathematics",
      CAS: "Estadística, Informática y Matemáticas",
      EUS: "Estatistika, Informatika eta Matematika"
    },
    office: {
      ENG: "9001 (Basement, 'Las Encinas' building)",
      CAS: "9001 (Sótano, edificio 'Las Encinas')",
      EUS: "9001 (Sototoa, 'Las Encinas' eraikina)"
    },
    email: "xabier.olaz@unavarra.es",
    officeHours: [
      { day: { ENG: "Monday", CAS: "Lunes", EUS: "Astelehena" }, time: "16:00-18:00" },
      { day: { ENG: "Wednesday", CAS: "Miércoles", EUS: "Asteazkena" }, time: "11:00-13:00" }
    ]
  },
  schedule: {
    theory: { day: { ENG: "Monday", CAS: "Lunes", EUS: "Astelehena" }, time: "12:00-14:00", room: "A-020" },
    lab: { day: { ENG: "Thursday", CAS: "Jueves", EUS: "Osteguna" }, time: "12:00-14:00", room: "A-331" }
  },
  evaluation: [
    { 
      method: { ENG: "Theoretical/Practical Exams", CAS: "Exámenes Teórico-Prácticos", EUS: "Azterketa Teoriko-Praktikoak" }, 
      weight: 50, 
      retake: true 
    },
    { 
      method: { ENG: "Deliverables", CAS: "Entregables", EUS: "Entregagarriak" }, 
      weight: 50, 
      retake: true 
    }
  ],
  moduleTitles: {
    1: { ENG: "01. Introduction & Basics", CAS: "01. Introducción y Conceptos Básicos", EUS: "01. Sarrera eta Oinarriak" },
    2: { ENG: "02. Sparse Matrices", CAS: "02. Matrices Dispersas", EUS: "02. Matrize Sakabanatuak" },
    3: { ENG: "03. Stacks & Queues", CAS: "03. Pilas y Colas", EUS: "03. Pilak eta Ilarak" },
    4: { ENG: "04. Postfix Calculator", CAS: "04. Calculadora Postfija", EUS: "04. Postfix Kalkulagailua" },
    5: { ENG: "05. Linked Lists", CAS: "05. Listas Enlazadas", EUS: "05. Zerrenda Estekatuak" },
    6: { ENG: "06. Algorithmic Complexity", CAS: "06. Complejidad Algorítmica", EUS: "06. Konplexutasun Algoritmikoa" },
    7: { ENG: "07. Recursion", CAS: "07. Recursividad", EUS: "07. Errekurtsibitatea" },
    8: { ENG: "08. Binary Trees", CAS: "08. Árboles Binarios", EUS: "08. Zuhaitz Binarioak" },
    9: { ENG: "09. Midterm Exam 1", CAS: "09. Examen Parcial 1", EUS: "09. 1. Azterketa Partziala" },
    10: { ENG: "10. Graphs", CAS: "10. Grafos", EUS: "10. Grafoak" },
    11: { ENG: "11. HOLIDAY (Easter)", CAS: "11. FESTIVO (Semana Santa)", EUS: "11. JAIEGUNA (Aste Santua)" },
    12: { ENG: "12. Advanced Graphs", CAS: "12. Grafos Avanzados", EUS: "12. Grafo Aurreratuak" },
    13: { ENG: "13. Conway's Game of Life", CAS: "13. Juego de la Vida (Conway)", EUS: "13. Conway-ren Bizitzaren Jokoa" },
    14: { ENG: "14. Battleship (Setup)", CAS: "14. Hundir la Flota (Planteamiento)", EUS: "14. Hondoratu Itsasontzia (Planteamendua)" },
    15: { ENG: "15. Battleship (Development)", CAS: "15. Hundir la Flota (Desarrollo)", EUS: "15. Hondoratu Itsasontzia (Garapena)" },
    16: { ENG: "16. Battleship (Finalization)", CAS: "16. Hundir la Flota (Finalización)", EUS: "16. Hondoratu Itsasontzia (Amaiera)" },
    17: { ENG: "17. Final Exam & Retake", CAS: "17. Examen Final y Recuperación", EUS: "17. Azterketa Finala eta Berreskurapena" }
  },
  calendar: [
    // Week 1
    { week: 1, date: "Jan 26", topic: { ENG: "Presentation", CAS: "Presentación", EUS: "Aurkezpena" }, type: "Theory" },
    { week: 1, date: "Jan 29", topic: { ENG: "Session 2", CAS: "Sesión 2 (Sin clase)", EUS: "2. Saioa (Klasetik Gabe)" }, type: "Lab" },

    // Week 2
    { week: 2, date: "Feb 02", topic: { ENG: "Review Python basics / Tips and tricks", CAS: "Repaso Python / Trucos", EUS: "Python Berrikuspena / Trikimailuak" }, type: "Theory" },
    { week: 2, date: "Feb 05", topic: { ENG: "Sparse Matrices", CAS: "Matrices Dispersas", EUS: "Matrize Sakabanatuak" }, type: "Lab" },

    // Week 3
    { week: 3, date: "Feb 09", topic: { ENG: "Object-Oriented Python", CAS: "Python Orientado a Objetos", EUS: "Objektuetara Bideratutako Python" }, type: "Theory" },
    { week: 3, date: "Feb 12", topic: { ENG: "Working with Files", CAS: "Trabajando con Archivos", EUS: "Fitxategiekin Lanean" }, type: "Lab" },

    // Week 4
    { week: 4, date: "Feb 16", topic: { ENG: "Lists, Dictionaries, Stacks", CAS: "Listas, Diccionarios, Pilas", EUS: "Zerrendak, Hiztegiak, Pilak" }, type: "Theory" },
    { week: 4, date: "Feb 19", topic: { ENG: "Postfix Calculator", CAS: "Calculadora Postfija", EUS: "Postfix Kalkulagailua" }, type: "Lab" },

    // Week 5
    { week: 5, date: "Feb 23", topic: { ENG: "Queues and Dequeues", CAS: "Colas y Doble Colas", EUS: "Ilarak eta Ilara Bikoitzak" }, type: "Theory" },
    { week: 5, date: "Feb 26", topic: { ENG: "Palindromes", CAS: "Palíndromos", EUS: "Palindromoak" }, type: "Lab" },

    // Week 6
    { week: 6, date: "Mar 02", topic: { ENG: "Buffers", CAS: "Búferes", EUS: "Bufferrak" }, type: "Theory" },
    { week: 6, date: "Mar 05", topic: { ENG: "Balanced Parentheses", CAS: "Paréntesis Balanceados", EUS: "Parentesi Orekatuak" }, type: "Lab" },

    // Week 7
    { week: 7, date: "Mar 09", topic: { ENG: "Linked Lists I", CAS: "Listas Enlazadas I", EUS: "Zerrenda Estekatuak I" }, type: "Theory" },
    { week: 7, date: "Mar 12", topic: { ENG: "Conway's Game of Life", CAS: "Juego de la Vida de Conway", EUS: "Conway-ren Bizitzaren Jokoa" }, type: "Lab" },

    // Week 8
    { week: 8, date: "Mar 16", topic: { ENG: "Linked Lists II", CAS: "Listas Enlazadas II", EUS: "Zerrenda Estekatuak II" }, type: "Theory" },
    { week: 8, date: "Mar 19", topic: { ENG: "Father's Day", CAS: "Día del Padre", EUS: "Aitaren Eguna" }, type: "Holiday" },

    // Week 9
    { week: 9, date: "Mar 23", topic: { ENG: "Linked Lists III", CAS: "Listas Enlazadas III", EUS: "Zerrenda Estekatuak III" }, type: "Theory" },
    { week: 9, date: "Mar 26", topic: { ENG: "Working with Linked Lists", CAS: "Trabajando con Listas Enlazadas", EUS: "Zerrenda Estekatuekin Lanean" }, type: "Lab" },

    // Week 10
    { week: 10, date: "Mar 30", topic: { ENG: "Recursion and Computational Complexity", CAS: "Recursividad y Complejidad", EUS: "Errekurtsibitatea eta Konplexutasuna" }, type: "Theory" },
    { week: 10, date: "Apr 02", topic: { ENG: "Easter", CAS: "Semana Santa", EUS: "Aste Santua" }, type: "Holiday" },

    // Week 11
    { week: 11, date: "Apr 06", topic: { ENG: "Easter", CAS: "Semana Santa", EUS: "Aste Santua" }, type: "Holiday" },
    { week: 11, date: "Apr 09", topic: { ENG: "Easter", CAS: "Semana Santa", EUS: "Aste Santua" }, type: "Holiday" },

    // Week 12
    { week: 12, date: "Apr 13", topic: { ENG: "Binary Trees", CAS: "Árboles Binarios", EUS: "Zuhaitz Binarioak" }, type: "Theory" },
    { week: 12, date: "Apr 16", topic: { ENG: "Recursion Exercises", CAS: "Ejercicios Recursividad", EUS: "Errekurtsibitate Ariketak" }, type: "Lab" },

    // Week 13
    { week: 13, date: "Apr 20", topic: { ENG: "Day of the University", CAS: "Día de la Universidad", EUS: "Unibertsitatearen Eguna" }, type: "Holiday" },
    { week: 13, date: "Apr 23", topic: { ENG: "Constructing Binary Trees", CAS: "Construyendo Árboles Binarios", EUS: "Zuhaitz Binarioak Eraikitzen" }, type: "Theory" },

    // Week 14
    { week: 14, date: "Apr 27", topic: { ENG: "Generalizing Trees", CAS: "Generalizando Árboles", EUS: "Zuhaitzak Orokortzen" }, type: "Theory" },
    { week: 14, date: "Apr 30", topic: { ENG: "Huffman Coding I", CAS: "Codificación Huffman I", EUS: "Huffman Kodifikazioa I" }, type: "Lab" },

    // Week 15
    { week: 15, date: "May 04", topic: { ENG: "Graphs", CAS: "Grafos", EUS: "Grafoak" }, type: "Theory" },
    { week: 15, date: "May 07", topic: { ENG: "Huffman Coding II", CAS: "Codificación Huffman II", EUS: "Huffman Kodifikazioa II" }, type: "Lab" },

    // Week 16
    { week: 16, date: "May 11", topic: { ENG: "Review", CAS: "Repaso", EUS: "Errepasoa" }, type: "Theory" },
    { week: 16, date: "May 14", topic: { ENG: "Huffman Coding III", CAS: "Codificación Huffman III", EUS: "Huffman Kodifikazioa III" }, type: "Lab" },
    
    // Exams
    { week: 18, date: "May 25", topic: { ENG: "FINAL EXAM", CAS: "EXAMEN FINAL", EUS: "AZTERKETA FINALA" }, type: "Theory" },
    { week: 21, date: "Jun 17", topic: { ENG: "RETAKE EXAM", CAS: "RECUPERACIÓN", EUS: "BERRESKURAPENA" }, type: "Theory" }
  ]
};