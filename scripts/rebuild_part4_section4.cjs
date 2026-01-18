const fs = require('fs');
const path = require('path');

const learningObjectives = {
  type: "markdown",
  content: {
    ENG: [
      "# Learning objectives",
      "",
      "After this section",
      "",
      "- You will know the difference between definite and indefinite iteration",
      "- You will know how a Python `for` loop works",
      "- You will be able to use a `for` loop to iterate through lists and strings"
    ].join("\n"),
    CAS: [
      "# Objetivos de aprendizaje",
      "",
      "Después de esta sección",
      "",
      "- Sabrás la diferencia entre iteración definida e indefinida",
      "- Sabrás cómo funciona un bucle `for` en Python",
      "- Serás capaz de usar un bucle `for` para iterar a través de listas y cadenas"
    ].join("\n"),
    EUS: [
      "# Ikas-helburuak",
      "",
      "Atal honen ondoren",
      "",
      "- Iterazio definituaren eta mugagabearen arteko aldea ezagutuko duzu",
      "- Python `for` begizta batek nola funtzionatzen duen jakingo duzu",
      "- `for` begizta bat erabiltzeko gai izango zara zerrendak eta kateak iteratzeko"
    ].join("\n")
  }
};

const introContent = {
  type: "markdown",
  content: {
    ENG: [
      "You can use a `while` loop to go through the items in a list, just like we used while loops to go through strings. The following program prints out the items in the list, each on a separate line:",
      "",
      "```python",
      "my_list = [3, 2, 4, 5, 2]",
      "",
      "index = 0",
      "while index < len(my_list):",
      "    print(my_list[index])",
      "    index += 1",
      "```",
      "",
      "```text",
      "3",
      "2",
      "4",
      "5",
      "2",
      "```",
      "",
      "This obviously works, but it is a rather complicated way of going through a list, as you have to use a helper variable `index` to remember which item in the list you're at. Fortunately, Python offers a more intuitive way of traversing through lists, strings and other similar structures.",
      "",
      "## The for loop",
      "",
      "When you want to go through some ready collection of items, the Python `for` loop will do this for you. For instance, the loop can go through all items in a list from first to last.",
      "",
      "When using a `while` loop the program doesn't \"know\" beforehand how many iterations the loop will perform. It will repeat until the condition becomes false, or the loop is otherwise broken out of. That is why it falls under *indefinite iteration*. With a for loop the number of iterations is determined when the loop is set up, and so it falls under *definite iteration*.",
      "",
      "The idea is that the `for` loop takes the items in the collection one by one and performs the same actions on each. The programmer does not have to worry about which item is being handled when. The syntax of the for loop is as follows:",
      "",
      "```python",
      "for <variable> in <collection>:",
      "    <block>",
      "```",
      "",
      "The `for` loop takes an item in the collection, assigns it to the variable, processes the block of code, and moves on to the next item. When all items in the collection have been processed, execution of the program continues from the line after the loop.",
      "",
      "![Iterating through a list](images/4_4_1.png)",
      "",
      "The following program prints out all the items in a list using a `for` loop:",
      "",
      "```python",
      "my_list = [3, 2, 4, 5, 2]",
      "",
      "for item in my_list:",
      "    print(item)",
      "```",
      "",
      "```text",
      "3",
      "2",
      "4",
      "5",
      "2",
      "```",
      "",
      "Compared to the example at the beginning of this section, the structure is much easier to understand. A `for` loop makes straightforward traversal through a collection of items very simple.",
      "",
      "The same principle applies to characters in a string:",
      "",
      "```python",
      "name = input(\"Please type in your name: \")",
      "",
      "for character in name:",
      "    print(character)",
      "```",
      "",
      "```text",
      "Please type in your name: Grace",
      "G",
      "r",
      "a",
      "c",
      "e",
      "```"
    ].join("\n"),
    CAS: [
      "Puedes usar un bucle `while` para recorrer los elementos de una lista, al igual que usamos bucles while para recorrer cadenas. El siguiente programa imprime los elementos de la lista, cada uno en una línea separada:",
      "",
      "```python",
      "mi_lista = [3, 2, 4, 5, 2]",
      "",
      "indice = 0",
      "while indice < len(mi_lista):",
      "    print(mi_lista[indice])",
      "    indice += 1",
      "```",
      "",
      "```text",
      "3",
      "2",
      "4",
      "5",
      "2",
      "```",
      "",
      "Esto obviamente funciona, pero es una forma bastante complicada de recorrer una lista, ya que tienes que usar una variable auxiliar `indice` para recordar en qué elemento de la lista estás. Afortunadamente, Python ofrece una forma más intuitiva de recorrer listas, cadenas y otras estructuras similares.",
      "",
      "## El bucle for",
      "",
      "Cuando quieres recorrer alguna colección de elementos lista, el bucle `for` de Python hará esto por ti. Por ejemplo, el bucle puede recorrer todos los elementos de una lista desde el primero hasta el último.",
      "",
      "Cuando se usa un bucle `while`, el programa no \"sabe\" de antemano cuántas iteraciones realizará el bucle. Se repetirá hasta que la condición se vuelva falsa, o se salga del bucle de otra manera. Es por eso que cae bajo la *iteración indefinida*. Con un bucle for, el número de iteraciones se determina cuando se configura el bucle, y por lo tanto cae bajo la *iteración definida*.",
      "",
      "La idea es que el bucle `for` toma los elementos de la colección uno por uno y realiza las mismas acciones en cada uno. El programador no tiene que preocuparse por qué elemento se está manejando cuándo. La sintaxis del bucle for es la siguiente:",
      "",
      "```python",
      "for <variable> in <coleccion>:",
      "    <bloque>",
      "```",
      "",
      "El bucle `for` toma un elemento de la colección, lo asigna a la variable, procesa el bloque de código y pasa al siguiente elemento. Cuando se han procesado todos los elementos de la colección, la ejecución del programa continúa desde la línea posterior al bucle.",
      "",
      "![Iterando a través de una lista](images/4_4_1.png)",
      "",
      "El siguiente programa imprime todos los elementos de una lista usando un bucle `for`:",
      "",
      "```python",
      "mi_lista = [3, 2, 4, 5, 2]",
      "",
      "for elemento in mi_lista:",
      "    print(elemento)",
      "```",
      "",
      "```text",
      "3",
      "2",
      "4",
      "5",
      "2",
      "```",
      "",
      "Comparado con el ejemplo al principio de esta sección, la estructura es mucho más fácil de entender. Un bucle `for` hace que el recorrido directo a través de una colección de elementos sea muy simple.",
      "",
      "El mismo principio se aplica a los caracteres en una cadena:",
      "",
      "```python",
      "nombre = input(\"Por favor escribe tu nombre: \")",
      "",
      "for caracter in nombre:",
      "    print(caracter)",
      "```",
      "",
      "```text",
      "Por favor escribe tu nombre: Grace",
      "G",
      "r",
      "a",
      "c",
      "e",
      "```"
    ].join("\n"),
    EUS: [
      "`while` begizta bat erabil dezakezu zerrenda bateko elementuak zeharkatzeko, kateak zeharkatzeko while begiztak erabili genituen bezala. Hurrengo programak zerrendako elementuak inprimatzen ditu, bakoitza lerro bereizi batean:",
      "",
      "```python",
      "nire_zerrenda = [3, 2, 4, 5, 2]",
      "",
      "indizea = 0",
      "while indizea < len(nire_zerrenda):",
      "    print(nire_zerrenda[indizea])",
      "    indizea += 1",
      "```",
      "",
      "```text",
      "3",
      "2",
      "4",
      "5",
      "2",
      "```",
      "",
      "Honek, jakina, funtzionatzen du, baina zerrenda bat zeharkatzeko modu nahiko konplikatua da, `indizea` aldagai laguntzailea erabili behar baituzu zerrendako zein elementutan zauden gogoratzeko. Zorionez, Python-ek zerrendak, kateak eta antzeko beste egitura batzuk zeharkatzeko modu intuitiboagoa eskaintzen du.",
      "",
      "## For begizta",
      "",
      "Prest dagoen elementu bilduma bat zeharkatu nahi duzunean, Python `for` begiztak egingo du hori zuretzat. Adibidez, begiztak zerrenda bateko elementu guztiak zeharka ditzake lehenengotik azkenera.",
      "",
      "`while` begizta bat erabiltzean programak ez daki aldez aurretik begiztak zenbat iterazio egingo dituen. Errepikatu egingo da baldintza faltsua bihurtu arte, edo begiztatik beste modu batera irten arte. Horregatik *iterazio mugagabearen* barruan sartzen da. For begizta batekin iterazio kopurua begizta konfiguratzean zehazten da, eta beraz *iterazio definituaren* barruan sartzen da.",
      "",
      "Ideia da `for` begiztak bildumako elementuak banan-banan hartzen dituela eta bakoitzean ekintza berdinak burutzen dituela. Programatzaileak ez du kezkatu behar zein elementu maneiatzen ari den noiz. For begiztaren sintaxia honako hau da:",
      "",
      "```python",
      "for <aldagaia> in <bilduma>:",
      "    <blokea>",
      "```",
      "",
      "`for` begiztak bildumako elementu bat hartzen du, aldagaiari esleitzen dio, kode blokea prozesatzen du, eta hurrengo elementura pasatzen da. Bildumako elementu guztiak prozesatu direnean, programaren exekuzioak begiztaren osteko lerrotik jarraitzen du.",
      "",
      "![Zerrenda bat iteratzen](images/4_4_1.png)",
      "",
      "Hurrengo programak zerrenda bateko elementu guztiak inprimatzen ditu `for` begizta bat erabiliz:",
      "",
      "```python",
      "nire_zerrenda = [3, 2, 4, 5, 2]",
      "",
      "for elementua in nire_zerrenda:",
      "    print(elementua)",
      "```",
      "",
      "```text",
      "3",
      "2",
      "4",
      "5",
      "2",
      "```",
      "",
      "Atal honen hasierako adibidearekin alderatuta, egitura askoz errazagoa da ulertzeko. `for` begizta batek elementu bilduma baten zeharkaldi zuzena oso erraz egiten du.",
      "",
      "Printzipio bera aplikatzen zaie kate bateko karaktereei:",
      "",
      "```python",
      "izena = input(\"Mesedez idatzi zure izena: \")",
      "",
      "for karakterea in izena:",
      "    print(karakterea)",
      "```",
      "",
      "```text",
      "Mesedez idatzi zure izena: Grace",
      "G",
      "r",
      "a",
      "c",
      "e",
      "```"
    ].join("\n")
  }
};

