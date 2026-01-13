import { CoursePage } from '../mooc-exercises';

export const section1: CoursePage = {
  id: "part1-1",
  title: {
    ENG: "Getting started",
    CAS: "Comenzando",
    EUS: "Hasten"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Getting started

## After this section:

- You will have written and executed your first Python program
- You will know how to use the print command

Let's begin programming by getting familiar with the 
print
 command. It prints text.

\`\`\`python
print("Hi there!")
\`\`\`

When you run this line of code, it will print the text "Hi there!".
`,
        CAS: `
# Comenzando

## Después de esta sección:

- Habrás escrito y ejecutado tu primer programa en Python
- Sabrás cómo usar el comando print

Empecemos a programar familiarizándonos con el comando 
print
. Imprime texto en pantalla.

\`\`\`python
print("¡Hola!")
\`\`\`

Cuando ejecutes esta línea de código, imprimirá el texto "¡Hola!".
`,
        EUS: `
# Hasten

## Atal honen ondoren:

- Zure lehen Python programa idatzi eta exekutatu izango duzu
- Jakingo duzu nola erabili print komandoa

Has gaitezen programatzen 
print
 komandoarekin trebatuz. Testua inprimatzen du.

\`\`\`python
print("Kaixo!")
\`\`\`

Kode lerro hau exekutatzen duzunean, "Kaixo!" testua inprimatuko du.
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part01-01_emoticon',
      title: {
        ENG: "Emoticon",
        CAS: "Emoticono",
        EUS: "Emotikonoa"
      },
      description: {
        ENG: "Please write a program which prints out an emoticon: :-)",
        CAS: "Por favor, escribe un programa que imprima un emoticono: :-)",
        EUS: "Mesedez idatzi programa bat emotikono bat inprimatzen duena: :-)"
      },
      initialCode: "# Escribe tu código aquí\n",
      testCode: `
import unittest
from unittest.mock import patch
import io

class TestEmoticon(unittest.TestCase):
    def test_output(self):
        output = run_student_code()
        self.assertIn(":-)", output)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part01-02_minutes_in_a_year',
      title: {
        ENG: "Minutes in a year",
        CAS: "Minutos en un año",
        EUS: "Minutuak urte batean"
      },
      description: {
        ENG: "Please write a program which prints out the number of minutes in a year. Use Python code to perform the calculation.",
        CAS: "Por favor, escribe un programa que imprima el número de minutos en un año. Usa código Python para realizar el cálculo.",
        EUS: "Mesedez idatzi programa bat urte bateko minutu kopurua inprimatzen duena. Erabili Python kodea kalkulua egiteko."
      },
      initialCode: "# Escribe tu código aquí\nprint(365*24*60)",
      testCode: `
import unittest
class TestMinutes(unittest.TestCase):
    def test_output(self):
        output = run_student_code()
        self.assertIn("525600", output)
`
    }
  ]
};