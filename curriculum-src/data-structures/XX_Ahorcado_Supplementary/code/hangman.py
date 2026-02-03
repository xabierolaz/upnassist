"""
The hangman game

This file contains the code to launch the hangman game.
It will need a helpers.py file in the same folder with the functions to read
and write json files.

@author: ugaitz.amozarrain
"""

import os
import sys
import random
import helpers

# Global variable for the name of the words file name
WORDS_FILE = "words.json"

EXAMPLE_JSON = {
    "transportation": [
        "scooter",
        "bicycle",
        "airplane"
    ],
    "food": [
        "chicken",
        "pasta",
        "porridge",
    ],
}

# The various states of the hanged man
HANGMAN_STATES = ["""
____
|/   |
|   
|    
|    
|    
|
|_____
""",
                  """
 ____
|/   |
|   (_)
|
|
|
|
|_____
""",
                  """
 ____
|/   |
|   (_)
|    |
|    |
|
|
|_____
""",
                  """
 ____
|/   |
|   (_)
|   \\|
|    |
|
|
|_____
""",
                  """
 ____
|/   |
|   (_)
|   \\|/
|    |
|
|
|_____
""",
                  """
 ____
|/   |
|   (_)
|   \\|/
|    |
|   /
|
|_____
""",
                  """
 ____
|/   |
|   (_)
|   \\|/
|    |
|   / \
|
|_____
"""]


WIN_STR = """


____    ____  ______    __    __     ____    __    ____  ______   .__   __. 
\\   \\  /   / /  __  \\  |  |  |  |    \\   \\  /  \\  /   / /  __  \\  |  \\ |  | 
 \\   \\/   / |  |  |  | |  |  |  |     \\   \\/    \\/   / |  |  |  | |   \\|  | 
  \\_    _/  |  |  |  | |  |  |  |      \\            /  |  |  |  | |  . `  | 
    |  |    |  `--'  | |  `--'  |       \\    /\\    /   |  `--'  | |  |\\   | 
    |__|     \\______/   \\______/         \\__/  \\__/     \\______/  |__| \\__| 
                                                                            


"""


def main_menu() -> int:
    helpers.clear()
    print("""
    ┌────────────────────────────────────────────────────────────────────────┐
    │                                                                        │
    │   Welcome to the Hangman game                                          │
    │                                                                        │
    │   Please choose one of the following options:                          │
    │                                                                        │
    │     1.- Modify words                                                   │
    │     2.- Play                                                           │
    │     3.- Exit                                                           │
    │                                                                        │
    └────────────────────────────────────────────────────────────────────────┘
    """)
    choice = input("\tYou choose: ")
    return choice


def modify_words_menu() -> int:
    helpers.clear()
    print("""
    ┌────────────────────────────────────────────────────────────────────────┐
    │                                                                        │
    │   Modify words                                                         │
    │                                                                        │
    │   Please choose one of the following options:                          │
    │                                                                        │
    │   1.- Add category                                                     │
    │   2.- Modify category                                                  │
    │   3.- Delete category                                                  │
    │   4.- Return to main menu                                              │
    │                                                                        │
    └────────────────────────────────────────────────────────────────────────┘
    """)
    choice = input("\tYou choose: ")
    return choice


def add_category(words: dict):
    helpers.clear()
    print("Categories found on the file: ")
    print()
    print(*words.keys(), sep=", ")
    print()
    new_category = input("Please enter the new category name: ")
    if new_category not in words.keys():
        words[new_category] = []
        helpers.write_json(words, WORDS_FILE)
        print("Category ", new_category, " has been created")
    else:
        print("ERROR: Category already exists")
    helpers.pause()


def modify_category_menu(words: dict) -> int:
    helpers.clear()
    print("Categories found on the file: ")
    print()
    print(*words.keys(), sep=", ")
    print()
    print("""
    ┌────────────────────────────────────────────────────────────────────────┐
    │                                                                        │
    │   Modify category                                                      │
    │                                                                        │
    │   Please choose one of the following options:                          │
    │                                                                        │
    │   1.- Change category name                                             │
    │   2.- Add a new word                                                   │
    │   3.- Remove a word                                                    │
    │   4.- Return to previous menu                                          │
    │                                                                        │
    └────────────────────────────────────────────────────────────────────────┘
    """)
    choice = input("\tYou choose: ")
    return choice


