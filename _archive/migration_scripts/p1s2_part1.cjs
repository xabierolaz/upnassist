const introContent = {
  type: "markdown",
  content: {
    ENG: "# Information from the user\n\n## Learning objectives\n\nAfter this section:\n- You will know how to write a program which uses input from the user...",
    CAS: "# Información del usuario\n\n## Objetivos de aprendizaje\n\nDespués de esta sección:\n- Sabrás cómo escribir un programa que utiliza la entrada del usuario...",
    EUS: "# Erabiltzailearen informazioa\n\n## Ikaskuntza-helburuak\n\nAtal honen ondoren:\n- Erabiltzailearen sarrera erabiltzen duen programa bat idazten jakingo duzu..."
  }
};

const exerciseNameTwice = {
  type: "exercise",
  exerciseId: "part01-06_name_twice",
  title: { ENG: "Name twice", CAS: "Nombre dos veces", EUS: "Izena bi aldiz" },
  description: {
    ENG: "Please write a program which asks for the user's name and then prints it twice, on two consecutive lines.",
    CAS: "Escribe un programa que pida el nombre del usuario y luego lo imprima dos veces, en dos líneas consecutivas.",
    EUS: "Idatzi programa bat erabiltzaileari izena eskatzen diona eta gero bi aldiz inprimatzen duena, bi lerro jarraitutan."
  },
  initialCode: { ENG: "# Write your code here", CAS: "# Escribe tu código aquí", EUS: "# Idatzi zure kodea hemen" },
  testCode: [
    "import unittest",
    "class TestNameTwice(unittest.TestCase):",
    "    def test_run(self):",
    "        out = run_student_code(inputs=['Paul']).strip().split('\n')",
    "        clean_out = [l for l in out if 'Paul' in l]",
    "        if len(clean_out) < 2:",
    "            self.fail('You must print the name twice | Debes imprimir el nombre dos veces | Izena bi aldiz inprimatu behar duzu')",
    "        if clean_out[0] == clean_out[1] and 'Paul' in clean_out[0]:",
    "            pass",
    "        else:",
    "            self.fail('Print the name exactly as input | Imprime el nombre exactamente como se ingresó | Inprimatu izena sartu den bezalaxe')"
  ].join("\n")
};

const referencingContent = {
  type: "markdown",
  content: {
    ENG: "## Referencing a variable\n\nA single variable can be referred to many times in a program...",
    CAS: "## Referenciar una variable\n\nSe puede hacer referencia a una sola variable muchas veces en un programa...",
    EUS: "## Aldagai bat erreferentziatzea\n\nPrograma batean aldagai bati askotan egin dakioke erreferentzia..."
  }
};

module.exports = { introContent, exerciseNameTwice, referencingContent };
