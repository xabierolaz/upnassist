import { Course } from '../../types';

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
  calendar: [
    // Week 2
    { week: 2, date: "Feb 05", topic: { ENG: "Sparse Matrices", CAS: "Matrices Dispersas", EUS: "Matrize Sakabanatuak" }, type: "Lab" }
  ]
};

export const course: Course = {
  id: "ds",
  title: {
    ENG: "Data Structures (Python)",
    CAS: "Estructura de Datos (Python)",
    EUS: "Datu Egiturak (Python)"
  },
  modules: [
    {
      id: "ds-labs",
      title: { ENG: "Lab Projects", CAS: "Prácticas", EUS: "3. Praktikak" },
      isCollapsed: false,
      units: [
        { id: "ds-w02-sparse", title: { ENG: "Sparse Matrices", CAS: "Matrices Dispersas", EUS: "Matrize Sakabanatuak" } }
      ]
    }
  ]
};