module BaseConverter
  def self.convert(input_base, digits, output_base)
    base10 = 0
    
    digits.reverse.each.with_index do |digit, index|
      base10 += digit * (input_base ** index)
    end

    result = []

    while base10 > 0
      result.unshift base10 % output_base
      base10 = (base10 / output_base).floor
    end

    result
  end
end
