class Proverb
  def initialize(*inputs, qualifier: "")
    @inputs = inputs
    @qualifier = qualifier
  end

  def to_s
    "".tap do |proverb|
      inputs.each_cons(2) do |words|
        proverb << "For want of a #{words.first} the #{words.last} was lost.\n"
      end

      if qualifier.empty?
        proverb << "And all for the want of a #{inputs.first}."
      else
        proverb << "And all for the want of a #{qualifier} #{inputs.first}."
      end
    end
  end

  private

  attr_reader :inputs, :qualifier
end
