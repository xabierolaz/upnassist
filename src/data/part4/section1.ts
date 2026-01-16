import { CoursePage } from '../mooc-exercises';

export const section1: CoursePage = {
  id: "part4-1",
  title: {
    ENG: `More functions`,
    CAS: `Más funciones`,
    EUS: `Funtzio gehiago`
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `\n# More functions\n\n## Parameters and arguments\n\nA function can take multiple arguments.\n\n\`\`\`python\ndef sum(a, b):\n    print(f\"The sum of {a} and {b} is {a + b}\")\n\nsum(1, 2)\nsum(5, 10)\n\`\`\`\n\n## Function calls within function calls\n\nYou can call a function from within another function.\n\n\`\`\`python\ndef greet(name):\n    print(\"Hello " + name)\n\ndef greet_many_times(name, times):\n    while times > 0:\n        greet(name)\n        times -= 1\n\ngreet_many_times(\"Emily\`, 3)\n\`\`\`\n",
        CAS: `\n# Más funciones\n\n## Parámetros y argumentos\n\nUna función puede tomar múltiples argumentos.\n\n\`\`\`python\ndef suma(a, b):\n    print(f\"La suma de {a} y {b} es {a + b}\")\n\nsuma(1, 2)\nsuma(5, 10)\n\`\`\`\n\n## Llamadas a funciones dentro de funciones\n\nPuedes llamar a una función desde dentro de otra función.\n\n\`\`\`python\ndef saludar(nombre):\n    print(\"Hola " + nombre)\n\ndef saludar_muchas_veces(nombre, veces):\n    while veces > 0:\n        saludar(nombre)\n        veces -= 1\n\nsaludar_muchas_veces(\"Emily\`, 3)\n\`\`\`\n",
        EUS: `\n# Funtzio gehiago\n\n## Parametroak eta argumentuak\n\nFuntzio batek argumentu anitz har ditzake.\n\n\`\`\`python\ndef batura(a, b):\n    print(f\"{a} eta {b}-ren batura {a + b} da\")\n\nbatura(1, 2)\nbatura(5, 10)\n\`\`\`\n\n## Funtzio-deiak funtzioetan\n\nFuntzio bat dei dezakezu beste funtzio baten barrutik.\n\n\`\`\`python\ndef agurtu(izena):\n    print(\"Kaixo " + izena)\n\ndef agurtu_askotan(izena, aldiz):\n    while aldiz > 0:\n        agurtu(izena)\n        aldiz -= 1\n\nagurtu_askotan(\"Emily\`, 3)\n\`\`\`\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part04-01_line',
      title: {
        ENG: `Line`,
        CAS: `Línea`,
        EUS: `Lerroa`
      },
      description: {
        ENG: `Write a function named line(integer, string), which prints a line of characters. The first argument specifies the length, the second specifies the character.`,
        CAS: `Escribe una función llamada linea(entero, cadena), que imprima una línea de caracteres. El primer argumento especifica la longitud, el segundo el carácter.`,
        EUS: `Idatzi lerroa(osoa, katea) izeneko funtzio bat, karaktere lerro bat inprimatzen duena. Lehen argumentuak luzera zehazten du, bigarrenak karakterea.`
      },
      initialCode: `# Write your solution here\nif __name__ == "__main__\`:\n    line(5, \"x\")"
      testCode: `\nimport unittest\nclass TestLine(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        if "xxxxx" not in out:\n             self.fail("La función debe imprimir el carácter repetido tantas veces como diga el número. Para line(5, 'x') debe salir 'xxxxx'.")\n        self.assertIn("xxxxx", out)\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-02_box_of_hashes',
      title: {
        ENG: `A box of hashes`,
        CAS: `Una caja de almohadillas`,
        EUS: `Traola kaxa bat`
      },
      description: {
        ENG: `Write a function named box_of_hashes(height), which prints a rectangle of hashes. The width is always 10. The height is given as an argument.`,
        CAS: `Escribe una función llamada caja_almohadillas(altura), que imprima un rectángulo de almohadillas. El ancho es siempre 10. La altura se da como argumento.`,
        EUS: `Idatzi traola_kaxa(altuera) izeneko funtzio bat, traola laukizuzen bat inprimatzen duena. Zabalera beti 10 da. Altuera argumentu gisa ematen da.`
      },
      initialCode: `# Write your solution here\ndef line(length, char):\n    print(char * length)\n\nif __name__ == \"__main__\":\n    box_of_hashes(5)`
      testCode: `\nimport unittest\nclass TestBox(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        if out.count("##########") < 5:\n             self.fail("Should print 5 lines of 10 hashes.")\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-03_square_of_hashes',
      title: {
        ENG: `A square of hashes`,
        CAS: `Un cuadrado de almohadillas`,
        EUS: `Traola karratu bat`
      },
      description: {
        ENG: `Write a function named square_of_hashes(size), which prints a square of hashes. You should call the function line inside this function.`,
        CAS: `Escribe una función llamada cuadrado_almohadillas(tamano), que imprima un cuadrado de almohadillas. Deberías llamar a la función linea dentro de esta función.`,
        EUS: `Idatzi traola_karratua(tamaina) izeneko funtzio bat, traola karratu bat inprimatzen duena. Funtzio honen barruan lerroa funtzioari deitu behar diozu.`
      },
      initialCode: `# Write your solution here\ndef line(length, char):\n    print(char * length)\n\nif __name__ == \"__main__\":\n    square_of_hashes(3)`
      testCode: `\nimport unittest\nclass TestSquare(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        # ###\n###\n###\n        if out.count("###") < 3:\n             self.fail("Should print 3 lines of 3 hashes.")\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-04_shape',
      title: {
        ENG: `A shape`,
        CAS: `Una forma`,
        EUS: `Forma bat`
      },
      description: {
        ENG: `Write a function named shape(triangle_size, triangle_char, rectangle_height, rectangle_char) that prints a shape consisting of a triangle and a rectangle.`,
        CAS: `Escribe una función llamada forma(...) que imprima una forma que consiste en un triángulo y un rectángulo.`,
        EUS: `Idatzi forma(...) izeneko funtzio bat, triangelu eta laukizuzen batez osatutako forma inprimatzen duena.`
      },
      initialCode: `# Write your solution here\ndef line(length, char):\n    print(char * length)\n\nif __name__ == "__main__":\n    shape(5, "x\`, 2, \"o\")"
      testCode: `\nimport unittest\nclass TestShape(unittest.TestCase):\n    def test_run(self):\n        out = run_student_code()\n        self.assertIn("x", out)\n        self.assertIn("xx", out)\n        self.assertIn("xxxxx", out)\n        self.assertIn("ooooo", out)\n`
    },
    {
      type: 'markdown',
      content: {
        ENG: `\n## The return value of a function\n\nFunctions can return values using the \`return\` statement.\n\n\`\`\`python\ndef my_sum(a, b):\n    return a + b\n\nresult = my_sum(2, 3)\nprint(\"Sum:\`, result)\n\`\`\`\n\n\`\`\`text\nSum: 5\n\`\`\`\n\nThe `return` statement ends the execution of the function immediately.\n",
        CAS: `\n## El valor de retorno de una función\n\nLas funciones pueden devolver valores usando la sentencia \`return\`.\n\n\`\`\`python\ndef mi_suma(a, b):\n    return a + b\n\nresultado = mi_suma(2, 3)\nprint(\"Suma:\`, resultado)\n\`\`\`\n\n\`\`\`text\nSuma: 5\n\`\`\`\n\nLa sentencia `return` termina la ejecución de la función inmediatamente.\n",
        EUS: `\n## Funtzio baten itzulera-balioa\n\nFuntzioek balioak itzul ditzakete \`return\` sententzia erabiliz.\n\n\`\`\`python\ndef nire_batura(a, b):\n    return a + b\n\nemaitza = nire_batura(2, 3)\nprint(\"Batura:\`, emaitza)\n\`\`\`\n\n\`\`\`text\nBatura: 5\n\`\`\`\n\n`return` sententziak funtzioaren exekuzioa berehala amaitzen du.\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part04-05_greatest_number',
      title: {
        ENG: `Greatest number`,
        CAS: `Número más grande`,
        EUS: `Zenbaki handiena`
      },
      description: {
        ENG: `Write a function named greatest_number, which takes three arguments and returns the greatest of them.`,
        CAS: `Escribe una función llamada numero_mas_grande, que tome tres argumentos y devuelva el mayor de ellos.`,
        EUS: `Idatzi zenbaki_handiena izeneko funtzio bat, hiru argumentu hartzen dituena eta haietako handiena itzultzen duena.`
      },
      initialCode: `# Write your solution here\nif __name__ == "__main__\`:\n    print(greatest_number(1, 5, 2))"
      testCode: `\nimport unittest\nclass TestGreatest(unittest.TestCase):\n    def test_run(self):\n        # We assume the user prints the result in main, so stdout captures it\n        out = run_student_code()\n        self.assertIn("5", out)\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part04-06_same_characters',
      title: {
        ENG: `Same characters`,
        CAS: `Mismos caracteres`,
        EUS: `Karaktere berdinak`
      },
      description: {
        ENG: `Write a function named same_chars(string, index1, index2), which returns True if the characters at the given indices are the same, and False otherwise. Handle out of bounds indices gracefully (return False).`,
        CAS: `Escribe una función llamada mismos_caracteres(cadena, indice1, indice2), que devuelva True si los caracteres en los índices dados son iguales, y False en caso contrario. Maneja los índices fuera de rango (devuelve False).`,
        EUS: `Idatzi karaktere_berdinak(katea, indizea1, indizea2) izeneko funtzio bat, True itzultzen duena emandako indizeetako karaktereak berdinak badira, eta False bestela. Kudeatu barrutitik kanpoko indizeak (itzuli False).`
      },
      initialCode: `# Write your solution here\nif __name__ == "__main__":\n    print(same_chars("coder\`, 1, 2))"
      testCode: `\nimport unittest\nclass TestSame(unittest.TestCase):\n    def test_run(self):\n        try:\n            out = run_student_code()\n        except IndexError:\n            self.fail("Tu función ha fallado con IndexError. Debes comprobar si los índices son válidos (menores que len(string)) antes de acceder a ellos.")\n        # coder: o vs d -> False\n        self.assertIn("False", out)\n`
    }
  ]
};
