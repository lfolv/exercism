# class Squares provides helper methods to handle with square numbers
# calculations.
#
# @author Lucas Oliveira
class Squares
  # Create a new Squares object.
  #
  # @param [Int] n - first N natual numbers to calculate
  def initialize(number)
    @number = number
  end

  # Calculate the difference between the square of sum and the sum of the
  # squares of the first N natural numbers.
  #
  # @return [Int] the difference of squares
  #
  # @example
  #   Squares.new(100).difference #=> 25164150
  def difference
    square_of_sum - sum_of_squares
  end

  # Calculate the square of the sum of the first N natural numbers.
  # The square of the sum of the first ten natural numbers is
  # (1 + 2 + ... + 10) ** 2 = 55 ** 2 = 3025.
  #
  # @return [Int] square of the sum
  #
  # @example
  #  Squares.new(100).sum_of_squares #=> 25502500
  def square_of_sum
    ((number + 1) * number / 2) ** 2
  end

  # Calculate the sum of the squares of the first N natural numbers
  # The sum of the squares of the first ten natural numbers is
  # 1 ** 2 + 2 ** 2 + ... + 10 ** 2 = 385.
  #
  # @return [Int] sum of the squares
  #
  # @example
  #   Squares.new(100).sum_of_squares #=> 338350
  def sum_of_squares
    (number + 1) * number * (2 * number + 1) / 6
  end

  private

  attr_reader :number
end
