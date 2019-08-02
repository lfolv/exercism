module PrimeFactors
  def self.for(number)
    [].tap do |factors|
      while number > 1
        factor = minimal_factor_of number
        number /= factor
        factors << factor
      end
    end
  end

  def self.minimal_factor_of(number)
    (2..).find { |factor| (number % factor).zero? }
  end
end
