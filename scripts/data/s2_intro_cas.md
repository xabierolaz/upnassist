# Información del usuario

## Objetivos de aprendizaje

Después de esta sección:
- Sabrás cómo escribir un programa que utiliza la entrada del usuario
- Sabrás cómo usar variables para almacenar la entrada e imprimirla
- Podrás combinar cadenas de texto

La entrada (input) se refiere a cualquier información que un usuario entrega al programa. Específicamente, el comando de Python `input` lee una línea de texto escrita por el usuario. También se puede usar para mostrar un mensaje al usuario, para solicitar una entrada específica.

El siguiente programa lee el nombre del usuario con el comando `input`. Luego lo imprime con el comando `print`:

```python
name = input("What is your name? ")
print("Hi there, " + name)
```

La ejecución de este programa podría verse así (entrada del usuario en rojo):

```text
What is your name? Paul Python
Hi there, Paul Python
```

Lo que este programa imprime depende parcialmente de la entrada del usuario. Eso significa que la ejecución del programa también podría verse así:

```text
What is your name? Paula Programmer
Hi there, Paula Programmer
```

La palabra `name` en este programa es una **variable**. En el contexto de la programación, una variable es una ubicación para almacenar algún valor, como una cadena o un número. Este valor se puede usar más tarde y también se puede cambiar.

## Nombrando variables

En principio, las variables se pueden nombrar con bastante libertad, dentro de ciertos límites especificados en el lenguaje Python.

Es una práctica de programación internacional común nombrar las variables en inglés, pero puedes encontrar código donde las variables se nombran en otros idiomas, como el idioma nativo del programador. El nombre de la variable no tiene un efecto directo en su contenido, por lo que el nombre, en ese sentido, no importa. Sin embargo, a menudo puede ser útil para comprender cómo funciona el código si las variables se nombran de manera lógica y en inglés.
