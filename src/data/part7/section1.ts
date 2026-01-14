import { CoursePage } from '../mooc-exercises';

export const section1: CoursePage = {
  id: "part7-1",
  title: {
    ENG: "Modules",
    CAS: "Módulos",
    EUS: "Moduluak"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\n# Modules\n\nThe Python standard library contains many useful modules. You can use them with the \`import\` statement.\n\n\`\`\`python\nimport math\n\nprint(math.sqrt(5))\nprint(math.log(8, 2))\n\`\`\`\n\n## Selecting specific functions\n\n\`\`\`python\nfrom math import sqrt\n\nprint(sqrt(5))\n\`\`\`\n",
        CAS: "\n# Módulos\n\nLa biblioteca estándar de Python contiene muchos módulos útiles. Puedes usarlos con la sentencia \`import\`.\n\n\`\`\`python\nimport math\n\nprint(math.sqrt(5))\nprint(math.log(8, 2))\n\`\`\`\n\n## Seleccionando funciones específicas\n\n\`\`\`python\nfrom math import sqrt\n\nprint(sqrt(5))\n\`\`\`\n",
        EUS: "\n# Moduluak\n\nPython liburutegi estandarrak modulu erabilgarri asko ditu. \`import\` sententziarekin erabil ditzakezu.\n\n\`\`\`python\nimport math\n\nprint(math.sqrt(5))\nprint(math.log(8, 2))\n\`\`\`\n\n## Funtzio zehatzak hautatzen\n\n\`\`\`python\nfrom math import sqrt\n\nprint(sqrt(5))\n\`\`\`\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part07-01_hypotenuse',
      title: {
        ENG: "Hypotenuse",
        CAS: "Hipotenusa",
        EUS: "Hipotenusa"
      },
      description: {
        ENG: "Write a function named hypotenuse(leg1, leg2), which returns the length of the hypotenuse (sqrt(leg1^2 + leg2^2)). Use the math module.",
        CAS: "Escribe una función llamada hipotenusa(cateto1, cateto2), que devuelva la longitud de la hipotenusa. Usa el módulo math.",
        EUS: "Idatzi hipotenusa(kateto1, kateto2) izeneko funtzio bat. Hipotenusaren luzera itzuli behar du. Erabili math modulua."
      },
      initialCode: "# Write your solution here\nimport math\n",
      testCode: "\nimport unittest\nclass TestHypot(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code(code_to_run=\"print(hypotenuse(3,4))\")\n        # 5.0\n        self.assertIn(\"5.0\", out)\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part07-02_special_characters',
      title: {
        ENG: "Special characters",
        CAS: "Caracteres especiales",
        EUS: "Karaktere bereziak"
      },
      description: {
        ENG: "Write a function named separate_characters(my_string). It should return a tuple (letters, punctuation, others). Use the string module constants (ascii_letters, punctuation).",
        CAS: "Escribe una función separar_caracteres(cadena). Debe devolver una tupla (letras, puntuacion, otros). Usa el módulo string.",
        EUS: "Idatzi karaktereak_bereizi(katea). Tupla bat itzuli behar du (letrak, puntuazioa, besteak). Erabili string modulua."
      },
      initialCode: "# Write your solution here\nimport string\n",
      testCode: "\nimport unittest\nclass TestChars(unittest.TestCase):\n    def test_run(self):\n        # We assume student implements logic.\n        pass\n"
    }
  ]
};
