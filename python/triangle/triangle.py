def equilateral(sides):
    if invalid(sides):
        return False

    return len(set(sides)) == 1


def isosceles(sides):
    if invalid(sides):
        return False

    return len(set(sides)) <= 2


def scalene(sides):
    pass


def invalid(sides):
    a, b, c = sorted(sides)

    return any(side == 0 for side in sides) or a + b < c
