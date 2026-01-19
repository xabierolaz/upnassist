const fs = require('fs');
const path = require('path');

const section4 = {
  id: "part2-4",
  title: {
    ENG: "Simple loops",
    CAS: "Bucles simples",
    EUS: "Begizta sinpleak"
  },
  "blocks": [
    {
      "type": "markdown",
      "content": {
        "ENG": "\n# Simple loops\n\n## After this section:\n\n- You will know what a loop means in programming...",
        "CAS": "\n# Bucles simples\n\n## Después de esta sección:\n\n- Sabrás qué significa un bucle en programación...",
        "EUS": "\n# Begizta sinpleak\n\n## Atal honen ondoren:\n\n- Jakingo duzu zer esan nahi duen begizta batek programazioan..."
      }
    },
    {
      "type": "exercise",
      "exerciseId": "part02-15_shall_we_continue",
      "title": { ENG: "Shall we continue?", CAS: "¿Continuamos?", EUS: "Jarraituko dugu?" },
      "description": {
        ENG: "Program loops asking 'shall we continue?' until 'no'.",
        CAS: "El programa repite preguntando 'shall we continue?' hasta 'no'.",
        EUS: "Programak 'shall we continue?' galdetzen du 'no' arte."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestContinue(unittest.TestCase):",
        "    def test_run(self):",
        "        out = run_student_code(inputs=['yes', 'yes', 'no'])",
        "        self.assertIn('okay then', out, 'Should say okay then | Debería decir okay then | okay then esan beharko luke')",
        "        if out.count('hi') < 3:",
        "             self.fail('Should print hi in loop | Debería imprimir hi en el bucle | Begiztan hi inprimatu beharko luke')"
      ].join("\n")
    },
    {
      "type": "markdown",
      "content": {
        "ENG": "\n## Loops and helper variables\n\nWe can use variables outside the loop...",
        "CAS": "\n## Bucles y variables auxiliares\n\nPodemos usar variables fuera del bucle...",
        "EUS": "\n## Begiztak eta aldagai laguntzaileak\n\nBegiztatik kanpoko aldagaiak erabil ditzakegu..."
      }
    },
    {
      "type": "exercise",
      "exerciseId": "part02-16_pin_and_attempts",
      "title": { ENG: "PIN and attempts", CAS: "PIN e intentos", EUS: "PINa eta saiakerak" },
      "description": {
        ENG: "Ask PIN (4321) and count attempts.",
        CAS: "Pide PIN (4321) y cuenta intentos.",
        EUS: "Eskatu PINa (4321) eta kontatu saiakerak."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestPin(unittest.TestCase):",
        "    def test_run(self):",
        "        out = run_student_code(inputs=['1111', '2222', '4321'])",
        "        self.assertIn('Correct!', out, 'Should say Correct! | Debería decir Correct! | Correct! esan beharko luke')",
        "        self.assertIn('3 attempts', out, 'Should count attempts | Debería contar intentos | Saiakerak kontatu beharko lituzke')"
      ].join("\n")
    },
    {
      "type": "exercise",
      "exerciseId": "part02-17_countdown",
      "title": { ENG: "Countdown", CAS: "Cuenta atrás", EUS: "Atzerako kontaketa" },
      "description": {
        ENG: "Print countdown from N to 1 then Now!",
        CAS: "Imprime cuenta atrás de N a 1 luego Now!",
        EUS: "Inprimatu atzerako kontaketa N-tik 1era gero Now!"
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestCountdown(unittest.TestCase):",
        "    def test_run(self):",
        "        out = run_student_code(inputs=['3'])",
        "        self.assertIn('3', out)",
        "        self.assertIn('2', out)",
        "        self.assertIn('1', out)",
        "        self.assertIn('Now!', out, 'Should say Now! | Debería decir Now! | Now! esan beharko luke')"
      ].join("\n")
    },
    {
      "type": "exercise",
      "exerciseId": "part02-18_repeat_password",
      "title": { ENG: "Repeat password", CAS: "Repetir contraseña", EUS: "Errepikatu pasahitza" },
      "description": {
        ENG: "Ask password twice until match.",
        CAS: "Pide contraseña dos veces hasta que coincidan.",
        EUS: "Eskatu pasahitza bi aldiz bat etorri arte."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestPass(unittest.TestCase):",
        "    def test_run(self):",
        "        out = run_student_code(inputs=['secret', 'wrong', 'secret'])",
        "        self.assertIn('User account created!', out, 'Should create account | Debería crear cuenta | Kontua sortu beharko luke')"
      ].join("\n")
    },
    {
      "type": "exercise",
      "exerciseId": "part02-19_story",
      "title": { ENG: "Story", CAS: "Historia", EUS: "Istorioa" },
      "description": {
        ENG: "Build story from words. Stop on 'end' or repeat.",
        CAS: "Construye historia con palabras. Para en 'end' o repetir.",
        EUS: "Eraiki istorioa hitzekin. Gelditu 'end' edo errepikatzean."
      },
      "initialCode": { ENG: "# Write solution", CAS: "# Escribe solución", EUS: "# Idatzi soluzioa" },
      "testCode": [
        "import unittest",
        "class TestStory(unittest.TestCase):",
        "    def test_end(self):",
        "        out = run_student_code(inputs=['Once', 'upon', 'a', 'time', 'end'])",
        "        self.assertIn('Once upon a time', out, 'Should print story | Debería imprimir historia | Istorioa inprimatu beharko luke')",
        "    def test_repeat(self):",
        "        out = run_student_code(inputs=['It', 'was', 'a', 'dark', 'dark', 'night'])",
        "        if 'dark dark' in out:",
        "             self.fail('Should stop on repeat | Debería parar al repetir | Errepikatzean gelditu beharko luke')"
      ].join("\n")
    },
    {
      "type": "exercise",
      "exerciseId": "part02-20_working_with_numbers",
      "title": { ENG: "Working with numbers", CAS: "Trabajando con números", EUS: "Zenbakiekin lanean" },
      "description": {
        ENG: "Stats of numbers until 0.",
        CAS: "Estadísticas de números hasta 0.",
        EUS: "Zenbakien estatistikak 0 arte."
      },
      "initialCode": { ENG: "print('Please type in integer numbers. Type in 0 to finish.')\n# Code here", CAS: "print('Please type in integer numbers. Type in 0 to finish.')\n# Code here", EUS: "print('Please type in integer numbers. Type in 0 to finish.')\n# Code here" },
      "testCode": [
        "import unittest",
        "class TestNumbers(unittest.TestCase):",
        "    def test_run(self):",
        "        out = run_student_code(inputs=['5', '2', '-1', '0'])",
        "        self.assertIn('Count: 3', out, 'Count incorrect | Cuenta incorrecta | Kopurua okerra')",
        "        self.assertIn('Sum: 6', out, 'Sum incorrect | Suma incorrecta | Batura okerra')",
        "        self.assertIn('Mean: 2.0', out, 'Mean incorrect | Media incorrecta | Batezbestekoa okerra')",
        "        self.assertIn('Positive: 2', out, 'Pos count incorrect | Cuenta pos incorrecta | Pos kopurua okerra')",
        "        self.assertIn('Negative: 1', out, 'Neg count incorrect | Cuenta neg incorrecta | Neg kopurua okerra')"
      ].join("\n")
    }
  ]
};

const outputPath = path.join(__dirname, '../src/data/part2/section4.json');
fs.writeFileSync(outputPath, JSON.stringify(section4, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
