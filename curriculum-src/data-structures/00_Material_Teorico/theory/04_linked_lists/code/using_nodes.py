
class Node:
    """
    Represents a link in the chain.

    Stores the data itself and the reference to the next Node in the chain
    """

    def __init__(self, data):
        self.data = data
        self.next = None


# Lets create a few nodes
n1 = Node("hi")

n2 = Node("world")

# In order to link them we use the next atribute
n1.next = n2

n3 = Node("!")

n2.next = n3

# If we want to print the Nodes in the chain we start from the first one
current = n1
# Traverse the chain until we reach a node that is None, the chain has finished
while current is not None:
    print(current.data, end=" ")
    current = current.next

# Now we want to add a new Node at the end of the chain
n4 = Node("!!!!")

# As before we start at the beggining
current = n1
# Instead of reaching the end we need the reference of the last element of the chain
# The last element will have its next atribute set to none
while current.next is not None:
    current = current.next
# Now that current is set to the last element we define its next value as the node to add
current.next = n4

# We can print the chain again to check
current = n1
while current is not None:
    print(current.data, end="")
    current = current.next


lst = list()
lst.append("ads")

