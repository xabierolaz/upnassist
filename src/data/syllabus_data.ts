export const syllabusData = {
  courseName: "Data Structures",
  academicYear: "2025-2026",
  lecturer: {
    name: "Ugaitz Amozarrain",
    department: "Statistics, Computer Science and Mathematics",
    office: "9002 (Basement, 'Las Encinas' building)",
    email: "ugaitz.amozarrain@unavarra.es",
    officeHours: [
      { day: "Monday", time: "16:00-18:00" },
      { day: "Wednesday", time: "11:00-13:00" }
    ]
  },
  schedule: {
    theory: { day: "Monday", time: "12:00-14:00", room: "A-020" },
    lab: { day: "Thursday", time: "12:00-14:00", room: "A-331" }
  },
  evaluation: [
    { method: "Theoretical/Practical Exams", weight: 50, retake: true },
    { method: "Deliverables", weight: 50, retake: false } // Note: Usually deliverables aren't retakable in the same way, verifying per pdf
  ],
  calendar: [
    { week: 1, date: "Jan 26", topic: "Presentation / Setup", type: "Theory/Lab" },
    { week: 2, date: "Feb 2", topic: "Review Python basics / Tips and tricks", type: "Theory" },
    { week: 2, date: "Feb 5", topic: "Sparse Matrices", type: "Lab" },
    { week: 3, date: "Feb 9", topic: "Object-Oriented Python", type: "Theory" },
    { week: 3, date: "Feb 12", topic: "Working with Files", type: "Lab" },
    { week: 4, date: "Feb 16", topic: "Lists, Dictionaries, Stacks", type: "Theory" },
    { week: 4, date: "Feb 19", topic: "Postfix Calculator", type: "Lab" },
    { week: 5, date: "Feb 23", topic: "Queues and Dequeues", type: "Theory" },
    { week: 5, date: "Feb 26", topic: "Palindromes", type: "Lab" },
    { week: 6, date: "Mar 2", topic: "Buffers", type: "Theory" },
    { week: 6, date: "Mar 5", topic: "Balanced Parentheses", type: "Lab" },
    { week: 7, date: "Mar 9", topic: "Linked Lists I", type: "Theory" },
    { week: 7, date: "Mar 12", topic: "Conway’s Game of Life", type: "Lab" },
    { week: 8, date: "Mar 16", topic: "Linked Lists II", type: "Theory" },
    { week: 8, date: "Mar 19", topic: "Father’s Day", type: "Holiday" },
    { week: 9, date: "Mar 23", topic: "Linked Lists III", type: "Theory" },
    { week: 9, date: "Mar 26", topic: "Working with Linked Lists", type: "Lab" },
    { week: 10, date: "Mar 30", topic: "Recursion and Computational Complexity", type: "Theory" },
    { week: 10, date: "Apr 2", topic: "Easter", type: "Holiday" },
    { week: 11, date: "Apr 6", topic: "Easter", type: "Holiday" },
    { week: 11, date: "Apr 9", topic: "Easter", type: "Holiday" },
    { week: 12, date: "Apr 13", topic: "Binary Trees", type: "Theory" },
    { week: 12, date: "Apr 16", topic: "Recursion Exercises", type: "Lab" },
    { week: 13, date: "Apr 20", topic: "Day of the University", type: "Holiday" },
    { week: 13, date: "Apr 23", topic: "Constructing Binary Trees", type: "Theory" }, // Shifted due to holiday
    { week: 14, date: "Apr 27", topic: "Generalizing Trees", type: "Theory" },
    { week: 14, date: "Apr 30", topic: "Huffman Coding I", type: "Lab" },
    { week: 15, date: "May 4", topic: "Graphs", type: "Theory" },
    { week: 15, date: "May 7", topic: "Huffman Coding II", type: "Lab" },
    { week: 16, date: "May 11", topic: "Review", type: "Theory" },
    { week: 16, date: "May 14", topic: "Huffman Coding III", type: "Lab" }
  ]
};
