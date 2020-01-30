const ARABIC_TO_ROMAN_NUMERALS = [
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
];

export const toRoman = currentInArabic => {
  return ARABIC_TO_ROMAN_NUMERALS.reduce((currentInRoman, [arabic, roman]) => {
    const times = currentInArabic / arabic;
    currentInArabic = currentInArabic % arabic;

    return currentInRoman + roman.repeat(times);
  }, '')
};
