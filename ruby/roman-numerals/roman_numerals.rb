class Integer
  ARABIC_TO_ROMAN_NUMERAL = {
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
    remaining = self

    ARABIC_TO_ROMAN_NUMERAL.each_with_object('') do |(arabic, roman), in_roman|
      times_to_repeat, remaining = remaining.divmod(arabic)
      in_roman << roman * times_to_repeat
    end
  end
end

