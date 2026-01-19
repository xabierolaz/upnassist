const learningObjectives = {
  type: "markdown",
  content: {
    ENG: "# Conditional statements\n\n## Learning objectives\n\nAfter this section:...",
    CAS: "# Sentencias condicionales\n\n## Objetivos de aprendizaje\n\nDespués de esta sección:...",
    EUS: "# Baldintzazko sententziak\n\n## Ikaskuntza-helburuak\n\nAtal honen ondoren:..."
  }
};

const introContent = {
  type: "markdown",
  content: {
    ENG: "Thus far, every program we have written has been executed line by line in order...",
    CAS: "Hasta ahora, todos los programas que hemos escrito se han ejecutado línea por línea en orden...",
    EUS: "Orain arte, idatzi dugun programa bakoitza lerroz lerro exekutatu da ordenan..."
  }
};

const exerciseOrwell = {
  type: "exercise",
  exerciseId: "part01-21_orwell",
  title: { ENG: "Orwell", CAS: "Orwell", EUS: "Orwell" },
  description: {
    ENG: "Print 'Orwell' if the number is exactly 1984.",
    CAS: "Imprime 'Orwell' si el número es exactamente 1984.",
    EUS: "Inprimatu 'Orwell' zenbakia zehazki 1984 bada."
  },
  initialCode: { ENG: "# Write code here", CAS: "# Escribe código aquí", EUS: "# Idatzi kodea hemen" },
  testCode: [
    "import unittest",
    "class TestOrwell(unittest.TestCase):",
    "    def test_1984(self):",
    "        out = run_student_code(inputs=['1984'])",
    "        self.assertIn('Orwell', out, 'Should print Orwell for 1984 | Debería imprimir Orwell para 1984 | Orwell inprimatu beharko luke 1984rako')",
    "    def test_2020(self):",
    "        out = run_student_code(inputs=['2020'])",
    "        if 'Orwell' in out:",
    "             self.fail('Should NOT print Orwell for 2020 | NO debería imprimir Orwell para 2020 | EZ luke Orwell inprimatu behar 2020rako')"
  ].join("\n")
};

const exerciseAbsoluteValue = {
  type: "exercise",
  exerciseId: "part01-22_absolute_value",
  title: { ENG: "Absolute value", CAS: "Valor absoluto", EUS: "Balio absolutua" },
  description: {
    ENG: "Write a program that prints absolute value of integer.",
    CAS: "Escribe un programa que imprima el valor absoluto de un entero.",
    EUS: "Idatzi zenbaki oso baten balio absolutua inprimatzen duen programa."
  },
  initialCode: { ENG: "# Write code here", CAS: "# Escribe código aquí", EUS: "# Idatzi kodea hemen" },
  testCode: [
    "import unittest",
    "class TestAbs(unittest.TestCase):",
    "    def test_neg(self):",
    "        out = run_student_code(inputs=['-7'])",
    "        if '-7' in out and '7' not in out:",
    "             self.fail('You printed -7. Absolute value must be positive (7) | Imprimiste -7. El valor absoluto debe ser positivo (7) | -7 inprimatu duzu. Balio absolutuak positiboa izan behar du (7)')",
    "        self.assertIn('7', out, 'Should contain 7 | Debería contener 7 | 7 eduki beharko luke')"
  ].join("\n")
};

const exerciseSoup = {
  type: "exercise",
  exerciseId: "part01-23_soup_or_no_soup",
  title: { ENG: "Soup or no soup", CAS: "Sopa o no sopa", EUS: "Zopa edo zopa ez" },
  description: {
    ENG: "Ask name. If not Jerry, ask portions and print cost.",
    CAS: "Pide nombre. Si no es Jerry, pide porciones e imprime costo.",
    EUS: "Eskatu izena. Jerry ez bada, eskatu zatiak eta inprimatu kostua."
  },
  initialCode: { ENG: "# Write code here", CAS: "# Escribe código aquí", EUS: "# Idatzi kodea hemen" },
  testCode: [
    "import unittest",
    "class TestSoup(unittest.TestCase):",
    "    def test_kramer(self):",
    "        out = run_student_code(inputs=['Kramer', '2'])",
    "        self.assertIn('11.8', out, 'Cost should be 11.8 | El costo debería ser 11.8 | Kostua 11.8 izan beharko litzateke')",
    "    def test_jerry(self):",
    "        try:",
    "            out = run_student_code(inputs=['Jerry'])",
    "        except StopIteration:",
    "             self.fail('Program asked for extra input from Jerry | El programa pidió entrada extra a Jerry | Programak sarrera gehigarria eskatu dio Jerryri')",
    "        self.assertNotIn('cost', out, 'Jerry should not pay | Jerry no debería pagar | Jerryk ez luke ordaindu behar')"
  ].join("\n")
};

module.exports = { learningObjectives, introContent, exerciseOrwell, exerciseAbsoluteValue, exerciseSoup };
