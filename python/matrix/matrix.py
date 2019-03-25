class Matrix(object):
    def __init__(self, matrix_string):
        self.matrix = [[int(value) for value in line.split(' ')] for line in matrix_string.split('\n')]

    def row(self, index):
        return self.matrix[index-1]

    def column(self, index):
        pass
