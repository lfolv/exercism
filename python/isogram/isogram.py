def is_isogram(string):
  chrs = []
  for c in string.upper():
    if c in chrs:
      return False
    chrs.append(c)
  return True
