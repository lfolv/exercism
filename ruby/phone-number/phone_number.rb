class PhoneNumber
  def self.clean(number)
    numbers = number.scan(/\d/)
    return numbers.join('') if numbers.length == 10
  end
end
