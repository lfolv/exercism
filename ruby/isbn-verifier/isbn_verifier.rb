module IsbnVerifier
  def self.valid?(isbn_number)
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
