class Pangram
  ALPHABET = %w{A B C D E F G H I J K L M N O P Q R S T U V W X Y Z}

  def self.pangram?(sentence)
    current_sentence = sentence.upcase
    ALPHABET.all? { |char| current_sentence.include? char }
  end
end