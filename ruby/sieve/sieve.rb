class Sieve
  def initialize(limit)
    @limit = limit
  end

  def primes
    (2..limit).each_with_object([]) do |number, calculed_primes|
      calculed_primes << number unless include_divisor?(calculed_primes, number)
    end
  end

  private
    attr_reader :limit
  
    def include_divisor?(calculed_primes, number)
      calculed_primes.any? { |prime| (number % prime).zero? }
    end    
end

