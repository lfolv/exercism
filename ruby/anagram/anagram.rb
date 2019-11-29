module StringHelpers
  refine String do
    def sort
      self.chars.sort.join
    end
  end
end

class Anagram
  using StringHelpers

  def initialize(word)
    @word = word.downcase
  end

  def match(words)
    words
      .select { |other_word| anagram?(other_word.downcase) } 
  end

  private
    attr_reader :word

    def anagram?(other_word)
      return false if other_word == word

      return false unless word.size == other_word.size

      other_word.sort == word.sort
    end
end
