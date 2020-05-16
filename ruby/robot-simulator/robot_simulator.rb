require "matrix"

class Robot
  DIRECTIONS = [:north, :east, :south, :west]
  DIRECTION_TO_VECTOR = {
    north: Vector[0, 1],
    east: Vector[1, 0],
    south: Vector[0, -1],
    west: Vector[-1, 0]
  }

  attr_reader :bearing
  attr_accessor :coordinates

  def turn_right
    index = DIRECTIONS.index(bearing) + 1
    orient DIRECTIONS[index % DIRECTIONS.length]
  end

  def turn_left
    index = DIRECTIONS.index(bearing) - 1
    orient DIRECTIONS[index % DIRECTIONS.length]
  end

  def orient(direction)
    raise ArgumentError unless DIRECTIONS.include?(direction)

    @bearing = direction
  end

  def at(x, y)
    @coordinates = [x, y]
  end

  def advance
    current = Vector[*@coordinates]
    @coordinates = (current + DIRECTION_TO_VECTOR[bearing]).to_a
  end
end

class Simulator
  INSTRUCTIONS_TO_METHOD = {
    'L' => :turn_left,
    'R' => :turn_right,
    'A' => :advance
  }

  def place(robot, x:, y:, direction:)
    robot.coordinates = [x, y]
    robot.orient direction
  end

  def evaluate(robot, serie_of_instructions)
    instructions(serie_of_instructions).each do |method_name|
      robot.method(method_name).call
    end
  end

  def instructions(serie_of_instructions)
    serie_of_instructions
      .each_char
      .map(&INSTRUCTIONS_TO_METHOD)
  end
end
