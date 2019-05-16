class SumOfMultiples
  def initialize(*multiples)
    @multiples = multiples
  end

  def to(limit)
    (1...limit)
      .select { |number| multiple?(number) }
      .sum
  end

  private

  attr_reader :multiples

  def multiple?(number)
    multiples.any? { |multiple| (number % multiple).zero? }
  end
end
