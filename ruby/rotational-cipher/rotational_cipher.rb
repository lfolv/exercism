module RotationalCipher
  LETTERS = %W{a b c d e f g h i j k l m n o p q r s t u v w x y z}
  LETTER = /[a-zA-Z]/

  def self.rotate(text, key)
    text.gsub(LETTER) { |letter| rotate_letter(letter, key) }
  end

  def self.rotate_letter(letter, key)
    return rotate_letter(letter.downcase, key).upcase if letter == letter.upcase

    LETTERS[(LETTERS.index(letter) + key) % LETTERS.length]
  end
end
