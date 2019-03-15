class Luhn
  def self.valid?(digits)
    Luhn.new(digits).valid?
  end

  def initialize(digits)
    @digits = digits
  end

  def valid?
    digits = @digits.gsub(' ', '')
    return false if digits.length <= 1 
    return false if digits =~ /[^0-9\s]/

    total = 0

    digits.reverse.each_char.with_index do |chr, index|
      unless index % 2 == 0
        d = chr.to_i * 2
        d -= 9 if d > 9
        total += d
      else
        total += chr.to_i
      end
    end

    total % 10 == 0
  end
end