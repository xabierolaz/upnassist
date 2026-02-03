"""The file contains a class representing a singly Linked List."""


class Node:
    """Helper class for the LinkedList."""

    def __init__(self, data, next=None):
        self.data = data
        self.next = next


class LinkedList:
    """
    A class that represents a singly linked list.

    The class allows for usage similar to a list
    but is missing error handling in most of the methods
    """

    def __init__(self, head=None):
        self.__head = head

    def add_head(self, item):
        new_node = Node(item, self.__head)
        self.__head = new_node

    def add_tail(self, item):
        if self.__head is None:
            self.__head = Node(item)
        else:
            current = self.__head
            while current.next is not None:
                current = current.next
            current.next = Node(item)

    def add_after(self, index: int, item):
        current = self.__head
        for _ in range(index):
            current = current.next
        new_node = Node(item, current.next)
        current.next = new_node

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

    def set(self, index: int, item):
        current = self.__head
        for _ in range(index):
            current = current.next
        current.data = item

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


def test():
    test_list = LinkedList()
    test_list.add_head(1)
    test_list.add_head(0)
    test_list.add_tail(2)
    print("Elements: ", test_list)
    test_list.add_after(1, 1.1)
    test_list.add_after(3, 3)
    test_list.add_after(3, 2.5)
    print("Elements: ", test_list)
    print("element at 4: ", test_list.get(4))
    test_list.set(4, "changed")
    print("Elements: ", test_list)
    print("list size: ", test_list.size())
    print("list size: ", len(test_list))
    test_list.remove_index(4)
    print("Elements: ", test_list)
    test_list.remove_head()
    print("Elements: ", test_list)
    test_list.remove_tail()
    print("Elements: ", test_list)
    print("list contains 1.1: ", test_list.contains(1.1))
    print("list contains 1.1: ", 1.1 in test_list)


if __name__ == "__main__":
    test()
