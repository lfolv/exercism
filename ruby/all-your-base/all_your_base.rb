module BaseConverter
  def self.convert(input_base, digits, output_base)
    raise ArgumentError.new if invalid_base(input_base) || invalid_base(output_base)
    
    base10 = to_base10(input_base, digits)

    result = []

    while base10 > 0
      result.unshift base10 % output_base
      base10 = (base10 / output_base).floor
    end

    return [0] if result.empty?
    
    result
  end

  def self.invalid_base(base)
    base <= 1
  end

  def self.to_base10(input_base, digits)
    digits
      .reverse_each
      .with_index
      .sum do |digit, index|
        raise ArgumentError.new if invalid_digit(input_base, digit)

        digit * (input_base ** index)
      end
  end

  def self.invalid_digit(base, digit)
    digit < 0 || digit >= base
  end
end
