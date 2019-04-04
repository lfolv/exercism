class PhoneNumber
  INVALID_CHARACTERS = /[a-zA-Z@:!]/
  DIGITS = /\d/

  def self.clean(number)
    PhoneNumber.new(number).clean
  end

  def initialize(number)
    @number = number
  end

  def clean
    return nil if invalid?
    digits.join('')
  end

  private

  attr_reader :number

  def invalid?
    number.match(INVALID_CHARACTERS) or
      digits.length != 10 or
      digits.first == '0' or
      digits.first == '1' or
      digits[3] == '0' or
      digits[3] == '1'
  end

  def digits
    @digits || extract_digits
  end

  def extract_digits
    d = number.scan(DIGITS)
    # Ignore country area digit
    @digits = d.length == 11 && d.first == '1' ? d[1..-1] : d
  end
end
