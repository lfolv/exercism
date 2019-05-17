def is_armstrong_number(number):
  return number == calc(number)

def calc(number):
  digits = str(number)
  return sum(int(digit) ** len(digits) for digit in digits)
