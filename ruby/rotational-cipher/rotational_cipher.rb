module RotationalCipher
  CHARACTERS = %W{a b c d e f g h i j k l m n o p q r s t u v w x y z}

  def self.rotate(text, key)
    text
      .gsub(/[a-z]/) { |chr| rotate_character(chr, key) }
      .gsub(/[A-Z]/) { |chr| rotate_character(chr.downcase, key).upcase }
  end

  def self.rotate_character(chr, key)
    CHARACTERS[(CHARACTERS.index(chr) + key) % CHARACTERS.length]
  end
end
