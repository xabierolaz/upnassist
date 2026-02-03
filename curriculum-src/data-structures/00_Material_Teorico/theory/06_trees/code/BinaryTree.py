"""
Basic binary tree data structure.
"""


class BinaryTreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert_left(self, value):
        if self.left is None:
            self.left = BinaryTreeNode(value)
        else:
            self.left.insert_left(value)

    def insert_right(self, value):
        if self.right is None:
            self.right = BinaryTreeNode(value)
        else:
            self.right.insert_right(value)

    def get_height(self) -> int:
        if self.left is None:
            left_height = 0
        else:
            left_height = self.left.get_height()
        if self.right is None:
            right_height = 0
        else:
            right_height = self.right.get_height()
        if left_height > right_height:
            return left_height + 1
        else:
            return right_height + 1

    def get_weight(self) -> int:
        weight = 1
        if self.left is not None:
            weight += self.left.get_weight()
        if self.right is not None:
            weight += self.right.get_weight()
        return weight

    def print_pre_order(self):
        # print value
        print(self.value)
        # print left branch
        if self.left is not None:
            self.left.print_pre_order()
        # print right branch
        if self.right is not None:
            self.right.print_pre_order()

    def print_in_order(self):
        # print left branch
        if self.left is not None:
            self.left.print_in_order()
        # print value
        print(self.value)
        # print right branch
        if self.right is not None:
            self.right.print_in_order()

    def print_post_order(self):
        # print left branch
        if self.left is not None:
            self.left.print_post_order()
        # print right branch
        if self.right is not None:
            self.right.print_post_order()
        # print value
        print(self.value)


def test():
    root = BinaryTreeNode(42)
    # left branch
    root.insert_left(46)
    root.insert_left(985)
    root.left.insert_right(32)
    root.left.right.insert_left(68)
    root.left.right.insert_right(3)
    # right branch
    root.insert_right(9)
    root.insert_right(78)
    root.right.insert_left(87)
    root.right.left.insert_right(23)

    print(f"Height: {root.get_height()}, weight: {root.get_weight()}")

    print("Testing traversal")
    print("Pre-prder")
    root.print_pre_order()
    print("In-prder")
    root.print_in_order()
    print("Post-prder")
    root.print_post_order()


if __name__ == "__main__":
    test()
