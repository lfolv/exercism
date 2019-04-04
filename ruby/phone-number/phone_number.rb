# PhoneNumber class represents a North American Numbering Plan (NANP)
# It is a telephone numbering system used by many countries in North America
# like the United States, Canada or Bermuda
#
# @author Lucas Oliveira
# @since 0.1.0
class PhoneNumber
  INVALID_CHARACTERS = /[a-zA-Z@:!]/
  DIGITS = /\d/

  # Clean up differenly formatted telephone numbers by removing punctuation and
  # contry code (1) if present
  #
  # @param [String] number a telephone number
  # @return [String] the clean number
  #
  # @example Clean up a telephone number
  #   PhoneNumber.clean("(223) 456-7890") #=> ""2234567890""
  def self.clean(number)
    PhoneNumber.new(number).clean
  end

  # Create a PhoneNumber object
  #
  # @param [String] number a telephone number
  def initialize(number)
    @number = number
  end

  # Clean up differenly formatted telephone numbers by removing punctuation and
  # contry code (1) if present
  #
  # @return [String] the clean number
  #
  # @example Clean up a telephone number
  #   phone_number = PhoneNumber.new("(223) 456-7890")
  #   phone_number.clean #=> ""2234567890""
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
    @digits or extract_digits
  end

  def extract_digits
    d = number.scan(DIGITS)
    # Ignore country area digit
    @digits = d.length == 11 && d.first == '1' ? d[1..-1] : d
  end
end
