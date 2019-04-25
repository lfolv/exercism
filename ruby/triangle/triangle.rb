class Triangle
  def initialize(sides)
    @sides = sides
  end

  def equilateral?
    return false if sides.all?(&:zero?)
    sides[0] == sides[1] && sides[0] == sides[2]
  end

  def isosceles?
    return false if sides.count(1) == 2
    sides[0] == sides[1] || sides[0] == sides[2] || sides[1] == sides[2]
  end

  private

  attr_reader :sides
end
