class Triangle
  def initialize(sides)
    @sides = sides
  end

  def equilateral?
    return false if invalid?

    unique_sides == 1
  end

  def isosceles?
    return false if invalid?

    unique_sides <= 2
  end

  def scalene?
    return false if invalid?

    unique_sides == 3
  end

  private

  attr_reader :sides

  def invalid?
    a, b, c = sides.sort
    sides.any?(&:zero?) || a + b < c
  end

  def unique_sides
    sides.uniq.length
  end
end
