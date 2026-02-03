"""The file contains an implementation of the Queue ADT."""


class Queue:
    """
    The queue is created using a list to store the items.

    We will supose that the end of the list is the front of the queue.
    """

    def __init__(self):
        self.__items = []

    def enqueue(self, item):
        """
        Add an element at the back of the queue.

        We consider the first slot of the list as its rear.

        Parameters
        ----------
        item : Any
            The item to add.

        Returns
        -------
        None.

        """
        self.__items.insert(0, item)

    def dequeue(self):
        """
        Remove and return the front of the queue.

        We consired the front of the queue the last element of the list.

        Returns
        -------
        Any
            The element at the front of the queue.

        """
        return self.__items.pop()

    def peek(self):
        """
        Get the front element of the queue.

        The queue is not modified in any way.

        Returns
        -------
        Any
            The front element of the queue.

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
    q = Queue()
    print(q)
    q.enqueue("Hello")
    print(q)
    q.enqueue('dog')
    print(q)
    q.enqueue('3')
    print(q)
    e = q.dequeue()
    # What element will we get?
    print(e)
    print(q)
