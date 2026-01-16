import { CoursePage } from '../mooc-exercises';

export const section4: CoursePage = {
  id: "part7-4",
  title: {
    ENG: `Data processing`,
    CAS: `Procesamiento de datos`,
    EUS: `Datuen prozesamendua`
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Data processing

## Reading CSV files

The 
csv
 module helps processing CSV files.

```python
import csv

with open("data.csv") as f:
    for line in csv.reader(f, delimiter=";"):
        print(line)
```

## Reading JSON files

The 
json
 module allows reading and writing JSON data.

```python
import json

data = \`[{\"name\": \"Python\", \"year\": 1991}]
parsed = json.loads(data)
print(parsed[0][\"name\"])
```
`,
        CAS: `
# Procesamiento de datos

## Leyendo archivos CSV

El módulo 
csv
 ayuda a procesar archivos CSV.

```python
import csv

with open("datos.csv") as f:
    for linea in csv.reader(f, delimiter=";"):
        print(linea)
```

## Leyendo archivos JSON

El módulo 
json
 permite leer y escribir datos JSON.

```python
import json

datos = \`[{\"nombre\": \"Python\", \"año\": 1991}]
procesado = json.loads(datos)
print(procesado[0][\"nombre\"])
```
`,
        EUS: `
# Datuen prozesamendua

## CSV fitxategiak irakurtzen


csv
 moduluak CSV fitxategiak prozesatzen laguntzen du.

```python
import csv

with open("datuak.csv") as f:
    for lerroa in csv.reader(f, delimiter=";"):
        print(lerroa)
```

## JSON fitxategiak irakurtzen


json
 moduluak JSON datuak irakurtzea eta idaztea ahalbidetzen du.

```python
import json

datuak = \`[{\"izena\": \"Python\", \"urtea\": 1991}]
prozesatua = json.loads(datuak)
print(prozesatua[0][\"izena\"])
```
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part07-12_json_files',
      title: {
        ENG: `Handling JSON files`,
        CAS: `Manejando archivos JSON`,
        EUS: `JSON fitxategiak kudeatzen`
      },
      description: {
        ENG: `Write a function 
print_persons(filename)
, which reads a JSON file containing person data (name, age, hobbies) and prints it formatted.`,
        CAS: `Escribe una función 
print_persons(filename)
, que lea un JSON con datos de personas (nombre, edad, aficiones) y lo imprima formateado.`,
        EUS: `Idatzi 
print_persons(filename)
 funtzioa, pertsona datuak (izena, adina, zaletasunak) dituen JSON bat irakurri eta formateatuta inprimatzen duena.`
      },
      initialCode: `# Write your solution here\nimport json\n`,
      testCode: `
import unittest
from unittest.mock import patch, mock_open

class TestJson(unittest.TestCase):
    def test_run(self):
        json_data = '[{\"name\": \"Peter\", \"age\": 20, \"hobbies\": [\"football\"]}]'
        with patch('builtins.open', mock_open(read_data=json_data)):
            # We assume student calls print_persons if running main, or we rely on import.
            # In this runner: verify output if called.
            # We can try to execute a snippet:
            pass
`
    },
    {
      type: 'exercise',
      exerciseId: 'part07-13_course_statistics',
      title: {
        ENG: `Course statistics`,
        CAS: `Estadísticas del curso`,
        EUS: `Ikastaro estatistikak`
      },
      description: {
        ENG: `Write a function 
retrieve_all()\n which retrieves course data from 'https://studies.cs.helsinki.fi/stats-mock/api/courses' using 
urllib.request\n. Return a list of active courses (enabled: true). Also implement 
retrieve_course(course_name)\n.`,
        CAS: `Escribe 
retrieve_all()\n que recupere datos de la API usando urllib. Devuelve cursos activos. Implementa también 
retrieve_course(course_name)\n.`,
        EUS: `Idatzi 
retrieve_all()\n funtzioa, API-tik ikastaro datuak berreskuratzeko urllib erabiliz. Itzuli ikastaro aktiboak. Inplementatu 
retrieve_course(course_name)\n ere.`
      },
      initialCode: `# Write your solution here\nimport urllib.request\nimport json\n`,
      testCode: `
import unittest
class TestStats(unittest.TestCase):
    def test_run(self):
        pass
`
    },
    {
      type: 'exercise',
      exerciseId: 'part07-14_who_cheated',
      title: {
        ENG: `Who cheated`,
        CAS: `¿Quién hizo trampa?`,
        EUS: `Nork egin du iruzur`
      },
      description: {
        ENG: `Read 'start_times.csv' and 'submissions.csv'. Write 
cheaters()\n that returns a list of students who spent more than 3 hours on tasks.`,
        CAS: `Lee 'start_times.csv' y 'submissions.csv'. Escribe 
cheaters()\n que devuelva estudiantes que tardaron más de 3 horas.`,
        EUS: `Irakurri 'start_times.csv' eta 'submissions.csv'. Idatzi 
cheaters()\n funtzioa, 3 ordu baino gehiago eman duten ikasleak itzultzen dituena.`
      },
      initialCode: `# Write your solution here\nimport csv\nfrom datetime import datetime, timedelta\n`,
      testCode: `
import unittest
class TestCheaters(unittest.TestCase):
    pass
`
    },
    {
      type: 'exercise',
      exerciseId: 'part07-15_who_cheated_2',
      title: {
        ENG: `Who cheated, version 2`,
        CAS: `¿Quién hizo trampa?, versión 2`,
        EUS: `Nork egin du iruzur, 2. bertsioa`
      },
      description: {
        ENG: `Write 
final_points()\n which calculates points for students based on submissions. If multiple submissions for a task, max points count. If cheating (time > 3h), points for that task are 0.`,
        CAS: `Escribe 
final_points()\n. Calcula puntos. Si hay múltiples envíos, cuenta el máximo. Si hubo trampa (> 3h), 0 puntos.`,
        EUS: `Idatzi 
final_points()\n. Kalkulatu puntuak. Bidalketa anitz badaude, maximoa. Iruzurra bada (> 3h), 0 puntu.`
      },
      initialCode: `# Write your solution here\n`,
      testCode: `
import unittest
class TestCheaters2(unittest.TestCase):
    pass
`
    },
    {
      type: 'exercise',
      exerciseId: 'part07-16_spellchecker_2',
      title: {
        ENG: `Spell checker, version 2`,
        CAS: `Corrector ortográfico, versión 2`,
        EUS: `Ortografia zuzentzailea, 2. bertsioa`
      },
      description: {
        ENG: `Improve the spell checker. For misspelled words, offer suggestions using 
get_close_matches\n.`,
        CAS: `Mejora el corrector. Para palabras mal escritas, ofrece sugerencias usando 
get_close_matches\n.`,
        EUS: `Hobetu zuzentzailea. Gaizki idatzitako hitzetarako, iradokizunak eskaini 
get_close_matches\n erabiliz.`
      },
      initialCode: `# Write your solution here\nimport difflib\n`,
      testCode: `
import unittest
class TestSpell2(unittest.TestCase):
    pass
`
    }
  ]
};