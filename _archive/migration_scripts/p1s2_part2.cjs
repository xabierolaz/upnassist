const exerciseNameAndAddress = {
  type: "exercise",
  exerciseId: "part01-08_name_and_address",
  title: { ENG: "Name and address", CAS: "Nombre y dirección", EUS: "Izena eta helbidea" },
  description: {
    ENG: "Write a program that asks for name and address and prints them.",
    CAS: "Escribe un programa que pida nombre y dirección e imprímelos.",
    EUS: "Idatzi izena eta helbidea eskatu eta inprimatzen dituen programa bat."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestAddr(unittest.TestCase):",
    "    def test_steve(self):",
    "        out = run_student_code(inputs=['Steve', 'Sanders', '91 Station Road', 'London EC05 6AW'])",
    "        if 'Steve Sanders' not in out:",
    "            self.fail('Full name missing | Falta el nombre completo | Izen osoa falta da')",
    "        if '91 Station Road' not in out:",
    "            self.fail('Address missing | Falta la dirección | Helbidea falta da')",
    "        if 'London EC05 6AW' not in out:",
    "            self.fail('City missing | Falta la ciudad | Hiria falta da')"
  ].join("\n")
};

const exerciseUtterances = {
  type: "exercise",
  exerciseId: "part01-09_utterances",
  title: { ENG: "Fix the code: Utterances", CAS: "Corrige el código: Expresiones", EUS: "Konpondu kodea: Adierazpenak" },
  description: {
    ENG: "Fix the code to print three parts together.",
    CAS: "Arregla el código para imprimir tres partes juntas.",
    EUS: "Konpondu kodea hiru zati elkarrekin inprimatzeko."
  },
  initialCode: {
    ENG: "part1 = input('1st: ')\npart2 = input('2nd: ')\npart3 = input('3rd: ')\nprint(part1 + part2 + part3)",
    CAS: "part1 = input('1ro: ')\npart2 = input('2do: ')\npart3 = input('3ro: ')\nprint(part1 + part2 + part3)",
    EUS: "part1 = input('1.: ')\npart2 = input('2.: ')\npart3 = input('3.: ')\nprint(part1 + part2 + part3)"
  },
  testCode: [
    "import unittest",
    "class TestUtter(unittest.TestCase):",
    "    def test_parts(self):",
    "        out = run_student_code(inputs=['hickory', 'dickory', 'dock'])",
    "        if 'hickory-dickory-dock!' in out:",
    "            pass",
    "        elif 'hickorydickorydock' in out:",
    "             self.fail('Missing hyphen | Falta el guión | Gidoia falta da')",
    "        else:",
    "             self.fail('Output incorrect | Salida incorrecta | Irteera okerra')"
  ].join("\n")
};

const exerciseStory = {
  type: "exercise",
  exerciseId: "part01-10_story",
  title: { ENG: "Story", CAS: "Historia", EUS: "Istorioa" },
  description: {
    ENG: "Write a program that prints a story with given name and year.",
    CAS: "Escribe un programa que imprima una historia con el nombre y año dados.",
    EUS: "Idatzi emandako izen eta urtearekin istorio bat inprimatzen duen programa."
  },
  initialCode: { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
  testCode: [
    "import unittest",
    "class TestStory(unittest.TestCase):",
    "    def test_mary(self):",
    "        out = run_student_code(inputs=['Mary', '1572'])",
    "        if 'Mary is a valiant knight' not in out:",
    "            self.fail('First sentence wrong | Primera frase incorrecta | Lehen esaldia okerra')",
    "        if 'born in the year 1572' not in out:",
    "            self.fail('Year part wrong | Parte del año incorrecta | Urtearen zatia okerra')"
  ].join("\n")
};

module.exports = { exerciseNameAndAddress, exerciseUtterances, exerciseStory };
