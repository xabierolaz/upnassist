"""
Helper functions for the hangman game.

@autor ugaitz.amozarrain
"""
import os
import json


def clear(lines: int = 40) -> None:
    """
    Clear the console screen by adding a few empty lines.

    Parameters
    ----------
    lines : int, optional
        number of empty lines. The default is 40.

    Returns
    -------
    None.

    """
    for _ in range(lines):
        print()


def pause() -> None:
    """
    Pause untill enter is pressed.

    Returns
    -------
    None.

    """
    print()
    print(f"{'':─^80}")
    print()
    input("Press enter to continue...")


def read_json(file_path: str) -> dict:
    """
    Read a JSON file specified by the file paramenter.

    Parameters
    ----------
    file_path : str
        The JSON file to read.

    Returns
    -------
    data : dict
        A dictionary containing the JSON information.

    """
    if os.path.exists(file_path):
        with open(file_path, encoding='UTF-8') as file:
            data = json.load(file)
        return data
    return None


def write_json(data: dict, file_path: str) -> None:
    """
    Write a dictionary in a file in JSON format.

    Parameters
    ----------
    data : dict
        The data to store.
    file_path : str
        The file to write.

    Returns
    -------
    None.

    """
    with open(file_path, 'w', encoding='UTF-8') as file:
        json.dump(data, file, indent=4)
