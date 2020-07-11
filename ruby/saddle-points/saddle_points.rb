class Matrix
  def initialize(matrix)
    @matrix = matrix
  end

  def rows
    matrix
      .split("\n")
      .map { |line| line.split(' ').map(&:to_i) }
  end

  private
  attr_reader :matrix
end