"""
Sparse matrix lab project

Working with sparse matrixes and coordinate list representation

February 7
@author: ugaitz.amozarrain

"""


test_m = [[0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0],
          [-1, 0, 0, 0, 0],
          [1, 2, 0, 0, 0],
          [0, 0, 0, 0, 0]]


def create_coo():
    """
    Creates an empty coordinate list

    The list contains three other lists inside of it for storing
    [value], [row], [column] in that order

    Returns
    -------
    coo : list of lists
        Empty COO list

    """
    return [[], [], []]


def normal_to_coo(matrix):
    """
    Convert a matrix from normal representation to COO

    Parameters
    ----------
    matrix : list of lists
        A matrix in normal representation.

    Returns
    -------
    coo : list of lists
        The matrix in COO representation.

    """
    coo = create_coo()
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if matrix[i][j] != 0:
                coo[0].append(matrix[i][j])
                coo[1].append(i)
                coo[2].append(j)
    return coo


def create_empty_mat(N, M):
    """
    Creates an empty matrix of NxM size

    The matrix is filled with 0s

    Parameters
    ----------
    N : int
    M : int

    Returns
    -------
    m : list of lists
        A matrix filled with 0s.

    """
    m = []
    for _ in range(N):
        m.append([0]*M)
    return m


def coo_to_normal(coo, rows, columns):
    """
    Convert a matrix from COO representation to normal

    Parameters
    ----------
    coo : list of lists
        A matrix in COO representation.
    rows : int
        Number of rows for the resulting matrix.
    columns : int
        Number of columns for the resulting matrix.

    Returns
    -------
    matrix : list of lists
        A matrix in normal representation.

    """
    matrix = create_empty_mat(rows, columns)
    for i in range(len(coo[0])):  # Fill the values for each entry in the COO
        value = coo[0][i]
        row = coo[1][i]
        colum = coo[2][i]
        matrix[row][colum] = value
    return matrix


def is_it_in(coo, i, j):
    """
    Checks if a value exists for a given position

    Parameters
    ----------
    coo : list of lists
        A matrix in COO representation.
    i : int
        Row number to check.
    j : int
        Column number to check.

    Returns
    -------
    coo_column : int
        Column number in the COO representation or -1 if not found.

    """
    for pos in range(len(coo[0])):
        if coo[1][pos] == i and coo[2][pos] == j:
            return pos
    return -1


def insert_or_increment(coo, i, j, x):
    """
    Inserts a value to a COO matrix. If the value exists the new value is
    added to the existing one.

    Parameters
    ----------
    coo : list of lists
        A matrix in COO representation.
    i : int
        Row number in normal representation.
    j : int
        Column number in normal representation.
    x : int
        The value.

    Returns
    -------
    coo : TYPE
        DESCRIPTION.

    """
    pos = is_it_in(coo, i, j)
    if pos >= 0:
        coo[0][pos] += x
    else:
        coo[0].append(x)
        coo[1].append(i)
        coo[2].append(j)
    return coo


test_d1 = [[1, -1, 1, 2],
           [0, 2, 3, 3],
           [2, 0, 0, 1]]
test_d2 = [[1, 1, 2],
           [0, 1, 3],
           [2, 1, 1]]


def sum_sparses(coo1, coo2):
    """
    Sums two sparse matrixes in COO representation.

    Parameters
    ----------
    coo1 : list of lists
        A matrix in COO representation.
    coo2 : list of lists
        A matrix in COO representation.

    Returns
    -------
    coo3 : list of lists
        The resulting matrix in COO representation.

    """
    coo3 = create_coo()
    for pos in range(len(coo1[0])):  # Add the first COO to the new matrix
        # We can also call insert_or_increment() for each of the values
        coo3[0].append(coo1[0][pos])
        coo3[1].append(coo1[1][pos])
        coo3[2].append(coo1[2][pos])
    for pos in range(len(coo2[0])):  # For each value in the second COO
        insert_or_increment(coo3, coo2[1][pos], coo2[2][pos], coo2[0][pos])
    return coo3


def print_matrix(mat):
    """
    Prints a matrix in the console

    Parameters
    ----------
    mat : list of lists
        A matrix.

    Returns
    -------
    None.

    """
    for i in range(len(mat)):
        for j in range(len(mat[0])):
            print(mat[i][j], end=" ")
        print()


def main():
    """
    Main function for the file, the execution will start here.

    Returns
    -------
    None.

    """
    m1 = [[0, 1, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 2, 0],
          [0, 0, 0, 0]]
    m2 = [[0, 0, 0, 0],
          [0, 5, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]]
    d1 = normal_to_coo(m1)
    d2 = normal_to_coo(m2)

    d3 = sum_sparses(d1, d2)

    m3 = coo_to_normal(d3, len(m1), len(m1[0]))
    print_matrix(m3)


# Until this point nothing has been executed, we have only defined the functions.
# This code calls the main function to get everything started. The condition in this
# if statement evaluates to True when the module is executed by the interpreter, but
# not when it is imported into another module.
if __name__ == "__main__":
    main()
