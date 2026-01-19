const learningObjectives = {
  type: "markdown",
  content: {
    ENG: "# Learning objectives\n\n- You will know how to read the contents of files with Python\n- You will know what a text file and a CSV file are\n- You will be able to process the contents of a CSV file in your programs",
    CAS: "# Objetivos de aprendizaje\n\n- Sabrás cómo leer el contenido de archivos con Python\n- Sabrás qué son un archivo de texto y un archivo CSV\n- Podrás procesar el contenido de un archivo CSV en tus programas",
    EUS: "# Ikas-helburuak\n\n- Python-ekin fitxategien edukia nola irakurri jakingo duzu\n- Testu fitxategi bat eta CSV fitxategi bat zer diren jakingo duzu\n- Zure programetan CSV fitxategi baten edukia prozesatzeko gai izango zara"
  }
};

const introContent = {
  type: "markdown",
  content: {
    ENG: "A very common use case for programming is handling data stored in files...",
    CAS: "Un caso de uso muy común para la programación es manejar datos almacenados en archivos...",
    EUS: "Programaziorako erabilera kasu oso ohiko bat fitxategietan gordetako datuak maneiatzea da..."
  }
};

const exerciseLargestNumber = {
  type: "exercise",
  exerciseId: "part06-01_largest_number",
  title: { ENG: "Largest number", CAS: "El número más grande", EUS: "Zenbaki handiena" },
  description: {
    ENG: "The file `numbers.txt` contains integer numbers. Write a function named `largest` to find the largest number.",
    CAS: "El archivo `numbers.txt` contiene números enteros. Escribe una función llamada `largest` para encontrar el número más grande.",
    EUS: "`numbers.txt` fitxategiak zenbaki osoak ditu. Idatzi `largest` funtzioa zenbaki handiena aurkitzeko."
  },
  initialCode: { ENG: "def largest(): pass", CAS: "def largest(): pass", EUS: "def largest(): pass" },
  testCode: [
    "import unittest",
    "from unittest.mock import mock_open, patch",
    "class TestLargest(unittest.TestCase):",
    "    def test_run(self):",
    "        m = mock_open(read_data='1\n20\n3\n')",
    "        with patch('builtins.open', m):",
    "            self.assertEqual(largest(), 20, 'Should return 20 | Debería devolver 20 | 20 itzuli beharko luke')"
  ].join("\n")
};

const csvContent = {
  type: "markdown",
  content: {
    ENG: "## Reading CSV files\n\nA CSV file, short for *comma-separated Values*, is a text file...",
    CAS: "## Leyendo archivos CSV\n\nUn archivo CSV, abreviatura de *valores separados por comas*...",
    EUS: "## CSV fitxategiak irakurtzen\n\nCSV fitxategi bat, *komaz bereizitako balioen* laburdura..."
  }
};

const exerciseFruitMarket = {
  type: "exercise",
  exerciseId: "part06-02_fruit_market",
  title: { ENG: "Fruit market", CAS: "Mercado de frutas", EUS: "Fruta merkatua" },
  description: {
    ENG: "Read `fruits.csv` and return a dictionary name:price.",
    CAS: "Lee `fruits.csv` y devuelve un diccionario nombre:precio.",
    EUS: "Irakurri `fruits.csv` eta itzuli hiztegi bat izena:prezioa."
  },
  initialCode: { ENG: "def read_fruits(): pass", CAS: "def read_fruits(): pass", EUS: "def read_fruits(): pass" },
  testCode: [
    "import unittest",
    "from unittest.mock import mock_open, patch",
    "class TestFruits(unittest.TestCase):",
    "    def test_run(self):",
    "        m = mock_open(read_data='banana;6.50\napple;4.95')",
    "        with patch('builtins.open', m):",
    "            res = read_fruits()",
    "            self.assertEqual(res['banana'], 6.50, 'Banana price wrong | Precio de banana incorrecto | Banana prezioa okerra')"
  ].join("\n")
};

module.exports = { learningObjectives, introContent, exerciseLargestNumber, csvContent, exerciseFruitMarket };
