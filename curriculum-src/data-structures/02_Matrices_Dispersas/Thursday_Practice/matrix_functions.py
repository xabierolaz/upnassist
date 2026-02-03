"""
Helper functions for working with matrixes.

Included functions:
    read_matrix(size: int) -> list[list[int]]
    print_matrix(matrix : list[list])
    create_empty_matrix(rows: int, columns: int) -> list[list[int]]
    maximum_matrix(matrix: list[list]) -> Any
    maximum_matrix_with_position(matrix: list[list]) -> (Any, int, int)
"""
from typing import Any


def read_matrix(size: int) -> list:
    """
    Read a NxM matrix of integer one line at a time.

    The user should input each row as a space separated list of integers.

    Parameters
    ----------
    size : int
        The number of rows of the matrix.

    Returns
    -------
    matrix : list[list[int]]
        A matrix composed of integers.

    """
    matrix = []
    for i in range(size):
        line = input(f"input line {i}: ").split()  # Read a line and use spaces to create a list
        line = list(map(int, line))  # Apply the int function to all elements in each line
        matrix.append(line)
    return matrix


if __name__ == "__main__":
    m = read_matrix(2)
    print(m)


# %%


def print_matrix(matrix: list) -> None:
    """
    Print a matrix.

    Each row of the matrix is shown on a new line.

    Parameters
    ----------
    matrix : list[list]
        The matrix to show.

    Returns
    -------
    None.

    """
    for line in matrix:
        print(*line, sep=" ", end="\n")


if __name__ == "__main__":
    print_matrix(m)


# %%


def create_empty_matrix(rows: int, columns: int) -> list:
    """
    Create a matrix filled with 0s.

    Parameters
    ----------
    rows : int
        Number of rows for the output matrix.
    columns : int
        Number of columns for the output matrix.

    Returns
    -------
    matrix : list[list[int]]
        A row x columns matrix filled with 0s.

    """
    matrix = []
    for _ in range(rows):
        matrix.append([0]*columns)
    return matrix


if __name__ == "__main__":
    m = create_empty_matrix(3, 3)
    print_matrix(m)


# %%


def maximum_matrix(matrix: list) -> Any:
    """
    Find the maximum value in a matrix.

    Parameters
    ----------
    matrix : list[list]
        The matrix to search in.

    Returns
    -------
    maximum
        The maximum value.

    """
    maximum = matrix[0][0]
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            if matrix[i][j] > maximum:
                maximum = matrix[i][j]
    return maximum


if __name__ == "__main__":
    m = [[1, 2, 3], [3, 4, 5], [9, 1, 2]]
    print_matrix(m)
    print(f"The maximum value is: {maximum_matrix(m)}")


# %%


def maximum_matrix_with_position(matrix: list) -> (Any, int, int):
    """
    Find the maximum value and its position in a matrix.

    Parameters
    ----------
    matrix : list
        The matrix to search in.

    Returns
    -------
    maximum
        The maximum value.
    pos_i : int
        The i position of the maximum value.
    pos_j : int
        The j position of the maximum value.

    """
    maximum = matrix[0][0]
    pos_i = 0
    pos_j = 0
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            if matrix[i][j] > maximum:
                maximum = matrix[i][j]
                pos_i = i
                pos_j = j
    return maximum, pos_i, pos_j


if __name__ == "__main__":
    m = [[1, 2, 3], [3, 4, 5], [9, 1, 2]]
    print_matrix(m)
    maxi, i, j = maximum_matrix_with_position(m)
    print(f"The maximum value is: {maxi} and its position is: {i},{j}")


# %% You can add more functions down here









