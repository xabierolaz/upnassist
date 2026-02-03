"""
Module containing the code for the parentheses lab proyect.

Provides functions to check if parentheses on a string are balanced, i.e.
they are correctly closed.
It can check normal parentheses, curly brackets and square brackets.
"""

# Python imports
import os
import easygui
# Our stack module
import stack


# This dictionary stores the parentheses and their corresponding closing characters
PARENTHESES = {"(": ")", "{": "}", "[": "]"}


def check_balanced(text: str) -> bool:
    """
    Test if a string has balanced parentheses.

    Parameters
    ----------
    text : str
        Text to check.

    Returns
    -------
    bool
        True if balanced.

    """
    s = stack.Stack()
    # we will use this flag to check if the stack is empty when it should not be
    empty_flag = False
    for character in text:
        if character in PARENTHESES.keys():  # if opening push to stack
            s.push(character)
        elif character in PARENTHESES.values():  # if closing check in stack
            if s.is_empty():  # if with a closing parenthesis there is no openening one, it cannot be balanced
                empty_flag = True
            elif PARENTHESES[s.peek()] == character:
                s.pop()
    if s.is_empty() and not empty_flag:
        return True
    else:
        return False


def check_balanced_alternative(text: str) -> bool:
    """
    Alternative function for testing if a string has balanced parentheses.

    The function will return directly if not balanced.

    Parameters
    ----------
    text : str
        Text to check.

    Returns
    -------
    bool
        True if balanced.

    """
    s = stack.Stack()
    for character in text:
        if character in PARENTHESES.keys():
            s.push(character)
        elif character in PARENTHESES.values():
            if s.is_empty():
                return False
            matching = s.pop()
            if PARENTHESES[matching] != character:
                return False
    if s.is_empty():
        return True
    else:
        return False


def check_with_console() -> None:
    text = input("Please enter the text to check: ")
    balanced = check_balanced(text)
    if balanced:
        print("Balanced")
    else:
        print("Not balanced")


def file_to_string(file: str) -> str:
    """
    Read a text file an return a string containing the whole file.

    Parameters
    ----------
    file : str
        A file path.

    Returns
    -------
    text : str
        The contents of the file or None if file is too large.

    """
    if os.path.getsize(file) < 100000:
        with open(file, "r") as f:
            text = f.read()
    else:
        print("The file is too large, please choose a smaller one")
        text = None
    return text


def check_with_file() -> None:
    file = easygui.fileopenbox(msg="Open a file", title="Open a file")
    if file is not None:
        text = file_to_string(file)
        if text is not None:
            balanced = check_balanced(text)
            if balanced:
                print("Balanced")
            else:
                print("Not balanced")


def show_menu() -> int:
    print()
    print("***********************************")
    print("1.-> Check parenthesis balancing (enter text on screen)")
    print("2.-> Check balance of parentheses (select file)")
    print("3.-> Exit")
    print("***********************************")
    return input("Choose an option: ")



def main():
    """
    Main function for the file, the execution will start here.

    Returns
    -------
    None.

    """
    option = "0"
    while option != "3":
        option = show_menu()
        if option == "1":
            check_with_console()
        elif option == "2":
            check_with_file()
        elif option == "3":
            print("Exiting....")
        else:
            print("Choose one of the options shown")
            print()


if __name__ == "__main__":
    main()
