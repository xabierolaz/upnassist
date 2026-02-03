"""Contains the code that defines an ordered LinkedList."""

class Node:
    """Helper class for the LinkedList."""

    def __init__(self, data, next=None):
        self.data = data
        self.next = next

class OrderedLinkedList:
    """
    A class that represents an ordered singly linked list.

    As elements are added, they are inserted in the correct position.
    """

    def __init__(self, head=None):
        self.__head = head

    def add(self, item):
        current = self.__head
        prev = None
        while current is not None and current.data < item:
            prev = current
            current = current.next
        new_node = Node(item)
        if prev is None:
            new_node.next = self.__head
            self.__head = new_node
        else:
            new_node.next = current
            prev.next = new_node

    def remove_head(self):
        if self.__head is not None:
            self.__head = self.__head.next

    def remove_tail(self):
        if self.__head is None:
            return
        if self.__head.next is None:
            self.__head = None
        else:
            current = self.__head
            while current.next.next is not None:
                current = current.next
            current.next = None

    def remove_index(self, index: int):
        if self.__head is None:
            return
        if index == 0:
            self.remove_head()
        else:
            current = self.__head
            prev = None
            for _ in range(index):
                prev = current
                current = current.next
            prev.next = current.next

    def remove(self, item):
        if self.__head is None:
            return None
        current = self.__head
        prev = None
        found = False
        while not found and current.next is not None:
            if current.data == item:
                found = True
            else:
                prev = current
                current = current.next
        if found:
            if prev is None:
                self.remove_head()
            else:
                prev.next = current.next

    def size(self) -> int:
        current = self.__head
        counter = 0
        while current is not None:
            counter += 1
            current = current.next
        return counter

    def contains(self, item) -> bool:
        current = self.__head
        while current is not None:
            if current.data == item:
                return True
            current = current.next
        return False

    def get(self, index: int):
        current = self.__head
        for _ in range(index):
            current = current.next
        return current.data

    def __len__(self) -> int:
        return self.size()

    def __contains__(self, item) -> bool:
        return self.contains(item)

    def __str__(self) -> str:
        current = self.__head
        text = ""
        while current is not None:
            text += str(current.data) + " -> "
            current = current.next
        text += "None"
        return text

    def __getitem__(self, key):
        return self.get(key)


def test_numbers():
    print("Testing numbers")
    test_list = OrderedLinkedList()
    print(test_list)
    test_list.add(2)
    print(test_list)
    test_list.add(6)
    print(test_list)
    test_list.add(4)
    print(test_list)
    test_list.add(1)
    print(test_list)
    test_list.add(5)
    print(test_list)


def test_letters():
    print("Testing letters")
    test_list = OrderedLinkedList()
    print(test_list)
    test_list.add("n")
    print(test_list)
    test_list.add("v")
    print(test_list)
    test_list.add("a")
    print(test_list)
    test_list.add("t")
    print(test_list)
    test_list.add("f")
    print(test_list)


def test_words():
    print("Testing letters")
    test_list = OrderedLinkedList()
    print(test_list)
    test_list.add("hello")
    print(test_list)
    test_list.add("today")
    print(test_list)
    test_list.add("aadvark")
    print(test_list)
    test_list.add("Pamplona")
    print(test_list)
    test_list.add("structures")
    print(test_list)


def test():
    test_numbers()
    test_letters()
    test_words()


# This piece of code will only be executed if we run the file directly
# if we import the file into another the tests will not run
if __name__ == "__main__":
    test()