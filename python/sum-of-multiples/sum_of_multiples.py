def sum_of_multiples(limit, multiples):
    sum = 0

    for i in range(1, limit):
        if any(i % divisor == 0 for divisor in multiples if not divisor == 0):
            sum += i

    return sum

