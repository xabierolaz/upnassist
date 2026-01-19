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
      "- You will be familiar with the dictionary data structure",
      "- You will be able to use a dictionary with different types of keys and values",
      "- You will know how to traverse through the contents of a dictionary",
      "- You will be able to name some typical use cases for dictionaries"
    ].join("\n"),
    CAS: [
      "# Objetivos de aprendizaje",
      "",
      "Después de esta sección",
      "",
      "- Estarás familiarizado con la estructura de datos de diccionario",
      "- Podrás usar un diccionario con diferentes tipos de claves y valores",
      "- Sabrás cómo recorrer el contenido de un diccionario",
      "- Podrás nombrar algunos casos de uso típicos para diccionarios"
    ].join("\n"),
    EUS: [
      "# Ikas-helburuak",
      "",
      "Atal honen ondoren",
      "",
      "- Hiztegia datu-egitura ezagutuko duzu",
      "- Mota desberdinetako gako eta balioak dituen hiztegi bat erabiltzeko gai izango zara",
      "- Hiztegi baten edukia nola zeharkatu jakingo duzu",
      "- Hiztegietarako ohiko erabilera-kasu batzuk izendatzeko gai izango zara"
    ].join("\n")
  }
};

const introContent = {
  type: "markdown",
  content: {
    ENG: [
      "Lists can be handy in many situations, but they are limited by the fact that the items are accessed through indexes; 0, 1, 2, and so forth. If you want to find some item in a list, you will either have to know its index, or, at worst, traverse through the entire list.",
      "",
      "Another central data structure in Python is the *dictionary*. In a dictionary, the items are indexed by *keys*. Each key maps to a *value*. The values stored in the dictionary can be accessed and changed using the key.",
      "",
      "## Using a dictionary",
      "",
      "The following example shows you how the dictionary data structure works. Here is a simple dictionary from Finnish to English:",
      "",
      "```python",
      "my_dictionary = {}",
      "",
      "my_dictionary[\"apina\"] = \"monkey\"",
      "my_dictionary[\"banaani\"] = \"banana\"",
      "my_dictionary[\"cembalo\"] = \"harpsichord\"",
      "",
      "print(len(my_dictionary))",
      "print(my_dictionary)",
      "print(my_dictionary[\"apina\"])",
      "```",
      "",
      "```text",
      "3",
      "{'apina': 'monkey', 'banaani': 'banana', 'cembalo': 'harpsichord'}",
      "monkey",
      "```",
      "",
      "The notation `{}` creates an empty dictionary, to which we can now add content. Three key-value pairs are added:`\"apina\"` maps to `\"monkey\"`, `\"banaani\"` maps to `\"banana\"`, and `\"cembalo\"` maps to `\"harpsichord\"`. Finally, the number of key-value pairs in the dictionary is printed, along with the entire dictionary, and the value mapped to the key `\"apina\"`.",
      "",
      "After defining the dictionary we could also use it with user input:",
      "",
      "```python",
      "word = input(\"Please type in a word: \")",
      "if word in my_dictionary:",
      "    print(\"Translation: \", my_dictionary[word])",
      "else:",
      "    print(\"Word not found\")",
      "```",
      "",
      "Notice the use of the `in` operator above. When used on a variable of type dictionary, it checks whether the first operand is among the keys stored in the dictionary. Given different inputs, this program might print out the following:",
      "",
      "```text",
      "Please type in a word: apina",
      "Translation: monkey",
      "```",
      "",
      "```text",
      "Please type in a word: pöllö",
      "Word not found",
      "```",
      "",
      "## What can be stored in a dictionary?",
      "",
      "The data type is called dictionary, but it does not have to contain only strings. For example, in the following dictionary the keys are strings, but the values are integers:",
      "",
      "```python",
      "results = {}",
      "results[\"Mary\"] = 4",
      "results[\"Alice\"] = 5",
      "results[\"Larry\"] = 2",
      "```",
      "",
      "Here the keys are integers and the values are lists:",
      "",
      "```python",
      "lists = {}",
      "lists[5] = [1, 2, 3]",
      "lists[42] = [5, 4, 5, 4, 5]",
      "lists[100] = [5, 2, 3]",
      "```"
    ].join("\n"),
    CAS: [
      "Las listas pueden ser útiles en muchas situaciones, pero están limitadas por el hecho de que se accede a los elementos a través de índices; 0, 1, 2, etc. Si deseas encontrar algún elemento en una lista, tendrás que conocer su índice o, en el peor de los casos, recorrer toda la lista.",
      "",
      "Otra estructura de datos central en Python es el *diccionario*. En un diccionario, los elementos son indexados por *claves*. Cada clave se asigna a un *valor*. Los valores almacenados en el diccionario se pueden acceder y cambiar utilizando la clave.",
      "",
      "## Usando un diccionario",
      "",
      "El siguiente ejemplo muestra cómo funciona la estructura de datos de diccionario. Aquí hay un diccionario simple de finés a inglés:",
      "",
      "```python",
      "mi_diccionario = {}",
      "",
      "mi_diccionario[\"apina\"] = \"monkey\"",
      "mi_diccionario[\"banaani\"] = \"banana\"",
      "mi_diccionario[\"cembalo\"] = \"harpsichord\"",
      "",
      "print(len(mi_diccionario))",
      "print(mi_diccionario)",
      "print(mi_diccionario[\"apina\"])",
      "```",
      "",
      "```text",
      "3",
      "{'apina': 'monkey', 'banaani': 'banana', 'cembalo': 'harpsichord'}",
      "monkey",
      "```",
      "",
      "La notación `{}` crea un diccionario vacío, al que ahora podemos agregar contenido. Se agregan tres pares clave-valor: `\"apina\"` se asigna a `\"monkey\"`, `\"banaani\"` se asigna a `\"banana\"` y `\"cembalo\"` se asigna a `\"harpsichord\"`. Finalmente, se imprime el número de pares clave-valor en el diccionario, junto con el diccionario completo y el valor asignado a la clave `\"apina\"`.",
      "",
      "Después de definir el diccionario, también podríamos usarlo con la entrada del usuario:",
      "",
      "```python",
      "palabra = input(\"Por favor escribe una palabra: \")",
      "if palabra in mi_diccionario:",
      "    print(\"Traducción: \", mi_diccionario[palabra])",
      "else:",
      "    print(\"Palabra no encontrada\")",
      "```",
      "",
      "Observa el uso del operador `in` arriba. Cuando se usa en una variable de tipo diccionario, comprueba si el primer operando está entre las claves almacenadas en el diccionario.",
      "",
      "## ¿Qué se puede almacenar en un diccionario?",
      "",
      "El tipo de datos se llama diccionario, pero no tiene que contener solo cadenas. Por ejemplo, en el siguiente diccionario las claves son cadenas, pero los valores son enteros:",
      "",
      "```python",
      "resultados = {}",
      "resultados[\"Mary\"] = 4",
      "resultados[\"Alice\"] = 5",
      "resultados[\"Larry\"] = 2",
      "```",
      "",
      "Aquí las claves son enteros y los valores son listas:",
      "",
      "```python",
      "listas = {}",
      "listas[5] = [1, 2, 3]",
      "listas[42] = [5, 4, 5, 4, 5]",
      "listas[100] = [5, 2, 3]",
      "```"
    ].join("\n"),
    EUS: [
      "Zerrendak erabilgarriak izan daitezke egoera askotan, baina mugatuta daude elementuak indizeen bidez atzitzen direlako; 0, 1, 2, eta abar. Zerrenda batean elementuren bat aurkitu nahi baduzu, bere indizea ezagutu beharko duzu, edo, txarrenean, zerrenda osoa zeharkatu.",
      "",
      "Python-en datu-egitura zentral bat *hiztegia* da. Hiztegi batean, elementuak *gakoen* bidez indexatzen dira. Gako bakoitzak *balio* bati egiten dio erreferentzia. Hiztegian gordetako balioak gakoa erabiliz atzitu eta aldatu daitezke.",
      "",
      "## Hiztegi bat erabiltzen",
      "",
      "Hurrengo adibideak hiztegia datu-egiturak nola funtzionatzen duen erakusten dizu. Hona hemen finlandieratik ingelesera hiztegi sinple bat:",
      "",
      "```python",
      "nire_hiztegia = {}",
      "",
      "nire_hiztegia[\"apina\"] = \"monkey\"",
      "nire_hiztegia[\"banaani\"] = \"banana\"",
      "nire_hiztegia[\"cembalo\"] = \"harpsichord\"",
      "",
      "print(len(nire_hiztegia))",
      "print(nire_hiztegia)",
      "print(nire_hiztegia[\"apina\"])",
      "```",
      "",
      "```text",
      "3",
      "{'apina': 'monkey', 'banaani': 'banana', 'cembalo': 'harpsichord'}",
      "monkey",
      "```",
      "",
      "`{}` notazioak hiztegi huts bat sortzen du, eta orain edukia gehi diezaiokegu. Hiru gako-balio pare gehitzen dira: `\"apina\"`-k `\"monkey\"`-ri egiten dio erreferentzia, `\"banaani\"`-k `\"banana\"`-ri, eta `\"cembalo\"`-k `\"harpsichord\"`-ri. Azkenik, hiztegiko gako-balio pareen kopurua inprimatzen da, hiztegi osoarekin eta `\"apina\"` gakoari dagokion balioarekin batera.",
      "",
      "Hiztegia definitu ondoren erabiltzailearen sarrerarekin ere erabil genezake:",
      "",
      "```python",
      "hitza = input(\"Mesedez idatzi hitz bat: \")",
      "if hitza in nire_hiztegia:",
      "    print(\"Itzulpena: \", nire_hiztegia[hitza])",
      "else:",
      "    print(\"Hitza ez da aurkitu\")",
      "```",
      "",
      "Ohartu `in` eragilearen erabileraz goian. Hiztegi motako aldagai batean erabiltzen denean, lehenengo eragigaia hiztegian gordetako gakoen artean dagoen egiaztatzen du.",
      "",
      "## Zer gorde daiteke hiztegi batean?",
      "",
      "Datu motari hiztegia deitzen zaio, baina ez du zertan kateak bakarrik eduki. Adibidez, hurrengo hiztegian gakoak kateak dira, baina balioak zenbaki osoak:",
      "",
      "```python",
      "emaitzak = {}",
      "emaitzak[\"Mary\"] = 4",
      "emaitzak[\"Alice\"] = 5",
      "emaitzak[\"Larry\"] = 2",
      "```",
      "",
      "Hemen gakoak zenbaki osoak dira eta balioak zerrendak:",
      "",
      "```python",
      "zerrendak = {}",
      "zerrendak[5] = [1, 2, 3]",
      "zerrendak[42] = [5, 4, 5, 4, 5]",
      "zerrendak[100] = [5, 2, 3]",
      "```"
    ].join("\n")
  }
};

