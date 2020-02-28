class Sieve
  def initialize(limit)
    @limit = limit
  end

  def primes
    (2..limit).each_with_object([]) do |number, calculed_primes|
      calculed_primes << number unless calculed_primes.any? { |prime| (number % prime).zero? }
    end
  end

  private
    attr_reader :limit
end

