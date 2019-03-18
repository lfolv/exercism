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

    checksum % 10 == 0
  end

  private

  attr_reader :digits

  def checksum
    digits.reverse.each_char.with_index.sum do |digit, index|
      if index % 2 != 0
        value = digit.to_i * 2
        value > 9 ? value - 9 : value
      else
        digit.to_i
      end
    end
  end
end