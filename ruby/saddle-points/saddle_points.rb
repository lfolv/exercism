class Matrix
  def initialize(matrix)
    @matrix = matrix
  end

  def self.parse(line)
    line.split(' ').map(&:to_i)
  end

  def rows
    matrix
      .split("\n")
      .map { |line| Matrix.parse(line) }
  end

  def columns
    rows.transpose
  end

  def saddle_points
    []
  end

  private
  attr_reader :matrix
end