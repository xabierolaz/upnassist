import { CoursePage } from '../mooc-exercises';

export const section4: CoursePage = {
  id: "part6-4",
  title: {
    ENG: "Local and global variables",
    CAS: "Variables locales y globales",
    EUS: "Aldagai lokalak eta globalak"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\n# Local and global variables\n\n## Local variables\n\nVariables defined within a function are local to that function.\n\n```python\ndef testing():\n    x = 5\n    print(x)\n\ntesting()\n# print(x) # This would cause an error\n```\n\n## Global variables\n\nVariables defined in the main body are global.\n\n```python\nx = 10\n\ndef testing():\n    print(x) # Access global x\n\ntesting()\n```\n\nTo modify a global variable inside a function, use the `global` keyword:\n\n```python\nx = 10\n\ndef change():\n    global x\n    x = 20\n\nchange()\nprint(x) # 20\n```\n",
        CAS: "\n# Variables locales y globales\n\n## Variables locales\n\nLas variables definidas dentro de una función son locales a esa función.\n\n```python\ndef prueba():\n    x = 5\n    print(x)\n\nprueba()\n# print(x) # Esto causaría un error\n```\n\n## Variables globales\n\nLas variables definidas en el cuerpo principal son globales.\n\n```python\nx = 10\n\ndef prueba():\n    print(x) # Accede a x global\n\nprueba()\n```\n\nPara modificar una variable global dentro de una función, usa la palabra clave `global`:\n\n```python\nx = 10\n\ndef cambiar():\n    global x\n    x = 20\n\ncambiar()\nprint(x) # 20\n```\n",
        EUS: "\n# Aldagai lokalak eta globalak\n\n## Aldagai lokalak\n\nFuntzio baten barruan definitutako aldagaiak lokalak dira funtzio horretarentzat.\n\n```python\ndef proba():\n    x = 5\n    print(x)\n\nproba()\n# print(x) # Honek errorea eragingo luke\n```\n\n## Aldagai globalak\n\nGorputz nagusian definitutako aldagaiak globalak dira.\n\n```python\nx = 10\n\ndef proba():\n    print(x) # x globala atzitu\n\nproba()\n```\n\nAldagai global bat funtzio baten barruan aldatzeko, erabili `global` gako-hitza:\n\n```python\nx = 10\n\ndef aldatu():\n    global x\n    x = 20\n\naldatu()\nprint(x) # 20\n```\n"
      }
    }
  ]
};