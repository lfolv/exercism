class Proverb
  def initialize(*inputs)
    @inputs = inputs
  end

  def to_s
    """For want of a nail the shoe was lost.
And all for the want of a nail."""
  end

  private

  attr_reader :inputs
end