const keysAndValuesContent = {
  type: "markdown",
  content: {
    ENG: [
      "## How keys and values work",
      "",
      "Each key can appear only once in the dictionary. If you add an entry using a key that already exists in the dictionary, the original value mapped to that key is replaced with the new value:",
      "",
      "```python",
      "my_dictionary[\"suuri\"] = \"big\"",
      "my_dictionary[\"suuri\"] = \"large\"",
      "print(my_dictionary[\"suuri\"])",
      "```",
      "",
      "```text",
      "large",
      "```",
      "",
      "All keys in a dictionary must be *immutable*. So, a list cannot be used as a key, because it can be changed. For example, executing the following code causes an error:",
      "",
      "```python",
      "my_dictionary[[1, 2, 3]] = 5",
      "```",
      "",
      "```text",
      "TypeError: unhashable type: 'list'",
      "```",
      "",
      "Unlike keys, the *values* stored in a dictionary can change, so any type of data is acceptable as a value. A value can also be mapped to more than one key in the same dictionary."
    ].join("\n"),
    CAS: [
      "## Cómo funcionan las claves y los valores",
      "",
      "Cada clave puede aparecer solo una vez en el diccionario. Si agregas una entrada usando una clave que ya existe en el diccionario, el valor original asignado a esa clave se reemplaza con el nuevo valor:",
      "",
      "```python",
      "mi_diccionario[\"suuri\"] = \"big\"",
      "mi_diccionario[\"suuri\"] = \"large\"",
      "print(mi_diccionario[\"suuri\"])",
      "```",
      "",
      "```text",
      "large",
      "```",
      "",
      "Todas las claves en un diccionario deben ser *inmutables*. Por lo tanto, una lista no se puede usar como clave, porque se puede cambiar. Por ejemplo, ejecutar el siguiente código causa un error:",
      "",
      "```python",
      "mi_diccionario[[1, 2, 3]] = 5",
      "```",
      "",
      "```text",
      "TypeError: unhashable type: 'list'",
      "```",
      "",
      "A diferencia de las claves, los *valores* almacenados en un diccionario pueden cambiar, por lo que cualquier tipo de datos es aceptable como valor. Un valor también se puede asignar a más de una clave en el mismo diccionario."
    ].join("\n"),
    EUS: [
      "## Nola funtzionatzen dute gakoek eta balioek",
      "",
      "Gako bakoitza behin bakarrik ager daiteke hiztegian. Hiztegian dagoeneko existitzen den gako bat erabiliz sarrera bat gehitzen baduzu, gako horri esleitutako jatorrizko balioa balio berriarekin ordezkatzen da:",
      "",
      "```python",
      "nire_hiztegia[\"suuri\"] = \"big\"",
      "nire_hiztegia[\"suuri\"] = \"large\"",
      "print(nire_hiztegia[\"suuri\"])",
      "```",
      "",
      "```text",
      "large",
      "```",
      "",
      "Hiztegi bateko gako guztiek *aldaezinak* izan behar dute. Beraz, zerrenda bat ezin da erabili gako gisa, alda daitekeelako. Adibidez, hurrengo kodea exekutatzeak errore bat eragiten du:",
      "",
      "```python",
      "nire_hiztegia[[1, 2, 3]] = 5",
      "```",
      "",
      "```text",
      "TypeError: unhashable type: 'list'",
      "```",
      "",
      "Gakoak ez bezala, hiztegi batean gordetako *balioak* alda daitezke, beraz, edozein datu mota onargarria da balio gisa. Balio bat hiztegi bereko gako bati baino gehiagori ere eslei dakioke."
    ].join("\n")
  }
};