const exerciseStarStudded = {
  type: "exercise",
  exerciseId: "part04-20_star_studded",
  title: {
    ENG: "Star-studded",
    CAS: "Estrellado",
    EUS: "Izarrez betea"
  },
  description: {
    ENG: "Please write a program which asks the user to type in a string. The program then prints each input character on a separate line. After each character there should be a star (*) printed on its own line.",
    CAS: "Por favor escribe un programa que pida al usuario que escriba una cadena. El programa luego imprime cada carácter de entrada en una línea separada. Después de cada carácter debe haber una estrella (*) impresa en su propia línea.",
    EUS: "Mesedez idatzi programa bat erabiltzaileari kate bat idazteko eskatzen diona. Programak sarrerako karaktere bakoitza lerro bereizi batean inprimatzen du. Karaktere bakoitzaren ondoren izar bat (*) inprimatu behar da bere lerroan."
  },
  initialCode: {
    ENG: "# Write your solution here",
    CAS: "# Escribe tu solución aquí",
    EUS: "# Idatzi zure soluzioa hemen"
  },
  testCode: [
    "",
    "import unittest",
    "from unittest.mock import patch",
    "",
    "class TestStarStudded(unittest.TestCase):",
    "    def test_run(self):",
    "        with patch('builtins.input', return_value='Python'), patch('builtins.print') as mock_print:",
    "            run_student_code()",
    "            # Check output calls",
    ""
  ].join("\n")
};

