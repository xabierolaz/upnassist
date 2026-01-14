import { CoursePage } from '../mooc-exercises';

export const section6: CoursePage = {
  id: "part7-6",
  title: {
    ENG: "More features",
    CAS: "Más características",
    EUS: "Ezaugarri gehiago"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\n# More features\n\n## Ternary operator\n\nYou can write simple conditionals in one line:\n\n```python\na = 10\nresult = \"even\" if a % 2 == 0 else \"odd\"\nprint(result)\n```\n\n## Default parameters\n\nFunctions can have default values for parameters:\n\n```python\ndef greet(name=\"World\"):\n    print(\"Hello\", name)\n\ngreet()\ngreet(\"Python\")\n```\n\n## Variable number of arguments\n\nYou can accept any number of arguments using `*`:\n\n```python\ndef sum_all(*nums):\n    return sum(nums)\n\nprint(sum_all(1, 2, 3))\n```\n",
        CAS: "\n# Más características\n\n## Operador ternario \n\nPuedes escribir condicionales simples en una línea:\n\n```python\na = 10\nresultado = \"par\" if a % 2 == 0 else \"impar\"\nprint(resultado)\n```\n\n## Parámetros por defecto\n\nLas funciones pueden tener valores por defecto:\n\n```python\ndef saludar(nombre=\"Mundo\"):\n    print(\"Hola\", nombre)\n\nsaludar()\nsaludar(\"Python\")\n```\n\n## Número variable de argumentos\n\nPuedes aceptar cualquier número de argumentos usando `*`:\n\n```python\ndef sumar_todo(*nums):\n    return sum(nums)\n\nprint(sumar_todo(1, 2, 3))\n```\n",
        EUS: "\n# Ezaugarri gehiago\n\n## Eragile ternarioa\n\nBaldintza sinpleak lerro batean idatz ditzakezu:\n\n```python\na = 10\nemaitza = \"bikoitia\" if a % 2 == 0 else \"bakoitia\"\nprint(emaitza)\n```\n\n## Parametro lehenetsiak\n\nFuntzioek balio lehenetsiak izan ditzakete:\n\n```python\ndef agurtu(izena=\"Mundua\"):\n    print(\"Kaixo\", izena)\n\nagurtu()\nagurtu(\"Python\")\n```\n\n## Argumentu kopuru aldakorra\n\nEdozein argumentu kopuru onar dezakezu `*` erabiliz:\n\n```python\ndef batu_dena(*nums):\n    return sum(nums)\n\nprint(batu_dena(1, 2, 3))\n```\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part07-13_valid_pic',
      title: {
        ENG: "Valid pic",
        CAS: "PIC válido",
        EUS: "PIC baliozkoa"
      },
      description: {
        ENG: "Write a function named is_valid(pic) which returns True if the given Personal Identity Code is valid, and False otherwise. A PIC is in format ddmmyyXyyyc, where ddmmyy is date, X is century marker (+, -, A), yyy is individual number, c is checksum.",
        CAS: "Escribe es_valido(pic). Devuelve True si el código de identidad es válido. Formato ddmmyyXyyyc.",
        EUS: "Idatzi baliozkoa_da(pic) funtzioa. True itzuli PIC (Nortasun Kodea) baliozkoa bada. Formatua ddmmyyXyyyc."
      },
      initialCode: "# Write your solution here\nfrom datetime import datetime\n\ndef is_valid(pic):\n    pass\n",
      testCode: "\nimport unittest\nclass TestPIC(unittest.TestCase):\n    def test_run(self):\n        # We need logic to validate\n        pass\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part07-14_spell_checker',
      title: {
        ENG: "Spell checker",
        CAS: "Corrector ortográfico",
        EUS: "Ortografia zuzentzailea"
      },
      description: {
        ENG: "Write a program that asks the user for a text. The program checks the text against a list of words (file 'wordlist.txt'). If a word is not found, print it with stars *word*. Assume 'wordlist.txt' exists.",
        CAS: "Pide un texto. Comprueba contra 'wordlist.txt'. Si no está, imprime *palabra*.",
        EUS: "Eskatu testu bat. Egiaztatu 'wordlist.txt' zerrendarekin. Hitz bat ez badago, inprimatu *hitza*."
      },
      initialCode: "# Write your solution here\n",
      testCode: "\nimport unittest\nfrom unittest.mock import patch, mock_open\n\nclass TestSpell(unittest.TestCase):\n    def test_run(self):\n        # Mock wordlist\n        pass\n"
    }
  ]
};
