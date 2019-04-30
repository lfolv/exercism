module IsbnVerifier
  DIGITS = /[^\-]/
  ISBN_PATERN = /\A(?:\d\-?){9}\-?[\dX]\z/
  ISBN_LENGTH = 10

  def self.valid?(isbn_number)
    return false unless isbn_number.match(ISBN_PATERN)

    sum = isbn_number.scan(DIGITS).each.with_index.sum do |digit, index|
      parse_number(digit) * (ISBN_LENGTH - index)
    end

    (sum % 11).zero?
  end

  def self.parse_number(number)
    return 10 if number == 'X'
    number.to_i
  end
end
