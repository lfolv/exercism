from io import StringIO


def raindrops(number):
    stream = StringIO()

    if number % 3 == 0:
        stream.write("Pling")
    if number % 5 == 0:
        stream.write("Plang")
    if number % 7 == 0:
        stream.write("Plong")

    result = stream.getvalue()
    if len(result) == 0:
        return str(number)
    return result
