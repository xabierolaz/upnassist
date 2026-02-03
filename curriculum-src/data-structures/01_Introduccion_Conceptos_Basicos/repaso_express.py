"""
╔═════════════════════════════════════════════════════════════════════╗
║                 REPASO EXPRESS: CONCEPTOS BÁSICOS                   ║
║  Instrucciones:                                                     ║
║  1. Descomenta el código de cada ejercicio (Ctrl + 1 en Spyder).    ║
║  2. Sustituye los guiones bajos (___) por el código correcto.       ║
║  3. Ejecuta y verifica que funciona.                                ║
╚═════════════════════════════════════════════════════════════════════╝
"""

import os

def separador(titulo):
    print(f"\n{'='*60}\n {titulo}\n{'='*60}")

# =============================================================================
# EJERCICIO 1: CONTROLANDO EL FINAL DE LÍNEA (end)
# Diapositiva: "Controlando el final de línea (end)"
# =============================================================================
separador("1. Parámetro end en print")

lst = ['uno', 'dos']

# Por defecto print baja de línea. Usa end=' ' para quedarte en la misma línea
# Resultado esperado: uno dos
# for e in lst:
#     print(e, ___=' ')


# =============================================================================
# EJERCICIO 2: DESEMPAQUETADO Y SEPARADORES (sep)
# Diapositiva: "Desempaquetado y Separadores (sep)"
# =============================================================================
separador("2. Desempaquetado con * y sep")

lst = ['uno', 'dos', 'tres']

# Usa el asterisco (*) para desempaquetar la lista y sep para el separador
# Resultado esperado: uno - dos - tres
# print(___, sep=' - ')

# Compara con print normal (muestra el objeto lista):
# print(lst)


# =============================================================================
# EJERCICIO 3: ASIGNACIÓN MÚLTIPLE DE VARIABLES
# Diapositiva: "Asignación Múltiple de Variables"
# =============================================================================
separador("3. Asignación múltiple")

# Asigna "Ana" a nombre y 25 a edad en UNA sola línea
# ___, ___ = "Ana", 25
# print(f"Nombre: {nombre}, Edad: {edad}")


# =============================================================================
# EJERCICIO 4: DESEMPAQUETADO CON *resto
# Diapositiva: "Asignación de Variables con Desempaquetado"
# =============================================================================
separador("4. Desempaquetado con *resto")

colores = ['azul', 'verde', 'rojo', 'negro']

# 4.1 El resto al final: guarda 'azul' en azul, 'verde' en verde, y el resto
# azul, verde, *___ = colores
# print(otros)  # Resultado esperado: ['rojo', 'negro']

# 4.2 El resto al principio: guarda 'negro' en negro y el resto en otros
# *___, negro = colores
# print(otros)  # Resultado esperado: ['azul', 'verde', 'rojo']

# 4.3 Sandwich: guarda 'azul' en azul, 'negro' en negro, y el medio en otros
# azul, *___, negro = colores
# print(otros)  # Resultado esperado: ['verde', 'rojo']


# =============================================================================
# EJERCICIO 5: ENUMERATE
# Diapositiva: "La Solución: enumerate"
# =============================================================================
separador("5. Enumerate")

ranking = ['Ana', 'Beto', 'Carla']

# enumerate pega un número (índice) a cada elemento
# Completa el bucle para mostrar: 1 : Ana, 2 : Beto, 3 : Carla
# for i, nombre in ___(ranking):
#     print(i + 1, ":", nombre)


# =============================================================================
# EJERCICIO 6: INTERACTUANDO CON ARCHIVOS (os)
# Diapositiva: "Interactuando con Archivos"
# =============================================================================
separador("6. Módulo os")

# 6.1 ¿Dónde estoy? (Get Current Working Directory)
# print(os.___())

# 6.2 Comprueba si existe un archivo (usa isfile, NO exists)
# Recuerda: isfile es más seguro porque exists devuelve True también para carpetas
ruta = "datos.txt"
# if os.path.___(ruta):
#     print("¡Es un archivo! Puedo leerlo.")
# else:
#     print("No es un archivo (o no existe).")


# =============================================================================
# EJERCICIO 7: ABRIENDO Y LEYENDO UN ARCHIVO
# Diapositivas: "Abriendo un Archivo", "Leer el Contenido", "Iterar Sobre un Archivo"
# =============================================================================
separador("7. Abrir y leer archivos")

# 7.1 Forma clásica (debes cerrar manualmente)
# fichero = open("mi_archivo.txt", mode="r")
# contenido = fichero.read()
# fichero.___()  # ¡No olvides cerrar!

# 7.2 Forma recomendada con 'with' (se cierra automáticamente)
# with open("mi_archivo.txt", mode="___") as fichero:
#     for linea in fichero:
#         print(linea)


# =============================================================================
# EJERCICIO 8: F-STRINGS BÁSICOS
# Diapositiva: "Usando F-Strings"
# =============================================================================
separador("8. F-Strings básicos")

nombre = "Ana"