const exerciseTimesTen = {
  type: "exercise",
  exerciseId: "part05-14_times_ten",
  title: {
    ENG: "Times ten",
    CAS: "Por diez",
    EUS: "Bider hamar"
  },
  description: {
    ENG: "Please write a function named `times_ten(start_index: int, end_index: int)`, which creates and returns a new dictionary. The keys of the dictionary should be the numbers between `start_index` and `end_index` inclusive. The value mapped to each key should be the key times ten.",
    CAS: "Por favor escribe una función llamada `times_ten(start_index: int, end_index: int)`, que cree y devuelva un nuevo diccionario. Las claves del diccionario deben ser los números entre `start_index` y `end_index` inclusive. El valor asignado a cada clave debe ser la clave multiplicada por diez.",
    EUS: "Mesedez idatzi `times_ten(start_index: int, end_index: int)` izeneko funtzio bat, hiztegi berri bat sortu eta itzultzen duena. Hiztegiko gakoak `start_index` eta `end_index` arteko zenbakiak izan behar dira, biak barne. Gako bakoitzari esleitutako balioa gakoa bider hamar izan behar da."
  },
  initialCode: {
    ENG: "def times_ten(start_index: int, end_index: int):\n    # Write your solution here\n    pass",
    CAS: "def times_ten(start_index: int, end_index: int):\n    # Escribe tu solución aquí\n    pass",
    EUS: "def times_ten(start_index: int, end_index: int):\n    # Idatzi zure soluzioa hemen\n    pass"
  },
  testCode: ""
};

