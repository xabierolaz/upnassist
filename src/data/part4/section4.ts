import { CoursePage } from '../mooc-exercises';

export const section4: CoursePage = {
  id: "part4-4",
  title: {
    ENG: "Print statement formatting",
    CAS: "Formateo de la sentencia print",
    EUS: "Print sententziaren formateatzea"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\n# Print statement formatting\n\n## sep and end arguments\n\nThe \`print\` command accepts arguments \`sep\` and \`end\`.\n\n````python\nprint(\"Hi\", \"there\", sep=\"-\")\nprint(\"Hi\", end=\"\")\nprint(\"there\")\n````\n\n````text\nHi-there\nHithere\n````\n\n## f-strings\n\nF-strings allow flexible formatting.\n\n### Decimals\n\n````python\nnumber = 1/3\nprint(f\"The number is {number:.2f}\")\n````\n\n````text\nThe number is 0.33\n````\n\n### Alignment\n\n````python\nname = \"Steve\"\nprint(f\"{name:15} | {name:>15}\")\n````\n\n````text\nSteve           |           Steve\n````\n",
        CAS: "\n# Formateo de la sentencia print\n\n## Argumentos sep y end\n\nEl comando \`print\` acepta los argumentos \`sep\` y \`end\`.\n\n````python\nprint(\"Hola\", \"ahí\", sep=\"-\")\nprint(\"Hola\", end=\"\")\nprint(\"ahí\")\n````\n\n````text\nHola-ahí\nHolaahí\n````\n\n## f-strings\n\nLas f-strings permiten un formateo flexible.\n\n### Decimales\n\n````python\nnumero = 1/3\nprint(f\"El número es {numero:.2f}\")\n````\n\n````text\nEl número es 0.33\n````\n\n### Alineación\n\n````python\nnombre = \"Steve\"\nprint(f\"{nombre:15} | {nombre:>15}\")\n````\n\n````text\nSteve           |           Steve\n````\n",
        EUS: "\n# Print sententziaren formateatzea\n\n## sep eta end argumentuak\n\n\`print\` komandoak \`sep\` eta \`end\` argumentuak onartzen ditu.\n\n````python\nprint(\"Kaixo\", \"hor\", sep=\"-\")\nprint(\"Kaixo\", end=\"\")\nprint(\"hor\")\n````\n\n````text\nKaixo-hor\nKaixohor\n````\n\n## f-strings\n\nf-string-ek formateatze malgua ahalbidetzen dute.\n\n### Hamartarrak\n\n````python\nzenbakia = 1/3\nprint(f\"Zenbakia da {zenbakia:.2f}\")\n````\n\n````text\nZenbakia da 0.33\n````\n\n### Lerrokatzea\n\n````python\nizena = \"Steve\"\nprint(f\"{izena:15} | {izena:>15}\")\n````\n\n````text\nSteve           |           Steve\n````\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part04-32_integers_to_strings',
      title: {
        ENG: "Integers to strings",
        CAS: "Enteros a cadenas",
        EUS: "Zenbaki osoak kateetara"
      },
      description: {
        ENG: "Write a function named formatted(my_list), which takes a list of floating point numbers as its argument. The function returns a new list where each number is formatted to 2 decimal places (as strings).",
        CAS: "Escribe una función llamada formateado(mi_lista), que tome una lista de números flotantes. Devuelve una nueva lista donde cada número está formateado a 2 decimales (como cadenas).",
        EUS: "Idatzi formateatua(nire_zerrenda) izeneko funtzio bat, zenbaki higikorren zerrenda bat hartzen duena. Funtzioak zerrenda berri bat itzultzen du, non zenbaki bakoitza 2 hamartarrekin formateatuta dagoen (kate gisa)."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    print(formatted([1.234, 0.3333, 0.11111, 3.446]))",
      testCode: "\nimport unittest\nclass TestFormatted(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        # [\'1.23\', \'0.33\', \'0.11\', \'3.45\']\n        self.assertIn(\"1.23\", out)\n        self.assertIn(\"3.45\", out)\n"
    }
  ]
};
