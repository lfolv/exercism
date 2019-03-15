class Luhn
  def self.valid?(digits)
    Luhn.new(digits).valid?
  end

  def initialize(digits)
    @digits = digits.gsub(' ', '')
  end

  def valid?
    return false if digits.length <= 1 
    return false if digits =~ /[^0-9\s]/
    sum_digits % 10 == 0
  end

  private

  attr_reader :digits

  def sum_digits
    digits.reverse.each_char.with_index.sum do |digit, index|
      double_second_digits(digit, index)
    end
  end

  def double_second_digits(digit, index)
    unless index % 2 == 0
      d = digit.to_i * 2
      d -= 9 if d > 9
      d
    else
      digit.to_i
    end
  end
end