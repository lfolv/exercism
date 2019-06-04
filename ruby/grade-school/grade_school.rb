class School

  def initialize
    @grades = Hash.new { |hash, key| hash[key] = [] }
  end

  def students(grade)
    grades[grade]
  end

  def add(name, grade)
    grades[grade] << name
  end

  private

  attr_reader :grades
end
