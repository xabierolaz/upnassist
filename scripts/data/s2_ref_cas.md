## Referenciar una variable

Se puede hacer referencia a una sola variable muchas veces en un programa:

```python
name = input("¿Cuál es tu nombre? ")

print("Hola, " + name + "!")
print(name + " es un nombre bastante bonito.")
```

Si el usuario da el nombre Paul Python, este programa imprime lo siguiente:

```text
¿Cuál es tu nombre? Paul Python
Hola, Paul Python!
Paul Python es un nombre bastante bonito.
```

Echemos un vistazo más de cerca a la forma en que se usa el comando `print` arriba. Dentro de los paréntesis del comando hay tanto texto entre comillas como nombres de variables que se refieren a la entrada del usuario. Estos se han combinado con un operador `+`, que concatena dos cadenas en una sola cadena.

Las cadenas y las variables se pueden combinar con bastante libertad:

```python
name = input("¿Cuál es tu nombre? ")

print("Hola " + name + "! Déjame asegurarme: tu nombre es " + name + "?")
```

Si el usuario da el nombre Ellen Example, esto imprime:

```text
¿Cuál es tu nombre? Ellen Example
Hola Ellen Example! Déjame asegurarme: tu nombre es Ellen Example?
```
