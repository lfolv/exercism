from string import ascii_uppercase

def is_isogram(string):
  chrs = string.upper().replace(' ', '').replace('-', '')
  return all(chrs.index(chr) == index for index, chr in enumerate(chrs))
