const fs = require('fs');
const path = require('path');

const bt = String.fromCharCode(96);
const bt3 = bt + bt + bt;

const filePath = path.resolve(__dirname, '../src/data/part5/section1.json');
let json = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Block 0
json.blocks[0].content.CAS = `<text-box variant='learningObjectives' name="Objetivos de aprendizaje">

Después de esta sección

- Podrás crear listas con diferentes tipos de elementos
- Sabrás cómo usar listas para organizar datos
- Podrás almacenar una matriz como una lista bidimensional

</text-box>

<!--the same text is in sections 3-1, 5-1 and 6-1, check them all if you're changing this-->
<text-box variant='hint' name="Acerca de los ejercicios de este curso">

Convertirse en un programador competente requiere mucha práctica, a veces incluso una práctica bastante mecánica. También implica desarrollar habilidades de resolución de problemas y aplicar la intuición. Es por esto que hay muchos ejercicios de diferentes tipos en este curso. Algunos de ellos te piden aplicar de manera bastante directa lo que has aprendido en el material, pero algunos de ellos son intencionalmente más desafiantes y abiertos.

Algunos de los ejercicios pueden parecer abrumadores al principio, pero esto no es nada de qué preocuparse. Ninguno de los ejercicios es estrictamente obligatorio y, de hecho, _solo se requiere el 25 % de los puntos de cada parte para aprobar el curso._ Puedes encontrar más detalles sobre la aprobación del curso en la [página sobre calificación](/grading-and-exams).

**Los ejercicios no están en ningún orden específico de dificultad.** Cada sección suele introducir algunos conceptos nuevos de programación, y estos se practican luego con ejercicios tanto más simples como más complicados. **Si te encuentras con un ejercicio que te parece demasiado difícil, pasa al siguiente.** Siempre puedes volver a los ejercicios más difíciles si tienes tiempo más tarde.

Cuando las cosas inevitablemente se pongan difíciles, una palabra de consuelo: una tarea que parece imposiblemente difícil esta semana probablemente se sentirá bastante fácil en unas cuatro semanas.

</text-box>

## Listas con diferentes tipos de datos

En la parte anterior manejamos principalmente listas con elementos enteros, pero cualquier tipo de valor se puede almacenar en listas. Una lista de cadenas podría verse así:

` + bt3 + `python
my_list = ["Hola", "allí", "amigo"]
print(my_list[2])
` + bt3 + `

<sample-output>

amigo

</sample-output>

La función ` + bt + `len` + bt + ` también funciona en listas que contienen otros valores:

` + bt3 + `python
my_list = ["Hola", "allí", "amigo"]
print(len(my_list))
` + bt3 + `

<sample-output>

3

</sample-output>

Los tipos de elementos en la lista también pueden variar. La misma lista podría contener enteros, cadenas y números de punto flotante:

` + bt3 + `python
my_list = [1, "Hola", 3.14]
` + bt3 + `

Normalmente esto no tiene mucho sentido, sin embargo. Es más probable que el programa se rompa si se espera que los elementos de una lista sean de un cierto tipo de datos y no lo son.`;

// Block 2
json.blocks[2].content.CAS = `## Listas dentro de listas

Los elementos en una lista pueden ser listas ellos mismos:

` + bt3 + `python
my_list = [[5, 2, 3], [4, 1], [2, 2, 5, 1]]
print(my_list)
print(my_list[1])
print(my_list[1][0])
` + bt3 + `
<sample-output>

[[5, 2, 3], [4, 1], [2, 2, 5, 1]]
[4, 1]
4

</sample-output>

¿Por qué serían útiles las listas dentro de listas?

Recuerda que las listas pueden contener elementos de diferentes tipos. Podrías almacenar información sobre una persona en una lista. Por ejemplo, podrías incluir su nombre como el primer elemento, su edad como el segundo elemento, y su altura en metros como el tercer elemento:

` + bt3 + `python
["Anne", 12, 1.45]
` + bt3 + `

Una base de datos de personas podría ser entonces una lista, cuyos elementos serían listas conteniendo información sobre una sola persona:

` + bt3 + `python
persons = [["Betty", 10, 1.37], ["Peter", 7, 1.25], ["Emily", 32, 1.64], ["Alan", 39, 1.78]]

for person in persons:
  name = person[0]
  age = person[1]
  height = person[2]
  print(f"{name}: age {age} years, height {height} meters")
` + bt3 + `

<sample-output>

Betty: age 10 years, height 1.37 meters
Peter: age 7 years, height 1.25 meters
Emily: age 32 years, height 1.64 meters
Alan: age 39 years, height 1.78 meters

</sample-output>

El bucle ` + bt + `for` + bt + ` recorre los elementos en la lista exterior uno por uno. Es decir, cada lista que contiene información sobre una sola persona es, a su vez, asignada a la variable ` + bt + `person` + bt + `.

Las listas no siempre son la mejor manera de presentar datos, como información sobre una persona. Pronto encontraremos los _diccionarios_ de Python, que a menudo son más adecuados para tales situaciones.

## Matrices

Un array bidimensional, o una _matriz_, es también una aplicación natural de una lista dentro de una lista.

Por ejemplo, la siguiente matriz

<img src="5_1_1.png">

podría presentarse como una lista bidimensional en Python así:

` + bt3 + `python
my_matrix = [[1, 2, 3], [3, 2, 1], [2, 2, 5]]
` + bt3 + ``;

// ... Repeat for EUS and other blocks ...
// Since I suspect truncation, I will do only CAS for block 0 and 2 now.

fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
console.log('✅ Partially fixed part5/section1.json');