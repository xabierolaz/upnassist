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

```python
print("Hi there!")
```

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

```python
print("¡Hola!")
```

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

```python
print("Kaixo!")
```

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
        CAS: "Por favor escribe un programa que imprima un emoticono: :-)",
        EUS: "Mesedez idatzi programa bat emotikono bat inprimatzen duena: :-)"
      },
      initialCode: "# Write your code here\n",
      testCode: "\nimport unittest\nfrom unittest.mock import patch\nimport io\n
class TestEmoticon(unittest.TestCase):
    def test_output(self):
        output = run_student_code()
        self.assertEqual(output, ":-)")
"
    }
  ]
};