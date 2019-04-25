class Triangle
  def initialize(sides)
    @sides = sides
  end

  def equilateral?
    return false if invalid?
    sides[0] == sides[1] && sides[0] == sides[2]
  end

  def isosceles?
    return false if invalid? || sides.count(1) == 2
    sides[0] == sides[1] || sides[0] == sides[2] || sides[1] == sides[2]
  end

  def scalene?
    return false if invalid?
    sides[0] != sides[1] && sides[0] != sides[2]
  end

  private

  attr_reader :sides

  def invalid?
    a, b, c = sides.sort
    a.zero? || b.zero? || c.zero? || a + b < c
  end
end
