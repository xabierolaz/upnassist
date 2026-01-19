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
      "- You will know how to handle dates and times in Python code",
      "- You will be able to create and use `datetime` objects",
      "- You will know how to compare and calculate differences between two dates or times"
    ].join("\n"),
    CAS: [
      "# Objetivos de aprendizaje",
      "",
      "Después de esta sección",
      "",
      "- Sabrás cómo manejar fechas y horas en código Python",
      "- Podrás crear y usar objetos `datetime`",
      "- Sabrás cómo comparar y calcular diferencias entre dos fechas u horas"
    ].join("\n"),
    EUS: [
      "# Ikas-helburuak",
      "",
      "Atal honen ondoren",
      "",
      "- Python kodean datak eta orduak nola kudeatu jakingo duzu",
      "- `datetime` objektuak sortzeko eta erabiltzeko gai izango zara",
      "- Bi data edo orduren arteko aldeak nola konparatu eta kalkulatu jakingo duzu"
    ].join("\n")
  }
};

const datetimeObjectContent = {
  type: "markdown",
  content: {
    ENG: [
      "## The datetime object",
      "",
      "The Python `datetime` module includes the function `now`, which returns a datetime object containing the current date and time. The default printout of a datetime object looks like this:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "my_time = datetime.now()",
      "print(my_time)",
      "```",
      "",
      "```text",
      "2021-10-19 08:46:49.311393",
      "```",
      "",
      "You can also define the object yourself:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "my_time = datetime(1952, 12, 24)",
      "print(my_time)",
      "```",
      "",
      "```text",
      "1952-12-24 00:00:00",
      "```",
      "",
      "By default, the time is set to midnight, as we did not give a time of day in the example above.",
      "",
      "Different elements of the datetime object can be accessed in the following manner:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "my_time = datetime(1952, 12, 24)",
      "print(\"Day:\", my_time.day)",
      "print(\"Month:\", my_time.month)",
      "print(\"Year:\", my_time.year)",
      "```",
      "",
      "```text",
      "Day: 24",
      "Month: 12",
      "Year: 1952",
      "```",
      "",
      "A time of day can also be specified. The precision can vary, as you can see below:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "pv1 = datetime(2021, 6, 30, 13)     # 30.6.2021 at 1PM",
      "pv2 = datetime(2021, 6, 30, 18, 45) # 30.6.2021 at 6.45PM",
      "```"
    ].join("\n"),
    CAS: [
      "## El objeto datetime",
      "",
      "El módulo `datetime` de Python incluye la función `now`, que devuelve un objeto datetime que contiene la fecha y hora actuales. La impresión predeterminada de un objeto datetime se ve así:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "mi_tiempo = datetime.now()",
      "print(mi_tiempo)",
      "```",
      "",
      "```text",
      "2021-10-19 08:46:49.311393",
      "```",
      "",
      "También puedes definir el objeto tú mismo:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "mi_tiempo = datetime(1952, 12, 24)",
      "print(mi_tiempo)",
      "```",
      "",
      "```text",
      "1952-12-24 00:00:00",
      "```",
      "",
      "Por defecto, la hora se establece en medianoche, ya que no dimos una hora del día en el ejemplo anterior.",
      "",
      "Se puede acceder a diferentes elementos del objeto datetime de la siguiente manera:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "mi_tiempo = datetime(1952, 12, 24)",
      "print(\"Día:\", mi_tiempo.day)",
      "print(\"Mes:\", mi_tiempo.month)",
      "print(\"Año:\", mi_tiempo.year)",
      "```",
      "",
      "```text",
      "Día: 24",
      "Mes: 12",
      "Año: 1952",
      "```",
      "",
      "También se puede especificar una hora del día. La precisión puede variar, como puedes ver a continuación:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "pv1 = datetime(2021, 6, 30, 13)     # 30.6.2021 a la 1PM",
      "pv2 = datetime(2021, 6, 30, 18, 45) # 30.6.2021 a las 6.45PM",
      "```"
    ].join("\n"),
    EUS: [
      "## Datetime objektua",
      "",
      "Python `datetime` moduluak `now` funtzioa barne hartzen du, uneko data eta ordua dituen datetime objektu bat itzultzen duena. Datetime objektu baten inprimaketa lehenetsia honelakoa da:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "nire_ordua = datetime.now()",
      "print(nire_ordua)",
      "```",
      "",
      "```text",
      "2021-10-19 08:46:49.311393",
      "```",
      "",
      "Objektua zuk zeuk ere defini dezakezu:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "nire_ordua = datetime(1952, 12, 24)",
      "print(nire_ordua)",
      "```",
      "",
      "```text",
      "1952-12-24 00:00:00",
      "```",
      "",
      "Lehenespenez, ordua gauerdian ezartzen da, goiko adibidean ez baitugu eguneko ordurik eman.",
      "",
      "Datetime objektuaren elementu desberdinetara honela sar daiteke:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "nire_ordua = datetime(1952, 12, 24)",
      "print(\"Eguna:\", nire_ordua.day)",
      "print(\"Hilabetea:\", nire_ordua.month)",
      "print(\"Urtea:\", nire_ordua.year)",
      "```",
      "",
      "```text",
      "Eguna: 24",
      "Hilabetea: 12",
      "Urtea: 1952",
      "```",
      "",
      "Eguneko ordu bat ere zehaztu daiteke. Zehaztasuna alda daiteke, behean ikus dezakezun bezala:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "pv1 = datetime(2021, 6, 30, 13)     # 2021.6.30, 13:00etan",
      "pv2 = datetime(2021, 6, 30, 18, 45) # 2021.6.30, 18:45ean",
      "```"
    ].join("\n")
  }
};

