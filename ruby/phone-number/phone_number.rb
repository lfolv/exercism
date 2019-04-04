class PhoneNumber
  def self.clean(number)
    return nil if number.match(/[a-zA-Z@:!]/)

    numbers = number.scan(/\d/)
    numbers = numbers[1..-1] if numbers.length == 11 && numbers.first == '1'
    return nil if numbers.first == '0' or numbers.first == '1' or numbers[3] == '0' or numbers[3] == '1'
    return numbers.join('') if numbers.length == 10
  end
end
