class SumOfMultiples
  def initialize(*numbers)
    @numbers = numbers
  end

  def to(limit)
    (1...limit)
      .select { |number| numbers.any? { |divisor| (number % divisor).zero? } }
      .sum
  end

  private

  attr_reader :numbers
end
