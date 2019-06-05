class Proverb
  def initialize(*inputs, qualifier: "")
    @inputs = inputs
    @qualifier = qualifier
  end

  def to_s
    "".tap do |proverb|
      inputs.each_cons(2) do |words|
        proverb << sentence(*words)
      end

      proverb << last_sentence
    end
  end

  private

  attr_reader :inputs, :qualifier

  def sentence(first, second)
    "For want of a #{first} the #{second} was lost.\n"
  end

  def last_sentence
    s = qualifier.empty? ? inputs.first : qualifier.concat(" #{inputs.first}")
    "And all for the want of a #{s}."
  end
end
