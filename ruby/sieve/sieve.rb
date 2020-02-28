class Sieve
  def initialize(limit)
    @limit = limit
  end

  def primes
    (2..limit).to_a
  end

  private
    attr_reader :limit
end

