class Integer
  NUMBER_TO_ROMAN_ALG = {
    1000 => 'M',
    900 => 'CM',
    500 => 'D',
    400 => 'CD',
    100 => 'C',
    90 => 'XC',
    50 => 'L',
    40 => 'XL',
    10 => 'X',
    9 => 'IX',
    5 => 'V',
    4 => 'IV',
    1 => 'I'
  }

  def to_roman
    remaining_value = self

    NUMBER_TO_ROMAN_ALG.each_with_object('') do |(number, roman_alg), in_roman|
      in_roman << roman_alg * (remaining_value / number)
      remaining_value = remaining_value % number
    end
  end
end