const rangeContent = {
  type: "markdown",
  content: {
    ENG: [
      "## The function `range`",
      "",
      "Often you know how many times you want to repeat a certain bit of code. You might, for example, wish to go through all the numbers between 1 and 100. The `range` function plugged into a `for` loop will do this for you.",
      "",
      "There are a few different ways to call the range function. The simplest way is to give the function just one argument, which signifies the end-point of the range. The end-point itself is excluded, just like with string slices. In other words, the function call `range(n)` provides a loop with a range from 0 to `n-1`:",
      "",
      "```python",
      "for i in range(5):",
      "    print(i)",
      "```",
      "",
      "```text",
      "0",
      "1",
      "2",
      "3",
      "4",
      "```",
      "",
      "With two arguments, the function will return a range between the two numbers. The function `range(a,b)` provides a range starting from `a` and ending at `b-1`:",
      "",
      "```python",
      "for i in range(3, 7):",
      "    print(i)",
      "```",
      "",
      "```text",
      "3",
      "4",
      "5",
      "6",
      "```",
      "",
      "Finally, with a third argument you can also specify the size of the *step* the range takes between each value. The function call `range(a, b, c)` provides a range starting from `a`, ending at `b-1`, and changing by `c` with every step:",
      "",
      "```python",
      "for i in range(1, 9, 2):",
      "    print(i)",
      "```",
      "",
      "```text",
      "1",
      "3",
      "5",
      "7",
      "```",
      "",
      "A step can also be negative. Then the range will be in reversed orded. Notice the first two arguments are also flipped here:",
      "",
      "```python",
      "for i in range(6, 2, -1):",
      "    print(i)",
      "```",
      "",
      "```text",
      "6",
      "5",
      "4",
      "3",
      "```"
    ].join("\n"),
    CAS: [
      "## La función `range`",
      "",
      "A menudo sabes cuántas veces quieres repetir un cierto fragmento de código. Podrías, por ejemplo, desear recorrer todos los números entre 1 y 100. La función `range` conectada a un bucle `for` hará esto por ti.",
      "",
      "Hay algunas formas diferentes de llamar a la función range. La forma más simple es dar a la función solo un argumento, que significa el punto final del rango. El punto final en sí mismo está excluido, al igual que con las rebanadas de cadena. En otras palabras, la llamada a la función `range(n)` proporciona un bucle con un rango de 0 a `n-1`:",
      "",
      "```python",
      "for i in range(5):",
      "    print(i)",
      "```",
      "",
      "```text",
      "0",
      "1",
      "2",
      "3",
      "4",
      "```",
      "",
      "Con dos argumentos, la función devolverá un rango entre los dos números. La función `range(a,b)` proporciona un rango que comienza en `a` y termina en `b-1`:",
      "",
      "```python",
      "for i in range(3, 7):",
      "    print(i)",
      "```",
      "",
      "```text",
      "3",
      "4",
      "5",
      "6",
      "```",
      "",
      "Finalmente, con un tercer argumento también puedes especificar el tamaño del *paso* que el rango toma entre cada valor. La llamada a la función `range(a, b, c)` proporciona un rango que comienza en `a`, termina en `b-1`, y cambia en `c` con cada paso:",
      "",
      "```python",
      "for i in range(1, 9, 2):",
      "    print(i)",
      "```",
      "",
      "```text",
      "1",
      "3",
      "5",
      "7",
      "```",
      "",
      "Un paso también puede ser negativo. Entonces el rango estará en orden inverso. Observa que los dos primeros argumentos también están invertidos aquí:",
      "",
      "```python",
      "for i in range(6, 2, -1):",
      "    print(i)",
      "```",
      "",
      "```text",
      "6",
      "5",
      "4",
      "3",
      "```"
    ].join("\n"),
    EUS: [
      "## `range` funtzioa",
      "",
      "Askotan badakizu zenbat aldiz errepikatu nahi duzun kode zati jakin bat. Adibidez, 1 eta 100 arteko zenbaki guztietatik igaro nahiko zenuke. `for` begizta batean sartutako `range` funtzioak egingo du hori zuretzat.",
      "",
      "Modu desberdin batzuk daude range funtzioari deitzeko. Modurik errazena funtzioari argumentu bakarra ematea da, barrutiaren amaiera-puntua adierazten duena. Amaiera-puntua bera kanpoan geratzen da, kate zatiekin bezala. Beste era batera esanda, `range(n)` funtzio deiak 0tik `n-1`era bitarteko begizta bat ematen du:",
      "",
      "```python",
      "for i in range(5):",
      "    print(i)",
      "```",
      "",
      "```text",
      "0",
      "1",
      "2",
      "3",
      "4",
      "```",
      "",
      "Bi argumenturekin, funtzioak bi zenbakien arteko barrutia itzuliko du. `range(a,b)` funtzioak `a`-tik hasi eta `b-1`-ean amaitzen den barrutia ematen du:",
      "",
      "```python",
      "for i in range(3, 7):",
      "    print(i)",
      "```",
      "",
      "```text",
      "3",
      "4",
      "5",
      "6",
      "```",
      "",
      "Azkenik, hirugarren argumentu batekin barrutiak balio bakoitzaren artean ematen duen *pausoaren* tamaina ere zehaztu dezakezu. `range(a, b, c)` funtzio deiak `a`-tik hasi, `b-1`-ean amaitu, eta urrats bakoitzean `c`-rekin aldatzen den barrutia ematen du:",
      "",
      "```python",
      "for i in range(1, 9, 2):",
      "    print(i)",
      "```",
      "",
      "```text",
      "1",
      "3",
      "5",
      "7",
      "```",
      "",
      "Pauso bat negatiboa ere izan daiteke. Orduan barrutia alderantzizko ordenan egongo da. Ohartu lehen bi argumentuak ere alderantzikatuta daudela hemen:",
      "",
      "```python",
      "for i in range(6, 2, -1):",
      "    print(i)",
      "```",
      "",
      "```text",
      "6",
      "5",
      "4",
      "3",
      "```"
    ].join("\n")
  }
};

