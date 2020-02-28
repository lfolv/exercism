class Sieve
  def initialize(limit)
    @limit = limit
  end

  def primes
    current = []

    (2..limit).to_a.each do |x|
      current << x unless current.any? { |y| (x % y).zero? }
    end

    current
  end

  private
    attr_reader :limit
end

