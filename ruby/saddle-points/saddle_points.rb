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
    result = []

    rows.each.with_index do |values, row_index|
      values.each.with_index do |_, column_index|
        result << [row_index, column_index] if is_saddle_point(row_index, column_index)
      end
    end

    result
  end

  private

  attr_reader :matrix

  def is_saddle_point(row_index, column_index)
    value = rows[row_index][column_index]
    rows[row_index].max == value && columns[column_index].min == value
  end
end