import { CoursePage } from '../mooc-exercises';

export const section2: CoursePage = {
  id: "part5-2",
  title: {
    ENG: "References",
    CAS: "Referencias",
    EUS: "Erreferentziak"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "
# References

When you assign a list to a variable, the variable holds a _reference_ to the list, not the list itself.

```python
a = [1, 2, 3]
b = a
b.append(4)

print(a) # [1, 2, 3, 4]
```

To copy a list, use the slicing operator `[:]`:

```python
a = [1, 2, 3]
b = a[:]
b.append(4)

print(a) # [1, 2, 3]
print(b) # [1, 2, 3, 4]
```
",
        CAS: "
# Referencias

Cuando asignas una lista a una variable, la variable contiene una _referencia_ a la lista, no la lista en sí.

```python
a = [1, 2, 3]
b = a
b.append(4)

print(a) # [1, 2, 3, 4]
```

Para copiar una lista, usa el operador de rebanado `[:]`:

```python
a = [1, 2, 3]
b = a[:]
b.append(4)

print(a) # [1, 2, 3]
print(b) # [1, 2, 3, 4]
```
",
        EUS: "
# Erreferentziak

Zerrenda bat aldagai bati esleitzen diozunean, aldagaiak zerrendaren _erreferentzia_ bat gordetzen du, ez zerrenda bera.

```python
a = [1, 2, 3]
b = a
b.append(4)

print(a) # [1, 2, 3, 4]
```

Zerrenda bat kopiatzeko, erabili `[:]` ebakitze eragilea:

```python
a = [1, 2, 3]
b = a[:]
b.append(4)

print(a) # [1, 2, 3]
print(b) # [1, 2, 3, 4]
```
"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part05-08_items_multiplied_by_two',
      title: {
        ENG: "Items multiplied by two",
        CAS: "Elementos multiplicados por dos",
        EUS: "Elementuak biz biderkatuta"
      },
      description: {
        ENG: "Write a function named double_items(numbers), which returns a new list where each item from the original list is multiplied by two. The original list should not be changed.",
        CAS: "Escribe una función llamada doblar_elementos(numeros), que devuelva una nueva lista donde cada elemento de la original se multiplica por dos. La lista original no debe cambiar.",
        EUS: "Idatzi elementuak_bikoiztu(zenbakiak) izeneko funtzio bat. Zerrenda berri bat itzuli behar du, jatorrizkoaren elementu bakoitza biz biderkatuta. Jatorrizko zerrenda ez da aldatu behar."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    nums = [1, 2, 3]\n    print(double_items(nums))\n    print(nums)",
      testCode: "
import unittest
class TestDouble(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        # [2, 4, 6]
        # [1, 2, 3]
        self.assertIn("[2, 4, 6]", out)
        self.assertIn("[1, 2, 3]", out)
"
    },
    {
      type: 'exercise',
      exerciseId: 'part05-09_remove_smallest',
      title: {
        ENG: "Remove the smallest",
        CAS: "Eliminar el más pequeño",
        EUS: "Txikiena kendu"
      },
      description: {
        ENG: "Write a function named remove_smallest(numbers), which removes the smallest item from the list given as an argument. The function does not return anything, it modifies the list in place.",
        CAS: "Escribe una función llamada eliminar_mas_pequeno(numeros), que elimine el elemento más pequeño de la lista dada. La función no devuelve nada, modifica la lista directamente.",
        EUS: "Idatzi txikiena_kendu(zenbakiak) izeneko funtzio bat. Zerrendako elementu txikiena kendu behar du. Funtzioak ez du ezer itzultzen, zerrenda aldatzen du."
      },
      initialCode: "# Write your solution here\nif __name__ == \"__main__\":\n    nums = [5, 3, 8, 1, 2]\n    remove_smallest(nums)\n    print(nums)",
      testCode: "
import unittest
class TestRemoveSmall(unittest.TestCase):
    def test_run(self):
        out = run_student_code()
        # [5, 3, 8, 2] (1 removed)
        self.assertIn("[5, 3, 8, 2]", out)
"
    },
    {
      type: 'exercise',
      exerciseId: 'part05-10_sudoku_add_to_copy',
      title: {
        ENG: "Sudoku: add number to copy",
        CAS: "Sudoku: añadir número a copia",
        EUS: "Sudoku: zenbakia gehitu kopiari"
      },
      description: {
        ENG: "Write a function named copy_and_add(sudoku, row, column, number), which returns a NEW sudoku grid with the number added at the specified location. The original grid should remain unchanged.",
        CAS: "Escribe una función llamada copiar_y_anadir(sudoku, fila, columna, numero), que devuelva una NUEVA cuadrícula con el número añadido. La original no debe cambiar.",
        EUS: "Idatzi kopiatu_eta_gehitu(sudoku, err, zut, zenb) izeneko funtzio bat. Sudoku sare BERRI bat itzuli behar du zenbakia gehituta. Jatorrizkoak aldatu gabe egon behar du."
      },
      initialCode: "# Write your solution here\n",
      testCode: "
import unittest
class TestSudokuCopy(unittest.TestCase):
    pass
"
    },
    {
      type: 'exercise',
      exerciseId: 'part05-11_sudoku_print_and_add',
      title: {
        ENG: "Sudoku: print and add",
        CAS: "Sudoku: imprimir y añadir",
        EUS: "Sudoku: inprimatu eta gehitu"
      },
      description: {
        ENG: "Write a function named print_sudoku(sudoku) and add_number(sudoku, row, column, number). The add function should modify the grid in place.",
        CAS: "Escribe print_sudoku(sudoku) y add_number(sudoku, fila, columna, numero). La función de añadir debe modificar la cuadrícula in-situ.",
        EUS: "Idatzi print_sudoku(sudoku) eta add_number(sudoku, err, zut, zenb). Gehitu funtzioak sarea bertan aldatu behar du."
      },
      initialCode: "# Write your solution here\n",
      testCode: "
import unittest
class TestSudokuPrintAdd(unittest.TestCase):
    pass
"
    },
    {
      type: 'exercise',
      exerciseId: 'part05-12_transpose_matrix',
      title: {
        ENG: "Transpose matrix",
        CAS: "Transponer matriz",
        EUS: "Matrizea irauli (transposatu)"
      },
      description: {
        ENG: "Write a function named transpose(matrix), which swaps the rows and columns of the matrix in place.",
        CAS: "Escribe una función llamada transponer(matriz), que intercambie las filas y columnas de la matriz in-situ.",
        EUS: "Idatzi irauli(matrizea) izeneko funtzio bat, matrizeko errenkadak eta zutabeak trukatzen dituena bertan (in-place)."
      },
      initialCode: "# Write your solution here\n",
      testCode: "
import unittest
class TestTranspose(unittest.TestCase):
    def test_run(self):
        # ...
        pass
"
    }
  ]
};