const exerciseNegativeToPositive = {
  type: "exercise",
  exerciseId: "part04-21_negative_to_positive",
  title: {
    ENG: "From negative to positive",
    CAS: "De negativo a positivo",
    EUS: "Negatibotik positibora"
  },
  description: {
    ENG: "Please write a program which asks the user for a positive integer N. The program then prints out all numbers between -N and N inclusive, but leaves out the number 0. Each number should be printed on a separate line.",
    CAS: "Por favor escribe un programa que pida al usuario un entero positivo N. El programa luego imprime todos los números entre -N y N inclusive, pero omite el número 0. Cada número debe imprimirse en una línea separada.",
    EUS: "Mesedez idatzi programa bat erabiltzaileari N osoko positibo bat eskatzen diona. Programak gero -N eta N arteko zenbaki guztiak inprimatzen ditu barne, baina 0 zenbakia kanpoan uzten du. Zenbaki bakoitza lerro bereizi batean inprimatu behar da."
  },
  initialCode: {
    ENG: "# Write your solution here",
    CAS: "# Escribe tu solución aquí",
    EUS: "# Idatzi zure soluzioa hemen"
  },
  testCode: [
    "",
    "import unittest",
    "class TestNegativeToPositive(unittest.TestCase):",
    "    def test_run(self):",
    "        # Check outputs for input 4: -4, -3, -2, -1, 1, 2, 3, 4",
    "        pass",
    ""
  ].join("\n")
};

