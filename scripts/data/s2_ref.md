## Referencing a variable

A single variable can be referred to many times in a program:

```python
name = input("What is your name? ")

print("Hi, " + name + "!")
print(name + " is quite a nice name.")
```

If the user gives the name Paul Python, this program prints out the following:

```text
What is your name? Paul Python
Hi, Paul Python!
Paul Python is quite a nice name.
```

Let's have a closer look at the way the `print` command is used above. Within the brackets of the command there is both text in quotation marks as well as variable names which refer to input from the user. These have been combined with a `+` operator, which concatenates two strings into a single string.

Strings and variables can be combined quite freely:

```python
name = input("What is your name? ")

print("Hi " + name + "! Let me make sure: your name is " + name + "?")
```

If the user gives the name Ellen Example this prints out:

```text
What is your name? Ellen Example
Hi Ellen Example! Let me make sure: your name is Ellen Example?
```
