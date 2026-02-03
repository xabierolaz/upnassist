"""
Examen final Estructura de Datos.

@autor: ESCRIBE AQUI TU NOMBRE
"""

import os
from Queue import Queue
from BinaryTree import BinaryTree, TREE_1, TREE_2, TREE_SEARCH


# %% Ejercicio 1 -> 1 punto
# Comprobar que un fichero contiene un arbol valido
# solo una linea
# solo digitos y #
# Numero de elemento impar
# Acaba con 2 #

def comprobar_fichero(ruta: str) -> bool:
    with open(ruta, "r") as file:
        contents = file.readlines()
    if len(contents) > 1:
        return False
    elements = contents[0].split()
    for e in elements:
        if not e.isdigit():
            if e != "#":
                return False
    if len(elements) % 2 != 1:
        return False
    if not (elements[-1] == elements[-1] == "#"):
        return False
    return True


# %% Ejercicio 2 -> 2 puntos
# reconstruir el arbol desde el fichero
# Se les da unas indicaciones para hacerlo

def reconstruir_arbol(cola: Queue) -> BinaryTree:
    element = cola.dequeue()
    if element == "#":
        return None
    node = BinaryTree(int(element))
    node.left = reconstruir_arbol(cola)
    node.right = reconstruir_arbol(cola)
    return node


def leer_arbol(ruta: str) -> BinaryTree:
    with open(ruta, "r") as file:
        contents = file.readline()
    q = Queue()
    for e in contents.split():
        q.enqueue(e)
    root = reconstruir_arbol(q)
    return root


# %% Ejercicio 3 -> 1 punto
# Comparar que 2 arboles son iguales

def comparar_arboles(raiz_1: BinaryTree, raiz_2: BinaryTree) -> bool:
    if raiz_1 is None and raiz_2 is None:
        return True
    elif raiz_1 is None or raiz_2 is None:
        return False
    elif raiz_1.value != raiz_2.value:
        return False
    return (comparar_arboles(raiz_1.left, raiz_2.left)
            and comparar_arboles(raiz_1.right, raiz_2.right))


# %% Ejercicio 4 -> 2 puntos
# Validar que un arbol cumple como arbol binario de busqueda
# Tienen que saber ellos que es un arbol binario de busqueda

# Este ejercicio se puede hacer de 2 maneras, usando in-order y comprobar que
# los numeros esten ordenados o algo mas complicado mirando por pasos

def validar_arbol_busqueda(raiz: BinaryTree) -> bool:
    if raiz.left is not None:
        if raiz.value < raiz.left.value:
            return False
        left_validated = validar_arbol_busqueda(raiz.left)
    else:
        left_validated = True
    if raiz.right is not None:
        if raiz.value >= raiz.right.value:
            return False
        right_validated = validar_arbol_busqueda(raiz.right)
    else:
        right_validated = True
    return left_validated and right_validated


# %% Ejercicio 5 -> 1 punto
# crear una funcion de busqueda para BST

def contiene_BST(raiz: BinaryTree, valor: int) -> bool:
    if raiz.value == valor:
        return True
    if valor <= raiz.value:
        if raiz.left is not None:
            return contiene_BST(raiz.left, valor)
        else:
            return False
    else:
        if raiz.right is not None:
            return contiene_BST(raiz.right, valor)
        else:
            return False




# %% Ejercicio 6 -> 2 puntos
# crear una funcion de busqueda para un arbol cualquiera
def contiene(raiz: BinaryTree, valor: int) -> bool:
    if raiz.value == valor:
        return True
    contains_left = False
    contains_right = False
    if raiz.left is not None:
        contains_left = contiene(raiz.left, valor)
    if raiz.right is not None:
        contains_right = contiene(raiz.right, valor)
    return contains_left or contains_right


# %% Ejercicio 7 -> 1 punto
# Discutir la complejidad computacional de la busqueda en un arbol cualquiera
# o en un BST. Que escriban algo y razonen sus comentarios usando codigo de
# los ejercicios 5 y 6









