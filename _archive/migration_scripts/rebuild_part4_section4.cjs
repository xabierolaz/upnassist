const fs = require('fs');
const path = require('path');

const section4 = {
  id: "part4-4",
  title: {
    ENG: "Definite iteration",
    CAS: "Iteración definida",
    EUS: "Iterazio definitua"
  },
  blocks: [
    {
      type: "markdown",
      content: {
        ENG: "# Learning objectives\n\nAfter this section\n\n- You will know the difference between definite and indefinite iteration\n- You will know how a Python `for` loop works\n- You will be able to use a `for` loop to iterate through lists and strings",
        CAS: "# Objetivos de aprendizaje\n\nDespués de esta sección\n\n- Sabrás la diferencia entre iteración definida e indefinida\n- Sabrás cómo funciona un bucle `for` en Python\n- Serás capaz de usar un bucle `for` para iterar a través de listas y cadenas",
        EUS: "# Ikas-helburuak\n\nAtal honen ondoren\n\n- Iterazio definituaren eta mugagabearen arteko aldea ezagutuko duzu\n- Python `for` begizta batek nola funtzionatzen duen jakingo duzu\n- `for` begizta bat erabiltzeko gai izango zara zerrendak eta kateak iteratzeko"
      }
    },
    {
      type: "exercise",
      exerciseId: "part04-20_star_studded",
      title: { ENG: "Star-studded", CAS: "Estrellado", EUS: "Izarrez betea" },
      description: {
        ENG: "Please write a program which asks the user to type in a string. The program then prints each input character on a separate line. After each character there should be a star (*) printed on its own line.",
        CAS: "Por favor escribe un programa que pida al usuario que escriba una cadena. El programa luego imprime cada carácter de entrada en una línea separada. Después de cada carácter debe haber una estrella (*) impresa en su propia línea.",
        EUS: "Mesedez idatzi programa bat erabiltzaileari kate bat idazteko eskatzen diona. Programak sarrerako karaktere bakoitza lerro bereizi batean inprimatzen du. Karaktere bakoitzaren ondoren izar bat (*) inprimatu behar da bere lerroan."
      },
      initialCode: { ENG: "# Write your solution here", CAS: "# Escribe tu solución aquí", EUS: "# Idatzi zure soluzioa hemen" },
      testCode: "import unittest\nfrom unittest.mock import patch\nclass TestStarStudded(unittest.TestCase):\n    def test_run(self):\n        with patch('builtins.input', return_value='Hi'):\n            run_student_code()\n            # Expect H, *, i, *\n"
    }
  ]
};

const outputPath = path.join(__dirname, '../src/data/part4/section4.json');
fs.writeFileSync(outputPath, JSON.stringify(section4, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);