const exerciseFactorials = {
  type: "exercise",
  exerciseId: "part05-15_factorials",
  title: {
    ENG: "Factorials",
    CAS: "Factoriales",
    EUS: "Faktorialak"
  },
  description: {
    ENG: "Please write a function named `factorials(n: int)`, which returns the factorials of the numbers 1 to `n` in a dictionary. The number is the key, and the factorial of that number is the value mapped to it.",
    CAS: "Por favor escribe una función llamada `factorials(n: int)`, que devuelva los factoriales de los números 1 a `n` en un diccionario. El número es la clave, y el factorial de ese número es el valor asignado a él.",
    EUS: "Mesedez idatzi `factorials(n: int)` izeneko funtzio bat, 1etik `n`-rako zenbakien faktorialak itzultzen dituena hiztegi batean. Zenbakia gakoa da, eta zenbaki horren faktoriala hari esleitutako balioa."
  },
  initialCode: {
    ENG: "def factorials(n: int):\n    # Write your solution here\n    pass",
    CAS: "def factorials(n: int):\n    # Escribe tu solución aquí\n    pass",
    EUS: "def factorials(n: int):\n    # Idatzi zure soluzioa hemen\n    pass"
  },
  testCode: ""
};

const traversingContent = {
  type: "markdown",
  content: {
    ENG: [
      "## Traversing a dictionary",
      "",
      "The familiar `for item in collection` loop can be used to traverse a dictionary, too. When used on the dictionary directly, the loop goes through the keys stored in the dictionary, one by one. In the following example, all keys and values stored in the dictionary are printed out:",
      "",
      "```python",
      "my_dictionary = {}",
      "",
      "my_dictionary[\"apina\"] = \"monkey\"",
      "my_dictionary[\"banaani\"] = \"banana\"",
      "my_dictionary[\"cembalo\"] = \"harpsichord\"",
      "",
      "for key in my_dictionary:",
      "    print(\"key:\", key)",
      "    print(\"value:\", my_dictionary[key])",
      "```",
      "",
      "```text",
      "key: apina",
      "value: monkey",
      "key: banaani",
      "value: banana",
      "key: cembalo",
      "value: harpsichord",
      "```",
      "",
      "Sometimes you need to traverse the entire contents of a dictionary. The method `items` returns all the keys and values stored in the dictionary, one pair at a time:",
      "",
      "```python",
      "for key, value in my_dictionary.items():",
      "    print(\"key:\", key)",
      "    print(\"value:\", value)",
      "```"
    ].join("\n"),
    CAS: [
      "## Recorriendo un diccionario",
      "",
      "El familiar bucle `for elemento in coleccion` también se puede usar para recorrer un diccionario. Cuando se usa directamente en el diccionario, el bucle recorre las claves almacenadas en el diccionario, una por una. En el siguiente ejemplo, se imprimen todas las claves y valores almacenados en el diccionario:",
      "",
      "```python",
      "mi_diccionario = {}",
      "",
      "mi_diccionario[\"apina\"] = \"monkey\"",
      "mi_diccionario[\"banaani\"] = \"banana\"",
      "mi_diccionario[\"cembalo\"] = \"harpsichord\"",
      "",
      "for clave in mi_diccionario:",
      "    print(\"clave:\", clave)",
      "    print(\"valor:\", mi_diccionario[clave])",
      "```",
      "",
      "```text",
      "clave: apina",
      "valor: monkey",
      "clave: banaani",
      "valor: banana",
      "clave: cembalo",
      "valor: harpsichord",
      "```",
      "",
      "A veces necesitas recorrer todo el contenido de un diccionario. El método `items` devuelve todas las claves y valores almacenados en el diccionario, un par a la vez:",
      "",
      "```python",
      "for clave, valor in mi_diccionario.items():",
      "    print(\"clave:\", clave)",
      "    print(\"valor:\", valor)",
      "```"
    ].join("\n"),
    EUS: [
      "## Hiztegi bat zeharkatzen",
      "",
      "Ezaguna den `for elementua in bilduma` begizta hiztegi bat zeharkatzeko ere erabil daiteke. Hiztegian zuzenean erabiltzen denean, begiztak hiztegian gordetako gakoak zeharkatzen ditu, banan-banan. Hurrengo adibidean, hiztegian gordetako gako eta balio guztiak inprimatzen dira:",
      "",
      "```python",
      "nire_hiztegia = {}",
      "",
      "nire_hiztegia[\"apina\"] = \"monkey\"",
      "nire_hiztegia[\"banaani\"] = \"banana\"",
      "nire_hiztegia[\"cembalo\"] = \"harpsichord\"",
      "",
      "for gakoa in nire_hiztegia:",
      "    print(\"gakoa:\", gakoa)",
      "    print(\"balioa:\", nire_hiztegia[gakoa])",
      "```",
      "",
      "```text",
      "gakoa: apina",
      "balioa: monkey",
      "gakoa: banaani",
      "balioa: banana",
      "gakoa: cembalo",
      "balioa: harpsichord",
      "```",
      "",
      "Batzuetan hiztegi baten eduki osoa zeharkatu behar duzu. `items` metodoak hiztegian gordetako gako eta balio guztiak itzultzen ditu, pare bat aldian:",
      "",
      "```python",
      "for gakoa, balioa in nire_hiztegia.items():",
      "    print(\"gakoa:\", gakoa)",
      "    print(\"balioa:\", balioa)",
      "```"
    ].join("\n")
  }
};

