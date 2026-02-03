"""The file contains an implementation of the Stack ADT."""


class Stack:
    """The stack is created by using a list to store the items."""

    def __init__(self):
        self.__items = []

    def push(self, item):
        """
        Add an element to the top of the stack.

        Since we are using a list as a backend we will simply append to that.

        Parameters
        ----------
        item : Any
            The item to add.

        Returns
        -------
        None.

        """
        self.__items.append(item)

    def pop(self):
        """
        Remove and return the top element of the stack.

        We can directly use the function with the same name from the list.

        Returns
        -------
        Any
            The top element of the stack.

        """
        return self.__items.pop()

    def peek(self):
        """
        Get the top element of the stack.

        The stack is not modified in any way.

        Returns
        -------
        Any
            The top element of the stack.

        """
        return self.__items[-1]

    def is_empty(self):
        """
        Test if the stack is empty.

        We can use the lenght of the list to know if there are any elements.

        Returns
        -------
        bool
            True if the stack is empty, False otherwise.

        """
        return len(self.__items) == 0

    def size(self):
        """
        Get the number of elements in the stack.

        We can directly use the length of the list.

        Returns
        -------
        int
            The length of the stack.

        """
        return len(self.__items)

    def __str__(self):
        """
        Allow the use of print with the stack object.

        Returns
        -------
        str
            String representation of the stack.

        """
        return f"Stacked elements: {self.__items}"


if __name__ == "__main__":
    s = Stack()
    print(s.is_empty())
    s.push(4)
    s.push('dog')
    print(s.peek())
    s.push(True)
    print(s.size())
    print(s.is_empty())
    s.push(8.4)
    print(s.pop())
    print(s.pop())
    print(s.size())
    print(s)

