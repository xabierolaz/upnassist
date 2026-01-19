const learningObjectives = {
  type: "markdown",
  content: {
    ENG: "# Learning objectives\n\nAfter this section\n\n- You will know the difference between definite and indefinite iteration\n- You will know how a Python `for` loop works\n- You will be able to use a `for` loop to iterate through lists and strings",
    CAS: "# Objetivos de aprendizaje\n\nDespués de esta sección\n\n- Sabrás la diferencia entre iteración definida e indefinida\n- Sabrás cómo funciona un bucle `for` en Python\n- Serás capaz de usar un bucle `for` para iterar a través de listas y cadenas",
    EUS: "# Ikas-helburuak\n\nAtal honen ondoren\n\n- Iterazio definituaren eta mugagabearen arteko aldea ezagutuko duzu\n- Python `for` begizta batek nola funtzionatzen duen jakingo duzu\n- `for` begizta bat erabiltzeko gai izango zara zerrendak eta kateak iteratzeko"
  }
};

const introContent = {
  type: "markdown",
  content: {
    ENG: "You can use a `while` loop to go through the items in a list... [Theory content about for loops] ...",
    CAS: "Puedes usar un bucle `while` para recorrer los elementos de una lista... [Contenido teórico sobre bucles for] ...",
    EUS: "`while` begizta bat erabil dezakezu zerrenda bateko elementuak zeharkatzeko... [for begiztei buruzko eduki teorikoa] ..."
  }
};

const exerciseStarStudded = {
  type: "exercise",
  exerciseId: "part04-20_star_studded",
  title: { ENG: "Star-studded", CAS: "Estrellado", EUS: "Izarrez betea" },
  description: {
    ENG: "Please write a program which asks the user to type in a string. The program then prints each input character on a separate line. After each character there should be a star (*) printed on its own line.",
    CAS: "Por favor escribe un programa que pida al usuario que escriba una cadena. El programa luego imprime cada carácter de entrada en una línea separada. Después de cada carácter debe haber una estrella (*) impresa en su propia línea.",
    EUS: "Mesedez idatzi programa bat erabiltzaileari kate bat idazteko eskatzen diona. Programak sarrerako karaktere bakoitza lerro bereizi batean inprimatzen du. Karaktere bakoitzaren ondoren izar bat (*) inprimatu behar da bere lerroan."
  },
  initialCode: { ENG: "# Write your solution here", CAS: "# Escribe tu solución aquí", EUS: "# Idatzi zure soluzioa hemen" },
  testCode: [
    "import unittest",
    "from unittest.mock import patch",
    "class TestStarStudded(unittest.TestCase):",
    "    def test_run(self):",
    "        with patch('builtins.input', return_value='Hi'), patch('builtins.print') as mock_print:",
    "            run_student_code()",
    "            # Expected: H, *, i, *",
    "            if mock_print.call_count < 4:",
    "                self.fail('Should print at least 4 lines for input \"Hi\" | Debería imprimir al menos 4 líneas para la entrada \"Hi\" | Gutxienez 4 lerro inprimatu beharko lituzke \"Hi\" sarrerarako')",
    "            args = [c[0][0] for c in mock_print.call_args_list]",
    "            if '*' not in args:",
    "                self.fail('Output should contain stars | La salida debe contener estrellas | Irteerak izarrak izan behar ditu')"
  ].join("\n")
};

const exerciseNegativeToPositive = {
  type: "exercise",
  exerciseId: "part04-21_negative_to_positive",
  title: { ENG: "From negative to positive", CAS: "De negativo a positivo", EUS: "Negatibotik positibora" },
  description: {
    ENG: "Please write a program which asks the user for a positive integer N. The program then prints out all numbers between -N and N inclusive, but leaves out the number 0.",
    CAS: "Por favor escribe un programa que pida al usuario un entero positivo N. El programa luego imprime todos los números entre -N y N inclusive, pero omite el número 0.",
    EUS: "Mesedez idatzi programa bat erabiltzaileari N osoko positibo bat eskatzen diona. Programak gero -N eta N arteko zenbaki guztiak inprimatzen ditu barne, baina 0 zenbakia kanpoan uzten du."
  },
  initialCode: { ENG: "# Write your solution here", CAS: "# Escribe tu solución aquí", EUS: "# Idatzi zure soluzioa hemen" },
  testCode: [
    "import unittest",
    "from unittest.mock import patch",
    "class TestNegToPos(unittest.TestCase):",
    "    def test_run(self):",
    "        with patch('builtins.input', return_value='2'), patch('builtins.print') as mock_print:",
    "            run_student_code()",
    "            args = [str(c[0][0]) for c in mock_print.call_args_list]",
    "            expected = ['-2', '-1', '1', '2']",
    "            for e in expected:",
    "                if e not in args:",
    "                    self.fail(f'Should print {e} | Debería imprimir {e} | {e} inprimatu beharko luke')",
    "            if '0' in args:",
    "                self.fail('Should not print 0 | No debería imprimir 0 | Ez luke 0 inprimatu behar')"
  ].join("\n")
};

module.exports = { learningObjectives, introContent, exerciseStarStudded, exerciseNegativeToPositive };
