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
      method: { ENG: "Final Exam", CAS: "Examen Final", EUS: "Azterketa Finala" }, 
      weight: 50, 
      retake: true 
    },
    { 
      method: { ENG: "Deliverables (Labs)", CAS: "Entregables (Prácticas)", EUS: "Entregagarriak (Praktikak)" }, 
      weight: 50, 
      retake: true 
    }
  ],
  calendar: [
    // Week 1
    { week: 1, date: "Jan 26", topic: { ENG: "Presentation", CAS: "Presentación", EUS: "Aurkezpena" }, type: "Theory" },
    
    // Week 2
    { week: 2, date: "Feb 2", topic: { ENG: "Python Review", CAS: "Repaso de Python", EUS: "Python Berrikuspena" }, type: "Theory" },
    { week: 2, date: "Feb 5", topic: { ENG: "Sparse Matrices", CAS: "Matrices Dispersas", EUS: "Matrize Sakabanatuak" }, type: "Lab" },

    // Week 3
    { week: 3, date: "Feb 9", topic: { ENG: "Object-Oriented Python", CAS: "Python Orientado a Objetos", EUS: "Objektuetara Bideratutako Python" }, type: "Theory" },
    { week: 3, date: "Feb 12", topic: { ENG: "Working with Files", CAS: "Trabajando con Archivos", EUS: "Fitxategiekin Lanean" }, type: "Lab" },

    // Week 4
    { week: 4, date: "Feb 16", topic: { ENG: "Lists, Dictionaries, Stacks", CAS: "Listas, Diccionarios, Pilas", EUS: "Zerrendak, Hiztegiak, Pilak" }, type: "Theory" },
    { week: 4, date: "Feb 19", topic: { ENG: "Postfix Calculator", CAS: "Calculadora Postfija", EUS: "Postfix Kalkulagailua" }, type: "Lab" },

    // Week 5
    { week: 5, date: "Feb 23", topic: { ENG: "Queues and Dequeues", CAS: "Colas y Doble Colas", EUS: "Ilarak eta Ilara Bikoitzak" }, type: "Theory" },
    { week: 5, date: "Feb 26", topic: { ENG: "Palindromes", CAS: "Palíndromos", EUS: "Palindromoak" }, type: "Lab" },

    // Week 6
    { week: 6, date: "Mar 2", topic: { ENG: "Buffers", CAS: "Búferes", EUS: "Bufferrak" }, type: "Theory" },
    { week: 6, date: "Mar 5", topic: { ENG: "Balanced Parentheses", CAS: "Paréntesis Balanceados", EUS: "Parentesi Orekatuak" }, type: "Lab" },

    // Week 7
    { week: 7, date: "Mar 9", topic: { ENG: "Linked Lists I", CAS: "Listas Enlazadas I", EUS: "Zerrenda Estekatuak I" }, type: "Theory" },
    { week: 7, date: "Mar 12", topic: { ENG: "Conway's Game of Life", CAS: "Juego de la Vida de Conway", EUS: "Conway-ren Bizitzaren Jokoa" }, type: "Lab" },

    // Week 8
    { week: 8, date: "Mar 16", topic: { ENG: "Linked Lists II", CAS: "Listas Enlazadas II", EUS: "Zerrenda Estekatuak II" }, type: "Theory" },
    { week: 8, date: "Mar 19", topic: { ENG: "Father's Day", CAS: "Día del Padre", EUS: "Aitaren Eguna" }, type: "Holiday" },

    // Week 9
    { week: 9, date: "Mar 23", topic: { ENG: "Linked Lists III", CAS: "Listas Enlazadas III", EUS: "Zerrenda Estekatuak III" }, type: "Theory" },
    { week: 9, date: "Mar 26", topic: { ENG: "Working with Linked Lists", CAS: "Trabajando con Listas Enlazadas", EUS: "Zerrenda Estekatuekin Lanean" }, type: "Lab" },

    // Week 10
    { week: 10, date: "Mar 30", topic: { ENG: "Recursion & Complexity", CAS: "Recursividad y Complejidad", EUS: "Errekurtsibitatea eta Konplexutasuna" }, type: "Theory" },
    { week: 10, date: "Apr 2", topic: { ENG: "Easter", CAS: "Semana Santa", EUS: "Aste Santua" }, type: "Holiday" },

    // Week 11
    { week: 11, date: "Apr 6", topic: { ENG: "Easter", CAS: "Semana Santa", EUS: "Aste Santua" }, type: "Holiday" },
    { week: 11, date: "Apr 9", topic: { ENG: "Easter", CAS: "Semana Santa", EUS: "Aste Santua" }, type: "Holiday" },

    // Week 12
    { week: 12, date: "Apr 13", topic: { ENG: "Binary Trees", CAS: "Árboles Binarios", EUS: "Zuhaitz Binarioak" }, type: "Theory" },
    { week: 12, date: "Apr 16", topic: { ENG: "Recursion Exercises", CAS: "Ejercicios Recursividad", EUS: "Errekurtsibitate Ariketak" }, type: "Lab" },

    // Week 13
    { week: 13, date: "Apr 20", topic: { ENG: "University Day", CAS: "Día de la Universidad", EUS: "Unibertsitatearen Eguna" }, type: "Holiday" },
    { week: 13, date: "Apr 23", topic: { ENG: "Constructing Binary Trees", CAS: "Construyendo Árboles Binarios", EUS: "Zuhaitz Binarioak Eraikitzen" }, type: "Theory" },

    // Week 14
    { week: 14, date: "Apr 27", topic: { ENG: "Generalizing Trees", CAS: "Generalizando Árboles", EUS: "Zuhaitzak Orokortzen" }, type: "Theory" },
    { week: 14, date: "Apr 30", topic: { ENG: "Huffman Coding I", CAS: "Codificación Huffman I", EUS: "Huffman Kodifikazioa I" }, type: "Lab" },

    // Week 15
    { week: 15, date: "May 4", topic: { ENG: "Graphs", CAS: "Grafos", EUS: "Grafoak" }, type: "Theory" },
    { week: 15, date: "May 7", topic: { ENG: "Huffman Coding II", CAS: "Codificación Huffman II", EUS: "Huffman Kodifikazioa II" }, type: "Lab" },

    // Week 16
    { week: 16, date: "May 11", topic: { ENG: "Review", CAS: "Repaso", EUS: "Errepasoa" }, type: "Theory" },
    { week: 16, date: "May 14", topic: { ENG: "Huffman Coding III", CAS: "Codificación Huffman III", EUS: "Huffman Kodifikazioa III" }, type: "Lab" },
    
    // Exams
    { week: 18, date: "May 25", topic: { ENG: "FINAL EXAM", CAS: "EXAMEN FINAL", EUS: "AZTERKETA FINALA" }, type: "Theory" },
    { week: 21, date: "Jun 17", topic: { ENG: "RETAKE EXAM", CAS: "RECUPERACIÓN", EUS: "BERRESKURAPENA" }, type: "Theory" }
  ]
};
