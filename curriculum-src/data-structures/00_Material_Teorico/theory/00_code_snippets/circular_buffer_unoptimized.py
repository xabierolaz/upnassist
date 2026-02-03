"""The file contains an implementation of the Circular Buffer ADT."""


class CircularBuffer:
    """
    The bufer is created using a list to store the items.

    Items are added at the end of the list, and removed from the front.
    """

    def __init__(self, size):
        self.__items = []
        self.__size = size

    def enqueue(self, item):
        """
        Add an element at the back of the queue.

        If the queue is out of space the oldes item will be removed.

        Parameters
        ----------
        item : Any
            The item to add.

        Returns
        -------
        None.

        """
        if len(self.__items) == self.__size:
            self.dequeue()
        self.__items.append(item)

    def dequeue(self):
        """
        Remove and return the front of the queue.

        We consired the front of the queue the first element of the list.

        Returns
        -------
        Any
            The element at the front of the queue.

        """
        return self.__items.pop(0)

    def peek(self):
        """
        Get the front element of the queue.

        The queue is not modified in any way.

        Returns
        -------
        Any
            The front element of the queue.

        """
        return self.__items[0]

    def is_empty(self):
        """
        Test if the queue is empty.

        We can use the lenght of the list to know if there are any elements.

        Returns
        -------
        bool
            True if the queue is empty, False otherwise.

        """
        return len(self.__items) == 0

    def size(self):
        """
        Get the number of elements in the queue.

        We can directly use the length of the list.

        Returns
        -------
        int
            The length of the queue.

        """
        return len(self.__items)

    def __str__(self):
        """
        Allow the use of print with the queue object.

        Returns
        -------
        str
            String representation of the queue.

        """
        return f"Queued elements: {self.__items}"


if __name__ == "__main__":
    q = CircularBuffer(5)
    for i in range(10):
        q.enqueue(i)
        print(q)
