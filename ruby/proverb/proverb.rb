class Proverb
  def initialize(*inputs)
    @inputs = inputs
  end

  def to_s
    "".tap do |proverb|
      inputs.each_cons(2) do |words|
        proverb << "For want of a #{words.first} the #{words.last} was lost.\n"
      end
      proverb << "And all for the want of a #{inputs.first}."
    end
  end

  private

  attr_reader :inputs
end
