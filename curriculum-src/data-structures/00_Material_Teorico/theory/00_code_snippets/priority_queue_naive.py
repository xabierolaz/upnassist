"""The file contains an implementation of the Priority Queue ADT."""


class PriorityQueue:
    """
    The queue is created using a list to store the items.

    It will work as a normal queue allowing insertion from one side and
    removal from the other. The items will be stored on a tuple along the
    the priority given.
    """

    def __init__(self):
        self.__items = []

    def enqueue_with_priority(self, priority, item):
        """
        Add an element at the end of the queue.

        The end is the element at index 0 on the list.
        The priority will have a numeric value where lower values
        have higher priorities.
        The element is stored in a tuple with its priority.

        Parameters
        ----------
        priority : int
            The priority given to the item in the queue.

        item : Any
            The item to add.

        Returns
        -------
        None.

        """
        to_store = (priority, item)
        self.__items.insert(0, to_store)

    def dequeue(self):
        """
        Remove and return the element with the lowest priority in the queue.

        The element that is removed is the oldest one with the lowest priority.
        The oldest items will be at the end of the list

        Returns
        -------
        Any
            The element at the with the lowest priority of the queue.

        """
        p_min, item_min = self.__items[0]
        index_min = 0
        for index, value in enumerate(self.__items):
            p, item = value  # Extract the priority and item for each element
            if p <= p_min:   # Fin dthe leftmost item with the lowest priority
                p_min = p
                item_min = item
                index_min = index
        del self.__items[index_min]
        return item_min

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
    q = PriorityQueue()
    print(q)
    q.enqueue_with_priority(3, "Hello")
    print(q)
    q.enqueue_with_priority(1, 'dog')
    print(q)
    q.enqueue_with_priority(1, '3')
    print(q)
    e = q.dequeue()
    # What element will we get?
    print(e)
    print(q)
