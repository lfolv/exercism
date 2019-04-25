class Triangle
  def initialize(sides)
    @sides = sides
  end

  def equilateral?
    return false if illegal?
    sides[0] == sides[1] && sides[0] == sides[2]
  end

  private

  attr_reader :sides

  def illegal?
    sides.all?(&:zero?)
  end
end