const exerciseHistogram = {
  type: "exercise",
  exerciseId: "part05-16_histogram",
  title: {
    ENG: "Histogram",
    CAS: "Histograma",
    EUS: "Histograma"
  },
  description: {
    ENG: "Please write a function named `histogram`, which takes a string as its argument. The function should print out a histogram representing the number of times each letter occurs in the string. Each occurrence of a letter should be represented by a star on the specific line for that letter.",
    CAS: "Por favor escribe una función llamada `histogram`, que tome una cadena como argumento. La función debe imprimir un histograma que represente el número de veces que cada letra aparece en la cadena. Cada aparición de una letra debe representarse con una estrella en la línea específica para esa letra.",
    EUS: "Mesedez idatzi `histogram` izeneko funtzio bat, kate bat argumentu gisa hartzen duena. Funtzioak histograma bat inprimatu behar du, letra bakoitza katean zenbat aldiz agertzen den adierazten duena. Letra baten agerraldi bakoitza izar batekin irudikatu behar da letra horren lerro zehatzean."
  },
  initialCode: {
    ENG: "def histogram(my_string: str):\n    # Write your solution here\n    pass",
    CAS: "def histogram(mi_cadena: str):\n    # Escribe tu solución aquí\n    pass",
    EUS: "def histogram(nire_katea: str):\n    # Idatzi zure soluzioa hemen\n    pass"
  },
  testCode: ""
};

const exercisePhoneBookV1 = {
  type: "exercise",
  exerciseId: "part05-17_phone_book_v1",
  title: {
    ENG: "Phone book, version 1",
    CAS: "Agenda telefónica, versión 1",
    EUS: "Telefono-gida, 1. bertsioa"
  },
  description: {
    ENG: "Please write a phone book application. It should allow searching (1), adding (2), and quitting (3). Each name can be attached to a single number only.",
    CAS: "Por favor escribe una aplicación de agenda telefónica. Debe permitir buscar (1), añadir (2) y salir (3). Cada nombre puede estar asociado a un solo número solamente.",
    EUS: "Mesedez idatzi telefono-gida aplikazio bat. Bilatzea (1), gehitzea (2) eta irtetea (3) ahalbidetu behar du. Izen bakoitza zenbaki bakar bati lotuta egon daiteke."
  },
  initialCode: {
    ENG: "# Write your solution here",
    CAS: "# Escribe tu solución aquí",
    EUS: "# Idatzi zure soluzioa hemen"
  },
  testCode: ""
};

