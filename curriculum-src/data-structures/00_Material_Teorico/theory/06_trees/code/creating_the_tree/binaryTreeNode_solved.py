from stack import Stack


class BinaryTreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert_left(self, value) -> None:
        if self.left is None:
            self.left = BinaryTreeNode(value)
        else:
            self.left.insert_left(value)

    def insert_right(self, value) -> None:
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
        return max(left_height, right_height) + 1

    def get_weight(self) -> int:
        weight = 1
        if self.left is not None:
            weight += self.left.get_weight()
        if self.right is not None:
            weight += self.right.get_weight()
        return weight

    def print_pre_order(self) -> None:
        # print value
        print(self.value)
        # print left branch
        if self.left is not None:
            self.left.print_pre_order()
        # print right branch
        if self.right is not None:
            self.right.print_pre_order()

    def print_in_order(self) -> None:
        # print left branch
        if self.left is not None:
            self.left.print_in_order()
        # print value
        print(self.value)
        # print right branch
        if self.right is not None:
            self.right.print_in_order()

    def print_post_order(self) -> None:
        # print left branch
        if self.left is not None:
            self.left.print_post_order()
        # print right branch
        if self.right is not None:
            self.right.print_post_order()
        # print value
        print(self.value)

    def convert_list_pre_order(self) -> list:
        lst_left = []
        lst_right = []
        if self.left is not None:
            lst_left = self.left.convert_list_pre_order()
        if self.right is not None:
            lst_right = self.right.convert_list_pre_order()
        return [self.value] + lst_left + lst_right

    def convert_list_in_order(self) -> list:
        lst_left = []
        lst_right = []
        if self.left is not None:
            lst_left = self.left.convert_list_in_order()
        if self.right is not None:
            lst_right = self.right.convert_list_in_order()
        return lst_left + [self.value] + lst_right

    def convert_list_post_order(self) -> list:
        lst_left = []
        lst_right = []
        if self.left is not None:
            lst_left = self.left.convert_list_post_order()
        if self.right is not None:
            lst_right = self.right.convert_list_post_order()
        return lst_left + lst_right + [self.value]
        
    def iterative_list_pre_order(self) -> list:
        s = Stack()
        s.push(self)
        output_list = []
        while not s.is_empty():
            current = s.pop()
            output_list.append(current.value)
            if current.right is not None:
                s.push(current.right)
            if current.left is not None:
                s.push(current.left)
        return output_list

    def iterative_list_in_order(self) -> list:
        s = Stack()
        current = self
        output_list = []
        while not s.is_empty() or current is not None:
            while current is not None:
                s.push(current)
                current = current.left
            current = s.pop()
            output_list.append(current.value)
            current = current.right
        return output_list

    def iterative_list_post_order(self) -> list:
        s1 = Stack()
        s1.push(self)
        s2 = Stack()
        output_list = []
        while not s1.is_empty():
            current = s1.pop()
            s2.push(current)
            if current.left is not None:
                s1.push(current.left)
            if current.right is not None:
                s1.push(current.right)
        while not s2.is_empty():
            current = s2.pop()
            output_list.append(current.value)
        return output_list


def create_tree() -> BinaryTreeNode:
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
    return root


def test_traversal(tree: BinaryTreeNode) -> None:
    print("Testing traversal")
    print("Pre-order")
    tree.print_pre_order()
    print("In-order")
    tree.print_in_order()
    print("Post-order")
    tree.print_post_order()


def test_conversion(tree: BinaryTreeNode) -> None:
    print("Testing conversion to list")
    print("Pre-order")
    lst = tree.convert_list_pre_order()
    print(lst)
    print("In-order")
    lst = tree.convert_list_in_order()
    print(lst)
    print("Post-order")
    lst = tree.convert_list_post_order()
    print(lst)


def test_iterative_conversion(tree: BinaryTreeNode) -> None:
    print("Testing iterative conversion to list")
    print("Pre-order")
    lst = tree.iterative_list_pre_order()
    print(lst)
    print("In-order")
    lst = tree.iterative_list_in_order()
    print(lst)
    print("Post-order")
    lst = tree.iterative_list_post_order()
    print(lst)


def main():
    tree = create_tree()
    print(f"Height: {tree.get_height()}, weight: {tree.get_weight()}")
    test_traversal(tree)
    test_conversion(tree)
    test_iterative_conversion(tree)


if __name__ == "__main__":
    main()
