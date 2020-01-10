def sum_of_multiples(limit, multiples):
  sum = 0

  for i in range(1, limit):
    if any(divisor != 0 and i % divisor == 0 for divisor in multiples):
      sum += i
  
  return sum
