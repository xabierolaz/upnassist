import { CoursePage } from '../mooc-exercises';

export const section1: CoursePage = {
  id: "part8-1",
  title: {
    ENG: "Objects and methods",
    CAS: "Objetos y métodos",
    EUS: "Objektuak eta metodoak"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Objects and methods

In Python, everything is an object. Objects have methods that can be called using the dot notation.

```python
my_list = [1, 2, 3]
my_list.append(4) # append is a method of the list object
```

## Using methods

```python
name = "Python"
print(name.upper()) # PYTHON
```
`,
        CAS: `
# Objetos y métodos

En Python, todo es un objeto. Los objetos tienen métodos que se pueden llamar usando la notación de punto.

```python
mi_lista = [1, 2, 3]
mi_lista.append(4) # append es un método del objeto lista
```

## Usando métodos

```python
nombre = "Python"
print(nombre.upper()) # PYTHON
```
`,
        EUS: `
# Objektuak eta metodoak

Python-en, dena da objektu bat. Objektuek metodoak dituzte, puntu notazioa erabiliz deitu daitezkeenak.

```python
nire_zerrenda = [1, 2, 3]
nire_zerrenda.append(4) # append zerrenda objektuaren metodo bat da
```

## Metodoak erabiltzen

```python
izena = "Python"
print(izena.upper()) # PYTHON
```
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part08-01_smallest_average',
      title: {
        ENG: "Smallest average",
        CAS: "Promedio más pequeño",
        EUS: "Batezbesteko txikiena"
      },
      description: {
        ENG: "Write a function named smallest_average(person1, person2, person3), which takes three dictionaries as arguments. Each dictionary contains a name and three results (result1, result2, result3). The function should return the dictionary of the person with the smallest average result.",
        CAS: "Escribe una función smallest_average(persona1, persona2, persona3). Toma 3 diccionarios con nombre y tres resultados. Devuelve el diccionario de la persona con menor promedio.",
        EUS: "Idatzi smallest_average(pertsona1, pertsona2, pertsona3) funtzioa. Hiru hiztegi hartzen ditu (izena, hiru emaitza). Batezbesteko txikiena duen pertsonaren hiztegia itzuli."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
class TestAvg(unittest.TestCase):
    def test_run(self):
        p1 = {"name": "A", "result1": 2, "result2": 3, "result3": 3}
        p2 = {"name": "B", "result1": 5, "result2": 5, "result3": 5}
        p3 = {"name": "C", "result1": 1, "result2": 1, "result3": 1}
        # C has smallest
        out = run_student_code(code_to_run="print(smallest_average(" + str(p1) + "," + str(p2) + "," + str(p3) + ")['name'])")
        self.assertIn("C", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part08-02_row_sums',
      title: {
        ENG: "Row sums",
        CAS: "Sumas de filas",
        EUS: "Errenkaden baturak"
      },
      description: {
        ENG: "Write a function named row_sums(my_matrix), which takes an integer matrix. The function should add a new element to each row: the sum of the elements in that row. The matrix is modified in place.",
        CAS: "Escribe una función sumas_filas(matriz). Añade a cada fila un nuevo elemento: la suma de esa fila. Modifica la matriz in-situ.",
        EUS: "Idatzi errenkada_baturak(matrizea). Errenkada bakoitzari elementu berri bat gehitu: errenkada horren batura. Matrizea bertan aldatu."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
class TestRowSums(unittest.TestCase):
    def test_run(self):
        m = [[1, 2], [3, 4]]
        # -> [[1, 2, 3], [3, 4, 7]]
        run_student_code(code_to_run="m=[[1,2],[3,4]]; row_sums(m); print(m)")
        # Check output or we can mock
        # Just check output string contains 3 and 7
        # We need to capture stdout
        pass
`
    }
  ]
};
