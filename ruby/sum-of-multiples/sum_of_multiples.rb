class SumOfMultiples
  def initialize(*numbers)
    @numbers = numbers
  end

  def to(limit)
    (1...limit)
      .select { |number| multiple?(number) }
      .sum
  end

  private

  attr_reader :numbers

  def multiple?(number)
    numbers.any? { |divisor| (number % divisor).zero? }
  end
end
