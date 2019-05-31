def is_isogram(string):
  chrs = []
  for c in string:
    if c in chrs:
      return False
    chrs.append(c)
  return True
