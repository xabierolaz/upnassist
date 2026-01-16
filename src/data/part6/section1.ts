import { CoursePage } from '../mooc-exercises';

export const section1: CoursePage = {
  id: "part6-1",
  title: {
    ENG: "Reading files",
    CAS: "Leyendo ficheros",
    EUS: "Fitxategiak irakurtzen"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Reading files

You can read files using the 
open
 function.

\`\`\`python
with open("example.txt") as new_file:
    contents = new_file.read()
    print(contents)
\`\`\`

You can iterate over the lines of a file:

\`\`\`python
with open("example.txt") as new_file:
    for line in new_file:
        print(line)
\`\`\`

## Reading CSV files

CSV (Comma Separated Values) files are text files where data is separated by commas or semicolons.

\`\`\`python
# example.csv:
# name;age;city
# Peter;35;London
# Paul;28;Berlin

with open("example.csv") as my_file:
    for line in my_file:
        parts = line.split(";")
        name = parts[0]
        age = int(parts[1])
        print(f"{name} is {age} years old")
\`\`\`
`,
        CAS: `
# Leyendo ficheros

Puedes leer ficheros usando la función 
open
.

\`\`\`python
with open("ejemplo.txt") as nuevo_fichero:
    contenido = nuevo_fichero.read()
    print(contenido)
\`\`\`

Puedes iterar sobre las líneas de un fichero:

\`\`\`python
with open("ejemplo.txt") as nuevo_fichero:
    for linea in nuevo_fichero:
        print(linea)
\`\`\`

## Leyendo ficheros CSV

Los ficheros CSV (Valores Separados por Comas) son ficheros de texto donde los datos están separados por comas o puntos y coma.

\`\`\`python
# ejemplo.csv:
# nombre;edad;ciudad
# Pedro;35;Londres
# Pablo;28;Berlin

with open("ejemplo.csv") as mi_fichero:
    for linea in mi_fichero:
        partes = linea.split(";")
        nombre = partes[0]
        edad = int(partes[1])
        print(f"{nombre} tiene {edad} años")
\`\`\`
`,
        EUS: `
# Fitxategiak irakurtzen

Fitxategiak irakur ditzakezu 
open
 funtzioa erabiliz.

\`\`\`python
with open("adibidea.txt") as fitxategi_berria:
    edukia = fitxategi_berria.read()
    print(edukia)
\`\`\`

Fitxategi baten lerroen gainean iteratu dezakezu:

\`\`\`python
with open("adibidea.txt") as fitxategi_berria:
    for lerroa in fitxategi_berria:
        print(lerroa)
\`\`\`

## CSV fitxategiak irakurtzen

CSV (Koma Bidez Bereizitako Balioak) fitxategiak testu-fitxategiak dira, non datuak komaz edo puntu eta komaz bereizten diren.

\`\`\`python
# adibidea.csv:
# izena;adina;hiria
# Peter;35;London
# Paul;28;Berlin

with open("adibidea.csv") as nire_fitxategia:
    for lerroa in nire_fitxategia:
        zatiak = lerroa.split(";")
        izena = zatiak[0]
        adina = int(zatiak[1])
        print(f"{izena} {adina} urte ditu")
\`\`\`
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part06-01_largest_number',
      title: {
        ENG: "Largest number",
        CAS: "Número más grande",
        EUS: "Zenbaki handiena"
      },
      description: {
        ENG: "The file `numbers.txt` contains integer numbers, one per line. Write a function named `largest` which reads the file and returns the largest number.",
        CAS: "El fichero `numbers.txt` contiene números enteros, uno por línea. Escribe una función llamada `largest` que lea el fichero y devuelva el número más grande.",
        EUS: "`numbers.txt` fitxategiak zenbaki osoak ditu, bat lerro bakoitzean. Idatzi `largest` izeneko funtzio bat, fitxategia irakurtzen duena eta zenbaki handiena itzultzen duena."
      },
      initialCode: "# Write your solution here\ndef largest():\n    pass\n",
      testCode: `
import unittest
from unittest.mock import patch, mock_open

class TestLargest(unittest.TestCase):
    def test_run(self):
        # We simulate the file content
        file_content = """9988
3072
-8756
5426
9883
9658
-9149
-6475
9317
5
3841
-956
9772
5951
1408
-8475
-1904"""
        with patch('builtins.open', mock_open(read_data=file_content)):
            # We assume the student calls largest() or defines it.
            # In our runner, we can't easily call the function if not called in main.
            # But the exercise asks for a function.
            # We'll try to verify if 'largest' is defined and call it if possible,
            # or rely on student printing it.
            
            # Since we can't import 'src.largest_number', we check the code structure/output
            # OR we try to run the student code.
            
            # Best approach for this simplified environment:
            # Assume student prints the result if they test it, or we rely on them calling it.
            # If they just define it, we can't test it without 'eval' or similar.
            
            # Let's assume the student follows pattern:
            # if __name__ == "__main__":
            #    print(largest())
            
            # We will use 'run_student_code' which executes the whole file.
            out = run_student_code()
            
            if "9988" not in out:
                 self.fail("Expected the largest number 9988 to be printed. Make sure you call print(largest()) in your main block.")
`
    },
    {
      type: 'exercise',
      exerciseId: 'part06-02_fruit_market',
      title: {
        ENG: "Fruit market",
        CAS: "Mercado de frutas",
        EUS: "Fruta azoka"
      },
      description: {
        ENG: "The file `fruits.csv` contains names and prices of fruits (name;price). Write a function `read_fruits` which returns a dictionary {name: price}.",
        CAS: "El fichero `fruits.csv` contiene nombres y precios de frutas (nombre;precio). Escribe una función `read_fruits` que devuelva un diccionario {nombre: precio}.",
        EUS: "`fruits.csv` fitxategiak fruta izenak eta prezioak ditu (izena;prezioa). Idatzi `read_fruits` funtzio bat, {izena: prezioa} hiztegia itzultzen duena."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
from unittest.mock import patch, mock_open

class TestFruits(unittest.TestCase):
    def test_run(self):
        file_content = """banana;6.50
apple;2.85
pineapple;9.50
mango;6.75
orange;5.50
fig;11.0
tangerine;5.75
pomegranate;11.50"""
        
        with patch('builtins.open', mock_open(read_data=file_content)):
            out = run_student_code()
            # We expect the dictionary to be printed or used.
            # Key checks:
            if "banana" not in out or "6.5" not in out:
                 self.fail("Dictionary should contain 'banana': 6.5. Did you print it?")
            if "pomegranate" not in out or "11.5" not in out:
                 self.fail("Dictionary should contain 'pomegranate': 11.5.")
`
    },
    {
      type: 'exercise',
      exerciseId: 'part06-03_matrix',
      title: {
        ENG: "Matrix",
        CAS: "Matriz",
        EUS: "Matrizea"
      },
      description: {
        ENG: "The file `matrix.txt` contains a matrix. Write two functions: `matrix_sum` and `matrix_max` which read the file and return the sum and max respectively.",
        CAS: "El fichero `matrix.txt` contiene una matriz. Escribe dos funciones: `matrix_sum` y `matrix_max` que lean el fichero y devuelvan la suma y el máximo.",
        EUS: "`matrix.txt` fitxategiak matrize bat du. Idatzi bi funtzio: `matrix_sum` eta `matrix_max`, fitxategia irakurtzen dutenak eta batura eta maximoa itzultzen dutenak."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
from unittest.mock import patch, mock_open

class TestMatrix(unittest.TestCase):
    def test_run(self):
        file_content = """1,2,3
4,5,6
7,8,9"""
        # Sum = 45, Max = 9
        
        with patch('builtins.open', mock_open(read_data=file_content)):
            out = run_student_code()
            if "45" not in out:
                 self.fail("matrix_sum should return 45 for the test matrix.")
            if "9" not in out:
                 self.fail("matrix_max should return 9 for the test matrix.")
`
    },
    {
      type: 'exercise',
      exerciseId: 'part06-04_course_grading_part_1',
      title: {
        ENG: "Course grading, part 1",
        CAS: "Calificación del curso, parte 1",
        EUS: "Ikastaroaren kalifikazioa, 1. zatia"
      },
      description: {
        ENG: "Write a program that reads `students1.csv` (id;first;last) and `exercises1.csv` (id;e1;e2;e3;e4;e5;e6;e7). It should print the sum of exercise points for each student.",
        CAS: "Escribe un programa que lea `students1.csv` y `exercises1.csv`. Debe imprimir la suma de puntos de ejercicios para cada estudiante.",
        EUS: "Idatzi programa bat `students1.csv` eta `exercises1.csv` irakurtzen dituena. Ikasle bakoitzaren ariketa-puntuen batura inprimatu behar du."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
from unittest.mock import patch, mock_open

class TestGrading1(unittest.TestCase):
    def test_run(self):
        students_csv = """id;first;last
12345678;pekka;peloton
12345687;jaana;javanainen
12345699;liisa;virtanen"""

        exercises_csv = """id;e1;e2;e3;e4;e5;e6;e7
12345678;4;1;1;4;5;2;4
12345687;3;5;3;1;5;4;6
12345699;10;2;2;7;10;2;2"""

        def my_open(filename, mode='r'):
            if "students" in filename:
                return mock_open(read_data=students_csv).return_value
            elif "exercises" in filename:
                return mock_open(read_data=exercises_csv).return_value
            raise FileNotFoundError(filename)

        with patch('builtins.open', side_effect=my_open):
            # Student program asks for filenames
            inputs = ["students1.csv", "exercises1.csv"]
            out = run_student_code(inputs=inputs)
            
            # Expected:
            # pekka peloton 21
            # jaana javanainen 27
            # liisa virtanen 35
            
            if "pekka peloton 21" not in out: self.fail("Output missing 'pekka peloton 21'")
            if "liisa virtanen 35" not in out: self.fail("Output missing 'liisa virtanen 35'")
`
    },
    {
      type: 'exercise',
      exerciseId: 'part06-05_course_grading_part_2',
      title: {
        ENG: "Course grading, part 2",
        CAS: "Calificación del curso, parte 2",
        EUS: "Ikastaroaren kalifikazioa, 2. zatia"
      },
      description: {
        ENG: "Extend the program to read `exam_points1.csv` (id;e1;e2;e3). Print the grade (0-5) based on total points (exam + exercises).",
        CAS: "Extiende el programa para leer `exam_points1.csv`. Imprime la nota (0-5) basada en el total.",
        EUS: "Zabaldu programa `exam_points1.csv` irakurtzeko. Inprimatu nota (0-5) guztizkoan oinarrituta."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
from unittest.mock import patch, mock_open

class TestGrading2(unittest.TestCase):
    def test_run(self):
        # We assume similar csv structure + exams
        # Mocking complex multi-file reads with side_effect
        pass
`
    },
    {
      type: 'exercise',
      exerciseId: 'part06-06_course_grading_part_3',
      title: {
        ENG: "Course grading, part 3",
        CAS: "Calificación del curso, parte 3",
        EUS: "Ikastaroaren kalifikazioa, 3. zatia"
      },
      description: {
        ENG: "Format the output nicely as a table with columns: name, exec_nbr, exec_pts, exm_pts, tot_pts, grade.",
        CAS: "Formatea la salida como una tabla bonita con columnas.",
        EUS: "Formateatu irteera taula polit gisa zutabeekin."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
class TestGrading3(unittest.TestCase):
    def test_run(self):
        pass
`
    },
    {
      type: 'exercise',
      exerciseId: 'part06-07_spellchecker',
      title: {
        ENG: "Spell checker",
        CAS: "Corrector ortográfico",
        EUS: "Ortografia zuzentzailea"
      },
      description: {
        ENG: "Write a program that asks for text and prints it out with misspelled words starred. Use `wordlist.txt` as dictionary.",
        CAS: "Pide un texto e imprímelo con las palabras mal escritas entre asteriscos. Usa `wordlist.txt`.",
        EUS: "Eskatu testu bat eta inprimatu gaizki idatzitako hitzak izartxo artean. Erabili `wordlist.txt`."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
from unittest.mock import patch, mock_open

class TestSpell(unittest.TestCase):
    def test_run(self):
        wordlist = "this\nis\na\ntest\n"
        user_input = "This is a tset"
        
        with patch('builtins.open', mock_open(read_data=wordlist)):
            out = run_student_code(inputs=[user_input])
            # "This is a *tset*"
            if "*tset*" not in out:
                 self.fail("Misspelled word 'tset' should be starred.")
`
    },
    {
      type: 'exercise',
      exerciseId: 'part06-08_recipe_search',
      title: {
        ENG: "Recipe search",
        CAS: "Búsqueda de recetas",
        EUS: "Errezeta bilaketa"
      },
      description: {
        ENG: "Write functions to search recipes from a file by name, prep time, or ingredient. The file format is specific (name, time, ingredients...).",
        CAS: "Escribe funciones para buscar recetas por nombre, tiempo o ingrediente. El formato del fichero es específico.",
        EUS: "Idatzi funtzioak errezetak bilatzeko izenaren, denboraren edo osagaiaren arabera."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
class TestRecipe(unittest.TestCase):
    def test_run(self):
        pass
`
    },
    {
      type: 'exercise',
      exerciseId: 'part06-09_city_bikes',
      title: {
        ENG: "City bikes",
        CAS: "Bicicletas de ciudad",
        EUS: "Hiriko bizikletak"
      },
      description: {
        ENG: "Read CSV with bike station coordinates. Calculate distances between stations.",
        CAS: "Lee CSV con coordenadas de estaciones. Calcula distancias.",
        EUS: "Irakurri bizikleta geltokien koordenatuak dituen CSVa. Kalkulatu distantziak."
      },
      initialCode: "# Write your solution here\n",
      testCode: `
import unittest
class TestBikes(unittest.TestCase):
    def test_run(self):
        pass
`
    }
  ]
};