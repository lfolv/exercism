module IsbnVerifier
  DIGITS = /[^\-]/
  ISBN_PATERN = /\A(?:\d\-?){9}\-?[\dX]\z/
  ISBN_LENGTH = 10

  def self.valid?(isbn_number)
    return false unless isbn_number.match(ISBN_PATERN)

    sum = isbn_number.scan(DIGITS).each_with_index.sum do |digit, index|
      parse_number(digit) * (ISBN_LENGTH - index)
    end

    (sum % 11).zero?
  end

  def self.parse_number(digit)
    return 10 if digit == 'X'
    digit.to_i
  end
end
