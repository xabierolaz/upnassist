"""The file contains an implementation of the Circular Buffer ADT."""


class CircularBuffer:
    """
    The bufer is created using a list to store the items.

    Item insertion and removal is handle by using indices.
    """

    def __init__(self, size):
        self.__items = [None] * size
        self.__enqueue_index = 0
        self.__dequeue_index = -1  # What are the best values for the start?

    def enqueue(self, item):
        """
        Add an element at the back of the queue.

        If the queue is out of space the oldes item will be removed.
        The enqueue index is moved to the next available space.

        Parameters
        ----------
        item : Any
            The item to add.

        Returns
        -------
        None.

        """
        # TODO add here the body of the function enqueue

    def dequeue(self):
        """
        Remove and return the front of the queue.

        The dequeue index is advanced.

        Returns
        -------
        Any
            The element at the front of the queue.

        """
        # TODO add here the body of the function dequeue

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
