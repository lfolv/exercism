def equilateral(sides):
    if invalid(sides):
        return False

    return len(set(sides)) == 1


def isosceles(sides):
    pass


def scalene(sides):
    pass


def invalid(sides):
    return any(side == 0 for side in sides)
