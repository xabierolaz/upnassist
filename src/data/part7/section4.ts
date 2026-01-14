import { CoursePage } from '../mooc-exercises';

export const section4: CoursePage = {
  id: "part7-4",
  title: {
    ENG: "Data processing",
    CAS: "Procesamiento de datos",
    EUS: "Datuen prozesamendua"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Data processing

## Reading CSV files

The \`csv\` module helps processing CSV files.

\`\`\`python
import csv

with open("data.csv") as f:
    for line in csv.reader(f, delimiter=";"):
        print(line)
\`\`\`

## Reading JSON files

The \`json\` module allows reading and writing JSON data.

\`\`\`python
import json

data = '[{"name": "Python", "year": 1991}]'
parsed = json.loads(data)
print(parsed[0]["name"])
\`\`\`
`,
        CAS: `
# Procesamiento de datos

## Leyendo archivos CSV

El módulo \`csv\` ayuda a procesar archivos CSV.

\`\`\`python
import csv

with open("datos.csv") as f:
    for linea in csv.reader(f, delimiter=";"):
        print(linea)
\`\`\`

## Leyendo archivos JSON

El módulo \`json\` permite leer y escribir datos JSON.

\`\`\`python
import json

datos = '[{"nombre": "Python", "año": 1991}]'
procesado = json.loads(datos)
print(procesado[0]["nombre"])
\`\`\`
`,
        EUS: `
# Datuen prozesamendua

## CSV fitxategiak irakurtzen

\`csv\` moduluak CSV fitxategiak prozesatzen laguntzen du.

\`\`\`python
import csv

with open("datuak.csv") as f:
    for lerroa in csv.reader(f, delimiter=";"):
        print(lerroa)
\`\`\`

## JSON fitxategiak irakurtzen

\`json\` moduluak JSON datuak irakurtzea eta idaztea ahalbidetzen du.

\`\`\`python
import json

datuak = '[{"izena": "Python", "urtea": 1991}]'
prozesatua = json.loads(datuak)
print(prozesatua[0]["izena"])
\`\`\`
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part07-09_json_files',
      title: {
        ENG: "Handling JSON files",
        CAS: "Manejando archivos JSON",
        EUS: "JSON fitxategiak kudeatzen"
      },
      description: {
        ENG: "Write a function print_persons(filename), which reads a JSON file containing person data (name, age, hobbies) and prints it formatted.",
        CAS: "Escribe una función imprimir_personas(fichero), que lea un JSON con datos de personas (nombre, edad, aficiones) y lo imprima formateado.",
        EUS: "Idatzi inprimatu_pertsonak(fitxategia) funtzioa, pertsona datuak (izena, adina, zaletasunak) dituen JSON bat irakurri eta formateatuta inprimatzen duena."
      },
      initialCode: "# Write your solution here\nimport json\n",
      testCode: `
import unittest
from unittest.mock import patch, mock_open

class TestJson(unittest.TestCase):
    def test_run(self):
        json_data = '[{"name": "Peter", "age": 20, "hobbies": ["football"]}]'
        with patch('builtins.open', mock_open(read_data=json_data)):
            out = run_student_code(code_to_run="print_persons('file.json')")
            self.assertIn("Peter", out)
            self.assertIn("20", out)
            self.assertIn("football", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part07-10_course_statistics',
      title: {
        ENG: "Course statistics",
        CAS: "Estadísticas del curso",
        EUS: "Ikastaro estatistikak"
      },
      description: {
        ENG: "Write a function retrieve_all() which retrieves course data from 'https://studies.cs.helsinki.fi/stats-mock/api/courses' using urllib. Return a list of active courses (enabled: true). This is a mock URL for the exercise.",
        CAS: "Escribe retrieve_all() que recupere datos de 'https://studies.cs.helsinki.fi/stats-mock/api/courses' usando urllib. Devuelve cursos activos.",
        EUS: "Idatzi retrieve_all() funtzioa, 'https://studies.cs.helsinki.fi/stats-mock/api/courses'-tik ikastaro datuak berreskuratzeko urllib erabiliz. Itzuli ikastaro aktiboak."
      },
      initialCode: "# Write your solution here\nimport urllib.request\nimport json\n",
      testCode: `
import unittest
from unittest.mock import MagicMock, patch

class TestStats(unittest.TestCase):
    def test_run(self):
        # We need to mock urllib.request.urlopen
        mock_response = MagicMock()
        mock_response.read.return_value = b'[{"fullName": "Python", "enabled": true}, {"fullName": "Java", "enabled": false}]'
        
        with patch('urllib.request.urlopen', return_value=mock_response):
            out = run_student_code(code_to_run="print(retrieve_all())")
            self.assertIn("Python", out)
            self.assertNotIn("Java", out)
`
    },
    {
      type: 'exercise',
      exerciseId: 'part07-11_who_cheated',
      title: {
        ENG: "Who cheated",
        CAS: "¿Quién hizo trampa?",
        EUS: "Nork egin du iruzur"
      },
      description: {
        ENG: "Read 'start_times.csv' and 'submissions.csv'. Find students who spent more than 3 hours on tasks. Return a list of cheaters.",
        CAS: "Lee 'start_times.csv' y 'submissions.csv'. Encuentra estudiantes que tardaron más de 3 horas. Devuelve lista de tramposos.",
        EUS: "Irakurri 'start_times.csv' eta 'submissions.csv'. Aurkitu 3 ordu baino gehiago eman duten ikasleak. Itzuli iruzurgileen zerrenda."
      },
      initialCode: "# Write your solution here\nimport csv\nfrom datetime import datetime, timedelta\n",
      testCode: `
import unittest
class TestCheaters(unittest.TestCase):
    pass
`
    }
  ]
};