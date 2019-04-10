# class Squares provides helper methods to handle with square numbers
# calculations
#
# @author Lucas Oliveira
class Squares
  # Create a new Squares object
  #
  # @param [Int] n - first N natual numbers to calculate
  def initialize(n)
    @n = n
  end

  # Calculate the square of the sum of the first N natural numbers
  #
  # @return [Int] square of the sum
  #
  # @example
  #  Squares.new(100).sum_of_squares #=> 25502500
  def square_of_sum
    (1..n).sum ** 2
  end

  # Calculate the sum of the squares of the first N natural numbers
  #
  # @return [Int] sum of the squares
  #
  # @example
  #   Squares.new(100).difference #=> 338350
  def sum_of_squares
    (1..n).sum { |current| current ** 2 }
  end

  private

  attr_reader :n
end
