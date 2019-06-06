class Proverb
  def initialize(*items, qualifier: "")
    @items = items
    @qualifier = qualifier
  end

  def to_s
    want_and_losses
      .map { |words| to_sentence(*words) }
      .join("\n")
      .concat("\n#{last_sentence}")
  end

  private

  attr_reader :items, :qualifier

  def want_and_losses
    items.each_cons(2)
  end

  def to_sentence(for_want_of, what_was_lost)
    "For want of a #{for_want_of} the #{what_was_lost} was lost."
  end

  def last_sentence
    "And all for the want of a #{all_for_the_want_of}."
  end

  def all_for_the_want_of
    qualifier.empty? ? items.first : "#{qualifier} #{items.first}"
  end
end
