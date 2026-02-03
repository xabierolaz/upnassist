"""
Example file that contains functions on how to work with JSON documents.

To use any function we have to first import the json library.
"""
import json


# We already have a file that contains some information in JSON format
# We can load the file by first opening it to be able to read it
# The function json.load() will parse the file and return a dict
with open("example.json") as file:
    data = json.load(file)

print(f"The type of the variable: {type(data)}")

# Once we have loaded the data we can access it as a normal dictionary
print(data)
print(data["earth"])
print(data["earth"]["animals"])
interesting = data["earth"]["animals"]

kind = []
animals = []

# We know that interesting contais another dictionary
# We can iterate over all the elements and extract whatever we want
for key, val in interesting.items():
    print(key, "==>", val)
    kind.append(key)
    animals.append(val)

print(kind)
print(animals)


# If we have made any modification to the dictionary we can store them
# In this case we have to open the file in write mode
# The function is called json.dump(), and takes the data to store and the file
with open("example.json", "w") as file:
    json.dump(data, file)
