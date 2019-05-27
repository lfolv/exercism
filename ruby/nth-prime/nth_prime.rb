module Prime
  def self.nth(n)
    raise ArgumentError.new if n.zero?

    primes.take(n).last
  end

  def self.primes
    Enumerator.new do |p|
      (2..).each { |current| p << current if prime?(current) }
    end
  end

  def self.prime?(number)
    (2..(number / 2)).each do |n|
      return false if (number % n).zero?
    end

    true
  end
end
