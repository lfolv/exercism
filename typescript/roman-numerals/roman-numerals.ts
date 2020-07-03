const ARABIC_TO_ROMAN_NUMERALS: Array<[number, string]> = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
]

class RomanNumerals {
  static roman(valueInArabic: number) {
    let valueInRoman = ""

    for (const [arabicNumeral, romanNumeral] of ARABIC_TO_ROMAN_NUMERALS) {
      const times = valueInArabic / arabicNumeral
      valueInArabic = valueInArabic % arabicNumeral

      valueInRoman += romanNumeral.repeat(times)
    }

    return valueInRoman
  }
}

export default RomanNumerals
