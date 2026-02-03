# -*- coding: utf-8 -*-
"""
Conway's game of Life

https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
https://conwaylife.com/wiki/Conway%27s_Game_of_Life
"""


# A more complex, get_neighbours
# =============================================================================
# def get_neighbours(matrix, row, column):
#     neighbours = []
#     for i in (row - 1, row, row + 1):
#         for j in (column - 1, column, column + 1):
#             if ((i, j) != (row, column) and
#                0 <= i < len(matrix) and
#                0 <= j < len(matrix[0])):
#                 neighbours.append(matrix[i][j])
#     return neighbours
# =============================================================================


# Start by using this matrix for the exercises
GLIDER = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

# Once you have the 5th exercise implemented you can also test it with a bigger board
COLLISION = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]



def print_matrix(matrix):
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            if matrix[i][j] == 1:
                print("██", end="")
            else:
                print("░░", end="")
        print()


def get_neighbours(matrix, row, column):
    if row == 0 or row == len(matrix)-1 or column == 0 or column == len(matrix[0])-1:
        return []
    neigbours = []
    neigbours.append(matrix[row-1][column-1])
    neigbours.append(matrix[row-1][column])
    neigbours.append(matrix[row-1][column+1])
    neigbours.append(matrix[row][column-1])
    neigbours.append(matrix[row][column+1])
    neigbours.append(matrix[row+1][column-1])
    neigbours.append(matrix[row+1][column])
    neigbours.append(matrix[row+1][column+1])
    return neigbours


def count_alive(neighbours):
    return sum(neighbours)


def create_matrix_zeros(rows, columns):
    return [[0 for i in range(rows)] for j in range(columns)]


def get_next_iteration(matrix):
    next_iteration = create_matrix_zeros(len(matrix), len(matrix[0]))
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            neighbours = get_neighbours(matrix, i, j)
            active = count_alive(neighbours)
            if matrix[i][j] == 1:
                if active < 2:
                    next_iteration[i][j] = 0
                elif active > 3:
                    next_iteration[i][j] = 0
                else:
                    next_iteration[i][j] = 1
            else:
                if active == 3:
                    next_iteration[i][j] = 1
    return next_iteration


def count_changes(old, new) -> (int, int):
    deaths = 0
    births = 0
    for row in range(len(old)):
        for col in range(len(old[row])):
            if old[row][col] == 1 and new[row][col] == 0:
                deaths += 1
            if old[row][col] == 0 and new[row][col] == 1:
                births += 1
    return deaths, births

def main():
    print("Starting game")
    print("Using starting matrix glider:")
    next_iteration = COLLISION
    print_matrix(next_iteration)
    print()
    stopped = False
    iteration = 1
    ######################
    total_deaths = 0
    total_births = 0
    ######################
    while not stopped:
        old_iteration = next_iteration
        next_iteration = get_next_iteration(next_iteration)
        print(f"Matrix for iteration {iteration}")
        print_matrix(next_iteration)
        print()
        ######################
        deaths, births = count_changes(old_iteration, next_iteration)
        total_deaths += deaths
        total_births += births
        print(f"In this iteration there have been {deaths} deaths and {births} births")
        ######################
        iteration += 1
        option = input("Enter 's' to stop, any other character to continue: ")
        if option == "s":
            stopped = True
    ######################
    print(f"In total there have been {total_deaths} deaths and {total_births} births")
    ######################


if __name__ == "__main__":
    main()