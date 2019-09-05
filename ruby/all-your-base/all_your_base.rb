module BaseConverter
  def self.convert(input_base, digits, output_base)
    raise ArgumentError.new if input_base <= 1
    
    base10 = 0
    
    digits.reverse.each.with_index do |digit, index|
      raise ArgumentError.new if digit < 0 || digit >= input_base

      base10 += digit * (input_base ** index)
    end

    result = []

    while base10 > 0
      result.unshift base10 % output_base
      base10 = (base10 / output_base).floor
    end

    return [0] if result.empty?
    
    result
  end
end
