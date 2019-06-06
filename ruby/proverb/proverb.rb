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

  def to_sentence(for_want_of, lost)
    "For want of a #{for_want_of} the #{lost} was lost.\n"
  end

  def last_sentence
    "And all for the want of a #{all_for_the_want_of}."
  end

  def all_for_the_want_of
    qualifier.empty? ? inputs.first : "#{qualifier} #{inputs.first}"
  end
end
