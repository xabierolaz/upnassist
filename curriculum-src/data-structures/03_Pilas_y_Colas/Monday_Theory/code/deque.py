"""The file contains an implementation of the Deque ADT."""


class Deque():
    """
    A naive implementation of the Deque using a list to store items.

    We consider the start of the list as the left and the end as the right.
    """

    def __init__(self):
        self.__items = []

    def enqueue_left(self, item):
        """
        Add a new item at the left of the queue.

        Parameters
        ----------
        item : Any
            The item to add.

        Returns
        -------
        None.

        """
        self.__items.insert(0, item)

    def enqueue_right(self, item):
        """
        Add a new item at the right of the queue.

        Parameters
        ----------
        item : Any
            The item to add.

        Returns
        -------
        None.

        """
        self.__items.append(item)

    def dequeue_left(self):
        """
        Remove and return an item from the left of the queue.

        Returns
        -------
        Any
            The first item found from the left.

        """
        return self.__items.pop(0)

    def dequeue_right(self):
        """
        Remove and return an item from the right of the queue.

        Returns
        -------
        Any
            The first item found from the right.

        """
        return self.__items.pop()

    def peek_left(self):
        """
        Get the leftmost element of the queue without removing it.

        Returns
        -------
        Any
            The first item found from the left.

        """
        return self.__items[0]

    def peek_right(self):
        """
        Get the rightmost element of the queue without removing it.

        Returns
        -------
        Any
            The first item found from the right.
        """
        return self.__items[-1]

    def is_empty(self):
        """
        Test if the queue is empty.

        Returns
        -------
        bool
            True if the queue is empty, False otherwise..

        """
        return len(self.__items) == 0

    def size(self):
        """
        Get the number of elements in the queue.

        Returns
        -------
        int
            The length of the queue.

        """
        return len(self.__items)

    def __str__(self):
        """
        Allow the use of print with the Deque object.

        Returns
        -------
        str
            String representation of the queue.

        """
        return f"Queued elements: {self.__items}"
