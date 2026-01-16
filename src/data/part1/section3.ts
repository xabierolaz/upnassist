import { CoursePage } from '../mooc-exercises';

export const section3: CoursePage = {
  id: "part1-3",
  title: {
    ENG: `More about variables`,
    CAS: `Más sobre variables`,
    EUS: `Aldagaiei buruz gehiago`
  },
  blocks: [
    {
      type: 'quiz',
      title: { ENG: `Pre-quiz`, CAS: `Pre-cuestionario`, EUS: `Aurretiazko galdetegia` },
      questions: [
        {
          id: 'q1',
          prompt: {
            ENG: 'Can the value of a variable change during the execution of a program?',
            CAS: '¿Puede cambiar el valor de una variable durante la ejecución de un programa?',
            EUS: 'Alda daiteke aldagai baten balioa programa baten exekuzioan zehar?'
          },
          options: [
            { id: 'o1', text: { ENG: 'Yes', CAS: 'Sí', EUS: 'Bai' }, isCorrect: true },
            { id: 'o2', text: { ENG: 'No', CAS: 'No', EUS: 'Ez' }, isCorrect: false }
          ]
        }
      ]
    },
    {
      type: 'markdown',
      content: {
        ENG: `
# More about variables

## After this section:

- You will be able to use variables in different contexts
- You will know what kind of data can be stored in variables
- You will understand the difference between strings, integers and floating point numbers

Variables are needed for various purposes in programming. You can use variables to store any information that will be needed later in the program's execution.

In Python programming variables are created like so:

`variable_name = ...`

Here `...` means the value stored in the variable.

For example, when you used the `input` command to read a string from the user, you stored the string in a variable and then used the variable later in your program:

```python
name = input("What is your name? ")
print("Hi, " + name)
```

<sample-output>

What is your name? **Ghosty**
Hi, Ghosty

</sample-output>

The value stored in a variable can also be defined using other variables:

```python
given_name = "Paul"
family_name = "Python"

name = given_name + " " + family_name

print(name)
```

<sample-output>

Paul Python

</sample-output>

Here the values stored in the three variables are not obtained from user input. They remain the same every time the program is executed. This is called _hard-coding_ data into the program.

## Changing the value of a variable

As implied by the name _variable_, the value stored in a variable can change. In the previous section we noticed that the new value replaces the old one.

During the execution of the following program, the variable `word` will have three different values:

```python
word = input("Please type in a word: ")
print(word)

word = input("And another word: ")
print(word)

word = "third"
print(word)
```

<sample-output>

Please type in a word: **first**
first
And another word: **second**
second
third

</sample-output>

The value stored in the variable changes each time the variable is assigned a new value.

The new value of a variable can be derived from its old value. In the following example the variable `word` is first assigned a value based on user input. Then it is assigned a new value, which is the old value with three exclamation marks added to the end.

```python
word = input("Please type in a word: ")
print(word)

word = word + "!!!"
print(word)
```

<sample-output>

Please type in a word: **test**
test
test!!!

</sample-output>

> **Choosing a good name for a variable**
> 
> * It is often useful to name variables according to what they are used for. For example, if the variable contains a word, the name `word` is a better choice than, say, `a`.
> * There is no set limit to the length of a variable name, but it is generally better to keep them short.

## Integers

Thus far, we have only stored strings in variables, but there are also many other types of information we will want to store and access later. Let's have a look at integers first. Integers are numbers that do not have a decimal or fractional part, such as ` -15`, `0` and `1`.

The following program creates the variable `age`, which contains an integer value.

```python
age = 24
print(age)
```

The program prints out just this:

<sample-output>

24

</sample-output>

Notice the lack of quotation marks here. In fact, if we were to add quotation marks around the number, this would mean our variable would no longer be an integer, but a string instead. A string can contain numbers, but it is processed differently.

So, why does it matter that variables have a type, when the following program still prints out the same thing twice?

```python
number1 = 100
number2 = "100"

print(number1)
print(number2)
```

<sample-output>

100
100

</sample-output>

Variable types matter because different operations affect different types of variables in different ways. Let's have a look at an example:

```python
number1 = 100
number2 = "100"

print(number1 + number1)
print(number2 + number2)
```

This prints out the following:

<sample-output>

200
100100

</sample-output>

For integer values the `+` operator means addition, but for string values it means concatenation, or "stringing together".

Not all operators are available for all types of variables. While numbers can be divided using the division operator `/`, attempting to divide a string by a number causes an error:

```python
number = "100"
print(number / 2)
```

<sample-output>
TypeError: unsupported operand type(s) for /: 'str' and 'int'
</sample-output>

## ⚠️ CRITICAL WARNING: Input is always text!

This is the most common mistake for beginners. When you use `input()`, Python **ALWAYS** reads it as a string (text), even if the user types a number.

```python
year = input("Year of birth: ") # User types 1990
# age = 2024 - year  <-- ERROR! You cannot subtract a string from a number.
```

To fix this, you must convert the string to a number using `int()` (for whole numbers) or `float()` (for decimals).

```python
year_str = input("Year of birth: ")
year = int(year_str) # Convert to integer
age = 2024 - year
print(f"You are {age} years old")
```
`, CAS: `
# Más sobre variables

## Después de esta sección:

- Podrás usar variables en diferentes contextos
- Sabrás qué tipo de datos se pueden almacenar en variables
- Entenderás la diferencia entre cadenas, enteros y números de punto flotante

Las variables son necesarias para varios propósitos en la programación. Puedes usar variables para almacenar cualquier información que se necesite más tarde en la ejecución del programa.

En la programación Python, las variables se crean así:

`variable_name = ...`

Aquí `...` significa el valor almacenado en la variable.

Por ejemplo, cuando usaste el comando `input` para leer una cadena del usuario, almacenaste la cadena en una variable y luego usaste la variable más tarde en tu programa:

```python
name = input("¿Cómo te llamas? ")
print("Hola, " + name)
```

<sample-output>

¿Cómo te llamas? **Ghosty**
Hola, Ghosty

</sample-output>

El valor almacenado en una variable también se puede definir utilizando otras variables:

```python
given_name = "Paul"
family_name = "Python"

name = given_name + " " + family_name

print(name)
```

<sample-output>

Paul Python

</sample-output>

Aquí los valores almacenados en las tres variables no se obtienen de la entrada del usuario. Permanecen iguales cada vez que se ejecuta el programa. Esto se llama _hard-coding_ (codificación rígida) de datos en el programa.

## Cambiando el valor de una variable

Como implica el nombre _variable_, el valor almacenado en una variable puede cambiar. En la sección anterior notamos que el nuevo valor reemplaza al antiguo.

Durante la ejecución del siguiente programa, la variable `word` tendrá tres valores diferentes:

```python
word = input("Por favor escribe una palabra: ")
print(word)

word = input("Y otra palabra: ")
print(word)

word = "tercera"
print(word)
```

<sample-output>

Por favor escribe una palabra: **primera**
primera
Y otra palabra: **segunda**
segunda
tercera

</sample-output>

El valor almacenado en la variable cambia cada vez que se le asigna un nuevo valor.

El nuevo valor de una variable puede derivarse de su valor anterior. En el siguiente ejemplo, a la variable `word` se le asigna primero un valor basado en la entrada del usuario. Luego se le asigna un nuevo valor, que es el valor antiguo con tres signos de exclamación añadidos al final.

```python
word = input("Por favor escribe una palabra: ")
print(word)

word = word + "!!!"
print(word)
```

<sample-output>

Por favor escribe una palabra: **prueba**
prueba
prueba!!!

</sample-output>

> **Elegir un buen nombre para una variable**
> 
> * A menudo es útil nombrar las variables según para qué se usan. Por ejemplo, si la variable contiene una palabra, el nombre `word` es una mejor opción que, por ejemplo, `a`.
> * No hay límite establecido para la longitud del nombre de una variable, pero generalmente es mejor mantenerlos cortos.

## Enteros

Hasta ahora, solo hemos almacenado cadenas en variables, pero hay muchos otros tipos de información que querremos almacenar y acceder más tarde. Veamos primero los enteros. Los enteros son números que no tienen parte decimal o fraccionaria, como ` -15`, `0` y `1`.

El siguiente programa crea la variable `age`, que contiene un valor entero.

```python
age = 24
print(age)
```

El programa imprime solo esto:

<sample-output>

24

</sample-output>

Nota la falta de comillas aquí. De hecho, si añadiéramos comillas alrededor del número, esto significaría que nuestra variable ya no sería un entero, sino una cadena. Una cadena puede contener números, pero se procesa de manera diferente.

Entonces, ¿por qué importa que las variables tengan un tipo, cuando el siguiente programa imprime lo mismo dos veces?

```python
number1 = 100
number2 = "100"

print(number1)
print(number2)
```

<sample-output>

100
100

</sample-output>

Los tipos de variables importan porque diferentes operaciones afectan a diferentes tipos de variables de diferentes maneras. Veamos un ejemplo:

```python
number1 = 100
number2 = "100"

print(number1 + number1)
print(number2 + number2)
```

Esto imprime lo siguiente:

<sample-output>

200
100100

</sample-output>

Para valores enteros el operador `+` significa suma, pero para valores de cadena significa concatenación, o "unir cadenas".

No todos los operadores están disponibles para todos los tipos de variables. Mientras que los números se pueden dividir usando el operador de división `/`, intentar dividir una cadena por un número causa un error:

```python
number = "100"
print(number / 2)
```

<sample-output>
TypeError: unsupported operand type(s) for /: 'str' and 'int'
</sample-output>

## ⚠️ ADVERTENCIA CRÍTICA: ¡El input siempre es texto!

Este es el error más común para principiantes. Cuando usas `input()`, Python **SIEMPRE** lo lee como cadena (texto), incluso si el usuario escribe un número.

```python
anio = input("Año de nacimiento: ") # Usuario escribe 1990
# edad = 2024 - anio  <-- ¡ERROR! No puedes restar texto de un número.
```

Para arreglar esto, debes convertir la cadena a número usando `int()` (enteros) o `float()` (decimales).

```python
anio_str = input("Año de nacimiento: ")
anio = int(anio_str) # Convertir a entero
edad = 2024 - anio
print(f"Tienes {edad} años")
```
`, EUS: `
# Aldagaiei buruz gehiago

## Atal honen ondoren:

- Aldagaiak testuinguru ezberdinetan erabiltzeko gai izango zara
- Jakingo duzu zer motatako datuak gorde daitezkeen aldagailetan
- Kateen, zenbaki osoen eta koma higikorreko zenbakien arteko aldea ulertuko duzu

Aldagaiak hainbat helburutarako beharrezkoak dira programazioan. Geroago programaren exekuzioan beharko den edozein informazio gordetzeko erabil ditzakezu aldagaiak.

Python programazioan aldagaiak horrela sortzen dira:

`aldagai_izena = ...`

Hemen `...` aldagaian gordetako balioa da.

Adibidez, `input` komandoa erabili zenuenean erabiltzailearen kate bat irakurtzeko, katea aldagai batean gorde zenuen eta gero aldagaia erabili zenuen zure programan:

```python
name = input("Nola duzu izena? ")
print("Kaixo, " + name)
```

<sample-output>

Nola duzu izena? **Ghosty**
Kaixo, Ghosty

</sample-output>

Aldagai batean gordetako balioa beste aldagai batzuk erabiliz ere defini daiteke:

```python
given_name = "Paul"
family_name = "Python"

name = given_name + " " + family_name

print(name)
```

<sample-output>

Paul Python

</sample-output>

Hemen hiru aldagaietan gordetako balioak ez dira erabiltzailearen sarreratik lortzen. Programa exekutatzen den bakoitzean berdinak dira. Honi datuak programan _hard-coding_ (kodeketa zurruna) egitea deitzen zaio.

## Aldagai baten balioa aldatzea

Izenak iradokitzen duen bezala, _aldagai_ batean gordetako balioa alda daiteke. Aurreko atalean ikusi genuen balio berriak zaharra ordezkatzen duela.

Hurrengo programaren exekuzioan zehar, `word` aldagaiak hiru balio ezberdin izango ditu:

```python
word = input("Mesedez idatzi hitz bat: ")
print(word)

word = input("Eta beste hitz bat: ")
print(word)

word = "hirugarrena"
print(word)
```

<sample-output>

Mesedez idatzi hitz bat: **lehenengoa**
lehenengoa
Eta beste hitz bat: **bigarrena**
bigarrena
hirugarrena

</sample-output>

Aldagaian gordetako balioa aldatu egiten da aldagaiari balio berri bat esleitzen zaion bakoitzean.

Aldagai baten balio berria bere balio zaharretik erator daiteke. Hurrengo adibidean `word` aldagaiari lehenik erabiltzailearen sarreran oinarritutako balio bat esleitzen zaio. Ondoren, balio berri bat esleitzen zaio, zeina balio zaharra den amaieran hiru harridura-marka gehituta.

```python
word = input("Mesedez idatzi hitz bat: ")
print(word)

word = word + "!!!"
print(word)
```

<sample-output>

Mesedez idatzi hitz bat: **proba**
proba
proba!!!

</sample-output>

> **Aldagai baterako izen on bat aukeratzea**
> 
> * Askotan erabilgarria da aldagaiak zertarako erabiltzen diren kontuan hartuta izendatzea. Adibidez, aldagaiak hitz bat badu, `word` izena aukera hobea da `a` baino.
> * Ez dago mugarik aldagai izen baten luzerarako, baina orokorrean hobe da labur mantentzea.

## Zenbaki osoak

Orain arte, kateak bakarrik gorde ditugu aldagaietan, baina badaude beste informazio mota asko gorde eta geroago atzitu nahiko ditugunak. Ikus ditzagun lehenik zenbaki osoak. Zenbaki osoak zati dezimal edo zatiki gabeko zenbakiak dira, adibidez ` -15`, `0` eta `1`.

Hurrengo programak `age` aldagaia sortzen du, balio oso bat duena.

```python
age = 24
print(age)
```

Programak hau bakarrik inprimatzen du:

<sample-output>

24

</sample-output>

Ohartu hemen komatxorik ez dagoela. Izan ere, zenbakiaren inguruan komatxoak jarriko bagenitu, horrek esan nahiko luke gure aldagaia ez litzatekeela zenbaki osoa izango, katea baizik. Kate batek zenbakiak izan ditzake, baina ezberdin prozesatzen da.

Beraz, zergatik da garrantzitsua aldagaiek mota bat izatea, hurrengo programak gauza bera bi aldiz inprimatzen duenean?

```python
number1 = 100
number2 = "100"

print(number1)
print(number2)
```

<sample-output>

100
100

</sample-output>

Aldagai motak garrantzitsuak dira, eragiketa ezberdinek modu ezberdinean eragiten dietelako aldagai mota ezberdinei. Ikus dezagun adibide bat:

```python
number1 = 100
number2 = "100"

print(number1 + number1)
print(number2 + number2)
```

Honek honako hau inprimatzen du:

<sample-output>

200
100100

</sample-output>

Zenbaki osoetarako `+` eragileak batuketa esan nahi du, baina kateetarako kateatzea esan nahi du, edo "elkarrekin lotzea".

Eragile guztiak ez daude erabilgarri aldagai mota guztietarako. Zenbakiak `/` zatiketa eragilea erabiliz zati daitezkeen bitartean, kate bat zenbaki batekin zatitzen saiatzeak errorea eragiten du:

```python
number = "100"
print(number / 2)
```

<sample-output>
TypeError: unsupported operand type(s) for /: 'str' and 'int'
</sample-output>

## ⚠️ OHAR GARRANTZITSUA: Inputa beti da testua!

Hasiberrien errorea ohikoena da. `input()` erabiltzen duzunean, Pythonek **BETI** kate (testu) gisa irakurtzen du, nahiz eta erabiltzaileak zenbaki bat idatzi.

```python
urtea = input("Jaiotze urtea: ") # Erabiltzaileak 1990 idazten du
# adina = 2024 - urtea  <-- ERROREA! Ezin diozu zenbaki bati testua kendu.
```

Konpontzeko, katea zenbaki bihurtu behar duzu `int()` (osoak) edo `float()` (hamartarrak) erabiliz.

```python
urtea_str = input("Jaiotze urtea: ")
urtea = int(urtea_str) # Bihurtu osora
adina = 2024 - urtea
print(f"{adina} urte dituzu")
```
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part01-10b_extra_space',
      title: { ENG: `Extra space`, CAS: `Espacio extra`, EUS: `Espazio gehigarria` },
      description: {
        ENG: `Please fix the code so that the printout looks right. Notice especially how the comma notation in the print command automatically inserts a space. The easiest way is to use f-strings.`, 
        CAS: `Por favor, arregla el código para que la salida se vea bien. Fíjate especialmente en cómo la coma en el comando print inserta un espacio automáticamente. La forma más fácil es usar f-strings.`, 
        EUS: `Mesedez, konpondu kodea irteera ondo ikus dadin. Erreparatu nola print komandoan komak espazio bat gehitzen duen automatikoki. Modurik errazena f-strings erabiltzea da.`
      },
      initialCode: `name =