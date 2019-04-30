module IsbnVerifier
  ISBN_PATERN = /\A(?:\d\-?){9}\-?[\dX]\z/
  DIGITS = /[^\-]/

  def self.valid?(isbn_number)
    return false unless isbn_number.match(ISBN_PATERN)

    index = 10
    sum = isbn_number.scan(DIGITS).sum do |n|
      value = parse_number(n) * index
      index -= 1
      value
    end
    (sum % 11).zero?
  end

  def self.parse_number(number)
    return 10 if number == 'X'
    number.to_i
  end
end