def change_category_name(words: dict):
    helpers.clear()
    print("Categories found on the file: ")
    print()
    print(*words.keys(), sep=", ")
    print()
    print("Write the name of the category you want to change")
    old_name = input("Category: ")
    if old_name in words.keys():
        new_name = input("Enter new name: ")
        words[new_name] = words.pop(old_name)
        helpers.write_json(words, WORDS_FILE)
        print("Category name changed: ", old_name, " -> ", new_name)
    else:
        print("ERROR: Category does not exist")
    helpers.pause()


def add_new_word(words: dict):
    helpers.clear()
    print("Categories found on the file: ")
    print()
    print(*words.keys(), sep=", ")
    print()
    print("Write the name of the category where you want to add the word")
    category = input("Category: ")
    if category in words.keys():
        print("Words found in category:")
        print()
        print(*words[category], sep=", ")
        word = input("New word to add: ")
        if word not in words[category]:
            words[category].append(word)
            helpers.write_json(words, WORDS_FILE)
            print("Word added: ", word)
        else:
            print("ERROR: Word already in category")
    else:
        print("ERROR: Category does not exist")
    helpers.pause()


def remove_word(words: dict):
    helpers.clear()
    print("Categories found on the file: ")
    print()
    print(*words.keys(), sep=", ")
    print()
    print("Write the name of the category where you want to remove the word")
    category = input("Category: ")
    if category in words.keys():
        print("Words found in category:")
        print()
        print(*words[category], sep=", ")
        word = input("Word to remove: ")
        if word in words[category]:
            words[category].remove(word)
            helpers.write_json(words, WORDS_FILE)
            print("Word removed: ", word)
        else:
            print("ERROR: Word does not exist")
    else:
        print("ERROR: Category does not exist")
    helpers.pause()


def modify_category(words: dict):
    choice = "0"
    while choice != "4":
        choice = modify_category_menu(words)
        if choice == "1":
            change_category_name(words)
        elif choice == "2":
            add_new_word(words)
        elif choice == "3":
            remove_word(words)
        elif choice == "4":
            print("Returning to previous menu...")
            # helpers.pause()
        else:
            print("ERROR: Choice not valid")
            helpers.pause()


def delete_category(words: dict):
    helpers.clear()
    print("Categories found on the file: ")
    print()
    print(*words.keys(), sep=", ")
    print()
    print("Write the name of the category you want to delete")
    category = input("Category: ")
    if category in words.keys():
        if len(words[category]) > 0:
            print("The category you are trying to delete contains words, " +
                  "are you sure you want to delete it?")
            choice = input("Y/N: ")
            if choice.capitalize() != "Y":
                print("Category will not be deleted")
                helpers.pause()
                return
        words.pop(category)
        helpers.write_json(words, WORDS_FILE)
        print("Category removed: ", category)
    else:
        print("ERROR: Category does not exist")
    helpers.pause()


def modify_words():
    words = helpers.read_json(WORDS_FILE)
    choice = "0"
    while choice != "4":
        choice = modify_words_menu()
        if choice == "1":
            add_category(words)
        elif choice == "2":
            modify_category(words)
        elif choice == "3":
            delete_category(words)
        elif choice == "4":
            print("Returning to main menu...")
            # helpers.pause()
        else:
            print("ERROR: Choice not valid")
            helpers.pause()


def play_menu() -> int:
    helpers.clear()
    print("""
    ┌────────────────────────────────────────────────────────────────────────┐
    │                                                                        │
    │   Play game                                                            │
    │                                                                        │
    │   Please choose one of the following options:                          │
    │                                                                        │
    │   1.- Play words from a category                                       │
    │   2.- Play any word from all categories                                │
    │   3.- Return to main menu                                              │
    │                                                                        │
    └────────────────────────────────────────────────────────────────────────┘
    """)
    choice = input("\tYou choose: ")
    return choice


