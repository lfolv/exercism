module IsbnVerifier
  ISBN_PATERN = /\A(?:\d\-?){9}\-?[\dX]\z/

  def self.valid?(isbn_number)
    return false unless isbn_number.match(ISBN_PATERN)

    sum = 0
    index = 10
    isbn_number.scan(/[^\-]/) do |n|
      sum += parse_number(n) * index
      index -= 1
    end
    (sum % 11).zero?
  end

  def self.parse_number(number)
    return 10 if number == 'X'
    number.to_i
  end
end
