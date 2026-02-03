"""
The module contains two implementations of a linked list.

A simple linked list and another where we keep a reference not just to the head
but also to the tail of the list. 
"""


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
        self._head = head

    def add_head(self, item):
        new_node = Node(item, self._head)
        self._head = new_node

    def add_tail(self, item):
        if self._head is None:
            self._head = Node(item)
        else:
            current = self._head
            while current.next is not None:
                current = current.next
            current.next = Node(item)

    def add_after(self, index: int, item):
        if self._head is None:
            self._head = Node(item)
        else:
            current = self._head
            for _ in range(index):
                current = current.next
            new_node = Node(item, current.next)
            current.next = new_node

    def remove_head(self):
        if self._head is not None:
            self._head = self._head.next

    def remove_tail(self):
        if self._head is None:
            return
        if self._head.next is None:
            self._head = None
        else:
            current = self._head
            while current.next.next is not None:
                current = current.next
            current.next = None

    def remove_index(self, index: int):
        if self._head is None:
            return
        if index == 0:
            self.remove_head()
        else:
            current = self._head
            prev = None
            for _ in range(index):
                prev = current
                current = current.next
            prev.next = current.next

    def remove(self, item):
        if self._head is None:
            return None
        current = self._head
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
        current = self._head
        counter = 0
        while current is not None:
            counter += 1
            current = current.next
        return counter

    def contains(self, item) -> bool:
        current = self._head
        while current is not None:
            if current.data == item:
                return True
            current = current.next
        return False

    def get(self, index: int):
        current = self._head
        for _ in range(index):
            current = current.next
        return current.data

    def set(self, index: int, item):
        current = self._head
        for _ in range(index):
            current = current.next
        current.data = item

    def __len__(self) -> int:
        return self.size()

    def __contains__(self, item) -> bool:
        return self.contains(item)

    def __str__(self) -> str:
        current = self._head
        text = ""
        while current is not None:
            text += str(current.data) + " -> "
            current = current.next
        text += "None"
        return text


class HeadTailLinkedList:
    """
    A class that represents a linked list with references to the head and tail.

    The class only has the simplest methods
    """

    def __init__(self, head=None, tail=None):
        self._head = head
        self._tail = tail

    def add_head(self, item):
        new_node = Node(item, self._head)
        self._head = new_node
        if self._tail is None:
            self._tail = self._head

    def add_tail(self, item):
        if self._tail is None:
            self._tail = Node(item)
        else:
            new_node = Node(item)
            self._tail.next = new_node
            self._tail = new_node
        if self._head is None:
            self._head = self._tail

    def add_after(self, index: int, item):
        if self._head is None:
            self._head = Node(item)
        else:
            current = self._head
            for _ in range(index):
                current = current.next
            new_node = Node(item, current.next)
            current.next = new_node
            if new_node.next is None:
                self._tail = new_node
        if self._tail is None:
            self._tail = self._head


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
