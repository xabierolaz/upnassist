"""The file contains an implementation of the Double-ended queue ADT."""


class Deque:
    """
    The queue is created using a list to store the items.

    We will access the queue from both sides, left and right.
    """

    def __init__(self):
        self.__items = []

    def enqueue_left(self, item):
        """
        Add an element at the left of the queue.

        The left side is the element at index 0 on the list.

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
        Add an element at the right of the queue.

        The right side is the element at the end of the list.

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
        Remove and return the left of the queue.

        The left side is the element at index 0 on the list.

        Returns
        -------
        Any
            The element at the left of the queue.

        """
        return self.__items.pop(0)

    def dequeue_right(self):
        """
        Remove and return the right of the queue.

        We consired the right of the queue the last element of the list.

        Returns
        -------
        Any
            The element at the right of the queue.

        """
        return self.__items.pop()

    def peek_left(self):
        """
        Get the left element of the queue.

        The queue is not modified in any way.

        Returns
        -------
        Any
            The left element of the queue.

        """
        return self.__items[0]

    def peek_right(self):
        """
        Get the right element of the queue.

        The queue is not modified in any way.

        Returns
        -------
        Any
            The right element of the queue.

        """
        return self.__items[-1]

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
    q = Deque()
    print(q)
    q.enqueue_left("Hello")
    print(q)
    q.enqueue_left('dog')
    print(q)
    q.enqueue_right('3')
    print(q)
    e = q.dequeue_left()
    # What element will we get?
    print(e)
    print(q)
