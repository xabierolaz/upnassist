const learningObjectives = {
  type: "markdown",
  content: {
    ENG: "# Learning objectives\n\n- You will be familiar with some of the functions in the module `random`\n- You will be able to make use of random numbers in your programs",
    CAS: "# Objetivos de aprendizaje\n\n- Estarás familiarizado con algunas de las funciones en el módulo `random`\n- Podrás hacer uso de números aleatorios en tus programas",
    EUS: "# Ikas-helburuak\n\n- `random` moduluko funtzio batzuk ezagutuko dituzu\n- Zure programetan ausazko zenbakiak erabiltzeko gai izango zara"
  }
};

const introContent = {
  type: "markdown",
  content: {
    ENG: "This section concentrates on the module `random` from the Python standard library...",
    CAS: "Esta sección se concentra en el módulo `random` de la biblioteca estándar de Python...",
    EUS: "Atal honek Python liburutegi estandarreko `random` moduluan jartzen du arreta..."
  }
};

const moreRandomContent = {
  type: "markdown",
  content: {
    ENG: "## More randomizing functions\n\nThe function `shuffle` will shuffle any data structure...",
    CAS: "## Más funciones de aleatorización\n\nLa función `shuffle` barajará cualquier estructura de datos...",
    EUS: "## Ausazkotze funtzio gehiago\n\n`shuffle` funtzioak argumentu gisa pasatako edozein datu-egitura nahastuko du..."
  }
};

const lotteryContent = {
  type: "markdown",
  content: {
    ENG: "## Lottery numbers\n\nA common example for studying randomness is the case of lottery numbers...",
    CAS: "## Números de lotería\n\nUn ejemplo común para estudiar la aleatoriedad es el caso de los números de lotería...",
    EUS: "## Loteria zenbakiak\n\nAusazkotasuna aztertzeko adibide arrunt bat loteria zenbakien kasua da..."
  }
};

const exerciseLotteryNumbers = {
  type: "exercise",
  exerciseId: "part07-04_lottery_numbers",
  title: { ENG: "Lottery numbers", CAS: "Números de lotería", EUS: "Loteria zenbakiak" },
  description: {
    ENG: "Write `lottery_numbers(amount, lower, upper)` returning sorted unique random numbers.",
    CAS: "Escribe `lottery_numbers(amount, lower, upper)` devolviendo números aleatorios únicos ordenados.",
    EUS: "Idatzi `lottery_numbers(amount, lower, upper)` ausazko zenbaki bakar ordenatuak itzultzen."
  },
  initialCode: { ENG: "def lottery_numbers(a, l, u): pass", CAS: "def lottery_numbers(a, l, u): pass", EUS: "def lottery_numbers(a, l, u): pass" },
  testCode: [
    "import unittest",
    "class TestLottery(unittest.TestCase):",
    "    def test_run(self):",
    "        res = lottery_numbers(7, 1, 40)",
    "        self.assertEqual(len(res), 7, 'Should return 7 numbers | Debería devolver 7 números | 7 zenbaki itzuli beharko lituzke')",
    "        self.assertEqual(len(set(res)), 7, 'Numbers should be unique | Los números deberían ser únicos | Zenbakiek bakarrak izan behar dute')",
    "        self.assertEqual(res, sorted(res), 'Numbers should be sorted | Los números deberían estar ordenados | Zenbakiek ordenatuta egon behar dute')"
  ].join("\n")
};

const exercisePasswordGen1 = {
  type: "exercise",
  exerciseId: "part07-05_password_generator_part_1",
  title: { ENG: "Password generator 1", CAS: "Generador de contraseñas 1", EUS: "Pasahitz sortzailea 1" },
  description: {
    ENG: "Write `generate_password(length)` creating lowercase password.",
    CAS: "Escribe `generate_password(length)` creando contraseña en minúsculas.",
    EUS: "Idatzi `generate_password(length)` minuskulazko pasahitza sortzen."
  },
  initialCode: { ENG: "def generate_password(l): pass", CAS: "def generate_password(l): pass", EUS: "def generate_password(l): pass" },
  testCode: [
    "import unittest",
    "import string",
    "class TestPassGen1(unittest.TestCase):",
    "    def test_run(self):",
    "        pw = generate_password(8)",
    "        self.assertEqual(len(pw), 8, 'Length should be 8 | La longitud debería ser 8 | Luzera 8 izan beharko litzateke')",
    "        self.assertTrue(all(c in string.ascii_lowercase for c in pw), 'Should be lowercase | Debería ser minúsculas | Minuskulak izan beharko lirateke')"
  ].join("\n")
};

module.exports = { learningObjectives, introContent, moreRandomContent, lotteryContent, exerciseLotteryNumbers, exercisePasswordGen1 };
