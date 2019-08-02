module PrimeFactors
  def self.for(number)
    [].tap do |factors|
      while number > 1
        factors << minimal_factor_of(number)
        number /= factors.last
      end
    end
  end

  def self.minimal_factor_of(number)
    (2..).find { |factor| (number % factor).zero? }
  end
end