const rangeToListContent = {
  type: "markdown",
  content: {
    ENG: [
      "## From a range to a list",
      "",
      "The function `range` returns a range object, which in many ways behaves like a list, but isn't actually one. If you try printing out the value the function returns, you will only see a description of a range object:",
      "",
      "```python",
      "numbers = range(2, 7)",
      "print(numbers)",
      "```",
      "",
      "```text",
      "range(2, 7)",
      "```",
      "",
      "The function `list` will convert a range into a list. The list will contain all the values that are in the range. The Advanced Course in Programming course, which follows this one, will shed more light on this subject.",
      "",
      "```python",
      "numbers = list(range(2, 7))",
      "print(numbers)",
      "```",
      "",
      "```text",
      "[2, 3, 4, 5, 6]",
      "```"
    ].join("\n"),
    CAS: [
      "## De un rango a una lista",
      "",
      "La función `range` devuelve un objeto rango, que de muchas maneras se comporta como una lista, pero no lo es realmente. Si intentas imprimir el valor que devuelve la función, solo verás una descripción de un objeto rango:",
      "",
      "```python",
      "numeros = range(2, 7)",
      "print(numeros)",
      "```",
      "",
      "```text",
      "range(2, 7)",
      "```",
      "",
      "La función `list` convertirá un rango en una lista. La lista contendrá todos los valores que están en el rango. El Curso Avanzado de Programación, que sigue a este, arrojará más luz sobre este tema.",
      "",
      "```python",
      "numeros = list(range(2, 7))",
      "print(numeros)",
      "```",
      "",
      "```text",
      "[2, 3, 4, 5, 6]",
      "```"
    ].join("\n"),
    EUS: [
      "## Barrutitik zerrendara",
      "",
      "`range` funtzioak range objektu bat itzultzen du, eta honek modu askotan zerrenda baten antzera jokatzen du, baina berez ez da bat. Funtzioak itzultzen duen balioa inprimatzen saiatzen bazara, range objektu baten deskribapena bakarrik ikusiko duzu:",
      "",
      "```python",
      "zenbakiak = range(2, 7)",
      "print(zenbakiak)",
      "```",
      "",
      "```text",
      "range(2, 7)",
      "```",
      "",
      "`list` funtzioak barruti bat zerrenda bihurtuko du. Zerrendak barrutian dauden balio guztiak edukiko ditu. Programazio Ikastaro Aurreratuak, honen ondoren datorrenak, argi gehiago emango du gai honi buruz.",
      "",
      "```python",
      "zenbakiak = list(range(2, 7))",
      "print(zenbakiak)",
      "```",
      "",
      "```text",
      "[2, 3, 4, 5, 6]",
      "```"
    ].join("\n")
  }
};

