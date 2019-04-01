"""
matrix module provides a class to handle with representation matrix in
string format.
"""


class Matrix(object):
    """
    Matrix encapsulates the logic to converts a matrix string
    representantion to a dict.
    """

    def __init__(self, matrix_string):
        """
        Construct a new Matrix

        :param matrix_string: The matrix string representation
        :return: returns nothing
        """
        self.matrix = [
            [int(value) for value in line.split(" ")]
            for line in matrix_string.split("\n")
        ]

    def row(self, index):
        """
        Returns a specific row of the matrix

        :params index: The index of the row
        :return: a list with the values of the row
        """
        return self.matrix[index - 1]

    def column(self, index):
        """
        Returns a specific column of the matrix

        :params index: The index of the column
        :return: a list with the values of the column
        """
        return [list(column) for column in zip(*self.matrix)][index - 1]
