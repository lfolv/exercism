class Matrix
  def initialize(matrix)
    @matrix = matrix
  end

  def rows
    @rows ||= from_matrix_representation
  end

  def columns
    @columns ||= rows.transpose
  end

  private

  attr_reader :matrix

  def from_matrix_representation
    matrix.each_line.map do |line|
      line.split.map(&:to_i)
    end
  end
end