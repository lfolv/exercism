class Luhn
  INVALID_CHARACTERS = /[^0-9\s]/

  def self.valid?(digits)
    Luhn.new(digits).valid?
  end

  def initialize(digits)
    @digits = digits.delete(' ')
  end

  def valid?
    return false if digits.size <= 1 
    return false if digits =~ INVALID_CHARACTERS

    (checksum % 10).zero?
  end

  private

  attr_reader :digits

  def checksum
    digits.reverse.each_char.each_slice(2).sum(0) do |digits|
      digits[0].to_i + double(digits[1])
    end
  end

  def double(digit)
    value = digit.to_i * 2
    value > 9 ? value - 9 : value
  end
end