#include <math.h>

int is_armstrong_number(int candidate);
int armstrong_sum(int candidate);
int count_number_of_digits(int candidate);

int is_armstrong_number(int candidate)
{
  return armstrong_sum(candidate) == candidate;
}

int armstrong_sum(int candidate)
{
  int total = 0;
  int number_of_digits = count_number_of_digits(candidate);

  while (candidate)
  {
    int digit = candidate % 10;
    total += pow(digit, number_of_digits);
    candidate /= 10;
  }

  return total;
}

int count_number_of_digits(int candidate)
{
  int current_number_of_digits = 0;

  while (candidate)
  {
    current_number_of_digits++;
    candidate /= 10;
  }

  return current_number_of_digits;
}
