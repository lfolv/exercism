module Atbash
  ALPHABET = [*'a'..'z']
  MAP = ALPHABET.zip(ALPHABET.reverse).to_h

  def self.encode(plaintext)
    plaintext
      .downcase
      .scan(/[a-z0-9]/)
      .map { |chr| MAP.has_key?(chr) ? MAP[chr] : chr }
      .each_slice(5)
      .map { |chrs| chrs.join('') }
      .join(' ')
  end
end