#include <math.h>

#include "armstrong_numbers.h"

int is_armstrong_number(int candidate)
{
  return sum(candidate) == candidate;
}

int sum(int candidate)
{
  int total = 0;
  int number_of_digits = len(candidate);

  while (candidate)
  {
    int digit = candidate % 10;
    total += pow(digit, number_of_digits);
    candidate /= 10;
  }

  return total;
}

int len(int candidate)
{
  int result = 0;

  while (candidate)
  {
    result++;
    candidate /= 10;
  }

  return result;
}