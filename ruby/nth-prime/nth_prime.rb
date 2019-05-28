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

  module EnumeratorHelpers
    refine Enumerator do
      def nth(n)
        count = 1

        self.each do |value|
          return value if count == n
          count += 1
        end
      end
    end
  end

  using IntegerHelpers
  using EnumeratorHelpers

  def self.nth(n)
    raise ArgumentError.new if n <= 0

    primes.nth(n)
  end

  def self.primes
    Enumerator.new do |p|
      (2..Float::INFINITY).each { |current| p.yield(current) if current.prime? }
    end
  end

end
