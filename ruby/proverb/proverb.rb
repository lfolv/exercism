class Proverb
  def initialize(*inputs, qualifier: "")
    @inputs = inputs
    @qualifier = qualifier
  end

  def to_s
    inputs
      .each_cons(2)
      .map { |words| to_sentence(*words) }
      .join
      .concat(last_sentence)
  end

  private

  attr_reader :inputs, :qualifier

  def to_sentence(first, second)
    "For want of a #{first} the #{second} was lost.\n"
  end

  def last_sentence
    s = qualifier.empty? ? inputs.first : "#{qualifier} #{inputs.first}"
    "And all for the want of a #{s}."
  end
end
