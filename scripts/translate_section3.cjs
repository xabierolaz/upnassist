const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../src/data/part1/section3.json');
const content = JSON.parse(fs.readFileSync(targetPath, 'utf8'));

// CAS Translations
const casContent = {
    blocks: [
        {
            text: "<text-box variant='learningObjectives' name='Objetivos de aprendizaje'>\n\n" +
                  "Después de esta sección\n\n" +
                  "- Podrás usar variables en diferentes contextos\n" +
                  "- Sabrás qué tipo de datos se pueden almacenar en variables\n" +
                  "- Entenderás la diferencia entre cadenas, enteros y números de punto flotante\n\n" +
                  "</text-box>\n\n" +
                  "Por favor completa este cuestionario antes de comenzar con esta sección. Recibirás un punto de ejercicio por responder.\n\n" +
                  "<quiz id=\"514abebe-f5ca-54dc-bb62-feb9311f3e08\"></quiz>\n\n" +
                  "Las variables son necesarias para varios propósitos en programación. Puedes usar variables para almacenar cualquier información que se necesite más tarde en la ejecución del programa.\n\n" +
                  "En la programación con Python, las variables se crean así:\n\n" +
                  "`nombre_variable = ...`\n\n" +
                  "Aquí `...` significa el valor almacenado en la variable.\n\n" +
                  "Por ejemplo, cuando usaste el comando `input` para leer una cadena del usuario, almacenaste la cadena en una variable y luego usaste la variable más tarde en tu programa:\n\n" +
                  "```python\n" +
                  "name = input(\"¿Cuál es tu nombre? \")\n" +
                  "print(\"Hola, \" + name)\n" +
                  "```\n\n" +
                  "<sample-output>\n\n" +
                  "¿Cuál es tu nombre? **Ghosty**\n" +
                  "Hola, Ghosty\n\n" +
                  "</sample-output>\n\n" +
                  "El valor almacenado en una variable también se puede definir usando otras variables:\n\n" +
                  "```python\n" +
                  "given_name = \"Paul\"\n" +
                  "family_name = \"Python\"\n\n" +
                  "name = given_name + \" \" + family_name\n\n" +
                  "print(name)\n" +
                  "```\n\n" +
                  "<sample-output>\n\n" +
                  "Paul Python\n\n" +
                  "</sample-output>\n\n" +
                  "Aquí los valores almacenados en las tres variables no se obtienen de la entrada del usuario. Permanecen igual cada vez que se ejecuta el programa. Esto se llama _hard-coding_ (codificación rígida) de datos en el programa.\n\n" +
                  "## Cambiar el valor de una variable\n\n" +
                  "Como lo implica el nombre _variable_, el valor almacenado en una variable puede cambiar. En la sección anterior notamos que el valor nuevo reemplaza al antiguo.\n\n" +
                  "Durante la ejecución del siguiente programa, la variable `word` tendrá tres valores diferentes:"
        },
        {
            title: "Espacio extra",
            desc: "Tu amigo está trabajando en una aplicación para solicitantes de empleo. Te envía este fragmento de código:\n\n" +
                  "```python\n" +
                  "name = \"Tim Tester\"\n" +
                  "age = 20\n" +
                  "skill1 = \"python\"\n" +
                  "level1 = \"beginner\"\n" +
                  "skill2 = \"java\"\n" +
                  "level2 = \"veteran\"\n" +
                  "skill3 = \"programming\"\n" +
                  "level3 = \"semiprofessional\"\n" +
                  "lower = 2000\n" +
                  "upper = 3000\n\n" +
                  "print(\"my name is \", name, \" , I am \", age, \"years old\")\n" +
                  "print(\"my skills are\")\n" +