const comparingTimesContent = {
  type: "markdown",
  content: {
    ENG: [
      "## Compare times and calculate differences between them",
      "",
      "The familiar comparison operators work also on datetime objects:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "time_now = datetime.now()",
      "midsummer = datetime(2021, 6, 26)",
      "",
      "if time_now < midsummer:",
      "    print(\"It is not yet Midsummer\")",
      "elif time_now == midsummer:",
      "    print(\"Happy Midsummer!\")",
      "elif time_now > midsummer:",
      "    print(\"It is past Midsummer\")",
      "```",
      "",
      "The difference between two datetime objects can be calculated simply with the subtraction operator:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "time_now = datetime.now()",
      "midsummer = datetime(2021, 6, 26)",
      "",
      "difference = midsummer - time_now",
      "print(\"Midsummer is\", difference.days, \"days away\")",
      "```",
      "",
      "NB: the result of the datetime subtraction is a `timedelta` object. It is less versatile than the `datetime` object. For instance, you can access the number of days in a `timedelta` object, but not the number of years, as the length of a year varies. A `timedelta` object contains the attributes `days`, `seconds` and `microseconds`."
    ].join("\n"),
    CAS: [
      "## Comparar horas y calcular diferencias entre ellas",
      "",
      "Los operadores de comparación familiares funcionan también en objetos datetime:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "hora_actual = datetime.now()",
      "sanjuan = datetime(2021, 6, 26)",
      "",
      "if hora_actual < sanjuan:",
      "    print(\"Todavía no es San Juan\")",
      "elif hora_actual == sanjuan:",
      "    print(\"¡Feliz San Juan!\")",
      "elif hora_actual > sanjuan:",
      "    print(\"Ya pasó San Juan\")",
      "```",
      "",
      "La diferencia entre dos objetos datetime se puede calcular simplemente con el operador de resta:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "hora_actual = datetime.now()",
      "sanjuan = datetime(2021, 6, 26)",
      "",
      "diferencia = sanjuan - hora_actual",
      "print(\"Faltan\", diferencia.days, \"días para San Juan\")",
      "```",
      "",
      "Nota: el resultado de la resta de datetime es un objeto `timedelta`. Es menos versátil que el objeto `datetime`. Por ejemplo, puedes acceder al número de días en un objeto `timedelta`, pero no al número de años, ya que la duración de un año varía. Un objeto `timedelta` contiene los atributos `days`, `seconds` y `microseconds`."
    ].join("\n"),
    EUS: [
      "## Orduak konparatu eta haien arteko aldeak kalkulatu",
      "",
      "Konparazio eragile ezagunek datetime objektuekin ere funtzionatzen dute:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "ordu_oraina = datetime.now()",
      "san_juan = datetime(2021, 6, 26)",
      "",
      "if ordu_oraina < san_juan:",
      "    print(\"Oraindik ez da San Juan\")",
      "elif ordu_oraina == san_juan:",
      "    print(\"San Juan zoriontsua!\")",
      "elif ordu_oraina > san_juan:",
      "    print(\"San Juan igaro da\")",
      "```",
      "",
      "Bi datetime objekturen arteko aldea kenketa eragilearekin kalkula daiteke:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "ordu_oraina = datetime.now()",
      "san_juan = datetime(2021, 6, 26)",
      "",
      "aldea = san_juan - ordu_oraina",
      "print(\"San Juanera\", aldea.days, \"egun falta dira\")",
      "```",
      "",
      "OHARRA: datetime kenketaren emaitza `timedelta` objektu bat da. `datetime` objektua baino gutxiago moldakorra da. Adibidez, `timedelta` objektu bateko egun kopurura sar zaitezke, baina ez urte kopurura, urte baten luzera aldatzen delako. `timedelta` objektu batek `days`, `seconds` eta `microseconds` atributuak ditu."
    ].join("\n")
  }
};

