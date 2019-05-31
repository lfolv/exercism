from string import ascii_uppercase

def is_isogram(string):
  chrs = []
  for c in string.upper():
    if c in ascii_uppercase:
      if c in chrs:
        return False
      chrs.append(c)
  return True
