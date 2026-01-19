## Más de una entrada

Un programa puede solicitar más de una entrada. Observa cómo a continuación cada comando `input` almacena el valor recibido en una variable diferente.

```python
name = input("¿Cuál es tu nombre? ")
email = input("¿Cuál es tu dirección de correo electrónico? ")
nickname = input("¿Cuál es tu apodo? ")

print("Asegurémonos de que hemos entendido bien")
print("Tu nombre: " + name)
print("Tu dirección de correo electrónico: " + email)
print("Tu apodo: " + nickname)
```

El programa podría imprimir esto, por ejemplo:

```text
¿Cuál es tu nombre? Frances Fictitious
¿Cuál es tu dirección de correo electrónico? frances99@example.com
¿Cuál es tu apodo? Fran
Asegurémonos de que hemos entendido bien
Tu nombre: Frances Fictitious
Tu dirección de correo electrónico: frances99@example.com
Tu apodo: Fran
```

Si se usa la misma variable para almacenar más de una entrada, cada nuevo valor reemplazará al anterior. Por ejemplo:

```python
address = input("¿Cuál es tu dirección? ")
print("Así que vives en la dirección " + address)

address = input("Por favor escribe una nueva dirección: ")
print("Tu dirección es ahora " + address)
```

Un ejemplo de ejecución del programa:

```text
¿Cuál es tu dirección? Python Path 101, Flat 3D
Así que vives en la dirección Python Path 101, Flat 3D
Por favor escribe una nueva dirección: New Road 999
Tu dirección es ahora New Road 999
```

Esto significa que si se usa la misma variable para almacenar dos entradas seguidas, no hay forma de acceder al valor de la primera entrada después de que haya sido reemplazado por el segundo:

```python
address = input("¿Cuál es tu dirección? ")
address = input("Por favor escribe una nueva dirección: ")

print("Tu dirección es ahora " + address)
```

Un ejemplo de cómo podría verse la salida del programa:

```text
¿Cuál es tu dirección? Python Path 10
Por favor escribe una nueva dirección: Programmer's Walk 23
Tu dirección es ahora Programmer's Walk 23
```