const exerciseHowOld = {
  type: "exercise",
  exerciseId: "part07-09_how_old",
  title: {
    ENG: "How old",
    CAS: "Cuántos años",
    EUS: "Zenbat urte"
  },
  description: {
    ENG: "Please write a program which asks the user for their date of birth, and then prints out how old the user was on the eve of the new millennium (31.12.1999). The age should be printed in days.",
    CAS: "Por favor escribe un programa que pida al usuario su fecha de nacimiento y luego imprima cuántos años tenía el usuario en la víspera del nuevo milenio (31.12.1999). La edad debe imprimirse en días.",
    EUS: "Mesedez idatzi programa bat erabiltzaileari bere jaiotze-data eskatzen diona, eta ondoren inprimatzen duena erabiltzaileak zenbat urte zituen milurteko berriaren bezperan (1999.12.31). Adina egunetan inprimatu behar da."
  },
  initialCode: {
    ENG: "# Write your solution here",
    CAS: "# Escribe tu solución aquí",
    EUS: "# Idatzi zure soluzioa hemen"
  },
  testCode: ""
};

const exerciseValidPic = {
  type: "exercise",
  exerciseId: "part07-10_valid_pic",
  title: {
    ENG: "Valid PIC?",
    CAS: "¿PIC válido?",
    EUS: "PIC baliozkoa?"
  },
  description: {
    ENG: "Please write a function named `is_it_valid(pic: str)`, which returns `True` or `False` based on whether the Finnish Personal Identity Code (PIC) given as an argument is valid or not. Validate date, century marker (+, -, A), and control character.",
    CAS: "Por favor escribe una función llamada `is_it_valid(pic: str)`, que devuelva `True` o `False` basándose en si el Código de Identidad Personal (PIC) finlandés dado como argumento es válido o no. Valida la fecha, el marcador de siglo (+, -, A) y el carácter de control.",
    EUS: "Mesedez idatzi `is_it_valid(pic: str)` izeneko funtzio bat, `True` edo `False` itzultzen duena argumentu gisa emandako Finlandiako Identitate Pertsonaleko Kodea (PIC) baliozkoa den ala ez oinarritzat hartuta. Baliozkotu data, mendearen markatzailea (+, -, A) eta kontrol-karakterea."
  },
  initialCode: {
    ENG: [
      "from datetime import datetime",
      "",
      "def is_it_valid(pic: str):",
      "    # Write your solution here",
      "    pass"
    ].join("\n"),
    CAS: [
      "from datetime import datetime",
      "",
      "def is_it_valid(pic: str):",
      "    # Escribe tu solución aquí",
      "    pass"
    ].join("\n"),
    EUS: [
      "from datetime import datetime",
      "",
      "def is_it_valid(pic: str):",
      "    # Idatzi zure soluzioa hemen",
      "    pass"
    ].join("\n")
  },
  testCode: ""
};

