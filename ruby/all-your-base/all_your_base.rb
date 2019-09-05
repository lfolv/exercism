module BaseConverter
  def self.convert(input_base, digits, output_base)
    base10 = 0
    
    digits.reverse.each.with_index do |digit, index|
      base10 += digit * (input_base ** index)
    end

    base10.to_s.split('').map(&:to_i)
  end
end
