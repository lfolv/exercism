class SumOfMultiples
  def initialize(*numbers)
    @numbers = numbers
  end

  def to(limit)
    sum = 0
    (1...limit).each do |n|
      sum += n if numbers.all? { |m| (n / m).zero? }
    end
    sum
  end

  private

  attr_reader :numbers
end
