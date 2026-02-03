"""
Palindrome checker.

This file contains a program that will check if a string entered from the
console or read from a file is a palindrome.

@author: ugaitz.amozarrain
"""

import os
from collections import deque
from colorama import Fore, Back, Style
import easygui


def clean_text(text: str) -> str:
    """
    Modify accented letters and lowercase the text.

    Parameters
    ----------
    text : str
        Input text.

    Returns
    -------
    text
        Sanitized text.

    """
    accents = {"á": "a", "é": "e", "í": "i", "ó": "o", "ú": "u"}
    for key in accents.keys():
        text = text.replace(key, accents[key])
    return text.lower()


def test_palindrome_word(word: str) -> bool:
    """
    Test if a word is a palindrome.

    Parameters
    ----------
    word : str
        The word to test.

    Returns
    -------
    palindrome : TYPE
        True if the word is a palindrome.
    """
    queue = deque(word)
    palindrome = True
    while len(queue) >= 2 and palindrome:
        if queue.pop() != queue.popleft():
            palindrome = False
    return palindrome


def test_palindrome_string(text: str) -> (bool, int, int):
    """
    Test if a string is a palindrome.

    Parameters
    ----------
    text : str
        The text to check.

    Returns
    -------
    palindrome : bool
        True if the string is a palindrome.
    left_index : int
        If not palindrome the left point it fails the check.
    right_index : int
        If not palindrome the left right it fails the check.

    """
    text = clean_text(text)  # this will remove the accents and lowercase the text
    queue = deque()
    for index, letter in enumerate(text):
        if letter.isalnum():
            # we are using the deque from collections,
            # it has different names for its functions
            queue.append((index, letter))  # we add a tuple of 2 elements to the queue
    palindrome = True
    # prepare index variables to return
    left_index = -1
    right_index = -1
    while len(queue) >= 2 and palindrome:
        index_left, left = queue.popleft()  # we enqueued a tuple, so now the pop return that tuple
        index_right, right = queue.pop()    # extrat the 2 variables from the tuple
        if left != right:
            palindrome = False
            left_index = index_left
            right_index = index_right
    return palindrome, left_index, right_index


def draw_string(text: str, palindrome: bool, left_index: int, right_index: int):
    """
    Print a palindrome string prettily.

    If the text is not a palindrome it will show where it fails

    Parameters
    ----------
    text : str
        The text to print.
    palindrome : bool
        The palindrome condition.
    left_index : int
        If not palindrome the left point it fails the check.
    right_index : int
        If not palindrome the right point it fails the check.

    Returns
    -------
    None.

    """
    if palindrome:
        print(Fore.GREEN + Back.WHITE + text + Back.RESET)
        print(Fore.GREEN + "The text is a palindrome")
        print(Style.RESET_ALL)
    else:
        for index, letter in enumerate(text):
            if index < left_index or index > right_index:
                print(Fore.GREEN + Back.WHITE + letter, end="")
            elif index in (left_index, right_index):
                print(Fore.RED + Back.WHITE + letter, end="")
            else:
                print(Fore.MAGENTA + Back.WHITE + letter, end="")
            print(Style.RESET_ALL, end="")
        print()
        print(Fore.RED, "The text is " + Back.CYAN + "NOT" + Back.RESET + " a palindrome")
        print(Style.RESET_ALL)


def check_with_console():
    """
    Ask the user to enter a string in the console and check if it is a palindrome.

    Returns
    -------
    None.

    """
    text = input("Enter palindrome to test: ")
    palindrome, left, right = test_palindrome_string(text)
    draw_string(text, palindrome, left, right)


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


def check_with_file():
    """
    Ask the user to select a file and check if the text it contains is a palindrome.

    Returns
    -------
    None.

    """
    file = easygui.fileopenbox(msg="Open a file", title="Open a file")
    if file is not None:
        text = file_to_string(file)
        if text is not None:
            palindrome, left, right = test_palindrome_string(text)
            draw_string(text, palindrome, left, right)


def show_menu():
    """
    Show the main menu and ask the user for input.

    Returns
    -------
    str.
        The element chosen by the user

    """
    print()
    print(Fore.BLUE + Back.GREEN + "PALINDROME CHECKER")
    print(Style.RESET_ALL)
    print("***********************************")
    print("1.-> Input string on console")
    print("2.-> Choose a file")
    print("3.-> Exit")
    print("***********************************")
    return input("Choose an option: ")



def main():
    """
    Start of the program.

    Returns
    -------
    None.

    """
    option = ""
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
