def equilateral(sides):
    if invalid(sides):
        return False

    return number_of_unique_sides(sides) == 1


def isosceles(sides):
    if invalid(sides):
        return False

    return number_of_unique_sides(sides) <= 2


def scalene(sides):
    if invalid(sides):
        return False

    return number_of_unique_sides(sides) == 3


def invalid(sides):
    a, b, c = sorted(sides)

    return any(side == 0 for side in sides) or a + b < c


def number_of_unique_sides(sides):
    unique_sides = set(sides)
    return len(unique_sides)
