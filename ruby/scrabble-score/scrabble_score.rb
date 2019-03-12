class Scrabble
  def self.score(word)
    Scrabble.new(word).score
  end

  def initialize(word)
    @word = word
  end

  def score
    return 0 if word.nil?

    word.scan(/[a-z]/i).reduce(0) do |total_score, chr|
      total_score + point(chr)
    end
  end

  private

  attr_reader :word

  def point(chr)
    case chr
    when /[aeioulnrst]/i
      1
    when /[dg]/i
      2
    when /[bcmp]/i
      3
    when /[fhvwy]/i
      4
    when /[k]/i
      5
    when /[jx]/i
      8
    when /[qz]/i
      10
    end
  end
end