# 8.1 String normal vs F-String
# print("Hola {nombre}")      # String normal: imprime literal {nombre}
# print(___"Hola {nombre}")   # F-String: imprime Hola Ana

# 8.2 F-Strings admiten cualquier expresión
# print(f"Mañana cumplirás {___ + 1} años")  # Debería mostrar 26


# =============================================================================
# EJERCICIO 9: FORMATEANDO F-STRINGS
# Diapositiva: "Formateando F-Strings, Uso Básico"
# Sintaxis: :[fill][align][width][.precision][type]
# =============================================================================
separador("9. Formato avanzado de F-Strings")

numero = 123.123141241241
pi = 3.14159

# 9.1 Mostrar con 3 decimales (usa .3f)
# Resultado esperado: Número con 3 decimales=123.123
# print(f'Número con 3 decimales={numero:___}')

# 9.2 Más ancho (10 caracteres) y alineado a la derecha con 3 decimales
# Resultado esperado: Más ancho y a la derecha=   123.123
# print(f'Más ancho y a la derecha={numero:___10.3f}')

# 9.3 Relleno con asteriscos (*), alineado derecha (>), ancho 10, 2 decimales
# Resultado esperado: |******3.14|
# print(f"|{pi:___>10.2f}|")


# =============================================================================
# EJERCICIO 10: ANOTACIONES DE TIPO (TYPE HINTS)
# Diapositivas: "Tipado Simple", "Complicando los Tipos"
# =============================================================================
separador("10. Type Hints")

# 10.1 Tipado simple: indica que a es int, b es float, c es list
# a: ___ = 5
# b: ___ = 2.3
# c: ___ = []

# 10.2 Función con tipos: x e y son int, devuelve int
# def sumar(x: ___, y: ___) -> ___:
#     return x + y

# 10.3 Tipos complejos (Python 3.9+)
# m: Una lista que contiene listas de enteros
# m: list[list[___]] = [[1, 2], [3, 4]]

# d: Diccionario con nombres (str) y notas (float)
# d: dict[___, ___] = {"Ana": 9.5, "Beto": 7.0}


# =============================================================================
# EJERCICIO 11: COMENTARIOS Y DOCSTRINGS
# Diapositiva: "Cómo Comentar Código"
# =============================================================================
separador("11. Comentarios")

# 11.1 Comentario de una línea (usa #)
x = 0
x = x + 1  # Incrementamos el contador

# 11.2 Docstring multilinea (usa triple comilla)
# Completa la documentación de esta función:
# def calcular_promedio(lista):
#     ___
#     Esta función calcula el promedio de una lista.
#     Argumentos: una lista de números (int o float).
#     Retorna: el promedio (float).
#     ___
#     pass


# =============================================================================
# EJERCICIO 12: LA FUNCIÓN MAIN Y EL GUARDIÁN
# Diapositivas: "Buenas Prácticas: La función main", "El Guardián"
# =============================================================================
separador("12. Main y __name__")

def main():
    print("¡Soy el programa principal ejecutándose!")

# El guardián: comprueba si este archivo se ejecuta directamente
# o si se está importando como módulo
# if ___ == "___":
#     main()


# =============================================================================
# EJERCICIO 13: CREANDO UNA CLASE (EL MOLDE)
# Diapositivas: "El Nacimiento: __init__", "¿Por Qué el __? (Privacidad)"
# =============================================================================
separador("13. Clases - Constructor y Privacidad")

class Estudiante:
    # El constructor __init__ se ejecuta AUTOMÁTICAMENTE al crear el objeto
    # self significa "YO MISMO" - permite al objeto guardar sus propios datos
    def __init__(self, nombre, nota):
        self.nombre = nombre    # Público: accesible desde fuera
        self.___nota = nota     # TODO: Hazlo PRIVADO con dos guiones bajos

# Creando el objeto (la galleta a partir del molde)
# juan = Estudiante("Juan", 5)
# print(juan.nombre)  # Esto funciona (público)

# PRUEBA: Descomenta la siguiente línea. ¿Da error? ¿Por qué?
# print(juan.__nota)  # Privado - Python no lo encuentra


# =============================================================================
# EJERCICIO 14: MÉTODOS DE UNA CLASE
# Diapositiva: "Añadiendo un Método (Acción)"
# =============================================================================
separador("14. Clases - Métodos")

class Estudiante2:
    def __init__(self, nombre, nota):
        self.__nombre = nombre
        self.__nota = nota

    # DEFINICIÓN: self es OBLIGATORIO como primer parámetro
    def estudiar(self, horas):
        self.__nota += (horas * 0.1)
        print(f"Nueva nota: {self.__nota}")

# LLAMADA: self es AUTOMÁTICO (NO lo pasamos)
# juan = Estudiante2("Juan", 5)
# juan.___(10)  # Completa el nombre del método. Resultado: Nueva nota: 6.0


# =============================================================================
# FIN DEL REPASO EXPRESS
# =============================================================================
print("\n" + "="*60)
print(" ¡Repaso completado! Revisa tus respuestas.")
print("="*60)
