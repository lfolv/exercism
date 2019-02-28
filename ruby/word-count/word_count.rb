class Phrase
  def initialize(phrase)
    @phrase = phrase
  end

  def word_count
    words.each_with_object(Hash.new(0)) do |word, result|
      result[word] += 1
    end
  end

  private
  attr_reader :phrase

  def words
    phrase.downcase.scan(/\w+(?:'?\w+)*/)
  end
end