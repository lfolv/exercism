module IntegerHelpers
  refine Integer do
    def prime?
      (2..(self / 2)).each do |n|
        return false if (self % n).zero?
      end

      true
    end
  end
end

module Prime
  using IntegerHelpers

  def self.nth(n)
    raise ArgumentError.new if n.zero?

    primes.take(n).last
  end

  def self.primes
    Enumerator.new do |p|
      (2..).each { |current| p << current if current.prime? }
    end
  end

end