const formattingContent = {
  type: "markdown",
  content: {
    ENG: [
      "## Formatting times and dates",
      "",
      "The `datetime` module contains a handy method `strftime` for formatting the string representation of a datetime object. For example, the following code will print the current date in the format `dd.mm.yyyy`, and then the date and time in a different format:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "my_time = datetime.now()",
      "print(my_time.strftime(\" %d.%m.%Y\"))",
      "print(my_time.strftime(\" %d/%m/%Y %H:%M\"))",
      "```",
      "",
      "Datetime formatting works in the reverse direction as well, in case you need to parse a datetime object from a string given by the user. The method `strptime` will do just that:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "birthday = input(\"Please type in your birthday in the format dd.mm.yyyy: \")",
      "my_time = datetime.strptime(birthday, \" %d.%m.%Y\")",
      "",
      "if my_time < datetime(2000, 1, 1):",
      "    print(\"You were born in the previous millennium\")",
      "else:",
      "    print(\"You were born during this millennium\")",
      "```"
    ].join("\n"),
    CAS: [
      "## Formateando horas y fechas",
      "",
      "El módulo `datetime` contiene un método útil `strftime` para formatear la representación de cadena de un objeto datetime. Por ejemplo, el siguiente código imprimirá la fecha actual en el formato `dd.mm.yyyy`, y luego la fecha y la hora en un formato diferente:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "mi_tiempo = datetime.now()",
      "print(mi_tiempo.strftime(\" %d.%m.%Y\"))",
      "print(mi_tiempo.strftime(\" %d/%m/%Y %H:%M\"))",
      "```",
      "",
      "El formateo de datetime funciona también en la dirección inversa, en caso de que necesites analizar un objeto datetime de una cadena dada por el usuario. El método `strptime` hará exactamente eso:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "cumpleanos = input(\"Por favor escribe tu cumpleaños en el formato dd.mm.yyyy: \")",
      "mi_tiempo = datetime.strptime(cumpleanos, \" %d.%m.%Y\")",
      "",
      "if mi_tiempo < datetime(2000, 1, 1):",
      "    print(\"Naciste en el milenio anterior\")",
      "else:",
      "    print(\"Naciste durante este milenio\")",
      "```"
    ].join("\n"),
    EUS: [
      "## Orduak eta datak formateatzen",
      "",
      "`datetime` moduluak `strftime` metodo erabilgarria du datetime objektu baten kate irudikapena formateatzeko. Adibidez, hurrengo kodeak uneko data `dd.mm.yyyy` formatuan inprimatuko du, eta gero data eta ordua formatu desberdin batean:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "nire_ordua = datetime.now()",
      "print(nire_ordua.strftime(\" %d.%m.%Y\"))",
      "print(nire_ordua.strftime(\" %d/%m/%Y %H:%M\"))",
      "```",
      "",
      "Datetime formateatzeak alderantzizko noranzkoan ere funtzionatzen du, erabiltzaileak emandako kate batetik datetime objektu bat analizatu behar baduzu. `strptime` metodoak horixe egingo du:",
      "",
      "```python",
      "from datetime import datetime",
      "",
      "urtebetetzea = input(\"Mesedez idatzi zure urtebetetzea dd.mm.yyyy formatuan: \")",
      "nire_ordua = datetime.strptime(urtebetetzea, \" %d.%m.%Y\")",
      "",
      "if nire_ordua < datetime(2000, 1, 1):",
      "    print(\"Aurreko milurtekoan jaio zinen\")",
      "else:",
      "    print(\"Milurteko honetan jaio zinen\")",
      "```"
    ].join("\n")
  }
};

const exerciseScreenTime = {
  type: "exercise",
  exerciseId: "part07-11_screen_time",
  title: {
    ENG: "Screen time",
    CAS: "Tiempo de pantalla",
    EUS: "Pantaila denbora"
  },
  description: {
    ENG: "Please write a program for recording screen time. It should ask for a starting date and how many days to record. Then it asks for screen time in minutes for each day. Finally, it saves the data to a file.",
    CAS: "Por favor escribe un programa para registrar el tiempo de pantalla. Debe pedir una fecha de inicio y cuántos días registrar. Luego pide el tiempo de pantalla en minutos para cada día. Finalmente, guarda los datos en un archivo.",
    EUS: "Mesedez idatzi pantaila denbora grabatzeko programa bat. Hasiera data bat eta zenbat egun grabatu behar diren galdetu behar du. Ondoren, egun bakoitzerako pantaila denbora minututan eskatzen du. Azkenik, datuak fitxategi batean gordetzen ditu."
  },
  initialCode: {
    ENG: [
      "from datetime import datetime, timedelta",
      "",
      "# Write your solution here"
    ].join("\n"),
    CAS: [
      "from datetime import datetime, timedelta",
      "",
      "# Escribe tu solución aquí"
    ].join("\n"),
    EUS: [
      "from datetime import datetime, timedelta",
      "",
      "# Idatzi zure soluzioa hemen"
    ].join("\n")
  },
  testCode: ""
};

const section3 = {
  id: "part7-3",
  title: {
    ENG: "Times and dates",
    CAS: "Horas y fechas",
    EUS: "Orduak eta datak"
  },
  blocks: [
    learningObjectives,
    datetimeObjectContent,
    comparingTimesContent,
    exerciseHowOld,
    exerciseValidPic,
    formattingContent,
    exerciseScreenTime
  ]
};

const outputPath = path.join(__dirname, '../src/data/part7/section3.json');
fs.writeFileSync(outputPath, JSON.stringify(section3, null, 2), 'utf-8');
console.log(`Successfully created ${outputPath}`);