const exercisePhoneBookV2 = {
  type: "exercise",
  exerciseId: "part05-18_phone_book_v2",
  title: {
    ENG: "Phone book, version 2",
    CAS: "Agenda telefónica, versión 2",
    EUS: "Telefono-gida, 2. bertsioa"
  },
  description: {
    ENG: "Please write an improved version of the phone book application. Each entry should now accommodate multiple phone numbers. When searching, all numbers attached to a name should be printed.",
    CAS: "Por favor escribe una versión mejorada de la aplicación de agenda telefónica. Cada entrada debe admitir ahora múltiples números de teléfono. Al buscar, se deben imprimir todos los números asociados a un nombre.",
    EUS: "Mesedez idatzi telefono-gida aplikazioaren bertsio hobetua. Sarrera bakoitzak orain telefono zenbaki anitz onartu behar ditu. Bilatzean, izen bati lotutako zenbaki guztiak inprimatu behar dira."
  },
  initialCode: {
    ENG: "# Write your solution here",
    CAS: "# Escribe tu solución aquí",
    EUS: "# Idatzi zure soluzioa hemen"
  },
  testCode: ""
};

const removingKeysContent = {
  type: "markdown",
  content: {
    ENG: [
      "## Removing keys and values from a dictionary",
      "",
      "It is naturally possible to also remove key-value pairs from the dictionary. There are two ways to accomplish this. The first is the command `del`:",
      "",
      "```python",
      "staff = {\"Alan\": \"lecturer\", \"Emily\": \"professor\", \"David\": \"lecturer\"}",
      "del staff[\"David\"]",
      "print(staff)",
      "```",
      "",
      "```text",
      "{'Alan': 'lecturer', 'Emily': 'professor'}",
      "```",
      "",
      "The other way to delete entries in a dictionary is the method `pop`:",
      "",
      "```python",
      "staff = {\"Alan\": \"lecturer\", \"Emily\": \"professor\", \"David\": \"lecturer\"}",
      "deleted = staff.pop(\"David\")",
      "print(staff)",
      "print(deleted, \"deleted\")",
      "```",
      "",
      "```text",
      "{'Alan': 'lecturer', 'Emily': 'professor'}",
      "lecturer deleted",
      "```"
    ].join("\n"),
    CAS: [
      "## Eliminando claves y valores de un diccionario",
      "",
      "Naturalmente, también es posible eliminar pares clave-valor del diccionario. Hay dos formas de lograr esto. La primera es el comando `del`:",
      "",
      "```python",
      "personal = {\"Alan\": \"conferenciante\", \"Emily\": \"profesor\", \"David\": \"conferenciante\"}",
      "del personal[\"David\"]",
      "print(personal)",
      "```",
      "",
      "```text",
      "{'Alan': 'conferenciante', 'Emily': 'profesor'}",
      "```",
      "",
      "La otra forma de eliminar entradas en un diccionario es el método `pop`:",
      "",
      "```python",
      "personal = {\"Alan\": \"conferenciante\", \"Emily\": \"profesor\", \"David\": \"conferenciante\"}",
      "eliminado = personal.pop(\"David\")",
      "print(personal)",
      "print(eliminado, \"eliminado\")",
      "```",
      "",
      "```text",
      "{'Alan': 'conferenciante', 'Emily': 'profesor'}",
      "conferenciante eliminado",
      "```"
    ].join("\n"),
    EUS: [
      "## Gakoak eta balioak hiztegi batetik kentzen",
      "",
      "Noski, posible da hiztegitik gako-balio pareak ere kentzea. Hau lortzeko bi modu daude. Lehenengoa `del` komandoa da:",
      "",
      "```python",
      "langileak = {\"Alan\": \"hizlaria\", \"Emily\": \"irakaslea\", \"David\": \"hizlaria\"}",
      "del langileak[\"David\"]",
      "print(langileak)",
      "```",
      "",
      "```text",
      "{'Alan': 'hizlaria', 'Emily': 'irakaslea'}",
      "```",
      "",
      "Hiztegi bateko sarrerak ezabatzeko beste modua `pop` metodoa da:",
      "",
      "```python",
      "langileak = {\"Alan\": \"hizlaria\", \"Emily\": \"irakaslea\", \"David\": \"hizlaria\"}",
      "ezabatua = langileak.pop(\"David\")",
      "print(langileak)",
      "print(ezabatua, \"ezabatua\")",
      "```",
      "",
      "```text",
      "{'Alan': 'hizlaria', 'Emily': 'irakaslea'}",
      "hizlaria ezabatua",
      "```"
    ].join("\n")
  }
};

const exerciseInvertDictionary = {
  type: "exercise",
  exerciseId: "part05-19_invert_dictionary",
  title: {
    ENG: "Invert a dictionary",
    CAS: "Invertir un diccionario",
    EUS: "Hiztegi bat alderantzikatu"
  },
  description: {
    ENG: "Please write a function named `invert(dictionary: dict)`, which takes a dictionary as its argument. The dictionary should be inverted in place so that values become keys and keys become values.",
    CAS: "Por favor escribe una función llamada `invert(dictionary: dict)`, que tome un diccionario como argumento. El diccionario debe invertirse en su lugar para que los valores se conviertan en claves y las claves se conviertan en valores.",
    EUS: "Mesedez idatzi `invert(dictionary: dict)` izeneko funtzio bat, hiztegi bat argumentu gisa hartzen duena. Hiztegia bere horretan alderantzikatu behar da, balioak gako bihur daitezen eta gakoak balio."
  },
  initialCode: {
    ENG: "def invert(dictionary: dict):\n    # Write your solution here\n    pass",
    CAS: "def invert(diccionario: dict):\n    # Escribe tu solución aquí\n    pass",
    EUS: "def invert(hiztegia: dict):\n    # Idatzi zure soluzioa hemen\n    pass"
  },
  testCode: ""
};

