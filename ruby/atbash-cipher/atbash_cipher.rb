class String
  def remove_no_word_characters
    self.gsub(/[\s,.]/, '')
  end

  def split_in_groups_of(length)
    self
      .each_char
      .each_slice(5)
      .map { |chrs| chrs.join('') }
  end
end

module Atbash
  LENGTH = 5

  def self.encode(message)
    message
      .downcase
      .remove_no_word_characters
      .gsub(/[a-z]/) { |chr| ('a'.ord + 'z'.ord - chr.ord).chr }
      .split_in_groups_of(LENGTH)
      .join(' ')
  end
end