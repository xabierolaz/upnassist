import { CoursePage } from '../mooc-exercises';

export const section2: CoursePage = {
  id: "part8-2",
  title: {
    ENG: "Classes and objects",
    CAS: "Clases y objetos",
    EUS: "Klaseak eta objektuak"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\n# Classes and objects\n\nA class is a blueprint for creating objects.\n\n```python\nfrom datetime import date\n\nmy_date = date(2020, 12, 24)\nprint(my_date.year)\n```\n\n## Methods vs Attributes\n\nObjects have attributes (variables) and methods (functions).\n\n```python\nprint(my_date.month) # Attribute\nprint(my_date.isoweekday()) # Method\n```\n",
        CAS: "\n# Clases y objetos\n\nUna clase es un plano para crear objetos.\n\n```python\nfrom datetime import date\n\nmi_fecha = date(2020, 12, 24)\nprint(mi_fecha.year)\n```\n\n## Métodos vs Atributos\n\nLos objetos tienen atributos (variables) y métodos (funciones).\n\n```python\nprint(mi_fecha.month) # Atributo\nprint(mi_fecha.isoweekday()) # Método\n```\n",
        EUS: "\n# Klaseak eta objektuak\n\nKlase bat objektuak sortzeko plano bat da.\n\n```python\nfrom datetime import date\n\nnire_data = date(2020, 12, 24)\nprint(nire_data.year)\n```\n\n## Metodoak vs Atributuak\n\nObjektuek atributuak (aldagaiak) eta metodoak (funtzioak) dituzte.\n\n```python\nprint(nire_data.month) # Atributua\nprint(nire_data.isoweekday()) # Metodoa\n```\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part08-03_list_of_years',
      title: {
        ENG: "List of years",
        CAS: "Lista de años",
        EUS: "Urteen zerrenda"
      },
      description: {
        ENG: "Write a function named list_years(dates), which takes a list of date objects as its argument. The function should return a new list containing the years of the dates, in order.",
        CAS: "Escribe una función lista_anos(fechas), que tome una lista de objetos date. Devuelve una lista con los años de las fechas.",
        EUS: "Idatzi urteak_zerrendatu(datak) izeneko funtzio bat. Date objektuen zerrenda bat hartzen du. Daten urteen zerrenda berri bat itzuli behar du."
      },
      initialCode: "# Write your solution here\nfrom datetime import date\n\nif __name__ == \"__main__\":\n    date1 = date(2019, 2, 3)\n    date2 = date(2006, 10, 10)\n    date3 = date(1993, 5, 9)\n    years = list_years([date1, date2, date3])\n    print(years)",
      testCode: "\nimport unittest\nfrom datetime import date\n\nclass TestYears(unittest.TestCase):\n    def test_run(self):\n        d1 = date(2000, 1, 1)\n        d2 = date(2020, 1, 1)\n        out = run_student_code(code_to_run=\"print(list_years([" + \"date(2000,1,1), date(2020,1,1)\" + "]))\")\n        self.assertIn(\"2000\", out)\n        self.assertIn(\"2020\", out)\n"
    }
  ]
};
