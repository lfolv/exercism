
def is_isogram(string):
  chrs = string.upper().replace(' ', '').replace('-', '')
  uniq_chrs = set(chrs)
  return len(chrs) == len(uniq_chrs)
