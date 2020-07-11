class Matrix
  def initialize(matrix)
    @matrix = matrix
  end

  def rows
    matrix
      .split("\n")
      .map { |line| line.split(' ').map(&:to_i) }
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