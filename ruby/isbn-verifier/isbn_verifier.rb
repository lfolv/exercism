module IsbnVerifier
  def self.valid?(isbn_number)
    sum = 0
    index = 10
    isbn_number.scan(/[^\-]/) do |n|
      sum += n.to_i * index
      index -= 1
    end
    (sum % 11).zero?
  end
end
