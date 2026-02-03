
class Node:
    """
    Represents a link in the chain.

    Stores the data itself and the reference to the next Node in the chain
    """

    def __init__(self, data, next=None):
        self.data = data
        self.next = next


class LinkedList:
    """
    We use this class to construct out linked list of Nodes.

    We want the behaviour of the class to be as similar as possible
    to the built in list structure.
    """

    def __init__(self):
        self._head = None

    def add_head(self, data):
        """
        Insert a new element at the head of the list.

        We create a new Node with the data and it will become the new head of the list.

        Parameters
        ----------
        data :
            The data we want to add.

        Returns
        -------
        None.

        """
        to_insert = Node(data)
        to_insert.next = self._head
        self._head = to_insert

    def add_tail(self, data):
        """
        Insert a new element at the tail of the list.

        If the list is empty, the new Node will become the head.
        Otherwise we have to traverse the whole list until we find the last element
        and set its next atribute to the new Node.

        Parameters
        ----------
        data :
            The data we want to add.

        Returns
        -------
        None.

        """
        to_insert = Node(data)
        if self._head is None:
            self._head = to_insert
        else:
            current = self._head
            while current.next is not None:
                current = current.next
            current.next = to_insert

    def print_list(self):
        """Pretty prints the list."""
        current = self._head
        while current is not None:
            print(current.data, end=" -> ")
            current = current.next
        print(None)

    def __str__(self) -> str:
        """
        Create a string representation of the list to be able to use print() with the object.

        Returns
        -------
        str
            String representation of the list.

        """
        to_return = ""
        current = self._head
        while current is not None:
            to_return += current.data + " -> "
            current = current.next
        to_return += str(None)
        return to_return


# Testing the class

# Adding elements at the tail of the list
# The print_list() method will show how the list changes
print("Add tail")
lst = LinkedList()
lst.print_list()
lst.add_tail("first")
lst.print_list()
lst.add_tail("second")
lst.print_list()
lst.add_tail("third")
lst.print_list()

print("-------------")
# Adding elements at the head
# As before, we use the print statements to see how the list changes
# Instead of using the print_list() method, we can call print directly thanks to __repr__()
print("Add head")
lst = LinkedList()
print(lst)
lst.add_head("first")
print(lst)
lst.add_head("second")
print(lst)
lst.add_head("third")
print(lst)
