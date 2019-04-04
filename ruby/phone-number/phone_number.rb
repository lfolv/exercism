# PhoneNumber class represents a North American Numbering Plan (NANP)
# It is a telephone numbering system used by many countries in North America
# like the United States, Canada or Bermuda
#
# @author Lucas Oliveira
# @since 0.1.0
class PhoneNumber
  INVALID_CHARACTERS = /[a-zA-Z@:!]/.freeze
  DIGITS = /\d/.freeze
  TELEPHONE_SIZE = 10
  COUNTRY_DIGIT = '1'.freeze

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
    invalid_characters? || invalid_length? || invalid_digits?
  end

  def invalid_characters?
    number.match(INVALID_CHARACTERS)
  end

  def invalid_length?
    digits.length != TELEPHONE_SIZE
  end

  def invalid_digits?
    digits.first == '0' ||
      digits.first == '1' ||
      digits[3] == '0' ||
      digits[3] == '1'
  end

  def digits
    @digits ||= country_code? ? all_digits[1..-1] : all_digits
  end

  def all_digits
    @all_digits ||= number.scan(DIGITS)
  end

  def country_code?
    all_digits.length == TELEPHONE_SIZE + 1 && all_digits.first == COUNTRY_DIGIT
  end
end
