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
  # @return [Int] the square of the sum of the first N natual numbers
  def square_of_sum
    (1..n).sum ** 2
  end

  private

  attr_reader :n
end
