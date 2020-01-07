COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
]


def value(colors):
    return (resistenceValueOf(colors[0]) * 10) + resistenceValueOf(colors[1])


def resistenceValueOf(color):
    return COLORS.index(color)
