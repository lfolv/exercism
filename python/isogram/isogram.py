
def is_isogram(string):
  chrs = string.upper().replace(' ', '').replace('-', '')
  used_chrs = set(chrs)
  return len(chrs) == len(used_chrs)
