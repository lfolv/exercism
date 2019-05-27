FACTORS_TO_MESSAGE = (
    (3, "Pling"),
    (5, "Plang"),
    (7, "Plong")
)

def raindrops(number):
    result = "".join(message for factor, message in FACTORS_TO_MESSAGE if number % factor == 0)
    return str(number) if len(result) == 0 else result
