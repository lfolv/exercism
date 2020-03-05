def equilateral(sides):
    if any(side == 0 for side in sides):
        return False

    return len(set(sides)) == 1


def isosceles(sides):
    pass


def scalene(sides):
    pass
