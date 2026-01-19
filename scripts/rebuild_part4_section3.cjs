const fs = require('fs');
const path = require('path');

const learningObjectives = {
  type: "markdown",
  content: {
    ENG: [
      "# Learning objectives",
      "",
      "- You will know what lists are in Python",
      "- You will be able access a specified item within a list",
      "- You will know how to add items to a list, and how to remove them",
      "- You will be familiar with built-in list functions and methods"
    ].join("\n"),
    CAS: [
      "# Objetivos de aprendizaje",
      "",
      "- Sabrás qué son las listas en Python",
      "- Podrás acceder a un elemento específico dentro de una lista",
      "- Sabrás cómo añadir elementos a una lista y cómo eliminarlos",
      "- Te familiarizarás con las funciones y métodos de lista incorporados"
    ].join("\n"),
    EUS: [
      "# Ikas-helburuak",
      "",
      "- Jakingo duzu zer diren zerrendak Python-en",
      "- Zerrenda bateko elementu zehatz batera sartzeko gai izango zara",
      "- Jakingo duzu nola gehitu elementuak zerrenda batera, eta nola kendu",
      "- Zerrenda-funtzio eta metodo integratuak ezagutuko dituzu"
    ].join("\n")
  }
};

const introContent = {
  type: "markdown",
  content: {
    ENG: [
      "Thus far in our programs we have stored data with variables, each bit of data usually having its own named variable. This obviously has some limitations, as it can get cumbersome to define separate variables for everything when there is a lot of data to handle.",
      "",
      "A Python *list* is a collection of values which is accessed via a single variable name. The contents of the list are written within square brackets. The values contained in the list are called *items*, or sometimes *elements*.",
      "",
      "The following command creates a new, empty list",
      "",
      "```python",
      "my_list = []",
      "```",
      "",
      "whereas this command creates a list with five items in it:",
      "",
      "```python",
      "my_list = [7, 2, 2, 5, 2]",
      "```",
      "",
      "## Accessing items in a list",
      "",
      "A single list item can be accessed just like a single character in a string is accessed, with square brackets:",
      "",
      "```python",
      "my_list = [7, 2, 2, 5, 2]",
      "",
      "print(my_list[0])",
      "print(my_list[1])",
      "print(my_list[3])",
      "",
      