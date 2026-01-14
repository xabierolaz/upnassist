import { CoursePage } from '../mooc-exercises';

export const section3: CoursePage = {
  id: "part3-3",
  title: {
    ENG: "More loops",
    CAS: "Más bucles",
    EUS: "Begizta gehiago"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\n# More loops\n\n## The break command\n\nThe `break` command stops the execution of a loop immediately.\n\n```python\nsum = 0\nwhile True:\n    number = int(input(\"Please type in a number, -1 to exit: \"))\n    if number == -1:\n        break\n    sum += number\n\nprint(f\"The sum is {sum}\")\n```\n\n## The continue command\n\nThe `continue` command jumps execution to the beginning of the loop, skipping the rest of the block.\n\n```python\nsum = 0\nwhile True:\n    number = int(input(\"Please type in a number, -1 to exit: \"))\n    if number == -1:\n        break\n    if number >= 10:\n        continue\n    sum += number\n\nprint(f\"The sum is {sum}\")\n```\n\n## Nested loops\n\nLoops can be placed inside other loops.\n\n```python\nnumber = int(input(\"Please type in a number: \"))\nwhile number > 0:\n    i = 0\n    while i < number:\n        print(f\"{i} \", end=\"\")\n        i += 1\n    print()\n    number -= 1\n```\n\n```text\nPlease type in a number: **5**\n0 1 2 3 4\n0 1 2 3\n0 1 2\n0 1\n0\n```\n",
        CAS: "\n# Más bucles\n\n## El comando break\n\nEl comando `break` detiene la ejecución de un bucle inmediatamente.\n\n```python\nsuma = 0\nwhile True:\n    numero = int(input(\"Por favor escribe un número, -1 para salir: \"))\n    if numero == -1:\n        break\n    suma += numero\n\nprint(f\"La suma es {suma}\")\n```\n\n## El comando continue\n\nEl comando `continue` salta la ejecución al comienzo del bucle, omitiendo el resto del bloque.\n\n```python\nsuma = 0\nwhile True:\n    numero = int(input(\"Por favor escribe un número, -1 para salir: \"))\n    if numero == -1:\n        break\n    if numero >= 10:\n        continue\n    suma += numero\n\nprint(f\"La suma es {suma}\")\n```\n\n## Bucles anidados\n\nLos bucles se pueden colocar dentro de otros bucles.\n\n```python\nnumero = int(input(\"Por favor escribe un número: \"))\nwhile numero > 0:\n    i = 0\n    while i < numero:\n        print(f\"{i} \", end=\"\")\n        i += 1\n    print()\n    numero -= 1\n```\n\n```text\nPor favor escribe un número: **5**\n0 1 2 3 4\n0 1 2 3\n0 1 2\n0 1\n0\n```\n",
        EUS: "\n# Begizta gehiago\n\n## break komandoa\n\n`break` komandoak begizta baten exekuzioa berehala gelditzen du.\n\n```python\nbatura = 0\nwhile True:\n    zenbakia = int(input(\"Mesedez idatzi zenbaki bat, -1 irteteko: \"))\n    if zenbakia == -1:\n        break\n    batura += zenbakia\n\nprint(f\"Batura da {batura}\")\n```\n\n## continue komandoa\n\n`continue` komandoak exekuzioa begiztaren hasierara salto egiten du, blokearen gainerakoa saltatuz.\n\n```python\nbatura = 0\nwhile True:\n    zenbakia = int(input(\"Mesedez idatzi zenbaki bat, -1 irteteko: \"))\n    if zenbakia == -1:\n        break\n    if zenbakia >= 10:\n        continue\n    batura += zenbakia\n\nprint(f\"Batura da {batura}\")\n```\n\n## Habiaratutako begiztak\n\nBegiztak beste begizta batzuen barruan jar daitezke.\n\n```python\nzenbakia = int(input(\"Mesedez idatzi zenbaki bat: \"))\nwhile zenbakia > 0:\n    i = 0\n    while i < zenbakia:\n        print(f\"{i} \", end=\"\")\n        i += 1\n    print()\n    zenbakia -= 1\n```\n\n```text\nMesedez idatzi zenbaki bat: **5**\n0 1 2 3 4\n0 1 2 3\n0 1 2\n0 1\n0\n```\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part03-20_multiplication',
      title: {
        ENG: "Multiplication",
        CAS: "Multiplicación",
        EUS: "Biderketa"
      },
      description: {
        ENG: "Please write a program which asks the user for a positive integer number. The program then prints out a list of multiplication operations until both operands reach the number given by the user.",
        CAS: "Escribe un programa que pida un entero positivo. El programa imprime una lista de multiplicaciones hasta que ambos operandos alcanzan el número dado.",
        EUS: "Idatzi programa bat erabiltzaileari zenbaki oso positibo bat eskatzen diona. Programak biderketa eragiketen zerrenda inprimatzen du bi operandoek emandako zenbakira iritsi arte."
      },
      initialCode: "# Write your solution here\n",
      testCode: "\nimport unittest\nclass TestMult(unittest.TestCase):\n    def test_2(self):\n        out = run_student_code(inputs=['2'])\n        # 1*1=1\n        # 1*2=2\n        # 2*1=2\n        # 2*2=4\n        self.assertIn(\"1 * 1 = 1\", out)\n        self.assertIn(\"2 * 2 = 4\", out)\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part03-21_factorial',
      title: {
        ENG: "Factorial",
        CAS: "Factorial",
        EUS: "Faktoriala"
      },
      description: {
        ENG: "Please write a program which asks the user to type in an integer number. If the user types in a negative number, the program reports \"Thanks and bye!\" and stops. Otherwise, the program prints out the factorial of the number.",
        CAS: "Escribe un programa que pida un entero. Si es negativo, imprime \"Thanks and bye!\" y para. Si no, imprime el factorial del número.",
        EUS: "Idatzi programa bat zenbaki oso bat eskatzen duena. Negatiboa bada, \"Thanks and bye!\" inprimatu eta gelditu. Bestela, zenbakiaren faktoriala inprimatu."
      },
      initialCode: "# Write your solution here\n",
      testCode: "\nimport unittest\nclass TestFact(unittest.TestCase):\n    def test_3(self):\n        out = run_student_code(inputs=['3', '-1'])\n        self.assertIn(\"factorial of the number 3 is 6\", out)\n    def test_5(self):\n        out = run_student_code(inputs=['5', '-1'])\n        self.assertIn(\"factorial of the number 5 is 120\", out)\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part03-22_flip_the_pairs',
      title: {
        ENG: "Flip the pairs",
        CAS: "Invierte los pares",
        EUS: "Bikoteak irauli"
      },
      description: {
        ENG: "Please write a program which asks the user to type in a number. The program then prints out all the integer numbers from 1 to that number, but so that each pair of numbers is swapped. If the number is not divisible by 2, the last number remains where it is.",
        CAS: "Escribe un programa que pida un número. Luego imprime los números del 1 a ese número, intercambiando cada par. Si es impar, el último queda igual.",
        EUS: "Idatzi programa bat zenbaki bat eskatzen duena. Gero 1etik zenbaki horretara dauden zenbaki oso guztiak inprimatzen ditu, baina bikote bakoitza trukatuta. Bakoitia bada, azkena bere horretan geratzen da."
      },
      initialCode: "# Write your solution here\n",
      testCode: "\nimport unittest\nclass TestFlip(unittest.TestCase):\n    def test_5(self):\n        out = run_student_code(inputs=['5'])\n        # 2 1 4 3 5\n        lines = out.strip().split('\\n')\n        nums = [l.strip() for l in lines if l.strip().isdigit()]\n        expected = ['2', '1', '4', '3', '5']\n        # Check subset\n        for e in expected:\n            self.assertIn(e, nums)\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part03-23_taking_turns',
      title: {
        ENG: "Taking turns",
        CAS: "Turnándose",
        EUS: "TXandaka"
      },
      description: {
        ENG: "Please write a program which asks the user to type in a number. The program then prints out the positive integers between 1 and the number, starting from the ends and working towards the middle.",
        CAS: "Escribe un programa que pida un número. Luego imprime los enteros entre 1 y ese número, empezando por los extremos y yendo hacia el medio.",
        EUS: "Idatzi programa bat zenbaki bat eskatzen duena. Gero 1 eta zenbaki horren arteko zenbaki oso positiboak inprimatzen ditu, muturretatik hasi eta erdira joanez."
      },
      initialCode: "# Write your solution here\n",
      testCode: "\nimport unittest\nclass TestTurns(unittest.TestCase):\n    def test_5(self):\n        out = run_student_code(inputs=['5'])\n        # 1 5 2 4 3\n        lines = out.strip().split('\\n')\n        nums = [l.strip() for l in lines if l.strip().isdigit()]\n        # Simple check for presence\n        self.assertIn('1', nums)\n        self.assertIn('5', nums)\n"
    }
  ]
};