const exerciseNumbersSpelledOut = {
  type: "exercise",
  exerciseId: "part05-20_numbers_spelled_out",
  title: {
    ENG: "Numbers spelled out",
    CAS: "Números escritos",
    EUS: "Zenbakiak idatzita"
  },
  description: {
    ENG: "Please write a function named `dict_of_numbers()`, which returns a new dictionary. The dictionary should have the numbers from 0 to 99 as its keys. The value attached to each key should be the number spelled out in words.",
    CAS: "Por favor escribe una función llamada `dict_of_numbers()`, que devuelva un nuevo diccionario. El diccionario debe tener los números del 0 al 99 como claves. El valor adjunto a cada clave debe ser el número escrito en palabras.",
    EUS: "Mesedez idatzi `dict_of_numbers()` izeneko funtzio bat, hiztegi berri bat itzultzen duena. Hiztegiak 0tik 99rako zenbakiak izan behar ditu gako gisa. Gako bakoitzari lotutako balioak zenbakia hitzez idatzita izan behar du."
  },
  initialCode: {
    ENG: "def dict_of_numbers():\n    # Write your solution here\n    pass",
    CAS: "def dict_of_numbers():\n    # Escribe tu solución aquí\n    pass",
    EUS: "def dict_of_numbers():\n    # Idatzi zure soluzioa hemen\n    pass"
  },
  testCode: ""
};

const structuredDataContent = {
  type: "markdown",
  content: {
    ENG: [
      "## Using dictionaries for structured data",
      "",
      "Dictionaries are very useful for structuring data. The following code will create a dictionary which contains some personal data:",
      "",
      "```python",
      "person = {\"name\": \"Pippa Python\", \"height\": 154, \"weight\": 61, \"age\": 44}",
      "```",
      "",
      "The advantage of a dictionary is that it is a collection. It collects related data under one variable, so it is easy to access the different components.",
      "",
      "Assuming we have defined multiple people using the same format, we can access their data in the following manner:",
      "",
      "```python",
      "person1 = {\"name\": \"Pippa Python\", \"height\": 154, \"weight\": 61, \"age\": 44}",
      "person2 = {\"name\": \"Peter Pythons\", \"height\": 174, \"weight\": 103, \"age\": 31}",
      "person3 = {\"name\": \"Pedro Python\", \"height\": 191, \"weight\": 71, \"age\": 14}",
      "",
      "people = [person1, person2, person3]",
      "",
      "for person in people:",
      "    print(person[\"name\"])",
      "```",
      "",
      "```text",
      "Pippa Python",
      "Peter Pythons",
      "Pedro Python",
      "```"
    ].join("\n"),
    CAS: [
      "## Usando diccionarios para datos estructurados",
      "",
      "Los diccionarios son muy útiles para estructurar datos. El siguiente código creará un diccionario que contiene algunos datos personales:",
      "",
      "```python",
      "persona = {\"nombre\": \"Pippa Python\", \"altura\": 154, \"peso\": 61, \"edad\": 44}",
      "```",
      "",
      "La ventaja de un diccionario es que es una colección. Recopila datos relacionados bajo una variable, por lo que es fácil acceder a los diferentes componentes.",
      "",
      "Asumiendo que hemos definido varias personas usando el mismo formato, podemos acceder a sus datos de la siguiente manera:",
      "",
      "```python",
      "persona1 = {\"nombre\": \"Pippa Python\", \"altura\": 154, \"peso\": 61, \"edad\": 44}",
      "persona2 = {\"nombre\": \"Peter Pythons\", \"altura\": 174, \"peso\": 103, \"edad\": 31}",
      "persona3 = {\"nombre\": \"Pedro Python\", \"altura\": 191, \"peso\": 71, \"edad\": 14}",
      "",
      "personas = [persona1, persona2, persona3]",
      "",
      "for persona in personas:",
      "    print(persona[\"nombre\"])",
      "```",
      "",
      "```text",
      "Pippa Python",
      "Peter Pythons",
      "Pedro Python",
      "```"
    ].join("\n"),
    EUS: [
      "## Hiztegiak datu egituratuetarako erabiltzen",
      "",
      "Hiztegiak oso erabilgarriak dira datuak egituratzeko. Hurrengo kodeak datu pertsonal batzuk dituen hiztegi bat sortuko du:",
      "",
      "```python",
      "pertsona = {\"izena\": \"Pippa Python\", \"altuera\": 154, \"pisua\": 61, \"adina\": 44}",
      "```",
      "",
      "Hiztegi baten abantaila bilduma bat dela da. Erlazionatutako datuak aldagai baten azpian biltzen ditu, beraz, erraza da osagai desberdinetara sartzea.",
      "",
      "Formatu bera erabiliz pertsona anitz definitu ditugula suposatuz, haien datuetara honela sar gaitezke:",
      "",
      "```python",
      "pertsona1 = {\"izena\": \"Pippa Python\", \"altuera\": 154, \"pisua\": 61, \"adina\": 44}",
      "pertsona2 = {\"izena\": \"Peter Pythons\", \"altuera\": 174, \"pisua\": 103, \"adina\": 31}",
      "pertsona3 = {\"izena\": \"Pedro Python\", \"altuera\": 191, \"pisua\": 71, \"adina\": 14}",
      "",
      "pertsonak = [pertsona1, pertsona2, pertsona3]",
      "",
      "for pertsona in pertsonak:",
      "    print(pertsona[\"izena\"])",
      "```",
      "",
      "```text",
      "Pippa Python",
      "Peter Pythons",
      "Pedro Python",
      "```"
    ].join("\n")
  }
};

