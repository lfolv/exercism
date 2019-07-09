module PrimeFactors
  def self.for(number)
    [].tap do |factors|
      while number > 1
        factor = get_minimal_factor_for number
        number /= factor
        factors << factor
      end
    end
  end

  def self.get_minimal_factor_for(number)
    (2..).find { |factor| (number % factor).zero? }
  end
end
