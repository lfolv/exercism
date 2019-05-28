module Prime
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

  using IntegerHelpers

  def self.nth(nth)
    raise ArgumentError.new if nth <= 0

    primes.take(nth).last
  end

  def self.primes
    Enumerator.new do |p|
      (2..Float::INFINITY).each { |current| p << current if current.prime? }
    end
  end

end
