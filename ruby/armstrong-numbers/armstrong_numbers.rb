module ArmstrongNumbers
  def self.include?(number)
    sum(number) == number
  end

  def self.sum(number)
    digits = number.digits
    digits.sum { |digit| digit ** digits.length }
  end
end