const exerciseListOfStars = {
  type: "exercise",
  exerciseId: "part04-22_list_of_stars",
  title: {
    ENG: "List of stars",
    CAS: "Lista de estrellas",
    EUS: "Izar zerrenda"
  },
  description: {
    ENG: "Please write a function named `list_of_stars`, which takes a list of integers as its argument. The function should print out lines of star characters. The numbers in the list specify how many stars each line should contain.",
    CAS: "Por favor escribe una función llamada `list_of_stars`, que tome una lista de enteros como argumento. La función debe imprimir líneas de caracteres de estrella. Los números en la lista especifican cuántas estrellas debe contener cada línea.",
    EUS: "Mesedez idatzi `list_of_stars` izeneko funtzio bat, osoko zenbakien zerrenda bat argumentu gisa hartzen duena. Funtzioak izar karaktereen lerroak inprimatu behar ditu. Zerrendako zenbakiek zehazten dute lerro bakoitzak zenbat izar eduki behar dituen."
  },
  initialCode: {
    ENG: [
      "def list_of_stars(list: list):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "def list_of_stars(lista: list):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "def list_of_stars(zerrenda: list):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: [
    "",
    "import unittest",
    "class TestListOfStars(unittest.TestCase):",
    "    def test_run(self):",
    "        # Check output for [3, 7, 1, 1, 2]",
    "        pass",
    ""
  ].join("\n")
};

const exerciseAnagrams = {
  type: "exercise",
  exerciseId: "part04-23_anagrams",
  title: {
    ENG: "Anagrams",
    CAS: "Anagramas",
    EUS: "Anagramak"
  },
  description: {
    ENG: "Please write a function named `anagrams`, which takes two strings as arguments. The function returns `True` if the strings are anagrams of each other. Two words are anagrams if they contain exactly the same characters.",
    CAS: "Por favor escribe una función llamada `anagrams`, que tome dos cadenas como argumentos. La función devuelve `True` si las cadenas son anagramas una de la otra. Dos palabras son anagramas si contienen exactamente los mismos caracteres.",
    EUS: "Mesedez idatzi `anagrams` izeneko funtzio bat, bi kate argumentu gisa hartzen dituena. Funtzioak `True` itzultzen du kateak elkarren anagramak badira. Bi hitz anagramak dira karaktere berberak badituzte."
  },
  initialCode: {
    ENG: [
      "def anagrams(string1: str, string2: str):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "def anagrams(cadena1: str, cadena2: str):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "def anagrams(katea1: str, katea2: str):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exercisePalindromes = {
  type: "exercise",
  exerciseId: "part04-24_palindromes",
  title: {
    ENG: "Palindromes",
    CAS: "Palíndromos",
    EUS: "Palindromoak"
  },
  description: {
    ENG: "Please write a function named `palindromes`, which takes a string argument and returns `True` if the string is a palindrome. Palindromes are words which are spelled exactly the same backwards and forwards. Also write a main program which asks the user to type in words until they type in a palindrome.",
    CAS: "Por favor escribe una función llamada `palindromes`, que tome un argumento de cadena y devuelva `True` si la cadena es un palíndromo. Los palíndromos son palabras que se escriben exactamente igual al revés y al derecho. También escribe un programa principal que pida al usuario escribir palabras hasta que escriban un palíndromo.",
    EUS: "Mesedez idatzi `palindromes` izeneko funtzio bat, kate argumentu bat hartzen duena eta `True` itzultzen duena katea palindromoa bada. Palindromoak atzekoz aurrera eta aurrekoz atzera berdin idazten diren hitzak dira. Idatzi programa nagusi bat ere, erabiltzaileari hitzak idazteko eskatzen diona palindromo bat idatzi arte."
  },
  initialCode: {
    ENG: [
      "def palindromes(string: str):",
      "    # Write your solution here",
      "    pass",
      "",
      "# Note: do not use the if __name__ == \"__main__\": block here",
      "while True:",
      "    word = input(\"Please type in a palindrome: \")",
      "    if palindromes(word):",
      "        print(f\"{word} is a palindrome!\")",
      "        break",
      "    print(\"that wasn\'t a palindrome\")"
    ].join("\n"),
    CAS: [
      "def palindromes(cadena: str):",
      "    # Escribe tu solución aquí",
      "    pass",
      "",
      "# Nota: no uses el bloque if __name__ == \"__main__\": aquí",
      "while True:",
      "    palabra = input(\"Por favor escribe un palíndromo: \")",
      "    if palindromes(palabra):",
      "        print(f\"{palabra} es un palíndromo!\")",
      "        break",
      "    print(\"eso no fue un palíndromo\")"
    ].join("\n"),
    EUS: [
      "def palindromes(katea: str):",
      "    # Idatzi zure soluzioa hemen",
      "    pass",
      "",
      "# Oharra: ez erabili if __name__ == \"__main__\": blokea hemen",
      "while True:",
      "    hitza = input(\"Mesedez idatzi palindromo bat: \")",
      "    if palindromes(hitza):",
      "        print(f\"{hitza} palindromoa da!\")",
      "        break",
      "    print(\"hori ez zen palindromoa\")"
    ].join("\n")
  },
  testCode: ""
};

const exerciseSumOfPositives = {
  type: "exercise",
  exerciseId: "part04-25_sum_of_positives",
  title: {
    ENG: "The sum of positive numbers",
    CAS: "La suma de números positivos",
    EUS: "Zenbaki positiboen batura"
  },
  description: {
    ENG: "Please write a function named `sum_of_positives`, which takes a list of integers as its argument. The function returns the sum of the positive values in the list.",
    CAS: "Por favor escribe una función llamada `sum_of_positives`, que tome una lista de enteros como argumento. La función devuelve la suma de los valores positivos en la lista.",
    EUS: "Mesedez idatzi `sum_of_positives` izeneko funtzio bat, osoko zenbakien zerrenda bat argumentu gisa hartzen duena. Funtzioak zerrendako balio positiboen batura itzultzen du."
  },
  initialCode: {
    ENG: [
      "def sum_of_positives(my_list: list):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "def sum_of_positives(mi_lista: list):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "def sum_of_positives(nire_zerrenda: list):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exerciseEvenNumbers = {
  type: "exercise",
  exerciseId: "part04-26_even_numbers",
  title: {
    ENG: "Even numbers",
    CAS: "Números pares",
    EUS: "Zenbaki bikoitiak"
  },
  description: {
    ENG: "Please write a function named `even_numbers`, which takes a list of integers as an argument. The function returns a new list containing the even numbers from the original list.",
    CAS: "Por favor escribe una función llamada `even_numbers`, que tome una lista de enteros como argumento. La función devuelve una nueva lista que contiene los números pares de la lista original.",
    EUS: "Mesedez idatzi `even_numbers` izeneko funtzio bat, osoko zenbakien zerrenda bat argumentu gisa hartzen duena. Funtzioak zerrenda berri bat itzultzen du, jatorrizko zerrendako zenbaki bikoitiak dituena."
  },
  initialCode: {
    ENG: [
      "def even_numbers(my_list: list):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "def even_numbers(mi_lista: list):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "def even_numbers(nire_zerrenda: list):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exerciseSumOfLists = {
  type: "exercise",
  exerciseId: "part04-27_sum_of_lists",
  title: {
    ENG: "The sum of lists",
    CAS: "La suma de listas",
    EUS: "Zerrenden batura"
  },
  description: {
    ENG: "Please write a function named `list_sum` which takes two lists of integers as arguments. The function returns a new list which contains the sums of the items at each index in the two original lists. You may assume both lists have the same number of items.",
    CAS: "Por favor escribe una función llamada `list_sum` que tome dos listas de enteros como argumentos. La función devuelve una nueva lista que contiene las sumas de los elementos en cada índice en las dos listas originales. Puedes asumir que ambas listas tienen el mismo número de elementos.",
    EUS: "Mesedez idatzi `list_sum` izeneko funtzio bat, osoko zenbakien bi zerrenda argumentu gisa hartzen dituena. Funtzioak zerrenda berri bat itzultzen du, jatorrizko bi zerrendetako indize bakoitzeko elementuen baturak dituena. Suposa dezakezu bi zerrendek elementu kopuru bera dutela."
  },
  initialCode: {
    ENG: [
      "def list_sum(list1: list, list2: list):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "def list_sum(lista1: list, lista2: list):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "def list_sum(zerrenda1: list, zerrenda2: list):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exerciseDistinctNumbers = {
  type: "exercise",
  exerciseId: "part04-28_distinct_numbers",
  title: {
    ENG: "Distinct numbers",
    CAS: "Números distintos",
    EUS: "Zenbaki desberdinak"
  },
  description: {
    ENG: "Please write a function named `distinct_numbers`, which takes a list of integers as its argument. The function returns a new list containing the numbers from the original list in order of magnitude, and so that each distinct number is present only once.",
    CAS: "Por favor escribe una función llamada `distinct_numbers`, que tome una lista de enteros como argumento. La función devuelve una nueva lista que contiene los números de la lista original en orden de magnitud, y de modo que cada número distinto esté presente solo una vez.",
    EUS: "Mesedez idatzi `distinct_numbers` izeneko funtzio bat, osoko zenbakien zerrenda bat argumentu gisa hartzen duena. Funtzioak zerrenda berri bat itzultzen du, jatorrizko zerrendako zenbakiak magnitude ordenan dituena, eta zenbaki desberdin bakoitza behin bakarrik agertzen da."
  },
  initialCode: {
    ENG: [
      "def distinct_numbers(my_list: list):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "def distinct_numbers(mi_lista: list):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "def distinct_numbers(nire_zerrenda: list):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const bestOrWorstContent = {
  type: "markdown",
  content: {
    ENG: [
      "## Finding the best or the worst item in a list",
      "",
      "A very common programming task is finding the best or worst item in a list, according to some criteria. A simple solution is using a helper variable to \"remember\" which of the items processed so far was the most suitable. This temporary best choice is then compared to each item in turn, and at the end of the iteration the variable contains the best of the bunch.",
      "",
      "A rough draft which doesn't quite compile yet:",
      "",
      "```python",
      "best = initial_value # The initial value depends on the situation",
      "for item in my_list:",
      "    if item is better than best:",
      "        best = item",
      "",
      "# We now have the best one figured out!",
      "```",
      "",
      "The details of the final program code depend on the type of the items in the list, and also on the criteria for choosing the best (or worst) item. Sometimes you may need more than one helper variable."
    ].join("\n"),
    CAS: [
      "## Encontrando el mejor o el peor elemento en una lista",
      "",
      "Una tarea de programación muy común es encontrar el mejor o el peor elemento en una lista, según algún criterio. Una solución simple es usar una variable auxiliar para \"recordar\" cuál de los elementos procesados hasta ahora fue el más adecuado. Esta elección temporal del mejor se compara luego con cada elemento a su vez, y al final de la iteración la variable contiene el mejor del grupo.",
      "",
      "Un borrador que no compila del todo todavía:",
      "",
      "```python",
      "mejor = valor_inicial # El valor inicial depende de la situación",
      "for elemento in mi_lista:",
      "    if elemento es mejor que mejor:",
      "        mejor = elemento",
      "",
      "# ¡Ahora hemos descubierto el mejor!",
      "```",
      "",
      "Los detalles del código del programa final dependen del tipo de los elementos en la lista, y también de los criterios para elegir el mejor (o peor) elemento. A veces puedes necesitar más de una variable auxiliar."
    ].join("\n"),
    EUS: [
      "## Zerrenda bateko elementurik onena edo txarrena aurkitzen",
      "",
      "Programazio-zeregin oso ohikoa da zerrenda bateko elementurik onena edo txarrena aurkitzea, irizpide batzuen arabera. Irtenbide sinple bat aldagai laguntzaile bat erabiltzea da, orain arte prozesatutako elementuetatik zein izan den egokiena \"gogoratzeko\". Aldi baterako aukera onena hori elementu bakoitzarekin konparatzen da txandaka, eta iterazioaren amaieran aldagaiak taldeko onena dauka.",
      "",
      "Oraindik guztiz konpilatzen ez den zirriborro bat:",
      "",
      "```python",
      "onena = hasierako_balioa # Hasierako balioa egoeraren araberakoa da",
      "for elementua in nire_zerrenda:",
      "    if elementua onena baino hobea da:",
      "        onena = elementua",
      "",
      "# Orain onena zein den asmatu dugu!",
      "```",
      "",
      "Azken programaren kodearen xehetasunak zerrendako elementuen motaren araberakoak dira, eta baita elementurik onena (edo txarrena) aukeratzeko irizpideen araberakoak ere. Batzuetan aldagai laguntzaile bat baino gehiago behar izan dezakezu."
    ].join("\n")
  }
};

const exerciseLengthOfLongest = {
  type: "exercise",
  exerciseId: "part04-29_length_of_longest",
  title: {
    ENG: "The length of the longest in the list",
    CAS: "La longitud del más largo en la lista",
    EUS: "Zerrendako luzeenaren luzera"
  },
  description: {
    ENG: "Please write a function named `length_of_longest`, which takes a list of strings as its argument. The function returns the length of the longest string.",
    CAS: "Por favor escribe una función llamada `length_of_longest`, que tome una lista de cadenas como argumento. La función devuelve la longitud de la cadena más larga.",
    EUS: "Mesedez idatzi `length_of_longest` izeneko funtzio bat, kate zerrenda bat argumentu gisa hartzen duena. Funtzioak kate luzeenaren luzera itzultzen du."
  },
  initialCode: {
    ENG: [
      "def length_of_longest(my_list: list):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "def length_of_longest(mi_lista: list):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "def length_of_longest(nire_zerrenda: list):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exerciseShortestInList = {
  type: "exercise",
  exerciseId: "part04-30_shortest_in_list",
  title: {
    ENG: "The shortest in the list",
    CAS: "El más corto en la lista",
    EUS: "Zerrendako laburrena"
  },
  description: {
    ENG: "Please write a function named `shortest`, which takes a list of strings as its argument. The function returns whichever of the strings is the shortest. If more than one are equally short, the function can return any of the shortest strings. You may assume there will be no empty strings in the list.",
    CAS: "Por favor escribe una función llamada `shortest`, que tome una lista de cadenas como argumento. La función devuelve cualquiera de las cadenas que sea la más corta. Si más de una son igualmente cortas, la función puede devolver cualquiera de las cadenas más cortas. Puedes asumir que no habrá cadenas vacías en la lista.",
    EUS: "Mesedez idatzi `shortest` izeneko funtzio bat, kate zerrenda bat argumentu gisa hartzen duena. Funtzioak kate laburrena dena itzultzen du. Bat baino gehiago berdin laburrak badira, funtzioak kate laburrenetako edozein itzul dezake. Suposa dezakezu ez dela kate hutsik egongo zerrendan."
  },
  initialCode: {
    ENG: [
      "def shortest(my_list: list):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "def shortest(mi_lista: list):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "def shortest(nire_zerrenda: list):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const exerciseAllLongestInList = {
  type: "exercise",
  exerciseId: "part04-31_all_longest_in_list",
  title: {
    ENG: "All the longest in the list",
    CAS: "Todos los más largos en la lista",
    EUS: "Zerrendako luzeen guztiak"
  },
  description: {
    ENG: "Please write a function named `all_the_longest`, which takes a list of strings as its argument. The function should return a new list containing the longest string in the original list. If more than one are equally long, the function should return all of the longest strings. The order of the strings in the returned list should be the same as in the original.",
    CAS: "Por favor escribe una función llamada `all_the_longest`, que tome una lista de cadenas como argumento. La función debe devolver una nueva lista que contenga la cadena más larga de la lista original. Si más de una son igualmente largas, la función debe devolver todas las cadenas más largas. El orden de las cadenas en la lista devuelta debe ser el mismo que en el original.",
    EUS: "Mesedez idatzi `all_the_longest` izeneko funtzio bat, kate zerrenda bat argumentu gisa hartzen duena. Funtzioak zerrenda berri bat itzuli behar du, jatorrizko zerrendako kate luzeena duena. Bat baino gehiago berdin luzeak badira, funtzioak kate luzeen guztiak itzuli behar ditu. Itzulitako zerrendako kateen ordenak jatorrizkoaren berdina izan behar du."
  },
  initialCode: {
    ENG: [
      "def all_the_longest(my_list: list):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "def all_the_longest(mi_lista: list):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "def all_the_longest(nire_zerrenda: list):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const section4 = {
  id: "part4-4",
  title: {
    ENG: "Definite iteration",
    CAS: "Iteración definida",
    EUS: "Iterazio definitua"
  },
  blocks: [
    learningObjectives,
    introContent,
    exerciseStarStudded,
    rangeContent,
    exerciseNegativeToPositive,
    rangeToListContent,
    exerciseListOfStars,
    exerciseAnagrams,
    exercisePalindromes,
    exerciseSumOfPositives,
    exerciseEvenNumbers,
    exerciseSumOfLists,
    exerciseDistinctNumbers,
    bestOrWorstContent,
    exerciseLengthOfLongest,
    exerciseShortestInList,
    exerciseAllLongestInList
  ]
};

const outputPath = path.join(__dirname, '../src/data/part4/section4.json');
fs.writeFileSync(outputPath, JSON.stringify(section4, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