def choose_from_category() -> str:
    words = helpers.read_json(WORDS_FILE)
    helpers.clear()
    print("Categories found on the file: ")
    print()
    print(*words.keys(), sep=", ")
    print()
    print("Choose a category to play the game")
    category = input("Category: ")
    word = None
    if category in words.keys():
        word = random.choice(words[category])
        print("A word has been chosen from ", category)
    else:
        print("ERROR: Category does not exist")
    helpers.pause()
    return word


def choose_from_all() -> str:
    words = helpers.read_json(WORDS_FILE)
    category = random.choice(list(words.keys()))
    word = random.choice(words[category])
    return word


def uncover_guessed(guess: str, word: str, guessed: str) -> str:
    for i, letter in enumerate(word):
        if letter == guess:
            guessed_list = list(guessed)
            guessed_list[i] = guess
            guessed = "".join(guessed_list)
    return guessed


def play_hangman(word: str):
    lives = len(HANGMAN_STATES) - 1  # the last state is dead
    tried_letters = []
    won = False
    guessed = "_"*len(word)  # guessed will show unknowns as _
    while lives > 0 and not won:
        helpers.clear()
        print("You have ", lives, " lives left")
        print()
        print(HANGMAN_STATES[-lives-1])  # we have to go one more, at 0 lives we show -1
        print()
        print("WORD:", *guessed, sep=" ")
        print()
        print("Tried letters: ", end="")
        print(*tried_letters, sep=", ")
        guess = input("Write a letter or guess the word: ")
        # we will check if we are guessing a single letter or the whole word
        if len(guess) == 1:  # we are guessing a single letter
            if guess not in tried_letters:
                tried_letters.append(guess)
                if guess in word:
                    print("The letter is in the word: ")
                    guessed = uncover_guessed(guess, word, guessed)
                    print("WORD:", *guessed, sep=" ")
                else:
                    print("Sorry the letter is not in the word")
                    lives -= 1
            else:
                print("The letter has already been tried")
        elif len(guess) == len(word):  # checking the whole word
            if guess == word:
                guessed = word
            else:
                print("Sorry that is not the word")
                lives -= 1
        else:
            print("That is not a valid guess")
        if "_" not in guessed:
            won = True
            print()
            print("CONGRATULATIONS YOU HAVE GUESSED THE WORD")
            helpers.pause()
            helpers.clear()
            print(WIN_STR)
        helpers.pause()
    if lives == 0:
        helpers.clear()
        print("YOU HAVE LOST ALL YOUR LIVES")
        print("TRY AGAIN")
        print("The word was ", word)
        print(HANGMAN_STATES[-1])
        helpers.pause()


def play():
    choice = "0"
    while choice != "3":
        choice = play_menu()
        if choice == "1":
            word = choose_from_category()
            if word is not None:
                play_hangman(word)
        elif choice == "2":
            word = choose_from_all()
            play_hangman(word)
        elif choice == "3":
            print("Returning to main menu...")
            # helpers.pause()
        else:
            print("ERROR: Choice not valid")
            helpers.pause()


def create_file_menu() -> int:
    helpers.clear()
    print("""
    ┌────────────────────────────────────────────────────────────────────────┐
    │                                                                        │
    │   No words file found                                                  │
    │                                                                        │
    │   Do you want to create an example file?                               │
    │                                                                        │
    │   1.- Yes                                                              │
    │   2.- No (Exit program)                                                │
    │                                                                        │
    │                                                                        │
    └────────────────────────────────────────────────────────────────────────┘
    """)
    choice = input("\tYou choose: ")
    return choice


def create_json_file():
    helpers.write_json(EXAMPLE_JSON, WORDS_FILE)


def check_json():
    if not os.path.isfile(WORDS_FILE):
        choice = "0"
        while choice != "1":
            choice = create_file_menu()
            if choice == "1":
                create_json_file()
            elif choice == "2":
                sys.exit(0)
                print("Exiting...")


def main():
    check_json()
    choice = "0"
    while choice != "3":
        choice = main_menu()
        if choice == "1":
            modify_words()
        elif choice == "2":
            play()
        elif choice == "3":
            print("Exiting...")
        else:
            print("ERROR: Choice not valid")
            helpers.pause()


if __name__ == "__main__":
    main()