const exerciseMovieDatabase = {
  type: "exercise",
  exerciseId: "part05-21_movie_database",
  title: {
    ENG: "Movie database",
    CAS: "Base de datos de películas",
    EUS: "Filmen datu-basea"
  },
  description: {
    ENG: "Please write a function named `add_movie(database: list, name: str, director: str, year: int, runtime: int)`, which adds a new movie object into a movie database. The database is a list, and each movie object in the list is a dictionary.",
    CAS: "Por favor escribe una función llamada `add_movie(database: list, name: str, director: str, year: int, runtime: int)`, que añada un nuevo objeto película a una base de datos de películas. La base de datos es una lista, y cada objeto película en la lista es un diccionario.",
    EUS: "Mesedez idatzi `add_movie(database: list, name: str, director: str, year: int, runtime: int)` izeneko funtzio bat, film objektu berri bat filmen datu-base batera gehitzen duena. Datu-basea zerrenda bat da, eta zerrendako film objektu bakoitza hiztegi bat da."
  },
  initialCode: {
    ENG: "def add_movie(database: list, name: str, director: str, year: int, runtime: int):\n    # Write your solution here\n    pass",
    CAS: "def add_movie(database: list, name: str, director: str, year: int, runtime: int):\n    # Escribe tu solución aquí\n    pass",
    EUS: "def add_movie(database: list, name: str, director: str, year: int, runtime: int):\n    # Idatzi zure soluzioa hemen\n    pass"
  },
  testCode: ""
};

const exerciseFindMovies = {
  type: "exercise",
  exerciseId: "part05-22_find_movies",
  title: {
    ENG: "Find movies",
    CAS: "Buscar películas",
    EUS: "Filmak bilatu"
  },
  description: {
    ENG: "Please write a function named `find_movies(database: list, search_term: str)`, which processes the movie database created in the previous exercise. The function should formulate a new list, which contains only the movies whose title includes the word searched for. Capitalisation is irrelevant here.",
    CAS: "Por favor escribe una función llamada `find_movies(database: list, search_term: str)`, que procese la base de datos de películas creada en el ejercicio anterior. La función debe formular una nueva lista, que contenga solo las películas cuyo título incluya la palabra buscada. Las mayúsculas son irrelevantes aquí.",
    EUS: "Mesedez idatzi `find_movies(database: list, search_term: str)` izeneko funtzio bat, aurreko ariketan sortutako filmen datu-basea prozesatzen duena. Funtzioak zerrenda berri bat osatu behar du, bilatutako hitza izenburuan duten filmak soilik dituena. Maiuskulak eta minuskulak ez dira garrantzitsuak hemen."
  },
  initialCode: {
    ENG: "def find_movies(database: list, search_term: str):\n    # Write your solution here\n    pass",
    CAS: "def find_movies(database: list, search_term: str):\n    # Escribe tu solución aquí\n    pass",
    EUS: "def find_movies(database: list, search_term: str):\n    # Idatzi zure soluzioa hemen\n    pass"
  },
  testCode: ""
};

const section3 = {
  id: "part5-3",
  title: {
    ENG: "Dictionary",
    CAS: "Diccionario",
    EUS: "Hiztegia"
  },
  blocks: [
    learningObjectives,
    introContent,
    keysAndValuesContent,
    exerciseTimesTen,
    exerciseFactorials,
    traversingContent,
    exerciseHistogram,
    exercisePhoneBookV1,
    exercisePhoneBookV2,
    removingKeysContent,
    exerciseInvertDictionary,
    exerciseNumbersSpelledOut,
    structuredDataContent,
    exerciseMovieDatabase,
    exerciseFindMovies
  ]
};

const outputPath = path.join(__dirname, '../src/data/part5/section3.json');
fs.writeFileSync(outputPath, JSON.stringify(section3, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
