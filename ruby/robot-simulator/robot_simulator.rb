class Robot
  DIRECTIONS = [:north, :east, :south, :west]

  attr_reader :bearing
  attr_accessor :coordinates

  def turn_right
    index = DIRECTIONS.index(bearing) + 1
    orient DIRECTIONS[index % DIRECTIONS.length]
  end

  def turn_left
    case bearing
    when :north
      orient :west
    when :east
      orient :north
    when :south
      orient :east
    when :west
      orient :south
    end
  end

  def orient(direction)
    raise ArgumentError unless DIRECTIONS.include?(direction)

    @bearing = direction
  end

  def at(x, y)
    @coordinates = [x, y]
  end

  def advance
    x, y = @coordinates

    case bearing
    when :north
      @coordinates = [x, y + 1]
    when :east
      @coordinates = [x + 1, y]
    when :south
      @coordinates = [x, y - 1]
    when :west
      @coordinates = [x - 1, y]
    end
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
